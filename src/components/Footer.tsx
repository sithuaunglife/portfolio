"use client"

import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="max-w-5xl mx-auto px-6 text-sm text-muted-foreground"
    >
      <div className="w-full h-px bg-border my-16" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 pb-10">
        <p className="text-lg leading-none">
          © {new Date().getFullYear()} Sithu Aung. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
