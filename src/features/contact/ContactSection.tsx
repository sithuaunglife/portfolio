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
    name,
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
      <div className="text-center space-y-3 mb-12">
        <h1 className="text-5xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Let’s work together. Send me a message.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* FORM */}
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

        {/* SOCIAL / CONTACT CARDS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center md:text-left">
            Connect with me
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <a href={`mailto:${email}`}>
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <MdEmail className="w-5 h-5" />
                  <span className="text-sm font-medium">Email</span>
                </CardContent>
              </Card>
            </a>

            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </CardContent>
              </Card>
            </a>

            <a href={upwork} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <FaUpwork className="w-5 h-5" />
                  <span className="text-sm font-medium">Upwork</span>
                </CardContent>
              </Card>
            </a>

            <a href={github} target="_blank" rel="noopener noreferrer">
              <Card className="p-3 text-center hover:scale-105 hover:shadow-md transition">
                <CardContent className="flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">Github</span>
                </CardContent>
              </Card>
            </a>
          </div>

          <p className="text-center font-semibold pt-2">
            <a
              href={`mailto:${email}`}
              className="hover:text-muted-foreground transition"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
