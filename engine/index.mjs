/**
 * Off-Hire Proof — rules engine.
 *
 * Dependency-free ES module. No imports, no I/O, no `Date.now()` anywhere in this file.
 * The caller always supplies `today` as an ISO date string. Same input, same output.
 *
 * WHAT THIS FILE IS, AND IS NOT
 * -----------------------------
 * Every number and date below is arithmetic on the hire terms the user typed in: an on-hire date,
 * a charging period, a rate, a minimum number of chargeable periods, a notice period, and whether
 * Saturdays and Sundays count as charged days. There is no statutory input. The engine therefore
 * never states a position in law, never names a party as being in the right, and has no field that
 * reads as a judgement. It returns dates, counts and pence, plus a `basis` array of plain-English
 * lines so the interface can show its working.
 *
 * CONTEXT, NOT A COMPUTATION INPUT
 * --------------------------------
 * CPA Supplementary Conditions 2011, clause 7.2 (off-hire): the hirer notifies the owner in
 * writing, each item is identified so the owner can issue a unique off-hire number.
 * source: CPA Supplementary Conditions, clause 7.2 — [snippet]
 *   seen only as a search-result snippet of a third-party copy
 *   (https://www.ardenthire.com/file/cpa-supplementary-2021.pdf, 2021 edition; the host, cpa.uk.net
 *   and nationwideplatforms.co.uk were all unreachable from this environment, so no page was
 *   opened). validation/OFFER.md records clause 7.2.3 — the hirer is charged on if he cannot
 *   produce the off-hire number — at [verified-fetch] from an earlier research pass. This engine
 *   does NOT re-state that level: it was not verified here. The clause is background for the
 *   interface copy and the record artefact. No function below reads it, and nothing below depends
 *   on whether that specific sub-clause number is right. A domain expert signs it off before
 *   launch.
 */

/* ------------------------------------------------------------------------------------------- *
 * Civil-date arithmetic.
 *
 * Calendar dates as written on a delivery note: no clock, no zone, no `Date` object. A date is an
 * integer day number (days from 1970-01-01) internally and a "YYYY-MM-DD" string at every public
 * boundary. Algorithm: Howard Hinnant's days_from_civil / civil_from_days, public domain.
 * source: http://howardhinnant.github.io/date_algorithms.html — [snippet]
 *   (page not reachable from this environment; the algorithm is reproduced from the published
 *   form and is pinned by the leap-day and month-end vectors in test-vectors.json)
 * ------------------------------------------------------------------------------------------- */

const ISO_SHAPE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Parse a civil date. Returns null for anything that is not a real "YYYY-MM-DD" date,
 * including 2026-02-29 and 2026-13-01. Never throws.
 * @param {string} s
 * @returns {{y: number, m: number, d: number} | null}
 */
export function parseISO(s) {
  if (typeof s !== "string") return null;
  const match = ISO_SHAPE.exec(s);
  if (!match) return null;
  const y = Number(match[1]);
  const m = Number(match[2]);
  const d = Number(match[3]);
  if (m < 1 || m > 12) return null;
  if (d < 1 || d > daysInMonth(y, m)) return null;
  return { y, m, d };
}

function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function daysInMonth(y, m) {
  if (m === 2) return isLeapYear(y) ? 29 : 28;
  if (m === 4 || m === 6 || m === 9 || m === 11) return 30;
  return 31;
}

/** Days from 1970-01-01 for a civil date. */
function toDayNumber({ y, m, d }) {
  const yy = m <= 2 ? y - 1 : y;
  const era = Math.floor(yy / 400);
  const yoe = yy - era * 400; // [0, 399]
  const doy = Math.floor((153 * (m + (m > 2 ? -3 : 9)) + 2) / 5) + d - 1; // [0, 365]
  const doe = yoe * 365 + Math.floor(yoe / 4) - Math.floor(yoe / 100) + doy; // [0, 146096]
  return era * 146097 + doe - 719468;
}

/** Civil date for a day number. */
function fromDayNumber(z) {
  const zz = z + 719468;
  const era = Math.floor(zz / 146097);
  const doe = zz - era * 146097; // [0, 146096]
  const yoe = Math.floor((doe - Math.floor(doe / 1460) + Math.floor(doe / 36524) - Math.floor(doe / 146096)) / 365);
  const y = yoe + era * 400;
  const doy = doe - (365 * yoe + Math.floor(yoe / 4) - Math.floor(yoe / 100)); // [0, 365]
  const mp = Math.floor((5 * doy + 2) / 153); // [0, 11]
  const d = doy - Math.floor((153 * mp + 2) / 5) + 1; // [1, 31]
  const m = mp + (mp < 10 ? 3 : -9); // [1, 12]
  return { y: m <= 2 ? y + 1 : y, m, d };
}

