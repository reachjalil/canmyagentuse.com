import type { APIRoute } from "astro";
import { entryBySlug, publishedCollection } from "../../lib/collections";
import { featureMarkdown } from "../../lib/markdown";
import { markdownResponse } from "../../lib/security";

export async function getStaticPaths() {
  const features = await publishedCollection("features");
  return features.map((feature) => ({
    params: { slug: feature.data.slug },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const [features, harnesses] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
  ]);
  const feature = entryBySlug(features, params.slug ?? "");
  if (!feature) {
    return new Response("Unknown feature", { status: 404 });
  }

  return markdownResponse(
    featureMarkdown({
      feature: feature.data,
      harnesses: harnesses.map((entry) => entry.data),
      body: feature.body ?? "",
    })
  );
};
