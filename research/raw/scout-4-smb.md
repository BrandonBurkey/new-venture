# Scout 4 — Cluster: "Small businesses where a missed deadline or missing record costs real money"

Date: 2026-10-19. Researcher: scout-4.

## ⚠️ RESEARCH LIMITATIONS — READ FIRST

Verification was materially constrained this session. State plainly what was and was not confirmed:

- **reddit.com is hard-blocked at the search API level** (`400: domains not accessible to our user agent`). No subreddit member counts or verbatim Reddit quotes could be obtained directly. Third-party tracker (GummySearch) snapshots are used where available and labelled as such; GummySearch itself shut down 2025-11-30, so its counts are stale snapshots.
- **apps.apple.com, capterra.com, g2.com, trustpilot.com, appfollow.io, thetruckersreport.com, eng-tips.com, studentdoctor.net all returned proxy `403 CONNECT` denials.** No App Store rating counts or review text could be pulled. **This is the single biggest gap: I could not survey existing iOS apps in any of these niches.** Treat all "competitive weakness" scores as provisional until someone with App Store access runs the queries listed in "Open verification tasks" at the bottom.
- **Direct fetch of primary sources failed for every host tried** (ecfr.gov, sba.gov, census.gov, nfpa.org, levelset.com, fmcsa.dot.gov, leginfo.legislature.ca.gov all returned connection code 000). Statute citations below are therefore cited **as quoted by secondary sources**, not read in the original. Flagged inline as `[secondary]`.
- **Web search budget was exhausted mid-run** (200 calls/turn, shared across all agents in the turn). Niches 5 and 7 lost their last two planned searches (SBA 8(a)/HUBZone recert specifics; Jobber/ServiceTitan pricing). Noted inline.
- Many compliance "fine amount" figures circulating online originate from **vendors selling compliance software**. Every such figure below is labelled `[vendor-sourced, unverified]`. Several conflict with each other by 2–3x. **Do not put any of these in marketing copy without reading 49 CFR 386 App. B / the relevant primary schedule.**

No numbers in this document are invented. Where I had no source, I wrote "no verified figure found".

---

## SCORES TABLE

Scale 1–5. "Comp weakness" 5 = blue ocean. "Phone fit" 5 = single-user, phone-first.

| # | Niche | Pain-$ | Audience wealth | Comp weakness | v1 buildability | Reachability | WTP subscription | **Single-user phone fit** | Verdict |
|---|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| 5 | **Gov-contracting small biz (SAM.gov + recerts)** | 5 | 5 | 4 | 4 | 4 | 4 | **5** | **PURSUE** |
| 7 | **DOT-regulated small fleets (1–6 trucks)** | 4 | 3 | 4 | 5 | 5 | 4 | **5** | **PURSUE** |
| 6 | Food trucks / caterers / ghost kitchens | 3 | 2 | 4 | 4 | 4 | 2 | 5 | PARK |
| 8 | Dental / childcare / salon record deadlines | 2 | 4 | 3 | 3 | 3 | 3 | 4 | PARK |
| W2 | Pesticide applicator records + CE (wildcard) | 2 | 3 | 4 | 4 | 3 | 2 | 5 | PARK |
| W3 | CRE landlord critical-date tracking (wildcard) | 4 | 5 | 3 | 4 | 2 | 3 | 3 | PARK |
| 3 | Fire protection / backflow / life safety | 3 | 3 | 3 | 2 | 3 | 3 | 4 | KILL |
| 1 | Mechanics lien / preliminary notice deadlines | 5 | 4 | 2 | 2 | 4 | 3 | 3 | KILL |
| 2 | GC tracking subcontractor COIs | 4 | 4 | 2 | 3 | 4 | 3 | **1** | KILL |
| 4 | Property managers / HOA boards | 2 | 3 | 3 | 3 | 3 | 2 | 2 | KILL |
| W1 | OSHA 300A posting (wildcard) | 2 | 3 | 3 | 5 | 2 | 1 | 4 | KILL |

---

# NICHE 1 — Specialty-trade subcontractors: mechanics-lien / preliminary-notice deadlines

### ICP (one line)
Owner or office manager of a 2–30 person specialty-trade sub (electrical, plumbing/HVAC, drywall, concrete) doing commercial work across more than one state, carrying $50k–$500k of receivables at any time. Wealth signal: a third-party aggregation of Census NAICS 238 data reports **510,803 establishments and ~$1.286 trillion in receipts** for specialty trade contractors — <https://data.mewayz.com/industry/238> — but **the page does not name its Census vintage and I could not reach census.gov to verify; treat as unverified.** BLS puts 2024 employment at ~548,890 electricians and ~341,890 plumbers/pipefitters/steamfitters — <https://www.bls.gov/iag/tgs/iag238.htm>.

### THE EXPENSIVE MISTAKE
A missed preliminary-notice window generally voids the lien outright, converting a secured receivable into an unsecured one.

Documented occurrence: a Minnesota lien claimant served its prelien notice **27 days late** and **the court invalidated the mechanic's lien** — <https://www.ncscredit.com/education-center/blog/minnesota-prelien-deadline-is-45-days-not-72-days>. Same source: MN subs/suppliers have **45 days** on private projects; contractors with no written owner contract have **10 days**.

Arithmetic **(estimate)**: median commercial sub invoice on a mid-size job ~$75,000 (my assumption, **no source** — needs verification). Lien rights lost → claim drops from secured to unsecured breach-of-contract. Contractor-forum consensus is that the fallback is small claims or a breach suit — "an unpaid sub may decide to file a breach of contract suit" <https://www.contractortalk.com/threads/how-long-should-i-wait-for-payment-before-filing-mechanics-lien.13202/>. If recovery on unsecured drops to ~30%, loss on one occurrence = $75,000 × 0.70 = **$52,500 (estimate, assumption-driven)**. Cost of ONE occurrence is plausibly 10–100x an app subscription. **Pain-$ is genuinely 5/5.**

### THE RULE SET
Public, free, written, statutory — this part is excellent. But it is **50 separate statutes with different trigger events** (first furnishing, last furnishing, Notice of Completion recording, substantial completion), different actor classes (prime/sub/sub-sub/supplier), and different cure rules.

- California: 20-day preliminary notice; late notice preserves rights only for work furnished in the 20 days before service and after — <https://www.levelset.com/blog/what-to-do-miss-preliminary-notice-deadline/> `[secondary]`
- California Notice of Completion shortens the lien window — practitioners specifically advise tracking NOCs — <https://ezel.ai/surveys/mechanics-lien-deadlines/california> `[secondary]`
- Florida: Notice to Owner within 45 days of first furnishing `[secondary, forum]` — <https://www.contractortalk.com/threads/question-about-a-notice-to-owner.126464/>
- North Carolina: lien within 120 days of last labor/material, suit within 180 days `[secondary, forum]` — same thread index
- Alabama and some others have **no hard preliminary-notice deadline** at all, only "before the lien" — <https://www.levelset.com/blog/what-to-do-miss-preliminary-notice-deadline/> `[secondary]`

**No paywalled-standard risk** — statutes are public domain. The licensing risk here is different and worse: see "regulated advice" below.

### INCUMBENTS
- **Levelset (Procore)** — acquired Nov 2021 for **$500M ($425M cash + $75M stock)**; at acquisition **"over 250,000 users... on more than 6.5 million construction projects"** — <https://www.businesswire.com/news/home/20211103005176/en/Procore-Completes-Acquisition-of-Levelset-to-Simplify-Lien-Management-Workflows-for-Construction>. G2: **4.5/5 from 51 reviews** — <https://www.g2.com/products/levelset/reviews>. GetApp: **4.2/5 from 19 reviews, from $149/user, free version + free trial** — <https://www.getapp.com.au/software/2069634/levelset>.
- **Levelset's free state-by-state deadline guides and lien calculators are the killer.** Free, SEO-dominant, and backed by Procore's balance sheet. I could not fetch levelset.com to confirm the free tools are still live post-acquisition, and found **no evidence they were discontinued**. Assume live.
- **Billd** publishes a free downloadable mechanics-lien deadline chart — <https://billd.com/mechanics-lien-deadlines>
- **ezel.ai** runs free per-state lien deadline surveys/calculators — <https://ezel.ai/surveys/mechanics-lien-deadlines/california>
- **NCS Credit**, **Handle**, **Siteline** all publish free educational deadline content as lead-gen — <https://www.siteline.com/blog/what-voids-a-mechanics-lien-and-other-mistakes-that-can-kill-your-rights>

### REAL COMPLAINTS
Verbatim, ContractorTalk (real contractors, public forum):
1. > "it varies from state to state, and widely" — <https://www.contractortalk.com/threads/pre-lien-registration.41461/>
2. > "without the notice, they lose all right to file a lien" — <https://www.contractortalk.com/threads/question-about-a-notice-to-owner.126464/>

Siteline (vendor, but a direct characterization of the failure mode): lien rights are "more often lost than not because folks either assumed the rules were the same as the last state they worked in or didn't know there were rules to follow in the first place" — <https://www.siteline.com/blog/what-voids-a-mechanics-lien-and-other-mistakes-that-can-kill-your-rights>

A G2 Levelset reviewer reportedly complained of "a lack of email notifications, which left them uninformed about deadlines and requirements" — this is the **search engine's paraphrase of the review, not verbatim** (g2.com fetch was 403-blocked). **Flag as unverified.**

### AUDIENCE SIZE & WEALTH
See ICP. Headline figures unverified against census.gov (blocked).

### WHERE THEY GATHER
- ContractorTalk.com — large, active, indexable, and **not blocked** (confirmed working this session) — <https://www.contractortalk.com/>
- r/Construction — ~568k–571k members per GummySearch, ~418k per painonsocial `[stale third-party snapshots]` — <https://gummysearch.com/r/Construction/>
- American Subcontractors Association (ASA) — member count not verified
- NCS Credit education center (credit-manager audience) — <https://www.ncscredit.com/education-center/blog/>

### iOS-FIT CHECK
**Borderline-acceptable, 3/5.** It is genuinely single-user: one owner or office manager enters jobs and dates. No sub-chasing, no counterparties. But the real job-to-be-done is *producing and serving a legally effective notice document* — which is a mail/certified-delivery workflow, not a phone notification. An app that only reminds you leaves the user still needing Levelset or a lawyer.

### BUILDABILITY
Hard. A deterministic engine needs 50 states × 4 actor classes × multiple trigger events, each with its own cure rules — that is weeks of statutory research alone, before any Swift is written, and every entry is a liability if wrong. A one-week v1 could only cover 3–5 states credibly, which gives a multi-state sub (our stated ICP) a half-product. SwiftData + local notifications + PDF export of a notice log is trivial; the *content* is the whole cost.

### VERDICT: **KILL**
**Single biggest failure reason: computing a statutory lien deadline and telling a contractor when to act is functionally legal advice**, which our hard constraints forbid and which Levelset already gives away free with Procore's money behind it. Secondary: the 50-state ruleset cannot be built accurately in a week, and being wrong once is an existential liability.

