# Deep dive — Motorsport dated safety equipment & annual tech

**Niche:** Amateur racers and track-day drivers tracking dated safety equipment and annual technical inspection.
**Date:** 2026-10-19 · **Author:** research analyst (sub-agent) · **Phase:** 2 (deep dive after Phase 1 scoring)
**Phase 1 provenance:** scored highest in two independent clusters — Scout 5 §6 (27/30, "PURSUE (top pick)") and Scout 1 Wildcard A (26/30, "PURSUE (cheapest test)").

---

## 0. VERIFICATION LEGEND AND RESEARCH CONDITIONS

Markings are carried forward from the raw scout files and are **never upgraded**. Nothing in this
document is promoted from snippet to verified.

| Marking | Meaning |
|---|---|
| `[snippet-only]` | A real string pulled by a search index off a real page; the page itself was never opened. Medium confidence. |
| `[snippet-quoted]` | As above, where the search snippet presented the text inside quotation marks. |
| `[paraphrase — NOT verbatim]` | The snippet paraphrased; the words are not the poster's. Must never be shown as a quote. |
| `(estimate)` | Our arithmetic, shown. Not a sourced figure. |
| `[GAP]` | Could not be sourced. Recorded, not filled. |
| `[analyst-2026-10-19]` | Found by this deep dive in this run, snippet-level only (see below). |

**My own tooling conditions this run, stated so the founder can discount accordingly:**
- `WebSearch` **worked** (10 searches run). `WebFetch` **failed with `getaddrinfo ENOTFOUND` on every host tried** (`www.scca.com`, `sfifoundation.com`). So I, like both scouts, **never opened a single primary page**. Every `[analyst-2026-10-19]` item below is search-snippet evidence of the same class as the scouts' — it adds *new* facts at the *same* confidence level, it does not raise anyone's confidence.
- `apps.apple.com` could be seen in **search results** but not fetched. I therefore now have App Store **listing IDs and snippet-level prices** for adjacent apps that Scout 5 could not get. This is the single most important change from Phase 1 and it **weakens** the blue-ocean claim (see §10).
- No forum thread was opened. **There are still zero verified verbatim racer complaints in this niche.** Every quote in §4a is marked.

---

## 1. THESIS AND ICP

**Thesis.** A licensed US club racer owns a stack of safety equipment whose legality is decided by
two digits punched on a tag — an SFI month/year on the harnesses and the fire bottle, a Snell year
on the helmet label — and by a sanctioning body's published interval that differs from the body
down the road. The dates are not secret and the intervals are not secret; they are simply spread
across a label the driver cannot read from the driver's seat, a rulebook they read once a year, and
a trade article they read never. The failure is binary and gate-enforced: you arrive at tech having
already paid a $495–$650 entry (sourced, §3) plus tow, fuel and hotel, and a date that rolled over
in February costs you the June weekend. The fix is almost always cheap *if you know in time* — a
harness recert at roughly half the price of new belts, a fire-bottle service at $124.99–$350
(sourced, §3) — and expensive or impossible if you find out at the gate. The product is a private
record of the dates on the driver's own gear, plus a free, published interval per sanctioning body,
plus arithmetic against their own event calendar, surfaced as a notification in the off-season and
a printable sheet for the tech shed. No backend, no accounts, no licensed data, no verdict.

**ICP, one line.** The **licensed SCCA/NASA/NHRA/vintage club racer** who owns the car and the full
dated gear set — helmet, harnesses, suit, HANS/FHR, window net, fire system, fuel cell — and who
personally stands in front of a tech inspector several times a season.

**Why the club racer and not the HPDE driver.** This is the sharpest segmentation call in the file
and Phase 1 blurred it.

| | Licensed club racer (**the buyer**) | HPDE / track-day driver (**weaker, secondary**) |
|---|---|---|
| Dated items owned | 5–8 (helmet, harnesses, suit, FHR, net, fire bottle, fuel cell, car logbook/annual) | Typically **1–2** (helmet; maybe harnesses if the car is caged) |
| Gate | Annual tech + per-event tech, logbook-based. SCCA Time Trials: "annual inspection is optional and can be shown by a sticker, card, or logbook" `[analyst-2026-10-19, snippet]` — https://timetrials.scca.com/pages/vehicle-inspection | Event-by-event, inconsistent |
| Enforcement of dates | Hard. An inspector "checked only the helmet and belt dates and never looked at the car itself" `[paraphrase — NOT verbatim]` — https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/ | Soft. "most, but not all clubs and tracks allow expired race harnesses for HPDE" `[snippet-only]` — https://nomoneymotorsports.com/2019/03/11/post-28-a-few-more-tech-tips/amp/ ; NASA (as quoted on a marque forum): "harnesses that are expired for racing may be used providing that they are in at least very good condition" `[snippet-only]` — https://s2ki.com/forums/s2000-racing-competition-11/harddog-roll-bar-ok-trackdays-713782 |
| Annual admin | Logbook, annual tech, competition licence renewal, membership renewal | Membership only |
| Verdict | **Buyer.** Multiple dated items × hard gate × recurring season = a real subscription. | **Separate and weaker segment.** One dated item and a soft gate is a free-reminder problem, not a paid one. |

**Consequence for the product:** build and sell for the licensed racer. Let the HPDE driver in free or
on the same paywall but **do not design onboarding around them** — a one-helmet user has no reason
to renew. Treat HPDE as a top-of-funnel feeder (they graduate into club racing) and as the audience
for the free browser check in §6, not as the paying ICP.

---

## 2. VALUE EQUATION (Hormozi)

> Value = (Dream outcome × Perceived likelihood of achievement) ÷ (Time delay × Effort and sacrifice)

### Dream outcome — in the customer's words
The customer does not say "compliance". The nearest real language we have is a published racer's
article title, which is the dream outcome stated as a negative: **"how to minimize expensive
maintenance and avoid being surprised at tech inspection this year"** `[snippet-only]` —
https://nomoneymotorsports.com/2023/02/02/a-budget-racers-fire-system-shopping-guide-how-to-minimize-expensive-maintenance-and-avoid-being-surprised-at-tech-inspection-this-year/

Stated positively, in their register: **"I roll through tech, get the sticker, and go drive."**
Secondary dream outcome, sourced from the same cost structure: **"I spend the gear money in
January when it's cheap, not in June when it's an emergency."**

`[GAP]` We have **no verified verbatim quote** of a racer stating this outcome in their own words.
The MVP interviews in §6 exist partly to buy that quote.

### Perceived likelihood of achievement — what makes them believe it
Three concrete mechanisms, in priority order:
1. **It's their own gear and their own dates.** Nothing is asserted about equipment we have never
   seen. The screen reads back what they typed next to the interval and the date it lands on. This
   is the same credibility mechanism that made the prior app's "All items current?" defensible.
2. **Every interval cites a free, public, named source, in-app, with the URL and a "rules as of"
   date.** Not "trust us" — "SCCA publishes this here; here is the line; tap to open it." Where
   sources disagree (and on helmet life they demonstrably do — see §9) the app shows **both** and
   names the bodies, rather than picking a winner.
3. **A pre-tech checklist that mirrors what the inspector actually asks.** The strongest evidence we
   have about inspector behaviour is that they check *dates on helmet and belts* first
   `[paraphrase — NOT verbatim]`, https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/ .
   A sheet ordered the way the inspector works is a believability device, not just a feature.

**Deliberately excluded to keep likelihood honest:** no "you will pass", no green tick labelled
"compliant", no sanctioning-body logo. See §4d and §8.

### Time delay — how fast the first value lands
- **Free browser check (pre-app, §6): under 60 seconds.** Three fields — helmet Snell year, harness
  punch month/year, next event date — and the page returns the three dates and which one lands
  before the event. Target **< 45 seconds**, measured.
- **In-app, first gear item: under 30 seconds** (type two fields, see the expiry date and the
  days-to-event number). This is the named aha in §8.
- **Full value (whole gear set + season): 6–9 minutes, once.** That one sitting is the real ask.

### Effort and sacrifice
**What we remove:** finding the tag; decoding a punch tag; remembering which of SCCA/NASA/NHRA
applies this weekend; holding six dates in your head against a 7-event calendar; remembering in
January what expires in June; re-deriving the whole thing next season.

**What we still require, and we should say it out loud in onboarding:**
1. **Entering the gear dates once** — the irreducible cost. 5–8 items × 2–3 fields. Mitigations:
   type-ahead for make/model, "same date as" duplication for a matched harness set, and the order
   of entry chosen so the two highest-value items (helmet, harnesses) come first and the aha fires
   before the tedium starts.
2. **Physically going and looking at the tags once.** Non-removable. Onboarding says "go to the
   garage with your phone — this takes one trip."
3. **Confirming their sanctioning body.** One tap, and it is re-askable per event.
4. **Re-entering a date when gear is replaced or recertified** — a few times a year, 20 seconds.

**How the product maximises the numerator and minimises the denominator:** the numerator is
maximised by anchoring the outcome to a *weekend already paid for* (not to abstract safety) and by
making every number traceable to a free public source the user can open. The denominator is
minimised by putting the aha before the paywall and before the bulk of data entry (§8), and by
making the recurring cost of ownership close to zero — the app's job after week one is to be silent
until 90 days before something lands, which is the opposite of an engagement product.

**Honest weakness in the equation:** the dream outcome is *avoidance of a bad weekend*, not gain.
Avoidance outcomes price lower than gain outcomes. This caps the price (§4e) and it is the single
reason I do not score this niche higher than I do.

---

## 3. STARVING CROWD TEST

### 3a. Massive pain — **3 / 5. Real, dated, gate-enforced, and genuinely not a livelihood.**

I am going to be hard on this, because Phase 1 scored it 4 and I think 4 is generous.

**The honest cost of one occurrence is one lost race weekend.** Nobody loses a job, a licence, a
house or a business. A professional's livelihood is not at stake — by construction, this is an
*amateur* audience. The loss is discretionary money and a weekend of a hobby, and the emotional
load (embarrassment at the tech shed, a season championship point you cannot get back) is real but
is not insurable-grade pain.

**Arithmetic for one occurrence (estimate), built only on sourced components where they exist:**

| Component | Amount | Source / basis |
|---|---|---|
| Entry fee, 2-day SCCA Majors weekend | **$495 – $650** | **Sourced** `[analyst-2026-10-19, snippet]`: Roebling Road SEDIV Majors 2026 listed at $495 — https://www.motorsportreg.com/events/2026-sediv-double-majors-sarrc-roebling-road-raceway-scca-southeast-860394 ; Ozarks Lakefest Majors 2026 at $550 — https://tvrscca.motorsportreg.com/events/ozarks-lakefest-majors-2026-hosted-by-kvrg-international-raceway-scca-kaw-386751 ; Texas Winter Sprints Majors 2026 at $650 two-day — https://atlantarace.motorsportreg.com/events/texas-scca-winter-sprints-majors-eagles-canyon-raceway-club-racing-233676 |
| Compliance fee / Runoffs fund (where applicable) | $20 – $30 | Same Texas listing (`$30 compliance fee per entry`, `$20 Runoffs Appearance Fund`) `[analyst-2026-10-19, snippet]` |
| Tow / fuel, 300-mile round trip with trailer | **$250** `(estimate)` | 300 mi ÷ 10 mpg towing × $4.50/gal ≈ $135, plus truck wear and tolls. **Not sourced.** |
| Lodging, 2 nights | **$300** `(estimate)` | $150/night near a circuit. **Not sourced.** |
| Food / consumables for the weekend | **$120** `(estimate)` | **Not sourced.** |
| **Sunk, unrecoverable if turned away** | **$1,185 – $1,350** `(estimate)` | Sum of the above. Entry is the only sourced line; roughly **40–55% of the total is sourced**, the rest is our arithmetic. |
| Tyres already scrubbed / consumed in transport | $0 | Honest: tyres are not consumed if you never run. Excluded on purpose. |
| Time off work | **excluded** | `[GAP]` We have no income figure (§3b), so an hourly rate would be invented. Excluded rather than guessed. |

