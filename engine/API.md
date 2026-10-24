# ENGINE API — frozen 2026-10-24. Build against this surface. Do not change it.

Dependency-free ES module, `engine/index.mjs`. No imports, no I/O, no `Date.now()` inside the pure
functions — the caller passes `today`. Pure, deterministic, and testable.

## Why there is an engine at all

An earlier note in this repo claimed there was no computable logic here. That was wrong. Hire
charging is arithmetic: a start date, a charging period, a minimum hire period and a notice period
determine exactly when the next charge lands and the last moment to avoid it. The rules are
**commercial, not statutory**, so every output cites *the user's own entered terms* rather than
legislation. The engine must say so, and must never imply a legal position.

## Types

```js
/**
 * @typedef {Object} HireTerms
 * @property {string}  onHireDate      ISO date, "YYYY-MM-DD", the day charging began
 * @property {"day"|"week"} chargePeriod
 * @property {number}  ratePence       charge per period, in pence, integer
 * @property {number}  minimumPeriods  minimum hire periods chargeable, integer >= 1
 * @property {number}  noticeDays      whole days of off-hire notice the hirer requires, >= 0
 * @property {boolean} chargesWeekends true if the hirer charges Saturdays and Sundays
 */

/**
 * @typedef {Object} OffHireWindow
 * @property {string}  nextChargeDate      ISO date the next period begins
 * @property {number}  nextChargePence     cost of that next period
 * @property {string}  callByDate          ISO date: last day to give notice and avoid it
 * @property {number}  daysUntilCallBy     signed; negative means the moment has passed
 * @property {boolean} minimumNotYetMet    true if the minimum hire period still binds
 * @property {string}  minimumEndsDate     ISO date the minimum period ends
 * @property {number}  periodsCharged      periods charged from onHireDate to today inclusive
 * @property {number}  chargedToDatePence
 * @property {string[]} basis              one line per input used, for the UI to show
 */
```

`basis` exists so the UI can show its working. Example entry:
`"Weekly charging from 2026-10-05, as you entered it."`

## Functions

```js
export function offHireWindow(terms, today) -> OffHireWindow
export function chargedToDate(terms, today) -> { periods: number, pence: number, basis: string[] }
export function offHireRecord(fields) -> { lines: string[], text: string }
export function parseISO(s) -> { y, m, d } | null
export function addDays(iso, n) -> string
export function formatPence(pence) -> string   // "£1,234.56"
```

`offHireRecord(fields)` takes `{hirer, machine, assetRef, offHiredAt, reference, spokeTo, notes}`
and returns copy-ready plain text. It is the proof artefact and performs no computation.

## Hard rules

1. **No verdict fields.** No `isCompliant`, `isSafe`, `isLate`, `ok`, `pass`. `daysUntilCallBy` may
   be negative; the UI describes it, the engine does not judge it.
2. **Integer pence everywhere.** No floats for money. `formatPence` is the only place a currency
   string is produced.
3. **Dates are ISO strings in, ISO strings out.** No `Date` objects across the boundary. No
   timezones — these are calendar dates as written on a delivery note.
4. **Every rule carries a comment** naming its source and verification level. Where the source is
   the user's own entered terms, say exactly that: `// source: user-entered hire terms [n/a]`.
5. **Conflicts return both readings.** If the minimum hire period and the notice period give
   different call-by dates, return the earlier one as `callByDate` AND both in `basis`, each
   labelled. Never silently pick a winner.
6. `engine/test-vectors.json` holds **50+** cases, loaded by `node --test` and, later, by any port.

## Edge cases the vectors must cover

Minimum period still binding; notice longer than the remaining period; off-hire on the exact
boundary day; weekend-excluded charging; a hire shorter than its minimum; `noticeDays: 0`;
month-end and leap-day arithmetic; `today` before `onHireDate`; daily charging across 31 days.
