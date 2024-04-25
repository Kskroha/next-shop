import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  src: string;
  name: string;
  price: number;
  sku: number;
};

const Card = (props: Props) => {
  const { src, name, price, sku } = props;

  return (
    <Link className={styles.card} href={`/catalog/${String(sku)}`}>
      <img
        className={styles.image}
        src={src}
        alt={name}
        width={377}
        height={380}
      />
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.price}>$&nbsp;{price},00</span>
    </Link>
  );
};

export default Card;
