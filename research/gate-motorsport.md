# Motorsport dated-safety-equipment gate — VERDICT: **PASS, with one serious thesis caveat.**

Date: 2026-10-19 · Analyst: research analyst (sub-agent) · Method: CLAUDE.md §1 — **search the mechanic, not the rival**, mechanic first.

**PASS.** After **17 mechanic-first searches** across nine different idioms — racer vocabulary, retailer
pages, shared spreadsheets, forum tooling, sanctioning-body portals, team software, generic
expiry-tracker aggregators and adjacent-sport gear apps — **nothing was found that takes dated gear
inputs and computes expiry against sanctioning-body intervals.** The adjacent products (GridMate,
RacePrep, RaceIQ, Circle Track App) do *car* maintenance with next-due reminders and **user-authored**
checklists; the generic products (Expiration Reminder, Expiro, ExpiryDay, GearTracking, RackTracker)
hold a date the user already knows. Neither class knows what an SFI punch tag is, and **no product,
free or paid, ties gear dates to an event calendar.** No free spreadsheet circulating in a motorsport
forum surfaced in any search. No retailer "check your belt date" calculator exists — retailers publish
**prose explainers**, not tools.

**The caveat, stated up front because it is the real risk and it is not a competitor:**
**since 2018 SFI prints the expiration date directly on the label**, and FIA has always printed an
expiry year. *"Starting in 2018 SFI changed the design of their labels to now show the expiration date
of their certification, rather than the previous label design, which had a burn mark to show the date
the harness was manufactured"* `[search-snippet]` — https://www.prpseats.com/changes-to-sfi-labels ;
corroborated by SFI's own 2016 handout: *"New Labels will come out in 6-month segments"*, a `JUN 2019`
label covering units made `01/01/17–06/30/17` `[search-snippet]` —
https://andra.com.au/wp-content/uploads/2016/12/20161208_New_SFI_Labels_Info_Handout_01-01-17.pdf
**For any harness or fire bottle bought after ~2018, there is no arithmetic left to perform: the answer
is printed on the item.** The §8 aha ("your harnesses' 2-year interval lands 14 April 2027") is the
*legacy punch-tag* computation, and the installed base of punch-tag gear shrinks every season. This
does not fail the gate as written, but it materially shrinks the computational moat, and §12's
"too cheap to subscribe to" killer gets worse, not better. **Flagging for the operating partner;
not a sub-agent's call to kill on.**

**Zero `[verified-fetch]` this run.** Every host I tried was refused — `fastracer.com`,
`grassrootsmotorsports.com`, `jegs.com`, `timetrials.scca.com`, `chrome-stats.com`, `appgoblin.info`
all returned `getaddrinfo ENOTFOUND`, and `apps.apple.com` / `itunes.apple.com` are blocked as before.
**Everything below is `[search-snippet]`.** Per the E1/E2 lesson, note the asymmetry and treat it
honestly: a PASS built on snippets that *fail to mention* a competitor is weaker evidence than a FAIL
built on snippets that *affirm* one. §4 exists because of that.

---

## 1. MECHANIC-FIRST SEARCH RESULTS — the point of this gate

Seventeen searches, phrased as the computation and as a racer would say it. **Not one returned a tool.**

