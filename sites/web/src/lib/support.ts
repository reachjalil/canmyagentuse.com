import type { CurrentSupportSnapshot } from "@canmyagentuse/catalog";

export function currentSupportSnippet(
  title: string,
  snapshot: CurrentSupportSnapshot
): string {
  if (snapshot.sourced === 0) {
    return `${title}: no reviewed current support evidence across ${snapshot.total} cataloged products yet.`;
  }

  const { yes, partial, no, unknown, na } = snapshot.counts;
  const parts = [
    `${yes} supported`,
    `${partial} partial`,
    `${no} unsupported`,
    `${unknown} unreviewed`,
  ];
  if (na > 0) parts.push(`${na} not applicable`);

  return `${title}: ${parts.join(", ")} across ${snapshot.total} cataloged products.`;
}
