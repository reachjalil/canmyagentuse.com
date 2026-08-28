import type { APIRoute } from "astro";
import {
  specificationJsonPath,
  specificationMarkdownPath,
  specificationPath,
} from "@canmyagentuse/catalog";
import { entryBySlug, publishedCollection } from "../../../../lib/collections";
import { jsonResponse } from "../../../../lib/security";

export async function getStaticPaths() {
  const specifications = await publishedCollection("specifications");
  return specifications.map((entry) => ({ params: { slug: entry.data.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
  const specifications = await publishedCollection("specifications");
  const specification = entryBySlug(specifications, params.slug ?? "");
  if (!specification) return jsonResponse({ error: "Not found" }, 404);
  return jsonResponse({
    ...specification.data,
    body: specification.body ?? "",
    html: specificationPath(specification.data.slug),
    markdown: specificationMarkdownPath(specification.data.slug),
    json: specificationJsonPath(specification.data.slug),
  });
};
