import { ReactNode } from "react";

interface BodyTextProps {
  children: ReactNode;
  className?: string;
}

export const BodyText = ({ children, className = "" }: BodyTextProps) => {
  return (
    <p
      className={`text-[#2F4F4F] font-normal leading-relaxed font-main ${className}`}
    >
      {children}
    </p>
  );
};
