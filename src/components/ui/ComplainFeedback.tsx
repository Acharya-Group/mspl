"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";
import { socialLinks } from "@/utils/data";
import { usePathname } from "next/navigation";
import useFeedbackComplaint from "@/hooks/feedbackComplaint";

type FormData = {
  name: string;
  email: string;
  number: string;
  formType: string;
  message: string;
};

const ComplainFeedback: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { createFeedback } = useFeedbackComplaint();

  // ✅ Typed form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    formType: "",
    message: "",
  });

  // ✅ Typed change handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Typed submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, number, message, formType } = formData;
    if (!name || !email || !number || !message || !formType) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    try {
      await createFeedback.mutateAsync(formData);
      alert("✅ Feedback/Complaint submitted successfully!");
      setFormData({ name: "", email: "", number: "", formType: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit feedback. Please try again.");
    }
  };

  const inputFields: (keyof FormData)[] = ["name", "email", "number"];

  return (
    <section
      className={`relative w-full flex items-center justify-center ${
        isHome ? "bg-blue-50" : "bg-transparent"
      } overflow-hidden py-10 lg:py-16`}
    >
      {/* Background circles */}
      <div className="absolute w-[420px] animate-spin h-[420px] rounded-full bg-gradient-to-b to-primary from-green bottom-1/2 right-1/2 transform translate-x-[-40%] translate-y-[38%]" />
      <div className="absolute w-[360px] h-[360px] bg-gray-50 rounded-full bottom-[50%] right-[50%] transform translate-x-[-40%] translate-y-[38%]" />

      <div className="container">
        <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2 relative z-10">
          {/* Left Info Section */}
          <div className="sm:p-10 p-4 relative">
            <h3 className="text-2xl font-semibold text-teal-500 pb-4">
              You can also mail us your Complaints & Appeals
            </h3>
            <p className="text-gray-600 pb-6">
              We value your experience with us. Share your feedback or submit a complaint — our team
              is here to listen and help resolve any concerns you may have.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="text-primary mr-3 h-[40px] w-[42px]" />
                <p>
                  #107, Shiv Vihar AB, Near Maharani Bagh Palace, Lalarpura, Gandhi Path (West),
                  Vaishali Nagar, Jaipur - 302021, Rajasthan INDIA
                </p>
              </div>
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="text-primary mr-3" />
                <Link href="mailto:yogacertificationbody@gmail.com">
                  yogacertificationbody@gmail.com
                </Link>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="text-primary mr-3" />
                <Link href="tel:918930300615">+91 893-030-0615</Link>
                <Link className="ms-2" href="tel:919991777717">
                  +91 999-177-7717
                </Link>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="text-gray-600 mb-2">Connect with us:</p>
              <div className="flex space-x-2">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-green-400 to-blue-400 text-white hover:scale-105 transition-transform"
                  >
                    <link.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-gradient-to-br from-primary to-green relative p-6 sm:p-10 overflow-hidden">
            <div className="absolute w-[130px] h-[130px] rounded-full bg-gradient-to-tr from-green animate-pulse to-transparent top-[130px] -right-10" />
            <div className="absolute w-[80px] h-[80px] rounded-full bg-gradient-to-tr from-primary animate-pulse to-transparent top-2 right-8" />
            <div className="absolute w-6 h-6 bg-primary rotate-45 top-12 -left-3" />

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-4 w-[240px] sm:w-full mx-auto flex flex-col items-center"
              autoComplete="off"
            >
              {/* Input fields */}
              {inputFields.map((field) => (
                <div key={field} className="relative text-center sm:w-full w-[240px]">
                  <input
                    type={field === "email" ? "email" : field === "number" ? "tel" : "text"}
                    name={field}
                    placeholder={field[0].toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                    className="sm:w-full w-[240px] px-4 py-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                  />
                </div>
              ))}

              {/* Select field */}
              <div className="relative text-center sm:w-full w-[240px]">
                <select
                  name="formType"
                  value={formData.formType}
                  onChange={handleChange}
                  className="sm:w-full w-[240px] px-4 py-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-white transition"
                >
                  <option value="" disabled hidden>
                    Feedback / Complaint
                  </option>
                  <option className="text-primary" value="feedback">
                    Feedback
                  </option>
                  <option className="text-primary" value="complaint">
                    Complaint
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="relative text-center sm:w-full w-[240px]">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="sm:w-full w-[240px] px-4 py-2 rounded-md bg-transparent border border-white text-white resize-none focus:outline-none focus:ring-2 focus:ring-white transition min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center sm:w-full w-[240px]">
                <button
                  type="submit"
                  disabled={createFeedback.isPending}
                  className="sm:w-full cursor-pointer w-[240px] bg-white text-teal-500 font-semibold py-2 rounded-md hover:bg-transparent hover:text-white border border-white transition"
                >
                  {createFeedback.isPending ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplainFeedback;
