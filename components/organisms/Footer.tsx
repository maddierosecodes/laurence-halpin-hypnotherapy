import { Copyright } from "../atoms/Copyright";
import { NavLink } from "../atoms/NavLink";

interface FooterProps {
  companyName: string;
  privacyPolicyUrl: string;
  isSticky?: boolean;
}

export const Footer = ({
  companyName,
  privacyPolicyUrl,
  isSticky = false,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-sage shadow-sm ${isSticky ? "mt-auto" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Copyright year={currentYear} companyName={companyName} />
          <NavLink href={privacyPolicyUrl}>Privacy Policy</NavLink>
        </div>
      </div>
    </footer>
  );
};
