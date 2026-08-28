import type { APIRoute } from "astro";
import {
  harnessJsonPath,
  harnessMarkdownPath,
  harnessPath,
} from "@canmyagentuse/catalog";
import { entryBySlug, publishedCollection } from "../../../../lib/collections";
import { jsonResponse } from "../../../../lib/security";

export async function getStaticPaths() {
  const harnesses = await publishedCollection("harnesses");
  return harnesses.map((harness) => ({
    params: { slug: harness.data.slug },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const harnesses = await publishedCollection("harnesses");
  const harness = entryBySlug(harnesses, params.slug ?? "");
  if (!harness) {
    return jsonResponse({ error: "Unknown harness" }, 404);
  }

  return jsonResponse({
    ...harness.data,
    html: harnessPath(harness.data.slug),
    markdown: harnessMarkdownPath(harness.data.slug),
    json: harnessJsonPath(harness.data.slug),
    body: harness.body ?? "",
  });
};
