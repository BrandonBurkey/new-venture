# Gate B1 — Plant hire off-hire dates

**VERDICT: FAIL.**

**One-sentence reason:** the exact computation — "what have I got on hire, by site, and when is it
due back" — is already shipped free inside the customer portals and apps of the hire companies
themselves (Speedy, Ardent, GAP, Sunbelt/A-Plant, and the white-label Hire HQ portal sold through
HAE to its whole membership) and with automated return alerts inside Re-flow, a field-management
platform UK civils contractors already buy; and the loss lands on the contractor's job cost, which
the industry already pays a dedicated salaried Plant Coordinator / Plant Hire Controller to prevent.

Gates failed: **3 (mechanic), 9 (employer pays), 5 (single-user/phone-first), 4 (no public rule set).**
Gate 2 (counter-incentive) is the only one it part-survives, and only as a 3.

**Revised score: 2.35 / 5** (was shortlisted #1 going in). Strength of bet: **2 / 10**.

---

## Scores (rubric weights from `research/scoring-rubric.md`, unchanged)

| Criterion | Weight | Score | Why |
| --- | --- | --- | --- |
| Pain £ | 20% | 3 | ~£365–£438/week for one 3t dumper `[snippet]`; a 4-week forgotten item ≈ £1.5k `(estimate)`; multi-item on a big job plausibly £10k+, but unevidenced |
| Audience wealth | 10% | 1 | The reachable user is a PAYE site manager (frozen founder input) |
| Competitive weakness | 15% | 1 | Incumbents nail it: free hirer portals/apps plus paid platform features with return alerts |
| **Counter-incentive** | **20%** | **3** | Hirers do **not** send "you forgot to off-hire" reminders, but they **do** publish a free live on-hire list, which neutralises the gap |
| v1 buildability | 10% | 2 | Technically a week, but **there is no rule set to compute from** — it is pure manual re-keying, so no 60-second aha |
| Reachability | 10% | 4 | Site managers are densely reachable |
| Founder contact proximity | 10% | 2 | The real buyer is the plant coordinator / commercial manager — explicitly **not** reachable per frozen inputs |
| Willingness to pay | 5% | 2 | Employer-provided tooling expected; firm already pays a salaried person for the job |

Weighted: 0.60 + 0.10 + 0.15 + 0.60 + 0.20 + 0.40 + 0.20 + 0.10 = **2.35**

---

## 1. Mechanic search — the computation, in a customer's words

Searched (not product names): "off hire reminder", "forgot to off hire plant", "off hire date
tracker", "plant hire overcharge", "off hire confirmation", "plant on hire register", "off hire
tracker spreadsheet", "on hire report weekly statement", "items on hire listing discrepancies",
"plant hire costs overrun idle plant". ~12 WebSearch calls plus ~14 direct fetches.

### What already performs the computation

**Re-flow — "On/off hire" is a named product feature, with return alerts.** `[verified-fetch]`
https://re-flow.co.uk/product/features/hiring
> "Monitor hired equipment on the dashboard in real time, see how long it's been on site, and get
> automated alerts for returns – preventing delays and unnecessary costs."

Page meta description, same fetch:
> "Track hired equipment, site time and return dates. Get return alerts and keep bills of quantities
> aligned with hire changes to control costs with Re-Flow."

Re-flow is a UK (Exeter) field-management platform sold to highways, civils, utilities and
construction contractors — i.e. **a feature buried in a tool the target already has or is being
sold.** This alone fails gate 3.

**Zigaflow — the pain is a published workflow it sells against.** `[verified-fetch]`
https://www.zigaflow.com/workflows/construction-plant-hire-and-equipment-management
> "Plant hire periods drift beyond the planned dates and nobody triggers the return, leaving weekly
> hire charges accumulating on jobs that are nearly finished."
> "There is no single record of what plant is currently out on hire, who ordered it, or when it was
> due back - so project managers rely on memory or scattered emails."

This is vendor marketing copy (published 21 June 2026), so treat the diagnosis as a vendor claim —
but it confirms the problem is a recognised, commercially-addressed software category, bought at
company level with PO and Xero integration. That is a backend/accounts product, not a phone app.

**Free templates in a tool site teams already use.** `[verified-fetch]`
https://safetyculture.com/library/construction/plant-on-hire-report-sbgvg0wxcjcwnttd — SafetyCulture
hosts free community templates including "Plant Off Hire Report", "Small Plant On Hire Checklist"
and "Pre-Hire and Post-Hire Equipment Inspection" which captures "on hire and off hire hours and
dates". Download counts shown are small ("10+", "20+", "30+"), so these are **weak** competitors and
are condition reports rather than date trackers — but they are free and inside an app already on
site phones.

**Dashpivot / Sitemate** publishes tracker design guidance recommending separate "On hire" and
"Off hired" columns so overdue hires stand out. `[snippet]` — help.sitemate.com did not resolve
(DNS ENOTFOUND for `help.sitemate.com` via both WebFetch and curl). Dashpivot is live in the GB App
Store (free, 253 ratings) `[verified-fetch]` via iTunes API.

---

## 2. Who holds the date, and do they notify?

**Who holds it:** the hire company holds the on-hire start, the agreed period and the live on-hire
list. The contractor's own PO / hire desk holds the expected duration. The site manager holds only
the physical fact that the machine is idle.

**Do they send a "you forgot to off-hire" reminder? No evidence found that any do.** The
counter-incentive from `CLAUDE.md` §0.1 holds: billing continues until off-hire is formally notified
and referenced, so the hirer profits from silence. Confirmed by terms language:

- Speedy: "Equipment can also be off-hired via the My Speedy facility" — off-hire is customer-initiated,
  three routes, none of them a reminder. `[verified-fetch]`
  https://www.speedyservices.com/how-do-i-arrange-for-equipment-to-be-off-hired
- A supplier credit-account procedure requires terminations to go to the plant office and issues an
  off-hire reference number to quote in disputes; missing the midday cut-off makes the next working
  day chargeable in full. `[snippet]` https://form.jotform.com/230673009830351

**But the counter-incentive advantage is already neutralised**, because the hirers publish the live
list for free. See §3. That is why gate 2 scores 3, not 5.

---

## 3. Portal / app findings — the decisive nuance

The brief asked whether hirer portals show "what you currently have on hire". **They do, widely, for
free, and it is spreading via a white-label product sold through the trade association.**

| Hirer / product | What it does | Evidence |
| --- | --- | --- |
| **Ardent InSite** (mid-size UK plant hirer) | "customers can place orders and offhire equipment online… Customers can also **see all their machines and attachments on hire by site and produce live hire reports**." Also "colour-coded LOLER certificates ordered by date of expiry with **email alert ahead of expiry**" | `[verified-fetch]` https://ardenthire.com/digital/insite |
| **Speedy app** (GB App Store, free) | "**Off-hire in a few simple clicks and receive a time-stamped confirmation** - reducing queries"; "Track deliveries and collections" | `[verified-fetch]` https://www.speedyservices.com/app |
| **Speedy app — off-hire section** | Lists products currently on hire; filter by site postcode, asset no., product code, PO no., rental order no.; barcode scan | `[snippet]` speedyservices.com DIY guide |
| **My Speedy** (web) | Live data on equipment on hire including **scheduled off-hire dates**, hire history, invoices | `[snippet]` hoistmagazine.com (dated) |
| **GAP Hire Solutions extranet** | "access live and historical account information in one place including **live hires**, asset management, KPI's, invoicing, POD and POC"; "log in, manage hires and create bespoke reports… at any time, day or night" | `[verified-fetch]` https://www.gap-group.co.uk/news/4844-gap-launches-new-customer-extranet |
| **HAE EHA "Hire HQ"** white-label portal | "lets your customers manage hires, view documents, **log off-hires or breakdowns, and access real-time hire details**, all in one central place, accessible 24/7"; HAE members get 5% off; pricing based on active hires | `[verified-fetch]` https://www.hae.org.uk/products-services/tools-info-resources/hire-hq/ |
| **A-Plant / Sunbelt extranet** | Extranet upgrade to manage hired equipment across divisions, "on- or off-hiring, making payments, tracking equipment" | `[snippet]` agg-net.com |
| **Hewden Hire Manager** (2012) | Free online tool to request on-hire, off-hire or extension | `[snippet]` theconstructionindex.co.uk |

**Implication:** Hire HQ means even a small regional hirer can bolt a live-on-hire portal onto its
existing hire system. The "nobody shows you what you have out" premise is already false at the
national hirers and is being commoditised at the regional ones.

---

## 4. Named rivals in the GB App Store

All via `https://itunes.apple.com/search?...&country=gb&entity=software`, `[verified-fetch]`.
Two queries returned HTTP 403; **both retried once and returned 200** (per brief), so no empty
result was scored as "no competitor".

| App | Seller | Price | Ratings (count / avg) | Relevance |
| --- | --- | --- | --- | --- |
| **United Rentals: Plant Hire** | United Rentals, Inc. | Free | 0 / — | Description: "**View Equipment Dashboard – see what you have on-rent, upcoming, overdue, and more**"; "Track equipment location and leniency windows". Listed in the **GB** store. This is the mechanic, free. |
| **Speedy Services** | Speedy Support Services Ltd | Free | 15 / 2.13 | "**Off-hire your tools and equipment in a few simple clicks.**" |
| **Dashpivot** | Sitemate Technologies Holdings | Free | 253 / — | Equipment/tool register with on-hire / off-hired columns |
| **Ardent Hire** | Noise Agency Ltd | Free | 12 / — | Ardent's customer app (InSite portal is the web product) |
| **MySunbelt** | Sunbelt Rentals Ltd | Free | 7 / 4.29 | **Not** a hire-management app — news/careers/"stay connected" only. The UK Sunbelt on-hire view is in the extranet, not this app. |
| **Procore** | Procore Technologies | Free | 1,135 / — | Enterprise platform, appears on "equipment hire construction" |
| Sunbelt Rentals SmartSite / Tracking Tool / Observations | Sunbelt Rentals Ltd / Targa | Free | 3 / 0 / 3 | Torque tools, telematics, near-miss — not off-hire |

No paid single-user off-hire tracker found in GB. **That absence is not an opening** — it is a
consequence of the mechanic being a free account feature of the counterparty.

---

## 5. Hard gate 9 — who actually eats the cost, and who makes the call

This is the harder kill, as the brief predicted.

**The off-hire monitoring job is a named, salaried occupation inside UK contractors.** Multiple live
UK job adverts define it as the role's core duty:

- George Leslie, Plant Hire Controller: "Monitor on-hire/off-hire dates to ensure accurate and
  timely off-hires, **avoiding unnecessary costs**." `[snippet]` (georgeleslie.co.uk returned 403 to
  direct fetch — blocked host, reported not routed around)
