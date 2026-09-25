// mobile nav (same behaviour as homepage)
const burger = document.querySelector('.navburger');
const links = document.querySelector('.navlinks');
burger?.addEventListener('click', () => {
  const open = links.style.display === 'flex';
  links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:76px;left:0;right:0;background:#fff;padding:24px 32px;gap:20px;border-bottom:1px solid #e0e3ee;';
});

// scroll reveal
if ('IntersectionObserver' in window) {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}
