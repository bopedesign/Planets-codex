/* About team — vertical stack of editorial rows.
   Each person: large square placeholder photo on one side, role +
   linkedin icon + bio on the other. Sides alternate to give visual
   rhythm. The website security team is a single grouped card at
   the bottom (3 placeholder portraits + shared bio). */

// Placeholder portrait — sand background, typographic monogram, hairline border.
// Each person gets a slightly different tonal variant so the column doesn't feel
// like one repeated tile.
const PortraitPlaceholder = ({ initials, tone = 'sand', label }) => {
  const palettes = {
    sand:   { bg: '#efece8', text: '#25272b', meta: 'rgba(37,39,43,0.5)' },
    cream:  { bg: '#ece6e2', text: '#25272b', meta: 'rgba(37,39,43,0.55)' },
    smoke:  { bg: '#e4e0db', text: '#25272b', meta: 'rgba(37,39,43,0.5)' },
    ink:    { bg: '#25272b', text: '#ece6e2', meta: 'rgba(236,230,226,0.55)' },
    plum:   { bg: '#1d1f23', text: '#ece6e2', meta: 'rgba(236,230,226,0.5)' },
  };
  const p = palettes[tone] || palettes.sand;

  return (
    <div style={{
      width: '100%',
      aspectRatio: '1 / 1',
      background: p.bg,
      border: '1px solid var(--rule-light)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Big monogram */}
      <div style={{
        fontSize: 'clamp(96px, 14vw, 220px)',
        fontWeight: 300,
        letterSpacing: '-0.04em',
        color: p.text,
        lineHeight: 1,
        opacity: 0.92,
        fontFamily: "'Inter Tight', sans-serif",
      }}>
        {initials}
      </div>
      {/* Corner crosshairs */}
      <div style={{ position: 'absolute', top: 14, left: 14, width: 12, height: 1, background: p.text, opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 14, left: 14, width: 1, height: 12, background: p.text, opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: 14, right: 14, width: 12, height: 1, background: p.text, opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: 14, right: 14, width: 1, height: 12, background: p.text, opacity: 0.5 }} />
      {/* Photo placeholder tag */}
      <div style={{
        position: 'absolute', bottom: 14, left: 14,
        fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
        fontWeight: 600,
        color: p.meta,
      }}>
        {label || 'Photo'}
      </div>
      {/* Index ribbon */}
      <div style={{
        position: 'absolute', top: 14, right: 14,
        fontSize: 9, letterSpacing: '0.16em',
        fontWeight: 600, color: p.meta,
        fontVariantNumeric: 'tabular-nums',
      }}>
        9P · STAFF
      </div>
    </div>
  );
};

// Small brand-mark linkedin icon.
const LinkedInMark = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="13" height="13" stroke="currentColor" strokeWidth="1" />
    <path d="M3.4 5.6V10.4M3.4 4.2V3.6M5.6 10.4V5.6M5.6 7.4c0-1 .7-1.8 1.7-1.8s1.7.8 1.7 1.8V10.4"
      stroke="currentColor" strokeWidth="1" strokeLinecap="square" fill="none" />
  </svg>
);


const AboutTeam = () => {
  const team = [
    {
      name: 'Annie Middleton',
      role: 'Strategy & Operations',
      tone: 'cream',
      initials: 'AM',
      number: '01',
      hasLinkedIn: true,
      bio: [
        'Annie has been working remotely since 1997. Her first “home office” was the dinette of an RV, with an internet connection fueled by a 33k modem. In 2005, after eight years working as a website designer and developer, she started 9 Planets Web Design.',
        'Over the years she\'s worked with clients across multiple continents: small businesses, local governments, large international organizations. Her current focus is making accessible website design affordable for the people who need it most.',
        'When she\'s not behind the computer, you can find Annie outdoors or curled up with a good book or podcast.',
      ],
      tag: 'Founder',
    },
    {
      name: 'Sara C.',
      role: 'Project Manager',
      tone: 'sand',
      initials: 'SC',
      number: '02',
      hasLinkedIn: false,
      bio: [
        'Sara is an experienced project manager who loves bringing teams together to ship great websites. Coordination, timelines, budgets, risk: she keeps the trains on the tracks so everyone else can do their best work.',
        'She\'s well-versed in accessibility standards and committed to building sites that are inclusive and usable for everyone. When you work with Sara, you\'re getting a true partner who will go above and beyond to make your project a success.',
      ],
    },
    {
      name: 'Paul M.',
      role: 'Developer & Tech Support',
      tone: 'ink',
      initials: 'PM',
      number: '03',
      hasLinkedIn: false,
      bio: [
        'Paul has been with 9 Planets since 2005. He works in WordPress, PHP, ColdFusion, MySQL, MSSQL, CSS, JavaScript, AJAX, jQuery, Bootstrap, and, in his own words, “all that fun stuff.”',
        'He writes clean, modular, easily maintainable CSS using methodologies like BEM, and is committed to building accessible, mobile-responsive websites that comply with WCAG standards. Quietly opinionated; quietly excellent.',
      ],
      tag: 'Since 2005',
    },
    {
      name: 'Beth M.',
      role: 'Copywriting & SEO',
      tone: 'smoke',
      initials: 'BM',
      number: '04',
      hasLinkedIn: true,
      bio: [
        'Beth is a copywriter with a talent for crafting content that resonates with the target audience. Her copy strikes the balance between informative and entertaining, capturing attention and inspiring meaningful connections.',
      ],
    },
    {
      name: 'Jennifer G.',
      role: 'Local SEO',
      tone: 'cream',
      initials: 'JG',
      number: '05',
      hasLinkedIn: false,
      bio: [
        'Jennifer manages the online presence and performance of our clients\' Google properties: Google Business Profiles, citation-building campaigns, search analytics, and quarterly performance reports.',
        'Her technical chops and analytical approach turn search data into clear opportunities: the kind that move the needle on real, measurable results.',
      ],
    },
  ];

  return (
    <section id="team" style={{
      background: 'var(--light)',
      color: 'var(--dark)',
    }}>
      <div className="wrap" style={{ paddingTop: 40, paddingBottom: 80 }}>
        {/* Section header — headline left, intro right, names index below */}
        <div style={{ marginBottom: 80 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 80,
            alignItems: 'end',
            paddingBottom: 48,
            borderBottom: '1px solid var(--rule-light)',
          }}>
            <h2 style={{
              fontSize: 96,
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Who we are.
            </h2>
            <p style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: 'var(--muted-light)',
              margin: 0,
              maxWidth: 520,
              textWrap: 'pretty',
            }}>
              A small team of designers, developers, strategists, and writers,
              based in Eugene and Detroit. Most of us have been working on the
              web since before "responsive" was a word.
            </p>
          </div>

          {/* Disciplines strip — what the team does */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 28,
          }}>
            {[
              'Design',
              'Development',
              'Strategy',
              'Copy',
              'SEO',
              'Support',
            ].map((d) => (
              <span key={d} style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--dark)',
              }}>
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Team rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {team.map((person, i) => {
            const reversed = i % 2 === 1;
            return (
              <article key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.3fr',
                gap: 80,
                alignItems: 'start',
                paddingTop: 60,
                paddingBottom: 60,
                direction: reversed ? 'rtl' : 'ltr',
              }}>
                <div style={{ direction: 'ltr' }}>
                  <PortraitPlaceholder
                    initials={person.initials}
                    tone={person.tone}
                    label={`Photo · ${person.name.split(' ')[0]}`}
                  />
                </div>

                <div style={{ direction: 'ltr', paddingTop: 8 }}>
                  {/* Numbered + role */}
                  <div style={{
                    display: 'flex', alignItems: 'baseline', gap: 18,
                    marginBottom: 20,
                  }}>
                    <span className="eyebrow" style={{
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {person.number}
                    </span>
                    <span style={{
                      flex: 1, height: 1, background: 'var(--rule-light)',
                    }} />
                    <span className="eyebrow" style={{
                      color: 'var(--muted-light)',
                    }}>
                      {person.role}
                    </span>
                  </div>

                  {/* Name + linkedin + tag */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 18,
                    marginBottom: 28, flexWrap: 'wrap',
                  }}>
                    <h3 style={{
                      fontSize: 40,
                      lineHeight: 1.05,
                      letterSpacing: '-0.022em',
                      fontWeight: 400,
                      margin: 0,
                    }}>
                      {person.name}
                    </h3>
                    {person.hasLinkedIn && (
                      <a href="#" aria-label={`${person.name} on LinkedIn`} style={{
                        display: 'inline-flex',
                        alignItems: 'center', justifyContent: 'center',
                        width: 32, height: 32,
                        border: '1px solid var(--rule-light)',
                        color: 'var(--muted-light)',
                        transition: 'color .15s, border-color .15s, background .15s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--light)';
                        e.currentTarget.style.background = 'var(--accent)';
                        e.currentTarget.style.borderColor = 'var(--accent)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--muted-light)';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'var(--rule-light)';
                      }}>
                        <LinkedInMark />
                      </a>
                    )}
                    {person.tag && (
                      <span className="eyebrow" style={{
                        padding: '6px 10px',
                        border: '1px solid var(--accent)',
                      }}>
                        {person.tag}
                      </span>
                    )}
                  </div>

                  {/* Bio paragraphs */}
                  <div style={{ maxWidth: 620, display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {person.bio.map((p, j) => (
                      <p key={j} style={{
                        margin: 0,
                        fontSize: j === 0 ? 17 : 15,
                        lineHeight: 1.7,
                        color: j === 0 ? 'var(--dark)' : 'var(--muted-light)',
                        textWrap: 'pretty',
                      }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Security team — grouped card */}
        <div style={{
          marginTop: 80,
          background: 'var(--dark)',
          color: 'var(--light)',
          padding: '56px 60px 60px',
          border: '1px solid var(--dark)',
          position: 'relative',
        }}>
          {/* eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            marginBottom: 28,
          }}>
            <span className="eyebrow" data-on="dark" style={{
              fontVariantNumeric: 'tabular-nums',
            }}>
              06 · A Trio
            </span>
            <span style={{ flex: 1, height: 1, background: 'var(--rule-dark)' }} />
            <span className="eyebrow" data-on="dark" style={{
              color: 'rgba(247,245,243,0.6)',
            }}>
              Website Security
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.4fr',
            gap: 64,
            alignItems: 'start',
          }}>
            {/* Three small portraits */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14,
            }}>
              {[
                { initials: 'JB', name: 'Jai B.',  tone: 'plum' },
                { initials: 'BB', name: 'Brian B.', tone: 'ink'  },
                { initials: 'BM', name: 'Ben M.',  tone: 'plum' },
              ].map((m, i) => (
                <div key={i}>
                  <div style={{
                    aspectRatio: '1 / 1',
                    background: m.tone === 'plum' ? '#1d1f23' : '#2e3035',
                    border: '1px solid var(--rule-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-on-dark)',
                    fontSize: 'clamp(40px, 6vw, 72px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    fontFamily: "'Inter Tight', sans-serif",
                  }}>
                    {m.initials}
                  </div>
                  <div style={{
                    marginTop: 12,
                    fontSize: 13,
                    color: 'var(--light)',
                    fontWeight: 500,
                  }}>
                    {m.name}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: 44,
                lineHeight: 1.05,
                letterSpacing: '-0.022em',
                fontWeight: 400,
                margin: '0 0 24px',
                textWrap: 'balance',
              }}>
                The Website<br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Security Team.</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 620 }}>
                <p style={{
                  margin: 0,
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: 'rgba(247,245,243,0.85)',
                  textWrap: 'pretty',
                }}>
                  Jai, Brian, and Ben keep our clients\' managed websites safe and intact:
                  monitoring for vulnerabilities, applying software and plugin updates the
                  moment they\'re needed, and putting hardening measures in place against
                  whatever the web throws at us this week.
                </p>
                <p style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(247,245,243,0.65)',
                  textWrap: 'pretty',
                }}>
                  They\'re the quiet layer of defense behind the front door. The reason our
                  clients can stop thinking about their site and get back to running their
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.AboutTeam = AboutTeam;
