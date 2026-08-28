import type { APIRoute } from "astro";
import { entryBySlug, publishedCollection } from "../../lib/collections";
import { harnessMarkdown } from "../../lib/markdown";
import { markdownResponse } from "../../lib/security";

export async function getStaticPaths() {
  const harnesses = await publishedCollection("harnesses");
  return harnesses.map((harness) => ({
    params: { slug: harness.data.slug },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const [features, harnesses] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
  ]);
  const harness = entryBySlug(harnesses, params.slug ?? "");
  if (!harness) {
    return new Response("Unknown harness", { status: 404 });
  }

  return markdownResponse(
    harnessMarkdown({
      harness: harness.data,
      harnesses: harnesses.map((entry) => entry.data),
      features: features.map((entry) => entry.data),
      body: harness.body ?? "",
    })
  );
};
