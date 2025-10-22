"use client";

import React, { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
{ value: 10000, suffix: "+", label: "Professionals" },
{ value: 88, suffix: "%", label: "Satisfaction" },
{ value: 10, suffix: "+", label: "Countries" },
{ value: 7, suffix: "Years", label: "Experience" },
];

const SuccessRate = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const updated = stats.map((stat) => Math.floor(stat.value * progress));
      setCounts(updated);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <section ref={sectionRef} className="lg:py-12 py-10 bg-white text-center">
      <div className="container">
          {/* Heading */}
          <h2 className="text-sm uppercase tracking-wider text-slate-500">
            Join Thousands of Learners and Become a{" "}
            <span className="text-primary font-semibold">Certified Yoga Professionals</span>
          </h2>
          {/* Stats Grid */}
          <div className="grid mt-6 grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
            {stats.map((item, index) => (
              <div key={index} className="px-4 bg-green-200 rounded-xl p-6 hover:bg-blue-200 transition-all duration-300">
           <h3 className="sm:text-3xl text-xl lg:text-2xl font-extrabold text-gray-900">
            {(counts[index] ?? 0).toLocaleString()}
            <span className="text-primary">{item.suffix}</span>
          </h3>
                <p className="text-gray-500 text-sm sm:mt-2 mt-1 max-w-[200px] mx-auto">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default SuccessRate;
