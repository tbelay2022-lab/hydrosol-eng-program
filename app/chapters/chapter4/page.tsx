export default function Chapter4Page() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginTop: 0, marginBottom: "1rem" }}>
        Chapter 4 — The Diagnostics
      </h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2rem" }}>
        Chapter 4 formalizes Hydrosol’s diagnostic methodology. This chapter
        defines the diagnostic layers, signal pathways, and evaluation logic
        used to detect, classify, and respond to system deviations.
      </p>

      <section style={{ marginBottom: "2rem", lineHeight: 1.6 }}>
        <h2>4.1 Diagnostic Layers</h2>
        <p>
          Hydrosol diagnostics operate across multiple layers: physical,
          electromechanical, logical, and energy‑flow. Each layer contributes
          unique indicators that help engineers identify emerging issues.
        </p>

        <h2>4.2 Signal Pathways</h2>
        <p>
          Diagnostic signals travel through structured pathways that map
          subsystem behavior. Engineers monitor timing, amplitude, drift, and
          correlation to detect anomalies before they escalate.
        </p>

        <h2>4.3 Evaluation Logic</h2>
        <p>
          Evaluation logic determines how Hydrosol interprets diagnostic data.
          This includes threshold detection, pattern recognition, and
          cross‑layer correlation to produce actionable insights.
        </p>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Hydrosol Initiative · Engineering Program
      </footer>
    </main>
  );
}