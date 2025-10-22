"use client"
import React from "react";
import HeaderTop from "../ui/HeaderTop";
import Nav from "../ui/Nav";
import Image from "next/image";

const Header = () => {
  const marqueeItems = 20;
  const text = "MSPL, PrCB doesn't accept any cash payments. We accept only online payments.";

  // Create double content to make scrolling seamless
  const marqueeContent = [...Array(marqueeItems)].map((_, i) => (
    <span key={i} className="text-xs ps-2">
      {text}
    </span>
  ));

  return (
    <header>
      {/* Top Header */}
      <HeaderTop />

      {/* Logo + Title Section */}
      <div className="bg-light py-4 hidden lg:block">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <Image
            className="max-w-[100px]"
            height={170}
            width={168}
            src="/images/mspl-logo.png"
            alt="mspl logo"
          />
          <div className="text-center">
            <h1 className="text-xl lg:text-4xl font-nunito font-semibold text-blue">
              MSPL - PERSONNEL CERTIFICATION BODY
            </h1>
            <h3 className="text-sm lg:text-base font-semibold">
              Approved By: Yoga Certification Board, (Ministry Of Ayush, Govt Of India)
            </h3>
          </div>
          <Image
            className="max-w-[100px]"
            height={170}
            width={132}
            src="/images/ycb-logo.png"
            alt="ycb logo"
          />
        </div>
      </div>

      {/* First Marquee */}
      <div className="w-full bg-gray-600 text-white border-t-1 border-b-1 border-black py-0 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>

      <Nav />

      {/* TailwindCSS Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 120s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
