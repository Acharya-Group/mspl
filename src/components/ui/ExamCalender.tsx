"use client";

import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import { useExamCalendar } from "@/hooks/examCalender";

export default function ExamCalendar() {
  const { allExams } = useExamCalendar();

  if (allExams.isLoading || allExams.isError || !allExams.data?.length) {
    const msg = allExams.isLoading
      ? "Loading exam calendar..."
      : allExams.isError
      ? "Failed to load exam calendar. Please try again later."
      : "No upcoming exams found.";

    const color = allExams.isError
      ? "text-red-500"
      : allExams.isLoading
      ? "text-gray-500 animate-pulse"
      : "text-gray-400";

    return (
      <section className="py-10 lg:py-12 flex justify-center items-center">
        <p className={`${color} text-lg font-medium`}>{msg}</p>
      </section>
    );
  }

  const exams = allExams.data;
  const today = new Date();

  // ✅ Filter and sort
  const upcomingExams = exams
    .filter((exam) => new Date(exam.examDate) >= today)
    .sort(
      (a, b) =>
        new Date(a.examDate).getTime() - new Date(b.examDate).getTime()
    );

  if (!upcomingExams.length) {
    return (
      <section className="py-10 lg:py-12 flex justify-center items-center">
        <p className="text-gray-400 text-lg font-medium">
          No upcoming exams scheduled.
        </p>
      </section>
    );
  }

  // ✅ Date formatting function (dd-mm-yy)
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr; // fallback if invalid
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2); // last 2 digits
    return `${day}-${month}-${year}`;
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">
          Check upcoming yoga certification exam dates and registration deadlines.
        </p>

        {/* ✅ Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white shadow-sm rounded-lg">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Level of Exam</th>
                <th className="px-4 py-3 text-left">Exam Date (DD-MM-YY)</th>
                <th className="px-4 py-3 text-left">Registration Deadline (DD-MM-YY)</th>
                <th className="px-4 py-3 text-left">Mode</th>
              </tr>
            </thead>
            <tbody>
              {upcomingExams.map((exam, index) => (
                <tr
                  key={exam._id || index}
                  className="border-t hover:bg-gray-100 transition duration-150"
                >
                  <td className="px-4 py-3 font-medium">{exam.level}</td>
                  <td className="px-4 py-3">{formatDate(exam.examDate)}</td>
                  <td className="px-4 py-3">{formatDate(exam.registrationDeadline)}</td>
                  <td className="px-4 py-3">{exam.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Register button */}
        <Link
          className="mt-8 flex justify-center"
          target="_blank"
          href="https://yogacertificationboard.nic.in/mis/Registration"
        >
          <Button content="Register Now" />
        </Link>
      </div>
    </section>
  );
}
