import { mkdir, readFile, readdir, rm, writeFile, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(distDir, 'assets');

const BABEL_SRC_RE = /<script\s+type="text\/babel"\s+src="([^"]+)"><\/script>/g;
const INLINE_BABEL_RE = /<script\s+type="text\/babel">([\s\S]*?)<\/script>/;
const REMOVE_RE = [
  /<script[^>]+src="https:\/\/unpkg\.com\/react@[^"]+"[^>]*><\/script>\s*/g,
  /<script[^>]+src="https:\/\/unpkg\.com\/react-dom@[^"]+"[^>]*><\/script>\s*/g,
  /<script[^>]+src="https:\/\/unpkg\.com\/@babel\/standalone@[^"]+"[^>]*><\/script>\s*/g,
  /<script\s+type="application\/json"\s+id="speaker-notes">[\s\S]*?<\/script>\s*/g,
  /<script\s+type="text\/babel"\s+src="[^"]+"><\/script>\s*/g,
  /<script\s+type="text\/babel">[\s\S]*?<\/script>\s*/g,
];

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

async function getPageFiles() {
  const entries = await readdir(rootDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
    .map((entry) => entry.name)
    .sort();
}

async function buildBundle(pageFile, htmlSource) {
  const componentPaths = [...htmlSource.matchAll(BABEL_SRC_RE)].map((match) => match[1]);
  const inlineMatch = htmlSource.match(INLINE_BABEL_RE);

  if (!componentPaths.length) {
    throw new Error(`Could not extract JSX scripts from ${pageFile}`);
  }

  const bundledParts = [
    `import React from "react";`,
    `import { createRoot } from "react-dom/client";`,
    `const ReactDOM = { createRoot };`,
  ];

  for (const componentPath of componentPaths) {
    const absolutePath = path.join(rootDir, componentPath);
    bundledParts.push(await readFile(absolutePath, 'utf8'));
  }

  if (inlineMatch) {
    bundledParts.push(inlineMatch[1].trim());
  }

  const result = await esbuild.build({
    stdin: {
      contents: bundledParts.join('\n\n'),
      resolveDir: rootDir,
      sourcefile: pageFile.replace(/\.html$/i, '.entry.jsx'),
      loader: 'jsx',
    },
    bundle: true,
    format: 'esm',
    minify: true,
    write: false,
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    target: ['es2020'],
  });

  const bundleFileName = `${slugify(pageFile)}.js`;
  await writeFile(path.join(assetsDir, bundleFileName), result.outputFiles[0].text, 'utf8');

  return `assets/${bundleFileName}`;
}

async function buildPage(pageFile) {
  const sourcePath = path.join(rootDir, pageFile);
  const htmlSource = await readFile(sourcePath, 'utf8');
  const bundlePath = await buildBundle(pageFile, htmlSource);

  let transformedHtml = htmlSource;
  for (const pattern of REMOVE_RE) {
    transformedHtml = transformedHtml.replace(pattern, '');
  }

  const bundleScript = `  <script type="module" src="${escapeTemplateContent(bundlePath)}"></script>\n`;
  transformedHtml = transformedHtml.replace('</body>', `${bundleScript}</body>`);

  await writeFile(path.join(distDir, pageFile), transformedHtml, 'utf8');

  if (pageFile === 'Home.html') {
    await writeFile(path.join(distDir, 'index.html'), transformedHtml, 'utf8');
  }
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(assetsDir, { recursive: true });

  const pageFiles = await getPageFiles();
  await Promise.all(pageFiles.map((pageFile) => buildPage(pageFile)));

  for (const dirName of ['images', 'assets']) {
    await cp(path.join(rootDir, dirName), path.join(distDir, dirName), { recursive: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
