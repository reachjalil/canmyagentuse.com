import { isPublished } from "@canmyagentuse/catalog";
import { getCollection, type CollectionEntry } from "astro:content";

export type CatalogCollection =
  | "features"
  | "harnesses"
  | "specifications"
  | "categories"
  | "news"
  | "pages"
  | "reports";

export async function publishedCollection<T extends CatalogCollection>(
  name: T
): Promise<CollectionEntry<T>[]> {
  const includeDrafts = import.meta.env.DEV;
  const entries = await getCollection(name);
  return entries
    .filter((entry) => isPublished(entry.data, includeDrafts))
    .toSorted((left, right) => {
      const leftOrder = "order" in left.data ? left.data.order : undefined;
      const rightOrder = "order" in right.data ? right.data.order : undefined;
      if (typeof leftOrder === "number" && typeof rightOrder === "number") {
        return (
          leftOrder - rightOrder ||
          left.data.title.localeCompare(right.data.title)
        );
      }
      const leftPublished = left.data.published?.getTime() ?? 0;
      const rightPublished = right.data.published?.getTime() ?? 0;
      if (name === "news" || name === "reports") {
        return rightPublished - leftPublished;
      }
      return left.data.title.localeCompare(right.data.title);
    });
}

export function entryBySlug<T extends { data: { slug: string } }>(
  entries: readonly T[],
  slug: string
): T | undefined {
  return entries.find((entry) => entry.data.slug === slug);
}
