import React from "react";
import Image from "next/image";
import nchLogo from "@/public/images/NCH.png";
import mafsfhLogo from "@/public/images/AfSFH.png";
import cnhcLogo from "@/public/images/CNHC.jpeg";
import { FcDiploma1, FcDiploma2 } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import CardDisplay from "../molecules/CardDisplay";
import { Title } from "../atoms/Title";

export default function Qualifications() {
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

  return (
    <section
      id="qualifications"
      className=" flex flex-col items-center justify-center px-4 pb-6 sm:pb-10 mt-5"
      aria-labelledby="qualifications-heading"
    >
      <div className="flex flex-col w-full text-center mb-4 sm:mb-6 block gap-6">
        <Title size="3xl" colour="forest" weight="bold">
          Training, Qualifications & Memberships
        </Title>

        <CardDisplay cards={qualificationsAndMemberships} />
      </div>
    </section>
  );
}
