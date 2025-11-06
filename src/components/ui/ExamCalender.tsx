"use client";
import React, { useMemo } from "react";
import Button from "../common/Button";
import Link from "next/link";

const ExamCalendar = () => {
  const exams = [
    {
      level: "Yoga Protocol Instructor (YPI)",
      date: "15 December 2024",
      registrationDeadline: "30 November 2024",
      mode: "Online",
    },
    {
      level: "Yoga Wellness Instructor (YWI)",
      date: "10 January 2026",
      registrationDeadline: "25 December 2025",
      mode: "Offline",
    },
    {
      level: "Yoga Teacher and Evaluator (YT&E)",
      date: "5 February 2026",
      registrationDeadline: "20 January 2026",
      mode: "Online",
    },
    {
      level: "Yoga Assistant (YA)",
      date: "20 October 2025",
      registrationDeadline: "5 October 2025",
      mode: "Offline",
    },
  ];

  const today = new Date();

  // ✅ Filter and sort only upcoming exams
  const upcomingExams = useMemo(() => {
    return exams
      .filter((exam) => new Date(exam.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [exams, today]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">
          Check upcoming yoga certification exam dates and registration deadlines.
        </p>

        {upcomingExams.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 bg-white shadow-sm rounded-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Level of Exam</th>
                  <th className="px-4 py-3 text-left">Exam Date</th>
                  <th className="px-4 py-3 text-left">Registration Deadline</th>
                  <th className="px-4 py-3 text-left">Mode</th>
                </tr>
              </thead>
              <tbody>
                {upcomingExams.map((exam, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-100 transition duration-150"
                  >
                    <td className="px-4 py-3 font-medium">{exam.level}</td>
                    <td className="px-4 py-3">{exam.date}</td>
                    <td className="px-4 py-3">{exam.registrationDeadline}</td>
                    <td className="px-4 py-3">{exam.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No upcoming exams at the moment. Please check back later.
          </p>
        )}

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
};

export default ExamCalendar;
