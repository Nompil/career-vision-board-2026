export default function QuoteCard() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
      }}
    >
      <p
        style={{
          fontSize: "1.4rem",
          fontStyle: "italic",
          opacity: 0.7,
        }}
      >
        "Do I really want to be here?"
      </p>

      <p
        style={{
          fontSize: "1.4rem",
          fontStyle: "italic",
          opacity: 0.7,
        }}
      >
        "Is this the career I want for myself?"
      </p>

      <div
        style={{
          fontSize: "2rem",
          margin: "2rem 0",
        }}
      >
        ↓
      </div>

      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        I BELONG IN CLOUD.
      </h2>
    </section>
  );
}