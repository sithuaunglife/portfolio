import React, { ReactNode } from "react";
import ProjectSection from "./ProjectSection";
import { project } from "@/data/project";
import ProjectCard from "./ProjectSection";

type Props = {
  children: ReactNode;
};

function ProjectLayout({ children }: Props) {
  return (
    <div>
      <ProjectCard project={project} />
      {children}
    </div>
  );
}

export default ProjectLayout;