| # | Query (mechanic phrasing) | What it returned | Any product that computes expiry? |
|---|---|---|---|
| 1 | `"when do my racing harnesses expire" SFI punch date` | Retailer/magazine explainers: PRP, Fast Racer, Performance Racing, JEGS; forum threads (ApexSpeed, sfldrifters) | **No.** Prose only. |
| 2 | `racing safety equipment expiration tracker spreadsheet SFI helmet harness expiry dates` | Explainers + a garbled 2022 Eurodragster standards PDF. Search engine's own summary: *"The search didn't turn up a ready-made expiration tracker spreadsheet"* | **No. No circulating spreadsheet found.** |
| 3 | `"SFI" expiration date calculator tool "enter the date" harness fire bottle recertification due` | 24 Hours of Lemons forum threads, Pegasus Auto Racing PDF, OG Racing product pages. *"I didn't find an SFI expiration date calculator or a tool where you enter a date"* | **No.** |
| 4 | `helmet Snell expiration date check tool "is my helmet legal" SCCA NASA year` | Fast Racer Q&A, SCCA's own helmet-certifications article, my350z threads. *"The search didn't turn up an official Snell or SCCA/NASA helmet-lookup tool"* | **No.** |
| 5 | `racer gear expiration reminder app "safety gear" ... "reminds you"` | **RackTracker** (climbing: gear age, inspection dates, retirement), dive-gear service-reminder forum requests. *"I didn't find a racing-specific app that reminds drivers when helmets or harnesses expire"* | **No — and the adjacent-sport analog exists, which is a good sign for the pattern and a bad sign for defensibility.** |
| 6 | `google sheets spreadsheet track my racing safety gear expiration dates shared forum template` | Generic templates only: Spreadsheet Daddy expiry tracker, Infoinspired document-expiry tracker, a ~$25 Gumroad PPE compliance tracker. *"I didn't find a racing-specific template or a shared forum thread for this"* | **No.** |
| 7 | `"SFI certification" tracking software race team parts expiration ... NHRA chassis cert due` | Only HR/workforce compliance SaaS: Expiration Reminder (**4.5/5 from 49 users**, from **$149/mo** for 1,000 items), Remindax, VAIRKKO, Aptien, Certemy. *"nothing specific to SFI, NHRA, or race-team parts tracking"* | **No. Wrong audience, wrong price, wrong vocabulary.** |
| 8 | `app tracks "safety gear" expiration dates racers iOS "helmet" "harness" "fire system"` | **GearTracking** (sports gear, *"how old a helmet is"*, runners/cyclists/triathletes, **free to 10 items + Premium**), **RackTracker**, **Decathlon GearTrack**, **Plum Safety Reminder**, **Expiration Reminder**, **Helmet Tracker** (web, athletic helmets) | **No.** Closest is GearTracking's helmet *age*; no standards, no bodies, no events. |
| 9 | `SCCA member portal track safety gear expiration dates logbook "my account"` | MAP handles *"membership and personal information"* only; helmet date lives on the **tech sticker**; the logbook *"belongs to the vehicle, not the owner or driver"* | **No.** See §2. |
| 10 | `NASA ... MotorsportReg ... driver safety gear dates expiration profile upload` | MotorsportReg event-**requirements** pages only: *"each driver handles their own safety equipment, inspection, and insurance"* | **No. Event-side, not driver-side.** |
| 11 | `sfifoundation.com ... product lookup verify label expiration search tool` | Collided with Sustainable Forestry Initiative. No motorsport SFI label-lookup tool surfaced | **No.** |
| 12 | `"will my" belts OR helmet "pass tech" expired forum "how do I know"` | Pure pain evidence, no tools. See §1a | **No.** |
| 13 | `"harness expiry" OR "belt date" calculator retailer page "enter" date` | **The rule, in exactly our arithmetic** (see §1b). No calculator. *"I didn't find a retailer calculator page for motorsport harness expiry"* | **No.** |
| 14 | `"is there an app" track my racing gear certification expiration dates racers forum` | Explainers only; search engine suggested *"you could try searching app stores for 'racing gear tracker' or 'SFI expiration tracker'"* — i.e. it knows of none | **No.** |
| 15 | `track day app features "tech inspection" "expiration" gear log helmet date reminder` | MotorsportReg tech forms, PCA paper forms, JotForm season tech forms, Turn14 checklist. *"The search didn't turn up a dedicated track-day app that tracks tech inspection expiration, gear dates, and reminders"* | **No — and it surfaced a rule we had missed: see §1b.** |
| 16 | `"SFI 16.1" OR "SFI 38.1" expiration tracker app OR website` | Generic: **IamResponding Expiration Tracker** (fire departments; *"weekly emails listing anything that expires within the next 30, 60, 90 or 120 days"*), **Expiro** (iPad, photo scan), **ExpiryDay** | **No.** |
| 17 | `harness recertification service "remind you" ... recert company email service date` + `"before your next event" gear expires ... calendar` | Forum threads on who still recerts (RJS, Crow, RCI trade-ins). **No manufacturer or recert shop offers a date-reminder service.** *"I didn't find a dedicated tool that tracks gear expiration dates against a racer's event calendar"* | **No. The channel-bundling failure mode that killed the mariner niche does not reproduce here.** |

### 1a. The pain is confirmed by the mechanic searches (and it is uneven)

