# 0006 include project description in readme

Status: planned
Branch: loopdog/implement/9
Issue: #9

## Goal

include project description in readme

## Background

Assumption: "project description" means a clear, human-readable paragraph near the top of README.md that states the project's purpose. The issue author supplied the description text: "looper dogfood is for testing loopdog."

The current README has an implicit description in its opening paragraph but no clearly labelled project-description sentence that uses the author's phrasing.

## Scope

- README.md — adding or expanding the introductory description paragraph

## Out Of Scope

- Source code, tests, config, or any file other than README.md
- Restructuring or reformatting sections unrelated to the description

## Acceptance Criteria

- [ ] README.md contains a project-description sentence near the top that includes the phrase "testing loopdog" or equivalent (test: grep -q "testing loopdog" README.md)
- [ ] The description appears before the "Development" section (manual)

## Implementation Checklist

- [ ] (filled in by the implementation work cell)

## Test Plan

1. `grep -q "testing loopdog" README.md` — passes when the required phrase is present.
2. Manual: confirm the description reads clearly and appears near the top, before the Development section.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-14: triage: needs-grooming (run `run-triage-9-a1-cb3cf462`).
- 2026-06-14: status ready -> planned (mirrored from issue label; label is authoritative).
- 2026-06-14: groom: in-progress (run `run-groom-9-a1-cb3cf462`).
- 2026-06-14: groom: complete (run `run-groom-9-a1-cb3cf462`).

## Decisions

- Assumption: description text is derived from the issue body: "looper dogfood is for testing loopdog."

## Risks / Rollback

Low risk — docs-only change. Rollback = revert the README.md edit.

## Final Summary

Fill this in before marking verified.
