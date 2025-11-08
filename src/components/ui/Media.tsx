"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useGallery } from "@/hooks/gallery";
import { useVideo } from "@/hooks/video";

const Media: React.FC = () => {
  const { allGalleries } = useGallery();
  const { allVideos } = useVideo();

  const [tabs, setTabs] = useState<{ id: string; title: string }[]>([]);
  const [activeTab, setActiveTab] = useState<string>("videos");

  // ✅ Fetch tabs dynamically (Videos + Gallery categories)
  useEffect(() => {
    if (allGalleries.isSuccess && allGalleries.data) {
      const galleryTabs = allGalleries.data.map((g) => ({
        id: g._id,
        title: g.category,
      }));
      setTabs([{ id: "videos", title: "Videos" }, ...galleryTabs]);
    }
  }, [allGalleries.isSuccess, allGalleries.data]);

  // ✅ Convert YouTube URLs to embed format
  const toEmbedUrl = (url: string) => {
    if (!url) return "";
    try {
      if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      const v = new URL(url).searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      return url;
    } catch {
      return url;
    }
  };

  // ✅ Render content based on active tab
  const renderContent = () => {
    if (activeTab === "videos") {
      if (allVideos.isLoading) return <p>Loading videos...</p>;
      if (allVideos.isError) return <p>Error loading videos!</p>;
      if (!allVideos.data?.length) return <p>No videos found.</p>;

      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVideos.data.map((video) => (
            <div
              key={video._id}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <iframe
                src={toEmbedUrl(video.VideoUrl)}
                title={video._id}
                className="w-full h-56 rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      );
    }

    // ✅ Find selected gallery and show its images
    const activeGallery = allGalleries.data?.find((g) => g._id === activeTab);
    if (!activeGallery) return <p>No images found for this category.</p>;

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeGallery.images.map((img) => (
          <div
            key={img._id}
            className="rounded-lg overflow-hidden shadow hover:shadow-md transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src={img.url}
              alt={activeGallery.category}
              width={400}
              height={300}
              className="object-cover w-full h-56"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* ✅ Tabs Section */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg font-medium uppercase transition-all duration-300 focus:outline-none
              ${
                activeTab === tab.id
                  ? "gradient-animate text-white shadow-md"
                  : "bg-gray-100 text-gray-700 border hover:bg-indigo-50"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ✅ Content Section */}
      <div className="bg-white p-6 rounded-xl shadow-md min-h-[300px]">
        {allGalleries.isLoading ? (
          <p>Loading...</p>
        ) : allGalleries.isError ? (
          <p className="text-red-500">Error loading galleries!</p>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
};

export default Media;
