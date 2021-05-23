import { FaGithub } from "react-icons/fa";
import { BsPeopleCircle } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface ExternalLink {
  icon: IconType;
  name: string;
  to: string;
}

export const externalLinks: ExternalLink[] = [
  {
    icon: FaGithub,
    name: "Github",
    to: "https://github.com/HoseungJang",
  },
  {
    icon: BsPeopleCircle,
    name: "About",
    to: "https://about.hoseung.me",
  },
];
