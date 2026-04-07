type SkillName =
  | "HTML"
  | "CSS"
  | "Tailwind CSS"
  | "JavaScript"
  | "React"
  | "Next.js"
  | "TypeScript"
  | "VS Code"
  | "Figma"
  | "Git"
  | "GitHub"
  | "Postman"
  | "Docker";

type IconKey = "code2" | "wrench";

export type SkillTypes = {
  title: string;
  icon: IconKey;
  skills: string[];
};
