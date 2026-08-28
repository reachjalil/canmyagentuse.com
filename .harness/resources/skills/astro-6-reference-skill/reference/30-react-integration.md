# React Integration in Astro 6

## The correct mental model

React in Astro is not the page shell by default.

React is an **integration**, not the entire architecture.

Astro should usually continue to own:

- routing,
- layout,
- metadata,
- content rendering,
- page composition,
- the majority of HTML.

React should usually own:

- interactive islands,
- complex local UI state,
- reusable client widgets,
- specific app-like surfaces.

## Installation and setup

If React is part of the app, install it deliberately and configure TypeScript correctly.

Key setup expectations:

- install `@astrojs/react`
- ensure React and React DOM are present
- set JSX config for React
- keep framework usage easy to locate in the repo

## Where React belongs

### Strong React use cases

- search boxes with live state,
- dashboard widgets,
- forms with complex client-side interaction,
- charts,
- media players,
- embedded app controls,
- third-party React libraries.

### Weak React use cases

- layouts,
- article bodies,
- footers,
- nav shells without strong interactivity,
- static cards and lists,
- metadata wrappers.

## Hydration strategy

React components in Astro render to static HTML unless you opt into hydration.

That means the question is not “should I render this with React?” but “should I hydrate this at all?”

Use the least eager directive that preserves UX.

## `useActionState()` integration

Astro’s React integration includes utilities that work with Astro Actions and React’s `useActionState()`.

This is a very strong pattern when:

- you want server-validated mutations,
- you want progressive enhancement,
- you want client-side pending/error/success state without building a custom fetch stack.

Use it for:

- likes,
- saves,
- profile edits,
- small workflow forms,
- app widgets that still benefit from server-owned mutations.

## Multiple UI frameworks in one repo

Astro can host multiple UI frameworks, but do not mix them casually.

If multiple frameworks exist:

- scope them clearly by folder,
- use `include` / `exclude` patterns deliberately,
- avoid shared abstraction layers that hide which runtime a component needs.

## Children and content projection

React children passed from Astro have special behavior. If a specific UI pattern truly requires React VDOM children rather than plain string parsing, there is an experimental React-children option, but it carries runtime tradeoffs.

Use it only when the component design genuinely depends on it.

## Good React boundary rules

- `.astro` owns page composition
- React islands receive minimal props
- heavy content rendering stays server-side
- React providers are scoped as tightly as possible
- shared server utilities are not imported into client bundles accidentally

## Bad React boundary rules

- a giant root React provider around every page
- hydrating the entire layout to share tiny bits of state
- passing full CMS entries into client components
- using React for metadata/head logic
- rebuilding simple HTML interactions as React widgets

## Migration posture

When migrating a React-heavy codebase into Astro:

- keep the core interactive widgets in React first,
- move shell/layout/content into `.astro`,
- progressively reduce hydration scope,
- only keep full client app surfaces where they remain justified.

## References

- React integration docs: https://docs.astro.build/en/guides/integrations-guide/react/
- Actions guide: https://docs.astro.build/en/guides/actions/
- Islands concept: https://docs.astro.build/en/concepts/islands/
