# Gate B1 RE-GATE — plant hire off-hire, tested against the subcontractor-owner buyer

**VERDICT: MARGINAL (not revived to PASS, not re-killed).**

**One-sentence reason:** the previous scout's two hardest kills — gate 9 (employer pays) and gate 5
(multi-party workflow) — **do not stand** against a subcontractor owner, but gate 3 (mechanic) is
**not cleared**, because YardLink already ships a free, cross-supplier live hire report plus
one-click and *scheduled* off-hire "from any project and any supplier", and I could not find a
single verbatim complaint from a real subcontractor owner anywhere reachable from this environment.

**Revised score: 3.05 / 5** (previous scout: 2.35). **Strength of bet: 4 / 10.**

**What decides it is demand-side evidence I cannot get by desk research.** Reddit refuses our user
agent, Trustpilot is behind an AWS WAF challenge, and Facebook trade groups are unreachable. Spend
the founder's one promised introduction on this question before anyone writes Swift.

---

## Scores (frozen rubric weights, unchanged)

| Criterion | Weight | Prev | Now | Why |
| --- | --- | --- | --- | --- |
| Pain £ | 20% | 3 | 3 | `(estimate)` £1.2k–£1.5k for a realistic forgotten set; no sourced real-world figure exists |
| Audience wealth | 10% | 1 | **3** | Buyer is now the owner of a small firm, which the rubric scores exactly 3 |
| Competitive weakness | 15% | 1 | **2** | YardLink is free and on-mechanic; Re-flow is £39/seat; single-hirer portals cover their own kit |
| **Counter-incentive** | **20%** | 3 | **4** | A vendor selling to hire desks states in writing that depots are "in no hurry to fix this" |
| v1 buildability | 10% | 2 | **3** | ~1 week technically, but **no rule set at all** — pure user-entered data, heavy re-keying |
| Reachability | 10% | 4 | **3** | Owners are one hop; no dense channel I could *verify* (Reddit/Trustpilot/Facebook all blocked) |
| Founder contact proximity | 10% | 2 | **3** | Capped at 3 by the frozen inputs; the introduction is a promise, due 2026-10-31 |
| Willingness to pay | 5% | 2 | **3** | Sole traders are asked £29/mo for trade CRM; no evidence they pay for hire tracking specifically |

Weighted: 0.60 + 0.30 + 0.30 + 0.80 + 0.30 + 0.30 + 0.30 + 0.15 = **3.05**

---

## 1. Is the multi-hirer premise true?

**Verdict: structurally supported, not directly evidenced. I found no survey, no trade-body figure
and no subcontractor saying it in their own words.** Treat it as a live assumption, not a fact.

### Evidence FOR the premise

**The subcontract itself pushes plant onto the subbie.** JLA Subcontractor Terms cl 2.3.1,
`[verified-fetch]` https://jla.com/wp-content/uploads/2023/02/230227JLASub-ContractorTsCsFINAL.pdf
> "provide all labour and plant required to carry out and complete the Sub-Contract Works including
> but not limited to all tools, plant and equipment, unless otherwise expressly stated in the
> Purchase Order or agreed between the parties in writing."

So the founder's "most plant is hired, not owned" point lands on the right party: by default the
subcontractor sources it, which means the subcontractor holds the hire accounts. Caveat: JLA is a
commercial-services contractor, not a construction tier-1, and allocation varies by subcontract —
a Contracts Finder schedule had the main contractor providing "general attendance, plant, hoists and
welfare" `[snippet]`, and a Grenfell Inquiry exhibit showed cranes/hoists/forklifts normally
supplied by the subcontractor `[snippet]`. **The split is contract-specific.**

**The hire market is genuinely fragmented by category, not just by firm.** YardLink's own product
taxonomy, `[verified-fetch]` https://yardlink.com/how-it-works, splits hire into Plant, Powered
Access, Tools, Site Welfare, Power & Lighting and Waste Disposal — six categories that in practice
sit with different specialists. YardLink claims "Over 2,400 Depots, And 1,000 Suppliers Across The
UK" `[verified-fetch]` (vendor claim).

**Even maximum buying power does not consolidate to one.** Balfour Beatty named **four** exclusive
UK suppliers of plant and tools — A-Plant, Speedy Hire, Nationwide Platforms and Vp `[snippet]`
theconstructionindex.co.uk (undated article). The Environment Agency framework ran to **five**
suppliers, each with an equipment category `[snippet]` ukconstructionmedia.co.uk. If a tier-1 needs
four to five, a subbie is unlikely to need one.

