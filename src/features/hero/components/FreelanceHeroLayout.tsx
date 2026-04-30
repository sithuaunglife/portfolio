import { ReactNode } from "react";
import { hero } from "@/data/hero";
import FreelanceHeroSection from "./FreelanceHeroSection";

type Props = {
  children? : ReactNode;
};

function FreelanceHeroLayout({ children }: Props) {
  return (
    <div>
      <FreelanceHeroSection hero={hero} />
      {children}
    </div>
  );
}

export default FreelanceHeroLayout;
