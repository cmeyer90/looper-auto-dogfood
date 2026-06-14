# looper-auto-dogfood

looper dogfood is for testing loopdog.

A tiny string-utilities library that exists to **dogfood
[loopdog](https://github.com/cmeyer90/loopdog)** end to end.

Issues filed here are driven through the autonomous SDLC loops:

```
triage → groom → implement → review → fix → merge
```

- **Claude** builds and fixes (triage, groom, implement, fix, merge).
- **Codex** reviews (cross-model review).

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
