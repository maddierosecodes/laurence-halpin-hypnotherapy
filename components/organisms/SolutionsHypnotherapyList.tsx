import {
  FaBrain,
  FaHeartbeat,
  FaSmokingBan,
  FaWeight,
  FaBed,
  FaUserFriends,
  FaRunning,
  FaPills,
} from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import { GiStomach } from "react-icons/gi";
import { TbMoodPlus } from "react-icons/tb";
import Card from "../atoms/Card";
import Link from "next/link";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";

const treatmentAreas = [
  {
    name: "Stress",
    icon: <FaHeartbeat className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },
  {
    name: "Anxiety",
    icon: <MdOutlinePsychology className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },
  {
    name: "Stop Smoking",
    icon: <FaSmokingBan className="w-8 h-8" />,
    href: "services#stop-smoking",
  },
  {
    name: "Phobias",
    icon: <FaBrain className="w-8 h-8" />,
    href: "services#overcome-phobias",
  },
  {
    name: "Depression",
    icon: <TbMoodPlus className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },
  {
    name: "Insomnia",
    icon: <FaBed className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },

  {
    name: "Confidence",
    icon: <FaUserFriends className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },

  {
    name: "Weight Management",
    icon: <FaWeight className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },
  {
    name: "Irritable Bowel Syndrome",
    icon: <GiStomach className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },
  {
    name: "OCD",
    icon: <FaBrain className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },
  {
    name: "Dependency",
    icon: <FaPills className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },

  {
    name: "Performance",
    icon: <FaRunning className="w-8 h-8" />,
    href: "services#hypnotherapy",
  },
];

export default function SolutionsHypnotherapyList() {
  return (
    <section id="solutions-list" className="mx-auto px-4 max-w-7xl mb-10 mt-10">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-forest-500 text-center mb-6 font-primary">
          <Title>Solution Focused Hypnotherapy can help you with:</Title>
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pt-10 pb-5 w-full">
          {treatmentAreas.map((area, index) => (
            <Link
              key={area.name + index}
              href={area.href}
              className="cursor-pointer"
            >
              {" "}
              <Card title={area.name} icon={area.icon} />{" "}
            </Link>
          ))}
        </div>
        <span className="text-xl font-bold text-forest-500 text-center mb-6 font-primary">
          <BodyText>
            <em>
              Click on the card to find out more about how I can help you with
              these issues.
            </em>
          </BodyText>
        </span>
      </div>
    </section>
  );
}
