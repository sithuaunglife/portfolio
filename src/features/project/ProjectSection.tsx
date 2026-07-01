"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { container, item } from "@/lib/animations";
import { ProjectTypes } from "@/types/ProjectTypes";
import { Button } from "@base-ui/react";
import { ExternalLink, Github, Link } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  project: ProjectTypes[];
};

function ProjectSection({ project }: Props) {
  return (
    <section id="projects" className="py-10">
      {/*  Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // opacity : 0 is fully invisible, initial is starting state of the animation, x is same is translate x
        whileInView={{ opacity: 1, x: 0 }} // opacity: 1 is fully visible
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8, // animation duration
          delay: 0.2, // delay time before starting the animation
        }}
        className="text-center space-y-3 mb-10"
      >
        <h1 className="text-5xl font-bold tracking-tight">Featured Projects</h1>

        <h2 className="text-2xl text-muted-foreground tracking-tight">
          Things I’ve Built
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          A collection of projects showcasing my skills, growth, and ability to
          turn ideas into clean, functional interfaces.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8"
      >
        {project.map((el) => (
          <motion.div key={el.id} variants={item}>
            <Card
              key={el.id}
              className="overflow-hidden flex flex-col h-full transition hover:scale-105"
            >
              <img src={el.image} className="h-56 w-full object-cover" />

              <CardContent className="p-4 space-y-3 flex-1">
                <h3 className="text-lg font-semibold">{el.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {el.description}
                </p>

                <motion.div className="flex flex-wrap gap-2">
                  {el.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </motion.div>
              </CardContent>

              <CardFooter className="flex justify-between px-4 pb-4">
                <a
                  href={el.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:scale-110 transition cursor-pointer">
                    <Github size={16} />
                    View Code
                  </Button>
                </a>

                <a
                  href={el.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:scale-110 transition cursor-pointer"
                >
                  <Button className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:scale-110 transition cursor-pointer">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectSection;
