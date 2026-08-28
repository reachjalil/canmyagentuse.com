import type { APIRoute } from "astro";
import {
  featureJsonPath,
  featureMarkdownPath,
  featurePath,
} from "@canmyagentuse/catalog";
import { entryBySlug, publishedCollection } from "../../../../lib/collections";
import { jsonResponse } from "../../../../lib/security";

export async function getStaticPaths() {
  const features = await publishedCollection("features");
  return features.map((feature) => ({
    params: { slug: feature.data.slug },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const features = await publishedCollection("features");
  const feature = entryBySlug(features, params.slug ?? "");
  if (!feature) {
    return jsonResponse({ error: "Unknown feature" }, 404);
  }

  return jsonResponse({
    ...feature.data,
    html: featurePath(feature.data.slug),
    markdown: featureMarkdownPath(feature.data.slug),
    json: featureJsonPath(feature.data.slug),
    body: feature.body ?? "",
  });
};
