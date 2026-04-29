/* Portfolio grid — 12 project cards in a 3-per-row layout. Each card is
   a uniform-sized tile with a visual (real screenshot where we have one,
   or an abstracted mockup), project name, industry chip, and one-line
   descriptor. Cards use the browser-chrome frame treatment from the home
   Portfolio section for consistency. */

const PortfolioCard = ({ project }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--light)',
        border: '1px solid var(--rule-light)',
        color: 'var(--dark)',
        transition: 'border-color .2s, transform .35s cubic-bezier(.2,.8,.2,1)',
        borderColor: hover ? 'var(--dark)' : 'var(--rule-light)',
      }}
    >
      {/* Visual: either a real screenshot browser mockup, or an abstracted
          brand-color block with typographic hint of the industry. */}
      <div style={{
        padding: 20,
        background: project.tileBg,
        borderBottom: '1px solid var(--rule-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '4 / 3',
      }}>
        {project.image ? (
          /* Real-screenshot browser mockup */
          <div style={{
            width: '100%',
            background: '#fff',
            borderRadius: 3,
            boxShadow: '0 14px 30px rgba(0,0,0,0.18)',
            overflow: 'hidden',
            transform: hover ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
          }}>
            <div style={{
              background: '#e8e6e2',
              padding: '6px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}>
              {['#ff5f57','#ffbd2e','#28c840'].map((c, d) => (
                <div key={d} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
              ))}
              <div style={{
                flex: 1, marginLeft: 10, height: 12,
                background: '#fff', borderRadius: 2,
                fontSize: 8, color: '#8a8a8a',
                display: 'flex', alignItems: 'center', paddingLeft: 6,
                letterSpacing: '0.02em',
              }}>
                {project.url}
              </div>
            </div>
            <div style={{
              width: '100%',
              aspectRatio: '16 / 10',
              background: `url(${project.image}) center top / cover no-repeat`,
            }} />
          </div>
        ) : (
          /* Abstracted mockup: industry initial + brand colors */
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6px 2px',
            transform: hover ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
          }}>
            {/* Top mock-nav */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              paddingBottom: 12, borderBottom: `1px solid ${project.tileRule}`,
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: '50%',
                background: project.tileAccent,
              }} />
              <div style={{ flex: 1 }} />
              <div style={{ width: 22, height: 2, background: project.tileFg, opacity: 0.5 }} />
              <div style={{ width: 22, height: 2, background: project.tileFg, opacity: 0.5 }} />
              <div style={{ width: 22, height: 2, background: project.tileFg, opacity: 0.5 }} />
            </div>

            {/* Big typographic mark — initial + serial */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              padding: '12px 0',
              flex: 1,
            }}>
              <div style={{
                fontSize: 96,
                fontWeight: 300,
                letterSpacing: '-0.06em',
                color: project.tileFg,
                lineHeight: 0.85,
                fontStyle: 'italic',
              }}>
                {project.mark}
              </div>
              <div style={{
                textAlign: 'right',
                color: project.tileFg,
                opacity: 0.7,
              }}>
                <div style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: 4,
                }}>
                  Est. {project.year}
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 500, letterSpacing: '0.04em',
                  fontFamily: 'monospace',
                }}>
                  {project.url}
                </div>
              </div>
            </div>

            {/* Bottom tag row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              paddingTop: 10, borderTop: `1px solid ${project.tileRule}`,
            }}>
              <div style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: project.tileAccent,
              }}>
                {project.industry}
              </div>
              <div style={{ flex: 1, height: 1, background: project.tileRule }} />
              <div style={{
                fontSize: 10, fontWeight: 500, letterSpacing: '0.08em',
                color: project.tileFg, opacity: 0.6,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {project.no}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Caption strip */}
      <div style={{ padding: '20px 22px 22px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 10,
        }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--accent-text)',
          }}>
            {project.industry}
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--rule-light)' }} />
          <div style={{
            fontSize: 11, fontWeight: 500, color: 'var(--muted-light)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            {project.year}
          </div>
        </div>
        <div style={{
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: 6,
        }}>
          {project.name}
        </div>
        <div style={{
          fontSize: 13,
          lineHeight: 1.55,
          color: 'var(--muted-light)',
        }}>
          {project.blurb}
        </div>
      </div>
    </a>
  );
};

