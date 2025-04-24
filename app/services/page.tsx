import { Metadata } from "next";
import SolutionHypnotherapy from "@/components/organisms/SolutionHypnotherapy";
import StopSmoking from "@/components/organisms/StopSmoking";
import OvercomePhobias from "@/components/organisms/OvercomePhobias";
import Pricing from "@/components/organisms/Pricing";
import SectionWrapper from "@/components/atoms/SectionWrapper";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our professional solution focussed hypnotherapy services. We offer evidence-based techniques to help you achieve positive change in your life.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Laurence Halpin Solution Focussed Hypnotherapy",
    description:
      "Explore our professional solution focussed hypnotherapy services. We offer evidence-based techniques to help you achieve positive change in your life.",
    url: "https://laurencehalpinhypnotherapy.com/services",
  },
};

export default function Services() {
  return (
    <main className="mt-10" role="main">
      <SectionWrapper>
        <SolutionHypnotherapy />
      </SectionWrapper>
      <SectionWrapper>
        <StopSmoking />
      </SectionWrapper>
      <SectionWrapper>
        <OvercomePhobias />
      </SectionWrapper>
      <SectionWrapper>
        <Pricing />
      </SectionWrapper>
    </main>
  );
}
