"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import SubHeading from "../common/SubHeading";
import { useFaq } from "@/hooks/faq";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const { allFaqs } = useFaq(); // ✅ Fetch from backend

  // ✅ Loading / error handling
  if (allFaqs.isLoading || allFaqs.isError || !allFaqs.data?.length) {
    const msg = allFaqs.isLoading
      ? "Loading FAQs..."
      : allFaqs.isError
      ? "Failed to load FAQs. Please try again later."
      : "No FAQs found.";
    const color = allFaqs.isError
      ? "text-red-500"
      : allFaqs.isLoading
      ? "text-gray-500 animate-pulse"
      : "text-gray-400";

    return (
      <section className="py-10 lg:py-12 flex justify-center items-center">
        <p className={`${color} text-lg font-medium`}>{msg}</p>
      </section>
    );
  }

  // ✅ Use data directly
  const faqs = allFaqs.data;
  const isHome = pathname === "/";
  const displayFaqs = isHome ? faqs.slice(0, 8) : faqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={isHome ? "bg-blue-50" : "bg-transparent"}>
      <div className="container py-10 lg:py-12 relative">
        {isHome && <SubHeading content="Faqs" className="text-center mb-4" />}

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {displayFaqs.map((faq, index) => {
            const isActive = openIndex === index;

            return (
              <motion.div
                key={faq._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`px-4 py-2 rounded-lg cursor-pointer shadow-lg transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-green"
                    : "bg-gradient-to-r from-green to-primary"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <p className="text-white font-semibold text-base sm:text-lg">
                    {faq.heading}
                  </p>
                  <span className="text-white text-lg transition-transform duration-300">
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden mt-3"
                    >
                      <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                        {faq.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ✅ "View More" Button (only on Home) */}
        {isHome && faqs.length > 8 && (
          <div className="text-center mt-8">
            <Link
              href="/faqs"
              className="inline-block bg-gradient-to-r from-green to-primary text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              View More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
