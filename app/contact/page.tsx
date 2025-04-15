import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Laurence Halpin for professional hypnotherapy services. Book a consultation or ask questions about how hypnotherapy can help you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Laurence Halpin Hypnotherapy",
    description:
      "Get in touch with Laurence Halpin for professional hypnotherapy services. Book a consultation or ask questions about how hypnotherapy can help you.",
    url: "https://laurencehalpinhypnotherapy.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center" role="main">
      <section aria-labelledby="contact-heading">
        <h1 id="contact-heading" className="text-4xl font-bold">
          Contact
        </h1>
      </section>
    </main>
  );
}
