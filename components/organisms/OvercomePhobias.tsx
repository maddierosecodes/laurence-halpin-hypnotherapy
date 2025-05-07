import React from "react";
import { Hero } from "../molecules/Hero";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import Image from "next/image";
import calmingOcean from "@/public/images/calming_ocean.jpg";
import { CTALink } from "../atoms/CTALink";

export default function OvercomePhobias() {
  const heroText = (
    <div
      className="flex flex-col xl:pr-10"
      role="article"
      aria-label="About Laurence Halpin"
    >
      <div className="text-center mb-6">
        <Title size="4xl" lgSize="6xl" colour="sage" weight="bold">
          Overcoming Phobias
        </Title>
      </div>
      <div className="text-left">
        <ul
          className="space-y-6"
          role="list"
          aria-label="Phobia treatment process"
        >
          <li>
            <Subtitle size="xl" colour="mint" weight="medium">
              Understanding Your Phobia
            </Subtitle>
            <BodyText size="lg" variant="light-bg">
              We start by exploring how your phobia affects you and the changes
              you want to achieve. You&apos;ll be supported in a calm,
              non-judgemental space.
            </BodyText>
          </li>
          <li>
            <Subtitle size="xl" colour="mint" weight="medium">
              Creating a Calm Foundation
            </Subtitle>
            <BodyText size="lg" variant="light-bg">
              Using solution focused techniques and relaxation methods, we help
              you lower anxiety, preparing your mind for positive change.
            </BodyText>
          </li>
          <li>
            <Subtitle size="xl" colour="mint" weight="medium">
              Building Positive Associations
            </Subtitle>
            <BodyText size="lg" variant="light-bg">
              Through guided hypnosis and visualisation, we shift your focus
              away from fear and towards feelings of confidence and control.
            </BodyText>
          </li>
          <li>
            <Subtitle size="xl" colour="mint" weight="medium">
              Supporting Lasting Change
            </Subtitle>
            <BodyText size="lg" variant="light-bg">
              Across four sessions, we reinforce progress and provide a
              relaxation MP3 for you to use between appointments, supporting
              continued improvement.
            </BodyText>
          </li>
        </ul>
      </div>

      <div className="flex justify-center lg:justify-end mt-8">
        <CTALink href="/contact">
          Book Overcoming Phobias <br />
          Consultation
        </CTALink>
      </div>
    </div>
  );

  const heroImage = (
    <div className="relative w-full h-full">
      <Image
        src={calmingOcean}
        alt="Calm ocean waves for phobia treatment relaxation"
        className="rounded-xl w-full h-full object-cover aspect-[16/9] lg:aspect-[1/1.2]"
      />
      <div
        className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-10 xl:items-start xl:justify-start xl:pt-20"
        role="complementary"
        aria-label="Inspirational quote"
      >
        <div className="w-full lg:w-2/3">
          <blockquote className="leading-relaxed font-main text-2xl sm:text-3xl lg:text-4xl text-cream font-bold">
            &ldquo;Courage doesn&apos;t mean fear disappears — it means choosing
            growth even when fear is present.&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="overcome-phobias"
      className="flex items-center justify-center"
      aria-labelledby="overcome-phobias-heading"
    >
      <Hero
        imageComponent={heroImage}
        textComponent={heroText}
        imagePosition="left"
      />
    </section>
  );
}
