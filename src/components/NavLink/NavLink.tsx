import Link from "next/link";

type Props = {
  href: string;
  hasIcon: boolean;
  text: string;
  iconPath?: string;
};

const NavLink = (props: Props) => {
  const { href, hasIcon, text, iconPath } = props;

  return (
    <nav>
      <Link href={href}>
        <span className={hasIcon ? "visually-hidden" : ""}>{text}</span>
        {hasIcon && <img src={iconPath} alt={text} />}
      </Link>
    </nav>
  );
};

export default NavLink;
