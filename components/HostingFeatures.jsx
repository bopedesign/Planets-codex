/* Hosting Features — 6 plan inclusions in a 2x3 bordered card grid +
   a 7th card that links out to nineplanetshosting.com. Same visual rhythm
   as the redesigned TechProSupport grid. */

const HostingFeatures = () => {
  const features = [
    {
      title: 'LiteSpeed servers',
      body: 'High-performance LiteSpeed stack tuned for WordPress and modern PHP. Pages render fast for visitors near and far.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <path d="M14 2 L4 16 H13 L11 26 L22 12 H13 Z" />
        </g>
      ),
    },
    {
      title: 'Automatic backups',
      body: 'Nightly off-site snapshots of every site. One-click restore if a plugin update or stray edit goes sideways.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <ellipse cx="14" cy="6" rx="11" ry="3.5" />
          <path d="M3 6 V20 a11 3.5 0 0 0 22 0 V6" />
          <path d="M3 13 a11 3.5 0 0 0 22 0" />
        </g>
      ),
    },
    {
      title: 'Malware scanning',
      body: 'Continuous server-side scans flag and quarantine suspicious files before they reach your visitors.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <circle cx="12" cy="12" r="8" />
          <path d="M18 18 L25 25" />
          <path d="M9 12 L11 14 L15 9" />
        </g>
      ),
    },
    {
      title: 'Multi-layer firewall',
      body: 'Application and network-level rules block bots, brute-force attempts, and the noisy traffic small sites attract.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <path d="M14 2 L25 6 V14 C25 21 19 25 14 26 C9 25 3 21 3 14 V6 Z" />
          <path d="M3 11 H25 M3 18 H25 M14 2 V26" />
        </g>
      ),
    },
    {
      title: 'Expert support',
      body: 'A real person at a local number when something needs attention. No tier-one scripts, no overseas runaround.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <path d="M5 11 a9 9 0 0 1 18 0 V20 a3 3 0 0 1 -3 3 H17" />
          <rect x="3" y="14" width="6" height="8" />
          <rect x="19" y="14" width="6" height="8" />
        </g>
      ),
    },
    {
      title: 'Secure certificate',
      body: 'Free, auto-renewing SSL on every domain. The little padlock is on by default, not an upcharge.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <rect x="5" y="12" width="18" height="13" />
          <path d="M9 12 V8 a5 5 0 0 1 10 0 V12" />
          <path d="M14 17 V20" />
        </g>
      ),
    },
  ];

  return (
    <section id="features" style={{ background: 'var(--light)', padding: '120px 0 110px' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom: 80, maxWidth: 1100 }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>What's included</div>
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
              The assurance your site is <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>online and intact</span>.
            </h2>
            <p style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: 'var(--muted-light)',
              margin: 0,
              maxWidth: 440,
              paddingBottom: 8,
            }}>
              You need to know your website will be there for your customers and visitors, with all of its data intact. Every plan we offer comes with these features at no extra charge.
            </p>
          </div>
        </div>

        {/* Feature card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-light)',
          borderLeft: '1px solid var(--rule-light)',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              borderRight: '1px solid var(--rule-light)',
              borderBottom: '1px solid var(--rule-light)',
              padding: '40px 36px 44px',
              background: 'var(--light)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                marginBottom: 22,
              }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  {f.icon}
                </svg>
              </div>
              <h3 style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: '-0.02em',
                margin: '0 0 12px',
                lineHeight: 1.2,
                textWrap: 'balance',
              }}>
                {f.title}
              </h3>
              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: 'var(--muted-light)',
                margin: 0,
              }}>
                {f.body}
              </p>
            </div>
          ))}

          {/* External-link card to Nine Planets Hosting */}
          <div style={{
            borderRight: '1px solid var(--rule-light)',
            borderBottom: '1px solid var(--rule-light)',
            padding: '40px 36px 44px',
            background: 'var(--dark)',
            color: 'var(--light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 32,
            gridColumn: 'span 3',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr',
              gap: 60,
              alignItems: 'center',
            }}>
              <div>
                <div style={{
                  fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--accent-on-dark)',
                  marginBottom: 14,
                }}>
                  Browse plans
                </div>
                <h3 style={{
                  fontSize: 38,
                  fontWeight: 400,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.05,
                  textWrap: 'balance',
                }}>
                  See full pricing and plan details at <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-on-dark)' }}>Nine Planets Hosting</span>.
                </h3>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href="https://nineplanetshosting.com" target="_blank" rel="noopener noreferrer"
                  className="btn btn-light"
                  style={{ padding: '18px 26px', fontSize: 15 }}
                >
                  <span>Nine Planets Hosting</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.HostingFeatures = HostingFeatures;
