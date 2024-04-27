import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  return (
    <nav className="after:absolute after:top-1/4 after:left-52 after:w-px after:h-4 after:bg-dark-grey flex items-center gap-24 relative">
      <div className="flex gap-12">
        <NavLink href={"/catalog"} hasIcon={false} text={"Магазин"} />
        <NavLink href={"/about"} hasIcon={false} text={"О нас"} />
      </div>
      <div className="flex items-center gap-7">
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
