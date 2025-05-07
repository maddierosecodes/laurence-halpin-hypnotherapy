import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Laurence Halpin | Professional Hypnotherapy in Chorley",
  description:
    "Get in touch with Laurence Halpin for professional hypnotherapy services in Chorley. Book a consultation or ask questions about how solution-focused hypnotherapy can help you achieve positive change.",
  alternates: {
    canonical: "/contact",
  },
  metadataBase: new URL("https://www.lhhypnotherapy.co.uk"),
  openGraph: {
    title: "Contact Laurence Halpin | Professional Hypnotherapy in Chorley",
    description:
      "Get in touch with Laurence Halpin for professional hypnotherapy services in Chorley. Book a consultation or ask questions about how solution-focused hypnotherapy can help you achieve positive change.",
    url: "https://www.lhhypnotherapy.co.uk/contact",
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
  category: "Contact",
};

export default function Contact() {
  return (
    <main className="mt-10 flex items-center justify-center" role="main">
      <section aria-labelledby="contact-heading">
        <h1 id="contact-heading" className="text-4xl font-bold">
          Contact
        </h1>
      </section>
    </main>
  );
}
