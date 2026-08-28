import type { FeatureData, HarnessData, SpecificationData } from "./schema.ts";

export interface CatalogRelationInput {
  features: readonly FeatureData[];
  harnesses: readonly HarnessData[];
  specifications: readonly SpecificationData[];
}

function assertUniqueSlugs(
  kind: string,
  entries: readonly { slug: string }[]
): Set<string> {
  const slugs = new Set<string>();
  for (const entry of entries) {
    if (slugs.has(entry.slug)) {
      throw new Error(`Duplicate ${kind} slug "${entry.slug}".`);
    }
    slugs.add(entry.slug);
  }
  return slugs;
}

export function validateCatalogRelations(input: CatalogRelationInput): void {
  const featureSlugs = assertUniqueSlugs("feature", input.features);
  const harnessSlugs = assertUniqueSlugs("harness", input.harnesses);
  const specificationSlugs = assertUniqueSlugs(
    "specification",
    input.specifications
  );
  const specificationIds = new Set(
    input.specifications.map((specification) => specification.sourceId)
  );

  for (const feature of input.features) {
    if (feature.parent && !featureSlugs.has(feature.parent)) {
      throw new Error(
        `Feature "${feature.slug}" references unknown parent "${feature.parent}".`
      );
    }
    if (feature.parent) {
      const parent = input.features.find(
        (candidate) => candidate.slug === feature.parent
      );
      if (parent && parent.capabilityKind !== "family") {
        throw new Error(
          `Feature "${feature.slug}" parent "${feature.parent}" is not a capability family.`
        );
      }
      if (parent?.category !== feature.category) {
        throw new Error(
          `Feature "${feature.slug}" and parent "${feature.parent}" must share a category.`
        );
      }
    }
    for (const related of feature.related) {
      if (!featureSlugs.has(related)) {
        throw new Error(
          `Feature "${feature.slug}" references unknown related feature "${related}".`
        );
      }
    }
    for (const relation of feature.relations) {
      if (!featureSlugs.has(relation.feature)) {
        throw new Error(
          `Feature "${feature.slug}" references unknown ${relation.type} feature "${relation.feature}".`
        );
      }
      if (relation.feature === feature.slug) {
        throw new Error(`Feature "${feature.slug}" cannot relate to itself.`);
      }
    }
    if (
      feature.specification &&
      !specificationIds.has(feature.specification.id) &&
      !specificationSlugs.has(feature.specification.id)
    ) {
      throw new Error(
        `Feature "${feature.slug}" references unknown specification "${feature.specification.id}".`
      );
    }
    for (const row of feature.support) {
      if (!harnessSlugs.has(row.harness)) {
        throw new Error(
          `Feature "${feature.slug}" references unknown harness "${row.harness}".`
        );
      }
    }
  }

  for (const feature of input.features) {
    const visited = new Set<string>([feature.slug]);
    let parent = feature.parent;
    while (parent) {
      if (visited.has(parent)) {
        throw new Error(
          `Capability hierarchy contains a cycle at "${parent}".`
        );
      }
      visited.add(parent);
      parent = input.features.find(
        (candidate) => candidate.slug === parent
      )?.parent;
    }
  }
}
