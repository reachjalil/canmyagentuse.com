import { buildMatrix } from "./matrix.ts";
import type { FeatureData, HarnessData } from "./schema.ts";
import { HARNESS_SURFACES, type HarnessSurface } from "./status.ts";

export interface CoverageSlice {
  total: number;
  sourced: number;
  unknown: number;
  share: number;
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

function slice(statuses: readonly string[]): CoverageSlice {
  const total = statuses.length;
  const sourced = statuses.filter((status) => status !== "unknown").length;
  return {
    total,
    sourced,
    unknown: total - sourced,
    share: total === 0 ? 0 : sourced / total,
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
  return {
    generatedFrom: "published-current-track",
    totals: {
      ...slice(cells.map((cell) => cell.status)),
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
        ...slice(
          cells
            .filter((cell) => memberSlugs.has(cell.harness))
            .map((cell) => cell.status)
        ),
      };
    }),
    features: atomicFeatures.map((feature) => ({
      slug: feature.slug,
      title: feature.title,
      ...slice(
        cells
          .filter((cell) => cell.feature === feature.slug)
          .map((cell) => cell.status)
      ),
    })),
    harnesses: harnesses.map((harness) => ({
      slug: harness.slug,
      title: harness.title,
      surface: harness.surface,
      ...slice(
        cells
          .filter((cell) => cell.harness === harness.slug)
          .map((cell) => cell.status)
      ),
    })),
  };
}
