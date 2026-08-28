import type { APIRoute } from "astro";
import { entryBySlug, publishedCollection } from "../../lib/collections";
import { newsEntryMarkdown } from "../../lib/markdown";
import { markdownResponse } from "../../lib/security";

export async function getStaticPaths() {
  const news = await publishedCollection("news");
  return news.map((item) => ({ params: { slug: item.data.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
  const news = await publishedCollection("news");
  const item = entryBySlug(news, params.slug ?? "");
  if (!item) return new Response("Unknown news entry", { status: 404 });
  return markdownResponse(
    newsEntryMarkdown({ item: item.data, body: item.body ?? "" })
  );
};
