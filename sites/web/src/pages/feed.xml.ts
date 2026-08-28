import type { APIRoute } from "astro";
import { SITE, newsPath } from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { xmlResponse } from "../lib/security";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const GET: APIRoute = async () => {
  const news = await publishedCollection("news");
  const newest = news[0]?.data.updated ?? new Date("2026-08-28T00:00:00.000Z");
  const items = news.map((entry) => {
    const url = `${SITE.url}${newsPath(entry.data.slug)}`;
    const published = entry.data.published ?? entry.data.updated;
    return `    <item>
      <title>${escapeXml(entry.data.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${published.toUTCString()}</pubDate>
      <description>${escapeXml(entry.data.summary)}</description>
    </item>`;
  });

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE.name} news`)}</title>
    <link>${SITE.url}/news</link>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Editorial and dataset changes from the independent Can My Agent Use catalog.</description>
    <language>${SITE.defaultLocale}</language>
    <lastBuildDate>${newest.toUTCString()}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>`);
};
