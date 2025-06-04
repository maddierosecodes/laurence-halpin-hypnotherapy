export const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Laurence Halpin | Professional Hypnotherapy in Chorley',
  description:
    'Get in touch with Laurence Halpin for professional hypnotherapy services in Chorley. Book a consultation or ask questions about how solution-focused hypnotherapy can help you achieve positive change.',
  url: 'https://www.lhhypnotherapy.co.uk/contact',
  publisher: {
    '@type': 'Organization',
    name: 'Laurence Halpin Hypnotherapy',
    url: 'https://www.lhhypnotherapy.co.uk'
  },
  mainEntity: {
    '@type': 'ContactPoint',
    telephone: '+44 7951 652175',
    email: 'laurence@lhhypnotherapy.co.uk',
    contactType: 'customer support',
    areaServed: 'GB',
    availableLanguage: ['English'],
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday'],
        opens: '10:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '15:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '10:00',
        closes: '20:00'
      }
    ]
  }
};
