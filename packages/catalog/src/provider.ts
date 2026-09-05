export const PROVIDER_TONES = [
  "ink",
  "copper",
  "clay",
  "indigo",
  "teal",
  "olive",
  "plum",
  "slate",
] as const;

export type ProviderTone = (typeof PROVIDER_TONES)[number];

export interface ProviderReference {
  name: string;
  monogram: string;
  tone: ProviderTone;
}

export type ProviderMarkSourceId =
  | "lobe-icons"
  | "simple-icons"
  | "google-brand"
  | "salesforce-brand"
  | "microsoft-brand"
  | "slack-brand"
  | "atom-brand"
  | "amc-brand"
  | "bestbuy-brand"
  | "amazon-brand";

export interface ProviderMarkSource {
  id: ProviderMarkSourceId;
  label: string;
  kind?: "provider-download";
  packageName?: string;
  packageVersion?: string;
  revision?: string;
  repositoryUrl: `https://${string}`;
  license: "MIT" | "CC0-1.0" | "Provider terms";
  licenseUrl: `https://${string}`;
}

export interface ProviderMarkAuthorization {
  id: string;
  label: string;
  assetPath: `/provider-marks/${string}`;
  source: ProviderMarkSourceId;
  sourceAsset: string;
  sourceUrl?: `https://${string}`;
  sha256?: string;
  brandGuidelinesUrl?: `https://${string}`;
  reviewedAt: `${number}-${number}-${number}`;
}

export interface ProviderReferenceIdentity extends ProviderReference {
  product?: string;
  productSlug?: string;
  mark?: ProviderMarkAuthorization;
}

const MARK_REVIEW_DATE = "2026-08-28" as const;
const LOBE_ICONS_REVISION = "fbd2d56e3f734e889f1373e71c8368cc4e60e0d7";
const SIMPLE_ICONS_REVISION = "c956d67dfa7c37ae65206fc0775b0c02d1e695c2";

function providerDownloadSource(
  id: ProviderMarkSourceId,
  label: string,
  repositoryUrl: `https://${string}`,
  licenseUrl: `https://${string}`
): ProviderMarkSource {
  return {
    id,
    label,
    repositoryUrl,
    licenseUrl,
    license: "Provider terms",
    kind: "provider-download",
  };
}

export const PROVIDER_MARK_SOURCES: readonly ProviderMarkSource[] = [
  {
    id: "lobe-icons",
    label: "Lobe Icons",
    packageName: "@lobehub/icons-static-svg",
    packageVersion: "1.94.0",
    revision: LOBE_ICONS_REVISION,
    repositoryUrl: "https://github.com/lobehub/lobe-icons",
    license: "MIT",
    licenseUrl: `https://github.com/lobehub/lobe-icons/blob/${LOBE_ICONS_REVISION}/LICENSE`,
  },
  {
    id: "simple-icons",
    label: "Simple Icons",
    packageName: "simple-icons",
    packageVersion: "16.28.0",
    revision: SIMPLE_ICONS_REVISION,
    repositoryUrl: "https://github.com/simple-icons/simple-icons",
    license: "CC0-1.0",
    licenseUrl: `https://github.com/simple-icons/simple-icons/blob/${SIMPLE_ICONS_REVISION}/LICENSE.md`,
  },
  providerDownloadSource(
    "google-brand",
    "Google product assets",
    "https://about.google/products/",
    "https://about.google/brand-resource-center/guidance/"
  ),
  providerDownloadSource(
    "salesforce-brand",
    "Salesforce brand assets",
    "https://www.salesforce.com/news/media-collection/company-logos-and-video/",
    "https://www.salesforce.com/company/legal/intellectual/tmcusageguidelines/"
  ),
  providerDownloadSource(
    "microsoft-brand",
    "Microsoft OneNote assets",
    "https://www.onenote.com/",
    "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks"
  ),
  providerDownloadSource(
    "slack-brand",
    "Slack media kit",
    "https://slack.com/media-kit",
    "https://slack.com/media-kit"
  ),
  providerDownloadSource(
    "atom-brand",
    "Atom Tickets assets",
    "https://www.atomtickets.com/about",
    "https://www.atomtickets.com/tos"
  ),
  providerDownloadSource(
    "amc-brand",
    "AMC Theatres investor assets",
    "https://investor.amctheatres.com/",
    "https://www.amctheatres.com/terms-and-conditions"
  ),
  providerDownloadSource(
    "bestbuy-brand",
    "Best Buy corporate assets",
    "https://corporate.bestbuy.com/press-center/",
    "https://corporate.bestbuy.com/media-faq/"
  ),
  providerDownloadSource(
    "amazon-brand",
    "Amazon corporate assets",
    "https://www.aboutamazon.com/",
    "https://images-na.ssl-images-amazon.com/images/G/01/AdvertisingSite/pdfs/AmazonBrandUsageGuidelines.pdf"
  ),
] as const;

