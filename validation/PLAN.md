# Validation plan — `360 Ledger`

**From nothing to a go/no-go by the dated kill criterion.**

| | |
|---|---|
| Product (frozen, `validation/OFFER.md` §1) | `360 Ledger` |
| Start | Monday 19 October 2026 |
| **Kill date (frozen, OFFER.md §9)** | **14 December 2026** |
| Elapsed | 56 days = 8 weeks, Monday to Monday (arithmetic: 19 Oct → 14 Dec 2026) |
| Experiments | **E1–E7 exactly as numbered in `research/deep-dive-mariner.md` §7.** No new experiments invented. |
| Cash, base case | **$592** (table below) |
| Cash, worst case | **$691** — inside the founder's $250–750 band and inside the deep dive's ≤$720 |
| Founder hours, total | **~126 h** *(estimate, summed from the weekly rows below)* |
| Hard gate | **No Swift is written until E1 and E2 clear** (OFFER.md §9, deep dive §14) |

Companion files: `CHANNELS.md` (where), `POSTS.md` (what we say), `EMAILS.md` (sequences),
`GUEST-ARTICLE.md` (the one editorial asset), `EXPERIMENTS.csv` (tracker), `DECISION-RULES.md`
(what we do at each outcome). The Mom Test interview script, the concierge SOP and the legal /
App Store risk memo are **other agents' deliverables** — not duplicated here.

---

## 0. Two definitions pinned before any data exists

Pin these now so no number can be re-argued in December.

