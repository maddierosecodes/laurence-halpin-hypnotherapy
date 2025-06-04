import AboutLaurence from '@/components/organisms/AboutLaurence';
import AboutSolutionHypnotherapy from '@/components/organisms/AboutSolutionHypnotherapy';
import SolutionHypnotherapyList from '@/components/organisms/SolutionHypnotherapyList';
import Qualifications from '@/components/organisms/Qualifications';
import SectionWrapper from '@/components/atoms/SectionWrapper';
// import Testimonials from "@/components/organisms/Testimonials";
// import Articles from "@/components/organisms/Articles";

export default function About() {
  return (
    <main
      className="mt-10"
      role="main"
      aria-label="About Laurence Halpin Hypnotherapy">
      <SectionWrapper>
        <AboutLaurence />
      </SectionWrapper>

      <SectionWrapper>
        <Qualifications />
      </SectionWrapper>

      <SectionWrapper>
        <AboutSolutionHypnotherapy />
      </SectionWrapper>

      <SectionWrapper>
        <SolutionHypnotherapyList />
      </SectionWrapper>

      {/* <SectionWrapper>
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper>
        <Articles />
      </SectionWrapper> */}
    </main>
  );
}
