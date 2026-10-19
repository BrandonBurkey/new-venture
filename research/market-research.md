# Phase 1 — Market research

**Studio:** two people, one paid iOS app, one niche.
**Date:** 19 October 2026. **Branch:** `claude/venture-studio-ios-app-2ytfbe`.

---

## 1. Executive summary

We examined **48 niches** against weights written down before any evidence arrived, killed 44 of
them, and took four into full deep-dive. **All four deep-dives cut their own Phase 1 score.**
That is the single most useful outcome of this phase: the scouting was optimistic, the deep dives
were adversarial, and we now have four honest candidates instead of one flattering one.

**The recommendation is USCG mariner sea-service tracking, conditional on a $0 competitor check
that can be finished in one afternoon.** It is the only candidate where the missed admin stops
someone earning a living, and the only one whose core mechanic — counting qualifying days into a
rolling five-year window — creates a reason to open the app most days rather than once a year.

| | Niche | Bet | Price | Pain anchor (one occurrence) | Ratio |
| --- | --- | :-: | --- | --- | --- |
| **1** | **USCG mariner sea-service days** | **6.5/10** | $89/yr | $25,942 to requalify a lapsed credential (estimate) | **291×** |
| 2 | Government-contracting recert portfolio | 6/10 | $149/yr | $265,000 lost award + sunk proposal (estimate) | 1,779× |
| 3 | Motorsport dated safety gear | 6/10 | $39.99/yr | $1,185–$1,350 lost race weekend (estimate) | 30× |
| 4 | Startup equity date windows | 6/10 | $99/yr | $892,500 on one QSBS tier slip (estimate) | 0.011% of loss |

Note what the ratio column does **not** tell you. Govcon and equity have the biggest anchors and
the weakest buyers; the anchor is a probabilistic loss on an illiquid asset, which the equity
analyst correctly called "commercially inert". Mariner's anchor is smaller and far more real: it
is cash the captain pays out, in classroom fees, to get back to work.

**What I would do with your money:** take the mariner niche, spend one afternoon and $0 proving
the competitor does not already compute the rolling window, then spend about $700 and eight weeks
on the concierge and deposit tests before a line of Swift is written. If the competitor check
fails, pivot the same day to motorsport, which is the cheapest test in the set.

**What is not true yet.** No niche here has a verified willing buyer. Not one of the four produced
a verbatim customer quote about *paying*. That is what Phase 2 exists to find out, and the
thresholds are pre-committed so the answer cannot be argued with afterwards.

---

## 2. How this was done

Five research scouts ran in parallel across five clusters, covering **48 distinct niches** in
52 evaluations (four niches were examined twice, by scouts who did not see each other's work —
useful, because independent agreement is worth more than a single confident opinion).

The weights and the hard gates were written down **before any scout reported**, and are in
`research/scoring-rubric.md`. That matters: it is the difference between scoring and
rationalising.

| Criterion | Weight | Why this weight |
| --- | --- | --- |
| Pain $ — cost of one mistake | 25% | The price has to look trivial next to the mistake. This is the whole thesis. |
| Audience wealth | 15% | Pain without money is a hobby, not a business. |
| Competitive weakness | 20% | Second-best in a crowded niche is worth nothing at our scale. |
| v1 buildability | 15% | A week of build, or it is not this venture. |
| Reachability | 15% | Two people with no ad budget need a named place to stand. |
| Willingness to pay a subscription | 10% | Lowest weight, because it is the thing we test rather than guess. |

**Hard gates — any failure kills the niche at any score.** Not aviation and not a
previously-rejected niche; a public, free, stable rule set (nothing paywalled, nothing licensed);
single-user and phone-first; App-Store-safe framing; recurring use rather than once in a
lifetime; and not already nailed by a well-funded competitor.

### The honest limits of this research

This is the part most market-research documents leave out.

- **No primary source was readable.** The environment's network policy refused connections to
  every research host tried: `capterra.com`, `trustpilot.com`, `appfollow.io`, `apps.apple.com`,
  `reddit.com`, and every `.gov` host including `ecfr.gov`, `irs.gov`, `fmcsa.dot.gov` and
  `sba.gov`. Scouts could search, but could not open a page. **Every regulation, penalty figure
  and interval in this document is search-snippet evidence at best**, and is marked as such in
  the raw files. None of it is good enough to ship a rules engine on without expert sign-off.
