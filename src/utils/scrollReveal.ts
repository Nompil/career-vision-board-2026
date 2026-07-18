export default function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
  );

  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    // allow per-element delay via data-delay attribute (seconds)
    const delay = el.dataset.delay;
    if (delay) el.style.setProperty('--r-delay', `${delay}s`);
    observer.observe(el);
  });

  // Fallback: ensure content becomes visible if IntersectionObserver doesn't trigger (timing/edge cases)
  setTimeout(() => {
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      if (!el.classList.contains('is-visible')) el.classList.add('is-visible');
    });
  }, 700);
}
