import { Code2, Wrench } from "lucide-react";
import { FaReact, FaGithub, FaGitAlt, FaDocker, FaFigma, FaHtml5 } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiJavascript,
  SiCss,
  SiVscodium,
} from "react-icons/si";
import { VscAdd, VscCode } from "react-icons/vsc";

export const skill = [
  {
    title: "Tech Stack",
    icon: "code2",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    skills: ["VS Code", "Figma", "Git", "GitHub", "Postman", "Docker"],
  },
];

export const iconMap = {
  code2: Code2,
  wrench: Wrench,
};

export const skillIconMap: Record<string, any> = {
  HTML: FaHtml5, // (you can replace later with better match)
  CSS: SiCss,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,

  "VS Code": VscCode, // placeholder (optional)
  Figma: FaFigma,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  Docker: FaDocker,
};