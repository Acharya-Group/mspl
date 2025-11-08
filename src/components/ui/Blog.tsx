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

  if (allBlogs.isLoading)
    return (
      <section className="py-10 text-center text-gray-500">Loading blogs...</section>
    );

  if (allBlogs.isError)
    return (
      <section className="py-10 text-center text-red-500">
        Failed to load blogs. Please try again later.
      </section>
    );

  const blogs = Array.isArray(allBlogs.data) ? allBlogs.data : [];

  if (!blogs.length)
    return (
      <section className="py-10 text-center text-gray-400">
        No blogs available.
      </section>
    );

  return (
    <section className="lg:py-12 py-10 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap md:justify-between items-center">
          <div className="md:w-4/12 md:pe-4">
            <SubHeading content="Latest Yoga & Health Blogs" className="mb-4" />
            <p className="text-gray-500 mb-0 md:mb-4 lg:mb-6">
              Explore our latest blogs to enhance your yoga practice and improve
              overall health.
            </p>
            <Button content="Read More" className="hidden md:inline" />
          </div>

          {/* ✅ Swiper for dynamic blogs */}
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
              {blogs.map((blog) => (
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

                        {/* ✅ Dynamic route link */}
                        <Link
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

          <Link
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
