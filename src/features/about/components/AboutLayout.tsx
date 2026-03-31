import { ReactNode } from "react";
import { profile } from "@/data/profile";
import AboutSection from "./AboutSection";

type Props = {
  children: ReactNode;
};

function AboutLayout({ children }: Props) {
  return (
    <div>
      <AboutSection profile={profile} />
      {children}
    </div>
  );
}

export default AboutLayout;
