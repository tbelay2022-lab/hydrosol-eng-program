export default function Chapter5Page() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginTop: 0, marginBottom: "1rem" }}>
        Chapter 5 — The Model
      </h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2rem" }}>
        Chapter 5 defines Hydrosol’s engineering model in its complete form.
        This chapter establishes the relationships between subsystems, the
        energy‑flow architecture, and the predictive logic that governs system
        behavior under varying operational conditions.
      </p>

      <section style={{ marginBottom: "2rem", lineHeight: 1.6 }}>
        <h2>5.1 System Architecture</h2>
        <p>
          Hydrosol’s architecture is represented as a multi‑layer model
          combining physical structure, electromechanical systems, control
          logic, and diagnostic pathways. Each layer interacts through defined
          interfaces to maintain stability and performance.
        </p>

        <h2>5.2 Energy‑Flow Model</h2>
        <p>
          The energy‑flow model describes how Hydrosol distributes, converts,
          and stabilizes energy across subsystems. Engineers track efficiency,
          loss points, and priority routing to ensure optimal operation.
        </p>

        <h2>5.3 Predictive Logic</h2>
        <p>
          Predictive logic enables Hydrosol to anticipate operational changes.
          Using diagnostic signals and subsystem feedback, the model forecasts
          load shifts, environmental impacts, and potential deviations.
        </p>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Hydrosol Initiative · Engineering Program
      </footer>
    </main>
  );
}