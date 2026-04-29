const Nav = ({ onDark = true }) => {
  const color = onDark ? 'var(--light)' : 'var(--dark)';
  const muted = onDark ? 'rgba(247,245,243,0.7)' : 'rgba(37,39,43,0.65)';
  const activeColor = onDark ? 'var(--accent-on-dark)' : 'var(--accent-text)';

  const items = [
    { label: 'Home', href: 'Home.html' },
    {
      label: 'Services',
      href: '#',
      children: [
        { label: 'Website Design & Development', href: 'Website Design and Development.html' },
        { label: 'Digital Marketing & SEO',      href: 'Digital Marketing and SEO.html' },
        { label: 'Website Accessibility',        href: 'Website Accessibility.html' },
        { label: 'Tech Support & Security',      href: 'Tech Support and Security.html' },
        { label: 'Hosting & Domains',            href: 'Hosting and Domains.html' },
      ],
    },
    { label: 'Portfolio', href: 'Portfolio.html' },
    { label: 'About',     href: 'About.html' },
    { label: 'Blog',      href: 'Blog.html' },
  ];

  // Determine the active top-level item by matching the current URL filename.
  // Decoded so spaces and ampersands in filenames match the items[].href values.
  const currentFile = (() => {
    try {
      const path = window.location.pathname.split('/').pop() || '';
      return decodeURIComponent(path);
    } catch (e) {
      return '';
    }
  })();
  const activeLabel = (() => {
    for (const it of items) {
      if (it.href === currentFile) return it.label;
      if (Array.isArray(it.children) && it.children.some((c) => c.href === currentFile)) return it.label;
    }
    return null;
  })();

  const [openMenu, setOpenMenu] = React.useState(null);

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 56px',
      maxWidth: 1680,
      margin: '0 auto',
      color,
      position: 'relative',
      zIndex: 5,
    }}>
      {/* Logo */}
      <a href="Home.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="images/logo.png" alt="9 Planets" style={{ height: 77, width: 'auto', display: 'block' }} />
      </a>

      {/* Menu */}
      <div style={{ display: 'flex', gap: 36, fontSize: 14, fontWeight: 500 }}>
        {items.map((item) => {
          const hasDropdown = Array.isArray(item.children) && item.children.length > 0;
          const isOpen = openMenu === item.label;
          const isActive = item.label === activeLabel;
          return (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}
              onMouseLeave={() => hasDropdown && setOpenMenu(null)}
            >
              <a href={item.href} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: isActive ? activeColor : color,
                fontWeight: isActive ? 600 : 500,
                position: 'relative',
                paddingBottom: 2,
              }}>
                {item.label}
                {hasDropdown && (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform .18s ease',
                    opacity: 0.85,
                  }}>
                    <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" fill="none" />
                  </svg>
                )}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    left: 0, right: 0, bottom: -6,
                    height: 1,
                    background: activeColor,
                  }} />
                )}
              </a>

              {hasDropdown && isOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 14px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  minWidth: 280,
                  background: onDark ? 'var(--dark-2)' : 'var(--light)',
                  border: onDark ? '1px solid rgba(247,245,243,0.08)' : '1px solid var(--rule-light)',
                  borderRadius: 2,
                  boxShadow: '0 20px 40px -12px rgba(0,0,0,0.5)',
                  padding: '8px 0',
                  zIndex: 20,
                }}>
                  {/* Hover bridge */}
                  <div style={{ position: 'absolute', top: -14, left: 0, right: 0, height: 14 }} />
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        fontSize: 14,
                        fontWeight: 400,
                        color: onDark ? 'rgba(247,245,243,0.85)' : 'var(--dark)',
                        whiteSpace: 'nowrap',
                        transition: 'background .15s ease, color .15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = onDark ? 'rgba(255,255,255,0.04)' : 'var(--light-2)';
                        e.currentTarget.style.color = onDark ? 'var(--accent-on-dark)' : 'var(--accent-text)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = onDark ? 'rgba(247,245,243,0.85)' : 'var(--dark)';
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <a href="Get a Quote.html" className={onDark ? 'btn btn-light' : 'btn btn-primary'} style={{ padding: '10px 18px', fontSize: 13, fontWeight: 600 }}>
        Get a Quote
      </a>
    </nav>
  );
};

window.Nav = Nav;
