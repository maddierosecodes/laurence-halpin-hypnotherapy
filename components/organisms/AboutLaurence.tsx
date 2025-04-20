import React from "react";
import Image from "next/image";
import nchLogo from "@/public/images/nch.png";
import mafsfhLogo from "@/public/images/afsfh.png";
import cnhcLogo from "@/public/images/cnhc.png";
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
      icon: <FcDiploma2 className="text-8xl" />,
    },
    {
      title: "Hypnotherapy in Practice Diploma (HPD)",
      icon: <FcDiploma1 className="text-8xl" />,
    },
    {
      title: "Member of National Council for Hypnotherapy (NCH Reg)",
      icon: (
        <Image
          src={nchLogo}
          alt="National Council for Hypnotherapy"
          width={120}
          height={120}
          className="object-contain"
        />
      ),
    },
    {
      title: "CBT certification",
      icon: <FaBrain className="text-8xl" />,
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
          className="object-contain"
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
          className="object-contain"
        />
      ),
    },
  ];

  const heroText = (
    <div className="flex flex-col items-center lg:items-start">
      <span className="text-4xl">
        <Title>Laurence Halpin</Title>
      </span>
      <span className="text-xl">
        <Subtitle>Solutions Focussed Hypnotherapist</Subtitle>
      </span>
      <span className="max-w-3xl text-center lg:text-left my-8">
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
    <div className="w-full max-w-md mx-auto">
      <ProfileImage
        src="/images/laurence_halpin.png"
        alt="Laurence Halpin"
        shape="circle"
        containerClassName="bg-ink-400 p-4"
      />
    </div>
  );

  return (
    <section
      id="about-laurence"
      className="mt-10 flex flex-col items-center justify-center px-4"
      aria-labelledby="about-laurence-heading"
    >
      <Hero
        imageComponent={heroImage}
        textComponent={heroText}
        imagePosition="left"
      />
      <div className="w-full mt-12">
        <span className="text-2xl text-center mb-6 block">
          <Subtitle>Training, Qualifications & Memberships</Subtitle>
        </span>
        <CardDisplay cards={qualificationsAndMemberships} />
      </div>
    </section>
  );
}
