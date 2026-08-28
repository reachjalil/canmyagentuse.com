import {
  API_CATALOG_PROFILE,
  MACHINE_PATHS,
  SITE,
  absoluteUrl,
} from "@canmyagentuse/catalog";

const CANONICAL_HOST = "canmyagentuse.com";

const BASELINE_HEADERS = {
  "cross-origin-opener-policy": "same-origin",
  "origin-agent-cluster": "?1",
  "permissions-policy":
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "x-dns-prefetch-control": "off",
  "x-frame-options": "DENY",
  "content-security-policy":
    "default-src 'self'; base-uri 'self'; connect-src 'self'; font-src 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; manifest-src 'self'; object-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; worker-src 'self'; upgrade-insecure-requests",
} as const;

const PUBLIC_MACHINE_PREFIXES = [
  "/api/v1/",
  "/llms.txt",
  "/llms-full.txt",
  "/skills/",
];
const PUBLIC_MACHINE_PATHS = new Set([
  "/.well-known/api-catalog",
  "/.well-known/agent-skills/index.json",
  "/.well-known/ai.txt",
  "/feed.json",
  "/feed.xml",
  "/manifest.webmanifest",
  "/opensearch.xml",
  "/robots.txt",
  "/sitemap.md",
  "/sitemap.xml",
]);

function setHeaderIfMissing(
  headers: Headers,
  name: string,
  value: string
): void {
  if (!headers.has(name)) headers.set(name, value);
}

export function redirectCanonicalHost(request: Request): Response | undefined {
  const url = new URL(request.url);
  if (url.hostname === `www.${CANONICAL_HOST}`) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url, 301);
  }
  return undefined;
}

export function isPublicMachineSurface(pathname: string): boolean {
  return (
    PUBLIC_MACHINE_PATHS.has(pathname) ||
    PUBLIC_MACHINE_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(prefix)
    ) ||
    pathname.endsWith("/llms.txt") ||
    pathname.endsWith(".md")
  );
}

export function publicMachineOptionsResponse(
  request: Request
): Response | undefined {
  const pathname = new URL(request.url).pathname;
  if (request.method !== "OPTIONS" || !isPublicMachineSurface(pathname)) {
    return undefined;
  }
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, HEAD, OPTIONS",
      "access-control-allow-headers": "Accept, Content-Type, If-None-Match",
      "access-control-max-age": "86400",
    },
  });
}

export function applySecurityHeaders(
  request: Request,
  response: Response
): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(BASELINE_HEADERS)) {
    setHeaderIfMissing(headers, name, value);
  }

  const pathname = new URL(request.url).pathname;
  const responseType = headers.get("content-type")?.toLowerCase() ?? "";
  const isMachineSurface =
    isPublicMachineSurface(pathname) ||
    responseType.includes("text/markdown") ||
    responseType.includes("application/json") ||
    responseType.includes("application/linkset+json");

  headers.set(
    "cross-origin-resource-policy",
    isMachineSurface ? "cross-origin" : "same-origin"
  );

  if (isMachineSurface && !headers.has("access-control-allow-origin")) {
    headers.set("access-control-allow-origin", "*");
    headers.set("access-control-allow-methods", "GET, HEAD, OPTIONS");
  }

  if (pathname === MACHINE_PATHS.apiCatalog) {
    headers.set(
      "content-type",
      `application/linkset+json; profile="${API_CATALOG_PROFILE}"`
    );
    headers.set(
      "link",
      `<${absoluteUrl(MACHINE_PATHS.apiCatalog, SITE.url)}>; rel="api-catalog"; type="application/linkset+json"`
    );
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function markdownResponse(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": status === 200 ? "public, max-age=300" : "no-store",
    },
  });
}

export function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": status === 200 ? "public, max-age=300" : "no-store",
    },
  });
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}

export function textResponse(
  body: string,
  contentType = "text/plain; charset=utf-8"
): Response {
  return new Response(body, {
    headers: {
      "content-type": contentType,
      "cache-control": "public, max-age=300",
    },
  });
}
