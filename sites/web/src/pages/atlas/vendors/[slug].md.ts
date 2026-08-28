import type { APIRoute } from "astro";
import type { ResearchVendor } from "@canmyagentuse/catalog";
import { researchAtlas, researchVendorMarkdown } from "../../../lib/research";
import { markdownResponse } from "../../../lib/security";

export function getStaticPaths() {
  return researchAtlas.seed.vendors.map((vendor) => ({
    params: { slug: vendor.vendor_id },
    props: { vendor },
  }));
}

export const GET: APIRoute<{ vendor: ResearchVendor }> = async ({ props }) =>
  markdownResponse(researchVendorMarkdown(props.vendor));
