"use client";

import { useExamCalendar, Exam } from "@/hooks/examCalender";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function YcbSliderOrWeb() {
  const { allExams } = useExamCalendar();
  const today = new Date();

  const upcomingExamDates =
    allExams.data
      ?.filter((exam: Exam) => new Date(exam.examDate) >= today)
      .sort(
        (a: Exam, b: Exam) =>
          new Date(a.examDate).getTime() - new Date(b.examDate).getTime()
      )
      .map((exam: Exam) => {
        const date = new Date(exam.examDate);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear()).slice(-2);
        return `${day}-${month}-${year}`;
      }) || [];

  const introText = "Registration Open For Exam To Be Held On:";
  const restText =
    "(Dear Candidates Now You Can Apply Free Of Cost (FOC) For Re-Appear Exam Through MSPL Yoga Certification Body)";

  const marqueeItems = 10;
  const marqueeContent: React.ReactElement[] = [];

  if (allExams.isLoading) {
    marqueeContent.push(
      <span
        key="loading"
        className="sm:text-xl text-lg ps-1 font-semibold whitespace-nowrap text-yellow-300"
      >
        Loading exam dates...
      </span>
    );
  } else if (allExams.isError) {
    marqueeContent.push(
      <span
        key="error"
        className="sm:text-xl text-lg ps-1 font-semibold whitespace-nowrap text-red-400"
      >
        Failed to load exam dates.
      </span>
    );
  } else if (upcomingExamDates.length === 0) {
    marqueeContent.push(
      <span
        key="nodata"
        className="sm:text-xl text-lg ps-1 font-semibold whitespace-nowrap text-gray-300"
      >
        No upcoming exams found.
      </span>
    );
  } else {
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
  }

  return (
    <div className="pt-10 lg:pt-12">
      <div className="px-4">
        <div className="bg-linear-to-r max-w-3xl mx-auto from-blue-300 to-blue-500 px-3 sm:px-2 py-3 sm:py-8 md:p-2 my-2 shadow-md rounded-xl flex flex-wrap justify-center md:justify-between items-center">
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-md md:w-6/12">
            <Image height={60} width={55} src="/images/ycb-logo.png" alt="logo" />
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
              target="_blank"
            >
              https://yogacertificationboard.nic.in
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Extra Slow Smooth Marquee */}
      <div className="w-full bg-gray-600 text-white py-1 overflow-hidden relative">
        <div className="marquee-track">
          <div className="marquee-content flex gap-3 whitespace-nowrap">
            {marqueeContent}
            {marqueeContent}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .marquee-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scrollMarquee 250s linear infinite; /* 👈 Super Slow */
          will-change: transform;
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-track:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
