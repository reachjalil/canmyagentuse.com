export type SocialSupportStatus = "yes" | "partial" | "no" | "unknown" | "na";

export interface SocialCompatibilitySurface {
  surface: "web" | "desktop" | "cli";
  status: SocialSupportStatus;
}

export interface SocialCompatibilityGroup {
  label: string;
  vendor: string;
  surfaces: SocialCompatibilitySurface[];
}

export interface SocialCard {
  canonicalPath: string;
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  compatibility?: SocialCompatibilityGroup[];
}

const SOCIAL_STATUS = {
  yes: { label: "Supported", color: "#2a6f54" },
  partial: { label: "Partial", color: "#b07a22" },
  no: { label: "Unsupported", color: "#8f3a2a" },
  unknown: { label: "Unknown", color: "#6d675e" },
  na: { label: "N/A", color: "#2b2824" },
} as const satisfies Record<
  SocialSupportStatus,
  { label: string; color: string }
>;

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function wrapSocialText(
  value: string,
  limit: number,
  maxLines: number
): string[] {
  const words = value.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cursor = 0;
  while (cursor < words.length && lines.length < maxLines) {
    let line = "";
    while (cursor < words.length) {
      const word = words[cursor] ?? "";
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length > limit && line) break;
      line = candidate;
      cursor += 1;
      if (line.length >= limit) break;
    }
    if (!line && cursor < words.length) {
      line = words[cursor] ?? "";
      cursor += 1;
    }
    if (lines.length === maxLines - 1 && cursor < words.length) {
      const remaining = [line, ...words.slice(cursor)]
        .filter(Boolean)
        .join(" ");
      line = `${remaining.slice(0, Math.max(1, limit - 1)).trimEnd()}…`;
      cursor = words.length;
    } else if (line.length > limit) {
      line = `${line.slice(0, Math.max(1, limit - 1)).trimEnd()}…`;
    }
    if (line) lines.push(line);
  }
  return lines;
}

