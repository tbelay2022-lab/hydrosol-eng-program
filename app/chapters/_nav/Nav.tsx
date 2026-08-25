"use client";

import Link from "next/link";

interface NavProps {
  prev?: string;
  next?: string;
}

export default function Nav({ prev, next }: NavProps) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
      {prev ? <Link href={prev}>← Previous</Link> : <span />}
      {next ? <Link href={next}>Next →</Link> : <span />}
    </nav>
  );
}