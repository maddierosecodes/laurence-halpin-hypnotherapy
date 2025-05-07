import { Metadata } from "next";
import SolutionHypnotherapy from "@/components/organisms/SolutionHypnotherapy";
import StopSmoking from "@/components/organisms/StopSmoking";
import OvercomePhobias from "@/components/organisms/OvercomePhobias";
import SessionsAndFees from "@/components/organisms/SessionsAndFees";
import SectionWrapper from "@/components/atoms/SectionWrapper";

export const metadata: Metadata = {
  title:
    "Professional Hypnotherapy Services | Laurence Halpin Hypnotherapy Chorley",
  description:
    "Expert hypnotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused approach with proven results. Flexible sessions available with experienced NHS professional Laurence Halpin.",
  keywords: [
    "hypnotherapy services",
    "stop smoking hypnotherapy",
    "phobia treatment",
    "anxiety management",
    "stress relief",
    "solution focused hypnotherapy",
    "Chorley hypnotherapist",
    "Lancashire hypnotherapy",
    "quit smoking",
    "overcome fears",
    "relaxation therapy",
    "mental wellbeing",
    "professional hypnotherapy",
    "evidence-based hypnosis",
    "affordable hypnotherapy",
  ],
  alternates: {
    canonical: "/services",
  },
  metadataBase: new URL("https://www.lhhypnotherapy.co.uk"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Professional Hypnotherapy Services | Laurence Halpin Hypnotherapy Chorley",
    description:
      "Expert hypnotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused approach with proven results. Flexible sessions available with experienced NHS professional Laurence Halpin.",
    url: "https://www.lhhypnotherapy.co.uk/services",
    siteName: "Laurence Halpin Hypnotherapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.lhhypnotherapy.co.uk/images/recovery_road.jpg",
        width: 1200,
        height: 630,
        alt: "Professional hypnotherapy services in Chorley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Hypnotherapy Services | Laurence Halpin Hypnotherapy Chorley",
    description:
      "Expert hypnotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused approach with proven results. Flexible sessions available with experienced NHS professional Laurence Halpin.",
    images: ["https://www.lhhypnotherapy.co.uk/images/recovery_road.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Health & Wellness",
  classification: "Professional Services",
  authors: [{ name: "Laurence Halpin" }],
  creator: "Laurence Halpin",
  publisher: "Laurence Halpin Hypnotherapy",
};

export default function Services() {
  return (
    <main role="main" className="mt-10" aria-label="Hypnotherapy Services">
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
        <SessionsAndFees />
      </SectionWrapper>
    </main>
  );
}
