import focusImage from "../assets/images/Vision and focus.jpg";
import impactImage from "../assets/images/Impact.jpg";
import balanceImage from "../assets/images/Balance.jpg";

export default function Hero() {
  return (
    <section className="hero-section reveal" aria-label="Hero" data-delay="0.02">
      <div className="hero-content">
        <p className="hero__badge">Career Vision Board 2026</p>

        <h1>Nompilo Mchunu</h1>

        <h2>From Exploration to Clarity</h2>

        <p className="hero-lead">
          I’ve taken each step, challenge, and opportunity toward a clearer
          cloud career.
        </p>

        <p className="hero-copy">
          I am building a future in cloud computing with resilience,
          curiosity, purpose, and a clear path to becoming a Solutions
          Architect Specialist.
        </p>

        <div className="hero-actions">
          <a href="#timeline" className="hero-cta">
            Explore my cloud timeline
          </a>
        </div>

        <div className="hero-cards">
          <div className="hero-card">
            <div className="hero-card__media">
              <img src={focusImage} alt="Vision and focus" />
            </div>
            <h3>Vision &amp; Focus</h3>
            <p>Define the right role, roadmap, and next step with clarity.</p>
          </div>

          <div className="hero-card">
            <div className="hero-card__media">
              <img src={impactImage} alt="Impact" />
            </div>
            <h3>Impact</h3>
            <p>
              Demonstrate growth through real business outcomes and reliable
              work.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card__media">
              <img src={balanceImage} alt="Balance" />
            </div>
            <h3>Balance</h3>
            <p>
              Achieve career progress while protecting health, energy, and
              momentum.
            </p>
          </div>
        </div>

        <div className="hero-tags">
          <span>AWS Cloud Focus</span>
          <span>Architecture Roadmap</span>
          <span>Resilient Growth</span>
        </div>
      </div>
    </section>
  );
}
