/**
 * Off-Hire Proof — engine tests. Run with:  node --test engine/test.mjs
 * No framework, no dependencies. Every vector in engine/test-vectors.json is asserted field by
 * field, and the engine's public surface is checked against the frozen API.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { offHireWindow, chargedToDate, offHireRecord, parseISO, addDays, formatPence } from "./index.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const suite = JSON.parse(readFileSync(join(here, "test-vectors.json"), "utf8"));
const engineSource = readFileSync(join(here, "index.mjs"), "utf8");

// The frozen OffHireWindow shape from engine/API.md. Nothing more, nothing less: a new field here
// would mean the engine grew a surface the interface and the later port do not know about.
const WINDOW_KEYS = [
  "nextChargeDate",
  "nextChargePence",
  "callByDate",
  "daysUntilCallBy",
  "minimumNotYetMet",
  "minimumEndsDate",
  "periodsCharged",
  "chargedToDatePence",
  "basis",
];

test("the vector file holds at least 50 cases, each with an id and a why", () => {
  assert.ok(suite.vectors.length >= 50, `expected 50+ vectors, found ${suite.vectors.length}`);
  const ids = new Set();
  for (const v of suite.vectors) {
    assert.equal(typeof v.id, "string");
    assert.ok(v.why && v.why.length > 10, `${v.id}: needs a why`);
    assert.ok(!ids.has(v.id), `duplicate vector id ${v.id}`);
    ids.add(v.id);
  }
  assert.equal(ids.size, suite.vectors.length);
});

for (const v of suite.vectors) {
  test(`vector: ${v.id} — ${v.why}`, () => {
    if (v.expect.throws) {
      assert.throws(
        () => offHireWindow(v.terms, v.today),
        (err) => {
          assert.ok(err instanceof TypeError, `${v.id}: expected a TypeError, got ${err}`);
          assert.ok(
            err.message.includes(v.expect.throwsMessageIncludes),
            `${v.id}: message ${JSON.stringify(err.message)} should name ${v.expect.throwsMessageIncludes}`
          );
          return true;
        }
      );
      assert.throws(() => chargedToDate(v.terms, v.today), TypeError);
      return;
    }

    const got = offHireWindow(v.terms, v.today);

    assert.deepEqual(Object.keys(got).sort(), [...WINDOW_KEYS].sort(), `${v.id}: unexpected output shape`);

    for (const key of WINDOW_KEYS) {
      if (key === "basis") continue;
      assert.deepEqual(got[key], v.expect[key], `${v.id}: ${key}`);
    }

    // Types, not just values.
    assert.match(got.nextChargeDate, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(got.callByDate, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(got.minimumEndsDate, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(Number.isInteger(got.nextChargePence), `${v.id}: nextChargePence must be integer pence`);
    assert.ok(Number.isInteger(got.chargedToDatePence), `${v.id}: chargedToDatePence must be integer pence`);
    assert.ok(Number.isInteger(got.daysUntilCallBy), `${v.id}: daysUntilCallBy must be a whole number of days`);
    assert.ok(Number.isInteger(got.periodsCharged) && got.periodsCharged >= 0, `${v.id}: periodsCharged`);
    assert.equal(typeof got.minimumNotYetMet, "boolean");

    // daysUntilCallBy must agree with the two dates it is derived from.
    assert.equal(addDays(v.today, got.daysUntilCallBy), got.callByDate, `${v.id}: daysUntilCallBy vs callByDate`);

    // basis: mandatory, plain English, one line per input used.
    assert.ok(Array.isArray(got.basis) && got.basis.length >= 6, `${v.id}: basis too thin`);
    for (const line of got.basis) {
      assert.equal(typeof line, "string");
      assert.ok(line.trim().length > 0, `${v.id}: empty basis line`);
      assert.ok(/[.?]$/.test(line.trim()), `${v.id}: basis line is not a sentence: ${line}`);
    }
    assert.ok(
      got.basis.some((l) => l.includes(v.terms.onHireDate)),
      `${v.id}: basis must state the on-hire date the user entered`
    );
    assert.ok(
      got.basis.some((l) => l.includes("Reading from the notice period")),
      `${v.id}: basis must label the notice reading`
    );
    assert.ok(
      got.basis.some((l) => l.includes("Reading from the minimum hire period")),
      `${v.id}: basis must label the minimum-period reading`
    );
    for (const needle of v.expectBasisIncludes || []) {
      assert.ok(got.basis.some((l) => l.includes(needle)), `${v.id}: basis should contain ${JSON.stringify(needle)}`);
    }

    // chargedToDate must agree with the window on the same inputs.
    const charged = chargedToDate(v.terms, v.today);
    assert.equal(charged.periods, got.periodsCharged, `${v.id}: chargedToDate.periods`);
    assert.equal(charged.pence, got.chargedToDatePence, `${v.id}: chargedToDate.pence`);
    assert.equal(charged.pence, charged.periods * v.terms.ratePence, `${v.id}: pence arithmetic`);
    assert.ok(Array.isArray(charged.basis) && charged.basis.length >= 3, `${v.id}: chargedToDate.basis`);

    // Determinism and purity: same inputs, same outputs, inputs untouched.
    const frozenTerms = JSON.parse(JSON.stringify(v.terms));
    const again = offHireWindow(v.terms, v.today);
    assert.deepEqual(again, got, `${v.id}: not deterministic`);
    assert.deepEqual(v.terms, frozenTerms, `${v.id}: terms were mutated`);
  });
}

test("no output field anywhere reads as a verdict", () => {
  const banned = [
    "iscompliant", "issafe", "islate", "ok", "pass", "passed", "fail", "failed",
    "expired", "overdue", "valid", "invalid", "status", "verdict", "breach", "late",
  ];
  for (const v of suite.vectors) {
    if (v.expect.throws) continue;
    const keys = Object.keys(offHireWindow(v.terms, v.today));
    for (const key of keys) {
      assert.ok(!banned.includes(key.toLowerCase()), `${v.id}: verdict-shaped field ${key}`);
    }
  }
  const chargedKeys = Object.keys(chargedToDate(suite.vectors[0].terms, suite.vectors[0].today));
  assert.deepEqual(chargedKeys.sort(), ["basis", "pence", "periods"]);
  const recordKeys = Object.keys(offHireRecord({})).sort();
  assert.deepEqual(recordKeys, ["lines", "text"]);
});

// The banned strings from validation/OFFER.md, held here only as a checklist so the engine source
// is scanned automatically. If this test fires, the engine wording changed, not this list.
test("no banned string from OFFER.md appears in the engine source or its comments", () => {
  const bannedStrings = [
    "compliant", "compliance guaranteed", "legally compliant",
    "safe to use", "safe", "passed", "certified", "approved",
    "qualified to work", "qualified",
    "legal advice", "we advise", "you must", "you are required to",
    "we will off-hire for you", "automatic off-hire", "we contact the hirer",
    "guaranteed savings", "recover your money", "claim back",
    "no risk", "free money",
    "apple", "app store", "iap", "offer code",
  ];
  const lower = engineSource.toLowerCase();
  for (const s of bannedStrings) {
    assert.ok(!lower.includes(s), `engine source contains banned string ${JSON.stringify(s)}`);
  }
  // The same scan over everything the engine emits at runtime.
  const emitted = suite.vectors
    .filter((v) => !v.expect.throws)
    .flatMap((v) => offHireWindow(v.terms, v.today).basis)
    .join("\n")
    .toLowerCase();
  for (const s of bannedStrings) {
    assert.ok(!emitted.includes(s), `basis output contains banned string ${JSON.stringify(s)}`);
  }
});

test("the engine imports nothing and never reads the clock", () => {
  // Scan the code, not the prose: the file's own header comment mentions the clock call it avoids.
  const code = engineSource.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  assert.ok(!/^\s*import\s/m.test(code), "engine must not import anything");
  assert.ok(!/require\s*\(/.test(code), "engine must not require anything");
  assert.ok(!/Date\.now|new Date\(|Date\.UTC|getTimezoneOffset|toLocale|process\./.test(code),
    "engine must do its own civil-date arithmetic and never touch the clock, a timezone or the host");
  assert.ok(!/readFile|writeFile|fetch\(/.test(code), "engine must do no I/O");
});

test("parseISO accepts real civil dates and refuses everything else", () => {
  assert.deepEqual(parseISO("2026-10-05"), { y: 2026, m: 10, d: 5 });
  assert.deepEqual(parseISO("2024-02-29"), { y: 2024, m: 2, d: 29 });
  assert.deepEqual(parseISO("2000-02-29"), { y: 2000, m: 2, d: 29 });
  for (const bad of [
    "2026-02-29", "2100-02-29", "1900-02-29", "2026-13-01", "2026-00-10", "2026-04-31",
    "2026-10-5", "26-10-05", "2026/10/05", "05/10/2026", "2026-10-05T09:00:00Z", "",
    " 2026-10-05", "2026-10-05 ", null, undefined, 20261005, {},
  ]) {
    assert.equal(parseISO(bad), null, `parseISO should refuse ${JSON.stringify(bad)}`);
  }
});

test("addDays rolls over month ends, leap days and years, and runs backwards", () => {
  assert.equal(addDays("2026-10-05", 0), "2026-10-05");
  assert.equal(addDays("2026-01-31", 1), "2026-02-01");
  assert.equal(addDays("2026-02-28", 1), "2026-03-01");
  assert.equal(addDays("2024-02-28", 1), "2024-02-29");
  assert.equal(addDays("2024-02-29", 1), "2024-03-01");
  assert.equal(addDays("2024-02-29", -1), "2024-02-28");
  assert.equal(addDays("2026-12-31", 1), "2027-01-01");
  assert.equal(addDays("2027-01-01", -1), "2026-12-31");
  assert.equal(addDays("2026-04-30", 1), "2026-05-01");
  assert.equal(addDays("2100-02-28", 1), "2100-03-01");
  assert.equal(addDays("2000-02-28", 1), "2000-02-29");
  assert.equal(addDays("2026-03-29", 1), "2026-03-30"); // British Summer Time begins; a civil date does not care
  assert.equal(addDays("2026-10-25", 1), "2026-10-26"); // clocks go back; still one day
  assert.equal(addDays("2026-01-01", 365), "2027-01-01");
  assert.equal(addDays("2024-01-01", 366), "2025-01-01"); // leap year
  assert.equal(addDays("2026-10-05", -365), "2025-10-05");
  assert.throws(() => addDays("2026-02-30", 1), TypeError);
  assert.throws(() => addDays("2026-10-05", 1.5), TypeError);
  assert.throws(() => addDays("2026-10-05", "1"), TypeError);
});

test("formatPence is the only currency formatter and never sees a float", () => {
  assert.equal(formatPence(0), "£0.00");
  assert.equal(formatPence(1), "£0.01");
  assert.equal(formatPence(99), "£0.99");
  assert.equal(formatPence(100), "£1.00");
  assert.equal(formatPence(4500), "£45.00");
  assert.equal(formatPence(35000), "£350.00");
  assert.equal(formatPence(123456), "£1,234.56");
  assert.equal(formatPence(1234567), "£12,345.67");
  assert.equal(formatPence(100000000), "£1,000,000.00");
  assert.equal(formatPence(2615550), "£26,155.50");
  assert.equal(formatPence(-123456), "-£1,234.56");
  assert.throws(() => formatPence(45.5), TypeError);
  assert.throws(() => formatPence("4500"), TypeError);
  assert.throws(() => formatPence(NaN), TypeError);
});

test("offHireRecord returns copy-ready text and computes nothing", () => {
  const { lines, text } = offHireRecord({
    hirer: "Marlow Plant Hire Ltd",
    machine: "1.5t mini excavator",
    assetRef: "EX-4471",
    offHiredAt: "2026-10-23 09:12",
    reference: "OH-88213",
    spokeTo: "Dave, hire desk",
    notes: "Collected from Gate 2.\nKeys left with site office.",
  });
  assert.equal(text, lines.join("\n"));
  assert.equal(lines[0], "OFF-HIRE RECORD");
  for (const needle of [
    "Marlow Plant Hire Ltd", "1.5t mini excavator", "EX-4471", "2026-10-23 09:12", "OH-88213", "Dave, hire desk",
    "Collected from Gate 2.", "Keys left with site office.",
  ]) {
    assert.ok(text.includes(needle), `record should carry ${needle}`);
  }
  assert.ok(text.includes("This is my own record of the off-hire call above."));
  // It invents nothing: no year appears that the user did not type.
  const years = [...text.matchAll(/\b(19|20|21)\d{2}\b/g)].map((m) => m[0]);
  assert.deepEqual([...new Set(years)], ["2026"]);
});

test("offHireRecord names missing fields instead of hiding them, and omits empty notes", () => {
  const { text } = offHireRecord({ hirer: "  Marlow Plant Hire Ltd  ", notes: "   " });
  assert.ok(text.includes("Hire company:"));
  assert.ok(
    text.split("\n").some((l) => /^Hire company: +Marlow Plant Hire Ltd$/.test(l)),
    "the entered value is trimmed, with only label padding before it"
  );
  assert.equal((text.match(/\(not entered\)/g) || []).length, 5);
  assert.ok(!text.includes("Notes:"));
  const empty = offHireRecord({});
  assert.equal((empty.text.match(/\(not entered\)/g) || []).length, 6);
  assert.ok(offHireRecord(null).text.includes("OFF-HIRE RECORD"));
  assert.ok(offHireRecord(undefined).text.includes("(not entered)"));
});

test("a long hire costs periods × rate with no float drift", () => {
  const terms = {
    onHireDate: "2020-01-06",
    chargePeriod: "week",
    ratePence: 1234567,
    minimumPeriods: 1,
    noticeDays: 2,
    chargesWeekends: true,
  };
  const { periods, pence } = chargedToDate(terms, "2026-10-24");
  assert.equal(periods, 355);
  assert.equal(pence, 355 * 1234567);
  assert.ok(Number.isInteger(pence));
  assert.equal(formatPence(pence), "£4,382,712.85");
});
