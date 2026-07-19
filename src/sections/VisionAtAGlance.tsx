import cloudImage from "../assets/images/Cloud Computing.jpg";
import academicImage from "../assets/images/Study Desk With Laptop Notebooks.jpg";
import financeImage from "../assets/images/financial planning investing notebook.jpg";
import travelImage from "../assets/images/world travel map passport.jpg";
import wellnessImage from "../assets/images/healthy lifestyle wellness balance.jpg";
import relationshipsImage from "../assets/images/professional networking collaboration.jpg";

export default function VisionAtAGlance() {
  return (
    <section id="vision-at-a-glance" className="vision reveal" data-delay="0.06">
      <div className="section-label">
        <span>The Life I Am Building</span>
      </div>

      <p className="section-intro">
        My vision is not only about a career title. It is about building a
        balanced, meaningful, and purpose-driven life that combines technical
        strength, leadership, and impact.
      </p>

      <h3 className="section-subtitle">
        Every area of this vision supports my goal to become a dependable
        Solutions Architect Specialist who can deliver value right away.
      </h3>

      <div className="vision-grid">
        <article className="vision-card">
          <div className="vision-card__image-wrap">
            <img src={cloudImage} alt="Career Excellence" className="vision-card__image" />
            <span className="vision-card__label">Career Excellence</span>
          </div>
          <div className="vision-card__content">
            <h3>Career Excellence</h3>
            <p>
              Deliver secure, scalable cloud solutions that help teams move fast
              and operate with confidence.
            </p>
          </div>
        </article>

        <article className="vision-card">
          <div className="vision-card__image-wrap">
            <img src={academicImage} alt="Academic Growth" className="vision-card__image" />
            <span className="vision-card__label">Academic Growth</span>
          </div>
          <div className="vision-card__content">
            <h3>Academic Growth</h3>
            <p>
              Build expertise through advanced study and certifications that
              support real cloud architecture work.
            </p>
          </div>
        </article>

        <article className="vision-card">
          <div className="vision-card__image-wrap">
            <img src={financeImage} alt="Financial Stability" className="vision-card__image" />
            <span className="vision-card__label">Financial Stability</span>
          </div>
          <div className="vision-card__content">
            <h3>Financial Stability</h3>
            <p>
              Create long-term security through disciplined saving, investing,
              and planning that supports steady career growth.
            </p>
          </div>
        </article>

        <article className="vision-card">
          <div className="vision-card__image-wrap">
            <img src={travelImage} alt="Travel & Exploration" className="vision-card__image" />
            <span className="vision-card__label">Travel & Exploration</span>
          </div>
          <div className="vision-card__content">
            <h3>Travel & Exploration</h3>
            <p>
              Gain perspective by experiencing new cultures, places, and ideas
              with my family.
            </p>
          </div>
        </article>

        <article className="vision-card">
          <div className="vision-card__image-wrap">
            <img src={wellnessImage} alt="Health & Wellness" className="vision-card__image" />
            <span className="vision-card__label">Health & Wellness</span>
          </div>
          <div className="vision-card__content">
            <h3>Health & Wellness</h3>
            <p>
              Build a sustainable routine that supports energy, focus, and long
              term success.
            </p>
          </div>
        </article>

        <article className="vision-card">
          <div className="vision-card__image-wrap">
            <img src={relationshipsImage} alt="Meaningful Relationships" className="vision-card__image" />
            <span className="vision-card__label">Meaningful Relationships</span>
          </div>
          <div className="vision-card__content">
            <h3>Meaningful Relationships</h3>
            <p>
              Grow trust, collaboration, and mentorship within the people and
              teams I work with.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
