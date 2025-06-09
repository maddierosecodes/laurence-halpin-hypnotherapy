import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { layoutMetadata } from './layout.metadata';
import { localBusinessSchema } from '@/schemas/layoutSchema';
import Script from 'next/script';

export const metadata: Metadata = layoutMetadata;

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
        }}
      />
      <Script
        id="localBusinessSchemaScript"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Header />
          <main
            className="flex-grow bg-mint-100 pt-28 sm:pt-24 lg:pt-20"
            id="main-content"
            tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
