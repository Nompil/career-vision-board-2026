export default function CareerTimeline() {
  const items = [
    { year: '2024', title: 'Software Developer Intern', body: 'Gained hands-on experience in software development, strengthened my foundation and learned professional collaboration.' },
    { year: '2024', title: '3G Intern', body: 'Expanded responsibilities, adapted to new challenges, and continued learning.' },
    { year: '2025', title: 'IT Intern', body: 'Explored multiple tech disciplines which led to discovering an interest in cloud computing.' },
    { year: '2026', title: 'Cloud Learnership (Turning Point)', body: 'Cloud exposure, mentorship, and hands-on learning clarified my direction — I belong in cloud.' },
    { year: '2027-2028', title: 'Junior → Cloud Engineer', body: 'Apply and expand cloud skills in professional settings.' },
    { year: '2029-2030', title: 'Associate Solutions Architect', body: 'Bridge business needs and technical solutions; develop architecture expertise.' },
    { year: '2035+', title: 'Solutions Architect Specialist', body: 'Lead strategic architecture, design resilient solutions and mentor others.' },
  ]

  return (
    <section id="timeline" className="timeline reveal" aria-label="Career timeline" data-delay="0.06">
      <h2>Career Timeline</h2>

      <div className="timeline">
        {items.map((it) => (
          <div className="timeline-item" key={it.year}>
            <div>
              <span className="year">{it.year}</span>
              <strong>{it.title}</strong>
            </div>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}