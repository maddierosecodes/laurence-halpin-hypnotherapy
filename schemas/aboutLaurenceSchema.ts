export const aboutLaurenceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Laurence Halpin',
  jobTitle: 'Solution Focused Hypnotherapist',
  description:
    'Professional hypnotherapist with over 30 years of mental health experience, specialising in solution-focused hypnotherapy for anxiety, stress, and more.',
  image: 'https://www.lhhypnotherapy.co.uk/images/laurence_alt.jpg',
  url: 'https://www.lhhypnotherapy.co.uk/about',
  sameAs: [
    'https://www.facebook.com/lhhypnotherapy.co.uk/',
    'https://www.hypnotherapists.org.uk/therapist-finder/view/plid/9740/',
    'https://www.hypnotherapy-directory.org.uk/hypnotherapists/laurence-halpin'
  ],
  knowsAbout: [
    'Solution Focused Hypnotherapy',
    'Mental Health',
    'Anxiety Treatment',
    'Stress Management',
    'Stop Smoking',
    'Phobia Treatment'
  ],
  hasCredential: [
    'Diploma in Solution Focused Hypnotherapy (DSFH)',
    'Hypnotherapy in Practice Diploma (HPD)',
    'Registered Mental Health Nurse',
    'CBT certification'
  ],
  memberOf: [
    {
      '@type': 'Organization',
      name: 'National Council for Hypnotherapy',
      url: 'https://www.hypnotherapists.org.uk/'
    },
    {
      '@type': 'Organization',
      name: 'Association for Solution Focused Hypnotherapy',
      url: 'https://www.afsfh.com/'
    },
    {
      '@type': 'Organization',
      name: 'Complementary & Natural Healthcare Council',
      url: 'https://www.cnhc.org.uk/'
    }
  ]
};
