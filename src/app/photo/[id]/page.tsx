export default async function PhotoIdPage({
  params
}: {
  params: { id: number }
}) {
  return (
    <main>
      <h1>ID: {params.id}</h1>
    </main>
  )
}
