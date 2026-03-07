export const getViewportConfig = () => {
  if (typeof window === "undefined") {
    return { amount: "some" as const, margin: "-100px" };
  }

  const isMobile = window.innerWidth < 768; // md breakpoint

  return isMobile
    ? { once: true }
    : { amount: "some" as const, margin: "-100px" };
};
