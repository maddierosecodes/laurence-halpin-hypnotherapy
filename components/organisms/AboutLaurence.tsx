import React from "react";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";
import { ProfileImage } from "../atoms/ProfileImage";
import Link from "next/link";
import Script from "next/script";

export default function AboutLaurence() {
  const heroText = (
    <div
      className="flex flex-col items-center text-center xl:pr-10"
      role="article"
      aria-label="About Laurence Halpin"
    >
      <Title size="4xl" colour="sage" weight="bold">
        Laurence Halpin
      </Title>

      <Subtitle size="xl" colour="mint" weight="medium">
        Solution Focussed Hypnotherapist
      </Subtitle>

      <span className="max-w-3xl my-4 sm:my-8 text-base sm:text-lg text-ink-500">
        <BodyText size="lg" variant="light-bg">
          Hi - I&apos;m Laurence. I have{" "}
          <strong className="highlight-text">over 30 years experience</strong>{" "}
          supporting people with their mental health as a{" "}
          <strong className="highlight-sage">
            Registered Mental Health Nurse with the NHS
          </strong>
          . <br />I trained in{" "}
          <strong className="highlight-mint">
            Solution Focused Hypnotherapy
          </strong>{" "}
          because I believe that it is effective in finding the solutions to
          overcome the difficulties we face. <br />
          Whether you&apos;re struggling with{" "}
          <em className="emphasis-text">
            anxiety, stress, low mood, panic attacks, OCD
          </em>{" "}
          or something else, I&apos;m here to help you take positive, manageable
          steps towards a solution that works for you. <br />I also offer{" "}
          <strong className="highlight-text">specialist sessions</strong> for{" "}
          <em className="emphasis-text">
            stopping smoking, and overcoming phobias
          </em>
          . <br />
          <Link
            className="text-forest-800 hover:text-forest-900 underline focus:outline-none focus:ring-2 focus:ring-forest-800 focus:ring-offset-2 transition-colors duration-300"
            href="/contact"
            aria-label="Contact Laurence to start your hypnotherapy journey"
          >
            Get in touch today
          </Link>{" "}
          and we can take the first step together to the future you&apos;ve been
          envisioning
        </BodyText>
      </span>
    </div>
  );

  const heroImage = (
    <div
      className="w-full max-w-[280px] sm:max-w-md mx-auto aspect-square"
      role="img"
      aria-label="Laurence Halpin's profile image"
    >
      <ProfileImage
        src="/images/laurence_alt.jpg"
        alt="Laurence Halpin, a professional hypnotherapist based in Chorley"
        shape="circle"
      />
    </div>
  );

  return (
    <>
      <Script
        id="laurence-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Laurence Halpin",
            jobTitle: "Solution Focused Hypnotherapist",
            description:
              "Professional hypnotherapist with over 30 years of mental health experience, specialising in solution-focused hypnotherapy for anxiety, stress, and more.",
            image:
              "https://laurencehalpinhypnotherapy.com/images/laurence_alt.jpg",
            url: "https://laurencehalpinhypnotherapy.com/about",
            sameAs: [
              "https://www.facebook.com/laurencehalpinhypnotherapy",
              "https://www.linkedin.com/in/laurence-halpin",
            ],
            knowsAbout: [
              "Solution Focused Hypnotherapy",
              "Mental Health",
              "Anxiety Treatment",
              "Stress Management",
              "Stop Smoking",
              "Phobia Treatment",
            ],
            hasCredential: [
              "Diploma in Solution Focused Hypnotherapy (DSFH)",
              "Hypnotherapy in Practice Diploma (HPD)",
              "Registered Mental Health Nurse",
            ],
          }),
        }}
      />
      <section
        id="about-laurence"
        className="mt-4 sm:mt-15 flex flex-col items-center justify-center px-4"
        aria-labelledby="about-laurence-heading"
      >
        <h2 id="about-laurence-heading" className="sr-only">
          About Laurence Halpin
        </h2>
        <Hero
          imageComponent={heroImage}
          textComponent={heroText}
          imagePosition="left"
        />
      </section>
    </>
  );
}
