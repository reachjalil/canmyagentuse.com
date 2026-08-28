# Styling, Tailwind, and Design Systems

## Astro styling principles

A good Astro styling system is:

- explicit,
- local where helpful,
- global where necessary,
- compatible across `.astro` and React,
- not dependent on hydrating the app shell.

## Native Astro styling strengths

Astro supports:

- component-scoped styles,
- global styles,
- CSS variables and tokens,
- CSS modules,
- external frameworks and build tooling.

Use the simplest approach that fits the product.

## Tailwind in modern Astro

For Tailwind 4-era Astro work, the preferred integration path is the Tailwind Vite plugin rather than the older Astro Tailwind integration package.

This matters because many older examples still assume the older integration model.

## When Tailwind is a good fit

- design system tokens are already utility-driven
- team velocity depends on utilities
- many composed marketing/content sections exist
- React and `.astro` components should share the same utility language

## When plain CSS or mixed styling may be better

- a small content site has simple needs
- component-local styles are clearer
- the design system is better expressed via tokens and semantic classes
- utility churn is hurting readability

## Strong styling patterns

### Global layer

Use for:

- reset/base layer
- font imports
- theme tokens
- common typography primitives
- utility helpers the whole app relies on

### Component-local styles

Use for:

- self-contained `.astro` components
- small presentational pieces
- styles that do not need a global contract

### Shared tokens

Maintain a durable token layer:

- spacing
- colors
- typography
- radii
- shadows
- motion values

This helps both `.astro` and React components stay aligned.

## Dark mode and theming

Keep theming strategy intentional.

Ask:

- system preference only?
- user toggle?
- stored preference?
- client JS required or can CSS/media queries do most of the work?

Do not build a heavy client theme system when CSS handles most of it.

## Design system boundaries

Strong rule:

- the design system should be usable from `.astro`
- React components should conform to the same tokens and spacing language
- content layouts should not require framework-specific wrappers to look correct

## Common mistakes

- using Tailwind utilities as a substitute for system-level design decisions
- hydrating components just to toggle classes that CSS could handle
- mixing multiple styling strategies without a reason
- leaving typography and content styles unowned
- adopting stale Tailwind-in-Astro setup instructions

## References

- Styling guide: https://docs.astro.build/en/guides/styling/
- Tailwind integration note: https://docs.astro.build/en/guides/integrations-guide/tailwind/
