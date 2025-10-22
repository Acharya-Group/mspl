import React from "react";

export interface ButtonProps {
  content: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ content, className }) => {
  return (
    <button
      className={`gradient-animate px-5 py-[6px] cursor-pointer text-lg font-medium rounded-lg  focus:ring-2 ring-offset-2 ring-primary ${className || ""}`}
    >
      {content}
    </button>
  );
};

export default Button;