function pad(n, width) {
  let s = String(n);
  while (s.length < width) s = "0" + s;
  return s;
}

function toISO(z) {
  const { y, m, d } = fromDayNumber(z);
  return `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}`;
}

function dayNumberOf(iso, label) {
  const parts = parseISO(iso);
  if (!parts) throw new TypeError(`${label}: expected an ISO date "YYYY-MM-DD", received ${JSON.stringify(iso)}`);
  return toDayNumber(parts);
}

/**
 * Add whole days to an ISO date and return an ISO date. Month-end and leap-day rollovers fall out
 * of the day-number arithmetic, so there is no special case to get wrong.
 * @param {string} iso
 * @param {number} n may be negative
 * @returns {string}
 */
export function addDays(iso, n) {
  if (!Number.isInteger(n)) {
    throw new TypeError(`addDays: expected a whole number of days, received ${JSON.stringify(n)}`);
  }
  return toISO(dayNumberOf(iso, "addDays") + n);
}

/** 0 = Monday ... 6 = Sunday. 1970-01-01 (day 0) was a Thursday, so the offset is 3. */
function weekdayIndex(z) {
  return (((z + 3) % 7) + 7) % 7;
}

function isWeekend(z) {
  return weekdayIndex(z) >= 5;
}

function nextChargedDayOnOrAfter(z, weekendDaysAreCharged) {
  if (weekendDaysAreCharged) return z;
  let cursor = z;
  while (isWeekend(cursor)) cursor += 1;
  return cursor;
}

/** Monday-to-Friday days in [startZ, endZ] inclusive. */
function countWeekdaysInclusive(startZ, endZ) {
  if (endZ < startZ) return 0;
  const span = endZ - startZ + 1;
  const fullWeeks = Math.floor(span / 7);
  let count = fullWeeks * 5;
  const tailStart = startZ + fullWeeks * 7;
  for (let cursor = tailStart; cursor <= endZ; cursor += 1) {
    if (!isWeekend(cursor)) count += 1;
  }
  return count;
}

/** The nth (1-based) Monday-to-Friday day on or after startZ. */
function nthWeekdayFrom(startZ, n) {
  let cursor = nextChargedDayOnOrAfter(startZ, false);
  let remaining = n - 1;
  const fullWeeks = Math.floor(remaining / 5);
  cursor += fullWeeks * 7; // same weekday index, so still Monday-to-Friday
  remaining -= fullWeeks * 5;
  while (remaining > 0) {
    cursor = nextChargedDayOnOrAfter(cursor + 1, false);
    remaining -= 1;
  }
  return cursor;
}

/* ------------------------------------------------------------------------------------------- *
 * Money. Integer pence only — no floats anywhere, and one place that makes a currency string.
 * ------------------------------------------------------------------------------------------- */

/**
 * The only producer of a currency string in this module.
 * @param {number} pence integer, may be negative
 * @returns {string} e.g. "£1,234.56"
 */
export function formatPence(pence) {
  if (!Number.isInteger(pence)) {
    throw new TypeError(`formatPence: expected integer pence, received ${JSON.stringify(pence)}`);
  }
  const negative = pence < 0;
  const absolute = negative ? -pence : pence;
  const pounds = Math.trunc(absolute / 100);
  const remainder = absolute % 100;
  let grouped = "";
  const digits = String(pounds);
  for (let i = 0; i < digits.length; i += 1) {
    if (i > 0 && (digits.length - i) % 3 === 0) grouped += ",";
    grouped += digits[i];
  }
  return `${negative ? "-" : ""}£${grouped}.${pad(remainder, 2)}`;
}

/* ------------------------------------------------------------------------------------------- *
 * Terms.
 * ------------------------------------------------------------------------------------------- */

// source: user-entered hire terms [n/a]
// A charging period is one day or one week. A week is seven calendar days from the on-hire date,
// not a Monday-to-Sunday week: hire companies run the week from the day the kit went out.
const PERIOD_LENGTH_DAYS = { day: 1, week: 7 };

function periodWord(chargePeriod, count) {
  if (chargePeriod === "week") return count === 1 ? "week" : "weeks";
  return count === 1 ? "day" : "days";
}

/**
 * Reject anything the arithmetic cannot stand behind, loudly, rather than returning a confident
 * wrong number. Throws TypeError; it is the caller's job to validate the form before this point.
 * source: user-entered hire terms [n/a]
 */
