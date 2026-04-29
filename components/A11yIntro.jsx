/* Intro / Three-pillar overview for the Accessibility page.
   Mirrors the SeoIntro structure (headline + eyebrow + 3-col pillar grid)
   so services feel consistent, but the copy is tuned to access, not SEO. */
const A11yIntro = () => {
  const pillars = [
    {
      num: '01',
      tag: 'Design',
      title: 'Inclusive by design',
      body: 'Sites built to be perceivable, operable, understandable and robust for people of all abilities.',
    },
    {
      num: '02',
      tag: 'Review',
      title: 'Audit & remediate',
      body: 'We test against WCAG 2.1 AA, report what we find, and implement the fixes your site needs.',
    },
    {
      num: '03',
      tag: 'Sustain',
      title: 'Train your team',
      body: 'Your team learns how to keep the site accessible as you add content, products and pages.',
    },
  ];

  return (
    <section style={{ background: 'var(--light)', padding: '120px 0 110px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>What accessibility means, in practice</div>
            <h2 style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Accessible sites work for everyone. <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>That includes your customers.</span>
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 460 }}>
              An accessible site is easier for screen readers, easier for keyboards, easier for low vision and color blindness, and easier for everyone on a slow connection or a small phone. Accessibility is just good web design, with the edges filed off.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--rule-light)' }}>
          {pillars.map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px 36px',
              paddingLeft: i === 0 ? 0 : 36,
              paddingRight: i === 2 ? 0 : 36,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-light)',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
                <span style={{ color: 'var(--accent-text)', fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.06em' }}>
                  Pillar {s.num}
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

window.A11yIntro = A11yIntro;
