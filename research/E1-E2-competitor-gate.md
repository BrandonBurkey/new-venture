# E1 + E2 competitor gate — VERDICT: **FAIL. DROP THE NICHE TODAY.**

Date: 2026-10-19 · Analyst: research analyst (sub-agent) · Gate defined in `research/deep-dive-mariner.md` §7 (E1, E2) and §10.

**FAIL.** An existing product already computes the rolling USCG recency window — a trailing 5-year
qualifying-day total and a trailing 7-year recency total, against the 360-day and 90-day targets,
with fractional (1.5-day) credit applied by rule — and it does it **free**, and it is **distributed
by the licence schools**. It is **MM-SEAS** (`mmseas.com`), and it is **not in the deep dive's
competitor table at all.** It also already produces the CG-719S document we designated as our hero
artefact, and it already owns the filing relationship with the National Maritime Center.

This is not "but ours is nicer" territory. The thing the deep dive called "the entire business" —
*"Logging days is commodity. Computing the window from the rules is the product"* — is shipped,
free, by an incumbent with school distribution. Per CLAUDE.md §1: *"If a well-funded competitor
already nails the problem, say so and drop it."* Dropping.

The literal E1 trigger (SeaLog specifically) is **UNDETERMINED** — I could not reach a single store
page. That does not save the niche, because the gate question as posed is "does **any** existing app
compute a rolling USCG recency window", and the answer is yes.

---

## 1. The decisive finding — MM-SEAS

All MM-SEAS evidence is `[search-snippet]`: `mmseas.com` is DNS-denied at this proxy (403 on
CONNECT), so I did not open a single page myself. Every quote below was returned by the search
engine off the named URL.

| Gate criterion | MM-SEAS | Evidence |
|---|---|---|
| **Trailing-window total** | **YES — and it is pinned to the top of every page.** Three persistent counters: *Total Sea Days*, *Recency Days* (last **7** years), *Renewal Days* (last **5** years). A partner school states it plainly: *"The software calculates your sea days in the past five years. If you have over 360 days, you qualify for renewal without exams."* | https://www.mmseas.com/post/what-are-the-three-sea-day-numbers-at-the-top-of-mm-seas-home-pages ; https://colpacmaritime.com/uscg-license-renewals-made-easy/ |
| **1.5-day two-watch credit** | **YES, and modelled more finely than our planned v1.** *"MM-SEAS web app software does the calculation of your time and turns it into the actual credit in a simple view for you to reference."* Their own worked example reads **701.5 / 360.5 / 251.5 days** — the half-days are the 1.5 credit surfacing. They also encode the nuance that the credit is *not* claimable on a CG-719S: their calculator *"applies the 1.5 multiplier only to letters on company letterhead."* | https://www.mmseas.com/post/sea-service-defined ; https://www.mmseas.com/post/sea-service-calculator-uscg-license-application ; https://marinerslearningsystem.com/blogs/knowledge/documenting-boating-experience-form-cg-719s |
| **Shortfall against a chosen target** | **YES, functionally.** The counter is shown against the 360-day threshold, and the tool's stated job is to *"calculate your renewal days in the last five years and help you determine if you have to take any training or renewal examinations."* The *number* vs the *target* vs the *consequence* — all three, on the home screen. | https://www.mmseas.com/ultimate-uscg-license-renewal-checklist |
| **USCG-form-shaped export** | **YES — including our hero artefact.** *"For vessels under 200 GRT, create digital CG-719S forms (Small Vessel Sea Service) directly in MM-SEAS."* Also *"MM-SEAS uses your profile to build your CG-719B and take care of everything behind the scenes for you."* | https://www.mmseas.com/post/explore-mm-seas-software-features-for-uscg-mmc-renewal |
| **Price** | **Free tier, "free forever", and the free tier is exactly our product**: *"Automatic tracking of your sea days to meet USCG license renewal requirements"* + *"Reminders when your documents are close to expiring."* Paid tiers are the human layer: Expert Access **$99/yr**, Stress-Free MMC **$399/application**, Admiral **$999/yr** (figures vary across their pages: also seen $899, $349, $249). | https://www.mmseas.com/ |
| **Platform** | Cloud/web app, *"available on desktop and mobile"*. **No iOS App Store listing found** — this is their one genuine gap. | https://gcaptain.com/new-software-helps-merchant-mariners-apply-for-maintain-and-grow-their-u-s-coast-guard-credentials/ |
| **Storage / account** | Server-side, account required ("cloud-based software for Merchant Mariners"). | https://www.mmseas.com/newsroom |
| **Rating count / last update** | `[GAP]` — no store listing, so no ratings. Actively developed: a **MobileOps** integration auto-logging sea time from vessel operations was *"scheduled for full customer release by the end of the first quarter of 2026."* | https://www.waterwaysjournal.net/2026/01/30/mobileops-mm-seas-partner-to-automate-sea-service-letters/ |
| **Weakness in reviews** | **"no verbatim complaints found"** — I found no independent review, no BBB record, no gCaptain thread naming them. Their claims are all self-description plus partner marketing. Tracked on CB Insights; trade press in gCaptain and Waterways Journal. | https://www.cbinsights.com/company/mm-seas |