function readTerms(terms) {
  if (terms === null || typeof terms !== "object") {
    throw new TypeError("terms: expected an object of hire terms");
  }
  const onHireZ = dayNumberOf(terms.onHireDate, "terms.onHireDate");
  const chargePeriod = terms.chargePeriod;
  if (chargePeriod !== "day" && chargePeriod !== "week") {
    throw new TypeError(`terms.chargePeriod: expected "day" or "week", received ${JSON.stringify(chargePeriod)}`);
  }
  if (!Number.isInteger(terms.ratePence) || terms.ratePence < 0) {
    throw new TypeError(`terms.ratePence: expected integer pence >= 0, received ${JSON.stringify(terms.ratePence)}`);
  }
  if (!Number.isInteger(terms.minimumPeriods) || terms.minimumPeriods < 1) {
    throw new TypeError(`terms.minimumPeriods: expected an integer >= 1, received ${JSON.stringify(terms.minimumPeriods)}`);
  }
  if (!Number.isInteger(terms.noticeDays) || terms.noticeDays < 0) {
    throw new TypeError(`terms.noticeDays: expected an integer >= 0, received ${JSON.stringify(terms.noticeDays)}`);
  }
  if (typeof terms.chargesWeekends !== "boolean") {
    throw new TypeError(`terms.chargesWeekends: expected true or false, received ${JSON.stringify(terms.chargesWeekends)}`);
  }
  return {
    onHireZ,
    onHireDate: terms.onHireDate,
    chargePeriod,
    ratePence: terms.ratePence,
    minimumPeriods: terms.minimumPeriods,
    noticeDays: terms.noticeDays,
    chargesWeekends: terms.chargesWeekends,
    periodDays: PERIOD_LENGTH_DAYS[chargePeriod],
    // Weekend exclusion only changes which DAYS are charged. With weekly charging the period is
    // still seven calendar days and the whole weekly rate falls due, so the flag changes no
    // number here; it is reported in `basis` so the user can see that it was read and ignored.
    // source: user-entered hire terms [n/a]
    excludesWeekendDays: chargePeriod === "day" && terms.chargesWeekends === false,
  };
}

/* ------------------------------------------------------------------------------------------- *
 * Charged to date.
 * ------------------------------------------------------------------------------------------- */

function basisChargingLine(t) {
  // source: user-entered hire terms [n/a]
  const style = t.chargePeriod === "week" ? "Weekly" : "Daily";
  return `${style} charging from ${t.onHireDate}, as you entered it.`;
}

function basisRateLine(t) {
  // source: user-entered hire terms [n/a]
  return `Rate you entered: ${formatPence(t.ratePence)} per ${t.chargePeriod}.`;
}

function basisWeekendLine(t) {
  // source: user-entered hire terms [n/a]
  if (t.chargesWeekends) {
    return "You entered that Saturdays and Sundays are charged, so every calendar day counts.";
  }
  if (t.chargePeriod === "week") {
    return (
      "You entered that Saturdays and Sundays are not charged. With weekly charging the week still " +
      "runs seven calendar days from the on-hire date and the whole weekly rate falls due, so this " +
      "changes none of the figures below."
    );
  }
  return "You entered that Saturdays and Sundays are not charged, so only Monday to Friday count as charged days.";
}

/**
 * Periods charged from the on-hire date to `today` inclusive, counted the way the user's own terms
 * count them. A weekly period is charged in full the moment it begins — part-week rebates differ
 * from one hire company to the next and are not computed here.
 * source: user-entered hire terms [n/a]
 */
function periodsChargedTo(t, todayZ) {
  if (todayZ < t.onHireZ) return 0;
  if (t.chargePeriod === "week") {
    return Math.floor((todayZ - t.onHireZ) / 7) + 1;
  }
  if (t.excludesWeekendDays) {
    return countWeekdaysInclusive(t.onHireZ, todayZ);
  }
  return todayZ - t.onHireZ + 1;
}

/**
 * @param {Object} terms HireTerms
 * @param {string} today ISO date
 * @returns {{periods: number, pence: number, basis: string[]}}
 */
export function chargedToDate(terms, today) {
  const t = readTerms(terms);
  const todayZ = dayNumberOf(today, "today");
  const periods = periodsChargedTo(t, todayZ);
  const pence = periods * t.ratePence; // integer × integer stays an integer
  const basis = [basisChargingLine(t), basisRateLine(t), basisWeekendLine(t)];
  if (todayZ < t.onHireZ) {
    // source: user-entered hire terms [n/a]
    basis.push(`The date ${today} is before the on-hire date ${t.onHireDate}, so no period has been charged yet.`);
  } else {
    basis.push(
      `Charged from ${t.onHireDate} to ${today} inclusive on the terms you entered: ` +
        `${periods} ${periodWord(t.chargePeriod, periods)} at ${formatPence(t.ratePence)} = ${formatPence(pence)}.`
    );
  }
  return { periods, pence, basis };
}

