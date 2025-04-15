import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`text-[#2F4F4F] hover:text-gray-600 text-lg font-main ${className}`}
    >
      {children}
    </Link>
  );
};
