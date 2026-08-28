import {
  MACHINE_PATHS,
  SITE,
  absoluteUrl,
  jsonPathForPagePath,
  markdownPathForPagePath,
  pagePathForMarkdownPath,
} from "@canmyagentuse/catalog";

type Representation = "html" | "markdown";

interface MediaRange {
  type: string;
  subtype: string;
  quality: number;
  order: number;
}

export interface RepresentationPlan {
  representation: Representation;
  canonicalPath: string;
  upstreamUrl: string;
  negotiated: boolean;
}

function parseQuality(value: string | undefined): number {
  if (value === undefined) return 1;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(1, Math.max(0, parsed));
}

export function parseAccept(value: string | null): MediaRange[] {
  if (!value?.trim()) return [];
  return value
    .split(",")
    .map((part, order) => {
      const [rawMediaType, ...parameters] = part.trim().split(";");
      const [type, subtype] = rawMediaType?.toLowerCase().split("/") ?? [];
      if (!type || !subtype) return undefined;
      const qualityParameter = parameters
        .map((parameter) => parameter.trim().split("="))
        .find(([name]) => name?.toLowerCase() === "q");
      return {
        type,
        subtype,
        quality: parseQuality(qualityParameter?.[1]),
        order,
      };
    })
    .filter((range): range is MediaRange => Boolean(range));
}

function mediaQuality(
  ranges: readonly MediaRange[],
  mediaType: string
): number {
  const [type, subtype] = mediaType.split("/");
  const matches = ranges
    .filter(
      (range) =>
        (range.type === "*" || range.type === type) &&
        (range.subtype === "*" || range.subtype === subtype)
    )
    .toSorted((left, right) => {
      const leftSpecificity =
        Number(left.type !== "*") + Number(left.subtype !== "*");
      const rightSpecificity =
        Number(right.type !== "*") + Number(right.subtype !== "*");
      return rightSpecificity - leftSpecificity || left.order - right.order;
    });
  return matches[0]?.quality ?? 0;
}

export function preferredDocumentRepresentation(
  accept: string | null
): Representation | "not-acceptable" {
  const ranges = parseAccept(accept);
  if (ranges.length === 0) return "html";

  const markdownWasExplicitlyRequested = ranges.some(
    (range) =>
      range.type === "text" && range.subtype === "markdown" && range.quality > 0
  );
  const markdownQuality = mediaQuality(ranges, "text/markdown");
  const htmlQuality = mediaQuality(ranges, "text/html");

  if (
    markdownWasExplicitlyRequested &&
    markdownQuality > 0 &&
    markdownQuality >= htmlQuality
  ) {
    return "markdown";
  }
  if (htmlQuality > 0) return "html";
  if (markdownWasExplicitlyRequested && markdownQuality > 0) return "markdown";
  return "not-acceptable";
}

export function representationPlan(
  request: Request
): RepresentationPlan | "not-acceptable" | undefined {
  if (request.method !== "GET" && request.method !== "HEAD") return undefined;
  const url = new URL(request.url);
  const explicitCanonicalPath = pagePathForMarkdownPath(url.pathname);
  if (explicitCanonicalPath) {
    return {
      representation: "markdown",
      canonicalPath: explicitCanonicalPath,
      upstreamUrl: url.toString(),
      negotiated: false,
    };
  }

  const markdownPath = markdownPathForPagePath(url.pathname);
  if (!markdownPath) return undefined;
  const preferred = preferredDocumentRepresentation(
    request.headers.get("accept")
  );
  if (preferred === "not-acceptable") return preferred;
  if (preferred === "markdown") {
    const upstream = new URL(url);
    upstream.pathname = markdownPath;
    return {
      representation: "markdown",
      canonicalPath: url.pathname,
      upstreamUrl: upstream.toString(),
      negotiated: true,
    };
  }
  return {
    representation: "html",
    canonicalPath: url.pathname,
    upstreamUrl: url.toString(),
    negotiated: true,
  };
}

