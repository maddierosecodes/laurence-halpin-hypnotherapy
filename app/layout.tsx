import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Laurence Halpin Hypnotherapy",
  description: "Professional hypnotherapy services by Laurence Halpin",
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
        <main className="flex-grow bg-forest">{children}</main>
        <Footer
          companyName="maddierosecodes"
          privacyPolicyUrl="/privacy-policy"
        />
      </body>
    </html>
  );
}
