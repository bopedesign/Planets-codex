/* Portfolio page hero — dark band with a big editorial headline on the
   left and an orthogonal stack of two featured project mockups on the
   right that auto-rotates. Sharp 2px corners, hairline borders, brand
   palette only — to match the rest of the site's editorial vibe.
   Ends with a stats strip (projects shipped / years / clients /
   industries) that doubles as the bottom border of the hero. */

const PortfolioHero = () => {
  const viewport = useResponsive();
  // Featured projects, each rendered as a mini website mockup inside a
  // browser frame. Restricted to the brand palette so they don't compete
  // with the rest of the site visually.
  const projects = [
    {
      client: 'Plums Café',
      industry: 'Restaurant · Costa Mesa, CA',
      url: 'plumscafe.com',
      img: 'assets/portfolio-plums-cafe.jpg',
    },
    {
      client: 'Northwest Youth Corps',
      industry: 'Nonprofit · Eugene, OR',
      url: 'nwyouthcorps.org',
      img: 'assets/portfolio-nw-youth-corps.jpg',
    },
    {
      client: 'Michaels Precast Concrete',
      industry: 'Industrial · Boring, OR',
      url: 'michaelsprecast.com',
      img: 'assets/portfolio-michaels-precast.jpg',
    },
  ];

  const [active, setActive] = React.useState(0);
  const [phase, setPhase] = React.useState('idle'); // 'idle' | 'out'
  const timerRef = React.useRef(null);

  const advance = React.useCallback((nextIdx) => {
    if (phase === 'out') return;
    setPhase('out');
    setTimeout(() => {
      setActive(nextIdx != null
        ? nextIdx
        : (a => (a + 1) % projects.length));
      setPhase('idle');
    }, 480);
  }, [phase, projects.length]);

  React.useEffect(() => {
    timerRef.current = setInterval(() => advance(), 5500);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  // Card geometry
  const CARD_W = 760;
  const CARD_H = 500;
  const stackOffset = viewport.isMobile ? 16 : viewport.isTablet ? 24 : 36;
  const cardWidth = viewport.isMobile ? 300 : viewport.isTablet ? 560 : CARD_W;
  const cardHeight = viewport.isMobile ? 198 : viewport.isTablet ? 368 : CARD_H;

  const frontIdx = active;
  const backIdx = (active + 1) % projects.length;

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes pfh-slideIn {
          from { transform: translate(-12px, 8px); opacity: 0; }
          to   { transform: translate(0, 0);       opacity: 1; }
        }
      `}</style>

      {/* Ambient glows */}
      <div style={{
        position: 'absolute',
        top: -200, right: -220,
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(240,221,208,0.08) 0%, transparent 60%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -260, left: -260,
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(211,50,106,0.05) 0%, transparent 65%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <Nav onDark />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 60 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1fr auto',
          gap: viewport.isMobile ? 28 : 60,
          alignItems: 'center',
          paddingBottom: 80,
        }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(247,245,243,0.7)', marginBottom: 28,
            }}>
              <span>Work</span>
              <span style={{ color: 'var(--accent-on-dark)' }}>/</span>
              <span style={{ color: 'var(--light)' }}>Portfolio</span>
            </div>

            <h1 style={{
              fontSize: pickResponsive(viewport, 96, 64, 42),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Fifteen years,<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>still shipping.</span>
            </h1>

            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(247,245,243,0.78)',
              margin: '36px 0 36px',
              maxWidth: 560,
            }}>
              Restaurants, nonprofits, tradespeople, artists, clinics, co-ops — we've built websites for the kinds of businesses that make a place feel like home. Here's a cross-section.
            </p>

            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 16,
              borderTop: '1px solid var(--rule-dark)',
              paddingTop: 20,
              maxWidth: 560,
            }}>
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
                color: 'var(--accent-on-dark)', textTransform: 'uppercase',
                fontVariantNumeric: 'tabular-nums',
              }}>
                Featured · {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <span style={{ flex: 1 }} />
              <span style={{ display: 'flex', gap: 8 }}>
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => advance(i)}
                    aria-label={`Show project ${i + 1}`}
                    style={{
                      width: 24, height: 2, padding: 0, border: 'none',
                      background: i === active ? 'var(--accent-on-dark)' : 'rgba(247,245,243,0.25)',
                      transition: 'background .3s ease',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </span>
            </div>
            <div style={{ marginTop: 18, maxWidth: 560 }}>
              <div style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.018em', color: 'var(--light)' }}>
                {projects[active].client}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(247,245,243,0.6)', marginTop: 4 }}>
                {projects[active].industry}
              </div>
            </div>
          </div>

          {/* Orthogonal 2-card stack — back card peeks out, front card slides on the swap */}
          <div style={{
            position: 'relative',
            width: viewport.isMobile ? '100%' : cardWidth + stackOffset,
            maxWidth: cardWidth + stackOffset,
            height: cardHeight + stackOffset,
            flexShrink: 0,
          }}>
            {/* Back card — next project, hairline outline only */}
            <div
              key={`back-${backIdx}`}
              style={{
                position: 'absolute',
                top: stackOffset,
                right: 0,
                width: cardWidth,
                height: cardHeight,
                border: '1px solid var(--rule-dark)',
                background: 'rgba(29,31,35,0.6)',
                zIndex: 1,
              }}
            >
              {/* faint inner indicator strip so it reads as another site, not just a frame */}
              <div style={{
                margin: '12px 14px 0',
                height: 16,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 5, height: 5, background: 'rgba(247,245,243,0.18)' }} />
                <span style={{ width: 5, height: 5, background: 'rgba(247,245,243,0.18)' }} />
                <span style={{ width: 5, height: 5, background: 'rgba(247,245,243,0.18)' }} />
                <span style={{
                  marginLeft: 12, flex: 1, height: 1,
                  background: 'rgba(247,245,243,0.12)',
                }} />
              </div>
              <div style={{
                position: 'absolute',
                left: 14, right: 14, bottom: 14,
                height: 1, background: 'rgba(247,245,243,0.08)',
              }} />
              <div style={{
                position: 'absolute',
                left: 14, bottom: 28,
                fontSize: 10, fontFamily: "'Inter Tight', sans-serif",
                letterSpacing: '0.15em', color: 'rgba(247,245,243,0.4)',
                textTransform: 'uppercase',
              }}>
                Up next · {projects[backIdx].client}
              </div>
            </div>

            {/* Front card — the live mockup, slides in on swap */}
            <div
              key={`front-${frontIdx}`}
              style={{
                position: 'absolute',
                top: 0,
                right: stackOffset,
                width: cardWidth,
                height: cardHeight,
                background: '#1d1f23',
                border: '1px solid var(--rule-dark)',
                zIndex: 2,
                opacity: phase === 'out' ? 0 : 1,
                transform: phase === 'out' ? 'translate(8px, -4px)' : 'translate(0, 0)',
                transition: 'opacity 480ms ease, transform 480ms cubic-bezier(0.65, 0, 0.35, 1)',
                animation: phase === 'idle' ? 'pfh-slideIn 520ms cubic-bezier(0.16, 1, 0.3, 1) both' : 'none',
              }}
            >
              {/* Browser chrome — sharp corners, hairline */}
              <div style={{
                background: '#1d1f23',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: '1px solid var(--rule-dark)',
              }}>
                <span style={{ width: 8, height: 8, background: '#3a3c40' }} />
                <span style={{ width: 8, height: 8, background: '#3a3c40' }} />
                <span style={{ width: 8, height: 8, background: '#3a3c40' }} />
                <div style={{
                  flex: 1, height: 18,
                  background: 'rgba(247,245,243,0.04)',
                  border: '1px solid var(--rule-dark)',
                  marginLeft: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  color: 'rgba(247,245,243,0.55)',
                  fontFamily: "'Inter Tight', sans-serif",
                  letterSpacing: 0.2,
                }}>
                  {projects[frontIdx].url}
                </div>
              </div>
              <div style={{
                width: '100%',
                height: cardHeight - 38,
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img
                  src={projects[frontIdx].img}
                  alt={projects[frontIdx].client}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip — matches other service page heroes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(247,245,243,0.12)',
        }}>
          {[
            { label: 'About 9 Planets', sub: 'Get to know the team',  href: 'About.html' },
            { label: 'Our services',    sub: 'See what we do',         href: 'Website Design and Development.html' },
            { label: 'Start a project', sub: 'Tell us what you need',  href: '#start' },
          ].map((cta, i) => (
            <a key={i} href={cta.href} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: viewport.isMobile ? '20px 0' : '28px 32px 28px 0',
              paddingLeft: viewport.isMobile ? 0 : i === 0 ? 0 : 32,
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

      <div style={{ height: 0 }} />
    </section>
  );
};

window.PortfolioHero = PortfolioHero;
