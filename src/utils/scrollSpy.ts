export default function initScrollSpy() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.toc__link'))
  if (!links.length) return;

  const idToLink = new Map<string, HTMLAnchorElement>()
  links.forEach(l => {
    const href = l.getAttribute('href') || ''
    if (href.startsWith('#')) idToLink.set(href.slice(1), l)
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id
      const link = idToLink.get(id)
      if (!link) return
      if (entry.isIntersecting) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }, { root: null, threshold: 0.45 })

  idToLink.forEach((_, id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
}