**Scores: pain-$ 5 | wealth 4 | comp weakness 2 | buildability 2 | reachability 4 | WTP 3 | phone fit 3**

---

# NICHE 2 — General contractors tracking subcontractor COI expirations

### ICP (one line)
Office manager / risk admin at a $5M–$50M GC running 20–200 active subcontractors, responsible for COIs, additional-insured endorsements, W-9s, licence and workers-comp expirations. Wealth signal: same NAICS 238/236 receipts base as Niche 1 — <https://www.bls.gov/iag/tgs/iag238.htm>; myCOI's own Capterra positioning is "small businesses and construction firms first," with 30% midsize and 21% enterprise reviewers — <https://www.capterra.com/p/234580/myCOI/reviews/Capterra___3815314/>.

### THE EXPENSIVE MISTAKE
A sub's workers-comp or GL lapses, a worker is hurt, and the GC's own policy (or the GC directly) absorbs the claim.

Documented occurrences:
- **Hopper v. Terry Hunt Construction (SC)** — the certificate showed coverage only through a date *before* the injury; **the GC was held liable for the employee's injuries because the sub was uninsured at the time of the accident** — <https://sclawyersweekly.com/?p=12758>
- **North Carolina** — a GC relied on an older certificate rather than pulling a current one for the project; the Commission held the GC's insurer liable if the sub's insurer defaults — <https://nclawyersweekly.com/?p=63434>
- **Delaware** — a contractor holding a valid certificate has **no implied duty to monitor**, "except where a contractor knows its subcontractor has a history of allowing coverage to lapse" — <https://courts.delaware.gov/opinions/download.aspx?ID=181220>
- **Hard dollar figure (NY)** — a GC paid **$52,678.03** to replace a subcontractor's liability policy after a coverage gap — <https://www.nycourts.gov/reporter/pdfs/2016/2016_31640.pdf>

Arithmetic **(estimate)**: ONE occurrence = the $52,678 replacement-premium case as a floor, or a workers-comp indemnity claim as the realistic middle. Vendor blogs cite a "$2.3 million Phoenix claim tied to one missed expiration" — <https://imagetotable.ai/blog/scale-coi-tracking-200-subcontractors> — **this is an unsourced vendor claim; do not use it.** Verified floor: **$52,678 (one documented occurrence)**.

