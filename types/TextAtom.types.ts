export type TextSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl";

export type TextColour = "ink" | "forest" | "sage" | "mint" | "cream";
export type TextWeight = "normal" | "medium" | "bold" | "semibold";
export type TextVariant = "default" | "dark-bg" | "light-bg";

export interface TextAtomProps {
  children: React.ReactNode;
  size?: TextSize;
  smSize?: TextSize;
  mdSize?: TextSize;
  lgSize?: TextSize;
  colour?: TextColour;
  weight?: TextWeight;
  variant?: TextVariant;
}

export const sizeStyles: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
};

export const colourStyles: Record<TextColour, string> = {
  ink: "text-ink-400",
  forest: "text-forest-500",
  sage: "text-sage-600",
  mint: "text-mint-800",
  cream: "text-cream-50",
};

export const weightStyles: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
  semibold: "font-semibold",
};

export const variantStyles: Record<TextVariant, string> = {
  default: "",
  "dark-bg": "text-cream-50",
  "light-bg": "text-ink-400",
};
