import { mkdir, readFile, readdir, rm, writeFile, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import * as esbuild from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(distDir, 'assets');
const ssrDir = path.join(rootDir, '.ssr');
const RESPONSIVE_GLOBAL_CSS = `
<style>
  body { overflow-x: hidden; }
  @media (max-width: 1180px) {
    .wrap { padding-left: 32px !important; padding-right: 32px !important; }
  }
  @media (max-width: 767px) {
    .wrap { padding-left: 20px !important; padding-right: 20px !important; }
    .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>`;

const STRICT_TYPESCALE_SCRIPT = `
<script>
(() => {
  const MIN_FONT_SIZE = 16;

  const shouldRaise = (el) => {
    if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return false;

    const styles = window.getComputedStyle(el);
    const current = parseFloat(styles.fontSize);
    if (!Number.isFinite(current) || current >= MIN_FONT_SIZE) return false;

    const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
    const interactiveField = ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION', 'BUTTON'].includes(el.tagName);
    return interactiveField || text.length > 0;
  };

  const applyReadableTypeFloor = () => {
    document.querySelectorAll('body *').forEach((el) => {
      if (shouldRaise(el)) {
        el.style.fontSize = MIN_FONT_SIZE + 'px';
      }
    });
  };

  const run = () => window.requestAnimationFrame(applyReadableTypeFloor);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  window.addEventListener('load', run, { once: true });
})();
</script>`;

const BABEL_SRC_RE = /<script\s+type="text\/babel"\s+src="([^"]+)"><\/script>/g;
const INLINE_BABEL_RE = /<script\s+type="text\/babel">([\s\S]*?)<\/script>/;
const ROOT_RE = /<div id="root"><\/div>/;
const GOOGLE_FONT_HREF_RE = /(https:\/\/fonts\.googleapis\.com\/css2\?[^"']+)/g;
const MOUNT_RE = /ReactDOM\.createRoot\(document\.getElementById\((['"])root\1\)\)\.render\(<([A-Za-z0-9_$.]+)\s*\/>\);?/;
const REMOVE_RE = [
  /<script[^>]+src="https:\/\/unpkg\.com\/react@[^"]+"[^>]*><\/script>\s*/g,
  /<script[^>]+src="https:\/\/unpkg\.com\/react-dom@[^"]+"[^>]*><\/script>\s*/g,
  /<script[^>]+src="https:\/\/unpkg\.com\/@babel\/standalone@[^"]+"[^>]*><\/script>\s*/g,
  /<script\s+type="application\/json"\s+id="speaker-notes">[\s\S]*?<\/script>\s*/g,
  /<script\s+type="text\/babel"\s+src="[^"]+"><\/script>\s*/g,
  /<script\s+type="text\/babel">[\s\S]*?<\/script>\s*/g,
];
const PRELOAD_COMPONENTS = new Set([
  'components/HomeHero.jsx',
  'components/BlogHero.jsx',
  'components/QuoteHero.jsx',
]);

function slugify(fileName) {
  return fileName
    .replace(/\.html$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeTemplateContent(value) {
  return value.replace(/<\/script/gi, '<\\/script');
}

function addDisplaySwap(url) {
  return url.includes('display=') ? url : `${url}${url.includes('?') ? '&' : '?'}display=swap`;
}

function transformMount(source, mode) {
  const match = source.match(MOUNT_RE);
  if (!match) {
    return source;
  }

  const componentName = match[2];
  if (mode === 'client') {
    return source.replace(MOUNT_RE, `hydrateRoot(document.getElementById('root'), <${componentName} />);`);
  }

  return source.replace(MOUNT_RE, `export { ${componentName} as App };`);
}

async function getPageFiles() {
  const entries = await readdir(rootDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
    .map((entry) => entry.name)
    .sort();
}

function extractPageScripts(pageFile, htmlSource) {
  const componentPaths = [...htmlSource.matchAll(BABEL_SRC_RE)].map((match) => match[1]);
  const inlineMatch = htmlSource.match(INLINE_BABEL_RE);

  if (!componentPaths.length) {
    throw new Error(`Could not extract JSX scripts from ${pageFile}`);
  }

  return {
    componentPaths,
    inlineScript: inlineMatch ? inlineMatch[1].trim() : null,
  };
}

async function assemblePageSource(pageFile, componentPaths, inlineScript, mode) {
  const prelude = mode === 'client'
    ? [
        'import React from "react";',
        'import { hydrateRoot } from "react-dom/client";',
      ]
    : [
        'import React from "react";',
        'import { renderToString } from "react-dom/server";',
        `globalThis.window = { innerWidth: 1440, location: { pathname: ${JSON.stringify(`/${pageFile}`)} } };`,
        'globalThis.self = window;',
        'globalThis.navigator = { userAgent: "node" };',
      ];

  const parts = [...prelude];

  for (const componentPath of componentPaths) {
    const absolutePath = path.join(rootDir, componentPath);
    const source = await readFile(absolutePath, 'utf8');
    parts.push(transformMount(source, mode));
  }

  if (inlineScript) {
    parts.push(transformMount(inlineScript, mode));
  }

  if (mode === 'ssr') {
    parts.push('export const rootHtml = renderToString(React.createElement(App));');
  }

  return parts.join('\n\n');
}

async function buildBundle(pageFile, source, mode) {
  const result = await esbuild.build({
    stdin: {
      contents: source,
      resolveDir: rootDir,
      sourcefile: pageFile.replace(/\.html$/i, mode === 'client' ? '.client.jsx' : '.ssr.jsx'),
      loader: 'jsx',
    },
    bundle: true,
    format: mode === 'client' ? 'esm' : 'cjs',
    minify: mode === 'client',
    platform: mode === 'client' ? 'browser' : 'node',
    write: false,
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    target: mode === 'client' ? ['es2020'] : ['node18'],
  });

  return result.outputFiles[0].text;
}

function getPreloadLinks(componentPaths) {
  if (!componentPaths.some((componentPath) => PRELOAD_COMPONENTS.has(componentPath))) {
    return '';
  }

  return '  <link rel="preload" as="image" href="images/heroBackground-100.jpg" imagesrcset="images/heroBackground-100-mobile.jpg 700w, images/heroBackground-100.jpg 1600w" imagesizes="100vw" fetchpriority="high">\n';
}

async function buildPage(pageFile) {
  const sourcePath = path.join(rootDir, pageFile);
  const htmlSource = await readFile(sourcePath, 'utf8');
  const { componentPaths, inlineScript } = extractPageScripts(pageFile, htmlSource);

  const clientSource = await assemblePageSource(pageFile, componentPaths, inlineScript, 'client');
  const ssrSource = await assemblePageSource(pageFile, componentPaths, inlineScript, 'ssr');
  const clientBundle = await buildBundle(pageFile, clientSource, 'client');
  const ssrBundle = await buildBundle(pageFile, ssrSource, 'ssr');

  const bundleFileName = `${slugify(pageFile)}.js`;
  const ssrFileName = `${slugify(pageFile)}.cjs`;
  await writeFile(path.join(assetsDir, bundleFileName), clientBundle, 'utf8');
  await writeFile(path.join(ssrDir, ssrFileName), ssrBundle, 'utf8');

  const ssrModulePath = path.join(ssrDir, ssrFileName);
  const resolvedSsrModulePath = require.resolve(ssrModulePath);
  delete require.cache[resolvedSsrModulePath];
  const { rootHtml } = require(resolvedSsrModulePath);

  let transformedHtml = htmlSource;
  for (const pattern of REMOVE_RE) {
    transformedHtml = transformedHtml.replace(pattern, '');
  }

  transformedHtml = transformedHtml.replace(GOOGLE_FONT_HREF_RE, addDisplaySwap);
  transformedHtml = transformedHtml.replace('</head>', `${getPreloadLinks(componentPaths)}${RESPONSIVE_GLOBAL_CSS}\n</head>`);

  if (!ROOT_RE.test(transformedHtml)) {
    throw new Error(`Could not find root container in ${pageFile}`);
  }
  transformedHtml = transformedHtml.replace(ROOT_RE, `<div id="root">${rootHtml}</div>`);

  const typeScaleScript = `${STRICT_TYPESCALE_SCRIPT}\n`;
  const bundleScript = `  <script type="module" src="${escapeTemplateContent(`assets/${bundleFileName}`)}"></script>\n`;
  transformedHtml = transformedHtml.replace('</body>', `${typeScaleScript}${bundleScript}</body>`);

  await writeFile(path.join(distDir, pageFile), transformedHtml, 'utf8');

  if (pageFile === 'Home.html') {
    await writeFile(path.join(distDir, 'index.html'), transformedHtml, 'utf8');
  }
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await rm(ssrDir, { recursive: true, force: true });
  await mkdir(assetsDir, { recursive: true });
  await mkdir(ssrDir, { recursive: true });

  const pageFiles = await getPageFiles();
  for (const pageFile of pageFiles) {
    await buildPage(pageFile);
  }

  for (const dirName of ['images', 'assets']) {
    await cp(path.join(rootDir, dirName), path.join(distDir, dirName), { recursive: true });
  }

  await rm(ssrDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
