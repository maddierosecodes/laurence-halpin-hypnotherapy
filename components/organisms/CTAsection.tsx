import { CTALink } from "../atoms/CTALink";

export const CTAsection = () => {
  return (
    <section className="flex flex-col sm:flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start gap-4 mb-2 px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl">
      <CTALink href="/about#about-hypnotherapy">
        What can hypnotherapy <br /> do for you?
      </CTALink>
      <CTALink href="/contact">
        Arrange a <br /> consultation
      </CTALink>
    </section>
  );
};
