"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroTypes } from "@/types/HeroTypes";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

type Props = {
  hero: HeroTypes;
};

function HeroSection({
  hero: {
    name,
    email,
    photo,
    link: { linkedin, github, upwork },
  },
}: Props) {
  return (
    <section className="min-h-screen flex items-center py-10 pt-24" id="hero">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 w-full">
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">Hi, I'm {name}</h1>
          <h2 className="text-3xl text-muted-foreground tracking-tight">
            Frontend Developer
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl">
            Frontend developer focused on building sleek, minimalist and turning designs into real products.
          </p>

          <div className="flex gap-4">
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
          </div>

          <div className="flex gap-5 pt-4">
            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <Mail size={22} />
            </a>

            <a
              href={linkedin}
              target="_blank"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href={upwork}
              target="_blank"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <FaUpwork size={22} />
            </a>

            <a
              href={github}
              target="_blank"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <Github size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <Card className="p-2 shadow-xl border">
            <CardContent className="p-0">
              <img
                src={photo}
                className="w-[320px] h-[320px] object-cover rounded-xl"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
