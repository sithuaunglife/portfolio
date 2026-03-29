"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap } from "@/data/skill";
import { SkillTypes } from "@/types/SkillTypes";

type Props = {
  skill: SkillTypes[];
};

function SkillsSection({ skill }: Props) {
  return (
    <section id="skills" className="py-10">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-5xl font-bold tracking-tight">
          Skills & Technologies
        </h1>

        <h2 className="text-2xl text-muted-foreground tracking-tight">
          What I Work With
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          A curated set of technologies and tools I use to build modern,
          scalable, and user-focused applications.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {skill.map((category) => {
          const Icon = iconMap[category.icon];

          return (
            <Card
              key={category.title}
              className="p-4 group hover:shadow-md transition"
            >
              <CardContent className="space-y-5">
                <div className="flex items-center gap-2">
                  {Icon && (
                    <Icon className="w-5 h-5 text-muted-foreground transition group-hover:scale-110 group-hover:text-foreground" />
                  )}
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
