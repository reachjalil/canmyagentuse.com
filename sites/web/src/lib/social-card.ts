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
  subtitle?: string;
  description: string;
  meta: string;
  variant?: "home" | "coverage";
  imageSlug?: string;
  coverage?: {
    assessed: number;
    total: number;
    unknown: number;
    percentLabel: string;
  };
  compatibility?: SocialCompatibilityGroup[];
}

export interface SocialCardRenderOptions {
  backgroundImageDataUri?: string;
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

function renderHomepageSocialCardSvg(card: SocialCard): string {
  const titleLines = wrapSocialText(card.title, 24, 2);
  const descriptionLines = wrapSocialText(card.description, 52, 2);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="card-title card-description">
    <title id="card-title">${escapeXml(card.title)}</title>
    <desc id="card-description">${escapeXml(card.description)}</desc>
    <defs>
      <linearGradient id="home-background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#12100e"/>
        <stop offset="1" stop-color="#1b1511"/>
      </linearGradient>
      <radialGradient id="home-glow" cx="0.82" cy="0.45" r="0.55">
        <stop offset="0" stop-color="#c45c26" stop-opacity="0.16"/>
        <stop offset="1" stop-color="#c45c26" stop-opacity="0"/>
      </radialGradient>
      <pattern id="home-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke="#fff8eb" stroke-opacity="0.035" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#home-background)"/>
    <rect width="1200" height="630" fill="url(#home-glow)"/>
    <rect width="1200" height="630" fill="url(#home-grid)"/>
    <rect width="22" height="630" fill="#c45c26"/>
    <rect x="42" y="30" width="1132" height="570" fill="none" stroke="#4b4037" stroke-width="2"/>

    <g aria-label="Can My Agent Use">
      <rect x="76" y="55" width="58" height="58" rx="10" fill="#181512" stroke="#4b4037"/>
      <path d="M101 68H89V80M109 68H121V80M121 88V100H109M101 100H89V88" fill="none" stroke="#fff8eb" stroke-width="4"/>
      <rect x="99" y="78" width="12" height="12" rx="1" fill="#c45c26"/>
      <text x="153" y="80" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="27" font-weight="600" letter-spacing="-0.4">CAN MY AGENT USE</text>
      <text x="153" y="105" fill="#9f9587" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" letter-spacing="2.1">LOOKUP · COMPARE · CITE</text>
    </g>
    <text x="1124" y="86" text-anchor="end" fill="#d4c7ae" font-family="IBM Plex Mono,Menlo,monospace" font-size="15" letter-spacing="0.5">canmyagentuse.com</text>

    <text x="76" y="165" fill="#df7138" font-family="IBM Plex Mono,Menlo,monospace" font-size="17" font-weight="500" letter-spacing="1.8">${escapeXml(card.eyebrow.toUpperCase())}</text>
    ${titleLines.map((line, index) => `<text x="76" y="${238 + index * 72}" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="65" font-weight="600" letter-spacing="-1.8">${escapeXml(line)}</text>`).join("")}
    ${descriptionLines.map((line, index) => `<text x="76" y="${389 + index * 34}" fill="#d4c7ae" font-family="IBM Plex Sans,Arial,sans-serif" font-size="24">${escapeXml(line)}</text>`).join("")}

    <g aria-label="From question to source">
      <rect x="824" y="147" width="300" height="320" fill="#181512" stroke="#4b4037" stroke-width="2"/>
      <rect x="824" y="147" width="300" height="5" fill="#c45c26"/>
      <text x="850" y="184" fill="#d4c7ae" font-family="IBM Plex Mono,Menlo,monospace" font-size="14" font-weight="500" letter-spacing="1.5">FROM QUESTION TO SOURCE</text>
      <rect x="850" y="207" width="248" height="72" fill="#211a16" stroke="#3a342f"/>
      <text x="867" y="232" fill="#df7138" font-family="IBM Plex Mono,Menlo,monospace" font-size="12" letter-spacing="1.4">ASK</text>
      <text x="867" y="261" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="21" font-weight="500">Can it use MCP tools?</text>
      <rect x="850" y="305" width="29" height="29" fill="#c45c26"/>
      <text x="864.5" y="325" text-anchor="middle" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" font-weight="500">01</text>
      <text x="895" y="318" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" font-weight="500" letter-spacing="0.7">LOOK UP</text>
      <text x="895" y="336" fill="#9f9587" font-family="IBM Plex Sans,Arial,sans-serif" font-size="13">one exact capability</text>
      <rect x="850" y="354" width="29" height="29" fill="#2a6f54"/>
      <text x="864.5" y="374" text-anchor="middle" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" font-weight="500">02</text>
      <text x="895" y="367" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" font-weight="500" letter-spacing="0.7">COMPARE</text>
      <text x="895" y="385" fill="#9f9587" font-family="IBM Plex Sans,Arial,sans-serif" font-size="13">web · desktop · CLI</text>
      <rect x="850" y="403" width="29" height="29" fill="#fff8eb"/>
      <text x="864.5" y="423" text-anchor="middle" fill="#12100e" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" font-weight="500">03</text>
      <text x="895" y="416" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" font-weight="500" letter-spacing="0.7">VERIFY</text>
      <text x="895" y="434" fill="#9f9587" font-family="IBM Plex Sans,Arial,sans-serif" font-size="13">open the public source</text>
    </g>

    <line x1="76" y1="524" x2="1124" y2="524" stroke="#4b4037" stroke-width="2"/>
    <text x="76" y="563" fill="#df7138" font-family="IBM Plex Mono,Menlo,monospace" font-size="16" font-weight="500" letter-spacing="1">${escapeXml(card.meta.toUpperCase())}</text>
    <text x="1124" y="563" text-anchor="end" fill="#9f9587" font-family="IBM Plex Mono,Menlo,monospace" font-size="14" letter-spacing="1">INDEPENDENT · EVIDENCE-LED</text>
  </svg>`;
}

function renderCoverageSocialCardSvg(
  card: SocialCard,
  options: SocialCardRenderOptions
): string {
  const titleLines = wrapSocialText(card.title, 25, 2);
  const subtitle = card.subtitle ?? "";
  const descriptionLines = wrapSocialText(card.description, 47, 2);
  const assessed = card.coverage?.assessed.toLocaleString("en-US") ?? "—";
  const total = card.coverage?.total.toLocaleString("en-US") ?? "—";
  const unknown = card.coverage?.unknown.toLocaleString("en-US") ?? "—";
  const percentLabel = card.coverage?.percentLabel ?? "—";
  const backgroundImage = options.backgroundImageDataUri
    ? `<image href="${options.backgroundImageDataUri}" x="0" y="0" width="1200" height="630" preserveAspectRatio="xMidYMid slice"/>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="coverage-card-title coverage-card-description">
    <title id="coverage-card-title">${escapeXml(card.title)}</title>
    <desc id="coverage-card-description">${escapeXml(card.description)}</desc>
    <defs>
      <linearGradient id="coverage-shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#12100e" stop-opacity="1"/>
        <stop offset="0.46" stop-color="#12100e" stop-opacity="0.97"/>
        <stop offset="0.66" stop-color="#12100e" stop-opacity="0.4"/>
        <stop offset="1" stop-color="#12100e" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="coverage-floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.66" stop-color="#12100e" stop-opacity="0"/>
        <stop offset="1" stop-color="#12100e" stop-opacity="0.96"/>
      </linearGradient>
      <pattern id="coverage-grid" width="42" height="42" patternUnits="userSpaceOnUse">
        <path d="M42 0H0V42" fill="none" stroke="#fff8eb" stroke-opacity="0.035" stroke-width="1"/>
      </pattern>
      <clipPath id="coverage-frame-clip">
        <rect x="42" y="30" width="1132" height="570"/>
      </clipPath>
    </defs>
    <rect width="1200" height="630" fill="#12100e"/>
    <g clip-path="url(#coverage-frame-clip)">
      ${backgroundImage}
      <rect width="1200" height="630" fill="url(#coverage-shade)"/>
      <rect width="1200" height="630" fill="url(#coverage-floor)"/>
      <rect width="1200" height="630" fill="url(#coverage-grid)"/>
    </g>
    <rect width="18" height="630" fill="#c45c26"/>
    <rect x="42" y="30" width="1132" height="570" fill="none" stroke="#fff8eb" stroke-opacity="0.17" stroke-width="2"/>

    <g aria-label="Can My Agent Use">
      <path d="M78 51H65V64M91 51H104V64M104 77V90H91M78 90H65V77" fill="none" stroke="#fff8eb" stroke-width="4"/>
      <rect x="78" y="64" width="13" height="13" fill="#c45c26"/>
      <text x="123" y="68" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="25" font-weight="600" letter-spacing="-0.2">CAN MY AGENT USE</text>
      <text x="123" y="91" fill="#a89d8d" font-family="IBM Plex Mono,Menlo,monospace" font-size="12.5" letter-spacing="2">LOOKUP · COMPARE · CITE</text>
    </g>
    <g aria-label="Live evidence map">
      <rect x="902" y="51" width="222" height="38" fill="#12100e" fill-opacity="0.88" stroke="#df7138" stroke-width="1.5"/>
      <circle cx="924" cy="70" r="5" fill="#df7138"/>
      <text x="941" y="75" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="13" font-weight="500" letter-spacing="1.2">LIVE EVIDENCE MAP</text>
    </g>

    <text x="65" y="143" fill="#df7138" font-family="IBM Plex Mono,Menlo,monospace" font-size="16" font-weight="500" letter-spacing="2">${escapeXml(card.eyebrow.toUpperCase())}</text>
    ${titleLines.map((line, index) => `<text x="65" y="${205 + index * 58}" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="54" font-weight="600" letter-spacing="-1.5">${escapeXml(line)}</text>`).join("")}
    <text x="65" y="312" fill="#d4c7ae" font-family="IBM Plex Sans,Arial,sans-serif" font-size="25" font-weight="500">${escapeXml(subtitle)}</text>

    <g aria-label="${escapeXml(`${percentLabel} directly evidenced`)}">
      <text x="65" y="425" fill="#df7138" font-family="IBM Plex Sans,Arial,sans-serif" font-size="104" font-weight="600" letter-spacing="-4">${escapeXml(percentLabel)}</text>
      <text x="382" y="388" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="15" font-weight="500" letter-spacing="1.6">DIRECT PUBLIC</text>
      <text x="382" y="413" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="15" font-weight="500" letter-spacing="1.6">EVIDENCE</text>
    </g>

    ${descriptionLines.map((line, index) => `<text x="65" y="${471 + index * 27}" fill="#d4c7ae" font-family="IBM Plex Sans,Arial,sans-serif" font-size="21">${escapeXml(line)}</text>`).join("")}

    <line x1="65" y1="535" x2="1124" y2="535" stroke="#fff8eb" stroke-opacity="0.2" stroke-width="2"/>
    <text x="65" y="568" fill="#fff8eb" font-family="IBM Plex Mono,Menlo,monospace" font-size="14" font-weight="500" letter-spacing="1">${escapeXml(`${assessed} EVIDENCED · ${unknown} RESPONSIBLY UNKNOWN · ${total} TOTAL`)}</text>
    <text x="1124" y="568" text-anchor="end" fill="#df7138" font-family="IBM Plex Mono,Menlo,monospace" font-size="15" font-weight="500" letter-spacing="0.5">canmyagentuse.com/coverage</text>
  </svg>`;
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

export function renderSocialCardSvg(
  card: SocialCard,
  options: SocialCardRenderOptions = {}
): string {
  if (card.variant === "home") {
    return renderHomepageSocialCardSvg(card);
  }
  if (card.variant === "coverage") {
    return renderCoverageSocialCardSvg(card, options);
  }
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
    ${
      card.canonicalPath.startsWith("/news/")
        ? `
    <g aria-label="Field notes">
      <rect x="870" y="50" width="254" height="132" rx="12" fill="#181512" stroke="#c45c26" stroke-width="2" stroke-dasharray="5 5"/>
      <text x="892" y="85" fill="#df7138" font-family="IBM Plex Mono,Menlo,monospace" font-size="16" letter-spacing="2">FIELD NOTES</text>
      <text x="892" y="119" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="20">Everyday requests.</text>
      <text x="892" y="149" fill="#fff8eb" font-family="IBM Plex Sans,Arial,sans-serif" font-size="20">Real-world access.</text>
    </g>`
        : `    <g aria-label="Matrix cell status key">
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
    </g>`
    }

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
