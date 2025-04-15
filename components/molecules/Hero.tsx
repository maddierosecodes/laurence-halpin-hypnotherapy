import { ReactNode } from "react";

interface HeroProps {
  imageComponent: ReactNode;
  textComponent: ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
}

export const Hero = ({
  imageComponent,
  textComponent,
  imagePosition = "right",
  className = "",
}: HeroProps) => {
  const contentArray = [
    <div key="text" className="flex-1">
      {textComponent}
    </div>,
    <div key="image" className="flex-1">
      {imageComponent}
    </div>,
  ];

  return (
    <div className={`flex items-start py-16 ${className}`}>
      <div className="max-w-7xl mx-auto flex items-start gap-24 px-4 align-middle">
        {imagePosition === "right" ? contentArray : contentArray.reverse()}
      </div>
    </div>
  );
};
