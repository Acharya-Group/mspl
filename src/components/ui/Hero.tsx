"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
const sliders =[
  {
    link:"/",
    image:"/images/hero-slide1.jpg"
  },
  {
    link:"/",
    image:"/images/hero-slide3.jpg"
  },
  {
    link:"/",
    image:"/images/hero-slide4.jpg"
  },
]

  return (
    <div className="relative w-full max-w-[1920px] mx-auto">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="hero_slider w-full h-[160px] sm:h-[300px] min-[400px]:h-[220px] lg:min-h-[500px]"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link
              href={slide.link}
              className="block w-full h-[160px] sm:h-[300px] lg:h-[500px] min-[400px]:h-[220px]"
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1600}
                height={500}
                unoptimized
                priority={index === 0}
                className="w-full h-full object-cover bg-center"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        aria-label="left arrow"
        className="hero-prev hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary p-1 sm:p-3 rounded-full shadow text-white sm:h-10 sm:w-10 h-8 w-8 sm:flex justify-center items-center cursor-pointer hover:bg-secondary transition-all duration-300"
      >
        <FiArrowLeft />
      </button>
      <button
        aria-label="right arrow"
        className="hero-next hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary p-1 sm:p-3 rounded-full shadow text-white sm:h-10 sm:w-10 h-8 w-8 sm:flex justify-center items-center cursor-pointer hover:bg-secondary transition-all duration-300"
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Hero;
