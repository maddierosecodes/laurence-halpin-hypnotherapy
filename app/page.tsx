import { HomeHero } from "@/components/organisms/HomeHero";
import { CTAsection } from "@/components/organisms/CTAsection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hypnotherapy in Chorley | Home",
  description:
    "Professional hypnotherapy in Chorley by Laurence Halpin. Helping people overcome anxiety, manage stress, and build lasting confidence through evidence-based hypnosis.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hypnotherapy in Chorley | Laurence Halpin",
    description:
      "Discover personalised hypnotherapy services in Chorley with Laurence Halpin. Specialising in anxiety, smoking cessation, and stress management.",
    url: "https://www.lhhypnotherapy.co.uk/",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />;
      <CTAsection />
    </>
  );
}
