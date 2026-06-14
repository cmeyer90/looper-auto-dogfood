# looper-auto-dogfood

A tiny string-utilities library.

## Purpose

This repository exists to **dogfood [loopdog](https://github.com/cmeyer90/loopdog)** end-to-end — it is a live test vehicle, not a production library.

**loopdog** is an autonomous SDLC loop runner that drives GitHub issues through a fully automated pipeline with minimal human intervention:

```
triage → groom → implement → review → fix → merge
```

- **Claude** handles triage, grooming, implementation, fixes, and merging.
- **Codex** performs cross-model code review.

Every issue filed here is processed end-to-end by AI agents, making this an ideal proving ground for loopdog's capabilities.

## Development

```bash
npm install     # install dev dependencies (Node 20+)
npm run build   # tsc -> dist/
npm test        # vitest
npm run lint    # tsc --noEmit
```

## Library

```ts
import { slugify, capitalize } from 'looper-auto-dogfood';

slugify('Hello World'); // "hello-world"
capitalize('loopdog'); // "Loopdog"
```
