# Deep dive — USCG-credentialed mariners: sea-service days and credential recency

Date: 2026-10-19 · Analyst: research analyst (sub-agent) · Phase 2 deep dive, top-4 finalist
Sources: `research/raw/scout-1-assets.md` §3 (niche 2), `research/raw/scout-5-wildcards.md` §A, plus
this run's own searches. Verification markings from the raw files are carried forward unchanged.

## 0. Verification legend and this run's tool conditions

| Marking | Meaning |
|---|---|
| `[verified-fetch]` | I opened the page myself in this run. **Count: zero.** Every `WebFetch` returned `getaddrinfo ENOTFOUND` (ecfr.gov, dco.uscg.mil, law.cornell.edu all failed). |
| `[search-snippet]` | A search engine returned the text/figure off a real page at the given URL; page not re-opened. |
| `[snippet-only]` | Carried forward from scout 1 at its original confidence. Do not upgrade. |
| `[snippet-quoted]` | Carried forward from scout 5: the snippet presented the text inside quotation marks. |
| `[search-summary — NOT verbatim]` | My search tool paraphrased a page. Quotation is **not** confirmed. Never use in a pitch. |
| `(estimate)` | My arithmetic, inputs named. |
| `[GAP]` | Not obtained. |

**What I could not do this run:** open a single primary source. eCFR, dco.uscg.mil (NMC), Cornell LII
and apps.apple.com were all unreachable (DNS denial at the proxy). WebSearch worked and I spent
~9 calls. **So the entire regulatory basis of this product is still `[search-snippet]` at best.**
That is the single most important sentence in this document; see §9 and §13.

---

## 1. Thesis and ICP

