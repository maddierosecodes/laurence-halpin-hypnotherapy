import React from "react";
import { Title } from "../atoms/Title";
export default function Hypnotherapy() {
  return (
    <section
      id="hypnotherapy"
      className="mt-10 flex items-center justify-center"
      aria-labelledby="hypnotherapy-heading"
    >
      <span className="text-4xl font-bold">
        <Title>Hypnotherapy</Title>
      </span>
    </section>
  );
}
