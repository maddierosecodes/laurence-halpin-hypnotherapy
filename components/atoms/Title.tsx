import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h1
      className={`text-[#2F4F4F] font-medium leading-tight font-primary ${className}`}
    >
      {children}
    </h1>
  );
};