**The second, nastier arithmetic — the fire bottle found out too late:**

| Component | Amount | Source |
|---|---|---|
| Routine biennial fire-bottle recert, done in time | **$124.99 – $159.95** | **Sourced** `[analyst-2026-10-19, snippet]`: Discovery Parts lists SPA AFFF electrical-actuator refill & recertify at **$159.95** and states SPA AFFF systems "must be inspected and re-certified every two years" — https://discoveryparts.com/products/spa-technique-afff-refill-re-certify-electrical-actuator ; BimmerWorld lists Lifeline Novec/FK bottle service at **$124.99 – $819.99** and that service and certification "is required for Lifeline fire systems every two years, or whenever they have been triggered" — https://www.bimmerworld.com/Safety-Race-Interior/Fire-Safety/Lifeline-Novec-Fire-Bottle-Refill-Recertification.html ; a racer's guide puts a service in "the $125-350 range" and notes bottles "require hydro testing after 5 years" — https://nomoneymotorsports.com/2023/02/02/a-budget-racers-fire-system-shopping-guide-how-to-minimize-expensive-maintenance-and-avoid-being-surprised-at-tech-inspection-this-year/ |
| Same-day rush surcharge, because you left it to race week | **+$100** | **Sourced** `[analyst-2026-10-19, snippet]`: Discovery Parts "additional $100 charge" for same-day rush at its Georgia store — https://discoveryparts.com/products/spa-technique-afff-refill-re-certify-electrical-actuator |
| Shipping both ways, expedited | **$80** `(estimate)` | **Not sourced.** |
| **Worst case — bottle is past the point of service** | **$400 – $700 for a whole new system** | **Sourced** on the replacement price: budget AFFF systems "starting around $400", Novec "around $700" — https://nomoneymotorsports.com/2023/02/02/a-budget-racers-fire-system-shopping-guide-how-to-minimize-expensive-maintenance-and-avoid-being-surprised-at-tech-inspection-this-year/ . **Sourced** on unserviceability: a refill centre states bottles "more than two years past their service-due date cannot be serviced" `[snippet-only, carried from Scout 5]` — https://discoveryparts.com/products/spa-afff-refill-recertify-electrical-bottle |
| **Delta created purely by not knowing in time** | **$215 – $575** `(estimate)` | ($159.95 + $100 + $80) − $159.95 = **$180**; or ($400 … $700) − $159.95 = **$240 … $540**. |

**And the same shape on harnesses:** recertifying a harness costs "about half the price of a new set
of belts, or about a third with a cam lock", and SFI "issues manufacture date tags for harnesses
twice a year, in June and December" `[analyst-2026-10-19, snippet]` —
https://www.performanceracing.com/magazine/columns/08-05-2024/ask-experts-driver-safety-equipment-recertification .
Re-webbing "renews them and allows them to be used for an additional 4-years" `[snippet-only,
carried from Scout 1]` — https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1 .
**The economic claim is therefore not "we save you from disaster" — it is "we move your gear spend
from the expensive panic column to the cheap planned column, every single season."** That is a
smaller but far more defensible claim, and it recurs annually, which is what a subscription needs.

**Judgement: does it clear a subscription price?**
Yes, but only a modest one. A single avoided occurrence is **$1,185–$1,350 sunk `(estimate)` plus a
$215–$575 `(estimate)` panic premium**. Against **$39.99/year** (§4e) the ratio is roughly **30–48×**
on one avoidance. That is a comfortable "obviously pays for itself" story at $40/yr. It is **not**
a comfortable story at $99/yr or $149/yr — the pain is simply not large enough, and a racer who
budgets $500 an entry will still refuse $120/yr for admin. **Price discipline is load-bearing here.**

### 3b. Purchasing power — **3 / 5, and it is inferred, not measured. Weakest link in the file.**

- `[GAP]` **No income, net-worth or household-wealth figure for US club racers was found by either
  scout or by me.** Scout 5 scored wealth 5 and Scout 1 scored 4; **both state in their own files
  that the score is inferred from the hobby's cost structure and not from a cited statistic.** I am
  marking it **3 and inferred** and I recommend the founder treat it as unknown.
- What *is* sourced is **spend**, which is a weaker proxy but a real one: $495–$650 per weekend
  entry (§3a); SCCA individual membership rising **$80 → $85** and family **$105 → $120** effective
  1 Jan 2026 `[analyst-2026-10-19, snippet]` — https://www.scca.com/articles/2020126-2025-year-end-message-from-bob-crawford-scca-board-chair ;
  "roughly 70,000 members each year that participate in 1,700-plus events annually" and "more than
  100,000 entries each calendar year" `[snippet-only, carried from Scout 5]` —
  https://www.scca.com/articles/2020102-scca-member-anniversaries-december-2025 .
  100,000 entries × $495 (lowest sourced entry) ≈ **$49.5M/yr in entry fees alone** `(estimate)`,
  before cars, trailers, tyres and gear.
- Scout 1 put the car itself at "$40k–$150k purpose-built track car" — **this is Scout 1's
  characterisation, not a sourced figure**, and I will not use it as a wealth statistic.
- **Counter-signal that matters:** the SCCA CEO, in an August 2025 address, said mid-year metrics
  came in "somewhat under what leadership had hoped for" and tied it to "the same cost pressures
  individuals and businesses face" `[analyst-2026-10-19, snippet]` —
  https://www.scca.com/articles/2019798-scca-presidents-august-2025-update-recap . An audience the
  sanctioning body itself describes as cost-pressured is not an audience to test at $99/yr.

### 3c. Easy to target — **5 / 5. The strongest leg by a distance.**
Named, URL-addressable, dense, and seasonal. Full list with self-promotion rules and gatekeepers in
§11. Short version: Grassroots Motorsports and Classic Motorsports forums (same publisher), Apex
Speed, 24 Hours of Lemons, S2KI and marque forums, 115 SCCA regions `[snippet-only, carried from
Scout 5]` — https://scca.com/articles/2017250-scca-annual-membership-50-000-and-counting , NASA
regions and its own publication nasaspeed.news, MotorsportReg (every entrant passes through it),
PRI Show and Performance Racing Industry magazine — which **already publishes recertification
explainers**, i.e. the editorial appetite is demonstrated:
https://www.performanceracing.com/magazine/columns/08-05-2024/ask-experts-driver-safety-equipment-recertification .

### 3d. Growing — **2 / 5. I cannot source growth, and the one directional signal I have is negative.**

Stated plainly, as instructed: **I could not source whether US club racing participation is rising
or falling.**

