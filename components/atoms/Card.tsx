import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
}

export default function Card({ title, icon }: CardProps) {
  return (
    <div className="bg-[var(--color-cream)] p-4 rounded-lg shadow-sm border border-[var(--color-sage-200)] transition-transform hover:translate-y-[-2px]">
      <h3 className="text-[var(--color-forest)] text-lg font-semibold mb-2 font-primary">
        {title}
      </h3>
      <div className="flex justify-center items-center text-[var(--color-sage)]">
        {icon}
      </div>
    </div>
  );
}
