"use client";
import React from "react";

interface ParaProps {
  content: string;
  className?: string; 
}

const Para: React.FC<ParaProps> = ({ content, className }) => {
  return <p className={`text-sm sm:text-[15px] opacity-80 ${className || ""}`}>{content}</p>;
};

export default Para;
