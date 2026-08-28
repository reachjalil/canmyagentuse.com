# Agent Testing

## Scope

This reference covers:
- Testing agent event handlers, services, and state sync
- Dependency injection patterns that keep tests hermetic

This does NOT cover:
- Full end-to-end WebSocket harnesses
- Multi-agent live conversation orchestration (see agent-operators-skill)

## Focus the Tests

- **Test helpers and handlers** over full agent runtime wiring.
- **Assert SyncState writes and broadcasts** after DB mutations (per agent-guide-skill).
- **Inject dependencies** via IoC so handlers can be exercised in isolation.

## Pattern: Handler + State Sync Test

```ts
import { describe, expect, it, vi } from "vitest";

const syncState = {
  set: vi.fn(),
  broadcast: vi.fn(),
};

const deps = {
  now: () => new Date("2024-01-01T00:00:00Z"),
};

it("writes state and broadcasts after handling", async () => {
  await handleUpdate({ payload: { id: "1" } }, { syncState, deps });

  expect(syncState.set).toHaveBeenCalledWith("items", expect.any(Object));
  expect(syncState.broadcast).toHaveBeenCalled();
});
```

Keep the handler free of transport details so it can accept plain objects and mocked dependencies.

## Pattern: IoC for Service Dependencies

- Pass services through the agent constructor or handler options.
- Use `vi.fn()` to assert service calls.
- Prefer small adapters that wrap external APIs rather than mocking globals.

## Pattern: Data Layer Stubs

- Stub the SQL interface (see `lib/zod-to-sql/src/*.test.ts`).
- Reset mocks between tests (`vi.resetAllMocks()`).
- Provide minimal fake rows to trigger code paths.

## Pattern: Execution Mode Coverage for Connection-Bound Actions

When agent flows support both sync and async execution, add explicit coverage for task types that require live connection affinity.

- Connection-bound examples:
  - open/focus editor file actions
  - renderer UI intents via client-tool registry
- Minimum assertions:
  - these task types resolve to sync mode (or are rejected from async mode)
  - queued background execution paths are not used for these tasks
  - user-facing warning/error is deterministic when no active connection exists

## Anti-Patterns

### Avoid: Full WebSocket integration tests for simple state changes

- They are slow and hard to keep deterministic.
- Test the handler and state sync directly instead.

### Avoid: Direct imports from feature packages inside base agents

- It breaks IoC and makes testing harder.
- Follow the agent-guide-skill IoC pattern to keep boundaries clean.

## Related References

- [agent-guide-skill](../../agent-guide-skill/SKILL.md)
- [patterns.md](patterns.md)
