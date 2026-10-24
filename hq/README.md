# Studio HQ

A single-page dashboard for watching the venture from a distance. No build step and no
dependencies. It fetches its own `state.json` and a webfont, and nothing else.

## Three ways to see it, cheapest first

### 1. Always-on URL — free, no server, no session (recommended)

Every push that touches `hq/` triggers `.github/workflows/hq.yml`, which validates the state,
rebuilds the offline fallback and publishes `hq/` to GitHub Pages. The URL is then live
permanently and updates itself whenever work is pushed. Public repositories get unlimited
Actions minutes, so the running cost is zero.

**One-time setup, one click:** repo **Settings -> Pages -> Source: "GitHub Actions"**. Then run the
workflow once from the **Actions** tab (it has `workflow_dispatch`) and Pages prints the URL.

Note that Pages on a public repository is a public website. The repo is already public, so the
dashboard is no more exposed than the research beside it, but it is worth knowing.

### 2. Locally

```bash
./hq/serve.sh          # then open http://localhost:4173
```

Or double-click `hq/index.html`. Opened that way the browser blocks reading `state.json`, so the
page falls back to `state.js`; run `node hq/build.mjs` first to refresh that copy.

### 3. Published Artifact

The operating partner can publish the same page as a Claude Artifact for a private link that works
on a phone without any setup. It carries its own copy of the state, so it is only as fresh as the
last republish.

## How it updates

`hq/state.json` is the single source of truth. The operating partner writes it; sub-agents do not,
so there are no write races. One command does everything, including the push that updates the live
site:

```bash
./hq/sync.sh "what changed"
```

That validates, regenerates `state.js`, commits and pushes with retries. To check without pushing:

```bash
node hq/validate.mjs   # fails on malformed state, bad statuses, or a funnel number typed as text
node hq/build.mjs      # regenerates state.js from state.json
```

Served over http the page re-reads `state.json` every 30 seconds, so you can leave it open on a
second screen and it will pick up a push on its own.

## Why there is no polling job

"Keep it up to date 24/7" sounds like it needs a scheduled job, and it does not. `state.json`
changes only when work happens, and work happens only when a session runs. A cron waking every
hour to re-render an unchanged file would burn tokens and change nothing on screen. The push *is*
the update, and a push is already part of doing the work. If the dashboard looks stale, that is
accurate information: nothing has happened since the timestamp it shows.

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
