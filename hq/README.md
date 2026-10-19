# Studio HQ

A single-page dashboard for watching the venture from a distance. No build step, no
dependencies, no network calls.

## Run it

```bash
./hq/serve.sh          # then open http://localhost:4173
```

Or just double-click `hq/index.html`. Opened that way the browser will not let the page read
`state.json`, so it falls back to `state.js`; run `node hq/build.mjs` first to refresh that copy.

## How it updates

`hq/state.json` is the single source of truth. The operating partner writes it; sub-agents do not,
so there are no write races. After editing it:

```bash
node hq/build.mjs      # regenerates state.js and validates the JSON
```

Served over http the page re-reads `state.json` every 30 seconds, so you can leave it open on a
second screen.

## What is on it

- **Needs you** — the only part that is your to-do list. Everything else is for watching.
- **Pipeline** — the four phases and what each one produces.
- **Decision gates** — where the venture waits for your answer.
- **Validation funnel** — targets are written in Phase 2, before any traffic arrives, so they
  cannot be moved afterwards to make a bad result look acceptable. Until then the tiles read
  "no data yet" rather than showing invented numbers.
- **The team** — the ten agents, what each owns, and what it is doing right now.
- **Risks, honestly** — including the ones caused by this environment.
- **Deliverables** and **Activity** — file paths and a timestamped log.
