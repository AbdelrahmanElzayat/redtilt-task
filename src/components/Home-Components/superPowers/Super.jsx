import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules"; // استيراد الـ Autoplay
import part1 from "../../../assets/images/js.png";
import part2 from "../../../assets/images/leftarr.png";
import part3 from "../../../assets/images/mongo.png";
import part4 from "../../../assets/images/remix.png";
import part5 from "../../../assets/images/prisma.png";
import part6 from "../../../assets/images/php.png";
const Super = () => {
  const patners = [
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    part3,
    part4,
    part6,
  ];
  return (
    <section className="partners container md:mt-10">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-center py-20">
        Our Superpowers
      </h3>
      <Swiper
        dir="rtl"
        spaceBetween={30}
        slidesPerView={7}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        loop={true}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          290: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {patners?.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`partner-logo-${index}`}
              style={{ width: "100%", maxHeight: "60px", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Super;
