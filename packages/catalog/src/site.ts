export const LOCALES = ["en"] as const;

export type Locale = (typeof LOCALES)[number];

export const SITE = {
  name: "Can My Agent Use",
  shortName: "canmyagentuse",
  tagline: "Find out what your agent can use",
  positioning:
    "Can your agent sign up, connect an account, pay, and get work done?",
  description:
    "Find out whether your agent can use products like Cloudflare, Gmail, and Salesforce. Check account setup, permissions, paid access, and the tools it takes.",
  url: "https://canmyagentuse.com",
  defaultLocale: "en" as const,
  locales: LOCALES,
  themeColor: "#12100e",
  markPath: "/brand-mark.svg",
  socialImagePath: "/og-card.png",
  socialImageAlt:
    "Can My Agent Use night-ledger card with a copper evidence cell framed by ledger corners and the words Lookup, compare, cite.",
  foundationNotice:
    "Product guides explain the path from account setup to a first task. Documentation reviews and unverified steps are labeled; the harness catalog supplies the underlying compatibility evidence.",
  independentNotice:
    "Independent compatibility research. Paid sponsorships are disclosed; other provider references imply no affiliation or endorsement. Product names and marks belong to their respective owners.",
} as const;

export type SiteConfig = typeof SITE;
