import type { CurrentSupportSnapshot } from "@canmyagentuse/catalog";

export function currentSupportSnippet(
  title: string,
  snapshot: CurrentSupportSnapshot
): string {
  if (snapshot.assessed === 0) {
    return `${title}: no current status assessments across ${snapshot.total} cataloged products yet; 0 have direct reviewed evidence.`;
  }

  const { yes, partial, no, unknown, na } = snapshot.counts;
  const parts = [
    `${yes} supported`,
    `${partial} partial`,
    `${no} unsupported`,
    `${unknown} unreviewed`,
  ];
  if (na > 0) parts.push(`${na} not applicable`);

  return `${title}: ${parts.join(", ")} across ${snapshot.total} cataloged products; ${snapshot.directEvidence} have direct reviewed evidence.`;
}
