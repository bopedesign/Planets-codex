const SeoStep3Track = () => {
  const tiers = [
    {
      name: 'Local Search Tracker',
      tagline: 'Just the reports',
      price: 29,
      featured: false,
      groups: [
        {
          heading: 'Monthly Reports',
          items: [
            'Organic keyword tracking',
            'Google My Business insights',
            'Online reviews',
          ],
        },
      ],
    },
    {
      name: 'Local Search Manager',
      tagline: 'Reports & management',
      price: 89,
      featured: true,
      groups: [
        {
          heading: 'Monthly Reports',
          items: [
            'Organic keyword tracking',
            'Google My Business insights',
            'Online reviews',
          ],
        },
        {
          heading: 'Google Management',
          items: [
            'Monitor Google My Business',
            'Monitor Google Search Console',
            'Post weekly GMB updates',
          ],
        },
      ],
    },
    {
      name: 'Local Search Advisor',
      tagline: 'Management & audit',
      price: 149,
      featured: false,
      groups: [
        {
          heading: 'Monthly Reports',
          items: [
            'Organic keyword tracking',
            'Google My Business insights',
            'Online reviews',
          ],
        },
        {
          heading: 'Google Management',
          items: [
            'Monitor Google My Business',
            'Monitor Google Search Console',
            'Post weekly GMB updates',
          ],
        },
        {
          heading: 'Quarterly Review',
          items: [
            'Search audit and issue check',
            'Analytics performance review',
            'Recommendations report',
          ],
        },
      ],
    },
  ];

  return (
    <section id="step-track" style={{ background: 'var(--light-2)', padding: '120px 0 130px' }}>
      <div className="wrap">
        {/* Section header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-text)' }}>
                Step 03 · Track
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
              Local search <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>tracking &amp; managing</span>.
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 460 }}>
              Once the groundwork is laid, you do not need thousands a month to maintain position. But you do want to know your ranking is holding and how Google is seeing your site. If something goes wrong, you want to know in days, not 6 to 12 months later.
            </p>
          </div>
        </div>

        {/* Pricing tiers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          alignItems: 'stretch',
        }}>
          {tiers.map((t, i) => {
            const featured = t.featured;
            return (
              <div key={i} style={{
                background: featured ? 'var(--dark)' : 'var(--light)',
                color: featured ? 'var(--light)' : 'var(--dark)',
                padding: '44px 38px 40px',
                position: 'relative',
                borderTop: featured ? 'none' : '1px solid var(--rule-light)',
                borderBottom: featured ? 'none' : '1px solid var(--rule-light)',
                borderRight: i < tiers.length - 1 && !featured ? '1px solid var(--rule-light)' : 'none',
                marginTop: featured ? -16 : 0,
                marginBottom: featured ? -16 : 0,
                boxShadow: featured ? '0 30px 60px -20px rgba(0,0,0,0.3)' : 'none',
                zIndex: featured ? 2 : 1,
                display: 'flex',
                flexDirection: 'column',
              }}>
                {featured && (
                  <div style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-on-dark)',
                    border: '1px solid var(--accent-on-dark)',
                    padding: '5px 10px',
                  }}>
                    Most popular
                  </div>
                )}

                {/* Name + tagline */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: featured ? 'var(--accent-on-dark)' : 'var(--accent-text)',
                    marginBottom: 14,
                  }}>
                    {t.tagline}
                  </div>
                  <h3 style={{
                    fontSize: 26,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    lineHeight: 1.15,
                  }}>
                    {t.name}
                  </h3>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 30, paddingBottom: 26, borderBottom: featured ? '1px solid var(--rule-dark)' : '1px solid var(--rule-light)' }}>
                  <span style={{
                    fontSize: 64,
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    ${t.price}
                  </span>
                  <span style={{
                    fontSize: 14,
                    color: featured ? 'rgba(247,245,243,0.7)' : 'var(--muted-light)',
                    fontWeight: 400,
                  }}>
                    / month
                  </span>
                </div>

                {/* Feature groups */}
                <div style={{ flex: 1 }}>
                  {t.groups.map((g, gi) => (
                    <div key={gi} style={{ marginBottom: 22 }}>
                      <div style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: featured ? 'rgba(247,245,243,0.65)' : 'var(--muted-light)',
                        marginBottom: 12,
                      }}>
                        {g.heading}
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                        {g.items.map((item, ii) => (
                          <li key={ii} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 10,
                            padding: '8px 0',
                            fontSize: 14,
                            lineHeight: 1.45,
                            color: featured ? 'rgba(247,245,243,0.92)' : 'var(--dark)',
                          }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 4, color: featured ? 'var(--accent-on-dark)' : 'var(--accent)' }}>
                              <path d="M2.5 7.2l3 3 6-6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="#" className={featured ? 'btn btn-light' : 'btn btn-outline'} style={{
                  marginTop: 24,
                  justifyContent: 'center',
                  width: '100%',
                }}>
                  Sign up
                  <span className="arrow">→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div style={{
          marginTop: 60,
          padding: '32px 36px',
          background: 'var(--light)',
          border: '1px solid var(--rule-light)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 28,
          alignItems: 'center',
        }}>
          <div style={{
            width: 44, height: 44,
            background: 'var(--accent-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="8.5" stroke="var(--accent)" strokeWidth="1.4" />
              <path d="M11 6.5v5l3 2" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted-light)', margin: 0, maxWidth: 920 }}>
            We agree on spending limits up front. If something is urgent (your site is down) we handle it right away. Otherwise we notify you of issues with recommendations and you decide how to proceed.
          </p>
        </div>
      </div>
    </section>
  );
};

window.SeoStep3Track = SeoStep3Track;
