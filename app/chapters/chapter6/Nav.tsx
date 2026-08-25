import Link from "next/link";

export default function Nav({ prev, next }) {
  return (
    <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
      {prev && (
        <Link href={prev}>
          <button>← Previous</button>
        </Link>
      )}
      {next && (
        <Link href={next}>
          <button>Next →</button>
        </Link>
      )}
    </div>
  );
}
Step 4 — Save as .tsx
In Notepad++:

File → Save As…