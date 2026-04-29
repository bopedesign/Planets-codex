const SeoIntro = () => {
  const steps = [
    {
      num: '01',
      tag: 'Test',
      title: 'Website Audit',
      body: 'Discover what is already working and what is not with a foundational SEO website audit.',
    },
    {
      num: '02',
      tag: 'Tune',
      title: 'Take Action',
      body: 'Turn what you discover into action. Fix problems, enhance assets, or run an ad campaign.',
    },
    {
      num: '03',
      tag: 'Track',
      title: 'Monitor Progress',
      body: 'Set up Search Monitoring to get progressive information about ongoing performance.',
    },
  ];

  return (
    <section style={{ background: 'var(--light)', padding: '120px 0 110px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>A three-step approach</div>
            <h2 style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Search engine ranking is one piece. <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>Conversion is the rest.</span>
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 460 }}>
              Many SEO services focus only on search engine ranking. But if your visitors are not impressed once they arrive, that high ranking has done you no good. We tune both sides at once.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--rule-light)' }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px 36px',
              paddingLeft: i === 0 ? 0 : 36,
              paddingRight: i === 2 ? 0 : 36,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-light)',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
                <span style={{ color: 'var(--accent-text)', fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.06em' }}>
                  Step {s.num}
                </span>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-light)',
                  border: '1px solid var(--rule-light)',
                  padding: '4px 10px',
                }}>
                  {s.tag}
                </span>
              </div>
              <h3 style={{
                fontSize: 30,
                fontWeight: 400,
                letterSpacing: '-0.022em',
                margin: '0 0 14px',
                lineHeight: 1.1,
              }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted-light)', margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.SeoIntro = SeoIntro;
