import Header from "@/components/Header";
import Seperator from "@/components/Seperator";
import HeroLayout from "@/features/hero/components/HeroLayout";
import ProjectLayout from "@/features/project/ProjectLayout";
import SkillLayout from "@/features/skill/SkillLayout";

export default function Page() {
  return (
    <>
      <Header />
      <HeroLayout />
      <Seperator />
      <ProjectLayout />
      <Seperator />
      <SkillLayout />
    </>
  );
}
