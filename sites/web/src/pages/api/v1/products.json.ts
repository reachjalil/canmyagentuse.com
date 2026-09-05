import type { APIRoute } from "astro";
import { productRecord } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";
export const GET: APIRoute = async () =>
  jsonResponse({
    items: (await publishedCollection("products")).map((entry) =>
      productRecord(entry.data)
    ),
  });
