import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Navigation } from "../molecules/Navigation";
import { BurgerMenu } from "../atoms/BurgerMenu";
import Link from "next/link";

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
    <header className=" py-4 fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
            <Link
              href="/"
              className="flex flex-col items-center lg:items-start"
              aria-label="Laurence Halpin Hypnotherapist - Home"
            >
              <span className="text-4xl text-sage-800">
                <Title>Laurence Halpin</Title>
              </span>
              <span className="text-xl text-mint-800">
                <Subtitle>Hypnotherapist</Subtitle>
              </span>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Navigation links={navigationLinks} />
            <div className="lg:hidden">
              <BurgerMenu links={navigationLinks} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
