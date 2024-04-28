import Card from "@/components/Card/Card";

const getProducts = async () => {
  const res = await fetch(
    `https://purpleschool.ru/api-demo/products?limit=6&offset=0`
  );

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
};

export default async function Catalog() {
  const { products } = await getProducts();

  return (
    <main>
      <p>Catalog</p>
      {products &&
        products.map((product: Product) => (
          <Card
            key={product.sku}
            src={product.images[0]}
            name={product.name}
            price={product.price}
            sku={product.sku}
          />
        ))}
    </main>
  );
}
