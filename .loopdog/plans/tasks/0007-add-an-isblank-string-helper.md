# 0007 Add an isBlank string helper

Status: implemented
Branch: loopdog/implement/15
Issue: #15

## Goal

Add an isBlank string helper

## Background

Add an `isBlank(input: string): boolean` helper to the string utils.

## Scope

**In scope:**
- `src/index.ts` — add `isBlank(input: string): boolean` and export it
- `test/index.test.ts` — add a `describe('isBlank', ...)` block with unit tests

**Out of scope:**
- Overloads for non-string types
- Changes to existing helpers (`slugify`, `capitalize`, `truncate`)
- `README.md`, `package.json`, `tsconfig.json`, or any other file

## Out Of Scope

- (none recorded yet)

## Acceptance Criteria

<!-- loopdog:acceptance-criteria -->
- [ ] `isBlank('')` returns `true` (test: test/index.test.ts)
- [ ] `isBlank('   ')` returns `true` (test: test/index.test.ts)
- [ ] `isBlank('\t\n')` returns `true` (test: test/index.test.ts)
- [ ] `isBlank('a')` returns `false` (test: test/index.test.ts)
- [ ] `isBlank('  x  ')` returns `false` (test: test/index.test.ts)
- [ ] `isBlank` is exported from `src/index.ts` (test: test/index.test.ts)
- [ ] Implementation is dependency-free and consistent with existing code style (manual)
<!-- /loopdog:acceptance-criteria -->

## Implementation Checklist

- [ ] (filled in by the implementation work cell)

## Test Plan

See acceptance criteria `test:` tags.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-16: triage: needs-grooming (run `run-triage-15-a1-580845dd`).
- 2026-06-16: status ready -> planned (mirrored from issue label; label is authoritative).
- 2026-06-16: groom: in-progress (run `run-groom-15-a1-580845dd`).
- 2026-06-16: implement: in-progress (run `run-implement-15-a1-580845dd`).
- 2026-06-16: status ready -> in-progress (mirrored from issue label; label is authoritative).
- 2026-06-16: status in-progress -> implemented (mirrored from issue label; label is authoritative).
- 2026-06-16: review: in-progress (run `run-review-16-a1-55084124`).
- 2026-06-16: review: in-progress (run `run-review-15-a1-580845dd`).

## Decisions

Record implementation decisions here, not only in chat.

## Risks / Rollback

Record risks and the rollback path before acting.

## Final Summary

Fill this in before marking verified.
