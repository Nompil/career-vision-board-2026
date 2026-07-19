import dreamImage from "../assets/images/my dream career.jpg";

export default function DreamCareer() {
  return (
    <section id="dream" className="dream-career reveal" data-delay="0.06">
      <h2>My Dream Career</h2>

      <div className="section-panel reveal" data-delay="0.07">
        <div className="section-panel__content">
          <p>
            I am building toward a <strong>Solutions Architect Specialist</strong>
            role where I design secure, scalable, and innovative technology
            solutions that solve business challenges and create meaningful impact.
          </p>

          <p>
            I am drawn to this career because it combines technology,
            problem-solving, leadership, and continuous learning in a way that
            reflects who I am and where I want to go.
          </p>

          <div className="card-grid">
            <div className="card"><h4>Design enterprise cloud solutions</h4></div>
            <div className="card"><h4>Bridge business and technology</h4></div>
            <div className="card"><h4>Lead digital transformation initiatives</h4></div>
            <div className="card"><h4>Influence strategic technology decisions</h4></div>
            <div className="card"><h4>Mentor future technology professionals</h4></div>
          </div>

          <p>
            This career aligns with who I am becoming: curious, resilient,
            eager to learn, and committed to creating value through technology.
          </p>
        </div>

        <div className="section-panel__image">
          <img src={dreamImage} alt="Professional career planning" />
        </div>
      </div>
    </section>
  );
}