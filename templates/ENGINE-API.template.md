# Engine API contract

Frozen before the engine and the landing page were written, so that two agents working in
parallel produce code that fits together. The rules engineer owns the implementation; the landing
page imports this surface and nothing else.

**Module:** `engine/sea-service.mjs` — a dependency-free ES module. No npm packages, no date
library, no `Date.now()` inside any rule function: the caller always passes `asOf`.

```js
export const RULES_AS_OF;   // "YYYY-MM-DD" — when a human last reviewed the rule table
export const WINDOW_PRESETS;
// [{ id, label, windowYears, targetDays, citation: { text, url, verification } }]
// verification is one of: "verified" | "snippet" | "unverified"

export function expandSeasonPattern(pattern);
// pattern: { weekdays:[0..6], startMonthDay:"MM-DD", endMonthDay:"MM-DD",
//            years:[2022,...], hours:Number, twoWatch:Boolean, grt:Number|null }
// returns Entry[] — used by the 3-tap onboarding and the landing calculator

export function computeWindow(input);
// input: {
//   entries: [{ date:"YYYY-MM-DD", hours:Number, twoWatch:Boolean,
//               grt:Number|null, vesselId:String|null }],
//   asOf: "YYYY-MM-DD",
//   windowYears: Number,      // 5 or 3
//   targetDays: Number,       // 360, 90, ... whatever the USER chose
//   dayRule: "standard" | "shortened"   // shortened = under-100-GRT reading
// }
// returns {
//   creditedDays, rawEntryCount, windowStart, windowEnd, targetDays,
//   difference,                 // targetDays - creditedDays; negative means over
//   nextDropDate,               // the date the window next loses a credited day, or null
//   perEntry: [{ date, credited, reason, citationId }],
//   disputed: [{ ruleId, readings: [{ label, creditedDays, citation }] }],
//   citations: [{ id, text, url, verification }]
// }

export function projectFromRate(input);
// input: { entries, asOf, since:"YYYY-MM-DD", windowYears, targetDays, dayRule, horizonDate }
// returns { projectedCreditedDays, horizonDate, basisDays, basisFrom, citationId }
// Describes the USER'S OWN logged rate forward. It is never a prediction about their eligibility.
```

## Non-negotiable behaviours

1. **Civil dates only.** `YYYY-MM-DD` strings throughout, or UTC-noon Dates internally. Never
   local midnight. Leap days, month-end rollovers and the 29 February window edge are tested.
2. **Deterministic.** Same input, same output, always. No ambient clock, no locale dependence.
3. **No verdicts.** The engine returns counts, dates and differences. It never returns
   `eligible`, `qualified`, `current`, `ready` or any boolean that reads as a conclusion about
   the user's standing. There is no such field, so no caller can render one.
4. **Disputed rules return both readings.** Where sources conflict — notably how the window start
   is counted — `disputed[]` carries every reading with its citation, and the UI shows them side
   by side. The engine never silently picks a winner.
5. **Every rule cites its source** in a comment with a URL and a verification level, and appears
   in `citations[]` so the UI can show it next to the number.
6. **Golden vectors.** `engine/test-vectors.json`, 50+ cases, each with `id`, `why` (the edge it
   pins), `input` and `expected`. Boundary pairs: the day before, the day of, the day after. The
   Swift port in Phase 3 loads this same file and must pass 100%.
