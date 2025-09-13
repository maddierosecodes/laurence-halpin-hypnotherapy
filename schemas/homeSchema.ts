export const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hypnotherapist',
  name: 'Laurence Halpin Hypnotherapy',
  description:
    'Professional hypnotherapy services in Chorley, Lancashire, specialising in solution-focused hypnotherapy for anxiety, stress, phobias, and more.',
  url: 'https://www.lhhypnotherapy.co.uk',
  image: 'https://www.lhhypnotherapy.co.uk/images/laurence_halpin.jpg',
  logo: 'https://www.lhhypnotherapy.co.uk/images/logo.png',
  email: 'laurence@lhhypnotherapy.co.uk',
  telephone: '+44 7837 356217',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Health at Heart, 7 St. George's St.",
    addressLocality: 'Chorley',
    addressRegion: 'Lancashire',
    postalCode: 'PR7 2AA',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.6515665,
    longitude: -2.6286468
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '10:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Tuesday',
      opens: '15:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '15:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Thursday',
      opens: '15:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '10:00',
      closes: '20:00'
    }
    // Closed on Saturday & Sunday
  ],
  sameAs: [
    'https://www.facebook.com/lhhypnotherapy.co.uk/',
    'https://www.hypnotherapists.org.uk/therapist-finder/view/plid/9740/',
    'https://www.hypnotherapy-directory.org.uk/hypnotherapists/laurence-halpin'
  ],
  priceRange: '££',
  founder: {
    '@type': 'Person',
    name: 'Laurence Halpin',
    jobTitle: 'Professional Hypnotherapist',
    description:
      'Professional hypnotherapist with extensive experience in mental health.'
  }
};
