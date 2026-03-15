import React, { ReactNode } from "react";
import HeroHeader from "./HeroSection";
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
