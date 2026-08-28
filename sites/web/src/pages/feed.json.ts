import type { APIRoute } from "astro";
import { SITE, newsPath } from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { textResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const news = await publishedCollection("news");
  return textResponse(
    JSON.stringify(
      {
        version: "https://jsonfeed.org/version/1.1",
        title: `${SITE.name} news`,
        home_page_url: `${SITE.url}/news`,
        feed_url: `${SITE.url}/feed.json`,
        description:
          "Editorial and dataset changes from the independent Can My Agent Use catalog.",
        icon: `${SITE.url}${SITE.markPath}`,
        language: SITE.defaultLocale,
        items: news.map((entry) => ({
          id: `${SITE.url}${newsPath(entry.data.slug)}`,
          url: `${SITE.url}${newsPath(entry.data.slug)}`,
          title: entry.data.title,
          summary: entry.data.summary,
          date_published: entry.data.published?.toISOString(),
          date_modified: entry.data.updated.toISOString(),
          tags: entry.data.tags,
        })),
      },
      null,
      2
    ),
    "application/feed+json; charset=utf-8"
  );
};
