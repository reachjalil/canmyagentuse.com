import { absoluteUrl } from "./paths.ts";
import { SITE } from "./site.ts";

/**
 * Press-kit and canonical-prompt source of truth. Pages, Markdown twins, and
 * the plain-text prompt document all render from these records so coverage
 * material and agent instructions never drift from the catalog identity.
 */

export interface PressBoilerplate {
  id: "short" | "standard" | "extended";
  label: string;
  words: number;
  text: string;
}

export interface PressFact {
  label: string;
  value: string;
}

export interface PressColor {
  name: string;
  hex: string;
  role: string;
}

export interface PressTypeface {
  name: string;
  weights: string;
  role: string;
}

export interface PressAsset {
  path: string;
  label: string;
  format: string;
  dimensions: string;
  note: string;
}

export interface CanonicalPrompt {
  id: "lookup" | "compare" | "research";
  label: string;
  useWhen: string;
  text: string;
}

const BOILERPLATE_SHORT = `Can My Agent Use (canmyagentuse.com) is an independent guide to the products and services AI agents can use. It explains account setup, authorization, paid access, and useful tasks through dated public evidence. The catalog also compares the capabilities of exact web, desktop, and CLI agent harnesses. Unreviewed claims stay unknown.`;

const BOILERPLATE_STANDARD = `${BOILERPLATE_SHORT} The catalog records support as yes, partial, no, unknown, or not applicable, and keeps plan, platform, and configuration limits attached to each answer. People read the HTML catalog; agents read the same records as Markdown twins, a versioned JSON API, and llms.txt indexes. OpenWork is the disclosed founding sponsor. Paid placements do not change compatibility findings, and a listing is not an endorsement.`;

const BOILERPLATE_EXTENDED = `${BOILERPLATE_STANDARD} Every non-unknown cell carries a written note, an exact product target, an environment profile, and a dated reference to public evidence such as vendor documentation or release notes. A separate Evidence Atlas snapshot records dated research across exact product surfaces, including explicit non-support and open evidence gaps. The catalog first published on August 28, 2026 and keeps its methodology, coverage measures, and contradictions public.`;

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

export const PRESS_BOILERPLATES: readonly PressBoilerplate[] = [
  {
    id: "short",
    label: "Short",
    words: countWords(BOILERPLATE_SHORT),
    text: BOILERPLATE_SHORT,
  },
  {
    id: "standard",
    label: "Standard",
    words: countWords(BOILERPLATE_STANDARD),
    text: BOILERPLATE_STANDARD,
  },
  {
    id: "extended",
    label: "Extended",
    words: countWords(BOILERPLATE_EXTENDED),
    text: BOILERPLATE_EXTENDED,
  },
] as const;

