"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  name: string;
  price: number;
  image: string;
  sku: number;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div className="h-156">
        <ul className="h-156 w-full">
          <Swiper
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Pagination]}
          >
            {data.map(({ name, image, price, sku }) => (
              <SwiperSlide key={sku}>
                <div
                  className="h-full w-full absolute left-0 top-0 rounded-2xl"
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`,
                  }}
                />
                <div className="relative z-10 h-162 flex items-center pl-10">
                  <div>
                    <p className="text-4xl font-normal text-white mb-4">
                      {name}
                    </p>
                    <p className="text-3xl font-light text-white mb-12">
                      $&nbsp;{price},00
                    </p>
                    <button className="text-s text-white font-bold bg-transparent border-solid border-2 border-white py-3 px-5 min-w-44 rounded sm:rounded-md hover:bg-white hover:text-black">
                      Смотреть
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
