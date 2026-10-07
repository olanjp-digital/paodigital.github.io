const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Navigation polish: keep a single Contact CTA and give the current section
// a subtle glass-style active state across desktop and mobile.
if (navLinks) {
  const links = Array.from(navLinks.querySelectorAll('a'));
  const contactCta = links.find((link) => link.classList.contains('nav-cta'));

  if (contactCta) {
    const duplicateContact = links.find((link) =>
      !link.classList.contains('nav-cta') && link.href === contactCta.href
    );
    duplicateContact?.remove();
  }

  const pathname = window.location.pathname.toLowerCase();
  let activeHref = null;

  if (pathname.includes('/case-studies/') || pathname.endsWith('/work.html')) {
    activeHref = 'work.html';
  } else if (pathname.endsWith('/about.html')) {
    activeHref = 'about.html';
  } else if (pathname.endsWith('/contact.html')) {
    activeHref = 'contact.html';
  }

  if (activeHref) {
    const activeLink = Array.from(navLinks.querySelectorAll('a')).find((link) =>
      link.getAttribute('href')?.endsWith(activeHref)
    );
    activeLink?.setAttribute('aria-current', 'page');
  }

  const navStyle = document.createElement('style');
  navStyle.textContent = `
    .nav-links a {
      transition: color .2s ease, background .2s ease, border-color .2s ease,
                  box-shadow .2s ease, transform .2s ease;
    }

    .nav-links a[aria-current="page"] {
      color: var(--text) !important;
      padding: 9px 14px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.14);
      background: linear-gradient(
        135deg,
        rgba(255,255,255,.12),
        rgba(255,255,255,.045)
      );
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.10),
        0 8px 24px rgba(0,0,0,.16);
      -webkit-backdrop-filter: blur(14px) saturate(135%);
      backdrop-filter: blur(14px) saturate(135%);
    }

    .nav-links a[aria-current="page"]:hover {
      border-color: rgba(40,199,201,.38);
      background: linear-gradient(
        135deg,
        rgba(40,199,201,.14),
        rgba(255,255,255,.06)
      );
      transform: translateY(-1px);
    }

    .nav-links .nav-cta[aria-current="page"] {
      border-color: rgba(40,199,201,.34);
    }
  `;
  document.head.appendChild(navStyle);
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll('.reveal').forEach((el) => {
  if (observer) observer.observe(el);
  else el.classList.add('visible');
});

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