1. **"Qualified visitor"** (the denominator in OFFER.md §9's kill criterion and in E5) =
   **a unique visitor who fires `calc_start`.** Not a pageview, not a `view_landing`. Someone who
   typed into the first field of the free calculator has self-identified as a mariner counting days.
   Event names are frozen in OFFER.md §7.
2. **"Logged a day"** in E6 = **a reply of `Y` or `N` to that morning's SMS, received before the
   next morning's send.** A `Y` and an `N` both count as logging. Silence does not. A batch of
   back-answers the next week does not.

---

## 1. Setup costs — what gets bought, once

| Item | Vendor / choice | Cost | Note |
|---|---|---:|---|
| Domain, 1 year | `360ledger.com` if free, else `360ledger.app` | **$12** | *(estimate: typical .com registrar first-year list price $10–15.)* **Availability is unverified** — OFFER.md §1 lists it as blocking spend. 5-min check: load any registrar's search box and type the name; then do the USPTO Class 9/42 TESS search before printing it anywhere. |
| Hosting | Cloudflare Pages or Netlify free tier | **$0** | A single static page with an inline JS calculator needs no server. Free tiers advertised but **not verified in this environment** (proxy denies most hosts). 5-min check: open the pricing page. |
| TLS | Included with the host | **$0** | |
| Email capture + sequences | One free-tier sender (MailerLite / Buttondown class of tool) | **$0** | Free tiers are advertised at ~500–1,000 subscribers; **unverified**. 5-min check: open the pricing page and confirm the free row before importing a single address. Fallback that is certainly $0: a plain `mailto:` link plus the founder's own inbox and a spreadsheet. At our target list size that fallback is survivable. |
| Analytics | Self-hosted event log (a 30-line Cloudflare Worker writing the OFFER.md §7 event names to KV) or GoatCounter free tier | **$0** | We only need 16 event names and 4 UTM params. Do **not** buy a $9–19/mo product for 8 weeks of a one-page site. |
| Payments | Stripe Payment Link | **$0 setup** | Per-transaction fees only. Commonly published US rate is 2.9% + $0.30; **unverified here** — 5-min check: `stripe.com/pricing`. At 10 × $49: 10 × (49 × 0.029 + 0.30) = **$17.21** *(estimate)*, **paid out of revenue, not out of the validation budget.** |
| E2 teardown subscriptions | "Sea Service" (id6473282537), Maritime Logs, SeaTime Tracker | **$60 cap** | §7 caps E2 at ≤$60. Buy monthly, cancel the same day, screenshot the receipt. "Sea Service" price is `[GAP]` in the research. |
| E1 teardown | SeaLog | **$0** | Free, no ads (deep dive §10). |
| MM-SEAS teardown | Free tier | **$0** | See §3 W1 below. $99/yr Pro is a **contingency**, not a base cost. |
| **Setup subtotal** | | **$72** | |

## 2. Full line-item budget to the kill date

| # | Line | Experiment | Cost | Basis |
|---|---|---|---:|---|
| 1 | Domain, 1 yr | E4 | $12 | *(estimate)*, above |
| 2 | Hosting, email tool, analytics | E4 | $0 | free tiers / self-hosted |
| 3 | Competitor subscriptions for the teardown | E2 | $60 | §7 caps E2 at ≤$60 |
| 4 | Field work: fuel, parking, coffee — 2 marinas + 1 licence-school classroom | E3 | $120 | §7 allows $0–200; budgeted at the low-middle. *(estimate: 4 trips × ~$20 fuel/parking + 15 coffees × ~$4 = $80 + $60, rounded to $120)* |
| 5 | Domain-expert rule review: 1 licensing consultant + 1 twice-renewed captain, $200 each | E7 | $400 | §7 says ~$400 |
| 6 | SeaLog teardown, concierge delivery, habit probe, all posting and all emails | E1, E5, E6 | $0 | founder time only |
| | **Base total cash** | | **$592** | 12 + 60 + 120 + 400 |
| 7 | *Contingency:* MM-SEAS Pro, only if its free tier hides the window math | E2 | +$99 | $99/yr reported by a partner school, **unverified** — see W1 |
| | **Worst-case total cash** | | **$691** | 592 + 99 |
| | *Separately, out of revenue* | E5 | $17.21 *(estimate)* | Stripe fees at 10 orders |

**Pre-committed trade if the contingency fires:** buying MM-SEAS Pro means cutting line 4 (field
work) from $120 to $60 — one marina instead of two, the licence-school classroom kept. New total
$631. The $750 ceiling is never crossed and no line is added without another line shrinking.

**What is deliberately not bought:** paid ads of any kind, a logo, a designer, a video, a
Calendly subscription, a CRM, a legal opinion (another agent's scope), an LLC, or a second domain.
Nothing here is a growth spend. At a target of a few thousand subscribers at **$89/year**, paid
acquisition before product-market fit is the wrong risk.

---

## 3. Week by week

Each week: the experiment running, what the founder personally does, hours, cash, and the
decision already committed at each outcome. The decisions are restated and bound in
`DECISION-RULES.md`; the thresholds are copied from §7 into `EXPERIMENTS.csv`.

---

### Week 1 — 19–25 Oct · **E1 + E2, the gate** · 14 h · $72

**Nothing else happens this week.** No page, no posting, no Swift.

| Day | Founder does, personally | h |
|---|---|---:|
| Mon 19 | Build the single awkward test record on paper first, so every app gets the *identical* input: **311 days across 2021–2026, 40 of them flagged 12-hour two-watch, across two vessels of different tonnage** (deep dive §6). Register the domain. Check USPTO Class 9/42 and App Store exact name for `360 Ledger`. | 3 |
| Tue 20 | **E1.** Install SeaLog. Enter the full 311-day record. Screenshot every screen, every export, every settings page. Answer one question only: *does it show a trailing-five-year total and a shortfall against a window, or does it only log days and remind on dates?* Export the spreadsheet and read it as a mariner would. | 4 |
| Wed 21 | **E2.** Install and subscribe to "Sea Service" (id6473282537), Maritime Logs, SeaTime Tracker. Same record into each. Capture: price actually charged, rating count actually shown, whether any computes a USCG rolling window. Cancel all three the same day. | 4 |
| Thu 22 | **E2, extended to the one competitor the research did not have.** Open an MM-SEAS free account (see the finding box below) and run the same record through it. Then write the teardown: one page per app, screenshots, verdict against the §7 threshold. | 3 |

> **Finding the founder must absorb in Week 1 — MM-SEAS.**
> Not in the deep dive. A licence-school-distributed USCG credentialing product: the **free tier
> "tracks sea days and provides reminders about expiring course certificates, medical certificates
> and merchant marine credentials"**, with interactive checklists and document management; **Pro is
> reported at ~$99/year**; a prepared-and-submitted credential application is **$349 including
> Coast Guard fees**; and it is bundled free with courses at Maritime Institute and
> Mariners Learning System.
> `[search-snippet]` https://maritimeinstitute.com/maritime-institute-partners-with-mm-seas-uscg-licensing-software-to-streamline-uscg-credentialing-for-students ·
> https://www.edumaritime.net/uscg-mmc/mm-seas-mariner-credential-service ·
> https://www.workboat.com/mobileops-mm-seas-align-to-ease-credential-burden-for-mariners
> **Unverified:** the $99 and $349 figures (no official pricing page was readable), and whether it
> computes a rolling recency window. 5-min check: open `mmseas.com`, open the free tier, look for a
> trailing-5-year total.
> This does **not** create an E8. It is tested inside **E2's existing threshold**, because E2 asks
> exactly the right question: *"whether a paid day-logger already serves USCG mariners with window
> math."* It matters for two more reasons: it is priced at **$99/year against our $89/year**, so it
> sets the ceiling; and it is already partnered with the licence schools, which is channel 3 in
> `CHANNELS.md` — expect a competitor there, not a partner.

**Decision, committed before the result (OFFER.md §9, §7 E1/E2):**
- **E1 PASS** (SeaLog logs days, stores certs, reminds on dates, shows **no** trailing-window total and **no** shortfall) → proceed to E2.
- **E1 FAIL** (SeaLog shows a trailing-5-year total **and** a shortfall against a window) → **DROP THE NICHE, same day.** No appeal, no "but ours is nicer". Stop reading this plan; report to the studio and move to the next finalist.
- **E2 PASS** (none of the four computes a USCG rolling window; "Sea Service" still shows no ratings) → proceed to Week 2.
- **E2 FAIL** (any one computes USCG windows **and** has >100 ratings) → drop, or pivot to the single thing they all lack and re-score from zero. Re-scoring is a new phase, not a continuation of this plan.
- **Partial on MM-SEAS** (it tracks days and reminds, but computes no trailing window) → that is an E2 PASS, and the Week 2 headline is rewritten to lead on the *window*, because day-logging alone is now a commodity with a free tier.

Cash this week: **$72** (domain $12 + subscriptions $60).

---

### Week 2 — 26 Oct–1 Nov · **E4 build + E3 cold-open begins** · 20 h · $20

Only reachable if E1 and E2 passed.

| Day | Founder does, personally | h |
|---|---|---:|
| Mon 26 | Write the landing page: headline, the four-input calculator, the Rule Source Sheet beneath it, the §4 guarantee **copied verbatim from OFFER.md**, the two $49 buttons (founding deposit and concierge), the §8 string audit applied to every line. Wire the 16 event names from OFFER.md §7 and the 4 UTM params. | 6 |
| Tue 27 | Finish and self-test the calculator against the same 311-day record from Week 1 — the page must agree with the hand arithmetic. Build both Stripe Payment Links (`$49` deposit, `$49` concierge). Set up the email sequences from `EMAILS.md`. | 5 |
| Wed 28 | **The cold open starts — and it starts by giving, not asking.** Register on gCaptain forum and TrawlerForum under the founder's real name. Post **nothing promotional.** Find open sea-service-arithmetic questions and answer three of them longhand, with the 46 CFR citation, the 8-hour day, the two-watch credit and the small-vessel floor, worked for that poster's actual case. No link. See `POSTS.md` variant A for each channel and `CHANNELS.md` for the rule each post complies with. | 4 |
| Thu 29 | Cold emails, no warm intros available: 8 licence schools, 1 trade-press editor, 1 licence-school blog (the guest article, ready in `GUEST-ARTICLE.md`). | 3 |
| Fri 30 | Walk marina #1. Four E3 questions, no pitch, no laptop. | 2 |

**The cold-open cost in time, stated plainly.** The founder has no insider access, so every channel
is paid for in hours before it returns anything:

| Cold open | Hours before the first link may be posted | Why |
|---|---:|---|
| gCaptain forum | **~6 h over ~2 weeks** (10 substantive answers) | A new account that posts a link in week one is read as spam by any forum. Earn the right first. New-account trust lag is **unverified** — see `CHANNELS.md`. |
| TrawlerForum | **~4 h over ~2 weeks** (6 answers) | Same, slightly more forgiving per the research. |
| Licence schools | **~1 h to write, then 3–10 days of waiting** *(estimate)* | One email reaches the owner at a small school. No intro needed; the reply rate is the cost. |
| Trade press | **~1 h per pitch, 0–14 days to reply** *(estimate)* | Editorial pitch, not advertising. |
| Dock walks | **~4 h per marina for ~7 conversations** *(estimate: 20-min conversations, roughly 1 in 3 people willing)* | Zero cash, zero gatekeeper, immediate. |

**Decision:** nothing is decided in Week 2. If the page is not live by Sun 1 Nov, cut the Rule
Source Sheet to a linked PDF and ship anyway — E4 needs 7 full days of traffic and the calendar
does not move.

Cash: **$20** (half the E3 field-work line).

---

### Week 3 — 2–8 Nov · **E4 live (day 1–7) ∥ E3 interviews** · 22 h · $60

| Day | Founder does, personally | h |
|---|---|---:|
| Mon 2 | Page live. First traffic from the answers already posted plus the trade-press and school emails. Watch `calc_start` → `calc_complete` drop-off hourly on day 1 and fix anything broken in the calculator *mechanically* — a broken field is a bug, not a result. | 4 |
| Tue 3–Thu 5 | **E3.** 15 structured interviews: gCaptain and TrawlerForum thread replies, marina #2, one licence-school classroom. (Script is another agent's deliverable — use it, do not rewrite it.) Record the four things from deep dive §6 in a notes file: how messy the records are, how short people are, what they use, whether they can state their own 5-year total. | 10 |
| Fri 6 | Recruit the E6 cohort to **20 committed people** — see the box below. Post the gCaptain/TrawlerForum variant B (the one that names the calculator) **only if** the 10-answer debt is paid and the rule allows it. | 4 |
| Sat 7–Sun 8 | **E7** starts: email one licensing consultancy and one twice-renewed captain, $200 each, to mark up the Rule Source Sheet independently. Send them the sheet separately and tell neither what the other said. | 4 |

> **The one arithmetic problem in the deep dive's plan, fixed here before it bites.**
> §7 E6 needs **20 participants**. §6 says every concierge buyer is asked to join. But E5's own
> PASS threshold is only **10** orders, and E6 must start by **9 Nov** to finish its 30 days before
> the kill date. **10 buyers cannot staff a 20-person probe, and waiting for them blows the kill
> date.** Pre-committed fix, decided now and not later: the E6 cohort is recruited from
> **(a)** every concierge buyer, **(b)** every E3 interviewee who consents, and **(c)** the email
> list — in that priority order, first 20 who reply "yes" to a one-line SMS consent. The §7
> threshold is unchanged: **≥50% of 20 reply on ≥20 of 30 days = PASS; <25% = FAIL.** If fewer than
> 20 commit, the denominator stays **20** and the missing slots count as non-loggers. That makes
> the test harder, never easier, which is the only honest direction to round.

**Decision at the end of Week 3:** none yet — E4 is read at day 7 in Week 4. But one mechanical rule
applies now: if `calc_complete` is zero after 48 hours and 20+ `calc_start`s, the calculator is
broken; fix it and restart E4's 7-day clock from the fix.

Cash: **$60** (second half of E3 field work, $40; buffer $20).

---

### Week 4 — 9–15 Nov · **E4 read → E5 opens · E6 day 1** · 18 h · $0

| Day | Founder does, personally | h |
|---|---|---:|
| Mon 9 | **Read E4 at day 7.** Compute `calc_complete` ÷ unique `calc_start`, and `email_submit` ÷ unique `calc_start`. Write the number in `EXPERIMENTS.csv` **before** deciding anything. | 2 |
| Mon 9 | **E5 opens** (21-day clock: 9 Nov → 30 Nov). The $49 concierge button goes live with the offer wording from deep dive §6 and the guarantee verbatim from OFFER.md §4. | 1 |
| Mon 9 | **E6 day 1.** 20 committed people. Send the first morning SMS. One line, same time every day, no marketing in it. | 1 |
| Tue 10–Sun 15 | Deliver concierge orders as they arrive, **2 hours each, timeboxed, actual minutes recorded.** Send the daily SMS every single morning without exception — the founder is the server. Keep answering forum arithmetic. | 14 |

**Decision, committed in advance (E4, §7):**
- **PASS** — ≥25% of qualified visitors complete the calculator **and** ≥8% give an email → E5 runs as scheduled; no copy changes.
- **MIDDLE** — email rate 3–7.9%, or calculator completion under 25% → **rewrite the headline exactly once**, re-run for 7 days (ends 16 Nov), and E5 keeps running underneath. One rewrite, not three.
- **FAIL** — under 3% give an email → rewrite once, re-run 7 days; **fail twice → park the niche.**

Cash: **$0.**

---

### Week 5 — 16–22 Nov · **E5 day 8–14 · E6 day 8–14 · E7 running** · 16 h · $200

| Founder does, personally | h |
|---|---:|
| Daily SMS, 7 mornings, no gaps. ~15 min/day. | 2 |
| Concierge delivery: 2 h per order, recorded. *(estimate: 3 orders this week = 6 h)* | 6 |
| Forum answers continue — the pipeline is the channel. | 3 |
| Mid-flight E5 read, for information only, with **no decision attached**: orders ÷ qualified visitors. If qualified visitors are tracking under 250 by day 14, the constraint is traffic, not the offer: spend the back half of the week on channels 3, 5 and 7 in `CHANNELS.md`, not on rewriting copy. | 2 |
| **E7:** chase both experts, pay the first $200 honorarium on delivery, read the markup against our Rule Source Sheet line by line. Log every disagreement, including disagreements between the two experts — that is the actual output. | 3 |

**Decision:** none. E5 and E6 are not read mid-flight. This is stated so a slow week 5 cannot be
used as a reason to quit early or to double down.

Cash: **$200** (E7 honorarium 1).

---

### Week 6 — 23–29 Nov · **E5 day 15–21 · E6 day 15–22** · 16 h · $200

| Founder does, personally | h |
|---|---:|
| Daily SMS, 7 mornings. | 2 |
| Concierge delivery, 2 h per order. *(estimate: 4 orders = 8 h)* | 8 |
| **E7 closes.** Pay honorarium 2. Write the two markups into one table: rule, expert A's reading, expert B's reading, agree/disagree, our decision. | 3 |
| Pitch the guest article to the second outlet if the first has not replied in 10 days. Ask every concierge buyer the one question that matters for E6 continuity: *"will you keep replying for another two weeks?"* | 3 |

**Decision, committed in advance (E7, §7):**
- **PASS** — both experts confirm the 8-hour day, the <100 GRT 4-hour floor, the 1.5-day credit and the 360/5-year window, **and agree on the window's start** → those rules ship.
- **FAIL** — they disagree with each other, or either flags a rule as wrong → **ship both readings side by side with the dispute disclosed, or omit the rule entirely.** Never ship a single computed number we cannot source. This failure does **not** stop the build; it changes what the engine displays.

Cash: **$200** (E7 honorarium 2).

---

### Week 7 — 30 Nov–6 Dec · **E5 closes at day 21 · E6 day 23–29** · 12 h · $0

| Day | Founder does, personally | h |
|---|---|---:|
| Mon 30 Nov | **Read E5 at day 21.** Count paid `concierge_complete` orders and unique `calc_start` visitors. Record both in `EXPERIMENTS.csv` before deciding. Count `deposit_complete` separately — founding deposits are a secondary signal, **not** a substitute for concierge orders in OFFER.md §9's criterion. | 2 |
| Tue 1–Sun 6 | Daily SMS. Finish any outstanding concierge orders. Write the concierge findings notes (messiness, shortfall sizes, what they use, whether they could state their number, what they said about the price) — deep dive §6 says this is worth more than the $49s. | 10 |

**Decision, committed in advance (E5, §7 + OFFER.md §9):**
- **PASS** — ≥10 paid orders within 21 days from ≤500 qualified visitors → **build v1** (subject to E6, Week 8).
- **3–9 orders** → **extend exactly 14 days and do not build.** The extension runs 30 Nov → 14 Dec, which lands **on** the kill date; it therefore fits, and no further extension exists. On 14 Dec, OFFER.md §9 governs: fewer than 10 paid orders → park.
- **FAIL** — under 3 paid orders → **park the niche** on the §9 dated kill criterion.

Cash: **$0.**

---

### Week 8 — 7–13 Dec · **E6 closes at day 30 (9 Dec) · decision pack** · 8 h · $0

| Day | Founder does, personally | h |
|---|---|---:|
| Mon 7–Wed 9 | Last three morning SMSs. **E6 day 30 is Wed 9 Dec.** | 1 |
| Wed 9 | Count, per participant, days with a `Y` or `N` reply out of 30. Denominator is **20** regardless of how many enrolled. Record in `EXPERIMENTS.csv`. | 2 |
| Thu 10–Fri 11 | Fill in `result` and `decision_taken` for all seven rows of `EXPERIMENTS.csv`. Write the one-page decision pack: each experiment, its pre-committed threshold, the actual number, and the action `DECISION-RULES.md` already commits us to. No new argument is permitted in this document. | 4 |
| Sat 12–Sun 13 | Send the E5/E6 participants the outcome honestly, whichever way it went. Refund every founding deposit if we park (OFFER.md §4: we hold those and refund them in full on request, for any reason, up to launch — if we park, we refund without being asked). | 1 |

**Mon 14 December 2026 — the kill date.** Execute `DECISION-RULES.md`. Nothing is decided on the
day; the day only reads out what was already committed.

**Decision, committed in advance (E6, §7 + OFFER.md §2 and §9):**
- **PASS** — ≥50% of 20 reply on ≥20 of 30 days → build v1 with confidence in the **$89/year** annual price.
- **25–49%** → **build v1 but price monthly-first and treat annual as the upsell.** Pre-committed in OFFER.md §2. See `DECISION-RULES.md` for exactly what changes.
- **FAIL** — under 25% reply on ≥20 of 30 days → **the subscription thesis is dead; park even if E5 passed.**

Cash: **$0.**

---

## 4. The shape, on one line each

| Week | Dates | Running | Founder h | Cash |
|---|---|---|---:|---:|
| 1 | 19–25 Oct | **E1, E2 — the gate. No Swift, no page.** | 14 | $72 |
| 2 | 26 Oct–1 Nov | E4 build; E3/channel cold open begins | 20 | $20 |
| 3 | 2–8 Nov | **E4 live** ∥ **E3** 15 interviews; E7 commissioned; E6 cohort recruited | 22 | $60 |
| 4 | 9–15 Nov | E4 read at day 7 → **E5 opens**; **E6 day 1** | 18 | $0 |
| 5 | 16–22 Nov | E5 + E6 running; E7 markup 1 | 16 | $200 |
| 6 | 23–29 Nov | E5 + E6 running; **E7 closes** | 16 | $200 |
| 7 | 30 Nov–6 Dec | **E5 closes (day 21)**; E6 day 23–29 | 12 | $0 |
| 8 | 7–13 Dec | **E6 closes (day 30, 9 Dec)**; decision pack | 8 | $0 |
| | **14 Dec 2026** | **Kill date — execute `DECISION-RULES.md`** | — | — |
| | **Total** | | **126 h** | **$552 + $40 buffer = $592** |

Sequencing matches deep dive §7 exactly: **E1 → E2 → (E3 ∥ E4) → E5 → E6 (overlapping E5) → E7
before any build.**

## 5. What this plan assumes, and what to do if the assumption breaks

| Assumption | If it breaks |
|---|---|
| E1/E2 clear | Everything after Week 1 is deleted. That is the point of putting them first. |
| We can get ~500 qualified visitors from zero-cash channels in 5 weeks | **This is the plan's weakest point and it is unverified** — no member count for any community was obtainable in any research run. If qualified visitors are under 250 at E5 day 14, E5's denominator is small and its result is *weak*, not *negative*. `DECISION-RULES.md` says explicitly what a small-denominator result licenses and what it does not. |
| 20 people will consent to a daily SMS | Covered above: the denominator stays 20 and shortfalls count against us. |
| Two paid experts will take $200 | If either refuses, E7 runs with one expert and is recorded as **inconclusive**, which forces the FAIL branch: ship both readings side by side. |
| Hosting, email and Stripe free/advertised tiers are as described | All three are **unverified in this environment**. Each has a $0 manual fallback (mailto + spreadsheet; static HTML; a plain Stripe Payment Link). |
