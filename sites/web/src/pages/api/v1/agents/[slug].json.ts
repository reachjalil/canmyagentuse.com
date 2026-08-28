import type { APIRoute } from "astro";
import { harnessJsonPath } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../../lib/collections";

export async function getStaticPaths() {
  const harnesses = await publishedCollection("harnesses");
  return harnesses.map((harness) => ({
    params: { slug: harness.data.slug },
  }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(null, {
    status: 301,
    headers: { location: harnessJsonPath(params.slug ?? "") },
  });
