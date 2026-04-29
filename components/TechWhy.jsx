/* Why It Works — Fast / Knowledgeable / Affordable value props.
   Three cards on the light background that round out the pitch before
   reviews. Each has a small index, an icon, a tight headline and copy. */

const TechWhy = () => {
  const items = [
    {
      num: '01',
      label: 'Fast',
      title: 'Quick jobs in 24 hrs, often less.',
      body: 'Anything that can be done in 15 minutes or less is usually finished within a business day of submission.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <circle cx="22" cy="22" r="15" />
          <path d="M22 12 V22 L29 26" strokeLinecap="square" />
        </g>
      ),
    },
    {
      num: '02',
      label: 'Knowledgeable',
      title: 'Senior developers. No juniors, no outsourcing.',
      body: 'Text won\'t land where you want it? Images out of alignment? Tell us what you\'re seeing and we\'ll debug it.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <path d="M14 12 L8 22 L14 32" strokeLinecap="square" />
          <path d="M30 12 L36 22 L30 32" strokeLinecap="square" />
          <line x1="26" y1="10" x2="18" y2="34" strokeLinecap="square" />
        </g>
      ),
    },
    {
      num: '03',
      label: 'Affordable',
      title: 'No monthly commitment. Pay as you go.',
      body: '30-minute blocks, banked until you need them. Use one this month, four next month, none the month after. Up to you.',
      icon: (
        <g stroke="var(--accent-text)" strokeWidth="1.4" fill="none">
          <rect x="8" y="14" width="28" height="18" />
          <circle cx="22" cy="23" r="4" />
          <line x1="12" y1="18" x2="14" y2="18" strokeLinecap="square" />
          <line x1="30" y1="28" x2="32" y2="28" strokeLinecap="square" />
        </g>
      ),
    },
  ];

  return (
    <section id="why" style={{ background: 'var(--light-2)', padding: '120px 0 110px' }}>
      <div className="wrap">
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>Why Pro Support works</div>
          <h2 style={{
            fontSize: 48,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
          }}>
            Fast, knowledgeable, and priced so it makes sense to just <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>ask us</span>.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: 'var(--light)',
              border: '1px solid var(--rule-light)',
              padding: '40px 32px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{
                  color: 'var(--accent-text)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {it.label.toUpperCase()}
                </span>
                <svg width="44" height="44" viewBox="0 0 44 44">
                  {it.icon}
                </svg>
              </div>
              <h3 style={{
                fontSize: 24,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                margin: 0,
                lineHeight: 1.2,
                textWrap: 'balance',
              }}>
                {it.title}
              </h3>
              <p style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: 'var(--muted-light)',
                margin: 0,
                textWrap: 'pretty',
              }}>
                {it.body}
              </p>
            </div>
          ))}
        </div>

        {/* Consultation CTA, slotted into Why section */}
        {window.Consult && <window.Consult inline noReviews />}
      </div>
    </section>
  );
};

window.TechWhy = TechWhy;
