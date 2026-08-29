import sharp from "sharp";
import { describe, expect, it } from "vitest";
import { renderSocialCardSvg, wrapSocialText } from "./social-card";

const card = {
  canonicalPath: "/features/mcp-tools",
  eyebrow: "Capability compatibility",
  title: "Can my agent use MCP tools?",
  description:
    "Current-track MCP tool support by exact agent harness surface, with dated public evidence.",
  meta: "MCP 2026-07-28 · interfaces",
};

describe("social cards", () => {
  it("wraps long copy within its line budget", () => {
    const lines = wrapSocialText(
      "A deliberately long title that must remain readable inside a social sharing card",
      24,
      3
    );
    expect(lines).toHaveLength(3);
    expect(lines[2]).toMatch(/…$/);
  });

  it("escapes authored copy", () => {
    expect(
      renderSocialCardSvg({ ...card, title: "MCP <tools> & apps" })
    ).toContain("MCP &lt;tools&gt; &amp; apps");
  });

  it("explains matrix compatibility without relying on color alone", () => {
    const svg = renderSocialCardSvg(card);
    expect(svg).toContain("MATRIX CELL STATUS");
    expect(svg).toContain("SUPPORTED");
    expect(svg).toContain("PARTIAL");
    expect(svg).toContain("UNSUPPORTED");
    expect(svg).toContain("UNKNOWN");
  });

  it("gives the homepage a focused question-to-source story", () => {
    const svg = renderSocialCardSvg({
      ...card,
      canonicalPath: "/",
      eyebrow: "Independent AI agent compatibility catalog",
      title: "Know what your AI agent can actually do.",
      description:
        "Pick a capability, compare exact products, and check the public evidence behind every answer.",
      meta: "Independent research · unknown stays unknown",
      variant: "home",
    });

    expect(svg).toContain("FROM QUESTION TO SOURCE");
    expect(svg).toContain("Can it use MCP tools?");
    expect(svg).toContain("open the public source");
    expect(svg).toContain("INDEPENDENT · EVIDENCE-LED");
    expect(svg).not.toContain("MATRIX CELL STATUS");
  });

  it("groups the four main provider families by exact surface", () => {
    const svg = renderSocialCardSvg({
      ...card,
      title: "Computer use",
      compatibility: [
        {
          label: "ChatGPT",
          vendor: "OpenAI",
          surfaces: [
            { surface: "web", status: "partial" },
            { surface: "desktop", status: "unknown" },
            { surface: "cli", status: "unknown" },
          ],
        },
        {
          label: "Claude",
          vendor: "Anthropic",
          surfaces: [
            { surface: "web", status: "unknown" },
            { surface: "desktop", status: "unknown" },
            { surface: "cli", status: "unknown" },
          ],
        },
        {
          label: "Cursor",
          vendor: "Anysphere",
          surfaces: [
            { surface: "web", status: "na" },
            { surface: "desktop", status: "partial" },
            { surface: "cli", status: "na" },
          ],
        },
        {
          label: "Copilot",
          vendor: "Microsoft",
          surfaces: [
            { surface: "web", status: "unknown" },
            { surface: "desktop", status: "partial" },
            { surface: "cli", status: "unknown" },
          ],
        },
      ],
    });
    expect(svg).toContain("4 MAIN PROVIDER FAMILIES");
    expect(svg).toContain("Computer use");
    expect(svg).toContain("OPENAI");
    expect(svg).toContain("ANTHROPIC");
    expect(svg).toContain("ANYSPHERE");
    expect(svg).toContain("MICROSOFT");
    expect(svg).toContain("DESKTOP");
    expect(svg).toContain("CLI");
    expect(svg).toContain("PARTIAL");
    expect(svg).toContain("UNKNOWN");
    expect(svg).toContain("N/A");
    expect(svg).toContain("NOT A SCORE");
  });

  it("renders a platform-compatible 1200 by 630 PNG", async () => {
    const png = await sharp(Buffer.from(renderSocialCardSvg(card)))
      .png()
      .toBuffer();
    const metadata = await sharp(png).metadata();
    expect(metadata.format).toBe("png");
    expect(metadata.width).toBe(1200);
    expect(metadata.height).toBe(630);
  });
});
