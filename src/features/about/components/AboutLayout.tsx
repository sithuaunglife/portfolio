import { ReactNode } from "react";
import AboutSection from "./AboutSection";

type Props = {
  children: ReactNode;
};

function AboutLayout({ children }: Props) {
  return (
    <div>
      <AboutSection />
      {children}
    </div>
  );
}

export default AboutLayout;
