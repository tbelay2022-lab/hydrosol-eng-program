"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");

  if (typeof window !== "undefined") {
    const btn = document.getElementById("sidebarToggle");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", () => setOpen((prev) => !prev));
    }
  }

  const chapters = [
    { title: "Chapter 1 — Hydrosol Fundamentals", path: "/chapters/chapter1" },
    { title: "Chapter 2 — System Architecture", path: "/chapters/chapter2" },
    { title: "Chapter 3 — Electromechanical Ops", path: "/chapters/chapter3" },
    { title: "Chapter 4 — Diagnostics & Testing", path: "/chapters/chapter4" },
    { title: "Chapter 5 — Field Procedures", path: "/chapters/chapter5" },
    { title: "Chapter 6 — Safety & Compliance", path: "/chapters/chapter6" },
  ];

  const filtered = chapters.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  const linkStyle = (path) => ({
    color: pathname === path ? "#003366" : "#222",
    fontWeight: pathname === path ? "bold" : "normal",
    textDecoration: "none",
  });

  return (
    <aside
      style={{
        width: open ? "240px" : "0px",
        padding: open ? "1rem" : "0rem",
        background: "#f0f0f0",
        borderRight: open ? "1px solid #ccc" : "none",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        transition: "width 0.3s ease, padding 0.3s ease",
      }}
    >
      {open && (
        <>
          <h3 style={{ marginBottom: "1rem" }}>Hydrosol Chapters</h3>

          <input
            type="text"
            placeholder="Search chapters..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #aaa",
            }}
          />

          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2rem" }}>
            {filtered.map((c) => (
              <li key={c.path}>
                <a href={c.path} style={linkStyle(c.path)}>
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}