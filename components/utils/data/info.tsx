import {
  FaBrain,
  FaHeartbeat,
  FaSmokingBan,
  FaWeight,
  FaBed,
  FaUserFriends,
  FaRunning,
  FaPills
} from 'react-icons/fa';
import { MdOutlinePsychology } from 'react-icons/md';
import { GiStomach } from 'react-icons/gi';
import { TbMoodPlus } from 'react-icons/tb';

export const treatmentAreas = [
  {
    name: 'Stress',
    icon: <FaHeartbeat className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'Anxiety',
    icon: <MdOutlinePsychology className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'Stop Smoking',
    icon: <FaSmokingBan className="w-8 h-8" aria-hidden="true" />,
    href: 'services#stop-smoking'
  },
  {
    name: 'Phobias',
    icon: <FaBrain className="w-8 h-8" aria-hidden="true" />,
    href: 'services#overcome-phobias'
  },
  {
    name: 'Depression',
    icon: <TbMoodPlus className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'Insomnia',
    icon: <FaBed className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'Confidence',
    icon: <FaUserFriends className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'Weight Management',
    icon: <FaWeight className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'IBS',
    icon: <GiStomach className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'OCD',
    icon: <FaBrain className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'Dependency',
    icon: <FaPills className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  },
  {
    name: 'Performance',
    icon: <FaRunning className="w-8 h-8" aria-hidden="true" />,
    href: 'services#solutionhypnotherapy'
  }
];
