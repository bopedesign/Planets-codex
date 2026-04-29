/* Hero for the Tech Support & Security page.
   Left side: breadcrumb, title, intro copy, and a bottom 3-col CTA strip
   matching the pattern on SEO / Accessibility service pages.
   Right side: a "support ticket" graphic — a stack of ticket cards with
   one active in the foreground showing resolution progress, plus a
   floating lock/shield chip that reinforces the "security" side of the
   service name. Monochromatic on dark with pink accents. */

const TechHero = () => {
  const viewport = useResponsive();
  // ─── Ticket stack graphic ────────────────────────────────────────────
  const Ticket = ({ x, y, rot, active, title, meta, status, statusColor, lines }) => (
    <g transform={`translate(${x},${y}) rotate(${rot})`} opacity={active ? 1 : 0.5}>
      {/* Card */}
      <rect
        x="0" y="0"
        width="360" height="180"
        fill={active ? '#2e3035' : '#1d1f23'}
        stroke={active ? 'rgba(247,245,243,0.14)' : 'rgba(247,245,243,0.08)'}
        strokeWidth="1"
      />

      {/* Header row */}
      <text x="22" y="32" fill={active ? 'rgba(247,245,243,0.55)' : 'rgba(247,245,243,0.35)'}
        fontSize="10" fontWeight="600" letterSpacing="1.2" fontFamily="'Inter Tight', sans-serif">
        TICKET {meta}
      </text>
      <g transform="translate(238,20)">
        <rect x="0" y="0" width="100" height="22" rx="1" fill="none"
          stroke={active ? statusColor : 'rgba(247,245,243,0.22)'} strokeWidth="1" />
        <circle cx="11" cy="11" r="3" fill={active ? statusColor : 'rgba(247,245,243,0.3)'} />
        <text x="20" y="15" fill={active ? statusColor : 'rgba(247,245,243,0.45)'}
          fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="'Inter Tight', sans-serif">
          {status}
        </text>
      </g>

      {/* Title */}
      <text x="22" y="62" fill={active ? 'var(--light)' : 'rgba(247,245,243,0.55)'}
        fontSize="17" fontWeight="500" letterSpacing="-0.3" fontFamily="'Inter Tight', sans-serif">
        {title}
      </text>

      {/* Line rows — render as tiny task checkboxes for the active card */}
      {active ? (
        lines.map((ln, i) => (
          <g key={i} transform={`translate(22,${90 + i * 22})`}>
            <rect x="0" y="0" width="12" height="12" fill="none"
              stroke={ln.done ? 'var(--accent)' : 'rgba(247,245,243,0.25)'} strokeWidth="1.2" />
            {ln.done && (
              <path d="M2.5 6.2 L5 8.6 L9.6 3.6" stroke="var(--accent)" strokeWidth="1.4"
                fill="none" strokeLinecap="square" />
            )}
            <text x="22" y="10" fill={ln.done ? 'rgba(247,245,243,0.55)' : 'rgba(247,245,243,0.85)'}
              fontSize="12" fontWeight="400" fontFamily="'Inter Tight', sans-serif"
              textDecoration={ln.done ? 'line-through' : 'none'}
              style={{ textDecoration: ln.done ? 'line-through' : 'none' }}>
              {ln.text}
            </text>
          </g>
        ))
      ) : (
        [0, 1, 2].map(i => (
          <rect key={i} x="22" y={96 + i * 16} width={i === 2 ? 180 : 260} height="4"
            fill="rgba(247,245,243,0.10)" />
        ))
      )}
    </g>
  );

  // Smaller ticket card for the queue column
  const MiniTicket = ({ x, y, title, meta, status }) => (
    <g transform={`translate(${x},${y})`} opacity={0.55}>
      <rect x="0" y="0" width="310" height="110" fill="#1d1f23"
        stroke="rgba(247,245,243,0.08)" strokeWidth="1" />

      <text x="20" y="26" fill="rgba(247,245,243,0.35)"
        fontSize="10" fontWeight="600" letterSpacing="1.2"
        fontFamily="'Inter Tight', sans-serif">
        TICKET {meta}
      </text>
      <g transform="translate(220,16)">
        <rect x="0" y="0" width="76" height="20" fill="none"
          stroke="rgba(247,245,243,0.22)" strokeWidth="1" />
        <circle cx="10" cy="10" r="2.5" fill="rgba(247,245,243,0.3)" />
        <text x="18" y="14" fill="rgba(247,245,243,0.45)"
          fontSize="9" fontWeight="600" letterSpacing="1"
          fontFamily="'Inter Tight', sans-serif">
          {status}
        </text>
      </g>

      <text x="20" y="56" fill="rgba(247,245,243,0.7)"
        fontSize="15" fontWeight="500" letterSpacing="-0.25"
        fontFamily="'Inter Tight', sans-serif">
        {title}
      </text>

      {/* placeholder body lines */}
      <rect x="20" y="76" width="240" height="3" fill="rgba(247,245,243,0.10)" />
      <rect x="20" y="86" width="180" height="3" fill="rgba(247,245,243,0.10)" />
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
      {/* Sand wash — top-right soft glow to spotlight the ticket graphic */}
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
              <span style={{ color: 'var(--light)' }}>Tech Support &amp; Security</span>
            </div>
            <h1 style={{
              fontSize: pickResponsive(viewport, 92, 72, 48),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Expert help, <span style={{ fontStyle: 'italic', fontWeight: 300 }}>on demand</span>.
            </h1>
            <p style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'rgba(247,245,243,0.8)',
              margin: '32px 0 0',
              maxWidth: 560,
            }}>
              Debugging, theme changes, custom coding, even live training. Senior developers on call, billed in 30-minute blocks. No monthly retainer. Submit a ticket and we get to work.
            </p>
          </div>

          {/* Ticket queue graphic — horizontal layout */}
          <div style={{ position: 'relative', width: viewport.isMobile ? '100%' : viewport.isTablet ? 620 : 760, height: viewport.isMobile ? 260 : viewport.isTablet ? 300 : 360, flexShrink: 0 }}>
            <svg
              width="760"
              height="360"
              viewBox="0 0 760 360"
              preserveAspectRatio="xMidYMid meet"
              style={{ display: 'block', overflow: 'visible' }}
              aria-hidden="true"
            >
              {/* "AVG RESOLVE" chip — top-left, sits above the active card */}
              <g transform="translate(0,0)">
                <rect x="0" y="0" width="150" height="48" fill="#1d1f23"
                  stroke="rgba(247,245,243,0.12)" strokeWidth="1" />
                <text x="16" y="20" fill="rgba(247,245,243,0.55)"
                  fontSize="9" fontWeight="600" letterSpacing="1.2"
                  fontFamily="'Inter Tight', sans-serif">
                  AVG RESOLVE
                </text>
                <text x="16" y="38" fill="var(--light)"
                  fontSize="16" fontWeight="500" letterSpacing="-0.3"
                  fontFamily="'Inter Tight', sans-serif">
                  &lt; 24 hrs
                </text>
              </g>

              {/* Column header above the queue */}
              <text x="430" y="14" fill="rgba(247,245,243,0.45)"
                fontSize="9" fontWeight="600" letterSpacing="1.4"
                fontFamily="'Inter Tight', sans-serif">
                QUEUE
              </text>
              <line x1="430" y1="22" x2="740" y2="22" stroke="rgba(247,245,243,0.10)" strokeWidth="1" />

              {/* Active ticket — left, full size */}
              <Ticket
                x={0} y={70} rot={0}
                active
                title="Debug checkout redirect"
                meta="#1064"
                status="IN PROGRESS"
                statusColor="var(--accent)"
                lines={[
                  { text: 'Reproduce the issue', done: true },
                  { text: 'Inspect plugin conflict', done: true },
                  { text: 'Patch & verify on staging', done: false },
                ]}
              />

              {/* Right column: two queued mini-tickets */}
              <MiniTicket
                x={430} y={40}
                title="Add contact form to footer"
                meta="#1057"
                status="QUEUED"
              />
              <MiniTicket
                x={430} y={170}
                title="Hero image alignment"
                meta="#1042"
                status="CLOSED"
              />

              {/* Security chip — bottom-right, anchored to right column */}
              <g transform="translate(430,300)">
                <rect x="0" y="0" width="310" height="60" fill="#1d1f23"
                  stroke="rgba(247,245,243,0.12)" strokeWidth="1" />
                <g transform="translate(20,17)" stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
                  <path d="M13 1 L24 5 V14 C24 20 18 24 13 25 C8 24 2 20 2 14 V5 Z" />
                  <path d="M8 13 L12 17 L18 10" />
                </g>
                <text x="56" y="24" fill="rgba(247,245,243,0.55)"
                  fontSize="9" fontWeight="600" letterSpacing="1.2"
                  fontFamily="'Inter Tight', sans-serif">
                  SECURITY
                </text>
                <text x="56" y="44" fill="var(--light)"
                  fontSize="14" fontWeight="500" letterSpacing="-0.2"
                  fontFamily="'Inter Tight', sans-serif">
                  SSL &amp; backups current
                </text>
              </g>

              {/* Bottom-left: response stat chip under active ticket */}
              <g transform="translate(0,300)">
                <rect x="0" y="0" width="180" height="60" fill="#1d1f23"
                  stroke="rgba(247,245,243,0.12)" strokeWidth="1" />
                <text x="16" y="24" fill="rgba(247,245,243,0.55)"
                  fontSize="9" fontWeight="600" letterSpacing="1.2"
                  fontFamily="'Inter Tight', sans-serif">
                  FIRST REPLY
                </text>
                <text x="16" y="44" fill="var(--light)"
                  fontSize="14" fontWeight="500" letterSpacing="-0.2"
                  fontFamily="'Inter Tight', sans-serif">
                  Same business day
                </text>
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
            { label: 'Purchase a block', sub: '30-minute increments',     href: '#how-it-works' },
            { label: 'Submit a ticket',  sub: 'Describe the job',          href: '#how-it-works' },
            { label: 'Get it done',      sub: 'Quick jobs in 24 hrs',      href: '#why' },
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
    </section>
  );
};

window.TechHero = TechHero;
