export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <h2 style={{ color: "purple", display: "block" }}>Featured Product</h2>
    </>
  );
}
