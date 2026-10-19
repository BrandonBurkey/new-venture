# Scout 5 — Cluster: "Wildcards — rich pockets where an expensive mistake hides in tedious admin"

Date: 2026-10-19. Researcher: Scout 5.

## RESEARCH CONDITIONS — READ FIRST (affects confidence of everything below)

This cluster was researched under a hard tooling constraint that must colour how you read it:

1. **The shared WebSearch budget for the turn was exhausted mid-run** (200 calls/turn shared by all scouts). I got ~22 searches before the cap.
2. **All direct HTTP access was denied by the agent proxy.** Every `WebFetch` and `curl` returned `ENOTFOUND` / `CONNECT tunnel failed, response 403` — including non-blocklisted hosts (nccco.org, sfifoundation.com, scca.com, osha.gov, ecfr.gov, en.wikipedia.org, forums.24hoursoflemons.com, forum.chronofhorse.com, grassrootsmotorsports.com, apexspeed.com, forabodiesonly.com, jegs.com). Proxy status confirmed `connect_rejected / gateway answered 403 to CONNECT`.
3. **Consequence:** I could not open a single forum thread, App Store page, or primary rulebook directly. Everything below rests on **search-engine result snippets**, which quote source pages. Where the snippet presented text in quotation marks I treat it as a quote-of-record and label it `[snippet-quoted]`. Where the snippet only paraphrased, I label it `[paraphrase — NOT verbatim]`. **I have not invented a single number or quote.**
4. **Therefore: treat every $ figure, rating count and membership count below as "needs one confirming fetch before any build decision."** I have flagged the specific URL to fetch in each case.
5. App Store rating counts were almost entirely unobtainable (apps.apple.com blocked; AppFollow blocked by proxy policy — see `recentRelayFailures`). I state "not obtainable" rather than guessing.

