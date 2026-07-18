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
  return (
    <nav className="toc" aria-label="Table of contents">
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <a className="toc__link" href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
