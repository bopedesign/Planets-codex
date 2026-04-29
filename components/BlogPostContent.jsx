const BlogPostContent = () => {
  const viewport = useResponsive();
  const toc = [
    { id: 'why-22', label: 'Why 2.2, and why now' },
    { id: 'nine-criteria', label: 'The nine new success criteria' },
    { id: 'target-size', label: 'Target size, simply' },
    { id: 'focus-visible', label: 'Focus, made visible' },
    { id: 'cognitive-load', label: 'Cognitive load, finally addressed' },
    { id: 'already-meeting-it', label: 'Are you already meeting it?' },
    { id: 'six-week-roadmap', label: 'A six-week roadmap' },
  ];

  const bodySize = viewport.isMobile ? 18 : 20;
  const bodyLeading = 1.66;
  const scrollMarginTop = viewport.isMobile ? 110 : 140;

  const sectionHeading = (title, id) => (
    <h2 id={id} style={{
      fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
      fontSize: pickResponsive(viewport, 60, 48, 36),
      lineHeight: 1.02,
      letterSpacing: '-0.028em',
      fontWeight: 400,
      color: 'var(--dark)',
      margin: '0 0 26px',
      scrollMarginTop,
    }}>
      {title}
    </h2>
  );

  const bodyPStyle = {
    fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
    fontSize: bodySize,
    lineHeight: bodyLeading,
    color: '#3b3e43',
    margin: '0 0 26px',
    letterSpacing: '-0.003em',
  };

  return (
    <section style={{ background: '#fbfaf8', color: 'var(--dark)' }}>
      <div className="wrap" style={{ paddingTop: viewport.isMobile ? 52 : 72, paddingBottom: viewport.isMobile ? 84 : 120 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: viewport.isTablet ? '1fr' : 'minmax(0, 1.2fr) 380px',
          gap: viewport.isMobile ? 52 : 88,
          alignItems: 'start',
        }}>
          <article style={{ maxWidth: 760 }}>
            <div style={{
              borderLeft: '2px solid var(--accent)',
              paddingLeft: viewport.isMobile ? 20 : 28,
              marginBottom: 38,
            }}>
              <p style={{
                ...bodyPStyle,
                fontSize: viewport.isMobile ? 19 : 20,
                lineHeight: 1.62,
                marginBottom: 0,
              }}>
                In October 2023, the W3C quietly published a small dot-release of the most important standard
                most business owners have never read. It added nine new success criteria to the Web Content
                Accessibility Guidelines and then, just as quietly, the Department of Justice's Title II rule
                pinned every state and local government website in the country to it.
              </p>
            </div>

            <p style={bodyPStyle}>
              If you run a small business, the practical question is not <em>whether</em> WCAG 2.2 applies to you.
              It will, eventually, through a contract, through a procurement requirement, through a complaint from
              a real person who couldn't use your site. The practical question is <strong>which of the new criteria</strong>{' '}
              you're already meeting, and how much work the rest will actually take.
            </p>

            <p style={bodyPStyle}>
              The short answer: probably more than you think, and less than you fear. Here's the working translator
              we've been giving clients for the last six months.
            </p>

            <div style={{ marginTop: 70, marginBottom: 10 }}>
              {sectionHeading('Why 2.2, and why now', 'why-22')}
            </div>

            <p style={bodyPStyle}>
              WCAG 2.0 came out in 2008. 2.1 followed in 2018, mostly to address mobile and low-vision users.
              2.2, the version we've been waiting on for four years, exists for a different reason: cognitive
              accessibility. The web has gotten harder to use, not easier, in the last decade. Modal dialogs,
              dark patterns, infinite scroll, drag-only interactions, they all assume a user with full executive
              function, perfect dexterity, and unlimited working memory.
            </p>

            <p style={bodyPStyle}>
              2.2 is the W3C's first real attempt to legislate against that drift. It doesn't try to solve
              cognitive accessibility, that's a generational project, but it draws three lines in the sand:
              <em> targets must be big enough to hit</em>, <em>focus must be visible enough to follow</em>, and{' '}
              <em>tasks must not require remembering things the page already knows</em>.
            </p>

            <div style={{
              margin: '42px 0 56px',
              border: '1px solid #e4dfda',
              background: '#ffffff',
              padding: viewport.isMobile ? '22px 22px 24px' : '28px 30px 30px',
              maxWidth: 720,
            }}>
              <div style={{
                fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
                fontSize: 14,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--accent)',
                marginBottom: 18,
              }}>
                TL;DR
              </div>
              <p style={{ ...bodyPStyle, fontSize: 16, marginBottom: 0 }}>
                Nine new criteria, mostly Level AA. Six are about motor and cognitive load. Most well-built sites
                already pass three or four. Budget two to four weeks of audit-and-remediation, not a redesign.
              </p>
            </div>

            <div style={{ marginTop: 72, marginBottom: 10 }}>
              {sectionHeading('The nine new success criteria', 'nine-criteria')}
            </div>

            <p style={bodyPStyle}>
              Here they are, in the order they actually matter for a typical small business site: target size,
              visible focus, drag alternatives, redundant entry, accessible authentication, consistent help, and
              the pieces of mobile interaction that fail quietly until a real person runs into them.
            </p>

            <div style={{
              display: 'grid',
              gap: 18,
              marginTop: 28,
              marginBottom: 54,
            }}>
              {[
                ['Target size, simply', 'Buttons, links, and touch targets need room around them. If someone is tapping your CTA on a bus, this matters.', 'target-size'],
                ['Focus, made visible', 'Keyboard users need a strong, obvious focus state. If you have to squint to find it, it fails the spirit even when it passes the letter.', 'focus-visible'],
                ['Cognitive load, finally addressed', 'If your form already knows the answer, don’t force people to remember and re-enter it.', 'cognitive-load'],
              ].map(([title, copy, id]) => (
                <div key={title} id={id} style={{ borderTop: '1px solid #e6e1dc', paddingTop: 18, scrollMarginTop }}>
                  <h3 style={{
                    fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
                    fontSize: viewport.isMobile ? 28 : 32,
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                    fontWeight: 400,
                    margin: '0 0 10px',
                    color: 'var(--dark)',
                  }}>
                    {title}
                  </h3>
                  <p style={{ ...bodyPStyle, marginBottom: 0 }}>
                    {copy}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 72, marginBottom: 10 }}>
              {sectionHeading('Are you already meeting it?', 'already-meeting-it')}
            </div>

            <p style={bodyPStyle}>
              Usually, yes, in pieces. Clean button spacing, visible hover and focus states, descriptive error
              messages, and not making people retype obvious information already gets a well-built brochure site
              halfway there. The misses tend to be mundane: tiny footer links, carousels that trap keyboard focus,
              placeholder-only form labels, icon-only buttons, and tap targets that were designed on a large monitor.
            </p>

            <p style={bodyPStyle}>
              That is the useful part of 2.2. It does not ask you to rebuild your site around a new philosophy.
              It asks you to remove the quiet friction that accumulates when design decisions are made for speed,
              not use. In audit after audit, the expensive fixes are rarely the issue. The issue is consistency.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: viewport.isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
              gap: 18,
              margin: '30px 0 58px',
            }}>
              {[
                ['Usually already fine', 'Primary buttons, headline contrast, obvious nav states.'],
                ['Usually needs work', 'Forms, sticky headers, mobile tap targets, accordions.'],
                ['Almost always missed', 'Drag-only interactions and re-entry requirements.'],
              ].map(([title, copy]) => (
                <div key={title} style={{
                  border: '1px solid #e4dfda',
                  background: '#fff',
                  padding: '22px 20px 24px',
                }}>
                  <div style={{
                    fontSize: 13,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--accent-text)',
                    marginBottom: 10,
                  }}>
                    {title}
                  </div>
                  <p style={{ ...bodyPStyle, fontSize: 16, marginBottom: 0 }}>
                    {copy}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 72, marginBottom: 10 }}>
              {sectionHeading('A six-week roadmap', 'six-week-roadmap')}
            </div>

            <p style={bodyPStyle}>
              If the site is already live and generally healthy, the fastest path is not redesign. It is a short,
              disciplined remediation cycle. Week one is inventory. Week two is keyboard and screen-reader testing.
              Weeks three and four are design and code fixes. Weeks five and six are regression checks, content edits,
              and making sure the same mistakes do not reappear in the CMS.
            </p>

            <div style={{ display: 'grid', gap: 0, margin: '32px 0 60px', borderTop: '1px solid #e5dfda' }}>
              {[
                ['01', 'Audit the obvious', 'Buttons, forms, menus, popups, and every repeated component.'],
                ['02', 'Fix the system first', 'Update shared styles and patterns before touching page-by-page exceptions.'],
                ['03', 'Retest on real devices', 'Keyboard, phone, tablet, zoom, and reduced-motion preferences.'],
              ].map(([num, title, copy]) => (
                <div key={num} style={{
                  display: 'grid',
                  gridTemplateColumns: viewport.isMobile ? '1fr' : '72px minmax(0, 220px) 1fr',
                  gap: viewport.isMobile ? 8 : 18,
                  padding: viewport.isMobile ? '18px 0' : '22px 0',
                  borderBottom: '1px solid #e5dfda',
                  alignItems: 'start',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent-text)' }}>{num}</div>
                  <div style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--dark)' }}>{title}</div>
                  <p style={{ ...bodyPStyle, fontSize: 16, marginBottom: 0 }}>{copy}</p>
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--dark)',
              color: 'var(--light)',
              padding: viewport.isMobile ? '28px 24px' : '34px 36px',
              display: 'grid',
              gridTemplateColumns: viewport.isMobile ? '1fr' : '1fr auto',
              gap: 24,
              alignItems: 'center',
            }}>
              <div>
                <div style={{
                  fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
                  fontSize: 13,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-on-dark)',
                  marginBottom: 12,
                }}>
                  Need an audit?
                </div>
                <p style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: 'rgba(247,245,243,0.72)',
                  margin: 0,
                  maxWidth: 520,
                }}>
                  We do WCAG 2.2 audits for small businesses across Oregon. Two weeks, flat fee, written deliverable.
                </p>
              </div>
              <a href="Get a Quote.html" className="btn btn-light" style={{ justifySelf: viewport.isMobile ? 'stretch' : 'start', minWidth: 220, justifyContent: 'space-between' }}>
                <span>Get a quote</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </article>

          <aside style={{
            position: viewport.isTablet ? 'static' : 'sticky',
            top: 28,
            alignSelf: 'start',
          }}>
            <div style={{ display: 'grid', gap: 28 }}>
              <div>
                <div style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#6f7277',
                  marginBottom: 18,
                }}>
                  In this article
                </div>
                <div style={{ display: 'grid', gap: 12 }}>
                  {toc.map((item, index) => (
                    <a key={item.id} href={`#${item.id}`} style={{
                      display: 'grid',
                      gridTemplateColumns: '24px 1fr',
                      gap: 12,
                      fontSize: 16,
                      color: index === 0 ? 'var(--accent)' : '#5e6166',
                      textDecoration: 'none',
                      lineHeight: 1.45,
                    }}>
                      <span style={{ color: index === 0 ? 'var(--accent)' : '#8a8d92', fontVariantNumeric: 'tabular-nums' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {[
                ['Published', ['April 18, 2026', 'Updated April 22, 2026']],
                ['Reading time', ['9 min read', '~1,800 words']],
              ].map(([title, lines]) => (
                <div key={title} style={{ borderTop: '1px solid #e5dfda', paddingTop: 28 }}>
                  <div style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#6f7277',
                    marginBottom: 14,
                  }}>
                    {title}
                  </div>
                  <div style={{ display: 'grid', gap: 8, color: '#3f4247', fontSize: 16, lineHeight: 1.5 }}>
                    {lines.map((line, index) => (
                      <div key={line} style={{ color: index === 0 ? 'var(--dark)' : '#7b7e83' }}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ borderTop: '1px solid #e5dfda', paddingTop: 28 }}>
                <div style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#6f7277',
                  marginBottom: 14,
                }}>
                  Need an audit?
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: '#6a6d72', margin: '0 0 18px' }}>
                  We do WCAG 2.2 audits for small businesses across Oregon. Two weeks, flat fee, written deliverable.
                </p>
                <a href="Get a Quote.html" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '16px 18px',
                  background: 'var(--dark)',
                  color: 'var(--light)',
                  textDecoration: 'none',
                  fontSize: 17,
                  fontWeight: 500,
                }}>
                  <span>Get a quote</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

window.BlogPostContent = BlogPostContent;
