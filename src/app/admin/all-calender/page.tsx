"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useExamCalendar, Exam } from "@/hooks/examCalender";
import toast, { Toaster } from "react-hot-toast"; 

const Page: React.FC = () => {
  const { allExams, deleteExam, updateExam } = useExamCalendar();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [editingExam, setEditingExam] = useState<Exam | null>(null);
  const [editLevel, setEditLevel] = useState("");
  const [editExamDate, setEditExamDate] = useState("");
  const [editDeadline, setEditDeadline] = useState("");
  const [editMode, setEditMode] = useState("Online");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (allExams.isLoading)
    return (
      <AdminLayout>
        <p className="text-center mt-4">Loading Exams...</p>
      </AdminLayout>
    );

  if (allExams.isError)
    return (
      <AdminLayout>
        <p className="text-center mt-4 text-red-500">
          Error: {allExams.error?.message}
        </p>
      </AdminLayout>
    );

  const Exams = allExams.data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Exams.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Exams.length / itemsPerPage);

  // ✅ Delete
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this Exam?")) return;
    deleteExam.mutate(id, {
      onSuccess: () => toast.success("Exam deleted successfully!"),
      onError: () => toast.error("Failed to delete Exam!"),
    });
  };

  // ✅ Edit
  const handleEdit = (exam: Exam) => {
    setEditingExam(exam);
    setEditLevel(exam.level);
    setEditExamDate(exam.examDate);
    setEditDeadline(exam.registrationDeadline);
    setEditMode(exam.mode);
  };

  // ✅ Update
  const handleUpdate = () => {
    if (!editingExam) return toast.error("No Exam selected!");
    if (!editLevel.trim()) return toast.error("Level cannot be empty!");
    if (!editExamDate.trim()) return toast.error("Exam Date cannot be empty!");
    if (!editDeadline.trim())
      return toast.error("Registration Deadline cannot be empty!");

    updateExam.mutate(
      {
        id: editingExam._id,
        level: editLevel,
        examDate: editExamDate,
        registrationDeadline: editDeadline,
        mode: editMode,
      },
      {
        onSuccess: () => {
          toast.success("Exam updated successfully!");
          setEditingExam(null);
          setEditLevel("");
          setEditExamDate("");
          setEditDeadline("");
          setEditMode("Online");
        },
        onError: () => toast.error("Failed to update Exam!"),
      }
    );
  };

  return (
    <AdminLayout>
      <Toaster /> {/* ✅ Add this line */}

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-6 items-center">
          <h1 className="text-2xl font-bold">All Exams</h1>
          <Link
            href={"/admin/add-calender"}
            className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white"
          >
            Add Exam
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[200px] w-full divide-y divide-gray-200">
            <thead className="bg-green text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Level</th>
                <th className="px-4 py-2 text-left">Exam Date</th>
                <th className="px-4 py-2 text-left">Registration Deadline</th>
                <th className="px-4 py-2 text-left">Mode</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((exam, idx) => (
                <tr key={exam._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2 font-medium">{exam.level}</td>
                  <td className="px-4 py-2">{exam.examDate}</td>
                  <td className="px-4 py-2">{exam.registrationDeadline}</td>
                  <td className="px-4 py-2">{exam.mode}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(exam)}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(exam._id)}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
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
        {editingExam && (
          <div className="fixed inset-0 backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-blue-900 p-6 rounded-xl w-96 relative">
              <button
                onClick={() => setEditingExam(null)}
                className="absolute top-2 right-2 text-gray-500 hover:animate-spin hover:text-gray-800"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Update Exam</h2>

              <input
                type="text"
                value={editLevel}
                onChange={(e) => setEditLevel(e.target.value)}
                placeholder="Enter level"
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <input
                type="date"
                value={editExamDate}
                onChange={(e) => setEditExamDate(e.target.value)}
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <input
                type="date"
                value={editDeadline}
                onChange={(e) => setEditDeadline(e.target.value)}
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <select
                value={editMode}
                onChange={(e) => setEditMode(e.target.value)}
                className="w-full border px-3 py-2 rounded mb-4"
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>

              <button
                onClick={handleUpdate}
                disabled={updateExam.status === "pending"}
                className={`px-4 py-2 bg-green text-white rounded hover:bg-primary ${
                  updateExam.status === "pending"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {updateExam.status === "pending" ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