const MARK_SOURCES_BY_ID = new Map(
  PROVIDER_MARK_SOURCES.map((source) => [source.id, source])
);

function lobeMark(
  id: string,
  label: string,
  sourceAsset: string,
  brandGuidelinesUrl?: `https://${string}`
): ProviderMarkAuthorization {
  return {
    id,
    label,
    assetPath: `/provider-marks/${id}.svg`,
    source: "lobe-icons",
    sourceAsset,
    brandGuidelinesUrl,
    reviewedAt: MARK_REVIEW_DATE,
  };
}

function simpleMark(
  id: string,
  label: string,
  sourceAsset: string,
  brandGuidelinesUrl?: `https://${string}`
): ProviderMarkAuthorization {
  return {
    id,
    label,
    assetPath: `/provider-marks/${id}.svg`,
    source: "simple-icons",
    sourceAsset,
    brandGuidelinesUrl,
    reviewedAt: MARK_REVIEW_DATE,
  };
}

function downloadedMark(
  id: string,
  label: string,
  source: ProviderMarkSourceId,
  sourceAsset: string,
  sourceUrl: `https://${string}`,
  sha256: string,
  brandGuidelinesUrl: `https://${string}`
): ProviderMarkAuthorization {
  return {
    id,
    label,
    source,
    sourceAsset,
    sourceUrl,
    sha256,
    brandGuidelinesUrl,
    assetPath: `/provider-marks/${sourceAsset}`,
    reviewedAt: "2026-09-04",
  };
}

