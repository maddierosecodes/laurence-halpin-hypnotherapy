import type { Metadata } from 'next';

export const homeMetadata: Metadata = {
  title: 'Professional Hypnotherapy in Chorley | Laurence Halpin',
  description:
    'Professional hypnotherapy in Chorley by Laurence Halpin. Expert help with anxiety, stress management, smoking cessation, and phobias through evidence-based solution-focused hypnotherapy.',
  keywords: [
    'hypnotherapy Chorley',
    'Laurence Halpin',
    'Chorley hypnotherapist',
    'anxiety hypnotherapy',
    'smoking cessation Chorley',
    'stress management',
    'hypnosis therapy Chorley',
    'phobia hypnotherapy',
    'solution focused hypnotherapy',
    'mental health support'
  ],
  authors: [{ name: 'Laurence Halpin' }],
  creator: 'Laurence Halpin',
  publisher: 'Laurence Halpin Hypnotherapy',
  category: 'Health & Wellness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://www.lhhypnotherapy.co.uk'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Professional Hypnotherapy in Chorley | Laurence Halpin',
    description:
      'Professional hypnotherapy in Chorley by Laurence Halpin. Expert help with anxiety, stress management, smoking cessation, and phobias through evidence-based solution-focused hypnotherapy.',
    url: 'https://www.lhhypnotherapy.co.uk',
    siteName: 'Laurence Halpin Hypnotherapy',
    locale: 'en_GB',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'oKmXLh-ZVcwOu-v0PF2H4Wywv_a7hVhr_0yAXzYK8YE',
    yandex: '217f5263941d04e5',
    yahoo: '36A38F3B1433AFE3F225780EF078B034'
  }
};
