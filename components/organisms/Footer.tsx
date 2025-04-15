import { Copyright } from "../atoms/Copyright";
import { NavLink } from "../atoms/NavLink";

interface FooterProps {
  companyName: string;
  privacyPolicyUrl: string;
  className?: string;
}

export const Footer = ({
  companyName,
  privacyPolicyUrl,
  className = "",
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-white shadow-sm mt-auto ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Copyright year={currentYear} companyName={companyName} />
          <NavLink
            href={privacyPolicyUrl}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
