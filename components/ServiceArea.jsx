const ServiceArea = () => {
  const cities = [
    'Coburg', 'Cottage Grove', 'Creswell', 'Dunes City',
    'Elmira', 'Florence', 'Junction City', 'Lowell',
    'Mapleton', 'Noti', 'Oakridge', 'Pleasant Hill',
    'Springfield', 'Veneta', 'Westfir', '& beyond',
  ];

  return (
    <section style={{ background: 'var(--light)', padding: '110px 0', position: 'relative' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 90, alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Service area</div>
            <h2 style={{
              fontSize: 54,
              lineHeight: 1.03,
              letterSpacing: '-0.025em',
              fontWeight: 400,
              margin: '0 0 24px',
              textWrap: 'balance',
            }}>
              Looking for a web designer near <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Eugene, Oregon?</span>
            </h2>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 24 }} />
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 440 }}>
              We serve Eugene, Oregon and surrounding communities — and work with clients all over the country remotely. If you're local, we'll happily meet for coffee.
            </p>

            <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
              <a href="Get a Quote.html" className="btn btn-primary">
                <span>Get a quote</span>
                <span className="arrow">→</span>
              </a>
              <a href="#" className="btn btn-outline">
                <span>Schedule a consult</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* City grid with Eugene as anchor */}
          <div>
            <div style={{
              border: '1px solid var(--rule-light)',
              padding: '36px 40px',
              background: 'var(--light-2)',
              position: 'relative',
            }}>
              {/* Eugene anchor */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                paddingBottom: 24,
                marginBottom: 24,
                borderBottom: '1px solid var(--rule-light)',
              }}>
                <span style={{
                  display: 'inline-flex',
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: 'var(--light)',
                  placeItems: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1a4 4 0 00-4 4c0 2.5 4 8 4 8s4-5.5 4-8a4 4 0 00-4-4z" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="7" cy="5" r="1.3" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.015em' }}>Eugene, OR</div>
                  <div style={{ fontSize: 13, color: 'var(--muted-light)', letterSpacing: '0.04em' }}>44.0521° N · 123.0868° W</div>
                </div>
              </div>

              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: 18 }}>
                Also serving
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px 32px',
                fontSize: 15,
              }}>
                {cities.map((c, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    color: c === '& beyond' ? 'var(--accent-text)' : 'var(--dark)',
                    fontStyle: c === '& beyond' ? 'italic' : 'normal',
                    fontWeight: c === '& beyond' ? 300 : 400,
                  }}>
                    <span style={{
                      width: 4, height: 4,
                      background: c === '& beyond' ? 'var(--accent)' : 'var(--muted-light)',
                      transform: 'rotate(45deg)',
                      flexShrink: 0,
                    }} />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.ServiceArea = ServiceArea;