Gate-enforcement and inconsistency, both real, both quoted `[search-snippet]`:
- *"All he checked was my helmet and belt dates"* — https://www.forabodiesonly.com/mopar/threads/more-seat-belt-baloney.544637/latest
- *"My home track checks belts and hat every time. You basically get one freebie week, then they won't let you race."* — https://www.forabodiesonly.com/mopar/threads/seat-belt-cert-questions.555230/post-1974566649
- *"I've never seen them check harness or helmet dates, not even at team finals."* — same thread
- *"I've seen people with harnesses that expired 2 years ago racing and testing at the track that we both frequent."* — same thread
- *"there is no discretion on these safety critical items"* — https://www.classicsportscarclub.co.uk/post/helmets-and-belts-notes-from-the-scrutineering-bay
- *"more than one driver has failed tech inspection because these items were holey or tattered"* (gloves/shoes) — https://grassrootsmotorsports.com/articles/heading-back-action-take-good-look-your-safety-gea

**Read honestly: enforcement is real at some tracks and absent at others.** That is consistent with §3a's 3/5 pain score and with §12's Killer 1. It is not a gate failure.

### 1b. What the mechanic searches *did* hand us — free, published, per-body intervals

This is the useful by-product. Our §9 rule set is confirmed as free and published, and the arithmetic is
published too — **in our exact words**, by a sanctioning body, for free:

> *"For SFI belts, we take the date punched into the SFI label (which is approximately the date of
> manufacture in most cases), add 2 years, and then round out to the following December. For FIA belts,
> the label's expiration date is used."*
> `[search-snippet]` — https://www.icscc.com/forums/goto/post?id=8952

Per-body divergence is confirmed and is genuinely non-trivial — the strongest remaining argument for F2:
- **CASC-OR (Ontario):** *"the board approved a 5 year extension to the service life of FIA approved safety harnesses for CASC-OR competition use"* — https://casc.on.ca/node/1377
- **Motorsport UK:** *"8853-2016 belts may be used for up to five years after the expiry date shown on the label"*; *"The older 8854-98 standard has no extension"* — https://www.classicsportscarclub.co.uk/post/helmets-and-belts-notes-from-the-scrutineering-bay
- **SFI, no extension anywhere:** *"No extension has been granted for SFI approved belts. They must be taken out of service at their stated expiration date."* — same CASC source
- **SCCA helmets:** helmets *"age out after no more than 15 years"*; 2005-rated Snell/SFI barred from 1 Jan 2022 — https://scca.com/articles/2015714-helmet-certifications-updated-for-2022
- **CACC/NSC (Canada):** *"The Snell 2015 helmet expiry dates have been extended to December 31, 2026"* — https://www.armsinc.ca/wp-content/uploads/2025/11/NSC_Bulletin_2025-001.pdf
- **NHRA:** chassis tag *"within three years of current month"*; SFI 16.1 belts *"within two years of manufacture"* — https://www.nhraracer.com/post/tuesday-tech-question-presented-by-evans-coolant-47
- **IHRA:** Sportsman chassis tag *"expires in 3 years"*, Pro tag one year — https://ihra.com/safety-information
- **PCA (new — not in §9):** *"THIS INSPECTION IS VALID FOR 120 DAYS FROM DATE OF INSPECTION"*, void after an incident report or on-track mechanical failure; one region requires inspection *"no more than 30 days prior to Track Day"* — https://dl.motorsportreg.com/77893f36-0133-463d-a9f7-e0b9653a892a/
- **Motorcycle track days (new):** helmet capped at five years from manufacture, rider must prove the date — https://wmrc.ca/track-days/motorcycle-and-gear-requirements/
- **Fire bottles — contested and worth care:** *"10 years max service life for FIA-certified models only. For SFI-certified models, it's 6 years max service life"* + *"still need to be serviced every 2 years"* — https://forums.24hoursoflemons.com/viewtopic.php?id=42620
- **Snell contradicts itself in the trade press:** *"valid for 10 years from their certification date"* vs *"do not have a formal expiration date, Snell recommends replacing ... after about five years"* — https://www.fastracer.com/a/answers/7036989/What-is-the-snell-helmet-expiration-date and https://www.fastracer.com/a/answers/6055927/How-many-years-is-a-Bell-helmet-good-for

**Two consequences.** (a) The per-body table is the real product, not the subtraction — which supports F2
over F4. (b) It also **caps our price**, because every retailer in the sport publishes a free explainer of
these same intervals (§10c already said this; the mechanic searches confirm it emphatically — PRP, JEGS,
Fast Racer, Tegiwa, GSM Performance, Speedwear, Performance Racing all do).

---

## 2. Sanctioning-body portals and the logbook — **do not already do it**

