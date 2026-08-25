export default function ChaptersIndex() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginTop: 0, marginBottom: "2rem" }}>
        Hydrosol Engineering Program — Chapters
      </h1>

      <ul style={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
        <li><a href="/chapters/chapter1">Chapter 1 — System Fundamentals</a></li>
        <li><a href="/chapters/chapter2">Chapter 2 — The Quest</a></li>
        <li><a href="/chapters/chapter3">Chapter 3 — The Expansion</a></li>
        <li><a href="/chapters/chapter4">Chapter 4 — The Diagnostics</a></li>
        <li><a href="/chapters/chapter5">Chapter 5 — The Model</a></li>
        <li><a href="/chapters/chapter6">Chapter 6 — The Partnership</a></li>
      </ul>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Hydrosol Initiative · Engineering Program
      </footer>
    </main>
  );
}