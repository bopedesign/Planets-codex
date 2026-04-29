const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Information Gathering',
      body: 'We dig into your goals, target audience, content, timeline and budget.',
      duration: 'Week 1',
    },
    {
      num: '02',
      title: 'Planning',
      body: 'Based on the information we gather we\'ll put together a proposal.',
      duration: 'Week 1–2',
    },
    {
      num: '03',
      title: 'Design',
      body: 'In the first stage of design, we create the look and feel of your home page.',
      duration: 'Week 2–3',
    },
    {
      num: '04',
      title: 'Content Creation',
      body: 'Text, images and other elements needed to develop the website will be collected, created or found.',
      duration: 'Week 3–4',
    },
    {
      num: '05',
      title: 'Development',
      body: 'Once the design is approved, we move forward with the development of the rest of the website.',
      duration: 'Week 4–6',
    },
    {
      num: '06',
      title: 'Testing & Tweaks',
      body: 'Once the first build of the website is complete, you review the website and we make any minor adjustments.',
      duration: 'Week 6–7',
    },
    {
      num: '07',
      title: 'Launch',
      body: 'Go live! We\'ll schedule a launch time for your website to seamlessly transition from your old website to the new.',
      duration: 'Week 7',
    },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <section style={{ background: 'var(--light)', padding: '120px 0 130px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 70 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Our process</div>
            <h2 style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Seven steps from<br />
              brief to <span style={{ fontStyle: 'italic', fontWeight: 300 }}>launch</span>.
            </h2>
          </div>
          <div style={{ paddingBottom: 10 }}>
            <hr className="dashed-accent" style={{ maxWidth: 60, marginLeft: 0, marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted-light)', margin: 0, maxWidth: 420 }}>
              No black boxes. You'll know what we're working on, what's coming next, and what's expected of you at each stage. Typical engagement: 6–8 weeks.
            </p>
          </div>
        </div>

        {/* Process layout: left rail is step list, right is expanded detail */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60 }}>
          {/* Steps list */}
          <div style={{ borderTop: '1px solid var(--rule-light)' }}>
            {steps.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    width: '100%',
                    padding: '22px 0',
                    borderBottom: '1px solid var(--rule-light)',
                    display: 'grid',
                    gridTemplateColumns: '50px 1fr auto',
                    alignItems: 'center',
                    gap: 20,
                    textAlign: 'left',
                    background: 'transparent',
                    transition: 'padding .2s',
                    paddingLeft: isActive ? 14 : 0,
                  }}
                >
                  <span style={{
                    fontSize: 13,
                    fontWeight: 600,
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '0.06em',
                    color: isActive ? 'var(--accent-text)' : 'var(--muted-light)',
                    transition: 'color .2s',
                  }}>{s.num}</span>
                  <span style={{
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                    color: isActive ? 'var(--dark)' : 'var(--muted-light)',
                    transition: 'color .2s',
                  }}>
                    {s.title}
                  </span>
                  <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--accent-text)' : 'var(--muted-light)',
                    transition: 'color .2s',
                  }}>
                    {s.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div style={{
            background: 'var(--dark)',
            color: 'var(--light)',
            padding: '48px 44px',
            position: 'sticky',
            top: 20,
            alignSelf: 'start',
            minHeight: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}>
            {/* Decorative big numeral */}
            <div style={{
              position: 'absolute',
              right: -20, top: -60,
              fontSize: 320,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.03)',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              pointerEvents: 'none',
            }}>
              {steps[active].num}
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
                <span style={{
                  width: 6, height: 6,
                  background: 'var(--accent)',
                  transform: 'rotate(45deg)',
                }} />
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(247,245,243,0.75)' }}>
                  Step {steps[active].num} · {steps[active].duration}
                </span>
              </div>
              <h3 style={{
                fontSize: 38,
                letterSpacing: '-0.025em',
                fontWeight: 400,
                margin: '0 0 20px',
                lineHeight: 1.08,
              }}>
                {steps[active].title}
              </h3>
              <p style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(247,245,243,0.75)',
                margin: 0,
                maxWidth: 420,
              }}>
                {steps[active].body}
              </p>
            </div>

            {/* Progress bar */}
            <div style={{ position: 'relative', zIndex: 1, marginTop: 48 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, color: 'rgba(247,245,243,0.7)', marginBottom: 12, letterSpacing: '0.08em' }}>
                <span>BRIEF</span>
                <span>LAUNCH</span>
              </div>
              <div style={{ height: 2, background: 'var(--rule-dark)', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0, top: 0, bottom: 0,
                  width: `${((active + 1) / steps.length) * 100}%`,
                  background: 'var(--accent)',
                  transition: 'width .3s',
                }} />
                <div style={{
                  position: 'absolute',
                  left: `${((active + 1) / steps.length) * 100}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 10, height: 10,
                  background: 'var(--accent)',
                  borderRadius: '50%',
                  transition: 'left .3s',
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Process = Process;
