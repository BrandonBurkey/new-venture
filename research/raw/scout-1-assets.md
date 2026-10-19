# Scout 1 — Cluster: "High-value assets with compliance/insurance paperwork"

Date: 2026-10-19 · Researcher: Scout 1 (market research subagent)
Target: ONE niche, PAID iOS app. v1 = SwiftUI / iOS 17+ / SwiftData / StoreKit 2 / local notifications / on-device PDF. No backend, no accounts, no licensed data, no regulated advice.

---

## 0. RESEARCH INTEGRITY NOTES — READ FIRST

**What I could NOT verify (proxy / tool limits):**

- `WebFetch` DNS-failed (`getaddrinfo ENOTFOUND`) on **every** forum and vendor domain I tried: `www.trawlerforum.com`, `forums.sailboatowners.com`, `forum.gcaptain.com`, `grassrootsmotorsports.com`, `www.capterra.com`, `www.hagerty.com`, `www.dco.uscg.mil`. **I therefore could not open a single forum thread or App Store page directly.**
- All "verbatim" quotes below come from **search-engine snippet extraction of those pages**, with the source URL given. They are real strings the search index pulled off real pages, not paraphrases — but I could not independently re-open the page to confirm surrounding context, username or date. **Every such quote is marked `[snippet-only]`.** Treat as medium confidence; a human should re-open the URL before this goes in a pitch deck.
- `apps.apple.com` was reachable only as search results, never fetched. **No rating COUNTS could be confirmed for most iOS incumbents.** Where I have a rating count it is flagged.
- Reddit is blocked. Subreddit member counts below are third-party estimators (GummySearch / PainOnSocial) that **disagree with each other by 2–4x**. Flagged as unreliable.
- **Web search budget ran out** (200-call cap) before I could close: (a) ATF Form 5320.20 user complaints, (b) total count of active USCG documented vessels, (c) AKC/OFA breeder verbatim complaints, (d) ATF Type-03 FFL licensee count. These gaps are marked `[GAP]`.
- Several official `.gov` PDFs were indexed and quoted by search but not fetchable by me (USCG NVDC fee schedule, eCFR). Amounts are quoted from snippets of those official PDFs.

**I have invented no numbers.** Where I estimate, it says `(estimate)` and shows arithmetic.

---

## 1. SCORES TABLE

Scores 1–5. "Comp weakness" 5 = blue ocean / incumbents terrible.

| # | Niche | Pain-$ | Wealth | Comp weakness | v1 buildability | Reachability | WTP sub | TOTAL | Verdict |
|---|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| 2 | **Commercial / charter captains & mariners** | 5 | 3 | 3 | 5 | 5 | 4 | **25** | **PURSUE** |
| 3 | **Show horse owners / trainers** | 4 | 5 | 3 | 4 | 5 | 4 | **25** | **PURSUE** |
| 8 | **WILDCARD A: amateur racers / HPDE track-car owners** | 4 | 4 | 5 | 5 | 5 | 3 | **26** | **PURSUE (cheapest test)** |
| 4 | Firearms collectors (NFA / C&R) | 4 | 3 | 4 | 3 | 4 | 3 | 21 | PARK (rules in flux + store risk) |
| 1 | Recreational boat / yacht owners | 3 | 3 | 2 | 5 | 4 | 2 | 19 | PARK |
| 9 | WILDCARD B: technical divers / rebreather owners & dive pros | 3 | 3 | 4 | 4 | 3 | 2 | 19 | PARK |
| 5 | Classic / collector car owners | 2 | 5 | 3 | 5 | 4 | 2 | 21 | KILL (no hard deadline) |
| 7 | Purebred dog breeders / exhibitors | 3 | 2 | 2 | 4 | 4 | 2 | 17 | KILL |
| 6 | Art & collectibles owners | 2 | 5 | 2 | 3 | 2 | 3 | 17 | KILL |

Note: wildcard A edges out on total but is scored on a thinner evidence base than #2 and #3 (I found its rule sets and complaints but not its audience-size numbers before the search budget ran out). I rank #2 and #3 as the top two on evidence quality; A is the best *cheap experiment*.

---

## 2. NICHE 1 — Recreational boat / yacht owners

**ICP (one line):** US owner of a USCG-*documented* recreational vessel (documentation effectively starts at 5 net tons, i.e. roughly 26 ft+), who pays for a marina slip, an annual haul-out and an agreed-value hull policy — the cohort inside the 11M registered boats that actually has recurring paperwork.

### THE EXPENSIVE MISTAKE
Three separate, confirmable money events — all small:

