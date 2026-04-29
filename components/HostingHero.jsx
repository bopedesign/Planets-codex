/* Hero for Hosting & Domains page.
   Left: breadcrumb, headline, intro copy, bottom CTA strip.
   Right: a "server rack" graphic with status lights, uptime meter, and a
   small Eugene, OR location badge. */
const HostingHero = () => {
  const viewport = useResponsive();
  const rackGraphicWidth = viewport.isMobile ? '100%' : viewport.isTablet ? 620 : 799;

  // Single rack-row component. Each row reads as 1U slot with status lights,
  // a label, and a small bandwidth waveform.
  const RackRow = ({ y, label, sub, online = true, accent = false, signal = [] }) => (
    <g transform={`translate(0,${y})`}>
      <rect x="0" y="0" width="799" height="56" fill={accent ? '#2a2c30' : '#1d1f23'}
        stroke="rgba(247,245,243,0.10)" strokeWidth="1" />
      {/* status pip column */}
      <g transform="translate(20,18)">
        <circle cx="6"  cy="10" r="3" fill={online ? '#7ed4a3' : 'rgba(247,245,243,0.18)'} />
        <circle cx="20" cy="10" r="3" fill={online ? 'var(--accent-on-dark)' : 'rgba(247,245,243,0.18)'} />
        <circle cx="34" cy="10" r="3" fill={online ? 'rgba(247,245,243,0.45)' : 'rgba(247,245,243,0.18)'} />
      </g>
      {/* slot meta */}
      <text x="76" y="22" fill="rgba(247,245,243,0.55)"
        fontSize="9" fontWeight="600" letterSpacing="1.2"
        fontFamily="'Inter Tight', sans-serif">
        {sub}
      </text>
      <text x="76" y="42" fill="var(--light)"
        fontSize="14" fontWeight="500" letterSpacing="-0.2"
        fontFamily="'Inter Tight', sans-serif">
        {label}
      </text>
      {/* signal sparkline on right */}
      <g transform="translate(539,16)">
        {signal.map((v, i) => (
          <rect key={i} x={i * 7} y={24 - v} width="4" height={v}
            fill={online ? (i === signal.length - 1 ? 'var(--accent-on-dark)' : 'rgba(240,221,208,0.4)') : 'rgba(247,245,243,0.18)'} />
        ))}
      </g>
      {/* uptime % */}
      <text x="721" y="32" fill={online ? 'var(--light)' : 'rgba(247,245,243,0.4)'}
        fontSize="13" fontWeight="500" letterSpacing="-0.2"
        fontFamily="'Inter Tight', sans-serif" textAnchor="end">
        {online ? '100.00%' : 'idle'}
      </text>
      <text x="737" y="32" fill="rgba(247,245,243,0.45)"
        fontSize="9" fontWeight="600" letterSpacing="1"
        fontFamily="'Inter Tight', sans-serif">
        UPTIME
      </text>
    </g>
  );

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: viewport.isTablet ? 'auto' : 825,
    }}>
      {/* Sand wash — top-right soft glow */}
      <div style={{
        position: 'absolute',
        top: -260, right: -180,
        width: 900, height: 900,
        background: 'radial-gradient(circle, rgba(240,221,208,0.09) 0%, rgba(240,221,208,0.03) 40%, transparent 65%)',
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
        zIndex: 2,
        paddingTop: viewport.isMobile ? 28 : 60,
        paddingBottom: 0,
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
              <span style={{ color: 'var(--light)' }}>Hosting &amp; Domains</span>
            </div>

            <h1 style={{
              fontSize: pickResponsive(viewport, 92, 64, 42),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Local hosting,<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>built for Lane County.</span>
            </h1>

            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(247,245,243,0.78)',
              margin: '36px 0 0',
              maxWidth: 560,
            }}>
              Reliable, fast hosting and domains, set up and supported by the same team that builds your site. Your visitors get instant load times. You get one number to call when something needs attention.
            </p>
          </div>

          {/* Server rack graphic */}
          <div style={{
            position: 'relative',
            width: rackGraphicWidth,
            maxWidth: 799,
            aspectRatio: '799 / 460',
            flexShrink: 0,
          }}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 799 460"
              preserveAspectRatio="xMidYMid meet"
              style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
              aria-hidden="true"
            >
              {/* Eugene location badge — top-left, hangs above the rack */}
              <g transform="translate(0,0)">
                <rect x="0" y="0" width="190" height="54" fill="#1d1f23"
                  stroke="rgba(247,245,243,0.12)" strokeWidth="1" />
                {/* pin */}
                <g transform="translate(18,16)" stroke="var(--accent-on-dark)" strokeWidth="1.4" fill="none">
                  <path d="M11 0 C5 0 1 4 1 9 C1 16 11 24 11 24 C11 24 21 16 21 9 C21 4 17 0 11 0 Z" />
                  <circle cx="11" cy="9" r="3" />
                </g>
                <text x="50" y="22" fill="rgba(247,245,243,0.55)"
                  fontSize="9" fontWeight="600" letterSpacing="1.2"
                  fontFamily="'Inter Tight', sans-serif">
                  DATA CENTER
                </text>
                <text x="50" y="40" fill="var(--light)"
                  fontSize="14" fontWeight="500" letterSpacing="-0.2"
                  fontFamily="'Inter Tight', sans-serif">
                  Eugene, OR
                </text>
              </g>

              {/* Stats chip — top-right of the rack */}
              <g transform="translate(489,0)">
                <rect x="0" y="0" width="310" height="54" fill="#1d1f23"
                  stroke="rgba(247,245,243,0.12)" strokeWidth="1" />
                <g transform="translate(18,19)">
                  <text fill="rgba(247,245,243,0.55)"
                    fontSize="9" fontWeight="600" letterSpacing="1.2"
                    fontFamily="'Inter Tight', sans-serif">
                    PAGE LOAD
                  </text>
                  <text y="20" fill="var(--light)"
                    fontSize="14" fontWeight="500" letterSpacing="-0.2"
                    fontFamily="'Inter Tight', sans-serif">
                    412 ms
                  </text>
                </g>
                {/* divider */}
                <line x1="135" y1="10" x2="135" y2="44" stroke="rgba(247,245,243,0.10)" strokeWidth="1" />
                <g transform="translate(155,19)">
                  <text fill="rgba(247,245,243,0.55)"
                    fontSize="9" fontWeight="600" letterSpacing="1.2"
                    fontFamily="'Inter Tight', sans-serif">
                    STATUS
                  </text>
                  <g transform="translate(0,15)">
                    <circle cx="4" cy="4" r="4" fill="#7ed4a3" />
                    <text x="14" y="8" fill="var(--light)"
                      fontSize="13" fontWeight="500" letterSpacing="-0.2"
                      fontFamily="'Inter Tight', sans-serif">
                      All systems normal
                    </text>
                  </g>
                </g>
              </g>

              {/* RACK title above the rack rows */}
              <text x="0" y="84" fill="rgba(247,245,243,0.45)"
                fontSize="9" fontWeight="600" letterSpacing="1.4"
                fontFamily="'Inter Tight', sans-serif">
                NP-RACK / 1U SLOTS
              </text>
              <line x1="0" y1="92" x2="799" y2="92" stroke="rgba(247,245,243,0.10)" strokeWidth="1" />

              {/* The rack: 4 rows */}
              <g transform="translate(0,104)">
                <RackRow y={0}   label="riverbendbotanicals.com"   sub="SLOT 01 · LITESPEED"  signal={[6,10,8,14,11,16,12,18,14]} accent />
                <RackRow y={64}  label="willametteoutdoor.co"      sub="SLOT 02 · LITESPEED"  signal={[8,12,10,9,14,11,15,13,17]} />
                <RackRow y={128} label="emberandoakstudio.com"     sub="SLOT 03 · LITESPEED"  signal={[10,8,14,12,16,13,11,15,18]} accent />
                <RackRow y={192} label="coastal-music.org"         sub="SLOT 04 · LITESPEED"  signal={[12,9,11,15,10,14,12,16,13]} />
              </g>

              {/* Bottom: SSL + backups chip strip */}
              <g transform="translate(0,372)">
                <rect x="0" y="0" width="799" height="60" fill="#1d1f23"
                  stroke="rgba(247,245,243,0.12)" strokeWidth="1" />
                {/* SSL */}
                <g transform="translate(20,18)">
                  <g stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
                    <rect x="2" y="8" width="18" height="14" />
                    <path d="M6 8 V5 a5 5 0 0 1 10 0 V8" />
                  </g>
                  <text x="32" y="8" fill="rgba(247,245,243,0.55)"
                    fontSize="9" fontWeight="600" letterSpacing="1.2"
                    fontFamily="'Inter Tight', sans-serif">
                    SSL
                  </text>
                  <text x="32" y="24" fill="var(--light)"
                    fontSize="13" fontWeight="500" letterSpacing="-0.2"
                    fontFamily="'Inter Tight', sans-serif">
                    Auto-renewing
                  </text>
                </g>
                {/* Backups */}
                <g transform="translate(240,18)">
                  <g stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
                    <ellipse cx="11" cy="5" rx="9" ry="3" />
                    <path d="M2 5 V18 a9 3 0 0 0 18 0 V5" />
                    <path d="M2 11 a9 3 0 0 0 18 0" />
                  </g>
                  <text x="32" y="8" fill="rgba(247,245,243,0.55)"
                    fontSize="9" fontWeight="600" letterSpacing="1.2"
                    fontFamily="'Inter Tight', sans-serif">
                    BACKUPS
                  </text>
                  <text x="32" y="24" fill="var(--light)"
                    fontSize="13" fontWeight="500" letterSpacing="-0.2"
                    fontFamily="'Inter Tight', sans-serif">
                    Last: 2h ago
                  </text>
                </g>
                {/* Firewall */}
                <g transform="translate(460,18)">
                  <g stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
                    <path d="M11 1 L21 4 V12 C21 18 16 22 11 23 C6 22 1 18 1 12 V4 Z" />
                  </g>
                  <text x="32" y="8" fill="rgba(247,245,243,0.55)"
                    fontSize="9" fontWeight="600" letterSpacing="1.2"
                    fontFamily="'Inter Tight', sans-serif">
                    FIREWALL
                  </text>
                  <text x="32" y="24" fill="var(--light)"
                    fontSize="13" fontWeight="500" letterSpacing="-0.2"
                    fontFamily="'Inter Tight', sans-serif">
                    Multi-layer
                  </text>
                </g>
                {/* Malware */}
                <g transform="translate(679,18)">
                  <g stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
                    <circle cx="9" cy="11" r="7" />
                    <path d="M14 16 L20 22" />
                  </g>
                  <text x="32" y="8" fill="rgba(247,245,243,0.55)"
                    fontSize="9" fontWeight="600" letterSpacing="1.2"
                    fontFamily="'Inter Tight', sans-serif">
                    MALWARE
                  </text>
                  <text x="32" y="24" fill="var(--light)"
                    fontSize="13" fontWeight="500" letterSpacing="-0.2"
                    fontFamily="'Inter Tight', sans-serif">
                    Scanning
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(247,245,243,0.12)',
          marginTop: 'auto',
        }}>
          {[
            { label: 'See hosting plans',  sub: 'Built for our sites',     href: '#features' },
            { label: 'Register a domain',  sub: 'We handle setup',          href: '#getting-started' },
            { label: 'Just getting started?', sub: 'Call 541-359-2906',     href: '#getting-started' },
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
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(247,245,243,0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
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

window.HostingHero = HostingHero;