/* ------------------------------------------------------------------------------------------- *
 * The off-hire window.
 * ------------------------------------------------------------------------------------------- */

/**
 * The day the next charging period begins.
 * - Weekly: seven-day periods run from the on-hire date, so the next one begins at the next
 *   multiple of seven days after the on-hire date that is later than today.
 * - Daily, weekends charged: tomorrow.
 * - Daily, weekends not charged: the next Monday-to-Friday day after today.
 * Before the on-hire date, the next charge is the first charged day of the hire itself.
 * source: user-entered hire terms [n/a]
 */
function nextChargeDayNumber(t, todayZ) {
  const firstChargedZ = nextChargedDayOnOrAfter(t.onHireZ, !t.excludesWeekendDays);
  if (t.chargePeriod === "week") {
    if (todayZ < t.onHireZ) return t.onHireZ;
    return t.onHireZ + (Math.floor((todayZ - t.onHireZ) / 7) + 1) * 7;
  }
  if (todayZ < firstChargedZ) return firstChargedZ;
  return nextChargedDayOnOrAfter(todayZ + 1, !t.excludesWeekendDays);
}

/**
 * The last day of the minimum hire period: the day before the first period that is not inside the
 * minimum would begin. With weekend days excluded from daily charging, the minimum is counted in
 * charged days, so it lands on the minimumPeriods-th Monday-to-Friday day.
 * source: user-entered hire terms [n/a]
 */
function minimumEndsDayNumber(t) {
  if (t.chargePeriod === "week") return t.onHireZ + t.minimumPeriods * 7 - 1;
  if (t.excludesWeekendDays) return nthWeekdayFrom(t.onHireZ, t.minimumPeriods);
  return t.onHireZ + t.minimumPeriods - 1;
}

/**
 * @param {Object} terms HireTerms
 * @param {string} today ISO date
 * @returns {Object} OffHireWindow
 */
export function offHireWindow(terms, today) {
  const t = readTerms(terms);
  const todayZ = dayNumberOf(today, "today");

  const nextChargeZ = nextChargeDayNumber(t, todayZ);
  const minimumEndsZ = minimumEndsDayNumber(t);

  // The minimum still binds while the minimum period has days left to run after today. On its
  // final day it has been served. This is a count of days, not an opinion about anyone's position.
  // source: user-entered hire terms [n/a]
  const minimumNotYetMet = todayZ < minimumEndsZ;

  // Reading one — the notice period. Notice is whole days, so the last day to call is noticeDays
  // before the next period begins. noticeDays: 0 puts the last day on the day the period begins.
  // source: user-entered hire terms [n/a]
  const noticeCallByZ = nextChargeZ - t.noticeDays;

  // Reading two — the minimum hire period. While the minimum binds, calling off-hire early does
  // not avoid the periods inside it, so this reading gives the last day to call to avoid the first
  // period AFTER the minimum: notice counted back from the day after the minimum ends.
  // source: user-entered hire terms [n/a]
  const minimumCallByZ = minimumEndsZ + 1 - t.noticeDays;

  // Hard rule: where the two readings differ, report the earlier as `callByDate` and carry BOTH in
  // `basis`, each labelled. A reading enters this comparison only while it applies — the minimum
  // reading stops applying once the minimum has been served — and both are always stated below, so
  // nothing is quietly dropped.
  // source: user-entered hire terms [n/a]
  const applicable = minimumNotYetMet ? [noticeCallByZ, minimumCallByZ] : [noticeCallByZ];
  const callByZ = Math.min(...applicable);

  const charged = chargedToDate(terms, today);

  const basis = [basisChargingLine(t), basisRateLine(t), basisWeekendLine(t)];

  // source: user-entered hire terms [n/a]
  basis.push(
    `Minimum hire period you entered: ${t.minimumPeriods} ${periodWord(t.chargePeriod, t.minimumPeriods)}, ` +
      `running from ${t.onHireDate} to ${toISO(minimumEndsZ)} inclusive.`
  );
  basis.push(
    t.noticeDays === 0
      ? "Off-hire notice you entered: none, so the last day to call is the day the next period begins."
      : `Off-hire notice you entered: ${t.noticeDays} ${t.noticeDays === 1 ? "day" : "days"}.`
  );
  if (todayZ < t.onHireZ) {
    // source: user-entered hire terms [n/a]
    basis.push(
      `The date ${today} is before the on-hire date, so the next charge shown is the first period of the hire itself.`
    );
  }
  basis.push(
    `Next charging period begins ${toISO(nextChargeZ)} at ${formatPence(t.ratePence)}.`
  );
  // source: user-entered hire terms [n/a] — reading one, labelled
  basis.push(
    `Reading from the notice period: call off-hire by ${toISO(noticeCallByZ)} to avoid the period beginning ` +
      `${toISO(nextChargeZ)}.`
  );
  // source: user-entered hire terms [n/a] — reading two, labelled
  basis.push(
    minimumNotYetMet
      ? `Reading from the minimum hire period: the minimum runs to ${toISO(minimumEndsZ)}, so calling by ` +
        `${toISO(minimumCallByZ)} is what ends the hire as the minimum finishes. Periods inside the minimum are ` +
        `charged on your terms even if the machine goes back earlier.`
      : `Reading from the minimum hire period: it ran to ${toISO(minimumEndsZ)} and has been served, so it does not ` +
        `move today's call-by date.`
  );
  basis.push(
    minimumNotYetMet
      ? `Both readings above apply today. The call-by date shown, ${toISO(callByZ)}, is the earlier of the two.`
      : `Only the notice reading applies today, so the call-by date shown is ${toISO(callByZ)}.`
  );
  if (isWeekend(callByZ)) {
    // A plain fact about the calendar, so the interface can show it. Hire desk opening hours are
    // not an input to this engine and are not assumed here.
    // source: user-entered hire terms [n/a]
    basis.push(
      `${toISO(callByZ)} is a ${weekdayIndex(callByZ) === 5 ? "Saturday" : "Sunday"}. Check your hire company's ` +
        "opening hours and when it treats a call as received."
    );
  }
  basis.push(charged.basis[charged.basis.length - 1]);
  // source: user-entered hire terms [n/a]
  basis.push(
    "Every figure here is arithmetic on the terms you entered. Check them against your own hire agreement and " +
      "the hire company's confirmation."
  );

  return {
    nextChargeDate: toISO(nextChargeZ),
    nextChargePence: t.ratePence,
    callByDate: toISO(callByZ),
    daysUntilCallBy: callByZ - todayZ,
    minimumNotYetMet,
    minimumEndsDate: toISO(minimumEndsZ),
    periodsCharged: charged.periods,
    chargedToDatePence: charged.pence,
    basis,
  };
}

