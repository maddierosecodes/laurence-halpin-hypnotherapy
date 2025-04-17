import { Metadata } from "next";
import Hypnotherapy from "@/components/organisms/Hypnotherapy";
import StopSmoking from "@/components/organisms/StopSmoking";
import OvercomePhobias from "@/components/organisms/OvercomePhobias";
import Pricing from "@/components/organisms/Pricing";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our professional hypnotherapy services. We offer evidence-based techniques to help you achieve positive change in your life.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Laurence Halpin Hypnotherapy",
    description:
      "Explore our professional hypnotherapy services. We offer evidence-based techniques to help you achieve positive change in your life.",
    url: "https://laurencehalpinhypnotherapy.com/services",
  },
};

export default function Services() {
  return (
    <main className="mt-10" role="main">
      <Hypnotherapy />
      <StopSmoking />
      <OvercomePhobias />
      <Pricing />
    </main>
  );
}
