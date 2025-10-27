"use client";

import React from "react";
import Para from "../common/Para";
import SubHeading from "../common/SubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const AboutSection = () => {
    return (
        <div className="container mx-auto px-4 py-10 lg:py-16">
            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Section */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Main About Section */}
                    <SubHeading content="About MSPL-PERSONNEL CERTIFICATION BODY" />
                    <Para
                        content="MSPL Personnel Registration and Certification Body (PRCB) is a professionally managed organization dedicated to promoting excellence, integrity, and authenticity in the field of Yoga certification. Functioning under the guidelines of the Yoga Certification Board (YCB), Ministry of AYUSH, Government of India, MSPL PRCB serves as a recognized body responsible for conducting examinations, assessments, and certifications for Yoga professionals across various levels.

Our primary objective is to ensure that every certified Yoga teacher, therapist, and evaluator meets the highest standards of competence, ethics, and knowledge as prescribed by YCB. We are committed to maintaining transparency and fairness in all processes— from registration and examination to certification and evaluation. Through the use of modern technology, standardized procedures, and strict adherence to regulatory frameworks, MSPL PRCB ensures a seamless, reliable, and credible certification experience.

MSPL PRCB is not just an examining body—it is a platform for empowering individuals to pursue Yoga as a respected and professionally recognized discipline. By integrating traditional Yoga wisdom with contemporary educational methods, we strive to preserve the authenticity of Yoga while meeting modern global expectations.

Driven by our Mission and Vision, MSPL PRCB continuously works to enhance the quality of Yoga education, support professional development, and contribute to the national movement of “Healthy India, Fit India.” Our efforts are dedicated to building a community of qualified, ethical, and skilled Yoga professionals who promote physical, mental, and spiritual well-being across the world."
                    />

                    {/* ✅ Objectives Section */}
                    <SubHeading content="Objectives of MSPL" />
                    <Para
                        content="Maintaining and promoting the different Indian Yoga Traditions. Certification of Yoga Professionals. To provide extensive research facilities for carrying out fundamental and clinical research in the discipline of Yoga and its applications keeping in view the socio-economic needs of all sections of the society. To conduct workshops and seminars across India. To conduct experiments and research on emerging trends in Yoga. To develop techniques and approaches based on the Ancient Yoga Texts and Granthas of Yoga to meet the challenges of the modern era. To prescribe different CERTIFICATIONS in YOGA for imparting Yoga education, training, therapy, and research. Impartial and independent in judgment. To maintain quality and standards of Yoga."
                    />

                    {/* ✅ About Yoga Section */}
                    <SubHeading content="About Yoga" />
                    <Para
                        content='“Yoga is a light, which once lit, will never dim. The better your practice, the brighter the flame.” The term "Yoga" in the Western world often denotes a modern form of Hatha Yoga and Yoga as exercise, consisting largely of the postures called asanas. Yoga — the mental, physical, and spiritual practice to positively transform one’s body and mind — originated in India about 5000 years ago and has received its deserved accreditation by the United Nations by way of International Yoga Day, celebrated worldwide every year on June 21. Hon’ble Prime Minister of India Shri. Narendra Modi has taken leadership in spreading India’s cultural and spiritual heritage worldwide through credible systems that provide India with leadership in ensuring quality in teaching and training in Yoga.'
                    />
                </div>

                {/* Right Section (Sticky Swiper) */}
                <div className="lg:col-span-4">
                    <div className="sticky top-20 bg-gray-50 rounded-lg overflow-hidden shadow-md">
                        <Swiper
                            direction="vertical"
                            spaceBetween={20}
                            loop={true}
                            centeredSlides={true}
                            speed={2000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper h-[250px] sm:h-[350px] lg:h-[500px]"
                        >
                            <SwiperSlide>
                                <Image
                                    height={500}
                                    width={400}
                                    className="w-full h-full object-cover"
                                    src="/images/yoga1.jpg"
                                    alt="Yoga Image 1"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image
                                    height={500}
                                    width={400}
                                    className="w-full h-full object-cover"
                                    src="/images/yoga2.jpg"
                                    alt="Yoga Image 2"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image
                                    height={500}
                                    width={400}
                                    className="w-full h-full object-cover"
                                    src="/images/yoga1.jpg"
                                    alt="Yoga Image 3"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image
                                    height={500}
                                    width={400}
                                    className="w-full h-full object-cover"
                                    src="/images/yoga2.jpg"
                                    alt="Yoga Image 4"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
