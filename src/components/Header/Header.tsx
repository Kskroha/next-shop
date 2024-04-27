import Link from "next/link";
import Navbar from "../NavBar/NavBar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-5 flex self-auto justify-between items-center sans">
      <Link href={"/"} className="">
        <Image
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
