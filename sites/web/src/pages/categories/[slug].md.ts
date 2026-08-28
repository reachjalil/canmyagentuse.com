import type { APIRoute } from "astro";
import { entryBySlug, publishedCollection } from "../../lib/collections";
import { categoryEntryMarkdown } from "../../lib/markdown";
import { markdownResponse } from "../../lib/security";

export async function getStaticPaths() {
  const categories = await publishedCollection("categories");
  return categories.map((category) => ({
    params: { slug: category.data.slug },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const [categories, features] = await Promise.all([
    publishedCollection("categories"),
    publishedCollection("features"),
  ]);
  const category = entryBySlug(categories, params.slug ?? "");
  if (!category) return new Response("Unknown category", { status: 404 });
  return markdownResponse(
    categoryEntryMarkdown({
      category: category.data,
      features: features.map((entry) => entry.data),
      body: category.body ?? "",
    })
  );
};
