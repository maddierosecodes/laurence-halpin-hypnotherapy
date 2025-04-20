import { Copyright } from "../atoms/Copyright";
import { NavLink } from "../atoms/NavLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-forest shadow-sm`} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav
          className="flex justify-between items-center text-cream-100"
          aria-label="Footer navigation"
        >
          <section className="hover:text-mint-500" aria-label="Site credit">
            <NavLink href="https://maddierosecodes.com" target="_blank">
              <i>Website by</i> maddierosecodes
            </NavLink>
          </section>
          <Copyright year={currentYear} companyName={"Halpin Therapies Ltd"} />
          <section className="hover:text-mint-500" aria-label="Legal links">
            <NavLink href={"/privacy-policy"}>Privacy Policy</NavLink>
          </section>
        </nav>
      </div>
    </footer>
  );
};
