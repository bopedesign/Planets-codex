/* Hero for Website Accessibility page.
   Visual concept: a quiet, schematic "focus map" — a sparse grid of UI
   placeholder cells with a single animated focus ring traveling between
   them, evoking keyboard navigation and inclusive interaction. Different
   visual vocabulary from the other service heroes (no atmospheric glows,
   no scrolling text). */
const A11yHero = () => {
  const viewport = useResponsive();
  // Graphic is designed for a FIXED landscape canvas of 640 x 420 px.
  // Upper region (4 cols x 2 rows) holds UI blocks with landscape proportions.
  // Lower region spans the full width and hosts the screen reader readout.
  // The whole graphic is rendered at its natural pixel size — no scaling —
  // so the section height never changes during animation.
  const stops = [
    { x: 0, y: 0, w: 1, h: 1, kind: 'btn',    label: 'Menu',      sr: 'button, navigation menu'          },
    { x: 1, y: 0, w: 2, h: 1, kind: 'input',  label: 'Search',    sr: 'search, edit text'                },
    { x: 3, y: 0, w: 1, h: 1, kind: 'btn',    label: 'Sign in',   sr: 'button, sign in'                  },
    { x: 0, y: 1, w: 2, h: 1, kind: 'card',   label: 'Article',   sr: 'article, three paragraphs'        },
    { x: 2, y: 1, w: 1, h: 1, kind: 'check',  label: 'Accept',    sr: 'checkbox, checked'                },
    { x: 3, y: 1, w: 1, h: 1, kind: 'submit', label: 'Submit',    sr: 'button, primary, submit form'     },
    { x: 0, y: 2, w: 4, h: 1, kind: 'sr',     label: 'SR',        sr: ''                                 },
  ];

  // Landscape cell dimensions — wider than tall, designed for 640 x 420.
  const RECT_W = 148;   // cell unit width
  const RECT_H = 154;   // cell unit height (upper rows) — sized to fill 420
  const SR_H   = 84;    // screen reader strip height (lower row)
  const GAP    = 14;
  const COLS   = 4;
  const PAD    = 0;
  const FRAME_W = COLS * RECT_W + (COLS - 1) * GAP;            // 640
  const FRAME_H = 2 * RECT_H + GAP + GAP + SR_H;               // 154+14+154+14+84 = 420

  const cellRect = (s) => {
    // y: rows 0,1 use RECT_H; row 2 is the SR strip.
    let y;
    let h;
    if (s.y === 2) {
      y = 2 * (RECT_H + GAP);
      h = SR_H;
    } else {
      y = s.y * (RECT_H + GAP);
      h = s.h * RECT_H + (s.h - 1) * GAP;
    }
    return {
      x: s.x * (RECT_W + GAP),
      y,
      w: s.w * RECT_W + (s.w - 1) * GAP,
      h,
    };
  };

  // Focus cycles only through interactive UI cells — not the SR strip.
  const focusStops = stops.filter(s => s.kind !== 'sr');
  const [activeIdx, setActiveIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setActiveIdx(i => (i + 1) % focusStops.length), 1900);
    return () => clearInterval(id);
  }, [focusStops.length]);

  const active = cellRect(focusStops[activeIdx]);
  const activeStop = focusStops[activeIdx];

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: viewport.isTablet ? 'auto' : 825,
    }}>
      {/* Subtle horizontal bands — a faint grid texture that suggests structure
          and reading order, distinct from the radial glows on other heroes. */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(247,245,243,0.018) 0 1px, transparent 1px 56px)',
        pointerEvents: 'none',
      }} />

      {/* Atmospheric glow — sand-toned, anchored bottom-center, very wide and
          very low opacity so it's a quiet floor-light, not a focal blob.
          Position differs from other service pages (top-right pink, top-right
          sand) so the page reads as its own surface. */}
      <div style={{
        position: 'absolute',
        bottom: -380,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1400, height: 700,
        background: 'radial-gradient(ellipse at center, rgba(236,230,226,0.10) 0%, rgba(236,230,226,0.04) 40%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <Nav onDark />

      <div className="wrap" style={{
        position: 'relative',
        padding: viewport.isMobile ? '28px 0 0' : viewport.isTablet ? '56px 0 0' : '90px 56px 0',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 704,
      }}>
        {/* Title block + graphic — both inside the grid so centering the
            graphic against the ENTIRE title block (eyebrow + headline + body)
            is a single css property, not a manual shift. */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1fr 640px',
          gap: viewport.isMobile ? 28 : 48,
          alignItems: 'center',
          paddingBottom: 41,
          position: 'relative',
          zIndex: 4,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Breadcrumb (part of the title block) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(247,245,243,0.7)',
              marginBottom: 28,
            }}>
              <span>Services</span>
              <span style={{ color: 'var(--accent-on-dark)' }}>/</span>
              <span style={{ color: 'var(--light)' }}>Website Accessibility</span>
            </div>
            <h1 style={{
              fontSize: pickResponsive(viewport, 92, 64, 42),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              An accessible web is a <span style={{ fontStyle: 'italic', fontWeight: 300 }}>better</span> web.
            </h1>
            <p style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'rgba(247,245,243,0.8)',
              margin: '28px 0 0',
              maxWidth: 520,
            }}>
              We help small businesses and organizations make their websites more accessible to people of all abilities. Inclusive sites work better for everyone, and keep you aligned with the legal and ethical standards that govern equal access online.
            </p>
          </div>

          {/* Right cell. The graphic has a FIXED size — explicit pixel width
              and height — so the section's height never changes during the
              focus-ring animation, and the cells inside the graphic always
              render at the same proportions. The fixed size is chosen to
              fill the right half of the hero aesthetically alongside the
              headline column. */}
          <div style={{
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
            <svg
              width={viewport.isMobile ? '100%' : viewport.isTablet ? '520' : '640'}
              height={viewport.isMobile ? '300' : viewport.isTablet ? '340' : '420'}
              viewBox="-10 -10 660 440"
              preserveAspectRatio="xMidYMid meet"
              style={{ display: 'block', flexShrink: 0, width: viewport.isMobile ? '100%' : viewport.isTablet ? 520 : 640, height: viewport.isMobile ? 300 : viewport.isTablet ? 340 : 420, overflow: 'visible', maxWidth: '100%' }}
              aria-hidden="true"
            >
              {/* Cells */}
              {stops.map((s, i) => {
                const r = cellRect(s);
                const isActive = s.kind !== 'sr' && i === activeIdx;
                return (
                  <g key={i}>
                    <rect
                      x={r.x} y={r.y}
                      width={r.w} height={r.h}
                      fill="rgba(247,245,243,0.025)"
                      stroke="rgba(247,245,243,0.10)"
                      strokeWidth="1"
                    />
                    {/* Cell-kind glyphs — minimal */}
                    {s.kind === 'btn' && (
                      <rect
                        x={r.x + 16} y={r.y + r.h / 2 - 7}
                        width={Math.min(r.w - 32, 70)} height="14"
                        rx="2"
                        fill={isActive ? 'rgba(236,230,226,0.25)' : 'rgba(247,245,243,0.08)'}
                      />
                    )}
                    {s.kind === 'submit' && (
                      <rect
                        x={r.x + 16} y={r.y + r.h / 2 - 9}
                        width={Math.min(r.w - 32, 86)} height="18"
                        rx="2"
                        fill={isActive ? 'var(--accent)' : 'rgba(211,50,106,0.55)'}
                      />
                    )}
                    {s.kind === 'sr' && (
                      <React.Fragment>
                        {/* Screen-reader readout bar */}
                        <rect
                          x={r.x + 12} y={r.y + r.h / 2 - 14}
                          width="28" height="28" rx="2"
                          fill="rgba(211,50,106,0.18)"
                          stroke="var(--accent)"
                          strokeWidth="1.2"
                        />
                        {/* Play / speaker glyph */}
                        <path
                          d={`M ${r.x + 22} ${r.y + r.h / 2 - 6} L ${r.x + 32} ${r.y + r.h / 2} L ${r.x + 22} ${r.y + r.h / 2 + 6} Z`}
                          fill="var(--accent)"
                        />
                        {/* Label */}
                        <text
                          x={r.x + 52}
                          y={r.y + r.h / 2 - 6}
                          fill="rgba(247,245,243,0.45)"
                          fontSize="10"
                          letterSpacing="0.1em"
                          fontFamily="inherit"
                          style={{ textTransform: 'uppercase', fontWeight: 600 }}
                        >
                          Screen reader
                        </text>
                        {/* Readout */}
                        <text
                          x={r.x + 52}
                          y={r.y + r.h / 2 + 13}
                          fill="var(--light)"
                          fontSize="15"
                          fontFamily="inherit"
                          style={{ fontWeight: 500 }}
                        >
                          {`"${activeStop.label} — ${activeStop.sr}"`}
                        </text>
                      </React.Fragment>
                    )}
                    {s.kind === 'input' && (
                      <React.Fragment>
                        <rect
                          x={r.x + 16} y={r.y + r.h / 2 - 10}
                          width={r.w - 32} height="20"
                          rx="2"
                          fill="rgba(0,0,0,0.18)"
                          stroke="rgba(247,245,243,0.12)"
                        />
                        <line
                          x1={r.x + 24} y1={r.y + r.h / 2}
                          x2={r.x + 24 + Math.min(r.w - 60, 80)} y2={r.y + r.h / 2}
                          stroke="rgba(247,245,243,0.35)"
                          strokeWidth="1"
                        />
                      </React.Fragment>
                    )}
                    {s.kind === 'link' && (
                      <React.Fragment>
                        <text
                          x={r.x + 16}
                          y={r.y + r.h / 2 + 3}
                          fill={isActive ? 'var(--accent-on-dark)' : 'rgba(247,245,243,0.55)'}
                          fontSize="13"
                          fontFamily="inherit"
                          style={{ fontWeight: 500, fontStyle: 'italic' }}
                        >
                          Read full article →
                        </text>
                        <line
                          x1={r.x + 16} y1={r.y + r.h / 2 + 8}
                          x2={r.x + 16 + 122} y2={r.y + r.h / 2 + 8}
                          stroke={isActive ? 'var(--accent-on-dark)' : 'rgba(247,245,243,0.30)'}
                          strokeWidth="1"
                          strokeDasharray={isActive ? '0' : '2 2'}
                        />
                      </React.Fragment>
                    )}
                    {s.kind === 'card' && (
                      <React.Fragment>
                        <rect x={r.x + 16} y={r.y + 18} width={Math.min(r.w - 32, 110)} height="8" fill="rgba(247,245,243,0.22)" />
                        <rect x={r.x + 16} y={r.y + 34} width={Math.min(r.w - 32, 168)} height="4" fill="rgba(247,245,243,0.10)" />
                        <rect x={r.x + 16} y={r.y + 44} width={Math.min(r.w - 32, 184)} height="4" fill="rgba(247,245,243,0.10)" />
                        <rect x={r.x + 16} y={r.y + 54} width={Math.min(r.w - 32, 156)} height="4" fill="rgba(247,245,243,0.10)" />
                        <rect x={r.x + 16} y={r.y + 70} width={Math.min(r.w - 32, 184)} height="4" fill="rgba(247,245,243,0.10)" />
                        <rect x={r.x + 16} y={r.y + 80} width={Math.min(r.w - 32, 168)} height="4" fill="rgba(247,245,243,0.10)" />
                        <rect x={r.x + 16} y={r.y + 90} width={Math.min(r.w - 32, 142)} height="4" fill="rgba(247,245,243,0.10)" />
                        <rect x={r.x + 16} y={r.y + 106} width={Math.min(r.w - 32, 120)} height="4" fill="rgba(247,245,243,0.10)" />
                        <rect x={r.x + 16} y={r.y + 116} width={Math.min(r.w - 32, 184)} height="4" fill="rgba(247,245,243,0.10)" />
                      </React.Fragment>
                    )}
                    {s.kind === 'check' && (
                      <React.Fragment>
                        <rect
                          x={r.x + r.w / 2 - 11} y={r.y + r.h / 2 - 11}
                          width="22" height="22" rx="2"
                          fill={s.label === 'Option A' ? 'rgba(236,230,226,0.3)' : 'rgba(247,245,243,0.04)'}
                          stroke="rgba(247,245,243,0.30)"
                          strokeWidth="1.1"
                        />
                        {s.label === 'Option A' && (
                          <path
                            d={`M ${r.x + r.w / 2 - 5} ${r.y + r.h / 2} L ${r.x + r.w / 2 - 1} ${r.y + r.h / 2 + 4} L ${r.x + r.w / 2 + 6} ${r.y + r.h / 2 - 4}`}
                            stroke="var(--accent-on-dark)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        )}
                      </React.Fragment>
                    )}
                    {/* Cell label (except SR strip which has its own layout) */}
                    {s.kind !== 'sr' && (
                      <text
                        x={r.x + 14}
                        y={r.y + r.h - 14}
                        fill={isActive ? 'rgba(247,245,243,0.95)' : 'rgba(247,245,243,0.45)'}
                        fontSize="10"
                        fontFamily="inherit"
                        letterSpacing="0.06em"
                        style={{ textTransform: 'uppercase', fontWeight: 600 }}
                      >
                        {s.label}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Animated focus ring — uses a CSS transition on x/y/w/h via a wrapper rect */}
              <rect
                x={active.x - 4}
                y={active.y - 4}
                width={active.w + 8}
                height={active.h + 8}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                style={{ transition: 'all .55s cubic-bezier(0.22, 0.61, 0.36, 1)' }}
              />
              {/* Outer halo for the ring */}
              <rect
                x={active.x - 7}
                y={active.y - 7}
                width={active.w + 14}
                height={active.h + 14}
                fill="none"
                stroke="rgba(211,50,106,0.25)"
                strokeWidth="1"
                style={{ transition: 'all .55s cubic-bezier(0.22, 0.61, 0.36, 1)' }}
              />
            </svg>
            <style>{`
              @keyframes a11yPulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50%      { opacity: 0.4; transform: scale(0.85); }
              }
            `}</style>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-dark)',
          marginTop: 'auto',
        }}>
          {[
            { label: 'Accessible design',  sub: 'Inclusive from the start',         href: '#design' },
            { label: 'Compliance review',  sub: 'WCAG 2.1 AA report',               href: '#review' },
            { label: 'Training & ongoing', sub: 'Stay accessible as you grow',      href: '#training' },
          ].map((cta, i) => (
            <a key={i} href={cta.href} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '28px 28px 28px 0',
              paddingLeft: i === 0 ? 0 : 32,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-dark)',
              color: 'var(--light)',
              transition: 'background .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
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

window.A11yHero = A11yHero;
