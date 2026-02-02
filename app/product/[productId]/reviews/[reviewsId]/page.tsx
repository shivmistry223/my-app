export default async function ReviewDetailsPageI({
  params,
}: {
  params: Promise<{ productId: string; reviewsId: string }>;
}) {
  const { productId, reviewsId } = await params;
  return (
    <main>
      <h1>Review Details</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewsId}</p>
    </main>
  );
}
