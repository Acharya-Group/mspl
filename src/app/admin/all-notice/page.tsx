"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import { useNotice, Notice } from "@/hooks/notice";

const AllNoticePage: React.FC = () => {
  const { allNotices, deleteNotice, updateNotice } = useNotice();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editLink, setEditLink] = useState<string>("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (allNotices.isLoading)
    return (
      <AdminLayout>
        <p className="text-center mt-4">Loading Notices...</p>
      </AdminLayout>
    );

  if (allNotices.isError)
    return (
      <AdminLayout>
        <p className="text-center mt-4 text-red-500">
          Error: {allNotices.error?.message}
        </p>
      </AdminLayout>
    );

  const Notices = allNotices.data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Notices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Notices.length / itemsPerPage);

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this notice?")) return;
    deleteNotice.mutate(id, {
      onSuccess: () => toast.success("Notice deleted successfully!"),
      onError: () => toast.error("Failed to delete notice!"),
    });
  };

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
    setEditTitle(notice.title);
    setEditLink(notice.link);
  };

  const handleUpdate = () => {
    if (!editingNotice) return toast.error("No notice selected!");
    if (!editTitle.trim()) return toast.error("Title cannot be empty!");
    if (!editLink.trim()) return toast.error("Link cannot be empty!");

    updateNotice.mutate(
      { id: editingNotice._id, title: editTitle, link: editLink },
      {
        onSuccess: () => {
          toast.success("Notice updated successfully!");
          setEditingNotice(null);
          setEditTitle("");
          setEditLink("");
        },
        onError: () => toast.error("Failed to update notice!"),
      }
    );
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-6 items-center">
          <h1 className="text-2xl font-bold">All Notices</h1>
          <Link
            href={"/admin/add-notice"}
            className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white"
          >
            Add Notice
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[200px] w-full divide-y divide-gray-200">
            <thead className="bg-green text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Link</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((notice, idx) => (
                <tr key={notice._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2 font-medium">{notice.title}</td>
                  <td className="px-4 py-2 text-blue-600 underline">
                    <a href={notice.link} target="_blank">
                      {notice.link}
                    </a>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(notice)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(notice._id)}
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
        {editingNotice && (
          <div className="fixed inset-0 backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-blue-900 p-6 rounded-xl w-96 relative">
              <button
                onClick={() => setEditingNotice(null)}
                className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:animate-spin hover:text-gray-800"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Update Notice</h2>

              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <input
                type="text"
                value={editLink}
                onChange={(e) => setEditLink(e.target.value)}
                placeholder="Enter link"
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <button
                onClick={handleUpdate}
                disabled={updateNotice.status === "pending"}
                className={`px-4 py-2 cursor-pointer bg-green text-white rounded hover:bg-primary ${
                  updateNotice.status === "pending"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {updateNotice.status === "pending" ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AllNoticePage;
