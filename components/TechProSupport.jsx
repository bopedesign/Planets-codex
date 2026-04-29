/* Pro Support — intro + services bullet list + CTA. Follows the A11yIntro
   two-column headline pattern, then lists the things Pro Support covers in
   a simple, numbered list with short descriptors. */

const TechProSupport = () => {
  // Stroke-based line icons, matched to the design system's understated line-art feel
  const ICON_STROKE = 'currentColor';
  const iconProps = {
    width: 44,
    height: 44,
    viewBox: '0 0 44 44',
    fill: 'none',
    stroke: ICON_STROKE,
    strokeWidth: 1.25,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  const services = [
    {
      title: 'Debug a software issue',
      body: 'Track down the broken plugin, the missing script, the CSS rule fighting your template. We fix it at the source.',
      // Bug / magnifier — debugging
      icon: (
        <svg {...iconProps}>
          <circle cx="19" cy="19" r="9" />
          <path d="M19 10v18M10 19h18" />
          <path d="M11.5 13.5l-3 -3M26.5 13.5l3 -3M11.5 24.5l-3 3M26.5 24.5l3 3" />
          <path d="M26 26l8 8" />
        </svg>
      ),
    },
    {
      title: 'Find a plugin to your specs',
      body: 'Tell us what you need and we research the options, test them, and install the one that fits.',
      // Puzzle piece — plugin
      icon: (
        <svg {...iconProps}>
          <path d="M9 12h7a2.5 2.5 0 1 1 5 0h7v7a2.5 2.5 0 1 0 0 5v7H21a2.5 2.5 0 1 1 -5 0H9V24a2.5 2.5 0 1 0 0 -5V12z" />
        </svg>
      ),
    },
    {
      title: 'Design a new page',
      body: 'Landing page, sales page, event page, designed, built and integrated with your existing site.',
      // Layout / page wireframe
      icon: (
        <svg {...iconProps}>
          <rect x="8" y="8" width="28" height="28" rx="1.5" />
          <path d="M8 15h28" />
          <path d="M15 15v21" />
          <path d="M19 21h13M19 25h13M19 29h9" />
        </svg>
      ),
    },
    {
      title: 'Custom coding',
      body: 'Custom behaviors, form logic, integrations, API hookups. Anything your off-the-shelf tools can\'t do.',
      // Code brackets
      icon: (
        <svg {...iconProps}>
          <path d="M16 14L7 22l9 8" />
          <path d="M28 14l9 8 -9 8" />
          <path d="M25 11l-6 22" />
        </svg>
      ),
    },
    {
      title: 'Live training on your website',
      body: 'Screen-share walkthroughs tailored to your site. Questions answered in real time, recorded for your team.',
      // Monitor with play — screen-share training
      icon: (
        <svg {...iconProps}>
          <rect x="6" y="9" width="32" height="22" rx="1.5" />
          <path d="M16 36h12" />
          <path d="M22 31v5" />
          <path d="M19 16.5l8 4 -8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="pro-support" style={{ background: 'var(--light)', padding: '120px 0 110px' }}>
      <div className="wrap">
        {/* Header — left-aligned headline + supporting paragraph */}
        <div style={{ marginBottom: 80, maxWidth: 1100 }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>Pro Support</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 80,
            alignItems: 'end',
          }}>
            <h2 style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Expert help for <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>
              advanced tasks</span>.
            </h2>
            <p style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: 'var(--muted-light)',
              margin: 0,
              maxWidth: 440,
              paddingBottom: 8,
            }}>
              Pro Support gets you a senior developer for the jobs that don't fit neatly in a help-doc article: debugging, custom work, even live training. Sold in 30-minute blocks. Use them as you need them.
            </p>
          </div>
        </div>

        {/* Services — 2-column card grid, big numerals as display element */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-light)',
          borderLeft: '1px solid var(--rule-light)',
        }}>
          {services.map((s, i) => (
            <div key={i} style={{
              borderRight: '1px solid var(--rule-light)',
              borderBottom: '1px solid var(--rule-light)',
              padding: '40px 44px 44px',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              columnGap: 32,
              rowGap: 14,
              alignItems: 'baseline',
              background: 'var(--light)',
            }}>
              <div style={{
                color: 'var(--accent-text)',
                gridRow: '1 / span 2',
                alignSelf: 'start',
                paddingTop: 2,
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {s.icon}
              </div>
              <h3 style={{
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: '-0.02em',
                margin: 0,
                lineHeight: 1.2,
                textWrap: 'balance',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: 'var(--muted-light)',
                margin: 0,
              }}>
                {s.body}
              </p>
            </div>
          ))}
          {/* Trailing CTA card to fill the 6th cell of the 2x3 grid */}
          <div style={{
            borderRight: '1px solid var(--rule-light)',
            borderBottom: '1px solid var(--rule-light)',
            padding: '40px 44px 44px',
            background: 'var(--dark)',
            color: 'var(--light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 32,
          }}>
            <h3 style={{
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.2,
              maxWidth: 340,
              textWrap: 'balance',
            }}>
              Have something else in mind? <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-on-dark)' }}>Just ask.</span>
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <a href="#" style={{
                color: 'var(--light)',
                fontSize: 15,
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                borderBottom: '1px solid var(--accent-on-dark)',
                paddingBottom: 4,
              }}>
                Submit a ticket <span>→</span>
              </a>
              <span style={{ fontSize: 13, color: 'rgba(247,245,243,0.55)' }}>30-min blocks</span>
            </div>
          </div>
        </div>

        {/* Bottom action row */}
        <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 24 }}>
          <a href="#" className="btn btn-primary">
            Order Today <span className="arrow">→</span>
          </a>
          <span style={{ fontSize: 14, color: 'var(--muted-light)' }}>
            30-minute blocks. No monthly commitment.
          </span>
        </div>
      </div>
    </section>
  );
};

window.TechProSupport = TechProSupport;
