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
import { TbBrandFiverr } from "react-icons/tb";
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

function ContactSection({
  contact: {
    email,
    link: { linkedin, github, upwork, fiverr },
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
          Let’s work together. Send me a message.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10"
      >
        {/* FORM */}
        <motion.div variants={item}>
          <Card className="p-4">
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      className="h-12"
                      placeholder="Your name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <FieldError>{errors.name.message}</FieldError>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      className="h-12"
                      type="email"
                      placeholder="Your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <FieldError>{errors.email.message}</FieldError>
                    )}
                  </Field>
                </div>

                {/* Subject */}
                <Field>
                  <FieldLabel>Subject</FieldLabel>
                  <Input
                    className="h-12"
                    placeholder="Subject"
                    {...register("subject")}
                  />
                </Field>

                {/* Message */}
                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea
                    className="min-h-[140px]"
                    rows={5}
                    placeholder="Tell me about your project..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <FieldError>{errors.message.message}</FieldError>
                  )}
                </Field>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full p-5 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* SOCIAL / CONTACT CARDS */}
        <motion.div variants={container} className="space-y-4">
          <motion.h3 variants={item} className="text-xl font-semibold text-center md:text-left">
            Connect with me
          </motion.h3>

          <motion.div variants={container} className="grid grid-cols-2 gap-4">
            <motion.a variants={item} href={`mailto:${email}`}>
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <MdEmail className="w-5 h-5" />
                  <span className="text-sm font-medium">Email</span>
                </CardContent>
              </Card>
            </motion.a>

            <motion.a variants={item} href={linkedin} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </CardContent>
              </Card>
            </motion.a>

            <motion.a variants={item} href={upwork} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <FaUpwork className="w-5 h-5" />
                  <span className="text-sm font-medium">Upwork</span>
                </CardContent>
              </Card>
            </motion.a>

            <motion.a variants={item} href={fiverr} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <TbBrandFiverr className="w-5 h-5" />
                  <span className="text-sm font-medium">Fiverr</span>
                </CardContent>
              </Card>
            </motion.a>

            <motion.a variants={item} href={github} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">Github</span>
                </CardContent>
              </Card>
            </motion.a>
          </motion.div>

          <motion.p variants={item} className="text-center font-semibold pt-2">
            <a
              href={`mailto:${email}`}
              className="hover:text-muted-foreground transition"
            >
              {email}
            </a>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
