import { ReactNode } from "react";
import { hero } from "@/data/hero";
import HeroSection from "./HeroSection";

type Props = {
  children: ReactNode;
};

function HeroLayout({ children }: Props) {
  return (
    <div>
      <HeroSection hero={hero} />
      {children}
    </div>
  );
}

export default HeroLayout;
