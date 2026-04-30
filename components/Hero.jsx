/* Hero for Website Design & Development page.
   Left: breadcrumb, headline, copy, CTA strip.
   Right: a "wireframe to design" graphic — a browser window with a layered
   page mockup. Wireframe blocks (dashed outlines) progressively fill in
   with real UI (filled blocks, type, an accent button) on a slow loop,
   visualizing the design+development progression. Plus a small floating
   "color tokens" chip and a "12-col grid" badge to reinforce the craft.
   Same dark atmospheric treatment as the other service heroes. */

const Hero = () => {
  const viewport = useResponsive();
  const heroGraphicWidth = viewport.isMobile ? '100%' : viewport.isTablet ? 620 : 760;
  const heroGraphicMaxWidth = viewport.isMobile ? 560 : 760;
  const heroGraphicViewBox = viewport.isMobile ? '80 0 600 460' : '0 0 760 460';
  const browserOffsetX = viewport.isMobile ? 0 : 80;
  // Animation cycle: 0..1 over CYCLE seconds. Each block has a reveal point.
  // We use CSS keyframes on each block so the loop runs without React state.
  const CYCLE = 8; // seconds per full wire→design loop

  // Block reveal schedule. Each block "fills in" at its progress %, then holds.
  // Order top→bottom for a natural left-to-right reading rhythm.
  // Reveal animation: dashed outline → solid fill, with a brief flash.
  const blocks = [
    // Header bar
    { id: 'hd',  x: 24,  y: 56,  w: 552, h: 36,  reveal: 8,  fill: 'rgba(247,245,243,0.06)', stroke: 'rgba(247,245,243,0.25)' },
    // Hero title block (large)
    { id: 'h1',  x: 24,  y: 110, w: 360, h: 64,  reveal: 18, fill: 'rgba(247,245,243,0.10)', stroke: 'rgba(247,245,243,0.30)' },
    // Hero subtitle
    { id: 'sb',  x: 24,  y: 184, w: 280, h: 18,  reveal: 28, fill: 'rgba(247,245,243,0.05)', stroke: 'rgba(247,245,243,0.22)' },
    // Hero CTA — accent
    { id: 'cta', x: 24,  y: 218, w: 132, h: 38,  reveal: 38, fill: 'var(--accent)',          stroke: 'var(--accent)',          accent: true },
    // Image card (right of headline)
    { id: 'img', x: 408, y: 110, w: 168, h: 146, reveal: 48, fill: 'rgba(247,245,243,0.08)', stroke: 'rgba(247,245,243,0.25)', isImage: true },
    // 3 feature cards row
    { id: 'f1',  x: 24,  y: 282, w: 176, h: 96,  reveal: 60, fill: 'rgba(247,245,243,0.05)', stroke: 'rgba(247,245,243,0.22)' },
    { id: 'f2',  x: 212, y: 282, w: 176, h: 96,  reveal: 70, fill: 'rgba(247,245,243,0.05)', stroke: 'rgba(247,245,243,0.22)' },
    { id: 'f3',  x: 400, y: 282, w: 176, h: 96,  reveal: 80, fill: 'rgba(247,245,243,0.05)', stroke: 'rgba(247,245,243,0.22)' },
  ];

  // Per-block keyframes — invisible until reveal%, then crossfade dashed→filled.
  // We use two stacked rects per block so we can animate opacity independently.
  const blockKeyframes = blocks.map(b => {
    const r = b.reveal;
    const r2 = Math.min(r + 4, 99); // crossfade window
    return `
      @keyframes wireBlk_${b.id}_dash {
        0%, ${Math.max(r - 6, 0)}% { opacity: 0; }
        ${r}%                       { opacity: 1; }
        ${r2}%                      { opacity: 0; }
        100%                        { opacity: 0; }
      }
      @keyframes wireBlk_${b.id}_fill {
        0%, ${r2}% { opacity: 0; transform: translateY(4px); }
        ${Math.min(r2 + 2, 100)}% { opacity: 1; transform: translateY(0); }
        100%       { opacity: 1; transform: translateY(0); }
      }
    `;
  }).join('\n');

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: viewport.isTablet ? 'auto' : 825,
    }}>
      <style>{`
        ${blockKeyframes}
        @keyframes wireCursorTravel {
          0%   { transform: translate(40px, 80px); }
          15%  { transform: translate(180px, 140px); }
          30%  { transform: translate(80px, 230px); }
          45%  { transform: translate(440px, 170px); }
          60%  { transform: translate(110px, 320px); }
          75%  { transform: translate(290px, 320px); }
          90%  { transform: translate(470px, 320px); }
          100% { transform: translate(40px, 80px); }
        }
        @keyframes wireGridFade {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 0.25; }
        }
        @keyframes archDraw {
          0%   { stroke-dashoffset: var(--len, 1000); opacity: 0; }
          8%   { opacity: 0.55; }
          50%  { stroke-dashoffset: 0; opacity: 0.55; }
          92%  { opacity: 0.55; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>

      {/* Architectural blueprint layer — low-contrast drafting marks that
          sit behind everything to reinforce that we *architect* sites.
          Sparse, off-center, faint. Never competes with copy or graphic. */}
      {/* Engineering grid layer — extends full-bleed across the hero,
          fades out only on the left so the headline stays clean. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          maskImage:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.75) 38%, #000 55%), linear-gradient(180deg, transparent 0%, #000 14%, #000 76%, transparent 96%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.75) 38%, #000 55%), linear-gradient(180deg, transparent 0%, #000 14%, #000 76%, transparent 96%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      >
        <svg
          width="100%" height="100%"
          viewBox="0 0 1920 825"
          preserveAspectRatio="xMidYMid slice"
          style={{ display: 'block' }}
        >
          <defs>
            <pattern id="archMinorGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none"
                stroke="rgba(236,230,226,0.10)" strokeWidth="0.5" />
            </pattern>
            <pattern id="archMajorGrid" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 200 0 L 0 0 0 200" fill="none"
                stroke="rgba(236,230,226,0.18)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archMinorGrid)" />
          <rect width="100%" height="100%" fill="url(#archMajorGrid)" />
        </svg>
      </div>

      {/* Architectural drafting layer — plan rectangles, dim lines, title
          block stamp. Sits on the right where it complements the browser
          graphic without crowding the headline. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          maskImage:
            'radial-gradient(ellipse 70% 60% at 75% 40%, #000 30%, rgba(0,0,0,0.5) 65%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 75% 40%, #000 30%, rgba(0,0,0,0.5) 65%, transparent 90%)',
        }}
      >
        <svg
          width="100%" height="100%"
          viewBox="0 0 1920 825"
          preserveAspectRatio="xMidYMid slice"
          style={{ display: 'block' }}
        >
          {/* Plan-view rectangles, lightly stacked — like a building footprint
              dissolving into structure. Drawn with thin lines + corner ticks. */}
          <g
            stroke="rgba(236,230,226,0.18)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="square"
          >
            {/* Outer footprint */}
            <rect x="980" y="120" width="760" height="540" />
            {/* Mid wing */}
            <rect x="980" y="120" width="460" height="320" />
            {/* Inner room */}
            <rect x="1180" y="260" width="240" height="180" />
            {/* Right wing */}
            <rect x="1440" y="200" width="300" height="380" />
            {/* Cross-axis spine */}
            <line x1="980" y1="380" x2="1740" y2="380" />
            {/* Stair / vertical spine */}
            <line x1="1300" y1="120" x2="1300" y2="660" />
          </g>

          {/* Corner registration ticks — architectural drafting marks */}
          <g stroke="rgba(228,40,110,0.32)" strokeWidth="1.2" fill="none">
            {[
              [980, 120], [1740, 120], [980, 660], [1740, 660],
              [1180, 260], [1420, 260], [1180, 440], [1420, 440],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} />
                <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} />
              </g>
            ))}
          </g>

          {/* Dimension lines — extension lines + arrows + label */}
          <g stroke="rgba(236,230,226,0.22)" strokeWidth="0.8" fill="none">
            {/* Horizontal dim along top of footprint */}
            <line x1="980" y1="92" x2="1740" y2="92" />
            <line x1="980" y1="86" x2="980" y2="98" />
            <line x1="1740" y1="86" x2="1740" y2="98" />
            {/* Arrowheads */}
            <path d="M 984 88 L 980 92 L 984 96" />
            <path d="M 1736 88 L 1740 92 L 1736 96" />
          </g>
          <text x="1360" y="84" fill="rgba(236,230,226,0.42)"
            fontSize="11" fontWeight="500" letterSpacing="0.18em"
            fontFamily="'Inter Tight', sans-serif" textAnchor="middle">
          </text>

          {/* Vertical dim on right */}
          <g stroke="rgba(236,230,226,0.22)" strokeWidth="0.8" fill="none">
            <line x1="1772" y1="120" x2="1772" y2="660" />
            <line x1="1766" y1="120" x2="1778" y2="120" />
            <line x1="1766" y1="660" x2="1778" y2="660" />
            <path d="M 1768 124 L 1772 120 L 1776 124" />
            <path d="M 1768 656 L 1772 660 L 1776 656" />
          </g>

          {/* Animated drafting line that "draws" along a plan edge — a quiet
              gesture that keeps the layer alive without being noisy. */}
          <line
            x1="980" y1="380" x2="1740" y2="380"
            stroke="rgba(228,40,110,0.55)"
            strokeWidth="1.1"
            strokeDasharray="760"
            style={{
              ['--len']: 760,
              animation: 'archDraw 14s ease-in-out infinite',
            }}
          />
          <line
            x1="1300" y1="120" x2="1300" y2="660"
            stroke="rgba(228,40,110,0.45)"
            strokeWidth="1.1"
            strokeDasharray="540"
            style={{
              ['--len']: 540,
              animation: 'archDraw 14s ease-in-out infinite',
              animationDelay: '7s',
            }}
          />

          {/* Sheet metadata — looks like a title block stamp, lower-right */}
          <g transform="translate(1572,720)" fontFamily="'Inter Tight', sans-serif">
            <rect x="0" y="0" width="200" height="56"
              fill="none" stroke="rgba(236,230,226,0.18)" strokeWidth="1" />
            <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(236,230,226,0.18)" strokeWidth="1" />
            <line x1="120" y1="20" x2="120" y2="56" stroke="rgba(236,230,226,0.18)" strokeWidth="1" />
            <text x="10" y="14" fill="rgba(236,230,226,0.45)"
              fontSize="9" fontWeight="600" letterSpacing="0.18em">
              SHEET A-001
            </text>
            <text x="10" y="38" fill="rgba(236,230,226,0.55)"
              fontSize="11" fontWeight="500" letterSpacing="-0.01em">
              Plan / Site
            </text>
            <text x="10" y="50" fill="rgba(236,230,226,0.35)"
              fontSize="8" fontWeight="500" letterSpacing="0.1em">
              SCALE 1:1
            </text>
            <text x="130" y="38" fill="rgba(236,230,226,0.55)"
              fontSize="11" fontWeight="500" letterSpacing="-0.01em">
              REV 03
            </text>
          </g>
        </svg>
      </div>

      {/* Sand wash — top-right soft glow (matches other service heroes) */}
      <div style={{
        position: 'absolute',
        top: -260, right: -180,
        width: 900, height: 900,
        background: 'radial-gradient(circle, rgba(236,230,226,0.09) 0%, rgba(236,230,226,0.03) 40%, transparent 65%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />
      {/* Pink counterweight bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: -320, left: -260,
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(211,50,106,0.06) 0%, rgba(211,50,106,0.02) 45%, transparent 70%)',
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
        {/* Title block + graphic row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1fr auto',
          gap: viewport.isMobile ? 28 : 80,
          alignItems: 'center',
          paddingBottom: 70,
        }}>
          <div style={{ maxWidth: 640 }}>
            {/* Breadcrumb */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(247,245,243,0.7)', marginBottom: 28,
            }}>
              <span>Services</span>
              <span style={{ color: 'var(--accent-on-dark)' }}>/</span>
              <span style={{ color: 'var(--light)' }}>Website Design &amp; Development</span>
            </div>
            <h1 style={{
              fontSize: pickResponsive(viewport, 92, 64, 42),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Designed to <span style={{ fontStyle: 'italic', fontWeight: 300 }}>convert</span>. Built to <span style={{ fontStyle: 'italic', fontWeight: 300 }}>last</span>.
            </h1>
            <p style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'rgba(247,245,243,0.8)',
              margin: '32px 0 0',
              maxWidth: 560,
            }}>
              But only if it's used effectively. We build sites designed around your goals, your audience, and the outcomes you actually care about.
            </p>
          </div>

          {/* Wireframe → design browser graphic */}
          <div style={{
            position: 'relative',
            width: heroGraphicWidth,
            maxWidth: heroGraphicMaxWidth,
            aspectRatio: '760 / 460',
            flexShrink: 0,
            justifySelf: viewport.isTablet ? 'start' : 'end',
          }}>
            <svg
              width="100%"
              height="100%"
              viewBox={heroGraphicViewBox}
              preserveAspectRatio={viewport.isMobile ? 'xMinYMid meet' : 'xMidYMid meet'}
              style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
              aria-hidden="true"
            >
              {/* Browser window — main canvas */}
              <g transform={`translate(${browserOffsetX},0)`}>
                {/* Window frame */}
                <rect x="0" y="0" width="600" height="412" fill="#1d1f23"
                  stroke="rgba(247,245,243,0.14)" strokeWidth="1" />
                {/* Title bar */}
                <rect x="0" y="0" width="600" height="32" fill="#16181b"
                  stroke="rgba(247,245,243,0.10)" strokeWidth="1" />
                {/* Traffic lights */}
                <circle cx="14" cy="16" r="4" fill="rgba(247,245,243,0.18)" />
                <circle cx="28" cy="16" r="4" fill="rgba(247,245,243,0.18)" />
                <circle cx="42" cy="16" r="4" fill="rgba(247,245,243,0.18)" />
                {/* URL bar */}
                <rect x="68" y="8" width="380" height="16" fill="#0e1013"
                  stroke="rgba(247,245,243,0.08)" strokeWidth="1" />
                <text x="78" y="19" fill="rgba(247,245,243,0.45)"
                  fontSize="9" fontWeight="500" letterSpacing="0.4"
                  fontFamily="'Inter Tight', sans-serif">
                  yourbrand.com
                </text>

                {/* 12-col grid guides — faint vertical lines, gently pulse */}
                <g style={{ animation: 'wireGridFade 6s ease-in-out infinite' }}>
                  {Array.from({ length: 13 }, (_, i) => (
                    <line
                      key={i}
                      x1={24 + i * (552 / 12)} y1="44"
                      x2={24 + i * (552 / 12)} y2="394"
                      stroke="rgba(228,40,110,0.10)"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                    />
                  ))}
                </g>

                {/* Wireframe blocks — dashed outline that fades, then a filled block fades in */}
                {blocks.map(b => (
                  <g key={b.id}>
                    {/* Dashed wireframe rect — first phase */}
                    <rect
                      x={b.x} y={b.y} width={b.w} height={b.h}
                      fill="none"
                      stroke="rgba(247,245,243,0.30)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      style={{
                        animation: `wireBlk_${b.id}_dash ${CYCLE}s linear infinite`,
                        opacity: 0,
                      }}
                    />
                    {/* Diagonal "X" inside dashed wireframe for image placeholders */}
                    {b.isImage && (
                      <g
                        stroke="rgba(247,245,243,0.20)"
                        strokeWidth="1"
                        style={{
                          animation: `wireBlk_${b.id}_dash ${CYCLE}s linear infinite`,
                          opacity: 0,
                        }}
                      >
                        <line x1={b.x} y1={b.y} x2={b.x + b.w} y2={b.y + b.h} />
                        <line x1={b.x + b.w} y1={b.y} x2={b.x} y2={b.y + b.h} />
                      </g>
                    )}
                    {/* Filled "designed" rect — second phase */}
                    <rect
                      x={b.x} y={b.y} width={b.w} height={b.h}
                      fill={b.fill}
                      stroke={b.stroke}
                      strokeWidth="1"
                      style={{
                        animation: `wireBlk_${b.id}_fill ${CYCLE}s ease-out infinite`,
                        opacity: 0,
                        transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px`,
                      }}
                    />
                    {/* CTA label inside the accent button */}
                    {b.id === 'cta' && (
                      <text
                        x={b.x + b.w / 2} y={b.y + b.h / 2 + 4}
                        textAnchor="middle"
                        fill="var(--light)"
                        fontSize="12"
                        fontWeight="600"
                        letterSpacing="0.06em"
                        fontFamily="'Inter Tight', sans-serif"
                        style={{
                          animation: `wireBlk_${b.id}_fill ${CYCLE}s ease-out infinite`,
                          opacity: 0,
                          transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px`,
                        }}
                      >
                        GET STARTED
                      </text>
                    )}
                    {/* Type lines inside the headline block */}
                    {b.id === 'h1' && (
                      <g
                        style={{
                          animation: `wireBlk_${b.id}_fill ${CYCLE}s ease-out infinite`,
                          opacity: 0,
                          transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px`,
                        }}
                      >
                        <rect x={b.x + 12} y={b.y + 16} width={236} height={10} fill="rgba(247,245,243,0.55)" />
                        <rect x={b.x + 12} y={b.y + 34} width={172} height={10} fill="rgba(247,245,243,0.40)" />
                      </g>
                    )}
                    {/* Subtitle line */}
                    {b.id === 'sb' && (
                      <rect
                        x={b.x + 8} y={b.y + 7} width={b.w - 80} height={4}
                        fill="rgba(247,245,243,0.30)"
                        style={{
                          animation: `wireBlk_${b.id}_fill ${CYCLE}s ease-out infinite`,
                          opacity: 0,
                          transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px`,
                        }}
                      />
                    )}
                    {/* Header logo + nav */}
                    {b.id === 'hd' && (
                      <g
                        style={{
                          animation: `wireBlk_${b.id}_fill ${CYCLE}s ease-out infinite`,
                          opacity: 0,
                          transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px`,
                        }}
                      >
                        <circle cx={b.x + 18} cy={b.y + 18} r="6" fill="var(--accent-on-dark)" />
                        <rect x={b.x + 32} y={b.y + 14} width={56} height={8} fill="rgba(247,245,243,0.45)" />
                        {[0, 1, 2, 3].map(i => (
                          <rect key={i} x={b.x + 320 + i * 56} y={b.y + 16} width={36} height={4} fill="rgba(247,245,243,0.30)" />
                        ))}
                      </g>
                    )}
                    {/* Image placeholder — pinkish gradient block with mountain icon */}
                    {b.id === 'img' && (
                      <g
                        style={{
                          animation: `wireBlk_${b.id}_fill ${CYCLE}s ease-out infinite`,
                          opacity: 0,
                          transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px`,
                        }}
                      >
                        <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="url(#imgGrad)" />
                        <g transform={`translate(${b.x + 18},${b.y + 64})`}
                           stroke="rgba(247,245,243,0.55)" strokeWidth="1.4" fill="none">
                          <circle cx="22" cy="20" r="6" fill="rgba(247,245,243,0.35)" stroke="none" />
                          <path d="M0 76 L40 36 L70 64 L100 30 L132 76 Z"
                            fill="rgba(247,245,243,0.18)" stroke="rgba(247,245,243,0.55)" />
                        </g>
                      </g>
                    )}
                    {/* Feature card content */}
                    {(b.id === 'f1' || b.id === 'f2' || b.id === 'f3') && (
                      <g
                        style={{
                          animation: `wireBlk_${b.id}_fill ${CYCLE}s ease-out infinite`,
                          opacity: 0,
                          transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px`,
                        }}
                      >
                        <rect x={b.x + 14} y={b.y + 14} width={20} height={20} fill="none"
                          stroke="var(--accent-on-dark)" strokeWidth="1.4" />
                        <rect x={b.x + 14} y={b.y + 44} width={120} height={6} fill="rgba(247,245,243,0.55)" />
                        <rect x={b.x + 14} y={b.y + 58} width={140} height={3} fill="rgba(247,245,243,0.25)" />
                        <rect x={b.x + 14} y={b.y + 66} width={130} height={3} fill="rgba(247,245,243,0.25)" />
                        <rect x={b.x + 14} y={b.y + 74} width={90} height={3} fill="rgba(247,245,243,0.25)" />
                      </g>
                    )}
                  </g>
                ))}

                {/* Image placeholder gradient */}
                <defs>
                  <linearGradient id="imgGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(228,40,110,0.30)" />
                    <stop offset="100%" stopColor="rgba(236,230,226,0.18)" />
                  </linearGradient>
                </defs>

                {/* Cursor — slowly travels between block centers, suggesting active design */}
                <g style={{ animation: `wireCursorTravel ${CYCLE * 2}s ease-in-out infinite` }}>
                  <path
                    d="M0 0 L0 14 L4 11 L7 17 L9 16 L6 10 L11 10 Z"
                    fill="var(--light)"
                    stroke="var(--dark)"
                    strokeWidth="0.8"
                  />
                </g>
              </g>

            </svg>
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
            { label: 'Get a quote', sub: 'Priced to your scope', href: 'Get a Quote.html' },
            { label: 'Our process', sub: 'Seven steps from brief to launch' },
            { label: 'Questions?', sub: 'Schedule a free consult' },
          ].map((cta, i) => (
            <a key={i} href={cta.href || '#'} style={{
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

window.Hero = Hero;
