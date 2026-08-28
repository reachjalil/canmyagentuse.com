import type { APIRoute } from "astro";
import {
  harnessJsonPath,
  harnessMarkdownPath,
  harnessPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () => {
  const harnesses = await publishedCollection("harnesses");
  return jsonResponse({
    items: harnesses.map((harness) => ({
      ...harness.data,
      html: harnessPath(harness.data.slug),
      markdown: harnessMarkdownPath(harness.data.slug),
      json: harnessJsonPath(harness.data.slug),
    })),
  });
};
