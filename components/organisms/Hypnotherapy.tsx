import React from "react";
import { Title } from "../atoms/Title";
export default function Hypnotherapy() {
  return (
    <section
      id="hypnotherapy"
      className="mt-10 flex items-center justify-center"
      aria-labelledby="hypnotherapy-heading"
    >
      <Title size="4xl" weight="bold">
        Hypnotherapy
      </Title>
    </section>
  );
}
