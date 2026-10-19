// 360 Ledger — sea-service rules engine.
//
// Dependency-free ES module. Implements engine/API.md exactly.
//
// Three standing constraints, from CLAUDE.md §4 and §6 and API.md:
//
//   1. DETERMINISTIC. No ambient clock. No `Date.now()`, no `new Date()` without
//      arguments, no locale-dependent parsing. The caller always passes `asOf`.
//      Civil dates are `YYYY-MM-DD` strings; internally they are UTC-noon epoch
//      milliseconds, so no local-midnight or DST boundary can move a day.
//   2. NO VERDICTS. This module returns counts, dates and differences. There is no
//      `eligible`, `qualified`, `current` or `ready` field anywhere in any return
//      value, so no caller can render one. The National Maritime Center determines
//      the acceptability of sea service. This file does not.
//   3. DISPUTED RULES RETURN BOTH READINGS. Where the sources conflict, every
//      reading is returned in `disputed[]` with its own citation and its own count.
//      The engine never silently picks a winner.
//
// VERIFICATION STATE OF THE RULE TABLE (honest, as of RULES_AS_OF):
// Not one rule below is `verified`. "verified" in this file means "a human opened
// the primary source and read the text". The egress proxy DNS-denies ecfr.gov,
// dco.uscg.mil and law.cornell.edu; four separate runs have now failed to reach
// them. Every citation is therefore `snippet` (a search engine returned the text
// or a close summary off the real page at the given URL) or `unverified` (forum or
// commercial secondary source only). See engine/RULES.md for the ranked list of
// rules a domain expert must sign off before launch.

/** When a human last reviewed the rule table below. */
export const RULES_AS_OF = '2026-10-19';

// ---------------------------------------------------------------------------
// Citations
// ---------------------------------------------------------------------------
// Every rule cites its source here, and every number this module returns carries
// a `citationId` into this table so the UI can show the source next to the figure.
//
// verification:
//   "verified"   — a human opened the primary source and read the text. COUNT: 0.
//   "snippet"    — a search engine returned the text, or a close summary of it,
//                  off the real page at the given URL. The page was not opened.
//   "unverified" — forum post, commercial school or licensing-consultancy page
//                  only. No regulatory text behind it.

