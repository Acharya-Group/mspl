"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useSlider,Slider } from "@/hooks/slider";

const Hero: React.FC = () => {
  const { allSliders } = useSlider();
const sliders: Slider[] = allSliders.data || [];

  // ✅ Unified state handler
  if (allSliders.isLoading || allSliders.isError || !sliders.length) {
    const msg = allSliders.isLoading
      ? "Loading sliders..."
      : allSliders.isError
      ? "Failed to load sliders. Please try again."
      : "No sliders found";

    const color = allSliders.isError
      ? "text-red-500"
      : allSliders.isLoading
      ? "text-gray-500 animate-pulse"
      : "text-gray-400";

    return (
      <div className="w-full h-[200px] lg:min-h-[400px] flex items-center justify-center">
        <p className={`${color} text-lg font-medium`}>{msg}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[1920px] mx-auto">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        loop
        speed={800}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        className="hero_slider w-full h-[160px] sm:h-[300px] lg:min-h-[400px]"
      >
        {sliders.map((s, i) => (
          <SwiperSlide key={s._id || i}>
            <Link href={s.link || "/"} className="block w-full h-full">
              <Image
                src={s.image}
                alt={`Slide ${i + 1}`}
                width={1600}
                height={500}
                unoptimized
                priority={i === 0}
                className="w-full h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      {["prev", "next"].map((dir) => (
        <button
          key={dir}
          aria-label={`${dir} slide`}
          className={`hero-${dir} hidden sm:flex absolute ${
            dir === "prev" ? "left-4" : "right-4"
          } top-1/2 -translate-y-1/2 z-10 bg-primary p-2 sm:p-3 rounded-full shadow text-white sm:h-10 sm:w-10 h-8 w-8 justify-center items-center cursor-pointer hover:bg-secondary transition-all duration-300`}
        >
          {dir === "prev" ? <FiArrowLeft /> : <FiArrowRight />}
        </button>
      ))}
    </div>
  );
};

export default Hero;
