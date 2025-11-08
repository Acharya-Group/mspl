"use client";

import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { useFaq } from "@/hooks/faq";

const Page: React.FC = () => {
  const { addFaq } = useFaq();
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!heading.trim()) return toast.error("Please enter a heading!");
    if (!description.trim()) return toast.error("Please enter a description!");

    setLoading(true);
    addFaq.mutate(
      { heading, description },
      {
        onSuccess: () => {
          toast.success("FAQ added successfully!");
          setHeading("");
          setDescription("");
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add FAQ!");
          setLoading(false);
        },
      }
    );
  };

  return (
    <AdminLayout>
      <div className="container mx-auto bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-6 items-center">
          <h1 className="text-2xl font-bold">Add FAQ</h1>
          <Link
            href="/admin/all-faq"
            className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white"
          >
            All FAQs
          </Link>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Heading Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heading
            </label>
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Enter FAQ heading"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter FAQ description"
              rows={5}
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition resize-none"
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