/** @type {Record<string, {id:string, text:string, url:string, verification:string}>} */
const CITATIONS = {
  // R1 — the engine's atom.
  // 46 CFR 10.107(b): "Day means, for the purpose of complying with the service
  // requirements of this subchapter, 8 hours of watchstanding or day-working not to
  // include overtime." Corroborated by 46 USC 7301 ("360 days is equal to one
  // year's service, and a day is equal to 8 hours of labor or duty").
  // Verification: snippet. ecfr.gov and dco.uscg.mil are unreachable from here.
  R1: {
    id: 'R1',
    text: 'A day means 8 hours of watchstanding or day-working, not including overtime. 46 CFR 10.107(b), as reproduced in National Maritime Center guidance.',
    url: 'https://www.dco.uscg.mil/Portals/9/NMC/pdfs/professional_qualifications/time_half_credit.pdf',
    verification: 'snippet',
  },

  // R2 — the shortened day for small vessels. THIS IS A CORRECTION.
  // 46 CFR 10.107(b) continues, in the text reproduced by NMC guidance: on vessels
  // of less than 100 gross register tons a day is 8 hours unless the Coast Guard
  // finds the vessel's operating schedule makes that period inappropriate, "but in
  // no case will this period be less than 4 hours".
  //
  // The 4 hours is a FLOOR on a shortened day for a small vessel. It is NOT a rule
  // that "4 hours underway" earns a day. The reproduced text does not contain the
  // word "underway". The widely repeated "a sea-service day means at least four
  // hours underway" traces to a licensing-consultancy marketing page
  // (https://maritimelicensingagency.com/announcements-1/licenserenewal) and to a
  // gCaptain poster whom another poster corrected on exactly this point.
  //
  // The engine cannot know whether the Coast Guard has made the "inappropriate
  // schedule" finding for a given mariner's vessel. So the shortened reading is
  // never applied on the engine's own initiative: the caller opts in with
  // dayRule: "shortened", and both readings are always returned in disputed[].
  // Verification: snippet.
  R2: {
    id: 'R2',
    text: 'On a vessel of less than 100 gross register tons a day is 8 hours, unless the Coast Guard finds the vessel’s operating schedule makes that period inappropriate — and in no case less than 4 hours. The 4 hours is a floor on a shortened day, not a rule that 4 hours underway earns a day. 46 CFR 10.107(b), as reproduced in National Maritime Center guidance.',
    url: 'https://www.dco.uscg.mil/Portals/9/NMC/pdfs/professional_qualifications/time_half_credit.pdf',
    verification: 'snippet',
  },

  // R2-ALT — the reading this engine does NOT implement, carried so the UI can
  // show the mariner what the widely repeated version would have counted.
  // Verification: unverified (consultancy marketing page and a corrected forum post).
  'R2-ALT': {
    id: 'R2-ALT',
    text: 'The widely repeated secondary reading: "a sea-service day means at least four hours underway." Not supported by the regulation text this engine was built from. Carried here only so the two counts can be shown side by side.',
    url: 'https://maritimelicensingagency.com/announcements-1/licenserenewal',
    verification: 'unverified',
  },

  // R3 — time and a half.
  // 46 CFR 10.107(b), with 46 USC 8104 and 46 CFR 15.705: on vessels authorised to
  // operate a two-watch system, a 12-hour working day may be creditable as 1 1/2
  // days of service. Note the regulation says TWELVE hours, not eight: an 8-hour
  // day on a two-watch vessel is one day, not one and a half.
  // Verification: snippet.
  R3: {
    id: 'R3',
    text: 'On a vessel authorised to operate a two-watch system, a 12-hour working day may be creditable as 1 1/2 days of service. 46 CFR 10.107(b) with 46 USC 8104 and 46 CFR 15.705.',
    url: 'https://www.law.cornell.edu/uscode/text/46/8104',
    verification: 'snippet',
  },

  // R4 — a DOCUMENTATION rule, not arithmetic.
  // The 1 1/2-day credit is refused unless the letter of service says, in words,
  // that the mariner worked a 12-hour day on a two-watch system. This changes no
  // number in this module. It is surfaced two ways so it cannot be lost: every
  // entry credited 1.5 carries the reason code
  // "two-watch-12h-1.5-days-letter-of-service-wording-required", and R4 is always
  // present in citations[]. The exact sentence the PDF must carry is exported as
  // TWO_WATCH_LETTER_SENTENCE.
  // Verification: unverified (forum thread only).
  R4: {
    id: 'R4',
    text: 'The 1 1/2-day credit is refused without wording in the letter of service confirming a 12-hour workday on a two-watch system. A documentation requirement: it changes no arithmetic, but without the sentence the credit is not given.',
    url: 'https://forum.gcaptain.com/t/any-advise-on-how-to-write-my-license-renewal-sea-service-letter/10487',
    verification: 'unverified',
  },

  // R5 — the renewal recency window the 360-in-5 preset counts against.
  // Verification: snippet (NMC checklist PDF, not fetchable from here).
  R5: {
    id: 'R5',
    text: '360 days of sea service in the previous 5 years is one of the listed routes to renewal, alongside an approved course, a refresher and an open-book exercise. USCG/NMC renewal checklist.',
    url: 'https://www.dco.uscg.mil/Portals/9/NMC/pdfs/checklists/mcp_fm_nmc5_01_web.pdf',
    verification: 'snippet',
  },

  // R6 — "year" = 360 days.
  // 46 CFR 10.107 per a gCaptain poster, but independently corroborated by
  // 46 USC 7301, which a search summary reports as stating that 360 days equals
  // one year's service and a day equals 8 hours of labour or duty, and by NMC
  // guidance reported as treating 1 month as 30 days and 1 year as 360 days.
  // This is what makes the 1,800-day reading of a "5-year" window arguable at all.
  // Verification: snippet.
  R6: {
    id: 'R6',
    text: 'For service-requirement purposes a year is 360 days and a day is 8 hours of labour or duty. 46 USC 7301, with 46 CFR 10.107 and NMC guidance treating one month as 30 days and one year as 360 days.',
    url: 'https://www.law.cornell.edu/uscode/text/46/7301',
    verification: 'snippet',
  },

  // R7 — officer recency, the 90-in-3 preset.
  // Verification: unverified (O*NET / CareerOneStop, a secondary derivation of the
  // USCG requirement, not the CFR).
  R7: {
    id: 'R7',
    text: 'Officer recency for Mate 500/1600 GT and Second Mate is described as 90 days in the past 3 years on vessels of appropriate tonnage, on a 5-year renewal interval. O*NET credential pages, derived from USCG requirements.',
    url: 'https://www.onetonline.org/link/certinfo/10913-B',
    verification: 'unverified',
  },

  // R8 — STCW refresher trigger.
  // Verification: unverified (union school notice).
  R8: {
    id: 'R8',
    text: 'STCW refresher trigger described as 360 days sailing in the past 5 years for Basic Training, Advanced Firefighting and Proficiency in Survival Craft, with ROS time countable. Seafarers school notice on NVIC modifications.',
    url: 'https://www.seafarers.org/union-school-welcome-nvic-modifications/',
    verification: 'unverified',
  },

  // R9 — OUPV original.
  // Verification: unverified (commercial school).
  R9: {
    id: 'R9',
    text: 'OUPV original is described as 360 days of total qualifying experience, including 90 days within the last 3 years. Commercial training school page.',
    url: 'https://marinerslearningsystem.com/pages/oupv-six-pack-captains-license',
    verification: 'unverified',
  },

  // R14 — DISPUTED: how the window start is counted.
  // Reading A: five calendar years back from the as-of date, anniversary included.
  // Reading B: five calendar years back, the anniversary itself excluded, so the
  //            window spans exactly five calendar years and no more.
  // Reading C: 1,800 days, i.e. five 360-day years (R6). A gCaptain thread reads
  //            the window this way and anchors it to the credential's issue date.
  //            This engine anchors every reading at `asOf`, because it is not told
  //            an issue date; see RULES.md for why that matters.
  // No source settles this. All readings are returned. The engine never picks.
  // Verification: unverified (anecdotal forum thread).
  R14: {
    id: 'R14',
    text: 'Sources conflict on how the start of the window is counted: five calendar years back from today, or 1,800 days read as five 360-day years. Until a domain expert settles it, every reading is shown with its own count.',
    url: 'https://forum.gcaptain.com/t/renewal-sea-service/61461',
    verification: 'unverified',
  },
};

