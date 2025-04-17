import { Metadata } from "next";
import AboutLaurence from "@/components/organisms/AboutLaurence";
import AboutHypnotherapy from "@/components/organisms/AboutHypnotherapy";
import Testimonials from "@/components/organisms/Testimonials";
import Articles from "@/components/organisms/Articles";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Laurence Halpin, a professional hypnotherapist dedicated to helping clients achieve positive change through evidence-based techniques.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Laurence Halpin Hypnotherapy",
    description:
      "Learn about Laurence Halpin, a professional hypnotherapist dedicated to helping clients achieve positive change through evidence-based techniques.",
    url: "https://laurencehalpinhypnotherapy.com/about",
  },
};

export default function About() {
  return (
    <main className="mt-10" role="main">
      <AboutLaurence />
      <AboutHypnotherapy />
      <Testimonials />
      <Articles />
    </main>
  );
}
