import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Navigation } from "../molecules/Navigation";

const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <nav className="bg-red-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl">
              <Title>Laurence Halpin</Title>
            </div>
            <div className="text-lg">
              <Subtitle>Hypnotherapist</Subtitle>
            </div>
          </div>
          <Navigation links={navigationLinks} />
        </div>
      </div>
    </nav>
  );
};
