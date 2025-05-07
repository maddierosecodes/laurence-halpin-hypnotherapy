import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-block font-main text-md font-bold rounded-full shadow-sm transition hover:scale-105 leading-tight break-words transition-transform duration-150 ease-in-out";

  const variantStyles = {
    primary:
      "bg-cream hover:bg-sage-200 text-forest-500 border-4 border-mint-500",
    secondary:
      "bg-forest-500 hover:bg-forest-600 text-cream-50 border-4 border-mint-300",
  };

  const sizeStyles = {
    small: "px-4 py-1.5",
    medium: "px-6 py-2",
    large: "px-8 py-2.5",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