**A platform selling against the problem describes it as the normal state.**
`[verified-fetch]` https://yardlink.com/the-platform
> "It's hard to be efficient when you're sourcing equipment through multiple suppliers and various
> accounts."
> "…reclaim the time you spend phoning different rental companies to off-hire your equipment."

`[verified-fetch]` https://yardlink.com/
> "Gone are the days of requesting a live hire report from each supplier."

That is vendor copy, so it is an interested party's description — but it is the clearest statement I
found that "phoning different rental companies" is the baseline behaviour.

### Evidence AGAINST the premise — reported because it is adverse

A guide written for exactly our ICP advises opening **one** account, singular:
`[verified-fetch]` https://www.trade2base.com/blog/trade-business-plant-hire-uk (vendor blog,
14 Jun 2026)
> "A trade hire account with a national supplier (HSS, Speedy, Brandon, GAP, Hirebase) or a good
> independent local depot changes how you buy. You get credit terms… negotiated rates below the
> headline counter price, **account-level reporting that shows everything you've got out on hire**…"

Two things follow. First, the advice to a small trade business is to concentrate spend with one
supplier to get rates — which, if followed, collapses the consolidated-view gap. Second, that single
account already gives "account-level reporting that shows everything you've got out on hire" — for
that supplier's kit.

**No source I found quantifies how many hire suppliers a small UK subcontractor actually uses.**
I searched for it directly and the answer does not appear to be published free; the Plant Hire
Investment Report and Barbour ABI's Plant Hire Market Report (£1,499 ex VAT `[snippet]`) are paid.

---

## 2. Cross-hirer competitor analysis

### Re-flow — pricing and target customer, answered

**£39 per user per month billed annually, £45 monthly, one plan, no free tier, no self-serve
signup.** `[verified-fetch]` https://re-flow.co.uk/pricing

Verbatim from that page: "£39 … £45 … per user/per month", "Re-flow Field Management", and the only
call to action on the entire pricing page is **"Get a demo"**. The feature list includes "On/off
hire" as one of seventeen bullets, alongside "Microsoft Entra ID (SSO)", "Okta (SSO)", "API access",
"On-site training" and "Bespoke reports" under "Professional services". Industries listed in the
footer: Highways, Civils, Utilities, Commercial landscaping, Construction.

**Determination: Re-flow is a demo-led, per-seat, mid-market civils platform, not something a
one-man subbie buys on a phone.** SSO, API access, on-site training and bespoke reports are not
sole-trader features. At £39/user/month a one-man band pays £468/year for a platform whose on/off
hire is a seventeenth of the value. **Re-flow does not close the ICP.** The previous scout was right
that the feature exists and right that it has automated return alerts; it was wrong to treat it as a
competitor *for this buyer*.

### YardLink — the real competitor, and it is free

This is the finding that keeps B1 from passing. `[verified-fetch]` https://yardlink.com/the-platform

Under the heading **"return ORDERS — Off-Hire Equipment With A Click"**:
> "Stop wasting money on equipment you no longer need. And reclaim the time you spend phoning
> different rental companies to off-hire your equipment."
> "Easily filter orders by on-hire, booked or off-hired"
> "**Off-hire an entire order from any project and any supplier**"
> "**Choose to schedule or immediately off-hire**"

Under **"MANAGE ORDERS"**:
> "Instantly generate live hire reports for everything"
> "Always know what's on-site at a project level"
> "Get notified of incoming deliveries and collections"

And on the homepage, on price: `[verified-fetch]` https://yardlink.com/
> "In the YardLink platform, you can hire equipment, from any supplier, through a single account…
> And the best part, **it's free**."

So a free product already performs the consolidated cross-supplier view **and** scheduled off-hire.
That is the corrected hypothesis's product, shipped, at zero.

**Its three real limitations, which is why this is MARGINAL and not FAIL:**
1. **It only consolidates what you ordered through YardLink.** A subbie with existing direct credit
   accounts at three local hirers, ordering by phone, has nothing in YardLink. Switching channel is
   the price of the free feature, and it means giving up negotiated local rates and relationships.
