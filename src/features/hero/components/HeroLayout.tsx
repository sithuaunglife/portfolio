import React, { ReactNode } from "react";
import HeroHeader from "./HeroSection";
import { profile } from "@/data/profile";

type Props = {
  children: ReactNode;
};

function HeroLayout({ children }: Props) {
  return (
    <div>
      <HeroHeader profile={profile} />
      {children}
    </div>
  );
}

export default HeroLayout;
