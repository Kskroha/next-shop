import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  hasIcon: boolean;
  onlyIcon?: boolean;
  text: string;
  src?: string;
};

const NavLink = (props: Props) => {
  const { href, hasIcon, onlyIcon, text, src } = props;

  return (
    <nav>
      <Link className="flex gap-3" href={href}>
        {hasIcon && <Image src={src ?? ""} alt={text} width={21} height={21} />}
        <span className={hasIcon && onlyIcon ? "visually-hidden" : "text-xl"}>
          {text}
        </span>
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
