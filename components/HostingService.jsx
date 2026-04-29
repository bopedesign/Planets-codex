/* Hosting Service Area — "Serving Lane County" cities grid.
   Dark band between the light Features and light GetStarted sections, so
   the page has alternating tonal rhythm. Cities render as small chip cards
   in a 4-column grid with a pin glyph and city name. */

const HostingService = () => {
  const viewport = useResponsive();
  const cities = [
    { name: 'Eugene',        primary: true },
    { name: 'Springfield' },
    { name: 'Junction City' },
    { name: 'Coburg' },
    { name: 'Corvallis' },
    { name: 'Creswell' },
    { name: 'Lebanon' },
    { name: 'Albany' },
    { name: 'Cottage Grove' },
    { name: 'Oakridge' },
  ];

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '110px 0 110px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Soft glow behind the title to lift it off the dark */}
      <div style={{
        position: 'absolute',
        top: -180, left: '40%',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(240,221,208,0.06) 0%, transparent 65%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1.4fr 1fr',
          gap: viewport.isMobile ? 24 : 80,
          alignItems: 'end',
          marginBottom: 70,
        }}>
          <div>
            <div className="eyebrow" data-on="dark" style={{ marginBottom: 22 }}>Service Area</div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 60, 48, 34),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Hosting <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-on-dark)' }}>across Lane County</span> and beyond.
            </h2>
          </div>
          <p style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(247,245,243,0.78)',
            margin: 0,
            maxWidth: 420,
            paddingBottom: 8,
          }}>
            We host sites for businesses up and down the Willamette Valley. If your customers are local, your hosting may as well be local too.
          </p>
        </div>

        {/* Cities grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : viewport.isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-dark)',
          borderLeft: '1px solid var(--rule-dark)',
        }}>
          {cities.map((c, i) => (
            <div key={i} style={{
              borderRight: '1px solid var(--rule-dark)',
              borderBottom: '1px solid var(--rule-dark)',
              padding: '34px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: c.primary ? 'rgba(247,225,213,0.04)' : 'transparent',
            }}>
              {/* Pin */}
              <svg width="20" height="26" viewBox="0 0 20 26" fill="none" style={{ flexShrink: 0 }}>
                <path d="M10 1 C5 1 1 5 1 10 C1 17 10 25 10 25 C10 25 19 17 19 10 C19 5 15 1 10 1 Z"
                  stroke={c.primary ? 'var(--accent-on-dark)' : 'rgba(247,245,243,0.5)'}
                  strokeWidth="1.4" fill="none" />
                <circle cx="10" cy="10" r="3"
                  fill={c.primary ? 'var(--accent-on-dark)' : 'none'}
                  stroke={c.primary ? 'var(--accent-on-dark)' : 'rgba(247,245,243,0.5)'}
                  strokeWidth="1.4" />
              </svg>
              <div>
                {c.primary && (
                  <div style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-on-dark)',
                    marginBottom: 4,
                  }}>
                    Home base
                  </div>
                )}
                <div style={{
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: '-0.015em',
                  color: 'var(--light)',
                }}>
                  {c.name}
                </div>
              </div>
            </div>
          ))}
          {/* Trailing "...and beyond" cell to fill the 11th-12th cells of a 5-col grid */}
          <div style={{
            borderRight: '1px solid var(--rule-dark)',
            borderBottom: '1px solid var(--rule-dark)',
            padding: '34px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gridColumn: 'span 2',
          }}>
            <div style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(247,245,243,0.5)',
              marginBottom: 6,
            }}>
              + Anywhere with internet
            </div>
            <div style={{
              fontSize: 16,
              lineHeight: 1.5,
              fontWeight: 400,
              color: 'rgba(247,245,243,0.78)',
              maxWidth: 360,
            }}>
              Local roots, but our hosting reaches every visitor your site does. Clients across the country host with us too.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.HostingService = HostingService;
