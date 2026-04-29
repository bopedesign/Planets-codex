const BlogPostHero = () => {
  const viewport = useResponsive();

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Nav onDark />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          paddingTop: viewport.isMobile ? 40 : 72,
          paddingBottom: viewport.isMobile ? 48 : 64,
          maxWidth: 1280,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(247,245,243,0.7)',
            marginBottom: viewport.isMobile ? 28 : 36,
            flexWrap: 'wrap',
          }}>
            <span>9 Planets</span>
            <span style={{ color: 'var(--accent-on-dark)' }}>/</span>
            <a href="Blog.html" style={{ color: 'rgba(247,245,243,0.78)' }}>Blog</a>
            <span style={{ color: 'var(--accent-on-dark)' }}>/</span>
            <span style={{ color: 'var(--light)' }}>Accessibility</span>
          </div>

          <div style={{ maxWidth: 980 }}>
            <h1 style={{
              fontSize: pickResponsive(viewport, 80, 60, 44),
              lineHeight: viewport.isMobile ? 1.03 : 0.99,
              letterSpacing: '-0.032em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
              maxWidth: 920,
            }}>
              WCAG 2.2 in plain English: what <span style={{ fontStyle: 'italic', fontWeight: 300 }}>changed</span>, and what it means for your site.
            </h1>

            <p style={{
              fontSize: viewport.isMobile ? 19 : 20,
              lineHeight: 1.55,
              color: 'rgba(247,245,243,0.72)',
              margin: viewport.isMobile ? '28px 0 0' : '36px 0 0',
              maxWidth: 760,
              textWrap: 'pretty',
            }}>
              AAA, AA, A — the alphabet soup of web accessibility just got a refresh. Here's
              a working translator: nine new criteria, why they exist, and how to know if
              you're already meeting them without realizing it.
            </p>
          </div>

          <div style={{
            marginTop: viewport.isMobile ? 36 : 56,
            paddingTop: 24,
            borderTop: '1px solid rgba(247,245,243,0.10)',
            display: 'grid',
            gridTemplateColumns: viewport.isTablet ? '1fr' : '1.3fr auto',
            gap: viewport.isMobile ? 20 : 32,
            alignItems: 'center',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: viewport.isMobile ? 'column' : 'row',
              alignItems: viewport.isMobile ? 'flex-start' : 'center',
              gap: viewport.isMobile ? 18 : 20,
            }}>
              <div style={{
                width: 54,
                height: 54,
                background: 'linear-gradient(135deg, var(--accent) 0%, #9f4a6f 100%)',
                color: 'var(--light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: '-0.03em',
                flexShrink: 0,
              }}>
                AM
              </div>

              <div style={{
                display: 'flex',
                flexDirection: viewport.isMobile ? 'column' : 'row',
                alignItems: viewport.isMobile ? 'flex-start' : 'center',
                gap: viewport.isMobile ? 8 : 18,
                color: 'rgba(247,245,243,0.66)',
                fontSize: 14,
              }}>
                <div>
                  <div style={{ color: 'var(--light)', fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>Annie Middleton</div>
                  <div>Accessibility Lead</div>
                </div>
                {!viewport.isMobile && <span style={{ width: 1, height: 34, background: 'rgba(247,245,243,0.10)' }} />}
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <span>April 18, 2026</span>
                  <span style={{ opacity: 0.45 }}>•</span>
                  <span>9 min read</span>
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: 10,
              justifyContent: viewport.isTablet ? 'flex-start' : 'flex-end',
            }}>
              {['⤴', 'in', 'X'].map((label) => (
                <button key={label} type="button" style={{
                  width: 42,
                  height: 42,
                  border: '1px solid rgba(247,245,243,0.12)',
                  color: 'rgba(247,245,243,0.75)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: label === '⤴' ? 18 : 13,
                  fontWeight: 500,
                }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.BlogPostHero = BlogPostHero;
