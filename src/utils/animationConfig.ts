export const getViewportConfig = (section?: "skills" | "projects") => {
  if (typeof window === "undefined") {
    return { amount: "some" as const, margin: "-100px" };
  }

  const isMobile = window.innerWidth < 768; // md breakpoint

  if (isMobile && (section === "skills" || section === "projects")) {
    return { once: true };
  }

  return isMobile
    ? { once: true }
    : { amount: "some" as const, margin: "-100px" };
};

export const getTransitionConfig = (section?: "skills" | "projects") => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const isMobile = window.innerWidth < 768;

  // Disable animation duration on mobile for skills and projects
  if (isMobile && (section === "skills" || section === "projects")) {
    return { duration: 0 };
  }

  return undefined;
};
