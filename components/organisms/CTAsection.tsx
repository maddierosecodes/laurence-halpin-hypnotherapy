import Link from "next/link";

export const CTAsection = () => {
  return (
    <section className="flex flex-col sm:flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start gap-4 mb-2 px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl">
      <Link
        href="/about#about-hypnotherapy"
        className="bg-cream hover:bg-sage-200 text-center text-forest-500 border border-4 border-mint-500 font-main text-md font-main font-bold px-6 py-3 rounded-full shadow-sm transition hover:scale-105"
      >
        What can hypnotherapy <br /> do for you?
      </Link>
      <Link
        href="/contact"
        className="bg-cream hover:bg-sage-200 text-center text-forest-500 border-4 border-mint-500 font-main text-md font-main font-bold px-6 py-3 rounded-full shadow-sm transition hover:scale-105"
      >
        Arrange a <br /> consultation
      </Link>
    </section>
  );
};
