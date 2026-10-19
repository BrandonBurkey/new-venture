# Scout 2 — Cluster: "High earners with painful multi-state credential / regulatory admin"

Date: 2026-10-19. Researcher: Scout 2 (AI).

## TOOLING LIMITATIONS — READ FIRST (affects confidence of everything below)

This pass was run with a crippled toolchain. Stated plainly so nothing here is over-trusted:

1. **WebFetch was unusable.** Every single `WebFetch` call failed at DNS (`getaddrinfo ENOTFOUND`) for every host tried (bls.gov, counselingcompact.gov, capterra.com, trustpilot.com, appfollow.io, apps.apple.com, eng-tips.com, thetruckersreport.com, forums.studentdoctor.net, nbcrna.com, mwm.ai). Direct `curl` through the agent proxy returns **403 to CONNECT (policy denial)** for all of these. So **no page was ever opened directly.** Everything below comes from search-engine result summaries and the text those summaries quoted.
2. **Reddit is hard-blocked** both for fetch and for search (`WebSearch` with `allowed_domains: ["reddit.com"]` returns an API error: "The following domains are not accessible to our user agent"). No subreddit member counts or Reddit quotes could be verified. The only subreddit figure found is a third-party snapshot (GummySearch) which that source itself says is frozen as of 2025-11-30.
3. **App Store pages could not be opened.** Rating counts for iOS incumbents come from search summaries of App Store / aggregator pages, not from the pages.
4. **The turn's WebSearch budget (200 calls, shared by every scout in the turn) ran out** partway through. Niches 3, 6, 7 and the wildcard are therefore materially under-researched versus 1, 2, 4, 5. The "EVIDENCE GAPS" section at the bottom lists the exact queries that still need running.

**Verbatim complaints: I found very few genuine end-user complaints.** Where I did not, I write "no verbatim complaints found" rather than paraphrasing vendor marketing as if it were a user. Several niches fail this test entirely, which is itself a signal (the pain may be real but it is not *loudly* complained about in reachable public places).

---

## SCORES TABLE

Scores 1-5. "Comp. weakness" = 5 means blue ocean (incumbents weak/absent), 1 means crowded or killed by a free tool.

| # | Niche | Pain-$ | Audience wealth | Comp. weakness | v1 buildability | Reachability | WTP subscription | Total | Verdict |
|---|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| 1 | Locum tenens physicians (1099, multi-state) | 5 | 5 | 2 | 4 | 3 | 3 | 22 | **PARK (strong pain, crowded + agency-free-service risk)** |
| 2 | CRNAs / travel advanced-practice clinicians | 3 | 4 | 2 | 4 | 4 | 2 | 19 | PARK |
| 3 | Pharmacists & pharmacy owners | 2 | 3 | 1 | 3 | 3 | 1 | 13 | **KILL** |
| 4 | Mental-health clinicians across states (PSYPACT/compacts) | 2 | 2 | 3 | 4 | 4 | 2 | 17 | **KILL** |
| 5 | Insurance adjusters / producers in 20-50 states | 3 | 2 | 3 | 3 | 3 | 2 | 16 | PARK |
| 6 | Professional engineers / architects, multi-state | 3 | 3 | 1 | 4 | 3 | 2 | 16 | **KILL** |
| 7 | CDL owner-operators & small fleets (DOT admin) | 4 | 3 | 4 | 5 | 5 | 3 | 24 | **PURSUE (best in cluster)** |
| 8 | Vets / dentists / optometrists (licence + DEA + CS logs) | 3 | 4 | 3 | 2 | 2 | 2 | 16 | PARK |
| 9 | Wildcard: multi-state CPAs (per-state CPE) | 2 | 4 | 2 | 4 | 4 | 2 | 18 | PARK (under-researched) |

**Top 2: #7 CDL owner-operators & small fleets, then #1 locum tenens / 1099 independent clinicians.**

---

## CROSS-CUTTING FINDING: THE FREE-TOOL KILLER IS NEARLY UNIVERSAL IN THIS CLUSTER

This is the single most important output of this pass. In almost every credential niche, somebody *already gives the tracking away free*, usually the body that owns the data:

| Niche | Free incumbent that kills paid tracking | Source |
|---|---|---|
| Nurses, and many state-mandated professions (FL, TX, others) | **CE Broker** — free iOS app, reported **4.8 stars from ~35,000 ratings**; free Basic account; state boards *mandate* it in some states | search summary of https://apps.apple.com/us/app/-/id384461998 ; https://www.tmb.texas.gov/226-am-i-required-to-use-ce-broker ; https://help.cebroker.com/hc/en-us/articles/48730439979412-CE-Broker-Subscription-Options-Explained |
| Pharmacists | **NABP CPE Monitor** — free Standard plan, *auto-receives* ACPE credit from providers; Plus is **$15/yr** | https://nabp.pharmacy/programs/cpe-monitor ; https://nabp.pharmacy/?p=515672 |
| Professional engineers | **NCEES free CPC tracking tool** inside MyNCEES — explicitly multi-state | https://www.pepls.ms.gov/sites/pepls/files/PEPLS%202020/Continuing%20Education/WebCPCJan2012PDHLog.pdf ; https://www.pdh-pro.com/pe-resources/how-to-become-a-professional-engineer-in-multiple-states/ |
| CRNAs | **AANA** handles Class B / MAC Dev submission for members at no extra charge | https://aana.com/ce/explore-and-submit-class-b-credits |
| Physicians / APPs | **Modio Health** gives individual providers a **free** "Universal Provider Record"; **locum agencies** do licensing + privileging as their paid-by-the-client service | https://www.capterra.com/p/158338/Modio-Health/ ; https://www.bartonassociates.com/blog/how-to-obtain-a-dea-number/ |
| Insurance adjusters | **Sircon ProducerEDGE** renewal reminders; employers' licensing departments; **CLM Tracker** pulls CE from states automatically | https://www.vertafore.com/resources/press-releases/vertafore-announces-sircon-electronic-adjuster-licensing-services-texas ; https://theclm.org/clmtracker |

**And the naive app already exists on iOS, more than once.** Search surfaced at least five credential-tracker iOS apps aimed at exactly this cluster:
- **CredBook** — tracks licences, DEA registrations, board certifications, hospital privileges, CME log; push notifications starting 6 months before expiry; third-party listing gives first release **2026-04-01**. https://apps.apple.com/app/id6760574525 (could not open; price/ratings unverified)
- **CertKeeper: License Tracker** — https://apps.apple.com/ar/app/id6755570013
- **Docs4MDs** — digital credentialing for doctors/residents/students, renewal reminders, CME progress vs requirements. https://apps.apple.com/us/app/docs4mds/id1645554564
- **CertAlert+ Med License Manager** — **free**, iOS+Android, covered by AAFP in 2020. https://www.aafp.org/pubs/fpm/blogs/inpractice/entry/license_certification_app.html
- **Land Surveyor PDH Tracker** — https://apps.apple.com/app/id6775103100 (evidence that even the *narrow* PE/surveyor slice is taken)
- **Med Ed Tracker** — described as a **free** platform that tracks multiple licences each with its own renewal cycle and credit requirements. https://alternativeto.net/software/mededtracker/about/

Implication for our v1: **"a nicer SwiftUI credential expiry tracker" is not a wedge in this cluster.** The only defensible wedges are (a) a *computed, per-jurisdiction rule engine* that tells the user the exact remaining hours by category per state (not just an expiry date), or (b) a niche whose deadlines are **not** CE credits reported to a central registry — which points at DOT/trucking, not clinicians.

---

# NICHE 1 — Locum tenens physicians

