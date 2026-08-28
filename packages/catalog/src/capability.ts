import { expandFeatureSupport } from "./matrix.ts";
import type { FeatureData, HarnessData } from "./schema.ts";
import {
  SUPPORT_STATUSES,
  type SupportStage,
  type SupportStatus,
} from "./status.ts";

export interface CapabilityNode {
  feature: FeatureData;
  parent?: FeatureData;
  children: FeatureData[];
  siblings: FeatureData[];
}

export interface CapabilityProgress {
  family: string;
  harness: string;
  track: string;
  total: number;
  reviewed: number;
  supported: number;
  share: number;
  counts: Record<SupportStatus, number>;
  stages: Partial<Record<SupportStage, number>>;
}

export function capabilityNode(
  slug: string,
  features: readonly FeatureData[]
): CapabilityNode | undefined {
  const feature = features.find((candidate) => candidate.slug === slug);
  if (!feature) return undefined;
  const parent = feature.parent
    ? features.find((candidate) => candidate.slug === feature.parent)
    : undefined;
  const children = features
    .filter((candidate) => candidate.parent === feature.slug)
    .toSorted((left, right) => left.title.localeCompare(right.title));
  const siblings = parent
    ? features
        .filter(
          (candidate) =>
            candidate.parent === parent.slug && candidate.slug !== feature.slug
        )
        .toSorted((left, right) => left.title.localeCompare(right.title))
    : [];
  return { feature, parent, children, siblings };
}

export function capabilityFamily(
  feature: FeatureData,
  features: readonly FeatureData[]
): FeatureData | undefined {
  if (feature.capabilityKind === "family") return feature;
  return feature.parent
    ? features.find((candidate) => candidate.slug === feature.parent)
    : undefined;
}

export function buildCapabilityProgress(
  familySlug: string,
  features: readonly FeatureData[],
  harnesses: readonly HarnessData[],
  track = "current"
): CapabilityProgress[] {
  const children = features.filter(
    (feature) =>
      feature.parent === familySlug && feature.capabilityKind === "atomic"
  );

  return harnesses.map((harness) => {
    const versions = children.map((feature) => {
      const column = expandFeatureSupport(feature, harnesses).find(
        (candidate) => candidate.harness.slug === harness.slug
      );
      return (
        column?.versions.find((version) => version.track === track) ??
        column?.versions[0] ?? {
          track,
          status: "unknown" as const,
          noteIds: [],
        }
      );
    });
    const statuses = versions.map((version) => version.status);
    const counts = Object.fromEntries(
      SUPPORT_STATUSES.map((status) => [
        status,
        statuses.filter((candidate) => candidate === status).length,
      ])
    ) as Record<SupportStatus, number>;
    const stages: Partial<Record<SupportStage, number>> = {};
    for (const version of versions) {
      if (!version.stage) continue;
      stages[version.stage] = (stages[version.stage] ?? 0) + 1;
    }
    const supported = counts.yes + counts.partial;
    return {
      family: familySlug,
      harness: harness.slug,
      track,
      total: children.length,
      reviewed: children.length - counts.unknown,
      supported,
      share: children.length === 0 ? 0 : supported / children.length,
      counts,
      stages,
    };
  });
}

export function supportStatusForFeature(
  feature: FeatureData,
  harness: HarnessData,
  track = "current"
): SupportStatus {
  const row = feature.support.find(
    (candidate) => candidate.harness === harness.slug
  );
  return (
    row?.versions?.find((version) => version.track === track)?.status ??
    (track === "current" ? row?.status : undefined) ??
    "unknown"
  );
}
