"use client";
import React from "react";
import HeaderTop from "../ui/HeaderTop";
import Nav from "../ui/Nav";
import Image from "next/image";

const Header = () => {
  const marqueeItems = 20;
  const text =
    "MSPL, PrCB doesn't accept any cash payments. We accept only online payments.";

  const marqueeContent = [...Array(marqueeItems)].map((_, i) => (
    <span key={i} className="text-xs ps-2">
      {text}
    </span>
  ));

  return (
    <>
      {/* Top Header */}
      <HeaderTop />

      {/* Logo Section */}
      <div className="py-4 hidden lg:flex justify-between items-center container mx-auto">
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
          <h3 className="text-sm lg:text-base font-semibold text-green">
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
      <div className="sticky top-0 z-[50]">
      {/* Marquee */}
      <div className="w-full bg-gray-600 text-white py-1 relative z-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>

      {/* Sticky Nav */}
        <Nav />
      </div>

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
    </>
  );
};

export default Header;
