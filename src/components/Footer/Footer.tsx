"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-4 sm:pt-9 lg:pb-24 sm:border-t border-px border-neutral">
      <div className="flex flex-col lg:flex-row sm:items-start lg:justify-between mb-9 sm-mb-0 gap-5 lg:gap-0">
        <ul className="flex flex-col flex-wrap sm:flex-row gap-2 sm:gap-9 lg:gap-7 lg:mb-12 pr-4">
          <li>
            <a
              href="#"
              className="uppercase text-dark-grey text-xs sm:text-base"
            >
              Контакты
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-dark-grey text-xs sm:text-base"
            >
              Условия покупки
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-dark-grey text-xs sm:text-base"
            >
              Доставка и возврат
            </a>
          </li>
        </ul>
        <div className=" md:mb-4 lg:mb-12 border-b border-black flex flex-col relative order-first lg:order-last sm:max-w-96">
          <label
            className="top-0 left-0 text-sm sm:text-base text-dark-grey absolute z-10 -translate-y-2"
            htmlFor="subscribe"
          >
            Ваш email для акций и предложений
          </label>
          <svg
            className="fill-dark-grey absolute right-0"
            width={15}
            height={8}
            viewBox="0 0 25 9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z" />
          </svg>
          <input
            className="text-sm sm:text-base w-99"
            type="email"
            name="subscribe"
            id="subscribe"
          />
        </div>
      </div>
      <div className="flex justify-between flex-col sm:flex-row">
        <p className="text-base text-black">© 2024 Shoppe</p>
        <ul className="flex flex-wrap max-w-99 gap-7 order-first sm:order-last mb-6 sm:mb-0">
          <li>
            <a href="#" target="_blank">
              <Image
                src="/linkedIn.svg"
                alt="Логотип LinkedIn"
                width={18}
                height={18}
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <Image
                src="/facebook.svg"
                alt="Логотип Facebook"
                width={10}
                height={18}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/insta.svg"
                alt="Логотип Instagram"
                width={18}
                height={18}
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <Image
                src="/twitter.svg"
                alt="Логотип Twitter"
                width={20}
                height={17}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