- `[GAP]` No year-over-year SCCA membership series obtained. No NASA membership figure obtained at
  all `[analyst-2026-10-19]` — NASA's own About page was indexed but not fetchable
  (https://nasaproracing.com/aboutnasa/), and no published participant count surfaced.
- **Level, sourced, but not a trend:** "crested 50,000 in February 2023, surpassing the 51,000 mark
  three months later" plus "roughly 20,000 SCCA weekend memberships purchased each year, making
  SCCA's total membership now top 70,000" `[snippet-only, carried from Scout 5]` —
  https://scca.com/articles/2017250-scca-annual-membership-50-000-and-counting ; ~70,000 restated
  for Dec 2025 — https://www.scca.com/articles/2020102-scca-member-anniversaries-december-2025 .
  **Two points, different definitions, different years — that is not a growth rate and I will not
  compute one from it.**
- **Negative directional signal:** mid-2025 metrics "somewhat under what leadership had hoped for"
  `[analyst-2026-10-19, snippet]` — https://www.scca.com/articles/2019798-scca-presidents-august-2025-update-recap .
- **One genuinely positive structural signal:** SCCA's 2026 stated focus is "improving the member
  experience, expanding access, and growing participation", with a Race Experience programme
  positioned between drivers' schools and regional racing `[analyst-2026-10-19, snippet]` —
  https://www.scca.com/articles/2020130-2026-on-the-horizon ; and SCCA has partnered with PRI to
  "expand motorsports access" — https://theshopmag.com/news/scca-pri-join-forces-to-expand-motorsports-access/ .
  New-entrant programmes are good for us (new racers buy new gear and do not yet know the rules),
  but an organisation funding access programmes is not evidence of organic growth.

### Starving-crowd scorecard

| Leg | Score | Confidence |
|---|---|---|
| Massive pain | **3 / 5** | Medium-high. Gate and intervals sourced; total cost ~half sourced, half `(estimate)`. |
| Purchasing power | **3 / 5** | **Low. Inferred from spend; no income figure exists in our evidence.** |
| Easy to target | **5 / 5** | High. Named URLs. |
| Growing | **2 / 5** | **Low, leaning negative. Unsourced; the one directional signal is soft-negative.** |

**Verdict on the crowd:** this is a *reachable, recurring, correctly-shaped* crowd that is **not
proven to be starving and not proven to be growing**. It is a good crowd for a $40/yr product and a
bad crowd for anything that needs $100/yr or needs the market to expand.

---

## 4. GRAND SLAM OFFER

### 4a. Every problem, in the customer's own words

**Standing warning: there are still zero verified verbatim complaints in this niche.** Neither
scout nor I opened a single forum thread. Column 2 states the marking honestly; anything marked
`[paraphrase — NOT verbatim]` or `[inferred]` **must never appear in marketing as a quote**.

| # | The problem as stated | Marking & source |
|---|---|---|
| P1 | "They won't pass NASA or PCA tech for instance" (on out-of-date harnesses) | `[snippet-only]` — https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1 |
| P2 | "most, but not all clubs and tracks allow expired race harnesses for HPDE" | `[snippet-only]` — https://nomoneymotorsports.com/2019/03/11/post-28-a-few-more-tech-tips/amp/ |
| P3 | "harnesses that are expired for racing may be used providing that they are in at least very good condition" (NASA, as quoted on a marque forum) | `[snippet-only]` — https://s2ki.com/forums/s2000-racing-competition-11/harddog-roll-bar-ok-trackdays-713782 |
| P4 | "most organizations need something within the past two cycles, so by 2028 the sticker will need to be a Snell 2020 or 25" | `[snippet-only]` — https://grassrootsmotorsports.com/forum/grm/learn-me-drivers-safety-gear-expiration-rules/275065/page1 |
| P5 | A racer says the tech inspector checked only the helmet and belt dates and never looked at the car itself | `[paraphrase — NOT verbatim]` — https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/ |
| P6 | A racer admits being caught several times for not tracking expiration dates, and was glad the inspectors caught it | `[paraphrase — NOT verbatim]` — https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/ |
| P7 | A set of brand-new belts was already expired when unpacked; belts from the big retailers "are usually dated one to two months in advance" | `[paraphrase — NOT verbatim]` — https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/ and `[analyst-2026-10-19, snippet]` same thread |
| P8 | Recertifying belts through the mail often costs about as much as buying new ones | `[paraphrase — NOT verbatim]` — https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/ |
| P9 | Fewer companies now do re-webbing — CROW does, Racequip/G-Force/Pyrotect do not | `[paraphrase — NOT verbatim]` `[analyst-2026-10-19, snippet]` — https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1 |
| P10 | "a 10 second drag car had visited six tracks in two years and nobody had inspected it" — **a counter-signal, kept deliberately** | `[snippet-only]` — https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/ |
| P11 | "how to minimize expensive maintenance and avoid being surprised at tech inspection this year" (a racer's own article title) | `[snippet-only]` — https://nomoneymotorsports.com/2023/02/02/a-budget-racers-fire-system-shopping-guide-how-to-minimize-expensive-maintenance-and-avoid-being-surprised-at-tech-inspection-this-year/ |
| P12 | "Learn me: driver's safety gear expiration rules" — a thread title, i.e. the audience asking the question out loud | `[snippet-only]` — https://grassrootsmotorsports.com/forum/grm/learn-me-drivers-safety-gear-expiration-rules/275065/page1 |
| P13 | "Expiration dates for fire protective gear?" — thread title | `[snippet-only, carried from Scout 5]` — https://forums.24hoursoflemons.com/viewtopic.php?id=42620 |
| P14 | I can't remember which of my six items is closest to the edge, and I find out standing in the tech line | **`[inferred]`** — not sourced; the consequence of P5+P6. |
| P15 | The rule for *my* weekend's organiser is different from the one for *last* weekend's organiser | **`[inferred]`** from the contradiction between P1, P2 and P3 — the sources conflict, the inference that the driver is confused is ours. |
| P16 | Each off-season I rebuild this knowledge from scratch | **`[inferred]`** — not sourced. |
| P17 | When I do find out in time, I don't know whether recert, re-web or replace is cheapest | **`[inferred]`**, though the economics behind it are sourced (§3a). |

### 4b. A solution for each

| # | Solution in v1 |
|---|---|
| P1, P2, P3, P15 | **Per-sanctioning-body rule sets.** The user picks the body per event; the same gear is evaluated against that body's published interval. Where bodies differ, the app shows the difference as the point, not as an error. |
| P4 | **Helmet standard-cycle view** — their Snell year label, the published cycle, and the acceptance window(s) their body publishes, with both conflicting figures shown and attributed (§9). |
| P5, P14 | **Pre-tech sheet ordered the way the inspector works** — helmet and harness dates at the top, because that is what the only evidence we have says gets checked first. |
| P6 | **Local notifications at 120 / 90 / 60 / 30 / 7 days** before each item lands, and a single off-season "season opener" digest. |
| P7 | **"Punch date, not purchase date" is the primary field, with the purchase date optional and visibly secondary.** Entry hint: belts are commonly dated months before you receive them. Flags an item already inside its final year on the day of entry. |
| P8, P9, P17 | **Action-per-item, not just a red dot:** for each expiring item, the published options (recert / re-web / replace) and the sourced price ranges from §3a, with "re-webbing availability varies by manufacturer" stated. No vendor links in v1 (no affiliate revenue, no implied endorsement). |
| P10 | **Honest framing.** We never claim the inspector will catch it. The pitch is "the weekend you already paid for", not "you will be caught". |
| P11, P16 | **Season Opener mode** — one off-season screen: every item, where it lands relative to the whole calendar, and the shopping list sorted by date. This is the annual re-use that justifies renewal. |
| P12, P13 | **Every interval carries its free source link in-app.** The app is also the answer to the forum thread, which is why the forum is the channel (§11). |

### 4c. Trim and stack — the final offer

**Trimmed out of v1 on purpose:** camera/OCR of tags (deferred to v1.1 per brief), car maintenance
and lap logging (that is RacePrep/GridMate's ground, §10 — do not fight there), team/multi-driver,
vendor marketplace or affiliate links, cloud sync and accounts, any FIA-only rule set (the FIA
label prints its own expiry year, so the arithmetic value is lower and the spec risk is higher),
"will it pass" language in any form.

**The stacked offer:**

> **For the licensed club racer:** put the dates off your own gear in once. Every event on your
> calendar then shows which of your items lands before it, under the rule your organiser publishes
> — with that organiser's own free rulebook link next to every interval. You get a notification in
> the off-season while recert is still $160 instead of race week while it's $260 and a rush
> charge, a printable sheet to hand across the tech counter, and a season-opener shopping list
> ordered by date. One sitting in the garage; the rest of the season it stays quiet.

### 4d. M-A-G-I-C name

M-A-G-I-C = **M**agnetic reason why · **A**vatar · **G**oal · **I**nterval · **C**ontainer.

| | Candidate 1 | Candidate 2 | Candidate 3 |
|---|---|---|---|
| **Full name** | **Never Lose a Weekend: the Club Racer's Season-Long Gear-Date Tracker** | **Tech Line Ready: the Racer's 10-Minute Pre-Season Gear-Date Check** | **Punch Date: the Club Racer's All-Season Safety-Gear Date Log** |
| M (magnetic why) | Never Lose a Weekend | Tech Line Ready | Punch Date (the insider noun — the thing that actually bites) |
| A (avatar) | Club Racer | Racer | Club Racer |
| G (goal) | don't lose a weekend you paid for | walk up to tech with nothing outstanding | know every date on your own gear |
| I (interval) | Season-Long | 10-Minute (effort) + Pre-Season (timing) | All-Season |
| C (container) | Gear-Date Tracker | Gear-Date Check | Safety-Gear Date Log |
| App Store display name | **Paddock Dates** | Tech Line | Punch Date |
| Assessment | Strongest emotional hook; "weekend" is the real unit of loss and the cost arithmetic in §3a backs it literally. | Clearest effort promise, best for the MVP landing page. Weak as an app name ("Tech Line" is ambiguous outside the paddock). | Best insider credibility; **worst discoverability** — a non-racer and the App Store search algorithm both read "Punch Date" as something else. |

**PICK: Candidate 1.**
- Marketing / landing-page headline: **"Never lose a weekend to a date on a tag."**
- App Store display name: **Paddock Dates** · subtitle: **"Your race gear's date log"**
- Keep Candidate 2's "10-minute" promise as the landing-page sub-head; it is the cleanest statement
  of the effort term in §2.

**Naming note — legal and App Store exposure. This niche is the most exposed we have looked at.**
1. **No sanctioning-body or standards-body name may appear in the app name, subtitle, icon, screenshot
   chrome, or URL.** Not SCCA, NASA, NHRA, SVRA, PCA, BMW CCA, SFI, Snell, FIA, or any logo or
   wordmark lookalike. These are trademarks, several are registered by non-profits that actively
   police them, and App Store Review Guideline 5.2 (intellectual property) plus the "implied
   affiliation/endorsement" bar will reject or pull a listing that reads as official. "SCCA Gear
   Tracker" is not a candidate at any point.
2. **Body names may appear only as neutral, factual, in-body references** — "Rule set: as published
   by SCCA, <date>" next to the source URL — never as a badge, never in the first screenshot, never
   in keywords as a possessive.
3. **Avoid any name that asserts a safety or compliance state.** Rejected on these grounds:
   *Tech Pass*, *Gear Legal*, *Race Safe*, *Compliant*, *Scrutineer*, *Pass Tech*. "Paddock Dates"
   asserts only that it holds dates.
4. **Apply the "Airworthy today?" → "All items current?" precedent to every string.** Mandatory
   rewrites, binding on v1 copy:

| Never ship | Ship instead |
|---|---|
| "Will my gear pass tech?" | "All dates current?" |
| "You're compliant" / "Compliant ✓" | "No dates land before this event" |
| "Your helmet is safe" | "Helmet label year: 2020. Interval you selected: SCCA, as published <date>." |
| "This gear is legal for SCCA" | "SCCA publishes this interval here →" |
| "Certified" / "Approved" / "Passed" | "Recorded" / "Current per your entry" / "Due" |
| "We check your equipment" | "You record your equipment's dates; we do the arithmetic" |
| Green tick on an item | Green **date**, with the date and the interval source shown beside it |

5. **Standing disclaimer, on the dashboard and on every exported PDF, not buried in settings:**
   "These are the dates you entered, against the interval you selected, from the public source
   shown. This is your own record. Your event's technical inspector decides what is accepted. Check
   your organiser's current rulebook before every event."
6. **The PDF must be titled a record, not a certificate.** "Gear date log — <driver>, <date>", never
   "Tech inspection certificate". A document that looks like a certificate is the single worst
   artefact we could ship in this niche.
7. **The failure mode to design against:** telling a driver their equipment is fine when it is not.
   We mitigate structurally — the app never evaluates *condition*, only *dates the user typed*, and
   never uses the word "safe". A visible "condition is not something this app can see — inspect your
   webbing, your shell and your bottle gauge" line sits on the gear list.

### 4e. Price, anchored to the cost of the problem

**The anchor (from §3a):**
- One avoided occurrence: **$1,185 – $1,350** sunk `(estimate)` (entry $495–$650 **sourced**; tow,
  lodging, food `(estimate)`).
- Panic premium on the fire bottle alone: **$215 – $575** `(estimate)`, of which the $100 rush
  surcharge and the $159.95 routine recert are **sourced**.
- Combined worst single occurrence: **$1,400 – $1,925** `(estimate)`.

**Arithmetic:**

| Price | Annual cost | Break-even on one avoided weekend ($1,185 low case) | Judgement |
|---|---|---|---|
| **$39.99 / year** | $39.99 | **29.6×** — pays for itself if it works once in 29 seasons | **Chosen.** |
| $6.99 / month | $83.88 | 14.1× | Chosen as the deliberately-worse option that pushes annual. |
| $59.99 / year | $59.99 | 19.8× | Defensible, and matches RacePrep's $59.99/yr (§10). Rejected for v1: the audience's own sanctioning body calls it cost-pressured (§3b), and we need conversion data more than ARPU. |
| $99 / year | $99 | 12.0× | **Rejected.** A racer who budgets $500/weekend will still refuse $99/yr for admin. The anchor is avoidance, not gain, and avoidance does not carry 3-figure pricing. |

**Final price: $39.99/year or $6.99/month. Annual is the push and the default-selected option.**

Why annual, in the customer's logic, not ours:
1. **The unit of the problem is a season.** Gear dates are compared against a calendar that runs
   January to December; the off-season is when the product earns its money.
2. **$39.99/yr is $3.33/month and 8% of one entry fee** at the lowest sourced $495 — the "obviously
   pays for itself" line is arithmetically true and sourced.
3. **Monthly is a trap for us as much as for them:** a monthly subscriber will churn in the two
   quiet months and re-subscribe in a panic in March, which is exactly the behaviour the product is
   supposed to eliminate.

**Honest statement, as instructed: the anchor only supports a modest price.** The *honest* ceiling
here is roughly $60/yr. Anyone modelling this at $99+ is modelling a different, more painful niche.
This matters for the studio bet: at $39.99/yr, **1,000 paying subscribers = $39,990/yr gross**, and
at Apple's small-business 15% that is roughly **$33,990 net** `(estimate: $39,990 × 0.85)`. Against
a sourced population of ~70,000 SCCA members (of whom only a subset are licensed racers with full
gear sets — unquantified, `[GAP]`), 1,000 paying subscribers is **>1.4% of all SCCA members**, which
is an aggressive but not absurd target. **This niche is a good first app, not a big business.**

### 4f. Guarantee — honest and compatible with Apple issuing refunds

**Mandatory constraint:** on iOS, **Apple** issues refunds, not us. We cannot promise a refund we
cannot execute, and promising one we cannot deliver is both a Guideline 3.1.1 problem and a
consumer-protection one. CLAUDE.md §5 is binding: never promise an automatic unlock or refund from
a payment we do not control.

**Exact wording to ship (paywall footer, website, and the App Store description):**

> **The Garage-Trip Guarantee.** Put your gear dates in. If the app doesn't surface at least one
> date you'd have otherwise found out about at the tech counter, email us within 30 days at
> <support address> and we'll do two things: send you a free offer code covering your next year,
> and give you the exact steps to request a refund from Apple at
> reportaproblem.apple.com — refunds on the App Store are issued by Apple, not by us, so we can't
> promise their decision. We can promise we'll ask on your behalf, in writing, and we've never
> argued with anyone about it.

Why this wording is safe and still strong:
- It promises only things we can execute: an **offer code** (fully in our control via App Store
  Connect — CLAUDE.md §5 explicitly contemplates offer codes) and **written advocacy**.
- It states the truth about Apple plainly rather than hiding it.
- The trigger is objective and in the customer's hands ("at least one date you'd have otherwise
  found out about"), which is what makes a guarantee reduce risk rather than invite argument.
- **"We've never argued with anyone about it"** must be deleted until it is literally true. Ship it
  only after the first refund request is actually handled that way.

### 4g. Scarcity and urgency — **real only**

**Real, and usable:**
1. **The racing season is a genuine, dated deadline.** Annual tech and the first event of the season
   are fixed calendar facts; an item that lands in May is cheap to fix in January and expensive in
   May. This is the strongest honest urgency we have and it should carry the entire campaign:
   *"Fix it in the off-season, not in the tech line."*
2. **Snell's published transition is a real, dated, cluster-wide forcing event.** SA2025 took effect
   **1 October 2025** and manufacturers "will stop production of SA2020 helmets by the end of 2026"
   — https://smf.org/standards/sa/2025/SA2025_Press_Release.pdf `[snippet-only]`, restated
   `[analyst-2026-10-19, snippet]` at https://performanceracing.com/magazine/industry-news/10-03-2025/new-snell-sa2025-standard-takes-effect .
   **Use with care:** one trade blog says an SA2015 phase-out "begins for the 2026 season"
   `[analyst-2026-10-19, snippet]` — https://www.holley.com/blog/post/why_snell_s_new_sa2025_standard_matters_to_race_helmet_safety/ —
   which conflicts with other acceptance-window figures (§9). **Campaign copy must cite the body,
   not assert the date**: "Snell published this; your organiser decides what it accepts."
3. **Historic precedent that the cliff is real:** SCCA removed 2005-rated Snell and SFI helmets "as
   of January 1, 2022" — https://scca.com/articles/2015714-helmet-certifications-updated-for-2022
   `[snippet-only]`; a Canadian club published "Snell 2010 helmets expired Dec 31, 2023" —
   https://www.casc.on.ca/node/1344 `[snippet-only]`.

**Explicitly forbidden (fake):** countdown timers on the paywall, "only N spots", "price rises
Friday" without a committed price change, invented founder-cohort limits. **One honest exception:**
the MVP's concierge round (§6) genuinely is capacity-limited to what one founder can hand-build —
state the real number and honour it.

### 4h. Bonuses, each killing one named objection

| Bonus | Named objection it kills |
|---|---|
| **1. The Off-Season Shopping List** (PDF: everything landing in the next 12 months, sorted by date, with the sourced recert-vs-re-web-vs-replace price ranges from §3a) | *"I already know what's expiring."* — Reframes the product from memory aid to money-saver: fixing it in January is sourced-cheaper than fixing it in race week. |
| **2. The Tech-Counter Sheet** (one-page PDF, ordered the way the only evidence we have says inspectors work: helmet and belt dates first) | *"My logbook and the sticker on the helmet are enough."* — Gives them something the logbook doesn't: every date on one page, before they are standing at the counter. |
| **3. "Where's the date on that?" field guide** (plain-language, our own words, no spec text: where the punch tag lives on a harness, where the Snell label sits, where the bottle's service tag is) | *"I can't even find the date, so entering it will take an hour."* — Attacks the effort term directly; also the single best free lead magnet (§11). |
| **4. Rule-change watch for your bodies** (in-app "rules as of <date>" version label + an update that names what changed, with the free source URL) | *"The rules will change and your app will be wrong."* — The honest answer: we don't claim permanence, we claim versioning and a link to the current rulebook. |
| **5. Multi-body comparison card** (the same gear item under SCCA vs NASA vs your vintage group's published intervals, each attributed) | *"I run with three different organisations and they all say different things."* — Turns the contradiction between P1/P2/P3 into the reason to pay. |
| **6. Second driver / spare-helmet slots at no extra cost** (same device, no accounts — SwiftData, still single-user) | *"My spouse/co-driver shares the car, am I paying twice?"* — Removes a price objection without building multi-user infrastructure. |

---

## 5. LEAN STARTUP HYPOTHESES

**Value hypothesis.**
*A licensed club racer who enters their own gear dates once will discover at least one item landing
inside their current season that they had not accounted for, will judge that discovery worth more
than $39.99/year, and will still be using the app the following off-season.*
Falsifiable in three places: (a) **discovery rate** — the share of first-run users for whom the
engine surfaces ≥1 item landing before their next event; (b) **willingness to pay** — paid
conversion after the aha; (c) **the renewal**, which is the only real test and cannot be run in 8
weeks, so it is proxied by season-opener re-engagement.

**Growth hypothesis — engine of growth: VIRAL (paddock word-of-mouth), with STICKY as the retention
engine. Both to be tested, neither assumed.**
*A racer who prints the tech-counter sheet will be asked about it in the paddock or the tech line,
and will name the app, producing ≥0.3 new installs per active subscriber per season at no
advertising cost.*

Why viral is the plausible engine and why I refuse to assume it:
- **For:** the paddock is a physically co-located, repeat-contact, high-trust community; the artefact
  (a printed sheet handed across a counter) is *visible at the exact moment of relevance*; the tech
  line is a queue of people with nothing to do; and the forums (§11) are a public word-of-mouth
  substrate we can observe.
- **Against:** racers are competitive and status-conscious, and "I needed an app to remember my own
  dates" is mildly unflattering — the artefact may travel *less* than its visibility suggests. The
  sourced counter-signal (P10, "nobody had inspected it") means a share of the paddock does not
  think the problem exists.
- **The test, not the assumption:** instrument it bluntly. (i) a **referral code printed on the PDF
  footer** — the only attribution mechanism available with no backend and no accounts, redeemed as
  an App Store offer code; (ii) a one-question in-app survey, "how did you hear about this?"; (iii)
  **count, don't infer** — if the forum threads in §11 do not produce unprompted third-party
  mentions within 60 days of launch, the viral engine is not running, and the fallback is the
  **paid-but-cheap** engine of sponsored posts in Performance Racing Industry-style outlets, which
  this niche's economics at $39.99/yr barely support. **If viral fails, the business is marginal.**
  That is worth knowing before week 8, not after.
- Secondary sticky mechanic: the data is in the app and re-entering it elsewhere costs a garage
  trip. That is real switching cost but it is also **weak retention** — see the §12 killer about
  once-a-year entry.

**The single riskiest assumption.**
> **That a licensed club racer believes this problem is worth paying for at all — rather than being
> something the gear tag, the tech inspector and a memory already handle for free.**

Why this one, above the rule-accuracy risk and above the competitor risk:
1. **Both scouts independently named it as the top failure reason**, which is the strongest
   convergent signal in the Phase 1 evidence. Scout 5: "the audience may treat the gear tag itself
   as sufficient and refuse to pay — enforcement is inconsistent." Scout 1: "enforcement is
   inconsistent, so a meaningful share of the audience has never actually been burned."
2. **We have a sourced counter-signal, not just an absence of evidence:** "a 10 second drag car had
   visited six tracks in two years and nobody had inspected it" `[snippet-only]` —
   https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/ . An
   inconsistently-enforced rule generates structurally less willingness-to-pay than a hard one.
3. **The free alternatives are genuinely good** (§10): the tag is physically attached to the gear,
   the sticker is on the helmet, the logbook is in the glovebox, and a spreadsheet costs nothing.
4. **It is cheap and fast to test before any code exists** (§6), and every other risk is
   conditional on it. Rule accuracy only matters if someone pays; the competitor question only
   matters if the category exists.

**Dated kill criterion (CLAUDE.md §9).**
> **If, by 2026-12-14 (8 weeks from today), fewer than 25 licensed club racers have paid a
> refundable $20 deposit from a total of ≥400 qualified landing-page visitors (≤6.25% conversion),
> the niche is killed and the studio moves to Scout 5 §A (USCG-credentialed charter captains, 25/30)
> without further argument.**

---

## 6. MVP — the smallest test of the riskiest assumption, before any app exists

**What is being tested:** will a licensed club racer *pay money* to have their gear dates computed,
when the gear tag, the inspector and their own memory are free?

**Structure: a free browser check as the aha → a concierge hand-built service → a refundable
deposit as the willingness-to-pay signal.** No Swift is written until the deposit threshold is met.

### 6a. The free browser aha — "Does anything on my gear land before my next event?"
Deliverable in a browser, in under 60 seconds, with no backend. This is the Phase-1 tie-breaker (a)
and the single most important asset in the MVP.

- A **single static page** (`landing/`), vanilla JS, all arithmetic client-side, **nothing sent
  anywhere** — stated on the page, because this audience is privacy-twitchy about their gear and
  their car.
- **Three inputs:** (1) helmet — Snell label year, from a dropdown; (2) harnesses — SFI punch month
  and year; (3) next event — date, plus "who's running it?" (SCCA / NASA / other).
- **Output, instantly, three lines:** each item, the date its interval lands on, and whether that is
  before or after the event date — plus the free public source URL for the interval used, and the
  mandatory §4d disclaimer.
- **Instrumented:** time-to-first-result (target **< 45s**), completion rate, and the **discovery
  rate** — the share of visitors for whom ≥1 item lands before their event. That number is the
  value hypothesis in a single statistic and it can be measured before anything is built.
- **The ask at the end:** "want this for all six items, your whole season, and a sheet for the tech
  counter? $20 deposit, fully refundable, credited against the first year."

### 6b. The concierge service — exactly what the founder does by hand

Positioned publicly as **"Pre-Season Gear Date Review — 25 drivers, done by hand"** (a real
capacity limit, §4g).

The founder, per driver, by hand, no software:
1. **Intake** (Google Form or plain email, 5 min): which bodies they run with, their 2027 event
   dates, and **photographs of every gear tag** — helmet label, both harness SFI tags, fire-bottle
   service tag, suit label, FHR label, net tag, fuel-cell tag.
2. **Read the tags himself** (10 min). This is the point of doing it by hand: the founder learns
   where the dates physically live, how often they are illegible, how often the driver photographs
   the wrong label, and how many items a real driver actually has. **That knowledge is the v1 spec**
   and cannot be acquired any other way.
3. **Compute by hand in a spreadsheet** (10 min) — one row per item: item, standard, label date,
   interval, source URL, date it lands, which of their events it lands before.
4. **Write the one-page PDF** (15 min) — the Tech-Counter Sheet and the Off-Season Shopping List
   from §4h, with the §4d disclaimer, emailed back within 48 hours.
5. **A 15-minute call with every one of the first 10** (recorded with permission). Fixed questions:
   *How do you track this today? Have you, or someone you know, ever been turned away for a date?
   What did that weekend cost you? What would you have paid to avoid it? Who did you tell about it?*
   **This call is where the missing verbatim quotes and the missing income figure come from** — the
   two biggest `[GAP]`s in the file (§13).
6. **Then ask for the $20 deposit** (Stripe on the web, per CLAUDE.md §5; refundable on request,
   credited with an App Store offer code at launch, never promised as an automatic unlock).

**Time cost:** ~45 min/driver + 15 min call. 25 drivers ≈ **25 hours of founder time**. **Cash cost:
$0** beyond a domain.

**What would make the founder stop mid-MVP:** if 10 consecutive intakes return **zero** items
landing inside the coming season, the discovery rate is too low to sell and the niche dies on the
spot — no deposit test needed.

---

## 7. EXPERIMENTS

Thresholds are **pre-committed here, before any data**. Costs assume founder time is free and only
cash is counted.

| # | Experiment | What it tests | **PASS** | **FAIL** | Cash | Days | Pre-committed action |
|---|---|---|---|---|---|---|---|
| **E1** | Post the §4h Bonus 3 field guide ("where's the date on that?") as a genuinely useful free reply in the two existing threads named in §4a (P12, P13), plus a Grassroots Motorsports post. No link on the first post. | Is the problem felt? Does the community engage, or correct us? | ≥3 unprompted replies describing a date they'd missed, **or** ≥1 reply asking "is there an app for this?" | Silence, or ≥2 replies saying the tag/inspector is sufficient | **$0** | 7 | PASS → run E2. FAIL → run E2 anyway but halve the E3 threshold; two fails in a row kills. |
| **E2** | Ship the §6a free browser check. Drive traffic only from E1 + 3 more forums + 2 Facebook groups. | **Discovery rate** and time-to-aha | ≥400 completed checks **and** discovery rate ≥35% **and** median time-to-result <45s | <150 completed checks **or** discovery rate <15% | **$15** (domain) | 14 | PASS → E3. FAIL on discovery rate → **kill**: if most racers have nothing expiring, there is no product. FAIL on traffic only → re-run with different channels once. |
| **E3** | Deposit test: $20 refundable Stripe deposit for the concierge review, offered at the end of the free check and in the E1 threads. | **The riskiest assumption** — willingness to pay | **≥25 paid deposits from ≥400 qualified visitors (≥6.25%)** | <10 deposits from ≥400 visitors (<2.5%) | **$0** (Stripe takes its cut of revenue) | 21 | PASS → build v1 (§8). FAIL → **kill the niche on 2026-12-14** and move to Scout 5 §A. 10–24 deposits → one price test at $10 before deciding. |
| **E4** | Hand-deliver all concierge reviews; 15-min call with the first 10. | Can one person deliver it? Where do the tags actually live? **Closes the verbatim-quote and income `[GAP]`s.** | ≤45 min/driver **and** ≥8 of 10 calls completed **and** ≥3 usable, attributable verbatim quotes obtained | >90 min/driver (not automatable in a week) **or** <5 calls completed | **$0** | 21 | PASS → v1 spec is confirmed; publish the quotes with real attribution. FAIL on time → re-scope v1 smaller. |
| **E5** | **App Store competitor audit** — manual, on a real device/iTunes search, since no agent could search the store. 12 pre-named queries: "race gear expiration", "SFI harness", "Snell helmet expiration", "tech inspection", "race car logbook", "motorsport safety gear", "track day gear", "harness recert", "fire bottle service", "gear expiry", "scrutineering", "paddock". | **Is "no dedicated incumbent" true?** (unproven — §10) | No app whose listing names gear expiry/SFI/Snell dates as a core feature | A funded or well-rated app already does gear-date tracking per sanctioning body | **$0** | 1 | PASS → proceed. FAIL → re-score the niche; CLAUDE.md §1 ("if a well-funded competitor already nails the problem, say so and drop it") applies. **Run this FIRST, before E1 — it is one day and it can kill the niche cheaply.** |
| **E6** | **Rule-set expert review.** Pay a licensed SCCA National Tech Inspector or a long-time club racer to review the §9 rule table line by line. | Rule accuracy and the per-body variance claim | ≥90% of the 14 rules in §9 confirmed, with the conflicts in §9 resolved or confirmed as genuinely body-dependent | <70% confirmed, **or** an expert says the intervals cannot be stated without the paid spec text | **$200–$400** (estimate: 2–4 hrs consulting) | 10 | PASS → ship the engine. FAIL → **hard gate failure**, kill (CLAUDE.md §3). Run in parallel with E3; do not spend this until E2 passes. |
| **E7** | Viral-engine test: referral code printed in the PDF footer of every concierge review; ask every caller "who have you told?" | **Growth hypothesis** (§5) | ≥5 of 25 reviews produce a named referral or an unprompted third-party mention within 60 days | 0–1 referrals | **$0** | 60 | PASS → word-of-mouth is the engine; budget zero for ads. FAIL → the only remaining engine is cheap paid media, which $39.99/yr barely supports; re-examine price and verdict. |

**Total cash to a go/no-go: $215 – $415.** Total elapsed: ~8 weeks, matching the founder's bet
window. **E5 runs on day 1.**

---

## 8. v1 FEATURE SPEC — 7 features, ~1 week, studio constraints

**Constraints honoured:** SwiftUI, iOS 17+, SwiftData, StoreKit 2, local notifications, on-device
PDF, **no backend, no accounts, no network calls for rules** (rules are a bundled JSON), **camera
deferred to v1.1 — all dates are typed in v1**.

### The named, timed aha moment

> **THE AHA: "The Date That Lands."**
> The user types their helmet's Snell year and their harness punch month/year, taps their next
> event date, and the screen resolves to one sentence:
> **"Your harnesses' 2-year interval lands 14 April 2027 — 46 days before Summit Point on 30 May."**
> **Target: within 90 seconds of first launch. Hard ceiling: 120 seconds.** Two gear items and one
> date — nothing else — is the shortest path to it, and onboarding is built backwards from it.

### The seven features

| # | Feature | What it does | Why it is in v1 |
|---|---|---|---|
| **F1** | **Gear list (SwiftData)** | `GearItem`: type (helmet / harness / fire system / suit / FHR / net / fuel cell / other), make, model, serial (optional), standard + label year, **punch month + year as the primary date field**, purchase date (optional, visibly secondary), notes. "Same date as…" duplication for matched sets. | The core record. Punch-date-primary directly answers P7. |
| **F2** | **Sanctioning body + rule set (bundled JSON, versioned)** | A body per event, each with its interval table **authored in our own words with a free source URL and a `rules_as_of` date per row**. Ships with SCCA, NASA, and a "my organiser / other" custom mode where the user enters the interval themselves. | The product. The custom mode is the honest escape hatch for the 100+ bodies we cannot cover and for the §9 conflicts. |
| **F3** | **Event calendar** | `Event`: date, venue, body. Manual entry. No import, no network. | The denominator of every calculation. Without an event date, "expiring" is abstract. |
| **F4** | **The engine + per-event readiness screen** | Pure date arithmetic: interval lookup → add months/years → compare to each event date. Per event, per item: the **computed date**, the days of margin, and the source URL. Three states, worded per §4d: *no dates land before this event* / *lands within 60 days of this event* / *lands before this event*. Tested against `engine/test-vectors.json` in both JS and Swift (CLAUDE.md §6). | The whole value. Deterministic, testable, offline. |
| **F5** | **Local notifications** | Per item: 120 / 90 / 60 / 30 / 7 days before its computed date. Plus one **Season Opener digest** fired on a user-set off-season date. | Converts a one-time entry into recurring value — and the off-season digest is the renewal mechanism (§12 killer 3). |
| **F6** | **On-device PDF: the Tech-Counter Sheet + Off-Season Shopping List** | One page, helmet and harness dates first (per the P5 evidence), every item with its label date, interval, computed date and source; titled **"Gear date log — <name>, <date>"**, never a certificate; §4d disclaimer on every page. Second page: everything landing in 12 months, sorted by date, with the recert / re-web / replace price ranges from §3a. | The hand-over artefact, the §4h bonuses 1 and 2, **and the only viral surface we have** (§5, E7 — referral code in the footer). |
| **F7** | **StoreKit 2 paywall + the free tier that contains the aha** | **Free forever: 2 gear items, 1 event, the full aha, no PDF.** Paid: unlimited items and events, notifications, PDF export, multi-body comparison, second-driver slots. $39.99/yr (default-selected) or $6.99/mo. Garage-Trip Guarantee (§4f) in the paywall footer. | Paywall sits **after** the aha, per the brief. The free tier is deliberately generous enough to be the browser check's native twin. |

### Onboarding, screen by screen

| Screen | Content | Rule |
|---|---|---|
| **1. One promise** | "Never lose a weekend to a date on a tag." Sub: "Go to the garage with your phone. This takes one trip." Single button: *Start with my helmet*. | No account. No permissions requested yet. No sign-in wall, ever. |
| **2. Helmet** | Snell label year (dropdown, SA2005→SA2025) + make (optional, skippable). | One required field. |
| **3. Harnesses** | SFI punch **month** and **year** (two pickers). Hint: "This is the punch tag date, not the day you bought them — belts often arrive already months old." | One screen, two pickers. Directly encodes P7. |
| **4. Who do you run with?** | SCCA / NASA / Other (enter my own intervals). With: "We show you what they publish, and link to it. Your inspector decides what's accepted." | The liability framing appears before the first number. |
| **5. Next event** | Date picker + venue name (optional). | The last input before the aha. |
| **6. ★ THE AHA** | The resolved sentence(s) + each interval's free source URL + the §4d disclaimer. **≤90s from screen 1.** | **No paywall, no rating prompt, no upsell on this screen.** Nothing competes with the aha. |
| **7. Add the rest** | "You have 6 more things with dates on them." Checklist of the remaining types with the "where's the date on that?" field guide inline (§4h bonus 3). | Free tier caps at 2 items here — the cap is explained honestly, not as a dark pattern. |
| **8. Notifications** | "Want a nudge 90 days out, while a recert is still $160 instead of a rush job?" → system permission prompt. | Permission asked **after** the value is demonstrated, with the sourced reason. |
| **9. Paywall** | Annual default-selected, monthly beside it, the guarantee, and "your dates stay on this phone — there's no account and nothing is uploaded." | **After** the aha and after notifications. |

### Deferred

**v1.1:** camera + OCR of gear tags (per brief); event import from a registration platform (needs
network — check terms first); FIA rule set; iCloud sync.
**v2 or never:** car maintenance/lap logging (**do not build — that is GridMate/RacePrep's ground,
§10**); team/multi-driver; vendor booking or affiliate links; Android; any "will it pass" feature in
any form.

---

## 9. THE RULES THE ENGINE MUST ENCODE

### 9a. VERDICT ON THE PAYWALL CARVE-OUT — **IT HOLDS, with one named condition. Not a hard gate failure.**

Stated plainly, as instructed:

1. **The dates are the user's own property.** Every date the engine consumes is stamped on equipment
   the driver bought and owns — an SFI punch month/year, a Snell label year, an FIA tag year, a
   bottle service tag. We license nothing to read a tag the user types in themselves. **No exposure.**
2. **The intervals that matter most are published free, in multiple independent places, by
   sanctioning bodies and trade press.** Rules R1–R11 in §9b each carry a free, public URL. The two
   highest-value intervals in the whole product — **harnesses at 2 years from the punch date** and
   **fire bottles at 2 years to recert** — are each free-sourced from **three or more independent
   non-paywalled pages**, including sanctioning-body bulletins and retailer service pages.
3. **We never need the SFI specification text.** The spec says *how a belt is tested*; we need only
   *how long a body accepts it for*, which the body publishes. We state intervals **in our own
   words** and cite the body's free rulebook. No spec table is reproduced.
4. **Therefore: the hard gate (CLAUDE.md §3, rubric gate 2) is PASSED, not failed.** The accurate
   source of the intervals is **not** a paid specification.

**The named condition, and it is a real one.** The residual risk in this niche is **not the
paywall — it is rule drift and per-body variance.** The free sources **demonstrably contradict each
other on helmet service life** (R8: 10 years vs 12 years vs 15 years, three different free sources,
§9b) and **on how the harness 2-year clock is counted** (R1 vs R2: "2 years from the date of
manufacture" vs "until December 31st of the 2nd year after"). An engine that hardcodes one number
is wrong for some users at some events. **The mitigation is architectural, not editorial:** the
interval is a property of the *selected sanctioning body*, every row carries its own source URL and
`rules_as_of` date, conflicts are shown with both figures attributed, and the "Other / enter my own
intervals" mode (F2) exists for everything we cannot source. **This must be verified by a domain
expert before launch (E6), and E6 failing is the gate failure, not the paywall.**

**Unresolved paywall question, recorded not filled:** `[GAP]` **neither Scout 5 nor I could confirm
whether, or at what price, SFI sells its specification documents.** https://sfifoundation.com/specs-program/
was indexed in both runs and fetchable in neither; two searches returned no pricing. The page
describes the programme and links a "Specifications & Manufacturers Lists" section. **This does not
change the verdict** — the carve-out is that we never need the text — but the founder should not
repeat "SFI specs cost $X" to anyone, because we do not have that figure.

### 9b. Rules published FREE — **shippable**

`V` = verification level. All are snippet-level; **nothing here was fetched from a primary page by
any agent in either run.**

| # | Rule, in our own words | Free public source | V |
|---|---|---|---|
| **R1** | An SFI-certified harness (16.1 / 16.5) is accepted for **2 years from the manufacture date punched on its label**. | https://www.performanceracing.com/magazine/columns/08-05-2024/ask-experts-driver-safety-equipment-recertification (`[snippet-quoted]`, carried) · https://www.hmsmotorsport.com/post/sfi-and-fia-seat-belt-standards-and-expiration-dates (`[snippet-only]`, carried) · https://www.armsinc.ca/wp-content/uploads/2023/05/NSC_Bulletin_2023-002.pdf — "SFI certified harnesses expire two (2) years from date of manufacture as indicated on the label" `[analyst-2026-10-19, snippet]` · https://motorsport.org.au/wp-content/uploads/2024/01/12.12-2025-Schedule-I-Safety-Harnesses-and-Window-Nets-V1.pdf — "a SFI standard safety harness is valid for up to 2 years" `[analyst-2026-10-19, snippet]` | **Strong (4 independent free sources)** |
| **R2** | **CONFLICT with R1 on how the clock is counted.** At least one body counts to **31 December of the second year after manufacture**, not to the anniversary. | EMRA, via https://www.motorsportreg.com/index.cfm/event/event.requirements/uidEvent/2E1DB929-0595-6B98-0F2ECA3CB1EF39F2 — "holds valid SFI certifications until December 31st of the 2nd year after the date of manufacture as indicated on the belts label" `[analyst-2026-10-19, snippet]` | **Medium — and material.** Up to ~11 months of difference. **Engine must store the counting method per body, not just the interval.** |
| **R3** | SFI issues harness manufacture-date tags **twice a year, in June and December** — so a "new" belt can already be months into its life on arrival. | https://www.performanceracing.com/magazine/columns/08-05-2024/ask-experts-driver-safety-equipment-recertification `[analyst-2026-10-19, snippet]` + `[snippet-quoted]` carried | **Medium-strong** |
| **R4** | A harness may be **recertified**, at roughly **half** the price of new belts (≈ a third for cam-lock), and may be recertified more than once depending on condition. | https://www.performanceracing.com/magazine/columns/08-05-2024/ask-experts-driver-safety-equipment-recertification `[analyst-2026-10-19, snippet]` | **Medium** (informational, not a gate) |
| **R5** | **Re-webbing** renews a harness "and allows them to be used for an additional 4-years". | https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1 `[snippet-only]`, carried | **Weak — forum.** Show as "varies by manufacturer"; **do not compute from it.** |
| **R6** | An SFI-certified on-board fire-suppression system must be **inspected and re-certified every 2 years**. | https://discoveryparts.com/products/spa-technique-afff-refill-re-certify-electrical-actuator `[analyst-2026-10-19, snippet]` · https://www.bimmerworld.com/Safety-Race-Interior/Fire-Safety/Lifeline-Novec-Fire-Bottle-Refill-Recertification.html `[analyst-2026-10-19, snippet]` · https://www.andra.com.au/wp-content/uploads/2020/08/2020-2021_ANDRA_RULEBOOK_FINAL_20200722_page-268-269_4.23.5_On-Board-Fire-Suppression-System.pdf `[snippet-only]`, carried | **Strong (3 independent)** |
| **R7** | SFI-certified fire systems carry a **maximum field service life of 6 years from original installation**; a bottle **more than 2 years past its service-due date cannot be serviced**; bottles also **require hydro testing after 5 years**. | https://discoveryparts.com/products/spa-afff-refill-recertify-electrical-bottle `[snippet-only]`, carried · ANDRA rulebook URL above `[snippet-only]`, carried · https://nomoneymotorsports.com/2023/02/02/a-budget-racers-fire-system-shopping-guide-how-to-minimize-expensive-maintenance-and-avoid-being-surprised-at-tech-inspection-this-year/ `[analyst-2026-10-19, snippet]` | **Medium.** Three separate clocks (2yr recert / 5yr hydro / 6yr life) — **all three must be modelled, and the 6-year figure is the least independently corroborated.** |
| **R8** | **Helmet service life — THE WORST CONFLICT IN THE FILE. Three different free sources give three different answers.** (a) **10 years** from certification: "most racing organizations accept helmets for up to 10 years from their certification date" — an SA2020 "eligible through the end of 2030". (b) **12 years**: "Snell-rated helmets expire 12 years from the Snell year", SA2020 valid through 1 Jan 2032. (c) **no more than 15 years**: SCCA's own article says helmets "show a manufacture date range on their labels and age out after no more than 15 years". | (a) https://www.holley.com/blog/post/why_snell_s_new_sa2025_standard_matters_to_race_helmet_safety/ `[analyst-2026-10-19, snippet]` and https://www.fastracer.com/a/answers/7036989/What-is-the-snell-helmet-expiration-date `[snippet-only]`, carried · (b) `[analyst-2026-10-19, snippet]` — **attribution uncertain**, the snippet did not name its page; candidates in the same result set were https://www.casc.on.ca/node/1223 and https://casc.on.ca/node/1377 · (c) https://growtiming.scca.com/articles/2015714-helmet-certifications-updated-for-2022 `[snippet-only]`, carried | **DO NOT HARDCODE.** Per-body value, both/all figures shown and attributed, plus the custom mode. **Top priority for E6.** |
| **R9** | Snell issues **a new auto-racing standard every 5 years**. SA2025 took effect **1 Oct 2025**; manufacturers **stop SA2020 production by end 2026**. | https://smf.org/standards/sa/2025/SA2025_Press_Release.pdf `[snippet-only]`, carried; restated https://performanceracing.com/magazine/industry-news/10-03-2025/new-snell-sa2025-standard-takes-effect `[analyst-2026-10-19, snippet]` | **Strong** (standards body's own press release) |
| **R10** | Bodies **retire whole standard generations on fixed dates.** SCCA removed all 2005-rated Snell and SFI helmets "as of January 1, 2022". A Canadian club published "Snell 2010 helmets expired Dec 31, 2023" and "2015 Helmets expire Dec 31, 2025". | https://scca.com/articles/2015714-helmet-certifications-updated-for-2022 `[snippet-only]`, carried · https://www.casc.on.ca/node/1344 `[snippet-only]`, carried · `[analyst-2026-10-19, snippet]` on the 2015 date | **Medium-strong.** Engine needs a **"retired generations" list per body**, separate from the age interval. |
| **R11** | Bodies may set their **own, shorter window** regardless of SFI: 24 Hours of Lemons requires harnesses "dated within four years of the race"; SVRA: "SFI and FIA belts that have an expiration date will be good until that date". | https://forums.24hoursoflemons.com/viewtopic.php?id=3867 `[snippet-only]`, carried · https://svra.com/tech-bulletins/tb2016-003-new-general-rules/ `[snippet-only]`, carried | **Medium.** Proves the per-body architecture is required, not optional. |
| **R12** | **Annual inspection / logbook.** SCCA Time Trials: "annual inspection is optional and can be shown by a sticker, card, or logbook"; a car with a current annual needn't be inspected each event but the driver still turns in the tech form; **changes to aftermarket safety equipment require re-inspection even within the annual period**. | https://timetrials.scca.com/pages/vehicle-inspection `[analyst-2026-10-19, snippet]` | **Medium.** **Note: this is the Time Trials programme, NOT road racing.** Do not generalise. |
| **R13** | **Logbook basics (STALE — 1995 source citing GCR 12.3):** one logbook per car, belonging to the vehicle not the owner, issuable only by a currently nationally-licensed Tech Inspector. | https://na-motorsports.com/Organizations/SCCA/Racing/tech/Logbook.html `[analyst-2026-10-19, snippet]` | **WEAK / STALE — 30 years old. Do not ship without E6 confirmation.** |
| **R14** | **FIA harness (8853/98):** each component carries an FIA tag showing its **expiration year, beginning 5 years from 1 January following the manufacture date**; one Canadian club notes **no extension has been granted for SFI belts** (unlike FIA). | `[analyst-2026-10-19, snippet]` — **attribution uncertain**, the snippet did not name its page; candidates returned together were https://fia.com/sites/default/files/fia_standard_guidelines_-_safety_harnesses.pdf and https://www.armsinc.ca/wp-content/uploads/2023/05/NSC_Bulletin_2023-002.pdf | **Weak (attribution uncertain).** **Deferred to v1.1** — and the FIA tag prints its own expiry year, so the arithmetic value is low anyway. |

### 9c. Anything that exists only in a paid specification — **not shippable**

| Item | Status |
|---|---|
| **SFI specification documents (full text of 16.1, 16.5, 38.1, 3.2A, 17.1 etc.)** | **Sold, not free** per Scout 5's paywall flag; **price and sale terms unconfirmed in both runs** `[GAP]` — https://sfifoundation.com/specs-program/ . **We never need them** (§9a). Never reproduce a spec table, a test procedure, or a spec's own wording. |
| **FIA technical lists / homologation lists** | Treated as restricted alongside SFI. **FIA rule set deferred out of v1 entirely** (§8). |
| **SCCA GCR 2026 full text** | **Status uncertain.** Search indicates the **2025** GCR is offered **free online** (with monthly Fastrack updates free, and the printed book sold separately) at https://www.scca.com/pages/cars-and-rules `[analyst-2026-10-19, snippet]`; **no free 2026 PDF URL was found and the page was not fetchable.** `[GAP]` **Action: confirm by hand that the current GCR is free to read before relying on it as the cited source for any SCCA row.** If the current GCR is members-only, we cite SCCA's free public pages and articles instead (which R10 and §1 already do) — the carve-out survives either way, because we cite the body's free pages, not its rulebook text. |
| **NASA CCR full text** | `[GAP]` **Not located in either run.** Searches collide with the space agency; NASA's own pages were indexed but not fetchable. A CCR knowledge test exists at https://form.jotform.com/drivenasa/nasa-ccr-test `[analyst-2026-10-19, snippet]`, which implies the CCR is distributed to licence applicants but does not give us a citable URL. **Action: locate the free CCR URL by hand, or ship NASA only via the custom-interval mode.** |

### 9d. Every rule a domain expert must confirm (the E6 checklist)

Hand this list, verbatim, to a licensed SCCA National Tech Inspector or a 10+ year club racer.

1. **R8 — helmet service life.** Is it 10, 12, or 15 years, and whose number is whose? *(Highest priority — three free sources disagree.)*
2. **R10 — retired generations.** What is the current list of helmet standards SCCA and NASA will and won't accept in 2027?
3. **R2 vs R1 — the harness clock.** Anniversary of the punch date, or 31 December of the second year? Does SCCA differ from NASA?
4. **R7 — the three fire-system clocks.** Is the 6-year field service life current and correct, is it from installation or from manufacture, and is the 5-year hydro a separate clock?
5. **R6** — is biennial fire recert a sanctioning-body requirement, a manufacturer requirement, or both?
6. **R12/R13 — annual tech and logbook for *road racing*** (not Time Trials). What is actually required in 2027, and is the 1995 GCR 12.3 description still accurate?
7. **Suits (SFI 3.2A).** **Is there a published service life at all?** `[GAP]` — **we have no source for one**, despite the brief assuming one.
8. **Window nets (SFI 27.1).** Is there a dated service life, and is it on the net's own tag?
9. **Fuel cells / bladders.** Replacement interval? `[GAP]` — Scout 1 searched specifically and found nothing.
10. **FHR / HANS devices (SFI 38.1).** Any dated interval, or condition-only? `[GAP]`
11. **R11** — do Lemons/SVRA-style shorter or longer windows still apply as published?
12. **R5** — is re-webbing accepted by SCCA and NASA, and which manufacturers still do it?
13. **R3** — are SFI date tags still issued twice yearly in June and December?
14. **The whole premise:** at a 2027 SCCA or NASA event, **which dates does the inspector actually look at, in what order** — and does any of this match what we have written?

---

## 10. COMPETITORS

### 10a. "No dedicated incumbent" is **UNPROVEN — and materially weaker than Phase 1 claimed**

Scout 5 recorded "no dedicated racer-gear-expiry app was found" and Scout 1 scored the niche
**5/5 blue ocean** with "zero apps". **Both state in their own files that they could not search the
App Store at all.** That is an absence of evidence, not evidence of absence, and I am downgrading it.

**What changed in this run:** I could see `apps.apple.com` **in search results** (not fetch it), and
**three adjacent track/race-car apps surfaced that neither scout had found** — GridMate, RacePrep
and RaceIQ Track Day. None appears to track dated safety gear per sanctioning body. But their
existence proves (a) the category "software for the club racer" is **not** empty, (b) at least one
competitor already charges **$59.99/yr** for racer admin, and (c) two of them already ship
**"custom pre-track checklists"** and **"maintenance logs with next-due reminders"** — which is
one product decision away from our core feature.

**What would disprove "no competitor":** a manual App Store search (experiment **E5**, day 1) across
the 12 pre-named queries in §7 finding any app whose **listing text** names gear expiry, SFI, Snell
dates, or per-sanctioning-body rules as a feature. A second disproof route: GridMate or RacePrep
shipping gear-expiry in an update — which, given their existing reminder engines, is a weekend's
work for them. **Monitor both quarterly. Do not treat 5/5 blue ocean as a standing asset.**

### 10b. The table

| Name | Price | Platform | Strength | **Specific weakness for our ICP** | Source URL | V |
|---|---|---|---|---|---|---|
| **GridMate** | Free + IAP (**amounts unknown**) | iOS (v4.0.1, updated 2026-05-01 per a third-party listing) | Closest adjacent product. Multi-car garage, maintenance logs with **next-due reminders**, session logs, **custom pre-track checklists**, 40+ preset tracks, iCloud sync. | **Nothing in its listing mentions helmet, harness or gear expiry, SFI punch dates, Snell years, or any per-sanctioning-body rule.** Its checklists are user-authored — the user still has to know the intervals. Car-centric, not driver-gear-centric. | https://apps.apple.com/mx/app/gridmate/id6752358463 · third-party listing https://chrome-stats.com/d/id6752358463 | `[analyst-2026-10-19, snippet]` — **listing never opened** |
| **RacePrep — Maintenance Tracker** | Free + IAP: extra cars $2.99 each; **Team Plan $7.99/mo or $59.99/yr** (US listing; a CA snapshot showed $9.99/$79.99) | iPhone only, 13+. Dev: RaceYear / Godgart Ventures LLC | Explicitly for racers. Lap dashboard, weekly inspection tasks, shopping list, parts database, race-team management. **Proves a racer will be asked $59.99/yr.** | **Team-oriented (we are single-driver by constraint). Per-car pricing. No evidence of any dated-gear or sanctioning-body logic. "Very few ratings."** Also a direct price anchor *against* us — we must be visibly cheaper. | https://apps.apple.com/us/app/raceprep-maintenance-tracker/id6478397256 | `[analyst-2026-10-19, snippet]` — **listing never opened; the two storefronts disagree on price** |
| **RaceIQ Track Day** | Not obtained `[GAP]` | iOS (**listed for iPad — iPhone compatibility unconfirmed**) | Lap-time analysis, tyre/brake wear, setup templates, damage photos. | **Performance tool, not an admin tool. No gear-date or tech-inspection function surfaced.** | https://apps.apple.com/do/app/6744105696 | `[analyst-2026-10-19, snippet]` |
| **Loggy: Car Maintenance Tracker** | Not obtained `[GAP]` | iOS | **4.6 stars from 57 ratings** — the most established general option; its category list names track and racing cars. | Generic vehicle log. **No gear, no standards, no tech inspection.** | https://apps.apple.com/us/app/loggy-car-maintenance-tracker/id1519229483 | `[analyst-2026-10-19, snippet]` |
| **CertKeeper: License Tracker** | **$6.99/mo or $59.99/yr, 7-day trial** | iOS | Generic dated-credential reminders done competently; aimed at BLS/ACLS/CEU renewals. | **Does not know what an SFI punch date is.** No per-body rules, no tech sheet, wrong audience and wrong vocabulary. | https://apps.apple.com/us/app/id6755570013 | `[snippet-only]`, carried from Scout 5 — **never opened** |
| **Expiration Reminder** | Free, **requires an account + companion web app** | iOS + web | Generic; multi-platform. | **Account + backend requirement is the opposite of our constraint and this audience's preference. 3.0 stars from 2 ratings.** | https://apps.apple.com/us/app/id1447157463 | `[snippet-only]`, carried |
| **FreedomCert** | Free | iOS | Photo/PDF of a credential + advance reminders. | **A filing cabinet with alarms. No interval logic at all — the user must already know the date.** | https://apps.apple.com/us/app/freedomcert/id6757224718 | `[snippet-only]`, carried |
| **MotorsportReg** | Free to entrants | Web (+ event pages) | **Every entrant passes through it.** Publishes each event's gear requirements page — our single best channel *and* the most likely platform to absorb this feature. | **Does not track your gear.** Event-side, not driver-side; no record of what you own. | https://www.motorsportreg.com | `[snippet-only]`, carried; event pages seen in search `[analyst-2026-10-19]` |

### 10c. The free alternatives — **honestly, the real competition**

| Free alternative | Why it genuinely works | Where it actually fails |
|---|---|---|
| **The gear tag itself** | Physically attached to the item. Never out of date, never lost, never needs a subscription. **This is the incumbent and it is excellent.** | You must be holding the item, in daylight, with reading glasses, to use it — and it tells you one item's date, not which of six lands before your June weekend. |
| **The helmet's tech sticker** | Issued by the body itself: "once inspected, a dated, non-removable sticker or decal must be placed on the helmet" — https://www.scca.com/pages/race-experience-driver-safety-gear `[snippet-only]`, carried | Records that it *was* inspected, not when it *stops being accepted*. Says nothing about the other six items. |
| **The car's logbook** | Official, authoritative, accepted at the gate, free with the car. | **It is for the car, not the driver's gear** (R13: "belongs to the vehicle rather than the owner"), it lives in the glovebox, and it does no arithmetic. |
| **A spreadsheet** | Free, flexible, already on the phone, and some racers plainly do this. **Zero switching cost for them and zero revenue for us.** | The user has to source and maintain every interval themselves — the exact work our §9 table represents — and it won't notify them in January. |
| **The tech inspector** | Free, expert, and catches the problem — one racer "was glad the tech inspectors caught it" `[paraphrase — NOT verbatim]`. | **Catches it at the gate, which is the expensive moment.** And inconsistently: "nobody had inspected it" `[snippet-only]`. |
| **Forum threads and free checklists** | Genuinely good and genuinely free. "Learn me: driver's safety gear expiration rules"; a racer's own free fire-system shopping guide. | Generic, undated, not about *your* gear, and you have to remember to go and read them. **But note: the market is currently served by people writing checklists for free. That caps our price.** |

---

## 11. CHANNELS TO THE FIRST 100 PAYING USERS

Approach order is deliberate: **earn standing before asking for anything.** Every rule below is
`[GAP]`-flagged where I could not read the forum's posted policy — **no forum's self-promotion rule
was read directly in either run**, so each is an expectation to verify in the first 10 minutes, not
a fact.

| # | Channel | URL | Self-promotion rule | Gatekeeper | Approach |
|---|---|---|---|---|---|
| **1** | **Grassroots Motorsports forum** — **free, time only. Start here.** There is already a live thread named *"Learn me: driver's safety gear expiration rules"*. | https://grassrootsmotorsports.com/forum/grm/learn-me-drivers-safety-gear-expiration-rules/275065/page1 | `[GAP — not read]`. Expect: publisher-owned forum, commercial posting discouraged without a vendor relationship. **Assume no links until invited.** | GRM editorial/forum moderators (the magazine's staff) | **Answer the existing question, for free, with the §9 table and every source URL, and no link to anything.** Earn the reputation first. Mention a tool only if asked — and the thread title says someone will ask. |
| **2** | **Classic Motorsports forum** (same publisher; existing thread *"Out of date harnesses and helmets"*) | https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1 | `[GAP]`. Same publisher, assume same policy. | Same moderators | Same play, same week. One account, consistent identity across both. |
| **3** | **24 Hours of Lemons forum** (existing threads: *"Expiration dates for fire protective gear?"*, *"expired harness?"*) | https://forums.24hoursoflemons.com/viewtopic.php?id=42620 · https://forums.24hoursoflemons.com/viewtopic.php?id=3867 | `[GAP]`. Culturally the most tolerant of scrappy self-made tools, **and the most hostile to anything that smells corporate.** | Lemons staff / "Chief Perp" culture | Post the field guide. **No polish, no marketing voice.** This is the best fit for an honest "I built this for myself" post. |
| **4** | **Apex Speed** (open-wheel / club racing; threads on harness recert and annual tech already surfaced in search) | https://www.apexspeed.com/forums/ | `[GAP]` | Forum admins | Technical, high-expertise audience — **the best place to recruit the E6 expert reviewer**, not the best place to sell. |
| **5** | **SCCA regions — 115 of them**, each with its own newsletter, tech day and annual-tech event | https://www.scca.com · region count `[snippet-only]` https://scca.com/articles/2017250-scca-annual-membership-50-000-and-counting · example annual-tech event https://cendiv.motorsportreg.com/events/great-river-scca-annual-tech-event-scott-county-park-878752 | Region newsletters routinely run member-written content; **national SCCA will not endorse and must not be implied to (§4d)**. | Regional Executive + regional Tech Chief | **Approach the Regional Tech Chief, not the marketing contact** — offer the field guide as free handout material for the region's annual tech day. The tech day is the single highest-intent gathering that exists in this niche. |
| **6** | **NASA regions + `nasaspeed.news`** (NASA's own publication, which already runs safety-gear explainers) | https://nasaspeed.news/tech/safety/making-old-new-again-recertifying-safety-equipment-can-be-more-cost-effective-than-replacing-it/ · https://nasaspeed.news/tech/safety/snell-sa2025-helmets-what-changed-and-what-you-need-to-know/ | Editorial. **Demonstrated appetite for exactly this subject.** | NASA Speed News editor; regional directors | **Pitch a contributed article, not an ad:** "the four clocks on your gear and where to find them." Byline, no product pitch in the body. |
| **7** | **Performance Racing Industry / PRI Show** — already publishes recertification explainers; SCCA and PRI have partnered to "expand motorsports access" | https://www.performanceracing.com/magazine/columns/08-05-2024/ask-experts-driver-safety-equipment-recertification · https://theshopmag.com/news/scca-pri-join-forces-to-expand-motorsports-access/ | Trade press / paid trade show | PRI editorial | Trade-press credibility play. **Later** — after E3 passes, and useful mainly for the "as featured in" credibility that lifts paywall conversion. |
| **8** | **Marque & spec-series forums:** S2KI, ForABodiesOnly (two live seat-belt-date threads), Mazda Racers, Radical registry, ClassRacer | https://s2ki.com/forums/ · https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/ · https://mazdaracers.com · https://radicalsportscarregistry.com · https://www.classracer.com | `[GAP]` each | Per-forum admins | **Highest-yield per hour** — these are the threads our actual quotes came from, i.e. the people with the problem are identifiable by name. One honest reply per thread, in order of thread activity. |
| **9** | **Facebook groups** — spec-series and regional club-racing groups | `[GAP — no specific group URL or membership count was obtained by either scout or by me. Do not quote a member count.]` | Typically "no selling" with an admin-approval exception | Group admins | **DM the admin first, always.** Offer the field guide as a pinned free resource in exchange for one permitted mention. |
| **10** | **Driver coaches and racing schools** | `[GAP — no named coach or school sourced]` | Commercial relationships | The coach | Coaches see 20–50 drivers' gear a season and are asked "is my helmet still OK?" constantly. **Offer free lifetime codes to coaches in exchange for recommending it.** Highest leverage per contact, slowest to arrange. |
| **11** | **The paddock itself** — the physical channel, and the one the growth hypothesis (§5) rests on | n/a | n/a | n/a | The Tech-Counter Sheet (F6), printed, handed across a counter, with a referral code in the footer. **E7 tests this.** Zero cost, zero scale guarantee. |
| **12** | **MotorsportReg event requirement pages** | https://www.motorsportreg.com | Platform; not an advertising channel for us | MotorsportReg (also a potential competitor, §10) | **Research use only in v1.** Do not scrape, do not integrate without reading their terms. |

**The free channel (requirement met):** **#1 Grassroots Motorsports**, and #2/#3 alongside it —
**$0, time only, with a live thread literally asking our question.** If 100 paying users cannot be
found through #1–#6 and #8, the $39.99/yr price cannot support paid acquisition anyway, and that is
itself the answer.

---

## 12. HONEST DOWNSIDES — the three most likely killers

### Killer 1 — **The pain is real but too cheap to subscribe to.** *(Most likely. This is the one.)*
A lost weekend is ~$1,185–$1,350 `(estimate)` of **discretionary hobby money**, not livelihood. The
gear tag is free and attached to the gear. The inspector is free. A spreadsheet is free. Free
checklists already exist and are good. A racer who happily writes a $650 entry cheque may still
refuse $39.99/yr for admin, because the admin feels like something he *should* just remember — and
admitting otherwise is mildly embarrassing in a competitive culture. Both scouts named a version of
this as the top failure reason, and we have a sourced counter-signal that a share of the paddock
has never been caught at all ("nobody had inspected it").

**Leading indicator:** **E3 deposit conversion below 2.5%** of qualified visitors. Earlier and
cheaper: **E1 producing ≥2 replies saying the tag or the inspector is sufficient** within 7 days,
for $0. Earliest of all: **E2's discovery rate below 15%** — if most racers have nothing expiring
inside the season, there is no product regardless of price.

### Killer 2 — **Gear dates are entered once a year, so there is nothing to retain.**
The product's virtue is its vice: after the garage trip it should go silent for months. A
subscription whose correct behaviour is silence has no habit loop, and annual renewal arrives when
the user has forgotten the app exists and sees a $39.99 charge. Worse, after one season the user has
*learned* their dates and may cancel having extracted the entire value for one year's fee — a
textbook one-and-done disguised as a subscription. This is close to tripping **rubric gate 5
(recurring use)**, and it is the strongest intellectual argument against the whole niche.

**Leading indicator:** **off-season re-engagement.** Instrument the Season Opener digest (F5) from
day one. If **<40% of subscribers open the app in the 60 days before their season's first event**,
renewal will collapse and the honest move is to **re-price as a one-time purchase at $19.99–$29.99**
rather than pretend it is a subscription. Pre-commit to that pivot now so it is not argued about in
month 11. Secondary indicator: median gear-edit events per user per year — if it is ≤1, the thesis
is a one-time purchase.

### Killer 3 — **Rule drift and per-body variance make us wrong, and being wrong here is the worst possible kind of wrong.**
The free sources **already contradict each other** on helmet life (10 vs 12 vs 15 years, §9b R8) and
on how the harness clock is counted (R1 vs R2). Bodies retire standard generations on their own
dates (R10) and set their own shorter windows (R11). Rules change annually. **And the failure mode
is not a wrong invoice — it is telling someone their safety equipment is current when their
inspector will reject it, or worse, when it genuinely is not fit to use.** That is an App Store
Review exposure, a plaintiff's exhibit, and a reputational end-state in a small community where
everyone talks. The content-maintenance burden (~40 rows × multiple bodies × annual updates) also
falls on a two-person studio with no domain insider.

**Leading indicator:** **E6** — if the expert cannot confirm ≥90% of the §9 table, or resolves R8
differently from all three of our free sources, stop. Post-launch: **any support email claiming the
app showed a date the inspector disagreed with is a sev-1.** Pre-commit to a public, dated
"rules-as-of" changelog and to the custom-interval mode (F2) as the default escape hatch. If a
second such email arrives in the first season, **remove the per-body rule sets and ship only "your
dates, your intervals"** — a weaker product that cannot be wrong on our account.

**Honourable mention (a fourth risk, named not ranked):** the category is **not** as empty as Phase 1
said (§10). GridMate and RacePrep already have reminder engines and racer audiences. If either ships
gear-expiry before we get to 100 paying users, our only differentiator is the per-body rule table —
which is also the thing most likely to be wrong (Killer 3). **Leading indicator: E5 on day 1, then a
quarterly re-check of both listings' "what's new".**

---

## 13. WHAT IS STILL UNVERIFIED — ranked by how much the decision depends on it

| Rank | Unverified | Why it matters | How to close | Cost |
|---|---|---|---|---|
| **1** | **Whether anyone will pay anything.** No racer has ever been asked. Zero revenue signal exists. | It is the riskiest assumption (§5). Everything else is conditional on it. | **E3** deposit test | $0 |
| **2** | **Whether a dedicated incumbent already exists.** No agent could search the App Store in either run; "blue ocean 5/5" is an absence of evidence, and three adjacent apps surfaced this run that Phase 1 missed. | CLAUDE.md §1: a well-funded competitor nailing it means drop the niche. | **E5**, manual, day 1 | $0, 1 day |
| **3** | **R8 — helmet service life: 10, 12, or 15 years.** Three free sources, three answers. | It is the most-used rule in the app and the one most likely to be shown to a user on day one. | **E6** expert review | $200–$400 |
| **4** | **Whether there are verified verbatim racer complaints at all.** Every quote in this file is `[snippet-only]` or `[paraphrase]`. Neither scout nor I opened one forum thread. | We cannot write a landing page on paraphrases, and we cannot judge intensity of pain from a search snippet. | Open the 6 named threads by hand (§4a); **E4** interviews | $0, hours |
| **5** | **Club-racer income or net worth.** No figure exists in any scout file or in this one. Phase 1's wealth score of 5 is *inferred*; I marked it 3. | It is 15% of the rubric and it was scored on an inference. If the audience is cost-pressured (and its own body says it is), $39.99 is the ceiling, not the floor. | **E4** interviews; SEMA/PRI market reports; SCCA media kit | $0–$500 |
| **6** | **Whether club racing is growing, shrinking or flat.** Unsourced; the one directional signal is soft-negative. | 8 weeks and real money on a shrinking hobby is a different bet. | SCCA annual report / Jan 2026 convention materials; NASA membership office | $0, hours |
| **7** | **R1 vs R2 — how the harness 2-year clock is counted.** Anniversary vs 31 December of the second year; up to ~11 months of difference. | Directly changes whether the app says "pass" or "lands before your event". | **E6** | included |
| **8** | **R7 — the three fire-system clocks** (2yr recert / 5yr hydro / 6yr life, and whether the 6 years runs from installation or manufacture). | Drives the most expensive single item in the §4e price anchor. | **E6** | included |
| **9** | **Whether suits, window nets, fuel cells and FHR devices have any free-published dated interval at all.** `[GAP]` on all four — **the brief assumed a suit service life that our evidence does not support.** | Four of the eight gear types may have **no shippable rule**, which shrinks the product by half and weakens the "6–8 items" multiplicity argument that makes this a subscription rather than a free reminder. | **E6**, plus one targeted search round | $0 |
| **10** | **Whether the current SCCA GCR and the NASA CCR are free to read, and at what URL.** 2025 GCR appears free; no 2026 URL found; CCR not located at all. | Determines whether SCCA/NASA rows can cite a rulebook or must cite free article pages (which works, but is weaker in-app). | 15 minutes by hand on a working browser | $0 |
| **11** | **Whether SFI sells its specs, and for how much.** `[GAP]` in both runs. | **Does not change the verdict** (§9a — we never need the text), but we must not repeat an unverified price. | One page load | $0 |
| **12** | **Every forum's actual self-promotion policy.** None was read. | Getting banned from Grassroots Motorsports in week 1 removes the only free channel. | 10 minutes per forum, before posting | $0 |
| **13** | **Facebook group names and sizes; named driver coaches and schools.** `[GAP]` — no URL, no count, no name obtained. **No membership count may be quoted.** | Channels 9 and 10 in §11 are currently aspirational. | Manual search | $0 |
| **14** | **Whether the paddock actually passes the artefact along** (the growth hypothesis). | If the viral engine doesn't run, $39.99/yr cannot fund paid acquisition. | **E7** | $0, 60 days |

---

## 14. VERDICT

**PURSUE — but as a cheap, hard-gated 8-week experiment, not as a conviction bet.**

**Strength of bet: 6 / 10.**

What earns the 6:
- The **mechanic is correct and rare**: the user's own dates + free published intervals + hard dated
  gate + recurring annually. The paywall carve-out **holds** (§9a) — this is not a gate failure.
- **v1 is genuinely a week** of pure date arithmetic, no backend, no accounts (rubric 5/5).
- **Reachability is 5/5 with named URLs and a live thread asking our question** — and the first
  channel costs $0.
- The **aha is deliverable free in a browser in under 60 seconds** (tie-breaker (a)), and a
  **concierge version can be sold before the app exists** (tie-breaker (d)).
- Total cash to a go/no-go is **$215–$415**.

What caps it at 6:
- **The pain is a lost hobby weekend (~$1,200 `(estimate)`), not a lost livelihood.** The honest
  price ceiling is ~$60/yr, so 1,000 subscribers is ~$34k/yr net `(estimate)`. **Good first app,
  small business.**
- **Purchasing power is inferred, not measured**, and the audience's own sanctioning body calls it
  cost-pressured.
- **Growth is unsourced and leans soft-negative.**
- **Blue ocean is unproven and already weaker than Phase 1 claimed** — three adjacent apps with
  reminder engines exist.
- **Retention is the structural weakness**: dates get entered once a year. This may honestly be a
  one-time purchase wearing a subscription's clothes.
- **Zero verified verbatim complaints and zero revenue signal.** Nobody has been asked for a dollar.

**The disciplined path:** run **E5 on day 1** (it can kill the niche for free), then **E1 → E2 → E3**
in that order, with **E6 held until E2 passes**. **Kill date 2026-12-14** on <25 paid deposits from
≥400 qualified visitors; fallback is **Scout 5 §A — USCG-credentialed charter captains (25/30)**,
which has a harder gate, a professional audience and a free federal rule set.
