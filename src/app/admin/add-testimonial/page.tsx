"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useTestimonials } from "@/hooks/testimonial";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";


const Page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createTestimonial } = useTestimonials();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !imageFile) {
      toast.error("All fields including image are required!");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("Image", imageFile);

    createTestimonial.mutate(formData, {
      onSuccess: () => {
        toast.success("Testimonial added successfully!");
        setName("");
        setDescription("");
        setImageFile(null);
        setPreview(null);
        setIsSubmitting(false);
      },
      onError: (err) => {
        toast.error(err?.message || "Failed to add testimonial!");
        setIsSubmitting(false);
      },
    });
  };

  return (
    <AdminLayout>
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-md">
 <div className="flex justify-between mb-6 items-center">
          <h1 className="text-2xl font-bold">Add Testimonial</h1>
          <Link href={"/admin/all-testimonial"} className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white">All Testimonial</Link>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green hover:border-green transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green hover:border-green transition"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>

            {/* Hidden file input */}
            <input
              id="testimonialFileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              required
            />

            {/* Custom Upload Button */}
            <label
              htmlFor="testimonialFileInput"
              className="inline-block px-4 py-2 bg-green text-white rounded-lg cursor-pointer shadow-md hover:bg-primary transition"
            >
              {imageFile ? "Change Image" : "Choose Image"}
            </label>

            {/* Image Preview */}
            {preview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-1">Preview:</p>
                <Image
                  src={preview}
                  alt="Selected Preview"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover rounded-lg border shadow-sm"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-primary" : "bg-green"
            } text-white py-3 px-4 cursor-pointer rounded-lg hover:bg-primary shadow-md transition transform font-medium`}
          >
            {isSubmitting ? "Adding..." : "Add Testimonial"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
