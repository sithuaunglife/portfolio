import React, { ReactNode } from "react";
import ProjectSection from "./ProjectSection";
import { project } from "@/data/project";

type Props = {
  children: ReactNode;
};

function ProjectLayout({ children }: Props) {
  return (
    <div>
      <ProjectSection project={project} />
      {children}
    </div>
  );
}

export default ProjectLayout;
