/* How It Works — three numbered steps (Purchase → Submit → Get it done)
   on a dark band for contrast, followed by a short process explainer.
   Visually echoes the A11y pages' darker "process" bands. */

const TechHowItWorks = () => {
  const viewport = useResponsive();
  const steps = [
    {
      num: '01',
      title: 'Purchase a time block',
      body: 'Buy a 30-minute block (or more). Your time is banked. Use it whenever you need it.',
      icon: (
        <g stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
          <rect x="6" y="10" width="36" height="26" />
          <line x1="6" y1="18" x2="42" y2="18" />
          <rect x="12" y="24" width="8" height="6" fill="var(--accent-on-dark)" stroke="none" />
        </g>
      ),
    },
    {
      num: '02',
      title: 'Submit a ticket',
      body: 'Describe what you need. Screenshots, URLs, anything that helps us scope the work.',
      icon: (
        <g stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
          <path d="M8 10h24l4 5v21H8z" />
          <line x1="14" y1="20" x2="30" y2="20" />
          <line x1="14" y1="26" x2="30" y2="26" />
          <line x1="14" y1="32" x2="24" y2="32" />
        </g>
      ),
    },
    {
      num: '03',
      title: 'Get it done',
      body: 'Quick jobs start immediately. Larger jobs get a quote first, so there are no surprises.',
      icon: (
        <g stroke="var(--accent-on-dark)" strokeWidth="1.3" fill="none">
          <circle cx="24" cy="24" r="16" />
          <path d="M16 24 L22 30 L32 18" strokeWidth="1.6" />
        </g>
      ),
    },
  ];

  return (
    <section id="how-it-works" style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '120px 0 110px',
      position: 'relative',
    }}>
      {/* Subtle soft wash */}
      <div style={{
        position: 'absolute',
        top: -140, right: -120,
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(240,221,208,0.06) 0%, transparent 65%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1fr 1fr',
          gap: viewport.isMobile ? 24 : 80,
          alignItems: 'end',
          marginBottom: 70,
        }}>
          <div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 60, 48, 34),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Three steps. <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(247,245,243,0.55)' }}>
              That's the whole thing.</span>
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(247,245,243,0.7)', margin: 0, maxWidth: 460 }}>
              Once you submit a ticket, we evaluate the job. If it'll take 30 minutes or less, we get started right away. If we think it'll take longer, we send you a quote first, and you approve before the clock starts.
            </p>
          </div>
        </div>

        {/* 3-step grid — left-aligned numbers + icons + copy, separated by rules */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : viewport.isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          borderTop: '1px solid var(--rule-dark)',
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              padding: viewport.isMobile ? '28px 22px' : '48px 36px 44px',
              paddingLeft: i === 0 ? 0 : 40,
              paddingRight: i === 2 ? 0 : 40,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-dark)',
              position: 'relative',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 32,
              }}>
                <span style={{
                  color: 'var(--accent-on-dark)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  STEP {s.num}
                </span>
                <svg width="48" height="48" viewBox="0 0 48 48">
                  {s.icon}
                </svg>
              </div>
              <h3 style={{
                fontSize: 30,
                fontWeight: 400,
                letterSpacing: '-0.022em',
                margin: '0 0 14px',
                lineHeight: 1.1,
                textWrap: 'balance',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: 'rgba(247,245,243,0.7)',
                margin: 0,
              }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.TechHowItWorks = TechHowItWorks;
