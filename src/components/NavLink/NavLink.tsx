import Link from "next/link";
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
        {hasIcon && <Image src={src ?? ""} alt={text} width={21} height={21} />}
      </Link>
    </nav>
  );
};

export default NavLink;

// .link {
//   padding: 7px 10px;
// }

// .linkText {
//   font-size: 16px;
//   line-height: 27px;
// }

// .icon {
//   padding: 10px 10px;
// }

// .icon img {
//   display: block;
// }
