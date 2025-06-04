import { treatmentAreas } from '@/components/utils/data/info';

export const solutionHypnotherapyListSchema = {
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Laurence Halpin Solution Focussed Hypnotherapy',
    description:
      'Professional solution focussed hypnotherapy services offering treatment for various conditions including anxiety, stress, phobias, and more.',
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Mental Health'
    },
    availableService: treatmentAreas.map((area) => ({
      '@type': 'MedicalTherapy',
      name: area.name,
      description: `Professional solution focussed hypnotherapy for ${area.name.toLowerCase()}`
    }))
  })
};