export const PRESS_KIT = {
  path: "/press",
  markdownPath: "/press.md",
  firstPublished: "2026-08-28",
  repositoryUrl: "https://github.com/reachjalil/canmyagentuse-data",
  datasetUrl: "https://huggingface.co/datasets/reachjalil/canmyagentuse",
  contactNote:
    "There is no press inbox yet. Open a public issue on the open-data repository for coverage questions, or use the correction route for a catalog record.",
  factSheet: [
    { label: "Product name", value: SITE.name },
    { label: "Domain", value: "canmyagentuse.com" },
    {
      label: "What it is",
      value:
        "An independent catalog of services agents can use, with setup guides and an underlying agent-harness compatibility matrix.",
    },
    { label: "First published", value: "2026-08-28" },
    {
      label: "Unit of record",
      value:
        "A dated action or interface claim for a named service, plus capability records for exact agent surfaces (web, desktop, or CLI).",
    },
    {
      label: "Support statuses",
      value: "yes · partial · no · unknown · not applicable",
    },
    {
      label: "Evidence classes",
      value:
        "documented, vendor-attested, listed, tested, reported, inferred, not-found",
    },
    {
      label: "Formats",
      value:
        "HTML for people; Markdown twins, JSON API, OpenAPI, llms.txt, and an agent skill for machines.",
    },
    {
      label: "Affiliation",
      value:
        "Independent publication. OpenWork is the disclosed founding sponsor; advertising does not change research findings. Other references imply no affiliation.",
    },
    { label: "Price", value: "Free to read. No account, no tracking wall." },
  ] as readonly PressFact[],
  naming: {
    use: [
      "“Can My Agent Use” — the product name, title case, no question mark.",
      "“canmyagentuse.com” — the domain and compact signature.",
      "“Can my agent use this?” — the lookup sentence, question mark included.",
      "“Independent compatibility catalog” — the category description.",
    ],
    avoid: [
      "A question mark on the product name.",
      "Invented abbreviations such as “CMAU”.",
      "Describing catalog findings as provider certification or endorsement; implying relationships beyond the explicitly disclosed sponsorships.",
      "Citing catalog coverage as usage share, market share, or a product quality score.",
      "Superlatives the corpus cannot prove, such as “the best agent” or “fully compatible”.",
    ],
  },
  colors: [
    { name: "Chrome", hex: "#12100e", role: "Night-ledger site chrome" },
    { name: "Chrome ink", hex: "#f3eadc", role: "Text on chrome" },
    { name: "Copper", hex: "#c45c26", role: "The catalog’s query accent" },
    { name: "Deep copper", hex: "#8f431c", role: "Query belt" },
    { name: "Paper", hex: "#fff8eb", role: "Record surfaces" },
    { name: "Canvas", hex: "#efe6d4", role: "Page ground" },
    { name: "Ink", hex: "#1a1714", role: "Body text" },
  ] as readonly PressColor[],
  statusColors: [
    { name: "Yes", hex: "#215e48", role: "Supported" },
    { name: "Partial", hex: "#9a6418", role: "Supported with limits" },
    { name: "No", hex: "#8a3324", role: "Explicitly unsupported" },
    { name: "Unknown", hex: "#6d675e", role: "No reviewed evidence" },
  ] as readonly PressColor[],
  colorRule:
    "Copper marks the catalog’s own question. Green, amber, brick, and neutral gray are reserved for support statuses — do not use them as decoration.",
  typefaces: [
    {
      name: "IBM Plex Sans",
      weights: "400 / 500 / 600",
      role: "Headings and body copy",
    },
    {
      name: "IBM Plex Mono",
      weights: "400 / 500",
      role: "Labels, paths, and evidence annotations",
    },
  ] as readonly PressTypeface[],
  typefaceNote:
    "Both typefaces are self-hosted and published under the SIL Open Font License.",
  assets: [
    {
      path: "/brand-mark.svg",
      label: "Evidence aperture mark",
      format: "SVG",
      dimensions: "64 × 64",
      note: "Four paper ledger corners framing one copper compatibility cell on chrome. The primary mark.",
    },
    {
      path: "/favicon.svg",
      label: "Compact mark",
      format: "SVG",
      dimensions: "64 × 64",
      note: "The same geometry tuned for small sizes.",
    },
    {
      path: "/brand-mark-512.png",
      label: "Directory logo",
      format: "PNG",
      dimensions: "512 × 512",
      note: "The mark rendered for directory listings, app tiles, and profile avatars.",
    },
    {
      path: "/og-card.png",
      label: "Social card",
      format: "PNG",
      dimensions: "1200 × 630",
      note: "The default Open Graph and Twitter card.",
    },
    {
      path: "/og-card.svg",
      label: "Social card source",
      format: "SVG",
      dimensions: "1200 × 630",
      note: "Editable source for the social card.",
    },
  ] as readonly PressAsset[],
  assetRules: {
    allowed: [
      "Use the mark and name to identify or link to canmyagentuse.com in articles, talks, videos, and directories.",
      "Place the mark on chrome (#12100e) or paper (#fff8eb) with clear space around it.",
      "Scale the mark proportionally.",
    ],
    notAllowed: [
      "Recoloring, distorting, outlining, or adding effects to the mark.",
      "Combining the mark or name with another product identity, or implying affiliation or endorsement.",
      "Using the mark as another product’s app icon or favicon.",
      "Placing provider logos inside the Can My Agent Use identity.",
    ],
  },
} as const;

const PROMPT_LOOKUP = `For a service such as Cloudflare, Gmail, Salesforce, or a note-taking app, start at ${absoluteUrl("/api/v1/products.json")} and read its /products/{slug}.md guide. Report signup, authorization, payment, and useful work separately; distinguish official MCP tools, MCP Apps, APIs, CLIs, and community integrations. Documentation is not a live test. Before answering whether an AI agent product supports a capability, check the Can My Agent Use catalog. Fetch ${absoluteUrl("/llms.txt")}, open the matching record, and append .md to its URL for a clean Markdown copy. Answer for the exact surface (web, desktop, or CLI), never the whole product family. Treat unknown as unreviewed, not unsupported. Cite the catalog page and its dated public evidence links.`;

