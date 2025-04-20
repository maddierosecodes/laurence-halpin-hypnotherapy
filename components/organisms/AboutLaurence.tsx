import React from "react";
import Image from "next/image";
import nchLogo from "@/public/images/nch.png";
import mafsfhLogo from "@/public/images/afsfh.png";
import cnhcLogo from "@/public/images/cnhc.png";
import { FcDiploma1, FcDiploma2 } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import CardDisplay from "../molecules/CardDisplay";

export default function AboutLaurence() {
  const qualificationsAndMemberships = [
    {
      title: "Diploma in Solution Focused Hypnotherapy (DSFH)",
      icon: <FcDiploma2 className="text-4xl" />,
    },
    {
      title: "Hypnotherapy in Practice Diploma (HPD)",
      icon: <FcDiploma1 className="text-4xl" />,
    },
    {
      title: "Member of National Council for Hypnotherapy (NCH Reg)",
      icon: (
        <Image
          src={nchLogo}
          alt="National Council for Hypnotherapy"
          width={60}
          height={60}
        />
      ),
    },
    {
      title: "CBT cert",
      icon: <FaBrain className="text-4xl" />,
    },
    {
      title:
        "Member of the Association for Solution Focused Hypnotherapy (MAfSFH)",
      icon: (
        <Image
          src={mafsfhLogo}
          alt="Association for Solution Focused Hypnotherapy"
          width={60}
          height={60}
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
          width={60}
          height={60}
        />
      ),
    },
  ];

  return (
    <section
      id="about-laurence"
      className="mt-10 flex flex-col items-center justify-center px-4"
      aria-labelledby="about-laurence-heading"
    >
      <h1 id="about-laurence-heading" className="text-4xl font-bold">
        Laurence Halpin
      </h1>
      <h2>Solutions Focussed Hypnotherapist</h2>
      <p className="max-w-3xl text-center my-8">
        Hi, I&apos;m Laurence, a calm, compassionate therapist with over 30
        years experience supporting people with their mental health as a
        Registered Mental Health Nurse with the NHS. I trained in Solution
        Focused Hypnotherapy because I believe that it is effective in finding
        the solutions to overcome the difficulties we face. <br />
        Whether you&apos;re struggling with anxiety, stress, low mood, panic
        attacks, OCD or something else, I&apos;m here to help you take positive,
        manageable steps towards a solution that works for you. <br />
        I also offer specialist sessions for stopping smoking, and overcoming
        phobias. <br />
        Solution Focused Hypnotherapy doesn&apos;t dwell on the past. Instead,
        we work together to define your preferred future, helping you focus on
        what is possible. Backed by the latest neuroscience, I utilise hypnosis
        to develop a relaxed state of mind in order to promote better
        communication between the subconscious and conscious mind, paving the
        way to a solution that works for you.
      </p>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Training, Qualifications & Memberships
        </h2>
        <CardDisplay cards={qualificationsAndMemberships} />
      </div>
    </section>
  );
}
