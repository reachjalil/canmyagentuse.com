import type { FeatureData, HarnessData, SpecificationData } from "./schema.ts";

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
  return value.trim().toLocaleLowerCase("en");
}

function relevance(query: string, title: string, values: readonly string[]) {
  const needle = normalized(query);
  if (!needle) return 1;
  const normalizedTitle = normalized(title);
  if (normalizedTitle === needle) return 100;
  if (normalizedTitle.startsWith(needle)) return 80;

  const tokens = needle.split(/\s+/).filter(Boolean);
  const haystack = values.map(normalized).join(" ");
  if (tokens.every((token) => haystack.includes(token))) return 50;
  if (haystack.includes(needle)) return 40;
  return 0;
}

export function searchCatalog(
  query: string,
  input: {
    features: readonly FeatureData[];
    harnesses: readonly HarnessData[];
    specifications?: readonly SpecificationData[];
  }
): {
  features: FeatureData[];
  harnesses: HarnessData[];
  specifications: SpecificationData[];
  hits: CatalogSearchHit[];
} {
  const specifications = input.specifications ?? [];
  const featureScores = new Map(
    input.features.map((feature) => [
      feature.slug,
      relevance(query, feature.title, [
        feature.title,
        feature.slug,
        feature.summary,
        feature.description,
        feature.aliases.join(" "),
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
    .filter((feature) => (featureScores.get(feature.slug) ?? 0) > 0)
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
      meta: `${feature.specLabel} · ${feature.category}`,
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
      right.score - left.score || left.title.localeCompare(right.title)
  );

  return {
    features,
    harnesses,
    specifications: matchedSpecifications,
    hits,
  };
}
