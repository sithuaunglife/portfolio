"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { container, item } from "@/lib/animations";
import { HeroTypes } from "@/types/HeroTypes";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  hero: HeroTypes;
};

function FreelanceHeroSection({
  hero: {
    name,
    email,
    photo,
    link: { linkedin, github, upwork },
  },
}: Props) {
  return (
    <section className="min-h-screen flex items-center py-10 pt-24" id="hero">
      <motion.div
        initial={{ opacity: 0, x: -50 }} // opacity : 0 is fully invisible, initial is starting state of the animation, x is same is translate x
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8, // animation duration
          delay: 0.2, // delay time before starting the animation
        }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 w-full"
      >
        {/* LEFT */}
        <motion.div
          variants={container} // variants is for getting the motion variant defined by you
          initial="hidden" // " " is getting the "hidden" key from the property, variants={container} → Pass the variants object, `initial="hidden"` → Select the `hidden` key from that object.
          animate="show"
          className="space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight"
          >
            Hi, I'm {name}
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-3xl text-muted-foreground tracking-tight"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Frontend developer focused on building sleek, minimalist and turning
            designs into real products.
          </motion.p>

          <motion.div variants={item} className="flex gap-4">
            <a href="#projects">
              {" "}
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition"
              >
                View Projects
              </Button>
            </a>

            <a href="#contact">
              <Button size="lg" className="hover:scale-105 transition">
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-5 pt-4">
            <a
              href={github}
              target="_blank"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <Github size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="flex justify-center md:justify-end"
        >
          <Card className="p-2 shadow-xl border">
            <CardContent className="p-0">
              <img
                src={photo}
                className="w-[320px] h-[320px] object-cover rounded-xl"
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FreelanceHeroSection;
