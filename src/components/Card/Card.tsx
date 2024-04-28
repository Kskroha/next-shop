import Link from "next/link";
import Image from "next/image";

type Props = {
  src: string;
  name: string;
  price: number;
  sku: number;
};

const Card = (props: Props) => {
  const { src, name, price, sku } = props;

  return (
    <Link className="flex flex-col" href={`/catalog/${String(sku)}`}>
      <Image
        className="mb-4 rounded-lg"
        src={src}
        alt={name}
        width={377}
        height={380}
      />
      <h3 className="m-0 mb-16px text-xl font-normal black">{name}</h3>
      <span className="text-xl text-gold">$&nbsp;{price},00</span>
    </Link>
  );
};

export default Card;
