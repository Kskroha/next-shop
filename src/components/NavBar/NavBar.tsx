import NavLink from "../NavLink/NavLink";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.textLinks}>
        <NavLink href={"/catalog"} hasIcon={false} text={"Магазин"} />
        <NavLink href={"/about"} hasIcon={false} text={"О нас"} />
      </div>
      <div className={styles.iconLinks}>
        <NavLink
          href={"/cart"}
          hasIcon={true}
          text={"Корзина товаров"}
          src={"/cart.svg"}
        />
        <NavLink
          href={"/favorites"}
          hasIcon={true}
          text={"Избранное"}
          src={"/favorites.svg"}
        />
        <NavLink
          href={"/profile"}
          hasIcon={true}
          text={"Личный кабинет"}
          src={"/profile.svg"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
