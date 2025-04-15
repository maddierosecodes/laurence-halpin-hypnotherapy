import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
}

export const NavLink = ({ href, children, ariaLabel }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`text-lg font-main text-mint hover:text-ink-400 outline-none focus:ring-2 focus:ring-mint-300 focus:ring-offset-2`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};
