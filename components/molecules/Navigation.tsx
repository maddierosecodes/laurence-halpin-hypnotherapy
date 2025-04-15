import { NavLink } from "../atoms/NavLink";
import { DropdownMenu } from "../atoms/DropdownMenu";

interface NavigationLink {
  href: string;
  label: string;
  dropdownItems?: { href: string; label: string }[];
}

interface NavigationProps {
  links: NavigationLink[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <ul className="flex items-center space-x-6" role="list">
      {links.map((link) => (
        <li
          key={link.href}
          className="rounded-sm px-2 text-mint-200 hover:text-ink-400 hover:bg-ink-50"
        >
          {link.dropdownItems ? (
            <DropdownMenu
              label={link.label}
              items={link.dropdownItems}
              href={link.href}
            />
          ) : (
            <NavLink href={link.href}>{link.label}</NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};
