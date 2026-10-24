# How the agents communicate

Written because "make the agents talk to each other" has a real answer and a fake one, and the
fake one wastes money.

## The honest mechanic

**Sub-agents cannot talk to each other directly.** There is no peer channel in the tooling. An
agent is dispatched with a brief, works alone, and returns one report. It cannot ask another agent
a question mid-task, and it cannot see another agent's chat.

So they communicate three ways, all of which are real:

**1. Through the repository — the main channel.** An agent's output is a file at an agreed path.
The next agent reads that file as its input. This is why the contracts are frozen before parallel
work starts: `validation/OFFER.md` and `engine/API.md` are the shared vocabulary, and an agent that
rewrites them breaks every sibling at once.

**2. Through Bob, as switchboard.** When agent A needs something from agent B, it writes the
question into its report under `## Needs from another agent`. Bob routes it into B's next brief.
One hop, written down, no telephone game.

**3. By chained review.** The reviewer's input *is* the producer's output. `ios-reviewer` reads the
engineer's Swift. `qa-verifier` runs everyone's checks. `compliance-counsel` reads everyone's
words. This is adversarial on purpose, and nobody reviews their own work.

## The handoff block

Every agent ends its report with this, so Bob can route without reading the whole thing:

```
## Handoff
- Wrote:            <paths>
- Verified:         <what was opened and confirmed>
- Could NOT verify: <gaps, ranked by how much they matter>
- Needs from another agent: <agent name — the question>
- Changes my own score: <yes/no, and the new number>
```

The third line is not optional. **A gap is a deliverable; a plausible-sounding filler number is a
firing offence.** An agent that cannot reach a source says so and ranks the follow-up.

## Write ownership — this is what stops races

| Path | Who may write |
| --- | --- |
| `hq/state.json` | Bob only |
| `validation/OFFER.md`, `engine/API.md` | Bob only, and only before a wave starts |
| `research/scoring-rubric.md` | Bob only, and never after evidence has returned |
| `research/*.md` | `research-analyst` |
| `engine/**` | `rules-engineer`; `ios-reviewer` may fix parity bugs |
| `ios/**` | `ios-engineer`; `ios-reviewer` may fix compile errors |
| `landing/**` | `ux-designer` and `growth-marketer`, different files |
| `validation/**` except `OFFER.md` | `growth-marketer`, `sales-closer`, `compliance-counsel` |

Two agents never hold the same file in one wave. If a wave needs that, it is two waves.

## Escalation

| Situation | What happens |
| --- | --- |
| Agent disagrees with another agent | Bob decides, records both positions, founder never arbitrates on technical grounds |
| Agent's evidence kills its own niche | Report it immediately. This is the most valuable thing an agent can produce |
| Agent cannot reach a source | Report the blocked host. Do not route around it, do not substitute a guess |
| Agent is asked for work outside its charter | Decline, name the agent that owns it |
| A finding weakens the venture | Straight to Bob, then to the founder unsoftened |

## What the founder sees

Almost none of the above. The founder gets decisions, blockers and gate questions from Bob, under
about 200 words, with file paths for anything deeper. The crowding this protocol fixes was caused
by reporting process instead of outcomes.
