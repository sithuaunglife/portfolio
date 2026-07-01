"use client";

import { Card, CardContent } from "@/components/ui/card";
import { container, item } from "@/lib/animations";
import { Briefcase, Code2 } from "lucide-react";
import { motion } from "motion/react";

function AboutSection() {
  return (
    <section id="about" className="py-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }} // opacity : 0 is fully invisible, initial is starting state of the animation, x is same is translate x
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8, // animation duration
          delay: 0.2, // delay time before starting the animation
        }}
        className="max-w-5xl mx-auto px-6 space-y-12"
      >
        {/* TEXT CONTENT (FREE, NOT INSIDE CARD) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 max-w-3xl"
        >
          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight"
          >
            About Me
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl text-muted-foreground tracking-tight"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I focus on building clean, modern, and user-friendly interfaces. I
            enjoy turning ideas into real products and crafting experiences that
            feel smooth and intuitive.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            My journey started with curiosity and grew into a habit of
            consistent learning — showing up every day, improving little by
            little, and solving problems along the way.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I work mainly with React, Next.js, and TypeScript, and I’m currently
            focused on strengthening my understanding of architecture, logic,
            and real-world development.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg font-medium text-foreground"
          >
            My goal is to become a freelance developer and bring ideas to life
            with precision and creativity.
          </motion.p>
        </motion.div>

        {/* CARDS SECTION (FOR EXPERIENCE / PROJECTS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
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

              <p className="text-3xl font-bold">2 Completed</p>
              <p className="text-sm text-muted-foreground">
                Real-world and personal builds
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