export const PROVIDER_MARKS: readonly ProviderMarkAuthorization[] = [
  lobeMark("amp", "Amp", "amp"),
  lobeMark("anthropic", "Anthropic", "anthropic"),
  lobeMark("aws", "Amazon Web Services", "aws-color"),
  lobeMark("claude", "Claude", "claude-color"),
  lobeMark("claude-code", "Claude Code", "claudecode-color"),
  lobeMark("cline", "Cline", "cline"),
  lobeMark("codex", "Codex", "codex-color", "https://openai.com/brand/"),
  lobeMark(
    "copilot",
    "Microsoft Copilot",
    "copilot-color",
    "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks"
  ),
  lobeMark("cursor", "Cursor", "cursor"),
  lobeMark("devin", "Devin", "devin-color"),
  lobeMark(
    "gemini",
    "Gemini",
    "gemini-color",
    "https://about.google/brand-resource-center/"
  ),
  lobeMark(
    "gemini-cli",
    "Gemini CLI",
    "geminicli-color",
    "https://about.google/brand-resource-center/"
  ),
  lobeMark(
    "github-copilot",
    "GitHub Copilot",
    "githubcopilot",
    "https://github.com/logos"
  ),
  lobeMark(
    "google",
    "Google",
    "google-color",
    "https://about.google/brand-resource-center/"
  ),
  lobeMark("goose", "goose", "goose"),
  lobeMark("grok", "Grok", "grok", "https://x.ai/legal/brand-guidelines"),
  lobeMark("hermes-agent", "Hermes Agent", "hermesagent"),
  lobeMark("kilocode", "Kilo Code", "kilocode"),
  lobeMark("langchain", "LangChain", "langchain-color"),
  lobeMark(
    "microsoft",
    "Microsoft",
    "microsoft-color",
    "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks"
  ),
  lobeMark("mistral", "Mistral AI", "mistral-color"),
  lobeMark("moonshot", "Moonshot AI", "moonshot"),
  lobeMark("nova", "Nova", "nova-color"),
  lobeMark("openai", "OpenAI", "openai", "https://openai.com/brand/"),
  lobeMark("openclaw", "OpenClaw", "openclaw-color"),
  lobeMark("opencode", "OpenCode", "opencode"),
  lobeMark("openhands", "OpenHands", "openhands-color"),
  lobeMark("perplexity", "Perplexity", "perplexity-color"),
  lobeMark("pi", "Pi", "pi"),
  lobeMark("poolside", "Poolside", "poolside-color"),
  lobeMark("qoder", "Qoder", "qoder-color"),
  lobeMark("qwen", "Qwen", "qwen-color"),
  lobeMark("replit", "Replit", "replit-color"),
  lobeMark("roo-code", "Roo Code", "roocode"),
  lobeMark("snowflake", "Snowflake", "snowflake-color"),
  lobeMark("tencent-codebuddy", "Tencent CodeBuddy", "codebuddy-color"),
  lobeMark("windsurf", "Windsurf", "windsurf", "https://windsurf.com/brand"),
  lobeMark("xai", "xAI", "xai", "https://x.ai/legal/brand-guidelines"),
  lobeMark("zai", "Z.AI", "zai"),
  {
    ...lobeMark(
      "cloudflare",
      "Cloudflare",
      "cloudflare-color",
      "https://www.cloudflare.com/trademark/"
    ),
    reviewedAt: "2026-09-04",
  },
  {
    ...lobeMark(
      "notion",
      "Notion",
      "notion",
      "https://notion.notion.site/Notion-Brand-Guidelines-db8fda2d1f0048bba1f4e547dfc48830"
    ),
    reviewedAt: "2026-09-04",
  },
  {
    ...lobeMark(
      "obsidian",
      "Obsidian",
      "obsidian-color",
      "https://obsidian.md/brand"
    ),
    reviewedAt: "2026-09-04",
  },
  {
    ...simpleMark("linear", "Linear", "linear", "https://linear.app/brand"),
    reviewedAt: "2026-09-04",
  },
  downloadedMark(
    "gmail",
    "Gmail",
    "google-brand",
    "gmail.webp",
    "https://www.gstatic.com/marketing-cms/assets/images/3b/69/c8499c0b4d33a35b4cd4ca975e79/logo-gmail-2026-color-2x-web-64dp.webp",
    "e3718238591eefeb0a8b2937c5e0c8c3f535fc635718177d22575173e2974b4c",
    "https://about.google/brand-resource-center/guidance/"
  ),
  downloadedMark(
    "salesforce",
    "Salesforce",
    "salesforce-brand",
    "salesforce.svg",
    "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/logo-salesforce.svg",
    "29bc87240df68c546f04cb1bf3398b524b7d5e37a2d56f3b102b62f349244703",
    "https://www.salesforce.com/company/legal/intellectual/tmcusageguidelines/"
  ),
  downloadedMark(
    "onenote",
    "OneNote",
    "microsoft-brand",
    "onenote.png",
    "https://res.cdn.office.net/files/fabric-cdn-prod_20251117.001/assets/brand-icons/product/png/onenote_48x3.png",
    "5fe68a420d71c427b9e46a6a26aaa9e0043e2cdc57664b433318356b67d1e387",
    "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks"
  ),
  downloadedMark(
    "slack",
    "Slack",
    "slack-brand",
    "slack.svg",
    "https://a.slack-edge.com/9cc0056/marketing/img/nav/logo.svg",
    "1f40066b694020057218c46eb2a11982b278d89b2dc8f96a21e4ea04e2b9db3b",
    "https://slack.com/media-kit"
  ),
  downloadedMark(
    "atom-tickets",
    "Atom Tickets",
    "atom-brand",
    "atom-tickets.png",
    "https://www.atomtickets.com/assets/tenant/images/favicon-196x196.png",
    "ccea960aa85a23a11eed588d380e05aae0dcca4ad9c542c8eb528ca00e2a7553",
    "https://www.atomtickets.com/help/entry/copyright-and-trademark-legal-line"
  ),
  downloadedMark(
    "amc-theatres",
    "AMC Theatres",
    "amc-brand",
    "amc-theatres.png",
    "https://d1io3yog0oux5.cloudfront.net/_dc3b4c6a9cac71dafa8a05579f220f09/amctheatres/logo.png",
    "d43eb224ccf3067a530da854d92c3660879a1d6dd863bbb19eaa0b53723ca4cb",
    "https://www.amctheatres.com/terms-and-conditions"
  ),
  downloadedMark(
    "best-buy",
    "Best Buy",
    "bestbuy-brand",
    "best-buy.png",
    "https://corporate.bestbuy.com/wp-content/uploads/thegem-logos/logo_0717ce843a2125d21ef450e7f05f352e_3x.png",
    "474a3485f9a72d5419712023ba46ac0006c3acbd51c11772e1c691f77d3250c3",
    "https://corporate.bestbuy.com/media-faq/"
  ),
  downloadedMark(
    "amazon",
    "Amazon",
    "amazon-brand",
    "amazon.png",
    "https://www.aboutamazon.com/_next/static/media/apple-touch-icon.706b1b87.png",
    "f8184c36ab5439a22007f105d0366f10bbb782ab1d379e38759e452965c18805",
    "https://images-na.ssl-images-amazon.com/images/G/01/AdvertisingSite/pdfs/AmazonBrandUsageGuidelines.pdf"
  ),
  {
    ...simpleMark("github", "GitHub", "github", "https://github.com/logos"),
    reviewedAt: "2026-09-04",
  },
  simpleMark("chrome", "Google Chrome", "googlechrome"),
  simpleMark(
    "jetbrains",
    "JetBrains",
    "jetbrains",
    "https://www.jetbrains.com/company/brand/"
  ),
  simpleMark("warp", "Warp", "warp"),
  simpleMark("zed", "Zed Industries", "zedindustries"),
] as const;

