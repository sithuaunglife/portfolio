"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap, skillIconMap } from "@/data/skill";
import { container, item } from "@/lib/animations";
import { SkillTypes } from "@/types/SkillTypes";
import { motion } from "motion/react";

type Props = {
  skill: SkillTypes[];
};

function SkillsSection({ skill }: Props) {
  return (
    <section
      id="skills"
      className="py-10"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // opacity : 0 is fully invisible, initial is starting state of the animation, x is same is translate x
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8, // animation duration
          delay: 0.2, // delay time before starting the animation
        }}
        className="text-center space-y-3 mb-10"
      >
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
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8"
      >
        {skill.map((category) => {
          const Icon = iconMap[category.icon];

          return (
            <motion.div key={category.title} variants={item}>
              <Card
                key={category.title}
                className="p-4 group hover:shadow-md transition"
              >
                <CardContent className="space-y-5">
                  {/* Title  */}
                  <div className="flex items-center gap-2">
                    {Icon && (
                      <Icon className="w-5 h-5 text-muted-foreground transition group-hover:scale-110 group-hover:text-foreground" />
                    )}
                    <h3 className="text-lg font-semibold cursor-default">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills  */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((item) => {
                      const SkillIcon = skillIconMap[item];

                      return (
                        <Badge
                          key={item}
                          variant="secondary"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-md bg-muted transition hover:scale-105 cursor-default"
                        >
                          {SkillIcon && <SkillIcon className="w-5 h-5" />}
                          {item}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default SkillsSection;
