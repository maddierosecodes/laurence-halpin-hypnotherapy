import { CTALink } from "../atoms/CTALink";

export const CTAsection = () => {
  return (
    <section className="flex flex-col sm:flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start gap-8 lg:mt-18 max-w-screen-xl">
      <CTALink href="/about#solution-list">
        What can hypnotherapy <br /> do for you?
      </CTALink>
      <CTALink href="/contact">
        Arrange an initial <br /> consultation
      </CTALink>
    </section>
  );
};
