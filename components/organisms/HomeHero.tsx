"use client";

import { ProfileImage } from "../atoms/ProfileImage";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";
import { useEffect, useState } from "react";
import BlobSvg from "@/public/svg/blob.svg";

export const HomeHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const textContent = (
    <section
      className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left"
      aria-label="Introduction"
    >
      <header className="flex flex-col gap-2">
        <span className="text-5xl lg:text-8xl text-sage-700">
          <Title>
            Laurence
            <br />
            Halpin
          </Title>
        </span>
        <span className="text-2xl lg:text-3xl text-mint-700">
          <Subtitle>Solutions Focused Hypnotherapy</Subtitle>
        </span>
      </header>
      <span className="text-xl lg:text-2xl text-ink-400">
        <BodyText>
          Helping you overcome anxiety, manage stress, <br />
          and build lasting confidence through evidence-based hypnotherapy
        </BodyText>
      </span>
    </section>
  );

  const imageContent = (
    <div className="relative w-full h-full overflow-visible">
      <div className="absolute inset-0 overflow-visible">
        <BlobSvg className="w-full h-full overflow-visible" />
      </div>
      <figure
        className="w-64 h-64 lg:w-[32rem] lg:h-[32rem] relative z-10"
        aria-label="Profile image"
      >
        <ProfileImage
          src="/images/laurence_halpin.png"
          alt="Laurence Halpin, hypnotherapist based in Chorley"
          shape="circle"
          containerClassName="bg-transparent"
        />
      </figure>
    </div>
  );

  return (
    <Hero
      textComponent={textContent}
      imageComponent={imageContent}
      imagePosition={isMobile ? "left" : "right"}
      className="pt-28 lg:pt-32"
    />
  );
};
