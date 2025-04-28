import React from "react";
import Image from "next/image";
import stopSmoking from "@/public/images/stop_smoking.png";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";
import { CTALink } from "../atoms/CTALink";

export default function StopSmoking() {
  return (
    <section
      id="stop-smoking"
      className="mx-auto px-2 max-w-7xl mb-8"
      aria-labelledby="stop-smoking-heading"
    >
      <div className="relative w-full mx-auto">
        <Image
          src={stopSmoking}
          alt="Recovery Road"
          className="w-full object-cover aspect-9/4 rounded-xl"
        />
        <div className="absolute top-[10%] right-[27%] text-center w-full px-4">
          <Title size="6xl" colour="cream" weight="bold">
            Stop Smoking <br />
            Session
          </Title>
        </div>
        <div className="absolute bottom-[40%] right-[27%] text-center w-full">
          <CTALink href={"/contact"}>
            Book Stop Smoking <br />
            Session
          </CTALink>
        </div>
        <div className="absolute top-[15%] left-8/13 text-center w-1/3">
          <BodyText size="xl" colour="cream" weight="bold">
            Stop smoking with just one hypnotherapy session.
            <br /> Using a proven approach, Laurence helps you break free from
            smoking through a single, focused session. <br />
            Hypnosis promotes deep relaxation and strengthens your motivation,
            making it easier to let go of old habits and build a healthier
            future. <br />
            The stop smoking session lasts between 90–120 minutes and includes a
            relaxation MP3 to support you afterward.
          </BodyText>
        </div>
        <div className="absolute bottom-[0%]  right-[7.5%] text-center w-[85%] px-4">
          <BodyText size="xl" colour="cream" weight="bold">
            <em>
              No initial consultation is needed. Commitment to the process is
              important — success relies on <br />
              your participation both during and after the session.{" "}
            </em>
          </BodyText>
        </div>
      </div>
    </section>
  );
}
