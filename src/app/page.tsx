import Card from "@/components/Card/Card";
import Slider from "@/components/Slider/Slider";
import dataSlider from "@/components/Slider/slider-data.json";
import Link from "next/link";
import { API } from "./api/api";
import Search from "@/components/Search/Search";

const getProducts = async () => {
  const res = await fetch(`${API.products.get}?limit=6&offset=0`);

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
};

export default async function Home() {
  const { products } = await getProducts();
  console.log(products);

  return (
    <main className="grow min-h-screen">
      <h1 className="visually-hidden">Магазин аксессуаров</h1>
      <div className="sm:hidden">
        <Search />
      </div>
      <section className="pt-4 sm:pt-3">
        <Slider data={dataSlider} />
      </section>
      <section className="py-10">
        <div className="flex justify-between items-end mb-10">
          <h2 className="m-0 text-black text-base sm:text-3xl sans">
            Последние поступления
          </h2>
          <Link
            className="text-gold text-sm sm:text-xl text-light"
            href={"/catalog"}
          >
            Все
          </Link>
        </div>
        <div className="grid gap-y-6 gap-x-4 sm:gap-y-12 sm:gap-x-20 grid-cols-2 sm:grid-cols-3">
          {products &&
            products.map((product: Product) => (
              <Card
                key={product.sku}
                src={product.images[0]}
                name={product.name}
                price={product.price}
                sku={product.sku}
                discount={product?.discount}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
