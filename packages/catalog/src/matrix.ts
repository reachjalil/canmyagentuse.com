import type { FeatureData, HarnessData } from "./schema.ts";
import {
  HARNESS_SURFACES,
  type HarnessSurface,
  SUPPORT_STATUSES,
  type SupportStatus,
  type VersionCell,
} from "./status.ts";

export interface HarnessColumn {
  harness: HarnessData;
  versions: VersionCell[];
}

export interface SurfaceGroup {
  surface: HarnessSurface;
  items: HarnessData[];
}

export interface MatrixCell {
  feature: string;
  harness: string;
  status: SupportStatus;
  versions: VersionCell[];
}

export interface CurrentSupportSnapshot {
  total: number;
  sourced: number;
  counts: Record<SupportStatus, number>;
}

export function groupHarnesses(
  harnesses: readonly HarnessData[]
): SurfaceGroup[] {
  return HARNESS_SURFACES.map((surface) => ({
    surface,
    items: harnesses
      .filter((harness) => harness.surface === surface)
      .toSorted((left, right) => left.order - right.order),
  })).filter((group) => group.items.length > 0);
}

export function currentStatus(versions: readonly VersionCell[]): SupportStatus {
  return (
    versions.find((version) => version.track === "current")?.status ??
    versions[0]?.status ??
    "unknown"
  );
}

export function expandFeatureSupport(
  feature: FeatureData,
  harnesses: readonly HarnessData[]
): HarnessColumn[] {
  const known = new Set(harnesses.map((harness) => harness.slug));
  for (const row of feature.support) {
    if (!known.has(row.harness)) {
      throw new Error(
        `Feature "${feature.slug}" references unknown harness "${row.harness}".`
      );
    }
  }

  const overrides = new Map(
    feature.support.map((row) => [row.harness, row] as const)
  );

  return harnesses.map((harness) => {
    const override = overrides.get(harness.slug);
    const versions: VersionCell[] = harness.tracks.map((track) => {
      const explicit = override?.versions?.find((cell) => cell.track === track);
      if (explicit) {
        return {
          track: explicit.track,
          status: explicit.status,
          noteIds: explicit.noteIds ?? [],
          target: explicit.target,
          environmentProfile: explicit.environmentProfile,
          qualifiers: explicit.qualifiers,
          evidence: explicit.evidence,
          stage: explicit.stage,
        };
      }
      if (track === "current" && override?.status) {
        return { track, status: override.status, noteIds: [] };
      }
      return { track, status: "unknown", noteIds: [] };
    });
    return { harness, versions };
  });
}

export function buildMatrix(
  features: readonly FeatureData[],
  harnesses: readonly HarnessData[]
): MatrixCell[] {
  const cells: MatrixCell[] = [];
  for (const feature of features) {
    if (feature.capabilityKind === "family") continue;
    for (const column of expandFeatureSupport(feature, harnesses)) {
      cells.push({
        feature: feature.slug,
        harness: column.harness.slug,
        status: currentStatus(column.versions),
        versions: column.versions,
      });
    }
  }
  return cells;
}

export function statusFor(
  cells: readonly MatrixCell[],
  feature: string,
  harness: string
): MatrixCell | undefined {
  return cells.find(
    (cell) => cell.feature === feature && cell.harness === harness
  );
}

export function sourcedShare(columns: readonly HarnessColumn[]): number {
  const versions = columns.flatMap((column) => column.versions);
  if (versions.length === 0) return 0;
  return (
    versions.filter((version) => version.status !== "unknown").length /
    versions.length
  );
}

export function currentSupportSnapshot(
  columns: readonly HarnessColumn[]
): CurrentSupportSnapshot {
  const current = columns.map((column) => currentStatus(column.versions));
  const counts = Object.fromEntries(
    SUPPORT_STATUSES.map((status) => [
      status,
      current.filter((candidate) => candidate === status).length,
    ])
  ) as Record<SupportStatus, number>;

  return {
    total: current.length,
    sourced: current.length - counts.unknown,
    counts,
  };
}

export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(0)}%`;
}
