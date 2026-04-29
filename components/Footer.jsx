const Footer = () => {
  const viewport = useResponsive();
  return (
    <footer style={{ background: 'var(--dark)', color: 'var(--light)', padding: viewport.isMobile ? '64px 0 32px' : '80px 0 40px' }}>
      <div className="wrap">
        {/* Top: giant CTA */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1.6fr 1fr',
          gap: viewport.isMobile ? 24 : 60,
          alignItems: 'end',
          paddingBottom: 60,
          borderBottom: '1px solid var(--rule-dark)',
        }}>
          <h2 style={{
            fontSize: pickResponsive(viewport, 64, 52, 38),
            lineHeight: 1.02,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
          }}>
            Ready to build a<br />
            website that <span style={{ fontStyle: 'italic', fontWeight: 300 }}>works</span>?
          </h2>
          <div style={{ display: 'flex', flexDirection: viewport.isMobile ? 'column' : 'row', gap: 12, paddingBottom: 12, justifyContent: viewport.isTablet ? 'flex-start' : 'flex-end' }}>
            <a href="#" className="btn btn-light">
              <span>Start a project</span>
              <span className="arrow">→</span>
            </a>
            <a href="#" className="btn btn-ghost-dark">
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* Mid: links + contact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : viewport.isTablet ? 'repeat(2, 1fr)' : '2fr 1fr 1fr 1fr',
          gap: viewport.isMobile ? 28 : 48,
          padding: '60px 0 40px',
        }}>
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <img src="images/logo.png" alt="9 Planets" style={{ height: 77, width: 'auto', display: 'block' }} />
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(247,245,243,0.75)', margin: 0, maxWidth: 340 }}>
              Websites, marketing, and support for small businesses across Oregon and beyond. Based in Eugene since 2011.
            </p>
          </div>

          {[
            {
              title: 'Services',
              links: [
                { label: 'Website Design & Dev', href: 'Website Design and Development.html' },
                { label: 'Digital Marketing & SEO', href: 'Digital Marketing and SEO.html' },
                { label: 'Accessibility', href: 'Website Accessibility.html' },
                { label: 'Tech Support', href: 'Tech Support and Security.html' },
                { label: 'Hosting & Domains', href: 'Hosting and Domains.html' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: 'About.html' },
                { label: 'Portfolio', href: 'Portfolio.html' },
                { label: 'Blog', href: 'Blog.html' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: 'hello@nineplanets.co', href: '#' },
                { label: '541-555-0142', href: '#' },
                { label: 'Eugene, OR', href: '#' },
                { label: 'Schedule a consult', href: '#' },
                { label: 'LinkedIn', href: '#' },
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <div style={{
                fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--accent-on-dark)', marginBottom: 20,
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                {col.links.map((l, j) => (
                  <a key={j} href={l.href} style={{ color: 'rgba(247,245,243,0.85)', transition: 'color .15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-on-dark)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,245,243,0.85)'}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social icons + legal links + copyright */}
        <div style={{
          borderTop: '1px solid var(--rule-dark)',
          paddingTop: 28,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {/* Top row: utility links left, social right */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              fontSize: 13,
              color: 'rgba(247,245,243,0.7)',
            }}>
              {[
                { label: 'Sitemap',                 href: '#' },
                { label: 'Terms of Service',        href: '#' },
                { label: 'Development Guarantee',   href: '#' },
                { label: 'Hosting MSA',             href: '#' },
                { label: 'Privacy Policy',          href: '#' },
                { label: 'Accessibility Statement', href: '#' },
                { label: 'Cookie Policy',           href: '#' },
              ].map((l) => (
                <a key={l.label} href={l.href} style={{
                  color: 'rgba(247,245,243,0.7)',
                  transition: 'color .15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-on-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,245,243,0.7)')}>
                  {l.label}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <a href="#" aria-label="Facebook" style={{
                width: 32, height: 32,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(247,245,243,0.06)',
                border: '1px solid var(--rule-dark)',
                color: 'var(--light)',
                transition: 'background .15s ease, color .15s ease, border-color .15s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(247,245,243,0.10)'; e.currentTarget.style.color = 'var(--accent-on-dark)'; e.currentTarget.style.borderColor = 'var(--accent-on-dark)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(247,245,243,0.06)'; e.currentTarget.style.color = 'var(--light)'; e.currentTarget.style.borderColor = 'var(--rule-dark)'; }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H7.7v3.1h2.7V22h3.1z"/></svg>
              </a>
              <a href="#" aria-label="Google Business" style={{
                width: 32, height: 32,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(247,245,243,0.06)',
                border: '1px solid var(--rule-dark)',
                color: 'var(--light)',
                transition: 'background .15s ease, color .15s ease, border-color .15s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(247,245,243,0.10)'; e.currentTarget.style.color = 'var(--accent-on-dark)'; e.currentTarget.style.borderColor = 'var(--accent-on-dark)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(247,245,243,0.06)'; e.currentTarget.style.color = 'var(--light)'; e.currentTarget.style.borderColor = 'var(--rule-dark)'; }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.3-.9 2.3-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6C4.8 19.9 8.1 22 12 22z"/><path d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1C2.4 8.8 2 10.4 2 12s.4 3.2 1.1 4.6L6.4 14z"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 3 14.7 2 12 2 8.1 2 4.8 4.1 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z"/></svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            fontSize: 13,
            color: 'rgba(247,245,243,0.5)',
          }}>
            © 2026 9 Planets. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
