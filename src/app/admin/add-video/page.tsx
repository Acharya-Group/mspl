"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import { useVideo } from "@/hooks/video";
import Link from "next/link";

const Page: React.FC = () => {
  const { addVideo } = useVideo();
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) return toast.error("Video URL cannot be empty!");

    setLoading(true);
    addVideo.mutate(
      { VideoUrl: videoUrl },
      {
        onSuccess: () => {
          toast.success("Video added successfully!");
          setVideoUrl("");
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add video!");
          setLoading(false);
        },
      }
    );
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md max-w-2xl">
         <div className="flex justify-between mb-6 items-center">
          <h1 className="text-2xl font-bold">Add Video</h1>
          <Link aria-label="all video" href={"/admin/all-video"} className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white">All Video</Link>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Video URL Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Video URL
            </label>
            <input
              type="text"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-green focus:border-green
                hover:border-green transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green cursor-pointer text-white py-2 px-4 rounded-lg 
              shadow-md hover:bg-primary transition transform hover:scale-[1.02] disabled:opacity-50`}
          >
            {loading ? "Adding..." : "Submit"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
