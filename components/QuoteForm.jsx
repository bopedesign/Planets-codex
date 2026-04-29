/* Get a Quote — main form section. Two-column layout:
   left = contact details + "what happens next"; right = form.
   All form fields requested in the brief, styled to match the editorial,
   hairline-bordered look used throughout the site. */

const QuoteForm = () => {
  const viewport = useResponsive();
  // Field styles, declared once so every input matches.
  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    color: 'var(--dark)',
    marginBottom: 10,
  };
  const reqStar = (
    <span style={{ color: 'var(--accent-text)', marginLeft: 4 }}>*</span>
  );
  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 15,
    fontFamily: 'inherit',
    fontWeight: 400,
    color: 'var(--dark)',
    background: 'var(--light)',
    border: '1px solid var(--rule-light)',
    borderRadius: 2,
    outline: 'none',
    transition: 'border-color .15s ease, box-shadow .15s ease',
  };
  const focusOn = (e) => {
    e.currentTarget.style.borderColor = 'var(--dark)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,39,43,0.06)';
  };
  const focusOff = (e) => {
    e.currentTarget.style.borderColor = 'var(--rule-light)';
    e.currentTarget.style.boxShadow = 'none';
  };
  const subLabel = {
    display: 'block',
    fontSize: 12,
    color: 'var(--muted-light)',
    marginTop: 8,
  };

  const services = [
    'Design / Development',
    'Digital Marketing',
    'SEO / Copywriting',
    'Maintenance / Security',
    'Accessibility',
    'Hosting / Domains',
    'Site Health Monitoring',
    'Expert Advice',
  ];

  const budgets = [
    'Under $3,000',
    '$3,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000+',
    'Not sure yet',
  ];

  return (
    <section id="form" style={{
      background: 'var(--light)',
      color: 'var(--dark)',
    }}>
      <div className="wrap" style={{ paddingTop: viewport.isMobile ? 56 : 96, paddingBottom: viewport.isMobile ? 72 : 120 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : '0.85fr 1.4fr',
          gap: viewport.isMobile ? 40 : 96,
          alignItems: 'start',
        }}>

          {/* ================= LEFT: contact details ================= */}
          <aside style={{ position: viewport.isTablet ? 'static' : 'sticky', top: 32 }}>

            <div className="eyebrow" style={{ marginBottom: 18 }}>
              In person, on the phone, or by mail
            </div>

            <h2 style={{
              fontSize: pickResponsive(viewport, 48, 42, 34),
              lineHeight: 1.04,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: '0 0 28px',
              textWrap: 'balance',
            }}>
              We pick up the <span style={{ fontStyle: 'italic', fontWeight: 300 }}>phone</span>.
            </h2>

            <p style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'var(--muted-light)',
              margin: '0 0 40px',
              maxWidth: 360,
            }}>
              If you'd rather skip the form, every other way to reach us is below.
              A real person will get back to you within one business day.
            </p>

            {/* Contact rows — phone, email, address, hours */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { kicker: 'Call', value: '541.214.2116',         href: 'tel:5412142116',           sub: 'Mon–Fri, 9–5 PT' },
                { kicker: 'Email', value: 'hello@nineplanets.co', href: 'mailto:hello@nineplanets.co', sub: 'We answer within one business day' },
                { kicker: 'Visit', value: '1234 Willamette St.', href: '#map',                     sub: 'Suite 200 · Eugene, OR 97401' },
                { kicker: 'Also', value: 'Detroit, MI',           href: '#map',                     sub: 'By appointment' },
              ].map((row, i) => (
                <a key={i} href={row.href} style={{
                  display: 'block',
                  padding: '24px 0',
                  borderTop: '1px solid var(--rule-light)',
                  borderBottom: i === 3 ? '1px solid var(--rule-light)' : 'none',
                  transition: 'opacity .15s ease',
                }}
                onMouseEnter={(e) => {
                  const v = e.currentTarget.querySelector('.contact-val');
                  if (v) v.style.borderBottomColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  const v = e.currentTarget.querySelector('.contact-val');
                  if (v) v.style.borderBottomColor = 'transparent';
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--muted-light)',
                    marginBottom: 8,
                  }}>
                    {row.kicker}
                  </div>
                  <div className="contact-val" style={{
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: '-0.018em',
                    color: 'var(--dark)',
                    display: 'inline-block',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color .18s ease',
                    paddingBottom: 1,
                  }}>
                    {row.value}
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: 'var(--muted-light)',
                    marginTop: 6,
                  }}>
                    {row.sub}
                  </div>
                </a>
              ))}
            </div>

            {/* "What happens next" */}
            <div style={{ marginTop: 56 }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                What happens after you hit send
              </div>
              <ol style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                counterReset: 'step',
              }}>
                {[
                  { t: 'A real person reads it.',                d: 'Usually Annie. Always within one business day.' },
                  { t: 'We send back a few clarifying questions.', d: 'Just enough to scope it properly — no 12-page brief required.' },
                  { t: 'You get a one-page proposal.',           d: 'Scope, timeline, fixed price. No surprises later.' },
                ].map((s, i) => (
                  <li key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '32px 1fr',
                    gap: 16,
                    alignItems: 'start',
                  }}>
                    <span style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--accent-text)',
                      letterSpacing: '0.04em',
                      paddingTop: 2,
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      0{i + 1}
                    </span>
                    <div>
                      <div style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: 'var(--dark)',
                        marginBottom: 4,
                      }}>
                        {s.t}
                      </div>
                      <div style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: 'var(--muted-light)',
                      }}>
                        {s.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* ================= RIGHT: the form ================= */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              background: 'var(--light-2)',
              border: '1px solid var(--rule-light)',
              padding: viewport.isMobile ? '28px 22px 24px' : viewport.isTablet ? '40px 32px 32px' : '56px 56px 48px',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              marginBottom: 36, paddingBottom: 24,
              borderBottom: '1px solid var(--rule-light)',
            }}>
              <div style={{
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: '-0.012em',
                color: 'var(--dark)',
              }}>
                Project brief
              </div>
              <div style={{
                fontSize: 12,
                color: 'var(--muted-light)',
              }}>
                <span style={{ color: 'var(--accent-text)' }}>*</span> required
              </div>
            </div>

            {/* Name — first / last */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Name{reqStar}</label>
              <div style={{ display: 'grid', gridTemplateColumns: viewport.isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                <div>
                  <input type="text" required style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
                  <span style={subLabel}>First</span>
                </div>
                <div>
                  <input type="text" required style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
                  <span style={subLabel}>Last</span>
                </div>
              </div>
            </div>

            {/* Email + Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: viewport.isMobile ? '1fr' : '1fr 1fr', gap: viewport.isMobile ? 14 : 20, marginBottom: 28 }}>
              <div>
                <label style={labelStyle}>Email Address{reqStar}</label>
                <input type="email" placeholder="you@example.com" required style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number{reqStar}</label>
                <input type="tel" required style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
              </div>
            </div>

            {/* Company */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Company Name</label>
              <input type="text" style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
            </div>

            {/* Website */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Website</label>
              <input type="url" placeholder="http://www.yourwebsite.com" style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
            </div>

            {/* How did you find us */}
            <div style={{ marginBottom: 36 }}>
              <label style={labelStyle}>How did you find us?{reqStar}</label>
              <input type="text" required style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
            </div>

            {/* Services */}
            <fieldset style={{ border: 0, padding: 0, margin: '0 0 36px' }}>
              <legend style={{ ...labelStyle, padding: 0, marginBottom: 14 }}>
                What services are you interested in?
              </legend>
              <div style={{
                display: 'grid',
                gridTemplateColumns: viewport.isMobile ? '1fr' : '1fr 1fr',
                gap: viewport.isMobile ? '12px' : '12px 24px',
              }}>
                {services.map((s, i) => (
                  <label key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    fontSize: 14,
                    color: 'var(--dark)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}>
                    <input type="checkbox" style={{
                      width: 18, height: 18, margin: 0,
                      accentColor: 'var(--accent)',
                      cursor: 'pointer',
                    }} />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* What can we help with */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>What can we help you with?</label>
              <textarea rows={6} style={{
                ...inputStyle,
                resize: 'vertical',
                fontFamily: 'inherit',
                lineHeight: 1.55,
              }} onFocus={focusOn} onBlur={focusOff} />
            </div>

            {/* Budget */}
            <div style={{ marginBottom: 40 }}>
              <label style={labelStyle}>What is your budget?{reqStar}</label>
              <div style={{ position: 'relative' }}>
                <select required style={{
                  ...inputStyle,
                  appearance: 'none',
                  paddingRight: 44,
                  cursor: 'pointer',
                }} onFocus={focusOn} onBlur={focusOff} defaultValue="$3,000 – $5,000">
                  {budgets.map((b, i) => <option key={i} value={b}>{b}</option>)}
                </select>
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  style={{
                    position: 'absolute',
                    right: 16, top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: 'var(--muted-light)',
                  }}
                >
                  <path d="M3 5.5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" fill="none" />
                </svg>
              </div>
            </div>

            {/* Submit row */}
            <div style={{
              display: 'flex',
              flexDirection: viewport.isMobile ? 'column' : 'row',
              alignItems: viewport.isMobile ? 'stretch' : 'center',
              justifyContent: 'space-between',
              gap: 24,
              paddingTop: 28,
              borderTop: '1px solid var(--rule-light)',
            }}>
              <div style={{
                fontSize: 12,
                color: 'var(--muted-light)',
                lineHeight: 1.55,
                maxWidth: viewport.isMobile ? '100%' : 320,
              }}>
                We never share your details. By submitting, you agree to our privacy policy.
              </div>
              <button type="submit" className="btn btn-primary" style={{
                padding: '18px 28px',
                fontSize: 15,
                fontWeight: 600,
              }}>
                <span>Send project brief</span>
                <span className="arrow">→</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

window.QuoteForm = QuoteForm;
