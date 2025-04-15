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
    <section key="text" className="flex-1" aria-label="Hero text content">
      {textComponent}
    </section>,
    <figure key="image" className="flex-1" aria-label="Hero image">
      {imageComponent}
    </figure>,
  ];

  return (
    <section
      className={`flex items-start py-16 ${className}`}
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto flex items-start gap-24 px-4 align-middle">
        {imagePosition === "right" ? contentArray : contentArray.reverse()}
      </div>
    </section>
  );
};
