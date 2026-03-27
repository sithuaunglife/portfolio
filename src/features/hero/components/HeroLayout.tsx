import { ReactNode } from "react";
import { profile } from "@/data/profile";
import HeroSection from "./HeroSection";
import Header from "@/components/Header";

type Props = {
  children: ReactNode;
};

function HeroLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <HeroSection profile={profile} />
      {children}
    </div>
  );
}

export default HeroLayout;
