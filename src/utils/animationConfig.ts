export const getViewportConfig = (section?: "skills" | "projects") => {
  if (typeof window === "undefined") {
    return { amount: "some" as const, margin: "-100px" };
  }

  const isMobile = window.innerWidth < 768; // md breakpoint

  // Disable animations for Skills and Projects on mobile
  if (isMobile && (section === "skills" || section === "projects")) {
    return { once: true, amount: "all" as const };
  }

  return isMobile
    ? { once: true }
    : { amount: "some" as const, margin: "-100px" };
};
