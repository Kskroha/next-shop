import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  return (
    <nav>
      <NavLink href={"/catalog"} hasIcon={false} text={"Магазин"} />
      <NavLink href={"/about"} hasIcon={false} text={"О нас"} />
      <NavLink
        href={"/cart"}
        hasIcon={true}
        text={"Корзина товаров"}
        iconPath={"/cart.svg"}
      />
      <NavLink
        href={"/favorites"}
        hasIcon={true}
        text={"Избранное"}
        iconPath={"/favorites.svg"}
      />
      <NavLink
        href={"/profile"}
        hasIcon={true}
        text={"Личный кабинет"}
        iconPath={"/profile.svg"}
      />
    </nav>
  );
};

export default Navbar;
