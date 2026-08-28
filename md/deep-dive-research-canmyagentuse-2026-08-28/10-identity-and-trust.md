---
title: Identity, Trust, Policy, and Test Isolation
file: 10-identity-and-trust.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 5
---

# Identity, Trust, Policy, and Test Isolation

## Reader Promise
Identify where authentication, policy, trust and execution boundaries alter compatibility and how the future test system should isolate them.

## Summary (≤120 words)
Agent compatibility is often security-dependent. An MCP client can support a transport but not the authorization flow a server requires; an enterprise admin can disable a feature that exists in the binary; a plugin can contain executable scripts. CanMyAgentUse must model these conditions, and its eventual conformance runner must treat contributed packages and remote servers as hostile input.

## What We Found
### Compatibility-affecting trust dimensions

- **Protocol authorization:** MCP remote servers can require OAuth-related flows; “remote HTTP supported” is not equivalent to “this auth profile works.” [S-024] [S-034]
- **Admin policy:** hosted/enterprise products can gate external connectors, plugins, skills or developer modes. Store policy as an environment qualifier.
- **Package execution:** Skills can include scripts; plugins can point to MCP servers. Static manifest validation is safer than execution and should be a separate test class. [S-043] [S-052]
- **Acting on behalf of a user:** test evidence must record whether auth is service, user-delegated or host-mediated.

### Test runner security architecture

1. Queue accepts only a pinned test definition + target descriptor.
2. Static parsing runs before execution.
3. Untrusted local fixtures run inside disposable VM/microVM/container isolation with no ambient credentials.
4. Egress defaults deny; allow only test fixture endpoints.
5. Remote OAuth tests use dedicated throwaway tenants/accounts and secret brokered credentials.
6. Artifacts are redacted before publication.
7. Test runner identity/version, fixture hash and environment fingerprint are signed into results.
8. User-supplied arbitrary binaries are never executed in the public web tier.

### Trust badges

Do not use one generic “verified” checkmark. Prefer explicit badges: **Documented**, **Vendor attested**, **Reproduced by CanMyAgentUse**, **Community reproduced**, **Stale**, **Contradicted**. A test result should name exactly what was tested.

## Confidence Notes
High for security boundary recommendations; exact vendor policy matrices need per-product follow-up.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-024] MCP authorization — https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- [S-034] MCP security best practices — https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-052] Agent Plugins MCP configuration — https://agent-plugins.org/specification/1.0/mcp
- [S-088] OpenAI MCP support for ChatGPT and Codex — https://learn.chatgpt.com/docs/extend/mcp