**Thesis.** A US charter or delivery captain's permission to earn money is a credential, and the
credential is gated on a *rolling count of qualifying service days* — not a date. The count is
computed by rules the mariner has never read, from records the mariner keeps in a shoebox, at a
moment five years after the days were worked. Letting the count run short converts a paperwork
renewal into schooling: OMSA puts reactivating a fully expired captain's licence at
**"between $12,100 and $43,710 in class fees and between 39 and 124 days of classroom
instruction"** `[snippet-quoted]`
(https://www.workboat.com/offshore/omsa-coast-guard-policy-will-ease-experienced-mariners-return-to-work).
Nobody can reconstruct that count from memory, the governing rules are free and public (46 CFR
part 10 + NMC checklists), the whole computation is local arithmetic on the user's own entries, and
the one existing free app (SeaLog) appears to *log days and remind on dates* without ever computing
a rolling window. A phone-first, no-account, offline day ledger that continuously shows the user
their own trailing-5-year and trailing-3-year totals against the window they chose — and exports a
dated, per-period PDF table shaped like the sea-service evidence 46 CFR 10.232 demands — is a
product, not a reminder app. **The bet is not on the renewal reminder (once every five years); it
is on the daily logging habit, which is also the riskiest thing about it.**

**ICP (one line).** The US owner-operator charter / delivery / launch / small-tow captain holding an
OUPV ("six-pack") or Master <100 GT MMC, who runs the boat as their own business, renews their own
credential, and is the only person on earth keeping their logbook.

---

## 2. Value Equation (Hormozi)

`Value = (Dream outcome × Perceived likelihood of achievement) ÷ (Time delay × Effort and sacrifice)`

### Dream outcome — in their words
Not "stay compliant". It is: **"I never want to get a letter back from the NMC."** The closest real
language we have is the complaint itself —

> "if you don't list each specifically by date, then they don't want/accept sea time letters of over
> three years"
— gCaptain `[snippet-only]` https://forum.gcaptain.com/t/any-advise-on-how-to-write-my-license-renewal-sea-service-letter/10487

and the dread that sits under it —

> "Since you did not place your license in continuity, you are most likely going to have to retest /
> course to get it back as though you never had a license."
— gCaptain `[snippet-only]` https://forum.gcaptain.com/t/continuity-license/3031

So the dream outcome, concretely: **"When I file my renewal, I hand over a dated list of every day I
worked, it is accepted first time, and I never miss a season because of paperwork."** Secondary and
real: *"I want to know today, in one glance, how many days I have in the window — not find out in
year five."*

### Perceived likelihood of achievement — what makes them believe it
Three things, in this order, and none of them is a marketing claim:

1. **It is their own logged data.** Every number on the screen traces to an entry they made, with the
   date, the vessel and the hours they typed. There is no magic and no server. A captain distrusts
   a black box that tells him he qualifies; he trusts arithmetic on his own entries. (This is also
   why we must never phrase it as a verdict — see §8 and §9.)
2. **Citations in the engine, visible in the app.** Every rule the engine applies shows its source
   (46 CFR 10.107, 10.227, 10.232; NMC checklist) with a tappable link and a "last reviewed" date.
   The user can check us against the regulation in ten seconds. Transparency is the proof.
3. **The auditable PDF.** A dated table, each period listed individually, with the vessel name,
   official number, gross tonnage and propulsion that 46 CFR 10.232 requires as evidence
   `[search-snippet]` https://www.law.cornell.edu/cfr/text/46/10.232 — which is exactly the artefact
   complaint #1 says gets letters rejected when it is absent. Belief comes from holding the output.

### Time delay — first value in under 90 seconds
The aha is **not** "start logging and come back in five years". Onboarding bulk-adds a repeating
season pattern ("Tuesday–Sunday, 1 Apr – 15 Oct, 2022 through 2026") in **three taps**, then shows a
real trailing-5-year number.

- Web calculator (pre-app, the MVP): **under 60 seconds** from landing to a day count. This satisfies
  the rubric's tie-breaker (a) directly.
- In app: **target 75 seconds, hard budget 90 seconds** from first launch to the Window card.
- Ongoing: one tap per worked day, **under 5 seconds**.

### Effort and sacrifice — honest
**What we remove:** the shoebox; retyping five years of trips; the spreadsheet with the broken date
formula; the 1.5-day two-watch arithmetic; working out *when* a day drops out of the window; writing
the letter of service from scratch; and the fee to a licensing consultant to do the same sum.

**What we still demand — and we must say this on the sales page, not hide it:** *you have to log the
day.* This is a daily habit for the length of a season. We can soften it (one-tap repeat, a weekly
catch-up screen, a "same as yesterday" button, bulk season patterns), but we cannot remove it: there
is no backend, no AIS feed and no account in v1, so the app knows nothing we are not told. A captain
who logs nothing gets nothing. Saying so up front costs us some installs and buys us the retention
we are actually betting on.

### How the product maximises the top and minimises the bottom
- **Maximise dream outcome:** sell the accepted-first-time renewal and the never-missed season, not
  "day tracking". The hero artefact is the PDF, not the log screen.
- **Maximise perceived likelihood:** citations on screen, their own data, no server, and an output
  they can hold before they pay.
- **Minimise time delay:** bulk season backdating *in onboarding*, so the first number is a real
  number. The free web calculator delivers the same aha before an install exists.
- **Minimise effort:** one-tap logging, repeat-last-trip, vessel library that auto-fills the 10.232
  fields once, and notifications that nudge the habit rather than the deadline.

---

## 3. Starving crowd test

| Test | Score /5 | Justification (evidence) |
|---|:---:|---|
| **Massive pain** | **5** | The only niche in either scout cluster where missing a date **stops income** rather than costing a fee. $12,100–$43,710 in class fees to reactivate `[snippet-quoted]` (WorkBoat/OMSA, above). "the grace period does not mean that you can continue operating commercially on your expired license" `[snippet-only]` https://maritimelicensingagency.com/announcements-1/how-do-i-get-my-expired-uscg-license-back — for a sole operator in a 14-week season, that is the season. Scout 1: "This is the only niche in the cluster where missing a date **stops income**." |
| **Purchasing power** | **3** | Not HNW. BLS SOC 53-5021 (Captains, Mates and Pilots of Water Vessels), May 2023: median annual wage **$88,730**, 10th pct $44,600, 90th pct $161,510 `[search-snippet]` https://www.bls.gov/oes/2023/may/oes535021.htm. A third-party aggregator reports a May 2025 median of $92,460 — **unverified against bls.gov, do not cite**. But WTP is demonstrated, not inferred: forum posters recommend "paying for a licensing consultant to confirm your specific path" `[snippet-only]`, and two licensing consultancies run as going businesses (maritimelicensingagency.com, marinerslearningsystem.com). Owner-operators also expense it against charter income. |
| **Easy to target** | **4** | One dominant watering hole (gCaptain forum, whose licence/renewal threads scout 1 calls its highest-traffic category), plus TrawlerForum "Captains License" threads (verified live by this run's search), The Hull Truth, and — the sharpest list imaginable — the licence schools' own newsletters. Marked down from 5 because **no member count for any of these was obtainable** `[GAP]`, and I could not verify a single forum's self-promotion policy (§11). |
| **Growing** | **3** | Stock is flat-to-known: ~**200,000** Americans held a valid MMC as of 2023 (GAO, via MarineLink) https://www.marinelink.com/news/numbers-gao-examines-americas-mariner-541247 ; GAO-23-106629 https://www.gao.gov/assets/gao-23-106629.pdf. Flow is the better signal: **20,451 original MMC applications in 2024** (same source) — a renewing cohort that never stops. 2017 MARAD showed a mariner deficit (13,607 needed vs 11,768 sailing). But **the OUPV-specific population is `[GAP]`** and publicly unavailable; scout 5 says an NMC request or FOIA is the only route. Scout 5's "10–20% of 200,000 = 20k–40k" is explicitly its own inference, not a cited number. |

**Verdict: a starving crowd on pain, a merely well-fed one on wealth.** Total 15/20. The pain score
carries this niche; the audience-size gap is the honest weakness and it is a *countable* gap, not an
unknowable one (see §13 item 3).

---

## 4. Grand Slam Offer

### 4a. Every problem, in the customer's own words

Quotes are `[snippet-only]` from scout 1 unless noted. Where no quote exists I label the problem
**(inferred)** and say so, per the studio evidence standard.

| # | Problem, in their words |
|---|---|
| P1 | > "if you don't list each specifically by date, then they don't want/accept sea time letters of over three years" — gCaptain https://forum.gcaptain.com/t/any-advise-on-how-to-write-my-license-renewal-sea-service-letter/10487 |
| P2 | > "As long as your license has not been expired for more than year, you can renew without sea time. **If you do not have one year of sea time in the past five years you will need to complete an at-home open book test.**" — gCaptain https://forum.gcaptain.com/t/reinstate-an-expired-uscg-license/45425 |
| P3 | > "Time-and-a-half credit will not be allowed without verification in the letter of service (or on the discharges) that the day consisted of a **12-hour workday** while working on a two-watch system." — gCaptain https://forum.gcaptain.com/t/license-renewal-questions/10704 |
| P4 | > "Since you did not place your license in continuity, you are **most likely going to have to retest / course** to get it back as though you never had a license." — gCaptain https://forum.gcaptain.com/t/continuity-license/3031 |
| P5 | > "Assuming you don't have the one year of sea time in the last five … you would need **the open book at home test for your license, and for STCW: Basic Safety Training Refresher course(s).**" — gCaptain https://forum.gcaptain.com/t/license-renewal-questions/10704 |
| P6 | Thread titles as evidence of felt pain: "**Sometimes There Is A God — A Story of Sea Time Lost (and then found)**" https://forum.gcaptain.com/t/sometimes-there-is-a-god-a-story-of-sea-time-lost-and-then-found/5200 ; "**A request for Mr Cavo's attention at the NMC regarding old sea time records**" https://forum.gcaptain.com/t/a-request-for-mr-cavos-attention-at-the-nmc-regarding-old-sea-time-records/1619 . Scout 1: one poster ~20 years out of the industry "described requesting archived sea service records from the Coast Guard, which took weeks." |
| P7 | NMC loses paperwork and does not explain denials. `[search-summary — NOT verbatim]`: a thread titled "NMC lost my seatime letters" https://forum.gcaptain.com/t/nmc-lost-my-seatime-letters/8969 in which commenters advise never sending originals; and "Anyone else frustrated with incredibly poor service at NMC?" https://forum.gcaptain.com/t/anyone-else-frustrated-with-incredibly-poor-service-at-nmc/8872 where a poster reports a denial with no letter or email and a ~3-month average against a stated ~10 days. **I did not verify these as quotations — treat as leads, not copy.** |
| P8 | Employers will not produce the letter: thread "Company Won't Give Sea Time Letter" https://forum.gcaptain.com/t/company-wont-give-sea-time-letter/3344 `[search-summary — NOT verbatim]`. For our ICP this inverts: **the owner-operator *is* the employer, so there is no one to ask.** Scout 5 states this directly: the employer letter is "useless to an owner-operator who *is* the employer". |
| P9 | **The window's definition is genuinely disputed.** A gCaptain thread reports a dispute over whether NMC counts five calendar years back or an 1,800-day window from the credential's issue date https://forum.gcaptain.com/t/renewal-sea-service/61461 `[search-summary — NOT verbatim, anecdotal]`. |
| P10 | **(inferred)** "I don't know what my number is right now." No quote found. This is the inference the whole product rests on, and it is unproven — it is the thing experiment E3 exists to test. |
| P11 | **(inferred)** "I'm not putting my sea time on someone else's server." Scout 1 asserts mariners are "notably wary" of this; **no quote supports it.** Treat as a hypothesis about SeaLog's weakness, not a fact. |
| P12 | **(inferred)** "If your app gets the rule wrong, it costs me my licence, not you." No quote found, but it is the objection a careful captain will raise and we should pre-empt it. |

### 4b. A solution for each

| # | Solution |
|---|---|
| P1 | PDF export that lists **every period individually by date**, never a summary total. This is the hero feature and it is a direct answer to the stated rejection reason. |
| P2 / P5 | Trailing-5-year rolling count, recomputed on every entry, shown against the window the user selected, with the **date the window next loses a day**. The point is to see the shortfall in year two, not year five. |
| P3 | A per-entry two-watch / 12-hour flag that drives 1.5-day credit in the engine, **and** prints the qualifying sentence into the letter-of-service template so the credit is not refused for want of wording. |
| P4 | A credential date ladder (MMC, medical certificate, STCW, TWIC — all user-entered) with local notifications at 12/6/3/1 months, plus a plain statement of the grace-period policy with its citation and a "last reviewed" date. |
| P6 / P7 | The record lives on the mariner's phone and exports as a file they keep. We are the second copy that the NMC cannot lose. Per-trip printable slips so originals never leave their hands. |
| P8 | A self-certified letter-of-service template for the owner-operator, with the 46 CFR 10.232 evidence fields pre-filled from the vessel library. |
| P9 | Do **not** pick a side. Compute and display **both** readings side by side (calendar-5-years and 1,800-day-from-issue), each labelled with its source and its dispute status, and let the user choose which to track. Ambiguity disclosed is trustworthy; ambiguity resolved by us is liability. |
| P10 | The 90-second onboarding backdate, so the number exists before the habit does. |
| P11 | No accounts, no server, no network permission in v1. Export to the user's own Files/iCloud. |
| P12 | An in-app Rule Source Sheet: every rule, its citation, its URL, its verification level, its reviewed date — and a standing disclosure that the NMC, not us, determines acceptability. |

### 4c. Trim and stack — the final offer

**Trimmed out of the offer** (real but not worth their price in a one-week v1): drug-test MIS program
tracking (46 CFR 16.230, annual report by 15 March), TWIC workflow, radar-observer renewal, AIS
auto-detection, any multi-crew or office view. All deferred (§8).

**The stack:**

1. A one-tap sea-service day log that works with no signal, no account and no server.
2. A rolling-window engine that computes your trailing-5-year and trailing-3-year day totals — with
   1.5-day two-watch credit — against the window you select, and tells you the date your window next
   drops a day.
3. The dated, per-period PDF sea-service summary, with the 46 CFR 10.232 evidence fields, plus a
   letter-of-service template that includes the 12-hour two-watch sentence.
4. A credential and document date ladder with reminders you control.
5. The Rule Source Sheet: every rule we compute from, cited and linked, with a reviewed date.
6. *(Founding 100 only)* One hand-built reconstruction of your past five years from whatever records
   you have.

### 4d. M-A-G-I-C name

The constraint that kills most candidates is §4 of CLAUDE.md: **the name must not read as a verdict.**
Anything like "Renewal Ready", "Current", "Qualified", "Cleared to Sail" or "Sea-Worthy" fails the
"Airworthy today?" → "All items current?" test, because it states our opinion about the user's legal
standing. The name must describe *their records*.

| Candidate | Magnet (reason why) | Avatar | Goal | Interval | Container | Verdict |
|---|---|---|---|---|---|---|
| **360 Ledger** | 360 — the number the whole renewal hinges on | charter captains / USCG-credentialed mariners | know your own day count | the five-year rolling window | Ledger (iOS app + exportable record) | **PICK** |
| Sea-Day Ledger | the unit they think in | mariners | count your days | five-year window | Ledger | Safe but inert; no magnet. |
| Window Watch | the rolling window | mariners | watch the window close | rolling | Watch | "Watch" collides with watchkeeping and with watchOS; confusing. |

**Chosen: `360 Ledger`** — full store title *"360 Ledger — Sea-Service Day Log for USCG-Credentialed
Mariners"*. It is a noun about records, contains no claim about the user's standing, and the "360"
does the magnet work.

**Name availability: PARTIALLY CHECKED, and one finding matters.**
- A USPTO/trademark aggregator search for "360 Ledger", "Sea Day Ledger" and "SeaDay Ledger" returned
  **no matching marks**; the hits were unrelated (Ledger SAS crypto wallets, generic bookkeeping
  apps) `[search-snippet]`. **This is an aggregator result, not a USPTO search — treat as unchecked.
  A real USPTO Class 9/42 search is required before any spend on the name.**
- **"Sea Service" is already an App Store app name** (Sea Service App Ltd, ID 6473282537)
  https://apps.apple.com/app/sea-service/id6473282537 — so that naming direction is closed, and the
  app itself is a competitor we did not previously know about (§10).
- `360ledger.com` / App Store exact-name collision: **unchecked** (apps.apple.com unreachable).

### 4e. Price, anchored to the cost of the problem

**The anchor is the cost of one lapse, not any competitor's price.**

Sourced anchor: reactivating a fully expired captain's licence =
**$12,100 – $43,710 in class fees, and 39 – 124 days of classroom instruction**
`[snippet-quoted]`, OMSA via WorkBoat
(https://www.workboat.com/offshore/omsa-coast-guard-policy-will-ease-experienced-mariners-return-to-work),
corroborated by Maritime Executive, Professional Mariner and World Ports.

Arithmetic, **low end only**, so the anchor is conservative:

```
Class fees, low end                                     $12,100   [snippet-quoted, OMSA]
Earnings foregone during 39 classroom days:
  BLS May 2023 median, SOC 53-5021            $88,730 / yr        [search-snippet, bls.gov]
  ÷ 250 working days                          = $354.92 / day     (estimate)
  × 39 classroom days                         = $13,842           (estimate)
                                               ---------
Low-end cost of ONE lapse                               $25,942   (estimate, inputs above)
```

(High end, for scale only: $43,710 + 124 × $354.92 = **$87,720** *(estimate)*. I am not anchoring to
this; the low end is already two orders of magnitude above any price we could charge.)

Second, smaller, more frequent anchor: you may renew inside the grace period but **you may not work**
`[snippet-only]`. One lost charter day at the captain day rates visible in Boatsetter listings —
**$175–$255/day** `[search-snippet]`, individual listings, not a survey — exceeds two years of our
subscription. One lost 14-week season at $354.92/day × 70 working days = **$24,844** *(estimate)*.

**Recommended price:**

| | Price | Arithmetic against the anchor |
|---|---|---|
| **Annual (the one we push)** | **$89 / year** | $25,942 ÷ $89 = **291×**. Across a full 5-year renewal cycle: $89 × 5 = $445, still **58×** the low-end lapse cost. Less than **half of one day's captain rate** at the low Boatsetter figure. |
| Monthly | **$12.99 / month** | $155.88/yr = **1.75×** the annual. It exists to make the annual obviously correct, and to catch the seasonal captain who will not commit in March. |

**Why we push the annual, specifically here:** the product's value is a *rolling five-year window*. A
user who lapses in October and resubscribes in April has a hole in the ledger, which is the one
failure the product exists to prevent — so the annual is not a pricing preference, it is the
correct unit of the product. It also prices at a level the ICP already pays (CertKeeper, a generic
cert tracker that knows no maritime rules, sits at **$59.99/yr** `[search-snippet]`
https://apps.apple.com/us/app/id6755570013 — we are 1.5× a generic tool while doing the one thing
that matters), and it is a deductible business expense for an owner-operator. Also: a renewal happens
once every five years, so **a monthly-dominant mix would make churn invisible until it is fatal**;
annual forces an honest retention read every twelve months.

Free tier (not a price, a strategy): logging and the window total stay free forever. The paywall sits
on the **PDF export, multiple credentials, unlimited vessels and window projections** — i.e. after
the aha. See §8.

### 4f. Guarantee — honest and Apple-compatible

We cannot refund an App Store purchase; only Apple can. So the guarantee cannot be a money promise.
It is a **make-good promise** plus an accurate statement of Apple's process.

**Exact wording to ship (sales page and in-app, verbatim):**

> **Our promise, and what we can and cannot do about money.**
> App Store subscriptions are sold and refunded by Apple, not by us. If you want a refund, you ask
> Apple at reportaproblem.apple.com — Apple decides, and we have no part in approving or denying it.
> We will never tell you we have issued a refund we cannot issue.
>
> Here is what we *can* promise, and will.
> If 360 Ledger does not do what this page says it does, email us at <support@…> within 60 days of
> your purchase and tell us what it failed to do. We will then, at our cost and without argument:
> (1) build your sea-service day summary by hand from whatever records you have — photos of a paper
> log, a spreadsheet, a text message, anything — and send you the PDF; and
> (2) send you an App Store offer code for a free year, if you decide to stay.
> If you would rather just be done with us, we will tell you exactly how to ask Apple for the refund
> and we will not try to talk you out of it.

Notes for the founder: (a) do not call this a "money-back guarantee" anywhere; (b) the offer-code
route is the mechanism CLAUDE.md §5 already requires; (c) the hand-built make-good is bounded by the
Founding 100 cap, so the liability is finite.

### 4g. Scarcity and urgency — real only

**Real scarcity (one, with its arithmetic shown publicly):**

> **Founding 100.** The first 100 paying subscribers get the hand-built five-year reconstruction
> included, and keep $89/year for as long as they stay subscribed. It is capped at 100 because one
> person builds each one by hand — about two hours each, which is two hundred hours. When the hundred
> are gone, the reconstruction becomes a paid add-on.

That cap is true, it is founder-time-bound, and the arithmetic (100 × 2h = 200h) is stated so nobody
has to take it on trust.

**Real urgency:** none that is ours. **We will not ship a countdown timer, a "price rises Friday"
line, or a fake cohort close date.** The only true deadline in this product belongs to the user: the
date their own window next drops a day, and the date on their own credential. The app surfaces those
dates; the marketing does not manufacture one. (If the Founding 100 fills, that is a true close and
we say so once, factually.)

### 4h. Bonuses, each killing one named objection

| Bonus | The objection it kills, in the customer's words |
|---|---|
| **1. Hand-built Five-Year Reconstruction** (Founding 100) — send any records in any form; we return the dated per-period PDF. | > "if you don't list each specifically by date, then they don't want/accept sea time letters of over three years" `[snippet-only]` — i.e. *"I have five years of trips in a shoebox and I am not retyping them to try your app."* |
| **2. Letter of Service template with the two-watch sentence built in.** | > "Time-and-a-half credit will not be allowed without verification in the letter of service … that the day consisted of a 12-hour workday while working on a two-watch system." `[snippet-only]` — *"I'll fill it in and still get it kicked back."* |
| **3. Rule Source Sheet** — every rule, citation, URL, verification level, reviewed date. | **(inferred — no quote found)** *"How do I know your numbers are right? If you get this wrong it costs me my licence, not yours."* |
| **4. Your Ledger Stays Yours** — no account, no server, no network permission; one-tap export to your own Files/iCloud. | **(inferred — no quote found; scout 1 asserts this wariness but cites no quote)** *"I'm not putting my sea time on somebody else's server."* |
| **5. Paper-Trail Pack** — printable per-trip slips to sign, and an export you keep so you never send an original. | > thread: "NMC lost my seatime letters" `[search-summary — NOT verbatim]` https://forum.gcaptain.com/t/nmc-lost-my-seatime-letters/8969 — *"they lost my letters last time."* |
| **6. Window-Closing Calendar** — the specific dates your own window drops days, next twelve months. | **(inferred — no quote found)** *"I don't know when my own clock actually runs out."* |
| **7. Both-Readings View** — calendar-five-years and 1,800-days-from-issue computed side by side, each labelled with its source and its dispute. | > the dispute itself: whether NMC counts five calendar years back or 1,800 days from issue `[search-summary — NOT verbatim]` https://forum.gcaptain.com/t/renewal-sea-service/61461 — *"my evaluator counted it differently."* |

---

## 5. Lean Startup hypotheses

**Value hypothesis (falsifiable).**
*A USCG-credentialed owner-operator captain who cannot state their trailing-five-year qualifying-day
total today will, when shown that total computed from their own entries, log days at least 20 of the
next 30 days and pay $89/year to keep doing it.*
Falsified if, in E6, fewer than 25% of 20 committed users log on 20+ of 30 days, or if fewer than 3
of the first 500 qualified landing-page visitors pay for the concierge output (E5).

**Growth hypothesis (engine named).**
*Growth comes from the **paid engine of growth, funded by referral-shaped word of mouth inside a
single forum**: a captain who hands the NMC an accepted dated PDF tells the next captain in the
licence-renewal thread, so CAC stays below one year's revenue ($89) with no paid ads.*
Named engine: **sticky first, then paid.** Retention (the daily log) is the engine's flywheel; the
paid engine only runs if LTV ≫ CAC, which requires the annual to renew at least twice. Viral growth
is explicitly **not** claimed: this is a single-user app with no social surface, so a viral
coefficient above 0 would be a surprise, not a plan.

**The single riskiest assumption.**
**That a working captain will log a day, nearly every day, for years, when the payoff is five years
away.**

Why it is riskier than the others:
- *Riskier than "is the pain real?"* — the pain is the best-sourced thing in this file ($12,100 floor,
  `[snippet-quoted]` from a trade body via four outlets). It is not seriously in doubt.
- *Riskier than "are the rules usable?"* — the rules are free, public and numeric. They are
  **unverified** (§9), but verification is a known, finite task, not a coin flip.
- *Riskier than "does SeaLog already win?"* — that is a **gate, not a risk**: one afternoon with the
  app resolves it for $0. Risks you can settle in a day are cheap.
- Habit formation is the only assumption that (a) cannot be tested faster than ~30 days, (b) has no
  workaround inside our constraints — no backend, no AIS, no accounts means the app knows nothing we
  are not told — and (c) if false, kills the *subscription*, not just a feature. A renewal reminder
  fires once every five years; nobody pays $89/year for that. Scout 5 reached the same conclusion
  independently: *"the subscription must be sold on the day-logging, not the renewal reminder."*

**Dated kill criterion.** If, by **2026-12-14** (8 weeks from today), E1/E2 have not cleared and E5
has not produced ≥3 paid concierge orders, the niche is parked and the studio moves to the next
finalist. No code is written before E1 clears.

---

## 6. MVP — the smallest test of the riskiest assumption

**No app. Not one line of Swift.** A landing page, a free browser calculator, a concierge service and
a 30-day manual habit probe. Total cash ≈ $300, total elapsed ≈ 6 weeks.

### What the founder does by hand

**Week 0 — the gate (2 days, $0).** Install SeaLog. Install "Sea Service" (ID 6473282537) and
Maritime Logs. Enter a deliberately awkward fake record: 311 days across 2021–2026, 40 of them
flagged 12-hour two-watch, spanning two vessels of different tonnage. Screenshot everything. Answer
one question: **does any of them tell you a trailing-five-year total and a shortfall, or do they only
log days and remind on dates?** If one of them computes the window, stop here and drop the niche.

**Week 1 — the aha, in a browser (3 days, ~$60).** One static page at a cheap domain. Above the fold,
a calculator with four inputs: which days of the week you work, which months, which years, and
whether any were 12-hour two-watch. It outputs: days in your trailing 5 years, days in your trailing
3 years, and the date the window next drops a day. No signup. Under 60 seconds. Beneath it, the Rule
Source Sheet with every citation, and one honest line: *"These are your own figures from the pattern
you entered. The National Maritime Center determines what sea service it accepts."* Email capture is
a single field, optional, labelled "send me my figures as a PDF".

**Weeks 2–3 — the concierge offer (hand-delivered, $0 cash).** On the same page:

> **Send me your records in any form and I will build your five-year sea-service summary by hand.**
> Photos of a paper log, a spreadsheet, your booking emails, your deposits, or just a description of
> your seasons. Within 72 hours I will send you a dated PDF table listing every period individually,
> with vessel name, official number, gross tonnage and propulsion — the fields the regulation asks
> for. **$49.** If it is not useful to you, I refund it, no questions.

The founder, by hand, for each order: reads whatever arrives; builds the day table in a spreadsheet
applying 46 CFR 10.107 (8-hour day; the under-100-GRT shortened day with its 4-hour floor; 1.5-day
two-watch credit) and 10.232's evidence fields; computes both window readings (calendar-5-years and
1,800-days); renders the PDF; writes a short covering note naming every judgement call made and
every rule still unverified. **Timebox: 2 hours each. Record the actual minutes.** Payment via Stripe
on the web (CLAUDE.md §5), with buyers told in writing that the $49 becomes an App Store offer code
if the app ships — never an automatic unlock.

**Weeks 2–6 — the habit probe, which is the real experiment (30 days, $0).** Every concierge buyer is
asked one thing: *"For the next 30 days, reply Y to a daily text if you worked today, N if you
didn't."* The founder sends the text each morning and records replies in a spreadsheet. That is it.
This is a manual, zero-code simulation of the only feature the subscription depends on, and it
measures the riskiest assumption directly. Target: 20 participants.

**Also captured by hand, in a notes file, because it is worth more than the $49s:** how messy real
records actually are; how many days short people turn out to be; what they currently use; whether
any of them can state their five-year total before we compute it (this is the test of **P10**, the
inferred problem the whole product rests on); and what they say when told the price.

---

## 7. Experiments

Pass/fail thresholds are pre-committed. The decision column is binding before the result is known.

| # | Experiment | What it tests | PASS threshold | FAIL threshold | Cost | Days | Decision committed in advance |
|---|---|---|---|---|---|---|---|
| **E1** | SeaLog adversarial teardown (install, enter the awkward 311-day record, screenshot) | Whether a free incumbent already computes rolling recency windows + 1.5-day credit + a USCG-shaped export | SeaLog logs days, stores certs and reminds on dates, but shows **no** trailing-window total and **no** shortfall | SeaLog shows a trailing-5-year total **and** a shortfall against a window | $0 | 2 | **PASS → proceed to E2. FAIL → DROP THE NICHE, same day.** No appeal, no "but ours is nicer". |
| **E2** | "Sea Service" (id6473282537) + Maritime Logs + SeaTime Tracker teardown | Whether a *paid* day-logger already serves USCG mariners with window math | None computes a USCG rolling window; "Sea Service" still shows "not enough ratings to display" | Any one computes USCG windows **and** has >100 ratings | ≤$60 (subs) | 2 | PASS → proceed. FAIL → drop, or pivot to the one thing they all lack and re-score. |
| **E3** | 15 structured interviews with OUPV / Master <100GT holders (gCaptain + TrawlerForum threads, dock walks at 2 marinas, 1 licence school) | **P10**, the inferred core problem: do they know their number, and do they fear the window | ≥8/15 cannot state their trailing-5-year day total; ≥5/15 say unprompted they would pay for help | ≤4/15 cannot state it, **or** ≥10/15 say "my school/consultant handles it" | $0–$200 (fuel, coffee) | 10 | PASS → proceed to E4. FAIL → the pain is a renewal-week pain, not a daily one; park the niche. |
| **E4** | Landing page + free browser window calculator | Whether the aha lands in <60s and is worth an email | ≥25% of visitors complete the calculator **and** ≥8% give an email | <3% give an email | ~$60 | 7 | PASS → run E5. FAIL → rewrite the headline once, re-run for 7 days; fail twice → park. |
| **E5** | $49 concierge reconstruction, sold on the same page | Whether they pay cash, today, for the output — before any app exists | ≥10 paid orders within 21 days from ≤500 qualified visitors | <3 paid orders | $0 cash (Stripe fees) | 21 | PASS → build v1. 3–9 orders → extend 14 days, do not build. FAIL → **park the niche; dated kill 2026-12-14.** |
| **E6** | 30-day manual daily-log probe (daily SMS, Y/N, 20 concierge buyers) | **THE RISKIEST ASSUMPTION** — does the daily habit form | ≥50% of 20 participants reply on ≥20 of 30 days | <25% reply on ≥20 of 30 days | $0 | 30 | PASS → build v1 with confidence in the annual price. 25–49% → build v1 but **price monthly-first and treat annual as the upsell**. FAIL → the subscription thesis is dead; park even if E5 passed. |
| **E7** | Domain-expert rule review: one licensing consultant + one captain who has renewed twice, each paid to mark up the Rule Source Sheet | Whether our engine's rules are right, and whether the two experts agree with each other | Both confirm the 8-hour day, the <100 GRT 4-hour floor, the 1.5-day credit and the 360/5-year window, **and agree on the window's start** | They disagree with each other on the window, or either flags a rule as wrong | ~$400 | 10 | PASS → ship those rules. FAIL → ship **both readings side by side** with the dispute disclosed, or omit the rule entirely. **Never ship a single computed number we cannot source.** |

Sequencing: E1 → E2 → (E3 ∥ E4) → E5 → E6 (overlapping E5) → E7 before any build. Cash exposure
before the build decision: **≤ $720.**

---

## 8. v1 feature spec — 8 features, ~1 week

Constraints honoured: SwiftUI, iOS 17+, SwiftData, StoreKit 2, local notifications, on-device PDF,
**no backend, no accounts, no network permission.**

| # | Feature | Notes |
|---|---|---|
| 1 | **One-tap day entry** — "Log today", plus date, vessel, hours underway/aboard, two-watch flag, route/waters, capacity served. "Same as last trip" repeats the whole entry. | SwiftData `Voyage`. The 5-second interaction the whole subscription depends on. |
| 2 | **Vessel library** — name, official number, gross tonnage, propulsion, route. | Entered once, auto-fills every entry *and* every PDF field 46 CFR 10.232 asks for. |
| 3 | **Rolling-window engine** — trailing-5-year and trailing-3-year qualifying-day counts to any target date, with the 8-hour day, the under-100-GRT shortened day (4-hour floor) and 1.5-day two-watch credit. | Pure local arithmetic. Dependency-free JS module + faithful Swift port, both passing `engine/test-vectors.json` 100% (CLAUDE.md §6). Every rule cites its source in a comment. |
| 4 | **Window card** — days logged in window / the target you entered / the difference / **the date your window next drops a day** / tap for the citation. Both window readings shown side by side where disputed. | This screen *is* the product. Strings are records-only; see the string audit below. |
| 5 | **Credential & document date ladder** — MMC, medical certificate, STCW endorsements, TWIC: user-entered dates, local notifications at 12/6/3/1 months, each notification quoting back the date *they* entered. | No rule inference, no eligibility logic. Dates in, reminders out. |
| 6 | **PDF export** — dated table listing **every period individually**, 10.232 evidence fields per period, totals per window, a letter-of-service template including the 12-hour two-watch sentence, and a disclosure block. | On-device PDFKit. The paid artefact. |
| 7 | **Season backdate / bulk add** — "Tue–Sun, 1 Apr – 15 Oct, 2022–2026", editable afterwards per day. | Three taps. This is what makes the aha possible in 90 seconds; without it there is no v1. |
| 8 | **Rule Source Sheet** — every rule, citation, URL, verification level, reviewed date, and the standing disclosure. | Also the honesty mechanism and the thing experts mark up in E7. |

### The aha moment, named and timed

**Name (user-facing): "Your Window, Counted."**
**Trigger:** the Window card renders a real trailing-5-year number from the user's own backdated
season pattern.
**Timing: target 75 seconds from first launch; hard budget 90 seconds.** If the build cannot hit 90
seconds, cut a feature, not the backdate.
**Instrumented as:** time from first launch to first Window-card render. If median > 90s in TestFlight,
the onboarding is wrong, not the user.

### Onboarding, screen by screen, and where the paywall sits

1. **"Which credential are you keeping records for?"** — OUPV · Master <100 GT · Master 100–200 T ·
   Mate · Towing · Other (type it). One tap. No eligibility claim, just a label on their own file.
2. **"Which published window do you want to count against?"** — shows the options *with their
   citations* (360 days in 5 years; 90 days in 3 years; 1,800-day reading; custom). **The user picks;
   we never pick for them.** This screen is the main liability firewall.
3. **"Your typical season"** — days of the week, months, years. Three taps. Skippable.
4. **AHA — "Your Window, Counted."** A real number, the difference from the target they chose, and the
   date the window next drops a day. ≤75s.
5. **"Add the dates on your credential"** — optional, skippable, dates only.
6. **Notification permission** — framed as *"remind me to log"*, not *"warn me about my licence"*.
7. **PAYWALL — after the aha.** Free forever: logging, the vessel library, the window total, the Rule
   Source Sheet. Paid ($89/yr · $12.99/mo · 7-day trial): PDF export, letter-of-service template,
   multiple credentials, unlimited vessels, forward projections, Window-Closing Calendar.

### String audit (CLAUDE.md §4 — "Airworthy today?" → "All items current?")

| Rejected string | Shipped string | Why |
|---|---|---|
| "Are you renewal-ready?" | "Your logged days in this window: 319" | "Ready" is our verdict on their legal standing. |
| "You're 41 days short of qualifying." | "Target you entered: 360. Days you've logged: 319. Difference: 41." | "Qualifying" asserts eligibility. |
| "You're legal to sail." / "Cleared." | *(never shipped in any form)* | Professional opinion; also false — the NMC decides. |
| "Your licence expires in 90 days — renew now or you can't work." | "The expiry date you entered for your MMC is 90 days away." | Second clause is legal advice. |
| "Sea-Worthy" / "Renewal Ready" (as a name) | **360 Ledger** | A name can be a verdict too. |
| PDF header "USCG Sea Service Certificate" | "Sea Service Summary — prepared from entries made by the user. Not a Coast Guard document. The National Maritime Center determines the acceptability of sea service." | Avoids impersonating an official form. |
| Push: "Don't lose your licence!" | "No days logged in 14 days. Your 5-year total is unchanged at 319." | Fear framing invites the "you advised me" reading. |
| Push: "You won't make 360 at this rate." | "At the rate you've logged since 1 Jun, your own entries reach 341 by 14 Mar 2027." | A projection of *their* entries, labelled as such. |

### Deliberately deferred to v1.1

Drug-test program / MIS annual report (46 CFR 16.230, due 15 March) · TWIC renewal workflow · radar
observer renewal · AIS/GPS auto-detection of underway hours · CSV and SeaLog import · continuity-licence
path · iPad and watchOS · multiple credential holders on one device · streak gamification · any
cloud sync or account (deferred indefinitely; it is the wedge against SeaLog).

---

## 9. The rules the engine must encode

> **Read this first.** Getting one of these wrong does not inconvenience the user — it can cost them
> their credential, a season's income, or $12,100+ in retraining. The engine therefore (a) computes
> only from the user's own entries, (b) shows its citation beside every number, (c) shows **both**
> readings wherever the rule is disputed, and (d) never states or implies that the user is eligible,
> current, qualified or legal to operate. **The National Maritime Center determines acceptability of
> sea service, not us.** This is not boilerplate; it is the reason the product is shippable at all.

**Nothing below is `[verified-fetch]`.** Every primary host (ecfr.gov, dco.uscg.mil, law.cornell.edu)
was DNS-denied by the proxy in this run and in both scout runs.

| # | Rule the engine must encode | Source | URL | Verification | Expert sign-off required? |
|---|---|---|---|---|---|
| R1 | **A "day" = 8 hours of watchstanding or day-working, not including overtime.** | 46 CFR 10.107(b), as reproduced by NMC guidance | https://www.dco.uscg.mil/Portals/9/NMC/pdfs/professional_qualifications/time_half_credit.pdf | `[search-snippet]` (PDF not fetchable) | **YES — this is the engine's atom.** |
| R2 | **For vessels under 100 GRT, a day is 8 hours unless the Coast Guard finds the vessel's operating schedule makes that inappropriate — but a day may never be less than 4 hours.** ⚠️ **CORRECTION TO THE BRIEF:** the "4+ hours **underway**" framing is **not supported**. The 4 hours is a *floor on a shortened day for small vessels*, and the reproduced text does **not** say "underway". The widely repeated "a sea-service day means at least four hours underway" comes from a licensing-consultancy marketing page (https://maritimelicensingagency.com/announcements-1/licenserenewal, `[snippet-only]` via scout 5) and a gCaptain poster whom another poster corrected on exactly this point. | 46 CFR 10.107(b) via NMC; counter-evidence at gCaptain | https://www.dco.uscg.mil/Portals/9/NMC/pdfs/professional_qualifications/time_half_credit.pdf ; https://forum.gcaptain.com/t/uscg-sea-time-definition/9285 | `[search-snippet]` + `[search-summary — NOT verbatim]` | **YES — HIGHEST PRIORITY. The product's headline mechanic is currently mis-stated.** |
| R3 | **Time-and-a-half: where a two-watch system is authorised, a day may count as 1.5 days.** | 46 CFR 10.107 / 46 USC 8104 / 46 CFR 15.705, via NMC | https://www.dco.uscg.mil/Portals/9/NMC/pdfs/professional_qualifications/time_half_credit.pdf ; https://www.law.cornell.edu/uscode/text/46/8104 | `[search-snippet]` | **YES** |
| R4 | **The credit is refused without wording in the letter of service confirming a 12-hour workday on a two-watch system.** (A documentation rule, not arithmetic — but it must drive the PDF template.) | gCaptain | https://forum.gcaptain.com/t/any-advise-on-how-to-write-my-license-renewal-sea-service-letter/10487 | `[snippet-only]` | **YES** |
| R5 | **Renewal recency: 360 days of sea service in the previous 5 years**, with alternatives (approved course / refresher / open-book exam) where short. | USCG PSC renewal checklist; NMC checklist; consultancy pages | https://sailors.org/sites/default/files/legacy/pdf/psc_checklist_mcp_fm_nmc5_224_web.pdf ; https://www.dco.uscg.mil/Portals/9/NMC/pdfs/checklists/mcp_fm_nmc5_01_web.pdf ; https://maritimelicensingagency.com/announcements-1/licenserenewal | `[search-snippet]` + `[snippet-only]` | **YES** |
| R6 | **"Year" = 360 days for service-requirement purposes.** | 46 CFR 10.107, per a gCaptain poster | https://forum.gcaptain.com/t/uscg-sea-time-definition/9285 | `[search-summary — NOT verbatim, forum]` | **YES — weakest-sourced rule in the set.** |
| R7 | **Officer recency for Mate 500/1600 GT and 2nd Mate: 90 days in the past 3 years on vessels of appropriate tonnage; 5-year renewal interval; renewable by re-exam or CPD.** | O*NET / CareerOneStop credential pages (derived from USCG requirements) | https://www.onetonline.org/link/certinfo/10913-B ; https://www.onetonline.org/link/certinfo/10886-B | `[snippet-only]` (secondary source) | **YES** |
| R8 | **STCW refresher trigger: 360 days sailing in the past 5 years** (Basic Training, Advanced Firefighting, Proficiency in Survival Craft); ROS time countable. | SIU / Seafarers school notice on NVIC modifications | https://www.seafarers.org/union-school-welcome-nvic-modifications/ | `[snippet-only]` | **YES** |
| R9 | **OUPV original: 360 days total qualifying experience, including 90 days within the last 3 years.** | Mariners Learning System | https://marinerslearningsystem.com/pages/oupv-six-pack-captains-license | `[snippet-only]` (commercial school) | **YES** |
| R10 | **Renewal window: a credential may be renewed at any time during its validity and for 1 year after expiry; the applicant must establish all necessary qualifications before renewal.** | 46 CFR 10.227 | https://www.ecfr.gov/current/title-46/chapter-I/subchapter-B/part-10/subpart-B/section-10.227 | `[search-snippet]` | **YES** |
| R11 | **Grace period extended from 1 year to 6 years after expiry, without the complete original examination** — CG-MMC Policy Letter 01-24, effective 25 Apr 2024, "in effect indefinitely". Other renewal requirements unchanged; a new application and fees still required per 46 CFR 10.219. **An open-book exam may still apply.** | USCG CG-MMC Policy Letter 01-24; union summaries | https://www.dco.uscg.mil/Portals/9/NMC/pdfs/announcements/2024/mcp_bulletin_policy_letter_01_24_042624.pdf ; https://www.seafarers.org/new-policy-extends-grace-period-for-renewing-mmcs/ | `[search-snippet]` | **YES — and set a recurring review; one source calls the timeline "technically temporary".** |
| R12 | **You may renew during the grace period but you may not work on an expired credential.** | Maritime Licensing Agency | https://maritimelicensingagency.com/announcements-1/how-do-i-get-my-expired-uscg-license-back | `[snippet-only]` (commercial) | **YES — and never state it as advice; attribute it.** |
| R13 | **Evidence of sea service must list vessel name and official number, gross tonnage, propulsion and the nature of the experience; the Coast Guard must be satisfied as to authenticity and acceptability.** Acceptable forms: discharges, pilotage records, service letters. | 46 CFR 10.232 | https://www.law.cornell.edu/cfr/text/46/10.232 | `[search-snippet]` | **YES — drives the whole PDF schema.** |
| R14 | **DISPUTED: does the 5-year window run five calendar years back, or 1,800 days from the credential's issue date?** | gCaptain renewal-sea-service thread | https://forum.gcaptain.com/t/renewal-sea-service/61461 | `[search-summary — NOT verbatim, anecdotal]` | **YES — and until resolved, ship BOTH readings labelled, never one.** |
| R15 | **Volatility warning, not a rule to encode:** an NMC notice dated 26 May 2026 describes a separate time-limited extension valid through 31 Aug 2026 for credentials expiring 1 Jan – 31 Jul 2026, tied to a funding lapse. Evidence that this rule set moves inside a product cycle. | NMC notice via MEBA | https://www.mebaunion.org/assets/1/6/May_-_nmc_policy_update_extension_of_mmcs_and_med_certs_052626.pdf | `[search-snippet]` | n/a — but it sets the maintenance burden. |
| R16 | **Deferred to v1.1:** random drug-testing programme applies to all US-flagged commercial vessels *including six-pack charter vessels*; annual MIS report by **15 March**; 2019 random rate 50%. | 46 CFR 16.230 | https://www.ecfr.gov/current/title-46/chapter-I/subchapter-B/part-16/subpart-B/section-16.230 ; https://professionalmariner.com/coast-guard-issues-safety-alert-on-charter-vessel-drug-testing/ | `[snippet-only]` | Later. |
| R17 | **`[GAP]`** TWIC 5-year validity — no TSA citation obtained in any run. | — | — | `[GAP]` | Yes, before shipping TWIC. |
| R18 | **`[GAP]`** Radar observer renewal interval — searched across two runs, nothing authoritative. | — | — | `[GAP]` | Yes, before shipping. |

**Every one of R1–R14 requires domain-expert confirmation before launch (E7).** R2 is the most urgent:
*the mechanic the founder described in the brief is, on the best evidence available to me, a
misreading of 46 CFR 10.107(b).* The product still works — a rolling count of 8-hour days with a
1.5-day two-watch credit and a 4-hour floor on small-vessel shortened days is *more* intricate than
"4 hours underway", and therefore a better reason for software to exist. But every string, every
test vector and every landing-page headline must be rewritten off the corrected rule, and the
correction must be confirmed against the actual text of 46 CFR 10.107 by someone who can open it.

---

## 10. Competitor table

| Product | Price | Platform | Does well | Specific weakness | Source |
|---|---|---|---|---|---|
| **SeaLog** (Training Resources Ltd) — *the known threat* | **Free**, no ads | iOS (+ Android per vendor) | Logs sea time with vessel info, days at sea and position; stores certificates; **customisable expiry reminders by home-screen alert, text and email**; **exports a spreadsheet with the fields required by the USCG Sea Service form**; certificates and sea time viewable offline | **(a)** "All data is stored in secure servers in the U.S." → **account + server required**, which is our entire wedge; **(b)** across two scout runs and three of my own searches, **no source mentions any recency- or renewal-window computation** — it appears to log days and remind on dates; **(c)** rating count unobtainable | https://fishermensnews.com/training-resources-limited-launches-app/ ; https://apps.apple.com/mo/app/sealog/id1524146750 `[search-snippet]` |
| **Sea Service** (Sea Service App Ltd / "Sea Service LLC") — **newly found in this run, not in either scout report** | Free download, **subscription required**; exact price `[GAP]`; discounted annual launch offer advertised | iOS 12.4+ | Logs days aboard with vessel detail and position; **categorises time: underway, at anchor, in port, standby, watchkeeping, dry dock**; summaries for sea-service testimonials; **milestone tracking toward "ticket eligibility"**; reminders | **(a)** "has not received enough ratings or reviews to display an overview" → no traction, or very new; **(b)** vocabulary ("testimonials", "ticket", "watchkeeping", "dry dock") is **MCA/UK-flavoured, not USCG** — no CG-719S-shaped output claimed; **(c)** developer name differs across storefronts (Ltd vs LLC), identity unclear; **(d)** data types "linked to the user" include identifiers and contact info → account-based | https://apps.apple.com/app/sea-service/id6473282537 `[search-snippet]` |
| **Maritime Logs** — **also newly found in this run** | `[GAP]` | iOS | **Automatic day/night hour calculation from sunrise/sunset**; custom goal tracking in sea days or watchkeeping hours; detailed voyage logging; **data kept on device with backup/restore** (i.e. our privacy wedge is not unique) | Known only from an aggregator page, not the store listing; no USCG renewal-window claim; no USCG-shaped export claimed | https://mwm.ai/apps/maritime-logs/6757689056 `[search-snippet]` |
| **SeaTime Tracker: Crew Logbook** | `[GAP]` | iOS | **AIS-based automatic logging** — a genuinely stronger logging mechanic than ours | PDF templates target **MCA / PYA / Nautilus (UK)** formats — wrong country for USCG | https://mwm.ai/apps/seatime-tracker-crew-logbook/6758010893 `[snippet-only]` |
| **eMariner** | `[GAP]` | iOS | Certificate expiry, DP day counting, CV generation | "aimed more at general crew management than sea service documentation" | https://mwm.ai/apps/emariner/1199937929 `[snippet-only]` |
| **Decko** ("Maritime Super App") | `[GAP]` | web/app | — | Marketing page only; user counts unverifiable | https://decko.bolt.host/ `[snippet-only]` |
| **CertKeeper: License Tracker** | **$6.99/mo · $59.99/yr**, 7-day trial | iOS | Generic credential expiry tracking | Knows nothing about maritime rules: no sea-service day, no rolling window, no 1.5-day credit, no 10.232 fields. Aimed at "BLS, ACLS, and CEU renewals" | https://apps.apple.com/us/app/id6755570013 `[snippet-only]` |
| **Expiration Reminder** | Free | iOS + web | Generic reminders | **3.0★ from 2 ratings**; requires an account and a companion web app | https://apps.apple.com/us/app/id1447157463 `[snippet-only]` |
| **Licensing consultancies** (Maritime Licensing Agency, Mariners Learning System) | Hundreds of $ per cycle | Human service | Human judgement on *your* specific path; forum posters recommend paying for exactly this | Not software, not continuous, not on the boat with you; charges again every cycle. **Their existence is the proof of willingness to pay** | https://maritimelicensingagency.com ; https://marinerslearningsystem.com `[snippet-only]` |
| **The real free incumbent** | $0 | Paper | Zero friction; already in the wheelhouse | The shoebox, the vessel logbook, a Word letter, an Excel sheet with a broken date formula, and the NMC's own monthly performance reports | Scout 1: "most mariners keep discharges in a shoebox and a Word letter" |

### Does SeaLog already nail the problem? — adversarial read

**The case that it does:** it is free, no-ads, from a training company that already sells to this
exact audience, and it does three of our four pillars — day logging with vessel detail, certificate
expiry reminders across three channels, and **an export carrying the fields the USCG Sea Service
form requires.** That last one is most of our "hero artefact". A free app that logs days and emails
you before your MMC expires is a serious answer to the problem as most captains experience it. If
its export is good, our paid PDF is a nicety, not a product.

**The case that it does not, which is the whole bet:** across five independent search passes in three
separate agent runs, **not one source — vendor page, trade press, or store listing — mentions a
rolling window, a recency computation, a shortfall, a projection, or the 1.5-day two-watch credit.**
Its vocabulary is "track" and "remind", never "compute". Logging days and computing *how many of
those days fall inside a trailing five years, net of the 8-hour definition and the small-vessel
floor, and on what date that number drops* are different products. Plus two structural weaknesses we
can attack honestly: the record lives on someone else's server behind an account, and the export is
a spreadsheet the user still has to reason about rather than a dated per-period document they can
file.

**Plain answer: unresolved, and it is the gate — not a risk to be managed but a question to be
answered before any code.** Absence of evidence of window math is not evidence of absence; I could
not open the App Store listing. **E1 settles it in two days for $0: install SeaLog, enter a 311-day
record across five years with 40 two-watch days, and look for a trailing-window total and a
shortfall. If it shows one, we drop this niche the same day** — per CLAUDE.md §1 ("Kill bad ideas
fast. If a well-funded competitor already nails the problem, say so and drop it"). I will not
pre-rationalise a way around that result.

**One competitive update the founder must absorb:** the field is more crowded than Phase 1 believed.
"Sea Service" (ID 6473282537) is **already charging a subscription for sea-day logging** with
"milestone tracking toward ticket eligibility" — functionally adjacent to our wedge. That cuts both
ways: it validates willingness to pay for exactly this, and it means blue-ocean scoring for this
niche should drop from 4 to roughly 3. It also has no ratings to display, which on the most likely
reading means nobody has found it — a distribution failure, which is the failure mode we are most
exposed to as well.

---

## 11. Channels to the first 100 paying users

**Posting rules below are UNVERIFIED.** Every forum domain was DNS-denied in all three runs, so no
rules page, no member count and no moderator name could be read. Each entry states what must be
checked. Do not post anywhere until the founder has read that site's actual rules page.

| Order | Channel | URL | Posting rule (as expected — **must be verified**) | Gatekeeper | Why this order |
|:--:|---|---|---|---|---|
| **1** | **gCaptain forum** — the mariner watering hole; scout 1 says its licence/renewal threads are its highest-traffic category | https://forum.gcaptain.com | Expect a hard ban on self-promotion in general boards, with vendor posting by permission only. **Verify the ToS/FAQ before posting anything.** The safe opening move is **not** promotion: answer sea-service-math questions in existing renewal threads, with the citation, and no link. Earn the right to mention the free calculator. | Site moderators / admin; gCaptain was founded by John Konrad | Highest concentration of exactly our ICP and of the *problem language* we need for E3. Also the riskiest place to burn the brand, which is why it goes first on *listening* and last on *linking*. |
| **2** | **TrawlerForum — "Captains License" threads** (verified live by this run's search: active OUPV/six-pack threads) | https://www.trawlerforum.com | Big-boat forums typically require paid vendor status to promote. **Verify.** Same approach: answer first. | Forum moderators | Confirmed-active OUPV conversations, a slightly more forgiving crowd than gCaptain, and a good place to pilot the message before spending gCaptain's goodwill. |
| **3** | **Licence schools as partners, not channels** — Mariners Learning System, Maritime Licensing Agency, MPT, SIU Paul Hall Center | https://marinerslearningsystem.com ; https://maritimelicensingagency.com ; https://mptusa.com ; https://www.seafarers.org | Not a posting rule — a commercial conversation. They own newsletters aimed at precisely our ICP. Pitch: a free co-branded web day-count calculator for their students, with their citation sheet. | The school's owner / marketing lead (small businesses; one email reaches the decision-maker) | **The single most precisely targeted list that exists.** Scout 5: "licence-school lists = the most precisely targeted list imaginable; these are also potential partners rather than only channels." They are also the paid incumbent, so expect either a partner or a competitor — both are useful information. |
| **4** | **The Hull Truth** — charter/commercial boards | https://www.thehulltruth.com | Expect paid-vendor-only promotion. **Verify.** | Moderators | Large charter-operator population; weaker on credential talk than gCaptain. |
| **5** | **Trade press** — WorkBoat, Professional Mariner, Fishermen's News, MarineLink | https://www.workboat.com ; https://professionalmariner.com ; https://fishermensnews.com ; https://www.marinelink.com | Editorial pitch, not advertising. The story writes itself and is already their beat: these four outlets *all* covered the OMSA $12,100–$43,710 figure. Offer the free calculator + the Rule Source Sheet as a reader tool. | Section editors | They have proven interest in this exact pain. A single editorial mention beats months of forum posting, and costs nothing but a pitch email. |
| **6** | **Associations** — Passenger Vessel Association; OMSA | **URLs `[GAP]` — not verified in any run. Find them, do not guess.** | Member comms usually require membership or sponsorship | Membership/communications director | Slower and possibly paid, but OMSA *produced* our anchor figure, which makes for a natural conversation. |
| **7** | **Marina and dock walks, and the licence-school classroom** | — | None. Walk the docks, buy coffee, ask the four E3 questions. | Nobody | **The channel that costs nothing but time** (see below). |
| **8** | **ScubaBoard** — has an active "Which USCG Captain's License Can I Qualify For?" thread; dive-boat captains overlap | https://scubaboard.com/community/goto/post?id=6029494 | Verify. | Moderators | Narrow but real adjacency. |

**The zero-cash channel, specifically.** Two things, both pure founder time:
**(a) Answer the arithmetic.** Find every open question in gCaptain / TrawlerForum / ScubaBoard asking
"does this count as a day?", "how do I write the letter?", "do I have enough time in the last five
years?" and answer it properly — with the 46 CFR citation, the 8-hour definition, the two-watch
credit and the small-vessel floor, worked out longhand for that poster's actual case. No link, no
pitch, signature only. That is the entire concierge offer given away one person at a time, and it
both builds the right to post later and produces E3's interview pipeline for free.
**(b) Walk two marinas and sit in one licence-school classroom.** Fifteen conversations at $0. This
is also how E3 gets done.

`[GAP]` across all three runs: **no member count for any community above**, and no verified
Facebook/Reddit group (both blocked). The founder must size these channels manually before counting
on them.

---

## 12. Honest downsides — the three most likely killers

**1. The daily logging habit never forms, and churn arrives at month 2–4.**
This is the riskiest assumption (§5) and the most likely cause of death. The renewal happens once in
five years; nobody pays $89/year for a reminder they could set in Calendar. If captains log for three
weeks in April and stop, the ledger is worthless by August and so are we. There is no technical
workaround inside our constraints — no backend, no AIS, no accounts means the app knows only what it
is told.
*Leading indicator:* E6 — fewer than 25% of 20 participants replying on 20+ of 30 days. Post-launch:
**D30 log-entry rate below 30%, or median days-logged-per-subscriber-week below 2.** Watch it weekly
from the first TestFlight build; it is a leading indicator of churn by about ten weeks.

**2. SeaLog (free, server-backed) or "Sea Service" (already charging) closes the gap.**
We are betting on a seam: that nobody computes the rolling window. The seam is narrow, obvious once
named, and a competitor who already has the day-logging UI can ship a window counter in a sprint.
SeaLog is backed by a training company with a reason to keep mariners in its funnel, and it is free.
*Leading indicator:* E1/E2 teardown finding window math today — immediate drop. After launch:
**either app's release notes containing "recency", "renewal window", "rolling" or "days remaining"**
within 60 days of our launch. Set a monthly manual check of both changelogs; that is the two-month
warning.

**3. We compute a rule wrongly, and it hurts a user — or Apple reads our strings as professional
advice.**
R2 is already wrong as the brief states it, found by one search in this run. R6 and R14 rest on forum
posts. R14 is a live dispute about the window's own start date. If we ship one confident number and
an evaluator counts differently, the user loses a season and we are the proximate cause — and the
1-star review writes itself: "it told me I had 360 days and the NMC said I had 290."
*Leading indicator:* E7 — **the two paid domain experts disagreeing with each other** on R2 or R14.
That disagreement is the signal to ship both readings or ship nothing. Second indicator: any App
Store review-team query about eligibility language, which means our string discipline has already
slipped.

**Honourable mention (not a kill, a ceiling):** the OUPV-specific population is unknown `[GAP]` and
publicly unavailable. If owner-operator OUPV holders number in the low thousands rather than 20k–40k,
100 paying users is achievable but 1,000 may not be. Leading indicator: E4's qualified-visitor volume
from channels 1–3 over 30 days. If the whole addressable forum population delivers fewer than 300
qualified visitors in a month, the ceiling is real.

---

## 13. What is still unverified — ranked checklist

Ranked by *how much a wrong answer changes the decision*, not by effort.

1. **☐ Does SeaLog compute a rolling recency window, or only log days and remind on dates?**
   Install it. Enter 311 days across 2021–2026 with 40 two-watch days. Look for a trailing-5-year
   total and a shortfall. **A yes kills the niche.** (E1, 2 days, $0.)
2. **☐ 46 CFR 10.107(b), actual text.** The "4 hours underway" mechanic in the brief is, on my
   evidence, a misreading: the reproduced rule says 8 hours, with a 4-hour *floor* on shortened days
   for vessels under 100 GRT and **no** "underway" condition. Open the real text and settle it. All
   engine test vectors, all strings and the landing-page headline depend on the answer.
   (ecfr.gov / NMC `time_half_credit.pdf` — needs a device the proxy does not block.)
3. **☐ The OUPV / small-vessel owner-operator population.** No public figure exists. Scout 5's
   "20k–40k" is its own inference and must not be cited. Routes: NMC monthly performance reports
   (https://dco.uscg.mil/Portals/9/NMC/pdfs/reports/performance/2025/performance.pdf), an NMC request,
   or FOIA. Without this the TAM is a guess.
4. **☐ R14: does the 5-year window run five calendar years back, or 1,800 days from issue?**
   A live dispute on gCaptain. Until answered, the engine must show both. (NVIC / NMC guidance; ask
   both E7 experts separately and compare.)
5. **☐ Will a captain log daily for 30 days?** E6. No amount of desk research substitutes.
6. **☐ "Sea Service" (ID 6473282537): actual subscription price, actual feature set, actual rating
   count, and whether it is USCG- or MCA-oriented.** It is a paid competitor neither scout found, and
   it sets our price ceiling. (apps.apple.com blocked; try seaservice.app, or a device outside the
   proxy.)
7. **☐ Maritime Logs (ID 6757689056): price and whether it computes windows.** Known only from an
   aggregator.
8. **☐ Every verbatim quote in §4a, re-opened at its URL.** All are `[snippet-only]` or
   `[search-summary — NOT verbatim]`. None may appear in landing-page copy until a human has opened
   the thread and confirmed wording, author and date. The §4a P7, P8 and P9 items are **paraphrases my
   search tool produced** and are the weakest of all.
9. **☐ P10, the inferred core problem:** that captains genuinely cannot state their own five-year day
   total. The entire product rests on it and **no quote supports it.** (E3, 15 interviews.)
10. **☐ P11, the privacy wedge:** that mariners object to their sea time living on someone's server.
    Asserted by scout 1, unquoted — and partly undercut by Maritime Logs already storing on-device.
    Ask it in E3 without leading the witness.
11. **☐ R5–R9 recency thresholds**, each currently sourced to a checklist snippet, a commercial school
    or O*NET rather than the CFR. (E7.)
12. **☐ CG-MMC Policy Letter 01-24's current status.** "In effect indefinitely", but one source calls
    the timeline "technically temporary", and a separate 26 May 2026 NMC notice shows short-fuse
    extensions do happen. Needs a standing quarterly review, with the reviewed date shown in-app.
13. **☐ Forum posting rules and gatekeepers** for gCaptain, TrawlerForum, The Hull Truth, ScubaBoard —
    plus member counts for all four. Nothing was readable in any run.
14. **☐ PVA and OMSA URLs and membership terms.** `[GAP]` — find, do not guess.
15. **☐ USPTO Class 9/42 search for "360 Ledger"**, plus App Store exact-name and `360ledger.com`
    availability. Aggregator-only so far; treat the name as unchecked.
16. **☐ BLS May 2025 figures for SOC 53-5021.** Only the May 2023 release is confirmed at bls.gov
    ($88,730 median). The $92,460 figure is a third-party aggregator's and must not be cited.
17. **☐ A verified US price for the STCW Basic Training / Advanced Firefighting refresher courses** —
    the short-recency remedy. Still `[GAP]` after three runs; the only verified training fee anywhere
    in the research is Australian (AUD $136, AMSA regulator fee only). A US figure would give us a
    second, smaller, more frequent price anchor than the $12,100 lapse.
18. **☐ R17 TWIC validity citation; R18 radar observer renewal interval.** Both `[GAP]`; both
    deferred to v1.1, so both are blockers only for that release.

---

## 14. Verdict

**PURSUE, conditionally — and the condition is E1, not enthusiasm.** Strength of bet: **6.5 / 10.**

What earns the 6.5: the best-sourced pain in either scout cluster ($12,100 floor from a trade body,
carried by four outlets); a free, public, numeric, slow-moving rule set; near-perfect fit to the
studio's constraints (single-user, offline, on-device PDF, no backend); a named watering hole; and a
paid human incumbent that proves the market pays to solve exactly this.

What holds it back from an 8: the subscription rests on a daily habit whose payoff is five years
away; the niche is more crowded than Phase 1 knew ("Sea Service" is already charging for day
logging); I could not open a single primary source, so the entire regulatory basis is
`[search-snippet]`; and the product's headline mechanic as briefed — "4+ hours underway" — appears to
be a misreading of 46 CFR 10.107(b), found in a single search. That last point should raise rather
than lower confidence in the *process*: it was found before any code, which is what this phase is
for.

**Do not write Swift until E1 clears.** Dated kill: **2026-12-14.**