- A contractor hire-desk role (VolkerWessels-linked, findajob.dwp.gov.uk): "**Proactive off-hire -
  managing internal reports to ensure plant and equipment is off hire in a timely manner**."
  `[snippet]` (findajob.dwp.gov.uk fetch timed out — connection closed, empty reply)
- Plant Coordinator (Dudley): "accurately on hire and off hire all plant inputted onto the Procure
  to Pay System", audit trail for rentals, regular plant audits. `[snippet]`
- Plant & Transport Coordinator, Tarmac: centralised ordering, "daily hire and off-hiring of plant
  and transport, monitoring delivery/return". `[snippet]`
- Redditch plant coordinator: "weekly reconciliation of site returns against a hire matrix and
  checking supplier hire reports for discrepancies". `[snippet]`
- **"Hire controller (plant, tools and equipment)" is a recognised English apprenticeship standard**
  (ST0269) whose duties include "Process requisitions, orders and on-hire and off-hires" and
  "Completing contract documentation at both on-hire and off-hire stages". `[verified-fetch]`
  https://skillsengland.education.gov.uk/apprenticeships/st0269-v1-0

**Site manager job adverts do not list off-hire.** Two UK site-manager adverts listed planning
labour/plant/materials, ordering plant, and monitoring costs — neither mentioned off-hire or plant
returns. `[snippet]` (employmenthero.com, theconstructionindex.co.uk job views). Site managers do
own the **site diary**, which records plant movements `[snippet]` — i.e. they record, the hire desk
transacts.

