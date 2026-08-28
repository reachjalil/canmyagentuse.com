# Scenario Recipes

## How to use this file

Each recipe is a practical architecture answer to a common product request.

---

## Recipe 1: Launch a high-performance SaaS marketing site

### Requirements
- public pages
- docs/blog/resources
- SEO
- contact/newsletter forms
- a few interactive demo widgets
- Cloudflare deployment

### Recommended architecture
- prerendered public routes
- content collections for blog/resources
- `.astro` shell/layout system
- React only for demo widgets
- Actions for forms
- Workers only if server features are required, otherwise static hosting is enough

### Key files
- `astro.config.*`
- `src/layouts/BaseLayout.astro`
- `src/content.config.ts`
- `src/actions/index.ts`
- `src/pages/blog/[slug].astro`

---

## Recipe 2: Build a docs site with embedded React demos

### Requirements
- lots of prose content
- code examples
- embedded interactive examples
- search
- strong crawlability

### Recommended architecture
- docs content in collections/MDX
- static generation
- React islands for demos/search
- no hydrated global shell
- strong i18n design if multilingual

---

## Recipe 3: Build a blog/publication with strong SEO

### Requirements
- articles
- authors
- tags/categories
- RSS
- social cards
- image-heavy pages

### Recommended architecture
- content collections
- article metadata helpers
- sitemap + RSS
- structured data
- image optimization
- minimal widgets only where needed

---

## Recipe 4: Build a hybrid marketing + account site

### Requirements
- public SEO pages
- account area
- session-backed nav state
- some user-specific fragments on public pages

### Recommended architecture
- public pages prerendered
- account routes on-demand
- sessions + middleware
- server island for signed-in header or light personalization
- React islands for account widgets

---

## Recipe 5: Build an authenticated portal on Astro + Cloudflare

### Requirements
- protected routes
- settings/forms
- request-aware data
- Cloudflare runtime/bindings

### Recommended architecture
- `output: 'server'`
- Cloudflare Workers
- middleware gate
- sessions
- actions for mutations
- React islands only where interactive density is real

---

## Recipe 6: Integrate a headless CMS without sacrificing performance

### Requirements
- editorial team uses CMS
- SEO pages
- maybe preview/faster updates

### Recommended architecture
- build-time remote loaders as the default path
- live content only where freshness truly matters
- explicit schema validation
- route and metadata driven from content model
- search indexing separate from rendering

---

## Recipe 7: Add search to a docs/blog site

### Requirements
- fast UX
- static public pages
- maybe medium content volume

### Recommended architecture
- keep docs/blog prerendered
- search UI as an island
- static or external index depending on scale
- do not hydrate the whole site shell

---

## Recipe 8: Migrate a React-heavy site to Astro

### Requirements
- existing React widgets
- desire for better performance/SEO
- phased migration

### Recommended architecture
- keep complex widgets in React first
- move shells and content into `.astro`
- classify routes static vs dynamic
- reduce hydration scope over time
- use content collections and layout-driven metadata early

---

## Recipe 9: Multilingual content site with Cloudflare delivery

### Requirements
- locale routes
- hreflang
- sitemap correctness
- fast public delivery

### Recommended architecture
- locale planned in route/content model from the start
- static generation when possible
- centralized metadata/canonical helpers
- explicit fallback policy
- Cloudflare static hosting or Workers depending on server needs

---

## Recipe 10: Personalized public homepage

### Requirements
- homepage is public and SEO-critical
- header or hero CTA changes per user/region

### Recommended architecture
- prerendered homepage shell
- server island or tiny client enhancement for personalized fragment
- do not make the whole homepage SSR unless needed

## Recipe output format

When applying a recipe to a repo, produce:

- route plan
- content/data plan
- interactivity plan
- Cloudflare/deployment plan
- SEO/performance notes
- implementation steps
- verification checklist
