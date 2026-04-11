// ── Mobile menu ───────────────────────────────────────
const menuBtn = document.getElementById('menuBtn');
const nav     = document.getElementById('nav');

function openMenu() {
  nav.classList.add('open');
  menuBtn.classList.add('open');
  menuBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  nav.classList.remove('open');
  menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn?.addEventListener('click', () => {
  nav.classList.contains('open') ? closeMenu() : openMenu();
});

// Close on nav link click
nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !e.target.closest('.header')) {
    closeMenu();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
});

// ── Header background on scroll ───────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 20
    ? 'rgba(6, 13, 26, 0.97)'
    : 'rgba(6, 13, 26, 0.85)';
}, { passive: true });

// ── Scroll-in animations (IntersectionObserver) ───────
const animatedEls = document.querySelectorAll(
  '.skill-card, .project-card, .contact-card, .featured-project, .sobre-text'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // fire once only
    }
  });
}, { threshold: 0.08 });

animatedEls.forEach((el, i) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 40}ms, transform 0.5s ease ${i * 40}ms, border-color 0.25s ease, box-shadow 0.25s ease`;
  observer.observe(el);
});
