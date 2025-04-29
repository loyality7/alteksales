
export const childVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

export const parentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    type: "spring",
    stiffness: 100,
    damping: 5,
    transition: {
      staggerChildren: 0.15,
    },
  },
};