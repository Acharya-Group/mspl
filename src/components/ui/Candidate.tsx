"use client";

import React, { useState } from "react";

type IndianRow = {
  id: number;
  level: string;
  assessment: number;
  gst: number;
  reg: number;
  total: number;
};

type IndianReappearRow = {
  id: number;
  level: string;
  assessment: number;
  gst: number;
  total: number;
};

type ForeignRow = {
  id: number;
  level: string;
  assessment: number;
  gst: number;
  reg_saarc: number;
  total_saarc: number;
  reg_developing: number;
  total_developing: number;
  reg_developed: number;
  total_developed: number;
};

type ForeignReappearRow = {
  id: number;
  level: string;
  assessment: number;
  gst: number;
  total: number;
};

const INDIAN_FRESH: IndianRow[] = [
  { id: 1, level: "Yoga Protocol Instructor", assessment: 2500, gst: 450, reg: 500, total: 3450 },
  { id: 2, level: "Yoga Wellness Instructor", assessment: 3000, gst: 540, reg: 1000, total: 4540 },
  { id: 3, level: "Yoga Teacher & Evaluator", assessment: 4000, gst: 720, reg: 1500, total: 6220 },
  { id: 4, level: "Yoga Master", assessment: 5000, gst: 900, reg: 2500, total: 8400 },
  { id: 5, level: "Assistant Yoga Therapist", assessment: 2500, gst: 450, reg: 1500, total: 4450 },
  { id: 6, level: "Yoga Therapist", assessment: 5000, gst: 900, reg: 2000, total: 7900 },
];

const INDIAN_REAPPEAR: IndianReappearRow[] = [
  { id: 1, level: "Yoga Protocol Instructor", assessment: 1000, gst: 180, total: 1180 },
  { id: 2, level: "Yoga Wellness Instructor", assessment: 1200, gst: 216, total: 1416 },
  { id: 3, level: "Yoga Teacher & Evaluator", assessment: 1500, gst: 270, total: 1770 },
  { id: 4, level: "Yoga Master", assessment: 1800, gst: 324, total: 2124 },
  { id: 5, level: "Assistant Yoga Therapist", assessment: 1000, gst: 180, total: 1180 },
  { id: 6, level: "Yoga Therapist", assessment: 1800, gst: 324, total: 2124 },
];

const FOREIGN_FRESH: ForeignRow[] = [
  { id: 1, level: "Yoga Protocol Instructor", assessment: 34, gst: 6, reg_saarc: 10, total_saarc: 50, reg_developing: 25, total_developing: 65, reg_developed: 50, total_developed: 90 },
  { id: 2, level: "Yoga Wellness Instructor", assessment: 41, gst: 7, reg_saarc: 25, total_saarc: 73, reg_developing: 50, total_developing: 98, reg_developed: 75, total_developed: 123 },
  { id: 3, level: "Yoga Teacher & Evaluator", assessment: 54, gst: 10, reg_saarc: 35, total_saarc: 99, reg_developing: 75, total_developing: 139, reg_developed: 100, total_developed: 164 },
  { id: 4, level: "Yoga Master", assessment: 68, gst: 13, reg_saarc: 50, total_saarc: 131, reg_developing: 100, total_developing: 181, reg_developed: 150, total_developed: 231 },
  { id: 5, level: "Assistant Yoga Therapist", assessment: 34, gst: 6, reg_saarc: 35, total_saarc: 75, reg_developing: 75, total_developing: 115, reg_developed: 100, total_developed: 140 },
  { id: 6, level: "Yoga Therapist", assessment: 68, gst: 13, reg_saarc: 40, total_saarc: 121, reg_developing: 80, total_developing: 161, reg_developed: 100, total_developed: 181 },
];

const FOREIGN_REAPPEAR: ForeignReappearRow[] = [
  { id: 1, level: "Yoga Protocol Instructor", assessment: 14, gst: 2, total: 16 },
  { id: 2, level: "Yoga Wellness Instructor", assessment: 17, gst: 3, total: 20 },
  { id: 3, level: "Yoga Teacher & Evaluator", assessment: 20, gst: 4, total: 24 },
  { id: 4, level: "Yoga Master", assessment: 25, gst: 4, total: 29 },
  { id: 5, level: "Assistant Yoga Therapist", assessment: 14, gst: 2, total: 16 },
  { id: 6, level: "Yoga Therapist", assessment: 25, gst: 4, total: 29 },
];

