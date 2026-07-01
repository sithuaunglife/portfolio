import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Separator from "@/components/Separator";
import AboutLayout from "@/features/about/components/AboutLayout";
import FreelanceContactLayout from "@/features/contact/FreelanceContactLayout";
import FreelanceHeroLayout from "@/features/hero/components/FreelanceHeroLayout";
import ProjectLayout from "@/features/project/ProjectLayout";
import SkillLayout from "@/features/skill/SkillLayout";

export default function Page() {
  return (
    <>
      <Header />
      <FreelanceHeroLayout />
      <Separator />
      <ProjectLayout />
      <Separator />
      <SkillLayout />
      <Separator />
      <AboutLayout />
      <Separator />
      <FreelanceContactLayout />
      <Footer />
    </>
  );
}
