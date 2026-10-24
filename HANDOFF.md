# Handoff — what this repo is, and what to do with it

**Status: stopped deliberately at the end of Phase 1, with no app built. That was the right
outcome.** The founder has redirected the studio to UK commercial construction, where they have
an insider edge, and that work starts in a fresh session and repo.

## What happened, in six lines

1. Five scouts examined **48 niches**; the scoring weights were locked before any evidence arrived.
2. 44 were killed; four went to adversarial deep-dive. Every deep-dive **cut its own score**.
3. The founder chose USCG mariner sea-service tracking.
4. A hard competitor gate, run before any Swift, **killed it**: MM-SEAS already computes the
   trailing 5- and 7-year windows with the 1.5-day credit, generates CG-719S forms, has a
   free-forever tier, and is bundled by the licence schools we had named as our channel.
5. Re-gating the fallbacks killed govcon too — SBA already emails every window we proposed to
   track. Motorsport passed, but SFI now prints expiry dates on its labels, so the arithmetic is
   shrinking.
6. **Zero lines of app code were written.** The gates existed to prevent exactly that spend, and
   they worked.

## The two findings worth more than the niches

**1. The counter-incentive test.** Whoever holds the date almost always notifies for free. SBA
emails HUBZone at 30 days, WOSB at 120, VOSB at 90. MM-SEAS computes the sea-service window. Carta
and Clerky email the 83(b) clock. CE Broker, NCEES and NABP track credentials. This one pattern
killed three of four finalists. **The question is never "is the pain real" — it is "does anyone
holding this date have a reason NOT to tell the user?"** Only two answers survive: the date lives
on physical property bought from many vendors, so no single party holds it; or the holder profits
from the user forgetting.

**2. Search the mechanic, not the rival.** Five research passes missed MM-SEAS because they
searched for apps *by name* in an App Store this environment cannot reach. One search for the
*mechanic* — "trailing five year total", "recency days" — found it in a single hit. The first
search for any candidate must be the computation the product performs, in the customer's words,
and it must happen **before** the deep dive.

Both are now the first two rules in `CLAUDE.md`.

## What is reusable, and genuinely worth keeping

| Path | What it is |
| --- | --- |
| `studio/PROMPT-construction.md` | **The live deliverable.** A self-contained brief for the construction venture, carrying every lesson above. Paste it into a fresh session on a new repo. |
| `CLAUDE.md` | Studio standing rules: evidence standard, the two findings, exclusions, product constraints, the wording test, payments, code rules. |
| `.claude/agents/*.md` | Ten agent charters — research, UX, rules, iOS, reviewer, QA, growth, sales, copy, compliance. Two structural rules: nobody reviews their own work, and QA runs a consistency sweep before a phase closes. |
| `studio/ORG.md` | The org chart and how work actually flows. |
| `hq/` | The founder's dashboard. Dependency-free, `state.json` is the single writer, Playwright-verified at 390px and 1280px in light and dark. Reusable as-is: swap the state file. |
| `research/scoring-rubric.md` | Weights and hard gates, as a pattern for locking criteria before evidence. |
| `validation/OFFER.md` | The frozen-contract pattern: one file holding name, price, guarantee, deposit terms, event names and banned strings, that every parallel agent copies from and nobody rewrites. This is what stops multi-agent work contradicting itself. |
| `engine/API.md` | The same pattern for code: freeze the engine surface before two agents build against it. |

## What is dead, and should not be revived without new evidence

`research/E1-E2-competitor-gate.md` and `research/gate-govcon.md` record why. The exclusions are in
`CLAUDE.md` §2. Revisiting one requires new evidence that changes the verdict, stated explicitly.

## The honest caveat on all of it

**No primary source in this repository was ever read.** The environment's network policy refused
every research host — Apple, Reddit, Capterra, Trustpilot, and every `.gov` site including eCFR,
the IRS, the SBA and the FMCSA. Every regulation, penalty and interval here is search-snippet
evidence, marked as such. Two separate analysts also found that figures widely repeated by
consultancies and law firms were **out of date or simply wrong** — a FAR case number, a HUBZone
recertification interval, and the central "four hours underway" rule the whole mariner premise
rested on. Treat nothing here as verified. The construction brief tells the next session to fix
the allowlist before it starts.
