import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Laurence Halpin Hypnotherapy',
  description:
    'Privacy policy for Laurence Halpin Hypnotherapy. Learn how we collect, use, and protect your personal information in accordance with UK GDPR.',
  keywords: [
    'privacy policy',
    'UK GDPR',
    'Laurence Halpin Hypnotherapy',
    'Halpin Therapies Ltd',
    'data protection',
    'ICO registration ZB879212'
  ],
  alternates: { canonical: '/privacy-policy' },
  metadataBase: new URL('https://www.lhhypnotherapy.co.uk'),
  openGraph: {
    title: 'Privacy Policy | Laurence Halpin Hypnotherapy',
    description:
      'Privacy policy for Laurence Halpin Hypnotherapy. Learn how we collect, use, and protect your personal information in accordance with UK GDPR.',
    url: 'https://www.lhhypnotherapy.co.uk/privacy-policy',
    siteName: 'Laurence Halpin Hypnotherapy',
    locale: 'en_GB',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  authors: [{ name: 'Laurence Halpin' }],
  creator: 'Laurence Halpin',
  publisher: 'Laurence Halpin Hypnotherapy',
  category: 'Legal'
};