2. **It is aimed at procurement teams, not owners.** "FOR PROCUREMENT TEAMS"
   `[verified-fetch]` https://yardlink.com/how-it-works; the research behind its whitepaper surveyed
   "250 senior procurement decision-makers in UK construction firms"
   `[verified-fetch]` https://yardlink.com/the-true-cost-of-the-construction-supply-chain. Entry is
   "Book A Demo", with a dedicated account manager. Two testimonials are from an "Owner" and a
   "Director", so small firms do use it — but it is not a self-serve phone product.
3. **There is no YardLink iOS app in the GB App Store.** `[verified-fetch]`
   `https://itunes.apple.com/search?term=yardlink&country=gb&entity=software&limit=10` returns ten
   results, none of them YardLink (YardLink Eats, Yard Link Auctions, Toolstation, etc.).

I could not verify YardLink's funding or revenue. Treat "well-funded" as `[unverified]`.

### Everything else checked

| Tool | Cross-hirer? | Phone-first? | Price | Evidence |
| --- | --- | --- | --- | --- |
| **YardLink** | **Yes, free, incl. scheduled off-hire** | No GB iOS app; demo-gated | Free to hirer | `[verified-fetch]` above |
| **Re-flow** | Within its own asset records | Has an app; enterprise onboarding | £39/user/mo | `[verified-fetch]` re-flow.co.uk/pricing |
| **Trade2Base** | No — logs hire as a **job cost line** only, no off-hire date logic | Web app, **no GB iOS app** | £29/mo Starter (sole trader, 1 user) | `[verified-fetch]` trade2base.com/pricing; `[verified-fetch]` iTunes search returns no such app |
| **Tradify** | No hire-date feature found; reminders are for quotes/invoices/appointments | Yes | n/a | `[snippet]` tradifyhq.com |
| **Dashpivot / Sitemate** | Register with "On hire"/"Off hired" columns, one firm's own data | Yes, free app, 253 ratings | £21–£67/user/mo for 11–30 users | `[snippet]`; **help.sitemate.com still does not resolve by DNS via curl** |
| **Speedy / Ardent / GAP / Sunbelt / HAE Hire HQ** | **No — single-hirer by construction.** Re-confirmed; YardLink's "live hire report from each supplier" copy is the clearest statement of that limit | Speedy and Ardent have free GB apps | Free with account | previous scout `[verified-fetch]`; limitation confirmed |
| **Free trade-group spreadsheet** | **None found.** Searched for a downloadable Excel plant-hire tracker and found only SafetyCulture condition-report forms and Dashpivot column guidance | — | — | `[snippet]` |

**GB App Store, five further term sets** (`hire tracker`, `equipment hire log`, `plant hire manager`,
`tool hire tracker`, `rental return reminder`), all HTTP 200, none empty, `[verified-fetch]`:
**no paid single-user, cross-hirer off-hire tracker exists in GB.** The only on-topic apps are
single-hirer customer apps — Speedy Services, Ardent Hire, United Rentals: Plant Hire, Lynch Plant
Operator, Coastal Hire. The previous scout's reading of that absence as "a consequence, not an
opening" is less convincing now that the buyer has changed, but it remains an absence of proof of
demand, not proof of demand.

---

## 3. Mechanic search in an owner's words

Searched, as the computation rather than a product name: "off hire my own kit", "track plant on hire
multiple suppliers", "stop hire charges", "hire charges still running", "off hire confirmation
number", "plant hire invoice dispute", "charged after off hire", "forgot to off hire", "still on
hire charged months", plus forum-, Trustpilot-, Reddit- and LinkedIn-scoped variants.

### No verbatim complaints found from subcontractor owners.

That is the honest result after six targeted attempts. What I found instead:

**The hire industry's own counter-incentive, stated in writing to hire companies.**
`[verified-fetch]` https://aiagencyplus.com/ai-answering-service/plant-hire/ (an AI agency selling
answering services *to* hire firms — so this is adverse-direction vendor copy)
> "If nobody answers, the hire runs over the weekend and you invoice for it. That's real money, and
> it's the reason a lot of depots are in no hurry to fix this."
> "It won't quietly let an off-hire slide… You will invoice less in weekend hire than you do today…
> **If your model depends on customers not being able to reach you, this isn't for you.**"
> "A customer charged for two days they tried to return is a customer who prices [the next job
> elsewhere]."

