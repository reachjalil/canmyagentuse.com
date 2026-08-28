import type { APIRoute } from "astro";
import { entryBySlug, publishedCollection } from "../../lib/collections";
import { specificationMarkdown } from "../../lib/markdown";
import { markdownResponse } from "../../lib/security";

export async function getStaticPaths() {
  const specifications = await publishedCollection("specifications");
  return specifications.map((entry) => ({ params: { slug: entry.data.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
  const specifications = await publishedCollection("specifications");
  const specification = entryBySlug(specifications, params.slug ?? "");
  if (!specification) return new Response("Not found", { status: 404 });
  return markdownResponse(
    specificationMarkdown({
      specification: specification.data,
      body: specification.body ?? "",
    })
  );
};
