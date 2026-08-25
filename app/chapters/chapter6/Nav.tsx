"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link href="/chapters/chapter1">Chapter 1</Link>
        </li>
        <li>
          <Link href="/chapters/chapter2">Chapter 2</Link>
        </li>
        <li>
          <Link href="/chapters/chapter3">Chapter 3</Link>
        </li>
        <li>
          <Link href="/chapters/chapter4">Chapter 4</Link>
        </li>
        <li>
          <Link href="/chapters/chapter5">Chapter 5</Link>
        </li>
        <li>
          <Link href="/chapters/chapter6">Chapter 6</Link>
        </li>
      </ul>
    </nav>
  );
}