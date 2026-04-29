/* About hero — the meta IS the visual element.
   Left: breadcrumb, headline, two intro paragraphs.
   Right: a 2x2 grid of large editorial stats that doubles as the
   visual anchor of the right column. Sharp 2px corners, hairline
   rules dividing each cell, brand pink for the value numerals.
   Bottom: 3-CTA row, same pattern as Portfolio hero. */

const AboutHero = () => {
  const stats = [
    { k: 'Founded',       v: '2005' },
    { k: 'Sites shipped', v: '100+' },
    { k: 'Offices',       v: 'Eugene\u2009· Detroit', smaller: true },
    { k: 'Building sites for', v: '20 years' },
  ];

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Soft ambient pink wash */}
      <div style={{
        position: 'absolute',
        top: -200, right: -300,
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(211,50,106,0.05) 0%, transparent 65%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <Nav onDark />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 60 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: 80,
          alignItems: 'stretch',
          paddingBottom: 80,
        }}>
          {/* LEFT — editorial column */}
          <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <span className="eyebrow" data-on="dark" style={{ color: 'rgba(247,245,243,0.55)' }}>
                Who we are
              </span>
              <span style={{ color: 'var(--accent-on-dark)', fontSize: 12 }}>/</span>
              <span className="eyebrow" data-on="dark" style={{ color: 'var(--light)' }}>
                About
              </span>
            </div>

            <h1 style={{
              fontSize: 96,
              lineHeight: 1.0,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Making websites{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>work.</span>
            </h1>

            <p style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: 'rgba(247,245,243,0.88)',
              margin: '40px 0 20px',
              maxWidth: 620,
              textWrap: 'pretty',
            }}>
              9 Planets Web Design is a small agency, started in 2005. We enjoy working
              with and promoting small businesses. That focus lets us build close
              partnerships with the people we serve and really get to know how their
              businesses work.
            </p>
            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(247,245,243,0.65)',
              margin: '0',
              maxWidth: 620,
              textWrap: 'pretty',
            }}>
              Which, in turn, lets us hand back custom solutions that fit their needs
              and their budgets, not someone else's template.
            </p>
          </div>

          {/* RIGHT — 2x2 stats grid (the visual element).
              Each cell: small eyebrow label up top, large numeric value
              centered below, hairline divider rules between cells. */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            border: '1px solid var(--rule-dark)',
            position: 'relative',
            alignSelf: 'stretch',
            minHeight: 460,
          }}>
            {stats.map((s, i) => {
              const col = i % 2;
              const row = Math.floor(i / 2);
              return (
                <div key={i} style={{
                  padding: '32px 32px 28px',
                  borderRight: col === 0 ? '1px solid var(--rule-dark)' : 'none',
                  borderBottom: row === 0 ? '1px solid var(--rule-dark)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  background: i === 1 ? 'rgba(211,50,106,0.04)' : 'transparent',
                }}>
                  <div className="eyebrow" data-on="dark" style={{
                    color: 'var(--accent-on-dark)',
                  }}>
                    {s.k}
                  </div>

                  <div style={{
                    fontSize: s.smaller ? 24 : 48,
                    lineHeight: 1.0,
                    letterSpacing: s.smaller ? '-0.018em' : '-0.028em',
                    fontWeight: 400,
                    color: 'var(--light)',
                    fontVariantNumeric: 'tabular-nums',
                    fontFeatureSettings: '"ss01", "cv11"',
                    marginTop: 24,
                    textWrap: 'balance',
                  }}>
                    {s.v}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip — same pattern as other heroes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(247,245,243,0.12)',
        }}>
          {[
            { label: 'Our services',    sub: 'See what we do',         href: 'Website Design and Development.html' },
            { label: 'Recent work',     sub: "Sites we've shipped",    href: 'Portfolio.html' },
            { label: 'Start a project', sub: 'Tell us what you need',  href: '#start' },
          ].map((cta, i) => (
            <a key={i} href={cta.href} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '28px 32px 28px 0',
              paddingLeft: i === 0 ? 0 : 32,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-dark)',
              color: 'var(--light)',
              transition: 'background .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 4 }}>{cta.label}</div>
                <div style={{ fontSize: 13, color: 'rgba(247,245,243,0.7)' }}>{cta.sub}</div>
              </div>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ color: 'var(--accent)', flexShrink: 0 }}>
                <path d="M4 11h13M12 6l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" fill="none" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

window.AboutHero = AboutHero;