const PortfolioGrid = () => {
  // 12 projects across varied industries. The three with `image` use
  // real screenshots we already have; the other nine use typographic
  // tile treatments with brand-color palettes.
  const projects = [
    {
      name: 'Plums Café',
      blurb: 'A seasonal rebuild for a downtown restaurant — reservations, menu, events.',
      industry: 'Restaurant',
      year: '2025',
      url: 'plumscafe.com',
      image: 'images/plumscafe.jpg',
      tileBg: '#efece8',
    },
    {
      name: 'NW Youth Corps',
      blurb: 'Program-first site for a conservation nonprofit running crews across the PNW.',
      industry: 'Nonprofit',
      year: '2025',
      url: 'nwyouthcorps.org',
      image: 'images/nwyouthcorps.jpg',
      tileBg: '#efece8',
    },
    {
      name: 'McKenzie Scaffolding',
      blurb: 'No-nonsense services site for a regional scaffolding outfit — quotes, safety docs.',
      industry: 'Construction',
      year: '2024',
      url: 'mckenziescaffolding.com',
      image: 'images/mckenzie.jpg',
      tileBg: '#efece8',
    },
    {
      name: 'Emerald Valley Dental',
      blurb: 'Warm, reassuring site for a family dental practice — online booking, patient forms.',
      industry: 'Healthcare',
      year: '2024',
      mark: 'E',
      no: '04 · EVD',
      url: 'emeraldvalleydental.com',
      tileBg: '#1d1f23',
      tileFg: 'rgba(247,245,243,0.9)',
      tileAccent: '#7ed4a3',
      tileRule: 'rgba(247,245,243,0.12)',
    },
    {
      name: 'Ember & Oak Studio',
      blurb: 'Portfolio site for a husband-and-wife ceramics studio — shop, kiln schedule, journal.',
      industry: 'Arts & Craft',
      year: '2024',
      mark: 'o',
      no: '05 · EOS',
      url: 'emberandoakstudio.com',
      tileBg: '#f7e1ea',
      tileFg: '#25272b',
      tileAccent: '#bd285a',
      tileRule: 'rgba(37,39,43,0.18)',
    },
    {
      name: 'Willamette Outdoor Co.',
      blurb: 'An e-commerce site for a river-gear outfitter — inventory, rentals, trip guides.',
      industry: 'E-commerce',
      year: '2024',
      mark: 'W',
      no: '06 · WOC',
      url: 'willametteoutdoor.co',
      tileBg: '#2a2c30',
      tileFg: 'rgba(247,245,243,0.9)',
      tileAccent: '#f0ddd0',
      tileRule: 'rgba(247,245,243,0.10)',
    },
    {
      name: 'Riverbend Botanicals',
      blurb: 'A DTC storefront for a small-batch herbalist — subscriptions, educational content.',
      industry: 'Retail',
      year: '2024',
      mark: 'R',
      no: '07 · RBB',
      url: 'riverbendbotanicals.com',
      tileBg: '#f0ddd0',
      tileFg: '#25272b',
      tileAccent: '#bd285a',
      tileRule: 'rgba(37,39,43,0.18)',
    },
    {
      name: 'Coastal Music Co-op',
      blurb: 'A member-run nonprofit supporting working musicians on the Oregon coast.',
      industry: 'Nonprofit',
      year: '2023',
      mark: 'c',
      no: '08 · CMC',
      url: 'coastal-music.org',
      tileBg: '#25272b',
      tileFg: 'rgba(247,245,243,0.9)',
      tileAccent: '#d3326a',
      tileRule: 'rgba(247,245,243,0.12)',
    },
    {
      name: 'Three Oaks Law',
      blurb: 'A plain-language site for a family and estate practice — intake, resources, FAQs.',
      industry: 'Legal',
      year: '2023',
      mark: '3',
      no: '09 · TOL',
      url: 'threeoakslaw.com',
      tileBg: '#efece8',
      tileFg: '#25272b',
      tileAccent: '#2e3035',
      tileRule: 'rgba(37,39,43,0.18)',
    },
    {
      name: 'Lane County Library Foundation',
      blurb: 'Rebuilt donor site for a public-library nonprofit — campaigns, volunteer forms.',
      industry: 'Nonprofit',
      year: '2023',
      mark: 'L',
      no: '10 · LCLF',
      url: 'lanecountylibraryfoundation.org',
      tileBg: '#1d1f23',
      tileFg: 'rgba(247,245,243,0.9)',
      tileAccent: '#f0ddd0',
      tileRule: 'rgba(247,245,243,0.10)',
    },
    {
      name: 'Spoke & Sprocket',
      blurb: 'A neighborhood bike shop — repair booking, inventory sync, community rides.',
      industry: 'Retail',
      year: '2023',
      mark: 'S',
      no: '11 · SPK',
      url: 'spokeandsprocket.bike',
      tileBg: '#f7e1ea',
      tileFg: '#25272b',
      tileAccent: '#bd285a',
      tileRule: 'rgba(37,39,43,0.18)',
    },
    {
      name: 'Fern & Thicket Wellness',
      blurb: 'A small clinic offering naturopathic care — practitioner bios, intake, insurance.',
      industry: 'Healthcare',
      year: '2022',
      mark: 'F',
      no: '12 · F&T',
      url: 'fernandthicket.com',
      tileBg: '#2a2c30',
      tileFg: 'rgba(247,245,243,0.9)',
      tileAccent: '#7ed4a3',
      tileRule: 'rgba(247,245,243,0.10)',
    },
  ];

  return (
    <section style={{ background: 'var(--light)', padding: '110px 0 120px' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: 80,
          alignItems: 'end',
          marginBottom: 56,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Selected work</div>
            <h2 style={{
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Recent Work.
            </h2>
          </div>
          <p style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: 'var(--muted-light)',
            margin: 0,
            maxWidth: 440,
            paddingBottom: 8,
          }}>
            Each project is a custom build — no templates, no cookie-cutter themes. Here are a few we're proud of from the last several years.
          </p>
        </div>

        {/* 3-column uniform grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {projects.map((p, i) => (
            <PortfolioCard key={i} project={p} />
          ))}
        </div>

        {/* Pagination — visual placeholder. Page 1 of 8 active. */}
        <div style={{
          marginTop: 96,
          paddingTop: 40,
          borderTop: '1px solid var(--rule-light)',
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
            Page <span style={{ color: 'var(--dark)' }}>01</span> / 08
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

            {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => {
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
            <a href="#" onClick={(e) => e.preventDefault()} style={{
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

window.PortfolioGrid = PortfolioGrid;
