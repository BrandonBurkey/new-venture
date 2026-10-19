# Deep dive — Startup equity date windows (83(b) / QSBS / ISO-PTE / disqualifying disposition / AMT year boundary)

**Niche 5 from `research/raw/scout-3-crossborder.md` (scored 30/35, tied highest).**
**Date:** 2026-10-19. **Analyst:** research sub-agent. **Binding rules:** `CLAUDE.md`, `research/scoring-rubric.md`.

---

## 0. Evidence provenance — read before anything else

Carried forward from the scout, and extended by this pass. Verification markings are never upgraded.

**What the scout could not do:** WebFetch failed DNS on every host attempted; `reddit.com` hard-blocked; WebSearch budget exhausted after ~14 calls; `irs.gov` unreachable throughout; **zero verbatim customer quotes obtained across ten niches**; App Store never checked.

**What this pass added (16 WebSearch calls; WebFetch and curl still dead):**
- `hn.algolia.com`, `news.ycombinator.com`, `apps.apple.com` — all `getaddrinfo ENOTFOUND` on WebFetch. `curl` through the agent proxy: `CONNECT tunnel failed, response 403`. **No page was read directly in this pass either.**
- `reddit.com` is now blocked at a second layer: WebSearch returns `API Error: 400 ... domains are not accessible to our user agent: ['reddit.com']`. Reddit is unavailable by any route. Treat every Reddit-based plan as unplannable.
- WebSearch with `allowed_domains` restricted to HN / Quora / Bogleheads / Elpha **did** return real thread titles and quoted comment fragments from the search index. These are the first customer-voice artefacts this project has. They are marked `[search-snippet]`: the titles are verbatim page titles from the index; the comment fragments are quoted by the search index, **not read by me on the page**.
- **Two findings in this pass are adversarial and change the recommendation.** See §1 reservations 1 and 2, and §10: (a) Carta already emails founders the 83(b) issuance date and days left to file, and Clerky ships pre-filled 83(b) forms plus reminders included in any vesting-stock product; (b) **a direct indie iOS competitor exists — Vestyx (App Store id6766111969)** — which the scout explicitly flagged as the most likely way its competitive score was wrong. It was.

**Marking key**
| Mark | Meaning |
|---|---|
| `[verified]` | Primary source read directly. **Nothing in this report carries this mark.** |
| `[snippet-only]` | Source URL known, content via search-index summary or quoted fragment. Page not read. |
| `[verbatim-title]` | Page/thread title as the search index returned it. Body not read. |
| `[secondary]` | A source summarising another source (incl. AI-generated summaries). |
| `(estimate)` | My arithmetic, shown inline. |
| `[unverified]` | Could not be checked at all in this environment. |

**Willingness to pay is unproven inference, not evidence.** I obtained real artefacts that people suffer this pain. I obtained **zero** statements from any person about paying for a tool that tracks it. Every WTP number in this document is a hypothesis to be tested with money, not a finding.

---

## 1. Thesis, ICP, and the three reservations

### Thesis

Equity is the largest asset on a startup employee's or founder's balance sheet, and its value is gated by six statutory date intervals that live on documents nobody else is custodian of across a career. Cap-table platforms are bought by issuers and lose the person at termination; advisory firms start around $5,000/year and qualify small balances out; the person is left with a spreadsheet. A private, phone-local date register that computes every statutory window from dates the user types off their own grant and plan documents — and never states a dollar, an eligibility or a recommendation — is buildable in a week, sits on the clean side of the advice line, and has a genuine multi-year reason to be a subscription in the QSBS 3/4/5-year tiers. **But the headline event is already covered for free by the issuer platforms, the audience's cash position is far smaller than its paper exposure, a free indie iOS competitor already occupies this slot with no visible traction, and there is no community we are allowed to post in.** The niche is worth an 8-week bet only after a 12-day, ~$350 paid-deposit test clears a pre-committed threshold. The pain is proven; the payer is not; the channel is the weakest link.

### ICP, one line

A US founder or early employee, 28–45, who has held equity at two or more startups, has at least one grant that was exercised or early-exercised, and does not have a $5k/year advisor — i.e. someone whose six-figure exposure sits on paper documents they alone keep.

### Reservation 1 — Discovery timing. Can we reach anyone inside a 30-day window?

**Answer: essentially no, at scale — and worse, the people we could reach are the ones already covered. This kills 83(b) as the business's centre of gravity, but not the niche.**

