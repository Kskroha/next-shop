import Link from "next/link";
import styles from "./NavLink.module.css";
import cn from "classnames";
import Image from "next/image";

type Props = {
  href: string;
  hasIcon: boolean;
  text: string;
  src?: string;
};

const NavLink = (props: Props) => {
  const { href, hasIcon, text, src } = props;

  return (
    <nav>
      <Link className={cn("link", { icon: hasIcon })} href={href}>
        <span className={hasIcon ? "visually-hidden" : "linkText"}>{text}</span>
        {hasIcon && <img src={src ?? ""} alt={text} />}
      </Link>
    </nav>
  );
};

export default NavLink;
