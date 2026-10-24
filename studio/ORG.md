# The studio

Two humans-worth of decisions, ten agents of execution.

| | |
| --- | --- |
| **Founder** | Brandon. Has insider access to UK commercial construction, which is this venture's one structural advantage. Owns the two decision gates, the money, the introductions, and anything requiring a legal identity: the company, the Apple Developer account, Stripe, the domain, and hiring the domain expert who signs off the rules. |
| **Bob, project manager** | The founder's single point of contact. Runs the studio day to day, dispatches and briefs the agents, arbitrates between them, keeps `hq/state.json` current, and is accountable for everything shipped. The founder speaks to Bob and to nobody else; the ten specialists report to Bob. Charter: `.claude/agents/bob.md`. Reporting contract and the limits of agent-to-agent messaging: `studio/COMMS.md`. |

## The teams

| Team | Agent | Owns | Phase |
| --- | --- | --- | --- |
| Command | `bob` | Dispatch, sequencing, gate enforcement, arbitration, the dashboard | All |
| Research | `research-analyst` | Sourced evidence, incumbent teardowns, scoring, deep dives | 1, and re-checks later |
| Product and design | `ux-designer` | Aha moment before paywall, screen specs, design tokens, Dynamic Type, App Store screenshots | 2-3 |
| Product and design | `brand-copywriter` | MAGIC name, Grand Slam Offer stack, paywall copy, ASO listing | 2-3 |
| Engineering | `rules-engineer` | The JS rules engine, 50+ golden vectors, every rule cited to a public source | 2 |
| Engineering | `ios-engineer` | SwiftUI, SwiftData, StoreKit 2, XcodeGen, PDF export | 3 |
| Engineering | `ios-reviewer` | Adversarial compiler-eye review and JS-to-Swift engine parity | 3, after the engineer |
| Engineering | `qa-verifier` | Runs the checks, screenshots, CI, and the cross-agent consistency sweep | 2-4 |
| Go to market | `growth-marketer` | Channels to the first 100 paying users, the 8-week plan, thresholds, event taxonomy | 2 |
| Go to market | `sales-closer` | Mom Test interviews, concierge SOP, deposit conversion, objection handling | 2 |
| Risk | `compliance-counsel` | App Store wording review, payment compliance, the risk memo. Not legal advice | 2, then every gate |

Each agent's full charter is its file in `.claude/agents/`. They inherit the studio standing
rules in `CLAUDE.md`, which outrank their own preferences.

## How the work actually flows

1. Bob briefs an agent with a written charter, the constraints, and a
   definition of done. No agent starts without one.
2. Agents with no dependency on each other run in parallel.
3. Every agent reports what it could **not** verify. A gap is a deliverable; a plausible-sounding
   filler number is a firing offence.
4. Two agents never review their own work: `ios-reviewer` reads the engineer's code,
   `qa-verifier` runs everyone's checks, `compliance-counsel` reads everyone's words.
5. Before any phase closes, `qa-verifier` runs the consistency sweep: event names, product name,
   prices, deposit terms, guarantee wording and the kill date must match character for character
   across the landing page, the emails and the app.
6. Bob updates `hq/state.json`. Nobody else writes it, so there are no races.
7. Agents do not message each other — the tooling has no peer channel. They hand off through
   files at agreed paths, and route questions through Bob via the `## Handoff` block. The full
   protocol, including write ownership per path, is `studio/COMMS.md`.

## A note on this roster

Agent definitions live in `.claude/agents/*.md` and register the roster for this repository, so
the founder and any future session can call them by name. In the session where they were written
they were already in flight, briefed with the same charters passed inline.