- **No App Store survey was possible at all.** This is the most dangerous gap. Every
  "competitive weakness" score is provisional, and the first deep-dive proved the risk is real:
  it found two paid competitors in a niche both Phase 1 scouts had scored as near blue ocean.
- **The shared web-search budget ran out mid-research**, leaving parts of three clusters
  thinner than intended. The specific gaps are named per niche in `research/raw/`.
- **Verbatim customer quotes are sparse.** Forums were unreachable. Where a scout found no real
  quote it wrote "no verbatim complaints found" rather than paraphrasing into quotation marks.
  One niche (startup equity) has **zero** customer quotes, and its deep-dive says so.

Nothing here was invented to fill a gap. Where a figure is an estimate it is marked `(estimate)`
and the arithmetic is shown.

---

## 3. The pattern that killed 30 of 48 niches

Three kill patterns recurred so often they are worth stating as studio rules.

**1. Whoever owns the data gives tracking away free.** This killed more candidates than
everything else combined. CE Broker is free and in some states mandated. NCEES gives multi-state
professional-development tracking free inside the account every comity licensee already holds.
NABP's CPE Monitor auto-ingests credit and costs $15/yr. Zoetis gives EQStable away. SeaLog is
free. Levelset gives away 50-state lien calculators with Procore's money behind it. The useful
question turned out to be: **who writes the cheque for the mistake, and does somebody already get
paid to prevent it?**

**2. The employer pays, so the worker will not.** Crane operators, welders, wildland firefighters,
dielectric-glove inspections: real rules, real penalties, and an OSHA citation that lands on the
employer's desk. An individual will not subscribe to prevent their employer's fine.

**3. One-shot events cannot carry a subscription.** Section 1031 exchanges, probate, a single
83(b) filing. The pain is enormous and the professional who is already paid — the qualified
intermediary, the probate attorney, the tax preparer — sends the reminder free.

A fourth, narrower killer: **the core rule set is paywalled**. NFPA 25, AWS D1.1 ($570-760),
ANSI Z133 and parts of the SFI and FIA specification libraries are sold, not published. We
cannot licence data, so a niche whose intervals exist only inside a paid standard is out —
unless the dates come from the user's own property and the intervals are published free
elsewhere, which is the carve-out the motorsport candidate depends on.

---

## 4. Every niche, scored

Sorted by weighted score. Four niches appear twice, scored independently by two scouts; where
they disagree, the gap is itself information and is noted in the deep dives.

