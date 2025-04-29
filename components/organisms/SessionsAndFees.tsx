import React from "react";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";
import { Subtitle } from "../atoms/Subtitle";
import Image from "next/image";
import headTendrils from "../../public/images/head_tendrils.jpg";

export default function SessionsAndFees() {
  // Define availability data with checkmarks
  const availabilityData = {
    Mon: { Morning: true, Afternoon: true, Evening: true, Night: false },
    Tue: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Wed: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Thu: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Fri: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Sat: { Morning: true, Afternoon: true, Evening: true, Night: false },
    Sun: { Morning: false, Afternoon: false, Evening: false, Night: false },
  };

  const timeSlots = ["Morning", "Afternoon", "Evening", "Night"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section
      id="sessions-and-fees"
      className="mx-auto max-w-7xl px-4 py-12 xl:border-t-0 border-t border-sage-700"
      aria-labelledby="sessions-and-fees-heading"
    >
      <div className="text-center mb-8">
        <Title size="4xl" smSize="5xl" lgSize="6xl" weight="bold" colour="sage">
          Sessions & Fees
        </Title>
      </div>

      {/* Main container with responsive layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column (3/5 width on desktop) */}
        <div className="lg:w-3/5 space-y-6 order-2 lg:order-1">
          {/* Availability Box */}
          <div className="bg-sage-700 rounded-2xl shadow-xl p-5">
            <Subtitle variant="dark-bg" size="3xl" colour="cream" weight="bold">
              Availability
            </Subtitle>

            <div className="relative">
              <div className="w-full bg-sage-200/20 rounded-xl p-3 mt-3 overflow-x-auto">
                <div className="min-w-[600px] md:min-w-0">
                  <div className="grid grid-cols-8 gap-x-1 gap-y-2 text-cream">
                    {/* Header Row */}
                    <div className="col-span-1"></div>
                    {days.map((day) => (
                      <div
                        key={day}
                        className="col-span-1 text-center font-bold text-sm"
                      >
                        {day}
                      </div>
                    ))}

                    {/* Time Slot Rows */}
                    {timeSlots.map((slot) => (
                      <React.Fragment key={slot}>
                        <div className="col-span-1 text-left font-bold text-sm">
                          {slot}
                        </div>
                        {days.map((day) => (
                          <div
                            key={`${day}-${slot}`}
                            className="col-span-1 flex items-center justify-center"
                          >
                            <div
                              className={`w-full h-7 rounded-md flex items-center justify-center ${
                                availabilityData[
                                  day as keyof typeof availabilityData
                                ][slot as keyof typeof availabilityData.Mon]
                                  ? "bg-mint-200"
                                  : "bg-cream/20"
                              }`}
                            >
                              {availabilityData[
                                day as keyof typeof availabilityData
                              ][slot as keyof typeof availabilityData.Mon] && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 text-sage"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="md:hidden">
                <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-sage-700 to-transparent pointer-events-none" />
                <p className="text-cream/80 text-xs text-center mt-2 italic">
                  Scroll horizontally to view full schedule
                </p>
              </div>
            </div>
          </div>

          {/* Important Information and Image Container */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Important Information Box */}
            <div className="bg-sage-700 rounded-2xl shadow-xl p-5 flex-1">
              <div className="flex flex-col gap-2">
                <Subtitle
                  variant="dark-bg"
                  size="2xl"
                  colour="cream"
                  weight="bold"
                >
                  Important Information:
                </Subtitle>
                <BodyText variant="dark-bg" size="md" colour="cream">
                  <span className="highlight-text-dark">
                    48 hours&apos; notice is required
                  </span>{" "}
                  for cancellations. Sessions cancelled late or missed may be
                  charged at the full rate.
                </BodyText>
                <div className="mt-3">
                  <BodyText variant="dark-bg" size="md" colour="cream">
                    Hypnotherapy is{" "}
                    <span className="highlight-mint-dark">
                      highly effective
                    </span>{" "}
                    but success cannot be guaranteed.{" "}
                    <span className="emphasis-text-dark">
                      Your commitment and participation
                    </span>
                    , including using the relaxation MP3, are key to achieving
                    the best results.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Head Tendrils Image - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center lg:w-1/3 p-2">
              <Image
                src={headTendrils}
                alt="Relaxing head tendrils illustration"
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column (2/5 width on desktop) */}
        <div className="lg:w-2/5 order-1 lg:order-2">
          <div className="bg-sage-700 rounded-2xl shadow-xl p-5 lg:h-full lg:py-8">
            <Subtitle variant="dark-bg" size="3xl" colour="cream" weight="bold">
              Pricing
            </Subtitle>

            <div className="space-y-6 text-cream mt-6">
              <div>
                <h3 className="text-lg font-bold highlight-text-dark">
                  Initial Consultation – £30
                </h3>
                <p className="text-sm md:text-base">
                  A relaxed 30–45 minute session to explore how hypnotherapy can
                  help you. <br />
                  <span className="highlight-sage-dark">
                    Includes a free relaxation MP3.
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold highlight-text-dark">
                  Therapy Sessions – £65
                </h3>
                <p className="text-sm md:text-base">
                  Ongoing sessions of around 50 minutes, combining
                  <span className="highlight-mint-dark">
                    {" "}
                    solution-focused talking therapy
                  </span>{" "}
                  with{" "}
                  <span className="emphasis-text-dark">relaxing hypnosis</span>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold highlight-text-dark">
                  Phobia Package – £225
                </h3>
                <p className="text-sm md:text-base">
                  A{" "}
                  <span className="highlight-mint-dark">
                    structured programme
                  </span>{" "}
                  of four sessions (50 minutes each) designed to help you
                  overcome a specific phobia. <br />
                  <span className="highlight-sage-dark">
                    Includes a relaxation MP3.
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold highlight-text-dark">
                  Stop Smoking Session – £120
                </h3>
                <p className="text-sm md:text-base">
                  A single,{" "}
                  <span className="highlight-mint-dark">focused session</span>{" "}
                  lasting 90–120 minutes to help you stop smoking.{" "}
                  <span className="emphasis-text-dark">
                    No initial consultation required.
                  </span>{" "}
                  <br />
                  <span className="highlight-sage-dark">
                    Includes a relaxation MP3.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