**Who pays:** the contractor's job cost. Hire charges are POed by the business, invoiced to the
business, and reconciled by the business against the hire matrix. The site manager is PAYE and loses
nothing personally. No evidence found of a site manager being personally charged, docked or
bonus-affected by a late off-hire — **no verbatim complaints found** from site managers about
personal loss, after four targeted search attempts.

**Gate 9 verdict: FAIL.** The person we can reach (PAYE site manager) is not the person who loses the
money (the firm), and the firm already buys a salaried person and an ERP report for this. On the
rubric's "willingness to pay" row, "already pays a person for this job" reads as a 5 — but here it
cuts the other way: they pay a person *instead of* a phone app, and that person is also PAYE.

---

## 6. Collateral gate failures

**Gate 5, single-user and phone-first — FAIL.** Off-hire is a *workflow with other parties*, not a
date computation. To actually stop the meter the user must notify the plant office and obtain an
off-hire reference; CPA-style terms make an unconfirmed off-hire no off-hire at all `[snippet]`. One
supplier's terms: charges "continue during the period of hire until we have given you a collection
or off-hire number" `[snippet]` (clemas.co.uk / jotform credit application). An offline phone app
cannot off-hire anything, and the authoritative on-hire list sits on the hirer's system and the PO.

**Gate 4, public free stable rule set — FAIL.** There is no rule set. The dates come from a
commercial hire contract (CPA Model Conditions and supplier-specific supplementary terms), which are
per-contract and not free public rules. There is nothing to compute — only data the user must re-key
for every machine from every vendor. That also kills the tie-breaker "aha in a browser in 60 seconds".

