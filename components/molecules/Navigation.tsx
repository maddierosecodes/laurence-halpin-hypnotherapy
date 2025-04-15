import { NavLink } from "../atoms/NavLink";

interface NavigationLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavigationLink[];
  className?: string;
}

export const Navigation = ({ links, className = "" }: NavigationProps) => {
  return (
    <div className={`flex space-x-12 items-center ${className}`}>
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
