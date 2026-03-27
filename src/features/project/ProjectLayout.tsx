import React, { ReactNode } from "react";
import ProjectSection from "./ProjectsSection";
import { projects } from "@/data/projects";

type Props = {
  children: ReactNode;
};

function ProjectLayout({ children }: Props) {
  return (
    <div>
      <ProjectSection projects={projects} />
      {children}
    </div>
  );
}

export default ProjectLayout;
