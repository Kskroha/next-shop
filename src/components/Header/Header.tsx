"use client";
import Link from "next/link";
import Navbar from "../NavBar/NavBar";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";
import React, { useEffect, useRef } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 sm:py-5 flex self-auto justify-between items-center sans sm:border-b border-px border-neutral sm:relative">
      <Link href={"/"} className="">
        <Image
          className="w-24 h-5 sm:w-40 sm:h-12"
          src={"/logo.svg"}
          alt="Логотип магазина"
          width={158}
          height={47}
        />
      </Link>
      <Navbar />
      <BurgerButton
        menuOpen={menuOpen}
        handleMenuButtonClick={handleMenuButtonClick}
      />
      <MobileMenu menuOpen={menuOpen} />
    </header>
  );
};

export default Header;
