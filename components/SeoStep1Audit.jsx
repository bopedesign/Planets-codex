const SeoStep1Audit = () => {
  // Inline SVG icons — single-stroke, monochrome, scaled to 22px.
  const Icon = ({ d, size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }}>
      {d}
    </svg>
  );

  const checks = [
    {
      title: 'Speed, performance & usability',
      body: 'Run a speed test, check for mobile friendliness, navigability, and other fundamental elements that affect search ranking.',
      // Speedometer / gauge
      icon: <Icon d={<>
        <path d="M3 13a9 9 0 1 1 18 0" />
        <path d="M12 13l5-4" />
        <circle cx="12" cy="13" r="1.2" fill="currentColor" stroke="none" />
      </>} />,
    },
    {
      title: 'Current search optimization',
      body: 'Is local schema present and configured correctly? Is your XML sitemap current and accurate? Are pages structured for optimal indexing?',
      // Magnifying glass
      icon: <Icon d={<>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.3-4.3" />
      </>} />,
    },
    {
      title: 'Security',
      body: 'Do you have an SSL certificate configured correctly? Does your site have security features installed and running?',
      // Shield with check
      icon: <Icon d={<>
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </>} />,
    },
    {
      title: 'Google Analytics & Search Console',
      body: 'Both installed, properly configured, and cross-linked? If analytics is present, we pull a baseline of recent traffic and visitor activity.',
      // Bar chart
      icon: <Icon d={<>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-8" />
        <path d="M22 20H2" />
      </>} />,
    },
    {
      title: 'Social media & reviews',
      body: 'Do social accounts exist, are they easy to find, configured and cross-linked correctly? How do reviews look on the common review sites?',
      // Star
      icon: <Icon d={<>
        <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
      </>} />,
    },
    {
      title: 'Local business features',
      body: 'Is your Google My Business account complete? Is Local Business Schema installed and configured on the website?',
      // Map pin
      icon: <Icon d={<>
        <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </>} />,
    },
  ];

  return (
    <section id="step-test" style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      padding: '120px 0 130px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%',
        background: 'radial-gradient(ellipse at top right, rgba(211,50,106,0.12) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        {/* Section header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-on-dark)' }}>
                Step 01 · Test
              </span>
            </div>
            <h2 style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Foundational <span style={{ fontStyle: 'italic', fontWeight: 300 }}>website audit</span>.
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(247,245,243,0.78)', margin: 0, maxWidth: 460 }}>
              Does your site have what Google is looking for? When we run a website audit, we check the boxes Google is looking for and tell you what is missing. You will get a report and a scheduled call to walk through what it all means. Often there are quick, easy fixes that meaningfully improve your ranking.
            </p>
          </div>
        </div>

        {/* Checklist grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-dark)',
          borderBottom: '1px solid var(--rule-dark)',
        }}>
          {checks.map((c, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div key={i} style={{
                padding: '36px 32px 36px',
                paddingLeft: col === 0 ? 0 : 32,
                paddingRight: col === 2 ? 0 : 32,
                borderLeft: col === 0 ? 'none' : '1px solid var(--rule-dark)',
                borderTop: row === 0 ? 'none' : '1px solid var(--rule-dark)',
                position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
                  <span style={{
                    color: 'var(--accent-on-dark)',
                    marginTop: 2,
                  }}>
                    {c.icon}
                  </span>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: '-0.018em',
                    margin: 0,
                    lineHeight: 1.25,
                  }}>
                    {c.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'rgba(247,245,243,0.72)',
                  margin: 0,
                  paddingLeft: 36,
                }}>
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recap + CTA */}
        <div style={{
          marginTop: 70,
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(247,245,243,0.85)', margin: 0, maxWidth: 640 }}>
              At the end you get a report on what is working well and what may need to change to achieve better results. For most clients we recommend repeating the audit once a year. That keeps your site meeting Google&rsquo;s current standards and ensures you are taking advantage of every easy way to improve and maintain rank.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#" className="btn btn-light">
              Ask about a website audit
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.SeoStep1Audit = SeoStep1Audit;