Niches investigated: **11 of the 12 assigned** (#9 franchise killed on product constraints without full research — see §9, stated honestly) **+ 2 of my own invention** (§A USCG-credentialed charter captains; §B commercial fishing vessel safety compliance).

---

## SCORES TABLE

Scores 1-5. "Comp weak" = competitive weakness of incumbents (5 = blue ocean).

| # | Niche | Pain-$ | Wealth | Comp weak | v1 build | Reach | WTP sub | Total | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| 6 | **Motorsport dated safety equipment (SFI/Snell/FIA expiry)** | 4 | 5 | 4 | 5 | 5 | 4 | **27** | **PURSUE** |
| A | **USCG-credentialed charter captains / small-boat commercial mariners** (my invention) | 5 | 4 | 4 | 4 | 4 | 4 | **25** | **PURSUE** |
| 12 | Horse show / breed-registry deadlines | 3 | 5 | 4 | 3 | 4 | 3 | 22 | park (strong #3) |
| 7 | Yacht & superyacht crew (STCW/ENG1/flag-state) | 4 | 3 | 3 | 4 | 3 | 3 | 20 | park |
| B | Commercial fishing vessel safety compliance (my invention) | 3 | 3 | 4 | 4 | 3 | 3 | 20 | park |
| 3 | Crane / aerial-lift operators (NCCCO) | 4 | 3 | 3 | 4 | 3 | 2 | 19 | park |
| 11 | Dated safety gear generally (dielectric gloves, harnesses, SCBA) | 5 | 3 | 3 | 4 | 3 | 2 | 20 | kill (as consumer app) |
| 10 | Estate executors & trustees | 5 | 4 | 4 | 2 | 2 | 3 | 20 | kill |
| 1 | Western big-game draws / hunting-travel admin | 3 | 4 | 2 | 3 | 4 | 4 | 20 | kill |
| 8 | Pesticide applicators / ag operators | 2 | 3 | 3 | 4 | 4 | 3 | 19 | kill |
| 4 | Dive instructors / technical diving | 3 | 2 | 4 | 4 | 4 | 2 | 19 | kill |
| 2 | Welders & welding shops (AWS D1.1 continuity) | 3 | 2 | 4 | 3 | 3 | 2 | 17 | kill |
| 5 | Wildland fire / EMS qualifications | 2 | 2 | 4 | 3 | 4 | 1 | 16 | kill |
| 9 | Franchise / multi-unit operators | — | — | — | — | — | — | — | kill on constraints |

---

# §6 MOTORSPORT DATED SAFETY EQUIPMENT — **PURSUE (top pick)**

### ICP (one line)
The US club racer who owns their own race car and gear — SCCA/NASA/NHRA/vintage competitor, typically a 40-60yo professional or business owner, who personally buys the helmet, harnesses, suit, HANS, fire system and window net and personally gets failed at tech when a punch-date has rolled over.

**Money signal:** SCCA's own December 2025 article cites "roughly 70,000 members each year that participate in 1,700-plus events annually" and "more than 100,000 entries each calendar year" — https://www.scca.com/articles/2020102-scca-member-anniversaries-december-2025. Each entry is a paid event fee on top of a car, trailer, tyres and gear. **I could not find a published average-income or spend figure for club racers** — this is the single biggest wealth-signal gap in this niche and must be closed (try the SEMA/PRI market reports or the SCCA media kit).

### THE EXPENSIVE MISTAKE
One occurrence = arrive at a race weekend, fail tech on a date, do not run.

Arithmetic (estimate):
- SFI 16.1 belts are on a **2-year clock from the punch date**. "SFI-rated belts carry a 2-year expiration from their date of manufacture" and "the SFI tag is punched with the manufacture month and year"; the sanctioning body "should no longer allow this belt on track after that point" — https://www.hmsmotorsport.com/post/sfi-and-fia-seat-belt-standards-and-expiration-dates
- SFI fire-suppression bottles must be "inspected and re-certified every two years", with a **maximum field service life of 6 years from original installation** for SFI-certified systems — https://discoveryparts.com/products/spa-afff-refill-recertify-electrical-bottle and https://www.andra.com.au/wp-content/uploads/2020/08/2020-2021_ANDRA_RULEBOOK_FINAL_20200722_page-268-269_4.23.5_On-Board-Fire-Suppression-System.pdf
- A lapse can make the gear **unserviceable, not just non-compliant**: a refill centre states bottles "more than two years past their service-due date cannot be serviced" — https://discoveryparts.com/products/spa-afff-refill-recertify-electrical-bottle
- Racers report that "recertifying belts through the mail often costs about as much as buying new ones" [paraphrase — NOT verbatim] — https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/

**Cost of one occurrence (estimate):** lost entry + tow + hotel for a weekend (US club race entries commonly $400-700, which **I could not verify from a source this run**) + emergency replacement harness set + expedited fire-bottle service. I deliberately decline to publish a total because I could not verify the component prices. **What IS verified and sufficient:** the loss is a *whole weekend you have already paid for and travelled to*, and the trigger is a two-digit date stamped on a tag you cannot read from the driver's seat. That is the shape of pain this cluster is hunting.

### THE RULE SET — **mostly FREE, and the critical dates are the user's own**
This is the decisive finding and the reason this niche wins.

- **The dates themselves come off the user's own gear tags** (SFI punch month/year, Snell year label, FIA homologation label). No licensing needed — it is the user's own data, typed or photographed in.
- **The intervals are published FREE in multiple public places**, even though the SFI specs themselves are not free text. Free interval sources found:
  - SFI tag dating + 2-year harness recert, stated plainly in a free trade article: "SFI manufacture-date tags are issued twice a year, and belts are due for recertification two years after that date" [snippet-quoted] — https://www.performanceracing.com/magazine/columns/08-05-2024/ask-experts-driver-safety-equipment-recertification
  - A free retailer interval table covering all SFI-rated parts — https://www.jegs.com/tech-articles/2024-sfi-rated-parts-how-long-until-they-need-replaced-or-recertified/
  - Helmet rules: "most racing organizations, such as SCCA, NASA, and NHRA, accept Snell SA helmets for 10 years from the homologation date" — https://www.fastracer.com/a/answers/7036989/What-is-the-snell-helmet-expiration-date
  - SCCA publishes its own driver-gear requirements page free, including that "once inspected, a dated, non-removable sticker or decal must be placed on the helmet" — https://www.scca.com/pages/race-experience-driver-safety-gear
  - SCCA publishes rule changes free, e.g. "as of January 1, 2022, all 2005-rated helmets from Snell and SFI were removed from its activities" — https://scca.com/articles/2015714-helmet-certifications-updated-for-2022
  - SVRA publishes its tech bulletins free: "SFI and FIA belts that have an expiration date will be good until that date" — https://svra.com/tech-bulletins/tb2016-003-new-general-rules/
  - NHRA publishes its rulebook amendments free on NHRARacer.com — https://www.nhraracer.com/post/nhra-releases-2026-rulebook-amendment-updates-17
- **PAYWALL FLAG:** the SFI *specification documents* are sold, not free — https://sfifoundation.com/specs-program/ (I could not fetch the page to confirm pricing; **confirm this**). FIA technical lists are similar. **This is survivable precisely because we never need the spec text — only the published interval + the user's own tag date.** This is the exact carve-out the brief allows ("unless the dates come from the user's own gear tags and the intervals are published free"). **Risk to verify:** we must never reproduce SFI/FIA spec tables verbatim; we state intervals in our own words and cite the sanctioning body's free rulebook.
- **Caution on rule drift:** sources conflict (a 2018 forum post quoting an older SCCA GCR describes a 5-year window for 16.1 belts; current guidance is 2 years). Sanctioning bodies differ from each other and from SFI. **v1 must let the user pick their sanctioning body and must show the source, not assert authority.**

### INCUMBENTS
- **No dedicated racer-gear-expiry app was found in this run.** This is a genuine (if unproven) blue-ocean signal, but note I could not search the App Store at all, so **this must be re-checked**.
- Generic cross-industry incumbents exist and are weak: **CertKeeper: License Tracker** — free with IAP, **$6.99/mo or $59.99/yr, 7-day trial**, aimed at "BLS, ACLS, and CEU renewals" — https://apps.apple.com/us/app/id6755570013 . **Expiration Reminder** — free, requires an account and a companion web app, **3.0 stars from 2 ratings** — https://apps.apple.com/us/app/id1447157463 . **FreedomCert** — free, photo/PDF of a credential + advance reminders — https://apps.apple.com/us/app/freedomcert/id6757224718 . None of these know what an SFI punch date is, none model per-sanctioning-body rules, none produce a tech-inspection sheet. Ratings/prices come from search snippets of those listings; I could not open them.
- **Free incumbents (the real competition):** the gear tag itself; a Sharpie note on the helmet bag; the tech inspector; "a spreadsheet"; a club's annual tech sticker. Racers describe exactly this failure mode: enforcement is inconsistent, so the gear tag is the only system.

### REAL COMPLAINTS
I could not open any forum thread. Search snippets relayed the following from one accessible Mopar racing forum, all **[paraphrase — NOT verbatim]**, each from https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/ and https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/ :
- a racer says the tech inspector "checked only the helmet and belt dates and never looked at the car itself"
- another "admits being caught several times for not tracking expiration dates, and was glad the tech inspectors caught it"
- one reports "a set of brand-new belts that was already expired when they were unpacked"
- another "says they've seen people racing on harnesses that expired two years earlier"
- posters say "recertifying belts through the mail often costs about as much as buying new ones"

**Verbatim status: no verbatim complaints verified.** The two threads above are the highest-value fetch targets for the next scout with working network. Also fetch https://forums.24hoursoflemons.com/viewtopic.php?id=42620 ("Expiration dates for fire protective gear?") and https://grassrootsmotorsports.com/forum/grm/learn-me-drivers-safety-gear-expiration-rules/275065/page1 ("Learn me: driver's safety gear expiration rules") — the titles alone are the thesis.

### AUDIENCE SIZE & WEALTH
- SCCA: "crested 50,000 in February 2023, surpassing the 51,000 mark three months later", plus "roughly 20,000 SCCA weekend memberships purchased each year, making SCCA's total membership now top 70,000" — https://scca.com/articles/2017250-scca-annual-membership-50-000-and-counting ; 115 SCCA Regions (same source).
- 70,000 members / 100,000 entries / 1,700+ events annually — https://www.scca.com/articles/2020102-scca-member-anniversaries-december-2025
- NASA, NHRA, SVRA, vintage groups, autocross, HPDE and track-day drivers are additive and **unquantified in this run**.
- **GAP: no verified income figure.** All wealth inference is from the cost structure of the hobby, not a cited statistic. Score of 5 on wealth is therefore *inferred*, and is the weakest link in this entry.

### WHERE THEY GATHER
- Grassroots Motorsports forum — https://grassrootsmotorsports.com/forum/ (has an existing thread literally named "Learn me: driver's safety gear expiration rules")
- ApexSpeed (open-wheel/club) — https://www.apexspeed.com/forums/
- 24 Hours of Lemons forum — https://forums.24hoursoflemons.com/
- SCCA's 115 regional clubs and their event listings — https://www.scca.com
- MotorsportReg, which publishes per-event gear requirements pages — https://www.motorsportreg.com
- NHRARacer.com tech/rules audience — https://www.nhraracer.com
- PRI Show (Performance Racing Industry) trade show + its magazine, which already publishes recertification explainers — https://www.performanceracing.com
- **Member counts for all of these: not obtainable this run.** Reddit (r/trackdays, r/CarAV... etc.) blocked by proxy.

### iOS-FIT
Excellent. Single-user by nature — the gear is personally owned and personally worn. Phone-first: you are standing in the paddock or the garage with the tag in your hand. Offline-capable: the paddock has no signal, which is exactly when you want to check. Camera to photograph the tag, local notifications for "your harnesses punch out in 60 days — order now, before the season", on-device PDF export for a pre-tech checklist to hand the inspector. No accounts, no backend, no advice.

### BUILDABILITY (v1, ~1 week, AI-built)
Very high. SwiftData models: `GearItem` (type, make, model, serial, certifying standard, date-of-manufacture / punch date / Snell year, photo of tag), `Sanction` (SCCA / NASA / NHRA / SVRA / club, each with a rule table of intervals we author in our own words with a citation link), `Event` (date, venue, sanction). The engine is pure date arithmetic — interval lookup + add months/years + compare to next event date — which is genuinely deterministic and genuinely a 1-week job. Deliverables: a per-event "Tech Readiness" screen (green/amber/red per item), rolling local notifications at 90/60/30/7 days, and a PDF "gear log" for the tech shed. StoreKit 2 single annual sub. The only content work is hand-authoring the interval table per sanctioning body with a free-source citation for each row — maybe 40 rows. **The honest risk is content maintenance, not code**: rules change annually (see the 2022 helmet change and the 2026 NHRA amendments), so v1 should ship with a visible "rules as of <date>, verify against <free rulebook URL>" disclaimer and in-app rule-version labels.

### VERDICT: **PURSUE**
Biggest failure reason if it fails: **the audience may treat the gear tag itself as sufficient and refuse to pay** — enforcement is inconsistent (racers report inspectors who never check dates), and an inconsistently-enforced rule generates less willingness-to-pay than a hard one. Secondary risk: no verified income statistic for club racers.

---

# §A USCG-CREDENTIALED CHARTER CAPTAINS & SMALL-BOAT COMMERCIAL MARINERS — **PURSUE (my invention #1)**

### ICP (one line)
The owner-operator US charter captain / delivery skipper / launch & tow operator holding an OUPV ("six-pack") or Master <100GT Merchant Mariner Credential, who runs their own business, renews their own credential, and must personally prove sea-service days — nobody else keeps their logbook.

**Money signal:** this is a business licence, not a hobby. The credential is the *permission to earn*: "the grace period does not mean that you can continue operating commercially on your expired license" — https://maritimelicensingagency.com/announcements-1/how-do-i-get-my-expired-uscg-license-back . **GAP: I have no income statistic for charter captains** (would need BLS 53-5021 Captains/Mates/Pilots of Water Vessels — could not fetch).

### THE EXPENSIVE MISTAKE — the single hardest dollar figure I found in this entire cluster
Let the credential go fully stale and you must redo the schooling.

> "the process to reactivate an expired captain's license includes **between $12,100 and $43,710 in class fees and between 39 and 124 days of classroom instruction**, OMSA said"

[snippet-quoted] — reported by WorkBoat (https://www.workboat.com/offshore/omsa-coast-guard-policy-will-ease-experienced-mariners-return-to-work) and corroborated by Maritime Executive (https://www.maritime-executive.com/article/uscg-allows-mariners-to-renew-up-to-six-years-after-lapsed-credentials), Professional Mariner (https://professionalmariner.com/coast-guard-extends-renewal-grace-period-for-mmcs/) and World Ports (https://www.worldports.org/rule-change-aids-us-mariners-return-to-sea/). The figure originates with OMSA (Offshore Marine Service Association), an industry trade group, as its projection of what the 2024 policy change saves mariners.

Arithmetic for one occurrence: **$12,100 low end in class fees + 39 days off the water** (at a charter day rate that I could not source) — and that is the *cheap* end. This dwarfs the price of any app by 2-3 orders of magnitude.

Second, smaller occurrence that bites more often: you can renew, but you cannot *work*. "During the grace period, you can renew as usual, but you are not allowed to work with an expired license" — https://maritimelicensingagency.com/announcements-1/how-do-i-get-my-expired-uscg-license-back . For a sole operator in a 14-week season, that is the season.

### THE RULE SET — **FREE and public (46 CFR + NMC), excellent**
- **Renewal interval:** MMC officer endorsements run 5 years; renewal may be filed before expiry "or within 365 days of expiration" — https://work.chron.com/renew-merchant-mariner-license-10659.html
- **The sea-service rule a deterministic engine can compute:** "For officer endorsements, including master, you must have worked **at least 360 days within the previous five years**", with alternatives of passing an exam or "working three of the last five years constructing or repairing vessels" — https://maritimelicensingagency.com/announcements-1/licenserenewal
- **What counts as a day:** "For small-vessel captain's licenses, a sea-service 'day' means **at least four hours underway**" — same source. **This is the killer feature: a 4-hour-underway rule means a day-counter is the product**, and nobody can reconstruct 5 years of 4-hour thresholds from memory.
- **Grace period:** a 2024 USCG policy letter "extended the window to renew an expired Merchant Mariner Credential from one year to six years", effective 25 April 2024 — https://maritimelicensingagency.com/announcements-1/grace-period-for-coast-guard-license-renewal ; characterised by one source as temporary: "the grace period timeline is technically temporary, so be sure to check periodically for changes" — https://marinerslearningsystem.com/blogs/captains-license-resources/captains-license-expired-long-time-ago
- **Paywall status: FREE.** The governing text is 46 CFR (eCFR, free) and the National Maritime Center's published checklists (free). **No licensed data required.** This is the cleanest rule-set position of any niche in my cluster.
- **GAP / must verify:** I could not fetch eCFR or the NMC. The 360-day, 4-hour and 6-year figures all come from licensing-consultancy marketing pages, which have an incentive to be roughly right but are not authoritative. **Confirm against 46 CFR 10.227 and the NMC renewal checklist before building.**

### INCUMBENTS
- **No dedicated sea-service-day / MMC-renewal iOS app surfaced in this run.** Caveat: App Store search was impossible.
- Adjacent/generic: CertKeeper ($59.99/yr, see §6), FreedomCert, Expiration Reminder (3.0★ / 2 ratings).
- **Free incumbents, and they are the real competitors:** the paper sea-service letter from an employer (useless to an owner-operator who *is* the employer); a vessel logbook; a spreadsheet; and most commonly, the **licensing consultancies themselves**, who will assemble your renewal package for a fee — https://maritimelicensingagency.com , https://marinerslearningsystem.com . Their existence proves a paid market for solving this problem, which is a positive signal, and they are service businesses rather than software, which is a positive competitive position.

### REAL COMPLAINTS
**No verbatim complaints found.** Proxy blocked forum.gcaptain.com and every other forum. The one forum lead located is a gCaptain thread where a member "recalls roughly 50,000 credentialed mariners and about 5,000 active unlimited licenses" [paraphrase — NOT verbatim; explicitly flagged as an unsourced recollection] — https://forum.gcaptain.com/t/stats-on-number-of-current-license-holders/69149 . **This is the largest evidence gap in this entry and must be closed:** search gCaptain, The Hull Truth charter-boat forum, and charter-captain Facebook groups for "sea service letter", "360 days", "renewal denied".

### AUDIENCE SIZE & WEALTH
- "the number of Americans holding valid Merchant Mariner Credentials at about **200,000 as of 2023**" (MARAD-cited) — https://www.marinelink.com/news/numbers-gao-examines-americas-mariner-541247
- OUPV is "the entry-level passenger-vessel license, covering vessels under 100 gross tons with six or fewer paying passengers" — https://en.wikipedia.org/wiki/United_States_Coast_Guard_Charter_Boat_Captain%27s_license
- **GAP: no OUPV-specific count exists publicly.** "For an OUPV-specific figure, the best lead is the Coast Guard's National Maritime Center... Its numbers would need a direct request or a FOIA request." Even a conservative 10-20% of 200,000 is 20k-40k owner-operators, which is ample for a $100/yr app — but that split is **my inference, not a cited number.**

### WHERE THEY GATHER
- gCaptain forum — https://forum.gcaptain.com (the mariner watering hole)
- The Hull Truth (charter/commercial boards) — https://www.thehulltruth.com
- Mariners Learning System and Maritime Licensing Agency audiences/newsletters (licence-school lists = the most precisely targeted list imaginable; these are also potential partners rather than only channels)
- Passenger Vessel Association (PVA); OMSA; NMC's own notice lists
- State charter-captain associations and the big boat shows
- **Member counts: not obtainable this run.**

### iOS-FIT
Excellent, arguably better than §6. Single-user: it is *your* credential and *your* days. Phone-first and **offline is mandatory, not nice-to-have** — you log the day while underway, with no signal. Camera for the credential photo and medical certificate. Local notifications at 12/6/3 months before expiry and "you are 41 days short of 360 with 14 months to run". On-device PDF export of a sea-service summary to attach to the renewal application — a concrete, high-value artifact.

### BUILDABILITY (v1, ~1 week)
High. SwiftData: `Credential` (type, issue/expiry date, endorsements, medical cert expiry, TWIC expiry, STCW dates), `Voyage` (date, vessel, hours underway, route/waters, capacity served). Engine: count qualifying days (≥4 hours underway = 1 day, cap 1/day) in a rolling 5-year window ending at the renewal target date; project forward; flag shortfall. Plus a flat expiry-date ladder for credential/medical/TWIC. PDF export = a dated sea-service table. All pure local computation. **The one real build risk is rule nuance** — what counts as a day differs by endorsement and tonnage, and getting it wrong is worse than useless. v1 must present itself as "your own record of your own days, formatted for your application" and never as an eligibility determination — which also keeps it App-Store-safe and out of regulated-advice territory.

### VERDICT: **PURSUE**
Biggest failure reason if it fails: **zero verified voice-of-customer.** I have a spectacular dollar figure and a clean free rule set, but not one real complaint from a real captain, and no OUPV population count. If captains turn out to be served adequately by a $300 consultancy package every 5 years, the recurring-subscription logic collapses (you only renew every 5 years — **the subscription must be sold on the day-logging, not the renewal reminder**).

---

# §12 HORSE SHOW & BREED-REGISTRY DEADLINES — park (strong #3)

### ICP
The owner-rider campaigning a horse toward year-end/national qualification, who personally pays USEF/USHJA/breed-registry memberships, horse recordings, SafeSport, Coggins and entries. Wealth is structural: a show horse is a five-to-six-figure asset with a four-figure monthly board bill.

**Money signal:** I could not source a spend statistic this run — **GAP.** (Try the AHC/American Horse Council economic impact study.)

### THE EXPENSIVE MISTAKE — forfeited qualifying points
Best verbatim evidence in my whole cluster. From the Chronicle of the Horse forum [snippet-quoted, long-form]:

> "We thought we enrolled in auto renewal for both her and the horse, but apparently the auto renew was only for the rider and our horse's membership expired earlier this year. I called the USEF regarding the horse's registration and it appears all the accumulated points the horse earned since his 2019 membership ended will not count towards qualifying for nationals."

— https://forum.chronofhorse.com/t/usef-membership/466356

Cost of one occurrence: **an entire season's qualifying points, unrecoverable.** Priced in entry fees, hauling, coaching and board for a show season, that is clearly four to five figures; I decline to publish a total because I could not source per-show entry/hauling costs. The *irreversibility* is the point — USEF "refusing to backdate" [paraphrase].

Related forfeiture rule, written and public: a USEF rule requires the owner to "forfeit all prize money, sweepstakes and trophies, entry fees, ribbons, and points won at said competition in said class" — quoted in https://arabianhorses.org/export/content.export/nat-show/convention/resolutions/21Conv_Resolution_02.pdf (**flag: this document is a resolution to amend a rule, not confirmed current text — verify in the live USEF rulebook**).

### THE RULE SET — FREE and public, but fragmented
- USEF publishes its backdating policy free: USEF "can backdate the start dates of USEF Horse Recordings (except Dressage) and USHJA Horse Registrations"; "no other membership issue may be backdated at this time, unless the application was completed at a competition and sufficient paperwork is provided"; payment/paperwork "must be received in the USEF office within 10 days of USEF sending notification of bad points to the owner" — https://www.usef.org/faqs/questions-regarding-points--results
- Shows check documents at entry: entries "could be determined to be ineligible due to issues such as an unrenewed SafeSport document" — https://www.saddlebred.com/application/files/6717/1286/6808/KY_Fair_Board_World_Championship_Horse_Show-Class_52_resp_ltr.04.11.24.pdf
- Breed registries publish their own: "membership, registration, and other rule violations will subject the violator to be disqualified" — https://www.arabianhorses.org/export/content.export/aha-handbooks/current-handbook/CHAPTER11.pdf
- Health paperwork is **state law and free**: New Jersey requires "a negative Coggins test dated within the past 24 months for in-state horses and within the last 12 months for out-of-state horses" — https://regulations.justia.com/states/new-jersey/title-2/chapter-34/subchapter-2/section-2-34-2-2
- **Paywall status: FREE** (USEF rulebook, breed handbooks and state ag codes are all public). Good.
- **But:** the rules are fragmented across USEF + USHJA + each breed registry + each state's import requirements + each show's prize list. That is a content-maintenance burden, not a date-arithmetic problem. **I found NO support for the "30-day health certificate" rule I went looking for** — do not assume it.

### INCUMBENTS
- Generic only, as in §6 (CertKeeper $59.99/yr; FreedomCert; Expiration Reminder 3.0★/2 ratings).
- **Free incumbents are strong here:** USEF's own member portal with auto-renew (which is precisely what failed in the quote above — it renewed the rider but not the horse), show secretaries, and the barn manager/trainer who does this for the client. **That last one is the real threat: in this niche a human professional is often already paid to track it.**
- I could not search for equestrian-specific apps (Equisense, Barn Manager, HorseLinc, etc.). **GAP.**

### REAL COMPLAINTS
One strong snippet-quoted complaint (above). **Second verbatim complaint: not found.** Chronicle of the Horse forum was unfetchable.

### AUDIENCE SIZE & WEALTH — **GAP.** No USEF membership count obtained. No spend figure obtained.

### WHERE THEY GATHER
Chronicle of the Horse forums — https://forum.chronofhorse.com (large, active, the hub); USEF — https://www.usef.org ; Arabian Horse Association — https://arabianhorses.org ; Saddle & Bridle / saddlebred.com; breed-specific Facebook groups; regional circuits. **Counts not obtainable.**

### iOS-FIT
Good. Single-user (owner-rider), phone-first (at the barn, at the show), offline (showgrounds have poor signal). Camera for Coggins/CVI papers. The risk is that the *owner* may not be the person doing the admin — if it's the trainer managing 15 clients' horses, that is multi-user and a kill.

### BUILDABILITY
Moderate. Date ladders per horse and per rider (membership, horse recording, SafeSport, Coggins, CVI, farrier/vet intervals) are trivial. The hard part is a credible *qualification-points* model, which varies by discipline, zone and year — that is not a 1-week build and is where the real pain lives. A v1 limited to "every document that must be valid on show day, per horse and per person, with a show-day readiness PDF" is buildable in a week and still addresses the quoted failure.

### VERDICT: park
Biggest failure reason: **the pain lives in points/qualification logic we cannot build in a week, while the part we can build (document expiry) may already be covered by the trainer and the USEF portal's auto-renew.**

---

# §7 YACHT & SUPERYACHT CREW — park

### ICP
Professional yacht crew (deckhand to captain) holding STCW Basic Safety Training, ENG1 medical and flag-state CoCs, who personally owns their certificate folder and personally loses berths when a date lapses. Crew are paid in cash with no living costs, which is the wealth signal — **but I could not source a salary figure. GAP.**

### THE EXPENSIVE MISTAKE
You cannot get hired, at all. "without these two certificates, a yacht crew recruitment agent cannot assist you in finding work onboard a yacht" (STCW BST + ENG1) — https://ypicrew.com/yacht-work-advice/ . Cost of one occurrence = a lost season's berth. Compounding factors, each snippet-quoted:
- "some yacht management companies will enforce retaking the full basic course rather than only the refreshers" — https://www.bluewateryachting.com/blog/which-parts-of-my-stcw-need-refreshing-324
- modules that technically never expire still cause trouble: "Elementary First Aid and PSSR don't technically expire, but an expiry date on them can be a problem during port state inspections" — same source
- the MCA has previously issued a Temporary CoC "valid for six months, providing they can meet all other requirements" — https://www.superyachtnews.com/operations/superyachtnews-covid-19-advisory-mca-issues-certification-guidance (COVID-era; may be withdrawn)

**No dollar figure obtained. GAP.**

### THE RULE SET — FREE, but multi-jurisdictional
STCW refresher is a 5-year cycle; "the Fire Prevention & Fire Fighting module and the Personal Survival Techniques modules need refreshing/revalidation" — https://www.bluewateryachting.com/blog/which-parts-of-my-stcw-need-refreshing-324 . MCA MGNs/MSNs and IMO STCW are published free. **Paywall status: FREE.** But the stack is flag-state-dependent (MCA vs. Marshall Islands vs. Cayman vs. USCG) and MLC rest-hour recording is a vessel-level, multi-user obligation — **that part is a kill for us.**

### INCUMBENTS
Generic (CertKeeper etc.). Crew-training schools (Bluewater, FMTC, YPI Crew) publish free guidance pages as lead-gen and crew agencies track certificates for their own candidates — **that is a meaningful free incumbent: your agent chases you.**

### REAL COMPLAINTS
**No verbatim complaints found.** Search explicitly returned no crew forum threads about losing work to a lapsed ENG1/STCW.

### AUDIENCE / WHERE THEY GATHER
Dockwalk, Crew Report / SuperyachtNews (https://www.superyachtnews.com), YPI Crew and Bluewater crew lists, Antibes/Fort Lauderdale crew Facebook groups, the Monaco/Fort Lauderdale boat shows. **No counts obtained. GAP.**

### iOS-FIT / BUILDABILITY
Single-user and phone-first — yes. Offline (mid-ocean) — essential and a real advantage. Build is a straightforward multi-certificate date ladder with a PDF "certificate matrix" to email a captain or agent; one week is realistic.

### VERDICT: park
Biggest failure reason: **non-US, highly transient audience with no verified complaint and no verified population — reachability and payment friction are both unquantified, and crew agencies already partially solve it.**

---

# §B COMMERCIAL FISHING VESSEL SAFETY COMPLIANCE — park (my invention #2)

### ICP
The owner-operator of a federally permitted commercial fishing vessel who personally schedules the dockside exam and personally owns the liferaft, EPIRB, flares, immersion suits and drill log. A boat and permit are a high-six-figure asset base.

### THE EXPENSIVE MISTAKE
Being sent back to the dock in season. "fishermen whose boats don't meet current regulations are subject to fines, and for extreme violations the Coast Guard will escort the vessel back to the dock until problems are fixed" — https://fishermensnews.com/?p=8298 (also https://www.peninsuladailynews.com/?p=42021 reporting the Coast Guard ordering a fishing vessel into harbour over safety concerns). **No dollar figure obtained. GAP — this is the entry's main weakness.** A lost fishing opener is plainly worth tens of thousands, but I will not publish a number I could not source.

### THE RULE SET — **FREE and public (46 CFR), and strongly date-shaped**
- "The decals are valid for **2 years**"; "vessels must be examined dockside at least once every **5 years**, while the Coast Guard advises a safety exam every 2 years"; "Fish processors, Aleutian Trade Act vessels, and vessels carrying a NOAA Fisheries observer must be examined every 2 years" — https://www.dco.uscg.mil/Portals/9/Fed_Regs.pdf (**flag: this pamphlet's regulatory content is current only through June 2020 — verify against eCFR**)
- Equipment requirements cited to **46 CFR 25.26-5** (float-free Category 1 406 MHz EPIRB) and **46 CFR Table 28.120(a)** (inflatable liferaft), with **46 CFR Table 98.140** giving "maintenance and inspection schedules for lifesaving equipment" — https://www.dco.uscg.mil/Portals/9/DCO%20Documents/5p/CG-5PC/INV/Alerts/0897.pdf
- Exams are free and non-punitive: voluntary exams "carry no penalty for failing; the owner receives a work list of items to fix" — same pamphlet. **This cuts both ways: a free, non-punitive exam reduces the pain.**
- USCG publishes per-length-class examination checklists free, e.g. https://www.lummi-nsn.gov/userfiles/993_CheckList26-40WithinCoastal.doc
- **Paywall status: FREE (46 CFR via eCFR).**
- **GAP:** I specifically went looking for the flare 42-month and EPIRB-battery intervals and **could not verify them.** 46 CFR Table 98.140 is the exact artifact to fetch; without it, the interval table that the whole app depends on is unbuilt.

### INCUMBENTS
Generic only. **Free incumbents are strong:** the USCG's own free dockside examiner, who hands you a work list; the free published checklists; the AMSEA/Sea Grant free training programs.

### REAL COMPLAINTS
**No verbatim complaints found.**

### AUDIENCE / GATHERING
Fishermen's News (https://fishermensnews.com), National Fisherman, regional associations (e.g. United Fishermen of Alaska), KCAW/community radio in fishing ports (https://kcaw.org/2013/03/21/free-safety-exams-for-fishing-vessels), AMSEA, Pacific Marine Expo. **No counts obtained. GAP.**

### iOS-FIT / BUILDABILITY
Single-user owner-operator, phone-first, offline essential (at sea) — strong fit. Build is an equipment register with per-item service intervals + monthly drill log + decal expiry + a PDF pre-exam checklist. One week is realistic *once the interval table exists*.

### VERDICT: park
Biggest failure reason: **the Coast Guard already provides the service free and non-punitively, which caps the pain; plus I could not verify the interval table that the product is made of.**

---

# §3 CRANE, AERIAL-LIFT & HEAVY-EQUIPMENT OPERATORS (NCCCO) — park

### ICP
NCCCO-certified mobile/tower/articulating crane or digger-derrick operator. Often an employee — which is the problem.

### THE EXPENSIVE MISTAKE — a cliff edge, well documented
NCCCO's own pages state it plainly: certification "is valid for five years"; candidates "must finish requirements during the 12 months prior to their certification's expiration date"; **"There is no grace period after the expiration date"**; and if it has lapsed, "candidates must take both the written and practical examinations to be certified again" — https://nccco.org/nccco/certifications/mobile-crane-operator/recertification (and the parallel tower/articulating/digger-derrick pages).

The avoidable-by-record-keeping part: the practical exam is **waived if you can document hours**. "Candidates who can document at least **1,000 hours** crane-related experience during their period of certification don't need the practical exam to recertify"; digger-derrick candidates need **500 hours** — same source. **That is a logbook product: 1,000 hours accumulated over 5 years, documented, or you re-sit a practical exam.**

Arithmetic (estimate): NCCCO's 2019 restructure put an operator certification total at **$250 (or $320 CBT)** — https://www.nccco.org/docs/default-source/policy-statements/candidate-fee-restructure-faq-2019-10-10.pdf (**2020-era figure; NCCCO's current fee table must be re-checked**). Add the practical exam you didn't need to take, travel to a test site, and 1-2 days off the job. On the employer side, operating uncertified exposes an OSHA citation: the 2025 maximum for a serious violation is **$16,550 per violation**, and willful/repeat **$165,514 per violation** — https://www.littler.com/publication-press/publication/osha-announces-new-higher-penalties-violations-2025 (**note: a January 2026 inflation adjustment likely exists and I could not verify it**). Governing standard: 29 CFR 1926.1427 (free).

### THE RULE SET — **FREE**
NCCCO publishes recertification requirements, windows and hour thresholds free on nccco.org; OSHA 1926.1427 and the penalty schedule are free. Clean.

### INCUMBENTS
Generic personal trackers (CertKeeper $59.99/yr etc.). **The decisive free incumbent is the employer's safety-management system** — the crane company's compliance software already tracks operator certs and equipment annual inspections, because the citation lands on the employer. That is also the competitive landscape: an enterprise EHS category, not a consumer one.

### REAL COMPLAINTS
**No verbatim complaints found.** Only a Cal/OSHA petition questioning the recertification requirement — https://www.dir.ca.gov/oshsb/petition-598.html

### AUDIENCE SIZE
Last published total is a decade old: the 100,000th CCO certification was issued in 2014, at which point "the 75,000 individuals who are currently certified hold more than 240,000 certifications between them" — https://www.forconstructionpros.com/equipment/crane/news/11533719/cco-reaches-historic-100000-certified and https://vertikal.net/en/news/story/20459/nccco-certifies-100000th-operator . No 2025 figure obtainable.

### iOS-FIT
Single-user yes; the 1,000-hour log is genuinely phone-first and offline (you log hours in the cab). But **the payer is the employer, which drags toward multi-user**.

### VERDICT: park
Biggest failure reason: **willingness to pay.** The $16,550 lands on the employer, not the operator, and employer-paid means multi-user, which the brief kills. An operator-pays app has to be sold on "don't re-sit the practical" — real, but only once every 5 years.

---

# §11 DATED SAFETY GEAR GENERALLY (dielectric gloves, harnesses, SCBA) — kill as a consumer app

### THE RULE SET — **excellent, FREE, and the best-specified in my cluster**
- Rubber insulating gloves: OSHA's own interpretation letter says that "once rubber insulating gloves have been issued for service for the first time, they must be tested **every six months**" — https://osha.gov/laws-regs/standardinterpretations/2019-01-25-0 . Additional triggers independent of the clock: "even if the gloves have been tested within six months, they must also be tested upon indication that the insulating value is suspect, after repair, and after use without protectors" — same letter.
- The 12-month figure in 1910.137 Table I-5 applies only to **stored, not-yet-issued** gloves: "if the insulating equipment has been electrically tested but not issued for service, the insulating equipment may not be placed into service unless it has been electrically tested within the previous 12 months" — summarised at https://safteng.net/osha-clarifies-the-6-month-testing-frequency-of-rubber-insulating-electrical-gloves-1910-137/
- **Note a real trap for a rules engine:** OSHA's own 2020 letter on the same question is internally inconsistent (a UFC example yielding 2 months from issue but 12 months from test, with an answer that opens "Yes" then restates six months) — https://osha.gov/laws-regs/standardinterpretations/2020-08-19-0 . A deterministic engine built on a contradictory interpretation is a liability.
- Penalty: $16,550 serious / $165,514 willful-repeat (2025) — https://www.littler.com/publication-press/publication/osha-announces-new-higher-penalties-violations-2025
- Arborist ropes: **ANSI Z133 is a paywalled ANSI/ISA standard and I could not confirm price or free availability** — https://open-exam-prep.com/study-guides/isa-board-certified-master-arborist/worker-safety-ansi-z133/equipment-inspection-retirement . Retirement is largely manufacturer-dependent anyway: "retired after any fall arrest event, when cuts, abrasion, or stiffness are detected, or per manufacturer recommendations", "typical service life of 5-10 years of regular use" — https://cspforestry.com/collections/climbing-fall-protection . **Condition-based, not date-based → not computable.**

### VERDICT: kill (as a single-user paid consumer app)
Biggest failure reason: **the payer is the employer and the workflow is inherently multi-user** (a crew's gloves, a yard's harnesses, a station's SCBA, rotated between people). That is an EHS/B2B product, which the constraints forbid. Secondary: the most interesting sub-case (arborist rope retirement) is condition-based and partly paywalled, so not deterministic. *Keep on file as the strongest B2B pivot in this cluster if the studio ever relaxes the no-backend rule.*

---

# §10 ESTATE EXECUTORS & TRUSTEES — kill

### THE EXPENSIVE MISTAKE — very real
Personal liability. In North Carolina, "the Clerk of Superior Court can order you to file within 20 days and, if you do not, remove you and even hold you in contempt", may assess costs personally, and may use civil contempt powers — https://piercelaw.com/news/probate-question-and-answer/what-happens-if-i-miss-probate-deadlines-or-fail-to-pay-estate-debts-north-carolina-probate/ . "an executor who causes financial harm to the estate through unreasonable delay may be held personally liable", with the worked example that "if the executor fails to pay property taxes and the property faces a tax lien" they may have to cover it personally — https://simplytrust.com/12303/executor-liability-in-california-risks-and-responsibilities/ . Courts may also **surcharge** the executor, separately from removal — https://keystone-law.com/?p=6275 . And "if you pay debts out of order or distribute assets before paying valid claims, you can be personally liable" — https://piercelaw.com/news/probate-question-and-answer/what-happens-if-i-missed-deadlines-in-probate-and-the-court-steps-in-to-manage-the-estate-nc/

### THE RULE SET — free but **50-state, and that is fatal for a 1-week build**
State probate codes are free and public, and creditor-claim windows, inventory deadlines and accounting dates are genuinely deterministic. But they differ per state (and sometimes per county), and the sources repeatedly stress variation: "these rules vary and this is general information, not legal advice".

### VERDICT: kill
Biggest failure reason: **two kills at once.** (a) A 50-state deadline engine is not an AI-built one-week v1, and getting a probate deadline wrong creates exactly the liability the user is trying to avoid. (b) It sits on the regulated-advice line: computing "your creditor-claim window closes on X" for a lay executor is functionally legal advice, which the constraints forbid. Also: one-time event, not a renewable subscription.

---

# §1 WESTERN BIG-GAME DRAWS / HUNTING-TRAVEL ADMIN — kill

### ICP
The non-resident western big-game applicant maintaining preference/bonus points in 5-11 states, paying non-refundable application fees and four-to-five-figure outfitter deposits. Wealthy by construction.

### THE EXPENSIVE MISTAKE
Forfeiting an accumulated point stack or a tag. Evidence found: the deadline genuinely sneaks up — a HuntTalk member "didn't realize until the day before that it was the day to apply for Wyoming elk, when a friend let them know" [paraphrase — NOT verbatim] — https://www.hunttalk.com/threads/wyoming-elk.331901/ . A Colorado-specific forum claim: "there is no option to withdraw or change an application after the deadline", with refunds/point restoration only "up until 30 days before the season opens" [paraphrase, 2021 forum post] — https://www.hunttalk.com/threads/new-mexico-colorado-elk-draw.305954/ . **I could not verify a dollar cost for one missed deadline, nor any state's stated forfeiture rule.** GAP.

### THE RULE SET
State wildlife agency regulations — free and public (e.g. https://cpw.state.co.us/activities/hunting/big-game/primary-draw). But they change annually, vary across 11+ states, and a wrong deadline is a catastrophic failure of the product's one job. **Caution: multiple search results for Wyoming deadlines came from obvious spam mirrors** (lboro.ac.uk, randstad.com, fadisma.com.br, rjuuc.edu.np domains serving hunting content) — the data environment is actively polluted.

### INCUMBENTS — **this is the kill**
Crowded, and the incumbents already do precisely our feature:
- **DrawMaster** — "calculates real draw odds, tracks bonus points and preference points across every state you apply in, and sends smart deadline notifications", covering 11 western states — https://chrome-stats.com/d/app.drawmaster
- **OnPoint Hunts** — https://onpointhunts.com ; a reviewer "said it has saved them from missing preference points"; another "asked for more granular reminder settings, such as splitting reminders by draw/sale and by open/close date" [paraphrase] — same source
- **onX Elite** — a HuntTalk member notes it "gives access to a calendar that can be added to Google Calendar for all draw deadlines" — https://www.hunttalk.com/threads/wyoming-elk.331901/
- Plus GoHunt and Huntin' Fool (subscription draw-strategy services) which I could not research this run.
- Free incumbents: each state's own portal (e.g. CPWShop.com point lookup), and published draw statistics.

### VERDICT: kill
Biggest failure reason: **not a wildcard at all — it is the single most obvious "deadline app" idea in the outdoor space and at least three funded incumbents plus onX already ship deadline notifications and point tracking.** Our only edge would be better reminders, which is not a business. Secondary: per-state annual rule maintenance across 11 states is a content treadmill for a two-person studio.

---

# §8 AGRICULTURAL / LAWN / PEST APPLICATORS — kill

### THE RULE SET — **excellent, free, and perfectly deterministic**
Federal RUP recordkeeping, 7 U.S.C. § 136i-1: "the record(s) must be maintained for **two (2) years** following the pesticide application. In addition, the record information must have been recorded **no later than fourteen (14) days** following the pesticide application" — https://www.kcgov.us/DocumentCenter/View/4115/Unites-States-Department-of-Agriculture-Recordkeeping-Frequently-Asked-Questions-PDF and https://www.ams.usda.gov/sites/default/files/media/PRP%20Recordkeeping%20Brochure.pdf . Required fields are enumerated: "the brand name, EPA registration number, total amount applied, size of area treated, crop or site, and location", with "No required forms... as long as all of the required information is maintained" — same FAQ. Texas requires two-year retention — https://texas.public.law/statutes/tex._agric._code_section_76.114 . All free. A 14-day countdown per application is a beautiful deterministic engine.

### THE EXPENSIVE MISTAKE — **this is the kill**
The federal penalty is trivial. 7 U.S.C. § 136i-1(d): "a fine of not more than **$500** for a first offense, and for subsequent offenses a fine of not less than **$1,000** for each violation", reduced for a good-faith effort — https://www.law.cornell.edu/uscode/text/7/136i-1 ; USDA's FAQ gives inflation-adjusted figures of "not more than **$550.00** for the first offense, and not less than **$1,100.00** for each violation for subsequent offenses". **A $550 maximum downside does not support a $60-300/yr subscription.** State penalties and licence actions may be far larger, but **I could not verify any.**

### INCUMBENTS
Established farm/lawn record software; the Irish source notes "there are numerous software programmes available today which can assist in keeping these records" — https://www.farmersjournal.ie/completing-your-chemical-application-records-and-inventory-334023 . Free incumbents: paper application logs, extension-service templates (https://pesticidestewardship.org/records/, https://utia.tennessee.edu/publications/wp-content/uploads/sites/269/2023/10/SP363-H.pdf).

### REAL COMPLAINTS
**No verbatim complaints found.** Searches for LawnSite/pest-control forum accounts of inspections returned only regulator guidance.

### VERDICT: kill
Biggest failure reason: **the verified dollar downside is $550.** The rule set is the cleanest in my cluster and the audience is a million people, but without a big verified penalty or licence-loss consequence there is no fear-driven purchase. Worth one re-check of a single state's penalty schedule (CA DPR or FL) before final burial.

---

# §4 TECHNICAL / COMMERCIAL DIVING & DIVE INSTRUCTORS — kill

### THE EXPENSIVE MISTAKE
Lapsed instructor status is recoverable but fiddly: PADI says the steps "vary depending on how many years have passed since your last renewal" and you must contact regional Customer Relations — https://pros-blog.padi.com/2022/01/14/reactivating-as-a-padi-divemaster/ ; "you will need to [pay the annual renewal fee], plus meet any regional insurance requirements, prior to regaining Active or Teaching status"; a lapsed instructor "does not automatically have to re-sit the Instructor Examination". An Instructor Update Online package was priced at **$719.00 (ex GST, Australia)** in 2020 — https://www.padi.com/node/9351 (**outdated; do not use as a 2026 figure**). Scubaboard posters note insurance often costs more than dues [paraphrase] — https://scubaboard.com/community/goto/post?id=3336792

Cylinder side, and this part is genuinely clean: DOT 49 CFR 180.209 Table 1 sets a **five-year** requalification cycle; "a filling station must require recertification before filling a cylinder"; the **annual visual inspection comes from CGA P-5 guidance, not the DOT rule** — "federal regulations do not enforce visual inspection, though it is the best practice" — https://dan.org/alert-diver/article/inspecting-and-testing-scuba-cylinders/ . Aluminium 6351-T6 cylinders need visual + eddy-current every five years (same source, citing 49 CFR 180.209).

### THE RULE SET
**Mixed.** 49 CFR is free and perfect. **But PADI/NAUI/SSI standards are member-only/licensed, and renewal requirements are explicitly discretionary** ("varies depending on the circumstances"), i.e. **not computable**. Student-record retention and commercial-dive medicals (ADCI) add further paywalled/licensed layers.

### VERDICT: kill
Biggest failure reason: **audience wealth.** Dive instructors are a famously low-income profession and the renewal is an annual fee they already get chased for by PADI. Secondary: the core agency rules are discretionary and not public, so the engine can't be deterministic. (The cylinder-hydro/VIP sub-feature is a nice ingredient for some *other* app, not a business.)

### Gathering places (for the record)
ScubaBoard — https://scubaboard.com ; PADI Pros Blog — https://pros-blog.padi.com ; TDI/SDI — https://www.tdisdi.com ; DAN — https://dan.org

---

# §2 WELDERS & WELDING SHOPS (AWS D1.1 CONTINUITY) — kill

### THE RULE
D1.1 Clause 4.2.3.1: a welder's qualification "is effective indefinitely, as long as that welder does not go more than six months without using that process" — https://info.thinkcei.com/think-tank/aws-d1.1 and https://www.thefabricator.com/thewelder/article/arcwelding/arc-welding-aws-d11-welding-certification-documentation

### WHY IT'S A KILL — three independent reasons, all verified
1. **The core rulebook is PAYWALLED and expensive.** D1.1/D1.1M:2025 is **$570 member / $760 non-member** from AWS Publications (same price hard copy or PDF) — https://pubs.aws.org/p/2264/d11d11m2025-structural-welding-code-steel ; a reseller lists **$784.00** — https://www.welding.org/product/aws-structural-welding-code-d1-1-2010-2nd-printing/ ; DIN Media lists **€813.20 incl. VAT** — https://www.dinmedia.de/en/standard/aws-d-1-1-d-1-1m/392229537 . Per the brief, a paywalled core rule set is usually a kill, and here we cannot even restate the clause text safely.
2. **The code may not actually require the log we'd be selling.** An AWS forum contributor: "there are no requirements for a documented system of welder continuity. The contractor is responsible to ensure the welder has no lapse in excess of six months using a particular welding process for which the welder is qualified." [snippet-quoted] — https://app.aws.org/forum/topic_show.pl?pid=277247 . The Fabricator's own Q&A concedes that "zero hits for continuity appeared when the author searched the D1.1 text" — https://www.thefabricator.com/thewelder/article/arcwelding/arc-welding-aws-d11-welding-certification-documentation . And "they may be qualified per contract, but not per D1.1" [snippet-quoted] — https://app.aws.org/forum/topic_show.pl?pid=277228 . If the requirement is contractual rather than code-based, it is not a public stable rule we can compute from.
3. **The obligation and the cost sit with the employer, not the welder.** A forum poster argues the contractor "should be responsible for the added costs of re-qualification of welders and work loss during the re-testing of already qualified people" [snippet-quoted] — https://app.aws.org/forum/topic_show.pl?pid=277247 . Employer-owned = multi-user = kill. Incumbents are shop-level QA systems, e.g. https://ifactoryapp.com/industries/manufacturing-plant/welder-qualification-testing-performance-tracking

**No retest cost figure found anywhere.** GAP (but moot).

### VERDICT: kill
Biggest failure reason: **paywalled $760 core standard, and the "requirement" we'd be solving may be contractual rather than codified.**

---

# §5 WILDLAND FIRE / EMERGENCY-RESPONSE QUALIFICATIONS — kill

### THE RULE SET — free, but agency-owned
Red cards are renewed annually by the employing unit: the card "is updated annually by a unit's training officer", and firefighters "must submit their training and fireline experience records each year using the IQCS Responder Update Sheet" to that training officer — https://www.nifc.gov/about-us/our-partners/bia/training . Task books: "when the PTB is complete, and the person is nominated for certification, the training officer will certify the PTB and issue the new certification" — same source. Qualification requires "a combination of classroom training, a field exercise and, depending on the position, a physical fitness test" — https://www.bia.gov/bia/ots/dfwfm/bwfm/training-qualifications . NWCG 310-1 and the agency red-card procedures are free and public (e.g. https://gacc.nifc.gov/rmcc/dispatch_centers/r2gjc/training/Red%20Card%20Procedures_2026.pdf). Agency practice varies: "it also depends upon which agency you work for. If you're federal you get a true red card immediately after you pass the pack test each year" and "states, mutual aid groups and contractors do things differently everywhere you go" [snippet-quoted] — https://my.firefighternation.com/xn/detail/889755:Comment:6289788

### VERDICT: kill
Biggest failure reason: **the record of truth is IQCS, an agency system, maintained by a unit training officer who already does this.** The individual firefighter has neither the obligation nor the budget; federal/state wildland pay is low; and I could find no dollar cost of a lapse. **NREMT/paramedic multi-state recert was not researched — the search budget ran out before I reached it. Flag as unexamined, though "nurse CE" being an explicit exclusion suggests the studio has already judged the clinical-CE family.**

---

# §9 FRANCHISE OWNERS & MULTI-UNIT OPERATORS — kill on product constraints

**Honest disclosure: I did not research this niche.** I deprioritised it and the shared search budget ran out. I am killing it on a constraint read rather than evidence: FDD anniversaries, brand-standard audit cycles, equipment-refresh obligations, lease critical dates and co-op ad commitments are, by definition, **a multi-unit office workflow with a GM, a bookkeeper, a landlord and a franchisor in the loop** — the brief states "Multi-user office workflow = kill." Lease critical-date tracking is also an established commercial-real-estate software category. If the studio wants this examined properly, it needs its own scout.

---

# CROSS-CUTTING FINDINGS

### 1. The generic "certification tracker" category is real, cheap and weak — which is both good and bad news
**CertKeeper: License Tracker** sits at **$6.99/mo / $59.99/yr with a 7-day trial**, free-with-IAP, targeting "BLS, ACLS, and CEU renewals" — https://apps.apple.com/us/app/id6755570013 . **Expiration Reminder** is free, requires an account and a web companion, and rates **3.0★ from 2 ratings** — https://apps.apple.com/us/app/id1447157463 . **FreedomCert** is free — https://apps.apple.com/us/app/freedomcert/id6757224718 .

Two implications: (a) **$59.99/yr is a proven price point** at the bottom of the brief's $60-300 band for exactly this job-to-be-done; (b) a horizontal date-tracker is a commodity, so **all the defensibility has to come from encoding one audience's specific rules** (SFI punch dates and sanctioning-body tables; 4-hour-underway sea-service days). A generic reminder app in a niche costume will lose to a free calendar.

### 2. The pattern that actually separates winners from losers in this cluster
Every niche I examined has deadlines. Only a few have all four of:
- **the date lives on the user's own property** (a gear tag, a logbook) rather than in an agency's system that already emails them;
- **the consequence is personal and uninsurable** (your weekend, your season, your licence) rather than falling on an employer;
- **the interval is published free** even if the underlying standard is sold;
- **nobody is already paid to track it for them** (no trainer, no safety manager, no crew agency, no licence consultancy).

§6 (motorsport) and §A (charter captains) clear all four. Most of the others fail on #2 (employer pays: welding, crane, dielectric gloves, wildland fire) or #4 (someone else already tracks it: horse-show trainer, yacht crew agency, USEF portal, IQCS, USCG dockside examiner).

### 3. The "employer pays → multi-user → kill" filter is doing most of the killing
Welders, crane operators, dielectric-glove users, wildland firefighters and franchise operators all died on it. **When hunting this cluster further, test "who writes the cheque for the mistake?" first — it kills faster than anything else.**

### 4. What a follow-up scout with working network must fetch (ranked)
1. https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/ and https://forums.24hoursoflemons.com/viewtopic.php?id=42620 and https://grassrootsmotorsports.com/forum/grm/learn-me-drivers-safety-gear-expiration-rules/275065/page1 — **verbatim racer complaints (the #1 evidence gap in the #1 pick)**
2. App Store search for "SFI", "race gear", "tech inspection", "sea service", "sea time" — **confirm the blue ocean for both pursue candidates**
3. 46 CFR 10.227 + NMC renewal checklist — **confirm 360-day / 4-hour / 6-year sea-service rules**
4. forum.gcaptain.com + The Hull Truth — **verbatim captain complaints (the #1 gap in the #2 pick)**
5. https://sfifoundation.com/specs-program/ — confirm spec pricing and that we never need the spec text
6. SCCA GCR current edition PDF — confirm it is free and extract the gear-dating section
7. Current SCCA membership + any club-racer income/spend statistic
8. 46 CFR Table 98.140 — the commercial-fishing interval table (would unblock §B)
9. OSHA's January 2026 penalty adjustment (my $16,550 / $165,514 figures are 2025)
10. NCCCO's current fee table (my $250/$320 is from 2020)
