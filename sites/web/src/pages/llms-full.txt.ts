import type { APIRoute } from "astro";
import { SITE, toLlmsFullTxt } from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { researchAtlasMarkdown } from "../lib/research";
import { textResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const [features, harnesses, specifications, pages, news] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
    publishedCollection("specifications"),
    publishedCollection("pages"),
    publishedCollection("news"),
  ]);

  const catalog = toLlmsFullTxt({
    features: features.map((entry) => ({
      data: entry.data,
      body: entry.body ?? "",
    })),
    harnesses: harnesses.map((entry) => ({
      data: entry.data,
      body: entry.body ?? "",
    })),
    specifications: specifications.map((entry) => ({
      data: entry.data,
      body: entry.body ?? "",
    })),
    pages: pages.map((entry) => ({
      data: entry.data,
      body: entry.body ?? "",
    })),
    news: news.map((entry) => ({
      data: entry.data,
      body: entry.body ?? "",
    })),
    siteUrl: SITE.url,
  });
  return textResponse(`${catalog}\n\n${researchAtlasMarkdown()}`);
};
