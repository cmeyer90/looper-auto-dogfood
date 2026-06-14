# 0003 feat: add truncate() string helper (#2)

Status: verified
Branch: loopdog/implement/2
Issue: #2

## Goal

feat: add truncate() string helper (#2)

## Background

Closes #2

## Scope

- `src/index.ts` — add and export `truncate(input: string, maxLength: number): string`
- `test/index.test.ts` — add test coverage for all criteria below

## Out Of Scope

- Other string utilities
- Changes to build config, CI workflows, or dependencies

## Acceptance Criteria

- [x] `truncate('hello world', 8)` returns `'hello w…'` (test: test/index.test.ts)
- [x] `truncate('hi', 8)` returns `'hi'` — no truncation when input is within limit (test: test/index.test.ts)
- [x] A string of exactly `maxLength` characters is returned unchanged (test: test/index.test.ts)
- [x] An empty string input returns an empty string (test: test/index.test.ts)
- [x] `truncate` is exported from `src/index.ts` (test: test/index.test.ts)

## Implementation Checklist

- [ ] (filled in by the implementation work cell)

## Test Plan

See acceptance criteria `test:` tags.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-14: review: in-progress (run `run-review-4-a1-d03cfc41`).
- 2026-06-14: status ready -> implemented (mirrored from issue label; label is authoritative).

## Decisions

Record implementation decisions here, not only in chat.

## Risks / Rollback

Record risks and the rollback path before acting.

## Final Summary

Verified by loopdog run `run-review-4-a1-d03cfc41` (review).
