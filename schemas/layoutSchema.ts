export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hypnotherapist',
  name: 'Laurence Halpin Hypnotherapy',
  url: 'https://www.lhhypnotherapy.co.uk/',
  logo: 'https://www.lhhypnotherapy.co.uk/images/logo.png',
  image: 'https://www.lhhypnotherapy.co.uk/images/laurence_halpin.jpg',
  description:
    'Laurence Halpin is a qualified hypnotherapist based in Chorley, offering compassionate, effective hypnotherapy services for anxiety, stress, weight loss, and more.',
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
  telephone: '+44 7837 356217',
  email: 'laurence@lhhypnotherapy.co.uk',
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
  ],
  sameAs: [
    'https://www.facebook.com/lhhypnotherapy.co.uk/',
    'https://www.hypnotherapists.org.uk/therapist-finder/view/plid/9740/',
    'https://www.hypnotherapy-directory.org.uk/hypnotherapists/laurence-halpin'
  ],
  priceRange: '££'
};