**A guide to trade businesses naming late off-hire as the biggest single leak.**
`[verified-fetch]` https://www.trade2base.com/blog/trade-business-plant-hire-uk (vendor blog)
> "A digger left on hire over a bank holiday weekend, a breaker that never got off-hired, a stack of
> unbilled hire charges that quietly eats a job's margin: these are the everyday ways trades lose
> hundreds of pounds without ever noticing."
> "**Late off-hire:** Finishing with kit but not off-hiring it — charges run on for days or weeks.
> **The biggest single cause of wasted hire spend.**"
> "**No off-hire reference:** Off-hiring by a quick phone call and not recording the reference
> number, then having no way to dispute charges that run past the date."
> "hire charges do not stop when you finish using the kit. They stop when you off-hire it."

**Two low-star hire reviews, adjacent but not on-mechanic.** `[snippet-only]` — Trustpilot could not
be opened (see caveats). Smiths Hire: "couldn't collect machine until three days after hire
finished", "no breakdown of charges". Nixon Hire: "collection team have failed to collect the toilet
resulting in addition charges". These are *collection-failure* complaints, not forgotten-off-hire
complaints, and I could not open the pages to verify wording or date.

---

## 4. Gate 5 — single-user and phone-first, re-examined

**Determination: PASS. The previous scout's gate 5 kill does NOT stand for a small firm.**

The previous scout's reasoning was: off-hire needs an off-hire reference from the plant office, so a
phone cannot stop the meter. For a sole trader there is no plant office — the owner rings the hirer
himself. The phone *call* stops the meter; the app does three things that need no backend, no
accounts and no cooperation from the hirer:

1. **Holds the set** — what is on hire, from whom, started when, charged weekly or daily, minimum
   period, notice required. Entered once per item by the one person who knows.
2. **Reminds before the next charging period starts**, not after. The expensive moment is Friday
   afternoon and the day before the weekly anniversary, both computable from the user's own data.
3. **Records the off-hire reference, timestamp, and who gave it.** This is the part that is
   contractually decisive, and the contract says so in terms. CPA Supplementary Conditions 2011
   cl 7.2.3, `[verified-fetch]` https://www.ardenthire.com/file/cpa-supplementary-2021.pdf:
   > "The Owner shall not charge the Hirer any hire charges for any period for which an off-hire
   > number has been obtained, **but the Hirer shall still be responsible for such hire charges for
   > those items if he is unable to provide the off-hire number** to the Owner for that item."

   cl 7.2.1–7.2.2: the Hirer must notify in writing, and each item must be identified clearly
   "to enable the Owner to provide a unique off-hire number to the Hirer."

So the artefact that wins the argument is a reference number the owner is given verbally and
typically loses. Holding it is single-user, offline, phone-shaped work, and the previous scout read
the same clause as a kill when it is in fact the strongest reason the product is coherent.

**Honest limit:** cl 7.3 — kit off-hired but not made available for collection is "deemed with
immediate effect to be placed back on hire", with the Hirer liable for the Owner's abortive
collection costs. The app cannot make kit available. The value stops at the record and the reminder.
It is not "chasing other people", so it is inside the §3 constraint.

---

## 5. Gate 4 — the free rule set

**There is no rule set. Say it plainly.**

- Hire charging is **commercial, not statutory.** Charging periods, minimum hire periods, weekend
  and bank-holiday policy, and off-hire cut-off times are per-supplier terms. The trade guide above
  describes a Friday-to-Monday hire being charged as one day by some suppliers and three by others
  `[verified-fetch]`. Nothing on legislation.gov.uk or HSE governs any of it.
- **CPA Model Conditions for the Hiring of Plant 2011** are "© Copyright of the Construction
  Plant-hire Association 2011" `[verified-fetch]` (footer of the Supplementary Conditions PDF).
  `https://cpa.uk.net/model-conditions/` returned **HTTP 404** — I could not establish from the CPA's
  own site whether the Model Conditions are free. The *Supplementary* Conditions for Tool and
  Equipment Hire 2011 are republished free by at least one hirer, which is where I read cl 7
  `[verified-fetch]`.
- **Consequence:** the computation is arithmetic on data the user types in — start date, period,
  minimum hire, notice days — not a rules engine. **No `engine/test-vectors.json` story, no cited
  rules with URLs, no conflicting-sources side-by-side UI, and no in-browser aha from public rules.**
  The tie-breaker "aha in 60 seconds in a browser" is unavailable: the aha requires the user to key
  in six items from four hirers first.
