import impactImage from "../assets/images/impact on my life.jpg";

export default function Impact() {
  return (
    <section id="impact">
      <h2>Impact On My Life</h2>

      <div className="section-panel reveal" data-delay="0.06">
        <div className="section-panel__content">
          <p>
            Becoming a Solutions Architect Specialist will be more than
            achieving a professional title. It will represent years of
            perseverance, growth, learning, and believing in myself even
            when the future felt uncertain.
          </p>

          <ul>
            <li>Achieve greater financial independence and stability.</li>

            <li>
              Create opportunities to support family and future goals.
            </li>

            <li>
              Build confidence in skills, abilities, and decision-making.
            </li>

            <li>
              Continue learning and growing in a field that genuinely excites me.
            </li>

            <li>
              Contribute to meaningful technology solutions that make a
              difference in people's lives.
            </li>

            <li>
              Inspire others who may still be searching for their own career path.
            </li>
          </ul>

          <p>
            Most importantly, this career will allow me to wake up every day
            knowing that I am working in a field where I feel challenged,
            motivated, and fulfilled.
          </p>
        </div>

        <div className="section-panel__image">
          <img src={impactImage} alt="Personal impact and future life planning" />
        </div>
      </div>
    </section>
  );
}
