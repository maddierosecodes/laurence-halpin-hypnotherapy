import { ProfileImage } from "../atoms/ProfileImage";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";

export const HomeHero = () => {
  const textContent = (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-8xl">
          <Title>
            Laurence
            <br />
            Halpin
          </Title>
        </div>
        <div className="text-3xl">
          <Subtitle>Hypnotherapist</Subtitle>
        </div>
      </div>
      <div className="text-2xl">
        <BodyText className="max-w-lg">
          Helping you achieve positive change
        </BodyText>
      </div>
    </div>
  );

  const imageContent = (
    <div className="w-[32rem] h-[32rem]">
      <ProfileImage
        src="/images/laurence_halpin.png"
        alt="Laurence Halpin"
        shape="circle"
      />
    </div>
  );

  return (
    <Hero
      textComponent={textContent}
      imageComponent={imageContent}
      imagePosition="right"
    />
  );
};