**ICP (one line).** US-based 1099 physician doing locum assignments across 2-10 states — emergency medicine, hospitalist, psychiatry, anesthesia — holding multiple state medical licences, one DEA registration per state of practice, and rolling hospital privileging cycles. Money: locum emergency medicine is quoted at **$200-$300/hr in 2025** and anesthesiology at **$300-400/hr** (https://locumstory.com/spotlight/locum-tenens-compensation-trends); Marit Health's self-reported dataset (Apr 2025, n=78) shows **$287/hr average total hourly comp** across locum specialties (https://marithealth.com/o/locums/physician/salary?page=0). Staffing-firm figures are lower and conflict — Barton quotes hospitalist locums at **$130-175/hr** (https://www.bartonassociates.com/?p=63346) and Wapiti/ZipRecruiter-derived ~$148/hr for EM (https://www.wapitimedical.com/?p=42701). Treat $200+/hr as upper-band, $130-175/hr as conservative.

**THE EXPENSIVE MISTAKE.** A state licence lapses (or a CME shortfall blocks renewal), the credentialing office pulls the physician off the schedule, and the booked block evaporates — no retroactive billing.
- Arithmetic (estimate, mine): one cancelled 12-hour EM shift at $250/hr = **12 × $250 = $3,000**. A typical 7-day block of 12s = 84 h × $250 = **$21,000**.
- Conservative version: 12 h × $150/hr = **$1,800** per shift.
- Hard fee evidence: Maine statute requires, to reinstate a lapsed physician licence, "all fees in arrears at the time of lapse plus the current license renewal application fee and a nonrefundable reinstatement application processing fee of $100", and if lapsed **more than 5 years** the physician "shall apply for a new license" (https://www.legislature.maine.gov/legis/statutes/32/title32sec3280-A-1.html). So the *fee* is small; the *lost-shift* cost is the real number.
- Vendor estimates for credentialing-gap revenue loss (**mark: vendor marketing, not audited**): "$1,000 to $5,000 per provider per day while enrollment remains incomplete" (https://neolytix.com/articles/credentialing-delays-revenue-loss/); "between $2,250 and $3,000 per provider per day in unbillable revenue" (https://medwave.io/?p=9768); "up to $122,144" for a 120-day delay (https://www.sutherlandglobal.com/insights/blog/cost-of-provider-credentialing-delays-and-revenue-loss). I would not put any of these in marketing copy.
- Consequence framing from a physician-network source: if a licence expires "you lose the legal right to practice medicine, prescribe medications, and bill insurance in that state until the license is officially reinstated" (https://www.sermo.com/resources/medical-license-renewal/).

**THE RULE SET.** Public, written, stable — but *numerous*, and that is the whole job.
- Per-state CME hours + mandated topics are published by each of ~70 medical/osteopathic boards. Cited examples (secondary source, **needs board-level verification**): California 50 hours with specific pain management and implicit bias; Texas 48 with human trafficking; Florida 40 with domestic violence and controlled-substance credits (https://residencyadvisor.com/resources/continuing-medical-education/why-tracking-cme-across-multiple-state-licenses-feels-impossible-and-what-to-do).
- Cycle lengths differ: Illinois and New York are triennial, most states biennial (https://www.directshifts.com/clinician-resources/imlc-license-renewal-guide-how-to-stay-active-in-multiple-states) — note this source *contradicts* Sermo on whether most states are annual or biennial, so cycle data must be entered board-by-board, not from a blog.
- DEA: **one registration per state of practice.** "practitioners operating in multiple states must obtain a separate DEA registration for each state where they practice" under 21 CFR 1301.12(a) (https://withassured.com/blog/faq-on-dea-numbers); "a Federal DEA Registration number is only good in ONE state at a time" (https://www.padental.org/docs/website/advocacy/sbod/QuickTips_DEA_Registration.pdf). Fee commonly quoted at **$888 / 3 years** (https://anesthesiology.comphealth.com/resources/how-to-obtain-a-dea-license) — but sources conflict ($731, $551 also seen), and **I could not open DEA.gov to confirm**. Plus a one-time 8-hour substance-use-disorder training requirement since 2023.
- **Verdict on rules: numerous-but-public = GOOD (data entry work), with one honest caveat** — mandated-topic rules change every legislative session (implicit bias, human trafficking, opioid hours have all been added in recent years), so this is **ongoing maintenance, not a one-time load**.
- **Genuinely unknowable / kill-flagged:** hospital privileging and re-credentialing intervals are **per-facility, contractual, and not public**. Malpractice tail-coverage dates are **per-policy and private**. A deterministic engine cannot compute these — it can only store what the user types. Do not promise computation there.

**INCUMBENTS.**
- **CredBook** (iOS) — directly overlapping: licences, DEA, board certs, hospital privileges, CME log, alerts from 6 months out. https://apps.apple.com/app/id6760574525. Price/ratings **unverified** (App Store blocked).
- **Docs4MDs** (iOS) — credentials + renewal reminders + CME-vs-requirement progress. https://apps.apple.com/us/app/docs4mds/id1645554564
- **CertAlert+** — **free**. https://www.aafp.org/pubs/fpm/blogs/inpractice/entry/license_certification_app.html
- **Med Ed Tracker** — **free**, explicitly multi-licence with per-licence cycles. https://alternativeto.net/software/mededtracker/about/
- **Modio Health OneView** — enterprise, no public price, custom contracts after a discovery call; **free individual "Universal Provider Record"**; Capterra shows **29 reviews, 97% positive**. https://www.capterra.com/p/158338/Modio-Health/. Weaknesses summarised by RFP.wiki: "Some users report verifications and updates require manual initiation rather than fully continuous monitoring"; no public API; form/template changes "route through vendor development"; reports "need cleanup before external use" (https://www.rfp.wiki/vendors/modio-health). **Caveat: RFP.wiki states its own confidence at ~42-49% and labels these AI-generated benchmarks — weak evidence.**
- **CE Broker** — free app, 4.8/~35K ratings; Professional **$39.99/yr**, Pro+ **$89.99/yr**, Concierge **$124.99-129.99/yr**; critically, **multi-state tracking sits in Pro+, and Pro+ is "only available for select professions"** (https://help.cebroker.com/hc/en-us/articles/48730439979412-CE-Broker-Subscription-Options-Explained). That gap is the most interesting opening found in this cluster.
- **DirectShifts** is building a licence-management product and is at "accepting early access applications" (https://www.directshifts.com/license-management) — i.e. a funded competitor is moving in now.
- **THE USUAL KILLER, CONFIRMED:** locum staffing agencies do licensing/credentialing *for* the physician as part of their service; CompHealth, Barton and Medicus all publish licensing how-tos and credentialing support (https://www.bartonassociates.com/blog/how-to-obtain-a-dea-number/). A physician on one agency has low reason to pay us. Our real ICP is the *multi-agency or direct-contract* locum, which is a fraction of the 52k.

**REAL COMPLAINTS.** Weak — this is a genuine failure of this pass.
- A locum pediatrician, on agency-published content: each medical board has "its own set of individual requirements that only rarely overlaps from one state to the next" (https://locumstory.com/spotlight/organized-locum-tenens). *Real person, but published by a staffing agency — treat as marketing-adjacent.*
- StudentDoctor forum thread on CME tracking exists (https://forums.studentdoctor.net/threads/cme.1427689) and per the search summary physicians there describe keeping certificates in an email folder and relying on AAFP transcripts and Florida's CE Broker auto-logging. **I could not open the thread, so I will not present this as a verbatim quote.**
- The vivid "LAPSED, billing frozen, 90 days to remediate a CME deficit she didn't know existed" story is a **vendor-written anecdote** (residencyadvisor.com), explicitly flagged as illustrative. **Not usable as evidence.**
- **Conclusion: no verbatim end-user complaints verified for this niche.** Reddit blocking is the main cause; r/medicine, r/Residency, r/emergencymedicine, r/FamilyMedicine must be read before this niche is trusted.

**AUDIENCE SIZE & WEALTH.** ~**52,000** physicians work locum assignments per year, ≈5-7% of the physician workforce; the 52,000 figure traces to a 2019 AMN estimate and CHG's State of Locum Tenens reporting (https://locumstory.com/spotlight/state-of-locum-tenens ; https://www.ampliz.com/resources/?p=21305). A 2025 CHG-based summary reports ~**57,000** (8%) currently accepting temporary assignments. Medicus estimates **165,000** have ever worked locums (lifetime, not annual). Denominator: **1,010,892** active physicians in 2023 (https://www.staffingindustry.com/news/global-daily-news/locum-tenens-use-higher-than-forecast). Wealth is the best in the cluster. **Addressable paid subset is small though: 52k × maybe 20% multi-agency/direct × maybe 3% conversion ≈ 300 subscribers (estimate, mine).** That is the core commercial problem.

**WHERE THEY GATHER.** r/medicine, r/Residency, r/emergencymedicine, r/locumtenens (**member counts unverified — Reddit blocked**); White Coat Investor forum; StudentDoctor Network forums (https://forums.studentdoctor.net); Sermo (https://www.sermo.com); agency-run content hubs LocumStory (https://locumstory.com) and Medicus (https://medicushcs.com/locum-tenens/resources/...) which are *competitor* channels, not neutral ones; NALTO (National Association of Locum Tenens Organizations) is agency-side, not clinician-side. **Honest read: there is no single cheap clinician-owned locum watering hole I could verify. Reachability = 3, not 5.**

**BUILDABILITY.** Technically a clean fit: SwiftData entities for Licence / DEA registration / CME activity / Privilege, a rules table keyed by state + profession, local notifications at 180/90/30/7 days, on-device PDF "CME transcript per state" export. No backend needed. The work is **not code, it is data**: ~70 medical/osteopathic boards × (cycle length, total hours, mandated topic hours, live/online split, carryover rules) is roughly 400-600 hand-entered values, each needing a board-URL citation, plus re-verification at least annually because mandated topics are added by statute frequently. Privileging and malpractice tail are user-entered only. A one-week AI build is realistic for the app; the rules dataset is a separate multi-day effort and a permanent maintenance tax.

**VERDICT: PARK.** Single biggest failure reason: **the addressable subset is small and the free/bundled alternatives are strong** — agencies do credentialing for free, CertAlert+ and Med Ed Tracker are free, and CredBook already shipped the exact feature list in April 2026.

**SCORES.** Pain-$ 5 | Wealth 5 | Comp. weakness 2 | Buildability 4 | Reachability 3 | WTP 3

---

# NICHE 2 — CRNAs / nurse anaesthetists & travel advanced-practice clinicians

**ICP.** Certified Registered Nurse Anesthetist, often 1099/locum or dual-state, holding multiple APRN licences, a DEA registration per practice state, ACLS/PALS/BLS cards, and NBCRNA continued-certification obligations. Money: BLS May 2025 mean annual wage reported as **$248,320**, up from **$231,700** in 2024 (https://www.beckersasc.com/anesthesia/crna-pay-in-2025-10-numbers/); O*NET, citing BLS 2025, gives **$236,590** (https://www.onetonline.org/link/localwages/29-1151.00) — Becker's labels $236,590 the *median*, so the two are reconcilable but the labelling conflicts. **bls.gov itself was unreachable; use with that caveat.** Outpatient care centres average **$263,960**.

**THE EXPENSIVE MISTAKE.** Certification lapse = cannot work as a CRNA at all (far worse than one state licence lapsing, because certification is national and singular).
- Arithmetic (estimate, mine): $248,320 / 2,080 h = **$119.38/hr**. One lost week = 40 × $119.38 = **$4,775**. One lost month ≈ **$20,693**.
- Hard fee evidence: NBCRNA's renewal is a **one-time, upfront fee of $445** at submission for the 4-year cycle per AANA (https://www.aana.com/ce/maintaining-anesthesia-certification-resources/); APEX itemises it as **$295 application + $160 MAC Check platform fee = $455** (https://www.apexanesthesia.com/blog/cpcprogram/). Sources conflict by $10; NBCRNA's own fee schedule was unreachable.
- Audit exposure: NBCRNA says of Class B documentation, "you will only be required to submit this information if you are audited" and "If you are not an AANA member, it is your responsibility to maintain your Class B credit activity records on your own" (https://nbcrna.com/certification-programs/class-b-credits). **This is the one genuinely good product hook in this niche** — the record-keeping burden is explicitly dumped on the non-member individual.

**THE RULE SET.** Public, written, and **far simpler than the physician case — which cuts against us**.
- The programme was renamed: **CPC → MAC (Maintaining Anesthesia Certification), introduced 2024**, "a four-year timeline with three key components: MAC Check, MAC Ed, and MAC Dev (formerly Class A and Class B)" (https://www.aana.com/ce/maintaining-anesthesia-certification-resources/). **Any app shipping with "CPC" language is already stale — a useful competitive tell.**
- Credits: **100 credits per 4-year cycle, ≥60 Class A / MAC Ed, remainder Class B / MAC Dev**; excess Class A converts 1:1 to Class B (https://www.northwestseminars.com/credit/classace.html ; https://www.apexanesthesia.com/?p=382310). Class B "do NOT require prior approval and are NOT required to have an assessment."
- MAC replaces the old Core Modules and the 8-year CPC Assessment with **quarterly knowledge checks**.
- Jurisdictional split that creates confusion: "AANA only handles the technical aspects of Class B submissions while NBCRNA handles all matters pertaining to categorization, content, and credit" (https://aana.com/ce/explore-and-submit-class-b-credits).
- **Honest flag:** this is **one** rule set from **one** body — a day of data entry, not a moat. The multi-state APRN licence layer is where the numerous-but-public work actually is, and that overlaps heavily with the **excluded** nurse-CE market.
- **Materially different from nurse CE? Partially.** The MAC 4-year national cycle, the Class A/B split, and quarterly MAC Checks do not exist in RN CE and are not covered by CE Broker's nurse flows. But the APRN state-licence CE layer *is* the nurse-CE market. So the differentiated surface is thin.

**INCUMBENTS.** AANA submits Class B for members (free with membership). NBCRNA's own portal holds the authoritative transcript and the MAC Check platform (the **$160** platform fee means NBCRNA is already charging for, and therefore already operating, the tracking surface). Apex Anesthesia and Northwest Seminars publish free guides/quick-guide PDFs (https://www.apexanesthesia.com/wp-content/uploads/2022/01/CPC_quick_guide_r06-1.pdf) and NYSANA publishes a free "CPC Tool Kit" (https://www.nysana.com/cpc-tool-kit). CE Broker covers the APRN state side free. **No verified CRNA-specific paid iOS app found** — that is the one blue-ocean-ish signal, but see the ratings caveat.

**REAL COMPLAINTS.** **No verbatim complaints found.** allnurses threads did not surface; Reddit blocked. The closest to evidence of pain is NBCRNA's own wording placing record-keeping on the individual, and the AANA/NBCRNA responsibility split — inference, not complaint.

**AUDIENCE SIZE & WEALTH.** Headcount **not verified** (BLS OEWS unreachable; commonly ~65-70k but I will not state an unsourced number). Wealth is confirmed strong at ~$236-248k mean. r/CRNA reported at **37k members, +7k (22.3%) yearly growth** by GummySearch (https://gummysearch.com/r/CRNA) — **frozen snapshot, source closed 2025-11-30.**

**WHERE THEY GATHER.** r/CRNA (~37k, unverified), r/srna, r/anesthesiology (https://gummysearch.com/r/anesthesiology); AANA (https://www.aana.com) and state associations e.g. NYSANA (https://www.nysana.com); AANA Annual Congress; Apex Anesthesia's audience (https://www.apexanesthesia.com) — a CE vendor, so a paid-partner channel rather than a free one.

**BUILDABILITY.** Very good. One national rule set (MAC: 4-year window, 100 credits, ≥60 MAC Ed, quarterly MAC Check dates) plus user-entered state licences and card expiries. SwiftData + notifications + PDF audit pack ("here is my Class B log with dates, activity type, hours") maps exactly to the stated audit scenario. Rules maintenance is low *but event-driven and sharp*: NBCRNA just renamed and restructured the whole programme in 2024, which would have broken a shipped app's copy and logic overnight.

**VERDICT: PARK.** Single biggest failure reason: **the rule set is one small national cycle that AANA/NBCRNA already service, so there is little computation to sell** — and the state-licence half of the job sits inside the excluded, CE-Broker-dominated nurse-CE market.

**SCORES.** Pain-$ 3 | Wealth 4 | Comp. weakness 2 | Buildability 4 | Reachability 4 | WTP 2

---

# NICHE 3 — Pharmacists & pharmacy owners

**UNDER-RESEARCHED (search budget exhausted).** One query ran. Treat as provisional.

**ICP.** Pharmacist licensed in 2+ states, or an independent pharmacy owner, with per-state CE including law hours and live hours, immunisation/CPR certs, DEA, and controlled-substance inventory deadlines. **Income: not verified in this pass — no pharmacist wage source was retrieved. Do not cite a number.**

**THE EXPENSIVE MISTAKE.** **Not quantified.** No fine schedule, no reinstatement fee, no lost-wage figure was retrieved. The query for board CE-audit penalties was cut off by the budget limit. **This niche therefore fails the "dollar cost of one occurrence" bar outright in this pass.**

**THE RULE SET.** Public and numerous, and NABP partly normalises it: "with 51 NABP member jurisdictions, renewal requirements are as varied as the patients who visit the pharmacy counter" and "licenses are set to renew by December 31 in 17 states" (https://nabp.pharmacy/?p=361483 / https://nabp.pharmacy/news/blog/no-need-to-check-your-list-twice-with-cpe-monitors-enhanced-features/). CE Broker documents the actual computation users must do: "Add up all the Live hours and Home Study hours separately, that were completed within your current State renewal cycle dates" (https://help.cebroker.com/hc/en-us/articles/15226511709844-CPE-Monitor-transcript-through-NABP). A secondary study guide describes "30 hours of ACPE-approved or Board-approved CE, including mandatory live contact hours and specific topic distributions" per biennium (https://open-exam-prep.com/study-guides/mpje/ch1/license-renewal-ce) — **unverified against any board.**

**INCUMBENTS — this is the kill.** **NABP CPE Monitor** is the national registry: ACPE providers report credit into it automatically, the free Standard plan shows "the total number of hours you have completed, including the number of home, live, ACPE/IPCE, and non-ACPE hours", and it is "simple to track credits across multiple licenses" (https://nabp.pharmacy/programs/cpe-monitor). The **Plus plan is $15/year** and even handles the state-specific topic remapping that would otherwise be our differentiator — it "lets users change an activity topic from an ACPE-approved topic to one which is state-specific, where the state allows topic changes", in **18 states** (https://nabp.pharmacy/?p=515672 ; https://nabp.pharmacy/?p=383683). CE Broker also ingests NABP transcripts.

**REAL COMPLAINTS.** **No verbatim complaints found.**

**AUDIENCE SIZE & WEALTH.** **Not verified.**

**WHERE THEY GATHER.** r/pharmacy (count unverified, Reddit blocked); NABP; APhA; NCPA (independent owners). Not researched properly.

**BUILDABILITY.** Would be fine technically, but pointless: the authoritative data lives in a free national registry that auto-populates, and the one hard part (state topic remapping) is already a **$15/yr** feature from the body the boards trust.

**VERDICT: KILL.** Single biggest failure reason: **NABP CPE Monitor does the job for free/$15 with automatic credit reporting we cannot match without a backend or data licensing — both excluded by our constraints.**

**SCORES.** Pain-$ 2 | Wealth 3 | Comp. weakness 1 | Buildability 3 | Reachability 3 | WTP 1

---

# NICHE 4 — Mental-health clinicians practising across states (PSYPACT / Counseling Compact / Social Work Compact)

**ICP.** Licensed psychologist, LPC or LCSW doing interstate telehealth via a compact privilege. **Income: not verified in this pass.** Prior knowledge says psychologists and LPCs are the *lowest*-earning group in this cluster by a wide margin; I did not retrieve a source, so I score wealth 2 on the basis that nothing here evidenced high earnings.

**THE EXPENSIVE MISTAKE.** Practising outside a privilege is a board-discipline and unlicensed-practice risk, but **I retrieved no dollar figure** — no fine schedule, no reinstatement fee, no lost-revenue number. One concrete small cost: the Counseling Compact privilege is **$55 initial and $55 renewal ($110 in the compact's own renewal example)** (https://counselingcompact.gov/application/). Vermont's psychologist state renewal fee is **$150** (https://ljfo.vermont.gov/assets/Publications/2023-2024-As-Passed-the-General-Assembly/0f888e7b3e/GENERAL-368473-v6-2023_PSYPACT.pdf). These are trivial sums — **the expensive-mistake test fails here.**

**THE RULE SET.** Public and *simple*, which is the problem for us.
- PSYPACT: **18,130 authorisation holders with telepsychology privileges** and **1,130 with temporary in-person authorisation**, per a Kansas board report dated late 2025 (https://www.ksbsrb.ks.gov/home/showpublisheddocument/5450/639070028074670000); a Louisiana hearing in March 2026 cited **>19,000** (https://cpo.soar.com/articles/7757473/Louisiana/House-panel-advances-PSYPACT-compact-to-expand-interstate-telepsychology). Participation: **43 states actively participating** (Kansas) vs **42 jurisdictions enacted as of March 2025** (https://www.commerce.alaska.gov/web/Portals/5/pub/PSY_AnnualReport_2025.pdf). Renewal needs active home licensure, the fee, and **3 hours of CE in the use of technology in psychology**; the temporary IPC renews annually (https://www.telementalhealthtraining.com/psychology/psypact-allows-for-telepsychology-across-state-lines). Compact rules PDF: https://cdn.ymaws.com/psypact.gov/resource/resmgr/final_rules/rules_4-_master_copy_revised.pdf
- Counseling Compact: live in only **Arizona, Georgia, Louisiana, Minnesota, Ohio**, with Georgia going live **2026-06-02**; "the Compact does not charge separately for a privilege in each state" (https://counselingcompact.gov/application/). A third-party source says 3+ dozen states have *enacted* it, which is not the same as operational (https://www.triadhq.com/blog/counseling-compact-goes-live-2026).
- Social Work Compact: effective **2024-04-12** but per a 2026 industry article it "has not yet issued a single multistate privilege" (https://www.triadhq.com/blog/behavioral-health-licensure-compacts-2026 / https://www.aswb.org/social-work-licensure-compact-development-and-next-steps/).
- **This is the structural kill: the entire point of a compact is to collapse N state renewals into ONE privilege.** The compacts are *removing* the admin pain we would sell against, and doing so faster than we could ship.

**INCUMBENTS.** CE Broker covers the state CE side free in mandating states. PSYPACT's own portal issues and renews the APIT. No paid consumer app needed.

**REAL COMPLAINTS.** **No verbatim complaints found.**

**AUDIENCE SIZE & WEALTH.** ~**18,000-19,000** PSYPACT holders (sources above) — small, and the Counseling Compact's operational population is currently **5 states**. Wealth unevidenced.

**WHERE THEY GATHER.** r/therapists, r/psychotherapy (counts unverified); APA; ACA; PSYPACT's own channels; telehealth-training vendors (https://www.telementalhealthtraining.com).

**BUILDABILITY.** Easy to build, very little to compute — one privilege, one annual renewal, 3 CE hours.

**VERDICT: KILL.** Single biggest failure reason: **the compacts are deliberately eliminating the multi-state admin burden, the per-occurrence cost is tens of dollars not thousands, and the audience is both the smallest and the least wealthy in the cluster.**

**SCORES.** Pain-$ 2 | Wealth 2 | Comp. weakness 3 | Buildability 4 | Reachability 4 | WTP 2

---

# NICHE 5 — Insurance adjusters & producers licensed in many states

**ICP.** Independent or catastrophe property adjuster holding a resident licence plus many non-resident licences, deployed storm to storm. Money: average claims adjuster ~**$65,000** (Indeed/ZipRecruiter data, May 2025, via https://www.360training.com/blog/insurance-adjuster-salaries); **independent property adjusters average $82,500**, ~$20k above the industry average (same source); CAT work is per-claim fee schedules or **daily rates "(e.g., $300/day)"**, deployments "typically run 2-8 weeks" (https://adjusterpro.com/become-cat-adjuster/); busy-season income "$100k-$200k+ for experienced adjusters" vs "$40k in a slow year" (https://adjusterpro.com/insurance-adjuster-income/). **Honest read: this is not a high-earner niche on average. It is a feast-or-famine niche.**

**THE EXPENSIVE MISTAKE.** A non-resident licence lapses the week a hurricane lands and the adjuster cannot be deployed to that state.
- Arithmetic (estimate, mine): $300/day × a 14-day deployment = **$4,200** of lost work; a 6-week deployment at $300/day = 42 × $300 = **$12,600**.
- Documented fees are small: Mississippi individual adjuster fee **$100.00** (https://apps.mid.ms.gov/mobile/licensing-forms-fees.aspx); Virginia resident renewal **$10 state fee with a $30 late fee**, "All fees are charged per line of authority", excluding NIPR transaction fees (https://nipr.com/licensing-center/state-requirements/virginia-resident-renewal-individual).
- So again: **fees trivial, opportunity cost real but estimated by me, not sourced.**

**THE RULE SET.** Public but **genuinely messy, with real reciprocity logic that would have to be modelled** — and that logic is the most interesting computational problem in the whole cluster:
- Oklahoma: "Continuing education requirements shall not apply to non-resident adjusters licensed in a designated home state that has a continuing education requirement for adjusters" (https://www.oid.ok.gov/wp-content/uploads/2019/10/071614_Rule-Text-Ch-25-FINAL.pdf).
- North Carolina: whether the adjuster owes NC CE depends on whether the home state licenses the same adjuster type; if so the adjuster "simply has to be in good standing in that home state" (https://ncdoi.gov/documents/agent-services/non-resident-adjuster-ce-faqs/open).
- Idaho: the CE rule "does not apply to nonresident and agency adjusters" (https://doi.idaho.gov/wp-content/uploads/licensing/Notification-of-CE-Requirement.pdf).
- **Flag: several of these documents are dated (2014-2015).** Current rules must be re-pulled per state. 50+ DOIs × (resident/non-resident × adjuster type × CE hours × ethics/flood requirements × reciprocity exemption) is a large but tractable hand-entry job — **good: data entry work**, with the honest caveat that an exemption modelled wrong gives the user a *false* "you're compliant", which is the worst possible failure mode and sails close to regulated advice.

**INCUMBENTS.**
- **CLM Tracker** (The Claims and Litigation Management Alliance) — "pulls CE attendance data from states automatically" and "alerts users to upcoming expiration dates and CE compliance" (https://theclm.org/clmtracker). Price not retrieved.
- **Sircon ProducerEDGE** (Vertafore) — adjusters "can also subscribe to Sircon ProducerEDGE™ to help them manage their licenses and CE, including receiving renewal reminders for all of their adjuster licenses" (https://www.vertafore.com/resources/press-releases/vertafore-announces-sircon-electronic-adjuster-licensing-services-texas). **2016 press release; current price unknown.**
- **ResourcePro** managed service — adjusters "notified 90 days before the resident license renewal about where they stand on CE" (https://lp.resourcepro.com/claims-adjuster-licensing/).
- **Sircon Managed Services** covers "License applications and renewals" for firms (https://www.vertafore.com/sites/default/files/documents/Sircon-Managed-Services-Agency-Data-Sheet-2026-v2.pdf).
- **THE KILLER:** the IA firm or carrier that deploys the adjuster usually runs licensing centrally and pays for it. Vertafore and ResourcePro sell to exactly those employers. A staff adjuster has zero reason to buy. Only the **truly independent** adjuster is a buyer.
- NIPR/state portals already email renewal notices (California cited "improved license renewal notifications" as a Sircon benefit — https://www.insurance.ca.gov/0200-industry/0120-notices/upload/Industry-CDI_is_Moving_to_Sircon_powered_by_Vertafore.pdf).

**REAL COMPLAINTS.** **No verbatim complaints found.** A targeted search for complaints about these tools returned nothing. CatAdjuster.org and AdjusterTalk were never reached.

**AUDIENCE SIZE & WEALTH.** **Headcount not verified.** Wealth: average ~$65k, independent property ~$82.5k, high variance. Weakest wealth signal of the professional niches.

**WHERE THEY GATHER.** CatAdjuster.org, AdjusterTalk, r/InsuranceClaims, r/Insurance (all **unverified**); The CLM (https://theclm.org); AdjusterPro's audience (https://adjusterpro.com) — a licensing-course vendor, i.e. a paid channel; PropertyCasualty360 (https://propertycasualty360.com).

**BUILDABILITY.** Buildable, but the reciprocity/exemption engine is the hardest data model in the cluster and the one most likely to be wrong in a way that hurts the user. 50 DOIs with 2014-era documents needing re-verification is a heavy, high-risk, recurring maintenance load for a two-person studio. App-Store framing is fine (organises the user's own licences, computes from public rules) but we would need firm "not compliance advice" language precisely where users most want a verdict.

**VERDICT: PARK.** Single biggest failure reason: **employers already pay Vertafore/ResourcePro to do this, average income is ~$65-82k so subscription tolerance is low, and the reciprocity rules we would differentiate on are both the hardest to maintain and the most dangerous to get wrong.**

**SCORES.** Pain-$ 3 | Wealth 2 | Comp. weakness 3 | Buildability 3 | Reachability 3 | WTP 2

---

# NICHE 6 — Professional engineers & architects with multi-state licences

**ICP.** PE (often structural or civil) or registered architect licensed by comity in 3-15 states, doing multi-state project work. **Income: not verified in this pass.** PE incomes are solidly upper-middle but I retrieved no source; wealth scored 3 on that basis.

**THE EXPENSIVE MISTAKE.** **Not quantified — the query for unlicensed-practice penalties was cut off by the search budget.** A documented audit exposure: Mississippi's board requires the licensee to maintain records supporting claimed credits "for 3 years, and the board may request copies for audit" (https://www.pepls.ms.gov/sites/pepls/files/PEPLS%202020/Continuing%20Education/WebCPCJan2012PDHLog.pdf). **No dollar figure retrieved. This niche fails the dollar-cost bar in this pass.**

**THE RULE SET.** Excellent raw material, genuinely numerous-but-public:
- Roughly **42 states plus DC** require PE continuing education; "Each state has its own set of rules and regulations about the number of PDH hours, pre-approval of courses and providers, ethics training, and the renewal cycle" (https://learnformula.com/latest-intelligence/how-to-fulfill-your-pdh-requirements-a-state-by-state-guide-for-engineers).
- "most states require between 15 and 36 PDH hours per renewal cycle" and boards use "PDHs", "continuing education" or "CPCs" interchangeably (https://ppi2pass.com/resources/pe-exam/pdh-requirements-by-state).
- "It is extremely unlikely that the renewal dates of your various licenses will fall on the same date" (https://pdh-pro.com/pe-resources/managing-continuing-education-requirements-with-multiple-pe-licenses).
- Per-state requirement index: https://www.pdhengineer.com/state-requirement/
- Carryover, live-vs-recorded and ethics-hour rules vary per board — exactly the deterministic computation we are good at. **Good: data entry work.** Maintenance moderate.

**INCUMBENTS — this is the kill.** **NCEES provides a free online PDH tracking tool inside MyNCEES accounts that tracks requirements for every state where the licensee holds a licence** (https://www.pdh-pro.com/pe-resources/how-to-become-a-professional-engineer-in-multiple-states/), and Mississippi's board explicitly accepts "NCEES CPC Tracking Program records" as the audit record. NCEES is the body the boards trust and already holds the NCEES Record used for comity licensure ("compiles licensure credentials... into one comprehensive record" and transmits it to boards). On top of that, **Land Surveyor PDH Tracker** already occupies the narrow iOS slice (https://apps.apple.com/app/id6775103100), and CE vendors (PDHengineer, PDH-Pro, PPI, LearnFormula) give away state-requirement tables as lead magnets. For architects, AIA's CES transcript performs the same free role (**not verified this pass**).

**REAL COMPLAINTS.** Best in the cluster, though **obtained only via search summary — the pages were unreachable, so wording is as the search tool reported it**:
- An Eng-Tips thread titled "Tracking Continuing Education credits": a PE licensed in several states asked for a better resource than a personal spreadsheet, citing "varying renewal dates, varying renewal cycles (1 yr vs 2 yr), and varying requirements for live vs. recorded education." The top reply described a **two-tab spreadsheet** — tab 1 per-state licence date / next renewal / hours completed / hours remaining / carryover, tab 2 a running activity log. https://www.eng-tips.com/viewthread.cfm?qid=395757
- A second Eng-Tips thread ("PDH for ND/TX PE") where a comity licensee asked whether late-year online courses would count and observed "The PE board rules are pretty vague as far as what will not be allowed." https://www.eng-tips.com/threads/pdh-for-nd-tx-pe.446318/latest
- Land-surveying write-up on the same problem: https://blog.landsurveyorsunited.com/2025/08/navigating-multi-state-land-surveyor.html

**AUDIENCE SIZE & WEALTH.** **Not verified.** ~42 states + DC require CE, which is a rules-surface count, not a headcount.

**WHERE THEY GATHER.** Eng-Tips (https://www.eng-tips.com) — the verified watering hole; r/civilengineering, r/StructuralEngineering, r/engineering (counts unverified); NCEES (https://ncees.org); NSPE and state societies e.g. NJSPE (https://njspe.org); Land Surveyors United (https://blog.landsurveyorsunited.com); Structure Magazine (https://www.structuremag.org).

**BUILDABILITY.** Strong technical fit and the best-documented user workaround in the cluster (a literal two-tab spreadsheet we could replace one-for-one). ~43 jurisdictions × (hours, cycle, ethics hours, live/recorded limits, carryover cap) ≈ 200-300 hand-entered values with board URLs. Maintenance moderate.

**VERDICT: KILL.** Single biggest failure reason: **NCEES already gives multi-state PDH tracking away free inside the account every comity licensee must already hold, and boards accept NCEES records as the audit artefact — we would be selling a worse version of the registrar's own free tool.**

**SCORES.** Pain-$ 3 | Wealth 3 | Comp. weakness 1 | Buildability 4 | Reachability 3 | WTP 2

---

# NICHE 7 — CDL owner-operators & small fleets (DOT regulatory admin) — **BEST IN CLUSTER**

**ICP.** Owner-operator running under their own authority, or a 1-10 truck fleet owner, personally responsible for DOT medical card, CDL renewal, IFTA quarterly, UCR annual, Form 2290 HVUT, random drug/alcohol consortium, annual vehicle inspection, driver qualification file, MCS-150 biennial update, and the Clearinghouse annual query. **Income: not verified in this pass — I retrieved no owner-operator revenue or net-income source and will not invent one.** This is the main open question on this niche, and it is the reason wealth is scored 3 rather than higher. Gross revenue is high; net income is middling; *but the buyer is a business owner spending business money, which matters more for WTP than personal income does.*

**THE EXPENSIVE MISTAKE.** Unlike every clinician niche, **here the penalties are written down in dollars, and the failure mode is the truck stops earning.**
- **IFTA late filing: "a fine of $50 or 10% of the net taxes due, whichever is greater"** (https://blog.trucklogics.com/?p=1934). A vendor puts it at **$50-$500/quarter** (https://truenorth.com/articles/business/trucking-deadlines) — **vendor estimate**.
- **Repeat non-filing revokes the fuel-tax licence**: "File late — or not at all — for two consecutive IFTA reporting periods, and your base jurisdiction can revoke your fuel tax license" (https://truenorth.com/articles/business/trucking-deadlines). A revoked IFTA licence means the truck cannot legally run interstate — **this is the real expensive mistake, and it is a 100% deterministic, calendar-driven miss.**
- **MCS-150 biennial update: "fines up to $1,000 per day and having your USDOT number deactivated"** (vendor estimate, https://otrucking.com/resources/guides/trucking-compliance-calendar-2026/). A deactivated USDOT number parks the truck.
- **Clearinghouse annual query:** those who miss the deadline "could be subject to a fine" (https://landline.media/?p=30625), with a 2026 compliance calendar citing **"$1,000+ potential fines"** (vendor estimate).
- **UCR non-registration: "$100 to $5,000"** (vendor estimate, otrucking.com).
- **Missing drug-testing records: "$5,000 to $10,000"** (vendor estimate, otrucking.com — the table excerpt did not state precisely what it applies to; treat cautiously).
- Arithmetic (estimate, mine): a single IFTA revocation or USDOT deactivation that parks a truck for one week is worth far more than any of these fines, but **I have no sourced revenue-per-day figure to multiply.** That number must be sourced before we build.
- **Honest flag: almost every penalty figure above comes from a company selling DOT compliance services.** FMCSA/IRS/UCR primary sources were unreachable (403 from the proxy). These must be verified against the CFR and FMCSA before any of them appears in the app or in marketing.

**THE RULE SET — the strongest in the cluster: federal, deterministic, calendar-driven, and free of per-state variation for most items.**
- **IFTA quarterly: Apr 30, Jul 31, Oct 31, Jan 31** — "the last day of the month after each quarter", shifting to the next business day on a weekend/holiday. Annual IFTA licence renewal window **Oct 1 - Nov 30** (https://truenorth.com/articles/business/trucking-deadlines ; https://beancount.io/blog/2026/07/10/ifta-fuel-tax-quarterly-filing-owner-operator-guide).
- **Form 2290 HVUT: due August 31** each year (truenorth.com).
- **UCR: renew annually between Oct 1 and Dec 31, payment required by Dec 31** (https://beancount.io/nl/blog/2026/09/25/ucr-2027-registration-fees-owner-operator-small-fleet-guide).
- **Clearinghouse: every 12 months**, most sources citing **January 5**; critically, "owner-operators under their own authority are required to conduct queries on themselves" (https://landline.media/?p=30625 ; https://jjkellercompliancenetwork.com/news/expert-insights-q4-compliance-dont-let-the-year-slip-away).
- **MCS-150: biennial, month determined by the USDOT number** — note two sources disagree on whether it is the **last digit** or the **last two digits** (truenorth.com vs otrucking.com). **This exact discrepancy must be resolved from FMCSA before coding, and is a good example of why vendor blogs are not an acceptable rule source.**
- DOT medical examiner's certificate, CDL renewal, annual vehicle inspection (49 CFR 396.17), driver qualification file (49 CFR 391.51) and the 391.45 medical-exam intervals named in the brief are all in the CFR — **public, stable, deterministic, and free of the 50-state fan-out that bogs down every other niche here.** I was unable to open eCFR directly (proxy 403) so the specific CFR text was not re-verified this pass.
- **Verdict on rules: GOOD — and uniquely, mostly FEDERAL, so the hand-entry load is roughly a dozen recurring rules rather than 50 jurisdictions × 6 attributes.** This is the single biggest buildability advantage in the cluster.

**INCUMBENTS.** Weakest field found.
- **Compliance-service vendors, not consumer apps:** J.J. Keller Compliance Network (https://jjkellercompliancenetwork.com), Foley (https://foleyservices.com), OTrucking DOT Compliance Services (https://otrucking.com/services/compliance/), TrueNorth (https://truenorth.com). These are **done-for-you services sold to fleets**, generally priced per truck per month, not $5/mo personal apps.
- **Back-office software:** TruckingOffice (https://www.truckingoffice.com), TruckLogics (https://blog.trucklogics.com) — these are IFTA-*filing* and bookkeeping products, i.e. they do the filing, and they are web-first.
- **Free content, not free tooling:** the deadline knowledge is given away as blog posts and PDFs ("trucking compliance calendar 2026"). **That is the gap: everyone publishes the calendar, nobody ships a personal iOS deadline engine that computes the user's own dates from their USDOT number, base state and truck count.**
- **What employers provide free:** nothing for an owner-operator under their own authority — *by definition there is no employer.* This is the one niche in the cluster where the usual killer does not apply. Company drivers are covered by their carrier's safety department and are **not** our ICP.
- **No credible iOS incumbent was found.** (Could not search for one properly — budget exhausted. **This must be checked before committing.**)

**REAL COMPLAINTS.** One real thread, surfaced via search summary only (page unreachable):
- TruckersReport thread "Paying fine before allowed to leave" (2021): a driver was cited at an Oklahoma weigh station for missing IFTA paperwork and UCR and told to pay before leaving. A reply: **"Most likely you are not paying a fine. You are paying a bond to make sure you show up to court."** https://www.thetruckersreport.com/truckingindustryforum/posts/10829978
- A second thread on UCR registration timing delays: https://www.thetruckersreport.com/truckingindustryforum/goto/post?id=7319267 (content not retrieved).
- **That is one verbatim quote, not two. The brief's two-quote bar is NOT met for this niche yet** — TruckersReport, r/Truckers and r/ownerOperators must be mined in a follow-up.

**AUDIENCE SIZE & WEALTH.** **Not verified this pass.** Needed: FMCSA count of active motor carriers with 1-10 power units, and an owner-operator net-income source. Prior expectation is hundreds of thousands of small carriers, which would make this the largest audience in the cluster — **but I did not source it and will not assert it.**

**WHERE THEY GATHER.** TheTruckersReport forums (https://www.thetruckersreport.com/truckingindustryforum/) — verified active; Landline / OOIDA media (https://landline.media) — OOIDA is the owner-operator association and the obvious association channel; r/Truckers, r/ownerOperators (counts unverified, Reddit blocked); large trucking YouTube and Facebook owner-operator groups (**not verified**). **Reachability scored 5 because the association and the forum are both named, public, cheap and owner-operator-specific** — better than any clinician niche found.

**BUILDABILITY.** The best fit to our constraints by a clear margin. The rule set is a small set of **federal recurring intervals** plus a couple of per-state items (IFTA base jurisdiction, annual inspection), so the hand-entered dataset is maybe 15-25 rules rather than 300-600 values — a day of data entry, not a week. Everything computes from a handful of user inputs (USDOT number, base state, truck/driver count, med-card date, last inspection date, last Clearinghouse query date). SwiftData + local notifications + on-device PDF export maps perfectly onto what this user actually needs at a roadside inspection or audit: **a dated, printable compliance pack**. No backend, no accounts, no data licensing, no regulated advice — we compute dates from public federal rules and organise the user's own documents. Maintenance risk is the lowest in the cluster: federal intervals change rarely, though UCR fees and the 2290 form change annually and would need an annual update.

**VERDICT: PURSUE.** Single biggest failure reason if it fails: **audience wealth and willingness to pay are unproven — owner-operators are famously price-sensitive and the deadline knowledge is already free in blog form, so the app must sell the *computed personal calendar plus the printable pack*, not the information.** Secondary risk: **penalty figures are vendor-sourced and must be re-verified against FMCSA/IRS before any of them is shown in-app.**

**SCORES.** Pain-$ 4 | Wealth 3 | Comp. weakness 4 | Buildability 5 | Reachability 5 | WTP 3

---

# NICHE 8 — Veterinarians / dentists / optometrists with multi-state or DEA-heavy practice

**ICP.** Practice-owning vet, dentist or optometrist holding a state licence, a DEA registration per *location*, a state controlled-substance registration in some states, plus CE including controlled-substance-specific hours. **Income: not verified this pass**; wealth scored 4 on the basis that these are practice owners, not on a retrieved source.

**THE EXPENSIVE MISTAKE.** **Not quantified in dollars.** The documented exposure is inspection failure, not a fee:
- Texas veterinary board: CE records "must be maintained for the last 3 renewal cycles and be provided to the Board investigators for inspection upon request", and "Controlled Substances logs must maintain balance on hand at all times" (https://tbvme.state.tx.us/enforce.php).
- DEA registration is "individual, location-specific, and not assignable" (https://acquisitionstars.com/blog/dea-state-veterinary-dental-license-transfer-ma) and federal rules "typically require a separate DEA registration for each location where controlled substances are ordered and stored" (https://go.vetsnap.com/who-needs-dea-license/).
- **No fine schedule retrieved. Fails the dollar-cost bar.**

**THE RULE SET.** Mixed — and the valuable half is the half we cannot do.
- Public and computable: per-state CE hours and controlled-substance CE mandates, e.g. South Carolina requires vets with DEA registrations to do "at least two hours of continuing education every two years on prescribing and monitoring controlled substances" (https://www.llr.sc.gov/vet/pdf/Veterinarian-CE-Requirements.pdf). Per-state optometry CSR requirements: "about 21 states" require a separate state controlled-substance credential for optometrists, which generally must be in place or pending before the DEA application, including Texas, Illinois and New Jersey (https://eyesoneyecare.com/resources/optometrists-guide-to-dea-licensure-with-checklist/). Licence-requirement index: https://getlicensemap.com/states/veterinarian/california
- **Flagged as a KILL for our constraints: the controlled-substance perpetual inventory log.** "maintain balance on hand at all times" is a **running, auditable, multi-user, per-location inventory ledger** — that is a regulated practice-record system, needs multi-staff access, audit trails and backup, and therefore a backend and accounts. Both are explicitly excluded. An offline single-device SwiftData log would be a liability, not a product.
- Most vets/dentists/optometrists practise in **one** state, so the multi-state premise that makes this cluster interesting largely does not hold here.

**INCUMBENTS.** **VetSnap** — veterinary digital controlled-substance logging; a customer favourite is "the ability to create records anywhere, without the need for different physical logbooks" (https://go.vetsnap.com/?p=1274). Practice-management suites (not surveyed this pass) cover the rest. No evidence found of any product spanning licence + DEA + CS log + CE across the three professions — **but that is because the three professions do not form one market, not because there is an opening.**

**REAL COMPLAINTS.** **No verbatim complaints found.** VIN (Veterinary Information Network) is paywalled and was never reached.

**AUDIENCE SIZE & WEALTH.** **Not verified.**

**WHERE THEY GATHER.** VIN (paywalled); r/veterinary, r/Dentistry, r/optometry (counts unverified); AVMA, ADA, AOA; state boards. **Reachability scored 2: the main vet watering hole is paywalled and the three professions would need three separate go-to-market efforts.**

**BUILDABILITY.** Poor. The only part that is a crisp deterministic engine (per-state CE) is the least painful part; the painful part (perpetual CS inventory) violates our no-backend/no-accounts constraints and carries real regulatory liability.

**VERDICT: PARK (leaning kill).** Single biggest failure reason: **the acute pain is a multi-user, auditable controlled-substance inventory ledger, which we cannot legitimately ship without a backend and accounts — and the rest of the pain is single-state, so the multi-state thesis does not apply.**

**SCORES.** Pain-$ 3 | Wealth 4 | Comp. weakness 3 | Buildability 2 | Reachability 2 | WTP 2

---

# NICHE 9 (WILDCARD) — CPAs with multi-state licences / per-state CPE

**SEVERELY UNDER-RESEARCHED — no searches were run on this niche before the budget was exhausted. Everything below is reasoning from the cluster's established pattern, not evidence. Treat as a hypothesis to test, not a finding.**

**Why I chose it over the brief's suggestions.** Court interpreters, crane operators (NCCCO), welders (AWS), EMS paramedics and HVAC EPA 608 all fail the *wealth* gate that defines this cluster — these are $50-80k occupations, and the brief asks for high earners. Real-estate brokers' trust-account deadlines are closer to bookkeeping (and adjacent to excluded small-landlord bookkeeping). Multi-state CPAs fit the cluster's actual shape: genuinely high earners, genuinely multi-state (practice-privilege and firm-mobility rules), and a per-state CPE rule set with hour totals, ethics hours, cycle lengths and carryover that is exactly the kind of deterministic computation we are good at.

**ICP (hypothesis).** Sole-practitioner or small-firm CPA licensed in 2+ states, with per-state CPE hour totals, state-specific ethics requirements and differing 1/2/3-year reporting cycles. **Income: not verified.**

**THE EXPENSIVE MISTAKE (hypothesis, unquantified).** CPE shortfall found on a board audit → licence suspension in the middle of busy season. **No dollar figure. Fails the bar.**

**THE RULE SET (hypothesis).** NASBA publishes per-state CPE requirements; boards publish hour totals, ethics hours and cycles. Expected to be numerous-but-public — the same profile as the PE niche. **Unverified.**

**INCUMBENTS (hypothesis, and the likely kill).** The pattern established across every other niche in this cluster predicts a free registrar-side tracker: NASBA's CPE Audit Service is used by several state boards, and large CPE vendors (Becker, Surgent, CPA Academy) give transcript tracking away with courses, while firms track CPE centrally for employed CPAs. **If that holds, this niche dies exactly as pharmacists and PEs did. Verify first.**

**REAL COMPLAINTS.** **No verbatim complaints found (no searches run).**

**WHERE THEY GATHER.** r/Accounting, r/CPA (counts unverified); AICPA; state CPA societies. Plausibly high reachability.

**BUILDABILITY.** Would mirror the PE build: ~55 jurisdictions × (hours/cycle, ethics, carryover, cycle type) hand-entered.

**VERDICT: PARK — unresearched.** Single biggest expected failure reason: **NASBA's CPE Audit Service and firm-provided tracking almost certainly reproduce the free-incumbent kill seen in every other credential niche here.**

**SCORES (low confidence).** Pain-$ 2 | Wealth 4 | Comp. weakness 2 | Buildability 4 | Reachability 4 | WTP 2

---

## WHAT I KILLED, AND WHY

- **Pharmacists (#3)** — NABP CPE Monitor is free (Plus $15/yr), auto-ingests ACPE credit, works across multiple licences, and even does state-specific topic remapping in 18 states. We cannot match automatic credit ingestion without a backend or data licensing, both excluded.
- **Mental-health clinicians / compacts (#4)** — the compacts exist to *delete* multi-state admin. One privilege, one annual renewal, 3 CE hours, $55 fees. Smallest and least wealthy audience; per-occurrence cost is tens of dollars.
- **Professional engineers / architects (#6)** — NCEES gives free multi-state PDH tracking inside the MyNCEES account every comity licensee already has, and boards accept NCEES records as the audit artefact. Best-evidenced user pain in the cluster, already served by the registrar.
- **(Also rejected without full write-ups, on the wealth gate):** court interpreters, NCCCO crane operators, AWS welders, EMS paramedics, HVAC EPA 608 — none is a high-earner audience; real-estate broker trust accounting overlaps excluded bookkeeping territory.

## EVIDENCE GAPS — EXACT WORK NEEDED NEXT (ordered)

1. **Owner-operator economics (#7):** FMCSA count of active for-hire carriers with 1-10 power units; OOIDA or ATBS owner-operator net-income figures; revenue per truck per day, to price the "truck parked" mistake.
2. **Verify #7 penalties against primary sources:** 49 CFR 391.45 / 396.17 / 391.51 intervals, FMCSA Clearinghouse annual-query rule and penalty, MCS-150 update-month rule (resolve the last-digit vs last-two-digits conflict), IRS 2290 due date, UCR fee schedule and penalty. **All current figures are vendor-sourced.**
3. **iOS competitive check for #7:** App Store search for DOT/IFTA/trucking compliance and deadline apps — this was never run and could kill the recommendation outright.
4. **Verbatim complaints for #7:** TheTruckersReport forum search on IFTA/UCR/Clearinghouse missed deadlines; r/Truckers and r/ownerOperators (needs a non-blocked path to Reddit).
5. **CredBook (#1):** price, subscription tier, rating count, review text. It is the closest direct competitor found and is entirely unverified.
6. **CE Broker Pro+ profession list:** confirm which professions are excluded from multi-state tracking — that exclusion list is the most concrete market gap found in the whole cluster.
7. **#1 verbatim complaints:** r/medicine, r/Residency, r/emergencymedicine, White Coat Investor forum.
8. **Wildcard #9:** confirm or kill via NASBA CPE Audit Service coverage.
9. **Incomes not retrieved:** pharmacists, PEs, CPAs, vets/dentists/optometrists, owner-operators; headcounts not retrieved for CRNAs, adjusters, PEs, carriers.

## RECOMMENDATION

**Build for #7 (CDL owner-operators / small fleets), conditional on gaps 1-4 closing.** It is the only niche in this cluster where (a) the rule set is federal and deterministic rather than 50-state fan-out, (b) the buyer has no employer doing it for free, (c) penalties are written in dollars, (d) the watering holes are named, public and cheap, and (e) the one-week no-backend SwiftUI build is genuinely sufficient.

**#1 (locum / 1099 independent clinicians) is the wealth play and the fallback**, but only with a sharp wedge: *per-state computed CME remaining by mandated topic*, which is the thing CE Broker paywalls into a Pro+ tier that excludes many professions and which CredBook (on its published feature list) appears only to log, not compute. Do not build a generic expiry tracker there — four already exist, two of them free.
