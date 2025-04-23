import React, { ReactNode } from "react";
import { Title } from "./Title";

interface CardProps {
  title: string;
  icon: ReactNode;
}

export default function Card({ title, icon }: CardProps) {
  return (
    <div
      className="bg-cream-100 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all 
                 flex flex-col items-center justify-center text-center hover:bg-mint-50 
                 hover:-translate-y-1 duration-300"
    >
      <div className="text-sage-600 mb-2">{icon}</div>
      <span className="text-forest-600 font-secondary text-sm sm:text-base">
        <Title>{title}</Title>
      </span>
    </div>
  );
}
