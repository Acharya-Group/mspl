"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SubHeading from "../common/SubHeading";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  useTestimonials,
  Testimonial as TestimonialType,
} from "@/hooks/testimonial";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { allTestimonials } = useTestimonials();

  const testimonials: TestimonialType[] = Array.isArray(allTestimonials.data)
    ? allTestimonials.data
    : [];

  const isLoading = allTestimonials.isLoading;
  const isError = allTestimonials.isError;

  return (
    <section className="lg:py-12 py-10 relative">
      <div className="container mx-auto px-4">
        <SubHeading
          content="What Our Candidates Say"
          className="text-center mb-4"
        />

        <div className="relative">
          {/* ✅ Swiper (works even during loading for smoother layout) */}
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            centeredSlides
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              nextEl: ".hero-next",
              prevEl: ".hero-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4.5 },
            }}
            modules={[Navigation]}
            className="testimonial-swiper pb-10"
          >
            {/* ✅ Loading skeletons */}
            {isLoading &&
              Array.from({ length: 5 }).map((_, i) => (
                <SwiperSlide key={`skeleton-${i}`}>
                  <div className="p-6 my-4 rounded-2xl bg-primary h-60 flex flex-col justify-between items-center animate-pulse">
                    <div className="w-[80px] h-[80px] rounded-full bg-white/30 mb-3"></div>
                    <div className="h-4 bg-white/40 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-white/30 rounded w-3/4"></div>
                    <div className="h-3 bg-white/20 rounded w-2/3 mt-2"></div>
                  </div>
                </SwiperSlide>
              ))}

            {/* ✅ Error message */}
            {isError && (
              <SwiperSlide>
                <div className="p-6 my-4 rounded-2xl bg-red-100 flex justify-center items-center text-red-500 font-medium">
                  Failed to load testimonials.
                </div>
              </SwiperSlide>
            )}

            {/* ✅ Actual testimonials */}
            {!isLoading &&
              !isError &&
              testimonials.map((t, i) => (
                <SwiperSlide key={t._id || i}>
                  <div
                    className={`p-6 my-4 rounded-2xl bg-primary h-60 flex flex-col justify-between items-center transform transition-transform duration-500
                  ${
                    activeIndex === i
                      ? "scale-105 mx-4 bg-gradient-to-b to-primary from-green"
                      : "scale-90 opacity-80 bg-gradient-to-b to-green from-primary"
                  }`}
                  >
                    <div className="relative w-[80px] h-[80px] mb-3 overflow-hidden rounded-full">
                      <Image
                        className="object-cover"
                        fill
                        src={t.Image || "/images/default-user.jpg"}
                        alt={t.name || "Client"}
                      />
                    </div>

                    <h3
                      className={`font-semibold text-base text-center ${
                        activeIndex === i ? "text-white" : "text-gray-200"
                      }`}
                    >
                      — {t.name} —
                    </h3>

                    <p
                      className={`text-sm text-center line-clamp-4 ${
                        activeIndex === i ? "text-white" : "text-gray-200"
                      }`}
                    >
                      “{t.description}”
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            aria-label="left arrow"
            className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-green p-1 sm:p-3 rounded-full shadow text-white md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6 flex justify-center items-center cursor-pointer hover:bg-white hover:text-green transition-all duration-300"
          >
            <FiArrowLeft />
          </button>
          <button
            aria-label="right arrow"
            className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green p-1 sm:p-3 rounded-full shadow text-white md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6 flex justify-center items-center cursor-pointer hover:bg-white hover:text-green transition-all duration-300"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