const MARKS_BY_ID = new Map(PROVIDER_MARKS.map((mark) => [mark.id, mark]));

const PROVIDER_MARK_ALIASES: Readonly<Record<string, string>> = {
  amazon: "amazon",
  "best buy": "best-buy",
  "amc theatres": "amc-theatres",
  "atom tickets": "atom-tickets",
  linear: "linear",
  slack: "slack",
  obsidian: "obsidian",
  notion: "notion",
  salesforce: "salesforce",
  cloudflare: "cloudflare",
  "alibaba / qwen": "qwen",
  "aws / kiro": "aws",
  "block / goose": "goose",
  "compass ai / nova": "nova",
  "langchain / deepagents": "langchain",
  "microsoft / visual studio code": "microsoft",
  "nous research / hermes": "hermes-agent",
  "tencent cloud / codebuddy": "tencent-codebuddy",
  "z.ai / glm agent": "zai",
  amp: "amp",
  anthropic: "anthropic",
  cline: "cline",
  codeium: "windsurf",
  cognition: "devin",
  cursor: "cursor",
  github: "github",
  google: "google",
  jetbrains: "jetbrains",
  kilo: "kilocode",
  "mistral ai": "mistral",
  mistral: "mistral",
  "moonshot ai": "moonshot",
  openai: "openai",
  openclaw: "openclaw",
  opencode: "opencode",
  openhands: "openhands",
  perplexity: "perplexity",
  pi: "pi",
  poolside: "poolside",
  qoder: "qoder",
  replit: "replit",
  "roo code": "roo-code",
  snowflake: "snowflake",
  warp: "warp",
  xai: "xai",
  zed: "zed",
  "zed industries": "zed",
};

const PRODUCT_MARK_ALIASES: Readonly<Record<string, string>> = {
  amazon: "amazon",
  "best-buy": "best-buy",
  "amc-theatres": "amc-theatres",
  "atom-tickets": "atom-tickets",
  linear: "linear",
  slack: "slack",
  github: "github",
  onenote: "onenote",
  obsidian: "obsidian",
  notion: "notion",
  salesforce: "salesforce",
  gmail: "gmail",
  cloudflare: "cloudflare",
  "amp-cli": "amp",
  "chatgpt-cli": "openai",
  "chatgpt-desktop": "openai",
  "chatgpt-web": "openai",
  "chrome-webmcp-preview": "chrome",
  "claude-cli": "claude-code",
  "claude-desktop": "claude",
  "claude-web": "claude",
  cline: "cline",
  "codex-cli": "codex",
  "copilot-cli": "github-copilot",
  "copilot-web": "copilot",
  cursor: "cursor",
  "devin-web": "devin",
  "gemini-cli": "gemini-cli",
  "gemini-web": "gemini",
  goose: "goose",
  "grok-bot-desktop": "grok",
  "grok-web": "grok",
  "jetbrains-ai": "jetbrains",
  "le-chat": "mistral",
  opencode: "opencode",
  "perplexity-web": "perplexity",
  "replit-agent": "replit",
  "vscode-copilot": "github-copilot",
  warp: "warp",
  windsurf: "windsurf",
  "zed-agent": "zed",
};

const PROVIDER_OVERRIDES: Readonly<
  Record<string, Pick<ProviderReference, "monogram" | "tone">>
