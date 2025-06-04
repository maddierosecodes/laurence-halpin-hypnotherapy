export const privacyPolicySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description:
    'Privacy policy for Laurence Halpin Hypnotherapy, explaining how we collect, use, and protect your personal information.',
  url: 'https://www.lhhypnotherapy.co.uk/privacy-policy',
  inLanguage: 'en-GB',
  publisher: {
    '@type': 'Organization',
    name: 'Laurence Halpin Hypnotherapy',
    url: 'https://www.lhhypnotherapy.co.uk'
  },
  datePublished: '2024-01-01',
  dateModified: '2024-03-20',
  mainEntity: {
    '@type': 'Article',
    headline: 'Privacy Policy',
    about: ['GDPR', 'data protection', 'privacy', 'personal data', 'UK law'],
    author: {
      '@type': 'Person',
      name: 'Laurence Halpin',
      email: 'laurence@lhhypnotherapy.co.uk'
    },
    datePublished: '2024-01-01',
    dateModified: '2024-03-20'
  }
};
