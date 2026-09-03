import type { APIRoute } from "astro";
import { MACHINE_PATHS, SITE } from "@canmyagentuse/catalog";
import { textResponse } from "../lib/security";

export const GET: APIRoute = () =>
  textResponse(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${new URL(MACHINE_PATHS.sitemap, SITE.url).toString()}`,
      `# Markdown sitemap: ${new URL(MACHINE_PATHS.sitemapMarkdown, SITE.url).toString()}`,
      `# Agent index: ${new URL(MACHINE_PATHS.llms, SITE.url).toString()}`,
      `# API catalog: ${new URL(MACHINE_PATHS.apiCatalog, SITE.url).toString()}`,
      `# Agent skills: ${new URL(MACHINE_PATHS.agentSkillsIndex, SITE.url).toString()}`,
      `# Canonical prompt: ${new URL(MACHINE_PATHS.promptText, SITE.url).toString()}`,
      "",
    ].join("\n")
  );
