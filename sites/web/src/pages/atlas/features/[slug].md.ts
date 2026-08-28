import type { APIRoute } from "astro";
import {
  researchFeatureSlug,
  type ResearchFeature,
} from "@canmyagentuse/catalog";
import { researchAtlas, researchFeatureMarkdown } from "../../../lib/research";
import { markdownResponse } from "../../../lib/security";

export function getStaticPaths() {
  return researchAtlas.seed.features.map((feature) => ({
    params: { slug: researchFeatureSlug(feature.feature_id) },
    props: { feature },
  }));
}

export const GET: APIRoute<{ feature: ResearchFeature }> = async ({ props }) =>
  markdownResponse(researchFeatureMarkdown(props.feature));