1. **Late / lapsed Certificate of Documentation.** Official NVDC instruction (09-2025): renewal is **$26.00/yr**; "Renewal requests received up to 30 days after the expiration date of the COD will be considered late and will require payment of a **$5 late fee**"; at 31+ days the COD "will result in the COD being expired and will require reinstatement." Reinstatement is via Form CG-1258 at **$84.00** per the NVDC exchange/reinstatement instruction. So one occurrence = **$84 + lost time** (vs $26). Source: https://www.dco.uscg.mil/Portals/9/DCO%20Documents/NVDC/Instructions/09-2025/COD%20RENEWAL%20INSTRUCTIONS%2009-2025.pdf and https://www.dco.uscg.mil/Portals/9/DCO%20Documents/NVDC/Instructions/EXCHANGE%20REINSTATEMENT%20RETURN%20TO%20DOCUMENTATION%2003-2025.pdf
2. **Third-party renewal-scam overpay** (the *real* observed loss). Forum member reported paying **"$525.00"** total to a look-alike site for reinstatement + 1 year vs **"$110.00"** on the official site. `[snippet-only]` https://www.trawlerforum.com/threads/3rd-party-documentation-website.75639/latest — a ~**$415** one-occurrence loss, but an app can't fix this (it's a phishing problem).
3. **Expired flares.** 33 CFR 175 requires serviceable signals; pyrotechnics expire **42 months from manufacture** and "expired flares may be carried as back up, but they will not count towards the legal requirement" (BoatUS study guide, https://boatus.org/study-guide/equipment/vds). A California Coastal Commission presentation states carrying only expired pyrotechnic flares "could result in a **$1,100 fine**" — https://documents.coastal.ca.gov/assets/water-quality/marina-boating/2020/Marine%20Expired%20Flares%20(PPT)%20-%20Matuk%20-%20MIACC%20June%202020.pdf — **note: that is a state presentation, not a confirmed federal penalty schedule. Do not quote as USCG fact.**
4. **Insurance survey.** A buyer's guide (keelindex, Jun 2026) states boats 30 ft+/20 yrs+/~$50k+ generally need an out-of-water condition & valuation survey within the last 2–5 years, at **$15–$30/ft plus haul-out**; forum reports: "$500 for a 38-ft boat", "$800 survey ... about $17 per foot." https://keelindex.com/articles/insuring-an-older-sailboat `[snippet-only forum figures]`. I found **no** carrier document stating a hard 5-year survey rule — **this is the weakest link in the whole niche's "expensive mistake" story.**

**Honest read: the biggest confirmable single-occurrence cost is $84.** That is not an expensive mistake.

### THE RULE SET — strong on dates, weak on consequence
Genuinely deterministic and public:
- COD renewal/late/reinstatement windows and fees: NVDC 09-2025 instruction (above), 46 CFR 67.500(d) (fees non-refundable).
- EPIRB battery: **46 CFR 25.26-50(c)** — battery replaced "(1) Immediately after the EPIRB is used for any purpose other than being tested; and (2) **Before the expiration date that is marked on the battery**." https://www.law.cornell.edu/cfr/text/46/25.26-50
- Batteries with no legible date: **46 CFR 122.725(e)** — must be replaced at the annual inspection. https://www.law.cornell.edu/cfr/text/46/122.728
- Flares: 42-month manufacture-dated service life (33 CFR 175.125 per CA Coastal Commission quote: a boat may not be used unless each signal is "serviceable and any marked service life has not expired").
- Beacon registration: **47 CFR 80.1065(f)** requires NOAA registration kept current; registration is free at beaconregistration.noaa.gov. **The commonly repeated "renew every 2 years" is AMSA (Australia), not NOAA** — a forum poster's "every 2 years we are required to update and renew registration" was describing AMSA. `[snippet-only]` https://www.trawlerforum.com/threads/uscg-urges-proper-update-epirbs.42367/post-728577 **Do not build a US 2-year NOAA timer. I could not find a NOAA interval.**
- **Hydrostatic release (HRU):** NOT in US CFR. The 2-year HRU replacement figure is Australian guidance (https://beacons.amsa.gov.au/about/float-free-epirbs.asp) plus IMO MSC.1/Circ.1123. **Manufacturer-specific → not deterministic from public US rule. Partial kill on that feature.**
- Zincs / haul-out: pure manufacturer/judgment. BoatUS: replace "when they have been reduced to about one half their original size or weight", check "at each annual haul out" — https://www.boatus.com/expert-advice/expert-advice-archive/2012/july/zincs. **Judgment-based, not computable.**

### INCUMBENTS
| App | Price | Ratings | Weakness |
|---|---|---|---|
| Boat Story: Maintenance Log | Free + IAP | "hasn't received enough ratings or reviews to display an overview" | No rules engine; generic service log. https://apps.apple.com/app/id6780084537 |
| BoatMatey | Free + IAP, premium sub | none shown | Logbook-first, not compliance. https://apps.apple.com/app/boatmatey/id6758239609 |
| Skydancer Marine: Boat Manager | **$99.99/yr or $12.99/mo**, 14-day trial | none shown | Priced at our target but no reviews/traction. https://appshunter.io/ios/app/skydancer-marine-boat-manager/id6786015246 |
| Boating Suite | €4,99 one-off, last updated Sept 2021 | n/a | Abandoned. https://apps.appfollow.io/ios/boating-suite/1501874071 |
| ShipShape Pro / Boat Minder MV | — | Boat Minder MV: **1 review** | Dead. https://appfollow.io/ios/shipshape-pro-maintenance/642760959 |

**Free incumbents are the real competitor, and they are entrenched.** See quotes below.

### REAL COMPLAINTS (verbatim, `[snippet-only]`)
1. > "tried logs and programs, but didn't have the discipline"
   — TrawlerForum, "Who keeps impeccable maintenance records?" https://www.trawlerforum.com/threads/who-keeps-impeccable-maintenance-records.62863/post-1086902
2. > "Separate worksheets cover each major area, including hull, mains, genset, plumbing, and dinghy."
   — TrawlerForum, same thread, describing an Excel approach deliberately chosen over apps. https://www.trawlerforum.com/posts/1350988/
3. > "32 page report with only 1 'A' Recommendation" … "flares expired, which I have corrected"
   — TrawlerForum survey thread. https://www.trawlerforum.com/goto/post?id=877131
4. > "how many Fire Extinguishers on board" and their "last inspection date" … flare expiration dates
   — Trojan Boats forum, describing the BoatU.S. insurance application. https://www.trojanboatsforum.net/wforum/viewtopic.php?p=42802 (shows the *insurer* is already the forcing function)

**The first two quotes are a direct refutation of the product thesis**: this audience has already tried apps and chose a spreadsheet/Sharpie. "Peter … uses the 'Sharpie Method'" — writes install dates directly on the part. That is a zero-cost competitor with perfect retention.

### AUDIENCE SIZE & WEALTH
- ~**11 million** registered boats in use in the US; ~85M annual participants; $54B 2025 retail spend. https://www.nmma.org/press/article/25545 and https://marineindustrynews.co.uk/nmma-us-boating-market-stable-despite-2025-sales-slump/
- **Wealth signal is BAD:** NMMA — "**Sixty-one percent of boaters have an annual household income of $100,000 or less**" and "**Ninety-five percent of boats on the water in the U.S. are less than 26 feet in length**" (i.e. below the documentation/haul-out/survey cohort entirely). Same sources.
- `[GAP]` Count of active USCG documented vessels — search budget exhausted. This is the *actual* TAM and it is much smaller than 11M.
- NMMA Statistical Abstract is member-only; state report costs **$4,825** → no cheap data licensing path (and we've excluded licensing anyway).

### WHERE THEY GATHER
- TrawlerForum — footer reported **24,812 members** (Jan 2021 thread) `[snippet-only]`, ~**75,000 visits/mo** (SimilarWeb est.). https://www.trawlerforum.com/threads/how-many-members-now.55501/post-965434
- SailboatOwners.com forums — https://forums.sailboatowners.com
- The Hull Truth — **no verifiable member count found**; all results were scraper/mirror pages repeating self-description "the world's largest free network for the discussion of boating & fishing." Do not cite a number.
- r/boating ~**202k–312k** (estimators disagree: GummySearch ~202–207k; PainOnSocial 206K in one place, 312K in another). r/sailing figures ranged **220K–828K** across the same two sources — **unusable**. https://gummysearch.com/r/boats/ , https://painonsocial.com/subreddits/boat-captains
- Trade: NMMA; Passagemaker / PassageMaker newsletter (https://passagemaker.com); SBMAR community (https://www.sbmar.com/community/).

### BUILDABILITY
Very high (5). Every date is a user-entered date plus an integer offset: COD expiry ±30 days, flare manufacture date +42 months, EPIRB battery printed date, survey date +N years, engine-hour thresholds. SwiftData models are trivial; PDF export of a "vessel compliance pack" for the insurer/surveyor is a genuinely nice on-device artifact. Zero API needs. The only non-buildable features are the judgment-based ones (zincs, HRU) which we would have to present as user-set intervals, not computed rules.

### VERDICT: **PARK**
**Single biggest reason it would fail:** the pain is worth ~$84 and the incumbent is free — a spreadsheet or a Sharpie — and this audience has *already tried apps and quit*. Wealth signals actively point the wrong way (61% under $100k HHI; 95% of boats under 26 ft, i.e. not even in the documented/surveyed cohort).

---

## 3. NICHE 2 — Commercial / charter captains & mariners ⭐ PURSUE

**ICP (one line):** US-credentialed working mariner — OUPV/"six-pack" charter captain, 100–200T master, or licensed deck/engine officer — whose **paycheck is legally gated on a credential**, and who already pays schools and license consultants hundreds of dollars per renewal cycle.

### THE EXPENSIVE MISTAKE — the strongest in the cluster
Missing the sea-service recency window, or letting the MMC lapse past the grace period, converts a paperwork renewal into **re-testing + re-taking courses**. Verbatim from mariners:

> "As long as your license has not been expired for more than year, you can renew without sea time. **If you do not have one year of sea time in the past five years you will need to complete an at-home open book test.**"
— gCaptain forum `[snippet-only]` https://forum.gcaptain.com/t/reinstate-an-expired-uscg-license/45425

> "For endorsements/licenses that have been expired beyond the one-year 'grace period,' **the recency generally isn't applied, so only courses and testing have to be re-done.**"
— gCaptain `[snippet-only]` same/adjacent thread

> "Since you did not place your license in continuity, you are **most likely going to have to retest / course to get it back as though you never had a license.**"
— gCaptain, "Continuity license" https://forum.gcaptain.com/t/continuity-license/3031 `[snippet-only]`

> "Assuming you don't have the one year of sea time in the last five … you would need **the open book at home test for your license, and for STCW: Basic Safety Training Refresher course(s).**"
— gCaptain, license renewal thread https://forum.gcaptain.com/t/license-renewal-questions/10704 `[snippet-only]`

**Dollar cost of ONE occurrence (estimate):** I could not get a US school price list before the search budget ran out, so here is the arithmetic with the inputs I do have, clearly flagged:
- STCW Basic Training Refresher + Advanced Firefighting Refresher: `[GAP — no verified US price]`. The one verified training-fee data point I obtained is Australian: AMSA certificate of proficiency fee **AUD $136** (regulator fee only, "Training fees are set by private providers"). https://www.amsa.gov.au/qualifications-training/international-qualifications/basic-safety-training/revalidate-cost
- **(estimate)** The *unambiguous* cost is lost sea pay while off-credential. Mariners cannot legally sail in a credentialed position with a lapsed MMC. One missed 28-day hitch at a conservative $500/day day rate = **$14,000** of lost revenue from one missed date. Arithmetic: 28 × $500 = $14,000. **The $500/day input is my assumption, not sourced — flag it.** Even at $250/day it is $7,000.
- Also verified as a real cost driver: forum posters recommend "paying for a licensing consultant to confirm your specific path" `[snippet-only]` — i.e. people already spend money to solve exactly this question.

This is the only niche in the cluster where missing a date **stops income**, not just costs a fee.

### THE RULE SET — public, written, numeric
- **Officer recency:** O*NET/CareerOneStop credential pages (sourced from USCG requirements) state National Mate 500/1600 and National 2nd Mate recency as "**90 days in the past 3 years on vessels of appropriate tonnage**", renewal "**Every 5 Year(s)**", renewable by re-exam or Continuing Professional Development. https://www.onetonline.org/link/certinfo/10913-B and https://www.onetonline.org/link/certinfo/10886-B
- **STCW refresher trigger:** 360 days sailing in the past 5 years; SIU school notice — mariners "can count ROS sea time toward their sea service requirement of **360 days sailing in the past five years**, when renewing Basic Training, Advanced Firefighting, and Proficiency in Survival Craft." https://www.seafarers.org/union-school-welcome-nvic-modifications/
- **OUPV originals:** "at least **360 days** of qualifying boating experience, including **90 days within the last three years**." https://marinerslearningsystem.com/pages/oupv-six-pack-captains-license
- **Day-credit arithmetic is explicitly rule-based:** "Time-and-a-half credit will not be allowed without verification in the letter of service (or on the discharges) that the day consisted of a **12-hour workday** while working on a two-watch system." `[snippet-only]` gCaptain https://forum.gcaptain.com/t/any-advise-on-how-to-write-my-license-renewal-sea-service-letter/10487 — **this is exactly the kind of thing a deterministic engine should compute, and mariners currently get wrong by hand.**
- **Drug-test program:** 46 CFR 16.230 (eCFR, current as of Aug 2026) — random testing programs; explicitly applies to "all US flagged vessels in commercial service, regardless of vessel size or capacities, including what are commonly known as **Six Pack Charter Vessels**"; annual MIS report "**by 15 March of the following year**"; 2019 random rate **50%**, reducible to 25% only after two consecutive years under a 1.0% positive rate. https://www.ecfr.gov/current/title-46/chapter-I/subchapter-B/part-16/subpart-B/section-16.230 and https://professionalmariner.com/coast-guard-issues-safety-alert-on-charter-vessel-drug-testing/
- **TWIC:** 5-year card. `[GAP — I did not get a TSA citation; none of the mariner apps I found handle TWIC at all, which is itself a product gap.]`
- **Radar observer renewal:** `[GAP]` — searched, found nothing authoritative; budget exhausted.

**Verdict on rules: mostly excellent.** Dates and day-counts are numeric and public. The one caution: USCG renewal paths have per-endorsement branches and NVIC updates, so the engine must present *the user's own computed day totals* and *link to the rule*, never "you are qualified."

### INCUMBENTS
| Product | Price | Ratings | Weakness |
|---|---|---|---|
| **SeaLog** (Training Resources Ltd) | **FREE** | `[GAP]` | The real threat. Tracks sea time, exports "a spreadsheet matching the Coast Guard Sea Service form", renewal reminders, cert storage, offline. **BUT: "Data is stored on secure U.S. servers"** → requires an account + server, which is our wedge (mariners are notably wary of their sea-time record living on someone's server). https://fishermensnews.com/training-resources-limited-launches-app/ |
| SeaTime Tracker: Crew Logbook | `[GAP]` | `[GAP]` | AIS-based auto-logging, but PDF templates target **MCA/PYA/Nautilus (UK)** formats — wrong country for USCG. https://mwm.ai/apps/seatime-tracker-crew-logbook/6758010893 |
| eMariner | `[GAP]` | `[GAP]` | Cert expiry + DP day counting + CV generation; "aimed more at general crew management than sea service documentation." https://mwm.ai/apps/emariner/1199937929 |
| Decko ("Maritime Super App") | `[GAP]` | unverifiable | Marketing page; user counts unverified. https://decko.bolt.host/ |
| **License consultants / schools** | hundreds of $ per cycle | — | The *expensive* incumbent, and the one people actually pay. |
| Free: NMC monthly performance reports, paper discharge slips, Excel | $0 | — | Honest: most mariners keep discharges in a shoebox and a Word letter. |

**Competitive weakness = 3, not 5**, purely because SeaLog is free and USCG-format-correct. Our differentiation must be: no account, no server, computes recency *windows* (not just logs days), handles the 12-hour/1.5-day rule, and exports a CG-719S-shaped PDF on device.

### REAL COMPLAINTS (verbatim, `[snippet-only]`)
1. > "if you don't list each specifically by date, then they don't want/accept sea time letters of over three years"
   — gCaptain https://forum.gcaptain.com/t/any-advise-on-how-to-write-my-license-renewal-sea-service-letter/10487
2. > "Since you did not place your license in continuity, you are most likely going to have to retest / course to get it back as though you never had a license."
   — gCaptain https://forum.gcaptain.com/t/continuity-license/3031
3. > "Time-and-a-half credit will not be allowed without verification in the letter of service (or on the discharges) that the day consisted of a 12-hour workday while working on a two-watch system."
   — gCaptain https://forum.gcaptain.com/t/license-renewal-questions/10704
4. Thread titles alone are the pitch: "**Sometimes There Is A God — A Story of Sea Time Lost (and then found)**" https://forum.gcaptain.com/t/sometimes-there-is-a-god-a-story-of-sea-time-lost-and-then-found/5200 ; "**A request for Mr Cavo's attention at the NMC regarding old sea time records**" https://forum.gcaptain.com/t/a-request-for-mr-cavos-attention-at-the-nmc-regarding-old-sea-time-records/1619 . One poster out of the industry ~20 years "described requesting archived sea service records from the Coast Guard, which took weeks."

### AUDIENCE SIZE & WEALTH
- **~200,000** Americans hold a valid Merchant Mariner Credential as of 2023 (GAO, via MarineLink). https://www.marinelink.com/news/numbers-gao-examines-americas-mariner-541247 and GAO-23-106629 https://www.gao.gov/assets/gao-23-106629.pdf
- **20,451** original MMC applications submitted in 2024 (same source) → a steady ~20k/yr inflow of first-time credential holders, i.e. a renewing cohort that never stops.
- 2017 MARAD: 13,607 unlimited-credential mariners needed vs 11,768 actively sailing — a deficit of 1,839; GAO notes USCG "systems are not currently structured to provide granular details." Scarcity → wage leverage → ability to pay.
- Wealth = 3 not 5: mariners are well-paid wage earners, not HNW. But their **willingness to pay to protect a license is high** (they already buy consultants, schools, $136-class regulator fees).
- `[GAP]` OUPV/six-pack issuance count — not found; NMC licensing statistics or NOAA charter-fishing economic surveys are the next place to look. NMC does publish monthly performance reports: https://dco.uscg.mil/Portals/9/NMC/pdfs/reports/performance/2025/performance.pdf

### WHERE THEY GATHER
- **gCaptain forum** — the single best venue in this entire cluster; license/renewal threads are its highest-traffic category. https://forum.gcaptain.com (member count `[GAP]`)
- Professional Mariner (trade press) https://professionalmariner.com ; Fishermen's News https://fishermensnews.com ; MarineLink https://www.marinelink.com
- Schools as channel partners: Mariners Learning System (https://marinerslearningsystem.com), MPT (https://mptusa.com), SIU Paul Hall Center (https://www.seafarers.org) — these sell to exactly our ICP and have newsletters.
- ScubaBoard has an active "Which USCG Captain's License Can I Qualify For?" thread — dive-boat captains overlap with wildcard B. https://scubaboard.com/community/goto/post?id=6029494
- Facebook: charter-captain and license-prep groups `[GAP — not verified, reddit/FB not reachable]`

### BUILDABILITY
Excellent (5) and genuinely the best fit to the constraints. Core object = a sea-service day entry (vessel, tonnage, propulsion, route, dates, watch system) in SwiftData. The engine computes rolling windows — days in last 3 years, days in last 5 years, 1.5-day credit where the 12-hour two-watch flag is set — and fires local notifications as a window is about to close. Credential/endorsement expiries with their own grace-period math. Export: an on-device PDF laid out like a CG-719S sea service record plus a letter-of-service template with each period listed by date (directly answering complaint #1). No accounts — and "your sea time never leaves your phone" is a real selling line against SeaLog's US-servers model. One week is tight but achievable if we ship recency-windows + PDF only, and skip drug-test MIS and TWIC for v1.1.

**App-Store-safe framing:** "Organize your own sea service record and see your own day totals against the published recency windows. Links to 46 CFR and NVIC. Not a Coast Guard product; does not determine your eligibility — the National Maritime Center does."

### VERDICT: **PURSUE**
**Single biggest reason it would fail:** **SeaLog is free, already does sea-time + reminders, and already exports a USCG-form-shaped spreadsheet.** If its reminder quality is good, our paid app has no room. First action before writing code: get SeaLog installed, screenshot it, and confirm whether it computes *recency windows* or merely *logs days*. If it only logs, we win; if it computes, kill.

---

## 4. NICHE 3 — Show horse owners / trainers ⭐ PURSUE

**ICP (one line):** The USEF/USHJA-rated hunter-jumper or dressage competitor (amateur owner or small professional) campaigning 1–6 horses at A/AA shows — the person already writing $300 entry checks and $1,800–$2,500 per show weekend.

### THE EXPENSIVE MISTAKE
Arriving at a show with out-of-date paperwork = horse excluded, entry money gone, trip wasted.
- **Hard exclusion is written policy, not folklore.** Virginia VDACS guidance to event managers: a horse without a current test is to be "**excluded from participation in the event and preferably asked to leave the grounds**", and "**all horses at the event require a current test regardless if they are participating or not**." https://www.vdacs.virginia.gov/pdf/eia-faq.pdf . A Virginia fairground states a horse arriving without a current test "will be **refused entry, with no exceptions**." https://www.statefairva.org/p/getinvolved/305
- **Critical rule detail an app must get right (and humans get wrong):** VDACS — "the test is valid for **one year from the date blood was drawn, not from the report date**." Same URL. That single sentence is the product.
- **Cost of one occurrence (estimate):** Mid-Atlantic A-show weekend "about **$2,000 to $2,500** with travel"; a Maryland A-rated show entry fee "**about $300**, not counting day fees." `[snippet-only]` Chronicle of the Horse https://forum.chronofhorse.com/t/cost-of-showing/440539 . Arithmetic: forfeited entries + shipping + stabling + trainer day fees for a wasted weekend ≈ **$2,000–$2,500 per occurrence**, plus the lost qualifying points (which can cost a whole season's goal).
- **Deadline fees are separately documented and purely date-driven:** "Entries close May 30, 2026. Entries submitted after this date will be assessed a late entry fee" — **$60 late fee, post entries an extra $60** (hunter/jumper prize list); another show charges **$25 per horse** for late postmark; a 4-H district show charges "**a late fee of $50 (flat rate), plus the $10 per class late entry fee**" and requires the Coggins paperwork on site. https://d84-h.tamu.edu/files/2025/03/2025_District-8-4-H_Horse-Show_Participant-Letter.pdf
- **FEI level:** "any horse/rider competing at an FEI competition **without a valid FEI registration will be automatically disqualified**" (British Showjumping warning). https://britishshowjumping.co.uk/news/international-competitors-licence-and-fei-registration . FEI registrations "**expire on the 31st December each year regardless of when** athlete or horse has been registered or purchased" and must be renewed before the first FEI competition each calendar year. https://www.equestrian.org.au/node/4418 — a single hard annual cliff, trivially computable.

### THE RULE SET — the best written rule set in this cluster
- **USEF GR845 vaccination:** "Beginning December 1, 2015, **all horses entering the grounds of a Federation-licensed competition must be accompanied by documentation of Equine Influenza Virus and Equine Herpes Virus (Rhinopneumonitis) vaccinations within six months prior to entering the stables.**" https://usef.org/media/press-releases/13335_usef-equine-vaccination-rule and https://thehorse.com/?p=13507 . USEF publishes a standard vaccination record form: https://files.usef.org/assets/R8HwrnhaKZ8/equinevaccinationrecord.pdf . **Caution: a 2022 USEF release refers to "GR844 (USEF Vaccination requirements)", so the rule has been renumbered/revised — the engine must cite the current article, and we must re-check the live rulebook.** https://usef.org/media/press-releases/usef-supports-fei-temporary-measures-for-vaccine
- **Coggins/EIA:** 12 months, dated from blood draw (VDACS, above); echoed by state and show rules (Utah Extension: "negative EIA test within the last 12 months" https://extension.usu.edu/equine/research/intrastate-and-interstate-travel-requirements-for-horses.php ; Louisiana within one year https://www.lsuagcenter.com/~/media/system/7/7/a/7/77a7d626f0d7d1d57caaf30f73b3e5bd/pub3375equineidrequirements2015%20pdf.pdf ).
- **CVI (interstate health certificate):** federal baseline requires an ICVI for interstate movement (2013 regs); **30 days** typical — California "valid for **30 days from the date of inspection**", Wyoming "valid for 30 days"; Penn State Extension: "CVIs typically expire after thirty days, but some states may allow for extensions up to six months… **Requirements and length of validity are determined by each state.**" https://www.cdfa.ca.gov/ahfss/animal_Health/pdfs/Equine_Interstate_Movement_Questions_and_Answers.pdf , https://extension.psu.edu/understanding-certificates-of-veterinarian-inspection-health-certificates
- **Outbreak shortening:** CA — "in cases of a Vesicular Stomatitis or other disease outbreak, a CVI may be valid for **less than 30 days (e.g., seven [7] days** for Vesicular Stomatitis)." Same CDFA URL. Engine needs a manual override, not an auto-rule.
- **Extended/EECVI:** South Dakota's Extended Equine CVI valid "**up to 6 months**" for shows/rodeos but "**not valid for other interstate movement, such as sale, change of ownership, or breeding**"; Tennessee's version "valid for six months **or until the current EIA test expires**" — a dependency between two dates, i.e. exactly a computed value. https://aib.sd.gov/pdfs/2019.04.26%20EECVI%20News%20Release.pdf , https://www.tn.gov/agriculture/animals/veterinary-resources/extended-equine-certificate-of-veterinary-inspection-.html
- **USHJA WCHR program rules are published, dated and arithmetic:** members must be current "**by midnight Eastern Time of the final licensed day of a competition**" for points to count; category changes "**by July 1 of the qualifying year**" with points forfeited; standings use "**best four events**"; nine regions, regional points only in the declared region; owner must itself hold WCHR membership; Model Classes and Hunter Classics excluded. https://www.ushja.org/competition/hunter/world-championship-hunter-rider-program/enrollment
- **Weakness:** the deep points/qualifying rules live in long annual PDFs (USEF Rule Book, USHJA program specs) that get re-versioned each year — maintenance burden, and some sections are member-gated. Not a paywall kill (GR845, Coggins, CVI, FEI calendar-year are all free and public), but it caps how far the "eligibility" feature can go.

### INCUMBENTS — the most crowded of the three finalists
| App | Price | Ratings | Weakness |
|---|---|---|---|
| **HorseBook — Equine Records** | 14-day trial; **Hobby $4.99/mo (3 horses)**, **Pro $9.99/mo or $99.99/yr** | `[GAP]` | Already does "Coggins expirations and vaccine boosters" with advance reminders. **Direct, priced incumbent.** https://apps.apple.com/app/id6759075592 ; Capterra listing https://www.capterra.co.uk/software/1107358/HorseBook |
| **WellHerd — Horse Barn Manager** | IAP **$9.99/mo / $99.99/yr** | `[GAP]` | Vaccination + Coggins document management. https://apps.apple.com/us/app/-/id6753772434 |
| Equine Companion | not listed | `[GAP]` | Local vaccination reminders, works offline — closest to our architecture. https://mwm.ai/apps/equine-companion/6770340359 |
| EquineM | not listed | `[GAP]` | "automated alerts for vaccinations and Coggins tests." https://mwm.ai/apps/equinem/1051296124 |
| EventPass by EquiTrace | not listed | `[GAP]` | Document-expiry notices **and generates show-entry passes** — closest to the real job. https://apps.apple.com/us/app/id6741467537 |
| EQStable (Zoetis) | free (pharma-funded) | — | Free app from a vaccine maker; structurally hard to out-price. https://thehorse.com/?p=16035 |
| Breeders App | **$19/mo** | — | Price ceiling proof. https://slashdot.org/software/horse/iphone/ |
| Free: USEF member portal, barn whiteboard, vet's records, Excel | $0 | — | Honest: the trainer's office wall and the vet's office are the real system of record. |

**Nobody appears to compute the hard parts**: draw-date-not-report-date Coggins math, GR845's 6-month window against the *stable entry* date, CVI 30-day countdown per destination state, FEI Dec-31 cliff, WCHR July-1 and best-four math, and show-entry-close dates. Everyone does "store document, remind me before expiry." That gap is the product.

### REAL COMPLAINTS (verbatim, `[snippet-only]`)
1. > "the test is valid for one year from the date blood was drawn, not from the report date"
   — VDACS FAQ **for event managers**, written because people get this wrong. https://www.vdacs.virginia.gov/pdf/eia-faq.pdf
2. > "show officials around the country have been cracking down on enforcement of having negative Coggins tests with horses"
   — TheHorse.com, "EIA Awareness Spreads" https://thehorse.com/?p=6691 (article body paywalled)
3. > "a full-service barn for A/AA shows rarely comes in under $1,800 per show"
   — Chronicle of the Horse forum https://forum.chronofhorse.com/t/real-talk-whats-everyone-paying-these-days?page=7
4. > "about $3,000 a month for all-in expenses is on the low end there, with local rated shows around $5,000 each" (SoCal)
   — Chronicle of the Horse https://forum.chronofhorse.com/t/how-much-does-it-really-cost-to-show/416392?page=3

**Honest gap: I found NO verbatim complaint from an owner who personally missed a Coggins/CVI deadline.** Searches for "turned away at the gate" quotes returned regulator text and enforcement news, not first-person stories. That is a genuine evidence hole and a direct pre-build validation task: post in the Chronicle of the Horse forum and ask.

### AUDIENCE SIZE & WEALTH
- USEF: "**Over 150,000 members**", "**2,400+ competitions licensed**", "**Over 200,000 horses registered**" (USEF membership flyer, undated). https://usef.org/forms-pubs/XRWi0oEpD_c
- USHJA document: "200K horses registered (life or annual)", "**185K horses registered for life**", "**1.7MM Horse Results Processed Annually**", "1,100 USEF competitions annually" (conflicts with 2,400+ licensed — likely licensed vs supported). https://www.ushja.org/download_file/view/1113/990
- **Wealth = 5.** Annual cost per show horse: board/care ~$12,000 (range $6,000–$24,000), training/coaching ~$15,000 (to $40,000), show fees/travel ~$6,000 (to $20,000) per a 2026 price guide (**low-confidence source: duplicate domains**, https://new.risingsunartscentre.org/news/show-horse-price-guide-2026.html); forum owners report ~$10,000/yr before showing at home, and ~**$100,000/yr** for a leased quality horse campaigning in SoCal. https://forum.chronofhorse.com/t/cost-of-showing/440539 . A $60/yr app is a rounding error against a $300 entry fee.
- FEI fee scale (Australia, 2026): **$122/registration/yr** per athlete and per horse. https://www.equestrian.org.au/node/6592
- `[GAP]` USEF has no 2025 annual report I could reach; the 150k/200k figures are from an undated flyer. Verify.

### WHERE THEY GATHER
- **Chronicle of the Horse forum** — the center of gravity; threads cited above have 7+ pages. https://forum.chronofhorse.com (member count `[GAP]`)
- USEF / US Equestrian (https://usef.org), USHJA (https://www.ushja.org), USDF, FEI (https://data.fei.org), APHA
- TheHorse.com (https://thehorse.com), Jumper Nation (https://jumpernation.com), Eventing Nation/USEA (https://useventing.com), Stable Management (https://stablemanagement.com), Saddle Horse Report (https://www.saddlehorsereport.com)
- Shows as physical channel: Capital Challenge, Devon, WEF/Wellington, Thermal — barn-aisle word of mouth is the cheapest acquisition in the cluster.
- Breed/discipline Facebook groups `[GAP — not verified]`

### BUILDABILITY
Strong (4). Models: Horse, Document (Coggins / vaccination / CVI / EECVI / FEI registration / USEF recording), Competition (entry-close date, first licensed day, stable-entry date). Engine: Coggins = draw date + 12 months; GR845 = each vaccine date + 6 months tested against the *stable entry* date, not the ride date; CVI = issue date + per-state validity (a small bundled JSON of state validity periods, public data, no licence); FEI = Dec 31 cliff; USHJA = July-1 and best-four. Local notifications at T-60/30/7 days. On-device PDF: a per-horse "show paperwork pack" (all current docs + computed expiry dates) to hand the show secretary. Risks inside one week: the per-state CVI table and the USEF rule renumbering need careful hand-curation, and multi-horse UX is more surface than the mariner app. Ship hunter-jumper + 10 states in v1.

**App-Store-safe framing:** organizes the owner's own documents, counts days from dates the owner entered, cites the public rule, and prints a pack. It does not certify health, does not issue a CVI, and says "confirm with your show secretary and destination state."

### VERDICT: **PURSUE**
**Single biggest reason it would fail:** HorseBook and WellHerd already ship Coggins/vaccination expiry reminders at **exactly our target price ($99.99/yr)**, and Zoetis gives EQStable away free. We'd be entering a market that just got competitive in 2025. We only win on the computed layer (draw-date math, GR845 vs stable-entry, per-state CVI, FEI/WCHR cliffs) — if buyers don't perceive that as different from "reminder app," we lose on brand and we lose to free.

---

## 5. NICHE 4 — Firearms collectors (NFA / C&R)

**ICP (one line):** The multi-stamp NFA owner or Type-03 C&R licensee — a hobbyist with $20k–$100k+ in registered items, a gun trust, an insurance rider, and a legal duty to keep records.

### THE EXPENSIVE MISTAKE
Not dollars — **felony exposure and forfeiture.** ATF: a registered possessor who is not an FFL/SOT "**may not move a machine gun, SBR, SBS, or destructive device across state lines without prior written approval from ATF's NFA Branch**" (Form 5320.20), approved only if the trip is "consistent with state and local law." https://atf.gov/node/38481 . Secondary sources: skipping the form is "a felony under the NFA rather than a paperwork citation" (https://www.thetruthaboutguns.com/moving-or-traveling-with-your-nfa-collection/) and risks "**forfeiture of the firearm and loss of the ability to own NFA items**" (https://taxsharkinc.com/how-to-fill-out-atf-form-5320-20-w-examples-faqs/). **Both are blogs, not statute — I could not confirm statutory penalty text.**
**Dollar cost of ONE occurrence (estimate):** forfeiture of a transferable machine gun (market value well into five figures) + criminal defense. I have **no sourced figure** and will not invent one. The honest statement is: the cost is non-monetary and catastrophic, which is a *worse* sales story than a $2,000 wasted horse show weekend, because the buyer's response to catastrophic-and-legal is to call a lawyer, not buy a $40 app.

### THE RULE SET — **this is the kill**
- C&R bound book: 27 CFR 478.125 — "Each licensed collector shall enter into a record each receipt and disposition of firearms curios or relics… maintained in bound form"; acquisitions "**not later than the close of the next business day**", dispositions "**not later than 7 days following**." https://regulations.atf.gov/478-125/03-1657 , https://www.ecfr.gov/current/title-27/chapter-II/subchapter-B/part-478/subpart-H/section-478.125 . Note the search result warns the detailed field/timing text came from the **2003/2009** version and the current eCFR excerpt covered only armor-piercing ammunition — **the live rule must be re-read.**
- No Form 4473/NICS on C&R disposition; records need not be surrendered at non-renewal (ATF handbook, via https://forum.lugerforum.com/showthread.php?p=231682).
- **The rules are actively changing underneath us.** A Federal Register public-inspection document proposes "generally letting individuals transport affected NFA firearms interstate **without individualized Form 20 approval**, for lawful purposes, for up to **365 days**" where legal at destination. https://public-inspection.federalregister.gov/2026-09161.pdf — **a proposal, not final rule.** Separately, ATF's 2026 posture on suppressors/SBRs/SBSs is described as "a Justice Department enforcement policy tied to a court injunction, not a repeal of the statute." https://www.concealedcarry.com/?p=4257365 . ATF's own FAQ reportedly still requires Form 20 for SBRs/SBSs even unregistered, via the GCA. https://ar15discounts.com/atf-issues-faq-about-nfa-transfer-guidance/
- **State-by-state transport/magazine/suppressor legality is the feature customers actually want — and it is the one we must not build.** Telling a user "your route through NY/NJ/MA is legal" is legal advice about criminal exposure. That is both an App Store review hazard and a liability we cannot carry. Per the brief's own note: honestly, an app here can **only** organize the owner's own data (stamp images, serials, trust docs, a bound-book-shaped A&D log, rider schedule) — and that is a notepad, not a compliance engine.

### INCUMBENTS
| App | Price | Ratings | Weakness |
|---|---|---|---|
| Stamp Stack | `[GAP]` | "hasn't received enough ratings or reviews to display an overview" | Suppressor/trust wait-time focus. https://apps.apple.com/us/app/stamp-stack/id6757575828 |
| **Arsenal Tracker** | Free + IAP | **2.5 / 5 from 2 ratings** | Tracks NFA form status, control numbers, approval dates — but privacy label "lists data linked to the user's identity," contradicting its stated no-tracking. https://apps.apple.com/app/id6758967269 |
| ArmoryHub | `[GAP]` | `[GAP]` | Web inventory incl. tax stamps. https://www.armoryhub.app/features/inventory |
| NFA Tracker | free website | — | Crowdsourced wait-time DB, not inventory. https://www.thefirearmblog.com/blog/2016/12/08/nfa-tracker/ |
| Silencer Shop app | free | — | Dealer kiosk workflow. https://www.thefirearmblog.com/blog/2016/09/16/silencer-shop-app/ |
| FastBound | commercial | — | Real bound-book software, aimed at 01/07 FFLs not collectors. https://www.fastbound.com/ffl-blog/ffl-bound-book-for-ad-records/ |
| Free: paper bound book, Excel | $0 | — | Legally sufficient and universally used. |

### REAL COMPLAINTS (verbatim, `[snippet-only]`)
1. > "the regulation requires entering each receipt and disposition, whether or not the license was used to obtain the gun"
   — 1998 ATF letter quoted in an AR15.com thread on updating C&R records. https://ar15.com/forums/armory/UPDATING-CandR-RECORDS-QUESTIONS-hinking/14-174340/
2. > "entering the data had no downside and gave a clear record of what happened to each gun"
   — forum poster on C&R bound-book practice, via https://www.badgerandblade.com/forum/threads/ffl03-c-r-arrived-and-a-question.607525/
3. A Badger & Blade user asking "whether older guns bought through retail should go into the bound book" — "**That thread has no clear answer in the excerpt.**" Same URL. The confusion is real but it's *legal* confusion, which we cannot resolve.

These are confusion, not pain-with-a-price-tag. **No verbatim complaint found of a collector who lost money because an app didn't exist.**

### AUDIENCE SIZE & WEALTH
- NFRTR, ATF page updated 2026-06-08: "**Silencers 6,439,813**" registered (excludes destroyed/exported/voided). https://www.atf.gov/file/11831/download . Prior anchors: 2,664,774 silencers (final May 2021 Firearms Commerce Report); ~3.5M by Jan 2024; ~4.86M by Jul 2024 (NSSF, https://nssf.org/articles/firearm-suppressor-registrations-outpace-historic-figures); 5,776,685 as of Jan 2026 (https://www.guns.com/news/2026/02/13/nfa-form-4-applications-for-suppressors-up-394-percent). **Massive and growing fast.**
- Total FFLs: 132,383 (2023) → 128,690 (2024) → **127,739 (2025)**; "the most common type of FFL is actually the Type 03 Collectors FFL" but **no per-type count published** in what I found. https://rocketffl.com/ffl-license-types/ `[GAP — ATF licensing statistics not reached]`
- C&R license costs **$30 for 3 years** → low-cost hobby entry, which correlates with *lower* willingness to pay a subscription. https://www.rjkventures.com/blogs/guns/getting-a-ffl03
- ATF license-type reference: https://www.atf.gov/resource-center/infographics/types-federal-firearms-licensees-ffls

### WHERE THEY GATHER
AR15.com Armory (https://ar15.com/forums/armory/), Curio & Relic Firearms Forum (https://www.tapatalk.com/groups/curioandrelicfirearmsforum/), LugerForum (https://forum.lugerforum.com), Michigan Gun Owners (https://www.migunowners.org/forum/), MassGunOwnership (https://massgunownership.com/c&r-records.html), The Firearm Blog "Silencer Saturday" column (https://www.thefirearmblog.com), NFA Tracker, Silencer Shop. Reachable and cheap — this is the niche's strongest attribute.

### BUILDABILITY
Mechanically easy (an A&D log + stamp vault + reminder is a weekend), but **constrained to near-uselessness** by what we're allowed to say. The valuable features are a 50-state transport/magazine/suppressor legality engine (= legal advice, excluded) and Form 20 status (= a government workflow we cannot touch without a backend). What's left is an organizer. Add App Store risk: firearms-adjacent utilities draw extra review scrutiny, and a rejection would burn our one-week budget.

### VERDICT: **PARK** (closer to kill)
**Single biggest reason it would fail:** the only feature worth paying for — "is this legal on my route / in my state" — is legal advice we've excluded and cannot responsibly ship, and the underlying federal rules are mid-rewrite (a 2026 Federal Register proposal would remove the Form 20 requirement that justifies the app). Building a deterministic engine on rules that may be repealed inside our payback window is a bad bet.

---

## 6. NICHE 5 — Classic / collector car owners

**ICP (one line):** Owner of 1–5 collector vehicles on an agreed-value, mileage-limited policy (Hagerty / American Collectors / State Farm classic), garaging $100k+ of appreciating metal.

### THE EXPENSIVE MISTAKE
Underinsurance at total loss. But — critically — **there is no missed deadline that causes it.** Hagerty's own guidance is a soft "check your vehicle's value at **every renewal**"; Hagerty Canada warns policies "written even two or three years ago can carry significant gaps between the insured value and current replacement cost." https://www.hagerty.com/resources/insurance-guides/what-is-agreed-vs-guaranteed-value-insurance , https://www.hagertybroker.ca/resources/hagerty-insights/these-collector-cars-are-surging-in-value-is-your-book-keeping-up
- **The claimed "3-year appraisal refresh cycle" does not exist.** I searched specifically for it: "I found no source that sets a 3-year update requirement for Hagerty agreed value." Forum owners report "Hagerty did not require an appraisal" and that updates are handled by "current photos by email." `[snippet-only]` https://www.jalopyjournal.com/forum/posts/8830928/ , https://www.tst.forums.ncrs.org/forum/technical-discussion-archives/12576-hagerty-insurance
- **Dollar cost of one occurrence (estimate):** UK Financial Ombudsman decisions show the shape: insurers paying market value where no agreed-value endorsement existed, and in one case averaging three price guides until the ombudsman "ordered it to pay the top figure instead." https://www.financial-ombudsman.org.uk/decision/DRN-5255949.pdf , https://www.financial-ombudsman.org.uk/decision/DRN-3797232.pdf . An Australian trade report warned agreed values "not reviewed since the pandemic price spike left owners short at claim time." https://www.insurancenews.com.au/daily/agreed-value-catching-out-car-owners-as-inflation-spirals . **(estimate)** a 20% valuation lag on a $120,000 car = **$24,000** shortfall (0.20 × $120,000). The inputs (20%, $120k) are my illustration, not sourced.
- **Fatal flaw in the economics:** the fix is a phone call to the broker, costs the owner nothing, and the *insurer* is incentivised to prompt it at renewal. An app adds nothing a renewal letter doesn't.

### THE RULE SET — **the kill**
- Insurance side: **no public written rule.** Every source is "recommend", "review", "varies by carrier." UK broker says "most insurers require re-certification every year" — wrong country, wrong carriers.
- Club judging side: **AACA's judging rulebook was not findable in my results**, and what I did get is secondary ("In the AACA every car starts with 400 points"; 5-judge teams; "only the 1st junior scoring cars qualify for going on to senior judging" — forum, explicitly flagged anecdotal). https://www.crosleyautoclub.com/20Nationals/AACA-Concourse-Judging.pdf , https://www.forums.ncrs.org/forum/technical-discussion/112908-aaca-and-ncrs
- Other clubs do publish: LCOC "vehicles must be at least **ten (10) model years old** as of the year of the National Meet to be eligible for Judging" (https://lcoc.org/wp-content/uploads/2018/07/LCOC_ConcoursRules.pdf), JCNA rulebook (https://www.jcna.com/sites/default/files/files/19_00e_Updates.pdf). But these are **per-club, per-marque, judgment-scored** — a 400-point deduction sheet is an aesthetic opinion, not a computation.
- Registration/emissions exemptions are state statutes (computable from model year) — the one genuinely deterministic piece, and the least valuable.

### INCUMBENTS
| App | Price | Ratings | Weakness |
|---|---|---|---|
| duPont REGISTRY Garage | Free | **4.6/5 from 9 reviews** (third-party tracker) | "operates as a free utility with no subscription tiers observed"; maintenance reminders unconfirmed. https://apps.apple.com/app/6737628315 , https://marlvel.ai/apps/dupont-registry-garage |
| drivve \| Collector Car Values | Free + IAP | `[GAP]` | Value tracking + task reminders + "13,000+ price guides" — **bundles the data we can't license.** https://apps.apple.com/app/id6602898888 |
| Garage One | Free, "unlimited vehicles only with Premium" | `[GAP]` | Registration/insurance/road-pass reminders — closest competitor. https://mwm.ai/apps/garage-one/6783990196 |
| CarVault | `[GAP]` | "not received enough ratings" | https://apps.apple.com/dz/app/carvault-app/id6757206499 |
| Free: Hagerty Valuation Tools, broker renewal letter, club newsletters | $0 | — | Hagerty publishes values free and prompts at renewal. |

### REAL COMPLAINTS (verbatim, `[snippet-only]`)
1. > "check whether the policy actually says 'agreed value', and to get a credible appraisal every couple of years"
   — classic car forum advice thread, via https://www.tst.forums.ncrs.org/forum/technical-discussion/62086-insurance-101-basics
2. > "if a car is insured below its worth, the owner may only receive the agreed amount"
   — same thread.
3. > "agreed values usually drop at renewal to reflect depreciation"
   — https://www.insurancenews.com.au/daily/agreed-value-catching-out-car-owners-as-inflation-spirals
**Note: the forum posts are dated 2005 and 2014** and the formal complaint data is UK. No current US first-person complaint found.

### AUDIENCE SIZE & WEALTH — the best in the cluster
- Hagerty (Aug 2026 agent resource): **43 million** collector vehicles in the US, "**over $1 trillion** in total insurable value", "over 60 million car enthusiasts." https://www.hagertyagent.com/resources/hagerty-insights/from-single-vehicle-to-household-account
- Earlier Hagerty study: 31M collector vehicles, ~18M owners (North America). Hagerty 2024 annual report: "~$1 trillion worth of collectible vehicles in the U.S.", total available market 48M vehicles. https://s28.q4cdn.com/107308082/files/doc_financials/2024/ar/2024-Annual-Report-4.pdf
- 2025 auction/online sales **$4.8 billion**, +10%. https://www.motorious.com/articles/news/shifting-demand-defines-the-collector-car

### WHERE THEY GATHER
AACA (https://aaca.org), NCRS forums (https://www.forums.ncrs.org), Jalopy Journal / H.A.M.B. (https://www.jalopyjournal.com/forum/), British Car Forum (https://www.britishcarforum.com), Professional Car Society (https://professionalcarsociety.org), Camaros.org, Retro-Rides (https://forum.retro-rides.org), JCNA, LCOC, Hagerty Media (https://hagerty.com/media), Motorious, Bring a Trailer. Plus thousands of marque type clubs — good reachability (4) but very fragmented.

### BUILDABILITY
Trivially buildable (5) — a garage with service intervals, mileage-cap tracking, appraisal-age timer, document vault, PDF "collection book." Which is precisely the problem: so easy that four free apps already exist, and the one differentiator (live values) requires the data licence we've excluded.

### VERDICT: **KILL**
**Single biggest reason it would fail:** there is no deadline. Nothing expires, nobody is turned away, no fee is charged, no claim is denied on a date — the "mistake" is a slow valuation drift that the insurer already prompts you to fix free at renewal. Richest audience in the cluster, no computable compliance event to sell them.

---

## 7. NICHE 6 — Art & collectibles owners

**ICP (one line):** Household with scheduled fine-art/collectibles coverage (Chubb, AIG Private Client, Berkley One) — genuinely wealthy, but a tiny and unreachable population.

### THE EXPENSIVE MISTAKE
Underinsurance via stale appraisal, or a loss falling under a category sublimit. Verified sublimit facts: standard homeowner jewelry limit "**for most home insurance companies, the limit is $1,500**"; worked example of "a $1,000 necklace stolen during a house party with a $1,000 deductible, where the policyholder would technically receive **nothing**." https://www.bankrate.com/insurance/homeowners-insurance/does-home-insurance-cover-jewelry , https://www.bankrate.com/insurance/homeowners-insurance/scheduled-personal-property
Also verified and important: a scheduled limit is **not** a guaranteed payout — "the limit scheduled on the property is **not necessarily the amount that will be paid** if the article is lost or damaged." https://blog.central-insurance.com/schedule-it/
**One-occurrence cost (estimate):** the sublimit example above is a **$1,000** loss. For a stale appraisal: **(estimate)** 30% market appreciation on a $250,000 work unrecorded = **$75,000** shortfall (0.30 × $250,000). My illustration; no source gives a worked ACV-vs-agreed example — I searched for one and "None of the results gave a clear ACV versus agreed-value example in dollars."

### THE RULE SET — **the kill**
There is no rule. Every source is a recommendation with a different number:
- "Insurers generally recommend refreshing an appraisal every **three to five years**"; contemporary art "closer to every **two years**." https://appraisily.com/articles/art-appraisals-for-insurance-purposes/
- Blue-chip/volatile every **2–3 years**; stable antiques **3–5 years**. https://articles.appraisily.com/art-appraisals-for-insurance-purposes
- Carrier-specific: Chubb reportedly requires an appraisal only at **$500,000+**, accepting description + estimated value below that. https://www.masterworks.com/academy/posts/how-to-insure-fine-art
- Event-triggered rather than calendar-triggered: conservation work, market shift, carrier change, adding a rider. Same sources.
A deterministic engine computing "every N years" where N is a blog's opinion, varying by carrier and by category, is a fake engine. **Provenance, condition reports and loan-out paperwork are narrative documents, not dates.**

### INCUMBENTS — the strongest incumbent in the whole cluster
| Product | Price | Ratings | Weakness |
|---|---|---|---|
| **Artwork Archive** | **Collector Starter $8/mo annual ($9 mo)**, **Collector Premier $24/mo annual ($28 mo)**, Organization from $29/mo; 14-day trial | **4.9/5 from ~106 reviews (Capterra)**; 4.5/5 from 6 (G2) | Appraisal Tracking is already in the lowest collector tier. https://www.capterra.com/p/169087/Artwork-Archive/ , https://g2.com/compare/artwork-archive-vs-catalogit |
| CatalogIt | — | — | https://g2.com/compare/artwork-archive-vs-catalogit |
| Free: the appraiser, the broker, the insurer's own concierge | $0 | — | AIG/Chubb private-client teams do this *for* the client. |

**4.9/5 from 106 reviews at $96/yr is not a weak incumbent.** The complaints I found are UX nits, not holes:
- > "Poor, annoying user experience. Dimensions, medium, and pricing are all required before you can create an artwork record" and "The inventory number field only allows numbers, no letters, dots or hyphens" — https://theabundantartist.com/artworkarchive-com-review/
- > "The user interface requires a lot of back-and-forth clicking to update things. There should be more shortcuts built into it" — Capterra reviewer, https://www.capterra.co.uk/reviews/169087/artwork-archive
- > "The database can be a little limiting at times, as you can only edit the backend so much, for example certain drop downs are set" — Capterra reviewer, same URL.
- One reviewer notes it's "priced for professionals" and could be "extraordinarily useful for people with their own small personal art collections" — a market-fit hint, but others call it "**incredibly affordable**."

### AUDIENCE SIZE & WEALTH
- Wealth: 5. Reach: 2. Deloitte Art & Finance Report 2025: "close to **121,000 UHNWIs in 2024**", rising to ~**163,725 by 2030**; "around **25% of wealthy investors identify as 'collectors'**", concentrated at **US$5M+** investable assets; UHNWI art & collectibles wealth **US$2.174 trillion** (2022 edition). Survey base only **435 stakeholders**. https://www.deloitte.com/content/dam/assets-zone2/at/de/docs/presse/2025/deloitte-art-finance-report-2025.pdf
- 121,000 UHNWIs is **global**. US households with a $100k+ collection: `[GAP]` — not found; next source would be the Fed's Survey of Consumer Finances.
- Arithmetic that kills it: 121,000 global UHNWIs × 25% collectors × maybe 30% US ≈ **9,000** US prospects (estimate: 121,000 × 0.25 × 0.30 = 9,075). At even a 2% conversion to a $60/yr app that is **~$11,000/yr**. Not a business.

### WHERE THEY GATHER
They don't — not in cheap public places. Art Basel / TEFAF / Frieze (expensive), Artnet and ARTnews, auction-house client lists (Christie's, Sotheby's, John Moran https://www.johnmoran.com), appraiser bodies (ASA, AAA), family offices and private-client insurance brokers. **Reachability 2 is the hard blocker: this audience is reached through their advisors, which is a sales motion, not an App Store listing.**

### VERDICT: **KILL**
**Single biggest reason it would fail:** there is no rule to compute (appraisal intervals are blog opinions that vary by carrier and category), the incumbent is beloved at 4.9/5 and already includes appraisal tracking at $8/mo, and the addressable US audience is in the low thousands and reachable only via advisors — the worst reachability score in the cluster.

---

## 8. NICHE 7 — Purebred dog breeders / exhibitors

**ICP (one line):** Small hobby/preservation breeder with 2–8 breeding dogs doing 1–3 litters/yr, plus AKC conformation showing — passionate, organized, and structurally not wealthy.

### THE EXPENSIVE MISTAKE
I could not find one with a price tag. What I verified:
- **Ohio high-volume breeder civil penalties** (from bill analyses): "**not more than $2,500 for a first violation, $5,000 for a second violation, and $10,000 for a third or subsequent**"; annual application fee **$150–$750** by tier (lowest tier "40 to 60 puppies" sold/yr; earlier law used 9+ litters and 60+ dogs sold; a later bill proposed lowering the threshold to "**six or more breeding dogs**"). https://codes.ohio.gov/assets/laws/revised-code/authenticated/9/956/956.07/9-30-2025/956.07-9-30-2025.pdf , https://legislature.ohio.gov//download?key=9664 — **flagged: penalty figures come from bill analyses of legislation still being amended; verify against current Revised Code.**
- **Crucially, these thresholds exclude our ICP.** A hobby breeder doing 1–3 litters/year is below 40–60 puppies and below 9 litters, so the licensing regime — the only thing with real dollar penalties — doesn't apply to them.
- AKC program consequence: Breeder of Merit holders are audited — "**AKC will be verifying that the last 3 litters over 6 months old (whelped after enrollment in BOM) have been 100% registered.**" https://www.akc.org/wp-content/uploads/2025/11/Breeder-of-Merit-Advance-Application-11.25.pdf . Losing BOM status costs marketing prestige, not a quantifiable sum.
- `[GAP]` "The results do not state a penalty for late or missing paperwork" on AKC litter registration. I did not find an AKC litter-registration deadline at all, and searches for one returned nothing. **If there is no deadline, there is no app.**

### THE RULE SET — partially a kill
- **Health testing is delegated to parent clubs → not a single stable rule set.** CHIC "number is issued when test results that satisfy **the parent club's requirements** for testing are entered in the database"; requirements "differ by breed" (e.g. one French Bulldog club "initially requires that a dog be entered in a hip, eye, patella, and cardiac (heart) registry"). https://www.akc.org/expert-advice/dog-breeding/health-testing-for-a-stronger-breed/ , https://frenchbulldogclub.org/health/testingregistries/ , https://awpga.com/chic.html . That is **~200 parent clubs × their own lists**, each changeable. Building and maintaining that is a data-curation job we've excluded.
- CHIC permanent-ID rule is deterministic and public: "**regardless of breed, each dog must be permanently identified** in order to have test results included in CHIC… microchip or tattoo." Same AWPGA URL. One good rule, one small feature.
- State breeder licensing is deterministic (Ohio above) but only bites above thresholds our ICP is under.
- Some OFA/CHIC tests have validity windows (annual eye exams) `[GAP — not verified; search budget exhausted]`.

### INCUMBENTS
| Product | Price | Ratings | Weakness |
|---|---|---|---|
| **Breeder Cloud Pro** | **from $6.99/mo**, 30-day trial | **79 reviews, ~91% positive** (Capterra) | Multi-species, pedigrees/litters/medical. Established and cheap. https://www.capterra.com/p/176356/Breeder-Cloud-Pro/pricing/ |
| BreederBuddy | **$14.99** (period unconfirmed) | no ratings yet | Health, heat cycles, litters, pedigree, weight charts. https://www.capterra.co.uk/software/1079350/BreederBuddy |
| BreedTracker | `[GAP]` | `[GAP]` | https://www.capterra.ie/software/1103107/BreedTracker |
| Free: AKC online portal, OFA/CHIC public database, parent-club spreadsheets, breed Facebook groups | $0 | — | AKC itself hosts litter registration and DNA services. https://www.akc.org/products-services/breeder-programs/dna/ |

### REAL COMPLAINTS
**No verbatim complaints found.** My targeted search for breeder/exhibitor first-person complaints about expired health testing or redone paperwork was cut off by the search-budget limit, and the earlier searches returned only AKC/OFA policy text and a thread whose answer was absent ("That thread has no clear answer in the excerpt"). I will not paraphrase into quote marks. This is an unfilled evidence hole.

### AUDIENCE SIZE & WEALTH
- AKC 2024: "litter and dog registrations totaled **246,643** and **522,160**"; AKC 2025: "**215,709 litters and 441,126 dogs**", with AKC attributing its net operating loss to "lower registration revenue… lower registration activity throughout the entire year." https://www.akc.org/wp-content/uploads/2026/06/Annual-Report-2024.pdf , https://www.akc.org/wp-content/uploads/2026/06/Annual-Report-2025.pdf
- 2021 was **325,431** litters → **-34% in four years.** A shrinking market.
- `[GAP]` number of breeders — "Nothing in the results addresses how many breeders are licensed."
- **Wealth = 2.** Hobby breeders are famously cash-negative; the Ohio fee tiers ($150) show what this industry considers an expensive annual fee.

### WHERE THEY GATHER
AKC (https://www.akc.org), OFA/CHIC (https://ofa.org), ~200 parent clubs (GSDCA https://www.gsdca.org, DPCA https://dpca.org, American Maltese https://americanmaltese.org, AWPGA https://awpga.com, French Bulldog Club https://frenchbulldogclub.org), Westminster/AKC National Championship, breed-specific Facebook groups (large, free, but closed). Reachable (4) but fragmented across hundreds of breed silos — each a separate marketing effort.

### BUILDABILITY
Fine (4) for a dog/litter/health-test record with expiry reminders and a pedigree PDF. The deterministic layer, though, requires encoding 200 parent clubs' test lists — either we curate it (excluded, and unmaintainable) or we make the user type their own requirements (at which point we're a checklist).

### VERDICT: **KILL**
**Single biggest reason it would fail:** the audience is poor and shrinking (AKC litters −34% since 2021, AKC itself reporting revenue decline), there's an established $6.99/mo incumbent with 79 positive reviews, and the "rule set" is 200 parent clubs' individually-maintained lists rather than one stable public regulation.

---

## 9. WILDCARD A — Amateur racers / HPDE track-car owners: safety-gear expiry + logbook & annual tech ⭐

**ICP (one line):** The SCCA/NASA/PCA club racer or serious HPDE driver with a $40k–$150k purpose-built track car, who shows up to a gated **tech inspection** several times a year and cannot drive if a date on a sticker has passed.

### THE EXPENSIVE MISTAKE
Failing tech = the weekend is gone, non-refundable. Documented, dated, gate-enforced:
- A Canadian club: "**Snell 2010 helmets expired Dec 31, 2023**" and were no longer acceptable at its road racing events. https://www.casc.on.ca/node/1344
- SCCA: stopped accepting 2005-rated Snell and SFI helmets "**as of January 1, 2022**"; Snell/FIA/SFI helmets "show a manufacture date range on their labels and **age out after no more than 15 years**." https://growtiming.scca.com/articles/2015714-helmet-certifications-updated-for-2022
- 24 Hours of Lemons: harnesses must be "**dated within four years of the race**"; a reply calls expired harnesses "a no no." https://forums.24hoursoflemons.com/viewtopic.php?id=3867
- A track-day series required "**a SA-2015 or newer helmet**." https://thefirm.motorsportreg.com/index.cfm/event/event.requirements/uidEvent/181329BE-0072-4DC1-2F3C5FDD84D774D4
- Snell: SA2025 labels entered the market **October 1, 2025**; SA2020 production ends **end of 2026** — a known, dated, cluster-wide forcing event. https://smf.org/standards/sa/2025/SA2025_Press_Release.pdf
- **Cost of ONE occurrence (estimate):** a club race/HPDE weekend entry is roughly $400–$700, plus tow/fuel, plus hotel, plus often a coach. **(estimate)** $500 entry + $300 travel/fuel + $200 lodging = **$1,000** sunk for a weekend you're turned away from, and a new helmet ($400–$800) bought in panic. The entry-fee input is my assumption `[GAP — I did not source a 2026 entry fee before the budget ran out]`. Secondary, well-sourced mitigation: harnesses can be re-webbed, which "renews them and allows them to be used for an additional 4-years" (https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1) — i.e. the *fix is cheap if you know in time*, which is exactly the app's value.

### THE RULE SET — strong, public, and genuinely messy in a way that favors an app
Published and date-based: Snell SA2010/2015/2020/2025 homologation years (https://smf.org/standards/sa/2025/SA2025_Press_Release.pdf), SFI spec dates, FIA 8855/8853 homologation expiry printed on the label, SCCA GCR and NASA CCR, each club's annual logbook/annual-tech requirement.
**But the rules differ per sanctioning body and that is the product, not a bug:**
- NASA (quoted on an S2000 forum): "harnesses that are expired for racing may be used **providing that they are in at least very good condition**." https://s2ki.com/forums/s2000-racing-competition-11/harddog-roll-bar-ok-trackdays-713782
- A Classic Motorsports commenter: out-of-date harnesses "aren't ok for track days. **They won't pass NASA or PCA tech** for instance." https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1
- No Money Motorsports: "**most, but not all** clubs and tracks allow expired race harnesses for HPDE." https://nomoneymotorsports.com/2019/03/11/post-28-a-few-more-tech-tips/amp/
- A Grassroots Motorsports thread: "most organizations need something within the past two cycles, so by 2028 the sticker will need to be a Snell 2020 or 25." https://grassrootsmotorsports.com/forum/grm/learn-me-drivers-safety-gear-expiration-rules/275065/page1
**An app that holds each org's accepted-standards list and computes "your gear vs this weekend's sanctioning body" is solving a real, currently-confusing computation.** `[GAP: I could not retrieve the SCCA GCR text itself, nor FIA 5-year belt rules, nor fuel-cell bladder replacement intervals — all three searched, none found. Must be closed before building.]`

### INCUMBENTS
**Blue ocean (5).** I found **zero** apps for racing safety-gear expiry or logbook/annual-tech tracking. The incumbents are:
- **MotorsportReg** (https://www.motorsportreg.com) — registration platform that *publishes* each event's requirements page but does not track your gear.
- The paper **logbook** in the glovebox, and the tech inspector's sticker.
- Forum threads and "pre-event tech tips" blog posts (https://nomoneymotorsports.com/2019/03/11/post-28-a-few-more-tech-tips/amp/) — i.e. the market is currently served by people writing checklists for free.
This is the only niche in my cluster with no named software competitor.

### REAL COMPLAINTS (verbatim, `[snippet-only]`)
1. > "They won't pass NASA or PCA tech for instance"
   — Classic Motorsports forum, "Out of date harnesses and helmets" https://classicmotorsports.com/forum/grm/out-of-date-harnesses-and-helmets/181105/page1
2. > "most, but not all clubs and tracks allow expired race harnesses for HPDE"
   — No Money Motorsports https://nomoneymotorsports.com/2019/03/11/post-28-a-few-more-tech-tips/amp/
3. > "a 10 second drag car had visited six tracks in two years and nobody had inspected it"
   — forabodiesonly.com, "More Seat Belt Baloney" https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/ — **a counter-signal: inconsistent enforcement reduces urgency.**
4. > "a tech inspector checked only his helmet and belt dates"
   — same thread. Confirms dates are *the* thing inspected.

### AUDIENCE SIZE & WEALTH
`[GAP — search budget exhausted before I could get SCCA/NASA membership counts.]` Known: SCCA, NASA, PCA, BMW CCA, Lemons and dozens of regional clubs each run multi-event seasons; a club-prepped car plus gear is a $40k+ commitment and a season is thousands of dollars in entries and tires. Wealth scored 4 on that basis, **not on a cited figure.** This gap must be closed before committing.

### WHERE THEY GATHER
Grassroots Motorsports forum (https://grassrootsmotorsports.com/forum/) and Classic Motorsports forum (https://classicmotorsports.com/forum/) — same publisher, very active; 24 Hours of Lemons forum (https://forums.24hoursoflemons.com); S2KI (https://s2ki.com/forums/); marque forums (forabodiesonly, Camaros.org); MotorsportReg (every entrant passes through it); CASC-OR (https://www.casc.on.ca); No Money Motorsports (newsletter/blog). Extremely cheap to reach, highly concentrated, and seasonally urgent.

### BUILDABILITY
Best-in-cluster (5). Models: GearItem (type, standard + homologation year, manufacture/label date, re-web date), Car (logbook entries, annual tech date, fire-system service date, fuel-cell date), Event (date + sanctioning body). Engine: for each upcoming event, compare each gear item's standard against that body's accepted-standards list (a small bundled, public JSON) and the item's label date against the age rule; red/amber/green. Local notifications at T-60/T-30. On-device PDF: a "tech inspection sheet" with every item, its date and its computed status, to hand the inspector — and a shopping list of what to replace, with the re-web option flagged. One week is realistic.
**App-Store-safe framing:** the user enters their own gear dates; the app shows them the published standard cut-offs and counts days. It does not pass or certify anything — "your sanctioning body's tech inspector decides."

### VERDICT: **PURSUE** (as the cheapest, fastest experiment)
**Single biggest reason it would fail:** enforcement is inconsistent ("nobody had inspected it"; NASA allows expired harnesses "in at least very good condition" for HPDE), so a meaningful share of the audience has never actually been burned — and I have **no audience-size number at all** for it yet. If SCCA+NASA club-racer counts come back small (tens of thousands, not hundreds), the TAM may not support a paid app.

---

## 10. WILDCARD B — Technical divers / rebreather owners & dive professionals

**ICP (one line):** The CCR/technical diver or working instructor with $10k–$20k of life-support gear plus teaching credentials that expire.

### THE EXPENSIVE MISTAKE
A condemned or out-of-test cylinder won't be filled (trip ruined, mid-trip); an out-of-date instructor credential means no teaching income. **No dollar figure sourced** — I will not invent one. Shop fill refusal for an out-of-hydro tank is the common, cheap failure; the catastrophic failure (expired O2 cells) is a safety event, not a cost.

### THE RULE SET — good on cylinders, bad on everything else
- Cylinders: DAN — "**49 CFR 180.209 Table 1 requires a five-year requalification period for all scuba cylinders**", including visual inspection and hydrostatic or ultrasonic examination; **federal regulations do not themselves mandate the annual visual inspection** ("federal regulations do not enforce visual inspection on their own, though it is still considered best practice"); aluminum 6351-T6 needs visual + eddy-current every five years for sustained-load cracks; 49 CFR 180.213 requires the 5-year recert "durably and legibly marked with the retester identification number (RIN) and the year." https://dan.org/alert-diver/article/inspecting-and-testing-scuba-cylinders/
- **Rebreather O2 sensors: NOT a public rule.** "sensor schedules are set by the manufacturer rather than DOT" — I searched specifically and found no 12-month federal or agency interval. That kills the highest-value feature.
- Agency credential renewals (PADI/TDI/NAUI annual renewal, CPR/O2 provider validity) are **behind member portals** and change by agency — not a stable public rule set.

### INCUMBENTS
`[GAP]` — not researched (budget). Known free incumbents: the cylinder's own stamped date, the dive shop's refusal at the fill station, agency member portals, and dive-log apps (Subsurface, MacDive, Shearwater Cloud) that log dives but not gear service.

### REAL COMPLAINTS
**No verbatim complaints found** — not searched before the budget ran out.

### AUDIENCE SIZE & WEALTH
`[GAP]`. Related datapoint found incidentally: ScubaBoard hosts active USCG-captain licensing threads (https://scubaboard.com/community/goto/post?id=6029494), confirming an overlap between dive pros and niche #2. DAN is the natural association (https://dan.org, https://world.dan.org).

### WHERE THEY GATHER
ScubaBoard (https://scubaboard.com), DAN / Alert Diver (https://dan.org/alert-diver/), rebreather-specific forums, TDI/SDI and PADI pro communities, DEMA Show.

### BUILDABILITY
Good (4) — gear items with service intervals, cylinder hydro +5 years, VIP annual, regulator service, cell install dates, cert expiries, PDF gear-service sheet for the dive shop. Same shape as wildcard A.

### VERDICT: **PARK**
**Single biggest reason it would fail:** the one rule that is public and deterministic (cylinder 5-year hydro) is already stamped on the cylinder and enforced for free by the fill station, while the features worth paying for (rebreather sensor life, agency credential renewals) are manufacturer- and portal-specific rather than public rules.

---

## 11. CROSS-CLUSTER CONCLUSIONS

**What separates the three PURSUE niches from the six others:** a third party at a gate who checks a date and can stop you. The mariner has the NMC and the vessel's master; the horse owner has the show secretary and the state vet; the racer has the tech inspector. In the KILL niches (classic car, art, dogs) nobody checks a date — the loss is a slow drift the insurer or association already prompts for free.

**The pattern that predicts failure here:** (a) the "rule" turns out to be a blog's recommended interval (art, classic car); (b) the rule is delegated to hundreds of private bodies (dog parent clubs, car marque clubs); (c) the rule is mid-rewrite (NFA Form 20); (d) the audience already chose a spreadsheet and told us so in writing (boats).

**Recommended next actions, in order:**
1. Install **SeaLog** (free) and determine whether it computes recency *windows* or only logs days. This single test decides niche #2.
2. Get SCCA and NASA membership/licence counts — the only missing input for wildcard A, which otherwise has the best score and zero named competitors.
3. Install **HorseBook** and **WellHerd** and check whether either computes Coggins from draw date, GR845 against stable-entry date, or per-state CVI validity. If not, niche #3's wedge is confirmed.
4. Recruit first-person complaints: a question in the Chronicle of the Horse forum (#3) and the gCaptain licensing forum (#2). Both niches have an evidence hole exactly there, and both forums answer questions within hours.