- Strictly, hard gate 4 as written forbids shipping paywalled standards as data. We would ship none,
  because there are none. So I do not record gate 4 as a *failure* — I record that **the gate's
  premise is absent**, which is worse for the product and better for honesty. The previous scout's
  substance was right; its gate label was slightly wrong.

---

## 6. Gate 9 — re-tested against the subcontractor owner

**Determination: PASS. The previous scout's gate 9 kill does NOT stand for this buyer.**

**Unincorporated subbies are pursued personally for hire charges they believed had stopped.** This
is the single best piece of non-vendor evidence in the file. *VP plc v Thomas Megarry and Joan
Megarry trading as T G Megarry* [2012] NIQB 22, `[verified-fetch]`
https://www.judiciaryni.uk/files/judiciaryni/decisions/VP%20plc%20v%20Megarry%20%28Thomas%29%20and%20Megarry%20%28Joan%29%20trading%20as%20TG%20Megarry.pdf

- Claim: **£26,155.50** for the hire of one machine, charged 1 February to 31 March 2008 [1].
- The defendants' case was precisely "we thought it was off hire": an invoice note read "Hire
  suspended 30. 1. 08" [3], and the plaintiff's own telephone log for 8 February recorded the words
  **"off hire"** under 'reference', which "[t]he defendants relied on… as confirmation that the
  machine was 'off hire' at that time" [6].
- The hirer kept issuing invoices and never treated the hire as stopped; the judge found
  "the rental was being charged thereafter. Notice of such charges appeared by the issuing of
  invoices." [16]
- Outcome: judgment for the hire company of **£13,331 plus interest at 4% and costs**, on an
  equitable basis, with the defendants forfeiting their conditional discount [20].

Caveats, stated because they matter: this is Northern Ireland, 2012, and it was a trial-hire-pending-
purchase arrangement rather than a plain forgotten off-hire. But the shape is exactly the corrected
hypothesis: **two individuals trading as a partnership, personally liable, out five figures because
nobody held a dated record of the off-hire.** No salaried plant coordinator, no ERP report, no
employer to absorb it.

The previous scout's gate 9 analysis — the salaried Plant Hire Controller, the ST0269 apprenticeship
standard, the PAYE site manager with nothing personally at stake — is all **still true and still
verified**, and it still kills the *site-manager* version of B1. It simply does not describe a
sole trader or a 20-person subbie, who has no hire desk and no apprentice hire controller.

**Pain £ `(estimate)`, arithmetic shown.** Indicative 2026 UK trade week rates, `[verified-fetch]`
from the trade2base guide (vendor-published, "use these as a sense-check, not a quote"): mini digger
1.5t £300–£450/week; scissor lift/MEWP £300–£500/week; medium generator £120–£200/week; plate
compactor £90–£140/week; damage waiver 10–15% on top.

- One mini digger forgotten four weeks at the low rate: 4 × £300 = **£1,200**.
- Three items (digger + MEWP + generator) forgotten two weeks at low rates:
  (£300 + £300 + £120) × 2 = **£1,440**, plus 10% waiver ≈ **£1,584**.

That puts a realistic occurrence at the bottom of the rubric's £2k–£10k band, so **pain £ stays at
3**. No source quantifying real-world forgotten-off-hire loss at a UK subcontractor exists as far as
I can find, and I will not invent one. The £13,331 judgment is a single outlier, not a typical cost.

---

## 7. What stands from the previous scout's kill, and what does not

