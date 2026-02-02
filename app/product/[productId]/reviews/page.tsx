export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const id = (await params).productId;
  return <h1>Reviews for Product with product ID: {id}</h1>;
}
