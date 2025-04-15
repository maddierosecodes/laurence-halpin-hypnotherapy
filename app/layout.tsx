import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: {
    default: "Laurence Halpin Hypnotherapy",
    template: "%s | Laurence Halpin Hypnotherapy",
  },
  description:
    "Professional hypnotherapy services by Laurence Halpin, helping you achieve positive change through evidence-based hypnotherapy techniques.",
  keywords: [
    "hypnotherapy",
    "Laurence Halpin",
    "therapy",
    "mental health",
    "wellbeing",
    "positive change",
  ],
  authors: [{ name: "Laurence Halpin" }],
  creator: "Laurence Halpin",
  publisher: "Laurence Halpin Hypnotherapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://laurencehalpinhypnotherapy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Laurence Halpin Hypnotherapy",
    description:
      "Professional hypnotherapy services by Laurence Halpin, helping you achieve positive change through evidence-based hypnotherapy techniques.",
    url: "https://laurencehalpinhypnotherapy.com",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main
          className="flex-grow bg-forest pt-20"
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
