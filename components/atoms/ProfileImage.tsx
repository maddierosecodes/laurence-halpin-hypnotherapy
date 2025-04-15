import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  shape?: "circle" | "square" | "rounded";
  className?: string;
}

export const ProfileImage = ({
  src,
  alt,
  shape = "square",
  className = "",
}: ProfileImageProps) => {
  const shapeClasses = {
    circle: "rounded-full",
    square: "",
    rounded: "rounded-lg",
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${shapeClasses[shape]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={576}
        height={576}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
};
