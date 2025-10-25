"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import { faqs } from "../../utils/data";
import SubHeading from "../common/SubHeading";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50">
      <div className="container py-10 lg:py-12 relative">
        <SubHeading content="Faqs" className="text-center mb-4" />

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => {
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

                  {/* + / - Icon */}
                  <span className="text-white text-lg transition-transform duration-300">
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Animated Answer */}
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
      </div>
    </section>
  );
}
