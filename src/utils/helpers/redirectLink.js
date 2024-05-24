export const redirectLink = (link) => {
  if (typeof window !== undefined) {
    window.open(link, "_blank");
  }
};
