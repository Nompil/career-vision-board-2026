import { useState, useEffect } from 'react'

const items = [
  { id: 'hero', label: 'Hero' },
  { id: 'moment', label: 'Moment' },
  { id: 'about', label: 'About' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'dream', label: 'Dream' },
  { id: 'skills', label: 'Skills' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'impact', label: 'Impact' },
  { id: 'relationships', label: 'Relationships' },
  { id: 'future', label: 'Future Self' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'weekly', label: 'Weekly' },
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
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <a className="toc__link" href={`#${it.id}`}>{it.label}</a>
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
