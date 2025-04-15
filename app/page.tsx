import { HomeHero } from "@/components/organisms/HomeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Laurence Halpin Hypnotherapy. Professional hypnotherapy services to help you achieve positive change in your life.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Laurence Halpin Hypnotherapy | Home",
    description:
      "Welcome to Laurence Halpin Hypnotherapy. Professional hypnotherapy services to help you achieve positive change in your life.",
    url: "https://laurencehalpinhypnotherapy.com",
  },
};

export default function Home() {
  return <HomeHero />;
}