### Why this kills it rather than wounds it
1. **The computation is free.** Our entire price justification was that nobody computes the window. A free incumbent computes it.
2. **The schools are the channel, and the channel is taken.** The deep dive's §11 plan was licence schools and forums. **Maritime Institute** and **Columbia Pacific (ColPac) Maritime** both already bundle MM-SEAS for their students, and MM-SEAS runs banner ads on the gCaptain forum. We would be buying our way into a channel that distributes the free competitor.
   - https://maritimeinstitute.com/maritime-institute-partners-with-mm-seas-uscg-licensing-software-to-streamline-uscg-credentialing-for-students/
3. **The hero artefact is theirs.** Digital CG-719S generation is live. Our $49 concierge PDF (E5) is competing with a free button.
4. **The regulator gives one away too.** The NMC itself launched a sea-service time calculator (Professional Mariner, ~2019), carrying the exact disclaimer we had drafted: *"not an official evaluation of a Mariner's Sea Service, and actual credit for Sea Service will be based on the date of application."* Current status `[GAP]` — could not reach the page.
   - https://professionalmariner.com/national-maritime-center-offers-new-sea-service-time-calculator/
5. **Free browser calculators are a commodity.** blackhatmarine.com (*"Everything runs in your browser"*), marineinsight360.com, metacad.io, calzi.net, seawallet.co.uk, procalculator.co.uk. E4's "free browser calculator as the aha" is not novel; the aha has no scarcity.

**Also note the honest counter-read, and why it does not rescue the niche:** MM-SEAS is web, account-based and cloud-stored, so our "phone-first, on-device, no account" wedge is intact *as a wedge*. But that is a packaging difference on top of a solved computation, sold against free, into a channel the incumbent already owns. That is precisely the "no appeal, no 'but ours is nicer'" case the gate was written to catch.

---

## 2. Per-app evidence table — the named targets

Columns answer the gate question. `[GAP]` means unobtainable in this run. **No store page was opened
in this run** — see §3.

