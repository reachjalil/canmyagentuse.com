# Patterns

## Scope

This reference covers:
- Unit test structure with Vitest
- Deterministic environment setup
- Mocking patterns used in the repo

This does NOT cover:
- Full worker request integration tests
- Browser automation frameworks

## Basic Unit Test Pattern

```ts
import { describe, expect, it } from "vitest";

import { parseVariantUrl } from "./parseVariantUrl";

describe("parseVariantUrl", () => {
  it("parses a valid variant URL", () => {
    const url = "https://imagedelivery.net/hash123/image456/public";

    expect(parseVariantUrl(url)).toEqual({
      name: "public",
      url,
      accountHash: "hash123",
      imageId: "image456",
      origin: "https://imagedelivery.net",
    });
  });
});
```

Keep assertions tight and use realistic inputs (see `workers/images-worker/src/helpers/*.test.ts`).

## Deterministic Environment

When helpers rely on Web Crypto, patch it for Node-based tests:

```ts
import { beforeAll, describe, expect, it } from "vitest";
import { webcrypto } from "node:crypto";

beforeAll(() => {
  const globalCrypto = globalThis as typeof globalThis & { crypto?: Crypto };
  if (!globalCrypto.crypto) {
    // Provide Web Crypto for Node-based Vitest runs.
    // @ts-expect-error Node exposes webcrypto, which matches the required surface.
    globalCrypto.crypto = webcrypto;
  }
});
```

Use `vi.useFakeTimers()` when time is part of the logic, and restore with `vi.useRealTimers()`.

## Mocking and Resetting

Follow the `lib/zod-to-sql` pattern for mocked dependencies:

```ts
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockStorage = {
  exec: vi.fn(),
};

beforeEach(() => {
  vi.resetAllMocks();
  mockStorage.exec.mockReturnValue({ rowsWritten: 0, toArray: () => [] });
});
```

## Anti-Patterns

### Avoid: Network or filesystem access in unit tests

- Tests should not call external APIs or depend on local filesystem state.
- Instead, inject dependencies or provide fixtures.

### Avoid: Snapshot-heavy assertions

- Snapshots are brittle for helpers and state logic.
- Prefer explicit field assertions.

## Related References

- [foundations.md](foundations.md) - test tiers and placement.
- [agent-testing.md](agent-testing.md) - agent-specific patterns.
