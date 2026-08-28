# Content corpus

Portable catalog source for Can My Agent Use. Astro collections in
`sites/web/src/content.config.ts` load these files. Do not hide page prose only
inside `src/pages`.

```text
content/
  features/<locale>/<slug>.md
  harnesses/<locale>/<slug>.md
  specifications/<locale>/<slug>.md
  categories/<locale>/<slug>.md
  news/<locale>/<slug>.md
  pages/<locale>/<slug>.md
```

Every entry must declare `locale` and the SEO / agent metadata fields documented
in `@canmyagentuse/catalog`. Prefer plain Markdown. Colocate entry-specific
images next to the Markdown file. Keep `sites/web/public/` for global assets.

Support rows on a feature are optional. Missing rows expand to **unknown** for
every published harness track. Do not invent yes/no cells.

A non-unknown version statement identifies its target, environment profile,
dated evidence references, and note IDs. Evidence resources use stable IDs so a
statement can cite the exact public source that supports it. Specifications are
separate entries because protocol roles and revisions cannot be inferred from a
brand-level feature name.