/**
 * The sentence the letter-of-service template must contain for the 1 1/2-day
 * two-watch credit to be given (R4). Exported as a constant rather than returned
 * as a field, because the return type in API.md is frozen. The per-entry reason
 * code "two-watch-12h-1.5-days-letter-of-service-wording-required" is the
 * row-level warning that tells the PDF template when to include it.
 */
export const TWO_WATCH_LETTER_SENTENCE =
  'The above-named mariner worked a 12-hour workday aboard this vessel under an authorised two-watch system.';

// ---------------------------------------------------------------------------
// Window presets
// ---------------------------------------------------------------------------
// The onboarding screen shows these WITH their citations and the user picks one.
// We never pick for them. `targetDays` is only ever a default; `computeWindow`
// counts against whatever target the user actually entered.
//
// Note on "fixed-1800-days": `computeWindow` takes `windowYears`, not a preset id,
// so choosing this preset does not change the primary window start. The 1,800-day
// count always comes back in `disputed[]` next to the calendar-year counts. That is
// deliberate — see RULES.md.

export const WINDOW_PRESETS = [
  {
    id: 'renewal-360-in-5',
    label: '360 days in the last 5 years',
    windowYears: 5,
    targetDays: 360,
    citation: CITATIONS.R5,
  },
  {
    id: 'officer-recency-90-in-3',
    label: '90 days in the last 3 years',
    windowYears: 3,
    targetDays: 90,
    citation: CITATIONS.R7,
  },
  {
    id: 'fixed-1800-days',
    label: '1,800 days, counting a year as 360 days',
    windowYears: 5,
    targetDays: 360,
    citation: CITATIONS.R6,
  },
  {
    id: 'stcw-refresher-360-in-5',
    label: '360 days in the last 5 years (STCW refresher trigger)',
    windowYears: 5,
    targetDays: 360,
    citation: CITATIONS.R8,
  },
  {
    id: 'oupv-original-90-in-3',
    label: '90 days in the last 3 years (OUPV original, recent-service part)',
    windowYears: 3,
    targetDays: 90,
    citation: CITATIONS.R9,
  },
];

// ---------------------------------------------------------------------------
// Civil date arithmetic
// ---------------------------------------------------------------------------
// A date is a `YYYY-MM-DD` string at the boundary and UTC-noon epoch milliseconds
// inside. UTC noon has no DST, so adding 86400000 ms always lands on the next
// civil day, and subtracting two noon stamps always gives a whole number of days.

const MS_PER_DAY = 86400000;
const NOON_MS = 12 * 60 * 60 * 1000;
const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(year, month /* 1-12 */) {
  if (month === 2) return isLeapYear(year) ? 29 : 28;
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
  return 31;
}

/** True if `value` is a syntactically and calendrically valid `YYYY-MM-DD`. */
function isCivilDate(value) {
  if (typeof value !== 'string') return false;
  const m = DATE_RE.exec(value);
  if (!m) return false;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > daysInMonth(year, month)) return false;
  return true;
}

/** `YYYY-MM-DD` -> UTC-noon epoch ms. Throws on anything else. */
function toNoon(value, label) {
  if (!isCivilDate(value)) {
    throw new TypeError(`${label} must be a valid YYYY-MM-DD civil date, got ${JSON.stringify(value)}`);
  }
  const m = DATE_RE.exec(value);
  return Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0, 0);
}

