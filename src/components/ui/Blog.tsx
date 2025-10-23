"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SubHeading from "../common/SubHeading";
import Button from "../common/Button";

const Blog = () => {
    const blogs = [
        {
            _id: 1,
            image: "/images/blogimg.jpg",
            title: "10 Tips for Starting Your Yoga Journey",
            shortDescription: "Discover essential tips and guidance for beginners to start practicing yoga effectively and safely."
        },
        {
            _id: 2,
            image: "/images/blogimg.jpg",
            title: "Benefits of Daily Meditation",
            shortDescription: "Learn how daily meditation can improve your mental clarity, reduce stress, and enhance overall well-being."
        },
        {
            _id: 3,
            image: "/images/blogimg.jpg",
            title: "Yoga Poses to Improve Flexibility",
            shortDescription: "A guide to simple yet effective yoga poses that help increase flexibility and prevent injuries."
        },
        {
            _id: 4,
            image: "/images/blogimg.jpg",
            title: "Mindfulness Techniques for Busy People",
            shortDescription: "Practical mindfulness exercises you can integrate into your daily routine to stay calm and focused."
        },
        {
            _id: 5,
            image: "/images/blogimg.jpg",
            title: "Yoga for Stress Relief",
            shortDescription: "Explore yoga routines specifically designed to relieve stress and bring balance to your mind and body."
        },
        {
            _id: 6,
            image: "/images/blogimg.jpg",
            title: "Top 5 Yoga Accessories You Need",
            shortDescription: "A list of essential yoga accessories that make your practice more comfortable and effective."
        },
        {
            _id: 7,
            image: "/images/blogimg.jpg",
            title: "Yoga for Stress Relief",
            shortDescription: "Explore yoga routines specifically designed to relieve stress and bring balance to your mind and body."
        },
        {
            _id: 8,
            image: "/images/blogimg.jpg",
            title: "Top 5 Yoga Accessories You Need",
            shortDescription: "A list of essential yoga accessories that make your practice more comfortable and effective."
        }
    ];

    return (
        <section className="lg:py-12 py-10 overflow-hidden">
            <div className="container">
                <div className="flex flex-wrap md:justify-between items-center">
                    <div className="md:w-4/12 md:pe-4">
                        <SubHeading content="Latest Yoga & Health Blogs" className="mb-4" />
                        <p className="text-gray-500 mb-0 md:mb-4 lg:mb-6">
                            Explore our latest blogs to enhance your yoga practice and improve overall health.
                            From effective yoga routines, mindfulness techniques, and meditation tips to
                            nutrition advice and holistic wellness insights, our articles help you lead a balanced
                            and healthier lifestyle.
                        </p>
                        <Button content="Read More" className="hidden md:inline" />
                    </div>
                    <div className="relative mt-6 w-full md:w-8/12">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={20}
                            centeredSlides={false}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            speed={1000}
                            loop={true}
                            pagination={{ el: ".projects-pagination", clickable: true }}
                            navigation={{ nextEl: ".project-next", prevEl: ".project-prev" }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                540: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="overflow-visible"
                        >
                            {blogs.map((blog) => (
                                <SwiperSlide key={blog._id}>
                                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-green-600 animate-borderSpin">
                                        <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                                            {/* Full-width image */}
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
                                                <Link className="font-semibold text-primary hover:underline hover:!text-green" href={`/blog/${blog._id}`}>
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            aria-label="left arrow"
                            className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-green p-1 sm:p-3 rounded-full shadow text-white md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6 flex justify-center items-center cursor-pointer hover:bg-primary transition-all duration-300"
                        >
                            <FiArrowLeft />
                        </button>
                        <button
                            aria-label="right arrow"
                            className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green p-1 sm:p-3 rounded-full shadow text-white md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6 flex justify-center items-center cursor-pointer hover:bg-primary transition-all duration-300"
                        >
                            <FiArrowRight />
                        </button>
                    </div>
                    <Link className="flex justify-center pt-4 w-full md:hidden" href={"/blogs"}><Button content="Read More" /></Link>
                </div>


            </div>
        </section>
    )
}

export default Blog