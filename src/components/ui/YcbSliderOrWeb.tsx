"use client";

import { useExamCalendar } from "@/hooks/examCalender";
import Image from "next/image";
import Link from "next/link";

export default function YcbSliderOrWeb() {
  // 👇 Correct destructure (same as ExamCalendar)
  const { allExams } = useExamCalendar();

  // ✅ Unified state handling
  if (allExams.isLoading || allExams.isError || !allExams.data?.length) {
    const msg = allExams.isLoading
      ? "Loading exam dates..."
      : allExams.isError
      ? "Failed to load exam dates."
      : "No upcoming exams.";

    return (
      <div className="bg-gray-100 py-6 text-center text-gray-600 font-medium">
        {msg}
      </div>
    );
  }

  // ✅ Extract only exam dates and format
  const today = new Date();
  const upcomingExamDates = allExams.data
    .filter((exam: any) => new Date(exam.examDate) >= today)
    .sort(
      (a: any, b: any) =>
        new Date(a.examDate).getTime() - new Date(b.examDate).getTime()
    )
    .map((exam: any) => {
      const date = new Date(exam.examDate);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear()).slice(-2);
      return `${day}-${month}-${year}`;
    });

  const introText = "Registration Open For Exam To Be Held On:";
  const restText =
    "(Dear Candidates Now You Can Apply Free Of Cost (FOC) For Re-Appear Exam Through MSPL Yoga Certification Body)";

  const marqueeItems = 10;

  // ✅ Build marquee content dynamically
  const marqueeContent = [];
  for (let i = 0; i < marqueeItems; i++) {
    marqueeContent.push(
      <span
        key={`intro-${i}`}
        className="sm:text-xl text-lg ps-1 whitespace-nowrap font-semibold"
      >
        {introText}
      </span>
    );

    upcomingExamDates.forEach((formattedDate, idx) => {
      marqueeContent.push(
        <span
          key={`date-${i}-${idx}`}
          className="ps-1 sm:text-xl text-lg font-bold text-primary whitespace-nowrap"
        >
          {formattedDate}
        </span>
      );
    });

    marqueeContent.push(
      <span
        key={`rest-${i}`}
        className="sm:text-xl text-lg ps-2 whitespace-nowrap"
      >
        {restText}
      </span>
    );
  }

  return (
    <div className="pt-10 lg:pt-12">
      <div className="px-4">
        {/* ✅ Header Box */}
        <div className="bg-linear-to-r max-w-3xl mx-auto from-blue-300 to-blue-500 px-3 sm:px-2 py-3 sm:py-8 md:p-2 my-2 shadow-md rounded-xl flex flex-wrap justify-center md:justify-between items-center">
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-md md:w-6/12">
            <Image
              height={60}
              width={55}
              src="/images/ycb-logo.png"
              alt="logo"
            />
            <div>
              <h3 className="text-base mb-0 font-semibold">
                Yoga Certification Board
              </h3>
              <p className="text-sm mb-0 font-medium">
                Ministry of AYUSH, Government of India
              </p>
            </div>
          </div>
          <div className="font-[600] text-white md:w-6/12 ps-4 pt-4 md:pt-0">
            <span>Website :- </span>
            <Link
              className="underline"
              href="https://yogacertificationboard.nic.in"
            >
              https://yogacertificationboard.nic.in
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Scrolling Marquee */}
      <div className="w-full bg-gray-600 text-white py-1 overflow-hidden relative">
        <div className="flex gap-3 whitespace-nowrap animate-[marquee_6s_linear_infinite]">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </div>
  );
}
