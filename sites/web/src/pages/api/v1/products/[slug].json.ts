import type { APIRoute } from "astro";
import { productRecord } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../../lib/collections";
import { jsonResponse } from "../../../../lib/security";
export async function getStaticPaths() {
  return (await publishedCollection("products")).map((entry) => ({
    params: { slug: entry.data.slug },
    props: { entry },
  }));
}
export const GET: APIRoute = ({ props }) =>
  jsonResponse(productRecord(props.entry.data, props.entry.body ?? ""));
