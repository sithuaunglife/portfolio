"use client";

import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Github, Linkedin, Send } from "lucide-react";
import { FaUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ContactTypes } from "@/types/ContactTypes";
import { motion } from "motion/react";
import { container, item } from "@/lib/animations";

type Props = {
  contact: ContactTypes;
};

type FormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function FreelanceContactSection({
  contact: {
    email,
    link: { linkedin, github, upwork },
  },
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);

    // simulate delay (later replace with API)
    await new Promise((res) => setTimeout(res, 1000));
  };

  return (
    <section id="contact" className="py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // opacity : 0 is fully invisible, initial is starting state of the animation, x is same is translate x
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8, // animation duration
          delay: 0.2, // delay time before starting the animation
        }}
        className="text-center space-y-3 mb-12"
      >
        <h1 className="text-5xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Let’s work together. I’m available for freelance opportunities. Feel
          free to message me directly on the platform where you found me to
          discuss your project.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 grid md:grid-cols-1 gap-10"
      >
        {/* SOCIAL / CONTACT CARDS */}
        <motion.div variants={container} className="space-y-4">
          <motion.h3 variants={item} className="text-xl font-semibold text-center md:text-left">
            Connect with me
          </motion.h3>

          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">Github</span>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FreelanceContactSection;