| Body / system | Does it hold gear dates and compute? | Evidence `[search-snippet]` |
|---|---|---|
| **SCCA Member Account Portal (my.scca.com)** | **No.** Membership, profile, digital membership card, digital annual waiver, licences & waivers store. Nothing about gear. | https://www.scca.com/articles/2013520-putting-an-improved-member-experience-on-the-map ; https://www.scca.com/articles/2020131-make-2026-easy-with-a-digital-annual-waiver-digital-membership-card |
| **New SCCA.com (launching 2026)** | **No gear feature announced.** *"As part of the new SCCA.com launching in 2026, we are simplifying how members access the site. New website accounts can no longer be created."* **Watch this** — it is the one platform that could absorb the feature by fiat. | same |
| **SCCA vehicle logbook** | **No — and structurally wrong for us.** *"one and only one logbook is issued to a vehicle (and its cage), and it belongs to the vehicle, not the owner or driver"*; it holds *"a history of events entered"*. Confirms §10c R13. | https://na-motorsports.com/Organizations/SCCA/Racing/tech/Logbook.html |
| **SCCA helmet tech sticker** | **No.** Records inspection, not expiry: *"helmets must be inspected, and a tech sticker should be affixed"*, stickers *"may be annual"*. | https://timetrials.scca.com/pages/safety |
| **Motorsport UK** | **No.** Publishes a free **Recognised Helmet Standards** document; the approval sticker *"has a date on it [but] there is no expiry, providing the helmet standard is in date"*. Scrutineering records are tied to a **Vehicle** Identification Sticker, *"held centrally by the ASN"* — the car, not the driver's gear. | https://motorsportuk.org/knowledge-hub/recognised-helmet-standards ; https://www.classicsportscarclub.co.uk/post/helmets-and-belts-notes-from-the-scrutineering-bay |
| **Motorsport Australia** | `[GAP]` — nothing returned either way. | — |
| **NASA** | `[GAP]` — no member-portal gear feature surfaced in two searches. | — |
| **NHRA / IHRA** | **No portal found.** The date is read off the **physical chassis tag**: *"The punched out dates ... show that your car passed NHRA Chassis inspection in the 7th month (July) of 2016 and would expire in three years on July 31, 2019."* | https://www.nhraracer.com/post/tuesday-tech-question-presented-by-evans-coolant-84 |
| **MotorsportReg** | **No.** Publishes per-event requirements; *"each driver handles their own safety equipment, inspection, and insurance"*. Still the best channel **and** still the most likely absorber (§10b). | https://www.motorsportreg.com/index.cfm/event/event.requirements/uidEvent/74D66712-B1F4-D61E-1CB5126A30012336 |

---

## 3. The named suspects

No store page was opened. All `[search-snippet]`.

| | **GridMate** | **RacePrep — Maintenance Tracker** | **RaceIQ Track Day** | **Circle Track App** | **GearTracking** | **RackTracker** | **Expiration Reminder** |
|---|---|---|---|---|---|---|---|
| **Computes expiry from gear dates?** | **NO.** Maintenance *"next-due reminders"* on **service schedules**, and **user-authored** checklists. *"Nothing I found covers gear expiry dates (helmets, harnesses, fire extinguishers) or safety equipment inspection."* | **NO.** *"I couldn't find any evidence that RacePrep tracks safety equipment expiration or SFI dates ... None of the results mention helmets, harnesses, HANS devices, fire suits, SFI certification, or expiration tracking."* | **NO.** Wear-based, not date-based: *"brake pad and rotor wear monitoring with percentage-based alerts, plus parts replacement reminders"*. | **NO.** *"maintenance schedules, parts lists, measurements, multiple car setups, race day notes"* — car only. | **Partly, wrong domain.** *"tracks when gear needs replacing, such as running shoes and how old your helmet actually is"* — age, not a standard. | **Closest mechanic, wrong sport.** *"monitors gear age, inspection dates, and retirement"* for climbing. | **NO.** Holds a date you already know. |
| **Per-sanctioning-body intervals?** | No | No | No | No | No | No | No |
| **Ties to an event calendar?** | **No** — pre-event checklists exist, but no date arithmetic against an event date | No | No | No | No | No | No |
| **Price** | Free + IAP (**amounts `[GAP]`**) | Free + IAP; **Team Plan $7.99/mo or $59.99/yr** (US listing; CA listing higher) | `[GAP]` | `[GAP]` | **Free to 10 items**, then Premium | `[GAP]` | **From $149/mo** for 1,000 items (web/SaaS); separate free iOS app |
| **Platform** | iOS, iCloud sync | iPhone only, 13+, dev RaceYear | iOS (iPad-listed) | Android listing seen | iPhone | iOS | iOS + web, **account required** |
| **Rating count** | `[GAP]` — never obtainable | **5.0 from 1 review** (*"too few to be meaningful"*) | `[GAP]` | `[GAP]` | `[GAP]` | `[GAP]` | **4.5/5 from 49 users** (Capterra, the SaaS) |
| **Last update** | **Listings disagree**: one shows a 3.0.3 bug fix, another **v4.0.1, 2026-05-01** | `[GAP]` | `[GAP]` | `[GAP]` | `[GAP]` | `[GAP]` | `[GAP]` |
| **The weakness, quoted** | *"its checklists are user-authored — the user still has to know the intervals"*; and *"the listings are developer marketing copy, and the developer has a low review count"* | *"a 5.0 rating from one review, which is too few to be meaningful"*; team-oriented against our single-user constraint | *"Performance tool, not an admin tool"* (§10b) — wear %, not dates | fan/car-setup oriented | *"aimed at runners, cyclists and triathletes"* | *"It's climbing-focused, not racing"* | *"general credential-renewal tool ... Nothing mentions SFI or NHRA"* |

