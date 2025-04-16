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
        id="hypnotherapy"
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="hypnotherapy-heading"
      >
        <h1 id="hypnotherapy-heading" className="text-4xl font-bold">
          Hypnotherapy
        </h1>
      </section>

      <section
        id="stop-smoking"
        className="min-h-screen flex items-center justify-center bg-gray-50"
        aria-labelledby="stop-smoking-heading"
      >
        <h2 id="stop-smoking-heading" className="text-4xl font-bold">
          Stop Smoking
        </h2>
      </section>

      <section
        id="overcome-phobias"
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="overcome-phobias-heading"
      >
        <h2 id="overcome-phobias-heading" className="text-4xl font-bold">
          Overcome Phobias
        </h2>
      </section>

      <section
        id="pricing"
        className="min-h-screen flex items-center justify-center bg-gray-50"
        aria-labelledby="pricing-heading"
      >
        <h2 id="pricing-heading" className="text-4xl font-bold">
          Pricing
        </h2>
      </section>
    </main>
  );
}