/* ------------------------------------------------------------------------------------------- *
 * The off-hire record — the proof artefact. Computes nothing.
 * ------------------------------------------------------------------------------------------- */

const RECORD_FIELDS = [
  ["hirer", "Hire company"],
  ["machine", "Machine"],
  ["assetRef", "Asset / fleet number"],
  ["offHiredAt", "Off-hired at"],
  ["reference", "Off-hire reference"],
  ["spokeTo", "Spoke to"],
];

const NOT_ENTERED = "(not entered)";

function cleanField(value) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\r\n?/g, "\n").trim();
}

/**
 * Copy-ready plain text of one off-hire call, as the user recorded it. No arithmetic, no dates
 * generated here — `offHiredAt` is copied through exactly as the user wrote it, so the
 * record says what they entered and nothing more.
 * source: user-entered off-hire record [n/a]
 * Context for the surrounding interface copy, not used in this text: CPA Supplementary Conditions
 * 2011 cl 7.2 — written off-hire notice and a unique off-hire number per item [snippet]; see the
 * header of this file for why that is [snippet] and not [verified-fetch].
 *
 * @param {Object} fields {hirer, machine, assetRef, offHiredAt, reference, spokeTo, notes}
 * @returns {{lines: string[], text: string}}
 */
export function offHireRecord(fields) {
  const f = fields === null || typeof fields !== "object" ? {} : fields;
  const lines = ["OFF-HIRE RECORD", ""];

  let widest = 0;
  for (const [, label] of RECORD_FIELDS) widest = Math.max(widest, label.length);

  for (const [key, label] of RECORD_FIELDS) {
    const value = cleanField(f[key]);
    const padding = " ".repeat(widest - label.length);
    lines.push(`${label}:${padding} ${value === "" ? NOT_ENTERED : value.replace(/\n+/g, " ")}`);
  }

  const notes = cleanField(f.notes);
  if (notes !== "") {
    lines.push("");
    lines.push("Notes:");
    for (const noteLine of notes.split("\n")) lines.push(`  ${noteLine}`);
  }

  lines.push("");
  lines.push("This is my own record of the off-hire call above.");
  lines.push("Please confirm the off-hire reference and the date the off-hire takes effect.");

  return { lines, text: lines.join("\n") };
}
