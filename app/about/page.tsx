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
        id="about-laurence"
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="about-laurence-heading"
      >
        <h1 id="about-laurence-heading" className="text-4xl font-bold">
          About Laurence
        </h1>
      </section>

      <section
        id="about-hypnotherapy"
        className="min-h-screen flex items-center justify-center "
        aria-labelledby="about-hypnotherapy-heading"
      >
        <h2 id="about-hypnotherapy-heading" className="text-4xl font-bold">
          About Hypnotherapy
        </h2>
      </section>

      <section
        id="testimonials"
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="testimonials-heading"
      >
        <h2 id="testimonials-heading" className="text-4xl font-bold">
          Testimonials
        </h2>
      </section>

      <section
        id="articles"
        className="min-h-screen flex items-center justify-center "
        aria-labelledby="articles-heading"
      >
        <h2 id="articles-heading" className="text-4xl font-bold">
          Articles
        </h2>
      </section>
    </main>
  );
}