export default function Candidate() {
  const [tab, setTab] = useState<"indian" | "foreign">("indian");

  return (
    <section className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center"></h2>
      {/* Tab Buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button
          onClick={() => setTab("indian")}
          className={`px-5 py-2.5 rounded-lg font-medium transition ${
            tab === "indian"
              ? "gradient-animate cursor-pointer text-white text-lg"
              : "bg-white text-gray-700 border"
          }`}
        >
          Indian Candidate
        </button>
        <button
          onClick={() => setTab("foreign")}
          className={`px-5 py-2.5 rounded-lg font-medium transition ${
            tab === "foreign"
              ? "gradient-animate cursor-pointer text-white text-lg"
              : "bg-white text-gray-700 border"
          }`}
        >
          Foreign Candidate
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 space-y-10">
        {tab === "indian" ? (
          <>
            {/* Fresh Enrollment */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">
                Fresh Enrollment Fees (₹)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left">S.No.</th>
                      <th className="px-3 py-2 text-left">Yoga Course</th>
                      <th className="px-3 py-2 text-right">Assessment Fees</th>
                      <th className="px-3 py-2 text-right">GST (18%)</th>
                      <th className="px-3 py-2 text-right">Registration Fees</th>
                      <th className="px-3 py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {INDIAN_FRESH.map((r) => (
                      <tr key={r.id}>
                        <td className="px-3 py-2">{r.id}</td>
                        <td className="px-3 py-2">{r.level}</td>
                        <td className="px-3 py-2 text-right">₹ {r.assessment.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right">₹ {r.gst.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right">₹ {r.reg.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right font-semibold">₹ {r.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reappear Fees */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">
                Re-Appear Fees (₹)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left">S.No.</th>
                      <th className="px-3 py-2 text-left">Yoga Course</th>
                      <th className="px-3 py-2 text-right">Assessment Fees</th>
                      <th className="px-3 py-2 text-right">GST (18%)</th>
                      <th className="px-3 py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {INDIAN_REAPPEAR.map((r) => (
                      <tr key={r.id}>
                        <td className="px-3 py-2">{r.id}</td>
                        <td className="px-3 py-2">{r.level}</td>
                        <td className="px-3 py-2 text-right">₹ {r.assessment.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right">₹ {r.gst.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right font-semibold">₹ {r.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Fresh Enrollment */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">
                Fresh Enrollment Fees (USD)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[900px] divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left">S.No.</th>
                      <th className="px-3 py-2 text-left">Level of Exam</th>
                      <th className="px-3 py-2 text-right">Assessment Fees</th>
                      <th className="px-3 py-2 text-right">GST (18%)</th>
                      <th className="px-3 py-2 text-right">Reg. (SAARAC)</th>
                      <th className="px-3 py-2 text-right">Total (SAARAC)</th>
                      <th className="px-3 py-2 text-right">Reg. (Developing)</th>
                      <th className="px-3 py-2 text-right">Total (Developing)</th>
                      <th className="px-3 py-2 text-right">Reg. (Developed)</th>
                      <th className="px-3 py-2 text-right">Total (Developed)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {FOREIGN_FRESH.map((r) => (
                      <tr key={r.id}>
                        <td className="px-3 py-2">{r.id}</td>
                        <td className="px-3 py-2">{r.level}</td>
                        <td className="px-3 py-2 text-right">$ {r.assessment}</td>
                        <td className="px-3 py-2 text-right">$ {r.gst}</td>
                        <td className="px-3 py-2 text-right">$ {r.reg_saarc}</td>
                        <td className="px-3 py-2 text-right font-semibold">$ {r.total_saarc}</td>
                        <td className="px-3 py-2 text-right">$ {r.reg_developing}</td>
                        <td className="px-3 py-2 text-right font-semibold">$ {r.total_developing}</td>
                        <td className="px-3 py-2 text-right">$ {r.reg_developed}</td>
                        <td className="px-3 py-2 text-right font-semibold">$ {r.total_developed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reappear Fees */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">
                Re-Appear Fees (USD)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left">S.No.</th>
                      <th className="px-3 py-2 text-left">Level of Exam</th>
                      <th className="px-3 py-2 text-right">Assessment Fees</th>
                      <th className="px-3 py-2 text-right">GST (18%)</th>
                      <th className="px-3 py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {FOREIGN_REAPPEAR.map((r) => (
                      <tr key={r.id}>
                        <td className="px-3 py-2">{r.id}</td>
                        <td className="px-3 py-2">{r.level}</td>
                        <td className="px-3 py-2 text-right">$ {r.assessment}</td>
                        <td className="px-3 py-2 text-right">$ {r.gst}</td>
                        <td className="px-3 py-2 text-right font-semibold">$ {r.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
