/* "What we offer" — services grid section on the Home page.
   2-col header row: title / supporting copy.
   3×2 grid of service cards, each with a background image and text top-left. */
const HomeServices = () => {
  const cards = [
    {
      title: 'Website Design & Development',
      body:
        'Your website is one of your most powerful marketing and sales tools, but only if it works for you. We go beyond the visuals to build sites that load fast, rank well, and grow with your business.',
      art: 'images/art-design.png',
      theme: 'dark',
      tint: 'a',
    },
    {
      title: 'Digital Marketing & SEO',
      body:
        'Test, tune, and track your search ranking and conversion performance. We pair SEO know-how with real marketing strategy so visitors find you, and actually engage when they do.',
      art: 'images/art-marketing.png',
      theme: 'dark',
      tint: 'b',
    },
    {
      title: 'Website Accessibility',
      body:
        'We help small businesses make their sites usable by everyone. WCAG 2.1 AA audits, ADA-compliant remediation, and training so your team can keep it that way.',
      art: 'images/art-access.png',
      theme: 'dark',
      tint: 'c',
    },
    {
      title: 'Tech Support & Security',
      body:
        'Ongoing maintenance, software updates, backups, and security monitoring. We keep things patched and protected so small issues stay small.',
      art: 'images/art-support.png',
      theme: 'dark',
      tint: 'd',
    },
    {
      title: 'Hosting & Domains',
      body:
        'Fast, reliable hosting and domain management tuned for the sites we build. One bill, one team to call, no runaround between providers when something needs attention.',
      art: 'images/art-hosting.png',
      theme: 'dark',
      tint: 'e',
    },
    {
      title: 'Need help or have a question?',
      body: "Not sure where to start? We're happy to talk it through — no pitch, no pressure. Just a real conversation about what you're trying to build.",
      bg: 'images/block-question.png',
      theme: 'light',
      cta: 'Contact Us',
      showArrow: false,
      variant: 'invitation',
    },
  ];

  return (
    <section style={{
      background: 'var(--light)',
      color: 'var(--dark)',
      padding: '120px 0 120px',
    }}>
      <div className="wrap">
        {/* Header row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
          marginBottom: 48,
        }}>
          <h2 style={{
            fontSize: 68,
            lineHeight: 1.04,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: 0,
            color: 'var(--dark)',
          }}>
            What we offer
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: 'var(--muted-light)',
              margin: 0,
              maxWidth: 360,
            }}>
              Design, marketing, accessibility, support, and hosting, all
              handled by one local team so the pieces actually work together.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {cards.map((c, i) => <ServiceCard key={i} {...c} />)}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, body, bg, art, theme, cta, showArrow = true, variant, tint }) => {
  const [hover, setHover] = React.useState(false);
  const isDark = theme === 'dark';
  const fg   = isDark ? 'var(--light)'           : 'var(--dark)';
  const mute = isDark ? 'rgba(247,245,243,0.72)' : 'var(--muted-light)';
  const ruleColor = isDark ? 'rgba(247,245,243,0.35)' : 'rgba(37,39,43,0.35)';
  const isInvitation = variant === 'invitation';

  const hasBg  = !!bg;
  const hasArt = !!art;

  // Varied dark atmospheres — all share the hero's deep-slate palette and a
  // warm/pink glow. Only the direction, softness, and focal point of the
  // sweeps change per card, so the grid feels like related-but-distinct
  // scenes without introducing new colors.
  const darkAtmospheres = {
    // light from top-right, warm pool bottom-left
    a:
      'radial-gradient(80% 55% at 88% 8%, rgba(247,225,213,0.14) 0%, rgba(247,225,213,0) 60%),' +
      'radial-gradient(90% 90% at 8% 105%, rgba(211,50,106,0.12) 0%, rgba(211,50,106,0) 55%),' +
      'linear-gradient(150deg, #1a1c20 0%, #23262a 55%, #2c2f34 100%)',
    // soft wash from bottom-right, muted top
    b:
      'radial-gradient(95% 70% at 100% 95%, rgba(247,225,213,0.12) 0%, rgba(247,225,213,0) 55%),' +
      'radial-gradient(60% 50% at 20% 15%, rgba(211,50,106,0.09) 0%, rgba(211,50,106,0) 60%),' +
      'linear-gradient(135deg, #1b1d21 0%, #24262a 50%, #2b2e33 100%)',
    // overhead glow from top-center, cool base
    c:
      'radial-gradient(110% 55% at 50% -10%, rgba(247,225,213,0.16) 0%, rgba(247,225,213,0) 60%),' +
      'radial-gradient(70% 80% at 100% 100%, rgba(211,50,106,0.10) 0%, rgba(211,50,106,0) 55%),' +
      'linear-gradient(165deg, #181a1e 0%, #21232a 55%, #292c32 100%)',
    // side-light from the left
    d:
      'radial-gradient(80% 70% at 0% 45%, rgba(247,225,213,0.14) 0%, rgba(247,225,213,0) 60%),' +
      'radial-gradient(60% 50% at 90% 5%, rgba(211,50,106,0.10) 0%, rgba(211,50,106,0) 55%),' +
      'linear-gradient(115deg, #181a1e 0%, #21232a 55%, #292c32 100%)',
    // diagonal streak
    e:
      'linear-gradient(110deg, rgba(255,255,255,0) 52%, rgba(247,225,213,0.10) 60%, rgba(255,255,255,0) 68%),' +
      'radial-gradient(70% 80% at 100% 100%, rgba(211,50,106,0.11) 0%, rgba(211,50,106,0) 55%),' +
      'linear-gradient(145deg, #16181c 0%, #1f2228 55%, #272a30 100%)',
  };
  const darkAtmosphere = darkAtmospheres[tint] || darkAtmospheres.a;

  const lightAtmosphere =
    'radial-gradient(90% 65% at 80% 10%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%),' +
    'radial-gradient(70% 100% at 100% 50%, rgba(211,50,106,0.07) 0%, rgba(211,50,106,0) 65%),' +
    'linear-gradient(135deg, #e5e1dc 0%, #ece9e4 50%, #f1ede8 100%)';

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
      position: 'relative',
      borderRadius: 10,
      overflow: 'hidden',
      aspectRatio: '16 / 10',
      backgroundColor: isDark ? 'var(--dark-2)' : '#e9e6e2',
      backgroundImage: hasBg ? `url("${bg}")` : (isDark ? darkAtmosphere : lightAtmosphere),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: fg,
      display: 'flex',
      flexDirection: 'column',
      cursor: showArrow ? 'pointer' : 'default',
    }}>
      {/* Circular arrow button (top-right) */}
      {showArrow && (
        <div style={{
          position: 'absolute',
          top: 28,
          right: 28,
          width: 38,
          height: 38,
          borderRadius: '50%',
          border: `1px solid ${hover ? 'var(--accent)' : ruleColor}`,
          background: hover ? 'var(--accent)' : 'transparent',
          color: hover ? 'var(--light)' : fg,
          display: 'grid',
          placeItems: 'center',
          transition: 'all .25s',
          zIndex: 3,
        }}>
          <svg width="13" height="13" viewBox="0 0 11 11">
            <path d="M3 8L8 3M4 3h4v4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="square" />
          </svg>
        </div>
      )}
      {/* Foreground artwork */}
      {hasArt && (
        <div style={{
          position: 'absolute',
          left: '4%',
          right: '4%',
          bottom: 0,
          height: '55%',
          backgroundImage: `url("${art}")`,
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          pointerEvents: 'none',
        }} />
      )}
      {/* Text block */}
      {isInvitation ? (
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 64px',
          maxWidth: '72%',
        }}>
          <div style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--dark)',
            marginBottom: 18,
          }}>
            Not sure where to start?
          </div>
          <h3 style={{
            fontSize: 44,
            fontWeight: 400,
            lineHeight: 1.02,
            letterSpacing: '-0.028em',
            margin: '0 0 22px 0',
            color: 'var(--dark)',
            textWrap: 'balance',
          }}>
            Let's <span style={{ fontStyle: 'italic', fontWeight: 300 }}>talk</span> it through.
          </h3>
          <p style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: mute,
            margin: '0 0 28px 0',
            maxWidth: 380,
          }}>
            No pitch, no pressure — just a real conversation about what you're trying to build.
          </p>
          {cta && (
            <a href="#" className="btn btn-primary" style={{ padding: '14px 22px', fontSize: 14 }}>
              <span>{cta}</span>
              <span className="arrow">→</span>
            </a>
          )}
        </div>
      ) : (
        <div style={{
          padding: '40px 44px 0',
          position: 'relative',
          zIndex: 2,
        }}>
          <h3 style={{
            fontSize: 30,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0',
            color: isDark ? '#fff' : 'var(--dark)',
            textWrap: 'balance',
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: mute,
            margin: 0,
          }}>
            {body}
          </p>

          {cta && (
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginTop: 24,
              padding: '10px 18px',
              fontSize: 13,
              fontWeight: 600,
              background: 'var(--dark)',
              color: 'var(--light)',
              borderRadius: 2,
              transition: 'background .18s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#000')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--dark)')}
            >
              {cta}
            </a>
          )}
        </div>
      )}
    </article>
  );
};

window.HomeServices = HomeServices;
