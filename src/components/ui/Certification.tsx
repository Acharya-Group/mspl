"use client";
import React from "react";
import { FaHeartbeat, FaHandsHelping, FaChalkboardTeacher, FaYinYang, FaSpa } from "react-icons/fa";
import Button from "../common/Button";
import Link from "next/link";
import SubHeading from "../common/SubHeading";
import { GiLotusFlower } from "react-icons/gi";

const cards = [

,
  {
    title: "Yoga Protocol Instructor (YPI)",
    desc: "Teach basic Yoga protocols for prevention of diseases and promotion of health. Conduct community sessions and events.",
    icon: <FaHeartbeat className="text-red-500 text-5xl mb-4" />,
  },
  {
    title: "Yoga Wellness Instructor (YWI)",
    desc: "Instruct Yoga programs focusing on wellness and healthy living in schools, studios, and organizations.",
    icon: <FaHandsHelping className="text-yellow-500 text-5xl mb-4" />,
  },
  {
    title: "Yoga Teacher & Evaluator (YT&E)",
    desc: "Train future Yoga professionals, evaluate certifications, and guide learning at educational institutions.",
    icon: <FaChalkboardTeacher className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Yoga Master (YM)",
    desc: "Act as a master educator and guide for Yoga programs. Lead, evaluate, and mentor Yoga professionals.",
    icon: <FaYinYang className="text-purple-500 text-5xl mb-4" />,
  },
  {
    title: "Assistant Yoga Therapist (AYTh)",
    desc: "Assist certified therapists and physicians to deliver Yoga-based treatments for specific disorders.",
    icon: <FaSpa className="text-pink-500 text-5xl mb-4" />,
  },
  {
  title: "Yoga Therapist (YTh)",
  desc: "Guide individuals to improve physical and mental well-being through personalized yoga sessions, community programs, and wellness initiatives.",
  icon: <GiLotusFlower className="text-green-500 text-5xl mb-4" />,
}
];

const Certification = () => {
  return (
    <section className="bg-blue-50">
        <div className="container py-10 lg:py-12">
           <SubHeading content="Yoga Certification Programs" className="text-center mb-4" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards?.map((card, index) => {
  if (!card) return null; 
  return (
    <div
      key={index}
      className="commonShadow max-w-[450px] sm:max-w-[unset] mx-auto bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex justify-center">{card.icon}</div>
      <h3 className="text-xl font-semibold text-dark mb-3">{card.title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{card.desc}</p>

      {/* Gradient button */}
      <Link href="/">
        <Button content="Apply for Certification" />
      </Link>
    </div>
  );
})}

          </div>
        </div>
    </section>
  );
};

export default Certification;
