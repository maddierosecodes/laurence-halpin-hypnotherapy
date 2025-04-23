import React from "react";
import Image from "next/image";
import { BodyText } from "../atoms/BodyText";
import { Title } from "../atoms/Title";

export default function AboutHypnotherapy() {
  return (
    <section
      id="about-hypnotherapy"
      className="pt-8"
      aria-labelledby="about-hypnotherapy-heading"
    >
      <div className="container mx-auto px-4">
        <span className="text-3xl font-bold text-forest-500 text-center mb-8 font-primary">
          <Title>Solution Focused Hypnotherapy</Title>
        </span>

        <div className="relative mb-12 max-w-5xl mx-auto mt-5">
          <span className="block aspect-[16/12] sm:aspect-[21/8] w-full relative rounded-2xl overflow-hidden">
            <Image
              src="/images/growth_plant.jpg"
              alt="Growth and transformation symbolized by a plant"
              fill
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center p-4 sm:p-0 sm:inset-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2 sm:max-w-md bg-sage-700/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl w-full sm:m-0">
              <span className="text-cream-50 text-sm sm:text-base md:text-xl block">
                <BodyText>
                  <strong className="highlight-text-dark">
                    Solution Focused Hypnotherapy
                  </strong>{" "}
                  is a forward-looking approach. Rather than dwelling on the
                  past, it encourages you to
                  <em className="emphasis-text-dark">
                    {" "}
                    imagine the future you want
                  </em>
                  , then helps you take steps to get there. The therapist will
                  ask{" "}
                  <strong className="highlight-mint-dark">
                    powerful, goal-oriented questions
                  </strong>{" "}
                  like: &ldquo;
                  <em className="emphasis-text-dark">
                    What would be different if things got better?
                  </em>
                  &rdquo; or &ldquo;
                  <em className="emphasis-text-dark">
                    How would you know things had changed?
                  </em>
                  &rdquo;
                </BodyText>
              </span>
            </span>
          </span>
        </div>

        <div className="relative mb-12 max-w-5xl mx-auto">
          <span className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start justify-center">
            <span className="w-full lg:w-[400px] aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/butterfly_brain.jpg"
                alt="Butterfly brain transformation concept"
                fill
                className="object-cover"
              />
            </span>
            <span className="w-full lg:w-[550px] bg-sage-700/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl text-cream-50 text-sm sm:text-base md:text-xl">
              <BodyText>
                <strong className="highlight-text-dark">
                  Hypnosis helps calm the mind and body
                </strong>
                , easing anxiety through
                <strong className="highlight-mint-dark">
                  {" "}
                  relaxation and visualisation
                </strong>
                . In this natural,
                <em className="emphasis-text-dark"> trance-like state</em>, your
                brain becomes more open to positive suggestion, making it easier
                to shift perspective. You remain{" "}
                <strong className="highlight-text-dark">
                  fully aware and in control
                </strong>
                , but deeply relaxed. This state supports{" "}
                <strong className="highlight-mint-dark">
                  focus on the positives
                </strong>{" "}
                in your life and unlocks inner resources, encouraging
                <em className="emphasis-text-dark">
                  {" "}
                  clarity, confidence, and lasting change
                </em>
                .
              </BodyText>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
