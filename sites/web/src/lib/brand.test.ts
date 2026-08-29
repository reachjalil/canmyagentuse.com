import { describe, expect, it } from "vitest";
import { brandReferencePayload } from "./brand";

describe("brandReferencePayload", () => {
  it("serializes a reviewed product mark without internal source metadata", () => {
    expect(
      brandReferencePayload({
        provider: "Anthropic",
        product: "Claude CLI",
        productSlug: "claude-cli",
      })
    ).toEqual({
      provider: "Anthropic",
      product: "Claude CLI",
      productSlug: "claude-cli",
      mark: {
        id: "claude-code",
        label: "Claude Code",
        path: "/provider-marks/claude-code.svg",
        reviewedAt: "2026-08-28",
      },
      fallback: { monogram: "AN", tone: "clay" },
      index: "/provider-marks",
    });
  });

  it("provides a stable fallback for an unmapped product", () => {
    const reference = brandReferencePayload({
      provider: "OpenWork",
      product: "OpenWork Desktop",
      productSlug: "openwork-desktop",
    });
    expect(reference.mark).toBeNull();
    expect(reference.fallback).toEqual({ monogram: "OW", tone: "copper" });
  });
});
