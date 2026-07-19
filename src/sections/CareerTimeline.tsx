export default function CareerTimeline() {
  const items = [
    { year: '2024', title: 'Software Developer Intern', body: 'Gained hands-on experience in software development, strengthened my foundation and learned professional collaboration.' },
    { year: '2024', title: '3G Intern', body: 'Expanded responsibilities, adapted to new challenges, and continued learning.' },
    { year: '2025', title: 'IT Intern', body: 'Explored multiple tech disciplines which led to discovering an interest in cloud computing.' },
    { year: '2026', title: 'Cloud Learnership (Turning Point)', body: 'Cloud exposure, mentorship, and hands-on learning clarified my direction, I belong in cloud.' },
    {
      year: '2027-2028',
      title: 'Junior Cloud Engineer',
      body: [
        'Apply cloud knowledge in a professional environment while strengthening technical expertise, gaining practical experience, and contributing to cloud initiatives.',
        'During this period, I aim to earn the AWS Certified Solutions Architect Professional certification by 2027 to deepen my architecture knowledge.',
      ],
    },
    {
      year: '2029-2030',
      title: 'Cloud Engineer',
      body: [
        'Design and implement scalable cloud solutions while contributing to business transformation initiatives and developing deeper cloud architecture capabilities.',
        'During this stage, I also aim to graduate with an advanced qualification in Computer Science by 2029, strengthening my academic foundation and technical depth.',
      ],
    },
    { year: '2031-2032', title: 'Senior Cloud Engineer', body: 'Lead larger cloud projects, mentor junior engineers, and deepen architecture and automation expertise.' },
    { year: '2033-2034', title: 'Associate Solutions Architect', body: 'Bridge business needs and technical solutions while developing architecture expertise and strategic decision-making skills.' },
    { year: '2035-2036', title: 'Solutions Architect', body: 'Design resilient solutions, guide cloud strategy, and influence technology decisions across teams.' },
    { year: '2037+', title: 'Solutions Architect Specialist', body: 'Lead strategic architecture, design resilient solutions, and mentor others while continuing to grow as a technical leader.' },
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
            This timeline shows how each experience has built toward my path as a
            future Solutions Architect Specialist: practical growth, cloud exposure,
            and the steady development of both technical and leadership capability.
          </p>
        </div>
      </div>
    </section>
  )
}