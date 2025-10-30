"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define tab types
type TabType = "videos" | "gallery" | "news" | "environment";

// -----------------------------
// DATA SECTION
// -----------------------------
const videoData = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/ysz5S6PUM-U",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];

const galleryData = [
  "/images/gallery.jpg",
  "/images/gallery.jpg",
  "/images/gallery.jpg",
  "/images/gallery.jpg",
  "/images/gallery.jpg",
  "/images/gallery.jpg",
  "/images/gallery.jpg",
  "/images/gallery.jpg",
];

const newsData = [
  {
    title: "International Yoga Day 2025 celebrated across India",
    desc: "Millions participated in nationwide yoga events promoting holistic health and well-being.",
    img: "/images/gallery.jpg",
  },
  {
    title: "AYUSH Ministry launches new wellness initiative",
    desc: "A new initiative to spread awareness about mental wellness through daily yoga practices.",
    img: "/images/gallery.jpg",
  },
  {
    title: "Top 10 health benefits of regular yoga practice",
    desc: "From flexibility to stress relief — explore how yoga transforms your physical and mental health.",
    img: "/images/gallery.jpg",
  },
];

const environmentData = [
  {
    title: "Yoga and Sustainability: A mindful connection to the Earth",
    desc: "Learn how yoga aligns our mind and actions towards sustainable living.",
    img: "/images/gallery.jpg",
  },
  {
    title: "Eco-friendly yoga mats gaining popularity",
    desc: "More practitioners are switching to biodegradable yoga mats to protect the environment.",
    img: "/images/gallery.jpg",
  },
  {
    title: "Tree planting drive by yoga practitioners in Delhi",
    desc: "Yoga groups initiated a green campaign, planting over 10,000 trees across Delhi NCR.",
    img: "/images/gallery.jpg",
  },
];

// -----------------------------
// COMPONENT SECTION
// -----------------------------
const Media: React.FC = () => {
  const [tab, setTab] = useState<TabType>("videos");

  const tabs: { key: TabType; label: string }[] = [
    { key: "videos", label: "Videos" },
    { key: "gallery", label: "Gallery" },
    { key: "news", label: "News" },
    { key: "environment", label: "Environment" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {tabs.map((item) => (
          <button
            key={item.key}
            onClick={() => setTab(item.key)} // ✅ Properly typed
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 focus:outline-none ${
              tab === item.key
                ? "gradient-animate text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-indigo-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300">
        {/* Videos */}
        {tab === "videos" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <iframe
                  src={src}
                  title={`Video ${i + 1}`}
                  className="w-full h-56 rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {/* Gallery */}
        {tab === "gallery" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryData.map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow hover:shadow-md transition-transform duration-300 hover:scale-[1.03]"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-56"
                />
              </div>
            ))}
          </div>
        )}

        {/* News */}
        {tab === "news" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Environment */}
        {tab === "environment" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environmentData.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
