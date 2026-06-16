# 0007 Add an isBlank string helper

Status: planned
Branch: loopdog/implement/15
Issue: #15

## Goal

Add an isBlank string helper

## Background

Add an `isBlank(input: string): boolean` helper to the string utils.
It returns `true` when the string is empty or contains only whitespace, `false` otherwise.

Assumption: "whitespace" means any character matched by JavaScript's `String.prototype.trim()` (spaces, tabs, newlines, etc.), consistent with the existing codebase style.

## Scope

- `src/index.ts` — add `isBlank` function and export it
- `test/index.test.ts` — add unit tests for `isBlank`

## Out Of Scope

- Adding overloads for non-string types
- Changing any existing helpers (`slugify`, `capitalize`, `truncate`)
- Updating `README.md`, `package.json`, `tsconfig.json`, or any other file

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

Each criterion is verified by a dedicated `it(...)` case inside `describe('isBlank', ...)` in `test/index.test.ts`. CI runs `vitest` on every push; all cases must pass green. The "dependency-free" and "code style" criteria are verified manually during code review.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-16: triage: needs-grooming (run `run-triage-15-a1-580845dd`).
- 2026-06-16: status ready -> planned (mirrored from issue label; label is authoritative).
- 2026-06-16: groom: in-progress (run `run-groom-15-a1-580845dd`).
- 2026-06-16: groom: criteria written, scope bounded, test plan complete (run `run-groom-15-a1-580845dd`).

## Decisions

- Whitespace definition: rely on JavaScript's native `String.prototype.trim()` (consistent with how `slugify` already trims).

## Risks / Rollback

Low-risk, additive change. Rollback = revert the single commit adding `isBlank` to `src/index.ts` and `test/index.test.ts`.

## Final Summary

Fill this in before marking verified.
