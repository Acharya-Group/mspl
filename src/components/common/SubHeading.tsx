"use client";

import React from "react";
 interface SubHeadingProps {
  content: string;
  className?: string; 
}
const SubHeading: React.FC<SubHeadingProps> = ({ content, className }) => {
  return <h2 className={`text-2xl uppercase lg:text-3xl font-semibold gradientText ${className || ""}`}>{content}</h2>;
};

export default SubHeading;
