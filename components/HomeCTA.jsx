/* "Got a project? / Have a question?" — CTA section on the Home page.
   Restructured: emphatic "We'd love to help" is the lead, with the phone
   number as the hero contact method and buttons as alternates. */

const HomeCTA = () => {
  const viewport = useResponsive();
  return (
    <section style={{ background: 'var(--light)', padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '120px 0' }}>
      <div className="wrap">
        <div style={{
          background: 'var(--light-2)',
          border: '1px solid var(--rule-light)',
          padding: viewport.isMobile ? '28px 24px' : viewport.isTablet ? '56px 48px' : '80px 88px',
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1.35fr 1fr',
          gap: viewport.isMobile ? 28 : 80,
          alignItems: 'center',
          position: 'relative',
        }}>

          {/* Left: conversational prompts + answer + phone */}
          <div>
            <div style={{
              fontSize: viewport.isMobile ? 16 : 18,
              lineHeight: 1.5,
              color: 'var(--muted-light)',
              marginBottom: 20,
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
            }}>
              <span>Got a project?</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>Have a question?</span>
            </div>

            <h2 style={{
              fontSize: pickResponsive(viewport, 72, 58, 40),
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              fontWeight: 400,
              margin: '0 0 36px',
              textWrap: 'balance',
              color: 'var(--dark)',
            }}>
              We'd <span style={{ fontStyle: 'italic', fontWeight: 300 }}>love</span> to help.
            </h2>

            <div style={{
              display: 'flex',
              alignItems: viewport.isMobile ? 'flex-start' : 'baseline',
              gap: viewport.isMobile ? 10 : 18,
              paddingTop: 28,
              borderTop: '1px solid var(--rule-light)',
            }}>
              <div style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--muted-light)',
              }}>
                Call
              </div>
              <a href="tel:5412142116" style={{
                fontSize: pickResponsive(viewport, 38, 34, 28),
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: 'var(--dark)',
                borderBottom: '1px solid transparent',
                transition: 'border-color .18s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
              >
                541.214.2116
              </a>
            </div>
          </div>

          {/* Right: buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'stretch' }}>
            <div style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted-light)',
              marginBottom: 6,
            }}>
              Or, if you'd rather —
            </div>
            <a href="Get a Quote.html" className="btn btn-primary" style={{ justifyContent: 'space-between', padding: '20px 24px', fontSize: 15 }}>
              <span>Get a quote</span>
              <span className="arrow">→</span>
            </a>
            <a href="#" className="btn btn-outline" style={{ justifyContent: 'space-between', padding: '20px 24px', fontSize: 15 }}>
              <span>Schedule a call</span>
              <span className="arrow">→</span>
            </a>
            <div style={{ display: 'flex', flexDirection: viewport.isMobile ? 'column' : 'row', gap: 18, fontSize: 13, color: 'var(--muted-light)', marginTop: 12 }}>
              <span>✉ hello@nineplanets.co</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>Mon–Fri, 9–5 PT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.HomeCTA = HomeCTA;
