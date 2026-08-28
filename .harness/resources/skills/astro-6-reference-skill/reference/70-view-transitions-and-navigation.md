# View Transitions and Navigation

## What Astro view transitions are good for

Astro’s view transitions can make an MPA-style site feel smoother without committing to a SPA architecture.

Use them when:

- navigation between pages should feel polished,
- the site remains page-oriented,
- the transition model improves perceived continuity,
- you can still preserve accessibility and progressive behavior.

## Good use cases

- docs navigation
- blog/publication browsing
- marketing site page transitions
- hybrid sites where the public shell should feel smoother

## Poor use cases

- masking large runtime delays
- compensating for too many hydrated widgets
- turning the whole app into a pseudo-SPA without architectural clarity

## Transition design rules

- content must remain usable without depending on motion
- reduced-motion behavior should be respected
- transitions should not obscure loading failures
- forms and focus behavior should remain understandable

## Mobile considerations

Recent Astro updates improved some mobile transition behavior. This is useful, but it does not replace good route and loading design.

## Persistence and state

If you persist elements across transitions, be clear about:

- what state carries over,
- what gets re-rendered,
- whether analytics and focus behavior stay correct.

## Navigation strategy

Use view transitions as polish on top of a sound route architecture, not as a substitute for one.

## Common mistakes

- adding transitions before route/render mode problems are solved
- not testing reduced-motion behavior
- persisting the wrong elements
- assuming transitions justify over-hydrating navigation

## References

- View transitions guide: https://docs.astro.build/en/guides/view-transitions/