| Previous finding | Status now |
| --- | --- |
| Gate 9 FAIL — PAYE site manager loses nothing | **Does not stand for this buyer.** Correct for a site manager, irrelevant to an owner. VP plc v Megarry shows personal five-figure exposure |
| Gate 5 FAIL — off-hire is a multi-party workflow, a phone cannot stop the meter | **Does not stand for a small firm.** No plant office; the owner rings the hirer; the app's job is the set, the reminder and the off-hire reference, all single-user and offline. CPA Supp. cl 7.2.3 makes the reference decisive |
| Gate 4 FAIL — no public rule set | **Stands in substance, mislabelled as a gate failure.** There are no rules to compute from; we also ship no paywalled standard. Buildability and the aha moment both suffer |
| Gate 3 FAIL — hirer portals ship the view free | **Stands only as to each hirer's own kit.** Confirmed single-hirer by construction; YardLink's own copy ("a live hire report from each supplier") is the clearest statement of that limit |
| Gate 3 FAIL — Re-flow has on/off hire with return alerts | **Stands as a fact, fails as a competitor for this ICP.** £39/user/month, demo-only, SSO/API/on-site training — mid-market civils, not a sole trader's phone |
| Gate 3 — free spreadsheet circulating in trade groups | **Not found.** Only SafetyCulture condition-report forms and Dashpivot column guidance |
| Gate 2 counter-incentive only a 3, because hirers publish live lists | **Raised to 4.** No hirer holds the cross-hirer set, and a vendor selling to hire desks writes that depots are "in no hurry to fix this" |
| Gate 8 — Ashtead/Speedy/GAP ship it free to hold the account | **Stands, narrowed.** The new well-funded threat is YardLink, which is cross-supplier and free |
| **New kill risk the previous scout missed entirely** | **YardLink**: free, cross-supplier live hire report, one-click and **scheduled** off-hire "from any project and any supplier". This is the mechanic, free, from the one party trying to *be* the consolidated holder |

---

## 8. Evidence caveats

**Opened and read in full (`[verified-fetch]`):** re-flow.co.uk/pricing; yardlink.com homepage,
/the-platform, /how-it-works, /the-true-cost-of-the-construction-supply-chain;
aiagencyplus.com plant-hire answering-service page; trade2base.com blog post and /pricing;
ardenthire.com CPA Supplementary Conditions 2011 PDF (cl 7 in full); jla.com subcontractor terms PDF
(cl 2.3.1); judiciaryni.uk VP plc v Megarry judgment PDF (all 20 paragraphs); six iTunes GB search
API term sets, all HTTP 200, none empty.

**Blocked or unreachable — reported, not routed around:**
- `uk.trustpilot.com` — **HTTP 403 with an AWS WAF "Verifying your connection" challenge** on four
  hire-company review pages. All Trustpilot quotes in this file are `[snippet-only]` from search
  results; I could not confirm wording, author or date.
- `reddit.com` / `old.reddit.com` — WebSearch returns **HTTP 400: "domains are not accessible to our
  user agent"**. No Reddit evidence at all, in either direction.
- `help.sitemate.com` — **DNS still does not resolve via curl** ("Could not resolve host"). Confirms
  the previous scout. Dashpivot's actual on-hire/off-hire UI remains `[snippet]`.
- `yardlink.com` — returned **HTTP 403 (Cloudflare)** to a plain curl user agent; a full browser
  user agent plus `Accept-Language` returned 200. Noted so nobody reports it as blocked.
- `cpa.uk.net/model-conditions/` — **HTTP 404.** Whether the CPA Model Conditions 2011 are free is
  therefore `[unverified]`.
- Facebook trade groups — not reachable from this environment at all. The founder's channel
  assumption is untested.

**Vendor-copy warning, applied honestly.** The multi-hirer premise, the "biggest single cause of
wasted hire spend" claim and the counter-incentive quote all come from **vendor marketing**:
YardLink (sells cross-supplier procurement), Trade2Base (sells job-costing CRM) and an AI answering
agency (sells to hire desks). Per `CLAUDE.md` §1 this is exactly the class of source that misled the
last venture. Two mitigations: the counter-incentive quote runs *against* its author's easier sale
("it costs us the easier sale… you will invoice less in weekend hire"), and the YardLink copy is
adverse to B1 because it proves a free competitor exists. The pain claims are **not** mitigated —
Trade2Base profits from the pain being real, and its "hundreds of pounds" is its number, not mine.

**Could NOT verify, ranked by how much it would change the verdict:**
1. **Whether a real small UK subcontractor owner has kit from several hirers at once, and whether he
   has ever been billed past an off-hire.** Zero demand-side evidence. This is the whole candidate.
   No survey, no forum post, no verbatim quote. Everything else is inference and vendor copy.
2. **Whether a sole trader can and does open a YardLink account self-serve.** If YardLink will take
   a one-man subbie for free and he keeps his local rates, gate 3 fails outright and B1 dies.
3. **Whether YardLink is well funded.** `[unverified]` — I made no claim either way.
4. Whether any UK hire company sends a proactive "you've had this N weeks" prompt. None found; the
   AI-answering-service copy suggests the opposite, but absence of evidence is not proof.
