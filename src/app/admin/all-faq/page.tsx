"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import { useFaq, Faq } from "@/hooks/faq";

const Page: React.FC = () => {
  const { allFaqs, deleteFaq, updateFaq } = useFaq();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);
  const [editHeading, setEditHeading] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Loading and error state
  if (allFaqs.isLoading)
    return (
      <AdminLayout>
        <p className="text-center mt-4">Loading FAQs...</p>
      </AdminLayout>
    );

  if (allFaqs.isError)
    return (
      <AdminLayout>
        <p className="text-center mt-4 text-red-500">
          Error: {allFaqs.error?.message}
        </p>
      </AdminLayout>
    );

  const Faqs = allFaqs.data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Faqs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Faqs.length / itemsPerPage);

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    deleteFaq.mutate(id, {
      onSuccess: () => toast.success("FAQ deleted successfully!"),
      onError: () => toast.error("Failed to delete FAQ!"),
    });
  };

  const handleEdit = (faq: Faq) => {
    setEditingFaq(faq);
    setEditHeading(faq.heading);
    setEditDescription(faq.description);
  };

  const handleUpdate = () => {
    if (!editingFaq) return toast.error("No FAQ selected!");
    if (!editHeading.trim()) return toast.error("Heading cannot be empty!");
    if (!editDescription.trim())
      return toast.error("Description cannot be empty!");

    updateFaq.mutate(
      { id: editingFaq._id, heading: editHeading, description: editDescription },
      {
        onSuccess: () => {
          toast.success("FAQ updated successfully!");
          setEditingFaq(null);
          setEditHeading("");
          setEditDescription("");
        },
        onError: () => toast.error("Failed to update FAQ!"),
      }
    );
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-6 items-center">
          <h1 className="text-2xl font-bold">All FAQs</h1>
          <Link
            href={"/admin/add-faq"}
            className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white"
          >
            Add FAQ
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[200px] w-full divide-y divide-gray-200">
            <thead className="bg-green text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Heading</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((faq, idx) => (
                <tr key={faq._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2 font-medium">{faq.heading}</td>
                  <td className="px-4 py-2">{faq.description}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(faq)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(faq._id)}
                      className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Update Modal */}
        {editingFaq && (
          <div className="fixed inset-0 backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-blue-900 p-6 rounded-xl w-96 relative">
              <button
                onClick={() => setEditingFaq(null)}
                className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:animate-spin hover:text-gray-800"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Update FAQ</h2>

              <input
                type="text"
                value={editHeading}
                onChange={(e) => setEditHeading(e.target.value)}
                placeholder="Enter heading"
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Enter description"
                className="w-full border px-3 py-2 rounded mb-4 h-28"
              />

              <button
                onClick={handleUpdate}
                disabled={updateFaq.status === "pending"}
                className={`px-4 py-2 cursor-pointer bg-green text-white rounded hover:bg-primary ${
                  updateFaq.status === "pending"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {updateFaq.status === "pending" ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
