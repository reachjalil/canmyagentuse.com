import { describe, expect, it } from "vitest";
import { isRuntimeCatalogDocument } from "./request-routing";

describe("isRuntimeCatalogDocument", () => {
  it("keeps query-aware search HTML and Markdown in the Astro handler", () => {
    expect(isRuntimeCatalogDocument("/search")).toBe(true);
    expect(isRuntimeCatalogDocument("/search.md")).toBe(true);
  });

  it("keeps generated comparison Markdown dynamic while static HTML uses assets", () => {
    expect(isRuntimeCatalogDocument("/compare.md")).toBe(true);
    expect(isRuntimeCatalogDocument("/matrix.md")).toBe(true);
    expect(isRuntimeCatalogDocument("/compare")).toBe(false);
    expect(isRuntimeCatalogDocument("/matrix")).toBe(false);
    expect(isRuntimeCatalogDocument("/provider-marks")).toBe(false);
  });
});
