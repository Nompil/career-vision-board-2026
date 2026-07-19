import relationshipsImage from "../assets/images/professional networking collaboration.jpg";

export default function Relationships() {
  return (
    <section id="relationships">
      <h2>Relationships I Will Build</h2>

      <div className="section-panel reveal" data-delay="0.06">
        <div className="section-panel__content">
          <p>
            Success is never achieved alone. One of the most important
            lessons I have learned is that growth happens through the
            relationships I build, the people I learn from, and the
            communities that support me along the way.
          </p>

          <ul>
            <li>
              <strong>Managers</strong> – to receive guidance, feedback,
              and opportunities for growth.
            </li>

            <li>
              <strong>Mentors</strong> – to learn from the experiences of
              those who have already walked the path I aspire to follow.
            </li>

            <li>
              <strong>Cloud Engineers</strong> – to deepen my technical
              knowledge and learn industry best practices.
            </li>

            <li>
              <strong>Solutions Architects</strong> – to gain insights into
              architecture thinking, design principles, and leadership.
            </li>

            <li>
              <strong>Learnership Peers</strong> – to build a network of
              future professionals who can grow alongside me.
            </li>

            <li>
              <strong>Technology Communities</strong> – to continue learning,
              sharing knowledge, and remaining connected to industry trends.
            </li>
          </ul>

          <p>
            I do not want to simply build a network. I want to build genuine,
            meaningful relationships based on learning, collaboration, trust,
            and mutual growth.
          </p>
        </div>

        <div className="section-panel__image">
          <img src={relationshipsImage} alt="Professional networking collaboration" />
        </div>
      </div>
    </section>
  );
}