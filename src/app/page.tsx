import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Separator from "@/components/Separator";
import AboutLayout from "@/features/about/components/AboutLayout";
import ContactLayout from "@/features/contact/ContactLayout";
import HeroLayout from "@/features/hero/components/HeroLayout";
import ProjectLayout from "@/features/project/ProjectLayout";
import SkillLayout from "@/features/skill/SkillLayout";

export default function Page() {
  return (
    <>
      <Header />
      <HeroLayout />
      <Separator />
      <ProjectLayout />
      <Separator />
      <SkillLayout />
      <Separator />
      <AboutLayout />
      <Separator />
      <ContactLayout />
      <Footer />
    </>
  );
}