**GridMate remains the live threat and the gate does not clear it permanently.** It already owns the
reminder engine, the garage model and the pre-event checklist. Adding a bundled interval table is, as
§10a said, *a weekend's work for them*. **PASS now ≠ PASS in six months. Re-run this gate quarterly**,
and treat an update to GridMate's listing text naming SFI, Snell or expiry as a pivot trigger.

---

## 4. What I could not reach

`getaddrinfo ENOTFOUND` / 403 on CONNECT for every one of:
- `apps.apple.com`, `itunes.apple.com`, `play.google.com`
- Aggregators: **`chrome-stats.com`**, **`appgoblin.info`**, `mwm.ai`, `spark.mwm.ai`, `apptopia.com`
- Sources quoted above but never opened: `www.fastracer.com`, `grassrootsmotorsports.com`,
  `www.jegs.com`, `timetrials.scca.com`, `www.scca.com`, `motorsportuk.org`,
  `www.forabodiesonly.com`, `forums.24hoursoflemons.com`, `www.icscc.com`, `casc.on.ca`,
  `www.prpseats.com`, `www.motorsportreg.com`, `dl.motorsportreg.com`, `www.nhraracer.com`,
  `www.classicsportscarclub.co.uk`, `www.armsinc.ca`
- **Zero `[verified-fetch]`.** No rating count in §3 was observed by me; each is reproduced from a snippet
  and **none was invented**. GridMate's IAP prices and every "last update" remain `[GAP]`.

**What this means for the verdict.** The PASS rests on **seventeen** independent query phrasings
returning no computing product, including four where the search engine stated outright that it found
none. That is much stronger than the five name-based passes that missed MM-SEAS — but it is still
absence of evidence. **§5 is mandatory before any code is written.**

---

## 5. The founder's five-minute manual procedure

**Do GridMate first.** It is the only one that can turn this PASS into a FAIL.

### A. GridMate — 3 minutes (the gate)
1. App Store → install **GridMate** (free). Skip any sign-in if offered.
2. Before entering anything, use the in-app **search** (or Settings → Help) for the words
   **`SFI`**, **`Snell`**, **`helmet`**, **`harness`**, **`expiry`**. **Any hit = FAIL.**
3. Add a car, then open **Maintenance** (or **Service**). Try to add an item whose **due date is a fixed
   calendar date derived from a standard**, not mileage/hours/interval-from-last-service. Specifically look
   for a **"standard" or "certification" field** offering SFI/Snell/FIA.
   - Only *"every N months from last service"* → **it is a service scheduler, not an expiry engine → PASS.**
   - A standard picker that fills the date **for** you → **FAIL.**
4. Open **Checklists**. Create one. If items are **free text you type**, PASS. If GridMate ships a
   **preset "tech inspection" checklist with dates already computed per sanctioning body**, FAIL.
5. Note the **IAP prices** on its paywall (we have never obtained these) and the **rating count**.

