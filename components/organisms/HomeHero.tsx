import { ProfileImage } from "../atoms/ProfileImage";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";

export const HomeHero = () => {
  const textContent = (
    <section className="flex flex-col gap-6" aria-label="Introduction">
      <header className="flex flex-col gap-2">
        <h1 className="text-8xl text-mint">
          <Title>
            Laurence
            <br />
            Halpin
          </Title>
        </h1>
        <p className="text-3xl text-mint-100">
          <Subtitle>Hypnotherapist</Subtitle>
        </p>
      </header>
      <p className="text-2xl text-cream-200">
        <BodyText>Helping you achieve positive change</BodyText>
      </p>
    </section>
  );

  const imageContent = (
    <figure className="w-[32rem] h-[32rem]" aria-label="Profile image">
      <ProfileImage
        src="/images/laurence_halpin.png"
        alt="Laurence Halpin"
        shape="circle"
      />
    </figure>
  );

  return (
    <Hero
      textComponent={textContent}
      imageComponent={imageContent}
      imagePosition="right"
    />
  );
};
