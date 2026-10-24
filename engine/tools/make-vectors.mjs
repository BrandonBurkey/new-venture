// Independent brute-force reference implementation, used to GENERATE the expected values in
// engine/test-vectors.json and to cross-check the closed-form engine. Deliberately written a
// different way: JS Date in UTC, day-by-day loops, no shared code with engine/index.mjs.
import { writeFileSync } from "node:fs";

const DAY = 86400000;
const z = (iso) => Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1, +iso.slice(8, 10)) / DAY;
const iso = (n) => new Date(n * DAY).toISOString().slice(0, 10);
const dow = (n) => new Date(n * DAY).getUTCDay(); // 0 = Sunday, 6 = Saturday
const isWknd = (n) => dow(n) === 0 || dow(n) === 6;

function ref(t, today) {
  const on = z(t.onHireDate);
  const td = z(today);
  const weekly = t.chargePeriod === "week";
  const skipWknd = !weekly && t.chargesWeekends === false;
  const charged = (n) => (skipWknd ? !isWknd(n) : true);

  // periodsCharged — day-by-day / period-by-period loop
  let periods = 0;
  if (td >= on) {
    if (weekly) {
      for (let s = on; s <= td; s += 7) periods += 1;
    } else {
      for (let d = on; d <= td; d += 1) if (charged(d)) periods += 1;
    }
  }

  // first charged day of the hire
  let first = on;
  while (!charged(first)) first += 1;

  // nextChargeDate
  let next;
  if (weekly) {
    if (td < on) next = on;
    else {
      next = on;
      while (next <= td) next += 7;
    }
  } else if (td < first) {
    next = first;
  } else {
    next = td + 1;
    while (!charged(next)) next += 1;
  }

  // minimumEndsDate
  let minEnds;
  if (weekly) minEnds = on + t.minimumPeriods * 7 - 1;
  else {
    let count = 0;
    let d = on;
    for (;;) {
      if (charged(d)) {
        count += 1;
        if (count === t.minimumPeriods) break;
      }
      d += 1;
    }
    minEnds = d;
  }

  const minimumNotYetMet = td < minEnds;
  const noticeCallBy = next - t.noticeDays;
  const minCallBy = minEnds + 1 - t.noticeDays;
  const callBy = minimumNotYetMet ? Math.min(noticeCallBy, minCallBy) : noticeCallBy;

  return {
    nextChargeDate: iso(next),
    nextChargePence: t.ratePence,
    callByDate: iso(callBy),
    daysUntilCallBy: callBy - td,
    minimumNotYetMet,
    minimumEndsDate: iso(minEnds),
    periodsCharged: periods,
    chargedToDatePence: periods * t.ratePence,
  };
}

const W = (o) => ({ chargePeriod: "week", chargesWeekends: true, ...o });
const D = (o) => ({ chargePeriod: "day", chargesWeekends: true, ...o });
const DX = (o) => ({ chargePeriod: "day", chargesWeekends: false, ...o });

