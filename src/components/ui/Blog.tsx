"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SubHeading from "../common/SubHeading";
import Button from "../common/Button";
import { useBlogs } from "@/hooks/blogs";

const Blog = () => {
  const { allBlogs } = useBlogs();
  const isLoading = allBlogs.isLoading;
  const isError = allBlogs.isError;
  const blogs = Array.isArray(allBlogs.data) ? allBlogs.data : [];

  return (
    <section className="lg:py-12 py-10 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap md:justify-between items-center">
          {/* Left Text Section */}
          <div data-aos="fade-right" className="md:w-4/12 md:pe-4">
            <SubHeading content="Latest Yoga & Health Blogs" className="mb-4" />
            <p className="text-gray-500 mb-0 md:mb-4 lg:mb-6">
              Explore our latest blogs to enhance your yoga practice and improve
              overall health.
            </p>
            <Button content="Read More" className="hidden md:inline" />
          </div>

          {/* ✅ Swiper Section */}
          <div className="relative mt-6 w-full md:w-8/12">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
              breakpoints={{
                0: { slidesPerView: 1 },
                540: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="overflow-visible"
            >
              {/* ✅ Show Skeleton Cards While Loading */}
              {isLoading &&
                Array.from({ length: 3 }).map((_, i) => (
                  <SwiperSlide key={`skeleton-${i}`}>
                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-green-600 animate-pulse">
                      <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                        <div className="w-full h-40 bg-gray-200" />
                        <div className="p-4 flex flex-col items-center">
                          <div className="h-5 bg-gray-300 w-3/4 rounded mb-3"></div>
                          <div className="h-3 bg-gray-200 w-full rounded mb-2"></div>
                          <div className="h-3 bg-gray-200 w-2/3 rounded mb-3"></div>
                          <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              {/* ✅ Show Error Message */}
              {isError && (
                <SwiperSlide>
                  <div className="bg-red-100 text-red-500 font-medium rounded-xl p-6 text-center">
                    Failed to load blogs. Please try again later.
                  </div>
                </SwiperSlide>
              )}

              {/* ✅ Show Blogs When Loaded */}
              {!isLoading &&
                !isError &&
                blogs.map((blog) => (
                  <SwiperSlide key={blog._id}>
                    <div className="p-[2px] rounded-xl bg-linear-to-r from-green-500 via-blue-500 to-green-600 animate-borderSpin">
                      <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={600}
                          height={300}
                          unoptimized
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col items-center">
                          <h3 className="text-lg font-semibold text-center mb-2 line-clamp-1">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 text-sm text-center mb-2 line-clamp-2">
                            {blog.shortDescription}
                          </p>
                          <Link aria-label="blog detais page"
                            className="font-semibold text-primary hover:underline hover:text-green-600"
                            href={`/blog/${blog._id}`}
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper Buttons */}
            <button
              aria-label="left arrow"
              className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-green p-2 rounded-full text-white hover:bg-primary transition"
            >
              <FiArrowLeft />
            </button>
            <button
              aria-label="right arrow"
              className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green p-2 rounded-full text-white hover:bg-primary transition"
            >
              <FiArrowRight />
            </button>
          </div>

          {/* Read More (Mobile) */}
          <Link aria-label="all blogs"
            className="flex justify-center pt-4 w-full md:hidden"
            href={"/blogs"}
          >
            <Button content="Read More" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
