import type { APIRoute } from "astro";
import {
  absoluteUrl,
  newsPath,
  newsMarkdownPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () =>
  jsonResponse({
    items: (await publishedCollection("news"))
      .filter((entry) => entry.data.review)
      .map(({ data }) => ({
        slug: data.slug,
        title: data.title,
        url: absoluteUrl(newsPath(data.slug)),
        markdownUrl: absoluteUrl(newsMarkdownPath(data.slug)),
        review: data.review,
      })),
  });
