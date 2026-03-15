"use client";

import { UserProfile } from "@/types/heroTypes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

type Props = {
  profile: UserProfile;
};

function HeroSection({ profile: { name, email, photo } }: Props) {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center p-10">
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">Hi, I'm {name}</h1>
          <h2 className="text-5xl text-muted-foreground tracking-tight">
            Frontend Developer
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl">
            Frontend developer focused on building sleek, minimalist, high-tech
            interfaces and turning designs into real products.
          </p>

          <div className="flex gap-4">
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition"
            >
              View Projects
            </Button>

            <Button size="lg" className="hover:scale-105 transition">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-5 pt-4">
            <a
              href="https://github.com/sithuaunglife"
              target="_blank"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/in/sithuaunglife"
              target="_blank"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <Card className="p-2">
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
