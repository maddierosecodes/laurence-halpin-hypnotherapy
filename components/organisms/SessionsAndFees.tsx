import React from 'react';
import { Title } from '../atoms/Title';
import { BodyText } from '../atoms/BodyText';
import { Subtitle } from '../atoms/Subtitle';
import { SectionHeading } from '../atoms/SectionHeading';
import Image from 'next/image';
import headTendrils from '../../public/images/head_tendrils.jpg';
import { StructuredTable } from '../molecules/StructuredTable';
import { NavLink } from '../atoms/NavLink';

export default function SessionsAndFees() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeSlots = ['Morning', 'Afternoon', 'Evening', 'Night'];

  // Define availability data with checkmarks
  const availabilityData = {
    Mon: { Morning: true, Afternoon: true, Evening: true, Night: false },
    Tue: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Wed: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Thu: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Fri: { Morning: false, Afternoon: false, Evening: true, Night: false },
    Sat: { Morning: true, Afternoon: true, Evening: true, Night: false },
    Sun: { Morning: false, Afternoon: false, Evening: false, Night: false }
  };

  return (
    <section
      id="sessions-and-fees"
      className="mx-auto max-w-7xl px-4 py-12 xl:border-t-0 border-t border-sage-700"
      aria-labelledby="sessions-and-fees-heading">
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

            <StructuredTable
              columnHeaders={days}
              rowHeaders={timeSlots}
              data={availabilityData}
              showScrollIndicator={true}
            />
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
                  weight="bold">
                  Important Information:
                </Subtitle>
                <BodyText variant="dark-bg" size="md" colour="cream">
                  <span className="highlight-text-dark">
                    48 hours&apos; notice is required
                  </span>{' '}
                  for cancellations. Sessions cancelled late or missed may be
                  charged at the full rate.
                </BodyText>
                <div className="mt-3">
                  <BodyText variant="dark-bg" size="md" colour="cream">
                    Hypnotherapy is{' '}
                    <span className="highlight-mint-dark">
                      highly effective
                    </span>{' '}
                    but success cannot be guaranteed.{' '}
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
                <NavLink href="/contact?type=initial-consultation">
                  <SectionHeading
                    variant="dark-bg"
                    colour="cream"
                    isInteractive>
                    Initial Consultation – £30
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  A relaxed 30–45 minute session to explore how hypnotherapy can
                  help you. <br />
                  <span className="highlight-sage-dark">
                    Includes a free relaxation MP3.
                  </span>
                </p>
              </div>

              <div>
                <NavLink href="/contact?type=therapy-sessions">
                  <SectionHeading
                    variant="dark-bg"
                    colour="cream"
                    isInteractive>
                    Therapy Sessions – £75
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  Ongoing sessions of around 50 minutes, combining
                  <span className="highlight-mint-dark">
                    {' '}
                    solution-focused talking therapy
                  </span>{' '}
                  with{' '}
                  <span className="emphasis-text-dark">relaxing hypnosis</span>.
                </p>
              </div>

              <div>
                <NavLink href="/contact?type=phobia-package">
                  <SectionHeading
                    variant="dark-bg"
                    colour="cream"
                    isInteractive>
                    Phobia Package – £225
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  A{' '}
                  <span className="highlight-mint-dark">
                    structured programme
                  </span>{' '}
                  of four sessions (50 minutes each) designed to help you
                  overcome a specific phobia. <br />
                  <span className="highlight-sage-dark">
                    Includes a relaxation MP3.
                  </span>
                </p>
              </div>

              <div>
                <NavLink href="/contact?type=stop-smoking">
                  <SectionHeading
                    variant="dark-bg"
                    colour="cream"
                    isInteractive>
                    Stop Smoking Session – £120
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  A single,{' '}
                  <span className="highlight-mint-dark">focused session</span>{' '}
                  lasting 90–120 minutes to help you stop smoking.{' '}
                  <span className="emphasis-text-dark">
                    No initial consultation required.
                  </span>{' '}
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
