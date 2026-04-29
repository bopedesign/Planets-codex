const PortfolioRow = ({ project, i, reverse }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: reverse ? '1fr 1.4fr' : '1.4fr 1fr',
        gap: 60,
        alignItems: 'stretch',
        background: project.bg,
        color: project.textColor,
        border: '1px solid var(--rule-light)',
        padding: 32,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Browser mockup side */}
      <div style={{
        gridColumn: reverse ? 2 : 1,
        gridRow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 340,
      }}>
        <div style={{
          width: '100%',
          background: '#fff',
          borderRadius: 4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.28)',
          overflow: 'hidden',
          transform: hover ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
        }}>
          {/* Browser chrome */}
          <div style={{
            background: '#e8e6e2',
            padding: '9px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            {['#ff5f57','#ffbd2e','#28c840'].map((c,d) => (
              <div key={d} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
            <div style={{
              flex: 1,
              marginLeft: 16,
              height: 16,
              background: '#fff',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 10,
              fontSize: 10,
              color: '#8a8a8a',
              letterSpacing: '0.02em',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}>
              {project.url}
            </div>
          </div>
          {/* Screenshot */}
          <div style={{
            width: '100%',
            aspectRatio: '16 / 10',
            background: `url(${project.image}) center top / cover no-repeat`,
          }} />
        </div>
      </div>

      {/* Caption side */}
      <div style={{
        gridColumn: reverse ? 1 : 2,
        gridRow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: reverse ? '0 20px 0 24px' : '0 24px 0 20px',
        gap: 18,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: project.muted }}>
            {project.tag}
          </div>
          <div style={{ flex: 1, height: 1, background: project.ruleColor }} />
          <div style={{ fontSize: 12, fontWeight: 500, color: project.muted, letterSpacing: '0.04em' }}>
            {String(i + 1).padStart(2, '0')} / 03
          </div>
        </div>
        <div style={{
          fontSize: 38,
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          textWrap: 'balance',
        }}>{project.name}</div>
        <div style={{ fontSize: 15, lineHeight: 1.55, color: project.muted, maxWidth: 420 }}>
          {project.blurb}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
          {project.tags.map((t, k) => (
            <span key={k} style={{
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 10px',
              border: `1px solid ${project.ruleColor}`,
              color: project.muted,
            }}>{t}</span>
          ))}
        </div>
        <div style={{
          marginTop: 12,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          alignSelf: 'flex-start',
        }}>
          <span style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: hover ? 'var(--accent)' : project.textColor,
            transition: 'color .25s',
          }}>View case study</span>
          <span style={{
            width: 34, height: 34,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            background: hover ? 'var(--accent)' : 'transparent',
            border: `1px solid ${hover ? 'var(--accent)' : project.ruleColor}`,
            color: hover ? 'var(--light)' : project.textColor,
            transition: 'all .25s',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M3 9L9 3M4 3h5v5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="square" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

const Portfolio = () => {
  const viewport = useResponsive();
  const projects = [
    {
      name: 'Plums Café',
      blurb: 'A full rebuild for a Eugene mainstay — new brand system, online reservations, a photo-forward menu, and a seasonal events calendar that keeps regulars coming back.',
      tag: 'Featured · 2025',
      tags: ['Branding', 'Web design', 'Reservations'],
      url: 'plumscafe.com',
      image: 'images/plumscafe.jpg',
      bg: 'var(--dark)',
      textColor: 'var(--light)',
      muted: 'rgba(247,245,243,0.7)',
      ruleColor: 'var(--rule-dark)',
    },
    {
      name: 'NW Youth Corps',
      blurb: 'A clear, program-first site for a nonprofit running conservation crews across the Pacific Northwest — streamlined applications, donation flow, and staff-managed news.',
      tag: 'Nonprofit · 2025',
      tags: ['CMS', 'Donations', 'Accessibility'],
      url: 'nwyouthcorps.org',
      image: 'images/nwyouthcorps.jpg',
      bg: 'var(--light-2)',
      textColor: 'var(--dark)',
      muted: 'var(--muted-light)',
      ruleColor: 'var(--rule-light)',
    },
    {
      name: 'McKenzie Scaffolding',
      blurb: 'A no-nonsense services site for a regional scaffolding outfit — fast quote requests, a job gallery, and safety documentation that contractors can actually find.',
      tag: 'Services · 2024',
      tags: ['Web design', 'Lead gen', 'Gallery'],
      url: 'mckenziescaffolding.com',
      image: 'images/mckenzie.jpg',
      bg: 'var(--light-2)',
      textColor: 'var(--dark)',
      muted: 'var(--muted-light)',
      ruleColor: 'var(--rule-light)',
    },
  ];

  return (
    <section style={{ background: 'var(--light-2)', padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '110px 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 56 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Recent work</div>
            <h2 style={{
              fontSize: pickResponsive(viewport, 60, 48, 34),
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              A few sites we've<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>recently</span> shipped.
            </h2>
          </div>
          <div style={{ paddingBottom: 10, display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <a href="#" className="btn btn-outline">
              <span>Full portfolio</span>
              <span className="arrow">→</span>
            </a>
            <a href="Get a Quote.html" className="btn btn-primary">
              <span>Get a quote</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {projects.map((p, i) => (
            <PortfolioRow key={i} project={p} i={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

window.Portfolio = Portfolio;
