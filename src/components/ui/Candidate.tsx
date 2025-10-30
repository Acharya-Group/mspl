"use client";

import React, { useState } from "react";

type ExamRow = {
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

const DATA: ExamRow[] = [
  { id: 1, level: "Yoga Protocol Instructor", assessment: 34, gst: 6, reg_saarc: 10, total_saarc: 50, reg_developing: 25, total_developing: 65, reg_developed: 50, total_developed: 90 },
  { id: 2, level: "Yoga Wellness Instructor", assessment: 41, gst: 7, reg_saarc: 25, total_saarc: 73, reg_developing: 50, total_developing: 98, reg_developed: 75, total_developed: 123 },
  { id: 3, level: "Yoga Teacher & Evaluator", assessment: 54, gst: 10, reg_saarc: 35, total_saarc: 99, reg_developing: 75, total_developing: 139, reg_developed: 100, total_developed: 164 },
  { id: 4, level: "Yoga Master", assessment: 68, gst: 13, reg_saarc: 50, total_saarc: 131, reg_developing: 100, total_developing: 181, reg_developed: 150, total_developed: 231 },
  { id: 5, level: "Assistant Yoga Therapist", assessment: 34, gst: 6, reg_saarc: 35, total_saarc: 75, reg_developing: 75, total_developing: 115, reg_developed: 100, total_developed: 140 },
  { id: 6, level: "Yoga Therapist", assessment: 68, gst: 13, reg_saarc: 40, total_saarc: 121, reg_developing: 80, total_developing: 161, reg_developed: 100, total_developed: 181 },
  { id: 7, level: "Therapeutic Yoga Consultant", assessment: 82, gst: 15, reg_saarc: 100, total_saarc: 197, reg_developing: 200, total_developing: 297, reg_developed: 300, total_developed: 397 },
];

export default function Candidate() {
  const [tab, setTab] = useState<"indian" | "foreign">("indian");

  return (
    <section className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Candidate Fees</h2>
      {/* Tabs */}
      <div className="flex gap-6 mb-4">
      <button
onClick={() => setTab("indian")}
className={`px-5 py-2.5 rounded-lg font-medium transition ${
tab === "indian"
? "gradient-animate cursor-pointer text-lg font-medium rounded-lg"
: "bg-white text-gray-700 border"
}`}
aria-pressed={tab === "indian"}
>
Indian Candidate
</button>
<button
onClick={() => setTab("foreign")}
className={`px-5 py-2.5 rounded-lg font-medium transition ${
tab === "foreign"
? "gradient-animate cursor-pointer text-lg font-medium rounded-lg"
: "bg-white text-gray-700 border"
}`}
aria-pressed={tab === "foreign"}
>
Foreign Candidate
</button>
      </div>

      {/* Content area */}
      <div className="bg-white rounded-lg shadow-sm p-3">
        {tab === "indian" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Sr. No.</th>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Level Of Exam</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Assessment Fees (USD)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">GST (18%)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Total (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {DATA.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-700">{r.id}</td>
                    <td className="px-3 py-2 text-sm text-gray-700">{r.level}</td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">{r.assessment.toFixed(2)}</td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">{r.gst.toFixed(2)}</td>
                    <td className="px-3 py-2 text-sm text-right font-semibold text-gray-900">{(r.assessment + r.gst).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-[900px] w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Sr. No.</th>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Level Of Exam</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Assessment Fees (USD)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">GST (18%)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Reg. Fees (SAARAC)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Total (SAARAC)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Reg. Fees (Developing)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Total (Developing)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Reg. Fees (Developed)</th>
                  <th className="px-3 py-2 text-right text-sm font-medium text-gray-700">Total (Developed)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {DATA.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-700">{r.id}</td>
                    <td className="px-3 py-2 text-sm text-gray-700">{r.level}</td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">${r.assessment.toFixed(2)}</td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">${r.gst.toFixed(2)}</td>

                    <td className="px-3 py-2 text-sm text-right text-gray-700">${r.reg_saarc.toFixed(2)}</td>
                    <td className="px-3 py-2 text-sm text-right font-semibold text-gray-900">${r.total_saarc.toFixed(2)}</td>

                    <td className="px-3 py-2 text-sm text-right text-gray-700">${r.reg_developing.toFixed(2)}</td>
                    <td className="px-3 py-2 text-sm text-right font-semibold text-gray-900">${r.total_developing.toFixed(2)}</td>

                    <td className="px-3 py-2 text-sm text-right text-gray-700">${r.reg_developed.toFixed(2)}</td>
                    <td className="px-3 py-2 text-sm text-right font-semibold text-gray-900">${r.total_developed.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Small note */}
        <p className="mt-3 text-sm text-gray-500">
          Responsive tables — on small screens they scroll horizontally. Values are shown in USD; adjust currency or formatting as needed.
        </p>
      </div>
    </section>
  );
}
