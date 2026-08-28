import type { APIRoute } from "astro";
import {
  specificationJsonPath,
  specificationMarkdownPath,
  specificationPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () => {
  const specifications = await publishedCollection("specifications");
  return jsonResponse({
    items: specifications.map((entry) => ({
      ...entry.data,
      html: specificationPath(entry.data.slug),
      markdown: specificationMarkdownPath(entry.data.slug),
      json: specificationJsonPath(entry.data.slug),
    })),
  });
};
