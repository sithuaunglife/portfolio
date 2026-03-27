"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ProjectTypes } from "@/types/ProjectTypes";

type Props = {
  projects: ProjectTypes[];
};

function ProjectsSection({ projects }: Props) {
  return (
    <section className="min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <img src={project.image} className="aspect-video object-cover" />

            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
