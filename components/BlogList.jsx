/* Blog index — featured post (full-bleed editorial card) followed by a
   3-col grid of post cards. Each card is hairline-bordered, image on top,
   meta + title + excerpt below. Mirrors PortfolioGrid pagination. */

const BlogList = () => {
  // Restricted brand-palette tones for the post-image placeholders.
  const tones = [
    '#e9d8c8', // cream
    '#d6c5b3', // tan
    '#c9b6a3', // taupe
    '#1d1f23', // ink
    '#2e3035', // graphite
    '#f7e1ea', // soft pink
    '#d3326a', // accent
  ];

  // Each post is a placeholder. Title, excerpt, category, date, read time.
  const featured = {
    category: 'Accessibility',
    title: 'WCAG 2.2 in plain English: what changed, and what it means for your site.',
    excerpt: 'AAA, AA, A — the alphabet soup of web accessibility just got a refresh. Here\'s a working translator: nine new criteria, why they exist, and how to know if you\'re already meeting them without realizing it.',
    author: 'Annie Middleton',
    date: 'April 18, 2026',
    readTime: '9 min read',
    tone: '#1d1f23',
    accent: 'plum',
  };

  const posts = [
    {
      category: 'Design',
      title: 'The case against the hamburger menu (on desktop, anyway).',
      excerpt: 'It saves three pixels of space and costs you every casual visitor. We dig into the data, the patterns that work better, and when hamburgers actually do belong.',
      author: 'Annie Middleton',
      date: 'April 9, 2026',
      readTime: '6 min read',
      tone: tones[0],
    },
    {
      category: 'SEO',
      title: 'Local SEO for service businesses: the unsexy checklist that works.',
      excerpt: 'Forget the AI-generated content farms. The fundamentals — Google Business Profile, NAP citations, real reviews, schema — still move the needle more than anything else.',
      author: 'Jennifer G.',
      date: 'April 2, 2026',
      readTime: '11 min read',
      tone: tones[1],
    },
    {
      category: 'Development',
      title: 'WordPress is fine, actually.',
      excerpt: 'Everyone wants to migrate to a static site generator. Then they realize the client also wants to update copy without a pull request. A defense of boring tools, twenty years in.',
      author: 'Paul O.',
      date: 'March 24, 2026',
      readTime: '8 min read',
      tone: tones[3],
      onDark: true,
    },
    {
      category: 'Strategy',
      title: 'How we scope a website redesign in three conversations.',
      excerpt: 'No 80-page RFP. No discovery sprint. Just three calls — what you have, what you need, what success looks like — and a one-page proposal at the end.',
      author: 'Annie Middleton',
      date: 'March 14, 2026',
      readTime: '5 min read',
      tone: tones[2],
    },
    {
      category: 'Hosting',
      title: 'Why we still run our own hosting in 2026.',
      excerpt: 'The big three platforms got expensive. Edge networks got complicated. We do the unglamorous middle path — managed VPS, real backups, a phone number that rings — and our clients stay for fifteen years.',
      author: 'Paul O.',
      date: 'March 5, 2026',
      readTime: '7 min read',
      tone: tones[4],
      onDark: true,
    },
    {
      category: 'Accessibility',
      title: 'Color contrast: the one accessibility fix that pays for itself.',
      excerpt: 'Of all the accessibility wins, this is the cheapest and most visible. A walkthrough of what AA actually requires, where most sites fail it, and how to check yours in five minutes.',
      author: 'Annie Middleton',
      date: 'February 24, 2026',
      readTime: '6 min read',
      tone: tones[5],
    },
    {
      category: 'Design',
      title: 'Stop centering everything.',
      excerpt: 'Centered hero. Centered headline. Centered CTA. Centered grid. The reflexive symmetry of the modern landing page is making sites blur together. A short rant, with examples.',
      author: 'Annie Middleton',
      date: 'February 13, 2026',
      readTime: '4 min read',
      tone: tones[0],
    },
    {
      category: 'Copywriting',
      title: 'Write your own About page (please).',
      excerpt: 'No one wants to read "We are passionate about delivering best-in-class solutions." Five exercises for finding your actual voice — and why it matters more than ever.',
      author: 'Heather A.',
      date: 'February 4, 2026',
      readTime: '7 min read',
      tone: tones[2],
    },
    {
      category: 'Development',
      title: 'A small ode to the humble HTML form.',
      excerpt: 'Native form validation got really good. Most sites haven\'t noticed. Here\'s what you can ship today, with zero JavaScript, that beats half the contact-form plugins on the market.',
      author: 'Paul O.',
      date: 'January 22, 2026',
      readTime: '8 min read',
      tone: tones[1],
    },
  ];

  // Reusable image placeholder — same vibe as portfolio cards, but
  // stripped down to a window-frame motif appropriate for editorial.
  const PostThumb = ({ tone, onDark, label, isFeatured }) => (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: isFeatured ? '16 / 9' : '4 / 3',
      background: tone,
      overflow: 'hidden',
    }}>
      {/* Corner brackets */}
      <div style={{
        position: 'absolute', inset: 18,
        borderLeft: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        borderTop: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        width: 18, height: 18, borderTopLeftRadius: 0,
      }} />
      <div style={{
        position: 'absolute', top: 18, right: 18,
        borderRight: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        borderTop: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        width: 18, height: 18,
      }} />
      <div style={{
        position: 'absolute', bottom: 18, left: 18,
        borderLeft: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        borderBottom: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        width: 18, height: 18,
      }} />
      <div style={{
        position: 'absolute', bottom: 18, right: 18,
        borderRight: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        borderBottom: `1px solid ${onDark ? 'rgba(247,245,243,0.18)' : 'rgba(37,39,43,0.15)'}`,
        width: 18, height: 18,
      }} />

      {/* Category badge — dark pill, matches home page card style */}
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
        {label}
      </div>

      {/* Centered glyph */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Inter Tight', sans-serif",
        fontSize: isFeatured ? 200 : 120,
        fontWeight: 300,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        color: onDark ? 'rgba(247,245,243,0.12)' : 'rgba(37,39,43,0.10)',
        userSelect: 'none',
      }}>
        ¶
      </div>
    </div>
  );

  return (
    <section id="latest" style={{
      background: 'var(--light)',
      color: 'var(--dark)',
    }}>
      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 120 }}>

        {/* Section header — left-aligned, mirrors portfolio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 80,
          alignItems: 'end',
          marginBottom: 64,
        }}>
          <h2 style={{
            fontSize: 64,
            lineHeight: 1.04,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
          }}>
            Latest writing.
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'flex-end',
            gap: 24,
            fontSize: 13,
            color: 'var(--muted-light)',
          }}>
            <span style={{ fontVariantNumeric: 'tabular-nums' }}>
              <span style={{ color: 'var(--dark)', fontWeight: 500 }}>74</span> posts
            </span>
          </div>
        </div>

        {/* Featured post — full-width editorial card */}
        <a href="Blog Post.html" style={{
          display: 'block',
          marginBottom: 96,
          textDecoration: 'none',
          background: 'var(--dark)',
          color: 'var(--light)',
        }}
        onMouseEnter={(e) => {
          const arr = e.currentTarget.querySelector('.feat-arrow');
          if (arr) arr.style.transform = 'translateX(6px)';
        }}
        onMouseLeave={(e) => {
          const arr = e.currentTarget.querySelector('.feat-arrow');
          if (arr) arr.style.transform = 'translateX(0)';
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            border: '1px solid var(--dark)',
          }}>
            {/* Left — image */}
            <PostThumb tone={featured.tone} onDark label={featured.category} isFeatured />

            {/* Right — content */}
            <div style={{
              padding: '56px 64px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              gap: 32,
            }}>
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  marginBottom: 28,
                }}>
                  <span style={{
                    fontSize: 11, fontWeight: 500, letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-on-dark)',
                  }}>
                    Featured
                  </span>
                  <span style={{ width: 24, height: 1, background: 'var(--rule-dark)' }} />
                  <span style={{
                    fontSize: 11, fontWeight: 500, letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(247,245,243,0.55)',
                  }}>
                    {featured.category}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 40,
                  lineHeight: 1.12,
                  letterSpacing: '-0.022em',
                  fontWeight: 400,
                  margin: 0,
                  textWrap: 'balance',
                }}>
                  {featured.title}
                </h3>

                <p style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: 'rgba(247,245,243,0.7)',
                  margin: '24px 0 0',
                  textWrap: 'pretty',
                }}>
                  {featured.excerpt}
                </p>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                borderTop: '1px solid var(--rule-dark)',
                paddingTop: 24,
              }}>
                <div style={{ fontSize: 13, color: 'rgba(247,245,243,0.65)' }}>
                  <span style={{ color: 'var(--light)', fontWeight: 500 }}>{featured.author}</span>
                  <span style={{ margin: '0 10px', color: 'var(--rule-dark)' }}>·</span>
                  <span>{featured.date}</span>
                  <span style={{ margin: '0 10px', color: 'var(--rule-dark)' }}>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  fontSize: 14, fontWeight: 500,
                  color: 'var(--accent-on-dark)',
                }}>
                  Read post
                  <span className="feat-arrow" style={{
                    transition: 'transform .2s ease',
                    display: 'inline-block',
                  }}>→</span>
                </span>
              </div>
            </div>
          </div>
        </a>

        {/* Grid of posts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-light)',
          borderLeft: '1px solid var(--rule-light)',
        }}>
          {posts.map((p, i) => (
            <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              borderRight: '1px solid var(--rule-light)',
              borderBottom: '1px solid var(--rule-light)',
              padding: 0,
              background: 'var(--light)',
              transition: 'background .2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--light-2)';
              const arr = e.currentTarget.querySelector('.card-arrow');
              if (arr) arr.style.transform = 'translateX(4px)';
              const ttl = e.currentTarget.querySelector('.card-title');
              if (ttl) ttl.style.color = 'var(--accent-text)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--light)';
              const arr = e.currentTarget.querySelector('.card-arrow');
              if (arr) arr.style.transform = 'translateX(0)';
              const ttl = e.currentTarget.querySelector('.card-title');
              if (ttl) ttl.style.color = 'var(--dark)';
            }}>
              <PostThumb tone={p.tone} onDark={p.onDark} label={p.category} />

              <div style={{ padding: '28px 32px 32px' }}>
                <h3 className="card-title" style={{
                  fontSize: 22,
                  lineHeight: 1.22,
                  letterSpacing: '-0.018em',
                  fontWeight: 500,
                  margin: 0,
                  textWrap: 'balance',
                  color: 'var(--dark)',
                  transition: 'color .15s ease',
                }}>
                  {p.title}
                </h3>

                <p style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--muted-light)',
                  margin: '14px 0 24px',
                  textWrap: 'pretty',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {p.excerpt}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  borderTop: '1px solid var(--rule-light)',
                  paddingTop: 18,
                  fontSize: 12,
                  color: 'var(--muted-light)',
                }}>
                  <span>
                    <span style={{ color: 'var(--dark)', fontWeight: 500 }}>{p.author}</span>
                    <span style={{ margin: '0 8px' }}>·</span>
                    <span>{p.readTime}</span>
                  </span>
                  <span className="card-arrow" style={{
                    color: 'var(--accent-text)',
                    transition: 'transform .2s ease',
                    display: 'inline-block',
                  }}>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination — visual placeholder, mirrors PortfolioGrid. Page 1 of 9. */}
        <div style={{
          marginTop: 80,
          paddingTop: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          fontFamily: "'Inter Tight', sans-serif",
        }}>
          {/* Page counter (left) */}
          <div style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted-light)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            Page <span style={{ color: 'var(--dark)' }}>01</span> / 09
          </div>

          {/* Numbered pages + arrows (right) */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, border: '1px solid var(--rule-light)' }}>
            {/* Prev (disabled) */}
            <div style={{
              width: 56, height: 56,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRight: '1px solid var(--rule-light)',
              color: 'rgba(37,39,43,0.25)',
              cursor: 'not-allowed',
            }}>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M14 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" fill="none" />
              </svg>
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
              const active = n === 1;
              return (
                <a key={n} href="#" onClick={(e) => e.preventDefault()} style={{
                  width: 56, height: 56,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: active ? 600 : 400,
                  fontVariantNumeric: 'tabular-nums',
                  color: active ? 'var(--light)' : 'var(--dark)',
                  background: active ? 'var(--accent)' : 'transparent',
                  borderRight: '1px solid var(--rule-light)',
                  textDecoration: 'none',
                  transition: 'color .15s, background .15s',
                }}
                onMouseEnter={(e) => {
                  if (active) return;
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                }}
                onMouseLeave={(e) => {
                  if (active) return;
                  e.currentTarget.style.color = 'var(--dark)';
                  e.currentTarget.style.background = 'transparent';
                }}>
                  {String(n).padStart(2, '0')}
                </a>
              );
            })}

            {/* Next */}
            <a href="Blog Post.html" style={{
              width: 56, height: 56,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--dark)',
              textDecoration: 'none',
              transition: 'color .15s, background .15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--dark)';
              e.currentTarget.style.background = 'transparent';
            }}>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M4 6h13M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