### B. The dated-gear test, 60 seconds each, on GridMate then RacePrep
Enter exactly this and see whether any screen produces a **date you did not type**:
- **Helmet:** Snell **SA2015**.
- **Harnesses:** SFI 16.1, punch **March 2024**.
- **Fire bottle:** SFI 17.1, serviced **June 2023**.
- **Next event:** **1 June 2027**, SCCA.

**FAIL looks like:** a screen showing *31 December 2026* for the harnesses (Mar 2024 + 2 years → round to
the following December — the ICSCC/SCCA rule in §1b), or *31 December 2026* for the SA2015 helmet, or any
sentence of the form "expires before your 1 June 2027 event". **A date you did not type = someone already
computes it = FAIL, drop the niche.**
**PASS looks like:** every date on screen is one you typed, and the only derived dates come from
intervals **you** entered by hand.

### C. The free-alternative sweep, 60 seconds
1. Google, on the phone: **`racing gear expiration tracker spreadsheet`** and
   **`SFI expiration tracker`**. Open the first two results.
2. If a **free Google Sheet with per-body intervals built in** circulates anywhere, that is the
   MM-SEAS of this niche. **Screenshot it and FAIL.**

### D. Thirty seconds that may matter more than all of the above
**Go to the garage and read your own harness label.** If it says **`JUN 2027`** rather than a punched
month/year, you have just seen the caveat in the first section with your own eyes: for post-2018 gear the
product's arithmetic is already printed on the item, and the business has to be the **per-body table and
the event calendar**, not the subtraction. Decide the positioning before Xcode opens.

### E. Exact App Store search terms to type
Search tab, one at a time, exactly as written:

1. `gridmate` ← the gate. Read the **full description**, not the screenshots.
2. `raceprep`
3. `raceiq track day`
4. `racing safety gear expiration`
5. `SFI expiration`
6. `snell helmet expiration`
7. `harness expiration`
8. `tech inspection racing`
9. `race gear tracker`
10. `racing logbook`
11. `track day checklist`
12. `fire extinguisher inspection reminder` ← the generic category that could cover us
13. `gear tracking` ← returns **GearTracking** (id1458276745); check whether it has added standards
14. `racktracker` ← climbing; confirm the mechanic is unclaimed in motorsport
15. `expiration reminder` and `expirydate` ← the generic incumbents
16. Developer-name searches: `RaceYear`, and GridMate's developer (name `[GAP]`)

For each result record: **price and IAP amounts**, **rating count** (or "not enough ratings"),
**last updated**, and the one question that decides it — **does any screenshot show a date the user did
not type, next to a standard (SFI / Snell / FIA) or a sanctioning body?**

---

## 6. Consequences, stated plainly

- **Gate: PASS.** Nothing computes dated gear expiry against published per-body intervals, free or paid.
  Proceed — but proceed to §5 and the next experiment, not to Xcode.
- **One blocker is now mandatory, not optional:** §5A/B must be run by the founder on a phone before any
  Swift is written. Seventeen negative searches with zero verified fetches earns a PASS, not a licence to
  skip the manual check.
- **Two edits for the operating partner (flagging, not editing — CLAUDE.md §8):**
  1. **Add to §9 / F2:** the **PCA 120-day tech-inspection window** (void on incident or mechanical
     failure, 30 days in some regions) and the **five-year-from-manufacture motorcycle track-day helmet
     rule**. Both are free, published, per-body, and neither is in the deep dive.
  2. **Revise §8's aha and §12's Killer 1** in light of the printed-expiry-date finding. The honest aha
     for post-2018 gear is *"which of my seven dated items lands before 1 June, under SCCA's rules"* —
     a **portfolio-and-calendar** claim, not an arithmetic one.
- **§10b correction:** the table's "none appears to track dated safety gear" is now supported by mechanic
  searches rather than assumed, and three more adjacents belong in it: **Circle Track App**,
  **GearTracking** (free to 10 items — the nearest free thing to our free tier) and **RackTracker** (the
  mechanic, proven in an adjacent sport).
- **Quarterly re-run, with a named trigger:** GridMate's listing text naming SFI, Snell, helmet, harness
  or expiry, **or** the new SCCA.com (2026) shipping a member gear record. Either is a pivot trigger.
- **The method held.** Searching the mechanic found no rival here — but it did find the **printed
  expiration label**, which is the single most decision-relevant fact in this file and which five
  name-based competitor passes would never have surfaced. That is the E1/E2 lesson paying for itself in
  the opposite direction: the mechanic search can kill a thesis without there being a competitor at all.
