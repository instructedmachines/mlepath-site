export interface Offering {
  id: "accelerator" | "transition" | "mock";
  eyebrow: string;
  title: string;
  cardBlurb: string;
  situation: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * CTA links are tracked go.mlepath.com short links — keep them absolute
 * and exactly as-is. Pricing intentionally lives on the linked pages only.
 */
export const offerings: Offering[] = [
  {
    id: "accelerator",
    eyebrow: "For current MLEs & AI engineers",
    title: "4-Week Interview Accelerator",
    cardBlurb:
      "Four weekly 1-on-1 sessions, tailored to your target companies. The modern loop is fractured — prep like it.",
    situation:
      "You are already an MLE or AI engineer and interviews are coming up",
    ctaLabel: "Join the Accelerator",
    ctaHref: "https://go.mlepath.com/445Ielw",
  },
  {
    id: "mock",
    eyebrow: "For candidates days from a loop",
    title: "1-on-1 ML System Design Mock",
    cardBlurb:
      "45 minutes, a realistic scenario, immediate blunt feedback — and guidance on the rest of your loop.",
    situation: "Your loop is within about two weeks",
    ctaLabel: "Book a mock",
    ctaHref: "https://go.mlepath.com/4vOFZPG",
  },
  {
    id: "transition",
    eyebrow: "For engineers crossing into ML",
    title: "6-Month Transition to MLE Program",
    cardBlurb:
      "Proof of work, not certificates: a real project, deep fundamentals, and an open-source capstone shipped to real users.",
    situation: "You have no production ML experience yet",
    ctaLabel: "Start the transition",
    ctaHref: "https://go.mlepath.com/4bnSeud",
  },
];
