import React, { ReactNode } from "react";
import SkillSection from "./SkillSection";
import { skill } from "@/data/skill";

type Props = {
  children? : ReactNode;
};

const SkillLayout = ({ children }: Props) => {
  return (
    <div>
      <SkillSection skill={skill} />
      {children}
    </div>
  );
};

export default SkillLayout;