| | **SeaLog** (Training Resources Ltd) | **Sea Service** (id6473282537) | **Maritime Logs** | **SeaTime Tracker: Crew Logbook** | **Blue Tiefpunkt SeaLog** (id6774809967) — *new, not in §10* | **Seatime & Sea Service** (id6503298844) — *new* |
|---|---|---|---|---|---|---|
| **Trailing-window total?** | **No evidence, after six search passes.** Vendor and press language is *"tracks sea time"*, *"retains copies of every certificate"*, *"reminders set up by each mariner"* — track and remind, never compute. **UNDETERMINED but probably no.** | **No evidence.** Listing says only *"log your time aboard different vessels"*; developer says *"record, track and export sea service records for maritime certification"*. The §10 worry about *"milestone tracking toward ticket eligibility"* did **not** reproduce in this run's snippets. **UNDETERMINED, leaning no.** | **No.** It has **goal tracking** — *"custom goal tracking in sea days or watchkeeping hours"* — but a cumulative goal is not a trailing window. `[GAP]` on confirmation. | **No.** `[GAP]` | **No window evidence**, but it targets our form: *"generate structured service records designed to support the CG-719S sea service reporting process"*. **UNDETERMINED.** | `[GAP]` — surfaced only as a search result title. |
| **1.5-day two-watch credit?** | No evidence. | No evidence. | No evidence. Does compute **day/night hours from sunrise/sunset** automatically. | No evidence. | No evidence. | `[GAP]` |
| **Shortfall vs chosen target?** | No evidence. | No evidence. | Partially — a user-set goal, not a regulatory window. | No evidence. | No evidence. | `[GAP]` |
| **USCG-form-shaped export?** | **Yes, partially — and this was always the real threat.** *"allows the mariner to output a spreadsheet file with the information required by the (U.S. Coast Guard) Sea Service form."* A spreadsheet, not a form. | Exports sea service records; shape `[GAP]`; vocabulary is MCA/UK-flavoured. | No. | **PDF templates target MCA / PYA / Nautilus (UK)** — wrong country. | **Yes:** free tier does CSV in/out; **Pro adds "PDF sea service reports"** plus KMZ/GPX. | `[GAP]` |
| **Price** | **Free.** *"The SeaLog app is free to download and use, and there is no advertising within the app."* | Free download + subscription. US listing IAPs: **Full Access $5.95 and $49.95, Sea Service Annual $29.95, Sea Service Monthly $2.95, Yacht Crew Special $24.99.** Vendor site contradicts the store: monthly $5.95 / annual $49.95, *"7-days free, then select a plan."* India listing ₹2,999/yr, ₹299/mo. | `[GAP]` | `[GAP]` | **Freemium:** *"Most SeaLog functions are free of charge, including trip recording, vessel and trip management, data import, backups, and CSV exports. SeaLog Pro adds PDF sea service reports and KMZ and GPX trip exports."* | `[GAP]` |
| **Platform** | iOS + Android (`com.marinerapp` on Play). | iOS 12.4+. | iOS. | iOS. | iOS. | iOS. |
| **Rating count** | `[GAP]` — **still unobtainable after six passes.** | **Still zero-ish:** *"This app hasn't received enough ratings or reviews to display an overview."* India listing ~847 days old. | `[GAP]` | `[GAP]` | `[GAP]` — store id `6774809967` implies a 2025–26 listing, so likely near-zero. | `[GAP]` |
| **Last update** | `[GAP]`. Press coverage and listings are **~5–6 years old**; *"I did not find a current feature list from the developer."* Possible abandonment. | `[GAP]`; India listing snapshot ~847 days old. | `[GAP]` | `[GAP]` | New listing, 2025–26. | `[GAP]` |
| **Storage / account** | **Server + account.** *"All data is stored in secure servers in the U.S."* Offline read-only: *"When outside of cell/WiFi range, the app will still allow mariners to view their certificates and sea time."* | Account-based; data types linked to the user include identifiers and contact info. | **On device**, with backup/restore — undercuts part of the privacy wedge. | AIS-based automatic logging; storage `[GAP]`. | Local with CSV import/export and backups; account `[GAP]`. | `[GAP]` |
| **Weakness in reviews, quoted** | **"no verbatim complaints found."** No reviews reachable. | **"no verbatim complaints found."** The store itself: *"This app hasn't received enough ratings or reviews to display an overview."* Prices disagree between store and vendor site — a real but unreviewed defect. | **"no verbatim complaints found."** | **"no verbatim complaints found."** | **"no verbatim complaints found."** | **"no verbatim complaints found."** |

**E1 as literally written: UNDETERMINED.** No source in six passes (five prior + this one) attributes
window computation to SeaLog, and its own vocabulary is track/remind. **E2 as literally written:
PASS** (none of those paid loggers computes a USCG window, and *Sea Service* still has no ratings).
**The gate as actually asked: FAIL**, on MM-SEAS.

