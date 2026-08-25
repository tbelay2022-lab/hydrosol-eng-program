"use client";

import Link from "next/link";

const paths: string[] = [
  "/chapters/chapter1",
  "/chapters/chapter2",
  "/chapters/chapter3",
  "/chapters/chapter4",
  "/chapters/chapter5",
  "/chapters/chapter6",
];

export default function Sidebar() {
  return (
    <aside style={{ padding: "20px", borderRight: "1px solid #ccc" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {paths.map((path: string) => (
          <li key={path} style={{ marginBottom: "10px" }}>
            <Link href={path}>{path.replace("/chapters/", "")}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}