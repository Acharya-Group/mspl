"use client";
import { useState } from "react";
import Button from "../common/Button";

const PayFee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
    enrollmentNo: "",
    examinationFees: ""
  });

  // Course data with fees
  const courses = [
    { name: "Yoga Volunteer", fee: "₹1,500" },
    { name: "Yoga Instructor", fee: "₹3,000" },
    { name: "Yoga Therapist", fee: "₹5,000" },
    { name: "Advanced Yoga Practitioner", fee: "₹7,500" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "course") {
      // Find the selected course and its fee
      const selectedCourse = courses.find(course => course.name === value);
      setFormData(prev => ({
        ...prev,
        [name]: value,
        examinationFees: selectedCourse ? selectedCourse.fee : ""
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-10 lg:py-12">
      <div className="container bg-white rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row - 3 fields side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Id*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone No.*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Second Row - 3 fields side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose the Course*
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Enrollment No */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enrollment No
              </label>
              <input
                type="text"
                name="enrollmentNo"
                value={formData.enrollmentNo}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {/* Examination Fees */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Examination Fees
  </label>
  <input
    type="text"
    readOnly
    name="examinationFees"
    value={formData.examinationFees}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
    placeholder="Will auto-fill when course is selected"
  />
</div>
          </div>
          {/* Centered Button at Bottom */}
          <div className="flex justify-center pt-2">
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                className="flex-1 cursor-pointer hover:scale-105 transition-all font-semibold px-3 py-2 border-[2px] border-gray-400 text-gray-700 rounded hover:bg-gray-50"
              >
                CANCEL
              </button>
              <Button content="NEXT"/>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PayFee;