import {
  TextAtomProps,
  sizeStyles,
  colourStyles,
  weightStyles,
  variantStyles,
} from "../../types/TextAtom.types";

export const BodyText = ({
  children,
  size = "md",
  colour,
  weight = "normal",
  variant = "default",
}: TextAtomProps) => {
  const baseStyles = "leading-relaxed font-main";
  const sizeStyle = sizeStyles[size];
  const colourStyle = colour ? colourStyles[colour] : "ink";
  const weightStyle = weightStyles[weight];
  const variantStyle = variantStyles[variant];

  return (
    <p
      className={`${baseStyles} ${sizeStyle} ${colourStyle} ${weightStyle} ${variantStyle}`}
    >
      {children}
    </p>
  );
};
