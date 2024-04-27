import Card from "@/components/Card/Card";
import Slider from "@/components/Slider/Slider";
import dataSlider from "@/components/Slider/slider-data.json";
import styles from "./page.module.css";

const getProducts = async () => {
  const res = await fetch(
    `https://purpleschool.ru/api-demo/products?limit=6&offset=0`
  );

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
};

export default async function Home() {
  const { products } = await getProducts();
  console.log(products);

  return (
    <main>
      <h1 className="visually-hidden">Магазин аксессуаров</h1>
      <section className="hero">
        <Slider data={dataSlider} />
      </section>
      <section className="py-10 grid justify-center gap-y-12 gap-x-20 grid-cols-3">
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
      </section>
    </main>
  );
}
