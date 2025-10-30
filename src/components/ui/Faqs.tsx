"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "../../utils/data";
import SubHeading from "../common/SubHeading";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname(); // ✅ Get current route

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Show background + heading only on home page
  const isHome = pathname === "/";

  // ✅ Limit to 6 FAQs on home page
  const displayFaqs = isHome ? faqs.slice(0, 8) : faqs;

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
                data-aos="zoom-in"
                data-aos-duration="2000"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`px-4 py-2 rounded-lg cursor-pointer shadow-lg transition-all duration-300 
                  ${
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
                    {faq.question}
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
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ✅ "View More" Button (only on Home) */}
        {isHome && faqs.length > 6 && (
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
