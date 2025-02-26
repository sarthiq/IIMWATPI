import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ❌ Removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "  Are you a born actor, writer, or scientist? Know your hidden talent!";
 
  useEffect(() => {
    let timer;
    if (activeIndex === 2) { 
      setTypedText(""); 
      let i = 0;
      timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText((prev) => prev + fullText[i]);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);
    }
    return () => clearInterval(timer); 
  }, [activeIndex]);

  return (
    <section className="banner">
      <Swiper
        modules={[Pagination, Autoplay]} // ❌ Removed Navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="banner-swiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide className="swiper-slide slide1">
          <div className="slide-content">
            <h2>Empowering Students to become their best version!</h2>
            <p>
              We give wings to students’ dreams and aspirations based on their
              intellect, personality, and creativity. We handhold and engage
              with students in turning their talent and curiosity into skills.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide2">
          <div className="slide-content">
            <h2>Discover Your Hidden Talents</h2>
            <p>
              "We have built this platform for students to discover their hidden
              talents and motivations so that they can understand themselves
              better and make more informed career decisions."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide3">
          <div className="slide-content">
            <h2 className="typing-text">{typedText}</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
