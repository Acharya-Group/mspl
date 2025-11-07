"use client";

import React, { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { useNotice } from "@/hooks/notice";

const Page: React.FC = () => {
  const { addNotice } = useNotice();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return toast.error("Please enter a title!");
    if (!link.trim()) return toast.error("Please enter a link!");

    setLoading(true);
    addNotice.mutate(
      { title, link },
      {
        onSuccess: () => {
          toast.success("Notice added successfully!");
          setTitle("");
          setLink("");
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add notice!");
          setLoading(false);
        },
      }
    );
  };

  return (
    <AdminLayout>
      <Toaster />
      <div className="container mx-auto bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-6 items-center">
          <h1 className="text-2xl font-bold">Add Notice</h1>
          <Link
            href="/admin/all-notice"
            className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white"
          >
            All Notices
          </Link>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notice title"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            />
          </div>

          {/* Link Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter notice link"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer bg-green text-white py-2 px-4 rounded-lg 
              shadow-md hover:bg-primary transition transform hover:scale-[1.02] disabled:opacity-50`}
          >
            {loading ? "Saving..." : "Submit"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
