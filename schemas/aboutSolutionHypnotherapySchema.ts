export const aboutSolutionHypnotherapySchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: 'Solution Focused Hypnotherapy',
  description:
    'A forward-looking approach to therapy that helps individuals imagine and work towards their desired future through goal-oriented questions and positive suggestion.',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Mental Health'
  },
  relevantSpecialty: [
    'Anxiety Treatment',
    'Stress Management',
    'Phobia Treatment',
    'Stop Smoking',
    'Mental Health'
  ],
  recognizingAuthority: [
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
