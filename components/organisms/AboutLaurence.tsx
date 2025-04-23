import React from "react";
import Image from "next/image";
import nchLogo from "@/public/images/NCH.png";
import mafsfhLogo from "@/public/images/AfSFH.png";
import cnhcLogo from "@/public/images/CNHC.jpeg";
import { FcDiploma1, FcDiploma2 } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import CardDisplay from "../molecules/CardDisplay";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";
import { ProfileImage } from "../atoms/ProfileImage";

export default function AboutLaurence() {
  const qualificationsAndMemberships = [
    {
      title: "Diploma in Solution Focused Hypnotherapy (DSFH)",
      icon: <FcDiploma2 className="text-6xl sm:text-8xl" />,
    },
    {
      title: "Hypnotherapy in Practice Diploma (HPD)",
      icon: <FcDiploma1 className="text-6xl sm:text-8xl" />,
    },
    {
      title: "Member of National Council for Hypnotherapy (NCH Reg)",
      icon: (
        <Image
          src={nchLogo}
          alt="National Council for Hypnotherapy"
          width={120}
          height={120}
          className="object-contain w-16 h-16 sm:w-[120px] sm:h-[120px]"
        />
      ),
    },
    {
      title: "CBT certification",
      icon: <FaBrain className="text-6xl sm:text-8xl" />,
    },
    {
      title:
        "Member of the Association for Solution Focused Hypnotherapy (MAfSFH)",
      icon: (
        <Image
          src={mafsfhLogo}
          alt="Association for Solution Focused Hypnotherapy"
          width={120}
          height={120}
          className="object-contain w-16 h-16 sm:w-[120px] sm:h-[120px]"
        />
      ),
    },
    {
      title:
        "Registered with the Complementary & Natural Healthcare Council (CNHC)",
      icon: (
        <Image
          src={cnhcLogo}
          alt="Complementary & Natural Healthcare Council"
          width={120}
          height={120}
          className="object-contain w-16 h-16 sm:w-[120px] sm:h-[120px]"
        />
      ),
    },
  ];

  const heroText = (
    <div className="flex flex-col items-center lg:items-start">
      <span className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left">
        <Title>Laurence Halpin</Title>
      </span>
      <span className="text-lg sm:text-xl text-center lg:text-left">
        <Subtitle>Solutions Focussed Hypnotherapist</Subtitle>
      </span>
      <span className="max-w-3xl text-center lg:text-left my-4 sm:my-8 text-base sm:text-lg">
        <BodyText>
          Hi, I&apos;m Laurence, a calm, compassionate therapist with over 30
          years experience supporting people with their mental health as a
          Registered Mental Health Nurse with the NHS. I trained in Solution
          Focused Hypnotherapy because I believe that it is effective in finding
          the solutions to overcome the difficulties we face. <br />
          Whether you&apos;re struggling with anxiety, stress, low mood, panic
          attacks, OCD or something else, I&apos;m here to help you take
          positive, manageable steps towards a solution that works for you.{" "}
          <br />
          I also offer specialist sessions for stopping smoking, and overcoming
          phobias. <br />
          Solution Focused Hypnotherapy doesn&apos;t dwell on the past. Instead,
          we work together to define your preferred future, helping you focus on
          what is possible. Backed by the latest neuroscience, I utilise
          hypnosis to develop a relaxed state of mind in order to promote better
          communication between the subconscious and conscious mind, paving the
          way to a solution that works for you.
        </BodyText>
      </span>
    </div>
  );

  const heroImage = (
    <div className="w-full max-w-[280px] sm:max-w-md mx-auto">
      <ProfileImage
        src="/images/laurence_halpin.png"
        alt="Laurence Halpin"
        shape="circle"
        containerClassName="p-4"
      />
    </div>
  );

  return (
    <section
      id="about-laurence"
      className="mt-4 sm:mt-10 flex flex-col items-center justify-center px-4 pb-6 sm:pb-10"
      aria-labelledby="about-laurence-heading"
    >
      <Hero
        imageComponent={heroImage}
        textComponent={heroText}
        imagePosition="left"
      />
      <div className="w-full mt-8 sm:mt-12">
        <span className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 block">
          <Subtitle>Training, Qualifications & Memberships</Subtitle>
        </span>
        <CardDisplay cards={qualificationsAndMemberships} />
      </div>
    </section>
  );
}
