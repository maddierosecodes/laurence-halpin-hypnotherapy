import { HomeHero } from "@/components/organisms/HomeHero";
import { CTAsection } from "@/components/organisms/CTAsection";
import { Metadata } from "next";
import Script from "next/script";

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
              ],
              opens: "09:00",
              closes: "17:00",
            },
            priceRange: "££",
            image: "https://www.lhhypnotherapy.co.uk/images/laurence_alt.jpg",
          }),
        }}
      />
      <HomeHero />
      <CTAsection />
    </>
  );
}