Evidence:
- The window is 30 days from transfer with no cure. IRS Form 15620 instructions: an election "must be filed no later than 30 days after the date the property was transferred", and under IRC §7503 a day-30 weekend/holiday is timely "if it is postmarked by the next succeeding day" ([Form 15620 instruction text quoted via search](https://irs.gov/pub/irs-pdf/f15620.pdf); [Cozen](https://www.cozen.com/news-resources/publications/2024/irs-creates-standardized-section-83-b-election-form-15620)) `[snippet-only]`. "The IRS has no discretion to extend the time period for filing" ([gust](https://gust.com/?p=7)) `[snippet-only]`. "The Tax Court has rejected every late-filing argument it has heard, including illness, attorney errors, and certified-mail problems" ([promise.legal](https://blog.promise.legal/startup-central/83b-election-founders-guide/)) `[snippet-only, secondary]`.
- **The reminder is structurally owned by the issuer, because the issuer hands over the grant.** Carta's release notes: the system "automatically generates the 83(b) form, provides instructions on how to file it with the IRS, and sends an email notification that includes issuance date and days left to file", and admins "can now see the status of 83(b) election filings for each employee and send reminders" ([Carta release notes](https://releasenotes.carta.com/83b-election-for-founders-1A0Q8w), [Carta blog](https://www3.carta.com/blog/founders-83b), [exercises ledger](https://releasenotes.carta.com/exercises-ledger-and-managing-83b-elections-NUVwc)) `[snippet-only]`. Clerky: pre-filled forms and instructions are "included in the cost of any products involving the issuance of stock subject to vesting" ([Clerky blog](https://www.clerky.com/blog/managed-83b-elections)) `[snippet-only]`. Cake Equity markets 83(b) reminders ([FAQ](https://www.cakeequity.com/guides/faq-83b-election-reminder-equity)) `[snippet-only]`. Eqvista tracks 83(b) status ([Eqvista](https://eqvista.com/support/status-tracking-reminders-for-83b-election/)) `[snippet-only]`.
- Our own acquisition latency is weeks at best: a Show HN, an SEO page, a CPA referral. None of those can be timed to land inside an arbitrary stranger's 30 days.
- **Who is left inside a 30-day window and uncovered:** hand-papered grants with no platform; LLC profits-interest holders; token grants ([magna.so](https://magna.so/blog/token-vesting-and-the-83-b-election-how-to-avoid-a-multi-million-dollar-mistake-as-a-founder-or-early-employee)) `[snippet-only]`; the second-time founder who is now the one issuing paper; and the person whose filing went astray — a real artefact: an Elpha founder whose cofounder filed on time "but the IRS is saying there is no record of it now" ([Elpha](https://elpha.com/posts/sznc6umy/immigrant-founders-83-b-without-itin-or-ssn)) `[search-snippet]`, echoed by a Quora question title "I filed an election to section 83(b) in time and today called the IRS to verify they received it, but told me they don't see it. What can I do?" ([Quora](https://www.quora.com/I-filed-an-election-to-section-83-b-in-time-and-today-called-the-IRS-to-verify-they-received-it-but-told-me-they-dont-see-it-What-can-I-do)) `[verbatim-title]`.

**Is QSBS + PTE tracking still worth paying for?** Structurally yes, evidentially unknown. Three reasons it is the better business even though it is the quieter pain:
1. It is multi-year and recurring, which is what a subscription needs. OBBBA **increased** the number of dates per block: for stock acquired after 4 July 2025 the exclusion is tiered 50% / 75% / 100% at 3 / 4 / 5 years ([Spencer Fane](https://www.spencerfane.com/insight/the-one-big-beautiful-bill-act-significantly-expands-qualified-small-business-stock-benefits/), [Weaver](https://weaver.com/?p=20979), [Withum](https://www.withum.com/?p=132287)) `[snippet-only]`. One block used to be one date; now it is three. That is a tailwind for a date register.
2. It follows the person, not the company. No issuer platform does. QSBS is per-block and the practitioner instruction is literally our spec: "Mark the exact date when the stock was acquired or, in the case of convertible securities, when they were converted into stock" ([Stripe](https://stripe.com/us/resources/more/what-is-the-qsbs-holding-period)) `[snippet-only]`.
3. PTE is near-universal and tight: "96% of all option agreements on Carta have PTE periods of 90 days or less" ([Carta](https://carta.com/blog/pte-vesting/)) `[snippet-only]`, and it bites exactly when the person loses portal access.

**Verdict on reservation 1: does not kill the niche. It kills the headline.** 83(b) becomes the free aha moment and the emotional hook, not the paid product. The weight it was carrying transfers onto reservation 2, where it is heavier.

### Reservation 2 — Does this audience expect free? Is there a willing buyer?

**Answer: the buyer is plausible and entirely unevidenced. This is the live kill risk, and this pass made it worse, not better.**

The market is barbelled with a hole in the middle, and that hole is real:
- **Free, issuer-paid tier.** Carta sends employees "vesting cliff and quarterly summary emails" ([Carta support](https://support.europe.carta.com/hc/en-gb/articles/10821829226129-Employee-Equity-Emails)) `[snippet-only]`. Carta's Launch tier is reported free up to 25 stakeholders / $1M raised by one aggregator and flatly denied by another ([frontdeskreview](https://frontdeskreview.com/software/cap-table-management/carta/) vs [costbench](https://costbench.com/software/equity-management/carta/free-plan/)) — **sources directly conflict, unresolved** `[snippet-only]`. Pulley Startup is most consistently reported at $1,200/yr flat ([Software Advice](https://www.softwareadvice.com/product/211396-pulley/), [Capterra](https://www.capterra.com/p/219303/Pulley/pricing/)) `[snippet-only]`. Either way, **the employee is not the customer and loses access on departure** — which is precisely when PTE bites.
- **Advisory tier, far above our price.** Secfi's own help page: "We have no asset minimums, we only have a quarterly retainer (starting at $1,250) to cover advisory services" ([Secfi](https://secfi.com/help/advice-wealth/am-i-a-good-fit-to-work-with-secfi-for-financial-advisory-services)) `[snippet-only]` — ~$5,000/yr (estimate: $1,250 × 4). A separate listing shows a $7,200 minimum annual fee and 0.65% / 0.45% tiers ([TrueAdvisor](https://www.trueadvisor.com/firm/306961)) `[snippet-only]` — **the two conflict and I could not resolve them.** Compound Planning: "$25,000 account minimum", asset management 0.2–2.0%/yr, per a Form CRS dated 26 March 2026 ([wiki.private.law](https://wiki.private.law/en/compound-planning)) `[snippet-only, secondary]`; its product is "a full net worth dashboard, equity specific alerts, scenario modeling, and an advisor who can help execute decisions" ([Sacra](https://sacra.com/research/jordan-gonen-compound-wealth-management/)) `[snippet-only, secondary]`. Valur is described as expanding "QSBS to employees, angels, CFOs" ([Sacra](https://sacra.com/chat/h/b68a27c8-8753-4c96-a25b-926e7b5608c8/)) `[secondary, AI-generated]`. **All three monetise the balance. All three qualify our ICP out.** That is the hole.
- **And someone is already standing in the hole, for free.** **Vestyx — RSU & Equity Tracker**, iOS, free with in-app purchases: "Unlimited grants and employers • All grant types: RSU, ISO, NSO, ESPP, RSA, PSU, SAR • Full vesting calendar with vest day notifications", data on-device, widgets and Watch ([App Store id6766111969](https://apps.apple.com/us/app/vestyx/id6766111969)) `[snippet-only — apps.apple.com unfetchable]`. Pro tier: withholding gap analysis, scenario modeling, an AMT calculator, a year-end tax letter PDF. Developer listed as Mobile Innovations LLC, with **no review rating and no significant traction** on its Product Hunt-style listing ([hunted.space](https://hunted.space/product/vestyx-rsu-equity-tracker)) `[snippet-only]`.

That last bullet is the most important sentence in this section and it cuts both ways. Either (a) this audience does not pay for equity tracking, and Vestyx's silence is the market speaking; or (b) Vestyx tracks the wrong thing — *value and vesting dates*, which are pleasant, rather than *statutory forfeiture windows*, which are terrifying — and the nerve is still unstruck. **I cannot tell which from here, and the difference is the entire business.** Closing it is Experiment 0.

Note also the cash paradox, which no amount of anchoring dissolves: the person with a $726k exposure is frequently a 31-year-old whose equity is illiquid paper and whose bank balance is four figures. Purchasing *power* and purchasing *willingness* diverge sharply here.

**Verdict on reservation 2: does not kill it on paper, but it converts the project from "build" to "test".** No Swift is written until money has changed hands. If a $99/yr price cannot be sold, the niche is dead — see §4e for why $39 does not save it.

### Reservation 3 — The advice line, drawn precisely

**Answer: the line is drawable and the core product sits cleanly on the factual side. But drawing it honestly removes the two features that would most obviously justify a price — so reservation 3 and reservation 2 are the same problem wearing two hats. That is the central tension in this niche.**

**FACTUAL SIDE — ship these.** Every one is arithmetic on a date the user typed off a document they hold, or a neutral restatement of a public interval with its citation.
1. Days between two dates the user entered.
2. A statutory interval applied to a user-entered date, shown with its IRC/regulation cite and labelled "computed from the date you entered".
3. The §7503 next-business-day postmark adjustment, as a date.
4. Two dates side by side — the plan window length the user typed, and the statutory interval — each labelled with its source, **with no statement about which one governs**.
5. Calendar-year grouping of exercises the user recorded, with the 31 December boundary drawn as a line.
6. A PDF/.ics register of the user's own entered records and the derived dates.
7. Local notifications on dates the user chose.

**WRONG SIDE — do not ship, at any version.**
1. **Any dollar figure.** AMT estimate, tax owed, withholding gap, savings from an election, value at risk. *(Vestyx's paid tier is built on exactly this. We are deliberately narrower, and must say so internally so nobody "catches up" later.)*
2. **Any eligibility determination.** "Your stock is QSBS." "This qualifies as a qualified small business." "Your ISO retains ISO status." Whether stock is QSBS at all is a legal determination; the app tracks blocks **the user has marked** as candidates and nothing more.
3. **Any recommendation or prioritisation.** "Exercise before…", "hold until…", "file now", or ranking windows by financial impact.
4. **Scenario modeling / what-if exercise comparison.**
5. **Inferring which date starts a clock.** Whether the 30-day clock runs from grant, transfer or a purchase-agreement date can require counsel. The user enters the date; the app never picks it.
6. **Facts-and-circumstances exceptions.** The §22(e)(3) disability extension to one year, the insolvency exception (Treas. Reg. §1.422-1) `[snippet-only]`, §1045 rollover, holding-period tacking through a tax-free reorganisation, state non-conformity (e.g. California) — all out. At most the user may type a different window length.
7. **Any outcome language.** "Never miss…", "protect your $X", "lock in capital gains", "stay compliant".

**Features that sit on the wrong side and are therefore cut from the spec:** AMT dollar estimate; "should I exercise" guidance; QSBS eligibility check; scenario modeling; withholding gap; dollar-ranked window list; any "you are eligible / you are safe" status. Per the Airworthy precedent, the home screen says **"All grant dates recorded"** and **"2 windows close within 30 days"** — never a verdict.

**Verdict on reservation 3: does not kill it; it is the niche's structural advantage. But it is the reason the product must be sold on dread rather than on arithmetic, which is exactly why the price test cannot be skipped.**

### Do any of the three kill it?

No single one kills it. Together they relocate the risk: **the pain is real and six-figure, the legal surface is the cleanest of the cluster, buildability is excellent — and there are now four independent reasons revenue could be zero, three of which point at the same place: nobody may pay.** Verdict in §14.

---

## 2. Value Equation (Hormozi)

Value = (Dream outcome × Perceived likelihood of achievement) ÷ (Time delay × Effort and sacrifice)

### Dream outcome — in the customer's words

I have no verbatim statement of a dream outcome; nobody was reachable to ask. What I have are the real titles people chose when they wrote about the pain, which define the dream by its negative:

- "Ask HN: Anyone have stock option horror stories?" ([HN 30706743](https://news.ycombinator.com/item?id=30706743)) `[verbatim-title]`
- "Ask HN: What should I do if I miss my 83(b)?" ([HN 31181973](https://news.ycombinator.com/item?id=31181973)) `[verbatim-title]`
- "Ask HN: Stripe Atlas messed up my 83B election what do I do? [fixed]" ([HN 40825802](https://news.ycombinator.com/item?id=40825802)) `[verbatim-title]`
- "Fuck Your 90 Day Exercise Window (2016)" ([HN 19130383](https://news.ycombinator.com/item?id=19130383)) `[verbatim-title]`
- "What steps should I now take, if I didn't file an 83(b) election in time?" ([Quora](https://www.quora.com/What-steps-should-I-now-take-if-I-didnt-file-an-83-b-election-in-time)) `[verbatim-title]`

**Dream outcome, my paraphrase, marked inferred:** *"I want to never be the guy in that thread. I want to know, without asking anyone and without paying anyone, that there is no date on my own equity that is about to cost me money while I'm not looking."* `[inferred from the titles above — not a quote]`

**How the product maximises it:** it is the only artefact that holds all of a person's grants, across all employers, for the whole multi-year life of the exposure, and is still there after the Carta login dies. Its output is a one-page register the user owns. The dream is *custody of your own dates*, and the product is literally that and nothing more.

### Perceived likelihood of achievement — what makes them believe it

Belief here is not built by claims, because we are forbidden from making any. It is built by three mechanics:
1. **The citation sits next to the date.** Every computed window displays its source — IRC §83(b)(2) / Treas. Reg. §1.83-2(b); IRC §7503; IRC §1202(a); IRC §422(a)(1); Treas. Reg. §1.422-1(a)(1)(i)(B) — with a tappable URL. The user can check us. Products that invite checking are believed.
2. **The dates on screen are the user's own.** No import, no inference, no account. Everything is a number they just typed off a page in front of them. There is no step where they must trust our data about their life.
3. **The uncurability is itself the proof.** "The IRS has no discretion to extend the time period for filing" ([gust](https://gust.com/?p=7)); the Tax Court "has rejected every late-filing argument it has heard, including illness, attorney errors, and certified-mail problems" ([promise.legal](https://blog.promise.legal/startup-central/83b-election-founders-guide/)) `[snippet-only]`. Stating the statute plainly, with no promise attached, is more persuasive than any claim we are allowed to make — and it is the only kind of persuasion this niche permits.

Supporting data the user recognises as true from their own life: "96% of all option agreements on Carta have PTE periods of 90 days or less" ([Carta](https://carta.com/blog/pte-vesting/)); "the statutory three-month window can be longer (e.g. 91 or 92 days) than the 90 days allowed by your stock plan" ([launchrock](https://www.launchrock.com/library/expert-advice/post-termination-exercise-window)) `[snippet-only]`.

### Time delay — how fast the first value lands

**Target: the day-30 date on screen within 20 seconds of first launch. Hard ceiling 60 seconds** (rubric tie-breaker (a): the aha must be deliverable free in a browser in under 60 seconds).

Mechanic: the first screen is **one field** — the date on the user's grant or transfer document — and one tap. No account, no sign-up, no grant type, no share count, no dollars. Result card: the dated day-30 deadline, the countdown in days, the §7503 postmark note, the citation. Everything else in the product is entered later. The same single-field calculator is the free web page used for acquisition, so the aha is identical before and after download.

### Effort and sacrifice — what we remove, what we still require

**Removed:** the spreadsheet and its silent formula errors; six per-employer portals that die at termination; remembering which of six intervals applies to which grant; deciding whether day 30 lands on a Saturday; keeping a QSBS block list by hand across a convertible-note conversion; having to pay $5,000/year for a calendar.

**Still required, stated honestly:** the user must open their own grant agreement and stock plan and type roughly four to six dates per grant, and must type the PTE window length their plan states. **There is no import.** No brokerage, no Carta, no backend (studio constraint §3), so nothing is auto-populated, ever. For someone with five grants across three employers this is a genuine 20–40 minute sit-down with a folder of PDFs (estimate: 6 fields × 5 grants at ~1 min/field plus document hunting). That is the real cost of the product and the single most likely reason a paying user never finishes onboarding.

**How we minimise it:** (a) standard templates pre-fill the common case (4-year monthly vest, 1-year cliff, 90-day PTE) as editable defaults; (b) **the core value requires no money fields at all** — no share count, no strike, no FMV, no 409A. Dates only. This halves the data-entry burden *and* keeps us on the factual side of §1's line. That convergence — the safest product is also the fastest to fill in — is the best structural news in this report.

---

## 3. Starving crowd test

| Test | Score | Evidence | Honest counter |
|---|:---:|---|---|
| **Massive pain** | **5 / 5** | Illustrative missed-83(b) scenario: ~$17,500 with the election vs ~$743,750 without, a ~$726,250 delta ([promise.legal](https://blog.promise.legal/startup-central/83b-election-founders-guide/), their arithmetic, one scenario) `[snippet-only]`. Independently "roughly $1.6 million in tax owed in cash across four years, on stock that cannot be sold" ([every.io](https://www.every.io/blog-post/missing-this-filing-can-cost-you-your-seed-round)) `[snippet-only]`; "six or seven figures of unanticipated tax exposure at exit" ([terms.law](https://terms.law/insights/section-83b-election-when-founder-forgets.html)) `[snippet-only]`. QSBS: forfeiting a $10M exclusion at 23.8% ≈ **$2,380,000** (estimate: 10,000,000 × 0.238); selling at year 4 instead of 5 on a $15M post-OBBBA block forfeits 25% of the exclusion ≈ **$892,500** (estimate: 15,000,000 × 0.25 × 0.238). PTE: the entire spread, forfeited — no representative figure sourced, and I will not invent one. | The pain is real and the dollar figures are sourced, but the *probability* per person per year is unknown and probably low. A 1-in-50 chance of a $700k loss is rationally worth far more than $99 — and is nonetheless the hardest thing on earth to sell. |
| **Purchasing power** | **4 / 5** | Only people with meaningful equity face these numbers — the cost figures are themselves the wealth screen. Secfi charges a retainer "starting at $1,250" per quarter with no asset minimum ([Secfi](https://secfi.com/help/advice-wealth/am-i-a-good-fit-to-work-with-secfi-for-financial-advisory-services)) `[snippet-only]`, so a market exists at ~40–50× our price. Compound requires a $25,000 account minimum ([wiki.private.law](https://wiki.private.law/en/compound-planning)) `[snippet-only, secondary]`. | **The asset at risk is illiquid.** Paper equity is not spendable, and the modal early employee is cash-poor relative to exposure. I obtained **no income statistic** for this population and will not estimate one. Score 4 on exposure, not on bank balance. |
| **Easy to target** | **2 / 5 — FAILS the studio's hard requirement as currently evidenced** | HN guidelines permit limited self-promotion: "It's ok to post your own stuff part of the time, but the primary use of the site should be for curiosity" ([HN guidelines](https://news.ycombinator.com/newsguidelines.html)) `[snippet-only]`, and this exact topic has succeeded there before — "Show HN: Managed 83(b) Elections from Clerky (YC S11)" ([HN 32899749](https://news.ycombinator.com/item?id=32899749)) `[verbatim-title]`. Bogleheads carries real QSBS threads ([t=279701](https://www.bogleheads.org/forum/viewtopic.php?t=279701), [t=300839](https://www.bogleheads.org/forum/viewtopic.php?t=300839), [t=329905](https://www.bogleheads.org/forum/viewtopic.php?t=329905)) `[snippet-only]`. Elpha carries at least one real 83(b) post `[search-snippet]`. | **Reddit is unavailable by any route** — proxy-blocked and rejected by our search user agent — so r/startups, r/stockoptions, r/fatFIRE, r/cscareerquestions cannot be sized or rule-checked, now or in this environment, ever. Blind unreachable. Show HN is **one event, not a channel**. Every SERP I ran returned 9/9 vendor or law-firm pages, so SEO is saturated. **There is no community I can point at and say: we are allowed to post there, repeatedly, to reach this person.** The honest channel is referrers (§11), which is slow and B2B2C. |
| **Growing** | **3 / 5** | Real, citable tailwind: OBBBA raised the per-taxpayer QSBS cap from $10M to $15M and the aggregate-gross-asset ceiling from $50M to $75M, and added 50% / 75% exclusion tiers at 3 and 4 years for stock acquired after 4 July 2025 ([Spencer Fane](https://www.spencerfane.com/insight/the-one-big-beautiful-bill-act-significantly-expands-qualified-small-business-stock-benefits/), [Weaver](https://weaver.com/?p=20979)) `[snippet-only]`. More companies qualify and each block now carries three tracked dates instead of one. | **I never obtained a count of US startup employees holding equity, in either pass, and will not estimate one.** Growth of the *rule surface* is evidenced; growth of the *population* is not. Also: the same legislative volatility that helped us in 2025 can hurt us — QSBS repeal has been floated before ([HN 28532944](https://news.ycombinator.com/item?id=28532944)) `[verbatim-title]`. |

**Starving-crowd verdict: 3.5 / 5 overall, dragged down by targeting.** This is a crowd that is genuinely starving and genuinely hard to find standing anywhere we are welcome. Per studio rules reachability is a hard requirement, and on today's evidence it is **not met** — which is why Experiment 3 (§7) is a channel test with a kill threshold, not an assumption.

---

## 4. Grand Slam Offer

### (a) Every problem, in the customer's words — with honest marking

**The raw research found no verbatim customer quotes. This pass found real thread titles and search-index comment fragments, but read no page.** Every line below is marked. Nothing marked `[inferred]` should be read to the founder as something a customer said.

| # | Problem | Marking | Source |
|---|---|---|---|
| 1 | "What should I do if I miss my 83(b)?" | `[verbatim-title]` | [HN 31181973](https://news.ycombinator.com/item?id=31181973) |
| 2 | "Stripe Atlas messed up my 83B election what do I do?" | `[verbatim-title]` | [HN 40825802](https://news.ycombinator.com/item?id=40825802) |
| 3 | "What steps should I now take, if I didn't file an 83(b) election in time?" | `[verbatim-title]` | [Quora](https://www.quora.com/What-steps-should-I-now-take-if-I-didnt-file-an-83-b-election-in-time) |
| 4 | "I filed an election to section 83(b) in time and today called the IRS to verify they received it, but told me they don't see it." | `[verbatim-title]` | [Quora](https://www.quora.com/I-filed-an-election-to-section-83-b-in-time-and-today-called-the-IRS-to-verify-they-received-it-but-told-me-they-dont-see-it-What-can-I-do) |
| 5 | Filed on time "but the IRS is saying there is no record of it now" | `[search-snippet]` | [Elpha](https://elpha.com/posts/sznc6umy/immigrant-founders-83-b-without-itin-or-ssn) |
| 6 | "Fuck Your 90 Day Exercise Window" | `[verbatim-title]` | [HN 19130383](https://news.ycombinator.com/item?id=19130383) |
| 7 | "Anyone have stock option horror stories?" | `[verbatim-title]` | [HN 30706743](https://news.ycombinator.com/item?id=30706743) |
| 8 | "in most cases there is a very short (30 days is common, sometimes up to 90 days depending upon the options contract) window to exercise after leaving, or you lose them" | `[search-snippet]` — fragment quoted by the index from an HN comment; page not read | [HN 30706743](https://news.ycombinator.com/item?id=30706743) |
| 9 | Startups "require employees to sign documentation by which they agree that they lose even their vested options" | `[search-snippet]` | [HN comment](https://news.ycombinator.com/item?id=9254299) |
| 10 | "the 90 day time period is a typical clause in your options agreement. It is not universal." | `[search-snippet]` | [HN comment](https://news.ycombinator.com/item?id=31761506) |
| 11 | Exercised only what the letter said had vested; the rest "expired 90 days after April 16th 1996" | `[search-snippet]` | [HN 49872723](https://news.ycombinator.com/item?id=49872723) |
| 12 | "Both the 50 M$ valuation rule and the 5 year clock start time apply when the stock is exercised" — a person reasoning aloud, uncertainly, about when their own QSBS clock began | `[search-snippet]` | [Bogleheads t=279701](https://www.bogleheads.org/forum/viewtopic.php?t=279701) |
| 13 | "if the company becomes marketable quickly, some holders are likely to sell at least some shares before meeting the holding period" | `[search-snippet]` | [Bogleheads t=300839](https://www.bogleheads.org/forum/viewtopic.php?t=300839) |
| 14 | "many ISO holders exercise in October-December thinking they have until next year's filing to plan, then discover in April that they owe massive AMT they can't fund" — practitioner describing the pattern, not a customer | `[snippet-only, practitioner]` | [launchrock](https://www.launchrock.com/library/expert-advice/iso-amt-implications) |
| 15 | "the 90-day post-departure window often forces exercises in distressed circumstances that compound the AMT problem" | `[snippet-only, practitioner]` | [launchrock](https://www.launchrock.com/library/expert-advice/post-termination-exercise-window) |
| 16 | I do not know which of my share blocks is which, or when each clock started | `[inferred]` from #12 and from Stripe's instruction to "Mark the exact date when the stock was acquired" | [Stripe](https://stripe.com/us/resources/more/what-is-the-qsbs-holding-period) |
| 17 | I lost access to my equity portal when I left and no longer know my own dates | `[inferred]` — follows directly from Carta/Pulley being issuer-instanced; no customer statement obtained | — |
| 18 | My plan says 90 days but someone told me the statute says three months and I don't know which applies to me | `[inferred]` from the practitioner note that the two clocks differ in length | [launchrock](https://www.launchrock.com/library/expert-advice/post-termination-exercise-window) |
| 19 | I have four employers' worth of grants in a spreadsheet I no longer trust | `[inferred]` — no source. This is the central product premise and **it is unevidenced.** |

**Read line 19 carefully.** The premise on which the paid product rests is the only line on this list with no source at all.

### (b) A solution for each

| Problem | Solution (all on the factual side of §1) |
|---|---|
| 1–5 (83(b) window, and proof of filing) | Single-field day-30 engine with §7503 next-business-day handling; escalating local notifications at day 1/7/14/21/25/28; a **filing-evidence record** — fields for mail date, certified-mail tracking number and a photo of the receipt, stored on device and printed into the register. This directly answers #4 and #5: the postmark is the evidence, and nothing today holds it for the user. |
| 6, 8, 9, 10, 11 (PTE) | PTE card driven by **the window length the user types from their own plan**, never a default; termination date entered by the user; notifications at window−30/14/7/3/1. |
| 18 (two clocks) | Side-by-side card: "Window your plan states (you entered): [date]" and "Three months from the termination date you entered: [date]", each labelled with its source, **no statement about which governs**, and a prompt to ask the user's own advisor. |
| 12, 13, 16 (QSBS blocks) | Per-block record: acquisition date, optional conversion date for convertible instruments, "block I have marked as a QSBS candidate" flag. Engine emits the 3-year / 4-year / 5-year dates for blocks the user marks as acquired after 4 July 2025 and the 5-year date for earlier blocks. Notifications at each tier −90/−30/−7. |
| 14, 15 (AMT year boundary) | Calendar-year view of **exercises the user recorded**, with the 31 December line drawn. **No dollars, no AMT estimate, and the view is never labelled "AMT year"** — see R11 in §9 for why even the year attribution can be wrong. |
| Disqualifying disposition | Later-of card: 2 years from the grant date entered, 1 year from the exercise date entered. |
| 17 (lost portal access) | "Before you lose access" checklist of the exact date fields to copy out of an equity portal while still employed; plus the PDF/.ics register the user keeps forever. |
| 19 (untrusted spreadsheet) | One cross-employer timeline, on device, no account, with a home-screen status line in the Airworthy register: "All grant dates recorded" / "2 windows close within 30 days". |

### (c) Trim and stack

**Trimmed out** (each because it crosses §1's line, needs a backend, or cannot be built in a week): AMT dollar estimate; any tax figure; QSBS eligibility checking; scenario modeling; Carta/brokerage/Gmail import; accounts and cross-device sync; 409A refresh tracking; Rule 144; §1045 rollover; disability and insolvency exceptions; state conformity; ESPP; 10b5-1; multi-user or advisor-client views; share/strike/FMV as required fields.

**The stacked offer**

> **Grant Clock** — the five-year date register for founders and early employees with startup equity.
>
> Type the dates off your own grant and plan documents, once. Grant Clock computes every statutory window attached to them — the 83(b) 30-day filing window with the next-business-day postmark rule, each share block's QSBS 3-, 4- and 5-year dates, your plan's post-termination exercise window beside the statutory three-month interval, the later-of disqualifying-disposition date, and where your recorded exercises fall against the 31 December calendar line — and tells your phone when each one is coming. Every date shows the statute it came from. Every date is one you entered. Export a one-page register for your accountant and a calendar file for yourself.
>
> No account. No company portal. Nothing leaves your phone. Still yours after you leave the job.
>
> Grant Clock does not determine tax treatment or eligibility, does not estimate tax, and is not tax or legal advice.

### (d) M-A-G-I-C name

| | Candidate | M (magnetic why) | A (avatar) | G (goal) | I (interval) | C (container) | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | **Day Thirty** — the 83(b) window register | Very strong: names the fatal day | Weak | Narrow | 30 days | Register | **Reject.** Anchors the whole brand on the one feature §1 demotes, and "Day Thirty" reads as a promise about a single deadline we do not control. |
| 2 | **Grant Windows** — your equity dates, from your own documents | Moderate | Good | Good | Absent | App | **Reject.** Accurate and safe, but "Windows" collides with Microsoft in App Store search and the name carries no interval, so it reads as a vesting tracker — the thing Vestyx already is. |
| 3 | **Grant Clock** — the five-year date register for founders and early employees with startup equity | Strong: a clock is already running, and it is theirs | Explicit | Explicit | **Five-year** — matches QSBS, the actual subscription driver | Date register | **PICK** |

**Chosen: Grant Clock.** App Store name "Grant Clock"; subtitle "Equity date register".

**Naming and string safety note (binding).** The name must not imply tax advice, IRS affiliation, or a guaranteed outcome. "Grant Clock" implies none: a clock reports time, and the grant is the user's. Explicitly rejected and never to be used in name, subtitle, keywords, screenshots, headlines or push copy:
- **Advice-implying:** anything containing *Tax*, *Advisor*, *Planner*, *Optimize*, *Strategy*, *Election Helper*.
- **Affiliation-implying:** anything containing *IRS*, *83(b) Official*, *Federal*, *Filing Service*, or the IRS eagle/seal in any asset.
- **Outcome-guaranteeing:** *Never Miss*, *Protect*, *Safe*, *Secure*, *Guaranteed*, *Save $X*, *Don't Lose Your Equity*, *Compliance*.
- **Verdict-issuing** (the Airworthy test): "Are you QSBS-eligible?" → **"All grant dates recorded"**. "Are you safe to sell?" → **"Block 3: five-year date 2 March 2028"**. "Your 83(b) is filed" → **"Filing evidence recorded: certified mail 7 Nov 2026"**.
- Every screen carries: *"Dates and windows are those you entered from your own grant and plan documents. Grant Clock does not determine tax treatment or eligibility and is not tax or legal advice."*

### (e) Price, anchored — and then stress-tested

**The anchor, arithmetic shown**

| Anchor | Figure | Source / arithmetic |
|---|---|---|
| Missed 83(b), illustrative scenario | **~$726,250** | $743,750 − $17,500 ([promise.legal](https://blog.promise.legal/startup-central/83b-election-founders-guide/), their arithmetic, one illustrative scenario) `[snippet-only]` |
| Missed 83(b), independent source | **~$1,600,000** | "roughly $1.6 million in tax owed in cash across four years" ([every.io](https://www.every.io/blog-post/missing-this-filing-can-cost-you-your-seed-round)) `[snippet-only]` |
| QSBS, legacy $10M cap forfeited | **$2,380,000** | 10,000,000 × 0.238 **(estimate, my arithmetic)** |
| QSBS, post-OBBBA $15M cap forfeited | **$3,570,000** | 15,000,000 × 0.238 **(estimate, my arithmetic)** |
| QSBS, **smallest** plausible single slip: selling at year 4 instead of year 5 | **$892,500** | 15,000,000 × 0.25 (the 75%→100% tier step) × 0.238 **(estimate, my arithmetic)**; tiers per [Spencer Fane](https://www.spencerfane.com/insight/the-one-big-beautiful-bill-act-significantly-expands-qualified-small-business-stock-benefits/) `[snippet-only]` |

**Price: $99.00 / year, or $12.99 / month.**

Arithmetic against the **smallest** anchor: $99 ÷ $892,500 = **0.011%** (estimate). Against the sourced 83(b) scenario: $99 ÷ $726,250 = **0.014%** (estimate). Annual vs monthly: $12.99 × 12 = $155.88, so annual saves **$56.88, or 36.5%** (estimate).

**Why annual is the push, on the merits and not just on cash flow:** the product's job is a five-year clock. QSBS tiers land at 3, 4 and 5 years; a PTE window can open seven years after a grant. A monthly plan is a structural mismatch with the obligation — a user who lapses in month 7 of a 60-month hold has bought nothing. The annual term is the honest term, and that argument is also the sales argument.

**Now the sanity check, which matters more than the anchor.**

A huge anchor does not prove a buyer, and in this niche I think the anchor is close to inert. Three reasons:
1. **The loss is probabilistic and the premium is certain.** Every insurance-shaped utility app makes the 0.01%-of-loss argument. This audience is numerate enough to notice that the expected value depends on a probability nobody has quantified — including me.
2. **The exposure is illiquid.** You cannot pay $99 out of unvested paper.
3. **The observable market price in this exact category is zero.** Vestyx ships unlimited grants, unlimited employers, all grant types and vest-day notifications **for free** ([App Store id6766111969](https://apps.apple.com/us/app/vestyx/id6766111969)) `[snippet-only]`, and Carta sends employees cliff and quarterly emails at no charge to them `[snippet-only]`.

**What this audience plausibly pays:** $20–60/year for a single-purpose iOS utility `(estimate — reasoned from the free-with-IAP positioning of the one directly comparable app and the absence of any paid comparable; I have no price-point evidence for this audience and could not obtain any)`.

**Can $99 and $20–60 be reconciled honestly? Only in one direction, and it is not the comfortable one.** We cannot talk a $40 buyer into $99 with a $892,500 anchor; that attempt is exactly the sales motion this niche's advice line forbids and this audience's temperament punishes. But we also cannot run the business at $40, because §3 and §11 show no free repeatable channel: at $40/year, any paid acquisition at a plausible iOS CAC consumes more than the first-year revenue, and the referral channel is too slow to compensate. **So $99 is not a greedy price, it is a necessary one — and that makes "will they pay $99?" the same question as "is this a business?"** Hence: test $99 specifically, first, before anything is built. If $99 fails and $49 passes, that is not a pivot to $49 — it is a park, and §7's experiment table pre-commits to saying so.

### (f) Guarantee — honest, Apple-compatible, no tax outcome

Apple issues refunds; we do not. Pre-launch deposits are Stripe on the web and are credited with App Store offer codes, never an automatic unlock (CLAUDE.md §5). Exact wording:

> **Our promise, and its limits.**
>
> **What we promise.** If within 14 days Grant Clock has not put every date from your own grant and plan documents on one screen, request a refund from Apple through Report a Problem in your purchase history, then send us the request ID at [support address]. We will tell you what we are changing and why. Refunds for App Store subscriptions are issued by Apple under Apple's policy; we do not process payments and cannot issue a refund ourselves.
>
> **What we also promise, and can keep ourselves.** If a notification you set on a window you recorded does not fire, send us the grant you recorded it against. We will find the defect, fix it, tell you what it was, and give you a free year. That is a promise about our software, and we control it.
>
> **What we cannot promise, and will not.** We cannot guarantee any tax result, filing outcome, eligibility determination or financial outcome. Grant Clock computes dates from the dates you enter and from publicly published statute, nothing more. It does not determine whether an election is valid, whether stock is qualified, or what you should do. For any of that, talk to a CPA or tax attorney.

Pre-launch deposit wording: *"Your $20 deposit is refundable in full, by email, for any reason, until launch. At launch we send you an App Store offer code worth $20 off the first year. A web payment cannot unlock an App Store subscription automatically — the code is how we credit you."*

### (g) Scarcity and urgency — real only

**Genuine urgency we may use, with its honest limit:**
- **The 30-day 83(b) window is real, uncurable urgency** — "the IRS has no discretion to extend the time period for filing" ([gust](https://gust.com/?p=7)) `[snippet-only]` — **but only for a person who has just received a grant.** At any moment that is a thin, scattered slice of the audience and, per §1 reservation 1, mostly already reminded by their issuer. We may state the 30-day fact everywhere as a fact. We may **not** stage it as urgency for a general visitor; doing so is both false and the beginning of the outcome-promise problem.
- **QSBS tier boundaries (3, 4, 5 years) and the 31 December calendar line are calendar-real and recur annually.** December is a genuine season: "many ISO holders exercise in October-December" ([launchrock](https://www.launchrock.com/library/expert-advice/iso-amt-implications)) `[snippet-only]`. A November–December push is honest seasonality, not manufactured scarcity.
- **The day a user leaves a job is genuine urgency** — portal access ends and a short window opens.

**Genuine scarcity we may offer:** concierge capacity. One founder can hand-read, extract and verify roughly **ten** document sets per week (estimate: ~45 min each including the 15-minute interview, ≈ 7.5 hours). "Ten registers this week" is a true constraint and the only scarcity we are entitled to.

**Forbidden:** countdown timers unattached to a real date; "price rising soon" without a committed, published date; limited-licence claims; implying a general visitor's own window is closing.

### (h) Bonuses — each kills one named objection

| Bonus | Objection it kills |
|---|---|
| **1. The Accountant's One-Page Register** — PDF of every grant, every entered date, every computed window with its citation, plus the filing-evidence record | *"My accountant already handles this."* They handle the return; nobody holds the calendar. Now you hand them one page instead of a folder — and it makes the referral channel in §11 work. |
| **2. Plan-vs-Statute Card** — your plan's window and the three-month statutory interval side by side, each with its source | *"It's just 90 days, everybody knows that."* The two clocks differ in length and the plan controls the contract ([launchrock](https://www.launchrock.com/library/expert-advice/post-termination-exercise-window)) `[snippet-only]`. |
| **3. Before You Lose Access** — the checklist of exact date fields to copy out of an equity portal while still employed | *"Carta already shows me my dates."* It does, until your last day. |
| **4. The Six Intervals Reference Sheet** — every encoded rule with its IRC/regulation cite, URL and date of last review | *"How do I know your dates are right?"* You can check every one, and see when we last checked. |
| **5. Convertible-Instrument Block Walkthrough** — how to record a SAFE or note conversion as the block's start date | *"My situation is unusual, your app won't fit."* Per Stripe, the clock starts at conversion, not at the instrument ([Stripe](https://stripe.com/us/resources/more/what-is-the-qsbs-holding-period)) `[snippet-only]`. |
| **6. Certified-Mail Evidence Record** — mail date, tracking number, receipt photo, printed into the register | *"I already filed, so I don't need this."* Real people filed and the IRS had no record `[search-snippet, Elpha / Quora]`. The postmark is the proof and nothing currently holds it. |

Every bonus is a date, a document, a citation or a checklist. No bonus states a dollar, an eligibility or a recommendation.

---

## 5. Lean Startup hypotheses

**Value hypothesis.** US founders and early employees who hold equity at two or more companies will pay **$99/year** for a private, on-device, cross-employer register that computes every statutory window from dates they type off their own documents — because no issuer platform follows them after termination, their CPA does not own the calendar, and the advisory tier that would starts around $5,000/year ([Secfi](https://secfi.com/help/advice-wealth/am-i-a-good-fit-to-work-with-secfi-for-financial-advisory-services)) `[snippet-only]`.
*Falsifiable form:* of qualified visitors who reach the deposit page, **≥5%** put down a refundable $20 deposit against $99/year.

**Growth hypothesis, with the engine named.** The engine is **sticky** (Ries), with a referral assist — and I want to be blunt that this is the weakest part of the plan.
- *Why not viral:* the product is single-user, on-device, has no accounts and nothing to share. Its only shareable artefact is the accountant's register, which travels to a professional, not a peer. Viral coefficient ≈ 0.
- *Why not paid:* no verified CAC, a price band ($99) too thin to absorb iOS acquisition costs at scale, and a long sales logic ("insurance on an event you think won't happen to you").
- *Why sticky:* the obligation is multi-year by construction. A QSBS block entered today emits notifications in years 3, 4 and 5; a PTE window can open years after a grant. Retention is the engine, and the renewal reason is structural rather than habitual — which is good, because daily engagement is not available to us (nobody opens a date register weekly).
- *The assist:* CPAs and startup lawyers as referrers (§11). Each has many equity-holding clients and a professional interest in clients who do not bring them missed dates.
- **The honest flaw in this engine: a sticky engine still needs an acquisition source, and we do not have a verified one.** Stickiness compounds retention, not arrival. That is reachability reasserting itself as a growth problem.

**The single riskiest assumption.** I was asked whether it is willingness to pay or reachability, and I argued it rather than accepting the framing.

Four candidates: (1) the pain is real — **not risky**; it is the best-evidenced thing in this report. (2) We can build it in a week — **not risky**; the data model and engines are trivial and need no backend. (3) Reachability — **very risky**: no community we are allowed to post in, Reddit permanently unavailable, SEO saturated, referral channel untested. (4) Willingness to pay $99 — **very risky**: zero evidence, a free direct competitor, and a cash-poor-but-paper-rich buyer.

Reachability is *upstream* — if we cannot reach them, WTP is unmeasurable. But WTP is **cheaper and faster to falsify** on a small borrowed sample (one Show HN, fifty hand-sent emails, a handful of concierge buyers), whereas reachability at the scale of 100 paying users cannot be tested cheaply at all. Lean logic says test the assumption that is riskiest *per dollar and per day*, and that is WTP. There is also an asymmetry that settles it: if WTP fails, the niche dies regardless of channel, and we have spent $350. If reachability fails but WTP is strong, the niche survives in a worse form (referral-led, slower, maybe B2B2C through CPAs) and is still worth 8 weeks.

> **Riskiest assumption:** *that anyone will pay real money — specifically $99/year — for date tracking on equity they already hold, when the headline event is already reminded for free by their issuer and a free iOS competitor already tracks their grants.*
> **Second riskiest, tested immediately after:** *that a two-person studio can repeatably reach this audience without paid ads.*

---

## 6. MVP — the smallest test of the riskiest assumption, before any app

**No Swift is written.** Two artefacts and about ten days of founder time.

### Part A — Concierge: "Grant Clock, done by hand." Ten slots. $49 one-time.

Exactly what the founder does, by hand:

1. **Build the rule sheet first** (half a day). One page, the eleven rules in §9, each with its citation and a worked example. Hand-check each one twice. This sheet is also the engine's future test-vector source, so the work is not thrown away.
2. **Offer it by hand** — no landing page needed for Part A: fifty personal emails to startup CPAs and lawyers (§11), one Show HN once Part B is live, and direct messages anywhere the rules permit. The offer: *"Send me your grant and stock-plan documents, redacted however you like. I will hand-build you a one-page register of every statutory date window on them, with the statute cited next to each date, plus a calendar file. $49. Ten this week."*
3. **Receive documents by email.** Store each buyer's files in a separate folder. Redaction is the buyer's choice; the founder asks for dates and plan language, not dollar amounts, and says so — which is also the first live test of whether "dates only, no money" reads as reassuring or as inadequate.
4. **Extract by hand** into a spreadsheet: grant date, transfer date, grant type, vest start, cliff, plan PTE window length, termination date if any, exercise dates, per-block acquisition and conversion dates, QSBS-candidate flags as the buyer states them.
5. **Compute by hand** using the rule sheet: day-30 date with the §7503 adjustment and a federal-holiday check; each block's 3/4/5-year dates; plan PTE window end and the three-month interval, side by side; later-of disqualifying-disposition date; calendar-year grouping of exercises.
6. **Produce two files:** a one-page PDF register (the deliverable, in the exact layout v1 will export) and a `.ics` with every window as an all-day event with a 30-day and 7-day alarm. Both carry the §4d disclaimer verbatim.
7. **Interview the buyer for 15 minutes, every time**, with the same four questions: *What did you believe you already had covering these dates? Where did you expect to find this? What did you pay for the last tool you bought for your own money? What would you pay per year for this to keep running by itself?* Record answers verbatim. **This interview is the real deliverable of the MVP** — it is the customer voice the entire project is missing.
8. **Track:** how many of the ten slots sell, at what effort, how long each register takes, how many buyers' follow-up questions are about **dates** versus about **dollars or decisions** (the §12 leading indicator for advice-line creep).

### Part B — Landing page + refundable deposit

- One page. Headline is a fact, not a promise: *"Every statutory date window on your own equity documents, on one screen."*
- **The aha, free, in the browser, no signup:** one field (the date on your grant or transfer document) → the day-30 date, the countdown, the §7503 note and the IRC citation. Then a second reveal: the other five windows this product tracks, as empty dated slots. **Target under 20 seconds, ceiling 60** (rubric tie-breaker (a)).
- Below it: the stacked offer (§4c), the guarantee (§4f), the six bonuses (§4h), and the price — **$99/year** shown as the primary, $12.99/month secondary.
- **The test:** a **$20 refundable deposit** via Stripe against the first year, refundable in full by email until launch, credited at launch with an App Store offer code (CLAUDE.md §5 — never an automatic unlock).
- Price ladder runs as a split only **after** the $99 cell has enough traffic to read: $99 vs $149 first (is it price-insensitive dread?), then $49 only if $99 fails, as a kill-confirmation rather than a pivot.
- Instrument: visitors, aha completions, deposit-page views, deposits, refund requests.

**Why a deposit rather than an email list:** an email address tests curiosity; $20 tests the riskiest assumption. Given reservation 2, curiosity is not in doubt and money is.

---

## 7. Experiments — with pre-committed thresholds and actions

Thresholds are committed **now**, before any data exists. Experiment 0 is first because it is the cheapest and fastest way to kill the niche outright.

| # | Experiment | What it tests | **Pass** | **Fail** | Cost | Days | Pre-committed action |
|---|---|---|---|---|---|---|---|
| **0** | **Vestyx teardown.** Install Vestyx (App Store id6766111969) and any adjacent iOS equity tracker. Document: its paywall and price; whether it tracks the **83(b) 30-day window, QSBS 3/4/5-year per-block dates, PTE windows, disqualifying-disposition dates**; whether it notifies on any of those; its review count and rating. | Studio hard gate: *is this already nailed?* And the §1 reservation-2 ambiguity: is the category unmonetisable, or merely unserved on the statutory-window axis? | Vestyx tracks **none or at most one** of the four statutory windows, **or** has <50 ratings | Vestyx tracks **three or more** of the four statutory windows with notifications **and** has >500 ratings | **$10** | **1** | **Pass → run E1.** **Fail → drop the niche today**, per CLAUDE.md §1 ("if a well-funded competitor already nails the problem, say so and drop it") and rubric hard gate 6. Ambiguous middle (two windows, or 50–500 ratings) → run E1 but cut the strength-of-bet by 2 and plan a sharper differentiator. |
| **1** | **Deposit test at $99.** Part B page live; traffic from E3's channel attempts. Qualified visitor = completed the free aha calculator. | **The riskiest assumption:** will anyone pay $99/yr? | **≥5%** of qualified visitors deposit $20, with **≥12 deposits absolute** | **<2%**, or **<5 deposits** after 400 qualified visitors | **$120** (domain, Stripe fees, page hosting) | **10** | **Pass → build v1** (§8) and run E4 in parallel. **Fail → park the niche**, write the post-mortem, do not build. **2–5% or 5–11 deposits → run the $149 cell and the $49 cell for 7 more days; if $49 passes where $99 failed, park anyway** (see §4e: $49 is not a business without a channel). |
| **2** | **Concierge sale.** Part A: ten hand-built registers at $49. | Whether the *deliverable* is wanted once it exists, and what buyers say — the missing customer voice | **≥5 of 10** slots sell within 14 days, **and ≥8 of 10** interviews name a date problem (not a dollar problem) as the reason they bought | **≤2** slots sell, **or ≥5 of 10** buyers' follow-up questions are dollar/decision questions | **$60** (postage, PDF tooling, time) | **14** | **Pass → the register artefact is validated; make it the v1 export and the CPA handout.** **Fail on slots → park.** **Fail on question mix → the product the market wants is on the wrong side of the advice line; park the niche and say so explicitly** (this is the §12 killer 3 outcome). |
| **3** | **Channel test.** Fifty hand-written emails to named startup CPAs and startup lawyers offering the register as a free, co-branded client handout; one Show HN of the free calculator; rules check and genuine participation on Bogleheads and Elpha. | **Reachability — the studio's hard requirement** | **≥8 replies** and **≥3 firms agreeing** to hand the register to clients; **and** the Show HN reaches HN's front page or ≥50 points | **≤2 replies, 0 agreements**, and the Show HN is flagged or stalls under 10 points | **$40** (email tooling) | **12** | **Pass → referral-led go-to-market; write the referrer playbook.** **Fail → park the niche even if E1 passed.** A paying audience we cannot repeatably reach is not a business for a two-person studio, and reachability is a hard gate. |
| **4** | **Rule verification.** Paid review of the eleven rules in §9 by one CPA **and** one tax attorney, in writing, with sign-off per rule. | Whether we can meet the standard of care a six-figure error demands | **≤1 correction** across eleven rules, and both reviewers sign the 83(b) + QSBS date rules | **≥3 corrections**, or either reviewer declines to sign the QSBS tier dates | **$900–$2,500** (estimate: 3–6 hours across two professionals at published startup-advisor rates; **I obtained no rate quote and this figure is unsourced**) | **14** | **Pass → ship.** **Fail → re-scope to only the rules that got signed; if the 83(b) or the QSBS 5-year date cannot be signed, do not ship the engine.** Gating: **no App Store submission without both written sign-offs.** |
| **5** | **Onboarding completion.** Instrument v1: % of installers who save a first grant; % who save a second; median time to the day-30 card. | Whether the 20–40 minute data-entry cost (§2) silently kills it | **≥60%** save a first grant; **≥30%** save a second; median time-to-aha **≤30s** | **<35%** save a first grant, or median time-to-aha **>90s** | **$0** | 21 after launch | **Pass → push on the paywall placement.** **Fail → the effort term dominates; strip onboarding to the single field and defer everything else, or park.** |
| **6** | **Renewal proxy.** Month-4 subscription retention and notification-tap rate. | Whether the sticky engine is real | **≥70%** month-4 retention | **<45%** | $0 | 120 after launch | **Pass → scale the referral channel.** **Fail → the multi-year thesis is wrong and there is no engine; park.** |

**Dated kill criterion.** If E0 fails, the niche is dropped on **day 1**. If E1 and E3 have not both passed by **day 30 from the start of E1**, the niche is parked and the studio moves to niche 2 (Canadian snowbirds, 29/35) without further spend. Total spend to a go/no-go, excluding E4: **~$230** (estimate: $10 + $120 + $60 + $40).

---

## 8. v1 feature spec — 8 features, ~1 week, studio constraints

SwiftUI, iOS 17+, SwiftData, StoreKit 2, local notifications, on-device PDF. No backend, no accounts, no brokerage or Carta integration. **Every feature below sits on the factual side of the line in §1.**

### Data model
```
Grant      { type, grantDate, transferDate?, vestStart?, cliffMonths?, scheduleMonths?,
             planPTEWindowDays?, terminationDate?, employerLabel,
             shares?, strike?        // optional, never used in any computation or output
             filingMailedDate?, filingTrackingNumber?, filingReceiptImage? }
ShareBlock { grantRef, acquiredDate, convertedDate?, qsbsCandidateFlagSetByUser: Bool }
Event      { grantRef, kind: .exercised | .terminated | .sold, date }
```
No money field is ever read by an engine or printed in an output. That is a hard invariant, enforced in tests.

### The eight features

1. **Grant record, dates-only.** Create/edit grants across unlimited employers. Grant type (RSA / ISO / NSO / RSU / profits interest) reveals only the relevant date fields. Share count and strike are optional and clearly marked "for your reference only — not used in any calculation".
2. **83(b) 30-day window engine.** Day-30 date from the transfer date the user entered, with the IRC §7503 next-business-day postmark adjustment and a bundled US federal-holiday table (see R2 in §9 — the table is a per-year maintenance item). Countdown. Local notifications on days 1, 7, 14, 21, 25 and 28 — deliberately aggressive, because the window is uncurable.
3. **Filing-evidence record.** Mail date, certified-mail tracking number, photo of the receipt, stored on device and printed into the register. Answers the real, sourced failure mode where the filing was made and the IRS has no record `[search-snippet, Elpha / Quora]`. **Shows no status verdict** — it records what the user recorded: "Filing evidence recorded: certified mail, 7 Nov 2026."
4. **Per-block QSBS date engine.** Per `ShareBlock`: clock starts the day after the acquisition date entered, or on the conversion date for blocks the user marks as converted from a convertible instrument. Emits the **3-year, 4-year and 5-year dates** for blocks the user marks as acquired after 4 July 2025, and the **5-year date** for earlier blocks. Notifications at each tier −90 / −30 / −7 days. Label on every row: *"Block you have marked as a QSBS candidate. Grant Clock does not determine whether any stock is qualified."*
5. **PTE side-by-side card.** Two dates, labelled by source: *"Window your plan states (you entered N days): [date]"* and *"Three months from the termination date you entered: [date]"*. No statement about which governs; a standing prompt to confirm with the user's own advisor. Notifications at −30 / −14 / −7 / −3 / −1 against whichever date the user chooses to be reminded on.
6. **Disqualifying-disposition date card.** Later of (2 years from the grant date entered) and (1 year from the exercise date entered), per IRC §422(a)(1). Notifications at −90 / −30 / −7.
7. **Cross-employer timeline + register status line.** One chronological view of every window across every employer. Home screen string in the Airworthy register: **"All grant dates recorded"** or **"2 windows close within 30 days"**. Plus a **calendar-year view** of exercises the user recorded, with the 31 December line drawn — titled *"Exercises you recorded, by calendar year"*, never "AMT year", and showing no dollars (see R11).
8. **Export: PDF register + `.ics`.** One-page PDF of every grant, every entered date, every computed window with its statutory citation and the date the rule was last reviewed, plus the filing-evidence record and the full disclaimer. `.ics` with each window as an all-day event. On-device generation, share sheet out.

### The aha moment — named and timed

**"Day 30 on screen."** First launch opens on a single field with no chrome: *"Date on your grant or transfer document."* One tap. The user sees the dated day-30 deadline, the days remaining, the §7503 postmark note and the IRC §83(b)(2) / Treas. Reg. §1.83-2(b) citation. **Target ≤20 seconds, hard ceiling 60.** Identical to the free web calculator, so the aha is the same before and after install.

### Onboarding, screen by screen

| # | Screen | Content | Exit |
|---|---|---|---|
| 1 | **One field** | "Date on your grant or transfer document" + "Where do I find this?" hint. Nothing else on screen. | Tap → screen 2 |
| 2 | **The aha** | Day-30 date, countdown, §7503 note, citation, and the line *"This is computed from the date you entered."* | "Add the rest of this grant" / "Just remind me about this date" |
| 3 | **Grant type** | RSA / ISO / NSO / RSU / profits interest. One tap. Reveals only that type's date fields. | → 4 |
| 4 | **The remaining dates** | Vest start, cliff, schedule, plan PTE window in days, termination date if any — standard templates pre-filled (4-year monthly, 1-year cliff, 90-day PTE) and all editable. Share/strike shown last, marked optional and non-computing. | → 5 |
| 5 | **Share blocks** (skippable) | Acquisition date per block; "converted from a SAFE or note?" toggle revealing a conversion-date field; "mark as a QSBS candidate" with the non-determination label. | → 6 |
| 6 | **Notifications** | Explicit opt-in, showing the exact list of dates that will fire and when. Local only; nothing leaves the device. | → 7 |
| 7 | **Disclaimer** | Full text of the §4d disclaimer, one acknowledging tap, re-readable from Settings forever. | → Home |

### Where the paywall sits

**After the aha, and after the first grant is fully usable.** Free forever: **one grant**, all of its computed windows, and **all of its notifications**. Paid ($99/yr or $12.99/mo, StoreKit 2): the **second and subsequent grants**, **share-block / QSBS tracking**, the **cross-employer timeline**, and **PDF/`.ics` export**.

Rationale: the thesis is that the *cross-employer, multi-year portfolio* is the paid object (§1, §5). Charging for notifications on the single grant someone came in with would be both cynical and off-thesis; charging for the portfolio is the thesis stated as a price. The paywall is therefore triggered by "Add second grant", "Add share block" or "Export" — never by a notification.

### Deferred from v1 (and why)

Any dollar figure, AMT estimate, withholding analysis, scenario modeling, QSBS eligibility checking, "should I exercise" anything, dollar-ranked windows *(all: wrong side of §1's line — permanently deferred, not merely postponed)*. Carta/brokerage/email import, accounts, iCloud sync, multi-device *(no backend, CLAUDE.md §3)*. 409A refresh cadence, Rule 144 holding periods, §1045 rollover, holding-period tacking through reorganisations, §22(e)(3) disability extension, insolvency exception, state conformity, ESPP, 10b5-1, advisor/client views *(unresearched or facts-and-circumstances; see §9 and §13)*.

---

## 9. The rules the engine must encode

**Standard of care.** Getting one of these intervals wrong costs the user **six figures** — see §4e: the smallest anchor in this niche is ~$892,500 (estimate). That is categorically different from a normal reminder app, and it imposes three obligations: (1) every rule carries its citation in-app, with the date it was last reviewed; (2) every rule has test vectors in `engine/test-vectors.json` and both the JS module and the Swift port pass 100% (CLAUDE.md §6); (3) **no App Store submission until a CPA and a tax attorney have signed off in writing, per rule** (Experiment 4).

**Provenance warning.** `irs.gov` was unreachable in the scout pass. In this pass an `irs.gov` PDF URL surfaced in search and the Form 15620 instruction language was quoted by the search index, but **I did not fetch the page**. **Nothing below is `[verified]`. Every single rule requires professional confirmation before launch.**

| ID | Rule the engine encodes | Statutory source | URL | Verification |
|---|---|---|---|---|
| **R1** | An 83(b) election must be filed no later than **30 days after the date the property was transferred**. | IRC §83(b)(2); Treas. Reg. §1.83-2(b); Form 15620 instructions | [irs.gov/pub/irs-pdf/f15620.pdf](https://irs.gov/pub/irs-pdf/f15620.pdf); [Cozen](https://www.cozen.com/news-resources/publications/2024/irs-creates-standardized-section-83-b-election-form-15620); [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2024/12/alerts-practices-erisa-a-new-form-section-83b-election) | `[snippet-only]` |
| **R2** | If day 30 falls on a Saturday, Sunday or legal holiday, the election is timely **if postmarked by the next succeeding day that is not** a Saturday, Sunday or legal holiday. | IRC §7503, as quoted in the Form 15620 instructions | [irs.gov/pub/irs-pdf/f15620.pdf](https://irs.gov/pub/irs-pdf/f15620.pdf) | `[snippet-only]`; **the federal-holiday table itself is `[unverified]`** and is a per-year maintenance item |
| **R3** | There is **no extension and no discretionary cure** for a late election. | Practitioner characterisation of IRC §83(b) and Tax Court practice | [gust](https://gust.com/?p=7); [promise.legal](https://blog.promise.legal/startup-central/83b-election-founders-guide/); [terms.law](https://terms.law/insights/section-83b-election-when-founder-forgets.html) | `[snippet-only, secondary]` — used only as **copy**, never as a computed output |
| **R4** | QSBS holding period is **five years, starting the day after the stock is acquired**. | IRC §1202(a) | [Stripe](https://stripe.com/us/resources/more/what-is-the-qsbs-holding-period) | `[snippet-only, secondary]` |
| **R5** | For stock acquired **after 4 July 2025**, tiered exclusion dates exist at **3, 4 and 5 years** (50% / 75% / 100%); legacy stock keeps the single 5-year date. The engine uses **only the tier dates**, never the percentages, the $15M cap or the $75M asset ceiling. | IRC §1202(a)(5) as amended by OBBBA (subsection label reported by secondary sources, not read) | [Spencer Fane](https://www.spencerfane.com/insight/the-one-big-beautiful-bill-act-significantly-expands-qualified-small-business-stock-benefits/); [Weaver](https://weaver.com/?p=20979); [Withum](https://www.withum.com/?p=132287) | `[snippet-only]`. **Conflict:** sources disagree on whether indexing starts in 2027 or after 2026. Irrelevant to us because we encode no dollars — a deliberate scope narrowing that removes most of this rule's risk. **"Acquired" vs "issued" on the 4 July 2025 line is unresolved and MUST be confirmed.** |
| **R6** | For a convertible instrument, the clock starts **on conversion into stock**, not on the instrument. | IRC §1202 holding-period rules | [Stripe](https://stripe.com/us/resources/more/what-is-the-qsbs-holding-period) | `[snippet-only, secondary]` |
| **R7** | ISO status requires the holder to have been an employee **at all times from the grant date until the day three months before exercise**. | Treas. Reg. §1.422-1(a)(1)(i)(B), implementing IRC §422(a)(2) | [federal-regs.com/title/26/part-1/1.422-1](https://www.federal-regs.com/title/26/part-1/1.422-1/); [mystockoptions](https://www.mystockoptions.com/content/company-allows-exercise-isos-more-than-90-days-after-leave-job-what-is-tax-treatment-at-exercise) | `[snippet-only]`. The search source explicitly cautioned: *"the search results did not include the statutory text of 422(a)(2) itself… Check 26 U.S.C. §422(a) directly before relying on the subsection labels."* |
| **R8** | Disability (IRC §22(e)(3)) substitutes **one year** for three months; a separate insolvency exception exists. | Treas. Reg. §1.422-1 | [federal-regs.com](https://www.federal-regs.com/title/26/part-1/1.422-1/) | `[snippet-only]` → **NOT ENCODED.** Facts-and-circumstances. The user may type a different window length; the app never infers one. |
| **R9** | A disqualifying disposition occurs if the share is disposed of before the **later of** two years from grant and one year from transfer to the individual. | IRC §422(a)(1) | [federal-regs.com](https://www.federal-regs.com/title/26/part-1/1.422-1/); [mystockoptions](https://www.mystockoptions.com/content/what-is-an-incentive-stock-option) | `[snippet-only]` |
| **R10** | The **plan document controls** the contractual post-termination window, and its stated length may differ from the statutory interval — a "90 day" plan window vs a statutory three months that may run 91 or 92 days. | Plan documents; practitioner note | [launchrock](https://www.launchrock.com/library/expert-advice/post-termination-exercise-window) | `[snippet-only, secondary]`. Engine takes a **user-entered** value with **no default**, and displays both dates without ranking them. |
| **R11** | IRC §56(b)(3) disapplies §421 to ISO exercise, so §83 timing governs for AMT purposes — meaning that for **substantially nonvested** stock the inclusion follows vesting, not exercise. | IRC §56(b)(3); IRC §83 | [IRS written advice PDF](https://www.eitc.irs.gov/pub/irs-wd/0338010.pdf); [Wood LLP](https://woodllp.com/Publications/Articles/ma/100201a.htm) | `[snippet-only]`. **Consequence for the product: even the calendar-year attribution of an exercise can be wrong.** Therefore the year view is titled *"Exercises you recorded, by calendar year"*, computes no dollars, and makes no statement about which year anything is taxed in. Two sources I found **directly conflict** on the general rule here. |
| **R12** | Context only, not a rule: "96% of all option agreements on Carta have PTE periods of 90 days or less." | Carta marketing content | [Carta](https://carta.com/blog/pte-vesting/) | `[snippet-only]` — a vendor statistic. **Never shown as a default or a rule.** |

### Every rule a CPA or tax attorney must confirm before launch

**All of R1–R11.** There is no subset we can ship unreviewed. Specifically, the reviewer must answer, in writing:

1. **R1** — exact trigger: is it transfer, grant, or the purchase-agreement date, and in which fact patterns does each apply? *(The app will never infer this; the answer determines the onboarding help text.)*
2. **R2** — the §7503 interaction, **and the open conflict about electronic filing**: the scout found sources saying the IRS launched an online 83(b) filing route in 2025 ([Baker Donelson](https://www.bakerdonelson.com/irs-streamlines-83b-election-process-with-new-online-filing-option); [KPMG](https://kpmg.com/kpmg-us/content/dam/kpmg/taxnewsflash/pdf/2025/06/061625-S83b-CAB.pdf)) `[snippet-only]`, while a source in this pass states that filing "currently must be mailed" `[snippet-only]`. **These are in direct conflict and it changes what "timely" means.** Must be resolved first.
3. **R2** — the federal-holiday table, and how it is maintained year to year.
4. **R4** — is "the day after acquisition" correct, and what is the acquisition date for an early exercise, an RSA purchase, and an option exercise?
5. **R5** — the tier dates, the effective-date line, and **"acquired" vs "issued"** on 4 July 2025.
6. **R6** — conversion-date start for SAFEs and convertible notes.
7. **R7** — the correct statutory subsection and whether "three months" means three calendar months or 90 days, which is the exact divergence the product displays.
8. **R9** — the later-of construction and what "transfer to the individual" means for an early exercise.
9. **R10** — whether displaying both dates side by side without ranking them is defensible, and the exact wording of the label.
10. **R11** — whether the year view, as titled and scoped, makes any implicit tax statement.
11. **Review of every user-facing string** against the Airworthy standard, by the attorney, not just the rules.

**Gating rule:** if either reviewer declines to sign **R1, R2, R4 or R9**, the engine does not ship. A wrong interval here is a six-figure loss to a real person, and no subscription revenue justifies shipping an unsigned one.

---

## 10. Competitor table — adversarial

| Competitor | Price | Platform | Strength (stated at its strongest) | **Specific weakness** | Source |
|---|---|---|---|---|---|
| **Carta** | Issuer-paid. Launch tier reported **free** up to 25 stakeholders / $1M raised by one aggregator and **denied** by another; top tier reportedly raised to $12K/month in Feb 2026 | Web + mobile | **Already does our headline.** Auto-generates the 83(b) form, gives filing instructions, and emails founders "issuance date and days left to file"; admins see per-employee filing status and send reminders; employees get cliff and quarterly equity emails. Enormous distribution: every company on Carta. | **The employee is not the customer and loses access on departure** — exactly when PTE bites. Single-issuer instance: no cross-employer view, no per-block QSBS clock, no plan-vs-statute comparison, no record the person owns. | [releasenotes](https://releasenotes.carta.com/83b-election-for-founders-1A0Q8w); [blog](https://www3.carta.com/blog/founders-83b); [employee emails](https://support.europe.carta.com/hc/en-gb/articles/10821829226129-Employee-Equity-Emails); [frontdeskreview](https://frontdeskreview.com/software/cap-table-management/carta/) vs [costbench](https://costbench.com/software/equity-management/carta/free-plan/); [price change](https://costbench.com/changelog/carta-price-increase-2026-02/) |
| **Clerky** | 83(b) forms + instructions **included** in any vesting-stock product; "Managed 83(b)" add-on at a per-filing fee, **amount not public**. Third-party package listings: $299 / $427 / $819, conflicting and possibly stale | Web | **The strongest 83(b) player, and free at the point of need** for anyone incorporating through it. Pre-filled forms, instructions, reminders. Has already launched this exact thing on HN successfully. | Only serves its own incorporation customers; one-shot at formation; no QSBS, PTE, disqualifying-disposition or multi-year tracking; nothing follows the person. | [Clerky blog](https://www.clerky.com/blog/managed-83b-elections); [help](https://help.clerky.com/article/2934-83b-election-add-on-cost); [Show HN 32899749](https://news.ycombinator.com/item?id=32899749); [flowjam](https://www.flowjam.com/blog/clerky-review-2026-complete-guide-pricing-alternatives); [toolradar](https://toolradar.com/tools/clerky/pricing) |
| **Pulley** | Startup **$1,200/yr** flat (25 stakeholders); Growth $3,500/yr. Two aggregators report ~$100/mo and ~$292/mo instead — likely errors | Web | Cheaper cap-table alternative to Carta for small issuers | Issuer-paid, same structural ceiling as Carta. No employee-side cross-employer register. | [Software Advice](https://www.softwareadvice.com/product/211396-pulley/); [Capterra](https://www.capterra.com/p/219303/Pulley/pricing/); [PricingSaaS](https://pricingsaas.com/companies/pulley) |
| **Cake Equity** | Issuer-paid, price not obtained | Web | Markets 83(b) reminders explicitly | Issuer-side; the reminder is reportedly limited to the early-exercise flow. | [Cake FAQ](https://www.cakeequity.com/guides/faq-83b-election-reminder-equity); [help](https://help.cakeequity.com/article/how-to-handle-83b-elections) |
| **Eqvista** | Issuer-paid | Web | 83(b) status tracking and shareholder reminders | Gated to 409A account holders; issuer-side. | [Eqvista](https://eqvista.com/support/status-tracking-reminders-for-83b-election/) |
| **Secfi** | Retainer **"starting at $1,250"** per quarter, no asset minimum (~$5,000/yr, estimate); separately a **$7,200** minimum annual fee listed elsewhere — **sources conflict** | Web + advisors | Deep ISO/AMT expertise, free calculators as lead magnets, exercise financing | It is advice, at ~40–50× our price, and it **qualifies our ICP out**. Not a date register, and the free calculators are one-shot with no record and no notifications. | [Secfi help](https://secfi.com/help/advice-wealth/am-i-a-good-fit-to-work-with-secfi-for-financial-advisory-services); [TrueAdvisor](https://www.trueadvisor.com/firm/306961) |
| **Compound Planning** | **$25,000 account minimum**; 0.2–2.0%/yr AUM (Form CRS dated 26 Mar 2026) | Web + advisors | "Equity specific alerts, scenario modeling, and an advisor who can help execute decisions" — the closest thing to our feature set, wrapped in a human | AUM gate excludes our ICP entirely. Monetises the balance, not the reminder. | [wiki.private.law](https://wiki.private.law/en/compound-planning); [Sacra](https://sacra.com/research/jordan-gonen-compound-wealth-management/) |
| **Valur** | Not obtained | Web | QSBS-focused; described as expanding "QSBS to employees, angels, CFOs" | Fee/structure business on large balances; evidence is an **AI-generated secondary summary** and weak. | [Sacra](https://sacra.com/chat/h/b68a27c8-8753-4c96-a25b-926e7b5608c8/) `[secondary, AI-generated]` |
| **⚠ Vestyx — RSU & Equity Tracker** | **Free with IAP**; Pro price not obtained | **iOS** | **The direct indie competitor the scout could not check.** Unlimited grants **and employers**; RSU/ISO/NSO/ESPP/RSA/PSU/SAR; full vesting calendar with vest-day notifications; on-device data; widgets; Apple Watch. Pro: withholding gap, scenario modeling, **AMT calculator**, year-end tax letter PDF. | Tracks **value and vesting**, and I found **no evidence it tracks any statutory window** — no 83(b) 30-day, no per-block QSBS, no PTE, no disqualifying disposition. Its paid features are precisely the ones our constraints forbid, which is a liability surface we decline. **No review rating and no significant traction** on its listing. Developer: Mobile Innovations LLC. | [App Store id6766111969](https://apps.apple.com/us/app/vestyx/id6766111969); [hunted.space](https://hunted.space/product/vestyx-rsu-equity-tracker) `[snippet-only — apps.apple.com unfetchable]` |
| **Optio Incentives** | Not obtained | iOS | Vesting schedules, holdings, potential value; purchase-intent submission | Tied to the employer's equity programme — issuer-side again. | [mwm.ai listing](https://mwm.ai/apps/optio-incentives/6736460402) |
| **Free calculators** | $0 | Web | ustax.tools 83(b) calculator; a QSBS gain-exclusion calculator; endless law-firm checklists | One-shot, no record, no notifications, no portfolio, nothing to hand an accountant. | [ustax.tools](https://ustax.tools/83b-election-calculator/); [nationaltaxtools](https://nationaltaxtools.com/calculators/qsbs-gain-exclusion-calculator/) |

### Does a well-funded player already nail this?

**Split answer, and the split is the whole recommendation.**

- **For the single most valuable moment — the 83(b) 30-day window — yes.** Carta emails founders the issuance date and days remaining; Clerky ships pre-filled forms with reminders free inside any vesting-stock product; Cake markets reminders; Eqvista tracks status. For anyone whose company uses one of these, the most expensive mistake in the niche is **already covered, free, at the exact moment of need, by the party with the strongest incentive and the only reliable channel.** We cannot win there and should stop trying.
- **For the cross-employer, person-owned, multi-year statutory-window register — no.** No well-funded player ships it, and the gap is structural rather than accidental: issuer-paid platforms cannot follow a person across employers (their customer is the company), and advisory firms with $5,000-a-year retainers and $25,000 account minimums do not want a $99 customer. That is the best kind of gap.
- **But the gap is not empty.** **Vestyx** is sitting in it on iOS, free, with unlimited grants and employers — and, on the evidence I have, pointed at the wrong axis (value and vesting, not statutory forfeiture windows) with no visible traction. **It is not well-funded, so studio rule §1.18 does not fire.** It is, however, the single fastest way this niche dies, which is why it is **Experiment 0** with an explicit drop threshold.

**Recommendation per studio rules: do NOT drop the niche — but drop 83(b) as the business's centre of gravity, and resolve Vestyx on day one before spending anything else.**

---

## 11. Channels to the first 100 paying users

**Honest framing first.** I could not verify a single community where we are clearly permitted to promote repeatedly to this audience. Reddit is unavailable by any route in this environment, so r/startups, r/stockoptions, r/cscareerquestions and r/fatFIRE **cannot be sized or rule-checked, now or later from here** — any plan depending on them is unplannable, and I will not pretend otherwise. **The honest primary channel is startup accountants and startup lawyers as referrers, not a community.** That is a slower, B2B2C motion, and it is what §7's Experiment 3 tests with a kill threshold.

| Order | Channel | URL | Self-promotion rule | Gatekeeper | Approach |
|:---:|---|---|---|---|---|
| **1** | **Startup CPAs and startup-law firms as referrers** — the honest primary channel | [AICPA Find-a-CPA](https://www.aicpa.org/) as a name source; published startup-CPA lists, e.g. [eqvista's list](https://eqvista.com/top-cpa-firms-startups/) (**marketing content — use only to harvest firm names, never as a statistic**) | Direct professional outreach; no community rules apply | The partner or the firm's marketing lead | Hand-write 50 emails. The offer is **not** "sell my app" — it is: *"Here is a one-page date register your equity clients can fill in themselves and hand you at year end. Free, co-brandable with your logo. May I send you five?"* The CPA's own pain is clients who arrive with a date already missed. Measure replies and agreements (E3). **Honest downside: the referrer's incentive is to sell their own service, and a free handout converting to a $99 subscription is entirely unproven.** |
| **2** | **Hacker News — one Show HN of the free calculator** | [guidelines](https://news.ycombinator.com/newsguidelines.html); [Show HN](https://news.ycombinator.com/showhn.html) `[unverified — page not fetched]` | "It's ok to post your own stuff part of the time, but the primary use of the site should be for curiosity." No soliciting upvotes. Show HN is for "something you've made that other people can play with." `[snippet-only]` | Moderators (notably 'dang') and the front-page ranking algorithm | Post the **free single-field calculator**, not the app — it is genuinely playable, needs no signup, and delivers the aha in 20 seconds. Precedent that this exact topic works here: "Show HN: Managed 83(b) Elections from Clerky (YC S11)" ([32899749](https://news.ycombinator.com/item?id=32899749)). Answer every comment personally; expect and welcome tax-accuracy challenges — they are the real audience test. **This is one event, not a channel.** |
| **3** | **Bogleheads** | [bogleheads.org/forum](https://www.bogleheads.org/forum/) — live QSBS threads: [t=279701](https://www.bogleheads.org/forum/viewtopic.php?t=279701), [t=300839](https://www.bogleheads.org/forum/viewtopic.php?t=300839), [t=329905](https://www.bogleheads.org/forum/viewtopic.php?t=329905) | **`[unverified]` — I did not read the forum rules.** Assume promotion is restricted and participation is expected first. | Forum moderators | The only forum where I could actually see real people reasoning, uncertainly, about **their own QSBS clock start dates** `[search-snippet]`. Read the rules first; participate genuinely for weeks answering date questions with citations; mention the tool only if the rules permit and only when asked. Slow, low-volume, high-credibility. |
| **4** | **Elpha** | [elpha.com](https://elpha.com/) — a real 83(b) post: [sznc6umy](https://elpha.com/posts/sznc6umy/immigrant-founders-83-b-without-itin-or-ssn) | **`[unverified]`** | Community team | Small, women-founder community with a confirmed real post on exactly our pain. Participate; do not broadcast. |
| **5** | **SEO on the exact statutory date queries** | n/a | n/a | Google | The queries are real and high-intent ("83(b) 30 day deadline", "QSBS five year date", "post-termination exercise window"). **But every one of the 16 SERPs I ran this session returned 9/9 vendor or law-firm results** — the space is saturated by Carta, Stripe, Secfi, and dozens of firms publishing for lead-gen. Realistic as a 6–12 month compounding asset built on the free calculator; **not** a path to the first 100 users. |
| **6** | **Accelerator and alumni networks** | YC Bookface (closed), Techstars alumni Slacks, [Founders Network](https://foundersnetwork.com/) | Closed or member-gated; `[unverified]` | Programme staff; alumni admins | Real concentration of the ICP, no access without membership. Only viable if the founder already holds it. Note honestly. |
| **7** | **Reddit / Blind** | r/startups, r/stockoptions, r/fatFIRE; [teamblind.com](https://www.teamblind.com/) | **`[unverified]` and unverifiable from here.** | — | **Do not plan on these.** If the founder has personal standing in any of them, that is an asset I cannot evaluate; it must be assessed by them, not by this report. |

**Realistic arithmetic to 100 paying users (estimate, all figures mine):** 3 referring firms × 5 referred clients/month × 6 months = 90 referred people; at a 30% conversion to paid = **27 customers**. One Show HN front page ≈ 3,000–8,000 visitors `(estimate, unsourced)`; at 20% aha completion and 2% deposit conversion = **12–32 customers**. SEO contributes near zero in the first six months. **Total: roughly 40–60, not 100.** On today's evidence, reaching 100 paying users inside six months is **not demonstrated**, and that is the honest answer to the channel question.

---

## 12. Honest downsides — the three most likely killers

### Killer 1 — There is no payer (highest probability)

A large, numerate, cash-constrained audience that already receives the one reminder it fears most for free from its issuer, and already has a free iOS app tracking its grants. The $892,500 anchor is rationally overwhelming and commercially inert, because the loss is probabilistic, the asset is illiquid, and the comparable price is zero.

**Leading indicators, earliest first:** (a) Experiment 0 shows Vestyx already has a paywall and no ratings — a product in this exact slot that nobody pays for; (b) deposit conversion <2% of qualified visitors in E1; (c) concierge sells ≤2 of 10 slots at $49 in E2; (d) in interviews, buyers say "I thought Carta did this."

### Killer 2 — There is no channel

Reachability is a hard studio requirement and is the weakest term in the whole analysis. Reddit is permanently unavailable; HN gives one shot; SEO is saturated 9/9 by vendors and law firms; the referral channel is slow, two-sided and depends on professionals whose incentive is to sell their own service. A two-person studio cannot buy its way out at a $99 price point.

**Leading indicators:** ≤2 replies and 0 referral agreements from 50 hand-written emails (E3); the Show HN flagged or stalled under 10 points; cost per deposit above $35 on any paid test.

### Killer 3 — Advice-line creep, or retention collapse without it

Every buyer's second question will be "so should I exercise?" or "what will I owe?" The features that answer are on the wrong side of §1's line, and the one directly comparable app monetises precisely those. We will face a standing choice between crossing the line and shipping a product whose entire job is finished the week the user types their dates in. A date register with no decisions in it may simply have nothing to retain on — and a sticky engine with nothing to be sticky about is not an engine.

**Leading indicators:** ≥50% of concierge buyers' follow-up questions are dollar or decision questions rather than date questions (E2's second threshold); week-4 app-open rate <20%; month-4 retention <45% (E6); or — the tell to watch for in ourselves — any internal proposal to "just add a rough AMT estimate."

### Honourable mention — a wrong rule

Eleven rules, zero verified against a primary source, `irs.gov` unreachable across two research passes, one **direct unresolved conflict** about whether 83(b) electronic filing is live, and a six-figure cost to the user for a single off-by-one. This is a liability and reputation killer rather than a demand killer, and it is fully mitigable by Experiment 4 — but only if Experiment 4 is treated as a gate and not as a formality. **Leading indicator:** the paid review returns ≥3 corrections across eleven rules.

---

## 13. What is still unverified, ranked

| # | Gap | Why it matters | Why it is still open |
|:---:|---|---|---|
| **1** | **The customer's voice on paying.** Zero statements from any person about paying for this. | It is the riskiest assumption (§5) and the thing the whole bet rests on. | `reddit.com` blocked at the proxy **and** rejected by our search user agent; `teamblind.com`, `news.ycombinator.com`, `apps.apple.com`, `hn.algolia.com` all `ENOTFOUND` on WebFetch; `curl` → `CONNECT tunnel failed, 403`. **This pass did upgrade the evidence that the pain is real** (real HN/Quora/Bogleheads/Elpha titles and index-quoted comment fragments, §4a) **but obtained nothing at all about money.** Only Experiment 2's interviews can close this. |
| **2** | **Vestyx: paywall, price, exact feature set, traction.** | Decides studio hard gate 6 and the entire competitive premise. | `apps.apple.com` unfetchable. **Must be closed by installing it — Experiment 0, day 1, $10.** |
| **3** | **Whether IRS electronic 83(b) filing is live, and how it affects timeliness.** | Direct source conflict: scout found 2025 online-filing announcements; this pass found "currently must be mailed." Changes the meaning of R2, the notification cadence, and the filing-evidence feature. | `irs.gov` unreachable in both passes. |
| **4** | **QSBS / OBBBA specifics:** "acquired" vs "issued" on the 4 July 2025 line; indexing start year (2027 vs after 2026). | The acquired/issued question decides which date the engine uses for the tier dates. Indexing is irrelevant to us because we encode no dollars. | Statute not read; law-firm alerts only, and two of them conflict on indexing. |
| **5** | **IRC §422(a)(2) statutory text and subsection label.** | R7 is encoded from the implementing regulation via a search snippet, with the source itself warning us to check the statute. | `law.cornell.edu` DNS-blocked in the scout pass; no primary source reachable. |
| **6** | **Federal legal-holiday table, per year, for the §7503 adjustment.** | An off-by-one on day 30 is the exact six-figure failure the product exists to prevent. | No authoritative source fetched. Needs an annual maintenance process, not just a one-off check. |
| **7** | **Carta's employee-side pricing and Launch free-tier limits.** | Determines how much of our audience already has a free partial substitute. | Two aggregators **directly contradict** each other; Carta's own pricing page reportedly returns 403 to crawlers. |
| **8** | **Clerky's Managed 83(b) per-filing fee.** | The closest thing to a real price point for solving the 83(b) moment. | Not public; third-party package figures conflict and may be stale. |
| **9** | **Secfi's actual pricing.** | Our anchor for "what the tier above costs." | $1,250/quarter (own site) vs $7,200 minimum annual (third-party listing) — unresolved. |
| **10** | **Reddit, Blind and Bogleheads community sizes and self-promotion rules.** | Reachability is a hard gate and this is most of the channel question. | Unreachable or unread. **Unverifiable from this environment at all.** |
| **11** | **Count of US startup employees holding equity.** | Market size. | Never obtained in either pass. **I will not estimate it.** |
| **12** | **Whether anyone actually hands the one-page register to their accountant.** | The premise of bonus 1 and of the entire referral channel. | Purely behavioural; only Experiment 2 can answer it. |
| **13** | **Line 19 of §4a** — "I have four employers' worth of grants in a spreadsheet I no longer trust." | It is the premise of the **paid** product (the cross-employer portfolio). | **No source whatsoever.** The single most load-bearing unevidenced claim in this document. |

---

## 14. Verdict

**PURSUE — conditionally, through a paid gate. Strength of bet: 6 / 10.**

What earns the 6: the pain is the best-evidenced and largest in its cluster ($726k sourced, ~$892k smallest estimated slip); the legal surface is the cleanest of the four niches because every input is a date on a document the user holds; the one-week build is comfortable rather than tight; the OBBBA QSBS tiers genuinely tripled the number of dates per block in our favour; no well-funded player serves the cross-employer, person-owned case, and the reason is structural rather than accidental.

What caps it at 6 and no higher: the most expensive mistake is already reminded for free by the party with the only reliable channel (Carta, Clerky); the audience's paper exposure is six figures and its cash is not; a free iOS app already occupies this slot with unlimited grants and employers and apparently no traction; the advice line strips out exactly the features that would justify the price, so the product must be sold on dread; and **there is no community I can name that we are allowed to post in repeatedly** — on today's evidence the honest route to 100 paying users gets to roughly 40–60 in six months, not 100.

**The condition, stated as a commitment:** no Swift until Experiment 0 clears on day 1 ($10) and Experiment 1 clears within 10 days (~$120). Total exposure to a go/no-go is about **$230**. If the $99 deposit test fails, **park the niche and move to niche 2 (Canadian snowbirds, 29/35)** — do not rescue it at $49, because §4e shows $49 is not a business without a channel.

**And do not green-light the 8-week build on this document.** The scout said it would not ship #5 without real customer voice. This pass found real voices describing the pain and **not one** describing a willingness to pay. That gap is now the entire bet, and Experiment 2's ten hand-built registers and ten interviews are the cheapest way to close it.