One correction for the record: the deep dive's §10 named **two** "newly found" apps. The field is
materially more crowded than that — this run added **MM-SEAS**, **Blue Tiefpunkt SeaLog**,
**Seatime & Sea Service**, the **NMC's own calculator**, and six free browser calculators. Blue
Tiefpunkt SeaLog is also a name collision with the Training Resources SeaLog, plus a sailing app, a
dive log (`sealog.life`) and a commercial fleet product (`sealogs.com`) — the founder must not
confuse them on the phone.

---

## 3. What I could not reach

Every host was refused at the egress proxy; `curl` returned `CONNECT tunnel failed, response 403`
and WebFetch returned `getaddrinfo ENOTFOUND` for all of:

- `apps.apple.com`, `www.apple.com`, **`itunes.apple.com`** (the JSON lookup API — tried, blocked;
  this would have given full descriptions, prices, rating counts and release dates in one call),
  `amp-api.apps.apple.com`, `play.google.com`
- `mmseas.com` / `www.mmseas.com` — **the decisive source, never opened**
- `gcaptain.com`, `forum.gcaptain.com`, `professionalmariner.com`, `www.workboat.com`,
  `www.waterwaysjournal.net`, `www.trawlerforum.com`, `openseashub.org`, `www.edumaritime.net`
- Aggregators: `mwm.ai`, `appfollow.io`, `apptopia.com`, `sensortower.com`, `similarweb.com`,
  `appadvice.com`, `appsliced.co`, `qimai.cn`, `apkcombo.com`
- Mirrors/readers tried and blocked: `r.jina.ai`, `api.allorigins.win`, `corsproxy.io`,
  `webcache.googleusercontent.com`
- `www.ecfr.gov`, `www.dco.uscg.mil`, `www.google.com`, `duckduckgo.com`, `www.trustpilot.com`

**Zero `[verified-fetch]` this run, same as the deep dive.** Everything above is `[search-snippet]`.
**Nothing here should be treated as confirmed until the founder does §4 on their phone** — but note
the asymmetry: a FAIL verdict built on snippets that *affirm* a competitor's capability is far safer
than a PASS built on snippets that merely *fail to mention* one. Six passes of silence about SeaLog
proved nothing; one pass of affirmative detail about MM-SEAS decides it.

---

## 4. The founder's five-minute manual procedure

Do **MM-SEAS first**. It is the one that decides the verdict. The App Store apps are now academic —
run step B only if you want the record complete.

### A. MM-SEAS — 4 minutes, in a phone browser (this is the gate)
1. Open Safari. Go to **`mmseas.com`**. Tap **Sign Up** — free, no card. Use an email you don't mind.
2. When asked for a credential, pick **OUPV / Master less than 100 GT**, any issue date.
3. Find **Sea Service** / **Add Sea Time** (it may be called "Sea Service Records" or "My Sea Time").
4. Enter **three periods** — this is the deep dive's awkward 311-day case, straddling the boundary:
   - **Period 1:** vessel "TEST ONE", under 100 GRT, **2021-04-01 → 2021-09-30** (183 days), normal days.
   - **Period 2:** vessel "TEST TWO", over 100 GRT, **2024-06-01 → 2024-08-27** (88 days), normal days.
   - **Period 3:** vessel "TEST TWO", **2026-03-01 → 2026-04-09** (40 days), flagged **12-hour / two-watch** if the form offers that option.
   - Total raw days = 311. Period 1 is deliberately **outside** a 5-year window measured from today (2026-10-19), so a correct trailing-5-year figure must **exclude it**.
5. Go back to the **home / dashboard** screen and read the numbers at the top.

**What a FAIL looks like (expect this):** three counters, something like *Total Sea Days ≈ 311–331*,
*Renewal Days (last 5 years)* showing roughly **128 to 148** — i.e. **128** (88 + 40) if it ignores
the two-watch credit, or **148** (88 + 40×1.5) if it applies it — and *Recency Days (last 7 years)*
showing the full set. **The tell is that Renewal Days is smaller than Total Sea Days**: that means it
dropped Period 1 for falling outside the window. If you also see a half-day (a `.5`), the 1.5 credit
is live. Either way: **FAIL. Stop. Drop the niche. Do not open Xcode.**

