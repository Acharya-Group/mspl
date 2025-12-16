"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function YcbSliderOrWeb() {
  return (
    <section className="py-12 bg-[url(/images/ycb-bg.png)] bg-cover bg-center">
      <div className="container mx-auto px-4">
        
        <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* LEFT GRADIENT BAR */}
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-400 to-blue-700" />

          {/* OFFICIAL BADGE */}
          <div className="absolute hidden sm:inline right-4 top-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Official Website
          </div>

          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            
            {/* LOGO + TEXT */}
            <div className="flex items-center gap-4 md:w-1/2">
              <div className="bg-blue-50 p-3 rounded-xl">
                <Image
                  src="/images/ycb-logo.png"
                  alt="Yoga Certification Board Logo"
                  width={70}
                  height={70}
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Yoga Certification Board
                </h3>
                <p className="text-sm text-gray-600">
                  Ministry of AYUSH, Government of India
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="md:w-1/2 text-center md:text-right">
              <p className="text-sm text-gray-600 mb-3">
                Visit the official YCB website for certification details
              </p>

              <Link
                aria-label="Yoga Certification Board Website"
                href="https://yogacertificationboard.nic.in"
                target="_blank"
                className=""
              >
                https://yogacertificationboard.nic.in
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
