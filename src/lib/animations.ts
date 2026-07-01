import { Variants } from "motion/react";

export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.20, // delays the start of each child animation by **0.30 seconds**
    },
  },
};

export const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