function renderFeatureCompatibilitySvg(card: SocialCard): string {
  const title = wrapSocialText(card.title, 32, 1)[0] ?? card.title;
  const description =
    wrapSocialText(card.description, 91, 1)[0] ?? card.description;
  const groups = (card.compatibility ?? []).slice(0, 4);
  const cellWidth = 253;
  const cellGap = 12;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#12100e"/>
    <rect width="26" height="630" fill="#c45c26"/>
    <rect x="26" y="26" width="1148" height="578" fill="none" stroke="#3a342f" stroke-width="2"/>
    <text x="76" y="72" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="27" font-weight="600" letter-spacing="0.4">CAN MY AGENT USE</text>
    <text x="76" y="104" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="14" letter-spacing="2.2">INDEPENDENT COMPATIBILITY CATALOG</text>
    <text x="1124" y="72" text-anchor="end" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="15">canmyagentuse.com</text>
    <text x="76" y="184" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="68" font-weight="600" letter-spacing="-1.5">${escapeXml(title)}</text>
    <text x="76" y="229" fill="#d4c7ae" font-family="IBM Plex Sans,Arial,sans-serif" font-size="22">${escapeXml(description)}</text>
    <text x="76" y="278" fill="#c45c26" font-family="IBM Plex Mono,Menlo,monospace" font-size="16" font-weight="500" letter-spacing="1.5">4 MAIN PROVIDER FAMILIES</text>
    <text x="1124" y="278" text-anchor="end" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="14" letter-spacing="1">SUPPORT BY EXACT SURFACE · NOT A SCORE</text>
    ${groups
      .map((group, index) => {
        const x = 76 + index * (cellWidth + cellGap);
        const ariaLabel = group.surfaces
          .map(
            (surface) =>
              `${surface.surface}: ${SOCIAL_STATUS[surface.status].label}`
          )
          .join(", ");
        return `<g aria-label="${escapeXml(`${group.label}, ${ariaLabel}`)}">
          <rect x="${x}" y="298" width="${cellWidth}" height="172" fill="#181512" stroke="#3a342f" stroke-width="2"/>
          <rect x="${x}" y="298" width="${cellWidth}" height="5" fill="#c45c26"/>
          <text x="${x + cellWidth / 2}" y="333" text-anchor="middle" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="22" font-weight="500">${escapeXml(group.label)}</text>
          <text x="${x + cellWidth / 2}" y="355" text-anchor="middle" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="12" letter-spacing="1.3">${escapeXml(group.vendor.toUpperCase())}</text>
          ${group.surfaces
            .slice(0, 3)
            .map((surface, surfaceIndex) => {
              const status = SOCIAL_STATUS[surface.status];
              const y = 370 + surfaceIndex * 31;
              const stroke =
                surface.status === "na"
                  ? ' stroke="#3a342f" stroke-width="1"'
                  : "";
              return `<rect x="${x + 13}" y="${y}" width="${cellWidth - 26}" height="26" fill="${status.color}"${stroke}/>
              <text x="${x + 24}" y="${y + 18}" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="12.5" font-weight="500" letter-spacing="0.7">${surface.surface.toUpperCase()}</text>
              <text x="${x + cellWidth - 24}" y="${y + 18}" text-anchor="end" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="12.5" font-weight="500">${status.label.toUpperCase()}</text>`;
            })
            .join("")}
        </g>`;
      })
      .join("")}
    <g aria-label="Compatibility status key">
      <text x="76" y="514" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" letter-spacing="1.4">STATUS KEY</text>
      ${(["yes", "partial", "no", "unknown", "na"] as SocialSupportStatus[])
        .map((statusName, index) => {
          const status = SOCIAL_STATUS[statusName];
          const x = [204, 395, 555, 765, 955][index] ?? 955;
          const stroke =
            statusName === "na" ? ' stroke="#6d675e" stroke-width="1"' : "";
          return `<circle cx="${x}" cy="509" r="7" fill="${status.color}"${stroke}/><text x="${x + 16}" y="514" fill="#d4c7ae" font-family="IBM Plex Mono,Menlo,monospace" font-size="13">${status.label.toUpperCase()}</text>`;
        })
        .join("")}
    </g>
    <line x1="76" y1="548" x2="1124" y2="548" stroke="#3a342f" stroke-width="2"/>
    <text x="76" y="580" fill="#c45c26" font-family="IBM Plex Mono,Menlo,monospace" font-size="17" letter-spacing="1">${escapeXml(card.meta.toUpperCase())}</text>
    <text x="1124" y="580" text-anchor="end" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="15">CURRENT PUBLIC EVIDENCE</text>
  </svg>`;
}

export function renderSocialCardSvg(card: SocialCard): string {
  if (card.compatibility?.length) {
    return renderFeatureCompatibilitySvg(card);
  }
  const titleSize =
    card.title.length > 58 ? 55 : card.title.length > 34 ? 63 : 72;
  const titleLimit = titleSize >= 70 ? 22 : titleSize >= 60 ? 25 : 29;
  const titleLines = wrapSocialText(card.title, titleLimit, 3);
  const descriptionLines = wrapSocialText(card.description, 67, 2);
  const titleStart =
    titleLines.length === 1 ? 255 : titleLines.length === 2 ? 220 : 192;
  const lineHeight = titleSize + 7;
  const descriptionStart = Math.max(
    425,
    titleStart + titleLines.length * lineHeight + 28
  );
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#12100e"/><rect width="26" height="630" fill="#c45c26"/>
    <rect x="26" y="26" width="1148" height="578" fill="none" stroke="#3a342f" stroke-width="2"/>
    <g aria-label="Matrix cell status key">
      <rect x="870" y="50" width="254" height="132" fill="#181512" stroke="#3a342f" stroke-width="2"/>
      <rect x="870" y="50" width="254" height="4" fill="#c45c26"/>
      <text x="892" y="80" fill="#d4c7ae" font-family="IBM Plex Mono,Menlo,monospace" font-size="14" font-weight="500" letter-spacing="1.5">MATRIX CELL STATUS</text>
      <circle cx="898" cy="111" r="7" fill="#2a6f54"/>
      <text x="914" y="116" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="14">SUPPORTED</text>
      <circle cx="1023" cy="111" r="7" fill="#b07a22"/>
      <text x="1039" y="116" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="14">PARTIAL</text>
      <circle cx="898" cy="151" r="7" fill="#8f3a2a"/>
      <text x="914" y="156" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="14">UNSUPPORTED</text>
      <circle cx="1023" cy="151" r="7" fill="#d2c6b0"/>
      <text x="1039" y="156" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="14">UNKNOWN</text>
    </g>
    <text x="76" y="74" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="24" font-weight="600">CAN MY AGENT USE</text>
    <text x="76" y="108" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="15" letter-spacing="2.5">LOOKUP · COMPARE · CITE</text>
    <text x="76" y="156" fill="#c45c26" font-family="IBM Plex Mono,Menlo,monospace" font-size="19" letter-spacing="2.2">${escapeXml(card.eyebrow.toUpperCase())}</text>
    ${titleLines.map((line, index) => `<text x="76" y="${titleStart + index * lineHeight}" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="${titleSize}" font-weight="600" letter-spacing="-1.5">${escapeXml(line)}</text>`).join("")}
    ${descriptionLines.map((line, index) => `<text x="76" y="${descriptionStart + index * 34}" fill="#d4c7ae" font-family="IBM Plex Sans,Arial,sans-serif" font-size="25">${escapeXml(line)}</text>`).join("")}
    <line x1="76" y1="548" x2="1124" y2="548" stroke="#3a342f" stroke-width="2"/>
    <text x="76" y="580" fill="#c45c26" font-family="IBM Plex Mono,Menlo,monospace" font-size="17" letter-spacing="1">${escapeXml(card.meta.toUpperCase())}</text>
    <text x="1124" y="580" text-anchor="end" fill="#8e8679" font-family="IBM Plex Mono,Menlo,monospace" font-size="16">canmyagentuse.com</text>
  </svg>`;
}
