# Scout 3 — Cross-border & tax/transaction-calendar traps
**Cluster:** "one missed date costs a fortune"
**Date:** 2026-10-19
**Analyst note on evidence quality — READ FIRST**

This environment crippled the research in two specific ways, and I am stating them up front so nothing below is read as stronger than it is:

1. **WebFetch was non-functional for every domain attempted** (DNS `ENOTFOUND` on `estateexec.com`, `bdo.com`, `ttlc.intuit.com`, `appfollow.io`, `apps.appfollow.io`, `grand-screen.com`, `trustpilot.com`, `expat.com`, `teamblind.com`, `law.cornell.edu`, `ipx1031.com`, `feiecalc.com`, `forum.thetaxbook.com`, `accountants.intuit.com`; hard block on `reddit.com` and `old.reddit.com`). **No page was read directly.** Everything below comes from WebSearch result summaries, which include quoted fragments from the indexed pages.
2. **The shared WebSearch budget (200 calls/turn, shared with other agents) was exhausted after ~14 of my calls.** Several planned lines of inquiry were never run: ERISA 5500, A1/social-security totalisation certificates, the §663(b) 65-day rule, the 9-month disclaimer under §2518, Italy's impatriate deadlines, state-by-state probate inventory deadlines beyond North Carolina, App Store review counts for any incumbent, and Reddit/forum verbatim complaints.
3. **Consequence: I could not obtain verbatim complaints from real individuals for ANY niche in this cluster.** Reddit is blocked at the proxy, and every forum and review aggregator that surfaced in search was DNS-blocked. Where I write "no verbatim complaints found" below, read it as *"not obtainable in this environment"*, not *"none exist"*. This is the single biggest gap in this report and the first thing a follow-up pass should fix.
4. I have **not invented a single number.** Every figure carries the source that produced it. Where sources conflict I say so. Where a figure is a secondary/AI-generated summary I mark it.

---

## SCORES TABLE

Scores 1–5. "Comp. weakness" = 5 means blue ocean (incumbents weak/absent). "Recurring" = 5 means needed monthly for years; 1 means once in a lifetime.

| # | Niche | Pain-$ | Audience wealth | Comp. weakness | v1 buildability | Reachability | WTP subscription | Recurring-use | Total /35 | Verdict |
|---|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| 5 | **Equity/startup tax windows** (83(b), QSBS 5-yr, ISO/AMT, PTE, 144) | 5 | 5 | 4 | 5 | 4 | 3 | 4 | **30** | **PURSUE** |
| 2 | **Canadian snowbirds: SPT + 8840 + provincial health days** | 4 | 4 | 3 | 4 | 5 | 4 | 5 | **29** | **PURSUE** |
| 3 | US expat filing-deadline stack (FBAR/8938/5471/8621) | 4 | 3 | 3 | 4 | 4 | 3 | 4 | 25 | Park |
| 4 | §1031 exchange deadlines (45/180) | 5 | 5 | 3 | 5 | 3 | 2 | 1 | 24 | Park |
| W1 | **Wildcard: SAM.gov / 8(a) / HUBZone / WOSB recertification** | 5 | 3 | 4 | 3 | 3 | 3 | 4 | 25 | Park |
| 1 | FEIE 330-day physical-presence test | 4 | 3 | 2 | 5 | 4 | 3 | 4 | 25 | Park (weak) |
| 8 | Estate/trust/fiduciary deadlines (706, portability, 10-yr rule) | 5 | 5 | 3 | 4 | 2 | 2 | 1 | 22 | Park |
| 6 | US immigration date traps (I-94, GC travel, N-400) | 5 | 4 | 3 | 4 | 4 | 3 | 3 | 26* | **KILL** (legal risk) |
| W2 | Wildcard: Medicare IRMAA / enrolment windows | 3 | 2 | 2 | 4 | 4 | 2 | 2 | 19 | Kill |
| 7 | Non-US residency regimes (UK SRT, Beckham, IFICI) | 3 | 4 | 2 | 2 | 3 | 3 | 3 | 20 | **KILL** |

\* #6 scores well numerically and is killed on a non-score basis: see its legal-risk section.

---

# 1. FEIE 330-day physical-presence test (Form 2555)

