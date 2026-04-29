/* Section 01 — Accessible Website Design (light bg, headline-led).
   Different layout shape from SeoStep1: a manifesto-style headline column +
   four-principle list, no checklist grid. Sets a calmer, more philosophical
   tone before we get into the operational sections. */
const A11yDesign = () => {
  const viewport = useResponsive();
  const principles = [
    { tag: 'Perceivable', body: 'Screen readers, captions, alt text, sufficient color contrast. If a visitor cannot perceive your content, they cannot use it.' },
    { tag: 'Operable',    body: 'Keyboard navigation, generous hit targets, no time traps. People navigate with many different inputs.' },
    { tag: 'Understandable', body: 'Plain language, consistent navigation, predictable behavior. The page should not surprise the person reading it.' },
    { tag: 'Robust',      body: 'Semantic HTML and well-structured content so assistive technology can interpret your site reliably.' },
  ];

  return (
    <section id="design" style={{ background: 'var(--light)', padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '130px 0 120px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 90, marginBottom: 70 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>01 &middot; Accessible website design</div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 64, 52, 36),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Designed to be navigated and understood by <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>everyone.</span>
            </h2>
          </div>
          <div style={{ paddingTop: 18 }}>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 20 }} />
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted-light)', margin: '0 0 18px', maxWidth: 480 }}>
              Accessible website design focuses on creating digital experiences that can be easily navigated and understood by individuals of all abilities, including those with disabilities. It means implementing features and functionality so that everyone can perceive, understand, navigate, and interact with your content effectively.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 480 }}>
              That includes screen readers for the visually impaired, keyboard navigation for those with mobility issues, and clear, well-structured content for cognitive accessibility. By prioritizing inclusivity, accessible design enhances usability for all users while aligning with the ethical and legal standards governing equal access online.
            </p>
          </div>
        </div>

        {/* Four principles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isMobile ? '1fr' : viewport.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-light)',
          borderBottom: '1px solid var(--rule-light)',
        }}>
          {principles.map((p, i) => (
            <div key={i} style={{
              padding: viewport.isMobile ? '24px 20px' : '40px 28px 36px',
              paddingLeft: i === 0 ? 0 : 28,
              paddingRight: i === 3 ? 0 : 28,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-light)',
            }}>
              <div style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-text)',
                marginBottom: 16,
              }}>
                {p.tag}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--dark)', margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.A11yDesign = A11yDesign;
