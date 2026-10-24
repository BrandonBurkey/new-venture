# docs/ — the published copy of the HQ dashboard

**Do not edit anything in here.** It is a generated mirror of `hq/`, produced by `hq/sync.sh`.
Edit `hq/state.json` instead.

Why it exists: GitHub Pages can serve a folder directly from a branch, which needs no Actions
workflow, no `github-pages` environment and no deployment branch rule — the three things that made
the Actions-based deploy fail repeatedly. Pages only accepts `/` or `/docs` as the folder, so the
dashboard is mirrored here.

Pages setting: **Settings -> Pages -> Source: "Deploy from a branch" -> Branch:
`claude/construction-venture` -> Folder: `/docs`**.
