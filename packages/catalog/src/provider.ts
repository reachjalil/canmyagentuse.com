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

export type ProviderMarkSourceId = "lobe-icons" | "simple-icons";

export interface ProviderMarkSource {
  id: ProviderMarkSourceId;
  label: string;
  packageName: string;
  packageVersion: string;
  revision: string;
  repositoryUrl: `https://${string}`;
  license: "MIT" | "CC0-1.0";
  licenseUrl: `https://${string}`;
}

export interface ProviderMarkAuthorization {
  id: string;
  label: string;
  assetPath: `/provider-marks/${string}`;
  source: ProviderMarkSourceId;
  sourceAsset: string;
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
  simpleMark("github", "GitHub", "github", "https://github.com/logos"),
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
  return (
    mark.assetPath.startsWith("/provider-marks/") &&
    source.repositoryUrl.startsWith("https://") &&
    source.licenseUrl.startsWith("https://") &&
    (!mark.brandGuidelinesUrl ||
      mark.brandGuidelinesUrl.startsWith("https://")) &&
    ["lobe-icons", "simple-icons"].includes(mark.source) &&
    ["MIT", "CC0-1.0"].includes(source.license) &&
    /^[a-f0-9]{40}$/.test(source.revision) &&
    /^\d{4}-\d{2}-\d{2}$/.test(mark.reviewedAt) &&
    mark.sourceAsset.trim().length > 0
  );
}
