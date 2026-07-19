import skillsImage from "../assets/images/professional networking collaboration.jpg";

export default function SkillsNeeded() {
  return (
    <section id="skills" className="reveal" data-delay="0.05">
      <h2>Skills Needed</h2>

      <div className="section-panel reveal" data-delay="0.06">
        <div className="section-panel__content">
          <p>
            Becoming a Solutions Architect Specialist requires a balance of
            technical expertise, business understanding, and strong
            interpersonal skills.
          </p>

          <div className="card-grid card-grid--skills">
            <div className="card">
              <h4>Technical Skills</h4>
              <ul className="skill-list">
                <li>AWS Cloud Architecture</li>
                <li>Cloud Security and Governance</li>
                <li>System Design and Integration</li>
                <li>Infrastructure as Code</li>
                <li>Networking Fundamentals</li>
                <li>Cost Optimisation</li>
                <li>Solution Design Patterns</li>
              </ul>
            </div>

            <div className="card">
              <h4>Professional Skills</h4>
              <ul className="skill-list">
                <li>Communication and Presentation Skills</li>
                <li>Stakeholder Management</li>
                <li>Strategic Thinking</li>
                <li>Problem Solving</li>
                <li>Leadership and Mentorship</li>
                <li>Collaboration and Teamwork</li>
              </ul>
            </div>
          </div>

          <p>
            I understand that technical skills may open doors, but strong
            communication, leadership, and relationship-building skills will
            allow me to create greater impact and grow into an effective
            Solutions Architect.
          </p>
        </div>

        <div className="section-panel__image">
          <img src={skillsImage} alt="Professional collaboration and teamwork" />
        </div>
      </div>
    </section>
  );
}