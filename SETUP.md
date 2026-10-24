# Set up the construction venture — do these in order

Five steps, about 15 minutes of your time. Step 2 is the one that cost the last venture most of its
evidence quality, so do not skip it.

---

## 1. The repo is already set up

This branch, `claude/construction-venture`, **is** the construction venture, with the scaffolding at
its root. The previous venture is preserved untouched on `claude/venture-studio-ios-app-2ytfbe`.

If you would rather it lived in its own repository: create an empty one on GitHub, then
`git remote add construction <url> && git push construction claude/construction-venture:main`.
Nothing here depends on that; it is tidiness, not a requirement.

## 2. Open a Claude Code cloud session, and fix the network allowlist BEFORE anything else

This is the highest-value five minutes available to you.

On the last venture the environment's network policy refused **every** research host, so not one
primary source was read and no App Store search was possible at all. That is why three of four
finalist niches turned out to have competitors we had scored as near blue ocean — including one
free product that did the entire job and was bundled by our own planned sales channel.

In the session, open the **cloud environment menu in the title bar → Edit → Network access**, and
add these under **Allowed domains**, leaving "Allow package managers" ticked:

```
apps.apple.com
itunes.apple.com
legislation.gov.uk
hse.gov.uk
reddit.com
capterra.com
g2.com
trustpilot.com
appfollow.io
```

Plus, as research turns them up: the trade bodies and schemes you end up citing (CITB, CSCS, CHAS,
Constructionline, NAPIT, Gas Safe, RICS, CIOB and so on).

Docs: https://code.claude.com/docs/en/cloud-environments#network-access

**Then make the session prove it works**: ask it to fetch one page — `https://www.hse.gov.uk/` is a
good test — and confirm it actually returns content before any research starts. `itunes.apple.com`
matters as much as `apps.apple.com`, because Apple's JSON lookup API lives there and it answers
competitor questions in one request.

## 3. The session is already running

A Claude Code cloud session has been created against this branch, and its opening instruction is to
verify network access and then wait for you. It will not start scouting until step 2 is done and you
tell it to go.

## 4. Nothing to paste

`PROMPT.md` was given to that session as its brief. It is kept here so you can read what it was
asked to do, and so a future session can be started the same way.

## 5. Have these three answers ready for Gate 1

The session will ask. Thinking about them now will save a round trip:

- **Which roles and companies can you actually reach?** Name them concretely — site managers,
  commercial managers, QSs, plant managers, subcontractor owners, H&S advisors. This is the one
  structural advantage this venture has, and the rubric scores it.
- **What can you spend on an 8-week validation, before any app?** The last venture's plans came in
  between £170 and £570 in cash. Organic channels, no paid ads.
- **How much do you care about the eventual size of the business versus the odds of it working?**

---

## What is in this starter, and why

| Path | What it is |
| --- | --- |
| `PROMPT.md` | The brief. Paste it as your first message. |
| `CLAUDE.md` | Studio standing rules, led by the two rules the last venture learned the expensive way. Every agent inherits these. |
| `.claude/agents/` | Ten agent charters — research, UX, rules, iOS, adversarial reviewer, QA, growth, sales, copy, compliance. Two structural rules: nobody reviews their own work, and QA runs a repo-wide consistency sweep before a phase closes. |
| `studio/ORG.md` | The org chart and how work actually flows. |
| `research/scoring-rubric.md` | Weights and hard gates, to be filled in and committed **before** any research returns. Already carries the counter-incentive gate and the mechanic gate. |
| `hq/` | Your dashboard. `./hq/serve.sh` then `localhost:4173`. Dependency-free, no network calls, re-reads state every 30 seconds. Seeded at Phase 1 with your three setup actions. |
| `templates/OFFER.template.md` | The frozen-contract pattern: one file holding name, price, guarantee, deposit terms, event names and banned strings, that every parallel agent copies from and nobody rewrites. Copy to `validation/OFFER.md` at the start of Phase 2. |
| `templates/ENGINE-API.template.md` | The same pattern for code: freeze the engine surface before two agents build against it. Copy to `engine/API.md`. |

## The one-paragraph version of what went wrong last time

48 niches examined, 44 killed in Phase 1, four deep-dived — and every deep-dive cut its own score
once it looked harder. The founder picked one; a competitor gate run before any code killed it,
because a free incumbent already computed the exact thing we planned to sell and was bundled by the
licence schools we had named as our channel. Re-gating the fallbacks killed a second for the same
reason: the institution already emails every date. **Zero lines of app code were written, which was
the correct outcome.** The two filters in `CLAUDE.md` §0 are what that cost bought, and the gate now
runs inside Phase 1 instead of Phase 2.
