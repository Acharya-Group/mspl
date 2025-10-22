"use client";
import React from "react";

interface ParaProps {
  content: string;
  className?: string; 
}

const Para: React.FC<ParaProps> = ({ content, className }) => {
  return <p className={`text-[15px] ${className || ""}`}>{content}</p>;
};

export default Para;
