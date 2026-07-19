import dreamImage from "../assets/images/my dream career.jpg";

export default function DreamCareer() {
  return (
    <section id="dream" className="dream-career reveal" data-delay="0.06">
      <h2>My Dream Career</h2>

      <div className="section-panel reveal" data-delay="0.07">
        <div className="section-panel__content">
          <p>
            My dream is to become a <strong>Solutions Architect Specialist</strong>
            who designs secure, scalable, and innovative technology solutions
            that solve real business challenges and create meaningful impact.
          </p>

          <p>
            What draws me to this career is the opportunity to combine
            technology, problem-solving, leadership, and continuous learning.
          </p>

          <div className="card-grid">
            <div className="card"><h4>Design enterprise cloud solutions</h4></div>
            <div className="card"><h4>Bridge business and technology</h4></div>
            <div className="card"><h4>Lead digital transformation initiatives</h4></div>
            <div className="card"><h4>Influence strategic technology decisions</h4></div>
            <div className="card"><h4>Mentor and support future technology professionals</h4></div>
          </div>
        </div>

        <div className="section-panel__image">
          <img src={dreamImage} alt="Professional career planning" />
        </div>
      </div>

      <p>
        More importantly, this career aligns with who I am becoming: someone who is curious, resilient, eager to learn, and committed to creating value through technology.
      </p>
    </section>
  );
}