| # | Niche | Cluster | Pain $ | Wealth | Blue ocean | Build | Reach | WTP | **Weighted** | Verdict |
| ---: | --- | --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | --- |
| 1 | Startup equity date windows | cross-border | 5 | 5 | 4 | 5 | 4 | 3 | **4.45** | pursue |
| 2 | Motorsport dated safety gear | wildcards | 4 | 5 | 4 | 5 | 5 | 4 | **4.45** | pursue |
| 3 | Motorsport / HPDE track-car gear | assets | 4 | 4 | 5 | 5 | 5 | 3 | **4.40** | pursue |
| 4 | GovCon SAM.gov + recertifications | smb | 5 | 5 | 4 | 4 | 4 | 4 | **4.40** | pursue |
| 5 | USCG mariners: sea-service days | wildcards | 5 | 4 | 4 | 4 | 4 | 4 | **4.25** | pursue |
| 6 | USCG mariners: sea-service days | assets | 5 | 3 | 3 | 5 | 5 | 4 | **4.20** | pursue |
| 7 | DOT small fleets (1-6 trucks) | smb | 4 | 3 | 4 | 5 | 5 | 4 | **4.15** | pursue |
| 8 | Show horses / breed registry | assets | 4 | 5 | 3 | 4 | 5 | 4 | **4.10** | pursue |
| 9 | CDL owner-operators | credentials | 4 | 3 | 4 | 5 | 5 | 3 | **4.05** | pursue |
| 10 | Section 1031 exchange windows | cross-border | 5 | 5 | 3 | 5 | 3 | 2 | **4.00** | park |
| 11 | US immigration date traps | cross-border | 5 | 4 | 3 | 4 | 4 | 3 | **3.95** | kill |
| 12 | Canadian snowbirds | cross-border | 4 | 4 | 3 | 4 | 5 | 4 | **3.95** | pursue* |
| 13 | Locum tenens physicians | credentials | 5 | 5 | 2 | 4 | 3 | 3 | **3.75** | park |
| 14 | GovCon SAM.gov + recertifications | cross-border | 5 | 3 | 4 | 3 | 3 | 3 | **3.70** | park |
| 15 | Estate / trust fiduciary deadlines | cross-border | 5 | 5 | 3 | 4 | 2 | 2 | **3.70** | park |
| 16 | Show horses / breed registry | wildcards | 3 | 5 | 4 | 3 | 4 | 3 | **3.65** | park |
| 17 | Firearms collectors (NFA / C&R) | assets | 4 | 3 | 4 | 3 | 4 | 3 | **3.60** | park |
| 18 | Commercial real-estate critical dates | smb | 4 | 5 | 3 | 4 | 2 | 3 | **3.55** | park |
| 19 | Expat filing stack (FBAR/8938) | cross-border | 4 | 3 | 3 | 4 | 4 | 3 | **3.55** | park |
| 20 | Estate executors (probate) | wildcards | 5 | 4 | 4 | 2 | 2 | 3 | **3.55** | kill |
| 21 | Dated safety gear (dielectric/SCBA) | wildcards | 5 | 3 | 3 | 4 | 3 | 2 | **3.55** | kill |
| 22 | FEIE 330-day test | cross-border | 4 | 3 | 2 | 5 | 4 | 3 | **3.50** | park |
| 23 | Mechanics lien deadlines | smb | 5 | 4 | 2 | 2 | 4 | 3 | **3.45** | kill |
| 24 | Yacht & superyacht crew | wildcards | 4 | 3 | 3 | 4 | 3 | 3 | **3.40** | park |
| 25 | Classic / collector cars | assets | 2 | 5 | 3 | 5 | 4 | 2 | **3.40** | kill |
| 26 | GC subcontractor COIs | smb | 4 | 4 | 2 | 3 | 4 | 3 | **3.35** | kill |
| 27 | Commercial fishing vessel safety | wildcards | 3 | 3 | 4 | 4 | 3 | 3 | **3.35** | park |
| 28 | Crane operators / NCCCO | wildcards | 4 | 3 | 3 | 4 | 3 | 2 | **3.30** | park |
| 29 | Technical divers / dive pros | assets | 3 | 3 | 4 | 4 | 3 | 2 | **3.25** | park |
| 30 | Food trucks / caterers | smb | 3 | 2 | 4 | 4 | 4 | 2 | **3.25** | park |
| 31 | Dive instructors (PADI/SSI) | wildcards | 3 | 2 | 4 | 4 | 4 | 2 | **3.25** | kill |
| 32 | Western big-game draw deadlines | wildcards | 3 | 4 | 2 | 3 | 4 | 4 | **3.20** | kill |
| 33 | Recreational boat owners | assets | 3 | 3 | 2 | 5 | 4 | 2 | **3.15** | park |
| 34 | CRNAs / travel APPs | credentials | 3 | 4 | 2 | 4 | 4 | 2 | **3.15** | park |
| 35 | Pesticide applicator records | wildcards | 2 | 3 | 3 | 4 | 4 | 3 | **3.05** | kill |
| 36 | Pesticide applicator records | smb | 2 | 3 | 4 | 4 | 3 | 2 | **3.00** | park |
| 37 | Welders (AWS D1.1 continuity) | wildcards | 3 | 2 | 4 | 3 | 3 | 2 | **2.95** | kill |
| 38 | Multi-state CPAs | credentials | 2 | 4 | 2 | 4 | 4 | 2 | **2.90** | park |
| 39 | Dental / childcare records | smb | 2 | 4 | 3 | 3 | 3 | 3 | **2.90** | park |
| 40 | Purebred dog breeders | assets | 3 | 2 | 2 | 4 | 4 | 2 | **2.85** | kill |
| 41 | Medicare IRMAA / enrolment | cross-border | 3 | 2 | 2 | 4 | 4 | 2 | **2.85** | kill |
| 42 | Fire protection / backflow (NFPA) | smb | 3 | 3 | 3 | 2 | 3 | 3 | **2.85** | kill |
| 43 | Non-US residency regimes (UK SRT) | cross-border | 3 | 4 | 2 | 2 | 3 | 3 | **2.80** | kill |
| 44 | Mental health compacts | credentials | 2 | 2 | 3 | 4 | 4 | 2 | **2.80** | kill |
| 45 | Wildland fire / EMS quals | wildcards | 2 | 2 | 4 | 3 | 4 | 1 | **2.75** | kill |
| 46 | Vets / dentists / optometrists | credentials | 3 | 4 | 3 | 2 | 2 | 2 | **2.75** | park |
| 47 | Insurance adjusters (multi-state) | credentials | 3 | 2 | 3 | 3 | 3 | 2 | **2.75** | park |
| 48 | OSHA 300A posting | smb | 2 | 3 | 3 | 5 | 2 | 1 | **2.70** | kill |
| 49 | Art & collectibles riders | assets | 2 | 5 | 2 | 3 | 2 | 3 | **2.70** | kill |
| 50 | PEs / architects (multi-state) | credentials | 3 | 3 | 1 | 4 | 3 | 2 | **2.65** | kill |
| 51 | HOA / property managers | smb | 2 | 3 | 3 | 3 | 3 | 2 | **2.65** | kill |
| 52 | Pharmacists (multi-state) | credentials | 2 | 3 | 1 | 3 | 3 | 1 | **2.15** | kill |

