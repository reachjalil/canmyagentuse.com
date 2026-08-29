import { referenceIdentity } from "@canmyagentuse/catalog";

export function brandReferencePayload(input: {
  provider: string;
  product?: string;
  productSlug?: string;
}) {
  const identity = referenceIdentity(input);
  return {
    provider: identity.name,
    product: identity.product ?? null,
    productSlug: identity.productSlug ?? null,
    mark: identity.mark
      ? {
          id: identity.mark.id,
          label: identity.mark.label,
          path: identity.mark.assetPath,
          reviewedAt: identity.mark.reviewedAt,
        }
      : null,
    fallback: {
      monogram: identity.monogram,
      tone: identity.tone,
    },
    index: "/provider-marks",
  };
}
