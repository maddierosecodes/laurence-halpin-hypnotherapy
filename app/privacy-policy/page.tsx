import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Laurence Halpin Hypnotherapy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Laurence Halpin Hypnotherapy",
    description:
      "Privacy policy for Laurence Halpin Hypnotherapy. Learn how we collect, use, and protect your personal information.",
    url: "https://laurencehalpinhypnotherapy.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex items-center justify-center" role="main">
      <section aria-labelledby="privacy-policy-heading">
        <h1 id="privacy-policy-heading" className="text-4xl font-bold">
          Privacy Policy
        </h1>
      </section>
    </main>
  );
}
