---
title: Failure recovery and safe retry
description: Detect failed model, tool, connector, worker, or network steps and recover without duplicating unsafe side effects.
slug: failure-recovery
locale: en
seoTitle: Failure recovery and safe retry — Can My Agent Use
socialTitle: Failure recovery and safe retry
socialDescription: Compare retries, checkpoints, idempotency, rollback, partial results, and operator recovery controls.
llmSummary: Failure recovery covers typed errors, bounded retries, checkpoints, idempotency, rollback or reconciliation, and preserved partial results across model, tool, worker, and network failures.
audience: Engineers evaluating reliable agent execution.
contentKind: feature
status: published
tags: [operations, reliability, retry, recovery]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Recover from model, tool, connector, worker, and network failures without unsafe duplicate effects.
specLabel: Product capability
aliases: [automatic retry, checkpoint recovery, rollback, idempotency]
parent: usage-and-reliability
related: [resumable-runs, model-fallback, diffs-and-patches]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks how the harness handles failures after work has begun. Blindly retrying a read is different from repeating an email send, database write, deployment, purchase, or destructive command. Safe recovery needs typed errors, bounded retry policy, idempotency or reconciliation, and operator-visible state.

Evidence should record automatic and manual retries, backoff, model fallback, checkpoints, filesystem or transaction rollback, partial artifacts, tool-specific policies, duplicate prevention, child-agent failures, and whether the operator can continue from the failed step instead of restarting everything.