### ICP (one line)
US citizen/green-card contractors, remote employees and nomad founders earning roughly the exclusion ceiling or above, whose entire tax position turns on a day count — the 2025 exclusion is cited at **$130,000** per [Greenback](https://www.greenbacktaxservices.com/knowledge-center/physical-presence-test/) and [Bright!Tax](https://brighttax.com/blog/how-to-calculate-physical-presence-test/), with one guide giving **$130,000 (2025) / $132,900 (2026)**; sources disagree and **I could not verify against irs.gov**. Income signal: the exclusion only has value to someone earning at least that much abroad, so the ICP is self-selecting at ~$130k+.

### THE EXPENSIVE MISTAKE
One occurrence = losing the exclusion for a year.

- Arithmetic (estimate): $130,000 excluded income × a blended marginal federal rate of 22–24% ≈ **$28,600–$31,200 of federal tax that would otherwise not have been owed** — *(estimate; my arithmetic, rates not sourced)*.
- Independently, an expat blogger who ran the test himself states: *"2017 is the first year we tried to pass the PPT, and getting it wrong by even one day could cost $20k or more in tax"* — [GoCurryCracker](https://www.gocurrycracker.com/?p=8245).
- A preparer-facing article warns getting Form 2555 wrong "costs tens of thousands in avoidable taxes or triggers IRS audits and penalties" — [NSKT Global](https://www.nsktglobal.com/usa/blog/form-2555-mistakes-foreign-earned-income-exclusion-2025).
- **Important mitigant that cuts the pain:** the loss is usually not total. Fallbacks cited include shifting the 12-month window, switching to the bona fide residence test, extending with **Form 2350** while waiting to qualify, or claiming the **Foreign Tax Credit on Form 1116** which has no day-count restriction ([taxesforexpats](https://www.taxesforexpats.com/articles/expat-tax-rules/physical-presence-test.html)). For someone in a high-tax country the FTC often neutralises most of the loss. **This materially weakens the "costs a fortune" framing.**

### THE RULE SET (deterministic?)
Mostly yes, and this is the attractive part.

- 330 **full** days in a foreign country or countries during **any period of 12 consecutive months**. The 330 need not be consecutive. Window need not match the calendar year. ([taxesforexpats](https://www.taxesforexpats.com/articles/tax-saving-strategies/physical-presence-test.html), [Greenback](https://www.greenbacktaxservices.com/knowledge-center/physical-presence-test/))
- A "full day" runs **midnight to midnight**; time over **international waters or international airspace is not foreign**; **US territories are not foreign** for this test. Even a **short US layover counts as a US day**. Travel between two foreign countries counts toward the test **if the trip takes under 24 hours and does not enter US airspace**. ([Bright!Tax](https://brighttax.com/blog/the-physical-presence-test-everything-us-expats-need-to-know), [taxesforexpats FAQ](https://cdn.taxesforexpats.com/articles/expat-tax-rules/physical-presence-test-faq.html))
- Implied budget: 365 − 330 = **35 US days** per 12-month window.
- Window spanning two tax years ⇒ the exclusion is **prorated** by qualifying days falling in each calendar year. Qualifying period is reported on **Form 2555 line 16** (one source) / discussed at **line 18** (another).
- **Waiver:** fewer than 330 days can still qualify if you were *required to leave* because of war or civil unrest. **Illness, family problems, vacation, or employer's orders do not qualify.** ([Greenback](https://greenbacktaxservices.com/?p=42308))

**Where it is genuinely ambiguous / needs judgement (engine risk and legal risk):**
- **The "tax home" requirement sits outside the day count and can sink the claim entirely.** A Tax Court case is cited where "IRS disallowed both exclusions so the Dalys went to Tax Court" despite substantial days abroad. An app that says "you qualify" because the arithmetic clears 330 is **wrong a meaningful fraction of the time**, because tax home and eligible-income tests are separate. One source states flatly: "Meeting the day count supports one FEIE route; it does not replace the foreign-tax-home or eligible-income rules."
- Sources **openly conflict** on whether a short count can be prorated. One firm claims a taxpayer with 200 qualifying days can still prorate; this contradicts the general rule. Do not build on it.
- Exact midnight attribution on long multi-leg flights crossing the dateline is a judgement call no public rule resolves cleanly.

### APP-STORE / LEGAL RISK
Medium-low, **if and only if** the app never renders a qualification verdict. "You have 318 full foreign days in your best 12-month window" is organising the user's own data against a published rule. "You qualify for the FEIE" is tax advice and also frequently false (tax home). Safe framing, in the house style ("All items current?" not "Airworthy today?"):
- Screen title: **"Your best 12-month window"** — never "Do I qualify?"
- Result line: **"330-day threshold: 318 of 330 counted"** / **"12 days short in this window"**
- Export header: **"Day log prepared from your entries. Not a determination of eligibility. Form 2555 reporting is yours and your preparer's."**
- Never pre-fill a Form 2555 facsimile; export a dated day table + window summary PDF.

### INCUMBENTS — this is the problem
Free web calculators and sub-$40/yr apps already occupy the space, i.e. **exactly the commoditised band the studio already rejected.**
- **[taxesforexpats FEIE calculator](https://www.taxesforexpats.com/foreign-earned-income-exclusion-calculator)** — **free**, vendor lead-gen; search summary: "tracks each day you spend abroad, checks it against the 330-day rule."
- **feiecalc.com** — surfaced in search as a dedicated FEIE calculator; **DNS-blocked, could not verify price/features.**
- **Tax Days: Residency Tracker** — free with IAP; **Pro $19.99/yr or $2.99/mo**; covers "the federal Substantial Presence Test, Schengen 90/180, the UK Statutory Residence Test". [App Store listing](https://apps.apple.com/us/app/id6761441335) (blocked; price via search summary).
- **TaxBird – Residency Tracker** (ware2now) — **$39.99/yr or $4.99/mo**, 30-day trial; country-level worldwide + US state + **Canadian province** tracking; **4.0★ / 105 reviews on Google Play**. [appfollow listing](https://appfollow.io/ios/taxbird-residency-tracker/1238166926?country=us)
- **TaxDay** (Vernalis Systems) — **$9.99/mo**; GPS-based; **3.8★ / 63 reviews** (App Store) or **3.7 / 76** per an analysis page; 45-day iOS free trial. [appfollow](https://apps.appfollow.io/ios/taxday/1045026503?country=us)
- **TurboTax is a real weakness, though:** a TurboTax Community answer states "the software does not always cross-reference your travel dates with the 330-day requirement", so an entry "can look contradictory without triggering an error", and "you can't enter a date after 12/31/2025". [thread](https://ttlc.intuit.com/community/deductions-credits-9/2555-physical-presence-test-days-computation-and-validation-806657)
- Named weakness quote I could obtain on a day-counter: a Google Play review of TaxBird reporting they "get a no location notice 2 times a week on average" (via search summary of grand-screen.com; page blocked).

### HOW THIS DIFFERS FROM THE REJECTED GENERIC DAY COUNTERS — honest answer
It differs in **one** structurally interesting way and otherwise does not:
- **Genuine difference:** a generic counter answers "how many days have I been in X?" against a fixed threshold. FEIE is a **rolling-window optimisation**: the 12-month window start date is a *free variable the taxpayer chooses*, and the right answer is "which of the 365 possible window start dates maximises qualifying days, and what proration does each imply?" No incumbent I found does window optimisation; they count days. That is a real, computable, defensible product core.
- **Against it:** the audience, the price point and the distribution channel are identical to the rejected counters; Tax Days already bundles SPT + Schengen + UK SRT at **$19.99/yr**, and TaxBird covers worldwide country-level at **$39.99/yr**. Window optimisation is a *feature*, not a market. And the FTC fallback caps the pain for the highest-tax-country users.
- **Conclusion: the differentiation is real but too thin to carry a standalone paid app.** Park; keep "window optimiser + Form 2555 day-table PDF" on the shelf as a module for a broader expat product.

### REAL COMPLAINTS
**No verbatim complaints from individuals obtainable in this environment** (Reddit blocked; thetaxbook, Intuit community and expat forums DNS-blocked). The closest real artefact is the TurboTax Community thread above, which is a genuine user-raised problem with Form 2555 day validation, and whose answer text I have quoted. A follow-up pass must get r/USExpatTaxes and r/digitalnomad quotes.

### AUDIENCE SIZE & WEALTH SIGNALS
- Americans abroad: the long-cited State Department figure is **~9 million** for FY2016 (up from ~4m in 1999); a 2020 source gives **8.7m**. ([Greenback](https://www.greenbacktaxservices.com/blog/estimates-show-increase-expats-worldwide/))
- **The 9m figure is contested.** Greenback reports State has stopped standing behind it for lack of authoritative source data, with independent estimates clustering **4–5.5m**. [link](https://www.greenbacktaxservices.com/blog/how-many-americans-live-abroad/) (commercially motivated source; I could not confirm a State retraction in any primary document.)
- **FVAP estimates 4.5–6.5 million** overseas Americans; **AARO's own estimate is 5.5 million**.
- Only the subset earning ≥~$130k abroad is the ICP — I have **no source** for that subset's size and will not guess.

### WHERE THEY GATHER
- **r/USExpatTaxes — ~29k members** per [GummySearch](https://gummysearch.com/r/USExpatTaxes/); **that service shut down 11/30/2025 so the count is stale.** GummySearch also characterises the sub's most common post types as "advice requests and venting about filing costs", with frequent topics "FBAR, PFIC, and IRS exchange rates" — a useful signal of where the pain actually is.
- r/USExpatTaxSupport, r/ExpatFinance ([gummysearch](https://gummysearch.com/r/ExpatFinance)) — counts not obtained.
- **Expat Tax Online Facebook group — "over 12,380+ expats"** per the vendor's own page: [link](https://www.expattaxonline.com/expat-tax-online-fb-group/).
- **Democrats Abroad** maintains a list of expat tax communities: [link](https://www.democratsabroad.org/online_communities_for_americans_abroad_to_talk_about_taxes_guest_post); **FAWCO** mirrors it: [link](https://www.fawco.org/us-issues/u-s-tax-banking/u-s-tax-banking-articles/5110-online-communities-for-americans-abroad-to-talk-about-taxes).
- **Isaac Brock Society** — long-running expat tax forum with multi-page FBAR threads: [link](https://isaacbrocksociety.ca/expat_tax/comment-page-27/).
- Verdict on reachability: good and cheap (4/5).

### BUILDABILITY (v1, one week, SwiftUI/SwiftData/StoreKit2, no backend)
Very buildable and a natural fit. Model: `Trip{departDate, arriveDate, country, isUSLayover}`; derive a per-calendar-day attribution table; brute-force all 365 candidate 12-month window starts and rank by qualifying full days; show the top windows with per-tax-year proration fractions. Local notifications when the best window's headroom drops below a user-set buffer. PDF export of the day table + window summary via `ImageRenderer`/PDFKit. No network, no accounts. The only hard part is honest handling of midnight/dateline edge cases, and the right move is to make the user confirm ambiguous travel days rather than guess.

### VERDICT: **PARK (weak)**
Single biggest failure reason: **the price ceiling is already set at $20–40/yr by incumbents who bundle this with three other day tests, and the FTC fallback caps the real dollar pain for the highest-tax-country users.**

---

# 2. Canadian snowbirds: US substantial-presence + Form 8840 + provincial health days

### ICP (one line)
Retired Canadian homeowners aged 60+ who own or lease US winter property in FL/AZ/TX and must simultaneously stay under a US tax threshold and over a provincial-health-coverage residency floor — wealth signal: **TD Economics counted "more than 500,000 Canadians that spend significant periods of time in the United States – the so called snowbirds"** ([TD Economics](https://www1.pat.td.com/document/PDF/economics/special/Snowbirds.pdf), report appears to be ~2014), and a cited study says snowbirds are "staying almost 25% longer and spending about 50% more than in the past" ([Fox 13](https://www.fox13news.com/news/study-shows-snowbirds-are-staying-longer-and-spending-more-money), undated).

### THE EXPENSIVE MISTAKE
There are **two** independent expensive mistakes, which is what makes this niche interesting.

1. **Tripping the Substantial Presence Test and failing to file Form 8840 on time.** Consequence: treated as a **US resident alien, taxable on worldwide income**, with worldwide asset reporting. I have **no sourced dollar figure** for a representative snowbird and will not invent one; the magnitude is "your entire Canadian investment and pension income enters the US tax net for that year", which for a retiree with a $1.5m portfolio is plainly five figures of tax and preparation cost *(estimate, unsourced)*. The rule-level cost is firm: a closer-connection claim made on a **late or unfiled Form 8840 can be rejected even where the underlying facts plainly support it** ([Barrett Tax Law](https://www.barretttaxlaw.com/blog/snowbird-substantial-presence-test)). One guide lists "not filing the form by the deadline" as a common mistake that **forfeits the closer connection exception for that year** ([taxesforexpats](https://cdn.taxesforexpats.com/articles/non-us-citizens/irs-form-8840-closer-connection-exception-to-avoid-us-taxation.html)).
2. **Exceeding the provincial absence maximum and losing provincial health coverage.** For a 70-year-old, losing OHIP/MSP and relying on US private care is catastrophic — but **I have no sourced dollar figure and did not obtain one**; flag as unquantified.

### THE RULE SET (deterministic?)
The US side is one of the cleanest computable rules in this entire cluster. The provincial side is messier.

**US substantial-presence test — IRC §7701(b)(3)** ([advisor.ca](https://www.advisor.ca/tax/tax-news/taxing-questions-for-snowbirds/)):
- All days present in the current year + **1/3** of prior-year days + **1/6** of the year before, against a **183** threshold, with a 31-day current-year gate.
- Worked example from the source: a steady 150-day pattern = 150 + 50 + 25 = **225 > 183**, so a habitual snowbird trips it. A Canadian who "does not spend more than four months in the U.S. in any tax year over a three-year period" will not meet it.

**Form 8840 closer-connection exception:**
- **Unavailable if present in the US 183 days or more in the current year alone.** This is a hard gate and is a genuinely valuable thing for an app to warn about, because it is a *different* 183 from the weighted 183.
- Due by the due date for a non-resident US return, **generally June 15** of the following year.
- **Treas. Reg. §301.7701(b)-8** requires, for returns due after 15 Dec 1997, "a fully completed Form 8840 (Closer Connection Exception Statement) or appropriate successor form" ([Cornell LII](https://www.law.cornell.edu/cfr/text/26/301.7701(b)-8) — DNS-blocked, text via search summary).
- One guide notes "failure to timely file Form 8840 may result in penalties" without giving an amount. A possible §6712 penalty was flagged as *unconfirmed* by the source itself. **Do not state a penalty amount.**
- Separate: stays of **30+ days** may trigger US registration requirements ([money.ca](https://money.ca/news/canadian-snowbirds-us-registration-tax-rules)).

**Provincial health minimum residency — THIS IS WHERE SOURCES CONFLICT AND IT MATTERS:**
- [finiki (Bogleheads Canada wiki)](https://finiki.org/wiki/Health_coverage): "some provinces provide out-of-country coverage for **212 days** (Alberta, British Columbia, Manitoba and Ontario)".
- [CBC](https://amp.cbc.ca/lite/story/1.4011788): Ontario residents "can keep their health benefits and be out of the province for up to **212 days** (roughly seven months) in any 12-month period" — this replaced an earlier **182-day** limit.
- [moneysense](https://www.moneysense.ca/spend/real-estate/tax-pitfalls-canadian-snowbirds-to-the-u-s-need-to-know/) gives Ontario **212 days** and BC **seven months**.
- A **Richify "Snowbird Day Counter"** page gives **153 days for Ontario** — the search summary explicitly flagged this as AI-generated and inconsistent with other sources. **Discount it, but note it is live and ranking**: [link](https://www.richify.ai/ca/tools/snowbird-day-counter).
- Most of the CBC/finiki/moneysense articles date to **2013–2014**. Several provinces have since extended coverage ([St. Albert Today](https://www.stalberttoday.ca/local-news/province-extends-health-coverage-for-snowbirds-and-long-term-vacationers-1284101); [CSA applauds New Brunswick Medicare extension](https://newswire.ca/news-releases/csa-applauds-new-brunswick-medicare-extension-514316821.html)).
- Ontario also publishes rules on longer absences and notes coverage continues "generally 90 days" after a move out of province ([ontario.ca](https://www.ontario.ca/page/health-cards)).
- One checklist notes snowbirds "need to complete a medical questionnaire to qualify for out-of-province coverage from their provincial health plan, with rates based on general health" ([Investment Executive](https://www.investmentexecutive.com/news/industry/building-your-business/checklist-for-snowbirds/)).

**Ambiguity / judgement flags:**
- **The 13 provincial/territorial absence rules are not reliably documented in secondary sources and change.** An engine shipping a hard number per province will be wrong for some provinces at some times. The only defensible design is a **user-entered, user-confirmed threshold per province with a link to the official page** — the app computes against *the user's own stated rule*, not against a rule the app asserts.
- Canadian tax residency (departure/deemed disposition) is a facts-and-circumstances test and must stay entirely out of scope.
- The closer-connection *factors* themselves (where your permanent home, family, belongings, banks, licences, voting are) are inherently judgemental; only the day arithmetic and the filing date are computable.

### APP-STORE / LEGAL RISK
Medium-low with discipline. The structure that keeps it safe: the app computes **three independent day counters against thresholds the user entered or confirmed**, and surfaces **one filing date**. It never says "you are a non-resident" or "file 8840".
- Safe framing: **"US weighted day count: 225 of 183"** / **"Current-year US days: 150 — above 120, the 8840 route has a 183-day current-year ceiling (your note)"** / **"Days outside Ontario this 12 months: 196 of your 212-day setting"**.
- Headline for the home screen in house style: **"All three counts within your settings"** — not "You're safe" and emphatically not "You are not a US resident".
- PDF export: a dated day-by-day presence table titled **"Presence log, prepared from your entries"** with the disclaimer that threshold values were entered by the user and must be confirmed against the official provincial and IRS sources (links included).

### INCUMBENTS
- **TaxBird – Residency Tracker** is the direct threat: **$39.99/yr or $4.99/mo**, and explicitly does "province-level tracking in Canada" plus US state and country level, **4.0★/105 Google Play reviews**. [link](https://appfollow.io/ios/taxbird-residency-tracker/1238166926?country=us)
- **Tax Days: Residency Tracker** — **$19.99/yr**, explicitly includes "the federal Substantial Presence Test". [link](https://apps.apple.com/us/app/id6761441335)
- **TaxDay** — $9.99/mo, GPS, 3.8★/63. [link](https://apps.appfollow.io/ios/taxday/1045026503?country=us)
- **Richify AI "Snowbird Day Counter"** — free web tool, and demonstrably inaccurate on provincial numbers (see above). Free but wrong is a weak incumbent.
- **Monaeo** — I searched for it specifically and **found no product page, price or reviews**; the only trace is co-founder Nishant Mittal speaking on residency audits at a [Hodgson Russ event](https://sitepilot09.firmseek.com/client/hodgson/www/newsroom-events-3120.html). Treat Monaeo as enterprise/unknown status; the rumoured Topia acquisition was **not confirmable**.
- **Professional side:** CLA sells [Residency Planning and Audit Defense](https://www.claconnect.com/en/services/tax/residency-planning-and-audit--defense) as a service line; Hodgson Russ material states "more than half of people audited lose their audit battle in New York" and "in a residency audit, the burden of proof is on the taxpayer". That burden-of-proof point is the real product thesis: **the deliverable people need is a defensible contemporaneous log, not a counter.**
- **Honest competitive read:** nobody well-funded has nailed *the three-constraint snowbird case specifically*. TaxBird is the closest and is a generic multi-jurisdiction counter with provincial granularity but, as far as I can tell from its description, **no 8840 eligibility gate, no 8840 June 15 date, and no provincial-health threshold concept.** That gap is genuine. Confidence: medium — I could not read TaxBird's full feature list.

### HOW THIS DIFFERS FROM THE REJECTED GENERIC DAY COUNTERS — honest answer
This one differs more credibly than #1 or #7, on four grounds, all evidenced above:
1. **It is a joint-feasibility problem, not a threshold count.** Three constraints with *opposite signs*: stay under the weighted SPT 183, stay under the hard 183 current-year ceiling for 8840 eligibility, and stay **over** the provincial in-province floor (equivalently, under a 212-day absence cap). A generic counter counts up to one line. Here the binding constraint flips depending on the prior two years' history, and a day added in the US is simultaneously a day subtracted from provincial presence. No counter I found models this.
2. **The weighted 1/3 and 1/6 look-back means last year's travel changes this year's allowance** — genuinely non-obvious arithmetic that a generic counter does not do.
3. **It produces a dated filing obligation (8840 by ~June 15) and a document artefact** (a presence table for a burden-of-proof context where "more than half of people audited lose").
4. **Per-province thresholds vary and no app encodes them.** The honest version of this is user-confirmed thresholds, which also makes it safer.
Counter-evidence I will not hide: TaxBird already does country + province tracking at $39.99/yr, i.e. in the rejected price band, and a free (if inaccurate) web tool already ranks for "snowbird day counter". **Differentiation is real; pricing power is the open question.**

### REAL COMPLAINTS
**No verbatim complaints from individuals obtainable** (Reddit, RedFlagDeals, Snowbird Advisor forum all unreachable). Real second-order evidence of live pain:
- **Snowbird Advisor's October 2025 survey of 4,000 Canadian long-stay winter travellers**: "Seven in 10 (70%) of respondents said they intend to spend this winter in the U.S., vs. 82% of respondents who spent last winter in the U.S."; 23% intend international destinations instead; the US-bound figure "fell 15 per cent from 2024". ([travelweek](https://www.travelweek.ca/?p=186861); [Canadian Press](https://www.thecanadianpressnews.ca/business/big-drop-in-snowbirds-heading-to-u-s-this-winter-as-many-look-overseas-instead/article_28075664-9d36-5d48-b434-daac9ca99190.html))
- Visit Florida data cited by [money.ca](https://money.ca/news/economy/ron-desantis-mocks-doug-ford-why-snowbirds-remain-strong): Canadian visitors to Florida down ~20% YoY in Q2.
- **Note the headwind this implies:** the US-bound snowbird population is shrinking right now, and 23% are rotating to Portugal/Mexico/Caribbean. That cuts the addressable market and argues for a design that is not US-only.

### AUDIENCE SIZE & WEALTH SIGNALS
- **>500,000** Canadians spending significant time in the US ([TD Economics](https://www1.pat.td.com/document/PDF/economics/special/Snowbirds.pdf), ~2014, dated).
- Snowbird Advisor can poll **4,000** of them, which is a proxy for list size ([travelweek](https://www.travelweek.ca/?p=186861)).
- Spending: TD's **C$22.3bn** figure covers *all* Canadian visits to the US that year, **not snowbirds alone** — do not misuse it.
- Wealth proxy: owning or leasing a second home for 5–7 months plus private travel medical insurance. No per-household income source obtained.

### WHERE THEY GATHER
- **Canadian Snowbird Association** — canadiansnowbird.ca; issues press releases via [Newswire](https://newswire.ca/news-releases/csa-applauds-new-brunswick-medicare-extension-514316821.html). Member count not obtained; CSA is the single most concentrated channel for this audience and an association partnership/newsletter buy is the obvious cheap test.
- **Snowbird Advisor** — snowbirdadvisor.ca, runs the 4,000-respondent survey; has a newsletter and forum.
- **finiki** (Canadian Bogleheads wiki) [health coverage page](https://finiki.org/wiki/Health_coverage) and the associated Financial Wisdom Forum.
- RedFlagDeals forums, r/PersonalFinanceCanada, r/CanadianInvestor — counts not obtainable.
- Physical: FL/AZ/TX RV resorts and Canadian-snowbird parks; CSA's winter "Snowbird Extravaganza" style events (not verified this cycle).
- Reachability **5/5**: one association, one newsletter, concentrated geography, a demographic that reads email.

### BUILDABILITY (v1, one week)
Strong fit. SwiftData models: `PresenceDay`/`Trip{start, end, jurisdiction}`, `Threshold{jurisdiction, label, limitDays, sourceURL, userConfirmed}`. Compute (a) the §7701(b)(3) weighted total using the stored three-year history, (b) the current-year raw count against the 8840 183 gate, (c) rolling 12-month days-outside-province against the user's confirmed provincial limit. "What-if" slider: "if I fly home on 14 April, all three counts land at X/Y/Z." Local notifications at user-set buffers and one fixed annual reminder for the 8840 date. PDF presence log via PDFKit. Entirely offline; manual trip entry avoids the background-GPS battery and "no location notice" reliability complaints that dog TaxBird/TaxDay. Onboarding must make the user paste/confirm their province's limit from the official page — safer *and* cheaper than maintaining 13 rule sets.

### VERDICT: **PURSUE**
Single biggest failure reason if it fails: **TaxBird at $39.99/yr already tracks Canadian provinces, so we must win on the 8840 gate + provincial-floor framing + audit-grade PDF, and if buyers can't tell the difference in an App Store screenshot we lose on price.** Secondary risk: the US-bound snowbird population is actively declining (−15% YoY per Snowbird Advisor).

---

# 3. US expat filing-deadline stack (FBAR, 8938, 5471/8865, 8621, streamlined, treaty elections)

### ICP (one line)
Americans abroad with foreign bank accounts, a foreign company, or foreign mutual funds — the compliance-heavy subset of the 4.5–9m overseas Americans (see #1 for the contested population estimates); wealth signal is implicit in the thresholds themselves (FBAR aggregate >$10k; 8938 thresholds higher for those abroad).

### THE EXPENSIVE MISTAKE
Penalty amounts here are the hardest numbers in the whole cluster.
- **FBAR non-willful: from $10,000 per year**, inflation-adjusted — one firm puts the current figure "closer to **$17,000** at this time". **Willful: 50% of the maximum value of the unreported accounts, minimum $100,000.** ([Golding & Golding](https://www.goldinglawyers.com/irs-foreign-civil-penalties-tax-guide/))
- **Form 5471: commonly $10,000 per form**, with initial penalties "capped at **$60,000 per year**" for US persons tied to foreign corporations. (same source)
- **Form 8938: $10,000** failure-to-file, plus **up to $50,000** for continued failure. ([taxesforexpats](https://www.taxesforexpats.com/articles/financial-account-reporting/us-expat-taxes-fatca-form-8938.html))
- **Form 8621 omission keeps the statute of limitations open**, so the IRS can examine older years indefinitely. (same source)
- **PFIC default regime is the most punitive:** under §1291 the excess distribution and the entire gain on sale are spread ratably across the holding period, the prior-year portion taxed at the **highest 37% ordinary rate**, plus a **§6621 interest charge compounded daily**. ([reedcorp.tax](https://reedcorp.tax/helpful-guides/pfic-foreign-mutual-fund-tax/))
- **Arithmetic, single occurrence (estimate):** one unreported foreign account year + one missed 8938 = **$10,000 + $10,000 = $20,000**, or **~$27,000** using the inflation-adjusted FBAR figure *(estimate, built from the sourced base amounts)*.
- **Mitigant:** the Streamlined Foreign Offshore Procedures carry **zero penalty for taxpayers abroad** per one source. A deadline app's honest value proposition therefore is "don't drift into willfulness", not "avoid a certain $10k".

### THE RULE SET (deterministic?)
Partly. The **dates** are highly deterministic; the **thresholds and applicability** are not.
- Fixed annual dates (FBAR, 1040 for those abroad, extensions) are calendar arithmetic — trivially computable. **I did not verify the specific 2026 dates in this pass; do not ship them unverified.**
- **PFIC elections: QEF and mark-to-market "generally must be made by the due date, including extensions, for the first tax year to which the election applies."** A late election "can require an IRS consent procedure" and "may leave prior years under the less favorable Section 1291 rules"; missing the initial window "can permanently lock you out of making the election for those shares", and correcting it "often requires a Private Letter Ruling from the IRS, which is a costly and time-consuming process." ([taxesforexpats Form 8621 guide](https://www.taxesforexpats.com/articles/expat-tax-advice/form-8621.html))
- **Mark-to-market is limited to marketable stock**; many private foreign funds don't qualify.
- **One Form 8621 per PFIC per year**: "Owning five different foreign funds means preparing five distinct forms."
- Overlap rule: an asset already reported on 5471 or 8621 need not be repeated on 8938 **but still counts toward the 8938 threshold calculation** ([taxesforexpats](https://www.taxesforexpats.com/articles/financial-account-reporting/us-expat-taxes-fatca-form-8938.html)).

**Ambiguity / judgement flags (serious):**
- **Whether a given form is required at all is the hard question**, and it is judgemental: is this fund a PFIC? is this holding a CFC requiring 5471, and in which filing category? is the account "foreign financial" for FBAR? An app that tells a user which forms they must file is doing tax advice and will be wrong.
- Willfulness, streamlined eligibility, and treaty-election availability are all facts-and-circumstances.
- 8938 thresholds differ for taxpayers abroad vs domestic and by filing status — computable but must be verified annually against IRS instructions, which **I could not reach**.

### APP-STORE / LEGAL RISK
Medium. The only safe shape is a **user-configured deadline calendar**: the user says "I file FBAR, 8938 and two 8621s", and the app tracks *their* declared obligations and dates with evidence checklists. The app must not run a decision tree that concludes "you must file Form 5471."
- Safe framing: **"Your filing calendar"**; **"FBAR — marked as applicable by you — due [date]"**; **"4 of 6 items marked complete"**; home screen in house style: **"All items current?"** → "All marked items complete".
- Explicitly forbid: "You need to file…", "You may owe a penalty of…", any eligibility determination for Streamlined.

### INCUMBENTS
- **Preparer firms own this category as a service, not software**: Greenback, Bright!Tax, MyExpatTaxes, Taxes for Expats, Expat Tax Online, Dimov, Golding & Golding. Their content marketing (the pages cited throughout this report) is free and comprehensive; the "deadline reminder" job is already done by their email lists and by the preparer relationship.
- **MyExpatTaxes** and **Expat Tax Online** run software-assisted filing products (pricing not obtained).
- **Free:** every firm publishes a deadline calendar page. This is the hardest thing to charge for.
- **Honest read: the well-funded players don't "nail" a deadline tracker — they make the tracker unnecessary by doing the filing.** That is worse than a strong competitor; it means the willingness-to-pay for a standalone tracker is structurally capped.

### REAL COMPLAINTS
**No verbatim complaints obtainable.** Strong indirect signal: GummySearch's characterisation of r/USExpatTaxes as dominated by "advice requests and venting about filing costs", with "FBAR, PFIC, and IRS exchange rates" among the most frequent topics ([link](https://gummysearch.com/r/USExpatTaxes/)). The venting is about **cost of preparation**, which points to a cheaper-preparation product, not a reminder product.

### AUDIENCE SIZE & WEALTH SIGNALS
See #1: 4.5–6.5m (FVAP), 5.5m (AARO), ~9m (contested State figure). FBAR's >$10k aggregate threshold and 8938's higher abroad thresholds mean the filer population is a wealthier slice, but **I have no sourced count of FBAR filers** and will not estimate one.

### WHERE THEY GATHER
Same channels as #1 (r/USExpatTaxes ~29k stale; Expat Tax Online FB 12,380+; Isaac Brock Society; Democrats Abroad; FAWCO; AARO). Reachability 4/5.

### BUILDABILITY (v1, one week)
Easy mechanically: a declared-obligations model, a date engine, notifications, and a PDF "filing status" summary. The real cost is **rule maintenance and verification** — every threshold and date must be re-checked annually against IRS instructions I could not reach from this environment, and getting one wrong in a compliance app is a reputational and liability event. Building it as "the user's declared obligations" transfers that risk and shrinks the build, at the cost of the magic.

### VERDICT: **PARK**
Single biggest failure reason: **the value is in doing the filing, not knowing the date; preparer firms give the calendar away free and own the relationship, so a standalone tracker has no pricing power.**

---

# 4. Section 1031 exchange deadlines (45-day ID / 180-day exchange)

### ICP (one line)
Investment-property sellers executing a like-kind exchange, i.e. people with six- and seven-figure embedded gains — market wealth signal: CoStar puts 1031 deal volume at **$11.9bn last year** (a 12-year low, vs a **$33.7bn** average over the decade after the Great Recession) ([CoStar](https://www.costar.com/article/1742122317/deal-volume-in-1031-property-exchanges-falls-to-12-year-low)), while a Federation of Exchange Accommodators figure cited secondhand puts industry-supported volume at **~$100bn/yr with $13.2bn of capital gains tax deferred** ([altswire](https://altswire.com/guest-contributor-1031-exchanges-a-major-generator-of-tax-revenues/)). These measure different things and must not be compared.

### THE EXPENSIVE MISTAKE — the biggest in this cluster
- Missing either date **terminates the deferral**: "any capital gains from the sale of the relinquished property [become] immediately taxable" ([Realized1031](https://www.realized1031.com/blog/consequences-of-missing-a-1031-exchange-deadline)), **plus depreciation recapture** (same source). "Missing the 45-day deadline for identifying potential replacement properties disqualifies the entire exchange from tax deferral" ([Realized1031](https://www.realized1031.com/blog/what-is-the-45-day-identification-rule-for-a-1031-exchange)). BiggerPockets: "if you miss the deadline, even if by one day, the IRS will disallow your exchange" ([link](https://www.biggerpockets.com/member-blogs/7349/blog_posts/54026-how-to-calculate-deadlines-in-a-1031-exchange)).
- **Arithmetic on one occurrence (estimate):** a $1.5m sale of a property with a $500k basis and $250k of claimed depreciation ⇒ ~$750k long-term gain at 20% = $150,000, plus $250k recapture at 25% = $62,500, plus 3.8% NIIT on $750k = $28,500 ⇒ **≈ $241,000 of tax that the exchange would have deferred** *(estimate; my arithmetic from standard rates, rates not sourced in this pass)*.
- **Real case, sourced:** *Dobrich v. Commissioner* — the Tax Court found "Pleasant Hill and Skyland were not properly identified within the 45-day period"; the result was "a taxable sale, a **75% civil fraud penalty** on the amount of unpaid tax", and the taxpayers' attempt to build a paper trail after the fact "made things worse" ([Rejournals: The cost of trying to fix a failed 1031 exchange](https://rejournals.com/the-cost-of-trying-to-fix-a-failed-1031-exchange/)). **This is the single most vivid piece of evidence in my whole cluster — and note it cuts against us: the fatal act was fabricating documentation, which is exactly what a self-serve "identification letter generator" could be accused of enabling.**

### THE RULE SET (deterministic?)
Yes — this is the most cleanly computable rule in the cluster, which is both the appeal and the problem (it is a two-line calculation).
- Identification: in writing, signed by the exchanger, delivered to the QI "by **midnight of the day that is 45 days after the date the relinquished property is transferred**" ([JTC](https://jtcgroup.com/insights/the-1031-exchange-45-day-identification-deadline-what-you-need-to-know)).
- Exchange period: the **earlier of 180 days** or **the taxpayer's return due date including extensions** ([CBIZ](https://www.cbiz.com/insights/article/1031-exchange-deadlines-45-day-and-180-day-rules-explained)); First American notes the tax-deadline cutoff "can shorten the period by a day if no extension is filed" ([link](https://first-exchange-ex1031.app.firstam.com/learn/articles/1031-exchange-timeline)).
- **No weekend/holiday rollover:** deadlines stand "even if the 45th day or 180th day falls on a Saturday, Sunday or legal holiday" ([IPX1031](https://www.ipx1031.com/days-calculator/)).
- Identification limits: the **three-property rule, the 200% rule, and the rarely used 95% rule** ([Realized1031](https://www.realized1031.com/blog/what-is-the-45-day-identification-rule-for-a-1031-exchange)).
- Extensions only for **federally declared disasters**; one source cites **Notice 2007-56** — **unverified, irs.gov unreachable**. Sources openly conflict, with one asserting "no relief for natural disasters or personal emergencies applies."
- **Day-one ambiguity:** sources disagree on whether the clock starts on the closing day or the day after. For a product where one day is fatal, **this is a real engine risk** and the app must show the rule it used and let the user see both.

### APP-STORE / LEGAL RISK
Medium, with one sharp edge. A countdown from a user-entered closing date is plainly organising the user's own data. But *Dobrich* means any feature that generates or back-dates identification documents is dangerous. Safe shape: countdown + reminders + a place to attach the signed letter the user actually sent, with timestamps the app did not author.
- Safe framing: **"45-day window: 12 days remaining (from your entered closing date of 3 Sept)"**; **"Identification letter: you marked this as delivered to your QI on 14 Sept — attachment on file"**; **"Both windows: dates recorded"** rather than "Exchange compliant".
- Must say: **"Dates computed from your entry. Confirm every deadline with your qualified intermediary."**

### INCUMBENTS
- **The structural problem: every exchange already has a qualified intermediary whose job includes the deadline letter.** IPX1031, First American Exchange, Accruit, JTC, Deferred.com are all well-funded or institutionally backed, and they are *mandatory participants in the transaction*. The reminder is a free byproduct of a service the taxpayer has already bought.
- Free web calculators, abundant: **[CCH](https://www.cchwebsites.com/content/calculators/DeadLineExchange.html)**, **[IPX1031 days calculator](https://www.ipx1031.com/days-calculator/)**, **[InvestmentGrade deadline calculator](https://investmentgrade.com/1031-deadline-calculator/)** (which also sends reminder emails, tied to a listings sign-up — i.e. the reminder is already free and lead-subsidised).
- **No native iOS app found.** The only "tracker apps" surfaced were AI app-builder landing pages ([RationalGo](https://rationalgo.ai/resources/app-builder/california-1031-exchange-deadline-tracker)), not shipped products.
- So: a blue-ocean *App Store* niche sitting inside a red-ocean *service* niche. The absence of an app is evidence of low demand, not of an opportunity.

### REAL COMPLAINTS
**No verbatim complaints from individuals obtainable** (BiggerPockets forum pages not fetchable; Reddit blocked). Real second-order evidence of the specific failure mode, quoted from BiggerPockets authors:
- "many first-time exchangers believe they can simply wait until the 44th day to identify their replacement property" ([link](https://www.biggerpockets.com/member-blogs/7349/blog_posts/49584-top-three-mistakes-to-avoid-in-a-1031-exchange))
- "some investors mistakenly believe that the 45-day and 180-day periods are flexible or that they can negotiate extensions with the IRS" ([link](https://www.biggerpockets.com/member-blogs/7349/51879-dont-invalidate-your-1031-exchange-with-these-common-errors))
- A BiggerPockets user Q&A describes being past the 45-day period, where "the QI has to hold your proceeds until either you have purchased all of the properties on your list, or day 180" ([user posts](https://www.biggerpockets.com/posts/user/olgan14)).
These are author/commentator statements, **not customer complaints**, and I am labelling them as such.

### AUDIENCE SIZE & WEALTH SIGNALS
- **$11.9bn** deal volume last year, lowest since 2012's $9.4bn; **$33.7bn** average annual volume over the decade after the Great Recession ([CoStar](https://www.costar.com/article/1742122317/deal-volume-in-1031-property-exchanges-falls-to-12-year-low)).
- **+12.4% YoY in H1 2026** across Accruit's network of 30+ national QIs ([Global AgInvesting](https://globalaginvesting.com/the-1031-exchange-market-in-2026-whats-changing-for-replacement-property/)).
- EY 2021 study: exchanges support **~568,000 jobs** and **$55.3bn of GDP** ([thediwire](https://thediwire.com/?p=24201)).
- Securitised/DST segment raised **$7.4bn of equity in 2021**, vs $3.2bn in 2020 ([altswire](https://altswire.com/securitized-1031-exchanges-raise-a-record-7-4-billion-in-2021/)).
- Wealth: unambiguously 5/5. Volume: at $11.9bn and a typical exchange in the low millions, the number of *concurrent* exchanges at any moment is small — and each user needs the app for **~6 months, once.**

### WHERE THEY GATHER
BiggerPockets forums (large but diffuse; member count not obtained), r/realestateinvesting, local REIAs, Federation of Exchange Accommodators (trade body for QIs, not taxpayers), DST sponsor newsletters. **Reachability 3/5: the audience is reachable but only during a 6-month window you cannot predict, which is the worst possible targeting problem.**

### BUILDABILITY (v1, one week)
Trivially buildable — arguably a two-day build. Enter closing date; compute day 45 and day 180 and the earlier return-due-date cutoff; show which rule binds; notifications at 30/14/7/3/1 days; checklist for the three identification rules; attach the signed letter; PDF timeline. The risk is that it is *too* small to be a product.

### VERDICT: **PARK** (near-kill)
Single biggest failure reason: **recurring-use is 1/5 — a user needs it for six months, once, and the QI they already pay sends the same reminders free.** A subscription cannot survive that even though the pain-$ is the highest in the cluster. If pursued at all it must be a one-time purchase, which breaks the studio's subscription model.

---

# 5. Equity/startup tax windows — 83(b), QSBS, ISO/AMT, PTE, 409A, Rule 144 ⭐ TOP PICK

### ICP (one line)
Startup founders and early employees holding restricted stock and options — a population whose single missed election is quantified by a VC-adjacent source at **"roughly $1.6 million in tax owed in cash across four years"** ([every.io](https://www.every.io/blog-post/missing-this-filing-can-cost-you-your-seed-round)), and whose equity is the dominant asset on their balance sheet.

### THE EXPENSIVE MISTAKE
Three distinct, independently sourced, very large numbers:
1. **Missed 83(b).** Illustrative scenario from a startup-law blog: a founder whose shares rise to $4 over four years pays "**approximately $17,500**" in ordinary income tax at grant with the election, versus "**approximately $743,750** across the vesting events" without it ([promise.legal](https://blog.promise.legal/startup-central/83b-election-founders-guide/)) — a delta of **~$726,000** *(their arithmetic, single illustrative scenario, not a general rule)*. Independently: "roughly **$1.6 million** in tax owed in cash across four years, on stock that cannot be sold" ([every.io](https://www.every.io/blog-post/missing-this-filing-can-cost-you-your-seed-round)). Another source: "six or seven figures of unanticipated tax exposure at exit" ([terms.law](https://terms.law/insights/section-83b-election-when-founder-forgets.html)).
2. **Selling QSBS one day early.** Loss = the entire §1202 exclusion on that block. Per a secondary summary of a July 2025 law change, the cap rose to **$15M** with the asset ceiling at **$75M** and partial benefits after three or four years ([Sacra](https://sacra.com/chat/h/b68a27c8-8753-4c96-a25b-926e7b5608c8/)) — **this is an AI-generated secondary summary and must be verified against the statute before any product encodes it.** Even on the long-standing $10M figure, at 23.8% federal that is **~$2.38m of tax** *(estimate, my arithmetic)*.
3. **ISO post-termination window.** Options "typically expire at the end of the post-termination window" ([trayecto](https://www.trayecto.io/blog/post-termination-exercise-windows)); **Carta reports "96% of all option agreements on Carta have PTE periods of 90 days or less"** ([Carta](https://carta.com/blog/pte-vesting/)). Blow the window and the entire spread is forfeited.

### THE RULE SET (deterministic?)
This is the best rule set in the cluster for a date engine: **pure arithmetic on dates the user knows, with no facts-and-circumstances gate comparable to FEIE's "tax home."**
- **83(b): 30 days from the property transfer**, and "the 30-day leash is mandated by the Internal Revenue Code; the IRS has no discretion to extend the time period for filing" ([gust](https://gust.com/?p=7)). Timely if **postmarked by the next business day** when day 30 is a weekend or holiday. Certified mail with return receipt is the standard evidentiary practice. **The IRS now offers online 83(b) filing** ([Baker Donelson](https://www.bakerdonelson.com/irs-streamlines-83b-election-process-with-new-online-filing-option); [KPMG](https://kpmg.com/kpmg-us/content/dam/kpmg/taxnewsflash/pdf/2025/06/061625-S83b-CAB.pdf)).
- **No cure:** "the Tax Court has rejected every late-filing argument it has heard, including illness, attorney errors, and certified-mail problems" ([promise.legal](https://blog.promise.legal/startup-central/83b-election-founders-guide/)). §9100 relief is "a strong argument but is not a guaranteed argument" ([terms.law](https://terms.law/insights/section-83b-election-when-founder-forgets.html)). The practical fix is cancel-and-reissue to restart the clock ([Withum](https://www.withum.com/resources/missed-your-83b-election-heres-what-you-can-do/)).
- **QSBS: five years, "starting the day after the stock is acquired"**; for convertible instruments "the holding period clock starts ticking only after the conversion into stock" ([Stripe](https://stripe.com/us/resources/more/what-is-the-qsbs-holding-period)). **Per-block testing:** an advisor must test "when the stock was acquired, how it was held, which entity issued it, and whether each share block satisfies the rules separately" ([Instead](https://instead.com/resources/blog/qsbs-five-year-hold-milestone-planning-for-2026-sales)). Stripe explicitly recommends: "Mark the exact date when the stock was acquired or, in the case of convertible securities, when they were converted into stock." **That sentence is the product spec.**
- **ISO 90 days:** "ISO tax treatment under IRC Section 422 requires that ISOs be exercised within 90 days of termination of employment to maintain ISO status"; exercise after three months "causes the ISOs to become NQSOs" ([mystockoptions](https://www.mystockoptions.com/content/company-allows-exercise-isos-more-than-90-days-after-leave-job-what-is-tax-treatment-at-exercise)). Critically: "the statutory three-month window can be longer (e.g. 91 or 92 days) than the 90 days allowed by your stock plan before option expiration, so note any difference in length" ([launchrock](https://www.launchrock.com/library/expert-advice/post-termination-exercise-window)) — **the plan document controls, and the two clocks differ. A per-grant, user-entered window is therefore both more accurate and safer than a hardcoded 90.**
- **The AMT timing trap, verbatim:** "many ISO holders exercise in October-December thinking they have until next year's filing to plan, then discover in April that they owe massive AMT they can't fund" ([launchrock](https://www.launchrock.com/library/expert-advice/iso-amt-implications)). Also: "the 90-day post-departure window often forces exercises in distressed circumstances that compound the AMT problem."
- Extended windows exist: "extensions usually range from 2 to 10 years after separation, depending on the employee's tenure" ([trayecto](https://www.trayecto.io/blog/post-termination-exercise-windows)).

**Ambiguity / judgement flags:**
- **Whether a company is a qualified small business and whether stock is QSBS at all is a legal determination the user cannot make and the app must not make.** The app tracks the user's *stated* QSBS-candidate blocks and their five-year dates — nothing more.
- Whether the 83(b) 30-day clock starts at grant, at transfer, or at a purchase-agreement date can require counsel on unusual grants.
- AMT *amount* calculation is genuinely hard (exemption phase-outs, credit carryforwards) and must stay out of scope. Dates in, no dollars.
- 409A refresh cadence and Rule 144 holding periods: **I did not research these in this pass** (search budget). Flagged as unverified scope.

### APP-STORE / LEGAL RISK
**The lowest in this cluster, and that is the main reason it wins.** Everything is a date the user holds a document for: grant date, vesting schedule, termination date, exercise date, plan's stated PTE window, acquisition date per block. The app does calendar arithmetic on the user's own records and exports a PDF. No eligibility determination is needed for the core value.
- Safe framing: **"Grant A: day 30 of your 83(b) window is 14 November — 9 days from today"**; **"Block 3: five-year date 2 March 2028"**; **"Your plan's stated exercise window ends 12 January (from your entry)"**.
- House-style home screen: **"All grant dates recorded"** / **"2 windows closing in 30 days"** — never "You are QSBS-eligible", never "You should exercise", never a dollar tax estimate.
- Disclaimer: **"Dates and windows are those you entered from your own grant and plan documents. This app does not determine tax treatment or eligibility and is not tax or legal advice."**
- Deliberate omissions that buy safety: no AMT dollar calculation, no "should I exercise" recommendation, no QSBS eligibility test.

### INCUMBENTS
- **Carta, Pulley** — cap-table platforms. **Employer-side, bought by the company, and the employee sees only their own equity in the issuer's instance.** They do not follow a person across four employers, which is exactly the user's actual situation. Carta's own blog is a source above.
- **Cake Equity** markets 83(b) reminders — but again as an issuer-side feature: [FAQ page](https://www.cakeequity.com/guides/faq-83b-election-reminder-equity).
- **Secfi, Compound, Valur** — advisory/financing businesses for equity holders. Valur is described as expanding "QSBS to employees, angels, CFOs" ([Sacra](https://sacra.com/chat/h/b68a27c8-8753-4c96-a25b-926e7b5608c8/)). These are high-touch, AUM/fee businesses targeting large balances, **not a $5/mo date tracker**, and they qualify leads out.
- **Free calculators:** [ustax.tools 83(b) calculator](https://ustax.tools/83b-election-calculator/); abundant free law-firm checklists.
- **Honest read:** no well-funded player ships an **employee-side, cross-employer, multi-grant date tracker**. The gap is structural (issuer-side platforms can't serve it; advisory firms don't want sub-$10k clients), not accidental. That is the best kind of gap. Confidence: medium-high, though I could not search the App Store directly for existing indie apps in this space and **that is a real unchecked risk.**

### REAL COMPLAINTS
**No verbatim complaints from individuals obtainable** (Reddit, Blind, Quora all blocked/unreachable — I attempted all three). The strongest real artefacts I did obtain are practitioner descriptions of the recurring failure pattern, quoted verbatim above: the October–December/April AMT surprise, "the 90-day post-departure window often forces exercises in distressed circumstances", and the Tax Court having "rejected every late-filing argument it has heard, including illness, attorney errors, and certified-mail problems." **A follow-up pass must get r/startups, r/cscareerquestions and Blind quotes before we commit; this is the one gap I would not ship without.**

### AUDIENCE SIZE & WEALTH SIGNALS
- **Carta: "96% of all option agreements on Carta have PTE periods of 90 days or less"** ([link](https://carta.com/blog/pte-vesting/)) — evidence that the tight-window problem is near-universal, and an indirect indicator of the scale of Carta's option-holder base (Carta's absolute holder count was not obtained).
- The 83(b) cost figures ($743,750; $1.6m) are themselves the wealth signal — only people with meaningful equity face them.
- **I did not obtain a count of US startup employees holding equity** and will not estimate one. This is a gap.

### WHERE THEY GATHER
- Reddit: r/startups, r/ExperiencedDevs, r/cscareerquestions, r/stockoptions, r/fatFIRE — **member counts not obtainable (Reddit blocked)**.
- **Blind (teamblind.com)** — concentrated high-earning tech population; a relevant thread surfaced in search ("my company forgot to extend my h1b visa") confirming the site indexes this kind of panic post. Page not fetchable.
- Hacker News; Carta's and Secfi's content audiences; founder communities (Founders Network, [foundersnetwork.com](https://foundersnetwork.com/?p=1693)); accelerator alumni Slacks (YC/Techstars).
- Reachability 4/5: cheap organic channels exist and the audience is highly online, but these are communities hostile to overt marketing.

### BUILDABILITY (v1, one week)
Excellent fit — the best in the cluster. SwiftData: `Grant{type: RSA/ISO/NSO/RSU, grantDate, transferDate, shares, strike, vestStart, cliffMonths, scheduleMonths, planPTEWindowDays}`, `ShareBlock{acquiredDate, convertedDate?, shares, qsbsCandidate: Bool}`, `Event{exercised, terminated, sold}`. Engines: 30-day 83(b) countdown with next-business-day postmark handling; per-block QSBS five-year date (day-after-acquisition, or conversion date when the user marks it a convertible); PTE window from the user's *entered* plan value with a side-by-side note that the statutory ISO period may differ in length; a unified timeline view across all employers. Local notifications at 83(b) day 1/7/14/21/25/28 (aggressive, because it is fatal and uncurable) and at QSBS 5-year minus 90/30/7 days. PDF export: a dated grant-and-dates register. Zero backend, zero accounts, no market data needed — every input is a date off a document the user already has. This is the only niche in my cluster where the one-week constraint is comfortable rather than tight.

### VERDICT: **PURSUE**
Single biggest failure reason if it fails: **willingness to pay a *subscription* for date tracking when the headline event (83(b)) is a one-time 30-day sprint** — the subscription has to be carried by QSBS five-year tracking, job changes and multi-grant portfolio upkeep, and we have no direct evidence anyone pays for that today. Secondary risk: an indie App Store competitor I could not check for.

---

# 6. US immigration date traps for high earners

### ICP (one line)
H-1B/L-1 professionals and green-card holders in high-paying roles plus naturalisation applicants — wealth signal is the H-1B specialty-occupation wage floor and the tech-employer population, but **I obtained no income statistic in this pass** and will not assert one.

### THE EXPENSIVE MISTAKE
Non-monetary and catastrophic, which is itself the problem for a consumer app.
- "people who stay beyond the expiration date of their I-94 risk being barred from re-entering the country for **three or 10 years**, depending on the length of the overstay" ([Cal State Fullerton HR](https://hr.fullerton.edu/risk-management/faculty-staff-visas-permanent-residency/i94-grace-period.php)); overstay "may also affect your eligibility for future immigration benefits (e.g., green card)".
- Green card: absence over one year without a reentry permit ⇒ USCIS "may presume you've abandoned your permanent resident status" ([beyondborderglobal](https://www.beyondborderglobal.com/resources/green-card-travel-rules)).
- Naturalisation: break continuous residence and "you may have to wait up to **four years and one day** after returning to the U.S." before applying ([manifestlaw](https://manifestlaw.com/blog/green-card-minimum-stay-requiremetns)).
- **The cost is a career and a life, not a dollar figure, and I have no sourced dollar figure.** That is relevant to both scoring and risk: people pay lawyers rather than apps for outcomes of this severity.

### THE RULE SET (deterministic?)
Partly computable, **but the decisive elements are discretionary** — and that is disqualifying.
- Computable: N-400 physical presence — "30 months of physical presence in the U.S. over 5 years (or 18 months over 3 years for spouses of U.S. citizens)" ([manifestlaw](https://manifestlaw.com/blog/green-card-minimum-stay-requiremetns)); continuous residence and physical presence are **separate tests** and "you can satisfy physical presence but fail continuous residence (or vice versa)". I-94 end dates are a stated date. 240-day work authorisation after a timely-filed extension. Reentry permit "generally valid for up to two years from the date of issuance and cannot be extended", and "the employee must be in the U.S. when the application for the reentry permit is filed with the USCIS" ([Seyfarth](https://www.seyfarth.com/dir_docs/publications/Retaining-Permanent-Residence-During-Contemplated-Absence-from-US.pdf); [Greenberg Traurig](https://www2.gtlaw.com/practices/immigration/newsletter/archives/018/item01.htm)).
- Presumption bands: absence **>6 months but <1 year** creates "a rebuttable presumption that you have broken continuous residence" ([manifestlaw](https://manifestlaw.com/blog/green-card-minimum-stay-requiremetns)); "a temporary absence is considered to be one of less than one year".
- **Not computable, and decisive:**
  - "there is **no grace period** beyond your I-94 expiration date while in H-1B status" ([UToledo](https://www.utoledo.edu/cisp/international/h1bvisas/h1bmaintain.html)) — but the 60-day post-employment grace period "is **not automatic**; it is granted at the discretion of U.S. Citizenship and Immigration Services (USCIS)", and USCIS "has the power to shorten or deny a grace period" ([legalservicesincorporated](https://legalservicesincorporated.com/immigration-law/employment-visas/h1b-visa/do-i-get-a-grace-period-if-my-h-1b-employment-terminates/)).
  - Rebutting the 6–12 month presumption turns on "strong evidence of ongoing U.S. ties" — pure judgement.
  - "although the N-400 only asks about departures during the last five years, lengthy absences outside this period that caused possible abandonment are fair game for the USCIS adjudicator" ([CLINIC](https://cliniclegal.org/resources/absences-are-too-long-and-how-cure-them)) — the look-back window itself is not bounded by the form.
  - Visa-bulletin windows: **not researched** (budget), and in any case they move monthly by government fiat and would require a backend feed, which the constraints forbid.

### APP-STORE / LEGAL RISK — **this is where it dies**
A day counter that outputs a number near an immigration threshold is, in practice, read by the user as advice about their status, and the consequence of a wrong read is a 3- or 10-year bar. The honest framings that would make it safe strip out everything people want:
- You cannot say "you are at risk of abandonment" (legal conclusion), "you have a 60-day grace period" (discretionary, and asserting it could induce someone to stay), or "you qualify to file N-400" (eligibility determination).
- What is left — "Days outside the US in the last 5 years: 412" — is a bare counter whose entire value is the inference the app must refuse to draw.
- The studio's own standard of care is the deciding argument: if **"Airworthy today?" → "All items current?"** was required for an aircraft checklist, then an app whose wrong answer triggers a 10-year reentry bar is categorically outside our risk appetite. There is no rename that fixes the mismatch between what the user needs and what we may say.
- There is also an App Review dimension: immigration-adjacent apps that appear to give status guidance invite rejection and, worse, invite one-star reviews from users whose real outcomes went badly.

### INCUMBENTS
Not researched in depth (budget). The relevant observation is that the incumbent is **an immigration attorney**, which the sources repeatedly recommend ("a immigration attorney should confirm the I-94 date, whether a grace period applies"), plus employer-provided counsel for H-1B/L-1 populations and university international offices (whose free guidance pages are the sources above). Employer counsel is free to the user.

### REAL COMPLAINTS
**No verbatim complaints obtainable.** One real artefact was located but not fetchable: a Blind post titled **"my company forgot to extend my h1b visa"** ([teamblind.com](https://www.teamblind.com/post/my-company-forgot-to-extend-my-h1b-visa-7xp4grck)) — the title alone evidences the failure mode and that panic about it is posted publicly.

### AUDIENCE SIZE & WEALTH SIGNALS
Not obtained. Flagged as a gap; it does not change the verdict.

### WHERE THEY GATHER
Blind, immihelp forums ([example thread](https://www.immihelp.com/forum/usa-citizenship/138648-n-400-and-education-abroad)), r/immigration, r/USCIS, r/h1b, university international-office mailing lists, Trackitt. Counts not obtainable. Reachability would be good (4/5) — which is the frustrating part.

### BUILDABILITY (v1, one week)
Mechanically straightforward (trip log + rolling-window counters + fixed dates), but the scope that would be safe is so narrow it is not worth a week.

### VERDICT: **KILL**
Single biggest failure reason: **the decisive rules are discretionary (the 60-day grace period is explicitly "not automatic", the 6–12-month presumption is rebutted by judgement), so any output useful enough to pay for is immigration advice — and the downside of being wrong is a 10-year reentry bar, which is outside the studio's stated standard of care.**

---

# 7. Non-US residency/day traps for mobile high earners (UK SRT, Portugal/Spain/Italy regimes, A1 certificates)

### ICP (one line)
UK-connected and EU-relocating high earners using special tax regimes — wealth signal: Spain's Beckham regime taxes employment income at a flat **24% up to €600,000** with the excess at **47%**, so the regime is only worth claiming at high six figures ([employsome](https://employsome.com/?p=6686); [wiki.private.law](https://wiki.private.law/en/beckham-law)).

### THE EXPENSIVE MISTAKE
- **Spain:** missing the application window forfeits the flat-24% regime. Arithmetic on one occurrence *(estimate)*: on €300,000 of employment income, 24% = €72,000 versus Spanish progressive rates topping out near 47%, a difference plausibly **€40,000–60,000 per year for up to the regime's duration** *(estimate; I did not source Spanish progressive brackets, so treat the delta as indicative only)*.
- **Portugal:** NHR "closed to new entrants on 1 January 2024" and was replaced by IFICI at 20% for 10 years, with narrow eligibility — "General remote workers, retirees on pension income, and freelancers outside the qualifying activity list will not qualify" ([Belzuz](https://belzuz.com/en/publicacion/end-of-the-nhr-portugal-tax-alternatives/); [getwherenext](https://getwherenext.com/blog/portugal-vs-spain-tax-for-americans-2026)). **The headline trap here already closed** — the deadline that cost people a fortune was 31 Dec 2023.
- **UK SRT:** getting the tie/day combination wrong flips worldwide tax residence. No dollar figure obtained.

### THE RULE SET (deterministic?)
The UK SRT ties table is beautifully computable; everything else is not.
- **UK SRT statutory thresholds for a "leaver" (UK resident in one of the previous three tax years)**, per [Finance Act 2013 Sch 45](https://legislation.gov.uk/ukpga/2013/29/schedule/45/paragraph/18/2013-07-17/data.html): **>15 but ≤45 days ⇒ 4 ties; >45 but ≤90 ⇒ 3 ties; >90 but ≤120 ⇒ 2 ties; >120 ⇒ 1 tie.** Day = present in the UK **at the end of the day (midnight)**; transit days can be ignored; up to **60 days** of exceptional circumstances beyond the person's control are disregarded.
- **Spain Beckham:** must not have been Spanish tax resident in the previous **5 years**; application on **Form 149 within 6 months of registering with Spanish social security**. One practitioner: "**the 6-month deadline is the most common reason for rejection**, since people often learn about the regime months after starting work." **This single rule is the best product nugget in item 7** — a 6-month countdown from a date the user knows.
- **Italy:** lump-sum regime at a **€300,000 flat fee** on foreign income; impatriate regime with a **50–90% income exemption** ([countrytaxcalc](https://www.countrytaxcalc.com/tax-guides/special-tax-regimes-hub/)). **Application deadlines and conditions: not found. Unverified.**
- **A1 certificates / social-security totalisation days: NOT RESEARCHED** (search budget exhausted). This sub-item is unassessed and I am not going to pretend otherwise.

**Ambiguity / judgement flags — severe:**
- HMRC's own online tool "is not binding on them" ([Macfarlanes](https://www.macfarlanes.com/media/2865/the-uk-statutory-residence-test.pdf)).
- "most contested residence cases land here rather than in the automatic tests", with specific ambiguity in **the family tie and the work tie** — and the work tie "counts video calls and emails taken while visiting family, not just formal office attendance." **A user cannot reliably self-assess their own ties, which means the input to the computation is unreliable, which means the output is unreliable.** This is the structural flaw.
- The free Nomada calculator admits in writing that it simplifies: "the SRT has edge cases this calculator simplifies (split-year treatment, work-tie de-minimis exceptions, exceptional circumstances, deemed domicile rules)" ([Nomada](https://nomada.tools/tools/visa-tracker/uk-srt)).

### APP-STORE / LEGAL RISK
High-medium. Telling a user they are or are not UK resident is tax advice, and here the inputs (ties) are themselves judgements. Safe framing would be "you recorded 3 ties and 88 UK midnights; the table in FA 2013 Sch 45 pairs 46–90 days with 3 ties" — accurate, and useless without a conclusion the app may not draw.

### INCUMBENTS
- **Tax Days: Residency Tracker already advertises the UK Statutory Residence Test**, at **$19.99/yr** ([listing](https://apps.apple.com/us/app/id6761441335)).
- **[Nomada UK SRT calculator](https://nomada.tools/tools/visa-tracker/uk-srt)** — **free**, implements the sufficient-ties test plus the 183-day automatic test.
- **HMRC's own free tool** (not binding, but free and official).
- Big Four / law firm PDFs free: [Macfarlanes](https://www.macfarlanes.com/media/2865/the-uk-statutory-residence-test.pdf), [BDO](https://gg-www.bdo.global/getattachment/Services/Tax/Private-Client-Tax/UK-Statutory-Residence-Test.pdf.aspx?lang=en-GB), [Titan Wealth flowchart](https://titanwealthinternational.com/files/guides/statutory-residence-test-flowchart.pdf), [Burges Salmon](https://www.burges-salmon.com/articles/102i0yi/were-you-uk-resident-in-2021-2022-you-need-to-know-for-your-tax-return).
- **Honest read: an incumbent iOS app already ships the marquee feature at $19.99/yr, and a free web tool and HMRC's own tool cover the rest.** This is the most crowded item in my cluster relative to its value.

### HOW THIS DIFFERS FROM THE REJECTED GENERIC DAY COUNTERS — honest answer
**It does not differ enough, and per the brief's instruction I am killing it.**
- The UK SRT is more than a 183-day counter — it is a ties-by-days matrix. But **the ties are self-assessed judgements, so the matrix's inputs are unreliable**, and the sources say the ties are exactly where contested cases live. A generic counter at least counts something objective; an SRT engine computes confidently from soft inputs, which is worse.
- The one genuinely distinct, hard-edged, valuable rule in this item is **Spain's Form 149 six-month clock from social-security registration** — a single countdown from a known date, with a quantified failure mode ("the most common reason for rejection"). But it is a **once-per-relocation event**: recurring-use near 1, no subscription.
- Portugal's NHR deadline already passed (1 Jan 2024). Italy is unverified. A1 certificates unassessed.
- An incumbent at $19.99/yr already lists UK SRT support.
**Conclusion: kill.** The non-generic parts are either one-shot onboarding events or rest on unreliable self-assessed inputs.

### REAL COMPLAINTS
**No verbatim complaints obtainable.** The closest real artefact is Nomada's own published limitations disclaimer, quoted above, which is a vendor admitting the computation is incomplete — useful evidence that the engine problem is hard, not evidence of customer pain.

### AUDIENCE SIZE & WEALTH SIGNALS
Not obtained beyond the €600,000 Beckham bracket and the €300,000 Italian flat fee, both of which indicate a genuinely wealthy but small population. No counts sourced.

### WHERE THEY GATHER
r/ukpersonalfinance, r/expats, r/digitalnomad, r/AmericansinSpain; Spain/Portugal relocation Facebook groups; private-client law firm newsletters. **No counts obtainable.** Reachability 3/5: fragmented across many country-specific communities, which is expensive.

### BUILDABILITY (v1, one week)
Poor relative to the others: UK SRT needs the ties matrix plus split-year treatment, work-tie de-minimis and exceptional circumstances to be defensible (the free tool skips them and says so), and each additional country is a separate regime with its own unverified deadlines. Multi-country rule maintenance with no backend is the wrong shape for a one-week build.

### VERDICT: **KILL**
Single biggest failure reason: **the only hard-edged valuable rule (Spain's 6-month Form 149 clock) is a once-per-lifetime event, and the rest is either a $19.99/yr incumbent feature or an engine whose inputs are self-assessed judgements the sources identify as the most litigated part of the test.**

---

# 8. Estate/trust/fiduciary deadlines for executors and trustees

### ICP (one line)
Lay executors and trustees of taxable or near-taxable estates — wealth signal: estates over roughly **$13M** were subject to US estate tax in 2024 and under **0.1%** of estates are taxable, so the portability/706 cohort is by definition ultra-wealthy, while the broader executor population reports average compensation of **$18K** and estates taking **~16 months** to settle ([EstateExec statistics](https://estateexec.com/Docs/General_Statistics)).

### THE EXPENSIVE MISTAKE
The best-documented single-occurrence loss in my cluster after 1031.
- **Estate of Rowland:** the executor filed a Form 706 citing the portability election, but the return "was not 'complete and properly prepared' in the way the IRS and Treasury regulations require" and "the filing also came late"; the IRS concluded no valid portability election was made and the Tax Court agreed. **Result: "Billy's estate lost access to over $3.7 million in additional exemption."** ([BDO](https://www.bdo.com/insights/tax/portability-and-simplified-reporting-a-warning-from-the-tax-court))
- Arithmetic *(estimate)*: $3.7m of lost exemption at the 40% federal estate-tax rate ≈ **$1.48m of additional estate tax** *(estimate; my arithmetic, 40% rate not sourced in this pass)*.
- A secondary marketing blog describes a comparable case costing a family **$1.5 million** ([neiljesani.com](https://neiljesani.com/blog/late-filing-costs-estate)) — **marketing source, unverified, do not rely on.**
- **Inherited IRA 10-year rule:** the missed-RMD penalty "was 50% before 2023 but was lowered to **25%** starting in 2023 (or **10%** if a corrective distribution was made in a timely manner)" ([NBC/CNBC](https://www.nbcdfw.com/news/business/money-report/this-inherited-ira-rule-change-for-2025-could-trigger-a-25-tax-penalty/3799301/)). On a $100k missed RMD that is **$25,000** *(estimate, applying the sourced rate)*.
- **Probate inventory default (North Carolina, the one state I could source):** the clerk can "tax costs to the executor, and, if needed, remove the executor", and can "hold them in civil contempt for failing to file on time, even if the estate ultimately has no assets to list" ([Pierce Law](https://piercelaw.com/news/probate-question-and-answer/can-the-executor-be-removed-or-penalized-for-a-late-inventory-if-the-estate-has-no-assets-nc/)).

### THE RULE SET (deterministic?)
Dates: largely yes. Applicability: no. Fifty-state probate: not without a research programme.
- **Form 706 due nine months after date of death**, or the last day of an extension; **Form 4768 gives an automatic six-month extension** ⇒ effectively **15 months** ([Drake](https://www.drakesoftware.com/archive/irs-extends-key-deadline); [Dean Mead](https://deanmead.com/portability_election_deadline_extended)).
- **Portability requires a timely filed Form 706 even when the estate is not otherwise obligated to file one.** "A DSUE amount is available to a surviving spouse only if the executor makes the election on a timely filed Form 706."
- **Rev. Proc. 2022-32:** late portability election permitted up to **five years** after date of death, **only** for estates not otherwise required to file. Relief via PLR is discretionary and "would be void if the estate were later found to have been required to file under section 6018(a)" ([PLR 201735006](https://ezel.ai/irs-rulings/201735006); [Current Federal Tax Developments](https://www.currentfederaltaxdevelopments.com/blog/2015/9/4/irs-grants-late-portability-election-conditioned-on-representation-that-no-form-706-was-required)).
- **Inherited IRAs:** final regulations **TD 10001** retain the 10-year rule; annual RMDs apply to most non-spouse heirs **if the owner reached RMD age before death**, effective **2025**; the account must be emptied by the end of year 10 regardless; eligible designated beneficiaries (surviving spouses, minor children, disabled or chronically ill) are generally exempt ([Grant Thornton](https://www.grantthornton.com/insights/newsletters/tax/2024/hot-topics/jul-30/final-rmd-rules-retain-10-year-rule-for-inherited-retirement-accounts); [Belfint](https://www.belfint.com/final-regulations-inherited-iras/); [Porte Brown](https://www.portebrown.com/newsblog-archive/irs-issues-final-regulations-on-inherited-iras)).
- **North Carolina inventory: three months from qualification**, filed with the Clerk of Superior Court; escalation runs notice → order with a shorter deadline (at least 20 days) → show-cause hearing → costs/removal/contempt ([Pierce Law Q&A series](https://piercelaw.com/news/probate-question-and-answer/what-happens-if-i-miss-the-deadline-for-filing-the-probate-inventory-nc/)).
- **NOT VERIFIED — flagged scope holes:** the **§663(b) 65-day rule**, the **9-month qualified disclaimer** under §2518, and the **alternate valuation** election all appeared in my search but **returned no usable sources** ("I couldn't verify the '65-day rule' or the disclaimer-specific deadline from these results"). **Probate deadlines for 49 of 50 states are unsourced.** Any build must treat these as unresearched.

**Ambiguity / judgement flags:**
- Whether a 706 is *required* (vs filed only for portability) determines whether the five-year Rev. Proc. 2022-32 lifeline exists at all — and Rowland shows that getting this wrong voids the election. This is a legal determination.
- "Complete and properly prepared" is a qualitative standard the Tax Court enforced against an executor who did file. **A date-tracking app cannot protect against the actual failure mode in the leading case.** That is a serious strike against the product thesis.
- Probate deadlines vary "by state and by county clerk" per the source.

### APP-STORE / LEGAL RISK
High-medium, and higher than #5. Executors are fiduciaries acting on behalf of others, and an app that implies a deadline set is complete invites reliance of exactly the kind we must avoid. Safe framing: a **user-built** deadline register ("add the deadlines your attorney gave you"), with a generic educational date-math helper (date of death + 9 months, + 15 months) clearly labelled as arithmetic, not a list of obligations.
- House style: **"All items you added are marked complete"** — never "Estate compliant", never "You must file Form 706 by…".

### INCUMBENTS
- **EstateExec** — **$199 flat per estate**, free trial, volume discounts ([Capterra](https://www.capterra.com.au/software/1040245/estateexec)). "Provides an interactive checklist of tasks customized to your situation", can link to the estate bank account and "automatically download transactions" ([FAQ](https://dp.estateexec.com/ca/FAQ.html)). Editorial review **4.6/5 overall, price 4.4** ([Retirement Living](https://www.retirementliving.com/reviews/estateexec) — carries an advertising disclosure). Weakness quoted from a review: **"Does not save work as you go, but warns if you try to close the browser without saving work."** Trustpilot reviews visible were **2021–2023** and positive but few; Capterra itself shows **"Rated by 0 users"**.
  - **Note what EstateExec's pricing proves:** the market for executor software is priced **per estate, one-off**, not as a subscription. That is direct evidence against our business model for this niche.
- Probate attorneys and trust companies (the real incumbents, and the ones fiduciaries actually use for 706s).
- Free law-firm checklists in volume (Pierce Law's Q&A series is one of many).
- **Honest read: EstateExec does not "nail" deadline tracking, but it occupies the category at a price point and payment shape incompatible with our model.**

### REAL COMPLAINTS
**No verbatim complaints from individuals obtainable** (Trustpilot and estateexec.com both DNS-blocked). Two real review fragments did come through search summaries and I quote them as-is, noting they are *positive* reviews with one embedded criticism:
- "the app helped them easily track the many different assets and debts" (Trustpilot, 2021–2023)
- "Does not save work as you go, but warns if you try to close the browser without saving work." (review, via Capterra/Retirement Living summary)
This is thin and I am not dressing it up.

### AUDIENCE SIZE & WEALTH SIGNALS
- **~16 months** average to settle an estate; **500–700 hours** of executor time; **average executor compensation $18K**, rising with estate size ([EstateExec statistics](https://estateexec.com/Docs/General_Statistics); [Batavia Law](https://www.batavialaw.com/estate-administration/probate-by-the-numbers/)).
- Only **<0.1%** of estates are subject to federal estate tax; threshold **>$13M in 2024** — so the 706/portability ICP is tiny, and the portability-only filers (below threshold, filing solely to preserve DSUE) are the real addressable group, **whose size I could not source**.
- **IBISWorld: 3,896,119 "Trusts & Estates in the US" businesses as of 2025** ([link](https://www.ibisworld.com/united-states/number-of-businesses/trusts-estates/1343)) — **this counts entities, not executors, and must not be used as an audience estimate.**
- I **failed to obtain** any count of annual US probate estates or executors. Gap.

### WHERE THEY GATHER
**This is the fatal weakness.** Executors are an accidental, transient identity — nobody self-identifies as one until a parent dies, and they stop within ~16 months. There is no association, no subreddit of scale I could verify, no newsletter. Channels would be r/EstatePlanning, r/personalfinance, funeral-home and probate-attorney referral — i.e. partnership-dependent and not cheap. **Reachability 2/5**, the lowest in my cluster.

### BUILDABILITY (v1, one week)
Date arithmetic is easy (DoD + 9/15 months; 10-year-rule year-end dates; a user-built register). The **blocking** problem is scope: to be genuinely useful it needs state-specific probate deadlines, and I sourced exactly **one state**. A defensible one-week v1 is "a register the user populates from their attorney's instructions, plus a few federal date calculators" — which is a notes app with maths, and will not command a subscription.

### VERDICT: **PARK**
Single biggest failure reason: **recurring-use 1/5 and reachability 2/5 — the user needs it once for 16 months and cannot be found before they need it, and EstateExec's $199-per-estate pricing is direct evidence the market pays one-off, not monthly.**

---

# WILDCARD 1: SAM.gov / 8(a) / HUBZone / WOSB recertification for government contractors

### ICP (one line)
Owners of small federal contractors holding set-aside certifications, whose entire revenue line depends on an active registration — wealth signal: these are revenue-generating businesses bidding federal contracts, but **I obtained no revenue or income statistic** and will not assert one.

### THE EXPENSIVE MISTAKE
- **SAM registration runs 365 days "from the date you submitted it for processing"**, not from a calendar date, and "there is **no grace period**" ([samsearch](https://samsearch.co/glossary/sam-gov-registration-renewal)). An **Inactive** status "blocks new awards and federal payments."
- A lapse can cause **payment holds on existing contracts**, and reactivating an expired registration "can take **7-10 business days or longer**"; risks include "potential contract cancellations if registration expires during the bidding process" ([sledai](https://www.sledai.com/blog/how-to-renew-sam-registration/)).
- Certification lapse "could lead to your business losing out on access to sole-source and set-aside contracts" ([Mondaq, 2024](https://www.mondaq.com/unitedstates/corporatecommercial-law/1491006/alert-sba-small-business-certifications-paused-on-august-1-2024-for-system-upgrade) — dated).
- **Dollar cost of one occurrence: a missed bid or a frozen payment run. I could not source a representative contract value and will not invent one.** Directionally this is the highest-variance pain in my cluster (a single set-aside award can be seven figures), but it is **unquantified** and that is a genuine weakness in the case.

### THE RULE SET (deterministic?)
Partly, and the interesting part is deterministic.
- **The 365-day-from-submission clock is exactly the kind of rule users get wrong**, because it is not a calendar anniversary and SAM's own date is the only truth. Computable from one user-entered date.
- VOSB/SDVOSB: SBA "recertification notices go to the SAM.gov business contact **90 days prior** to the extended eligibility period end date"; firms "must report changes that affect eligibility to SBA **within 30 days**"; SBA is removing the expiration-date field from DSBS, so contracting officers must check [DSBS](https://sbaone.atlassian.net/wiki/spaces/UCPUKB/pages/3823403009) for status ([SBA KB](https://sbaone.atlassian.net/wiki/spaces/UCPUKB/pages/3823403009/Veteran-Owned+Small+Business+VOSB+Memo+6-Month+Extension)).
- Size recertification may be required **on specific contract anniversaries**, separate from SAM renewal ([opengrants](https://opengrants.io/sam-gov-registration-renewal-verify-what-it-saved/)) — unverified against FAR/SBA rules, flagged by the source itself.
- **Ambiguity:** I found **no primary SBA or SAM.gov guidance** on what happens to a specific contract when a WOSB/8(a)/HUBZone certification lapses — "The search turned up mostly vendor blogs." Program-specific recertification cadences for 8(a), HUBZone and WOSB were **not verified**. One blog reports a SAM.gov system error affecting renewals submitted 24 Mar–22 Jul 2026 ([supplierdiversity](https://www.supplierdiversity.com/blog/100-days-past-8a-audit-may-2026-status/)) — **single source, unverified.**

### APP-STORE / LEGAL RISK
**Low — the best risk profile in my cluster.** This is pure business-records housekeeping with no tax or legal determination anywhere. Framing: **"Your registrations and certifications"**, **"SAM registration: 41 days from your entered submission date"**, **"All items current?" → "2 items need attention"**. Nothing here resembles advice.

### INCUMBENTS
- Renewal-service vendors (federalfiling.com, sledai, samsearch, opengrants) sell **done-for-you renewal** at a price point I did not obtain — they monetise the task, not a tracker.
- SAM.gov and SBA send their own email notices (the SBA KB confirms a 90-day notice for VOSB) — **free, and the obvious reason an app might be unnecessary**, except that the recurring complaint pattern is precisely that those notices go to a stale "SAM.gov business contact".
- **No tracker app found.** Blue-ish ocean (4/5), with the caveat that I did not search the App Store.

### REAL COMPLAINTS
**No verbatim complaints obtainable.** The vendor-blog ecosystem around "my SAM registration lapsed" is itself evidence of demand volume, but it is marketing, not customer voice. Weak evidence; flagged.

### AUDIENCE SIZE & WEALTH SIGNALS
Not obtained — I did not get a count of registered small contractors or certified firms. Gap.

### WHERE THEY GATHER
GovCon LinkedIn groups, r/govcon, APEX Accelerators (formerly PTACs), SBA district office events, GovCon Wire / Set-Aside Alert newsletters, NDIA/AFCEA chapters. **No counts obtained.** Reachability 3/5: identifiable and B2B-reachable, but not a cheap consumer channel.

### BUILDABILITY (v1, one week)
Good. `Registration{type, submittedDate, periodDays, sourceURL}` + anniversary engine + notifications at 120/90/60/30/7 days + a PDF status register. Entirely user-entered, no backend. **Caveat: the data lives in SAM.gov and DSBS, and users will reasonably expect the app to read their real status — which needs a backend we have ruled out. A manual-entry tracker may feel inadequate against that expectation.**

### VERDICT: **PARK**
Single biggest failure reason: **the authoritative dates live in SAM.gov/DSBS and SBA already emails a 90-day notice, so a manual-entry iOS tracker is fighting a free official reminder with worse data — and it is a B2B audience with no cheap consumer channel.**

---

# WILDCARD 2: Medicare IRMAA / enrolment windows

### ICP (one line)
Americans turning 65, especially those still covered by employment and those with high MAGI facing IRMAA surcharges; wealth signal weak — the broad 65-turning population is not a wealthy niche, and **I obtained no IRMAA threshold figures at all.**

### THE EXPENSIVE MISTAKE
- **Part B late enrolment penalty: 10% of the premium for each 12-month period of delay**, payable "every month for as long as you have Medicare" ([Healthline](https://www.healthline.com/health/medicare/how-long-does-the-medicare-part-b-penalty-last)).
- Worked example from a source: a **2025 standard premium of $185** with a two-year delay ⇒ 20% ⇒ **$222/month**. Delta **$37/month**; over a 20-year retirement ≈ **$8,880** *(estimate, my arithmetic on their figures, ignoring premium growth)*.
- **Part D LEP: 1% of the national base beneficiary premium per month without creditable drug coverage**, permanent.
- **This is a four-figure lifetime mistake, not a six-figure one** — an order of magnitude below everything else in my cluster.

### THE RULE SET (deterministic?)
Yes, and cleanly — which is why it is already commoditised.
- **IEP: seven months centred on the 65th-birthday month.**
- **GEP: 1 January – 31 March**, coverage starting the month after sign-up.
- **AEP 15 October – 7 December "cannot be used to enroll in Part A or Part B"** — a genuinely useful and widely misunderstood distinction.
- **Part B SEP:** available while covered by current employment and for **eight months** after it ends; enrolling in that window avoids the penalty ([KFF](https://www.kff.org/faqs/medicare-open-enrollment-faqs/general-enrollment-information/i-didnt-sign-up-for-part-b-when-i-first-became-eligible-but-want-to-sign-up-now-i-know-there-is-a-penalty-for-late-enrollment-is-there-any-way-to-avoid-the-penalty/)).
- **Ambiguity:** whether coverage is "creditable" and whether employment coverage qualifies for the SEP are determinations with real consequences. **IRMAA thresholds, the two-year MAGI look-back, and the SSA-44 life-changing-event appeal process were not obtained** — "The results didn't give IRMAA thresholds or how the two combine over a lifetime."

### APP-STORE / LEGAL RISK
Low-medium. Birthday-driven window arithmetic is safe. Determining SEP eligibility or creditable coverage is not.

### INCUMBENTS
Overwhelming and free: **SHIP/SHIBA counsellors**, state insurance departments ([Idaho DOI](https://doi.idaho.gov/february-2025-medicare-minute-teaching-materials-premium-appeals-and-troubleshooting), [WA OIC](https://insurance.wa.gov/media/10678)), [KFF](https://www.kff.org/faqs/medicare-open-enrollment-faqs/general-enrollment-information/i-didnt-sign-up-for-part-b-when-i-first-became-eligible-but-want-to-sign-up-now-i-know-there-is-a-penalty-for-late-enrollment-is-there-any-way-to-avoid-the-penalty/), Medicare.gov itself, plus a vast commission-funded broker industry that will walk anyone through enrolment for free because they are paid by carriers. **Competing with free, commissioned human advice is a losing position.**

### REAL COMPLAINTS
**No verbatim complaints obtainable.**

### AUDIENCE SIZE & WEALTH SIGNALS
Not obtained. The population turning 65 is large but is not a wealthy niche, and iOS-subscription willingness in this cohort is the weakest in my cluster.

### WHERE THEY GATHER
AARP community, r/medicare, SHIP counselling sessions, employer pre-retirement seminars. Reachable (4/5) but cheaply served by free human help.

### BUILDABILITY (v1, one week)
Easy — birthdate in, windows out. Too easy to defend.

### VERDICT: **KILL**
Single biggest failure reason: **the mistake is four figures over a lifetime, not six, and a free commission-funded broker industry plus free government counsellors already solve it for the user at the moment of need.**

---

# CROSS-CUTTING CONCLUSIONS

### The two to pursue
1. **#5 Equity/startup tax windows (30/35).** Highest pain-$ paired with the **lowest legal risk** in the cluster, because every input is a date on a document the user already holds and the core value needs no eligibility determination. The incumbent gap is structural rather than accidental: cap-table platforms (Carta, Pulley, Cake) are bought by *issuers* and cannot follow a person across employers, while Secfi/Compound/Valur are fee businesses that qualify small balances out. Best fit to the one-week SwiftUI/SwiftData constraint of anything I examined.
2. **#2 Canadian snowbirds (29/35).** The only item where the "three simultaneous constraints with opposite signs" structure genuinely escapes the rejected generic-day-counter critique, combined with the best reachability in the cluster (one association, one newsletter, concentrated geography, an email-reading demographic) and the best recurring-use (every year for 15–20 years).

### What I killed, and why
- **#6 Immigration** — the decisive rules are explicitly discretionary ("not automatic", "USCIS has the power to shorten or deny") and the downside of a wrong read is a 3–10 year reentry bar. Any output worth paying for is immigration advice. Fails the "Airworthy today?" standard of care by a wide margin.
- **#7 Non-US residency regimes** — the only hard-edged valuable rule (Spain's Form 149 six-month clock) is once-per-lifetime; UK SRT is already an incumbent feature at $19.99/yr and free at Nomada and HMRC; and its engine depends on self-assessed ties that the sources identify as the most litigated part of the test.
- **Wildcard Medicare** — a four-figure lifetime mistake against a free commission-funded advice industry.

### Honest reservations the studio should weigh before committing
- **I obtained zero verbatim complaints from real individuals across ten niches.** Reddit is proxy-blocked and every forum and review aggregator was DNS-blocked. The brief treats verbatim complaints as a core deliverable and I did not deliver them. **Do not green-light #5 or #2 until a follow-up pass with working Reddit/forum access produces real customer voice** — the entire case for #5's willingness-to-pay rests on inference from practitioner articles, not from anyone saying they would buy this.
- **I could not check the App Store for existing indie competitors** in #5 or #2, which is the most likely way the competitive-weakness scores (4 and 3) are wrong.
- Several rule sets carry unverified elements I have flagged inline and which must be checked against primary sources before any code is written: the FEIE exclusion amount, the QSBS July 2025 changes (AI-generated secondary source), the 1031 disaster-relief notice, every provincial health-absence day limit, 49 of 50 states' probate deadlines, the §663(b) 65-day rule, the §2518 nine-month disclaimer, and all program-specific SBA recertification cadences. **irs.gov was unreachable throughout.**
- **#4 (1031) has the highest pain-$ in the cluster and I am still parking it.** That is the clearest illustration of the cluster's central lesson: in one-shot transaction traps, the professional the user has *already* paid (the QI, the probate attorney, the preparer) sends the reminder for free. The durable opportunities are the ones with a **multi-year, multi-item date portfolio** that no single professional owns end-to-end — which is exactly what #5 and #2 are.
