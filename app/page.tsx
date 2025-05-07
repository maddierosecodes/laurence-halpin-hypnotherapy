import { HomeHero } from "@/components/organisms/HomeHero";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Professional Hypnotherapy in Chorley | Laurence Halpin",
  description:
    "Professional hypnotherapy in Chorley by Laurence Halpin. Expert help with anxiety, stress management, smoking cessation, and phobias through evidence-based solution-focused hypnotherapy.",
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://www.lhhypnotherapy.co.uk"),
  openGraph: {
    title: "Professional Hypnotherapy in Chorley | Laurence Halpin",
    description:
      "Professional hypnotherapy in Chorley by Laurence Halpin. Expert help with anxiety, stress management, smoking cessation, and phobias through evidence-based solution-focused hypnotherapy.",
    url: "https://www.lhhypnotherapy.co.uk",
    siteName: "Laurence Halpin Hypnotherapy",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Laurence Halpin" }],
  creator: "Laurence Halpin",
  publisher: "Laurence Halpin Hypnotherapy",
  category: "Health & Wellness",
};

export default function Home() {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Laurence Halpin Hypnotherapy",
            description:
              "Professional hypnotherapy services in Chorley, Lancashire, specialising in solution-focused hypnotherapy for anxiety, stress, phobias, and more.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chorley",
              addressRegion: "Lancashire",
              addressCountry: "GB",
              postalCode: "PR7",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 53.6532,
              longitude: -2.6329,
            },
            telephone: "+44 1234 567890",
            email: "laurence@lhhypnotherapy.co.uk",
            url: "https://www.lhhypnotherapy.co.uk",
            sameAs: [
              "https://www.facebook.com/laurencehalpinhypnotherapy",
              "https://www.linkedin.com/in/laurence-halpin",
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "20:00",
            },
            priceRange: "££",
            image: "https://www.lhhypnotherapy.co.uk/images/laurence_alt.jpg",
            founder: {
              "@type": "Person",
              name: "Laurence Halpin",
              jobTitle: "Professional Hypnotherapist",
              description:
                "Professional hypnotherapist with over 36 years of mental health experience",
            },
          }),
        }}
      />
      <HomeHero />
    </>
  );
}
