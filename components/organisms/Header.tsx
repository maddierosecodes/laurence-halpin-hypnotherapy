import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Navigation } from "../molecules/Navigation";
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
    <header
      className="bg-forest-800 py-4 fixed top-0 left-0 right-0 z-50"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex flex-col"
            aria-label="Laurence Halpin Hypnotherapist - Home"
          >
            <h1 className="text-3xl text-mint">
              <Title>Laurence Halpin</Title>
            </h1>
            <p className="text-lg text-cream-100">
              <Subtitle>Hypnotherapist</Subtitle>
            </p>
          </Link>
          <Navigation links={navigationLinks} />
        </div>
      </div>
    </header>
  );
};
