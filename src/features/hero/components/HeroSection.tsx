"use client";

import { UserProfile } from "@/types/heroTypes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  profile: UserProfile;
};

function HeroSection({ profile: { name, email, photo } }: Props) {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center p-10">
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">Hi, I'm {name}</h1>
          <h2 className="text-5xl text-muted-foreground tracking-tight">Frontend Developer</h2>

          <p className="text-lg text-muted-foreground max-w-xl">
            Frontend developer focused on building sleek, minimalist, high-tech
            interfaces and turning designs into real products.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="hover:scale-105 transition">
              Contact Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition"
            >
              View Work
            </Button>
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
