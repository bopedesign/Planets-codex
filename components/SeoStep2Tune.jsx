const SeoStep2Tune = () => {
  const viewport = useResponsive();
  const Icon = ({ d, size = 26 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block' }}>
      {d}
    </svg>
  );

  const services = [
    {
      title: 'Website usability & content',
      lede: 'Your site is only as good as its content.',
      body: 'Site copy needs to actually engage visitors enough to turn them into customers. Accuracy, readability and relevance also affect placement in search results. We help craft compelling content based on keyword research and analysis. That covers copywriting, keyword research, and on-page SEO. Usability and accessibility come next: how information is presented can make the difference between an engaged visitor and a bounce.',
      asks: ['Copywriting', 'Keyword research', 'On-page SEO', 'Usability fixes'],
      // Document with text lines
      icon: <Icon d={<>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 12h7" />
        <path d="M9 16h5" />
      </>} />,
    },
    {
      title: 'Local business SEO',
      lede: 'Most bang for your buck, with little ongoing maintenance.',
      body: 'For local businesses there is a checklist of things to set up once that do not take a lot of maintenance or ongoing cost, and they will get you the most return. We focus on those items first; they are usually our top recommendations.',
      asks: ['Local schema', 'GMB profile', 'Citations', 'NAP consistency'],
      // Map pin
      icon: <Icon d={<>
        <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </>} />,
    },
    {
      title: 'Reviews, reviews, reviews',
      lede: 'Reach leads outside the circle of your existing clients.',
      body: 'Reviews can increase your local and organic rank and let you reach leads beyond your existing clients. We help you create a plan to contact past and future clients that fits your existing operations, plus guidelines for handling negative reviews. The goal is to work with the client to improve their experience and get the review updated.',
      asks: ['Outreach plan', 'Review monitoring', 'Negative review playbook'],
      // Star
      icon: <Icon d={<>
        <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
      </>} />,
    },
    {
      title: 'Social media setup & planning',
      lede: 'Be seen on the channels that matter to your audience.',
      body: 'Social channels are a great way to see and be seen. Profiles and reviews on Yelp, Google My Business and Facebook bring new visitors. Twitter, Pinterest, Instagram and YouTube help you show what you know and who you are. We can help set up profiles, post content, and interact with your audience.',
      asks: ['Profile setup', 'Content posting', 'Audience engagement'],
      // Share / network nodes
      icon: <Icon d={<>
        <circle cx="6" cy="12" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="18" cy="18" r="2.2" />
        <path d="M8 11l8-4" />
        <path d="M8 13l8 4" />
      </>} />,
    },
  ];

  return (
    <section id="step-tune" style={{ background: 'var(--light)', padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '120px 0 130px' }}>
      <div className="wrap">
        {/* Section header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-text)' }}>
                Step 02 · Tune
              </span>
            </div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 60, 48, 34),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Turn the audit into <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>action</span>.
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 460 }}>
              Action depends on what we found. We tell you which items will move the needle most. Some you may handle yourself; others you may want help with. Here is what we can take off your plate.
            </p>
          </div>
        </div>

        {/* Two-column service cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-light)',
        }}>
          {services.map((s, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            return (
              <div key={i} style={{
                padding: '44px 36px',
                paddingLeft: col === 0 ? 0 : 44,
                paddingRight: col === 1 ? 0 : 44,
                borderLeft: col === 0 ? 'none' : '1px solid var(--rule-light)',
                borderBottom: '1px solid var(--rule-light)',
                position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                  <span style={{ color: 'var(--accent-text)' }}>
                    {s.icon}
                  </span>
                  <span style={{
                    display: 'inline-block',
                    width: 6, height: 6,
                    background: 'var(--accent)',
                    transform: 'rotate(45deg)',
                  }} />
                </div>
                <h3 style={{
                  fontSize: 28,
                  fontWeight: 500,
                  letterSpacing: '-0.022em',
                  margin: '0 0 12px',
                  lineHeight: 1.15,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: 'var(--dark)',
                  margin: '0 0 16px',
                  lineHeight: 1.4,
                }}>
                  {s.lede}
                </p>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--muted-light)',
                  margin: '0 0 24px',
                }}>
                  {s.body}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                }}>
                  {s.asks.map(a => (
                    <span key={a} style={{
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      padding: '6px 12px',
                      background: 'var(--light-2)',
                      color: 'var(--muted-light)',
                      border: '1px solid var(--rule-light)',
                    }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.SeoStep2Tune = SeoStep2Tune;
