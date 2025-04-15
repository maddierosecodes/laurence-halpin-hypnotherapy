import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Navigation } from "../molecules/Navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    dropdownItems: [
      { href: "/about#testimonials", label: "Testimonials" },
      { href: "/about#articles", label: "Articles" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    dropdownItems: [
      { href: "/services#hypnotherapy", label: "Hypnotherapy" },
      { href: "/services#pricing", label: "Pricing" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <nav className="bg-sage py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl text-mint">
              <Title>Laurence Halpin</Title>
            </div>
            <div className="text-lg text-forest">
              <Subtitle>Hypnotherapist</Subtitle>
            </div>
          </div>
          <Navigation links={navigationLinks} />
        </div>
      </div>
    </nav>
  );
};
