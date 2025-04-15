import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className={`font-medium leading-tight font-primary`}>{children}</h1>
  );
};
