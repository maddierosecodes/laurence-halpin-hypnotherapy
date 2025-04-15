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
    <nav className="bg-sage py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <div className="text-3xl text-mint">
              <Title>Laurence Halpin</Title>
            </div>
            <div className="text-lg text-forest">
              <Subtitle>Hypnotherapist</Subtitle>
            </div>
          </Link>
          <Navigation links={navigationLinks} />
        </div>
      </div>
    </nav>
  );
};
