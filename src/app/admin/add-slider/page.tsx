"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSlider } from "@/hooks/slider";
import Image from "next/image";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";

const AddSliderPage: React.FC = () => {
  const { addSlider } = useSlider();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [link, setLink] = useState(""); 
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) setPreview(URL.createObjectURL(file));
    else setPreview(null);
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return toast.error("Please select an image!");
    if (!link) return toast.error("Please enter a link!");

    setLoading(true);
    addSlider.mutate(
      { image: selectedFile, link }, 
      {
        onSuccess: () => {
          toast.success("Slider added successfully!");
          setSelectedFile(null);
          setLink("");
          setPreview(null);
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add slider!");
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
          <h1 className="text-2xl font-bold">Add Slider</h1>
          <Link aria-label="all sliders" className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white" href={"/admin/all-sliders"}>All Sliders</Link>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Link Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter Link"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-gray-700 cursor-pointer 
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-green file:text-white
                hover:file:bg-primary transition"
              required
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <Image
              height={256}
              width={256}
              src={preview}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded-lg border"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer bg-green text-white py-2 px-4 rounded-lg 
              shadow-md hover:bg-primary transition transform hover:scale-[1.02] disabled:opacity-50`}
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddSliderPage;
