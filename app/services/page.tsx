import { Metadata } from "next";

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
    <main className="min-h-screen" role="main">
      <section
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="services-heading"
      >
        <h1 id="services-heading" className="text-4xl font-bold">
          Services
        </h1>
      </section>

      <section
        id="hypnotherapy"
        className="min-h-screen flex items-center justify-center bg-gray-50"
        aria-labelledby="hypnotherapy-heading"
      >
        <h2 id="hypnotherapy-heading" className="text-4xl font-bold">
          Hypnotherapy
        </h2>
      </section>

      <section
        id="pricing"
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="pricing-heading"
      >
        <h2 id="pricing-heading" className="text-4xl font-bold">
          Pricing
        </h2>
      </section>
    </main>
  );
}
