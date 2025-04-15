import { Copyright } from "../atoms/Copyright";
import { NavLink } from "../atoms/NavLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-sage shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center text-mint">
          <Copyright year={currentYear} companyName={"maddierosecodes"} />
          <section className="hover:text-ink-400">
            <NavLink href={"/privacy-policy"}>Privacy Policy</NavLink>
          </section>
        </div>
      </div>
    </footer>
  );
};
