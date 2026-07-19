import { useState, useEffect } from 'react'

const items = [
  { id: 'hero', label: 'Welcome' },
  { id: 'vision-at-a-glance', label: 'Vision Snapshot' },
  { id: 'moment', label: 'Clarity Moment' },
  { id: 'about', label: 'About Me' },
  { id: 'highlights', label: 'Key Highlights' },
  { id: 'dream', label: 'Dream Career' },
  { id: 'skills', label: 'Skills Needed' },
  { id: 'benefits', label: 'Career Benefits' },
  { id: 'impact', label: 'Impact Plan' },
  { id: 'relationships', label: 'Relationships' },
  { id: 'future', label: 'Future Self' },
  { id: 'timeline', label: 'Career Timeline' },
  { id: 'weekly', label: 'Weekly Plan' },
]

export default function NavToc() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 900) setIsOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  return (
    <>
      <nav className="toc" aria-label="Table of contents">
        <div className="toc__title">Board sections</div>

        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <a className="toc__link" href={`#${it.id}`}>
                <span className="toc__icon" aria-hidden="true"></span>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="toc-mobile">
        <button
          className="toc-mobile__button"
          aria-expanded={isOpen}
          aria-controls="toc-mobile-panel"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Contents
        </button>

        {isOpen && (
          <div id="toc-mobile-panel" className="toc-mobile__panel" aria-label="Mobile table of contents">
            <ul>
              {items.map((it) => (
                <li key={it.id}>
                  <a className="toc__link" href={`#${it.id}`} onClick={() => setIsOpen(false)}>{it.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
