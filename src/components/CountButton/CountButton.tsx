import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

type Props = {
  href: string;
  text: string;
  src: string;
  length: number;
};

const CountButton = (props: Props) => {
  const { href, text, src, length } = props;

  return (
    <Link className="relative" href={href}>
      <div
        className={`flex justify-center items-center absolute z-10 -top-2 ${
          length > 99 ? "-right-4" : "-right-2"
        } rounded-full min-w-4 min-h-4 border border-black text-[10px] text-bold bg-white px-1 ${
          length === 0 && "hidden"
        }`}
      >
        {length > 99 ? "99+" : length}
      </div>
      <Image src={src} alt={text} width={21} height={21} />
    </Link>
  );
};

export default CountButton;
