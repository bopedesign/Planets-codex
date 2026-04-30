/* Home 3 — Orbital rings hero. Large, thin concentric arcs anchored off the
   top-right so they read as the edge of a planet's orbits. Stays clear of
   the left side where the h1 lives; opacity capped so contrast is untouched.
   A single tiny "planet" dot hops from ring to ring, traveling one ring at a
   time for a quiet bit of life. */

const OrbitalRings = () => {
  // All geometry in viewBox units (anchored to top-right corner of section).
  // Rings + a tiny orbiting planet. Center anchor is off-canvas (top-right)
  // so only the lower-left arcs of each ring are visible.
  const rings = [
    { r: 520,  stroke: 'rgba(247,245,243,0.10)', sw: 1 },
    { r: 720,  stroke: 'rgba(247,245,243,0.07)', sw: 1 },
    { r: 940,  stroke: 'rgba(228,40,110,0.12)',  sw: 1 },  // faint accent ring
    { r: 1180, stroke: 'rgba(247,245,243,0.05)', sw: 1 },
  ];

  // One full cycle: dot orbits ring 0 → ring 1 → ring 2 → ring 3 → repeat.
  // Each ring gets an equal slice of the timeline; during its slice the dot
  // sweeps 360° on that ring (radius animated via CSS var --r).
  const ringCount = rings.length;
  const cycleSeconds = 32; // total time for all 4 rings

  // Build keyframes that:
  //  - hold radius constant per slice (step changes between slices)
  //  - rotate 0→360 within each slice, then snap back to 0 at the boundary
  const sliceStops = [];
  for (let i = 0; i < ringCount; i++) {
    const startPct = (i / ringCount) * 100;
    const endPct = ((i + 1) / ringCount) * 100;
    sliceStops.push({ pct: startPct, r: rings[i].r, rot: 0 });
    // just before slice end, rotation reaches 360
    sliceStops.push({ pct: endPct - 0.01, r: rings[i].r, rot: 360 });
  }

  const radiusKeyframes = sliceStops
    .map(s => `${s.pct.toFixed(2)}% { --r: ${s.r}px; }`)
    .join('\n');

  const rotateKeyframes = sliceStops
    .map(s => `${s.pct.toFixed(2)}% { transform: rotate(${s.rot}deg); }`)
    .join('\n') + `\n100% { transform: rotate(0deg); }`;

  return (
    <>
      <style>{`
        @property --r {
          syntax: '<length>';
          inherits: false;
          initial-value: 520px;
        }
        @keyframes ringHopRadius {
          ${radiusKeyframes}
          100% { --r: ${rings[0].r}px; }
        }
        @keyframes ringHopRotate {
          ${rotateKeyframes}
        }
      `}</style>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1,
          // Fade out strongly on the left so nothing competes with the h1.
          maskImage:
            'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.85) 60%, #000 80%)',
          WebkitMaskImage:
            'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.85) 60%, #000 80%)',
        }}
      >
        {/* Anchor point: top-right corner, pushed ~20% off-canvas. The SVG
            is sized huge so the arcs sweep broadly through the hero. */}
        <svg
          viewBox="-1400 0 1400 1400"
          preserveAspectRatio="xMaxYMin meet"
          width="140%"
          height="140%"
          style={{
            position: 'absolute',
            right: '-20%',
            top: '-20%',
          }}
        >
          {rings.map((r, i) => (
            <circle
              key={i}
              cx="0" cy="0"
              r={r.r}
              fill="none"
              stroke={r.stroke}
              strokeWidth={r.sw}
            />
          ))}

          {/* Single planet dot — traverses one ring at a time. Outer <g>
              spins; inner <circle> uses cx = -var(--r) so its distance from
              the anchor changes on slice boundaries. */}
          <g style={{
            transformOrigin: '0 0',
            animation: `ringHopRotate ${cycleSeconds}s linear infinite`,
          }}>
            <circle
              cy="0" r="3.5"
              fill="var(--accent)"
              opacity="0.9"
              style={{
                cx: 'calc(var(--r) * -1)',
                animation: `ringHopRadius ${cycleSeconds}s steps(1, end) infinite`,
              }}
            />
            <circle
              cy="0" r="8"
              fill="var(--accent)"
              opacity="0.18"
              style={{
                cx: 'calc(var(--r) * -1)',
                animation: `ringHopRadius ${cycleSeconds}s steps(1, end) infinite`,
              }}
            />
          </g>
        </svg>
      </div>
    </>
  );
};

/* Star field — small dots scattered across the hero with gentle twinkle.
   Density biased to the right side so it complements the rings; left side
   fades out via mask so the h1 stays uncluttered. Positions are seeded so
   the layout is deterministic between renders. */
