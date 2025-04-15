import { Metadata } from "next";

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
    <main className="min-h-screen" role="main">
      <section
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="about-heading"
      >
        <h1 id="about-heading" className="text-4xl font-bold">
          About
        </h1>
      </section>

      <section
        id="testimonials"
        className="min-h-screen flex items-center justify-center bg-gray-50"
        aria-labelledby="testimonials-heading"
      >
        <h2 id="testimonials-heading" className="text-4xl font-bold">
          Testimonials
        </h2>
      </section>

      <section
        id="articles"
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="articles-heading"
      >
        <h2 id="articles-heading" className="text-4xl font-bold">
          Articles
        </h2>
      </section>
    </main>
  );
}
