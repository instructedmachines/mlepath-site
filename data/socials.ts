/**
 * Socials are intentionally limited to the three active channels.
 * When re-adding others use:
 *   X https://x.com/mlepath · Bluesky https://bsky.app/profile/mlepath.com
 *   GitHub https://github.com/MLE-Path
 */
export interface Social {
  name: string;
  handle: string;
  href: string;
  icon: "youtube" | "substack" | "linkedin";
}

export const socials: Social[] = [
  {
    name: "YouTube",
    handle: "@MLEpath",
    href: "https://www.youtube.com/@MLEpath",
    icon: "youtube",
  },
  {
    name: "Substack",
    handle: "@mlepath",
    href: "https://substack.com/@mlepath",
    icon: "substack",
  },
  {
    name: "LinkedIn",
    handle: "company/mlepath",
    href: "https://www.linkedin.com/company/mlepath",
    icon: "linkedin",
  },
];

export const NEWSLETTER_URL = "https://mlepath.substack.com";
export const NEWSLETTER_EMBED_URL = "https://mlepath.substack.com/embed";
export const CONTACT_EMAIL = "ilya@mlepath.com";
