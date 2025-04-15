import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  shape?: "circle" | "square" | "rounded";
  width?: number;
  height?: number;
  containerClassName?: string;
}

export const ProfileImage = ({
  src,
  alt,
  shape = "square",
  width = 576,
  height = 576,
  containerClassName = "",
}: ProfileImageProps) => {
  const shapeClasses = {
    circle: "rounded-full",
    square: "",
    rounded: "rounded-lg",
  };

  return (
    <div
      className={`relative overflow-hidden ${shapeClasses[shape]} ${containerClassName}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
};
