import { buildMatrix } from "./matrix.ts";
import type { FeatureData, HarnessData } from "./schema.ts";
import {
  HARNESS_SURFACES,
  type HarnessSurface,
  type SupportStatus,
  type VersionCell,
  hasDirectReviewedEvidence,
} from "./status.ts";

export interface CoverageSlice {
  total: number;
  assessed: number;
  assessedShare: number;
  sourced: number;
  directEvidence: number;
  directEvidenceShare: number;
  unknown: number;
  share: number;
  supported: number;
  partial: number;
  unsupported: number;
  notApplicable: number;
  compatible: number;
  compatibleShareOfAssessed: number;
}

export interface CoverageReport {
  generatedFrom: "published-current-track";
  totals: CoverageSlice & {
    features: number;
    harnesses: number;
  };
  surfaces: Array<
    CoverageSlice & {
      surface: HarnessSurface;
      harnesses: number;
    }
  >;
  features: Array<
    CoverageSlice & {
      slug: string;
      title: string;
    }
  >;
  harnesses: Array<
    CoverageSlice & {
      slug: string;
      title: string;
      surface: HarnessSurface;
    }
  >;
}

function currentVersion(versions: readonly VersionCell[]): VersionCell {
  return (
    versions.find((version) => version.track === "current") ??
    versions[0] ?? { track: "current", status: "unknown", noteIds: [] }
  );
}

export function coverageSlice(versions: readonly VersionCell[]): CoverageSlice {
  const total = versions.length;
  const count = (status: SupportStatus) =>
    versions.filter((version) => version.status === status).length;
  const supported = count("yes");
  const partial = count("partial");
  const unsupported = count("no");
  const unknown = count("unknown");
  const notApplicable = count("na");
  const assessed = total - unknown;
  const compatible = supported + partial;
  const directEvidence = versions.filter(hasDirectReviewedEvidence).length;
  const directEvidenceShare = total === 0 ? 0 : directEvidence / total;

  return {
    total,
    assessed,
    assessedShare: total === 0 ? 0 : assessed / total,
    // Backward-compatible aliases: sourced/share now deliberately mean
    // direct reviewed evidence, not every editorial assessment.
    sourced: directEvidence,
    directEvidence,
    directEvidenceShare,
    unknown,
    share: directEvidenceShare,
    supported,
    partial,
    unsupported,
    notApplicable,
    compatible,
    compatibleShareOfAssessed:
      assessed - notApplicable === 0
        ? 0
        : compatible / (assessed - notApplicable),
  };
}

export function buildCoverageReport(
  features: readonly FeatureData[],
  harnesses: readonly HarnessData[]
): CoverageReport {
  const atomicFeatures = features.filter(
    (feature) => feature.capabilityKind === "atomic"
  );
  const cells = buildMatrix(atomicFeatures, harnesses);
  const versions = cells.map((cell) => currentVersion(cell.versions));

  return {
    generatedFrom: "published-current-track",
    totals: {
      ...coverageSlice(versions),
      features: atomicFeatures.length,
      harnesses: harnesses.length,
    },
    surfaces: HARNESS_SURFACES.map((surface) => {
      const members = harnesses.filter(
        (harness) => harness.surface === surface
      );
      const memberSlugs = new Set(members.map((harness) => harness.slug));
      return {
        surface,
        harnesses: members.length,
        ...coverageSlice(
          cells
            .filter((cell) => memberSlugs.has(cell.harness))
            .map((cell) => currentVersion(cell.versions))
        ),
      };
    }),
    features: atomicFeatures.map((feature) => ({
      slug: feature.slug,
      title: feature.title,
      ...coverageSlice(
        cells
          .filter((cell) => cell.feature === feature.slug)
          .map((cell) => currentVersion(cell.versions))
      ),
    })),
    harnesses: harnesses.map((harness) => ({
      slug: harness.slug,
      title: harness.title,
      surface: harness.surface,
      ...coverageSlice(
        cells
          .filter((cell) => cell.harness === harness.slug)
          .map((cell) => currentVersion(cell.versions))
      ),
    })),
  };
}
