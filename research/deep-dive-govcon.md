# Deep dive — Federal small-business contractors: registration & recertification date portfolio

**Niche:** Small businesses that sell to the US federal government, tracking the registration and
recertification dates that make them eligible to win work.
**Date:** 2026-10-19. **Analyst:** research sub-agent. **Phase:** 2 (deep dive, top-4 survivor).
**Carried forward from:** `research/raw/scout-4-smb.md` (Niche 5, PURSUE, 4/5 avg) and
`research/raw/scout-3-crossborder.md` (Wildcard W1, PARK, 25/35). The two scouts disagreed on
this niche; resolving that disagreement is part of this document.

---

## 0. Verification ladder used in this document

Every claim carries one of these. **No marking is ever upgraded** from what the raw files gave it.

| Mark | Meaning |
|---|---|
| `[primary]` | Original regulation/decision text read directly. **Nothing in this document qualifies.** |
| `[secondary]` | Statute/clause quoted inside a law-firm or professional-services page, as recorded by a scout. |
| `[snippet-only]` | Known only from a search-result summary; the page itself was never opened. **All new research in this session is `[snippet-only]`** — `WebFetch` returned `ENOTFOUND` for `www.acquisition.gov` and every other host tried this session. |
| `[vendor]` | Sourced to a company selling into this market (renewal services, compliance software). Treat as directional and self-interested. |
| `[stale]` | Snapshot from a service that no longer updates. |
| `(estimate)` | My arithmetic, shown. Not a sourced figure. |

**Session limits, stated up front:** `WebFetch` failed on every host. `reddit.com`,
`apps.apple.com`, `g2.com`, `capterra.com` were unreachable to both scouts and I did not
retry them. I ran 9 WebSearch calls; the budget held. **Zero primary sources were read in
either phase.** Every regulation cite below is a cite-of-a-cite.

---

## 0b. ⚠️ MATERIAL NEW FINDING THAT CHANGES THE CASE

Both scouts anchored this niche on *GAO, TLS Joint Venture, B-422275* (April 2024) — a one-day
SAM lapse during evaluation cost the award. **That line of cases was decided under a version of
FAR 52.204-7 that has since been replaced.**

- An **interim rule published 12 November 2024 at 89 FR 89472** (FAR Case **2024-002**, per the
  FAC 2025-01 List of Sections Affected) revised FAR 52.204-7. Reported substance: offerors
  "must be registered in SAM at the time of offer submission and at the time of contract award,
  but are not required to be registered at every moment in between." `[snippet-only]`
  — <https://www.pilieromazza.com/sam-registration-rules-may-ease-lapses-ok/>
- A surety-industry post titled, verbatim, **"Good News for Contractors: SAM Lapse Will No Longer
  Cost You a Contract"** `[snippet-only]`
  — <https://www.nasbp.org/post/good-news-for-contractors-sam-lapse-will-no-longer-cost-you-a-contract/>
- **The interim rule was adopted as a final rule without change** in FAC 2025-05, effective
  7 August 2025. `[snippet-only]`
  — <https://www.mofo.com/resources/insights/250818-sam-registration-rule-finalized>
- The FAR smart matrix lists the current 52.204-7 at **Nov 2024**, replacing an Oct 2018 version
  "which was the subject of multiple bid protests." `[snippet-only]`
  — <https://www.acquisition.gov/far-smart-matrix>

**I could not read the operative clause text.** `acquisition.gov` is DNS-blocked here.
**This is the single highest-priority verification item in the whole document.**

**What it does to the thesis.** It does *not* kill it, but it re-aims it:

1. The scariest story we were going to tell (one day inactive mid-evaluation = award gone) is
   **no longer current law**. Telling it anyway in marketing would be selling fear from a
   superseded rule. Forbidden.
2. **What still bites:** you must be active at offer submission *and at award*. **You do not
   control the award date.** If your 365-day clock runs out in the gap, you are ineligible at
   the one instant you cannot predict. And an inactive registration still "blocks new awards and
   federal payments" `[vendor]` — <https://samsearch.co/glossary/sam-gov-registration-renewal> —
   so a lapse still freezes cash on contracts you already hold.
3. The **non-SAM** portfolio (8(a), HUBZone, WOSB, CPARS, JV registration) is **untouched** by the
   Nov 2024 change. That portfolio is now the centre of the product, not the periphery.

Scores revised accordingly in §14.

---

## 1. Thesis and ICP

**Thesis.** An owner-run federal contractor's right to *win work* is gated by a portfolio of
dates that no single system owns and no single person reminds them about: a SAM registration
whose 365-day clock silently restarts every time they touch their own record; annual
representations that live inside that same record; a program anniversary for 8(a); a *triennial*
anniversary for HUBZone and for WOSB/EDWOSB that fires so rarely nobody has a habit for it; a
14-day CPARS comment window that starts on a system notification and is gone before a busy owner
opens the email; and a separate registration for every joint venture they form. Each date is
knowable from a document the owner already has, and each one is computed from free, stable,
nationwide federal rules — but they sit in five different systems, arrive by email to one address
that is frequently a departed employee's, and are indistinguishable from the renewal-scam emails
this market is explicitly warned about. The product is a single private register of those dates on
the owner's phone, with a reset-aware clock, an escalating reminder ladder, and a one-page Date
Pack the owner can hand to a prime, a banker or a teaming partner. We sell *no surprise dates* —
never a verdict on eligibility, which we are neither able nor permitted to give.

**ICP, one line.** The **owner** (or the single person who is simultaneously owner, BD lead and
contracts admin) of a **1–50 employee** federal contractor doing **$500k–$20M of federal revenue**,
holding at least one of 8(a) / HUBZone / WOSB-EDWOSB / VOSB-SDVOSB, who personally renews the SAM
record and has **no compliance department, no contracts manager and no GovCon ERP**.

Carried from scout-4's ICP line (same file, Niche 5 ICP). Revenue band and headcount are
scout-4's figures and were **not sourced**; treat as `(estimate)`.

---

## 2. Value Equation (Hormozi)

### Dream outcome — in the customer's words
No owner-voice quote exists for this (see §4a). The closest *real* quoted articulation of the
outcome, from practitioner commentary, is the negative form:

> "Contractors must not let their SAM registration lapse at all, even when renewal information
> was already submitted" — SmallGovCon `[secondary]`
> <https://wifcon.com/discussion/index.php?/blogs/entry/5958-gao-reminder-joint-ventures-must-register-on-sam/>

**Stated as the dream outcome, inferred (marked as inference):** *"I never lose a bid, a payment
run or a set-aside on a date. When a prime or a bank asks me to prove my registrations and
certifications are current, I send one page in ten seconds and look like the most organised shop
they deal with."*

### Perceived likelihood of achievement — what makes them believe it
Three concrete belief-builders, in the order a prospect meets them:

1. **The 365-day reset computation their calendar gets wrong.** Registration runs 365 days from
   submission/processing, not from a calendar anniversary, and "updates in SAM.gov during the year
   will reset the clock for the renewal period" `[secondary]`
   — <https://crowell.com/en/insights/client-alerts/check-your-sam-registration-early-and-often>;
   "there is **no grace period**" `[vendor]`
   — <https://samsearch.co/glossary/sam-gov-registration-renewal>. A reminder the owner set in
   Apple Calendar last year is now wrong and they do not know it. **Our first screen proves this
   in under 60 seconds** by showing a date that differs from the one in their head. This is the
   belief engine — not a claim, a demonstration on their own data.
2. **The case law, cited honestly and with its own expiry date.** *TLS Joint Venture*,
   B-422275 (Apr 2024) — renewal filed before expiration, activation landed the next day, GAO
   found a FAR 52.204-7 lapse, **a one-day gap cost the award** `[secondary]`
   — <https://www.mayerbrown.com/en/insights/publications/2024/04/us-gao-decision-shows-danger-of-allowing-sam-registration-to-lapse-during-solicitation-period>,
   <https://smallgovcon.com/gaobidprotests/gao-dont-slip-up-on-sam-registration-even-for-one-day/>.
   *Prak Industries*, B-422517 (Jul 2024) — a JV ineligible because the **JV entity itself** was
   not registered, though both members were `[secondary]`
   — <https://wifcon.com/discussion/index.php?/blogs/entry/5958-gao-reminder-joint-ventures-must-register-on-sam/>.
   *Myriddian* (COFC, 2023), same strict reading `[snippet-only]`
   — <https://smallgovcon.com/?p=25886>.
   **Mandatory honesty constraint:** every one of these predates the Nov 2024 rule change (§0b).
   They may be used as *history* ("this is why the rule was rewritten") and as the *JV* lesson
   (Prak is unaffected — the JV registration requirement did not change). They may **not** be used
   to imply that a one-day lapse today still costs an award. Any copy that does is pulled.
3. **An exportable Date Pack.** One page, on-device PDF: every entity, every obligation, the date,
   the days remaining, the rule it comes from and its citation, and a visible "as entered by the
   user on <date>; this is not a status read from any federal system" footer. The believability
   mechanism is that the owner can show it to a third party and be challenged on it — a document
   you can be audited on reads as true in a way a push notification does not.

