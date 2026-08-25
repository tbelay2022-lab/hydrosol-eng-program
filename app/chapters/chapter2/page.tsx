export default function Chapter2Page() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Chapter Title */}
      <h1 style={{ marginTop: 0, marginBottom: "1rem" }}>
        Chapter 2 — The Quest
      </h1>

      {/* Intro Section */}
      <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2rem" }}>
        Chapter 2 continues the Hydrosol Engineering Program by expanding the
        system model, operational logic, and diagnostic pathways introduced in
        Chapter 1. This chapter defines the “Quest” — the engineering pursuit
        of stable, predictable, and optimized Hydrosol operation.
      </p>

      {/* Content Block */}
      <section style={{ marginBottom: "2rem", lineHeight: 1.6 }}>
        <h2>2.1 System Expansion</h2>
        <p>
          Hydrosol’s engineering model grows in complexity as additional
          subsystems are introduced. These include thermal regulation,
          mechanical load balancing, and energy‑flow stabilization.
        </p>

        <h2>2.2 Operational Logic</h2>
        <p>
          The Quest defines how Hydrosol transitions from baseline operation
          into adaptive mode. Control logic becomes dynamic, responding to
          environmental inputs, load changes, and diagnostic triggers.
        </p>

        <h2>2.3 Diagnostic Pathways</h2>
        <p>
          Diagnostics in Chapter 2 focus on identifying deviations from expected
          behavior. Engineers track signal drift, subsystem lag, and energy
          inefficiencies to maintain system integrity.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Hydrosol Initiative · Engineering Program
      </footer>
    </main>
  );
}