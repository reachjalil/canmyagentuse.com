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

export interface ProviderMarkAuthorization {
  assetPath: `/provider-marks/${string}`;
  sourceUrl: `https://${string}`;
  termsUrl: `https://${string}`;
  reviewedAt: `${number}-${number}-${number}`;
  permissionBasis: string;
}

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

export function providerMarkIsDisplayable(
  mark: ProviderMarkAuthorization | undefined
): mark is ProviderMarkAuthorization {
  if (!mark) return false;
  return (
    mark.assetPath.startsWith("/provider-marks/") &&
    mark.sourceUrl.startsWith("https://") &&
    mark.termsUrl.startsWith("https://") &&
    /^\d{4}-\d{2}-\d{2}$/.test(mark.reviewedAt) &&
    mark.permissionBasis.trim().length >= 12
  );
}
