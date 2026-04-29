const QARow = ({ q, a, open, onToggle, i }) => {
  return (
    <div style={{
      borderTop: i === 0 ? '1px solid var(--rule-light)' : 'none',
      borderBottom: '1px solid var(--rule-light)',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 0',
          textAlign: 'left',
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: 'var(--dark)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ color: 'var(--accent-text)', fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.05em', width: 32 }}>
            0{i + 1}
          </span>
          {q}
        </span>
        <span style={{
          width: 28, height: 28,
          border: '1px solid var(--rule-light)',
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          transition: 'all .2s',
          background: open ? 'var(--accent)' : 'transparent',
          color: open ? 'var(--light)' : 'var(--dark)',
          borderColor: open ? 'var(--accent)' : 'var(--rule-light)',
          flexShrink: 0,
        }}>
          <svg width="11" height="11" viewBox="0 0 11 11">
            <path d={open ? "M2 5.5h7" : "M5.5 2v7M2 5.5h7"} stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 300 : 0,
        overflow: 'hidden',
        transition: 'max-height .35s ease, padding .35s ease',
      }}>
        <div style={{
          paddingLeft: 52,
          paddingBottom: open ? 24 : 0,
          paddingTop: open ? 4 : 0,
          color: 'var(--muted-light)',
          fontSize: 16,
          lineHeight: 1.65,
          maxWidth: 600,
        }}>
          {a}
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
  const viewport = useResponsive();
  const [open, setOpen] = React.useState(0);
  const items = [
    {
      q: 'Who is the website for?',
      a: 'Existing customers, new prospects, or your own team? The answer shapes everything from navigation to content strategy. We start here because an "everyone" site is really a "no one" site.'
    },
    {
      q: 'What do you want this website to do?',
      a: 'Present information, showcase product or service, enable online sales, track inventory or leads, stay top-of-mind, or collect subscribers? Each goal demands different architecture and different metrics of success.'
    },
    {
      q: 'What should the result of your web presence be?',
      a: 'Increased sales, new customers, or a way to market a niche product? For your website to be a successful component of your business, we need to define what it should accomplish within your overall plan.'
    },
    {
      q: 'How will you measure it working?',
      a: 'Traffic, form fills, calls, time on page, revenue? We set up the tracking so you\'re not guessing whether the investment is paying off — you\'re watching it happen.'
    },
  ];

  return (
    <section style={{ background: 'var(--light)', padding: viewport.isMobile ? '72px 0' : viewport.isTablet ? '96px 0' : '120px 0 110px' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 100, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 40 }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>Before we build</div>
          <h2 style={{
            fontSize: pickResponsive(viewport, 60, 48, 34),
            lineHeight: 1.02,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: '0 0 32px 0',
            textWrap: 'balance',
          }}>
            Great sites start<br />
            with the <span style={{ fontStyle: 'italic', fontWeight: 300 }}>right questions</span>.
          </h2>
          <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 24 }} />
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted-light)', margin: '0 0 20px', maxWidth: 420 }}>
            Your web designer will need to understand your business and goals in order to build the kind of site that will best suit your requirements. Before you can create an effective website, you need to decide what your goals are.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 420 }}>
            So we start with a conversation — not a template.
          </p>
        </div>

        <div>
          {items.map((it, i) => (
            <QARow
              key={i}
              i={i}
              q={it.q}
              a={it.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

window.Intro = Intro;