> = {
  aider: { monogram: "AI", tone: "olive" },
  anthropic: { monogram: "AN", tone: "clay" },
  anysphere: { monogram: "AY", tone: "slate" },
  block: { monogram: "BL", tone: "teal" },
  cline: { monogram: "CL", tone: "plum" },
  codeium: { monogram: "CO", tone: "indigo" },
  cognition: { monogram: "CG", tone: "plum" },
  continue: { monogram: "CT", tone: "copper" },
  google: { monogram: "GO", tone: "indigo" },
  jetbrains: { monogram: "JB", tone: "plum" },
  microsoft: { monogram: "MS", tone: "indigo" },
  mistral: { monogram: "MI", tone: "copper" },
  openai: { monogram: "OA", tone: "ink" },
  opencode: { monogram: "OC", tone: "olive" },
  openwork: { monogram: "OW", tone: "copper" },
  perplexity: { monogram: "PX", tone: "teal" },
  replit: { monogram: "RP", tone: "copper" },
  sourcegraph: { monogram: "SG", tone: "clay" },
  warp: { monogram: "WP", tone: "plum" },
  xai: { monogram: "XA", tone: "slate" },
  zed: { monogram: "ZE", tone: "olive" },
};

function fallbackMonogram(name: string): string {
  const words = name
    .trim()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
  if (words.length >= 2) {
    return `${words[0]?.[0] ?? ""}${words[1]?.[0] ?? ""}`.toUpperCase();
  }
  return (words[0] ?? "?").slice(0, 2).toUpperCase();
}

function stableTone(name: string): ProviderTone {
  const hash = [...name.toLocaleLowerCase()].reduce(
    (value, character) => (value * 31 + (character.codePointAt(0) ?? 0)) >>> 0,
    7
  );
  return PROVIDER_TONES[hash % PROVIDER_TONES.length] ?? "ink";
}

export function providerReference(name: string): ProviderReference {
  const normalized = name.trim();
  const override = PROVIDER_OVERRIDES[normalized.toLocaleLowerCase()];
  return {
    name: normalized,
    monogram: override?.monogram ?? fallbackMonogram(normalized),
    tone: override?.tone ?? stableTone(normalized),
  };
}

export function providerMarkSource(
  source: ProviderMarkSourceId
): ProviderMarkSource {
  const record = MARK_SOURCES_BY_ID.get(source);
  if (!record) throw new Error(`Unknown provider mark source: ${source}`);
  return record;
}

export function providerMarkSourceUrl(
  mark: ProviderMarkAuthorization
): `https://${string}` {
  const source = providerMarkSource(mark.source);
  if (source.kind === "provider-download") {
    if (!mark.sourceUrl)
      throw new Error(`Missing exact provider asset URL: ${mark.id}`);
    return mark.sourceUrl;
  }
  if (source.id === "lobe-icons") {
    return `https://unpkg.com/${source.packageName}@${source.packageVersion}/icons/${mark.sourceAsset}.svg`;
  }
  return `${source.repositoryUrl}/blob/${source.revision}/icons/${mark.sourceAsset}.svg`;
}

export function providerMark(
  provider: string,
  productSlug?: string
): ProviderMarkAuthorization | undefined {
  const productMarkId = productSlug
    ? PRODUCT_MARK_ALIASES[productSlug.trim().toLocaleLowerCase()]
    : undefined;
  const providerMarkId =
    PROVIDER_MARK_ALIASES[provider.trim().toLocaleLowerCase()];
  const markId = productMarkId ?? providerMarkId;
  return markId ? MARKS_BY_ID.get(markId) : undefined;
}

export function referenceIdentity(input: {
  provider: string;
  product?: string;
  productSlug?: string;
}): ProviderReferenceIdentity {
  const reference = providerReference(input.provider);
  return {
    ...reference,
    product: input.product?.trim() || undefined,
    productSlug: input.productSlug?.trim() || undefined,
    mark: providerMark(input.provider, input.productSlug),
  };
}

export function providerMarkIsDisplayable(
  mark: ProviderMarkAuthorization | undefined
): mark is ProviderMarkAuthorization {
  if (!mark) return false;
  const source = MARK_SOURCES_BY_ID.get(mark.source);
  if (!source) return false;
  const verifiedSource =
    source.kind === "provider-download"
      ? source.license === "Provider terms" &&
        /^https:\/\//.test(mark.sourceUrl ?? "") &&
        /^[a-f0-9]{64}$/.test(mark.sha256 ?? "")
      : ["MIT", "CC0-1.0"].includes(source.license) &&
        /^[a-f0-9]{40}$/.test(source.revision ?? "");
  return (
    verifiedSource &&
    mark.assetPath.startsWith("/provider-marks/") &&
    source.repositoryUrl.startsWith("https://") &&
    source.licenseUrl.startsWith("https://") &&
    (!mark.brandGuidelinesUrl ||
      mark.brandGuidelinesUrl.startsWith("https://")) &&
    /^\d{4}-\d{2}-\d{2}$/.test(mark.reviewedAt) &&
    mark.sourceAsset.trim().length > 0
  );
}
