export const LOCALES = ["en"] as const;

export type Locale = (typeof LOCALES)[number];

export const SITE = {
  name: "Can My Agent Use",
  shortName: "canmyagentuse",
  tagline: "Can my agent use this?",
  positioning: "Compatibility answers for engineers choosing an agent product.",
  description:
    "Check whether a chat, desktop, or CLI agent product supports a capability. Every published answer links to public evidence.",
  url: "https://canmyagentuse.com",
  defaultLocale: "en" as const,
  locales: LOCALES,
  themeColor: "#12100e",
  markPath: "/brand-mark.svg",
  socialImagePath: "/og-card.png",
  socialImageAlt:
    "Can My Agent Use night-ledger card with a copper evidence cell framed by ledger corners and the words Lookup, compare, cite.",
  foundationNotice:
    "The first review covers selected current-version claims. Every other cell stays unknown until a public source is reviewed.",
  independentNotice:
    "Can My Agent Use is independent. Product names identify catalog rows. They do not imply affiliation, endorsement, certification, or official status.",
} as const;

export type SiteConfig = typeof SITE;
