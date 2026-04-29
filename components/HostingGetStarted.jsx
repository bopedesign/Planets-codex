/* Hosting Get Started — phone-led CTA. Two-column layout: left has the
   headline + body, right has a large phone number rendered as the primary
   visual element with sub-actions. */

const HostingGetStarted = () => {
  return (
    <section id="getting-started" style={{
      background: 'var(--light)',
      padding: '120px 0 130px',
    }}>
      <div className="wrap">
        <div style={{
          background: 'var(--light-2)',
          border: '1px solid var(--rule-light)',
          padding: '80px 90px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: 90,
          alignItems: 'center',
          position: 'relative',
        }}>
          {/* Left: copy */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Just getting started?</div>
            <h2 style={{
              fontSize: 56,
              lineHeight: 1.04,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: '0 0 24px',
              textWrap: 'balance',
            }}>
              We'll recommend the <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>right plan</span> for your site.
            </h2>
            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--muted-light)',
              margin: '0 0 32px',
              maxWidth: 480,
            }}>
              Tell us a little about your site (or the site you're planning), your traffic, and your budget. We'll point you to the package that actually fits.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <a href="#" className="btn btn-primary">
                <span>Email us</span>
                <span className="arrow">→</span>
              </a>
              <a href="#" className="btn btn-outline">
                <span>Schedule a call</span>
              </a>
            </div>
          </div>

          {/* Right: phone CTA card */}
          <div style={{
            background: 'var(--light)',
            border: '1px solid var(--rule-light)',
            padding: '40px 44px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: 28, right: 32,
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--muted-light)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#5fb37e', display: 'inline-block',
                boxShadow: '0 0 0 4px rgba(95,179,126,0.18)',
              }} />
              <span>Mon-Fri · 9-5 PT</span>
            </div>

            <div className="eyebrow" style={{ marginBottom: 18 }}>Call us</div>

            <a href="tel:5413592906" style={{
              display: 'block',
              fontSize: 64,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              fontWeight: 400,
              color: 'var(--dark)',
              margin: '0 0 24px',
              fontVariantNumeric: 'tabular-nums',
            }}>
              541<span style={{ color: 'var(--accent-text)' }}>·</span>359<span style={{ color: 'var(--accent-text)' }}>·</span>2906
            </a>

            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 22 }} />

            <p style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--muted-light)',
              margin: 0,
              maxWidth: 380,
            }}>
              A quick conversation with one of our team. We'll listen, ask a few questions, and recommend the package that fits your requirements and budget.
            </p>

            {/* Bottom row of micro-stats */}
            <div style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: '1px solid var(--rule-light)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}>
              {[
                { v: '15 yrs',  l: 'Hosting locally' },
                { v: '100+',    l: 'Sites hosted' },
                { v: '99.99%',  l: 'Uptime SLA' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: 'var(--dark)',
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {s.v}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: 'var(--muted-light)',
                    marginTop: 4,
                  }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.HostingGetStarted = HostingGetStarted;
