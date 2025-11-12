"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import SubHeading from "../common/SubHeading";

const cards = [
  {
    title: "Yoga Protocol Instructor (YPI)",
    desc: "Teach basic Yoga protocols for prevention of diseases and promotion of health. Conduct community sessions and events.",
    gif: "/gif/yoga1.gif",
  },
  {
    title: "Yoga Wellness Instructor (YWI)",
    desc: "Instruct Yoga programs focusing on wellness and healthy living in schools, studios, and organizations.",
    gif: "/gif/yoga2.gif",
  },
  {
    title: "Yoga Teacher & Evaluator (YT&E)",
    desc: "Train future Yoga professionals, evaluate certifications, and guide learning at educational institutions.",
    gif: "/gif/yoga3.gif",
  },
  {
    title: "Yoga Master (YM)",
    desc: "Act as a master educator and guide for Yoga programs. Lead, evaluate, and mentor Yoga professionals.",
    gif: "/gif/yoga4.gif",
  },
  {
    title: "Assistant Yoga Therapist (AYTh)",
    desc: "Assist certified therapists and physicians to deliver Yoga-based treatments for specific disorders.",
    gif: "/gif/yoga5.gif",
  },
  {
    title: "Yoga Therapist (YTh)",
    desc: "Guide individuals to improve physical and mental well-being through personalized yoga sessions, community programs, and wellness initiatives.",
    gif: "/gif/yoga6.gif",
  },
];

const Certification = () => {
  return (
    <section className="bg-blue-50">
      <div className="container py-10 lg:py-12">
        <SubHeading content="Yoga Professional Certification" className="text-center mb-4" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="commonShadow max-w-[450px] sm:max-w-[unset] mx-auto bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={card.gif}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-dark mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{card.desc}</p>

              <Link aria-label="apply for certification" href="/">
                <Button content="Apply for Certification" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
