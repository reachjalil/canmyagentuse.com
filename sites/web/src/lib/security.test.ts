import { describe, expect, it } from "vitest";
import {
  applySecurityHeaders,
  isPublicMachineSurface,
  publicMachineOptionsResponse,
  redirectCanonicalHost,
} from "./security";

describe("redirectCanonicalHost", () => {
  it("sends www to the apex host", () => {
    const response = redirectCanonicalHost(
      new Request("https://www.canmyagentuse.com/features")
    );
    expect(response?.status).toBe(301);
    expect(response?.headers.get("location")).toBe(
      "https://canmyagentuse.com/features"
    );
  });

  it("leaves the apex host alone", () => {
    expect(
      redirectCanonicalHost(new Request("https://canmyagentuse.com/features"))
    ).toBeUndefined();
  });
});

describe("applySecurityHeaders", () => {
  it("allows public catalog JSON to be read cross-origin", () => {
    const response = applySecurityHeaders(
      new Request("https://canmyagentuse.com/api/v1/features.json"),
      new Response("[]")
    );
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
    expect(response.headers.get("cross-origin-resource-policy")).toBe(
      "cross-origin"
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "default-src 'self'"
    );
  });

  it("keeps HTML documents same-origin", () => {
    const response = applySecurityHeaders(
      new Request("https://canmyagentuse.com/features"),
      new Response("<html></html>")
    );
    expect(response.headers.get("x-frame-options")).toBe("DENY");
    expect(response.headers.get("cross-origin-resource-policy")).toBe(
      "same-origin"
    );
    expect(response.headers.get("access-control-allow-origin")).toBeNull();
  });

  it("permits Cloudflare Web Analytics without widening other sources", () => {
    const response = applySecurityHeaders(
      new Request("https://canmyagentuse.com/features"),
      new Response("<html></html>")
    );
    const policy = response.headers.get("content-security-policy");
    expect(policy).toContain(
      "connect-src 'self' https://cloudflareinsights.com"
    );
    expect(policy).toContain(
      "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com"
    );
  });

  it("allows negotiated Markdown on canonical URLs cross-origin", () => {
    const response = applySecurityHeaders(
      new Request("https://canmyagentuse.com/features/mcp-tools"),
      new Response("# MCP tools", {
        headers: { "content-type": "text/markdown; charset=utf-8" },
      })
    );
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
    expect(response.headers.get("cross-origin-resource-policy")).toBe(
      "cross-origin"
    );
  });

  it("pins the RFC 9727 media type and discovery link", () => {
    const response = applySecurityHeaders(
      new Request("https://canmyagentuse.com/.well-known/api-catalog"),
      new Response("{}")
    );
    expect(response.headers.get("content-type")).toBe(
      'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"'
    );
    expect(response.headers.get("link")).toContain('rel="api-catalog"');
  });
});

describe("public machine surfaces", () => {
  it("recognizes JSON, Markdown, and discovery documents", () => {
    expect(isPublicMachineSurface("/api/v1/coverage.json")).toBe(true);
    expect(isPublicMachineSurface("/features/mcp-tools.md")).toBe(true);
    expect(isPublicMachineSurface("/.well-known/ai.txt")).toBe(true);
    expect(isPublicMachineSurface("/sitemap.md")).toBe(true);
    expect(isPublicMachineSurface("/features/llms.txt")).toBe(true);
    expect(isPublicMachineSurface("/features/mcp-tools")).toBe(false);
  });

  it("answers CORS preflight without invoking Astro", () => {
    const response = publicMachineOptionsResponse(
      new Request("https://canmyagentuse.com/api/v1/features.json", {
        method: "OPTIONS",
      })
    );
    expect(response?.status).toBe(204);
    expect(response?.headers.get("access-control-allow-origin")).toBe("*");
    expect(response?.headers.get("access-control-max-age")).toBe("86400");
  });

  it("does not intercept HTML OPTIONS requests", () => {
    expect(
      publicMachineOptionsResponse(
        new Request("https://canmyagentuse.com/features", {
          method: "OPTIONS",
        })
      )
    ).toBeUndefined();
  });
});
