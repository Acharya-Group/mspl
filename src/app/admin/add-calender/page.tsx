"use client";

import React, { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { useExamCalendar } from "@/hooks/examCalender";

const Page: React.FC = () => {
  const { addExam } = useExamCalendar();
  const [level, setLevel] = useState("");
  const [examDate, setExamDate] = useState("");
  const [registrationDeadline, setRegistrationDeadline] = useState("");
  const [mode, setMode] = useState("Online");
  const [loading, setLoading] = useState(false);

  // ✅ Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!level.trim()) return toast.error("Please enter the exam level!");
    if (!examDate.trim()) return toast.error("Please select the exam date!");
    if (!registrationDeadline.trim())
      return toast.error("Please select the registration deadline!");
    if (!mode.trim()) return toast.error("Please select the exam mode!");

    setLoading(true);
    addExam.mutate(
      { level, examDate, registrationDeadline, mode },
      {
        onSuccess: () => {
          toast.success("Exam added successfully!");
          setLevel("");
          setExamDate("");
          setRegistrationDeadline("");
          setMode("Online");
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add exam!");
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
          <h1 className="text-2xl font-bold">Add Exam</h1>
          <Link
            href="/admin/all-calender"
            className="hover:bg-primary bg-green transition-all duration-200 px-2 py-1 rounded-lg text-sm font-semibold text-white"
          >
            All Exams
          </Link>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam Level
            </label>
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Enter exam level (e.g. Beginner, Intermediate)"
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            />
          </div>

          {/* Exam Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam Date
            </label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            />
          </div>

          {/* Registration Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Registration Deadline
            </label>
            <input
              type="date"
              value={registrationDeadline}
              onChange={(e) => setRegistrationDeadline(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            />
          </div>

          {/* Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam Mode
            </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-green focus:border-green
              hover:border-green transition"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
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
