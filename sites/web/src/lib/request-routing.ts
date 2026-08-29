const RUNTIME_CATALOG_DOCUMENTS = new Set([
  "/compare.md",
  "/matrix.md",
  "/search",
  "/search.md",
]);

export function isRuntimeCatalogDocument(pathname: string): boolean {
  return RUNTIME_CATALOG_DOCUMENTS.has(pathname);
}
