/* "Recent insights" — blog posts grid on the Home page.
   3-up card grid with placeholder imagery, category eyebrow, title, date. */

const HomeBlog = () => {
  const posts = [
    {
      category: 'UX',
      title: '5 Keys to Designing Good UX',
      date: 'Apr 18, 2026',
      readTime: '6 min read',
      image: 'images/blog-ux.svg',
      dark: false,
    },
    {
      category: 'Development',
      title: 'Hire a US-Based ColdFusion Expert with 20+ Years of Experience',
      date: 'Apr 04, 2026',
      readTime: '8 min read',
      image: 'images/blog-coldfusion.svg',
      dark: false,
    },
    {
      category: 'Reputation',
      title: 'How Bad Reviews Can Help Your Brand',
      date: 'Mar 22, 2026',
      readTime: '5 min read',
      image: 'images/blog-reviews.svg',
      dark: false,
    },
  ];

  return (
    <section style={{ background: 'var(--light)', padding: '120px 0' }}>
      <div className="wrap">
        {/* Header row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: 64,
          alignItems: 'end',
          marginBottom: 56,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18, color: 'var(--accent-text)' }}>
              Recent insights
            </div>
            <h2 style={{
              fontSize: 56,
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              fontWeight: 400,
              margin: 0,
              color: 'var(--dark)',
              textWrap: 'balance',
            }}>
              Notes from the <span style={{ fontStyle: 'italic', fontWeight: 300 }}>studio</span>.
            </h2>
          </div>
          <div style={{ justifySelf: 'end' }}>
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--dark)',
              borderBottom: '1px solid var(--dark)',
              paddingBottom: 4,
            }}>
              <span>View all articles</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {posts.map((p, i) => (
            <a href="#" key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              color: 'inherit',
              group: 'post',
            }}>
              {/* Thumb */}
              <div style={{
                aspectRatio: '4 / 3',
                backgroundImage: `url("${p.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#efece8',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Small category badge */}
                <div style={{
                  position: 'absolute',
                  top: 18, left: 18,
                  padding: '6px 10px',
                  background: 'rgba(37,39,43,0.9)',
                  color: 'var(--light)',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {p.category}
                </div>
              </div>

              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 500,
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  margin: 0,
                  color: 'var(--dark)',
                  textWrap: 'balance',
                }}>
                  {p.title}
                </h3>
                <div style={{
                  display: 'flex',
                  gap: 14,
                  fontSize: 13,
                  color: 'var(--muted-light)',
                }}>
                  <span>{p.date}</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span>{p.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .eyebrow {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
};

window.HomeBlog = HomeBlog;
