import type { APIRoute } from "astro";
import { productMarkdown } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../lib/collections";
import { markdownResponse } from "../../lib/security";
export async function getStaticPaths() {
  return (await publishedCollection("products")).map((entry) => ({
    params: { slug: entry.data.slug },
    props: { entry },
  }));
}
export const GET: APIRoute = ({ props }) =>
  markdownResponse(productMarkdown(props.entry.data, props.entry.body ?? ""));
