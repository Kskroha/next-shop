export default function Product({ params }: { params: { productId: string } }) {
  return (
    <main>
      <p>{params.productId}</p>
    </main>
  );
}
