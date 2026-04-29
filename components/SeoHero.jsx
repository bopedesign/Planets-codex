const SeoHero = () => {
  const viewport = useResponsive();
  // Keyword pools — each entry can be a string or { kw, rank } for ranked rows.
  const colA = [
    { kw: 'local seo', rank: 3 },
    'plumber near me',
    { kw: 'wedding venue san diego', rank: 7 },
    'core web vitals',
    'schema.org',
    { kw: 'best coffee austin', rank: 2 },
    'on-page seo',
    'keyword research',
    { kw: 'family law attorney', rank: 5 },
    'page speed insights',
    'google my business',
    { kw: 'organic dog food', rank: 11 },
    'meta description',
    'xml sitemap',
    { kw: 'roofing contractor', rank: 4 },
    'alt text',
    'h1 tag',
    'canonical url',
    { kw: 'orthodontist denver', rank: 6 },
    'gmb posts',
  ];
  const colB = [
    'serp features',
    { kw: 'pediatric dentist', rank: 1 },
    'mobile friendly',
    'lcp · 1.4s',
    { kw: 'yoga studio brooklyn', rank: 8 },
    'cls · 0.02',
    'ssl certificate',
    { kw: 'tax preparation services', rank: 9 },
    'site audit',
    'reviews',
    { kw: 'craft brewery portland', rank: 4 },
    'backlinks',
    'inbound links',
    'click-through rate',
    { kw: 'hvac repair phoenix', rank: 2 },
    'organic traffic',
    'bounce rate',
    { kw: 'wedding photographer', rank: 6 },
    'trust signals',
    'nap consistency',
  ];

  // Render a single chip
  const Chip = ({ entry, dim }) => {
    const isRanked = typeof entry === 'object';
    const label = isRanked ? entry.kw : entry;
    const rank  = isRanked ? entry.rank : null;
    const isUp = rank && rank <= 5;
    return (
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 14px',
        marginBottom: 10,
        marginRight: 10,
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(247,245,243,0.10)',
        color: dim ? 'rgba(247,245,243,0.55)' : 'rgba(247,245,243,0.85)',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '-0.005em',
        whiteSpace: 'nowrap',
        borderRadius: 999,
      }}>
        <span style={{
          width: 6, height: 6,
          background: isRanked ? 'var(--accent)' : 'rgba(247,245,243,0.35)',
          borderRadius: '50%',
          flexShrink: 0,
        }} />
        <span>{label}</span>
        {isRanked && (
          <React.Fragment>
            <span style={{
              width: 1, height: 12,
              background: 'rgba(247,245,243,0.18)',
              margin: '0 2px',
            }} />
            <span style={{
              fontVariantNumeric: 'tabular-nums',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--accent-on-dark)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}>
              <span>#{rank}</span>
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                {isUp ? (
                  <path d="M5 1.5 L8.5 6 L1.5 6 Z" fill="var(--accent)" />
                ) : (
                  <path d="M5 8.5 L8.5 4 L1.5 4 Z" fill="rgba(247,245,243,0.35)" />
                )}
              </svg>
            </span>
          </React.Fragment>
        )}
      </div>
    );
  };

  // Vertical scrolling column. Doubles content for seamless loop.
  const TickerColumn = ({ items, direction = 'up', duration = 60, offset = 0 }) => {
    const loop = [...items, ...items];
    return (
      <div style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          animation: `${direction === 'up' ? 'seoTickUp' : 'seoTickDown'} ${duration}s linear infinite`,
          animationDelay: `-${offset}s`,
          willChange: 'transform',
        }}>
          {loop.map((entry, i) => (
            <Chip key={i} entry={entry} dim={i % 5 === 3} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes seoTickUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes seoTickDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Sand wash — large, very soft, top-right. Reads as directional
          off-frame light spilling onto the ticker side. Low opacity so it
          stays atmospheric. */}
      <div style={{
        position: 'absolute',
        top: -340, right: -260,
        width: 1100, height: 1100,
        background: 'radial-gradient(circle, rgba(240,221,208,0.10) 0%, rgba(240,221,208,0.04) 40%, transparent 65%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      {/* Tiny pink counterweight, bottom-left. Large + heavily blurred + very
          low opacity so it's atmospheric, not a discrete glow. Just keeps the
          opposite corner from feeling empty against the top-right sand wash. */}
      <div style={{
        position: 'absolute',
        bottom: -320,
        left: -280,
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(211,50,106,0.05) 0%, rgba(211,50,106,0.02) 45%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Ticker panel — vertically centered band, fades in/out top & bottom only.
          Aligned to content-width right edge so chips sit beside the headline. */}
      {!viewport.isTablet && <div style={{
        position: 'absolute',
        top: '50%',
        right: 'max(56px, calc((100% - 1680px) / 2 + 56px))',
        transform: 'translateY(-50%)',
        height: '70%',
        maxHeight: 520,
        width: 'min(36%, 540px)',
        display: 'flex',
        gap: 12,
        overflow: 'hidden',
        maskImage: 'linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%)',
        pointerEvents: 'none',
      }}>
        <TickerColumn items={colA} direction="up"   duration={70} offset={0}  />
        <TickerColumn items={colB} direction="down" duration={85} offset={20} />
      </div>}

      <Nav onDark />

      <div className="wrap" style={{ position: 'relative', padding: viewport.isMobile ? '28px 0 0' : viewport.isTablet ? '56px 0 0' : '90px 56px 0', zIndex: 3 }}>
        {/* Breadcrumb */}
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
          <span style={{ color: 'var(--light)' }}>Digital Marketing &amp; SEO</span>
        </div>

        {/* Title block — single column on the left, ticker fills the right via absolute layer */}
        <div style={{ paddingBottom: 70, maxWidth: 760, position: 'relative', zIndex: 4 }}>
          <h1 style={{
            fontSize: pickResponsive(viewport, 92, 64, 42),
            lineHeight: 1.02,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
            position: 'relative',
            zIndex: 4,
          }}>
            Test, <span style={{ fontStyle: 'italic', fontWeight: 300 }}>tune</span> and <span style={{ fontStyle: 'italic', fontWeight: 300 }}>track</span> your search performance.
          </h1>
          <p style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: 'rgba(247,245,243,0.8)',
            margin: '32px 0 0',
            maxWidth: 560,
          }}>
            We combine what search engines look for with solid marketing philosophy. The result: better visibility in search, and a site that actually speaks to your visitors. High rankings only matter if visitors are impressed when they arrive.
          </p>
        </div>

        {/* Bottom CTA strip — matches service page pattern */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-dark)',
          position: 'relative',
          zIndex: 3,
          background: 'var(--dark)',
        }}>
          {[
            { label: 'Website audit',   sub: 'See what Google sees',          href: '#step-test' },
            { label: 'Take action',     sub: 'Fix, enhance, campaign',         href: '#step-tune' },
            { label: 'Track progress',  sub: 'Tracking from $29 / month',      href: '#step-track' },
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

window.SeoHero = SeoHero;
