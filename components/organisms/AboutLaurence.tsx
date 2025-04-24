import React from "react";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";
import { ProfileImage } from "../atoms/ProfileImage";
import Link from "next/link";
export default function AboutLaurence() {
  const heroText = (
    <div className="flex flex-col items-center text-center xl:pr-10 ">
      <Title size="4xl" colour="sage" weight="bold">
        Laurence Halpin
      </Title>

      <Subtitle size="xl" colour="mint" weight="medium">
        Solutions Focussed Hypnotherapist
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
            className="text-mint-700 hover:text-forest-600 transition-colors duration-300"
            href="/contact"
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
    <div className="w-full max-w-[280px] sm:max-w-md mx-auto aspect-square">
      <ProfileImage
        src="/images/laurence_alt.jpg"
        alt="Laurence Halpin"
        shape="circle"
      />
    </div>
  );

  return (
    <section
      id="about-laurence"
      className="mt-4 sm:mt-15 flex flex-col items-center justify-center px-4"
      aria-labelledby="about-laurence-heading"
    >
      <Hero
        imageComponent={heroImage}
        textComponent={heroText}
        imagePosition="left"
      />
    </section>
  );
}