52 evaluations across 48 distinct niches.

---

## 5. The four finalists

Each has a full deep-dive file with the complete Value Equation, Grand Slam Offer, Lean
hypotheses, experiment thresholds, 7-8 feature v1 spec with onboarding and paywall placement,
competitor table and channel list. What follows is the decision-level summary.

### 5.1 USCG mariner sea-service days — `research/deep-dive-mariner.md` (744 lines)

**Thesis.** A charter captain's permission to earn is gated not by a date but by a *rolling count
of qualifying service days*, computed from rules they have never read, from records in a shoebox,
five years after the days were worked. Reactivating a fully expired licence runs **"between
$12,100 and $43,710 in class fees and between 39 and 124 days of classroom instruction"**
(OMSA, via WorkBoat, `[snippet-quoted]`, corroborated by three outlets).

**ICP.** The owner-operator OUPV / Master under-100GT captain who is the only person keeping
their own logbook.

**Value Equation.** Dream outcome: never discover at renewal that the days are short. Perceived
likelihood: it is their own logged data, computed against cited regulation, exported as a dated
per-period PDF. Time delay: a day count in under 90 seconds. Effort: honest — this demands a
near-daily logging habit, and that is precisely the risk.

**Offer.** *360 Ledger — Sea-Service Day Log for USCG-Credentialed Mariners.* **$89/yr** pushed,
$12.99/mo. Anchor: $12,100 class fees + 39 days × $354.92/day of lost earnings (BLS May 2023
median $88,730 ÷ 250) = **$25,942 (estimate)** = 291× the annual price. Annual is pushed because
a lapsed month puts a permanent hole in a five-year ledger.

**Riskiest assumption.** That a working captain logs a day, nearly every day, for years, when the
payoff is five years away. It cannot be tested in under 30 days, has no workaround, and if false
it kills the subscription rather than a feature.

**MVP, no Swift.** A two-day adversarial teardown of the free incumbent using a deliberately
awkward 311-day record; a landing page with a free browser day-counter; a **$49 hand-built
five-year reconstruction** delivered as a dated PDF in 72 hours; and a **30-day daily-SMS logging
probe with 20 buyers** — a zero-code simulation of the one feature the subscription depends on.
Seven experiments, **≤$720 cash**, kill date **14 December 2026**.

**Two corrections this deep-dive made to Phase 1, both important:**
1. **The brief's core mechanic was wrong.** 46 CFR 10.107(b) defines a qualifying day as **8
   hours**; the "4 hours" figure is a floor on a *shortened* day for vessels under 100 GRT, and
   the regulation does not say "underway". The 4-hours-underway line traces to a licensing
   consultancy's marketing page. Every rule, vector and string must be rebuilt on the corrected
   reading — which is *more* intricate, and therefore a better reason for software to exist.
2. **The field is more crowded than scouting knew.** Two competitors nobody found: **Sea Service**
   (App Store id6473282537) already *charges a subscription* for sea-day logging with "milestone
   tracking toward ticket eligibility", and **Maritime Logs** already stores on device, which
   undercuts part of our privacy wedge. Blue-ocean score cut from 4 to 3.

**The gate.** Across five search passes, nothing indicates the free incumbent (SeaLog) computes a
*window*. It logs days, stores certificates, reminds, and exports a USCG-form-shaped spreadsheet.
**Unresolved, and it is the gate: if the day-one check finds window arithmetic, drop the niche
that day.**