function appendVary(headers: Headers, value: string): void {
  const values = new Set(
    (headers.get("vary") ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  );
  values.add(value);
  headers.set("vary", [...values].join(", "));
}

function discoveryLinks(
  canonicalPath: string,
  representation: Representation
): string[] {
  const canonical = absoluteUrl(canonicalPath, SITE.url);
  const markdownPath = markdownPathForPagePath(canonicalPath);
  const jsonPath = jsonPathForPagePath(canonicalPath);
  const links = [
    `<${canonical}>; rel="canonical"; type="text/html"`,
    `<${absoluteUrl(MACHINE_PATHS.apiCatalog, SITE.url)}>; rel="api-catalog"; type="application/linkset+json"`,
  ];
  if (markdownPath && representation === "html") {
    links.push(
      `<${absoluteUrl(markdownPath, SITE.url)}>; rel="alternate"; type="text/markdown"`
    );
  }
  if (jsonPath) {
    links.push(
      `<${absoluteUrl(jsonPath, SITE.url)}>; rel="alternate"; type="application/json"`
    );
  }
  return links;
}

export function applyRepresentationHeaders(
  response: Response,
  plan: RepresentationPlan
): Response {
  const headers = new Headers(response.headers);
  if (plan.negotiated) appendVary(headers, "Accept");
  headers.set(
    "link",
    discoveryLinks(plan.canonicalPath, plan.representation).join(", ")
  );
  if (plan.representation === "markdown") {
    headers.set("content-type", "text/markdown; charset=utf-8");
    headers.set(
      "content-location",
      absoluteUrl(
        markdownPathForPagePath(plan.canonicalPath) ?? plan.canonicalPath
      )
    );
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function bytesToHex(bytes: Uint8Array): string {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function responseEtag(body: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", body);
  return `"sha256-${bytesToHex(new Uint8Array(digest))}"`;
}

function etagMatches(header: string | null, etag: string): boolean {
  if (!header) return false;
  const normalized = etag.replace(/^W\//, "");
  return header.split(",").some((candidate) => {
    const value = candidate.trim();
    return value === "*" || value.replace(/^W\//, "") === normalized;
  });
}

async function finalizeResponse(
  request: Request,
  response: Response,
  plan: RepresentationPlan
): Promise<Response> {
  const decorated = applyRepresentationHeaders(response, plan);
  if (
    decorated.status < 200 ||
    decorated.status === 204 ||
    decorated.status === 304
  ) {
    return decorated;
  }

  const body = await decorated.arrayBuffer();
  const headers = new Headers(decorated.headers);
  const etag = headers.get("etag") ?? (await responseEtag(body));
  headers.set("etag", etag);

  if (etagMatches(request.headers.get("if-none-match"), etag)) {
    headers.delete("content-length");
    return new Response(null, { status: 304, headers });
  }
  return new Response(request.method === "HEAD" ? null : body, {
    status: decorated.status,
    statusText: decorated.statusText,
    headers,
  });
}

function markdownError(
  status: number,
  title: string,
  message: string
): Response {
  return new Response(`# ${title}\n\n${message}\n`, {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/markdown; charset=utf-8",
    },
  });
}

export async function handleRepresentations(
  request: Request,
  fetchUpstream: (request: Request) => Promise<Response>
): Promise<Response> {
  const plan = representationPlan(request);
  if (plan === "not-acceptable") {
    const canonicalPath = new URL(request.url).pathname;
    return finalizeResponse(
      request,
      markdownError(
        406,
        "Not acceptable",
        "Request this document as text/html or text/markdown."
      ),
      {
        representation: "markdown",
        canonicalPath,
        upstreamUrl: request.url,
        negotiated: true,
      }
    );
  }
  if (!plan) return fetchUpstream(request);

  const upstreamHeaders = new Headers(request.headers);
  upstreamHeaders.delete("if-none-match");
  const upstreamRequest = new Request(plan.upstreamUrl, {
    method: request.method === "HEAD" ? "GET" : request.method,
    headers: upstreamHeaders,
    redirect: request.redirect,
  });
  let response = await fetchUpstream(upstreamRequest);
  if (plan.representation === "markdown" && response.status === 404) {
    response = markdownError(
      404,
      "Not found",
      `No published catalog document exists at ${plan.canonicalPath}.`
    );
  }
  return finalizeResponse(request, response, plan);
}
