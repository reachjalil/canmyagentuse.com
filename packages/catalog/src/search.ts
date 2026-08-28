import type { FeatureData, HarnessData, SpecificationData } from "./schema.ts";
import type { CapabilityKind, SupportStage, SupportStatus } from "./status.ts";
import { supportStatusForFeature } from "./capability.ts";

export type SearchKind = "feature" | "harness" | "specification";

export interface CatalogSearchHit {
  kind: SearchKind;
  slug: string;
  title: string;
  summary: string;
  path: string;
  score: number;
  meta: string;
}

export interface CatalogSearchFilters {
  capabilityKind?: CapabilityKind;
  category?: string;
  family?: string;
  harness?: string;
  support?: SupportStatus;
  stage?: SupportStage;
  track?: string;
}

export function featureLetter(title: string): string {
  const match = title.match(/[A-Za-z]/);
  return (match?.[0] ?? "#").toUpperCase();
}

export function featureIndex(
  features: readonly FeatureData[]
): { letter: string; items: FeatureData[] }[] {
  const groups = new Map<string, FeatureData[]>();
  for (const feature of features) {
    const letter = featureLetter(feature.title);
    const bucket = groups.get(letter) ?? [];
    bucket.push(feature);
    groups.set(letter, bucket);
  }
  return [...groups.entries()]
    .toSorted(([left], [right]) => left.localeCompare(right))
    .map(([letter, items]) => ({
      letter,
      items: items.toSorted((left, right) =>
        left.title.localeCompare(right.title)
      ),
    }));
}

function normalized(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase("en")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
}

function editDistance(left: string, right: string): number {
  if (left === right) return 0;
  if (!left.length) return right.length;
  if (!right.length) return left.length;

  let previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    const current = [leftIndex];
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      current[rightIndex] = Math.min(
        (current[rightIndex - 1] ?? 0) + 1,
        (previous[rightIndex] ?? 0) + 1,
        (previous[rightIndex - 1] ?? 0) +
          (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1)
      );
    }
    previous = current;
  }
  return previous[right.length] ?? Math.max(left.length, right.length);
}

function fuzzyTokenMatch(needle: string, candidate: string): boolean {
  if (needle.length < 4 || candidate.length < 4) return false;
  const allowance = needle.length >= 8 ? 2 : 1;
  if (needle.length === candidate.length) {
    const mismatches = [...needle].flatMap((character, index) =>
      character === candidate[index] ? [] : [index]
    );
    if (
      mismatches.length === 2 &&
      mismatches[1] === (mismatches[0] ?? 0) + 1 &&
      needle[mismatches[0] ?? 0] === candidate[mismatches[1]] &&
      needle[mismatches[1]] === candidate[mismatches[0] ?? 0]
    )
      return true;
  }
  return (
    Math.abs(needle.length - candidate.length) <= allowance &&
    editDistance(needle, candidate) <= allowance
  );
}

function relevance(query: string, title: string, values: readonly string[]) {
  const needle = normalized(query);
  if (!needle) return 1;
  const normalizedTitle = normalized(title);
  if (normalizedTitle === needle) return 100;
  if (normalizedTitle.startsWith(needle)) return 90;

  const tokens = needle.split(/\s+/).filter(Boolean);
  const normalizedValues = values.map(normalized);
  const aliases = normalizedValues.slice(1);
  if (aliases.some((value) => value === needle)) return 85;

  const titleWords = normalizedTitle.split(/[^a-z0-9]+/).filter(Boolean);
  if (
    tokens.every((token) => titleWords.some((word) => word.startsWith(token)))
  ) {
    return 80;
  }

  const haystack = normalizedValues.join(" ");
  if (haystack.includes(needle)) return 70;
  if (tokens.every((token) => haystack.includes(token))) return 60;

  const words = haystack.split(/[^a-z0-9]+/).filter(Boolean);
  if (
    tokens.every((token) =>
      words.some(
        (word) => word.startsWith(token) || fuzzyTokenMatch(token, word)
      )
    )
  ) {
    return 35;
  }
  return 0;
}

