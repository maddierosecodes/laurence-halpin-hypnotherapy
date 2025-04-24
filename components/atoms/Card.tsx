import React, { ReactNode } from "react";
import { Title } from "./Title";

interface CardProps {
  title: string;
  icon: ReactNode;
}

export default function Card({ title, icon }: CardProps) {
  return (
    <div
      className="bg-mint-300 border-2 border-sage-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all 
                 flex flex-col items-center justify-center text-center hover:bg-mint-100 
                 hover:-translate-y-1 duration-300"
    >
      <div className="text-sage-600 mb-2">{icon}</div>

      <Title size="md" colour="forest" weight="medium">
        {title}
      </Title>
    </div>
  );
}
