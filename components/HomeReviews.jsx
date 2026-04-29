/* "Trusted by..." — reviews section on the Home page.
   Mirrors the reviews block used on the Consult page. */

const RStar = ({ size = 14, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill={filled ? 'var(--accent)' : 'none'}>
    <path d="M7 1.2l1.8 3.65 4.03.59-2.92 2.84.69 4.02L7 10.4l-3.6 1.9.69-4.02L1.17 5.44l4.03-.59L7 1.2z" stroke="var(--accent)" strokeWidth="0.8" />
  </svg>
);

const HomeReviews = () => {
  const reviews = [
    {
      body: 'They didn\'t just redesign our site — they reshaped how we talk about our business. Inbound leads tripled in the first quarter.',
      name: 'Megan Ortiz',
      role: 'Founder, Riverbend Botanicals',
    },
    {
      body: 'Responsive, patient, and genuinely invested in whether the site actually worked for our customers. A rare thing.',
      name: 'James Holt',
      role: 'Director, Willamette Outdoor Co.',
    },
    {
      body: 'We came in with a pile of ideas and left with a clear plan. The site launched on time, under budget, and has been rock solid.',
      name: 'Priya Shah',
      role: 'Owner, Ember & Oak Studio',
    },
  ];

  return (
    <section style={{ background: 'var(--light)', padding: '110px 0' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 4, marginBottom: 20 }}>
            {[0,1,2,3,4].map(i => <RStar key={i} size={18} />)}
          </div>
          <h2 style={{
            fontSize: 48,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
            color: 'var(--dark)',
          }}>
            Trusted by 100+ businesses<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>like yours</span>.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
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
                {[0,1,2,3,4].map(j => <RStar key={j} size={12} />)}
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

window.HomeReviews = HomeReviews;
