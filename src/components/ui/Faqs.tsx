"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import SubHeading from "../common/SubHeading";
import { useFaq } from "@/hooks/faq";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const { allFaqs } = useFaq();
  const isHome = pathname === "/";

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const faqs = allFaqs.data || [];
  const displayFaqs = isHome ? faqs.slice(0, 8) : faqs;

  return (
    <section className={isHome ? "bg-blue-50" : "bg-transparent"}>
      <div className="container py-10 lg:py-12 relative">
        {isHome && <SubHeading content="Faqs" className="text-center mb-4" />}

        {/* ✅ FAQ List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {/* Loading placeholders */}
          {allFaqs.isLoading &&
            Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="px-4 py-4 rounded-lg bg-gradient-to-r from-green to-primary animate-pulse"
              >
                <div className="h-4 bg-white/40 rounded w-3/4 mb-2"></div>
              </div>
            ))}

          {/* Actual FAQ data */}
          {!allFaqs.isLoading &&
            !allFaqs.isError &&
            displayFaqs.map((faq, index) => {
                  const isActive = openIndex === index;
                  const aosType = index % 2 === 0 ? "fade-right" : "fade-left";

              return (
                <motion.div
                  key={faq._id || index}
                  className={`px-4 py-2 rounded-lg cursor-pointer shadow-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-green"
                      : "bg-gradient-to-r from-green to-primary"
                  }`}
                >
                  <button  data-aos={aosType}
                  data-aos-duration="2000"
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

          {/* Error message */}
          {allFaqs.isError && (
            <p className="text-center text-red-500 font-medium">
              Failed to load FAQs. Please try again later.
            </p>
          )}
        </div>

        {/* ✅ "View More" Button (only on Home) */}
        {isHome && !allFaqs.isLoading && faqs.length > 8 && (
          <div className="text-center mt-8">
            <Link
              aria-label="all faqs"
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
