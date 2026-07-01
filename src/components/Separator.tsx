"use client"

import { motion } from "motion/react";

const Separator = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="max-w-5xl mx-auto px-6"
    >
      <div className="h-px my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.div>
  );
}

export default Separator;