import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <p className={` font-normal leading-normal font-secondary`}>{children}</p>
  );
};
