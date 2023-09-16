"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  return (
    <main>
      <h1>Bar</h1>
      <p>
        <code>id</code> is <code>{id}</code>
      </p>
    </main>
  );
}
