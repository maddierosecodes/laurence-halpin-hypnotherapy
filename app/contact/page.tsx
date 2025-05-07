import { Metadata } from "next";
import { ContactForm } from "@/components/organisms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Laurence Halpin | Professional Hypnotherapy in Chorley",
  description:
    "Get in touch with Laurence Halpin for professional hypnotherapy services in Chorley. Book a consultation or ask questions about how solution-focused hypnotherapy can help you achieve positive change.",
  keywords: [
    "contact hypnotherapist",
    "book hypnotherapy session",
    "Chorley hypnotherapy consultation",
    "solution focused hypnotherapy booking",
    "hypnotherapy appointment",
    "mental health consultation",
    "Lancashire hypnotherapist contact",
    "professional hypnotherapy consultation",
    "hypnotherapy enquiry",
    "contact Laurence Halpin",
  ],
  alternates: {
    canonical: "/contact",
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
    title: "Contact Laurence Halpin | Professional Hypnotherapy in Chorley",
    description:
      "Get in touch with Laurence Halpin for professional hypnotherapy services in Chorley. Book a consultation or ask questions about how solution-focused hypnotherapy can help you achieve positive change.",
    url: "https://www.lhhypnotherapy.co.uk/contact",
    siteName: "Laurence Halpin Hypnotherapy",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Laurence Halpin | Professional Hypnotherapy in Chorley",
    description:
      "Get in touch with Laurence Halpin for professional hypnotherapy services in Chorley. Book a consultation or ask questions about how solution-focused hypnotherapy can help you achieve positive change.",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  authors: [{ name: "Laurence Halpin" }],
  creator: "Laurence Halpin",
  publisher: "Laurence Halpin Hypnotherapy",
  category: "Contact",
  classification: "Professional Services",
};

export default function Contact() {
  return (
    <main
      className="flex items-center justify-center px-4 py-8 pt-16"
      role="main"
      aria-label="Contact Laurence Halpin Hypnotherapy"
    >
      <ContactForm />
    </main>
  );
}
