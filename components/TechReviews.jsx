/* Tech Support reviews — same visual treatment as HomeReviews but tailored
   copy so the testimonials speak specifically to "Pro Support" experiences. */

const TechStar = ({ size = 14, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill={filled ? 'var(--accent)' : 'none'}>
    <path d="M7 1.2l1.8 3.65 4.03.59-2.92 2.84.69 4.02L7 10.4l-3.6 1.9.69-4.02L1.17 5.44l4.03-.59L7 1.2z" stroke="var(--accent)" strokeWidth="0.8" />
  </svg>
);

const TechReviews = () => {
  const viewport = useResponsive();
  const reviews = [
    {
      body: 'Had a checkout bug on a Friday afternoon. Submitted a ticket, they had it patched before end of day. Saved our whole weekend of sales.',
      name: 'David Renner',
      role: 'Owner, Northline Supply',
    },
    {
      body: 'I buy a block every couple of months and use it for whatever comes up: small design tweaks, a new plugin, an email template. It\'s like having a dev on speed dial.',
      name: 'Lena Whitaker',
      role: 'Director, Coastal Music Academy',
    },
    {
      body: 'Live training on our own site was a game changer for my staff. They understand our WordPress better now than they understood our old platform.',
      name: 'Marcus Idowu',
      role: 'GM, Cedar Grove Hospitality',
    },
  ];

  return (
    <section style={{ background: 'var(--light)', padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '90px 0' : '110px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'left', marginBottom: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 4, marginBottom: 20 }}>
            {[0,1,2,3,4].map(i => <TechStar key={i} size={18} />)}
          </div>
          <h2 style={{
            fontSize: pickResponsive(viewport, 48, 42, 34),
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
            color: 'var(--dark)',
          }}>
            What people are saying<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>about Pro Support</span>.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: viewport.isMobile ? '1fr' : viewport.isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 24 }}>
          {reviews.map((r, i) => (
            <figure key={i} style={{
              background: 'var(--light-2)',
              border: '1px solid var(--rule-light)',
              padding: '32px 28px',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {[0,1,2,3,4].map(j => <TechStar key={j} size={12} />)}
              </div>
              <blockquote style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.55,
                letterSpacing: '-0.005em',
                color: 'var(--dark)',
                flex: 1,
                textWrap: 'pretty',
              }}>
                "{r.body}"
              </blockquote>
              <figcaption style={{
                borderTop: '1px solid var(--rule-light)',
                paddingTop: 18,
                fontSize: 13,
              }}>
                <div style={{ fontWeight: 500, color: 'var(--dark)', marginBottom: 2 }}>{r.name}</div>
                <div style={{ color: 'var(--muted-light)' }}>{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

window.TechReviews = TechReviews;
