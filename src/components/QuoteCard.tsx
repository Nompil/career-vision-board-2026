export default function QuoteCard() {
  return (
    <section className="quote-card reveal" aria-labelledby="quote-heading" data-delay="0.08">
      <div className="quote-card__intro">
        <p className="quote-card__line">"Do I really want to be here?"</p>
        <p className="quote-card__line">"Is this the career I want for myself?"</p>
      </div>

      <div className="quote-card__divider" aria-hidden="true">
        ↓
      </div>

      <h2 id="quote-heading" className="quote-card__headline">
        I BELONG IN CLOUD.
      </h2>
    </section>
  );
}