**Verdict: pursue, conditional. 6.5/10.**

---

### 5.2 Government-contracting recertification portfolio — `research/deep-dive-govcon.md` (997 lines)

**Thesis.** An owner-run federal contractor's right to *win work* is gated by a date portfolio no
system owns: a registration clock that silently restarts whenever they touch their own record, an
8(a) anniversary, triennial HUBZone and WOSB windows, a 14-day CPARS comment clock, and a separate
registration for each joint venture.

**ICP.** The **owner** of a 1-50 person contractor doing $500k-$20M in federal revenue, with no
compliance department.

**Offer.** *Recert Register.* **$149/yr** or $19/mo, 14-day trial. Anchor: one lost award
$250,000 (estimate) + $15,000 sunk proposal (estimate) = $265,000 = 1,779×. **The one hard
willingness-to-pay signal in the entire research set lives here:** this market already pays
**$399/yr** to third parties to do a renewal that is free.

**Three findings that reshaped this niche:**
1. **The fear pitch is legally obsolete.** Both scouts anchored on *GAO, TLS Joint Venture*
   B-422275, where a one-day lapse lost an award. An interim rule at **89 FR 89472 (12 Nov 2024,
   FAR Case 2024-002)**, adopted final in FAC 2025-05, reportedly requires registration only at
   offer submission and at award, not continuously between. All `[snippet-only]`; acquisition.gov
   was unreachable. It does not kill the niche, but we may not sell on that fear.
2. **The free alternative is strictly better than us on the main hook.** GSA alerts at 60/30/15
   days computed from the real record. Our number would be manually entered. On registration
   renewal alone we would be selling worse data against free better data — **a hard gate failure.**
   Only the wider portfolio (HUBZone triennial, 8(a) anniversary, CPARS 14-day, JV existence)
   survives, and that part has no incumbent of any kind.
3. **Two widely-repeated "facts" are out of date.** HUBZone is now **triennial** (annual recert
   eliminated, Dec 2024) and WOSB's annual attestation was **repealed in May 2023**. Any
   "annual recertification" copy would be wrong.

**Riskiest assumption.** Not price and not build: that owners actually hold a *wrong date*.

**MVP.** Landing page, $25 refundable deposit, and **20 concierge "date audits"** — the owner
shares their own record, the founder computes the real renewal date aloud, and the measurement is
**the delta in days against what the owner wrote down beforehand**. ~$75-200, 18 hours, 14 days.
Kill date **16 November 2026**.

**Biggest kill risk.** This buyer expects a **consultant, not an app**. Revealed preference is
$399/yr for labour; the free alternative is also a human. Two research phases produced **zero**
owner-voice complaints. Indicator: more than half of audit participants ask "can you just do it
for me?"

**Verdict: pursue, conditionally and cheaply. 6/10.** Weakest reachability of the four: channels
are named but all gatekept, with no verified posting rules.

---

### 5.3 Motorsport dated safety gear — `research/deep-dive-motorsport.md` (953 lines)

**Thesis.** A club racer's weekend legality is decided by two digits punched on a tag they own
against an interval their sanctioning body publishes free — and the intervals differ between
bodies. Fail technical inspection and a $495-$650 entry (three 2026 SCCA Majors listings) plus
tow, hotel and food is gone: **$1,185-$1,350 (estimate, about half sourced)**. Known in time, the
fix is cheap: $124.99-$159.95 to recertify a fire bottle. Known too late, it is $400-$700 for a
new system, or +$100 for same-day rush.

**ICP.** The **licensed club racer** with five to eight dated items and a hard gate. HPDE
track-day drivers are a separate, weaker segment — one or two dated items and soft enforcement —
and should be a free feeder, not the buyer.

**The paywall carve-out holds, and this was the gate.** The two-year harness and fire-bottle
intervals are each free-sourced from three to four independent non-paywalled pages, and Snell's
five-year cycle is in its own free press release. **We never need to ship SFI specification text.**
The real residual risk is not the paywall but **rule drift**: free sources contradict each other
on helmet service life (10 vs 12 vs 15 years) and on how the harness clock is counted (anniversary
vs 31 December of the second year — a difference of up to 11 months). The mitigation is
architectural: per-body intervals, a source URL and `rules_as_of` date on every row, conflicts
shown and attributed, and a custom-interval override.

**Offer.** *Never Lose a Weekend* — App Store name **Paddock Dates**. **$39.99/yr** or $6.99/mo,
30× one avoided weekend. The analyst is honest that the anchor supports about $60/yr at most and
explicitly rejects $99.

