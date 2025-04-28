import React from "react";
import { Title } from "../atoms/Title";
import Image from "next/image";
import recoveryRoadImage from "@/public/images/recovery_road.jpg";
import { BodyText } from "../atoms/BodyText";
import healthyEatingImage from "@/public/images/healthy_eating.jpg";
import stressImage from "@/public/images/stress.jpg";
import anxietyImage from "@/public/images/anxiety.jpg";
import depressionImage from "@/public/images/depression.jpg";

export default function Hypnotherapy() {
  return (
    <section
      id="solution-focused-hypnotherapy"
      className="flex flex-col justify-center items-center gap-3 mx-auto px-2 max-w-7xl mb-8"
      aria-labelledby="solution-focused-hypnotherapy-heading"
    >
      <div className="relative w-full mx-auto">
        <Image
          src={recoveryRoadImage}
          alt="Recovery Road"
          className="w-full object-cover aspect-4/1 rounded-xl"
        />
        <div className="absolute top-[10%] right-1/4 text-center w-full px-4">
          <Title size="4xl" colour="sage" weight="bold">
            Solution Focused Hypnotherapy <br />
            Services
          </Title>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 justify-center items-start mt-2">
        {/* Gallery Section */}
        <div className="grid grid-cols-2 gap-6 gap-y-9 w-full max-w-xl mx-auto md:mx-0 pl-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={healthyEatingImage}
              alt="Healthy Eating"
              className="rounded-xl object-cover w-full h-52"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-10/12 flex items-center justify-center">
              <Image
                src={stressImage}
                alt="Stress"
                className="rounded-xl object-cover w-full h-40"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-10/12 flex items-center justify-center">
              <Image
                src={anxietyImage}
                alt="Anxiety"
                className="rounded-xl object-cover w-full h-40"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={depressionImage}
              alt="Depression"
              className="rounded-xl object-cover w-full h-52"
            />
          </div>
        </div>
        {/* Text Box Section */}
        <div
          className="w-full md:w-1/2 bg-sage-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center mx-auto"
          role="article"
          aria-label="Explanation of hypnosis"
        >
          <BodyText variant="dark-bg" size="lg" colour="cream">
            If you&apos;re struggling with{" "}
            <span className="highlight-mint-dark">
              anxiety, stress, low mood, sleep issues, confidence
            </span>
            , or other emotional or behavioural challenges, I offer a{" "}
            <span className="highlight-sage-dark">
              supportive, practical approach
            </span>{" "}
            to help you move forward. <br />
            Each session combines{" "}
            <span className="highlight-text-dark">
              therapeutic conversation
            </span>{" "}
            with <span className="highlight-text-dark">guided relaxation</span>{" "}
            to reduce overwhelm and help you refocus. Together, we
            <span className="emphasis-text-dark">
              {" "}
              identify your strengths, explore what you want life to look like,
              and build the steps to get there
            </span>{" "}
            — gently, safely, and at your pace. <br />
            I&apos;ve worked in mental health for{" "}
            <span className="highlight-mint-dark">over 36 years</span>, and I
            bring that experience to every session. I&apos;ll help you
            understand{" "}
            <span className="highlight-sage-dark">how your brain works</span>,{" "}
            <span className="highlight-sage-dark">
              how your thoughts influence your feelings
            </span>
            , and how
            <span className="emphasis-text-dark">
              {" "}
              small, positive changes can add up to something bigger
            </span>
            . <br />
            Sessions are held{" "}
            <span className="highlight-text-dark">online or in person</span>,
            depending on what suits you best.{" "}
            <span className="highlight-mint-dark">Get in touch</span> for an
            initial consultation to see if this feels like the right fit for
            you.
          </BodyText>
        </div>
      </div>
    </section>
  );
}
