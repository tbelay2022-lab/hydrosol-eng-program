export default function Chapter3Page() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginTop: 0, marginBottom: "1rem" }}>
        Chapter 3 — The Expansion
      </h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2rem" }}>
        Chapter 3 expands Hydrosol’s engineering model into multi‑layer
        operational domains. This chapter introduces the structural,
        electromechanical, and energy‑distribution components that allow
        Hydrosol to scale beyond its baseline configuration.
      </p>

      <section style={{ marginBottom: "2rem", lineHeight: 1.6 }}>
        <h2>3.1 Structural Integration</h2>
        <p>
          Hydrosol’s physical architecture evolves to support additional
          subsystems. Structural integration ensures stability, load
          distribution, and mechanical resilience under varying operational
          conditions.
        </p>

        <h2>3.2 Electromechanical Systems</h2>
        <p>
          This section introduces the electromechanical layer responsible for
          motion control, actuator coordination, and subsystem synchronization.
          Diagnostics focus on signal alignment and mechanical response timing.
        </p>

        <h2>3.3 Energy Distribution Model</h2>
        <p>
          Hydrosol’s energy model becomes more complex as new pathways are
          introduced. Engineers monitor flow efficiency, conversion losses, and
          subsystem prioritization to maintain optimal performance.
        </p>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Hydrosol Initiative · Engineering Program
      </footer>
    </main>
  );
}