**Riskiest assumption.** That a club racer will pay *anything*, when the tag, the inspector, the
logbook and free forum checklists already exist.

**MVP.** A free browser check — "does anything on my gear land before my next event?", three
fields, under 45 seconds — then a hand-built **pre-season gear-date review for 25 drivers** (the
founder reads tag photos and returns a one-page PDF, about 45 minutes each, $0 cash), then a $20
refundable deposit. **Total cash to go/no-go: $215-$415.** Kill date **14 December 2026** on fewer
than 25 deposits from 400+ qualified visitors.

**Biggest kill risk.** The pain is too cheap to subscribe to. Structurally worse: **dates are
entered once a year, so there is almost nothing to retain.** There is a pre-committed pivot to a
one-time $19.99-$29.99 purchase if off-season re-engagement falls below 40%.

**Also corrected:** three adjacent iOS apps surfaced that scouting missed — **GridMate** (free
plus IAP, pre-track checklists, next-due reminders), **RacePrep** ($7.99/mo or $59.99/yr) and
**RaceIQ Track Day**. None appears to do gear dates, but the reminder engines exist and the price
anchor is set. Wealth was cut from 5/4 to **3 (inferred)**; growth scored **2/5 and unsourced**,
with SCCA's own CEO calling mid-2025 metrics "somewhat under what leadership had hoped for".

**Verdict: pursue as a cheap, hard-gated experiment. 6/10.** The analyst's own summary is worth
repeating: *good first app, small business.*

---

### 5.4 Startup equity date windows — `research/deep-dive-equity.md` (575 lines)

**Thesis.** Equity is the user's largest asset, and its value is gated by statutory date intervals
living on documents nobody is custodian of across a career. Issuer platforms lose the person at
termination; advisory starts around $5,000/yr and qualifies our buyer out.

**I asked this analyst to attack three reservations rather than flatter the idea. The answers:**

1. **Discovery timing kills the headline, not the niche.** We cannot reach a stranger inside their
   30-day filing window, and the reachable ones are already covered — Carta auto-generates the
   form and emails founders the days remaining; Clerky ships pre-filled forms with reminders. The
   reminder is *structurally* issuer-owned, because the issuer hands over the grant. What remains
   — per-block QSBS tiers, post-termination windows, disqualifying dispositions — is the better
   business anyway, and recent legislation tripled the number of dates per block.
2. **"Expects free" is the live kill risk, and the deep-dive made it worse.** It found the indie
   competitor scouting had flagged as its blind spot: **Vestyx** (App Store id6766111969), free
   with in-app purchase, unlimited grants *and employers*, all grant types, vest-day
   notifications, on device. No rating, no visible traction. Either the category is unmonetisable,
   or Vestyx tracks the wrong axis — and the analyst says plainly it cannot tell from here, and
   that the difference is the whole business.
3. **The advice line does not kill it, but it removes the features that would justify a price.**
   Cut as wrong-side: every dollar figure, every eligibility determination, every recommendation,
   scenario modelling, and all facts-and-circumstances exceptions. Vestyx's *paid* tier is
   precisely our forbidden list. So the product must be sold on dread alone.

**Offer.** *Grant Clock*, $99/yr or $12.99/mo. The honest note matters more than the anchor: this
audience plausibly pays $20-60 (estimate), and $99 is not greed but necessity — with no free
channel, $49 cannot absorb any acquisition cost. So "will they pay $99" is identical to "is this
a business".

**Why I rank it fourth despite it tying for the top weighted score.** It fails our reachability
requirement most clearly. There is no community channel: Reddit is blocked at two layers, Hacker
News and Blind are hostile to self-promotion, and the analyst's honest route is startup
accountants and lawyers as referrers. Its own arithmetic reaches **40-60 paying users in six
months, not 100.** For a two-person studio with no ad budget, that is the gate.

**Verdict: pursue conditionally, 6/10 — but park it behind the other three on channel grounds.**
If chosen, the day-one experiment is $10: install Vestyx and see whether it already tracks three
or more statutory windows with notifications.

---

## 6. The recommendation, and the reasoning

**Build the mariner app. Gate it on a $0 competitor check first.**

1. **It is the only candidate where the mistake stops income.** Motorsport costs a hobby weekend.
   Govcon and equity cost a probabilistic loss on an asset. A captain with a lapsed credential
   cannot work, and pays cash in classroom fees to fix it.
