import { Variants } from "motion/react";

export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // delays the start of each child animation by **0.15 seconds**
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
