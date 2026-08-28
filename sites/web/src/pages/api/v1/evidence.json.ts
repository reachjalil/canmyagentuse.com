import type { APIRoute } from "astro";
import { buildEvidenceLedger } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () => {
  const features = await publishedCollection("features");
  return jsonResponse({
    evidenceClassNotice:
      "Documentation and listing records are not runtime certification.",
    items: buildEvidenceLedger(features.map((entry) => entry.data)),
  });
};
