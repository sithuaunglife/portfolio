import Seperator from "@/components/Seperator";
import HeroLayout from "@/features/hero/components/HeroLayout";
import ProjectLayout from "@/features/project/ProjectLayout";
import SkillLayout from "@/features/skill/SkillLayout";

export default function Page() {
  return (
    <>
      <HeroLayout />
      <Seperator />
      <ProjectLayout />
      <Seperator />
      <SkillLayout />
    </>
  );
}