function pad2(n) {
  return n < 10 ? `0${n}` : String(n);
}

/** UTC-noon epoch ms -> `YYYY-MM-DD`. */
function toISO(noonMs) {
  const d = new Date(noonMs);
  return `${String(d.getUTCFullYear()).padStart(4, '0')}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

function addDays(noonMs, n) {
  return noonMs + n * MS_PER_DAY;
}

function diffDays(laterNoonMs, earlierNoonMs) {
  return Math.round((laterNoonMs - earlierNoonMs) / MS_PER_DAY);
}

/**
 * Add (or subtract) whole calendar years. 29 February clamps to 28 February when
 * the target year is not a leap year — the only sane choice, and it is tested.
 */
function addYears(noonMs, years) {
  const d = new Date(noonMs);
  const targetYear = d.getUTCFullYear() + years;
  const month = d.getUTCMonth() + 1;
  const day = Math.min(d.getUTCDate(), daysInMonth(targetYear, month));
  return Date.UTC(targetYear, month - 1, day, 12, 0, 0, 0);
}

// ---------------------------------------------------------------------------
// The day rules (R1, R2, R3)
// ---------------------------------------------------------------------------
// Credit is computed per CALENDAR DATE, not per entry. A day is a day: two 5-hour
// entries on the same date are one 10-hour day worth one day of credit, never two.
// Hours above the threshold earn nothing extra — the regulation credits a day, and
// R1 excludes overtime — so a 16-hour day-working shift is one day, not two.
//
// Reason codes are a closed set. RULES.md lists them with their plain-English
// meaning, because they are shown to the mariner.

const REASONS = {
  OUTSIDE_WINDOW: 'outside-window',
  INVALID_DATE: 'invalid-date',
  INVALID_HOURS: 'invalid-hours',
  SAME_DATE_ALREADY_COUNTED: 'same-date-already-counted',
  FULL_DAY_8H: 'full-day-8h',
  TWO_WATCH_12H: 'two-watch-12h-1.5-days-letter-of-service-wording-required',
  TWO_WATCH_UNDER_12H: 'two-watch-under-12h-credited-as-full-day',
  SHORTENED_DAY: 'shortened-day-under-100-grt-4h-floor',
  UNDER_8H_STANDARD: 'under-8h-no-credit-standard-day-rule',
  UNDER_4H: 'under-4h-no-credit',
};

const DAY_RULES = ['standard', 'shortened'];

/**
 * Credit for one calendar date, in HALF-days as an integer, so the running total
 * never touches floating point. 2 = one day, 3 = one and a half days.
 *
 * @param {number} hours   total hours logged on that date
 * @param {boolean} twoWatch  any entry on that date flagged two-watch
 * @param {number|null} grt   smallest non-null gross register tonnage on that date
 * @param {"standard"|"shortened"} dayRule
 * @returns {{halves:number, reason:string, citationId:string}}
 */
function creditForDate(hours, twoWatch, grt, dayRule) {
  // R2: no credit is ever given for a date on which fewer than 4 hours were
  // served. This floor applies whatever the day rule and whatever the tonnage.
  if (hours < 4) {
    return { halves: 0, reason: REASONS.UNDER_4H, citationId: 'R2' };
  }

  // R3: a 12-hour working day on a vessel authorised to run a two-watch system may
  // be creditable as 1 1/2 days. R4: refused without the letter-of-service wording,
  // which is why the reason code names it.
  if (twoWatch && hours >= 12) {
    return { halves: 3, reason: REASONS.TWO_WATCH_12H, citationId: 'R3' };
  }

  // R1: 8 hours of watchstanding or day-working is one day. Nothing above it adds.
  if (hours >= 8) {
    return twoWatch
      ? { halves: 2, reason: REASONS.TWO_WATCH_UNDER_12H, citationId: 'R3' }
      : { halves: 2, reason: REASONS.FULL_DAY_8H, citationId: 'R1' };
  }

  // 4 <= hours < 8. R2: this can be a full day only on a vessel under 100 GRT, and
  // only where the Coast Guard has found the 8-hour period inappropriate for that
  // vessel's operating schedule. The engine cannot know that, so the caller asserts
  // it with dayRule: "shortened". Tonnage must be known and under 100.
  if (dayRule === 'shortened' && grt !== null && grt < 100) {
    return { halves: 2, reason: REASONS.SHORTENED_DAY, citationId: 'R2' };
  }

  return { halves: 0, reason: REASONS.UNDER_8H_STANDARD, citationId: 'R1' };
}

// ---------------------------------------------------------------------------
// Entry normalisation
// ---------------------------------------------------------------------------
// Entries are tolerated, never fatal. A mariner can type a bad row; the engine
// reports it as a zero-credit row with a reason instead of throwing away the whole
// window. Only the computation-level inputs (asOf, windowYears, dayRule) throw.

/**
 * @returns {Array<{index:number, rawDate:*, noonMs:number|null, hours:number,
 *                  twoWatch:boolean, grt:number|null, invalid:string|null}>}
 */
function normaliseEntries(entries) {
  if (!Array.isArray(entries)) {
    throw new TypeError('entries must be an array');
  }
  return entries.map((entry, index) => {
    const source = entry && typeof entry === 'object' ? entry : {};
    const validDate = isCivilDate(source.date);
    const hoursValid = typeof source.hours === 'number' && Number.isFinite(source.hours) && source.hours >= 0;
    let invalid = null;
    if (!validDate) invalid = REASONS.INVALID_DATE;
    else if (!hoursValid) invalid = REASONS.INVALID_HOURS;
    const grtValid = typeof source.grt === 'number' && Number.isFinite(source.grt) && source.grt > 0;
    return {
      index,
      rawDate: validDate ? source.date : source.date === undefined ? null : source.date,
      noonMs: validDate ? toNoon(source.date, 'entry.date') : null,
      hours: hoursValid ? source.hours : 0,
      twoWatch: source.twoWatch === true,
      grt: grtValid ? source.grt : null,
      invalid,
    };
  });
}

/** Stable order: by date, then by the order the user entered them. */
function sortEntries(normalised) {
  return normalised.slice().sort((a, b) => {
    if (a.noonMs === null && b.noonMs === null) return a.index - b.index;
    if (a.noonMs === null) return 1; // invalid dates sort last, deterministically
    if (b.noonMs === null) return -1;
    if (a.noonMs !== b.noonMs) return a.noonMs - b.noonMs;
    return a.index - b.index;
  });
}

/**
 * Count credited half-days in [startNoonMs, endNoonMs], both inclusive, grouping
 * entries by calendar date. Shared by `computeWindow`, every disputed reading and
 * `projectFromRate`, so every number in this module comes out of one code path.
 *
 * @returns {{halves:number, entryCount:number, oldestCreditedNoonMs:number|null,
 *            perDate:Map<number, {halves:number, reason:string, citationId:string}>,
 *            creditedIndexByDate:Map<number, number>}}
 */
function countCredits(sorted, startNoonMs, endNoonMs, dayRule) {
  /** @type {Map<number, {hours:number, twoWatch:boolean, grt:number|null, firstIndex:number}>} */
  const byDate = new Map();
  let entryCount = 0;

  for (const entry of sorted) {
    if (entry.noonMs === null) continue;
    if (entry.noonMs < startNoonMs || entry.noonMs > endNoonMs) continue;
    entryCount += 1;
    if (entry.invalid !== null) continue; // counted as a raw entry, credits nothing
    const group = byDate.get(entry.noonMs);
    if (group === undefined) {
      byDate.set(entry.noonMs, {
        hours: entry.hours,
        twoWatch: entry.twoWatch,
        grt: entry.grt,
        firstIndex: entry.index,
      });
    } else {
      group.hours += entry.hours;
      group.twoWatch = group.twoWatch || entry.twoWatch;
      // Smallest known tonnage on the date decides whether the shortened-day
      // reading can apply at all. Deterministic regardless of entry order.
      if (entry.grt !== null) {
        group.grt = group.grt === null ? entry.grt : Math.min(group.grt, entry.grt);
      }
    }
  }

  const perDate = new Map();
  const creditedIndexByDate = new Map();
  let halves = 0;
  let oldestCreditedNoonMs = null;

  const dates = Array.from(byDate.keys()).sort((a, b) => a - b);
  for (const noonMs of dates) {
    const group = byDate.get(noonMs);
    const credit = creditForDate(group.hours, group.twoWatch, group.grt, dayRule);
    perDate.set(noonMs, credit);
    creditedIndexByDate.set(noonMs, group.firstIndex);
    halves += credit.halves;
    if (credit.halves > 0 && oldestCreditedNoonMs === null) {
      oldestCreditedNoonMs = noonMs;
    }
  }

  return { halves, entryCount, oldestCreditedNoonMs, perDate, creditedIndexByDate };
}

// ---------------------------------------------------------------------------
// Window starts — the disputed readings (R14)
// ---------------------------------------------------------------------------
// The window always ENDS on `asOf`, inclusive. Only the start is disputed.
//
// The primary `windowStart` in the return value is reading A: the plainest reading
// of "the previous 5 years", and the one a captain expects to see on the card. It
// is not a ruling. Every reading, including A, comes back in `disputed[]` with its
// own count, and the Window card shows them side by side (deep dive §8, feature 4).

/** Reading A — N calendar years back, the anniversary date itself included. */
function startCalendarInclusive(asOfNoonMs, windowYears) {
  return addYears(asOfNoonMs, -windowYears);
}

/** Reading B — N calendar years back, anniversary excluded: exactly N years, no more. */
function startCalendarExclusive(asOfNoonMs, windowYears) {
  return addDays(addYears(asOfNoonMs, -windowYears), 1);
}

/** Reading C — N x 360 days inclusive, counting a year as 360 days (R6). */
function startFixed360(asOfNoonMs, windowYears) {
  return addDays(asOfNoonMs, -(windowYears * 360 - 1));
}

const WINDOW_START_READINGS = [
  {
    key: 'calendar-inclusive',
    label: 'Five-year style window: calendar years back, counting the anniversary day itself (used for the headline count on this screen)',
    start: startCalendarInclusive,
    citationId: 'R14',
  },
  {
    key: 'calendar-exclusive',
    label: 'Calendar years back, not counting the anniversary day, so the window spans exactly that many years',
    start: startCalendarExclusive,
    citationId: 'R14',
  },
  {
    key: 'fixed-360-day-years',
    label: 'Counting a year as 360 days, so a five-year window is 1,800 days',
    start: startFixed360,
    citationId: 'R6',
  },
];

function readingLabel(key, windowYears) {
  const reading = WINDOW_START_READINGS.find((r) => r.key === key);
  if (reading.key === 'fixed-360-day-years') {
    return `Counting a year as 360 days, so this window is ${windowYears * 360} days`;
  }
  return reading.label;
}

// ---------------------------------------------------------------------------
// expandSeasonPattern
// ---------------------------------------------------------------------------

/**
 * Expand a typical-season pattern into one entry per matching date.
 *
 * Used by the 3-tap onboarding backdate and the landing-page calculator. It encodes
 * no rule: it only writes down the days the user says they worked. Crediting those
 * days is `computeWindow`'s job.
 *
 * @param {{weekdays:number[], startMonthDay:string, endMonthDay:string,
 *          years:number[], hours:number, twoWatch?:boolean, grt?:number|null}} pattern
 * @returns {Array<{date:string, hours:number, twoWatch:boolean, grt:number|null, vesselId:null}>}
 *
 * Conventions, all tested:
 *  - `weekdays` uses 0 = Sunday .. 6 = Saturday, matching `Date#getUTCDay`.
 *  - `endMonthDay` earlier than `startMonthDay` means the season wraps into the
 *    following calendar year (1 Nov - 15 Mar).
 *  - 02-29 given for a non-leap year clamps to 02-28 rather than throwing.
 *  - Dates are returned ascending and de-duplicated; the first occurrence wins.
 */
export function expandSeasonPattern(pattern) {
  if (pattern === null || typeof pattern !== 'object') {
    throw new TypeError('pattern must be an object');
  }
  const { weekdays, startMonthDay, endMonthDay, years, hours } = pattern;

  if (!Array.isArray(weekdays) || weekdays.length === 0) {
    throw new TypeError('pattern.weekdays must be a non-empty array of 0-6');
  }
  for (const day of weekdays) {
    if (!Number.isInteger(day) || day < 0 || day > 6) {
      throw new TypeError(`pattern.weekdays entries must be integers 0-6, got ${JSON.stringify(day)}`);
    }
  }
  const wanted = new Set(weekdays);

  const monthDay = (value, label) => {
    if (typeof value !== 'string' || !/^\d{2}-\d{2}$/.test(value)) {
      throw new TypeError(`pattern.${label} must be "MM-DD", got ${JSON.stringify(value)}`);
    }
    const month = Number(value.slice(0, 2));
    const day = Number(value.slice(3, 5));
    if (month < 1 || month > 12 || day < 1 || day > 31) {
      throw new TypeError(`pattern.${label} is not a real month and day: ${value}`);
    }
    return { month, day };
  };
  const start = monthDay(startMonthDay, 'startMonthDay');
  const end = monthDay(endMonthDay, 'endMonthDay');

  if (!Array.isArray(years) || years.length === 0) {
    throw new TypeError('pattern.years must be a non-empty array of calendar years');
  }
  for (const year of years) {
    if (!Number.isInteger(year) || year < 1900 || year > 2200) {
      throw new TypeError(`pattern.years entries must be integer years 1900-2200, got ${JSON.stringify(year)}`);
    }
  }
  if (typeof hours !== 'number' || !Number.isFinite(hours) || hours < 0) {
    throw new TypeError('pattern.hours must be a finite number of hours, zero or more');
  }

  const twoWatch = pattern.twoWatch === true;
  const grt =
    typeof pattern.grt === 'number' && Number.isFinite(pattern.grt) && pattern.grt > 0 ? pattern.grt : null;

  const wraps = end.month < start.month || (end.month === start.month && end.day < start.day);
  const clampDay = (year, month, day) => Math.min(day, daysInMonth(year, month));

  const seen = new Set();
  const out = [];
  const sortedYears = Array.from(new Set(years)).sort((a, b) => a - b);

  for (const year of sortedYears) {
    const fromNoon = Date.UTC(year, start.month - 1, clampDay(year, start.month, start.day), 12);
    const endYear = wraps ? year + 1 : year;
    const toNoonMs = Date.UTC(endYear, end.month - 1, clampDay(endYear, end.month, end.day), 12);
    for (let cursor = fromNoon; cursor <= toNoonMs; cursor = addDays(cursor, 1)) {
      if (!wanted.has(new Date(cursor).getUTCDay())) continue;
      if (seen.has(cursor)) continue;
      seen.add(cursor);
      out.push({ date: toISO(cursor), hours, twoWatch, grt, vesselId: null });
    }
  }

  out.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  return out;
}

// ---------------------------------------------------------------------------
// computeWindow
// ---------------------------------------------------------------------------

function validateComputationInput(input, label) {
  if (input === null || typeof input !== 'object') {
    throw new TypeError(`${label} input must be an object`);
  }
  if (!Number.isInteger(input.windowYears) || input.windowYears <= 0) {
    throw new TypeError(`${label} windowYears must be a positive whole number of years`);
  }
  if (typeof input.targetDays !== 'number' || !Number.isFinite(input.targetDays) || input.targetDays < 0) {
    throw new TypeError(`${label} targetDays must be a finite number, zero or more`);
  }
  if (!DAY_RULES.includes(input.dayRule)) {
    throw new TypeError(`${label} dayRule must be one of ${DAY_RULES.join(', ')}`);
  }
}

/**
 * Count the user's own logged days inside a trailing window.
 *
 * Returns counts, dates and differences. It does not return, and cannot be made to
 * return, a statement about whether the mariner is eligible, qualified, current or
 * ready. There is no such field.
 *
 * @param {{entries:Array, asOf:string, windowYears:number, targetDays:number,
 *          dayRule:"standard"|"shortened"}} input
 */
export function computeWindow(input) {
  validateComputationInput(input, 'computeWindow');
  const asOfNoonMs = toNoon(input.asOf, 'computeWindow asOf');
  const { windowYears, targetDays, dayRule } = input;

  const sorted = sortEntries(normaliseEntries(input.entries));

  const windowStartNoonMs = startCalendarInclusive(asOfNoonMs, windowYears);
  const primary = countCredits(sorted, windowStartNoonMs, asOfNoonMs, dayRule);
  const creditedDays = primary.halves / 2;

  // perEntry covers EVERY entry the user gave us, in date order, so the UI can
  // explain any row the mariner asks about — including the ones that counted for
  // nothing. The date's credit is attributed to the first entry the user made on
  // that date; later entries on the same date show
  // "same-date-already-counted" with zero.
  const perEntry = sorted.map((entry) => {
    if (entry.noonMs === null) {
      return {
        date: entry.rawDate,
        credited: 0,
        reason: REASONS.INVALID_DATE,
        citationId: 'R1',
      };
    }
    const date = toISO(entry.noonMs);
    if (entry.noonMs < windowStartNoonMs || entry.noonMs > asOfNoonMs) {
      return { date, credited: 0, reason: REASONS.OUTSIDE_WINDOW, citationId: 'R14' };
    }
    if (entry.invalid !== null) {
      return { date, credited: 0, reason: entry.invalid, citationId: 'R1' };
    }
    const credit = primary.perDate.get(entry.noonMs);
    const creditedIndex = primary.creditedIndexByDate.get(entry.noonMs);
    if (creditedIndex !== entry.index) {
      return { date, credited: 0, reason: REASONS.SAME_DATE_ALREADY_COUNTED, citationId: 'R1' };
    }
    return { date, credited: credit.halves / 2, reason: credit.reason, citationId: credit.citationId };
  });

  // The date the window next loses a credited day. If the oldest credited day in
  // the window is D, the window keeps it while windowStart <= D, so it drops on the
  // first day after the window start passes D. Null when nothing is credited.
  let nextDropDate = null;
  if (primary.oldestCreditedNoonMs !== null) {
    nextDropDate = toISO(addDays(addYears(primary.oldestCreditedNoonMs, windowYears), 1));
  }

  // Disputed rules. Both entries are ALWAYS present, with every reading and its own
  // count, whatever the input. The engine never silently picks a winner.
  const windowStartReadings = WINDOW_START_READINGS.map((reading) => {
    const start = reading.start(asOfNoonMs, windowYears);
    const counted = countCredits(sorted, start, asOfNoonMs, dayRule);
    return {
      label: `${readingLabel(reading.key, windowYears)} — window starts ${toISO(start)}`,
      creditedDays: counted.halves / 2,
      citation: CITATIONS[reading.citationId],
    };
  });

  const dayRuleReadings = [
    {
      label: 'Eight-hour day, strictly: a date counts only with 8 hours or more logged',
      creditedDays: countCredits(sorted, windowStartNoonMs, asOfNoonMs, 'standard').halves / 2,
      citation: CITATIONS.R1,
    },
    {
      label: 'Shortened day on a vessel under 100 GRT: a date with 4 hours or more may count as a day, where the Coast Guard has found the 8-hour period inappropriate for that vessel',
      creditedDays: countCredits(sorted, windowStartNoonMs, asOfNoonMs, 'shortened').halves / 2,
      citation: CITATIONS.R2,
    },
  ];

  const disputed = [
    { ruleId: 'R2', readings: dayRuleReadings },
    { ruleId: 'R14', readings: windowStartReadings },
  ];

  // Citations the UI needs beside these numbers: the day rules always, the
  // documentation requirement always, the year definition and the window dispute
  // always, plus every preset built on the same window length as the user chose.
  const citationIds = ['R1', 'R2', 'R2-ALT', 'R3', 'R4', 'R6', 'R14'];
  for (const preset of WINDOW_PRESETS) {
    if (preset.windowYears === windowYears && !citationIds.includes(preset.citation.id)) {
      citationIds.push(preset.citation.id);
    }
  }
  const citations = citationIds.map((id) => ({
    id: CITATIONS[id].id,
    text: CITATIONS[id].text,
    url: CITATIONS[id].url,
    verification: CITATIONS[id].verification,
  }));

  return {
    creditedDays,
    rawEntryCount: primary.entryCount,
    windowStart: toISO(windowStartNoonMs),
    windowEnd: toISO(asOfNoonMs),
    targetDays,
    difference: targetDays - creditedDays,
    nextDropDate,
    perEntry,
    disputed,
    citations,
  };
}

// ---------------------------------------------------------------------------
// projectFromRate
// ---------------------------------------------------------------------------

/**
 * Carry the user's OWN logged rate forward to a date they pick.
 *
 * This is arithmetic on the mariner's own entries, not a prediction about their
 * standing. The shipped string for it is: "At the rate you've logged since 1 Jun,
 * your own entries reach 341 by 14 Mar 2027." (validation/OFFER.md §8.)
 *
 * Rate = credited days in [since, asOf] divided by the number of days in that span.
 * The projection adds that rate across the days from asOf to horizonDate, and adds
 * it to the window as it stands AT the horizon — so days that drop out of the back
 * of the window on the way there are already gone.
 *
 * @param {{entries:Array, asOf:string, since:string, windowYears:number,
 *          targetDays:number, dayRule:"standard"|"shortened", horizonDate:string}} input
 */
export function projectFromRate(input) {
  validateComputationInput(input, 'projectFromRate');
  const asOfNoonMs = toNoon(input.asOf, 'projectFromRate asOf');
  const sinceNoonMs = toNoon(input.since, 'projectFromRate since');
  const horizonNoonMs = toNoon(input.horizonDate, 'projectFromRate horizonDate');
  const { windowYears, dayRule } = input;

  if (sinceNoonMs > asOfNoonMs) {
    throw new TypeError('projectFromRate since must be on or before asOf');
  }
  if (horizonNoonMs < asOfNoonMs) {
    throw new TypeError('projectFromRate horizonDate must be on or after asOf');
  }

  const sorted = sortEntries(normaliseEntries(input.entries));

  // The basis: the user's own credited days over the span they chose.
  const basis = countCredits(sorted, sinceNoonMs, asOfNoonMs, dayRule);
  const basisDays = basis.halves / 2;
  const basisSpanDays = diffDays(asOfNoonMs, sinceNoonMs) + 1; // inclusive, always >= 1

  // The window as it will stand at the horizon, over the entries we already have.
  const horizonWindowStart = startCalendarInclusive(horizonNoonMs, windowYears);
  const carried = countCredits(sorted, horizonWindowStart, horizonNoonMs, dayRule);

  // Days still to come. Integer arithmetic first, one rounding at the end, so the
  // result is identical on every platform the Swift port runs on.
  const daysForward = diffDays(horizonNoonMs, asOfNoonMs);
  const added = Math.round((basis.halves * daysForward) / (2 * basisSpanDays));

  return {
    projectedCreditedDays: carried.halves / 2 + added,
    horizonDate: toISO(horizonNoonMs),
    basisDays,
    basisFrom: toISO(sinceNoonMs),
    citationId: 'R1',
  };
}
