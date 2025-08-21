export default async function Read({ params }) {
  params = await params;

  return (
    <>
      <h2>Read</h2>
      parameters: {params.id}
    </>
  );
}
