import { describe, expect, it, vi } from "vitest";
import {
  CATALOG_SKILL_DOCUMENT,
  catalogSkillIndex,
} from "@canmyagentuse/catalog";
import { sha256Digest } from "./digest";
import {
  handleRepresentations,
  preferredDocumentRepresentation,
  representationPlan,
} from "./representations";

describe("preferredDocumentRepresentation", () => {
  it("selects explicitly preferred Markdown", () => {
    expect(
      preferredDocumentRepresentation("text/markdown, text/html;q=0.8")
    ).toBe("markdown");
  });

  it("respects q=0 and an HTML preference", () => {
    expect(
      preferredDocumentRepresentation("text/markdown;q=0, text/html")
    ).toBe("html");
    expect(
      preferredDocumentRepresentation("text/html, text/markdown;q=0.2")
    ).toBe("html");
  });

  it("uses HTML for ordinary wildcard clients", () => {
    expect(preferredDocumentRepresentation("*/*")).toBe("html");
    expect(preferredDocumentRepresentation(null)).toBe("html");
  });

  it("rejects unsupported document media types", () => {
    expect(preferredDocumentRepresentation("application/xml")).toBe(
      "not-acceptable"
    );
  });
});

describe("representationPlan", () => {
  it("rewrites canonical feature URLs to their Markdown twin", () => {
    const plan = representationPlan(
      new Request("https://canmyagentuse.com/features/mcp-tools?view=current", {
        headers: { accept: "text/markdown" },
      })
    );
    expect(plan).toMatchObject({
      representation: "markdown",
      canonicalPath: "/features/mcp-tools",
      negotiated: true,
      upstreamUrl:
        "https://canmyagentuse.com/features/mcp-tools.md?view=current",
    });
  });

  it("recognizes explicit Markdown fallbacks", () => {
    expect(
      representationPlan(
        new Request("https://canmyagentuse.com/features/mcp-tools.md")
      )
    ).toMatchObject({
      representation: "markdown",
      canonicalPath: "/features/mcp-tools",
      negotiated: false,
    });
  });
});

describe("handleRepresentations", () => {
  it("returns negotiated Markdown with discovery and cache headers", async () => {
    const upstream = vi.fn(async (request: Request) => {
      expect(new URL(request.url).pathname).toBe("/features/mcp-tools.md");
      return new Response("# MCP tools\n", {
        headers: { "content-type": "text/markdown" },
      });
    });
    const response = await handleRepresentations(
      new Request("https://canmyagentuse.com/features/mcp-tools", {
        headers: { accept: "text/markdown, text/html;q=0.8" },
      }),
      upstream
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8"
    );
    expect(response.headers.get("vary")).toContain("Accept");
    expect(response.headers.get("etag")).toMatch(/^"sha256-/);
    expect(response.headers.get("link")).toContain(
      '<https://canmyagentuse.com/features/mcp-tools>; rel="canonical"'
    );
    expect(response.headers.get("link")).toContain(
      '<https://canmyagentuse.com/api/v1/features/mcp-tools.json>; rel="alternate"; type="application/json"'
    );
    expect(await response.text()).toBe("# MCP tools\n");
  });

  it("gives HEAD the same representation headers and no body", async () => {
    const upstream = vi.fn(
      async (_request: Request) => new Response("# MCP tools\n")
    );
    const response = await handleRepresentations(
      new Request("https://canmyagentuse.com/features/mcp-tools", {
        method: "HEAD",
        headers: { accept: "text/markdown" },
      }),
      upstream
    );

    const forwardedRequest = upstream.mock.calls.at(0)?.[0];
    expect(forwardedRequest).toBeInstanceOf(Request);
    expect(forwardedRequest?.method).toBe("GET");
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8"
    );
    expect(await response.text()).toBe("");
  });

  it("honors conditional requests using representation-specific ETags", async () => {
    const request = new Request(
      "https://canmyagentuse.com/features/mcp-tools",
      { headers: { accept: "text/markdown" } }
    );
    const first = await handleRepresentations(
      request,
      async () => new Response("# MCP tools\n")
    );
    const etag = first.headers.get("etag");
    expect(etag).toBeTruthy();

    const conditional = await handleRepresentations(
      new Request(request.url, {
        headers: { accept: "text/markdown", "if-none-match": etag ?? "" },
      }),
      async () => new Response("# MCP tools\n")
    );
    expect(conditional.status).toBe(304);
    expect(await conditional.text()).toBe("");
  });

  it("returns deterministic Markdown errors", async () => {
    const missing = await handleRepresentations(
      new Request("https://canmyagentuse.com/features/not-published", {
        headers: { accept: "text/markdown" },
      }),
      async () => new Response("HTML not found", { status: 404 })
    );
    expect(missing.status).toBe(404);
    expect(missing.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8"
    );
    expect(await missing.text()).toContain("No published catalog document");

    const unsupported = await handleRepresentations(
      new Request("https://canmyagentuse.com/features/mcp-tools", {
        headers: { accept: "application/xml" },
      }),
      async () => new Response("unused")
    );
    expect(unsupported.status).toBe(406);
    expect(unsupported.headers.get("vary")).toContain("Accept");
  });
});

describe("agent skill discovery", () => {
  it("publishes a verifiable single-file skill", async () => {
    const digest = await sha256Digest(CATALOG_SKILL_DOCUMENT);
    expect(digest).toMatch(/^sha256:[a-f0-9]{64}$/);
    expect(catalogSkillIndex(digest)).toMatchObject({
      $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
      skills: [
        {
          name: "can-my-agent-use",
          type: "skill-md",
          url: "/skills/can-my-agent-use/SKILL.md",
          digest,
        },
      ],
    });
  });
});