### Time delay — how fast the first value lands
- **Aha moment target: 45 seconds, 4 taps, zero accounts, before any payment.** (§8, "The Reset
  Reveal"). Screens: what-this-is → one date picker → the computed expiry with days remaining.
- **Full portfolio set up: ~8 minutes** `(estimate)` — 1 SAM date + up to 4 certification-letter
  dates + 1 reps-and-certs date, at ~70 seconds per date including finding the letter.
- **Concierge pre-app version: same calendar day.** The founder can do a Date Audit by hand in
  ~25 minutes (§6).

### Effort and sacrifice — removed, and still required (honest)
**What we remove:** the arithmetic (reset-aware 365-day clock; triennial anniversaries; a 14-day
window that starts on a notification date); the remembering (an escalating ladder, on the device,
not in an inbox); the assembly (five systems and four letters collapsed into one page); the
trust problem (nothing arrives by email, so nothing can be a phishing lookalike — and this market
is warned that "any request for payment should be considered fraudulent" `[secondary]`
— <https://www.psats.org/?p=8426>).

**What we still require of them — and this is the honest part:**
1. **They must type their own dates in.** We do not read SAM.gov, DSBS, Certify or CPARS. No
   backend, no API, no scraping (studio constraint).
2. **They must tell us when they touch their SAM record**, or our number silently goes stale. The
   reset rule is the product's core value *and* its core fragility. We mitigate with a quarterly
   "confirm from source" prompt and a one-tap "I updated SAM on <date>" reset, but we cannot
   mitigate it away. **See §8 for the hard-gate analysis of exactly this.**
3. **They must still go to sam.gov and certify.sba.gov to actually renew.** We are the clock, not
   the hands.
4. **They must keep notifications enabled.** If they decline, the app degrades to a thing they
   have to open.

### How the product maximises the top and minimises the bottom
| Term | Lever |
|---|---|
| Dream outcome ↑ | Sell the *portfolio* and the Date Pack (a thing you hand to someone), not "SAM reminders" — a bigger, more status-bearing outcome than not-lapsing. |
| Likelihood ↑ | Prove it on their own data in 45 seconds, before the paywall. Show the citation next to every rule. Show a date that contradicts them. |
| Time delay ↓ | Aha before signup, before payment, before the full portfolio. One date picker. |
| Effort ↓ | One tap to reset the clock. Pre-built obligation templates per program, so they pick a program and get its dates, not a blank form. Notification ladder means zero recurring effort. |

---

## 3. Starving-crowd test

| Test | Score | Evidence |
|---|:---:|---|
| **Massive pain** | **3.5 / 5** | Downgraded from scout-4's 5. The mechanism is real and the magnitude is extreme — an inactive registration "blocks new awards and federal payments" `[vendor]` (<https://samsearch.co/glossary/sam-gov-registration-renewal>); reactivation "can take 7-10 business days or longer" `[vendor]` (<https://www.sledai.com/blog/how-to-renew-sam-registration/>); "the system can take days (or even weeks) to display an active status" `[secondary]` (<https://wiley.law/alert-SAM-Registered-I-Am-Part-2-Contractors-Beware-of-Lapses-in-SAM-Registration>). **But** the sharpest documented loss mechanism was legislated away in Nov 2024 (§0b), and **we have zero evidence of anyone experiencing this pain in their own words** (§4a). High-magnitude, low-frequency, unwitnessed. |
| **Purchasing power** | **4 / 5** | Best-evidenced leg. These firms hold federal primes. Hard, verified WTP proxy: third parties charge **$399 for a one-year SAM renewal service, $599 for two years, $899 for three** (Sam Renewal Support); **$597** for "complete SAM registration services" (Federal Contractor Registry); **$399–$998** (Fed Filing) `[snippet-only]` — <https://truthinadvertising.org/articles/sam-renewal-support/>, <https://truthinadvertising.org/articles/federal-contractor-registry/>, <https://truthinadvertising.org/articles/federal-filing-government-imposter-scam/>. People in this market pay **$399/yr for a task that is free**. That is the strongest purchasing-power datum in the file. (Note the irony: those vendors are characterised as imposter/scam operations by the source — which means the $399 proves *gullibility under deadline anxiety* as much as it proves budget. Still a real transaction at a real price.) **TAM still entirely unobtained** — no count of active SAM registrations in either phase. |
| **Easy to target** | **3 / 5 — disagreement RESOLVED in favour of scout-3** | See below. |
| **Growing** | **2 / 5 — UNRESOLVED, flag it** | **I have no evidence either way.** Neither scout obtained a count of registered entities, a trend in small-business federal obligations, or a count of certified 8(a)/HUBZone/WOSB firms. Directionally there is churn (SBA restructured HUBZone recertification in a Dec 2024 final rule and WOSB annual attestation in 2023 — §9), but rule churn is not market growth. **Do not claim growth.** Ranked #4 in §13. |

### Resolving "easy to target": scout-4 scored 4, scout-3 scored 3
**Resolution: 3.** Scout-3 is right, and for a reason neither scout stated.

What is actually verified:
- A large, named, **free** national network exists. APEX Accelerators (formerly PTACs) provide
  no-cost one-on-one counselling and some centres "provide free, hands-on assistance with SAM
  registration." Location counts **conflict across sources**: "250+ Locations" (NAPEX,
  <https://www.napex.us/>), "more than 300 local APEX Accelerators offices"
  (<https://www.sbir.gov/tutorials/state-service-providers/tutorial-2>), "95 centers across the
  United States" (2025 DoD briefing,
  <https://media.defense.gov/2025/Dec/11/2003841166/-1/-1/1/APEX%20ACCELERATORS%20INFORMATION.PDF>)
  — all `[snippet-only]`. Likely offices vs. lead organisations; unresolved.
- A serious practitioner forum exists and is **not proxy-blocked**: Wifcon, "27 Years Online"
  — <https://wifcon.com/discussion/> `[secondary, scout-4]`.
- A dominant free newsletter exists: SmallGovCon — <https://smallgovcon.com/> `[secondary, scout-4]`.
- University-hosted SBDC/APEX centres publish SAM renewal FAQs, i.e. they are already doing our
  education for free — e.g. Nebraska Business Development Center, which advises starting "two to
  three months in advance" `[snippet-only]`
  — <https://unomaha.edu/nebraska-business-development-center/news/2022/08/sam-renewal-faq.php>.

Why that is a 3 and not a 4 — the decisive point:
1. **Every channel is gatekept and none of their self-promotion rules are verified.** I searched
   specifically for Wifcon's posting rules and GovCon LinkedIn group rules and found **nothing
   Wifcon-specific** `[snippet-only]` (LinkedIn's own guidance: "the specific details of what's
   considered self-promotion depends on the group… check the group rules first"
   — <https://www.linkedin.com/help/linkedin/answer/a569220>). A named community you may not post
   in is not a channel; it is a wall with a name.
2. **The one channel that could scale cheaply is unverifiable in this environment.** r/govcon and
   r/GovernmentContracting (~44k `[stale]`, <https://gummysearch.com/r/GovernmentContracting>) are
   blocked at the proxy for both scouts. GummySearch itself shut down 2025-11-30, so the count is
   a dead snapshot.
3. **APEX is a referral channel, not a distribution channel.** 250–300 publicly funded counsellors
   will not promote a paid iOS app to their clients without a reason, and each one is an individual
   relationship. High value, very low velocity.
4. **It is B2B with a buyer who is also the operator.** Scout-3's phrasing is exactly right:
   "identifiable and B2B-reachable, but **not a cheap consumer channel**."

Against the rubric's own language, 3 = "some forums, no clear hub." That is precisely the
situation. **Scored 3.**

---

## 4. Grand Slam Offer

### 4a. Every problem — in the customer's own words, where words exist

**Honest labelling first.** Scout-4: "these are practitioner-facing law-firm and industry
commentary, **not individual small-business owners venting**." Scout-3: "**No verbatim complaints
obtainable.**" I retried this session with a targeted search for owner complaints and the result
was: *"The search didn't turn up a real forum thread of frustrated owners. The results are mostly
consultant blog posts and one legal analysis."* `[snippet-only]`

**Therefore: no verbatim complaint from a small-business owner exists anywhere in this research.
Not one. Every "customer voice" below is either practitioner commentary (quoted, linked) or my
inference (labelled). This is the biggest weakness in the entire case for this niche.**

| # | Problem | Status | Evidence |
|---|---|---|---|
| P1 | The renewal date is not where you think it is, because touching your own record moves it. | **QUOTED (practitioner)** | > "updates in SAM.gov during the year will reset the clock for the renewal period" — Crowell `[secondary]` <https://crowell.com/en/insights/client-alerts/check-your-sam-registration-early-and-often> |
| P2 | Filing on time is not the same as being active on time, and you cannot make the government hurry. | **QUOTED (practitioner)** | > "the system can take days (or even weeks) to display an active status" — Wiley `[secondary]` <https://wiley.law/alert-SAM-Registered-I-Am-Part-2-Contractors-Beware-of-Lapses-in-SAM-Registration>. Also: "both GAO and the COFC have found that the current language in FAR 52.204-7 mandates severe impacts on contractors having SAM registration issues, **even where Government processing delays are the cause**" — same `[secondary]`. (Caveat: "current language" there = pre-Nov-2024.) |
| P3 | There is no grace period, and once inactive you cannot bid or get paid. | **QUOTED (vendor)** | > "there is **no grace period**"; an Inactive status "blocks new awards and federal payments" `[vendor]` <https://samsearch.co/glossary/sam-gov-registration-renewal>. "it can no longer place bids or receive contract awards from federal agencies" `[secondary]` <https://rsmus.com/insights/industries/government-contracting/the-critical-role-of-sam-registration-for-federal-contractors.html> |
| P4 | You form a JV, both partners are registered, and nobody registers the JV. | **QUOTED (practitioner)** | > "it can be easy to overlook registering a joint venture entity on SAM, when contractors making up the joint venture are already registered on SAM" — SmallGovCon `[secondary]` <https://wifcon.com/discussion/index.php?/blogs/entry/5958-gao-reminder-joint-ventures-must-register-on-sam/> |
| P5 | The official reminder goes to an inbox nobody reads any more. | **QUOTED (vendor)** | > the "most common cause of a lapse [is] the account manager leaving the company" `[vendor]` <https://blogs.usfcr.com/when-a-sam-registration-lapse-costs-you-the-award> |
| P6 | You cannot tell a real renewal notice from a scam, so you ignore all of them. | **QUOTED (association)** | > "there is no fee associated with registration or renewal in SAM"; "any request for payment should be considered fraudulent" — PSATS `[secondary]` <https://www.psats.org/?p=8426>. Corroborated: imposter firms "send scary emails warning that failing to renew registration puts future funds at risk" and link to lookalike sites `[snippet-only]` <https://truthinadvertising.org/articles/federal-filing-government-imposter-scam/> |
| P7 | The renewal takes weeks you didn't budget, so "I'll do it next month" is already late. | **QUOTED (APEX/SBDC + vendor)** | Start "two to three months in advance" `[snippet-only]` <https://unomaha.edu/nebraska-business-development-center/news/2022/08/sam-renewal-faq.php>; FSD "recommends that entities begin the renewal process at least 45 days prior to expiration" `[snippet-only]` <https://gao.az.gov/news/samgov-entity-validation-reminder>; "at least two months prior to the expiration date" — RSM `[secondary]` (URL above); 60–90 days — USFCR `[vendor]` |
| P8 | Your set-aside recert fires on a cycle so rare you have no habit for it, and the rules changed recently. | **QUOTED (regulation-as-quoted)** | HUBZone: recertify "every three years," submitted "in the 90 calendar days before the triennial anniversary" `[snippet-only]` <https://www.law.cornell.edu/cfr/text/13/126.500>. WOSB: three-year program examination; annual update "repealed… effective May 30, 2023" `[snippet-only]` <https://www.law.cornell.edu/cfr/text/13/127.400> |
| P9 | A performance evaluation lands and you have 14 days to respond before it goes to source-selection officials. | **QUOTED (practitioner)** | CPARS auto-notification "is the equivalent of 'providing' the past performance evaluation to the contractor, and it starts the 14 day suspense period" `[snippet-only]` <https://www.arnoldporter.com/en/perspectives/advisories/2014/06/new-rule-significantly-decreases-contractor-comm__> |
| P10 | A prime, a bank or a teaming partner asks you to prove everything is current and you spend an afternoon assembling it. | **INFERRED — no quote, no source.** | My inference from the existence of the Date Pack need. **Unvalidated. Must be tested in the first 15 interviews (§7, E1).** |
| P11 | You are one person doing owner, BD and contracts, and the dates are the part that gets dropped. | **INFERRED** from scout-4's ICP line. **No source.** | |
| P12 | You do not actually know which of your dates is the next one. | **INFERRED** — but it is the cheapest to test, and the concierge audit (§6) tests exactly it. | |

### 4b. A solution for each

| Problem | Solution in the product |
|---|---|
| P1 | **Reset-aware clock.** Expiry = (date the user says they last submitted/updated) + 365. A one-tap "I updated SAM on <date>" recomputes and logs the reset with a visible history, so the owner can see the date move. |
| P2 | **Lead-time band, not a deadline.** The ladder's outer rung is 90 days and the UI shades a "start window" band (45–90 days out, each bound carrying its source), rather than pointing at the expiry date. The product's recommendation is *start*, never *you are fine until*. |
| P3 | **Escalating local notifications** at 90/60/30/14/7/1 days. No email, no server, no inbox. |
| P4 | **JV entities are first-class records**, created from a checklist that cites *Prak Industries* B-422517, with their own independent 365-day clock. |
| P5 | **Nothing depends on an email address.** The reminder is on the owner's personal phone, which does not leave when the account manager does. |
| P6 | **No inbound messages at all, ever.** The app never emails and never asks for payment outside Apple IAP, so there is nothing for an imposter to imitate. We say so on the first screen. |
| P7 | The 90-day rung plus the start-window band, with the FSD 45-day and the RSM "two months" figures shown side by side as sources rather than averaged into a fake number. |
| P8 | **Program templates** with the correct interval per program (365-day, annual anniversary, triennial), each shipping its citation and its verification level visibly. A triennial item gets a 180/120/90/60/30 ladder because a 3-year item needs a longer runway. |
| P9 | **CPARS window timer**: enter the notification date, get a 14-day countdown with reminders at day 7, 3 and 1. |
| P10 | **Date Pack PDF**, on-device, one page, with an explicit "entered by the user; not read from any federal system" footer. |
| P11 | Phone-first, single-user, no accounts, no invites, no seats. Setup in ~8 minutes. |
| P12 | The dashboard's only headline is **"Next date: X — N days"**, and the state line is **"2 items need attention"** (never "you are compliant", never "you are eligible"). |

### 4c. Trim and stack

**Trimmed out of the offer (and why):**
- Live SAM status lookup — needs a federal system read. Out (§8).
- Opportunity/solicitation search — a different product with funded incumbents.
- Document storage for certification letters — invites "is my data safe" questions for little value; deferred.
- Multi-user / consultant portfolio view — violates single-user constraint.
- Anything that renders a verdict on eligibility — forbidden by CLAUDE.md §4.
- "We'll renew it for you" — that is the $399 service business, not an app.

**The stack, in the order it is pitched:**
1. The reset-aware SAM clock with the 90/60/30/14/7/1 ladder. *(P1, P2, P3, P5, P7)*
2. Your whole date portfolio in one register — 8(a), HUBZone, WOSB/EDWOSB, VOSB/SDVOSB, annual reps & certs, and every JV. *(P8, P4, P11)*
3. The CPARS 14-day comment timer. *(P9)*
4. The one-page Date Pack PDF + calendar (.ics) export. *(P10)*
5. Every rule with its citation and its verification level on screen. *(trust; and it is the honest implementation of CLAUDE.md §6)*
6. Nothing arrives by email. Nothing is stored off your phone. *(P6)*
7. **Bonuses** (§4h).
8. **Guarantee** (§4f).

### 4d. MAGIC name

Three candidates (M = magnetic reason why, A = avatar, G = goal, I = interval, C = container):

| | Name | M / A / G / I / C | Verdict |
|---|---|---|---|
| 1 | **"Set-Aside Clock — the 365-Day Renewal & Recert Calendar for Owner-Run Federal Contractors"** | M: the clock resets when you touch your record / A: owner-run federal contractor / G: never surprised by a date / I: 365 days / C: iOS app + Date Pack | Most magnetic. **Rejected:** "Set-Aside Clock" edges toward implying we determine set-aside *status*. Fails the "Airworthy today?" test on the same axis TailBook did. |
| 2 | **"Recert Register — the 365-Day Renewal & Recert Calendar for Owner-Run Federal Contractors"** | M: the 365-day clock restarts every time you update your own record, and nobody tells you / A: owner-run federal contractor / G: no renewal or recertification date is ever a surprise / I: 365 days (and the triennial items inside it) / C: iOS app + exportable one-page Date Pack | **CHOSEN.** "Register" is a records word, not a status word. "Recert" is a user-side industry term, not an agency name. Nothing claims a verdict. |
| 3 | **"The 8-Minute Date Audit — One Year of Renewal Reminders for Owner-Run Federal Contractors"** | M: 8 minutes once / A: same / G: one year covered / I: annual / C: audit + app | Good for the *concierge MVP* headline (§6) and I will reuse it there. Weak as a product name — names a one-off event, and the product is a subscription. |

**CHOSEN: "Recert Register."** Tagline: *"The 365-day renewal and recert calendar for owner-run
federal contractors."*

#### Naming note — government-affiliation risk (legal and App Store, not branding)

**Binding rule for every name, string, icon, screenshot and keyword:** nothing may imply
affiliation with, endorsement by, or data from SAM.gov, GSA, SBA, DoD or any federal agency.

Why this is a legal and App Store problem and not a taste question:
- The App Store Review Guidelines' developer-identity and impersonation rules get applied to
  government lookalikes aggressively; a name reading as an official renewal channel is a
  rejection, and a repeat offence is an account risk. `(assessment — I could not reach
  developer.apple.com this session; verify the exact guideline numbers before submission.)`
- **This market is actively being defrauded by exactly this impersonation.** "Third-party firms
  commonly send emails that look official… The emails link to websites posing as SAM.gov"
  `[snippet-only]` — <https://truthinadvertising.org/articles/federal-filing-government-imposter-scam/>;
  state and association warnings tell contractors that "any request for payment should be
  considered fraudulent" `[secondary]` — <https://www.psats.org/?p=8426>; the FTC/BBB-adjacent
  literature treats these operators as government imposters
  — <https://truthinadvertising.org/articles/usa-filing-government-imposter-scam/>. A product
  named to sound official would be **in the same taxonomy as the scams our own marketing points
  at.** That is a consumer-protection exposure, not a trademark one.

**Forbidden in name, subtitle, keywords, icon, screenshots and all copy:** "SAM", "SAM.gov",
"GSA", "SBA", "8(a) Official", "Certified", "Approved", "Federal Registry", any seal, eagle,
shield, Capitol dome, or red/white/blue-on-navy official-document styling.
**Also forbidden (the "Airworthy today?" test):** "Are you eligible to bid?", "Compliance
status: OK", "You're certified", "Award-ready", "Your registration is active". The permitted
forms are **"All items current?" → "2 items need attention"** and **"Next date: 41 days (from
your entered submission date)."** Precedent recorded in CLAUDE.md §4 and in scout-3's own
App-Store-risk note for this niche, which independently landed on the identical phrasing.

### 4e. Price, anchored to the cost of the problem

**Anchor: one lost award. Not competitor app prices — there are no competitor apps (§10).**

Arithmetic, written out, with every input's status:

```
A. One lost award, low end of range            $250,000   (estimate, scout-4; the $250k–$5M
                                                           band is scout-4's own estimate and
                                                           it flagged it for verification —
                                                           sam.gov and usaspending.gov were
                                                           unreachable. NOT a sourced figure.)
B. Sunk proposal cost written off               $15,000   (estimate: 150 hours of owner +
                                                           proposal help at a $100/hr loaded
                                                           rate = $15,000. Scout-4 said "tens of
                                                           thousands"; I use the low end.)
C. Total single-occurrence loss, low end       $265,000   = A + B

D. Verified price this market already pays
   a third party for the free renewal task         $399   /year  [snippet-only]
   (Sam Renewal Support 1-yr; Fed Filing 1-yr;
    Federal Contractor Registry charges $597)

E. Our annual price                               $149   /year
F. Our monthly price                               $19   /month  = $228/year

Ratio to one occurrence:   $265,000 / $149  =  1,779 x
Ratio to sunk proposal
cost alone:                 $15,000 / $149  =    101 x
Ratio to what they already
pay for the free task:          $399 / $149  =    2.7 x  (we are 37% of the incumbent cash price)
Annual vs monthly saving:  ($228 - $149) / $228  =  34.6%
```

**$149/year, or $19/month. 14-day free trial (StoreKit 2 introductory offer).**

**Why annual is the push, and it is not a discount trick:**
1. **The product's unit of value is a year.** The core obligation is a 365-day clock; HUBZone and
   WOSB are *triennial*. A monthly subscriber who churns in month 3 is uncovered precisely at
   the renewal the product exists for. Selling monthly sells a gap.
2. **It sits visibly under the $399 they already pay.** $149 reads as obviously cheaper than the
   renewal service and obviously more than free, which is where a de-risking tool should sit.
3. **Honest framing of the saving:** "$149 for the year, or $19 a month. The year is 35% less,
   and it is the one that actually covers your renewal." No countdown, no fake crossed-out price.

**Deliberately not done:** no $999 "enterprise" tier (no backend, no seats); no price scaled to
contract value (we cannot verify contract value and it invites a claim that we are pricing our
own importance to an award).

### 4f. Guarantee — honest and compatible with Apple's refund system

**The constraint:** Apple issues App Store refunds; we cannot. Promising a refund we do not
control is both a broken promise and an App Store problem. CLAUDE.md §5 forbids promising an
automatic unlock from a web payment; the same logic forbids promising a refund from an Apple one.

**Mechanism chosen: a 14-day StoreKit 2 free trial (so the common "I want out" case needs no
refund at all) plus a guarantee we pay ourselves, in a channel we control.**

Exact wording, to appear verbatim on the paywall and on the landing page:

> **The Reminder Promise.**
> Every subscription starts with a 14-day free trial. Cancel in Settings before it ends and you
> are charged nothing — you never need a refund.
>
> After that: if a date you entered and confirmed in Recert Register passes without this app
> having sent you the reminders it said it would — 90, 60, 30, 14, 7 and 1 days out — email
> support with a screenshot of the item and we will send you the full price of your subscription
> back ourselves, by the same method you choose, for up to 12 months after purchase. You keep
> the app.
>
> Two things we will not pretend about. **App Store refunds are issued by Apple, not by us** — if
> you want your purchase reversed through Apple, request it at reportaproblem.apple.com; we can
> neither issue nor guarantee that. And **this promise covers our reminders, not your
> registrations.** Recert Register organises dates you enter and counts days from them. It does
> not read SAM.gov, DSBS, Certify, CPARS or any other federal system, it cannot tell you whether
> you are registered or certified, and we do not guarantee any contract, award or payment.

Why this is honest: the promise is scoped to **the one thing entirely within our control** (did
the notification fire on a date the user entered), it is paid out of a channel we actually
operate, it tells the truth about Apple, and it explicitly disclaims the outcome we are not
allowed to guarantee.

### 4g. Scarcity and urgency — real only

**Real scarcity (one item):**
- **Founding cohort: 20 concierge Date Audits.** Each takes the founder ~25 minutes plus
  follow-up. 20 is the honest capacity of one person alongside the build. When they are gone
  they are gone, and we say the number remaining as a fact we can prove by the names on the list.

**Real urgency (one item, and it is the customer's own):**
- **Their own clock is already running.** The next rung on their own ladder is a date, not a
  marketing deadline. The honest urgency line is: *"FSD recommends beginning your renewal at
  least 45 days before expiration"* `[snippet-only]` — <https://gao.az.gov/news/samgov-entity-validation-reminder>
  — *"and your SBDC's own guidance says two to three months"* `[snippet-only]`
  — <https://unomaha.edu/nebraska-business-development-center/news/2022/08/sam-renewal-faq.php>.
  *"If your expiry is inside 90 days, the window to start comfortably has already closed."*

**Explicitly forbidden:** countdown timers not tied to a user's own date; "price goes up Friday"
unless the price actually goes up Friday and stays up; "only 3 spots left" unless 3 are left;
any invented scarcity of a digital good. A founding price lock may be offered **only** if it is
honoured permanently.

### 4h. Bonuses — each one kills a named objection

| Bonus | Objection it kills (stated in the objector's voice) | What it is |
|---|---|---|
| **B1. "The Dates GSA Does Not Email You"** — a one-page PDF listing all seven obligations, their interval, their source citation and their verification level. | *"SAM.gov already emails me renewal reminders. Why would I pay for this?"* — **the single strongest objection, and it is a good one** (§10). GSA alerts entity administrators at 60/30/15 days `[snippet-only]` <https://gao.az.gov/news/samgov-entity-validation-reminder>; SBA emails WOSB notices from the 120-day mark `[snippet-only]` <https://www.law.cornell.edu/cfr/text/13/127.400>; VOSB notices 90 days out `[secondary]` <https://sbaone.atlassian.net/wiki/spaces/UCPUKB/pages/3823403009>. B1's job is to show, line by line, which items have **no** official notice and which notices go to an address the owner may not control. |
| **B2. "The 8-Minute Date-Pull Walkthrough"** — screen-by-screen: exactly where in SAM.gov and in each SBA letter the date you need is printed. | *"I don't know what date to type, and if I type the wrong one this thing is worse than useless."* |
| **B3. The one-page Date Pack PDF** (also a core feature — included here because it is what kills the objection). | *"I already have a spreadsheet."* The spreadsheet does not export to something you hand a prime, a bank or a teaming partner. |
| **B4. "The JV Registration Checklist"** — 6 items, citing *Prak Industries* B-422517 `[secondary]`. | *"We're about to team on something and I'm sure we'll work it out."* This is the one problem on the list with a GAO decision that the Nov 2024 rule change did **not** touch. |
| **B5. Export-everything** — every date out as .ics and as plain text, any time, one tap. | *"What happens to my data if you shut the app down, or if I don't renew?"* |
| **B6. Founding-member concierge Date Audit** — the founder builds your register with you on a call (20 only, §4g). | *"I don't have an hour to set up another app."* |

---

## 5. Lean Startup hypotheses

**Value hypothesis.**
*An owner-run federal contractor, shown their SAM expiry recomputed from the date they last
touched their own record, will find it differs from the date they believed — and that single
contradiction is enough to make them maintain a private register of 5–8 renewal and recert dates
and pay $149/year for the reminders.*

Falsifiable in two steps, and the first step needs no app: (a) do owners hold a wrong date? (b) does
being shown the wrong date convert to money?

**Growth hypothesis.**
*Engine of growth: **paid** — specifically, **paid-via-credible-intermediary**, i.e. sponsorship of
and placement in the newsletters and counselling networks this audience already trusts
(SmallGovCon, Set-Aside Alert, APEX Accelerator client emails), funded out of subscription
revenue.*

I am naming **paid** rather than viral or sticky, deliberately and against the grain of what a
studio would prefer:
- **Viral is structurally unavailable.** The product is single-user by constraint (CLAUDE.md §3).
  There is no invite, no shared register, no counterparty. The one latent viral surface is the
  Date Pack PDF handed to a prime — and a prime receiving one is not our ICP.
- **Sticky is real but cannot *acquire*.** Retention should be genuinely good (the obligations
  recur for the life of the business, and HUBZone/WOSB are triennial so the register has to
  survive years to pay off). Sticky keeps the cohort; it does not create one.
- **Paid is the only honest fit**, with LTV supporting it: at $149/year and an assumed 2.5-year
  life `(estimate)`, LTV ≈ $372 gross, ≈ $279 after Apple's 30% (`$372 × 0.70 = $260`; use $260).
  A target CAC of ≤ $87 gives a 3:1 LTV:CAC. **Unverified:** no newsletter sponsorship rate card
  was obtained in either phase. Ranked in §13.

**The single riskiest assumption.**

> **RA: That owner-run federal contractors are actually holding a wrong date — i.e. that GSA's and
> SBA's own free email notices do not already solve this well enough that nobody will pay.**

Why RA beats the other candidates:

| Candidate | Why it is not the riskiest |
|---|---|
| Will they pay $149? | Partly answered: this market demonstrably pays **$399/year** for a renewal task that is free `[snippet-only]`. Budget is the best-evidenced leg in §3. |
| Can we build it in a week? | Lowest-risk item in the file. Tens of date records, one deterministic engine, no backend. Scout-4 and scout-3 both scored buildability well. |
| Can we reach them? | Risky (3/5, §3) but **cheap to test** — one Wifcon post and ten APEX emails cost a day. |
| Is the magnitude big enough? | Weakened by the Nov 2024 FAR change (§0b) but still multiple orders of magnitude above $149 even at the low estimate. |
| **RA — is the date actually wrong?** | **It is load-bearing for everything and it is the one thing no evidence in either scout file touches.** If GSA's 60/30/15 notices are computed from the *true* reset date — and they almost certainly are, because GSA owns the record — then **GSA's free email is strictly more accurate than our manual-entry number.** We would be selling a worse data source against a free better one, which is scout-3's exact PARK reasoning. And we have **zero owner-voice evidence** in either direction: not one person on record saying they were surprised by their own date (§4a). Highest consequence, lowest evidence, cheapest to test. |

**Dated kill criterion.** If, by **2026-11-16** (4 weeks), fewer than **8 of 15** interviewed owners
state a SAM expiry date that is wrong by more than 14 days when checked against their own record,
**this niche is killed** and the studio moves to the next of the top 4. No extension, no second
sample.

---

## 6. MVP — the smallest test of RA, before any app

**Build nothing. The MVP is a concierge "Registration & Recert Date Audit", sold on a one-page
landing page with a refundable deposit.**

### What the founder literally does, by hand

**Asset 1 — a one-page landing page** (`landing/`, static, no backend beyond Stripe's hosted
checkout; CLAUDE.md §5 allows Stripe pre-launch).
- Headline: **"Your SAM renewal date is probably not the date you think it is."**
- Subhead: *"The clock runs 365 days from your last update — so any mid-year change moves it.
  I'll build your renewal and recert date register by hand, in 25 minutes, on a call. 20 audits."*
- Body: P1, P4, P8, P9 stated plainly with their citations. The *Prak Industries* JV lesson. The
  honest note that GSA emails renewal reminders and here is what it does not email you (B1).
- One CTA: **"Book an audit — $25 deposit, fully refundable, credited against the app."**
  (Per CLAUDE.md §5: deposits are credited later with **App Store offer codes**, and the page must
  **not** promise an automatic unlock from the web payment. Exact page wording: *"Your $25 comes
  back to you either way: refunded on request, or sent to you as an App Store offer code when the
  app ships."*)
- A 3-question pre-call form, and **this form is the actual experiment**:
  1. *"Without looking it up: what date does your SAM registration expire?"* (free text)
  2. *"Have you updated anything in your SAM record since you last renewed?"* (yes / no / not sure)
  3. *"Which do you hold? 8(a) / HUBZone / WOSB-EDWOSB / VOSB-SDVOSB / none."*

**Asset 2 — the audit itself, delivered by hand. This is entirely deliverable without software.**
Here is exactly how, step by step:

1. **Before the call (5 min).** Read their form answers. Record their *stated* expiry date in a
   spreadsheet column. This number is the hypothesis under test and it must be captured **before**
   anything is checked.
2. **On the call, screenshare — the owner drives, in their own SAM.gov account.** This matters for
   three reasons: we never touch their credentials, we never read a federal system ourselves, and
   the owner sees the real number with their own eyes. The founder asks them to read aloud the
   expiration date and the last-updated date on their own entity record.
3. **Compute, out loud, on a shared sheet.** `expiry = last submitted/updated + 365 days`, and
   compare it to what they wrote in question 1. **The delta, in days, is the datum the whole
   venture turns on.** Record it.
4. **Walk the portfolio from their own paperwork** — they read the dates off their own letters:
   - 8(a): program anniversary from the SBA admission approval letter (term = 9 years from the
     approval letter date `[snippet-only]` <https://www.law.cornell.edu/cfr/text/13/124.2>);
     annual review due within 30 days of the anniversary per SBA's Certify guide `[snippet-only]`.
   - HUBZone: certification date → **triennial** anniversary; the submission window is the 90
     calendar days before it `[snippet-only]`.
   - WOSB/EDWOSB: initial certification date + 3 years `[snippet-only]`.
   - VOSB/SDVOSB: eligibility-period end date from their letter; SBA notices 90 days prior
     `[secondary]`.
   - Any JV: does the **JV entity itself** have its own registration? (*Prak Industries*)
   - Open CPARS evaluations: any notification in the last 14 days?
5. **Deliver, within 2 hours of the call, by email:** a one-page PDF — built by hand in Pages or a
   Google Doc from a fixed template — listing each item, its date, days remaining, the rule and
   its citation, and the footer *"Dates as you reported them on <date>. This is a summary of your
   own records, not a status read from any federal system, and it is not advice."* Plus six
   calendar invites (.ics) attached, at 90/60/30/14/7/1 days for the SAM item.
6. **Ask the money question, scripted and unleading:** *"If this one page arrived every year and
   the reminders just came to your phone, what would that be worth to you a year?"* Record the
   number before mentioning any price. Then: *"It'll be $149 a year. Do you want it?"* Record
   yes / no / "can you just do the renewal for me?" — **that third answer is the consultant-not-an-app
   signal and it is counted separately** (§12, K3).
7. **Refund the $25 on the call, unasked**, to every single participant. Converting a deposit is
   not what this experiment measures; the deposit exists to filter for seriousness, and refunding
   it unprompted buys honest answers.

**What the MVP costs:** $0 hosting (static page), ~$12 domain, ~$3 Stripe fees on 20 × $25, and
~$60 for a small boosted post if organic recruiting stalls. **Total ≈ $75–$200.** Time: ~18 hours
of founder time over 14 days.

**What it does *not* test** (so we do not fool ourselves): the app's retention, the notification
mechanics, App Store conversion, or whether a phone is the right container. It tests RA and K3,
and nothing else.

---

## 7. Experiments

Pass/fail thresholds and actions are **pre-committed here, before any data exists.** The action
column is a promise, not a suggestion.

| # | Experiment | What it tests | PASS | FAIL | $ | Days | Pre-committed action |
|---|---|---|---|---|:---:|:---:|---|
| **E1** | 15 concierge Date Audits (§6), recruited from Wifcon, LinkedIn GovCon groups and 10 APEX Accelerator counsellors | **RA**: do owners hold a wrong SAM date? Plus P10/P12 | **≥8 of 15** stated dates wrong by **>14 days**, AND **≥6 of 15** unaware the 365-day clock resets on update | ≤4 of 15 wrong by >14 days | $75 | 14 | **PASS → run E2 and E3.** **FAIL → KILL the niche on 2026-11-16** and move to the next of the top 4. **5–7 → run E1b**: 10 more audits recruited only from firms with a *non-SAM* program (HUBZone/WOSB triennial), re-testing on the portfolio rather than on SAM. |
| **E2** | Landing page + $25 refundable deposit, 300 targeted visitors | Will they put money down before a product exists? | **≥6% of visitors** start checkout AND **≥20 deposits** in 14 days | <2% start checkout | $60 ad + $3 fees | 14 | **PASS → build v1.** **FAIL → do not build**; re-run once with the Date Pack (P10) as the headline instead of the reset (P1) before killing. |
| **E3** | Price ladder on the same page: $99 / $149 / $249 per year, randomised | Is $149 the right anchor? | ≥1 of the three converts at ≥6%, and $149 or $249 wins | $99 wins **and** the others are <2% | $0 | 14 | **$149 or $249 wins → ship at that price.** **$99 wins decisively → ship at $99 and re-run the LTV:CAC arithmetic in §5; if CAC >$60 is needed, kill on unit economics.** |
| **E4** | Channel probe: 1 Wifcon post (after reading the rules and asking a moderator), 10 individual APEX emails, 3 LinkedIn GovCon groups, 2 newsletter sponsorship enquiries | Resolve the 3-vs-4 reachability dispute (§3) with real gatekeeper answers | ≥2 channels explicitly permit a post or quote a rate ≤$1,500 for ≥5,000 relevant subscribers | 0 channels permit a post, or every rate >$3,000 | $0 | 7 | **PASS → paid engine is viable; E2 traffic comes from there.** **FAIL → the growth hypothesis (§5) has no engine; downgrade reachability to 2 and kill**, because paid was the only engine available. |
| **E5** | App Store survey from a device with real access: "SAM renewal", "government contractor", "recertification", "expiration reminder", "GovCon compliance" | Is §10's "no incumbent" real or an artefact of a blocked proxy? | 0–2 results, none with >100 ratings | Any app with >1,000 ratings serving this job | $0 | 1 | **FAIL → stop immediately**; re-score competitive weakness and re-enter Phase 1. **This is the cheapest experiment in the table and it must be run first.** |
| **E6** | Read FAR 52.204-7 (Nov 2024), 89 FR 89472, 13 CFR 124.112 / 124.509 / 126.500 / 127.400, FAR 42.1503 in their **primary** text | §0b and every rule in §9 | Every interval in §9 confirmed, and the current 52.204-7 still requires registration **at award** | The Nov 2024 rule removed the award-moment requirement too, or ≥2 intervals in §9 are wrong | $0 | 2 | **PASS → §9 intervals promote from `[snippet-only]` to `[primary]`.** **FAIL on the award-moment point → the SAM leg of the pitch is dead**; the product must stand on the non-SAM portfolio alone, and §4e's anchor must be rewritten. **Run alongside E5, before E1.** |
| **E7** | Read 20 r/govcon and r/GovernmentContracting threads on SAM renewal from a machine with Reddit access | The §4a gap: does owner-voice pain exist at all? | ≥5 distinct owners describing a surprise date, a lapse, or a missed recert, in their own words | 0 such posts across 20 threads | $0 | 1 | **PASS → quote them (with links) and rebuild §4a on real voice.** **FAIL → treat §3 "massive pain" as 2/5 and require E1 to clear 10 of 15, not 8.** |

**Order: E5 and E6 first (day 1–2, free, either can stop the venture). Then E7. Then E1. Then
E2+E3+E4 together.**

---

## 8. v1 feature spec

### ⚠️ FIRST: the hard-gate question, answered head-on

**Question: is this product viable with no backend and no API access to SAM.gov?**

**Answer: the SAM-centric product is a hard-gate failure. The portfolio product is not. Build only
the second, or do not build.**

The honest reasoning, which I am not going to design around:

1. **The one number the customer cares most about is one we cannot know, by construction.** SAM
   expiry = last submission/update + 365 days `[secondary]`. The reset is triggered by an event
   **inside a federal system, with no notification to us and often no conscious awareness by the
   user** — a changed NAICS code, an updated POC, a corrected bank detail. A manual-entry app's
   number therefore decays silently. **A compliance reminder that is silently wrong is worse than
   no reminder**, because it manufactures confidence. That is a product-integrity problem *and* a
   liability problem under CLAUDE.md §4.
2. **The free incumbent has better data than we do, and this is the fact scout-4 under-weighted.**
   "Entity administrators in SAM.gov should receive alerts of renewal requirements at 60 days, 30
   days, and 15 days prior to expiration" `[snippet-only]`
   — <https://gao.az.gov/news/samgov-entity-validation-reminder>. GSA computes those alerts from
   the *actual* record, so **GSA's free email is strictly more accurate than our paid app on the
   SAM item.** Scout-4's mitigation — the notice goes to a departed account manager's inbox
   `[vendor]` — is real but it is a *delivery* gap, not an *accuracy* gap, and it is the thinner
   of the two claims. **On SAM alone we are selling worse data against free better data.** This is
   scout-3's PARK reasoning and on this specific point **scout-3 was right and scout-4 was wrong.**
3. **Where the gate is *not* failed.** GSA and SBA do **not** send: the HUBZone triennial window
   (90 days before the triennial anniversary — nobody has a three-year habit); the 8(a) annual
   review anniversary (that arrives as a written request from a Business Opportunity Specialist, a
   human, on a human's schedule `[snippet-only]`); the CPARS 14-day comment window (which starts on
   a system notification and is over in two weeks `[snippet-only]`); the *existence* check on a JV
   entity's own registration (*Prak Industries* — this is not a date at all and no system watches
   it); or a consolidated one-page Date Pack. **None of these require reading any federal system.
   Every one is knowable from a letter or an email the owner already holds.**
4. **Therefore the only buildable, honest v1 is a *register of the owner's own dates across
   programs*, in which SAM is one row among seven — not a SAM tracker.** Positioned as a SAM
   tracker it fails the gate; positioned as the portfolio it passes.
5. **On the API, explicitly:** SAM.gov is understood to expose entity data via `api.sam.gov`, which
   a device could in principle call directly with a user-supplied key and no backend of ours.
   **I did not verify its availability, its public-vs-system-account tiers, or its terms of use
   this session, and the brief excludes it from v1.** It is logged as the top v1.1 candidate and as
   §13 item 3 — not designed around, not assumed, not priced in.
6. **What this costs us commercially:** the single most magnetic hook (P1, the reset) can only be
   delivered as a *computation on a date the user tells us*, never as a live status. Every string
   must carry "from your entered submission date." Some share of prospects will hear "it doesn't
   actually check" and leave. **That drop-off is a measured output of E2, not an assumption.** If
   E2 fails and the post-mortem interviews say "I thought it checked for me," the honest reading is
   that the gate failed after all.

**Gate verdict: CONDITIONAL PASS.** Build the portfolio register. If the founder's instinct during
the build is to make the SAM number the hero, that is the gate failing in slow motion and the
build should stop.

### The aha moment — named and timed

**"The Reset Reveal." Target: ≤45 seconds, 4 taps, no account, no payment, no permissions.**

The user enters one date — *the last time you submitted or changed anything in your SAM record* —
and the app shows an expiry **different from the anniversary in their head**, with days remaining
and a shaded start-window band. The product's entire claim is demonstrated, on their own data,
before they have agreed to anything. (This also satisfies rubric tie-breaker (a): deliverable free
in a browser in under 60 seconds — the same three screens become the landing page's interactive
widget for E2.)

**Instrumented pass bar:** median time-to-reveal ≤45s; ≥60% of first-run users reach it; ≥35% of
those who reach it report a date delta >14 days (an in-app one-tap "is that what you expected?"
yes/no, stored locally).

### Onboarding, screen by screen

| # | Screen | Content | Note |
|---|---|---|---|
| 1 | **What this is** | "Recert Register keeps your own renewal and recertification dates in one place and counts the days. **It does not connect to SAM.gov, SBA or any federal system, it will never email you, and it will never ask you to pay anyone but Apple.**" One button: *Start*. | The disclosure is also the anti-phishing trust pitch (P6). |
| 2 | **One date** | "When did you last submit or change anything in your SAM record?" Date picker, defaults to today, with a hint: "Any update restarts the 365-day clock — even a changed point of contact." | 1 tap + 1 scroll. |
| 3 | **🎯 THE RESET REVEAL** | Big: **"Your 365-day clock runs out on <date> — N days."** Below: the start-window band (45–90 days) with both sources named. Below that, small: *"Computed from the date you entered. Confirm it on SAM.gov."* One-tap: *"That's not what I expected"* / *"That matches."* | **Aha. No paywall yet.** |
| 4 | **Which programs?** | Multi-select: 8(a) · HUBZone · WOSB/EDWOSB · VOSB/SDVOSB · None of these. Plus a toggle: "I'm in a joint venture." | |
| 5 | **Their dates** | One date picker per selected program, each labelled with **where to find it** ("the date on your SBA certification letter") and the interval it drives ("HUBZone: 3 years, window opens 90 days before"). Skippable. | |
| 6 | **Reminders** | The ladder shown as a list, *then* the iOS permission prompt. "Turn these on?" | Permission asked after the value is visible, never before. |
| 7 | **The register** | Dashboard. Headline: **"Next date: <item> — N days."** State line: **"All items current?" → "2 items need attention."** Never "compliant", never "eligible". | |
| 8 | **Paywall** | **After screen 7 renders.** Free forever: 1 entity, the SAM item, reminders at 30/7/1. Paid ($149/yr or $19/mo, 14-day trial): all programs, full 90/60/30/14/7/1 ladder, triennial ladders, CPARS timers, unlimited JV entities, Date Pack PDF, .ics export, bonuses B1–B5. The Reminder Promise (§4f) in full. | Paywall sits **after** the aha and after the user has seen their own register populated. |

### The 7 features

| # | Feature | Scope |
|---|---|---|
| **F1** | **Entity & obligation register** (SwiftData) | `Entity{name, uei?, isJointVenture, notes}` → `Obligation{type, basisDate, intervalDays, windowOpensDaysBefore, ruleID, lastConfirmedAt}`. Types: SAM registration, annual reps & certs, 8(a) annual review, HUBZone recert, WOSB/EDWOSB recert, VOSB/SDVOSB eligibility end, CPARS comment window, custom. UEI is a free-text label only — never validated, never looked up. |
| **F2** | **Reset-aware clock + reset history** | One tap: *"I updated SAM on <date>"* → recompute `basisDate + 365`, append an immutable reset-history row the user can see. The visible history is what makes the reset rule *felt* rather than claimed. |
| **F3** | **Escalation ladder (local notifications)** | Annual items: 90/60/30/14/7/1. Triennial items: 180/120/90/60/30. CPARS: 7/3/1 inside a 14-day window. Per-item toggles. All local; no server, no push certificates. |
| **F4** | **CPARS comment-window timer** | Enter the notification date → 14-day countdown. Copy: "14-day comment window from the date you were notified (FAR 42.1503)." Never "respond by X or lose your rating." |
| **F5** | **Quarterly "confirm from source" check-in** | Every 90 days: *"Open SAM.gov and check your expiration date — has it moved?"* with a deep link to sam.gov and a one-tap *confirmed / it moved*. Items not confirmed in 180 days are visibly marked **"not confirmed since <date>"** on the dashboard. **This is the staleness mitigation from §8.1 and it is a required feature, not a nice-to-have.** |
| **F6** | **Date Pack export** | On-device one-page PDF (every item, date, days remaining, rule, citation, verification level, and the "entered by the user; not a status read from any federal system; not advice" footer) + full .ics export (B5). |
| **F7** | **Rule sources screen** | Every rule the engine uses, with its citation, its URL and its **verification level shown to the user**. Items marked `[snippet-only]` say so, in plain words: "we have not yet confirmed this against the regulation itself." |

Plus the static **JV Registration Checklist** (B4) — a bundled markdown asset, not a feature.

**Buildable in a week?** Yes. Tens of records, one deterministic date engine, no network calls at
all, no accounts, one StoreKit 2 product pair. Per CLAUDE.md §6 the engine ships as a
dependency-free ES module plus a faithful Swift port, both loading `engine/test-vectors.json`.
Minimum vectors: 365-day reset across a leap year; reset the day before expiry; triennial
anniversary with a 90-day window; a CPARS window crossing a month boundary; DST transitions on
notification scheduling; an obligation whose window has already closed.

### Deferred to v1.1
`api.sam.gov` public entity lookup, **conditional on verifying its terms and tiers** (§13 #3) —
top of the list, and the only item that would convert the SAM leg from a computation into a fact ·
multi-entity portfolio view for consultants (needs a decision on the single-user constraint) ·
document capture for certification letters · widgets and Lock Screen complications · Apple Watch ·
iPad · Family Sharing · size-recertification-on-contract-anniversary (unverified, §9) · contract
option-exercise and option-year dates · past-performance questionnaire tracking.

---

## 9. Rules the engine must encode

**Reading rule:** nothing here is `[primary]`. E6 (§7) is the task that fixes that, and no rule
may ship in the engine with a comment that overstates its verification level (CLAUDE.md §6).

| ID | Rule | Source | URL | Verification |
|---|---|---|---|---|
| R1 | Offeror must be registered in SAM at the time of offer submission **and at the time of award**; continuous registration between those points is **no longer required** (Nov 2024 revision, adopted as final without change Aug 2025). **This supersedes the rule the scouts built the case on.** | FAR 52.204-7 (Nov 2024); 89 FR 89472; FAR Case 2024-002; FAC 2025-05 | <https://www.pilieromazza.com/sam-registration-rules-may-ease-lapses-ok/> · <https://www.mofo.com/resources/insights/250818-sam-registration-rule-finalized> · <https://www.acquisition.gov/far-smart-matrix> | `[snippet-only]` — **clause text not read. Highest-priority verification in this document.** |
| R2 | Registration is valid **365 days** from the date submitted for processing / activation. Not a calendar anniversary. | SAM.gov practice as described by professional and vendor sources | <https://samsearch.co/glossary/sam-gov-registration-renewal> · <https://rsmus.com/insights/industries/government-contracting/the-critical-role-of-sam-registration-for-federal-contractors.html> | `[vendor]` + `[secondary]` — **no official GSA/FSD page obtained in either phase.** |
| R3 | **Any update to the SAM record during the year resets the 365-day clock.** The core computation. | Crowell client alert | <https://crowell.com/en/insights/client-alerts/check-your-sam-registration-early-and-often> | `[secondary]` — **single source. Must be confirmed against SAM.gov/FSD official guidance before it becomes the product's hero claim.** |
| R4 | **No grace period.** Only a government-validated "Active" status counts; a submitted renewal does not. | samsearch; USFCR | <https://samsearch.co/glossary/sam-gov-registration-renewal> · <https://blogs.usfcr.com/when-a-sam-registration-lapse-costs-you-the-award> | `[vendor]` |
| R5 | Recommended lead time to begin renewal. **Sources conflict and the engine must show the range, not pick one:** 45 days (FSD, per AZ GAO) · "2–3 months" (Nebraska BDC) · "at least two months" (RSM) · 60–90 days (USFCR) · 30–60 days (USDA deck) | multiple | <https://gao.az.gov/news/samgov-entity-validation-reminder> · <https://unomaha.edu/nebraska-business-development-center/news/2022/08/sam-renewal-faq.php> · RSM (above) | `[snippet-only]` / `[secondary]` / `[vendor]` — **conflicting. Display as a band with sources; never average.** |
| R6 | GSA alerts entity administrators at **60 / 30 / 15 days** before expiration. **Competitive fact — our ladder must add rungs GSA does not have (90, 14, 7, 1), not duplicate GSA's.** | AZ GAO notice | <https://gao.az.gov/news/samgov-entity-validation-reminder> | `[snippet-only]` |
| R7 | A **joint venture is a separately registrable entity**; a JV is ineligible if the JV itself is unregistered, even when both members are. **Unaffected by the Nov 2024 change.** | GAO, *Prak Industries LLC*, B-422517 (Jul 2024) | <https://wifcon.com/discussion/index.php?/blogs/entry/5958-gao-reminder-joint-ventures-must-register-on-sam/> | `[secondary]` |
| R8 | Representations and certifications applicable to a solicitation are those **in SAM**; the CO checks them there. **The "annual" cadence for updating them is NOT in the clause text I could reach** — one secondary source describes a 12-month clock and did not cite a regulation. | FAR 52.204-8 (Mar 2026, FAC 2026-01) | <https://www.acquisition.gov/index%2Ephp/far/52.204-8> · <https://casrai.org/guides/sam-gov-representations-and-certifications> | `[snippet-only]`; **the annual interval is UNVERIFIED — do not ship a 365-day reps-and-certs reminder as a rule. Ship it as a user-set custom item until E6 resolves it.** |
| R9 | **8(a) program term = 9 years** from the date of SBA's approval letter. | 13 CFR 124.2 | <https://www.law.cornell.edu/cfr/text/13/124.2> | `[snippet-only]` |
| R10 | **8(a) annual review** due **within 30 days of the program anniversary**, except year 9 (SBA Certify guide). **Conflicts with 13 CFR 124.509(c)(1) as quoted, which measures 30 days from the end of the program year, and with secondary sources claiming 90/120 days from fiscal year end.** | SBA Certify quick-start guide; 13 CFR 124.509(c)(1) as quoted in FR 2023-09590 | <https://sbaone.atlassian.net/wiki/download/attachments/168886357/QuickStartGuide_External_8a_AnnualReview_Certify_v2.pdf?api=v2> · <https://public-inspection.federalregister.gov/2023-09590.pdf> | `[snippet-only]` — **CONFLICTING MEASUREMENT DATE (anniversary vs. program-year end). Must not ship until resolved. Ship as a user-set date with a note.** |
| R11 | **HUBZone: recertify every THREE years**, submitted **in the 90 calendar days before the triennial anniversary** of the certification date. Reinstatement if recertified within 30 days of the end of the eligibility period. **Annual recertification was ELIMINATED by the Dec 17 2024 final rule**; a 2025 correcting amendment replaced leftover "annual" references with "HUBZone certification anniversary date." | 13 CFR 126.500 | <https://www.law.cornell.edu/cfr/text/13/126.500> · <https://public-inspection.federalregister.gov/2025-10156.pdf> | `[snippet-only]` — **but this directly resolves one of scout-3's and scout-4's flagged unknowns, and it resolves it the opposite way from the pre-2025 law-firm commentary both scouts would have found. Any copy saying "annual HUBZone recertification" is now wrong.** |
| R12 | **WOSB/EDWOSB: program examination (recertification) every THREE years**, from initial certification or last examination, whichever is later. Recertify or report a third-party examination **within 90 days of the end of the eligibility period**; SBA emails notices from the **120-day** mark; reinstatement within 30 days of lapse. **The annual attestation was REPEALED effective 30 May 2023.** | 13 CFR 127.400 | <https://www.law.cornell.edu/cfr/text/13/127.400> · <https://www.ecfr.gov/current/title-13/chapter-I/part-127/subpart-D/section-127.400> | `[snippet-only]` — **also resolves a flagged unknown, also opposite to older commentary.** |
| R13 | **VOSB/SDVOSB**: recertification notices go to the **SAM.gov business contact 90 days prior** to the eligibility-period end; eligibility-affecting changes must be reported to SBA **within 30 days**. | SBA knowledge base | <https://sbaone.atlassian.net/wiki/spaces/UCPUKB/pages/3823403009> | `[secondary]` (carried from scout-3) |
| R14 | **CPARS contractor comment window = 14 days**, starting when CPARS notifies the contractor; after 14 days the evaluation is available to source-selection officials with or without comment. CPARS *guidance* has been described as allowing comments up to 60 days for inclusion — **guidance, not FAR text.** | FAR 42.1503; CPARS Guidance §4.4 | <https://www.arnoldporter.com/en/perspectives/advisories/2014/06/new-rule-significantly-decreases-contractor-comm__> · <https://samsearch.co/far-navigator/42-1503-procedures> | `[snippet-only]` — **the 14 days is well corroborated; the 60-day figure is from a 2017 article and must not ship.** |
| R15 | **Size recertification may be required on specific contract anniversaries**, separate from SAM renewal. | opengrants (self-flagged as unverified) | <https://opengrants.io/sam-gov-registration-renewal-verify-what-it-saved/> | `[snippet-only]`, **source flags its own uncertainty. DO NOT SHIP. Deferred to v1.1 pending primary verification.** |
| R16 | Reactivating an expired registration "can take 7-10 business days or longer"; the system "can take days (or even weeks) to display an active status." Used only for the lead-time band, never as a rule. | sledai; Wiley | <https://www.sledai.com/blog/how-to-renew-sam-registration/> · <https://wiley.law/alert-SAM-Registered-I-Am-Part-2-Contractors-Beware-of-Lapses-in-SAM-Registration> | `[vendor]` / `[secondary]` |

### Rules a domain expert must confirm before the engine ships

Hand this list to a GovCon attorney or an APEX Accelerator counsellor. **Every one is a blocker.**

1. **R1** — the operative text of FAR 52.204-7 (Nov 2024). Does it still require registration *at
   award*? If not, the SAM leg of the pitch is gone. *(Highest priority in the document.)*
2. **R3** — is "any update resets the 365-day clock" true as stated, and which field changes
   trigger it? **This is the product's hero claim and it rests on one secondary source.**
3. **R2** — official GSA/FSD statement of the 365-day period and what date it runs from
   (submission vs. activation vs. last update). The three are not the same date and we compute
   from one of them.
4. **R10** — 8(a) annual review: 30 days from the **anniversary**, or 30 days from **program-year
   end**? The sources disagree and they produce different dates.
5. **R8** — is there an annual requirement to update representations and certifications, and where
   is it written?
6. **R11 / R12** — confirm the triennial cycles and the 90-day windows against current eCFR, and
   confirm the transition treatment for firms mid-cycle when the rules changed (2023 for WOSB,
   Dec 2024 for HUBZone).
7. **R14** — is the FAR 42.1503 window 14 calendar days, and is the trigger the CPARS
   notification? Is the 60-day guidance figure still current?
8. **R15** — size recertification on contract anniversaries: real, and on what cadence?
9. **R6** — does GSA in fact alert at 60/30/15, and to which address(es)? **This defines our
   differentiation and we know it from one state-agency page.**
10. **R13** — confirm the VOSB/SDVOSB cadence post-VetCert transition.
11. Whether an inactive registration halts **payments** on existing contracts, or only new awards.
    Both are claimed; only vendor sources say payments.

---

## 10. Competitors

| Name | Price | Platform | Strength | Specific weakness | Source |
|---|---|---|---|---|---|
| **SAM.gov / GSA renewal alerts** | Free | Email | **Computed from the real record, so on the SAM date it is more accurate than anything we can build.** Alerts at 60/30/15 days. | Goes to the registered **entity administrator** address — the "most common cause of a lapse [is] the account manager leaving the company" `[vendor]`. Covers **only** the SAM item: nothing for HUBZone, 8(a), WOSB, CPARS, or a JV's own registration. And it is indistinguishable from the scam emails this market is warned about. | <https://gao.az.gov/news/samgov-entity-validation-reminder> `[snippet-only]` · <https://blogs.usfcr.com/when-a-sam-registration-lapse-costs-you-the-award> `[vendor]` |
| **SBA program notices (WOSB / VOSB)** | Free | Email | Long runway: WOSB notices from **120 days**, VOSB at **90 days**. | Also sent to the **SAM.gov business contact** (VOSB) — same stale-inbox failure. 8(a) arrives as a **human BOS's written request**, on the BOS's schedule, with a typical 30-day turnaround. HUBZone: **no notice confirmed by any source I reached.** | <https://www.law.cornell.edu/cfr/text/13/127.400> · <https://sbaone.atlassian.net/wiki/spaces/UCPUKB/pages/3823403009> |
| **Paid renewal services** — Sam Renewal Support, Federal Contractor Registry, Fed Filing, USA Filing, USFCR | **$399/yr** (1yr), $599–$699 (2yr), $799–$899 (3yr), $597–$998 new registration | Web / phone | They do the work, not just the reminding. **Proof that this market pays four figures over three years for de-risking free paperwork.** | Characterised as **government imposters** by consumer-protection sources — they send official-looking emails linking to lookalike sites. Several are the *cause* of the distrust we benefit from. They do not track 8(a)/HUBZone/WOSB/CPARS dates. | <https://truthinadvertising.org/articles/sam-renewal-support/> · <https://truthinadvertising.org/articles/federal-contractor-registry/> · <https://truthinadvertising.org/articles/federal-filing-government-imposter-scam/> `[snippet-only]` |
| **An APEX Accelerator counsellor** | **Free** | In person / phone | Free one-on-one help; some centres give "free, hands-on assistance with SAM registration." A trusted human beats an app. **Our most dangerous competitor, precisely because it is free, human and government-funded.** | 250–300 offices for the whole country (counts conflict: 250+/300+/95); appointment-based; does not send you a push notification 60 days out; cannot hold your date portfolio. | <https://www.napex.us/> · <https://www.sbir.gov/tutorials/state-service-providers/tutorial-2> · <https://unomaha.edu/nebraska-business-development-center/news/2022/08/sam-renewal-faq.php> `[snippet-only]` |
| **A GovCon consultant / fractional contracts manager** | Not obtained | Human | Owns the whole problem, not just the dates. Can also write the proposal. | Price unknown — **a material gap**, since this is the substitute our buyer may actually prefer (§12 K3). | **No source. Unverified.** |
| **ExpiresOS** | Not obtained | Web | A page literally titled "Built for government contractors" — validates that someone else sees this. | Hosted on a free Render subdomain → very early solo project, not a funded incumbent. No pricing, no evidence of users. | <https://expiresos-web.onrender.com/government-contractors> `[secondary, scout-4]` |
| **SAMextension** | Not obtained | Chrome extension | Guides you through registration/renewal at the point of work. | Browser-only; not a tracker; nothing for the non-SAM portfolio. | <https://chromewebstore.google.com/detail/ehpfhmahplhcbhdlanidgilemdccbhgn> `[snippet-only]` |
| **Unanet / Deltek** | Not obtained | Web/desktop | The real GovCon software incumbents. | **Financial/ERP, not a date calendar**, and priced and sold to firms far above our 1–50 person ICP. | `[secondary, scout-4]` |
| **Apple Calendar / a spreadsheet** | Free | Everything | Already installed, already understood, zero friction. | **Cannot encode the 365-day reset.** A calendar entry made last year is silently wrong the moment the record is touched — which is exactly the gap the Reset Reveal dramatises. | Mechanism from R3 `[secondary]` |

### No incumbent app: opportunity, or proof the market doesn't buy software?

**The case that it is an opportunity.** Every structural precondition is favourable and unusually
so: the ruleset is federal, uniform, free and stable (CLAUDE.md §3 satisfied cleanly — scout-4
called it "the cleanest possible position for our no-data-licensing constraint"); the dataset is
tens of dates, not thousands of records; there are no counterparties to chase, which is the test
that killed three other niches in scout-4's cluster; the audience has verified four-figure
willingness to pay for de-risking this exact paperwork; and somebody else has independently
started building it (ExpiresOS) which is weak demand validation with no competitive threat. The
absence is also plausibly explained: GovCon software money chases proposal and accounting
workflows where contract values justify five-figure ACVs, and a $149/yr single-user date tracker
is too small for a funded team to bother with and too niche for a generalist reminder app to
target. That is a classic studio-sized gap.

**The case that it is a warning.** Three uncomfortable facts. (1) **The need is already met for
the item that matters most** — GSA emails at 60/30/15 from the authoritative record, free, and
SBA emails WOSB at 120 days. (2) **This market's revealed preference for this exact pain is
done-for-you service at $399, not software at $149** — when they open their wallet for the SAM
renewal they buy *labour*, including from operators consumer-protection groups call imposters.
That is a strong signal about the shape of demand, not just its existence. (3) **Nobody has even
built the free version.** No indie has shipped a $5 SAM reminder app, no APEX centre has shipped
a date-tracking spreadsheet template with any visibility, and in two full research phases **we
could not find one small-business owner complaining about this in their own words.** Markets that
want software usually leave traces of wanting it.

**Where I land.** It is a real gap, **but it is a gap about the portfolio, not about SAM.** The
no-incumbent fact is only weak evidence either way — neither scout could reach the App Store, so
§10's emptiness is partly an artefact of a blocked proxy, which is exactly why E5 runs on day 1 at
zero cost. The decisive asymmetry is this: the SAM-reminder product is competing with a free,
more-accurate incumbent and losing on the merits, while the **portfolio** product — HUBZone's
three-year window, the 8(a) anniversary, the 14-day CPARS clock, the JV's own registration, and one
page you can hand to a prime — has **no incumbent of any kind, free or paid**, and is not reachable
by GSA's or SBA's notice systems even in principle. So: **opportunity, conditionally — in the
portfolio framing only, and only if E1 shows owners are actually holding wrong dates.** If E1
fails, the honest conclusion is the warning reading: this market buys consultants, not software.

---

## 11. Channels to the first 100 paying users

**Every self-promotion rule below is `UNVERIFIED` unless marked otherwise. I searched specifically
for Wifcon's and the GovCon LinkedIn groups' posting rules and found nothing community-specific**
`[snippet-only]`. **Reading each community's actual rules is step zero of E4 and the founder must
do it before posting anywhere.**

| # | Channel | URL | Self-promotion rule | Gatekeeper | Cost |
|:--:|---|---|---|---|---|
| **1** | **APEX Accelerator counsellors** (individual outreach, one email each) | <https://www.napex.us/> · <https://apex.tennessee.edu/counseling> | N/A — this is 1:1 email, not posting. Publicly funded counsellors, so the pitch must be *"a free tool to hand your clients"*, never a referral fee. | The individual counsellor; centre directors for anything broader. | **$0 — time only** |
| **2** | **Wifcon discussion forums** | <https://wifcon.com/discussion/> | **UNVERIFIED.** 27-year-old practitioner forum; assume strict and assume promotion is unwelcome. Approach: answer SAM-renewal questions with the computation and the citation, no link, for weeks first. Ask a moderator in writing before ever posting a link. | Forum moderators / Bob Antonio. | **$0 — time only** |
| **3** | **r/govcon, r/GovernmentContracting (~44k `[stale]`), r/defensecontracting (~11k `[stale]`)** | <https://gummysearch.com/r/GovernmentContracting> · <https://gummysearch.com/r/defensecontracting> | **UNVERIFIED and unverifiable here — reddit is proxy-blocked for both scouts.** Assume a self-promotion ban and a karma/age gate. Counts are dead snapshots (GummySearch shut down 2025-11-30). | Subreddit mods. | **$0 — time only** |
| **4** | **SmallGovCon** (Koprince Law) — the dominant free newsletter in the niche | <https://smallgovcon.com/> | **UNVERIFIED.** A law firm's content property; it likely does not sell ads. Realistic play: be a *source* for a post on the HUBZone/WOSB triennial changes (R11/R12), not an advertiser. | The firm's editors. | **$0 — time only** |
| **5** | **Law-firm alert lists** — Wiley, Crowell, Mayer Brown, PilieroMazza, Schwabe | <https://smallgovcon.com/> · <https://wiley.law/> · <https://www.pilieromazza.com/> · <https://www.schwabe.com/> | Not ad channels. Use as **intelligence** (they define what this audience worries about) and as expert-review contacts for §9. | Firm marketing. | $0 |
| **6** | **GovCon LinkedIn groups** | <https://www.linkedin.com/help/linkedin/answer/a569220> (platform guidance) | **UNVERIFIED per group.** LinkedIn's own words: "the specific details of what's considered self-promotion depends on the group… check the group rules first," and if there are none, ask the owner. Post more than a link. | Group owners/managers. | $0 |
| **7** | **Set-Aside Alert, GovConWire** newsletters | — | **No rate card obtained in either phase.** Paid placement is the §5 growth engine and **its price is unknown.** E4 gets quotes. | Publishers. | Unknown — **gap** |
| **8** | **SBDC / university business-development centres** already publishing SAM renewal FAQs | <https://unomaha.edu/nebraska-business-development-center/news/2022/08/sam-renewal-faq.php> | Same posture as APEX: free tool for their clients. They are already writing this content, which means they already field the question. | Centre director. | **$0 — time only** |
| **9** | **NDIA / AFCEA chapters; SBA district matchmaking events; GovCon Summit** | — | **No URLs, no member counts, no sponsor prices obtained in either phase** (scout-3: "No counts obtained"; scout-4: "not verified"). | Chapter leadership; event organisers. | Unknown — **gap** |
| **10** | **PSATS and similar association renewal reminders** (they already publish "your SAM renewal is due" notices to members) | <https://www.psats.org/?p=11820> · <https://www.psats.org/?p=8426> | **UNVERIFIED.** Note these serve *townships and public entities*, not our ICP — but they prove associations do publish renewal reminders to members, so the pattern transfers to contractor associations. | Association comms. | $0 |

**Approach order (and why):**
1. **#1 APEX counsellors** and **#8 SBDCs** — free, 1:1, no posting rules to breach, and they are
   the recruiting channel for E1's 15 audits. **Start here on day 1.**
2. **#2 Wifcon** — read the rules, then contribute answers for 2–3 weeks before any link. Highest
   credibility in the niche and the easiest to burn permanently.
3. **#3 Reddit** — only after someone with real access reads the rules (E7 does this anyway).
4. **#6 LinkedIn groups** — ask each owner first, in writing.
5. **#4 SmallGovCon** — pitch as a source on R11/R12, not as an advertiser. The HUBZone triennial
   change is genuinely newsworthy and most commentary online is still pre-2025 and wrong.
6. **#7 newsletter sponsorship** — only once E3 confirms the price and §5's LTV:CAC maths holds.
7. **#9 conferences** — last. Highest cost, slowest, worst-evidenced.

**The zero-cost channel, named explicitly as required: #1 APEX Accelerators (plus #8 SBDCs) —
free, named, nationally distributed, and already fielding this exact question from this exact
buyer.**

---

## 12. Honest downsides — the three most likely killers

### K1. The rule we are selling fear about was rewritten in our customers' favour
The entire pain case rests on *TLS Joint Venture* and *Myriddian*, decided under a FAR 52.204-7
that was replaced in Nov 2024 and finalised Aug 2025 (§0b). A surety association published the
headline **"SAM Lapse Will No Longer Cost You a Contract."** If this audience has internalised
that, our hook is a story about the past.
**Leading indicator:** in E1's 15 interviews, **≥6 of 15 say some version of "they fixed that"
or do not recognise lapse risk as current.** Also: if E6 finds the current clause no longer bites
at the award moment either, K1 has already happened.
**Why it may not kill:** you must still be active at award, you cannot predict the award date, and
an inactive registration still freezes payments. The *non-SAM* portfolio is untouched.

### K2. Free official notices are better data than ours, and we are the worse product on the headline item
GSA alerts at 60/30/15 **computed from the real record**; SBA emails WOSB from 120 days. Our number
is typed in by hand and decays the moment the user touches their SAM record without telling us
(§8.1). We are selling worse data against free better data on the one item with emotional pull.
**Leading indicator:** on E2's landing page, the objection poll ("what stops you?") returns
**>40% "SAM.gov already emails me"**; or E1 finds **<1 in 5** owners holding a date wrong by
>14 days; or post-E2 interviews reveal people assumed the app checks SAM for them.
**Why it may not kill:** the delivery gap (stale inbox) is documented, the portfolio items have no
notice at all, and HUBZone's triennial window has no confirmed notice from anyone.

### K3. This buyer expects a consultant, not an app
**The best-evidenced of the three, and the one I would bet on.** The revealed preference of this
market, when it opens its wallet for this exact pain, is **$399/year for someone to do the
renewal** — from operators that consumer-protection groups call government imposters. They are
buying *labour and reassurance*, not arithmetic. The free alternative they are pointed to is also a
human: an APEX counsellor. Two full research phases produced **zero** owner-voice demand for
software and plenty of evidence of demand for service. A $149/yr app that still leaves them to do
the renewal themselves may simply be the wrong shape of thing.
**Leading indicator:** in E1, **>50% of audit participants ask "can you just do the renewal for
me?" or "can we get on a call every year?"** rather than "is there an app?"; and/or trial-to-paid
after launch is **<8%** while concierge-audit close rate is high. A high concierge close rate
paired with a low app conversion is the K3 signature, and it is also an *opportunity signal for a
different business* — a $399 annual done-with-you service — which **is not the business this studio
is set up to run** (CLAUDE.md §3: one paid iOS app).
**Why it may not kill:** the portfolio and the Date Pack are a different job from the renewal
itself, and no consultant is sending a 14-day CPARS countdown to anyone's phone.

**Honourable mentions (watch, do not plan around):** TAM is entirely unknown — neither scout
obtained a count of registered entities, so the absolute size of this market is unmeasured. The
federal contracting budget environment could contract. And the engine's non-SAM intervals changed
*twice in three years* (WOSB 2023, HUBZone Dec 2024), which makes "the rules change slowly"
(rubric tie-breaker c) **false for this niche** — a maintenance cost the studio should price in.

---

## 13. What is still unverified, ranked

Ranked by how much each would change the decision.

1. **The operative text of FAR 52.204-7 (Nov 2024) and 89 FR 89472.** Does registration still bite
   *at award*? Everything above `[snippet-only]`; `acquisition.gov` DNS-blocked. **If this goes the
   wrong way the SAM leg of the product is dead and §4e's anchor must be rebuilt.** *(E6)*
2. **"Any update resets the 365-day clock" (R3) — one secondary source, and it is our hero claim.**
   Also: which field changes trigger it, and whether the clock runs from submission, activation or
   last update (three different dates). No official GSA/FSD page obtained in either phase. *(E6)*
3. **Whether owners actually hold a wrong date (RA).** The riskiest assumption in the venture and
   there is **not one data point** on it in either scout file. *(E1)*
4. **Owner-voice evidence that this pain exists at all.** Zero verbatim complaints from
   small-business owners across two phases and a targeted retry. Reddit proxy-blocked throughout.
   *(E7)*
5. **App Store reality.** Both scouts were 403-blocked from `apps.apple.com`; my search for an iOS
   SAM tracker returned nothing, which is not the same as there being nothing. **Every
   competitive-weakness score in §10 is provisional.** *(E5)*
6. **8(a) annual review measurement date (R10)** — 30 days from the anniversary or 30 days from
   program-year end? Sources conflict and they produce different dates. Cannot ship either.
7. **Whether representations and certifications carry an annual update requirement (R8)**, and
   where it is written. Currently a secondary source with no regulation cited.
8. **HUBZone (R11) and WOSB (R12) triennial cycles against current eCFR**, plus mid-cycle
   transition treatment. *Scout-3 and scout-4 both flagged these as unverified and this session
   resolved them in the opposite direction from the older commentary — triennial, not annual. That
   makes confirming them urgent, because any "annual recertification" copy is now wrong.*
9. **TAM: the count of active SAM.gov entity registrations.** Unobtained in both phases and by me.
   `sam.gov` unreachable. The absolute size of this market is unknown.
10. **Median small-business federal award value** — needed to replace the $250k–$5M `(estimate)` in
    §4e with a real number.
11. **`api.sam.gov`**: does a public entity-lookup tier exist, what are its terms, and can a device
    call it with a user-supplied key without a backend? This is the single change that would turn
    the SAM leg from a computation into a fact. Excluded from v1 by the brief; top of v1.1.
12. **Self-promotion rules for every channel in §11** — not one is verified. A named community you
    may not post in is not a channel. *(E4)*
13. **Newsletter sponsorship rates** (Set-Aside Alert, GovConWire) — the paid engine in §5 has no
    known price. *(E4)*
14. **GSA's alert cadence (R6)** — 60/30/15, to which addresses? Known from one state-agency page,
    and it defines our differentiation.
15. **Whether an inactive registration halts payments on existing contracts** or only new awards.
    Only vendor sources claim payments.
16. **GovCon consultant / fractional contracts-manager pricing** — the K3 substitute, price unknown.
17. **Size recertification on contract anniversaries (R15)** — source flags its own uncertainty.
18. **CPARS 60-day guidance window** — from a 2017 article; currency unknown.
19. **APEX Accelerator office count** — 250+ vs 300+ vs 95 across three sources.
20. **Subreddit member counts** — all `[stale]` snapshots from a service that shut down 2025-11-30.

---

## 14. Re-scored against the locked rubric, and verdict

| Criterion | Weight | Scout-4 | Scout-3 | **This deep dive** | Why changed |
|---|:--:|:--:|:--:|:--:|---|
| Pain $ | 25% | 5 | 5 | **4** | Mechanism intact; sharpest case law superseded (§0b); no owner-voice evidence of lived pain. |
| Audience wealth / purchasing power | 15% | 5 | 3 | **4** | Verified $399/yr paid for the free renewal task. But TAM and revenue still unobtained. |
| Competitive weakness | 20% | 4 | 4 | **3** | GSA 60/30/15 and SBA 120/90 are stronger free incumbents than scout-4 credited, and GSA's data is better than ours. No app found — but that is partly a blocked proxy (E5). |
| v1 buildability | 15% | 4 | 3 | **4** | Clean: no backend, no network, tens of records. Offset slightly: intervals changed twice in 3 years → real maintenance. |
| Reachability | 15% | 4 | 3 | **3** | Dispute resolved for scout-3 (§3): named channels exist, but all gatekept, none with verified posting rules, and the only scalable one unverifiable. |
| WTP subscription | 10% | 4 | 3 | **4** | $399/yr to third parties for this exact task. |

**Weighted: (4×0.25) + (4×0.15) + (3×0.20) + (4×0.15) + (3×0.15) + (4×0.10) = 3.65 / 5.**

**Hard gates:** (1) not aviation, not previously rejected ✅ · (2) ruleset public, free, stable ✅
(the cleanest in either scout's file) · (3) single-user, phone-first, no backend ✅ · (4)
App-Store-safe ✅ *conditional on §4d's forbidden-strings list and the §8 portfolio framing* · (5)
recurring use ✅ (annual + triennial, for the life of the business) · (6) not nailed by a
well-funded competitor ✅ *for the portfolio;* ⚠️ **partially failed for the SAM item alone, where
a free government incumbent has better data than we can have.**

**VERDICT: PURSUE — conditionally, and cheaply.**

Run **E5, E6, E7** first: three days, $0, and any one of them can stop this. Then **E1** (14 days,
~$75). Build **nothing** until E1 clears 8 of 15 and E2 clears its deposit threshold. **Dated kill
criterion: 2026-11-16.**

**Strength of bet: 6 / 10.**

Six and not higher because the three legs that matter most are the three with the least evidence:
no owner has ever been recorded complaining about this; the headline legal mechanism was softened
in our customers' favour while our scouts were citing the old version; and this market's revealed
behaviour when it pays for this pain is to pay a human $399. Six and not lower because the
economics are real and asymmetric, the ruleset is the cleanest the studio has seen, the build is
genuinely a week, the portfolio half of the product has **no competitor of any kind**, and the
whole thesis can be bought or killed for under $200 and three weeks of one founder's time. That
asymmetry — tiny test cost against a large, well-specified prize — is the reason to proceed, not
confidence in the thesis.

---
*Carried-forward verification markings are preserved throughout. No `[snippet-only]` claim has been
upgraded. No figure or quote in this document was invented; every quote is linked to the source
that produced it. Nothing was read in primary text.*
