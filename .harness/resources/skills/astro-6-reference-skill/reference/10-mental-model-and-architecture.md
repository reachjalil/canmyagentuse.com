# Astro 6 Mental Model and Architecture

## The core mental model

Astro is strongest when you think of it as:

- an HTML-first framework,
- with selective client interactivity,
- plus optional server rendering,
- plus a structured content system,
- plus adapter-based runtime deployment.

A good Astro architecture starts by asking:

- what can be HTML?
- what must be request-aware?
- what truly needs client JS?

## Four execution zones

Every Astro app spans some mix of these zones:

### 1. Build-time zone

Runs during build.

Typical concerns:

- static pages,
- content collection loading,
- Markdown/MDX rendering,
- image generation and optimization,
- static route generation.

### 2. Request-time server zone

Runs per request.

Typical concerns:

- authentication,
- sessions,
- personalized content,
- request headers and geo info,
- server actions,
- live data access.

### 3. Client island zone

Runs in the browser after hydration.

Typical concerns:

- UI state,
- local interactivity,
- incremental client fetching,
- client-only widgets.

### 4. Server island zone

Runs on the server but composes into an otherwise cacheable page.

Typical concerns:

- personalized fragments,
- request-aware widgets,
- account status blocks,
- geo-aware fragments.

## The strongest default Astro shape

For many sites, the strongest shape is:

- `.astro` page shell
- `.astro` or content-driven page composition
- React islands only where needed
- server actions for mutations
- server islands for request-aware fragments
- content collections for structured content
- route-level `prerender` control
- Cloudflare Workers only when server behavior exists

## `.astro` vs React

### Use `.astro` for

- page shells,
- layouts,
- metadata,
- content composition,
- slot-based assembly,
- static lists,
- server-rendered UI that does not need client state,
- integrating server-only logic at page composition time.

### Use React for

- rich local interactivity,
- reusable client widgets,
- third-party React ecosystem components,
- non-trivial state transitions,
- client-driven filtering/sorting/search experiences,
- React-specific action state patterns.

### Do not use React by default for

- wrappers,
- navs,
- footers,
- typography sections,
- article content,
- static marketing sections,
- purely server-rendered fragments.

## A disciplined component tree

A clean Astro app often looks like this:

- page route in `src/pages`
- shared shell/layout in `src/layouts`
- mostly static composition components in `src/components`
- small islands for interaction
- content under `src/content`
- action/session/middleware logic separated from presentation

This separation matters because it keeps:

- hydration narrow,
- data flow obvious,
- SEO stable,
- deployment behavior predictable.

## Serialization boundaries

Any time data crosses from server-rendered Astro into a hydrated island, assume there is a cost.

Be careful with:

- giant JSON props,
- functions or class instances,
- opaque request-specific objects,
- large content bodies passed into client islands,
- over-serialized CMS data.

Strong pattern:

- render most content server-side,
- pass only the minimum state a client component needs.

## Request-aware personalization strategy

Do not make a whole page request-dynamic just because one block is user-specific.

Prefer this pattern:

- cacheable shell,
- server island for the personalized fragment,
- or a tiny client island when the UX truly benefits from client-side fetch.

This keeps:

- cacheability,
- first render speed,
- SEO stability.

## Route-level thinking beats app-wide thinking

A common mistake is making global decisions like:

- “the whole app is SSR”
- “everything uses React”
- “all content is live”
- “everything hydrates on load”

Astro works better when you decide per route and per feature.

Each important route should have an explicit answer to:

- is it prerendered?
- does it contain server islands?
- does it hydrate anything?
- what data sources does it use?
- what metadata does it emit?
- what can be cached?

## Content vs application surfaces

Many Astro apps are hybrid.

Example:

- marketing pages,
- docs/blog,
- account area,
- embedded app widgets.

Treat these as different surfaces with different rules.

### Content surface

Usually wants:

- prerendering,
- content collections,
- strong metadata,
- low JS,
- image optimization,
- predictable URL design.

### App surface

Usually wants:

- request-aware rendering,
- sessions,
- actions,
- middleware,
- tighter access control,
- carefully scoped client interactivity.

## Architecture rules worth enforcing

- Do not hide rendering choices.
- Do not couple metadata to client state.
- Do not hydrate global layout unless essential.
- Do not fetch editorial content at runtime without a good reason.
- Do not leak server-only assumptions into the client.
- Do not choose a runtime before understanding the route mix.
- Do not make personalization destroy cacheability of everything else.

## Good Astro architecture signs

- route behavior is easy to explain,
- file structure reflects actual boundaries,
- the shell is mostly `.astro`,
- interactive code is isolated,
- content is typed,
- deployment files align with runtime needs,
- SEO is layout-driven and explicit,
- performance issues are mostly obvious rather than mysterious.

## References

- Islands concept: https://docs.astro.build/en/concepts/islands/
- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
- Server islands: https://docs.astro.build/en/guides/server-islands/
- Project structure: https://docs.astro.build/en/basics/project-structure/
