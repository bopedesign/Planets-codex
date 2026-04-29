/* Section 03 — ADA Compliance / Remediation (light bg).
   Two-column layout: left explains what we change, right shows a small
   "before / after" treatment of a single fix so the section is concrete
   instead of abstract. */
const A11yADA = () => {
  const viewport = useResponsive();
  return (
    <section id="ada" style={{ background: 'var(--light-2)', padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '130px 0 120px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 90, alignItems: 'start' }}>
          {/* Left: copy */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>03 &middot; Making your site ADA compliant</div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 60, 48, 34),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: '0 0 28px',
              textWrap: 'balance',
            }}>
              We do the work, not just <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--muted-light)' }}>the report.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted-light)', margin: '0 0 32px', maxWidth: 520 }}>
              We review our findings with you and implement the changes needed to bring your site up to date and accessible to people of varying abilities. Most fixes are smaller than people expect, and the result is a site that is easier for every visitor to use.
            </p>

            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 24 }} />

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Color contrast and typography corrections',
                'Semantic markup, headings, and ARIA labels',
                'Visible focus indicators across interactive elements',
                'Form labels, error states, and required-field hints',
                'Alt text and image descriptions',
                'Keyboard navigation and skip-to-content links',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 14, fontSize: 15, color: 'var(--dark)' }}>
                  <span aria-hidden="true" style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                    transform: 'translateY(-2px)',
                    minWidth: 6,
                  }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: before/after pair */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <BeforeAfter
              tag="Before"
              variant="before"
              caption="Low contrast button, no focus ring, no accessible name."
            />
            <BeforeAfter
              tag="After"
              variant="after"
              caption="WCAG-compliant contrast, visible focus, descriptive label."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = ({ tag, variant, caption }) => {
  const isAfter = variant === 'after';
  return (
    <div style={{
      background: 'var(--light)',
      border: '1px solid var(--rule-light)',
      padding: 28,
      position: 'relative',
    }}>
      {/* Tag */}
      <div style={{
        position: 'absolute',
        top: -1,
        left: 28,
        transform: 'translateY(-50%)',
        background: isAfter ? 'var(--accent)' : 'var(--dark)',
        color: 'var(--light)',
        padding: '4px 10px',
        fontSize: 10,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        fontWeight: 600,
      }}>
        {tag}
      </div>

      {/* Demo: a sample page-form fragment */}
      <div style={{ marginTop: 10 }}>
        <div style={{
          fontSize: 12,
          color: isAfter ? 'var(--dark)' : '#bdbab5',
          marginBottom: 10,
        }}>
          {isAfter ? 'Email address (required)' : 'email'}
        </div>
        <div style={{
          height: 38,
          background: '#fff',
          border: isAfter ? '1.5px solid var(--dark)' : '1px solid #e8e6e2',
          marginBottom: 18,
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          fontSize: 13,
          color: '#444',
        }}>
          you@studio.com
        </div>

        <button style={{
          padding: '12px 22px',
          background: isAfter ? 'var(--dark)' : '#cdc9c4',
          color: isAfter ? 'var(--light)' : '#a8a4a0',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.02em',
          border: 'none',
          outline: isAfter ? '2px solid var(--accent)' : 'none',
          outlineOffset: isAfter ? 3 : 0,
        }}>
          {isAfter ? 'Subscribe to newsletter' : 'Submit'}
        </button>
      </div>

      <div style={{ marginTop: 22, paddingTop: 16, borderTop: '1px solid var(--rule-light)', fontSize: 13, lineHeight: 1.55, color: 'var(--muted-light)' }}>
        {caption}
      </div>
    </div>
  );
};

window.A11yADA = A11yADA;
