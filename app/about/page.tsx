import { Metadata } from "next";
import AboutLaurence from "@/components/organisms/AboutLaurence";
import AboutHypnotherapy from "@/components/organisms/AboutHypnotherapy";
import SolutionsHypnotherapyList from "@/components/organisms/SolutionsHypnotherapyList";
import Qualifications from "@/components/organisms/Qualifications";
import SectionWrapper from "@/components/atoms/SectionWrapper";
// import Testimonials from "@/components/organisms/Testimonials";
// import Articles from "@/components/organisms/Articles";

export const metadata: Metadata = {
  title: "About Laurence Halpin | Professional Hypnotherapist in Chorley",
  description:
    "Meet Laurence Halpin, a professional hypnotherapist with over 30 years of mental health experience. Specialising in solution-focused hypnotherapy for anxiety, stress, phobias, and more in Chorley and surrounding areas. Discover how his unique approach combining NHS experience with modern hypnotherapy techniques can help you achieve lasting positive change.",
  keywords: [
    "Laurence Halpin",
    "hypnotherapist",
    "Chorley",
    "solution focused hypnotherapy",
    "anxiety treatment",
    "stress management",
    "mental health",
    "NHS nurse",
    "professional hypnotherapy",
    "stop smoking",
    "phobia treatment",
    "Lancashire hypnotherapist",
    "solution focused therapy",
    "mental health support",
    "hypnotherapy near me",
  ],
  alternates: {
    canonical: "/about",
  },
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
    title: "About Laurence Halpin | Professional Hypnotherapist in Chorley",
    description:
      "Meet Laurence Halpin, a professional hypnotherapist with over 30 years of mental health experience. Specialising in solution-focused hypnotherapy for anxiety, stress, phobias, and more in Chorley and surrounding areas. Discover how his unique approach combining NHS experience with modern hypnotherapy techniques can help you achieve lasting positive change.",
    url: "https://laurencehalpinhypnotherapy.com/about",
    siteName: "Laurence Halpin Hypnotherapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://laurencehalpinhypnotherapy.com/images/laurence_alt.jpg",
        width: 1200,
        height: 630,
        alt: "Laurence Halpin, professional hypnotherapist based in Chorley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Laurence Halpin | Professional Hypnotherapist in Chorley",
    description:
      "Meet Laurence Halpin, a professional hypnotherapist with over 30 years of mental health experience. Specialising in solution-focused hypnotherapy for anxiety, stress, phobias, and more in Chorley and surrounding areas. Discover how his unique approach combining NHS experience with modern hypnotherapy techniques can help you achieve lasting positive change.",
    images: ["https://laurencehalpinhypnotherapy.com/images/laurence_alt.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Health & Wellness",
  classification: "Professional Services",
};

export default function About() {
  return (
    <main
      className="mt-10"
      role="main"
      aria-label="About Laurence Halpin Hypnotherapy"
    >
      <SectionWrapper>
        <AboutLaurence />
      </SectionWrapper>

      <SectionWrapper>
        <Qualifications />
      </SectionWrapper>

      <SectionWrapper>
        <AboutHypnotherapy />
      </SectionWrapper>

      <SectionWrapper>
        <SolutionsHypnotherapyList />
      </SectionWrapper>
    </main>
  );
}
