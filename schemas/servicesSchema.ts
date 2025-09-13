export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Professional Hypnotherapy Services | Laurence Halpin Hypnotherapy Chorley',
  description:
    'Expert hypnotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused approach with proven results.',
  url: 'https://www.lhhypnotherapy.co.uk/services',
  inLanguage: 'en-GB',
  publisher: {
    '@type': 'Organization',
    name: 'Laurence Halpin Hypnotherapy',
    url: 'https://www.lhhypnotherapy.co.uk'
  },
  hasPart: [
    {
      '@type': 'Service',
      name: 'Solution Focused Hypnotherapy',
      description:
        'Support for anxiety, stress, low mood, sleep issues, confidence and emotional or behavioural challenges, online or in person.',
      areaServed: 'Chorley, Lancashire, UK',
      provider: {
        '@type': 'Person',
        name: 'Laurence Halpin'
      },
      offers: {
        '@type': 'Offer',
        price: '65.00',
        priceCurrency: 'GBP',
        url: 'https://www.lhhypnotherapy.co.uk/services#solution-focused-hypnotherapy'
      }
    },
    {
      '@type': 'Service',
      name: 'Stop Smoking Session',
      description:
        'Single, focused hypnotherapy session to help you stop smoking.',
      areaServed: 'Chorley, Lancashire, UK',
      provider: {
        '@type': 'Person',
        name: 'Laurence Halpin'
      },
      offers: {
        '@type': 'Offer',
        price: '120.00',
        priceCurrency: 'GBP',
        url: 'https://www.lhhypnotherapy.co.uk/services#stop-smoking'
      }
    },
    {
      '@type': 'Service',
      name: 'Phobia Package',
      description:
        'Structured four-session programme using hypnotherapy and relaxation to overcome specific phobias.',
      areaServed: 'Chorley, Lancashire, UK',
      provider: {
        '@type': 'Person',
        name: 'Laurence Halpin'
      },
      offers: {
        '@type': 'Offer',
        price: '225.00',
        priceCurrency: 'GBP',
        url: 'https://www.lhhypnotherapy.co.uk/services#overcome-phobias'
      }
    },
    {
      '@type': 'Service',
      name: 'Initial Consultation',
      description:
        'A relaxed 30–45 minute session to explore how hypnotherapy can help you. Includes a free relaxation MP3.',
      areaServed: 'Chorley, Lancashire, UK',
      provider: {
        '@type': 'Person',
        name: 'Laurence Halpin'
      },
      offers: {
        '@type': 'Offer',
        price: '30.00',
        priceCurrency: 'GBP',
        url: 'https://www.lhhypnotherapy.co.uk/services#sessions-and-fees'
      }
    }
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 7837 356217',
    email: 'laurence@lhhypnotherapy.co.uk',
    contactType: 'customer support',
    areaServed: 'GB',
    availableLanguage: ['English']
  }
};
