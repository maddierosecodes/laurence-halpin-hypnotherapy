import React from "react";
import Image from "next/image";
import {
  FaBrain,
  FaHeartbeat,
  FaSmokingBan,
  FaWeight,
  FaBed,
  FaUserFriends,
  FaRunning,
  FaPills,
} from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import { GiStomach } from "react-icons/gi";
import { TbMoodPlus } from "react-icons/tb";
import { BodyText } from "../atoms/BodyText";

const treatmentAreas = [
  { name: "Stress", icon: <FaHeartbeat className="w-8 h-8" /> },
  { name: "Anxiety", icon: <MdOutlinePsychology className="w-8 h-8" /> },
  { name: "Depression", icon: <TbMoodPlus className="w-8 h-8" /> },
  { name: "Insomnia", icon: <FaBed className="w-8 h-8" /> },
  { name: "Phobias", icon: <FaBrain className="w-8 h-8" /> },
  { name: "Stop Smoking", icon: <FaSmokingBan className="w-8 h-8" /> },
  { name: "Weight Management", icon: <FaWeight className="w-8 h-8" /> },
  { name: "Confidence", icon: <FaUserFriends className="w-8 h-8" /> },
  { name: "OCD", icon: <FaBrain className="w-8 h-8" /> },
  { name: "Irritable Bowel Syndrome", icon: <GiStomach className="w-8 h-8" /> },
  { name: "Dependency", icon: <FaPills className="w-8 h-8" /> },
  { name: "Performance", icon: <FaRunning className="w-8 h-8" /> },
];

export default function AboutHypnotherapy() {
  return (
    <section
      id="about-hypnotherapy"
      className="pt-8 pb-12"
      aria-labelledby="about-hypnotherapy-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="about-hypnotherapy-heading"
          className="text-3xl font-bold text-forest-500 text-center mb-8 font-primary"
        >
          Solution Focused Hypnotherapy
        </h2>

        <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="aspect-[16/12] sm:aspect-[21/8] w-full relative rounded-2xl overflow-hidden">
            <Image
              src="/images/growth_plant.jpg"
              alt="Growth and transformation symbolized by a plant"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-0 sm:inset-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2 sm:max-w-md">
              <div className="bg-sage-700/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl w-full sm:m-0">
                <span className="text-cream-50 text-sm sm:text-base md:text-xl block">
                  <BodyText>
                    Solution Focused Hypnotherapy is a forward-looking approach.
                    Rather than dwelling on the past, it encourages you to
                    imagine the future you want, then helps you take steps to
                    get there. The therapist will ask powerful, goal-oriented
                    questions like: &ldquo;What would be different if things got
                    better?&rdquo; or &ldquo;How would you know things had
                    changed?&rdquo;
                  </BodyText>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start justify-center">
            <div className="w-full lg:w-[400px] aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/butterfly_brain.jpg"
                alt="Butterfly brain transformation concept"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-[550px] bg-sage-700/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl">
              <span className="text-cream-50 text-sm sm:text-base md:text-xl">
                <BodyText>
                  Hypnosis helps calm the mind and body, easing anxiety through
                  relaxation and visualisation. In this natural, trance-like
                  state, your brain becomes more open to positive suggestion,
                  making it easier to shift perspective. You remain fully aware
                  and in control, but deeply relaxed. This state supports focus
                  on the positives in your life and unlocks inner resources,
                  encouraging clarity, confidence, and lasting change.
                </BodyText>
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-forest-500 text-center mb-6 font-primary">
          What Solution Focused Hypnotherapy can help with
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {treatmentAreas.map((area, index) => (
            <div
              key={index}
              className="bg-cream-100 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all 
                       flex flex-col items-center justify-center text-center hover:bg-mint-50 
                       hover:-translate-y-1 duration-300"
            >
              <div className="text-sage-600 mb-2">{area.icon}</div>
              <span className="text-forest-600 font-secondary text-sm sm:text-base">
                {area.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