**Gate 7, recurring use — PASS.** Hires recur continuously.
**Gate 6, App-Store-safe framing — PASS.** No verdict about a person or machine needed.
**Gate 1, not excluded — PASS.**
**Gate 8, well-funded competitor — FAIL in substance:** Ashtead/Sunbelt, Speedy and GAP are the
well-funded parties and ship the view free to hold the account.

---

## 7. Pain £ arithmetic

`(estimate)` One 3-tonne forward-tip dumper: Travis Perkins listed £438.16 for 1 week inc VAT /
£365.13 ex VAT `[snippet]` (direct fetch of travisperkins.co.uk returned an 11KB stub — bot-blocked,
reported not routed around). Forgotten four weeks → 4 × £365 = **£1,460 ex VAT**. A guide quotes a
3t mini digger at £190–£260/day and a telehandler at £180–£260/day `[snippet]`, so three forgotten
items for a month plausibly reaches £5k–£10k — **but no source was found quantifying real-world
forgotten-off-hire losses at UK contractors**, and I will not invent one. Scored 3, not 5.

---

## 8. Evidence caveats

**Verified by opening the page (`[verified-fetch]`):** re-flow.co.uk on/off hire feature page;
zigaflow.com plant hire workflow; speedyservices.com off-hire FAQ, off-hire how-to and app page;
gap-group.co.uk extranet announcement; hae.org.uk Hire HQ; ardenthire.com InSite;
skillsengland.education.gov.uk ST0269; safetyculture.com template library page; itunes.apple.com GB
search API (six term sets).

**Blocked or unreachable hosts — reported, not routed around:**
- `help.sitemate.com` — DNS ENOTFOUND via WebFetch and curl. Dashpivot's actual on-hire/off-hire
  tracker UI is therefore `[snippet]` only.
- `www.georgeleslie.co.uk` — HTTP 403. The plant hire controller quote stays `[snippet]`.
- `findajob.dwp.gov.uk` — curl empty reply / connection closed. The VolkerWessels hire-desk
  "proactive off-hire" quote stays `[snippet]`.
