import Link from "next/link";
import Navbar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href={"/"}>
        <Image
          className={styles.logo}
          src={"/logo.svg"}
          alt="Логотип магазина"
          width={158}
          height={47}
        />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
