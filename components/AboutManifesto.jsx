/* About manifesto — editorial moment styled like the site's CTA pattern:
   a contained, bordered box on light-2 with the headline anchored left
   and the body copy as a centered supporting block on the right. */

const AboutManifesto = () => {
  return (
    <section style={{ background: 'var(--light)', padding: '120px 0' }}>
      <div className="wrap">
        <div style={{
          background: 'var(--light-2)',
          border: '1px solid var(--rule-light)',
          padding: '80px 88px',
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr',
          gap: 80,
          alignItems: 'center',
          position: 'relative',
        }}>
          {/* Left: headline */}
          <div>
            <h2 style={{
              fontSize: 72,
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
              color: 'var(--dark)',
            }}>
              We love efficiency{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                &amp; learning new things.
              </span>
            </h2>
          </div>

          {/* Right: body copy */}
          <div>
            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--muted-light)',
              margin: 0,
              maxWidth: 420,
              textWrap: 'pretty',
            }}>
              We keep on top of trends in the website and online marketing space
              and make sure your business is taking advantage of the easiest,
              most cost-effective ways to get in front of your existing and
              potential clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

window.AboutManifesto = AboutManifesto;
