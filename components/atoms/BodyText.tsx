import { ReactNode } from "react";

interface BodyTextProps {
  children: ReactNode;
}

export const BodyText = ({ children }: BodyTextProps) => {
  return (
    <p className={` font-normal leading-relaxed font-main `}>{children}</p>
  );
};
