export const VariantsNotFound = {
  initial: {
    x: "-100%"
  },
  in: {
    x: 0,
    transition: { duration: 1}
  },
  out: {
    x: "-100%",
    transition: { duration: 1.05 }
  }
};

export const VariantsRight = {
  initial: {
    x: "100%"
  },
  in: {
    x: 0,
    transition: { duration: 1}
  },
  out: {
    x: "-100%",
    transition: { duration: 1.05 }
  }
};
export const VariantsLeft = {
  initial: {
    x: "-100%"
  },
  in: {
    x: 0,
    transition: { duration: 1}
  },
  out: {
    x: "100%",
    transition: { duration: 1.05 }
  }
};

export const Transition = {
  type: "spring",
  delay: 0.4,
  mass: 0.2,
  duration: 1
};