2. **It is the only one with a genuine reason to open the app.** Logging a day is a daily act.
   Motorsport's data is entered once a year — its own analyst named that as a structural retention
   problem with a pre-committed pivot away from subscription. Govcon's dates are annual or
   triennial.
3. **The price-to-pain ratio is real money, not notional.** 291× against cash the captain actually
   pays out.
4. **The rules are free, federal and finite.** No paywalled standard, no licensed dataset, no
   fifty-state fan-out, no federal system to read. This is the cleanest pass through our hard gates.
5. **One named, cheap channel exists** where this audience already gathers.

**What makes me uneasy, stated plainly.** The riskiest assumption — that the logging habit forms —
is the slowest and most expensive of the four to test, and it cannot be shortened. The corrected
8-hour rule means the regulatory reading in this document is already one generation better than
the brief's and still unverified against a primary source. And a paid competitor exists whose
feature list sounds uncomfortably close to ours.

**The fallback is motorsport**, because it is the cheapest and fastest test in the set and the
most reachable audience. If the day-one competitor check kills the mariner niche, I would pivot
there the same day rather than come back for a second gate.

---

## 7. Honest downsides of this whole phase

- **The evidence is thin by construction.** No primary source was readable, no App Store was
  searchable, and the deep dives found paid competitors in **three of four** niches that scouting
  had scored as near blue ocean. Assume there are more.
- **There is no verified customer voice about money anywhere in this research.** We have evidence
  that the pain is real in three niches. We have none that anyone pays to remove it, except the
  govcon market's $399/yr renewal services — which is evidence they pay for *labour*, not software.
- **Every regulation in here is unverified.** The mariner deep-dive already overturned the brief's
  central rule. Expect more of that, and budget for an expert.
- **Two of the four candidates are small businesses even when they work.** Motorsport at $39.99/yr
  and equity at 40-60 users in six months will not pay two salaries.
- **The scoring is only as good as its inputs.** The weights were locked before the evidence,
  which protects against rationalising, but it cannot rescue scores built on snippets.

## 8. What must be verified before any code is written

| # | Item | Who | Cost |
| --- | --- | --- | --- |
| 1 | App Store search on the chosen niche, by hand, on a phone | Founder, 10 min | $0 |
| 2 | Does the free incumbent compute a rolling window, or only log days? | Founder or analyst, 1 afternoon | $0 |
| 3 | 46 CFR 10.107 / 10.232 read against the actual regulation, not a snippet | Domain expert | paid |
| 4 | A licensed professional in the domain signs off every engine rule | Domain expert | paid |
| 5 | Three attributable customer quotes about the cost of the mistake | Concierge interviews | $0 |
| 6 | Widen this environment's network allowlist so primary sources are readable | Founder, 5 min | $0 |

---

## 9. Index of the full research

| File | What is in it |
| --- | --- |
| `research/scoring-rubric.md` | Weights and hard gates, locked before any evidence arrived |
| `research/deep-dive-mariner.md` | 744 lines: value equation, offer, hypotheses, 7 experiments, 8-feature v1 spec, string audit, engine rules with citations, competitor teardown, channels |
| `research/deep-dive-govcon.md` | 997 lines: the FAR finding, the hard-gate answer, offer, MVP, 7-feature v1 spec, engine rules |
| `research/deep-dive-motorsport.md` | 953 lines: carve-out verification, starving-crowd scorecard, offer, MVP, 7-feature v1 spec, channels |
| `research/deep-dive-equity.md` | 575 lines: the three reservations answered, the advice line drawn, 8-feature v1 spec, 11 engine rules, CPA sign-off list |
| `research/raw/scout-1-assets.md` | 9 niches: boats, mariners, horses, firearms, classic cars, art, dogs |
| `research/raw/scout-2-credentials.md` | 9 niches: locums, CRNAs, pharmacists, compacts, adjusters, PEs, CDL, vets |
| `research/raw/scout-3-crossborder.md` | 10 niches: FEIE, snowbirds, expat filing, 1031, equity, immigration, estates |
| `research/raw/scout-4-smb.md` | 11 niches: liens, COIs, NFPA, HOAs, govcon, food trucks, fleets, clinics |
| `research/raw/scout-5-wildcards.md` | 13 niches: motorsport, mariners, welders, cranes, divers, fire, pesticide, executors |
