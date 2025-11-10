"use client";

import React from "react";
import Para from "../common/Para";
import SubHeading from "../common/SubHeading";
import { FaStar } from "react-icons/fa6";
import Button from "../common/Button";
import Link from "next/link";
import { useNotice } from "@/hooks/notice";
import { useEvent } from "@/hooks/event";

interface Notice {
  _id?: string;
  title: string;
  link?: string;
}

interface Event {
  _id?: string;
  title: string;
}

const AboutUs: React.FC = () => {
  const { allNotices } = useNotice();
  const { allEvents } = useEvent();

  const notices: Notice[] = allNotices.data || [];
  const events: Event[] = allEvents.data || [];

  return (
    <section>
      <div className="container py-10 lg:py-12">
        <div className="flex flex-wrap">
          {/* About Text */}
          <div className="lg:w-7/12 pe-4">
            <SubHeading content="About MSPL-PERSONNEL CERTIFICATION BODY" />
            <Para
              className="py-3"
              content="(MSPL - Personnel Certification Body) was established to act as a Centre of Excellence in the field of Yoga. As the demand for the system of Yoga is increasing rapidly at the global level, the Institute is striving hard to fulfill the current need and demand. MSPL is backed by devoted, highly qualified, and experienced assessment personnel offering customer-oriented certification in an efficient and cost-effective manner."
            />
            <Link href="/about">
              <Button content="Read More" />
            </Link>
          </div>

          {/* Notice Board + Events */}
          <div className="lg:w-5/12 flex w-full flex-col sm:flex-row gap-4 pt-5 lg:pt-0">
            {/* Notice Board */}
            <div className="w-full sm:w-1/2 commonShadow min-h-[220px] rounded-xl overflow-hidden">
              <div className="bg-green w-full rounded-t-lg">
                <h3 className="text-xl font-bold text-white flex justify-between items-center px-3 py-2">
                  <FaStar /> Notice Board <FaStar />
                </h3>
              </div>
              <div className="bg-white text-gray-700 p-4 text-sm leading-relaxed overflow-y-auto max-h-[250px]">
                {allNotices.isLoading ? (
                  <p className="text-gray-500 animate-pulse text-center py-4">
                    Loading notices...
                  </p>
                ) : allNotices.isError ? (
                  <p className="text-red-500 text-center py-4">
                    Failed to load notices.
                  </p>
                ) : notices.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {notices.map((n: Notice, i: number) => (
                      <li key={n._id || i}>
                        <a
                          href={n.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {n.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    No notices found.
                  </p>
                )}
              </div>
            </div>

            {/* News & Events */}
            <div className="w-full sm:w-1/2 commonShadow min-h-[220px] rounded-xl overflow-hidden">
              <div className="bg-green w-full rounded-t-lg">
                <h3 className="text-xl font-bold text-white flex justify-between items-center px-3 py-2">
                  <FaStar /> News & Events <FaStar />
                </h3>
              </div>
              <div className="bg-white text-gray-700 p-4 text-sm leading-relaxed overflow-y-auto max-h-[250px]">
                {allEvents.isLoading ? (
                  <p className="text-gray-500 animate-pulse text-center py-4">
                    Loading events...
                  </p>
                ) : allEvents.isError ? (
                  <p className="text-red-500 text-center py-4">
                    Failed to load events.
                  </p>
                ) : events.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {events.map((e: Event, i: number) => (
                      <li key={e._id || i}>{e.title}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    No events found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
