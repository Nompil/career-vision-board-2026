export default function CareerTimeline() {
  const items = [
    { year: '2024', title: 'Software Developer Intern', body: 'Built practical software development skills, strengthened my foundation, and learned how to collaborate in a professional team.' },
    { year: '2024', title: '3G Intern', body: 'Expanded responsibilities, adapted to new challenges, and kept growing through hands-on learning.' },
    { year: '2025', title: 'IT Intern', body: 'Explored multiple tech disciplines and discovered a strong interest in cloud computing.' },
    { year: '2026', title: 'Cloud Learnership (Turning Point)', body: 'Cloud exposure, mentorship, and hands-on projects made it clear: I belong in cloud.' },
    {
      year: '2027-2028',
      title: 'Junior Cloud Engineer',
      body: [
        'Apply cloud knowledge in a professional setting while strengthening technical expertise and contributing to real cloud initiatives.',
        'I will earn the AWS Certified Solutions Architect Professional certification by 2027 to deepen my architecture knowledge.',
      ],
    },
    {
      year: '2029-2030',
      title: 'Cloud Engineer',
      body: [
        'Design and implement scalable cloud solutions that support business transformation.',
        'I will also complete an advanced Computer Science qualification by 2029 to strengthen my academic and technical depth.',
      ],
    },
    { year: '2031-2032', title: 'Senior Cloud Engineer', body: 'Lead larger cloud projects, mentor junior engineers, and deepen my architecture and automation expertise.' },
    { year: '2033-2034', title: 'Associate Solutions Architect', body: 'Bridge business needs and technical solutions while sharpening architecture expertise and strategic decision-making.' },
    { year: '2035-2036', title: 'Solutions Architect', body: 'Design resilient solutions, guide cloud strategy, and influence technology decisions across teams.' },
    { year: '2037+', title: 'Solutions Architect Specialist', body: 'Lead strategic architecture, design resilient systems, and mentor others while continuing to grow as a technical leader.' },
  ]

  return (
    <section id="timeline" className="reveal" aria-label="Career timeline" data-delay="0.06">
      <h2>Career Timeline</h2>

      <div className="section-panel reveal" data-delay="0.06">
        <div className="section-panel__content">
          <div className="timeline">
            {items.map((it) => (
              <div className="timeline-item" key={`${it.year}-${it.title}`}>
                <div>
                  <span className="year">{it.year}</span>
                  <strong>{it.title}</strong>
                </div>
                {Array.isArray(it.body)
                  ? it.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  : <p>{it.body}</p>
                }
              </div>
            ))}
          </div>

          <p>
            This timeline traces my career from hands-on software work to a
            clear, intentional cloud architecture path. It highlights practical
            growth, focused cloud experience, and the leadership development
            that supports my goal of becoming a Solutions Architect Specialist.
          </p>
        </div>
      </div>
    </section>
  )
}