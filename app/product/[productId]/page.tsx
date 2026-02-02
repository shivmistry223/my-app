export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const id = (await params).productId;

  return (
    <main>
      <h1>Product with product ID: {id}</h1>
    </main>
  );
}