### THE RULE SET
**This niche has no public rule set.** A COI expiry date is private data printed on a document the sub hands you. There is no statute, standard or interval a deterministic engine can compute from — the app would be a pure date-entry reminder with no defensible rules moat. (A partial exception: some state licence boards publish workers-comp status — e.g. California's contractor licence lookup — <https://pagecrawl.io/blog/certificate-of-insurance-vendor-coverage-monitoring.md> `[vendor]` — but scraping that is a backend, which we have forbidden.)

Also relevant and damaging: the *certificate is not the coverage*. "It is a valid certificate that confers no protection, because the certificate is an informational document and the endorsement is what actually binds coverage" — <https://www.kognitos.com/blog/certificate-of-insurance-tracking/>. An expiry-date reminder app therefore solves the shallower half of the problem, and sophisticated buyers know it.

### INCUMBENTS
- **myCOI** (listed as "illumend" on SoftwareAdvice) — **4.7/5 from 47 reviews** on GetApp, 91% positive — <https://www.getapp.com/all-software/a/mycoi/>; no public price, quote-only — <https://www.softwareadvice.com/product/319791-illumend/>
- **Contractor Compliance** — **4.7/5 from 81 reviews** — <https://www.softwareadvice.com/construction/contractor-compliance-profile/>
- **Billy** — 4.7/5 from 31 reviews — <https://www.getapp.com/operations-management-software/contractor-management/f/compliance-management/>
- **Expiration Reminder** — generic horizontal expiry tracker, already sells into this use case — <https://www.expirationreminder.com/blog/insurance-certificate-tracking-centralize-cois>
- **GCPay** — <https://www.softwareadvice.com/construction/gcpay-profile/>
- **Free bundling risk is real**: COI collection is increasingly a module inside GC platforms (GCPay, Procore, Autodesk) rather than a standalone purchase — a GCPay reviewer's complaint is precisely that they want their COIs to sync with Autodesk rather than being re-uploaded.

### REAL COMPLAINTS
Verbatim, from published software reviews (real named-platform reviewers):
1. > "pulling 50 of them takes us days" — myCOI reviewer on bulk certificate download — <https://www.softwareadvice.com/product/319791-illumend/>
2. > "not super intuitive and needs a ramp-up period" — myCOI reviewer — <https://www.softwareadvice.com/product/319791-illumend/>
3. > "the customization of insurance requirements is a bit lacking" — myCOI reviewer — <https://www.softwareadvice.com/product/319791-illumend/>
4. > "if some of the critical thinking about what document was uploaded and if it is adequate could be better automated, it would eliminate some of the complexity" — Contractor Compliance reviewer — <https://www.softwareadvice.com/construction/contractor-compliance-profile/>

No ContractorTalk or Reddit threads found on COI tracking (reddit blocked; ContractorTalk search returned no COI threads).

### AUDIENCE SIZE & WEALTH
Per Niche 1. GC count specifically (NAICS 236) not separately verified — census.gov blocked.

### WHERE THEY GATHER
ContractorTalk; r/Construction (~568k, stale snapshot); ASA; AGC of America. Risk-manager audience also sits in IRMI/RIMS circles, which is a different and more expensive channel.

### iOS-FIT CHECK
**KILL — 1/5.** This is definitionally a multi-user workflow. The product's entire value is **outbound chasing of third parties**: emailing 60 subs and their insurance agents, receiving uploads, logging who responded. myCOI's most-praised feature is exactly that — "it contacts vendors when a certificate is about to expire or is non-compliant." A no-backend, no-accounts, single-device iOS app cannot do the part that matters. Strictly: this is an office workflow needing a backend and accounts.

### BUILDABILITY
The reminder shell is a one-day build (SwiftData entity for sub + policy + expiry, local notifications, PDF export of a compliance matrix). But without outbound collection it is a glorified spreadsheet, and the buyer already has a spreadsheet. Easy to build, impossible to make valuable within our constraints.

### VERDICT: **KILL**
**Single biggest failure reason: inherently multi-user document-collection workflow — the value is in chasing counterparties, which requires a backend and accounts we have forbidden.**

**Scores: pain-$ 4 | wealth 4 | comp weakness 2 | buildability 3 | reachability 4 | WTP 3 | phone fit 1**

---

# NICHE 3 — Fire protection / backflow / life-safety service contractors

### ICP (one line)
Owner-operator or 2–15 tech fire-protection/backflow service contractor managing recurring ITM (inspection-testing-maintenance) intervals across 50–500 customer sites plus technician certifications. Wealth signal: AFSA "represents over 1,500 merit shop fire sprinkler contractors, suppliers, designers" — <https://mediakit.multiview.com/AFSA>; NAICS 238220 establishment/receipts count **not obtained** (census.gov blocked).

### THE EXPENSIVE MISTAKE
The dollar pain mostly lands on the **building owner**, not the contractor — which is a positioning problem. Backflow non-compliance penalty schedules are the best-documented:

- **Durham, NC**: civil penalties **per device, per day**: $50/day days 1–15, $75/day days 16–30, $150/day days 31–45, $225/day thereafter; restoration **$500 plus $75 unlock fee** plus accrued penalties — <https://www.durhamnc.gov/DocumentCenter/View/61842/Non-Compliance-Civil-Penalties-Fee-Info-and-Schedule_v30_05Sep25>
- **Copper Mountain Metro, CO**: "monthly penalty fees of $1000 per violation"; water suspended Dec 1 if reports unsubmitted; irrigation reports due July 1, all others Sept 1 — <https://coppermtnmetro.specialdistrict.org/notice-of-updated-backflow-regulations>
- **Vancouver, WA**: escalating fines **$250 → $500 → $1,000**, then service termination; first reminder 45 days before due date — <https://cityofvancouver.us/?p=19384>
- **Marion, OH**: reports due within 15 days of test; **$100 per device per month** for commercial non-compliance, plus possible disconnection — <https://cityofmarion.org/home/showpublisheddocument/23090/637171948612100000>
- **Harrisburg, NC**: 30 days from notice, then 15 more, then **$200/day** and possible termination — <https://www.harrisburgnc.gov/174/Backflow-Prevention>

Arithmetic **(estimate)**, Durham, one device 45 days past due:
(15 × $50) + (15 × $75) + (15 × $150) = $750 + $1,125 + $2,250 = **$4,125**, plus $575 if service was cut = **$4,700 for one device, one occurrence**. A 20-device commercial campus scales this to five figures. **Verified fine schedule, real arithmetic.**

Vendor claim of "$16,000 max civil penalty" style numbers for NFPA-adjacent work: none found; the $16,000 figure I saw was for DOT annual inspections, not fire protection.

### THE RULE SET — **THIS IS WHERE IT DIES**
Two independent, fatal data problems:

1. **NFPA standards are copyrighted and paywalled.** NFPA 25 (water-based systems ITM), NFPA 10 (portable extinguishers, monthly visual per §7.2 / annual service per §7.3 — <https://wsp.wa.gov/wp-content/uploads/2026/03/420035_Facility_Inspection_Checklist-NEW-2024.pdf> `[secondary]`), and NFPA 96 (commercial cooking exhaust) all gate the actual frequency tables behind purchase or NFPA LiNK. NFPA offers free **read-only** online access, but I could not reach nfpa.org to read the terms, and every low-quality secondary source agrees the standard "is protected by copyright." **Reproducing NFPA 25's or NFPA 96's frequency tables inside our app is a licensing risk we are explicitly forbidden to take.** Confirmed symptom of the problem: secondary sources **disagree with each other** on NFPA 96 cleaning intervals — one says monthly for solid fuel / quarterly for 24-hour and wok operations / annual for low volume (<https://www.inspectpoint.com/resources/articles/kitchen-hood-suppression-inspection-requirements>), another says monthly high / quarterly moderate / **semiannual** low (<https://oxmaint.com/industries/facility-management/commercial-kitchen-hood-exhaust-nfpa96-maintenance>). We cannot resolve that without licensing the standard.

2. **Backflow due dates are set by ~50,000 individual water utilities, each with its own ordinance, due date and submission window.** Compare the five cities above: due dates range from "within 15 days of test" to "July 1 / Sept 1" to "45 days before the anniversary." There is no public machine-readable national dataset; building one is a purchased/scraped dataset, which we have forbidden. A forum plumber states the problem exactly (verbatim below).

A v1 could ship with **user-entered intervals** — but then it is a generic recurring-reminder app with no moat, competing with Apple Reminders.

### INCUMBENTS
- **InspectOps** — **$29/mo Starter (solo technician), $79/mo Growth (up to 5 users)**, free version + trial; unlimited assets, QR scanning, NFPA templates, deficiency tracking, mobile — <https://www.capterra.co.uk/software/1086776/InspectOps>. **This is a direct, cheap, mobile competitor already at our intended price point with the NFPA templates we cannot legally ship.**
- **Inspect Point** — no public pricing; Silver/Gold/Platinum tiers, **three-technician minimum**, pricing varies by plan tier and number of technicians on the mobile app — <https://www.inspectpoint.com/resources/articles/how-inspect-point-pricing-works>; listed on GetApp with no price — <https://www.getapp.com/all-software/a/inspect-point/>
- **Fire Inspect Hub** — NFPA 10/25/72 workflows, **$828/user/year** professional tier — <https://www.capterra.com/p/10037388/Fire-Inspect-Hub/>
- **ServiceTrade** — "Contact Us" at 10 technicians — <https://www.g2.com/compare/buildops-vs-servicetrade>
- **BuildOps** — ~**$50/user/mo** up to 10 users, ~$40–45 at higher seat counts `[third-party estimate]` — <https://datadrivenaec.com/tools/buildops>
- **Zigaflow**, **FieldProxy** — both explicitly sell "replace the spreadsheet / automated backflow testing reminders and compliance calendars" — <https://www.fieldproxy.ai/automations/fire-backflow-testing>, <https://zigaflow.com/industries/fire-security/fire-sprinkler-contractors>
- **Free-bundling killer**: recurring-maintenance scheduling is a standard feature of general field-service SaaS (Jobber, ServiceTitan, BuildOps). I could not pull Jobber/ServiceTitan pricing (search budget exhausted), but the feature is table stakes there.

### REAL COMPLAINTS
Verbatim, trade forums:
1. > "requirements vary greatly from state to state and even between municipalities within the same state" — HVAC-Talk, on backflow testing requirements — <https://www.hvac-talk.com/threads/backflow-certification.1688231/>
2. > "tested once a year as dictated by code" — plbg.com plumbing forum — <https://www.plbg.com/forum/read.php?1,307186>

Also verbatim, from a solicitation specifying what contractors must deliver: inspections must produce "computer-generated reports within ten days of each inspection" — <https://www.bidnetdirect.com/public/supplier/solicitations/statewide/443103824220/abstract> — evidence the paperwork burden is contractually imposed, not optional.

No complaint threads found about *tracking* due dates (searches on contractor forums returned only vendor pages and bid documents).

### AUDIENCE SIZE & WEALTH
AFSA figures conflict across its own properties: "over 1,500" (media kit, most recent) — <https://mediakit.multiview.com/AFSA>; "more than 1,000 member companies" (mission page) — <https://firesprinkler.org/?p=284>; "approximately 750" (dated third-party) — <https://pipingsystems.wpengine.com/affiliations-and-certifications/>. AFSA reached 1,000 dues-paying members in Sept 2007 — <https://www.fireengineering.com/fire-safety/afsa-reaches-1000-member-mark/>. **AFSA membership ≠ contractor count**; it includes manufacturers, suppliers and government. **True NAICS 238220 count not obtained.** Audience is likely low tens of thousands of firms — small.

### WHERE THEY GATHER
- AFSA — <https://firesprinkler.org/>; NFSA (not verified this session)
- American Backflow Prevention Association (ABPA) — not verified
- HVAC-Talk — <https://www.hvac-talk.com/> (working, indexable)
- plbg.com, terrylove.com plumbing forums — <https://www.plbg.com/forum/>, <https://terrylove.com/forums/>
- r/SprinklerFitters, r/pipefitter — member counts **not obtainable** (reddit blocked; libreddit mirror also unreachable)
- Fire Engineering — <https://www.fireengineering.com/>

### iOS-FIT CHECK
**4/5 — genuinely good, which makes the kill painful.** An owner-operator with a phone in a mechanical room is the ideal user: one person, field-first, taking photos, logging a test, exporting a PDF report to the AHJ. No counterparties strictly required. This is the best phone fit in the construction half of the cluster.

### BUILDABILITY
The app shell is a clean one-week build: Site → Device → Interval → next-due computation → local notification → PDF test report export. The blocker is entirely content: we cannot ship NFPA 25/10/96 frequency tables (copyright) and we cannot ship municipal backflow due-date rules (no public dataset, no licensing allowed). Shipping with blank user-entered intervals removes the only reason to pay us rather than use InspectOps at $29/mo *with* the NFPA templates.

### VERDICT: **KILL**
**Single biggest failure reason: the rule set is unbuildable under our constraints — NFPA intervals are copyrighted/paywalled and municipal backflow deadlines have no public dataset — while InspectOps already sells a $29/mo mobile app that legitimately ships those templates.**

**Scores: pain-$ 3 | wealth 3 | comp weakness 3 | buildability 2 | reachability 3 | WTP 3 | phone fit 4**

---

# NICHE 4 — Property managers / HOA boards

### ICP (one line)
Volunteer HOA treasurer/board member at a 50–400 unit association, or a self-managing board, responsible for reserve studies, annual budget disclosures, inspection intervals and state registration renewals. Wealth signal: the association pays, not the volunteer — and the volunteer has no budget authority to buy an app on a phone, which is the core problem. FCAR: **~369,000 community associations, 77.1 million residents (2024 Fact Book)**, rising to **373,000 associations and 78.1 million residents (2025 Statistical Review)** — <https://foundation.caionline.org/publications/factbook/statistical-review/>, <https://natlawreview.com/press-releases/us-surpasses-373000-community-associations-housing-model-reaches-new-heights>, <https://www.caionline.org/new-housing-report-shows-73-9-million-americans-reside-in-homeowners-association-and-condominium-com>.

### THE EXPENSIVE MISTAKE
**No verified dollar figure found.** This is the niche's fatal weakness. California's Davis-Stirling obligations are disclosure duties with no specified monetary penalty in anything I could source; the consequence of a missed reserve study is articulated only as a fiduciary-duty exposure, and only as a forum poster's **opinion**: "ignoring the advice of experts could very easily constitute a breach of fiduciary duty" — <https://www.hoatalk.com/topics/103517/reserve-studiesfunds-101>. Florida's consequence for not funding reserves is a **disclosure** statement on the budget, not a fine — <https://www.hoatalk.com/topics/8601/fl-whose-responsibility-is-it-to-calculate-reserve>.

I could not source any fine schedule, elevator/boiler inspection penalty, or lender-document consequence with a dollar amount. **Pain-$ cannot be scored above 2 on evidence.**

### THE RULE SET
Good quality where it exists — public, stable statute, free:
- **CA Civ. Code §5300(a)** — annual budget report to members **30–90 days before fiscal year end** — <https://gocodebook.com/us/california/hoa-budget-and-reserves> `[secondary]`
- **CA Civ. Code §5300(b)(3)** — annual summary of the reserve funding plan, with notice the full plan is available on request — <https://findhoalaw.com/reserve-disclosures/> `[secondary]`
- **CA Civ. Code §5550** — reserve study with diligent visual site inspection **at least every 3 years**; a vendor argues the board must *review* it annually — <https://www.reservestudy.com/resources/blog/is-a-reserve-study-required-annually-in-california/> `[vendor interpretation, explicitly contested]`
- **CA Civ. Code §5565** — required contents: current estimated replacement cost, estimated remaining life, estimated useful life of each major component — <https://california.public.law/codes/ca_civ_code_section_5565>
- **CA Civ. Code §5551** — condo balcony/deck inspections **at least once every 9 years** — <https://gocodebook.com/us/california/hoa-budget-and-reserves> `[secondary]`
- **Virginia** — reserve study at least every **5 years**, board reviews results annually — <https://hoatalk.com/topics/317589/is-reserve-funding-mandatory-in-wa> `[forum quoting statute]`
- **Washington** — forum posters **actively disagree** on whether it is every 3 years or annual — same thread. Rules also yield to governing documents where those are "more stringent," meaning per-association CC&Rs override the statute. **A deterministic engine cannot compute from documents it has never seen.**

### INCUMBENTS
- **Vantaca**, **BuildingLink** — named in brief; **no pricing or rating data obtained** (capterra/g2 blocked).
- **PropFusion**, **ReserveStudy.com**, **CommunityPay** — reserve-study vendors publishing free state-comparison content — <https://www.propfusion.com/reserve-studies/california>, <https://www.communitypay.us/blog/hoa-reserve-study-requirements-wa-or-ca-comparison/>
- **FindHOALaw** — free statute-indexed deadline reference — <https://findhoalaw.com/reserve-disclosures/>
- Free-bundling killer: full-stack community-management platforms (Vantaca, AppFolio, Buildium) include calendars and compliance tasks; a board that has a manager already has this.

### REAL COMPLAINTS
Verbatim, HOATalk (real board members):
1. > "a reserve study professional is required to perform a reserve study every third year" vs. another poster in the same thread: > "a reserve study must be undertaken each year per Washington Law" — <https://hoatalk.com/topics/317589/is-reserve-funding-mandatory-in-wa> (the confusion itself is the complaint)
2. > "ignoring the advice of experts could very easily constitute a breach of fiduciary duty" — <https://www.hoatalk.com/topics/103517/reserve-studiesfunds-101>

### AUDIENCE SIZE & WEALTH
373,000 associations (2025, FCAR). Large count, but the buyer is a **volunteer with no card and no budget authority**, and turnover is annual.

### WHERE THEY GATHER
- HOATalk.com — active, indexable, **not blocked** — <https://www.hoatalk.com/>
- Community Associations Institute (CAI) — <https://www.caionline.org/>; FCAR — <https://foundation.caionline.org/>
- IREM (named in brief) — not verified
- r/HOA — member count not obtainable (blocked)

### iOS-FIT CHECK
**2/5.** Split ICP: a volunteer treasurer is single-user and could use a phone, but the actual artifacts (budget report distribution to 300 members, reserve-study procurement, lender document packages) are multi-party office workflows. Professional property managers are definitively multi-user office. And the governing-documents override means the app cannot compute the user's real deadline without reading their CC&Rs.

### BUILDABILITY
Shell is easy (state picker → statutory deadline set → notifications → PDF compliance calendar). But the ruleset is 50 states of disclosure law where secondary sources openly contradict each other on the simplest question (how often is a reserve study required in Washington), plus a per-association override we cannot see. And telling a board "your reserve study is overdue and you may be breaching fiduciary duty" is regulated advice.

### VERDICT: **KILL**
**Single biggest failure reason: no verified dollar cost for a single miss — the pain is disclosure/fiduciary-shaped, not invoice-shaped — and the buyer is an unpaid volunteer with no purchasing authority.**

**Scores: pain-$ 2 | wealth 3 | comp weakness 3 | buildability 3 | reachability 3 | WTP 2 | phone fit 2**

---

# NICHE 5 — Government-contracting small businesses ⭐ TOP PICK

### ICP (one line)
Owner or sole business-development/contracts person at a 1–50 person federal contractor (8(a)/HUBZone/WOSB/SDVOSB or plain small business) with $500k–$20M in federal revenue, personally responsible for SAM.gov renewal, set-aside recertifications and annual representations. Wealth signal: these firms hold federal prime contracts — a single lost award is six or seven figures, and GAO case law below shows awards being forfeited over a one-day paperwork lapse, which is the clearest "money at stake" evidence in this entire cluster.

### THE EXPENSIVE MISTAKE
**The best-documented, highest-magnitude single-occurrence loss in the cluster: you lose the award.**

- **GAO, TLS Joint Venture, B-422275 (April 2024)** — the awardee **filed its renewal before expiration**, but SAM activation came through the **next day**. GAO found this to be a lapse in SAM registration violating **FAR 52.204-7**, and placed on agencies a requirement to proactively check SAM status during the evaluation period. **A one-day gap cost the award.** — <https://www.mayerbrown.com/en/insights/publications/2024/04/us-gao-decision-shows-danger-of-allowing-sam-registration-to-lapse-during-solicitation-period>, <https://smallgovcon.com/gaobidprotests/gao-dont-slip-up-on-sam-registration-even-for-one-day/>
- **Government processing delay is not an excuse.** "both GAO and the COFC have found that the current language in FAR 52.204-7 mandates severe impacts on contractors having SAM registration issues, even where Government processing delays are the cause" — <https://wiley.law/alert-SAM-Registered-I-Am-Part-2-Contractors-Beware-of-Lapses-in-SAM-Registration>. The system "can take days (or even weeks) to display an active status."
- **GAO, Prak Industries, LLC, B-422517 (July 2024)** — a **joint venture** was found ineligible for award because the JV entity itself was not registered in SAM, even though both member firms were — <https://wifcon.com/discussion/index.php?/blogs/entry/5958-gao-reminder-joint-ventures-must-register-on-sam/>
- Once inactive, "it can no longer place bids or receive contract awards from federal agencies" — <https://rsmus.com/insights/industries/government-contracting/the-critical-role-of-sam-registration-for-federal-contractors.html>

Arithmetic **(estimate)**: loss on one occurrence = the full value of the award in hand. For a small-business set-aside, **$250,000–$5,000,000 is the normal range** (my estimate — I could not reach sam.gov or usaspending.gov to source a median small-business award value; **flag for verification**). Even at the bottom of that range, one occurrence is **~$250,000 — four orders of magnitude above any subscription price.** Plus the sunk proposal cost (typically tens of thousands of dollars of unpaid labour) is written off entirely.

**Note the asymmetry that makes this a product**: the firm did the work, won the evaluation, and lost on a calendar date. That is exactly the emotional shape that makes someone pay for a reminder.

### THE RULE SET
**The best ruleset in the cluster: federal, uniform nationwide, public, free, stable, and genuinely date-arithmetic.**
- **FAR 52.204-7** — SAM registration required at offer submission and through award; cited as the operative clause in TLS JV — <https://www.mayerbrown.com/en/insights/publications/2024/04/us-gao-decision-shows-danger-of-allowing-sam-registration-to-lapse-during-solicitation-period> `[secondary]`
- **Registration is valid 365 days from activation**; renewal is **not automatic**; "updates in SAM.gov during the year will reset the clock for the renewal period" — <https://crowell.com/en/insights/client-alerts/check-your-sam-registration-early-and-often> `[secondary]`. **This reset rule is a real computation** — a naive calendar reminder gets it wrong, our engine would not.
- Only a fully validated, government-confirmed **"Active"** status counts; a submitted renewal does not — <https://blogs.usfcr.com/when-a-sam-registration-lapse-costs-you-the-award> `[vendor]`
- Professional guidance converges on a **60–90 day** early-renewal buffer (USFCR) / **"at least two months prior to the expiration date"** (RSM) — <https://rsmus.com/insights/industries/government-contracting/the-critical-role-of-sam-registration-for-federal-contractors.html>. **This buffer is the product's core value: a tiered 90/60/30/14/7/1-day escalation.**
- **Joint ventures are separate registrable entities** (Prak Industries) — a non-obvious rule our engine can encode.
- **8(a) annual review, HUBZone recertification, WOSB/SDVOSB annual attestation, annual representations, CPARS windows, FAR flow-downs** — **NOT VERIFIED THIS SESSION.** My planned search on 13 CFR 124.112 / HUBZone 13 CFR 126 was cut off by the search budget, and ecfr.gov/sba.gov were unreachable. These are public, free, federal and almost certainly suitable, but **someone must verify the specific intervals before build.** Flagged as the main open research task.
- **No paywalled standards. No purchased datasets. All text is US Government work.** This is the cleanest possible position for our "no data licensing" constraint.

### INCUMBENTS
**The weakest incumbent field in the cluster — closest thing to blue ocean here.**
- **No established deadline-tracking app or SaaS found for this job.** Searches surfaced only: registration *services* (USFCR — they do the filing for you, a service not a tool — <https://blogs.usfcr.com/>), law-firm alert newsletters, and accounting/ERP (Unanet, Deltek) which is financial not calendar.
- **ExpiresOS** — an apparently nascent product with a page literally titled "Built for government contractors" — <https://expiresos-web.onrender.com/government-contractors>. Hosted on a free Render subdomain, which suggests a very early solo project, **not a funded incumbent**. Validates demand; does not block us.
- **SAM.gov/GSA itself sends renewal reminders** — this is the main competitive threat and must be addressed honestly. Mitigations supported by evidence: (a) the reminders go to the registered account email, and the "most common cause of a lapse [is] the account manager leaving the company" — <https://blogs.usfcr.com/when-a-sam-registration-lapse-costs-you-the-award> `[vendor]` — i.e. the official reminder reliably goes to a dead inbox; (b) GSA does not remind you about the **365-day reset**, your **8(a) annual review**, your **HUBZone recert**, your **CPARS response window**, or your **JV's separate registration**; (c) phishing is rampant — states warn "there is no fee associated with registration or renewal in SAM" and "any request for payment should be considered fraudulent" — <https://www.psats.org/?p=8426> — so contractors have learned to distrust renewal emails, which is exactly why a trusted local app with no email dependency is valuable.
- **No free vertical-SaaS bundling found.** This is unusual and is the main reason this niche scores well.

### REAL COMPLAINTS
Verbatim:
1. > "it can be easy to overlook registering a joint venture entity on SAM, when contractors making up the joint venture are already registered on SAM" — SmallGovCon on Wifcon — <https://wifcon.com/discussion/index.php?/blogs/entry/5958-gao-reminder-joint-ventures-must-register-on-sam/>
2. > "Contractors must not let their SAM registration lapse at all, even when renewal information was already submitted" — SmallGovCon — same URL
3. > "the system can take days (or even weeks) to display an active status" — Wiley law alert — <https://wiley.law/alert-SAM-Registered-I-Am-Part-2-Contractors-Beware-of-Lapses-in-SAM-Registration>

**Caveat on quote quality**: these are practitioner-facing law-firm and industry commentary, **not individual small-business owners venting**. r/govcon and r/GovernmentContracting are the natural source for the latter and were completely inaccessible (reddit blocked at API level). **Before committing, someone must read 20 r/govcon threads on SAM renewal.** This is the single most important unverified item for this niche.

### AUDIENCE SIZE & WEALTH
- **r/GovernmentContracting: ~44k members** `[GummySearch snapshot, stale]` — <https://gummysearch.com/r/GovernmentContracting>; r/defensecontracting ~11k — <https://gummysearch.com/r/defensecontracting>. r/govcon itself: count not obtainable.
- **Total count of active SAM registrations: NOT OBTAINED** (sam.gov unreachable). This is a material gap — the TAM number is missing. Known qualitatively: it is in the hundreds of thousands of registered entities, of which a large majority are small businesses.
- Wealth: firms with federal primes have real revenue and a demonstrated willingness to spend on compliance (USFCR and similar charge for registration services that SAM provides free — proof of willingness to pay for de-risking paperwork).

### WHERE THEY GATHER
- **Wifcon forums and blogs** — "27 Years Online", the serious practitioner forum, indexable and **not blocked** — <https://wifcon.com/discussion/>
- **SmallGovCon** (Koprince Law) — the dominant free newsletter in the niche — <https://smallgovcon.com/>
- r/govcon, r/GovernmentContracting (~44k), r/defensecontracting (~11k) — **reddit inaccessible for verification**
- APEX Accelerators (formerly PTACs) — free state-level counseling centres, every state, and a natural cheap distribution channel
- Law-firm alert lists: Wiley, Crowell, Mayer Brown, PilieroMazza — free, and they shape what this audience worries about
- Conferences: SBA-adjacent matchmaking events, GovCon Summit — not verified

### iOS-FIT CHECK
**5/5 — the best in the cluster, and it clears every constraint.**
- **Single user**: the owner or the one contracts person. Nobody else needs an account.
- **Small, bounded dataset**: one SAM registration date, a handful of set-aside recert dates, annual reps, a few CPARS windows, maybe a JV entity. **Tens of dates, not thousands of records** — ideal for SwiftData with no backend.
- **No counterparties to chase.** Nothing to collect from anyone.
- **Phone-first is natural**: push notification 90/60/30/14/7/1 days out, tap to open sam.gov.
- **No hardware, no marketplace, no purchased data.**
- Honest caveat: it is "phone-adequate" rather than "phone-delightful" — the renewal itself happens on a desktop at sam.gov. But the *job we sell* (never be surprised by a date) is pure notification, which is the phone's home turf.

### BUILDABILITY
Clean one-week v1. SwiftData models: Entity (UEI, registration activated date, 365-day expiry, JV flag) → Obligation (type, interval, next due) → escalation schedule. Deterministic engine: 365-day expiry with the "any update resets the clock" rule, plus the 90/60/30/14/7/1 notification ladder, plus annual set-aside recert anniversaries. StoreKit 2 subscription. On-device PDF export of a one-page "compliance calendar" the owner can hand to a prime or a banker — a strong, cheap differentiator. App-Store-safe by construction: it organises the user's own dates and computes from published federal rules; it never certifies status, never advises, and should carry a clear "this does not replace checking SAM.gov" disclosure. The only real work is researching the recert intervals — which is reading, not engineering.

### VERDICT: **PURSUE**
**Single biggest failure reason (if it fails): GSA already emails renewal reminders, so we are selling insurance against an email going to the wrong inbox — the pitch must be the dates GSA does *not* remind you about (365-day reset, 8(a) annual review, HUBZone recert, CPARS windows, separate JV registration) or it collapses into a feature of SAM.gov.** Secondary risk: audience may be too small in absolute terms; TAM not verified.

**Scores: pain-$ 5 | wealth 5 | comp weakness 4 | buildability 4 | reachability 4 | WTP 4 | phone fit 5**

---

# NICHE 6 — Food businesses (food trucks, caterers, ghost kitchens)

### ICP (one line)
Owner-operator of 1–3 food trucks or a small caterer working events across 3–10 counties, juggling per-jurisdiction health permits, commissary agreements, event permit lead times and food-handler certificates. Wealth signal — **and this is the problem**: average annual revenue **$346,000 with a 6.2% profit margin** in 2024 — <https://www.therestauranthq.com/trends/food-truck-industry-statistics/> — i.e. ~$21,500 of annual profit. **This is the poorest ICP in the cluster.**

### THE EXPENSIVE MISTAKE
Shut down mid-service because you crossed a county line without that county's permit. Well-documented pattern, no fine schedule found:

- **Bellevue, WA** — a truck held a valid Snohomish County permit and was **closed by King County inspectors** anyway, because Washington health departments issue separate permits: "The truck has a valid food permit in another county, but Hsue did not realize that he needed a King County permit to serve food in the area." It reopened only after obtaining the King County permit — <https://www.bellevuereporter.com/?p=23378>
- **King County closure list** records trucks shut for "Operating without a valid permit" alongside missing handwashing and "no approved commissary kitchen" — <https://cd10-prod.kingcounty.gov/ko-kr/dept/dph/health-safety/food-safety/food-establishment-closures/bellevue>
- **Hawaii** — a truck that stopped using its support kitchen got a red placard and had to apply for an entirely new permit before reopening — <https://staradvertiser.com/?p=1322399>
- **Mason County, WA** — a truck shut down three times in a year **lost its permit** and "is not eligible for a new permit for at least six months" — <https://www.masoncounty.com/story/2026/08/13/news/food-truck-closed-for-safety-violations/7635.html>
- **Illinois** — closed for operating without a city food licence, still closed weeks later — <https://cu-citizenaccess.org/?p=1001606>
- **Prunedale, CA** — an operator ceased operations entirely over a health-permit dispute — <https://kioncentralcoast.com/news/top-stories/2024/04/11/tacos-el-jerry-closing-their-operations-in-prunedale-over-health-permit-dispute/>

Arithmetic **(estimate)**: $346,000/yr ÷ 365 = **$948/day of revenue** <https://www.therestauranthq.com/trends/food-truck-industry-statistics/>. One lost Saturday at a booked event is worse than average — call it 2–3x a normal day, **~$2,000–2,800 for one occurrence**, plus the event deposit and the reputational hit with the event organiser. The Mason County six-month ineligibility case = 180 × $948 = **~$171,000 (estimate)** — business-ending, but that is a repeat-offender outcome, not a single missed date. **Realistic single-occurrence figure: ~$2,000–2,800 (estimate).** No fine schedule found despite targeted searching.

### THE RULE SET
**Weak. Mostly unbuildable as a deterministic engine.** Health permits are issued per county and per city, with thousands of independent jurisdictions, each with its own renewal date, inspection cycle, commissary-letter requirement and event lead time. There is no public machine-readable national dataset and we cannot license one. The Bellevue case proves the rule that matters is purely jurisdictional ("you need a separate permit per county"), which is a *concept* to teach, not a date to compute.

What *is* computable from user-entered data: renewal dates, inspection anniversaries, food-handler/ServSafe certificate expiries, commissary agreement end dates, and **event permit lead times counted backwards from an event date** — the last of these is the only genuinely interesting computation (an app that says "to work the Aug 12 festival in County X you must apply by July 13"). Cottage-food rules and ServSafe's renewal interval were **not verified this session** (search budget).

### INCUMBENTS
**No vertical permit-deadline product found for this niche.** Genuinely open field. Competitors are Google Calendar, a shoebox of paper permits, and the taped-up permit itself. Food-truck POS/ops tools exist but none surfaced as doing permit deadlines.

### REAL COMPLAINTS
This is a weak spot — I found **news coverage of operators being shut down but no verbatim operator complaints about tracking deadlines.** Reddit (r/foodtrucks) was inaccessible, and no food-truck forum surfaced in searches.

Closest to verbatim, reported in direct speech by the Bellevue Reporter:
1. > "The truck has a valid food permit in another county, but Hsue did not realize that he needed a King County permit to serve food in the area." — <https://www.bellevuereporter.com/?p=23378>
2. An inspector-side account of the scale of the problem: food stands are "the latest challenge for restaurant inspectors" — <https://www.foodsafetynews.com/2019/06/food-stands-are-latest-challenge-for-restaurant-inspectors/>

**Honest assessment: no verbatim complaints found from operators about deadline tracking specifically.**

### AUDIENCE SIZE & WEALTH
- **Business count is unreliable — sources conflict badly.** IBISWorld July 2025: **92,257 businesses**, +16.9% from 2024 — <https://script.ibisworld.com/united-states/number-of-businesses/food-trucks/4322>. IBISWorld April 2025 snapshot: **64,495**. Industry blog: **58,064 in 2024** — <https://www.therestauranthq.com/trends/food-truck-industry-statistics/>. The IBISWorld jump reflects a **dataset revision**, not growth; its 2025 "employment" figure (92,258) is suspiciously identical to its business count and should not be trusted.
- Industry revenue **$2.8bn (2026)** — <https://static.ibisworld.com/united-states/industry/food-trucks/4322>. Across ~92k businesses that is ~$30k each, which contradicts the $346k average — **the datasets are not combinable.**
- Wealth verdict: **2/5.** $346k revenue at 6.2% margin. These operators are cash-poor and famously churn-prone.

### WHERE THEY GATHER
- Mobile Cuisine, Food Truck Empire, Roaming Hunger — content sites rather than communities; none verified as forums this session
- r/foodtrucks — **no member count obtainable** (blocked), and searches returned nothing
- National Food Truck Association, state food-truck associations — not verified
- Local Facebook groups per metro (named in brief as a channel) — **not verified; member counts unobtainable**
- **Reachability is good in principle** (trucks are physically findable, metro Facebook groups are cheap) but I could not verify a single named community with a member count. Score 4 reflects theoretical cheapness, not verified channels.

### iOS-FIT CHECK
**5/5.** Perfect on paper: one owner, phone is the only computer they have, works in a truck, photographs permits, needs a notification not a dashboard. No counterparties. Exactly the shape we want.

### BUILDABILITY
Easy. Permit entity + jurisdiction + expiry + photo, local notifications, reverse-counted event lead times, PDF "permit binder" export for an inspector at the window — that last feature is genuinely useful and demoable. One week is comfortable. The problem is not build, it is that we would be shipping a well-made reminder app with no rules moat to people with $21,500 of annual profit.

### VERDICT: **PARK**
**Single biggest failure reason: willingness to pay. 6.2% margins on $346k revenue, and the "rule set" is thousands of unlicensable local ordinances, leaving us with a no-moat reminder app sold to the poorest ICP in the cluster.** Worth revisiting only if someone finds verified evidence of operators paying for ops tools.

**Scores: pain-$ 3 | wealth 2 | comp weakness 4 | buildability 4 | reachability 4 | WTP 2 | phone fit 5**

---

# NICHE 7 — DOT-regulated small fleets and non-CDL commercial fleets ⭐ TOP PICK

### ICP (one line)
Owner-operator or owner of a 1–6 truck carrier (or a non-CDL commercial fleet: landscaping, plumbing, towing, hotshot) who is personally the safety director, responsible for driver qualification files, annual vehicle inspections, IFTA, UCR, Form 2290, the drug-and-alcohol consortium and annual Clearinghouse queries. Wealth signal: owns revenue equipment worth $50k–$200k per truck and cannot operate a day without it; FMCSA reports **~5.6 million vehicles operating interstate and 3.4 million intrastate** (snapshot 30 Dec 2022) — <https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/2023-12/FMCSA%20Pocket%20Guide%202023-FINAL%20508.pdf>. **Carrier-count-by-fleet-size was not obtained** (the 2024 Pocket Guide PDF excerpt did not contain the breakdown and fmcsa.dot.gov was unreachable for direct fetch) — flagged.

### THE EXPENSIVE MISTAKE
Multiple independent, hard-dated failure modes — this is the densest deadline surface in the cluster. **All penalty figures below are vendor-sourced and conflict; they must be verified against 49 CFR 386 App. B before any marketing use.**

- **Missed annual Clearinghouse query.** Figures found: **$5,833/violation** (attributed to a DOT setting in early 2021) — <https://heavyvehicleinspection.com/industries/transportation/drug-alcohol-clearinghouse-compliance-queries>; **~$7,155 max**; **$6,386 per missed query**; "more than $6,200 for each Clearinghouse violation" — <https://heavyvehicleinspection.com/blog/post/fmcsa-clearinghouse-query-guide-2026>. One source lists $2,500 (clearly outdated) and another "$16,000 max per violation per day" (unverifiable). `[all vendor-sourced, unverified]`
- **Enforcement is real and common**: in FY2022, failing to run a pre-employment Clearinghouse query and failing to run an **annual** Clearinghouse query were **both among the top five audit violations** — <https://jjkellercompliancenetwork.com/news/avoid-these-common-clearinghouse-violations>. These are not "acute" or "critical" so they don't hit the safety rating, "however, they can lead to significant monetary penalties."
- **No small-fleet exemption**: "Every CDL driver — no fleet size exemption" — <https://heavyvehicleinspection.com/blog/post/fmcsa-clearinghouse-query-guide-2026>
- **DQ file gaps** reportedly make up "nearly 12% of all FMCSA violations"; cited ranges **$1,270 to $10,000+ per driver per violation**, with an "average fine around $5,000" — <https://heavyvehicleinspection.com/blog/post/cost-dot-audit-failure-fleet-business-impact>, <https://oxmaint.com/industries/fleet-management/driver-qualification-file-dq-expiration-alert-fleet-guide> `[vendor-sourced, unverified]`
- **Missed annual vehicle inspection**: claimed max civil penalty **$16,000**, and "an expired or missing inspection decal is treated as an automatic out-of-service order" — <https://oxmaint.com/industries/fleet-management/annual-dot-inspection-16000-fine-fleet-guide-2026> `[vendor-sourced, unverified]`
- **Expired medical card** → driver is disqualified and "most likely would be placed out of service" — a truck parked at the roadside with a load on it.
- **IFTA late filing**: **$50 or 10% of tax due, whichever is greater**, plus ~1%/month interest from the original due date; repeated violations → licence suspension then revocation. **A zero-activity quarter still requires a return**, and failing to file a zero return "carries the same penalties as not filing at all." Nevada adds administrative late fees of **$100 first time, $500 second** — <https://otrucking.com/resources/guides/ifta-penalties-and-fines/>
- **Form 2290 late** → no stamped Schedule 1, which "is required to be able to obtain your vehicle's tags and registration" — <https://www.expresstrucktax.com/?p=9173> — i.e. the truck cannot be legally registered.

Arithmetic for ONE realistic occurrence **(estimate)**: a 3-truck carrier gets a compliance review having missed its annual Clearinghouse queries for 3 drivers. At the mid-range figure of $6,386/query × 3 = **$19,158**, plus a truck placed out of service over a lapsed annual inspection decal — one day down at a commonly cited $800–1,200/day of tractor revenue (**my estimate, unsourced**) = **~$20,000 for one occurrence.** Even taking the most conservative published figure ($5,833 × 1 query = $5,833), **one occurrence is 50–100x an annual subscription.**

### THE RULE SET
**Outstanding — the best technical fit in the cluster. Federal, uniform across all 50 states, free, public-domain, and pure date arithmetic.**
- **49 CFR Part 391** — driver qualification files; **§391.51** required file contents (including the medical examiner's certificate); **§391.41** current medical certificate required to operate — <https://www.thetruckersreport.com/truckingindustryforum/threads/driver-qualification-file.2504647/> `[secondary, forum quoting CFR]`
- **49 CFR §396.17** — periodic (annual) inspection; **records retained 14 months** — <https://heavyvehicleinspection.com/article/dot-inspection-record-errors> `[secondary]`
- **49 CFR §382.701** — annual Clearinghouse query for every CDL driver `[cited across vendor sources; section number not independently verified]`
- **49 CFR Part 386 App. B** — the civil penalty schedule, inflation-adjusted annually. **Must be read directly; this is the authority for every dollar figure above and I could not reach it.**
- **IFTA quarterly due dates: April 30, July 31, October 31, January 31** — consistent across sources — <https://otrucking.com/resources/guides/ifta-quarterly-due-dates/>. Weekend rollover exists but **sources disagree on whether IFTA follows the same weekend rule as Form 2290**, and one explicitly warns against assuming it does — <https://heavyvehicleinspection.com/blog/post/ifta-fuel-tax-reporting-guide-2026-fleets>. **Our engine should surface the base-jurisdiction caveat rather than assert a rolled date** — good, honest product behaviour.
- **Form 2290: tax year July 1 – June 30, filing deadline August 31** — <https://www.expresstrucktax.com/?p=9173>
- **UCR**: annual registration — **fee schedule and deadline NOT VERIFIED** (search budget exhausted; the one SC DMV source did not include the content) — <https://dmv.sc.gov/sites/scdmv/files/2026-02/Motor%20Carrier%20Winter%202026-Updated.pdf>
- Drug-and-alcohol consortium enrolment, hazmat registration: intervals **not verified this session**.
- **Zero paywalled standards. Zero purchased datasets.** Everything is US Government work in the public domain. **This is the single strongest point in favour of this niche.**

### INCUMBENTS
- **Foley** — DQ file management and Clearinghouse services; service bureau, not an app — <https://www.foley.io/driver-qualification-files>, <https://www.foleyservices.com/articles/the-importance-of-auditing-your-driver-files>
- **J.J. Keller** — the 800-pound gorilla of DOT compliance: publications, managed services, software, and a free "Compliance Network" content arm — <https://jjkellercompliancenetwork.com/>. **Main competitive threat.** Enterprise/SMB SaaS and subscription services, not a $5/mo iOS app.
- **Lytx** — added a Clearinghouse management *service* — <https://www.automotive-fleet.com/10137421/lytx-adds-drug-and-alcohol-clearinghouse-management-service>
- **Tenstreet, Fleetio** — named in brief; **no pricing or rating data obtained** (blocked).
- **Pricing not obtained for any incumbent** — this is a real gap. The qualitative finding is consistent: every player in this space sells **multi-seat SaaS or a managed service priced per driver**, aimed at fleets with a dedicated safety director. **I found no cheap, single-user, phone-first product for the 1–6 truck owner who *is* the safety director.** That gap is the opportunity.
- **Free-bundling check**: ELD vendors bundle HOS, and some bundle maintenance reminders, but DQ-file/Clearinghouse/IFTA/2290 date tracking did not surface as a free bundled feature. **Not fully verified — worth one more search.**

### REAL COMPLAINTS
Verbatim, TheTruckersReport (real drivers and small carriers — a large, active, indexable forum):
1. > "There's no set infraction what I could find. You are disqualified to drive. Most likely you would be placed out of service." — on driving with an expired medical card — <https://www.thetruckersreport.com/truckingindustryforum/threads/driving-with-expired-medical-card.192026/>
2. > "ALL carriers are required to create and maintain driver qualification files. In fact, they can get fines if these files are not exactly as required by part 391." — <https://www.thetruckersreport.com/truckingindustryforum/threads/driver-qualification-file.2504647/>
3. > "The new entrant audit is normally educational in nature unless a serious violation (no drug test or not a valid license) is discovered." — <https://www.thetruckersreport.com/truckingindustryforum/threads/new-entrant-safety-audit-mvr.2431520/>
4. Direct evidence of confusion worth paying to resolve — posters flatly contradict each other on whether a medical-card grace period exists: one says "there is no grace period for the medical card," another asserts a one-year grace period (unsourced) — <https://www.thetruckersreport.com/truckingindustryforum/threads/expired-medical-card.2418656/>

Also note thread titles that are themselves the complaint: **"Dot audit coming!! Help please!!"** — <https://www.thetruckersreport.com/truckingindustryforum/threads/dot-audit-coming-help-please.228122/page-2>

**Quote quality here is the best in the cluster**: real small-carrier operators, in their own words, on a public indexable forum, demonstrably confused about exactly the dates our app would compute.

### AUDIENCE SIZE & WEALTH
- **r/Truckers: ~342k members** (GummySearch, updated 2026-06-02), with another snapshot at 309k `[stale third-party]` — <https://gummysearch.com/r/Truckers/>; r/HotShotTrucking also exists — <https://gummysearch.com/r/HotShotTrucking>
- FMCSA: ~5.6M interstate + 3.4M intrastate vehicles (Dec 2022 snapshot) — <https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/2023-12/FMCSA%20Pocket%20Guide%202023-FINAL%20508.pdf>. **Carrier count by fleet size not obtained** — the key TAM number is missing, though it is widely understood that the large majority of US carriers run fewer than 6 trucks. **Verify.**
- Wealth: **3/5 — the honest weak point.** Small carriers are asset-rich and cash-thin, with high churn and well-known price sensitivity. They do, however, already pay for consortium enrolment, IFTA filing services, 2290 e-filing and ELDs — a demonstrated pattern of paying small recurring amounts to make compliance go away. That pattern is what supports WTP 4 despite wealth 3.

### WHERE THEY GATHER
- **TheTruckersReport forum** — very large, very active, indexable, **confirmed accessible via search** — <https://www.thetruckersreport.com/truckingindustryforum/>
- **J.J. Keller Compliance Network** — free content hub where this audience already goes for exactly these questions — <https://jjkellercompliancenetwork.com/>
- r/Truckers (~342k), r/HotShotTrucking — **reddit inaccessible for verification**
- OOIDA (Owner-Operator Independent Drivers Association) — the trade association for exactly this ICP; **member count not verified**, but it is the single most obvious channel
- Automotive Fleet, Overdrive, Landline (OOIDA's publication) — trade press — <https://www.automotive-fleet.com/>
- Truck shows: MATS (Mid-America Trucking Show), GATS — not verified
- **Reachability 5/5**: one enormous forum, one enormous subreddit, one trade association, one trade press cluster, all cheap and all indexable.

### iOS-FIT CHECK
**5/5 — and uniquely well-matched to the ICP's actual life.**
- **Single user by definition**: in a 1–6 truck carrier the owner *is* the safety director. There is no office and no second seat to sell.
- The user lives in a truck or a pickup. **The phone is their only computer.** This is not "phone-acceptable," it is phone-native.
- Small bounded dataset: ~6 vehicles × (annual inspection, registration, 2290) + ~6 drivers × (medical card, MVR, annual review, Clearinghouse query) + 4 IFTA quarters + UCR. **Roughly 40–60 dates.** Trivial for SwiftData.
- **No counterparties to chase** for the core loop. (A multi-driver fleet eventually wants to nag drivers about medical cards — but the owner can do that by text, and v1 can target the 1–3 truck case where the owner often *is* the driver.)
- No hardware (explicitly **not** an ELD — we must stay well clear of anything implying HOS/ELD compliance), no marketplace, no purchased data.

### BUILDABILITY
The strongest one-week build in the cluster. SwiftData: Carrier → Vehicle (annual inspection due, 2290 filed, registration) → Driver (medical card expiry, MVR annual review, annual Clearinghouse query date) → FilingObligation (IFTA quarters, UCR). The engine is genuine, non-trivial date arithmetic over **uniform federal rules that need no state-by-state research**: medical-card expiry → notification ladder; annual inspection anniversary; 14-month §396.17 retention clock; the four fixed IFTA dates with an honest base-jurisdiction caveat on weekend rollover; Aug 31 for 2290. Local notifications with an escalating ladder. **On-device PDF export of a DQ-file checklist and a "what the auditor will ask for" pack is the killer v1 feature** — the thread title "DOT audit coming!! Help please!!" is the demand, verbatim. App-Store-safe: it organises the user's own records and computes from public federal rules; it must never assert the user *is* compliant, never generate the regulated records themselves, and must carry a clear "not legal advice, verify against FMCSA" disclosure.

### VERDICT: **PURSUE**
**Single biggest failure reason (if it fails): price sensitivity of small carriers — these operators are cash-thin and churn hard, and J.J. Keller's free content plus a $0 spreadsheet may be "good enough" until the audit letter arrives, which is a once-every-few-years trigger rather than a daily habit.** Mitigation: the IFTA quarterly cadence and monthly medical-card/inspection horizon give the app a recurring reason to open, which pure audit-insurance would not.

**Scores: pain-$ 4 | wealth 3 | comp weakness 4 | buildability 5 | reachability 5 | WTP 4 | phone fit 5**

---

# NICHE 8 — Child-care centres, dental/medical practices, salons: licensing and record deadlines

### ICP (one line)
Office manager or owner-dentist of a 1–3 chair practice, or the director of a single-site licensed child-care centre, responsible for staff certification expiries, annual training, inspection cycles and equipment testing logs (autoclave spore tests, X-ray inspections). Wealth signal: dental practices are among the highest-income small businesses in the US (dental practice revenue/owner-income figures **not obtained this session** — ADA/census sources unreachable; **flagged**). Child care is the opposite: thin-margin, grant-dependent — <https://www.childcareaware.org/price-landscape24>.

### THE EXPENSIVE MISTAKE
**Weak. No credible dollar figure for a single occurrence was verified** — this is what caps the niche.

The best available:
- **Oregon dental board fines for spore-test records.** Oregon moved from monthly to weekly testing in 2004 but "only started to level fines against dentists in 2012." A state senator called the fines "a money grab" and claimed an oral surgeon could face **$6,000 per dentist or clinic under supervision** — <https://www.thelundreport.org/content/senator-accuses-dentistry-board-racking-violations-money-grab>. **This is a critic's characterization in a news story, not an official penalty schedule. Do not treat it as a fine amount.** Supporting detail: the Oregon board "has recently started to request the spore testing records when they receive a sterilizer-related complaint" — <https://olis.oregonlegislature.gov/liz/2014R1/Downloads/MeasureAnalysisDocument/23608>
- **California child care**: a **$100 immediate civil penalty** for failing to post a notice of site visit; training lapses are cited as Type B (corrective action, no imminent risk), while Type A citations require immediate correction and "may impose a civil penalty" — <https://readyrule.com/blog/top-10-california-daycare-citation-types> `[third-party republisher of CDSS records, not the agency]`

Arithmetic **(estimate)**: at $100–$6,000 per occurrence, with the upper figure unreliable, **one occurrence is plausibly only $100–$1,000** — the same order of magnitude as a few years of subscription. **That is not enough pain.** The real cost is reputational/licensing (a suspension), which I could not price.

### THE RULE SET
Mixed. Good for dental, poor for breadth:
- **Ohio Admin. Code 4715-20-02** — **weekly** spore test of sterilization equipment; a test is due in any week patients are treated, and a patient-free week must still be noted in the weekly spore testing log — <https://dent.osu.edu/sites/default/files/sms_2022_ce2_0.pdf> `[secondary]`. **This is a genuinely nice computation** (a conditional weekly obligation with a documented-exception rule).
- **"Thirty-five states mandate weekly biological monitoring"** — same OSU source; **this is the source's own count, not independently verified.** ADA and CDC both recommend at minimum once per week — <https://dentaltown.com/blog/post/7881/remember-testing-your-office-autoclave-isnt-optional>
- **Oregon** — weekly testing; retain records for the current year plus the two previous years — <https://olis.oregonlegislature.gov/liz/2014R1/Downloads/MeasureAnalysisDocument/23457>
- **California H&S/Civ. §1596.8662(b)(1)** — mandated reporter training, **renewal every two years** — <https://readyrule.com/violations/mandated-reporter-training-1596-8662-b-1> `[secondary]`
- **North Carolina** — infant-room staff ITS-SIDS training "must be renewed every three years" — <https://www.daycare.com/articles/licensing/how-to-start-a-daycare-in-north-carolina/>
- **Kentucky** — family child care certification "expires two years from the date of issuance" — <https://www.daycare.com/articles/licensing/how-to-start-a-daycare-in-kentucky/>
- **Texas** — records kept at least three months after an employee's last day, with an exception for annual training records; current staff records for the last full training year and current year kept on file — <https://www.daycare.com/articles/licensing/how-to-start-a-daycare-in-texas/>

**Problem**: 50 state boards × 3 unrelated professions (dental, child care, salon) = three separate products, each needing 50-state research, with no federal uniformity. No paywalled-standard risk (state admin codes are public), but the research cost is the same as Niche 1 with a tenth of the pain-$.

### INCUMBENTS
**No vertical incumbent identified** — a genuine gap, but a gap that exists partly because the pain is small. What surfaced was only generic checklist/template tooling:
- **MangoApps** — free "Dental Sterilizer Biological Spore Monitoring Log" template — <https://www.mangoapps.com/templates/inspections/dental-sterilizer-biological-spore-monitoring-log>
- **Miratag** — free "Dental Autoclave Sterilization Log" checklist template, with sign-in/free trial — <https://miratag.com/en/checklist-templates/dental-autoclave-sterilization-log-us>
- **Oxmaint** — dental equipment maintenance/compliance guides `[vendor marketing, cites no statute]` — <https://oxmaint.com/industries/healthcare/dental-clinic-equipment-maintenance-guide>
- **ReadyRule** — republishes CDSS daycare inspection records and citation analysis; free — <https://readyrule.com/blog/top-10-california-daycare-citation-types>
- **Free-bundling killer**: practice-management systems (Dentrix, Eaglesoft, Open Dental) and child-care management platforms (Procare, Brightwheel) are near-universal in these verticals and are the obvious home for staff-credential expiry tracking. **I could not verify whether they already include it — this is a critical unchecked assumption.**

### REAL COMPLAINTS
Verbatim:
1. > "staff often skip a week due to vacations, scheduling changes or a heavy patient load" — Dentaltown, on missed weekly spore tests — <https://dentaltown.com/blog/post/7881/remember-testing-your-office-autoclave-isnt-optional>. The same article's recommended fix is **"a calendar alert, a reminder posted next to the sterilizer, and giving testing responsibility to two employees instead of just one"** — i.e. the status quo is a sticky note, which is exactly the opening an app wants.
2. > "strongly recommend that you maintain at least three years worth of spore testing records" — <https://www.dentaltown.com/magazine/article/3937/autoclave-spore-testing>
3. > "A new worker showed up and proceeded to cite the provider for the room not having a permit." — Daycare.com forum, on an unexpected licensing visit — <https://forums.daycare.com/forum/main-category/daycare-center-and-family-home-forum/20645-received-citation-for-daycare-room>
4. > "a positive indicator is a process failure" — on failed spore tests — <https://www.dentaltown.com/images/dentaltown/magimages/0707/dtjul07pg52.pdf>

### AUDIENCE SIZE & WEALTH
- **Child care: 92,613 licensed centres in 2024**, up from 84,592 in 2020, +1.6% from 2023 — **but only across the 40 states with complete data**, so it is not a national total — <https://www.ffyf.org/2025/05/16/new-resource-reveals-notable-changes-in-price-and-supply-of-child-care/>, <https://www.childcareaware.org/price-landscape24>. A second source gives 92,550 — minor variance.
- Child care costs rose ~30% this decade — <https://investor.wedbush.com/wedbush/article/equities-2025-5-28-child-care-costs-in-america-have-jumped-30-this-decade-even-as-more-care-providers-opened-in-2024>
- **Dental practice count and revenue: NOT OBTAINED** (search budget exhausted; ADA and census unreachable). This is the ICP that would actually pay, and its size is unverified. **Wealth scored 4/5 on general knowledge that dental practices are high-income, not on a source in this document — treat as soft.**

### WHERE THEY GATHER
- **Dentaltown** — large, active, indexable dental forum, **confirmed accessible** — <https://www.dentaltown.com/>
- **Daycare.com forums** — active provider forum, **confirmed accessible** — <https://forums.daycare.com/>
- r/Dentistry, r/dentalhygiene, r/ECEProfessionals — **reddit inaccessible**
- ADA, state dental associations; NAEYC and state child-care associations — member counts not verified
- Note: **three different professions means three different channels**, tripling go-to-market cost for one product.

### iOS-FIT CHECK
**4/5.** The dental case is good: one office manager, a phone in the sterilization area, tap to log this week's spore test, photograph the strip result, export a 3-year PDF log when the board asks. Genuinely single-user, genuinely phone-first, no counterparties. Child care is similar. The weakness is that the *record* often must live in a physical log book near the sterilizer, so the app duplicates rather than replaces — and multi-staff practices will want shared visibility, pushing toward accounts.

### BUILDABILITY
Moderate. The dental-only v1 is clean: Sterilizer → weekly obligation with "patient-free week" exception → log entry with photo → notification → 3-year PDF export. One week is feasible **if we ship one profession and let the user pick their own interval** rather than encoding 50 state boards. Hard constraint risk: logging sterilization monitoring edges toward "certifying" infection control, which we must not do — the app must present itself strictly as the user's own record-keeping, never as proof of compliance.

### VERDICT: **PARK**
**Single biggest failure reason: the expensive mistake isn't expensive enough — the only sourced figures are a $100 civil penalty and an unreliable, journalist-reported $6,000 claim, so one occurrence costs about what a few years of subscription does.** Secondary: three professions × 50 state boards tripled go-to-market cost, and practice-management incumbents are the likely free home for this feature.

**Scores: pain-$ 2 | wealth 4 | comp weakness 3 | buildability 3 | reachability 3 | WTP 3 | phone fit 4**

---

# WILDCARD 1 — OSHA 300A annual posting

### ICP (one line)
Owner/HR-of-one at any US employer with 10+ employees in a non-exempt industry (construction, manufacturing, warehousing), responsible for the Form 300 log and the annual 300A summary posting.

### THE EXPENSIVE MISTAKE
- **Deadline**: the 300A must be posted **February 1 through April 30** of the year following the covered calendar year, under 29 CFR Part 1904 — and **must be posted even when there were no recordable injuries** — <https://mondaq.co.uk/unitedstates/health--safety/1278256/its-that-time-of-year-again-osha-300a-summaries-must-be-posted-by-feb-1>
- **2025 maximums** (effective for citations issued after January 15, 2025, a 2.6% increase): **$16,550 per serious/other-than-serious violation**, **$165,514 for willful or repeated** — <https://ogletree.com/insights-resources/blog-posts/osha-alert-time-to-post-annual-form-300a-summary-of-injuries-and-illnesses-penalties-jump-more-than-7-7-percent>, <https://constangy.com/assets/htmldocuments/LB%20-%20OSHA%20penalty%20increases%20-%201.13.25.pdf>
- **300A-specific figure**: a 2019-era source put failure to post at **$13,260** — <https://sitepilot12.firmseek.com/client/laner/www/newsroom-fastlaner-OSHA-Update-Penalties-Increased-and-Employers-Have-Reporting-Deadlines>. **Outdated.** The January 2026 adjustment would set the current maximum and **I could not obtain it** (today is Oct 2026).

Arithmetic **(estimate)**: one occurrence = one other-than-serious citation, **~$16,550 at the 2025 maximum** (actual assessed penalties for paperwork violations are typically far below maximum — **unverified**).

### THE RULE SET
Excellent and trivially simple: **29 CFR Part 1904**, one federal rule, one posting window (Feb 1 – Apr 30), plus the 10-employee threshold and the partially-exempt-industry list. Public, free, uniform. **And that is the problem: it is one date a year.**

### INCUMBENTS / COMPLAINTS / GATHERING
Not researched in depth — every law firm in America publishes a free February reminder alert (Ogletree, Constangy, Frost Brown Todd, Johnson & Bell), which is itself the competitor. **No verbatim complaints found.**

### iOS-FIT / BUILDABILITY / VERDICT
Phone fit 4/5 (single user), buildability 5/5 (one date). **VERDICT: KILL. Single biggest failure reason: nobody pays a recurring subscription for one annual reminder that every employment law firm in the country emails them for free.** Possible as a free feature inside a broader product, never as the product.

**Scores: pain-$ 2 | wealth 3 | comp weakness 3 | buildability 5 | reachability 2 | WTP 1 | phone fit 4**

---

# WILDCARD 2 — Pesticide applicator: restricted-use records + applicator CE

### ICP (one line)
Certified private applicator (farm) or commercial applicator (lawn/pest-control operator) who must log every restricted-use pesticide application and keep their certification current.

### THE EXPENSIVE MISTAKE
- Civil penalties per the USDA AMS brochure: **first offense "a fine of not more than $750"; subsequent offenses "not less than $1,100 for each violation"** — <https://www.ams.usda.gov/sites/default/files/media/PRP%20Recordkeeping%20Brochure.pdf>. **These figures may not reflect current inflation-adjusted amounts** and should be checked against the current eCFR text.

Arithmetic **(estimate)**: one occurrence = **$750 first offense**. **Too small.** The larger unpriced risk is loss of certification.

### THE RULE SET
**Genuinely excellent for a deterministic engine — federal, uniform, free, and precisely dated:**
- **7 CFR Part 110** — Federal Pesticide Recordkeeping Program; certified private applicators must keep RUP records for **2 years** — <https://www.ams.usda.gov/rules-regulations/pesticide-records>
- **Entries due within 14 days of each application**; **9 required data elements** (product name, EPA registration number, total amount applied, date, location, crop/site, area treated, certified applicator's name) — <https://www.ams.usda.gov/node/37905>
- **"No standard Federal form is required for recording RUP applications, which allows certified private applicators the flexibility to integrate RUP applications into any recordkeeping system"** — <https://www.ams.usda.gov/node/37904>. **This is an explicit federal invitation to build exactly our app.** Strongest single sentence found in the whole cluster for App-Store-safety and product legitimacy.
- **Commercial applicators** must furnish the data to the customer **within 30 days** of the application — <https://www.ams.usda.gov/node/37905> — a second clean countdown.
- Caveat: states with "comparable" programs replace the federal rules, so state variation exists; and **applicator CE requirements are entirely state-set and were not researched** (search budget).
- Supporting extension/state guidance: <https://utia.tennessee.edu/publications/wp-content/uploads/sites/269/2023/10/SP363-H.pdf>, <https://oisc.purdue.edu/pesticide/pdf/pesticide_recordkeeping_031224.pdf>, <https://www.asmark.org/compliance-library/restricted-use-pesticide-records/>

### INCUMBENTS / COMPLAINTS / GATHERING
Incumbents: not researched (budget). Farm-management software (FieldView, Granular) and pest-control FSM (PestPac, Briostack) are the likely free bundlers. **No verbatim complaints found.** Gathering: state extension services, Asmark Institute, state applicator associations — none with verified member counts.

### iOS-FIT / BUILDABILITY / VERDICT
**Phone fit 5/5** — log an application in the field on a phone, 14-day countdown, 2-year retention clock, PDF export for the customer within 30 days. Buildability 4/5. **VERDICT: PARK. Single biggest failure reason: $750 first-offense penalty is too small to drive a subscription, and the audience (certified applicators) has no verified size, wealth signal or reachable community.** Keep on the list — the ruleset quality and the "no standard federal form is required" language are unusually favourable, and the 14-day/30-day/2-year arithmetic is real. Worth a second look if the DOT and GovCon picks fall through.

**Scores: pain-$ 2 | wealth 3 | comp weakness 4 | buildability 4 | reachability 3 | WTP 2 | phone fit 5**

---

# WILDCARD 3 — Commercial real-estate critical-date tracking (landlords/tenants)

### ICP (one line)
Small commercial landlord or single-tenant business owner tracking lease renewal-option windows, notice deadlines, escalations and estoppel/SNDA requests. (Note: distinct from the excluded "small-landlord bookkeeping" — this is option-window date tracking, not books.)

### THE EXPENSIVE MISTAKE
**Well-documented legally, poorly priced.**
- **Strict compliance is the rule.** "an option to renew a commercial lease is a contractual right and requires strict compliance with its terms. Missing a deadline to renew a commercial lease means the option to renew is lost" — <https://www.mondaq.com/canada/landlord-tenant-leases/1814064/can-equity-save-a-missed-renewal-of-a-commercial-lease-the-limits-of-relief-from-forfeiture>
- **Dyer v. Ryder Student Transportation Services (RI)** — notice provision treated as a condition precedent; late exercise led to **automatic termination of the lease**, and accepting rent did **not** waive the notice requirement — <https://www.studicata.com/summaries/superior-court-of-rhode-island/dyer-v-ryder-student-transportation-services-c-a-98-4489-1999-1999-ss6ot5/>
- **135 East 57th Street v. Daffy's Inc. (NY)** — the tenant's **controller missed the date after failing to transfer renewal dates to a new calendar**; notice was four days late — <https://studicata.com/case-briefs/case/135-east-57th-street-v-daffy-s-inc>. **This is the perfect origin story for the product; outcome not confirmed from available sources.**
- **Relief from forfeiture is discretionary only** and turns on whether the breach was inadvertent, whether the tenant acted promptly, and whether the landlord is unfairly prejudiced — "cannot be applied to every case of missed deadline" — <https://www.mondaq.com/canada/landlord-tenant-leases/1814064/can-equity-save-a-missed-renewal-of-a-commercial-lease-the-limits-of-relief-from-forfeiture>
- **Dollar figure**: only a vendor glossary — "a single missed deadline can run into tens of thousands of dollars once holdover rent or a lost below-market renewal rate is priced in"; typical renewal notice windows are **9 to 12 months before expiration** — <https://rets.ai/glossary/lease-critical-dates> `[vendor estimate, unverified]`

Arithmetic **(estimate)**: losing a below-market renewal option on a 5,000 sq ft space where market has moved $5/sq ft = 5,000 × $5 × 5 years = **$125,000 (estimate, assumption-driven)**. Plausibly the highest per-occurrence figure in the cluster — but entirely unsourced.

### THE RULE SET
**Fatal flaw: there is no public rule set.** Every date comes from the individual lease document — a private contract. The only public element is the case-law principle "strict compliance," which is not computable. The app would be user-entered dates with a long-horizon (9–12 month) notification ladder. Also: interpreting whether a notice window has been validly exercised is squarely legal advice, which we are forbidden to give.

### INCUMBENTS / COMPLAINTS / GATHERING
Incumbents: lease-administration platforms (Visual Lease, Prophia, rets.ai) — enterprise-priced, not researched in detail. **No verbatim complaints found from small landlords.** Gathering: **reachability is the real problem — 2/5.** Small commercial landlords have no single forum, no subreddit I could verify, and no cheap trade channel. BiggerPockets skews residential.

### iOS-FIT / BUILDABILITY / VERDICT
Phone fit 3/5 (single user, yes, but a 9–12 month horizon means the app is opened twice a year — no habit, high churn risk). Buildability 4/5. **VERDICT: PARK. Single biggest failure reason: no reachable audience — small commercial landlords do not gather anywhere cheap that I could verify — compounded by a no-public-ruleset, no-moat product and a twice-a-year engagement loop.**

**Scores: pain-$ 4 | wealth 5 | comp weakness 3 | buildability 4 | reachability 2 | WTP 3 | phone fit 3**

---

# CROSS-CLUSTER CONCLUSIONS

### The two patterns that decided every verdict

**1. Federal + uniform beats state-by-state, every time.** The deciding variable across all eleven candidates was not pain-$ or audience size — it was whether a deterministic engine could be built in a week from free public text. That splits the cluster cleanly:
- **Federal and uniform (buildable)**: SAM.gov/FAR 52.204-7 (Niche 5), FMCSA Parts 391/396/382 + IFTA + 2290 (Niche 7), 7 CFR 110 (W2), 29 CFR 1904 (W1).
- **50 states × multiple actor classes (not buildable in a week)**: lien deadlines (1), HOA disclosure law (4), dental/childcare board rules (8).
- **No public ruleset at all (no moat)**: COI expiries (2), local health permits (6), lease dates (W3).
- **Paywalled (forbidden)**: NFPA 25/10/96 (3).

Notably, the two niches with the **highest pain-$** in the cluster (lien rights at 5, SAM.gov at 5) sit on opposite sides of this line — and that, not the pain, is why one is killed and one is pursued.

**2. "Who does the chasing?" is the iOS-fit test.** Any niche whose core value is collecting documents from third parties is a backend product and cannot be built under our constraints. That alone kills Niche 2 outright, and is the main reason Niche 4 scores 2. The surviving picks share one property: **the user is the only person who needs to know.**

### Honest reservations about both top picks
- **Niche 5 (GovCon)**: the TAM number is missing entirely (sam.gov unreachable), and I have **zero verbatim quotes from actual small-business owners** — only law-firm commentary. The whole thesis rests on GSA's own reminders being insufficient, which is argued from a vendor source. This is the pick with the best economics and the weakest audience evidence.
- **Niche 7 (DOT fleets)**: the audience evidence is excellent (real operators, real confusion, one giant accessible forum) and the ruleset is the best in the cluster, but **every single penalty dollar figure is vendor-sourced and they conflict by 2–3x**. Wealth is the honest 3/5 weak point.

If forced to pick one today: **Niche 7**, because its evidence is weakest exactly where evidence is cheapest to fix (read 49 CFR 386 App. B) and strongest where it is expensive to fix (verbatim user demand, accessible channel, uniform federal ruleset, 5/5 phone fit).

---

# OPEN VERIFICATION TASKS (blocked this session)

Ordered by how much they would change a decision:

1. **49 CFR 386 Appendix B** — read the actual civil penalty schedule. Every DOT dollar figure in Niche 7 is vendor-sourced and they conflict by 2–3x. **Highest priority: this is the #1 pick's evidentiary weak point.**
2. **r/govcon and r/GovernmentContracting** — read 20 threads on SAM renewal. Niche 5 has no verbatim small-business-owner quotes at all, only law-firm commentary. **Second highest priority: this is the #2 pick's weak point.**
3. **App Store survey** (apps.apple.com was 403-blocked throughout) — search "DOT compliance", "driver qualification", "SAM.gov", "IFTA", "fleet compliance", "expiration reminder". **All eleven "competitive weakness" scores are provisional without this.**
4. **SBA set-aside recertification intervals** — 13 CFR 124.112 (8(a) annual review), 13 CFR 126 (HUBZone recert), WOSB/SDVOSB annual attestation, CPARS response windows. Niche 5's ruleset beyond SAM.gov is **entirely unverified**, and these dates are what differentiate us from GSA's own reminder emails.
5. **Count of active SAM.gov registrations** — Niche 5's TAM is completely missing.
6. **FMCSA MCMIS carrier counts by fleet size** — Niche 7's TAM is missing; the 2024 Pocket Guide excerpt did not contain the breakdown.
7. **UCR annual fee schedule and deadline**, drug-and-alcohol consortium and hazmat registration intervals — three more Niche 7 obligations unverified.
8. **Do ELD vendors already bundle DQ-file/Clearinghouse date tracking free?** — the single most dangerous unchecked assumption for Niche 7.
9. **Do Dentrix/Open Dental/Procare/Brightwheel already track staff credential expiries?** — the equivalent question for Niche 8.
10. Subreddit member counts for r/govcon, r/Truckers, r/foodtrucks, r/HOA, r/SprinklerFitters (all GummySearch figures here are stale snapshots from a service that shut down 2025-11-30).
11. OOIDA member count — Niche 7's most obvious distribution channel, unverified.
12. Median small-business federal award value — needed to put a real number on Niche 5's single-occurrence loss.
13. NFPA free-access terms (nfpa.org unreachable) — would only matter if Niche 3 were revisited.
