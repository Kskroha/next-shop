import { useEffect } from "react";
import NavLink from "../NavLink/NavLink";
import Search from "../Search/Search";

type Props = {
  menuOpen: boolean;
};

const MobileMenu = (props: Props) => {
  const { menuOpen } = props;

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <nav
      className={`flex justify-center fixed top-[52px] right-0 z-10 bg-white w-full h-screen pb-10 ${
        menuOpen ? "sm:hidden" : "hidden"
      }`}
    >
      <div className="w-10/12">
        <Search />
        <div className="flex flex-col gap-12 pt-10">
          <div className="flex flex-col gap-6 after:absolute after:left-0 after:-bottom-6 after:z-20 after:w-full after:h-px after:bg-light-grey relative">
            <NavLink href={"/"} hasIcon={false} text={"Главная"} />
            <NavLink href={"/catalog"} hasIcon={false} text={"Магазин"} />
            <NavLink href={"/about"} hasIcon={false} text={"О нас"} />
          </div>
          <div className="flex flex-col gap-7">
            <NavLink
              href={"/profile"}
              hasIcon={true}
              text={"Мой аккаунт"}
              src={"/profile.svg"}
            />
            <NavLink
              href={"/favorites"}
              hasIcon={true}
              text={"Избранное"}
              src={"/favorites.svg"}
            />
            <NavLink
              href={"/"}
              hasIcon={true}
              text={"Выход"}
              src={"/logout.svg"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
