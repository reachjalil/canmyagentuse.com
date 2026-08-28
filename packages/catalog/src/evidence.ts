import type { FeatureData } from "./schema.ts";

export interface EvidenceLedgerRecord {
  id: string;
  feature: { slug: string; title: string };
  title: string;
  href: string;
  kind: "docs" | "spec" | "note";
  publisher?: string;
  evidenceType?: string;
  reviewedAt?: string;
  locator?: string;
  statements: {
    harness: string;
    track: string;
    status: string;
    observedAt: string;
  }[];
}

export function buildEvidenceLedger(
  features: readonly FeatureData[]
): EvidenceLedgerRecord[] {
  return features
    .flatMap((feature) =>
      feature.resources
        .filter((resource) => resource.id)
        .map((resource) => ({
          id: resource.id as string,
          feature: { slug: feature.slug, title: feature.title },
          title: resource.title,
          href: resource.href,
          kind: resource.kind,
          publisher: resource.publisher,
          evidenceType: resource.evidenceType,
          reviewedAt: resource.reviewedAt,
          locator: resource.locator,
          statements: feature.support.flatMap((row) =>
            (row.versions ?? []).flatMap((version) =>
              (version.evidence ?? [])
                .filter((reference) => reference.resourceId === resource.id)
                .map((reference) => ({
                  harness: row.harness,
                  track: version.track,
                  status: version.status,
                  observedAt: reference.observedAt,
                }))
            )
          ),
        }))
    )
    .toSorted((left, right) =>
      `${left.publisher ?? ""}${left.title}`.localeCompare(
        `${right.publisher ?? ""}${right.title}`
      )
    );
}
