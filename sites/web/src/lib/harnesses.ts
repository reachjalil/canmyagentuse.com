import {
  SUPPORT_STATUSES,
  currentStatus,
  expandFeatureSupport,
  type CatalogResource,
  type FeatureData,
  type HarnessData,
  type SupportQualifier,
  type SupportStatus,
  type VersionCell,
} from "@canmyagentuse/catalog";

export interface HarnessCapabilitySupport {
  feature: FeatureData;
  versions: VersionCell[];
  current?: VersionCell;
  status: SupportStatus;
  resources: CatalogResource[];
  evidenceCount: number;
  latestEvidenceAt?: string;
  qualifiers: SupportQualifier[];
}

export interface HarnessSupportSummary {
  total: number;
  reviewed: number;
  coverage: number;
  counts: Record<SupportStatus, number>;
  sourceCount: number;
  sourceUrls: string[];
  latestEvidenceAt?: string;
}

function currentVersion(
  versions: readonly VersionCell[]
): VersionCell | undefined {
  return versions.find((version) => version.track === "current") ?? versions[0];
}

function latestDate(
  values: readonly (string | undefined)[]
): string | undefined {
  return values
    .filter((value): value is string => Boolean(value))
    .toSorted()
    .at(-1);
}

export function harnessCapabilitySupport(
  harnessSlug: string,
  features: readonly FeatureData[],
  harnesses: readonly HarnessData[]
): HarnessCapabilitySupport[] {
  return features
    .filter((feature) => feature.capabilityKind === "atomic")
    .map((feature) => {
      const column = expandFeatureSupport(feature, harnesses).find(
        (candidate) => candidate.harness.slug === harnessSlug
      );
      const versions = column?.versions ?? [];
      const current = currentVersion(versions);
      const evidence = current?.evidence ?? [];
      const resources = evidence.flatMap((reference) => {
        const resource = feature.resources.find(
          (candidate) => candidate.id === reference.resourceId
        );
        return resource ? [resource] : [];
      });

      return {
        feature,
        versions,
        current,
        status: currentStatus(versions),
        resources,
        evidenceCount: evidence.length,
        latestEvidenceAt: latestDate(evidence.map((item) => item.observedAt)),
        qualifiers: current?.qualifiers ?? [],
      };
    });
}

export function summarizeHarnessSupport(
  rows: readonly HarnessCapabilitySupport[]
): HarnessSupportSummary {
  const counts = Object.fromEntries(
    SUPPORT_STATUSES.map((status) => [status, 0])
  ) as Record<SupportStatus, number>;
  const sourceUrls = new Set<string>();

  for (const row of rows) {
    counts[row.status] += 1;
    for (const resource of row.resources) {
      if (resource.href.startsWith("https://")) sourceUrls.add(resource.href);
    }
  }

  const total = rows.length;
  const reviewed = total - counts.unknown;
  const urls = [...sourceUrls].toSorted();
  return {
    total,
    reviewed,
    coverage: total === 0 ? 0 : reviewed / total,
    counts,
    sourceCount: urls.length,
    sourceUrls: urls,
    latestEvidenceAt: latestDate(rows.map((row) => row.latestEvidenceAt)),
  };
}

export function harnessSupportSummary(
  harnessSlug: string,
  features: readonly FeatureData[],
  harnesses: readonly HarnessData[]
): HarnessSupportSummary {
  return summarizeHarnessSupport(
    harnessCapabilitySupport(harnessSlug, features, harnesses)
  );
}
