export function generateStaticParams() {
  return [
    {
      id: "foo",
    },
    {
      id: "bar",
    },
    {
      id: "baz",
    },
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main>
      <h1>Bar</h1>
      <p>
        <code>id</code> is <code>{id}</code>
      </p>
    </main>
  );
}
