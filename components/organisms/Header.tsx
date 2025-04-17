import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Navigation } from "../molecules/Navigation";
import { BurgerMenu } from "../atoms/BurgerMenu";
import { CTALink } from "../atoms/CTALink";
import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about#about-laurence",
    label: "About",
    dropdownItems: [
      { href: "/about#about-laurence", label: "About Laurence" },
      { href: "/about#about-hypnotherapy", label: "About Hypnotherapy" },
      { href: "/about#testimonials", label: "Testimonials" },
      { href: "/about#articles", label: "Articles" },
    ],
  },
  {
    href: "/services#hypnotherapy",
    label: "Services",
    dropdownItems: [
      { href: "/services#hypnotherapy", label: "Hypnotherapy" },
      { href: "/services#stop-smoking", label: "Stop Smoking" },
      { href: "/services#overcome-phobias", label: "Overcome Phobias" },
      { href: "/services#pricing", label: "Pricing" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header
      className=" py-4 fixed top-0 left-0 right-0 z-50 bg-mint-100"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            <Link
              href="/"
              className="flex flex-col items-start"
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
          <div className="flex flex-col items-end gap-2">
            <div className="hidden lg:flex gap-8 mb-1 self-center">
              <CTALink href="/about#testimonials">⭐ Testimonials</CTALink>
              <CTALink href="/contact">📩 Get in touch</CTALink>
            </div>
            <div className="flex justify-end">
              <Navigation links={navigationLinks} />
              <div className="lg:hidden">
                <BurgerMenu links={navigationLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
