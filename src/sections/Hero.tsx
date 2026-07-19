export default function Hero() {
  return (
    <section id="hero" className="hero reveal" aria-label="Hero" data-delay="0.02">
      <div className="hero__inner">
        <span className="hero__badge">Vision Board 2026</span>

        <h1>Nompilo Mchunu</h1>

        <h2>Career Vision Board</h2>

        <p className="hero__subtitle">
          A focused path from cloud learnership to trusted Solutions Architect
          Specialist.
        </p>

        <p className="hero__meta">
          A practical growth plan built on technical depth, business value, and
          dependable execution.
        </p>

        <p className="hero__meta">
          I am preparing to deliver secure, scalable cloud solutions while
          growing leadership, collaboration, and long-term impact.
        </p>

        <div className="hero__pill-grid">
          <div className="hero__pill">
            <strong>Vision & Focus</strong>
            <p>Define the right role, roadmap, and next step with clarity.</p>
          </div>
          <div className="hero__pill">
            <strong>Impact</strong>
            <p>Demonstrate growth through real business outcomes and reliable work.</p>
          </div>
          <div className="hero__pill">
            <strong>Balance</strong>
            <p>Achieve career progress while protecting health, energy and momentum.</p>
          </div>
        </div>

        <div className="hero__tags">
          <span>AWS Cloud Focus</span>
          <span>Architecture Roadmap</span>
          <span>Team-Ready Mindset</span>
        </div>
      </div>
    </section>
  );
}