const StarField = () => {
  // Tiny seeded PRNG (mulberry32) so star positions never jitter on re-render.
  const seed = 0xC0FFEE;
  let s = seed;
  const rand = () => {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const STAR_COUNT = 90;
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
    // Bias x toward the right (rings live there). sqrt-skew so density grows
    // smoothly from left → right rather than clumping.
    const xBias = Math.sqrt(rand());
    return {
      i,
      x: 20 + xBias * 78,                       // 20% → 98%
      y: rand() * 92,                           // 0 → 92%
      size: rand() < 0.15 ? 2.2 : (rand() < 0.5 ? 1.4 : 0.9),
      opacity: 0.35 + rand() * 0.55,
      twinkleDur: 2.5 + rand() * 5,             // 2.5 – 7.5s
      twinkleDelay: rand() * 6,
      // A tiny fraction get a faint accent tint
      accent: rand() < 0.08,
    };
  });

  return (
    <>
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: var(--o, 0.6); transform: scale(1); }
          50%      { opacity: calc(var(--o, 0.6) * 0.25); transform: scale(0.7); }
        }
      `}</style>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          // Match the rings' fade so nothing competes with the h1 on the left.
          maskImage:
            'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 28%, rgba(0,0,0,0.9) 58%, #000 78%)',
          WebkitMaskImage:
            'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 28%, rgba(0,0,0,0.9) 58%, #000 78%)',
        }}
      >
        {stars.map((star) => (
          <span
            key={star.i}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              borderRadius: '50%',
              background: star.accent ? 'var(--accent)' : 'rgba(247,245,243,1)',
              boxShadow: star.size >= 2
                ? (star.accent
                    ? '0 0 6px rgba(228,40,110,0.55)'
                    : '0 0 4px rgba(247,245,243,0.5)')
                : 'none',
              ['--o']: star.opacity,
              opacity: star.opacity,
              animation: `starTwinkle ${star.twinkleDur}s ease-in-out ${star.twinkleDelay}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
};

const HomeHero = () => {
  const viewport = useResponsive();
  const [hasHydrated, setHasHydrated] = React.useState(false);
  React.useEffect(() => {
    setHasHydrated(true);
  }, []);
  const showAtmosphere = hasHydrated && !viewport.isMobile;

  const ctas = [
    { label: 'Get a Quote', sub: 'When you are ready to move', href: 'Get a Quote.html' },
    { label: 'Our Process', sub: 'How we make your vision work' },
    { label: 'Questions?',  sub: 'We are here to help find answers' },
  ];

  return (
    <section style={{
      position: 'relative',
      minHeight: viewport.isMobile ? 'auto' : '100vh',
      background: 'var(--dark)',
      color: 'var(--light)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <picture style={{ position: 'absolute', inset: 0, display: 'block' }}>
        <source media="(max-width: 767px)" srcSet="images/heroBackground-100-mobile.jpg" />
        <img
          src="images/heroBackground-100.jpg"
          alt=""
          aria-hidden="true"
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

      {/* ✨ Star field layer */}
      {showAtmosphere && <StarField />}

      {/* 🪐 Orbital rings layer */}
      {showAtmosphere && <OrbitalRings />}

      {/* Subtle darkening for legibility on the left */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(20,22,25,0.55) 0%, rgba(20,22,25,0.25) 45%, rgba(20,22,25,0.0) 75%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />
      {/* Faint accent glow bottom-right (rings now anchor top-right) */}
      <div style={{
        position: 'absolute',
        bottom: -220, right: -180,
        width: 720, height: 720,
        background: 'radial-gradient(circle, rgba(211,50,106,0.10) 0%, transparent 62%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/* Top nav */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Nav />
      </div>

      {/* Main content, vertically centered */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: viewport.isMobile ? 'flex-start' : 'center',
        position: 'relative',
        zIndex: 3,
        padding: viewport.isMobile ? '32px 0 48px' : viewport.isTablet ? '24px 0 56px' : 0,
      }}>
        <div className="wrap" style={{ width: '100%' }}>
          <h1 style={{
            fontSize: pickResponsive(viewport, 92, 72, 56),
            lineHeight: viewport.isMobile ? 0.98 : 1.04,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: '0 0 ' + (viewport.isMobile ? 36 : 56) + 'px 0',
            color: 'var(--light)',
          }}>
            {viewport.isMobile ? (
              <>
                A better website starts with the{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>right approach</span>.
              </>
            ) : (
              <>
                A better website starts<br />
                with the{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>right approach</span>.
              </>
            )}
          </h1>

          <div style={{ display: 'flex', justifyContent: viewport.isTablet ? 'flex-start' : 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: viewport.isTablet ? '100%' : 460 }}>
              <p style={{
                fontSize: viewport.isMobile ? 15 : 16,
                lineHeight: 1.65,
                color: 'rgba(247,245,243,0.82)',
                margin: '0 0 32px 0',
              }}>
                We plan every project like an architect, aligning strategy,
                design, and development to create a site that makes a
                measurable difference for your business.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: viewport.isMobile ? 'repeat(3, minmax(0, auto))' : 'repeat(3, 1fr)',
                justifyContent: viewport.isMobile ? 'space-between' : 'stretch',
                gap: viewport.isMobile ? 12 : 24,
              }}>
                {['Eugene, OR', 'Detroit, MI', '& Beyond'].map((loc) => (
                  <div key={loc} style={{ minWidth: 0 }}>
                    <div style={{
                      height: 1,
                      background: 'var(--accent)',
                      width: 28,
                      marginBottom: 14,
                    }} />
                    <div style={{
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: '-0.005em',
                      color: 'var(--light)',
                      whiteSpace: 'nowrap',
                    }}>
                      {loc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(247,245,243,0.12)',
          }}>
            {ctas.map((cta, i) => (
              <a
                key={cta.label}
                href={cta.href || '#'}
                style={{
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
                }}
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
      </div>
    </section>
  );
};

window.HomeHero = HomeHero;
