import type { APIRoute } from "astro";
import { entryBySlug, publishedCollection } from "../lib/collections";
import { pageEntryMarkdown } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export async function getStaticPaths() {
  const pages = await publishedCollection("pages");
  return pages
    .filter((page) => page.data.slug !== "home")
    .map((page) => ({ params: { slug: page.data.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
  const pages = await publishedCollection("pages");
  const page = entryBySlug(pages, params.slug ?? "");
  if (!page) return new Response("Unknown page", { status: 404 });
  return markdownResponse(
    pageEntryMarkdown({ page: page.data, body: page.body ?? "" })
  );
};