**What a PASS looks like:** every counter shows the same ~311, or there is no counter at all and you
only see a list of your three periods with no total measured against 360. Then, and only then,
MM-SEAS is a logger too, and the niche reopens.

6. Last check, 30 seconds: look for a **CG-719S** or **Sea Service Form** button. If you can generate
   one, our hero artefact is already free.

### B. The App Store apps — 1 minute each, only for the record
Install, add the same three periods, then look at the **home screen, not the list**. Ask one
question: **is there a number on screen that is smaller than my total, measured against 360?**
- A **number** = it computes the window → FAIL.
- A **list** of your three periods, with reminders and certificate slots = it only logs → that app is no threat.

Apps to try, in this order: **MM-SEAS** (web, above) → **SeaLog** (the Training Resources one — the
free, no-ads, server-stored one; *not* the dive log, *not* Blue Tiefpunkt) → **Blue Tiefpunkt SeaLog**
(check whether Pro's "PDF sea service report" is CG-719S-shaped) → **Sea Service** (take the 7-day
trial, cancel immediately in Settings → Apple ID → Subscriptions) → **Maritime Logs** →
**SeaTime Tracker**.

---

## 5. App Store search terms to type

We have never once been able to search the store from here. Type these into the **App Store app's
Search tab** on the phone, exactly as written, one at a time:

1. `sea service` ← the *Sea Service* app, id6473282537, Sea Service App Ltd
2. `sealog` ← returns several unrelated apps; the one you want is by **Training Resources**, free, no ads. **Blue Tiefpunkt SeaLog** is a different app and also worth opening.
3. `sea time log` and `sea time tracker`
4. `maritime logs`
5. `seatime crew logbook`
6. `merchant mariner credential`
7. `uscg sea service`
8. `cg-719s` ← if anything returns here, it is aiming at our hero artefact
9. `captains license sea time`
10. `mmc renewal`
11. `MM-SEAS` ← confirm whether a native app now exists; none was findable in this run
12. `sea service testimonial`
13. Developer-name searches: `Training Resources`, `Sea Service App`

For each result, note: **price**, **rating count** (or "not enough ratings"), **last updated** date,
and whether the screenshots show **a total against a target** or **a list of trips**. Screenshot the
home screen of every one — those screenshots are the only `[verified]` evidence this project has ever
been able to obtain on this question.

---

## 6. Consequences, stated plainly

- **E1/E2: FAIL.** The gate said *"FAIL → DROP THE NICHE, same day. No appeal."* Dropping today.
- **Do not run E3–E7.** They were sequenced behind this gate. The ≈$720 of planned cash exposure and
  ~6 weeks of elapsed time are saved. The E5 kill date of 2026-12-14 is moot.
- **Do not build the engine.** The 46 CFR 10.107 / 10.232 / 11.201 rule set stays unverified and
  unshipped. That is the right outcome: the deep dive's §0 warned the entire regulatory basis was
  `[search-snippet]` at best, and we never once opened eCFR.
- **Add to CLAUDE.md §2 market exclusions:** *USCG sea-service day and credential-recency tracking —
  dropped 2026-10-19 at the E1/E2 gate; MM-SEAS computes the trailing 5-year and 7-year windows free,
  generates CG-719S/CG-719B, and is bundled by the licence schools. Revisit only with evidence that
  MM-SEAS has shut down or removed its free day-tracking tier.* (Per §2, this needs the operating
  partner to make the edit, not a sub-agent — flagging, not editing.)
- **One transferable lesson.** Five search passes across three agent runs failed to surface MM-SEAS
  because every pass searched for *apps* by name, in an app store we cannot reach. The incumbent was
  a **web app sold through schools**, and it was findable in one search the moment the query asked
  about the *mechanic* ("trailing five year total", "recency") instead of the *competitor*. **Search
  the mechanic, not the rival** — and run that search before the deep dive, not after it.