- `www.hsgplc.co.uk` — HTTP 404 (advert likely expired).
- `www.travisperkins.co.uk` — returned an 11KB stub, no price in body. Weekly rate stays `[snippet]`.
- `help-coins.theaccessgroup.com` plant-orders article — HTTP 404. **COINS / Access / Eque2 ERP
  off-hire reporting is therefore UNVERIFIED**, and it matters: these are the systems big UK
  contractors already run.
- `reddit.com` — WebSearch refuses the domain (user-agent not permitted). No Reddit evidence at all.
- Two `itunes.apple.com` queries returned 403 on first call; both retried once and returned 200.

**Could NOT verify, ranked by how much it would change the verdict:**
1. Whether COINS / Access / Eque2 (the ERPs big UK contractors run) ship an overdue-on-hire report.
   If they do, gate 3 fails even harder. Would not rescue the candidate either way.
2. Whether regional/local hirers (Nixon, Flannery, Hawk, Ridgway) have live on-hire portals. Found
   nothing on any of the five named. Hire HQ's existence makes it likely but it is unproven.
3. Any real quantification of forgotten-off-hire loss at a UK contractor. None found.
4. Any verbatim site-manager complaint about personal cost. **No verbatim complaints found.**
5. CPA Model Conditions clause text on termination of hire — the cpa.uk.net PDF link returned HTML,
   not the PDF. All CPA notice claims here are `[snippet]` from third parties, and per `CLAUDE.md` §1
   third-party commentary on terms is exactly the kind of source that misled the last venture.

**Consultancy/vendor caution:** the Zigaflow and Re-flow pain statements are marketing copy. They are
used here only as evidence that *the problem is already a sold software category*, which is the
adverse direction — so vendor bias does not flatter the kill.

---

## 9. Kill list

| Killed | Gate | Reason |
| --- | --- | --- |
| **B1 — plant hire off-hire dates** | 3, 9, 5, 4 | Mechanic already free inside hirer portals/apps and inside contractor platforms with return alerts; cost lands on the employer, who already pays a Plant Coordinator for it; off-hire is a multi-party workflow needing an off-hire reference, not a date computation; no public rule set to compute from |

**Knock-on findings for other candidates (free, from the same fetches):**
- **C10 (LOLER on hired plant) — confirmed dead.** Ardent InSite: "colour-coded LOLER certificates
  ordered by date of expiry with **email alert ahead of expiry** and notification to stand down
  equipment if LOLER expires." `[verified-fetch]` The hirer emails the expiry. Do not spend searches.
- **B3 (skip / welfare / cabin hire overruns) is weakened by the same portal pattern** and by the
  same gate 9 logic. Recommend it is not deep-dived without a new reason.
- **B2 (scaffold hire overruns)** is the one adjacent candidate the portal evidence does **not** touch:
  scaffolding is usually a subcontract with a hire period, not a hire-desk account with an extranet.
  Gate 9 still applies. Worth two cheap searches, no more.

## Handoff
- Wrote: `/home/user/new-venture/research/gate-b1-offhire.md`
- Verified: re-flow on/off-hire feature with automated return alerts; Speedy app and FAQ off-hire
  routes; Ardent InSite live on-hire list by site plus online off-hire plus LOLER expiry email
  alerts; GAP extranet live hires; HAE EHA Hire HQ white-label off-hire portal; apprenticeship
  standard ST0269 for hire controllers; GB App Store listings for Speedy, United Rentals: Plant Hire,
  Dashpivot, Ardent Hire, MySunbelt (with the 403 retried once each).
- Could NOT verify: COINS/Access/Eque2 overdue-on-hire reports (404); any regional hirer portal among
  five named firms; any £ figure for real forgotten-off-hire loss; any verbatim site-manager
  complaint (none found); CPA Model Conditions termination clause from the CPA's own PDF.
- Needs from another agent: none for B1 — it is dead. For Bob: the one fact that would change the
  venture, not this candidate, is still whether a site manager can introduce the founder to a
  subcontractor owner or a plant coordinator.
- Changes my own score: yes — B1 drops from shortlist #1 to **2.35 / 5, FAIL on gates 3, 9, 5 and 4.**
