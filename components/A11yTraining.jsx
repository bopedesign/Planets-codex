/* Section 04 — Training (dark bg) + closing CTA strip with the two buttons:
   "View Accessibility Packages" and "Schedule a Free Consultation". */
const A11yTraining = () => {
  const viewport = useResponsive();
  return (
    <section id="training" style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '130px 0 130px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Faint sand glow, matches hero treatment */}
      <div style={{
        position: 'absolute',
        top: -250, right: -200,
        width: 900, height: 900,
        background: 'radial-gradient(circle, rgba(236,230,226,0.07) 0%, transparent 60%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 70 }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-on-dark)' }}>
                04 &middot; Training your team
              </span>
            </div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 64, 52, 36),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
              maxWidth: 640,
            }}>
              Stay accessible <span style={{ fontStyle: 'italic', fontWeight: 300 }}>as you grow.</span>
            </h2>
          </div>
          <div style={{ paddingTop: 18 }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(247,245,243,0.82)', margin: 0, maxWidth: 480 }}>
              9 Planets Web Design offers accessibility training to business owners and staff so you can make edits to your own site while maintaining accessibility standards. Once your team knows what to watch for, accessible content stays accessible.
            </p>
          </div>
        </div>

        {/* Three training tracks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : viewport.isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-dark)',
          borderBottom: '1px solid var(--rule-dark)',
          marginBottom: 80,
        }}>
          {[
            {
              title: 'Editor onboarding',
              body: 'A 60-minute walkthrough for whoever publishes content. Headings, alt text, links, color, and how to spot trouble before it ships.',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5V6a2 2 0 0 1 2-2h13v15H6.5a2.5 2.5 0 0 0 0 5H19" />
                  <path d="M9 8h7" />
                  <path d="M9 12h6" />
                </svg>
              ),
            },
            {
              title: 'Component playbook',
              body: 'Short reference cards for the patterns your site uses most: forms, modals, navigation, media. Saved to your team space, not buried in email.',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="8" height="8" />
                  <rect x="13" y="3" width="8" height="8" />
                  <rect x="3" y="13" width="8" height="8" />
                  <rect x="13" y="13" width="8" height="8" />
                </svg>
              ),
            },
            {
              title: 'Quarterly check-in',
              body: 'A focused review every quarter as your site evolves. We catch new issues introduced by new content before they pile up.',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              ),
            },
          ].map((t, i) => (
            <div key={i} style={{
              padding: viewport.isMobile ? '24px 20px' : '40px 32px 36px',
              paddingLeft: i === 0 ? 0 : 32,
              paddingRight: i === 2 ? 0 : 32,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-dark)',
            }}>
              <div style={{
                color: 'var(--accent-on-dark)',
                marginBottom: 18,
              }}>
                {t.icon}
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 400, letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.15 }}>
                {t.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'rgba(247,245,243,0.72)', margin: 0 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '1.3fr 1fr',
          gap: viewport.isMobile ? 24 : 60,
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{
              fontSize: 40,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              margin: 0,
              maxWidth: 540,
              textWrap: 'balance',
            }}>
              Get started today with a quick accessibility review.
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#" className="btn btn-light" style={{ justifyContent: 'space-between', padding: '18px 22px' }}>
              <span>View Accessibility Packages</span>
              <span className="arrow">→</span>
            </a>
            <a href="#" className="btn btn-ghost-dark" style={{ justifyContent: 'space-between', padding: '18px 22px' }}>
              <span>Schedule a Free Consultation</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.A11yTraining = A11yTraining;
