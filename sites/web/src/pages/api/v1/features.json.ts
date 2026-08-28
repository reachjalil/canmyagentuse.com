import type { APIRoute } from "astro";
import {
  featureJsonPath,
  featureMarkdownPath,
  featurePath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () => {
  const features = await publishedCollection("features");
  return jsonResponse({
    items: features.map((feature) => ({
      ...feature.data,
      html: featurePath(feature.data.slug),
      markdown: featureMarkdownPath(feature.data.slug),
      json: featureJsonPath(feature.data.slug),
    })),
  });
};
