"use client";

import Link from "next/link";

const chapters = [
  { path: "/chapters/chapter1", label: "Chapter 1" },
  { path: "/chapters/chapter2", label: "Chapter 2" },
  { path: "/chapters/chapter3", label: "Chapter 3" },
  { path: "/chapters/chapter4", label: "Chapter 4" },
  { path: "/chapters/chapter5", label: "Chapter 5" },
  { path: "/chapters/chapter6", label: "Chapter 6" },
];

export default function Sidebar() {
  return (
    <aside style={{ padding: "20px", borderRight: "1px solid #ccc" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {chapters.map((item) => (
          <li key={item.path} style={{ marginBottom: "10px" }}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}