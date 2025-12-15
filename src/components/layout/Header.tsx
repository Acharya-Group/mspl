"use client";
import React from "react";
import HeaderTop from "../ui/HeaderTop";
import Nav from "../ui/Nav";
import Image from "next/image";
import Link from "next/link";
import { useExamCalendar, Exam } from "@/hooks/examCalender";
const Header = () => {
  const { allExams } = useExamCalendar();
  const today = new Date();

  const upcomingExamDates =
    allExams?.data
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
    "MSPL, PrCB doesn't accept any cash payments. We accept only online payments.";

  const marqueeItems = 6;
  let marqueeContent: React.ReactElement[] = [];

  // 🔵 Exam Data Conditions
  if (allExams.isLoading) {
    marqueeContent = [
      <span
        key="loading"
        className="text-sm font-semibold whitespace-nowrap text-yellow-300"
      >
        Loading exam dates...
      </span>,
    ];
  } else if (allExams.isError) {
    marqueeContent = [
      <span
        key="error"
        className="text-lg font-semibold whitespace-nowrap text-red-400"
      >
        Failed to load exam dates.
      </span>,
    ];
  } else if (upcomingExamDates.length === 0) {
    marqueeContent = [
      <span
        key="nodata"
        className="text-lg font-semibold whitespace-nowrap text-gray-300"
      >
        No upcoming exams found.
      </span>,
    ];
  } else {
    // 🔵 Generate Marquee Items
    for (let i = 0; i < marqueeItems; i++) {
      marqueeContent.push(
        <span
          key={`intro-${i}`}
          className="text-sm whitespace-nowrap font-semibold"
        >
          {introText}
        </span>
      );

      upcomingExamDates.forEach((date, idx) => {
        marqueeContent.push(
          <span
            key={`date-${i}-${idx}`}
            className="ps-1 text-sm font-bold text-yellow-300 whitespace-nowrap"
          >
            {date}
          </span>
        );
      });

      marqueeContent.push(
        <span key={`rest-${i}`} className="text-sm ps-1 whitespace-nowrap">
          {restText}
        </span>
      );
    }
  }

  return (
    <>
      {/* Top Header */}
      <HeaderTop />

      {/* Logo Section */}
      <div className="py-4 hidden lg:flex justify-between items-center container mx-auto bg-white">
        <Link aria-label="home route" href="/">
          <Image
            className="max-w-[100px]"
            height={170}
            width={168}
            src="/images/mspl-logo.png"
            alt="mspl logo"
          />
        </Link>
        <Link href={"/"} className="text-center">
          <h1 className="text-xl lg:text-4xl xl:text-[44px] font-semibold text-blue">
            MSPL - PERSONNEL CERTIFICATION BODY
          </h1>
          <h3 className="text-sm lg:text-base xl:text-xl font-semibold text-green">
            Approved By: Yoga Certification Board, (Ministry Of Ayush, Govt Of India)
          </h3>
        </Link>
        <Link target="blank" href={"https://yogacertificationboard.nic.in/"}>
          <Image
            className="max-w-[100px]"
            height={170}
            width={132}
            src="/images/ycb-logo.png"
            alt="ycb logo"
          />
        </Link>
      </div>
      <div className="sticky top-0 z-[50]">
      {/* Marquee */}
      <div className="w-full bg-gray-600 text-white py-1 relative z-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-3">
    {marqueeContent}
      {marqueeContent}
        </div>
      </div>

      {/* Sticky Nav */}
        <Nav />
      </div>

      <style jsx>{`
        .animate-marquee {
  display: inline-flex;
  min-width: max-content;
  animation: marquee 240s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
      `}</style>
    </>
  );
};

export default Header;
