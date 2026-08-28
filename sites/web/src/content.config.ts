import { fileURLToPath } from "node:url";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import {
  categorySchema,
  featureSchema,
  harnessSchema,
  newsSchema,
  pageSchema,
  specificationSchema,
} from "@canmyagentuse/catalog";

const contentRoot = fileURLToPath(new URL("../../../content", import.meta.url));

const features = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: `${contentRoot}/features`,
  }),
  schema: featureSchema,
});

const harnesses = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: `${contentRoot}/harnesses`,
  }),
  schema: harnessSchema,
});

const specifications = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: `${contentRoot}/specifications`,
  }),
  schema: specificationSchema,
});

const categories = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: `${contentRoot}/categories`,
  }),
  schema: categorySchema,
});

const news = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: `${contentRoot}/news`,
  }),
  schema: newsSchema,
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: `${contentRoot}/pages`,
  }),
  schema: pageSchema,
});

export const collections = {
  features,
  harnesses,
  specifications,
  categories,
  news,
  pages,
};
