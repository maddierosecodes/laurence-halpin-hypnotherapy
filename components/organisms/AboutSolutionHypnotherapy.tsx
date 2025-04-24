import React from "react";
import Image from "next/image";
import { BodyText } from "../atoms/BodyText";
import { Title } from "../atoms/Title";
import Script from "next/script";

export default function AboutHypnotherapy() {
  return (
    <>
      <Script
        id="solution-focused-hypnotherapy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "Solution Focused Hypnotherapy",
            description:
              "A forward-looking approach to therapy that helps individuals imagine and work towards their desired future through goal-oriented questions and positive suggestion.",
            medicalSpecialty: {
              "@type": "MedicalSpecialty",
              name: "Mental Health",
            },
            relevantSpecialty: [
              "Anxiety Treatment",
              "Stress Management",
              "Phobia Treatment",
              "Stop Smoking",
              "Mental Health",
            ],
            recognizingAuthority: [
              "National Council for Hypnotherapy",
              "Association for Solution Focused Hypnotherapy",
              "Complementary & Natural Healthcare Council",
            ],
          }),
        }}
      />
      <section
        id="about-solution-focused-hypnotherapy"
        className="pt-8"
        aria-labelledby="about-solution-focused-hypnotherapy-heading"
      >
        <h2
          id="about-solution-focused-hypnotherapy-heading"
          className="sr-only"
        >
          About Solution Focused Hypnotherapy
        </h2>
        <div className="container mx-auto px-4 mb-8 text-center">
          <Title size="3xl" colour="forest" weight="bold">
            Solution Focused Hypnotherapy
          </Title>

          <div className="relative mb-12 max-w-5xl mx-auto mt-5">
            <div
              className="block aspect-[16/12] sm:aspect-[21/8] w-full relative rounded-2xl overflow-hidden"
              role="img"
              aria-label="Growth and transformation concept"
            >
              <Image
                src="/images/growth_plant.jpg"
                alt="Growth and transformation symbolized by a plant - representing personal development through hypnotherapy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-0 sm:inset-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2 sm:max-w-md bg-sage-900/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl w-full sm:m-0">
                <BodyText variant="dark-bg" size="lg" colour="cream">
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
              </div>
            </div>
          </div>

          <div className="relative mb-12 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start justify-center">
              <div
                className="w-full lg:w-[400px] aspect-[4/3] relative rounded-2xl overflow-hidden"
                role="img"
                aria-label="Brain transformation concept"
              >
                <Image
                  src="/images/butterfly_brain.jpg"
                  alt="Butterfly brain transformation concept - representing the positive changes possible through hypnotherapy"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="w-full lg:w-[550px] bg-sage-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl"
                role="article"
                aria-label="Explanation of hypnosis"
              >
                <BodyText variant="dark-bg" size="lg" colour="cream">
                  <strong className="highlight-text-dark">
                    Hypnosis helps calm the mind and body
                  </strong>
                  , easing anxiety through
                  <strong className="highlight-mint-dark">
                    {" "}
                    relaxation and visualisation
                  </strong>
                  . In this natural,
                  <em className="emphasis-text-dark"> trance-like state</em>,
                  your brain becomes more open to positive suggestion, making it
                  easier to shift perspective. You remain{" "}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
