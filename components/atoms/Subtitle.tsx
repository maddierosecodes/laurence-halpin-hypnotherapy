import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className = "" }: SubtitleProps) => {
  return (
    <p
      className={`text-[#2F4F4F] font-normal leading-normal font-secondary ${className}`}
    >
      {children}
    </p>
  );
};