// [name, why, terms, today, extraBasisSubstrings]
const cases = [
  ["weekly-callby-day-before", "boundary pair: the day before the notice call-by date",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-09", []],
  ["weekly-callby-exact-day", "boundary pair: the call-by date itself, daysUntilCallBy must be 0",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-10", []],
  ["weekly-callby-day-after", "boundary pair: the day after, daysUntilCallBy goes negative and no field judges it",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-11", []],
  ["weekly-min4-binding-week1", "minimum of 4 weeks still binding in week 1; both readings must appear",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 4, noticeDays: 2 }), "2026-10-09",
   ["Reading from the notice period", "Reading from the minimum hire period", "earlier of the two"]],
  ["weekly-min4-day-before-min-ends", "boundary: last full day of a 4-week minimum, still binding",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 4, noticeDays: 2 }), "2026-10-31", []],
  ["weekly-min4-on-min-ends", "boundary: the minimum's final day, minimumNotYetMet flips to false",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 4, noticeDays: 2 }), "2026-11-01",
   ["has been served"]],
  ["weekly-min4-day-after-min-ends", "boundary: first day past the minimum, only the notice reading applies",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 4, noticeDays: 2 }), "2026-11-02",
   ["Only the notice reading applies today"]],
  ["weekly-notice-longer-than-period", "notice of 14 days against a 7-day period: call-by is already behind the user",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 14 }), "2026-10-09", []],
  ["weekly-notice-longer-than-remaining-hire", "30 days' notice on a 4-week minimum",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 4, noticeDays: 30 }), "2026-10-20", []],
  ["weekly-notice-zero", "noticeDays 0: the last day to call is the day the next period begins",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 0 }), "2026-10-09",
   ["Off-hire notice you entered: none"]],
  ["weekly-notice-zero-on-period-boundary", "noticeDays 0 on the first day of a new weekly period",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 0 }), "2026-10-12", []],
  ["weekly-notice-one-day", "single day of notice, mid-period",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 1 }), "2026-10-08", []],
  ["weekly-notice-7-on-start-day", "7 days' notice, today is the on-hire date: call-by is today",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 7 }), "2026-10-05", []],
  ["weekly-today-is-onhire-date", "today equals onHireDate: one period charged, not zero",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-05", []],
  ["weekly-today-before-onhire", "today before onHireDate: nothing charged, next charge is the hire's own first day",
   W({ onHireDate: "2026-11-10", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-24",
   ["before the on-hire date"]],
  ["weekly-today-day-before-onhire", "boundary pair with the above: the day before charging starts",
   W({ onHireDate: "2026-11-10", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-11-09", []],
  ["weekly-shorter-than-minimum", "hire shorter than its minimum: week 2 of a 4-week minimum",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 4, noticeDays: 2 }), "2026-10-13",
   ["Periods inside the minimum are charged"]],
  ["weekly-min-52-weeks", "long minimum: 52 weeks of a year-long hire",
   W({ onHireDate: "2026-01-05", ratePence: 35000, minimumPeriods: 52, noticeDays: 7 }), "2026-10-24", []],
  ["weekly-month-end-rollover", "weekly period crossing 31 January into February",
   W({ onHireDate: "2026-01-28", ratePence: 28000, minimumPeriods: 1, noticeDays: 2 }), "2026-02-02", []],
  ["weekly-30-day-month-end", "weekly period crossing 30 April into May",
   W({ onHireDate: "2026-04-28", ratePence: 28000, minimumPeriods: 2, noticeDays: 3 }), "2026-05-04", []],
  ["weekly-year-rollover", "weekly period crossing 31 December into the new year",
   W({ onHireDate: "2026-12-28", ratePence: 28000, minimumPeriods: 1, noticeDays: 2 }), "2026-12-31", []],
  ["weekly-leap-day-onhire", "on-hire on 29 February 2024: minimum ends 6 March",
   W({ onHireDate: "2024-02-29", ratePence: 42000, minimumPeriods: 1, noticeDays: 2 }), "2024-02-29", []],
  ["weekly-leap-day-crossing", "weekly period running across 29 February 2024",
   W({ onHireDate: "2024-02-26", ratePence: 42000, minimumPeriods: 2, noticeDays: 2 }), "2024-03-01", []],
  ["weekly-leap-day-2028", "the next leap year, to prove the rule is not hard-coded to 2024",
   W({ onHireDate: "2028-02-27", ratePence: 42000, minimumPeriods: 1, noticeDays: 1 }), "2028-02-29", []],
  ["weekly-weekend-flag-false-is-a-no-op", "chargesWeekends false with weekly charging changes no figure, and says so",
   { chargePeriod: "week", chargesWeekends: false, onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 2, noticeDays: 2 },
   "2026-10-09", ["changes none of the figures below"]],
  ["weekly-rate-zero", "zero rate (kit on free loan) still produces dates and £0.00",
   W({ onHireDate: "2026-10-05", ratePence: 0, minimumPeriods: 1, noticeDays: 2 }), "2026-10-09", []],
  ["weekly-rate-large", "large rate, integer pence only, no float drift over many periods",
   W({ onHireDate: "2026-01-05", ratePence: 1234567, minimumPeriods: 1, noticeDays: 2 }), "2026-10-24", []],
  ["weekly-far-future-today", "many periods charged, to pin the period count arithmetic at scale",
   W({ onHireDate: "2020-01-06", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-24", []],
  ["daily-31-day-month", "daily charging across all 31 days of July",
   D({ onHireDate: "2026-07-01", ratePence: 4500, minimumPeriods: 1, noticeDays: 1 }), "2026-07-31", []],
  ["daily-31-day-month-plus-one", "boundary pair: the day after a 31-day run, into the next month",
   D({ onHireDate: "2026-07-01", ratePence: 4500, minimumPeriods: 1, noticeDays: 1 }), "2026-08-01", []],
  ["daily-month-end-31-jan", "daily charging across 31 January into 1 February",
   D({ onHireDate: "2026-01-30", ratePence: 4500, minimumPeriods: 3, noticeDays: 1 }), "2026-02-01", []],
  ["daily-month-end-30-apr", "daily charging across 30 April into 1 May",
   D({ onHireDate: "2026-04-29", ratePence: 4500, minimumPeriods: 3, noticeDays: 1 }), "2026-05-01", []],
  ["daily-year-rollover", "daily charging across 31 December into 1 January",
   D({ onHireDate: "2026-12-30", ratePence: 4500, minimumPeriods: 2, noticeDays: 1 }), "2027-01-01", []],
  ["daily-leap-day-28th", "daily charging on 28 February 2024, the day before the leap day",
   D({ onHireDate: "2024-02-28", ratePence: 4500, minimumPeriods: 5, noticeDays: 1 }), "2024-02-28", []],
  ["daily-leap-day-29th", "daily charging on the leap day itself: next charge is 1 March",
   D({ onHireDate: "2024-02-28", ratePence: 4500, minimumPeriods: 5, noticeDays: 1 }), "2024-02-29", []],
  ["daily-non-leap-feb-28", "28 February 2026 is the month end: next charge is 1 March, no 29 February",
   D({ onHireDate: "2026-02-27", ratePence: 4500, minimumPeriods: 3, noticeDays: 1 }), "2026-02-28", []],
  ["daily-non-leap-2023-feb", "the same trap in a different non-leap year",
   D({ onHireDate: "2023-02-27", ratePence: 4500, minimumPeriods: 2, noticeDays: 0 }), "2023-02-28", []],
  ["daily-century-non-leap-2100", "2100 is divisible by 4 and by 100 but not 400, so it is not a leap year",
   D({ onHireDate: "2100-02-27", ratePence: 4500, minimumPeriods: 3, noticeDays: 1 }), "2100-02-28", []],
  ["daily-year-2000-leap", "2000 is divisible by 400, so 29 February exists",
   D({ onHireDate: "2000-02-28", ratePence: 4500, minimumPeriods: 3, noticeDays: 1 }), "2000-02-29", []],
  ["daily-notice-zero", "noticeDays 0 on daily charging: call by the day the next day's charge begins",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 1, noticeDays: 0 }), "2026-10-08", []],
  ["daily-notice-zero-on-onhire-day", "noticeDays 0 on day one of the hire",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 1, noticeDays: 0 }), "2026-10-05", []],
  ["daily-notice-longer-than-period", "10 days' notice against a one-day period: the call-by date is behind the user",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 1, noticeDays: 10 }), "2026-10-09", []],
  ["daily-shorter-than-minimum", "day 3 of a 14-day minimum: early return does not avoid the minimum",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 14, noticeDays: 2 }), "2026-10-07",
   ["Periods inside the minimum are charged"]],
  ["daily-minimum-one-period", "minimum of one day: minimumEndsDate equals onHireDate",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 1, noticeDays: 1 }), "2026-10-05", []],
  ["daily-min-day-before-end", "boundary triple on a 7-day minimum: the day before it ends",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 7, noticeDays: 1 }), "2026-10-10", []],
  ["daily-min-on-end", "boundary triple: the final day of the 7-day minimum",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 7, noticeDays: 1 }), "2026-10-11", []],
  ["daily-min-day-after-end", "boundary triple: the first day past the 7-day minimum",
   D({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 7, noticeDays: 1 }), "2026-10-12", []],
  ["daily-today-before-onhire", "today before onHireDate on daily charging",
   D({ onHireDate: "2026-11-02", ratePence: 4500, minimumPeriods: 5, noticeDays: 2 }), "2026-10-24", []],
  ["dailyx-friday-min-met", "weekends excluded: Friday is the 5th charged day of a 5-day minimum",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 5, noticeDays: 1 }), "2026-10-09", []],
  ["dailyx-saturday-not-charged", "weekends excluded: Saturday adds no charged day and the next charge is Monday",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 5, noticeDays: 1 }), "2026-10-10",
   ["only Monday to Friday count as charged days"]],
  ["dailyx-sunday-is-callby", "weekends excluded: the call-by date itself falls on a Sunday, and the engine flags the day",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 5, noticeDays: 1 }), "2026-10-11",
   ["is a Sunday"]],
  ["dailyx-monday-next-charge", "weekends excluded: Monday is charged day 6",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 5, noticeDays: 1 }), "2026-10-12", []],
  ["dailyx-onhire-on-saturday", "weekends excluded and the machine went out on a Saturday: charging starts Monday",
   DX({ onHireDate: "2026-10-10", ratePence: 4500, minimumPeriods: 2, noticeDays: 0 }), "2026-10-10", []],
  ["dailyx-onhire-on-sunday", "weekends excluded and the machine went out on a Sunday",
   DX({ onHireDate: "2026-10-11", ratePence: 4500, minimumPeriods: 2, noticeDays: 0 }), "2026-10-11", []],
  ["dailyx-min-7-spans-a-weekend", "weekends excluded: a 7-charged-day minimum runs over the weekend to Tuesday",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 7, noticeDays: 1 }), "2026-10-09", []],
  ["dailyx-min-10-spans-two-weeks", "weekends excluded: a 10-charged-day minimum ends on the second Friday",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 10, noticeDays: 2 }), "2026-10-14", []],
  ["dailyx-min-1", "weekends excluded with a one-day minimum",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 1, noticeDays: 0 }), "2026-10-05", []],
  ["dailyx-31-day-month-weekdays-only", "weekends excluded across all of July 2026: 23 charged days, not 31",
   DX({ onHireDate: "2026-07-01", ratePence: 4500, minimumPeriods: 1, noticeDays: 1 }), "2026-07-31", []],
  ["dailyx-today-before-onhire-over-a-weekend", "weekends excluded, today is the Sunday before a Monday on-hire",
   DX({ onHireDate: "2026-10-12", ratePence: 4500, minimumPeriods: 5, noticeDays: 2 }), "2026-10-11", []],
  ["dailyx-notice-3-lands-midweek", "weekends excluded with 3 days' notice, call-by lands on a weekday",
   DX({ onHireDate: "2026-10-05", ratePence: 4500, minimumPeriods: 20, noticeDays: 3 }), "2026-10-20", []],
  ["dailyx-leap-day-weekend-skip", "weekends excluded across 29 February 2024, which was a Thursday",
   DX({ onHireDate: "2024-02-26", ratePence: 4500, minimumPeriods: 5, noticeDays: 1 }), "2024-02-29", []],
];