export function searchCatalog(
  query: string,
  input: {
    features: readonly FeatureData[];
    harnesses: readonly HarnessData[];
    specifications?: readonly SpecificationData[];
  },
  filters: CatalogSearchFilters = {}
): {
  features: FeatureData[];
  harnesses: HarnessData[];
  specifications: SpecificationData[];
  hits: CatalogSearchHit[];
} {
  const specifications = input.specifications ?? [];
  const featuresBySlug = new Map(
    input.features.map((feature) => [feature.slug, feature] as const)
  );
  const harnessBySlug = new Map(
    input.harnesses.map((harness) => [harness.slug, harness] as const)
  );
  const relationTerms = (feature: FeatureData) => {
    const parent = feature.parent
      ? featuresBySlug.get(feature.parent)
      : undefined;
    const children = input.features.filter(
      (candidate) => candidate.parent === feature.slug
    );
    const siblings = feature.parent
      ? input.features.filter(
          (candidate) =>
            candidate.parent === feature.parent &&
            candidate.slug !== feature.slug
        )
      : [];
    const explicit = [
      ...feature.related,
      ...feature.relations.map((relation) => relation.feature),
    ]
      .map((slug) => featuresBySlug.get(slug))
      .filter((candidate): candidate is FeatureData => Boolean(candidate));
    return [parent, ...children, ...siblings, ...explicit]
      .filter((candidate): candidate is FeatureData => Boolean(candidate))
      .flatMap((candidate) => [
        candidate.title,
        candidate.slug,
        ...candidate.aliases,
      ]);
  };
  const featureScores = new Map(
    input.features.map((feature) => [
      feature.slug,
      relevance(query, feature.title, [
        feature.title,
        feature.slug,
        feature.summary,
        feature.description,
        feature.aliases.join(" "),
        feature.capabilityKind,
        feature.parent ?? "",
        ...relationTerms(feature),
        feature.specification?.id ?? "",
        feature.specification?.role ?? "",
        feature.tags.join(" "),
      ]),
    ])
  );
  const harnessScores = new Map(
    input.harnesses.map((harness) => [
      harness.slug,
      relevance(query, harness.title, [
        harness.title,
        harness.slug,
        harness.family,
        harness.vendor,
        harness.surface,
        harness.summary,
        harness.description,
        harness.tags.join(" "),
      ]),
    ])
  );
  const specificationScores = new Map(
    specifications.map((specification) => [
      specification.slug,
      relevance(query, specification.title, [
        specification.title,
        specification.slug,
        specification.authority,
        specification.revision,
        specification.maturity,
        specification.summary,
        specification.description,
        specification.aliases.join(" "),
        specification.roles.join(" "),
        specification.tags.join(" "),
      ]),
    ])
  );

  const features = input.features
    .filter((feature) => {
      if ((featureScores.get(feature.slug) ?? 0) <= 0) return false;
      if (
        filters.capabilityKind &&
        feature.capabilityKind !== filters.capabilityKind
      )
        return false;
      if (filters.category && feature.category !== filters.category)
        return false;
      if (
        filters.family &&
        feature.slug !== filters.family &&
        feature.parent !== filters.family
      )
        return false;
      if (filters.harness || filters.support || filters.stage) {
        if (feature.capabilityKind === "family") return false;
        if (!filters.harness) return false;
        const harness = harnessBySlug.get(filters.harness);
        if (!harness) return false;
        const track = filters.track ?? "current";
        const row = feature.support.find(
          (candidate) => candidate.harness === harness.slug
        );
        const version = row?.versions?.find(
          (candidate) => candidate.track === track
        );
        if (
          filters.support &&
          supportStatusForFeature(feature, harness, track) !== filters.support
        )
          return false;
        if (filters.stage && version?.stage !== filters.stage) return false;
      }
      return true;
    })
    .toSorted(
      (left, right) =>
        (featureScores.get(right.slug) ?? 0) -
          (featureScores.get(left.slug) ?? 0) ||
        left.title.localeCompare(right.title)
    );
  const harnesses = input.harnesses
    .filter((harness) => (harnessScores.get(harness.slug) ?? 0) > 0)
    .toSorted(
      (left, right) =>
        (harnessScores.get(right.slug) ?? 0) -
          (harnessScores.get(left.slug) ?? 0) ||
        left.title.localeCompare(right.title)
    );
  const matchedSpecifications = specifications
    .filter(
      (specification) => (specificationScores.get(specification.slug) ?? 0) > 0
    )
    .toSorted(
      (left, right) =>
        (specificationScores.get(right.slug) ?? 0) -
          (specificationScores.get(left.slug) ?? 0) ||
        left.title.localeCompare(right.title)
    );

  const hits: CatalogSearchHit[] = [
    ...features.map((feature) => ({
      kind: "feature" as const,
      slug: feature.slug,
      title: feature.title,
      summary: feature.summary,
      path: `/features/${feature.slug}`,
      score: featureScores.get(feature.slug) ?? 0,
      meta: `${feature.capabilityKind === "family" ? "Capability family" : feature.specLabel} · ${feature.category}${feature.parent ? ` · ${featuresBySlug.get(feature.parent)?.title ?? feature.parent}` : ""}`,
    })),
    ...harnesses.map((harness) => ({
      kind: "harness" as const,
      slug: harness.slug,
      title: `${harness.title} (${harness.surface})`,
      summary: harness.summary,
      path: `/harnesses/${harness.slug}`,
      score: harnessScores.get(harness.slug) ?? 0,
      meta: `${harness.family} · ${harness.vendor}`,
    })),
    ...matchedSpecifications.map((specification) => ({
      kind: "specification" as const,
      slug: specification.slug,
      title: specification.title,
      summary: specification.summary,
      path: `/specs/${specification.slug}`,
      score: specificationScores.get(specification.slug) ?? 0,
      meta: `${specification.authority} · ${specification.revision}`,
    })),
  ].toSorted(
    (left, right) =>
      right.score - left.score ||
      { specification: 0, feature: 1, harness: 2 }[left.kind] -
        { specification: 0, feature: 1, harness: 2 }[right.kind] ||
      left.title.localeCompare(right.title)
  );

  return {
    features,
    harnesses,
    specifications: matchedSpecifications,
    hits,
  };
}
