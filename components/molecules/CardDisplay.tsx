import React, { ReactNode } from "react";
import Card from "../atoms/Card";

interface CardItem {
  title: string;
  icon: ReactNode;
}

interface CardDisplayProps {
  cards: CardItem[];
}

export default function CardDisplay({ cards }: CardDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto auto-rows-fr">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} icon={card.icon} />
      ))}
    </div>
  );
}
