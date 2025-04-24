import {
  TextAtomProps,
  sizeStyles,
  colourStyles,
  weightStyles,
  variantStyles,
} from "../../types/TextAtom.types";

export const Title = ({
  children,
  size = "md",
  smSize,
  mdSize,
  lgSize,
  colour,
  weight = "medium",
  variant = "default",
}: TextAtomProps) => {
  const baseStyles = "leading-tight font-primary";
  const sizeStyle = sizeStyles[size];
  const smSizeStyle = smSize ? `sm:${sizeStyles[smSize]}` : "";
  const mdSizeStyle = mdSize ? `md:${sizeStyles[mdSize]}` : "";
  const lgSizeStyle = lgSize ? `lg:${sizeStyles[lgSize]}` : "";
  const colourStyle = colour ? colourStyles[colour] : "sage";
  const weightStyle = weightStyles[weight];
  const variantStyle = variantStyles[variant];

  return (
    <h1
      className={`${baseStyles} ${sizeStyle} ${smSizeStyle} ${mdSizeStyle} ${lgSizeStyle} ${colourStyle} ${weightStyle} ${variantStyle}`}
    >
      {children}
    </h1>
  );
};
