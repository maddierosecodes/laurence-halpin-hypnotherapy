import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Hypnotherapy Services in Chorley | Laurence Halpin',
  description:
    'Expert hypnotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused, evidence-based approach with proven results from an experienced NHS practitioner.',
  keywords: [
    'hypnotherapy services',
    'Chorley hypnotherapist',
    'stop smoking hypnotherapy',
    'phobia treatment',
    'anxiety hypnotherapy',
    'stress relief',
    'Laurence Halpin',
    'NHS mental health experience',
    'solution focused therapy',
    'therapy sessions pricing'
  ],
  alternates: { canonical: '/services' },
  metadataBase: new URL('https://www.lhhypnotherapy.co.uk'),
  openGraph: {
    title: 'Professional Hypnotherapy Services in Chorley | Laurence Halpin',
    description:
      'Expert hypnotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief.',
    url: 'https://www.lhhypnotherapy.co.uk/services',
    siteName: 'Laurence Halpin Hypnotherapy',
    locale: 'en_GB',
    type: 'website'
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'Laurence Halpin' }],
  creator: 'Laurence Halpin',
  publisher: 'Laurence Halpin Hypnotherapy',
  category: 'Health & Wellness'
};
