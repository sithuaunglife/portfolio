"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code2 } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="py-10">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* TEXT CONTENT (FREE, NOT INSIDE CARD) */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight">About Me</h1>

          <h2 className="text-2xl text-muted-foreground tracking-tight">
            Frontend Developer
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I focus on building clean, modern, and user-friendly interfaces. I
            enjoy turning ideas into real products and crafting experiences that
            feel smooth and intuitive.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey started with curiosity and grew into a habit of
            consistent learning — showing up every day, improving little by
            little, and solving problems along the way.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I work mainly with React, Next.js, and TypeScript, and I’m currently
            focused on strengthening my understanding of architecture, logic,
            and real-world development.
          </p>

          <p className="text-lg font-medium text-foreground">
            My goal is to become a freelance developer and bring ideas to life
            with precision and creativity.
          </p>
        </div>

        {/* CARDS SECTION (FOR EXPERIENCE / PROJECTS) */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Experience Card */}
          <Card className="p-4 hover:shadow-md transition hover:scale-105">
            <CardContent className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground">
                  Experience
                </h3>
              </div>

              <p className="text-3xl font-bold">1 Year</p>
              <p className="text-sm text-muted-foreground">
                Frontend development experience
              </p>
            </CardContent>
          </Card>

          {/* Projects Card */}
          <Card className="p-4 hover:shadow-md transition hover:scale-105">
            <CardContent className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground">
                  Projects
                </h3>
              </div>

              <p className="text-3xl font-bold">1 Completed</p>
              <p className="text-sm text-muted-foreground">
                Real-world and personal builds
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
