import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.css";

export const Banner = () => {
  return (
    <section className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src="/logo.png" alt="Banner 1" className="banner-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logo.png" alt="Banner 2" className="banner-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logo.png" alt="Banner 3" className="banner-image" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