const vectors = cases.map(([name, why, terms, today, basisIncludes]) => {
  const v = { id: name, name, why, terms, today, expect: ref(terms, today) };
  if (basisIncludes.length) v.expectBasisIncludes = basisIncludes;
  return v;
});

// Invalid-input vectors: the engine refuses rather than returning a confident wrong number.
const invalid = [
  ["invalid-onhire-date-30-feb", "30 February is not a date; parsing must refuse it",
   W({ onHireDate: "2026-02-30", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-24", "terms.onHireDate"],
  ["invalid-onhire-date-format", "a UK-format date string is not an ISO date",
   W({ onHireDate: "05/10/2026", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "2026-10-24", "terms.onHireDate"],
  ["invalid-today-format", "today must be an ISO date too",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 }), "24/10/2026", "today"],
  ["invalid-charge-period-month", "monthly charging is not in the frozen surface, so it is refused, not guessed",
   { chargePeriod: "month", chargesWeekends: true, onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 },
   "2026-10-24", "terms.chargePeriod"],
  ["invalid-rate-float", "pence must be an integer: a float rate is refused",
   W({ onHireDate: "2026-10-05", ratePence: 350.5, minimumPeriods: 1, noticeDays: 2 }), "2026-10-24", "terms.ratePence"],
  ["invalid-minimum-zero", "minimumPeriods must be at least 1",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 0, noticeDays: 2 }), "2026-10-24", "terms.minimumPeriods"],
  ["invalid-notice-negative", "noticeDays cannot be negative",
   W({ onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: -1 }), "2026-10-24", "terms.noticeDays"],
  ["invalid-weekends-string", "chargesWeekends must be a boolean, not the string \"false\"",
   { chargePeriod: "week", chargesWeekends: "false", onHireDate: "2026-10-05", ratePence: 35000, minimumPeriods: 1, noticeDays: 2 },
   "2026-10-24", "terms.chargesWeekends"],
  ["invalid-leap-day-2026", "29 February 2026 does not exist",
   D({ onHireDate: "2026-02-29", ratePence: 4500, minimumPeriods: 1, noticeDays: 0 }), "2026-10-24", "terms.onHireDate"],
];

for (const [name, why, terms, today, includes] of invalid) {
  vectors.push({ id: name, name, why, terms, today, expect: { throws: true, throwsMessageIncludes: includes } });
}

writeFileSync(process.argv[2], JSON.stringify({
  note: "Generated inputs with expected outputs produced by an independent brute-force reference implementation, then checked against engine/index.mjs. Each case pins one edge named in `why`.",
  count: vectors.length,
  vectors,
}, null, 2) + "\n");
console.log("vectors:", vectors.length);
