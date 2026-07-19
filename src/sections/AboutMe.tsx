import profileImage from "../assets/images/NE_Mchunu.jpg";

export default function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="section-panel reveal" data-delay="0.04">
        <div className="section-panel__content">
          <p className="section-intro">
            I am a Software Development graduate with hands-on technology experience, a practical mindset, and a focus on cloud solutions that deliver value.
          </p>

          <p>
            My name is Nompilo Mchunu, and I am a Software Development
            graduate with a passion for technology, continuous learning,
            and solving real-world problems through innovative solutions.
          </p>

          <p>
            Throughout my journey, I have gained exposure to multiple areas
            of technology, including software development, cybersecurity,
            data analytics, cloud computing, business analysis, systems
            analysis, and software testing. These experiences helped me
            develop a broader understanding of technology and ultimately
            led me to discover my passion for cloud computing.
          </p>

          <p>
            I have had the opportunity to contribute to projects that
            strengthened both my technical and professional skills,
            allowing me to move beyond theory and apply my knowledge
            in practical environments.
          </p>
        </div>

        <div className="section-panel__image">
          <img src={profileImage} alt="Portrait of Nompilo" />
        </div>
      </div>

      <div className="section-panel reveal" data-delay="0.05">
        <div className="section-panel__content">
          <h3>Career-ready skills and achievements</h3>
          <p>
            These are the practical strengths I already bring to a cloud-focused role.
          </p>

          <ul>
            <li>Software Development Graduate</li>
            <li>Cloud Learnership Participant</li>
            <li>Exposure to Cybersecurity Practices</li>
            <li>Dashboard Development using Power BI</li>
            <li>Data Analysis using DAX</li>
            <li>Business and Systems Analysis</li>
            <li>Software Testing and Quality Assurance</li>
            <li>SharePoint Solution Development</li>
            <li>Power Automate Workflow Integration</li>
          </ul>

          <p>
            My work on SharePoint automation, Power BI reporting, and live
            platform logic shows I can contribute through real delivery,
            not just learning.
          </p>

          <p>
            Every experience, project, and challenge has helped shape the
            professional I am becoming. Today, I am pursuing a future in
            cloud computing with purpose, confidence, and a clear vision
            for where I want my career to go.
          </p>
        </div>
      </div>
    </section>
  );
}