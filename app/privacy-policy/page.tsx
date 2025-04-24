"use client";

import { BodyText } from "@/components/atoms/BodyText";
import { Subtitle } from "@/components/atoms/Subtitle";
import { Title } from "@/components/atoms/Title";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen w-full px-6 md:px-20 pt-20 pb-5 relative"
      role="main"
    >
      <section
        className="max-w-4xl mx-auto space-b-12"
        aria-labelledby="privacy-policy"
      >
        <button
          onClick={() => router.back()}
          className="flex text-sage-700 hover:text-mint-500 transition-colors cursor-pointer pb-5"
          aria-label="Go back to previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
        <div className="space-y-8">
          <div className="mb-8">
            <Title size="5xl" colour="sage" weight="bold">
              <Subtitle size="lg" colour="forest" weight="medium">
                Privacy Policy
              </Subtitle>
            </Title>

            <div className="text-xl text-sage-700 italic">
              <Subtitle>
                This privacy policy explains how Halpin Therapies Ltd, trading
                via the domain LH Hypnotherapy, collects, uses, and protects any
                personal information you provide when accessing this website or
                using the hypnotherapy services provided by Laurence Halpin.
                <br />
                <br />
                We are committed to ensuring your data is kept secure, used only
                for its intended purpose, and handled in line with UK data
                protection law.
              </Subtitle>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Title size="3xl" colour="sage" weight="semibold">
            What Information Is Collected?
          </Title>

          <BodyText size="lg" variant="light-bg">
            When you contact Laurence Halpin via this website, phone, or email,
            we may collect:
          </BodyText>

          <ul className="list-disc ml-6 text-sage-700">
            <li>Your name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Any information you choose to share regarding your enquiry</li>
          </ul>

          <BodyText size="lg" variant="light-bg">
            We may also collect:
          </BodyText>

          <ul className="list-disc ml-6 text-sage-700">
            <li>
              GP contact details and basic health information (where relevant)
            </li>
            <li>Details of your next of kin (used only in emergencies)</li>
          </ul>
        </div>

        <div className="space-y-4 block mb-4">
          <Title size="3xl" colour="sage" weight="semibold">
            How Is This Information Used?
          </Title>

          <BodyText size="lg" variant="light-bg">
            Your data is used to:
          </BodyText>

          <ul className="list-disc ml-6 text-sage-700">
            <li>Contact you about your enquiry or sessions</li>
            <li>Send recordings or appointment information</li>
            <li>Tailor and plan therapy sessions</li>
            <li>
              Ensure suitability for hypnotherapy and safeguard your wellbeing
            </li>
          </ul>

          <BodyText size="lg" variant="light-bg">
            We do not:
          </BodyText>

          <ul className="list-disc ml-6 text-sage-700">
            <li>Store your data in a website database</li>
            <li>Receive or retain your payment or bank details</li>
            <li>Share your data with third parties unless legally required</li>
          </ul>
        </div>

        <div className="space-y-4 block mb-4">
          <Title size="3xl" colour="sage" weight="semibold">
            Your Rights Under UK GDPR
          </Title>

          <BodyText size="lg" variant="light-bg">
            Under the UK General Data Protection Regulation (UK GDPR) and the
            Data Protection Act 2018, you have the right to:
          </BodyText>

          <ul className="list-disc ml-6 text-sage-700 space-y-1">
            <li>
              <strong>Be informed:</strong> This policy explains how your data
              is used.
            </li>
            <li>
              <strong>Access:</strong> Request a copy of your data by emailing{" "}
              <a
                href="mailto:laurence@lhhypnotherapy.co.uk"
                className="underline"
              >
                laurence@lhhypnotherapy.co.uk
              </a>
              .
            </li>
            <li>
              <strong>Rectification:</strong> Ask for corrections to inaccurate
              data.
            </li>
            <li>
              <strong>Erasure:</strong> Your data will be securely deleted 7
              years after your final session, unless otherwise required by law.
            </li>
            <li>
              <strong>Restrict processing:</strong> Your data is used only as
              outlined here.
            </li>
            <li>
              <strong>Portability:</strong> Your data will not be transferred
              without explicit consent.
            </li>
            <li>
              <strong>Object:</strong> You won&apos;t be contacted for marketing
              unless you opt in.
            </li>
            <li>
              <strong>Automated decision-making:</strong> No automated profiling
              is used.
            </li>
          </ul>
        </div>

        <div className="space-y-4 block mb-4">
          <Title size="3xl" colour="sage" weight="semibold">
            Confidentiality and Legal Exceptions
          </Title>

          <BodyText size="lg" variant="light-bg">
            Your information remains confidential unless:
          </BodyText>

          <ul className="list-disc ml-6 text-sage-700">
            <li>There is a serious risk of harm to yourself or others</li>
            <li>
              There is a legal obligation (e.g. safeguarding, crime prevention)
            </li>
            <li>
              Anonymous case material is discussed in professional supervision
              or peer support
            </li>
          </ul>
        </div>

        <div className="space-y-4 block mb-4">
          <Title size="3xl" colour="sage" weight="semibold">
            Cookies
          </Title>

          <BodyText size="lg" variant="light-bg">
            This website may use cookies to analyse traffic and improve user
            experience. You can disable cookies via your browser settings.
            Disabling them may affect site functionality.
          </BodyText>
        </div>

        <div className="space-y-4 block mb-4">
          <Title size="3xl" colour="sage" weight="semibold">
            External Links
          </Title>

          <BodyText size="lg" variant="light-bg">
            This site may contain links to other websites. Once you leave this
            site, Halpin Therapies Ltd is not responsible for how other sites
            manage your data. Please review their privacy policies.
          </BodyText>
        </div>

        <div className="space-y-4 block mb-4">
          <Title size="3xl" colour="sage" weight="semibold">
            Data Protection Registration
          </Title>

          <BodyText size="lg" variant="light-bg">
            Halpin Therapies Ltd is registered with the UK Information
            Commissioner&apos;s Office (ICO). Registration number:{" "}
            <strong>[INSERT ICO NUMBER HERE]</strong>.
          </BodyText>
        </div>

        <div className="space-y-4">
          <BodyText size="lg" variant="light-bg">
            If you have any questions about this policy or your personal data,
            please contact:
            <br />
            <strong>Laurence Halpin</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:laurence@lhhypnotherapy.co.uk"
              className="underline"
            >
              laurence@lhhypnotherapy.co.uk
            </a>
          </BodyText>
        </div>
      </section>
    </main>
  );
}
