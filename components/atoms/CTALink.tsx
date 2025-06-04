import Link from 'next/link';
import { ReactNode } from 'react';

interface CTALinkProps {
  href: string;
  children: ReactNode;
}

export const CTALink = ({ href, children }: CTALinkProps) => {
  return (
    <Link
      href={href}
      className="inline-block bg-cream hover:bg-sage-200 text-center text-forest-500 border-4 border-mint-500 font-main text-md font-bold px-6 py-2 rounded-full shadow-sm transition hover:scale-105 leading-tight break-words duration-150 ease-in-out">
      {children}
    </Link>
  );
};
