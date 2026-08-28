import type { APIRoute } from "astro";
import { buildCoverageReport } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () => {
  const [features, harnesses] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
  ]);
  return jsonResponse(
    buildCoverageReport(
      features.map((entry) => entry.data),
      harnesses.map((entry) => entry.data)
    )
  );
};
