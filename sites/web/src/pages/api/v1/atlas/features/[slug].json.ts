import type { APIRoute } from "astro";
import {
  researchFeatureSlug,
  type ResearchFeature,
} from "@canmyagentuse/catalog";
import {
  researchAtlas,
  researchCellPayload,
  researchFeatureContext,
  researchFeatureMarkdownPath,
  researchFeaturePath,
} from "../../../../../lib/research";
import { jsonResponse } from "../../../../../lib/security";

export function getStaticPaths() {
  return researchAtlas.seed.features.map((feature) => ({
    params: { slug: researchFeatureSlug(feature.feature_id) },
    props: { feature },
  }));
}

export const GET: APIRoute<{ feature: ResearchFeature }> = async ({
  props,
}) => {
  const context = researchFeatureContext(props.feature);
  return jsonResponse({
    research_cutoff: researchAtlas.seed.research_cutoff,
    evidence_notice:
      "Documentation and registry evidence are not runtime certification. Unknown is not unsupported.",
    feature: context.feature,
    counts: context.statuses,
    html: researchFeaturePath(context.feature.feature_id),
    markdown: researchFeatureMarkdownPath(context.feature.feature_id),
    cells: context.cells.map(researchCellPayload),
  });
};
