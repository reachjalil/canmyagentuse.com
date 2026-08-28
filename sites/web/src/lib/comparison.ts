import type { SupportStatus } from "@canmyagentuse/catalog";

export type ComparisonLens =
  | "all"
  | "different"
  | "supported"
  | "evidence-gaps";

export interface ComparisonCell {
  status: SupportStatus;
  evidenceCount: number;
  observedAt?: string;
  target?: string;
  environment?: string;
  qualifiers: string[];
}

export interface ComparisonRow {
  slug: string;
  title: string;
  summary: string;
  category: string;
  cells: Record<string, ComparisonCell>;
}

export interface ComparisonSummary {
  total: number;
  matched: number;
  different: number;
  evidenceGaps: number;
  leftSupported: number;
  rightSupported: number;
}

function cellFor(row: ComparisonRow, slug: string): ComparisonCell {
  return (
    row.cells[slug] ?? { status: "unknown", evidenceCount: 0, qualifiers: [] }
  );
}

export function cellsDiffer(
  left: ComparisonCell,
  right: ComparisonCell
): boolean {
  if (left.status !== right.status) return true;
  if (left.environment !== right.environment) return true;
  if (left.target !== right.target) return true;
  return left.qualifiers.join("|") !== right.qualifiers.join("|");
}

export function comparisonSummary(
  rows: readonly ComparisonRow[],
  leftSlug: string,
  rightSlug: string
): ComparisonSummary {
  let matched = 0;
  let different = 0;
  let evidenceGaps = 0;
  let leftSupported = 0;
  let rightSupported = 0;
  for (const row of rows) {
    const left = cellFor(row, leftSlug);
    const right = cellFor(row, rightSlug);
    if (cellsDiffer(left, right)) different += 1;
    else matched += 1;
    if (left.status === "unknown" || right.status === "unknown")
      evidenceGaps += 1;
    if (left.status === "yes") leftSupported += 1;
    if (right.status === "yes") rightSupported += 1;
  }
  return {
    total: rows.length,
    matched,
    different,
    evidenceGaps,
    leftSupported,
    rightSupported,
  };
}

export function filterComparisonRows(
  rows: readonly ComparisonRow[],
  options: {
    leftSlug: string;
    rightSlug: string;
    lens: ComparisonLens;
    category?: string;
    query?: string;
  }
): ComparisonRow[] {
  const query = options.query?.trim().toLocaleLowerCase() ?? "";
  return rows.filter((row) => {
    if (options.category && row.category !== options.category) return false;
    if (
      query &&
      !`${row.title} ${row.summary} ${row.category}`
        .toLocaleLowerCase()
        .includes(query)
    ) {
      return false;
    }
    const left = cellFor(row, options.leftSlug);
    const right = cellFor(row, options.rightSlug);
    if (options.lens === "different") return cellsDiffer(left, right);
    if (options.lens === "supported")
      return left.status === "yes" || right.status === "yes";
    if (options.lens === "evidence-gaps")
      return left.status === "unknown" || right.status === "unknown";
    return true;
  });
}
