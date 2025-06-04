import SolutionHypnotherapy from '@/components/organisms/SolutionHypnotherapy';
import StopSmoking from '@/components/organisms/StopSmoking';
import OvercomePhobias from '@/components/organisms/OvercomePhobias';
import SessionsAndFees from '@/components/organisms/SessionsAndFees';
import SectionWrapper from '@/components/atoms/SectionWrapper';
import Script from 'next/script';
import { servicesSchema } from '@/schemas/servicesSchema';

export default function Services() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
      <main role="main" className="mt-10" aria-label="Hypnotherapy Services">
        <SectionWrapper>
          <SolutionHypnotherapy />
        </SectionWrapper>
        <SectionWrapper>
          <StopSmoking />
        </SectionWrapper>
        <SectionWrapper>
          <OvercomePhobias />
        </SectionWrapper>
        <SectionWrapper>
          <SessionsAndFees />
        </SectionWrapper>
      </main>
    </>
  );
}
