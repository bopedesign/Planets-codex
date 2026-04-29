const MoreThanDesign = () => {
  const pillars = [
    {
      num: '01',
      title: 'Right software',
      body: 'Choosing the right CMS and stack makes your site easy to update, less likely to break, and faster to load. We match the platform to how your team actually works.',
      metric: 'Faster by default',
      metricVal: '< 1.5s LCP'
    },
    {
      num: '02',
      title: 'Structured for Google',
      body: 'Semantic markup, clean URLs, schema, and a page structure Google can actually index. Good SEO starts at the HTML, not the blog post.',
      metric: 'Core Web Vitals',
      metricVal: 'Green across the board'
    },
    {
      num: '03',
      title: 'Built to grow',
      body: 'A site that\'s easy to extend is a site that keeps working for you. We plan for the second and third year of your business — not just launch week.',
      metric: 'Years served',
      metricVal: 'Avg. 4.2'
    },
  ];

  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      padding: '110px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%',
        background: 'radial-gradient(ellipse at top right, rgba(211,50,106,0.12) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <div className="eyebrow" data-on="dark" style={{ marginBottom: 22 }}>Not just pretty pixels</div>
            <h2 style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              There is a lot that goes into website design, <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(247,245,243,0.6)' }}>beyond just the design</span>.
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(247,245,243,0.75)', margin: 0, maxWidth: 420 }}>
              We go beyond basic design to make sure your site has all of the elements necessary to succeed and grow with your business over time. Three things we obsess over:
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--rule-dark)' }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              padding: '36px 32px 36px',
              paddingLeft: i === 0 ? 0 : 32,
              paddingRight: i === 2 ? 0 : 32,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-dark)',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
                <span style={{ color: 'var(--accent-on-dark)', fontSize: 14, fontWeight: 600, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.06em' }}>
                  {p.num}
                </span>
                <span style={{
                  display: 'inline-block',
                  width: 6, height: 6,
                  background: 'var(--accent-on-dark)',
                  transform: 'rotate(45deg)'
                }} />
              </div>
              <h3 style={{
                fontSize: 26,
                letterSpacing: '-0.02em',
                fontWeight: 500,
                margin: '0 0 14px 0',
              }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(247,245,243,0.75)', margin: '0 0 32px', minHeight: 100 }}>
                {p.body}
              </p>
              <div style={{ borderTop: '1px solid var(--rule-dark)', paddingTop: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(247,245,243,0.7)', marginBottom: 6 }}>
                  {p.metric}
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>
                  {p.metricVal}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.MoreThanDesign = MoreThanDesign;
