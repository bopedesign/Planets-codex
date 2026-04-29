/* Section 02 — Accessibility Review (dark bg).
   Mirror SeoStep architecture but content is the WCAG audit + a small
   diagnostic-style "report excerpt" panel on the right showing checks,
   so it visually contrasts with the keyword-ticker hero. */
const A11yReview = () => {
  const viewport = useResponsive();
  // Sample audit findings — illustrative, not real numbers. Show pass + warn
  // so the panel reads as a "real" report, not a mock-up.
  const findings = [
    { sev: 'pass',  rule: '1.4.3 Contrast (minimum)',          where: 'site-wide',         note: '47 elements OK' },
    { sev: 'fail',  rule: '1.1.1 Non-text content',            where: '/about, /pricing',  note: '6 images missing alt' },
    { sev: 'fail',  rule: '2.4.7 Focus visible',               where: 'site-wide buttons', note: 'no focus ring on .btn' },
    { sev: 'pass',  rule: '2.1.1 Keyboard',                    where: 'navigation',        note: 'tab order correct' },
    { sev: 'warn',  rule: '1.3.1 Info and relationships',      where: '/contact form',     note: 'missing label assoc.' },
    { sev: 'fail',  rule: '4.1.2 Name, role, value',           where: '/menu drawer',      note: 'aria-expanded missing' },
    { sev: 'pass',  rule: '3.3.2 Labels or instructions',      where: 'site-wide forms',   note: 'inputs labeled' },
    { sev: 'warn',  rule: '2.4.4 Link purpose',                where: 'footer block',      note: 'three "click here" links' },
  ];

  const sevColor = { pass: 'rgba(150,200,160,0.95)', warn: 'rgba(236,230,226,0.95)', fail: 'var(--accent)' };
  const sevBg    = { pass: 'rgba(150,200,160,0.10)', warn: 'rgba(236,230,226,0.10)', fail: 'rgba(211,50,106,0.10)' };

  const counts = findings.reduce((acc, f) => { acc[f.sev]++; return acc; }, { pass: 0, warn: 0, fail: 0 });

  return (
    <section id="review" style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '130px 0 130px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle horizontal rule texture, matches hero */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(247,245,243,0.018) 0 1px, transparent 1px 56px)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left: copy */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-on-dark)' }}>
                02 &middot; Accessibility Review
              </span>
            </div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 64, 52, 36),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: '0 0 32px',
              textWrap: 'balance',
              maxWidth: 640,
            }}>
              We test your site against <span style={{ fontStyle: 'italic', fontWeight: 300 }}>WCAG 2.1 AA</span>.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(247,245,243,0.8)', margin: '0 0 18px', maxWidth: 540 }}>
              Our team of professional web developers reviews your site to assess its compliance with WCAG 2.1 AA standards. You receive a written report of every accessibility issue we detect, prioritized by severity and tied to a specific page and element.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(247,245,243,0.8)', margin: '0 0 36px', maxWidth: 540 }}>
              Then we walk through it together. No spreadsheets thrown over the fence.
            </p>

            {/* Severity legend / stats */}
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {[
                { key: 'pass', label: 'Passing'   },
                { key: 'warn', label: 'Warnings'  },
                { key: 'fail', label: 'Failures'  },
              ].map(s => (
                <div key={s.key} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 14px',
                  border: '1px solid var(--rule-dark)',
                  background: sevBg[s.key],
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: sevColor[s.key], flexShrink: 0 }} />
                  <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(247,245,243,0.8)' }}>
                    {s.label}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 500, fontVariantNumeric: 'tabular-nums', color: 'var(--light)' }}>
                    {counts[s.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sample report panel */}
          <div style={{
            border: '1px solid var(--rule-dark)',
            background: 'rgba(0,0,0,0.18)',
          }}>
            {/* Panel header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderBottom: '1px solid var(--rule-dark)',
              fontFamily: '"SF Mono", "JetBrains Mono", ui-monospace, Menlo, monospace',
              fontSize: 11,
              letterSpacing: '0.05em',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
                <span style={{ color: 'rgba(247,245,243,0.8)', textTransform: 'uppercase' }}>audit report &middot; sample</span>
              </div>
              <span style={{ color: 'rgba(247,245,243,0.45)' }}>WCAG 2.1 AA</span>
            </div>

            {/* Findings list */}
            <div>
              {findings.map((f, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '14px 1fr auto',
                  gap: 14,
                  alignItems: 'baseline',
                  padding: '14px 18px',
                  borderBottom: i === findings.length - 1 ? 'none' : '1px solid var(--rule-dark)',
                  fontFamily: '"SF Mono", "JetBrains Mono", ui-monospace, Menlo, monospace',
                  fontSize: 12.5,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: sevColor[f.sev], flexShrink: 0, transform: 'translateY(2px)' }} />
                  <div>
                    <div style={{ color: 'var(--light)', marginBottom: 4 }}>{f.rule}</div>
                    <div style={{ color: 'rgba(247,245,243,0.55)', fontSize: 11.5 }}>
                      <span>{f.where}</span>
                      <span style={{ margin: '0 8px', color: 'rgba(247,245,243,0.3)' }}>&middot;</span>
                      <span>{f.note}</span>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: sevColor[f.sev],
                    padding: '2px 8px',
                    border: `1px solid ${sevColor[f.sev]}`,
                    borderRadius: 1,
                    flexShrink: 0,
                  }}>
                    {f.sev}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.A11yReview = A11yReview;
