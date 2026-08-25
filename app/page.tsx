export default function ChapterPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Chapter Title */}
      <h1 style={{ marginTop: 0, marginBottom: "1rem" }}>
        Chapter 2 — [Your Chapter 2 Title]
      </h1>

      {/* Intro Section */}
      <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2rem" }}>
        [Short introduction describing what Chapter 2 covers.]
      </p>

      {/* Content Block */}
      <section style={{ marginBottom: "2rem", lineHeight: 1.6 }}>
        <h2>2.1 [Section Title]</h2>
        <p>
          [Your content goes here.]
        </p>

        <h2>2.2 [Section Title]</h2>
        <p>
          [Your content goes here.]
        </p>

        <h2>2.3 [Section Title]</h2>
        <p>
          [Your content goes here.]
        </p>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Hydrosol Initiative · Engineering Program
      </footer>
    </main>
  );
}