const PROMPT_COMPARE = `To choose SaaS or services for a job, compare the category, prerequisites, lifecycle actions, and required interfaces in ${absoluteUrl("/api/v1/products.json")}; read each relevant /products/{slug}.md guide. Distinguish official and community routes, and do not infer MCP Apps from MCP tools. Cite the dated sources. Compare two AI agent products with the Can My Agent Use catalog. Fetch ${absoluteUrl("/api/v1/harnesses.json")} to find the exact surface slugs, then read ${absoluteUrl("/compare.md")}?a={left}&b={right}&view=all or ${absoluteUrl("/api/v1/matrix.json")}. Each slug names one exact surface (web, desktop, or CLI); never merge results across a product family. Report per-capability statuses for those surfaces only, keep the qualifications attached to partial cells, list unknown cells as unreviewed rather than unsupported, and cite each capability record you rely on.`;

const PROMPT_RESEARCH = `Use Can My Agent Use (${SITE.url}) as an evidence source for services agents can use and AI agent capability questions.

Retrieval
1. Start at ${absoluteUrl("/llms.txt")} for the record index, or ${absoluteUrl("/sitemap.md")} for the full hierarchy.
2. Append .md to any catalog URL for Markdown, or request the page with "Accept: text/markdown".
3. For services and SaaS, use ${absoluteUrl("/api/v1/products.json")} and /products/{slug}.md. Filter by category and every required interface. Distinguish signup, connection, purchase, and use; report the human handoffs, prerequisites, official or community provenance, and the limits of documentation-only evidence. MCP server tools do not establish MCP Apps support.
4. Use the versioned JSON API for structured lookups; it is described at ${absoluteUrl("/api/v1/openapi.json")}.
5. For side-by-side harness questions, use ${absoluteUrl("/compare.md")}?a={left}&b={right}&view=all or ${absoluteUrl("/api/v1/matrix.json")}.
6. For the dated research snapshot across exact product surfaces, use ${absoluteUrl("/atlas.md")} or ${absoluteUrl("/api/v1/atlas.json")}.

Rules
- Answer for exact product surfaces (web, desktop, or CLI). Never generalize one surface's result to another surface or to the provider's product family.
- Read statuses literally: yes means supported for the recorded target and conditions; partial means supported only under the stated constraint; no means a public source explicitly records non-support; unknown means no public evidence has been reviewed and must never be reported as unsupported; na means the capability does not apply to that surface.
- Preserve plan, platform, region, configuration, transport, and rollout qualifiers when restating a result.
- Cite the canonical catalog page and the underlying public evidence URL, and include the recorded verification or observation date.
- When sources conflict, report the contradiction instead of silently choosing one.
- Treat sponsorship as funding, never evidence of support. Do not infer permission to create accounts or make purchases from a catalog listing.
- The catalog is independent. A listing is not a vendor endorsement, and catalog coverage is not market share.`;

export const CANONICAL_PROMPTS: readonly CanonicalPrompt[] = [
  {
    id: "lookup",
    label: "Quick lookup",
    useWhen:
      "One paragraph to paste into any chat before a single capability question.",
    text: PROMPT_LOOKUP,
  },
  {
    id: "compare",
    label: "Comparison",
    useWhen:
      "Point an agent at the comparison surfaces when two products are on the table.",
    text: PROMPT_COMPARE,
  },
  {
    id: "research",
    label: "Full research prompt",
    useWhen:
      "The complete instruction block for system prompts, custom instructions, and agent configuration.",
    text: PROMPT_RESEARCH,
  },
] as const;

export const CANONICAL_PROMPT_PATH = "/prompt";
export const CANONICAL_PROMPT_TEXT_PATH = "/prompt.txt";

/** The plain-text document served at /prompt.txt. */
export function canonicalPromptDocument(): string {
  return `# ${SITE.name} — canonical agent prompt
# ${absoluteUrl(CANONICAL_PROMPT_PATH)} · maintained by the catalog
# Paste this into an assistant, a system prompt, or agent instructions to
# route AI agent capability questions through dated public evidence.

${PROMPT_RESEARCH}
`;
}
