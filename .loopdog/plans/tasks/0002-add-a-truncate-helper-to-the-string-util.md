# 0002 Add a truncate() helper to the string utils

Status: implemented
Branch: loopdog/implement/2
Issue: #2

## Goal

Add a truncate() helper to the string utils

## Background

It would be useful to have a `truncate` function in the library.

## Scope

- (groomed scope lands here)

## Out Of Scope

- (none recorded yet)

## Acceptance Criteria

<!-- loopdog:acceptance-criteria -->
- [ ] `truncate('hello world', 8)` returns `'hello w…'` (test: test/index.test.ts)
- [ ] `truncate('hi', 8)` returns `'hi'` — no truncation when input is within limit (test: test/index.test.ts)
- [ ] A string of exactly `maxLength` characters is returned unchanged (test: test/index.test.ts)
- [ ] An empty string input returns an empty string (test: test/index.test.ts)
- [ ] `truncate` is exported from `src/index.ts` (test: test/index.test.ts)
<!-- /loopdog:acceptance-criteria -->

## Implementation Checklist

- [ ] (filled in by the implementation work cell)

## Test Plan

See acceptance criteria `test:` tags.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-14: implement: in-progress (run `run-implement-2-a1-d23cff67`).
- 2026-06-14: status ready -> in-progress (mirrored from issue label; label is authoritative).
- 2026-06-14: status in-progress -> implemented (mirrored from issue label; label is authoritative).
- 2026-06-14: review: in-progress (run `run-review-2-a1-d23cff67`).

## Decisions

Record implementation decisions here, not only in chat.

## Risks / Rollback

Record risks and the rollback path before acting.

## Final Summary

Fill this in before marking verified.
