import React, { ReactNode } from "react";
import { Title } from "./Title";

interface CardProps {
  title: string;
  icon: ReactNode;
}

export default function Card({ title, icon }: CardProps) {
  return (
    <div className="bg-mint-400 p-4 sm:p-6 rounded-lg shadow-sm border-4 border-sage-800 transition-transform hover:translate-y-[-4px] hover:scale-105 text-center h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-between gap-4 sm:gap-6">
        <span className="text-base sm:text-xl font-semibold">
          <Title>{title}</Title>
        </span>
        <div className="flex justify-center items-center">{icon}</div>
      </div>
    </div>
  );
}