5. Whether the CPA Model Conditions 2011 themselves are free to read (404 on the CPA's own page).
6. Any real £ figure for forgotten-off-hire loss at a UK subcontractor. **None exists in free
   sources.** Barbour ABI's report is £1,499 ex VAT `[snippet]`.

**Ranked follow-up fetch list, if another pass is funded:** (1) YardLink sign-up flow, to see
whether it is self-serve and whether a sole trader is accepted; (2) `cpa.uk.net` sitemap for the
Model Conditions; (3) Trustpilot via a route that satisfies the WAF, for the ~1-star reviews of
Speedy, HSS, Brandon, Nixon and GAP filtered on "off hire"; (4) `help.sitemate.com` from a host
whose DNS resolves it; (5) Re-flow's "Re-flow vs alternatives" page, for whom it positions against
at the small end.

---

## 9. Recommendation

**Do not build. Do not kill. Spend the one introduction.**

B1 at 3.05 with gate 3 uncleared does not justify a week of Swift, and the frozen inputs say risk
appetite resolves ties toward certainty. But the two gates that killed it were tested against the
wrong person, and the right person's exposure is now evidenced by a court judgment rather than a
guess. The cheap next step costs nothing but the founder's promised introduction, due 2026-10-31:

**Five questions for the first subcontractor owner, in this order.** Nothing else in this file
matters until these are answered by a real person.
1. Right now, how many different hire companies have your kit? Name them.
2. Where is the list? (If the answer is "in my head" or "in the van on a delivery note", the gap is
   real. If it is "all through one account", B1 is dead.)
3. When you off-hire, who do you ring, and do you write the off-hire number down anywhere?
4. Has a hire invoice ever run past the date you thought you'd stopped it? What did it cost you, and
   did you get it credited?
5. Have you heard of YardLink? Would you order through a platform to get one list, or do you need
   your own rates with your own local depot?

**Pre-committed kill trigger:** if fewer than six of ten owners name **two or more** concurrent
hirers, or if three or more say the off-hire number is already recorded somewhere they can find it,
B1 is dead and the file closes for good.

---

## Handoff
- **Wrote:** `/home/user/new-venture/research/gate-b1-offhire-regate.md`
- **Verified:** Re-flow pricing £39/£45 per user per month, one plan, demo-only entry, "On/off hire"
  as one of seventeen features (re-flow.co.uk/pricing); YardLink free, cross-supplier, one-click and
  scheduled off-hire "from any project and any supplier" plus instant cross-supplier live hire
  reports, aimed at procurement teams, no GB iOS app; CPA Supplementary Conditions 2011 cl 7.2.1–7.3
  on off-hire numbers and liability without one; JLA subcontract cl 2.3.1 putting all plant and tools
  on the subcontractor; VP plc v Megarry [2012] NIQB 22 — unincorporated partnership pursued for
  £26,155.50, judgment £13,331 plus interest and costs, on a disputed "off hire"; an AI agency
  telling hire desks that depots "are in no hurry to fix this"; Trade2Base £29/mo sole-trader tier
  with hire as a job cost line only and no GB iOS app; six GB App Store term sets showing no
  cross-hirer off-hire tracker at any price.
- **Could NOT verify:** any verbatim subcontractor-owner complaint — **no verbatim complaints
  found** after six targeted attempts; whether a small subbie really runs several hirers concurrently
  (no survey exists free); whether YardLink accepts a self-serve sole trader; YardLink's funding;
  whether CPA Model Conditions 2011 are free (cpa.uk.net 404). Blocked: Trustpilot (AWS WAF 403),
  Reddit (user agent refused by WebSearch), help.sitemate.com (DNS), Facebook groups (unreachable).
- **Needs from another agent:** nothing from a sub-agent. **From Bob/the founder:** the completed
  introduction and the five questions in §9. Also worth routing to whoever re-gates B3 (welfare /
  cabin hire) and B2 (scaffold) — gate 9 and gate 5 were killed there on the same site-manager
  reasoning, and that reasoning is now known to be wrong for an owner buyer. C10 (LOLER on hired
  plant) stays dead: Ardent emails LOLER expiry.
- **Changes my own score:** yes — B1 moves from **2.35 FAIL** to **3.05 MARGINAL**. Gates 9 and 5
  now PASS; gate 2 rises to 4; gate 3 is **not cleared** because of YardLink; gate 4's premise is
  absent rather than failed. Strength of bet **4 / 10**.
