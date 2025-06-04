import type { Metadata } from 'next';

export const layoutMetadata: Metadata = {
  title: {
    default: 'Hypnotherapy in Chorley | Laurence Halpin',
    template: '%s | Hypnotherapy in Chorley | Laurence Halpin'
  },
  description:
    'Laurence Halpin is a qualified hypnotherapist based in Chorley, offering compassionate, effective hypnotherapy services for anxiety, stress, weight loss, and more.',
  keywords: [
    'hypnotherapy Chorley',
    'Laurence Halpin',
    'Chorley hypnotherapist',
    'anxiety hypnotherapy',
    'smoking cessation Chorley',
    'stress management',
    'hypnosis therapy Chorley',
    'wellbeing',
    'mental health support'
  ],
  authors: [{ name: 'Laurence Halpin' }],
  creator: 'Laurence Halpin',
  publisher: 'Laurence Halpin Hypnotherapy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://www.lhhypnotherapy.co.uk/'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Hypnotherapy in Chorley | Laurence Halpin',
    description:
      'Looking for hypnotherapy in Chorley? Laurence Halpin offers personalised sessions to help with anxiety, weight loss, smoking cessation and more.',
    url: 'https://www.lhhypnotherapy.co.uk/',
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
      'max-video-preview': -1,
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
