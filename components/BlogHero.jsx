/* Blog hero — dark slab matching the rest of the site's service-page hero
   pattern: breadcrumb, headline, intro, then the same 3-column CTA strip
   used on Portfolio. Light, editorial, no decorative graphic. */

const BlogHero = () => {
  const viewport = useResponsive();
  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Photo background — same as home hero */}
      <picture aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'block' }}>
        <source media="(max-width: 767px)" srcSet="images/heroBackground-100-mobile.jpg" />
        <img
          src="images/heroBackground-100.jpg"
          alt=""
          fetchpriority="high"
          loading="eager"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </picture>
      {/* Darkening gradient for legibility on the left */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(20,22,25,0.78) 0%, rgba(20,22,25,0.55) 45%, rgba(20,22,25,0.25) 80%)',
        pointerEvents: 'none',
      }} />
      {/* Magenta accent glow top-right to tie into brand */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: -220, right: -180,
        width: 720, height: 720,
        background: 'radial-gradient(circle, rgba(211,50,106,0.10) 0%, transparent 62%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Nav onDark />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          paddingTop: viewport.isMobile ? 36 : 80,
          paddingBottom: viewport.isMobile ? 44 : 80,
          maxWidth: 980,
        }}>
          {/* Breadcrumb */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(247,245,243,0.7)', marginBottom: 32,
          }}>
            <span>9 Planets</span>
            <span style={{ color: 'var(--accent-on-dark)' }}>/</span>
            <span style={{ color: 'var(--light)' }}>Blog</span>
          </div>

          <h1 style={{
            fontSize: pickResponsive(viewport, 96, 64, 42),
            lineHeight: 1.02,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
          }}>
            What we've learned <span style={{ fontStyle: 'italic', fontWeight: 300 }}>shipping</span> websites.
          </h1>

          <p style={{
            fontSize: viewport.isMobile ? 16 : 18,
            lineHeight: 1.6,
            color: 'rgba(247,245,243,0.78)',
            margin: '36px 0 0',
            maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Twenty years of design, accessibility, hosting, and SEO posts — written by the people doing
            the work, for clients and the next generation of agencies trying to do it well.
          </p>
        </div>

        {/* Bottom CTA strip — same as Portfolio/service pages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(247,245,243,0.12)',
        }}>
          {[
            { label: 'Latest posts',   sub: 'Jump to recent writing', href: '#latest' },
            { label: 'Our services',    sub: 'See what we do',         href: 'Website Design and Development.html' },
            { label: 'Start a project', sub: 'Tell us what you need',  href: '#start' },
          ].map((cta, i) => (
            <a key={i} href={cta.href} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: viewport.isMobile ? '20px 0' : '30px 28px 30px',
              paddingLeft: viewport.isMobile ? 0 : i === 0 ? 0 : 32,
              paddingRight: viewport.isMobile ? 0 : i === 2 ? 0 : 32,
              borderLeft: viewport.isMobile || i === 0 ? 'none' : '1px solid rgba(247,245,243,0.12)',
              borderTop: viewport.isMobile && i > 0 ? '1px solid rgba(247,245,243,0.12)' : 'none',
              color: 'var(--light)',
              transition: 'background .2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              const arrow = e.currentTarget.querySelector('.cta-arrow');
              if (arrow) arrow.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              const arrow = e.currentTarget.querySelector('.cta-arrow');
              if (arrow) arrow.style.transform = 'translateX(0)';
            }}>
              <div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--light)',
                  marginBottom: 8,
                }}>
                  {cta.label}
                </div>
                <div style={{
                  fontSize: 14,
                  color: 'rgba(247,245,243,0.65)',
                  fontWeight: 400,
                }}>
                  {cta.sub}
                </div>
              </div>
              <svg
                className="cta-arrow"
                width="22" height="22" viewBox="0 0 22 22" fill="none"
                style={{
                  color: 'var(--accent)',
                  transition: 'transform .2s ease',
                  flexShrink: 0,
                }}
              >
                <path d="M4 11h13M12 6l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" fill="none" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
