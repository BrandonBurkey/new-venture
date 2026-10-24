# Gate B5 — Retention release and defects-liability expiry (subcontractor)

## Verdict: **FAIL**

**One sentence:** A UK-listed product called Retention Track already does exactly this for
construction subcontractors — it reads retention off your invoices, remembers practical completion
and end-of-defects, reminds you before the date and sends the release request — and it is free for
your first three contracts and £10 per contract after that, so the mechanic gate (rubric gate 3)
and the "already nailed" gate (gate 8) both fail before we even reach the single-user problem.

**Weighted score: 2.85 / 5** (working at the bottom). My Phase 1 prediction in
`research/niche-longlist.md` was that B5 "survives both gates but fails reachability". That
prediction was **wrong**: it fails the mechanic gate outright. Score lowered.

### Gates

| Gate | Result | Why |
| --- | --- | --- |
| 1. Not an excluded market | PASS | Not in `CLAUDE.md` §2 |
| 2. Counter-incentive | **MARGINAL** | The main contractor genuinely does not notify. But a near-free third party does, which is the same failure mode in substance |
| 3. Mechanic gate | **FAIL** | Retention Track; Payapps DLP setup; a free browser calculator; Xero third-party apps; retention-recovery firms |
| 4. Rule set public, free, stable | **FAIL** | Release dates are not in legislation. They live in JCT/NEC subcontract documents (paywalled) and are routinely amended per deal |
| 5. Single-user, phone-first | **FAIL** | The money only moves when the main contractor is chased. The incumbent's headline feature is "Asks for you" |
| 6. App-Store-safe framing | MARGINAL | Workable if the user enters their own dates, but "your retention is due on X" from a contract edges into legal advice |
| 7. Recurring over years | PASS | Every contract, for years |
| 8. Not nailed by a well-funded competitor | **FAIL on substance** | The incumbent is small (2 Xero reviews) but functionally complete and priced below anything we could charge |
| 9. Employer-pays / buyer identity | PASS on identity, **FAIL on access** | The subcontractor owner really does lose their own money — and is exactly who the founder cannot reach |

Plus an un-gated existential risk: Parliament is currently legislating retention clauses **out of
existence** (see "Sunset risk" below).

---

## 1. Mechanic-search evidence (searched the computation, never a product name)

Customer-words searches run: "retention release date subcontractor UK when is my retention due";
"retention tracker construction spreadsheet subcontractor free template"; "unclaimed retention OR
chase retention construction forum subcontractor never got paid"; "retention due date reminder
feature construction software UK defects liability period track"; "retention calculator free
release date when due defects liability period calculator"; "retention recovery service UK no win
no fee"; plus GB App Store term sweeps (below).

### 1a. The killer: Retention Track

Xero App Store UK listing, fetched in full. `[verified-fetch]`
<https://apps.xero.com/uk/app/retention-track>

Verbatim from the listing:

> "Retention tracking software for construction subcontractors. Know what you're owed, get paid on time."

> "Never miss a retention release again with upcoming claim reminders."

> "Streamline your recovery with claims built to match local legislation in AU, NZ and the developing UK legislation."

> "Contractor won't pay? Be prepared for your claim or adjudication submission."

Listing metadata, verbatim: "5 out of 5 stars 2 reviews"; "Countries Australia, New Zealand,
United Kingdom". `[verified-fetch]`

Verbatim user review on that page (Lauree Woodside, 5 stars): `[verified-fetch]`

> "Using Retention Track has made a huge difference in easily being able to see what retention
> payments are being withheld under individual contracts and when they will be due to be released."

Verbatim user review (Mel Crawford, 5 stars): `[verified-fetch]`

> "It helps to automate when claims are due and when retention falls due. No more diary scheduling
> required."

That last six words are our entire product proposition, already shipped, already reviewed.

### 1b. The vendor's own UK page — this is our v1, described by someone else

<https://www.retentiontrack.com/uk/> `[verified-fetch]`

Verbatim:

> "Retention tracking for subcontractors. Don't leave retention to memory. Every retention you're
> owed, in one record that's yours: read from your books, remembered to the day, and asked for on
> time."

Its four stated functions, verbatim: "Reads your books"; "Keeps each contract — The rate, the
limit, the completion date and the defects period, per main contractor"; "**Reminds you — At
practical completion and at the end of defects, before anyone has to remember**"; "**Asks for you —
A release request from Retention Track, not another email from your office**". `[verified-fetch]`

It also names our intended wedge as its own onboarding pitch: "Onboarding often finds retention
the books had lost track of." `[verified-fetch]`

Customer testimonial on that page (Anthony Rocca, Director, Beyond Fire): `[verified-fetch]`

> "Before we started using Retention Track, we were managing our retentions through Excel
> spreadsheets and calendar reminders. It was time-consuming... Since moving to Retention Track,
> our job has become much easier."

### 1c. Its pricing destroys our price

<https://www.retentiontrack.com/uk/pricing/> `[verified-fetch]`

> "£10 a contract. No subscription. Charged once per contract, for the life of that contract.
> Retention is quiet for long stretches, so paying monthly for it makes no sense. Your first 3
> contracts are free."

Worked example on their own page, verbatim: "Contracts started this year 14 / First 3 Free /
Remaining 11 at £10 / £110 / Monthly subscription £0 / Total for the year £110". `[verified-fetch]`

They explicitly target the business model `CLAUDE.md` tells us to use: "Everything else in this
space is a subscription. A subcontractor with a handful of retention contracts pays every month
whether or not anything happened." `[verified-fetch]`

Consequence for us: a small subbie with three live retention contracts pays **nothing**. A busy one
pays £110 a year for a tool that also reconciles to Xero and sends the demand letter. A StoreKit
subscription at any credible price is strictly worse value.

Company: Retention Track Pty Ltd, ABN 28 682 975 373, Australian. `[verified-fetch]` Not
well-funded on any visible evidence (2 Xero reviews, one named testimonial, an Australian mobile
number on the UK page). But gate 3 is not a funding test — it asks whether anything already
performs the computation, free or paid. Something does.

### 1d. The aha moment is already free in a browser

Plexa "Practical completion and defects liability calculator", labelled "FREE TOOL".
<https://www.plexapro.com/tools/practical-completion-calculator> `[verified-fetch]`

Verbatim: "From the date of practical completion, work out when the defects liability period ends,
when each retention moiety is released, and when the final claim is due under your contract form."
It outputs "First retention moiety released", "Defects liability period expires", "Second retention
moiety released", "Final payment claim due", and offers "Add all dates to calendar".
`[verified-fetch]`

It is built on Australian standard forms (AS 4000-1997, AS 2124-1992, AS 4902-2000, ABIC, GC21
NSW) with a "Custom / other" option, so it is not UK-specific — but every field is editable and the
arithmetic is identical. Our strongest tie-breaker ("the aha moment can be delivered free in a
browser in under 60 seconds") is therefore already delivered by someone else, free, today.

### 1e. Verbatim complaints about the pain — the pain is real, it is just not a date problem

BESA (trade body, free public page) <https://www.thebesa.com/payments/retentions-security>
`[verified-fetch]`:

> "Employers and head contractors rarely release retentions on time or in accordance with the
> contract. In a situation where the money is withheld long enough, the subcontractor often stops
> trying to collect the retention money and it becomes a de facto secondary discount."

> "The amount of retentions is disproportionate to the costs of recovery"

Scottish Government consultation analysis, respondents' own words
<https://www.gov.scot/publications/practice-cash-retention-under-construction-contracts-public-consultation-findings/pages/6/>
`[verified-fetch]`:

> "It is a pot of money that main contractors see as their potential margin"

> "A way for major contractors to keep capital as long as possible."

Stone Specialist, reporting a 20-trade-body letter to Government
<https://stonespecialist.com/news/stone-federation-among-20-signatories-retentions-letter>
`[verified-fetch]`: "£10.5billion of retentions owed to specialist sub-contractors being withheld
and kept in private and public sector bank accounts for years"; "£7.8billion of retention money
has been unpaid in the construction sector over the past three years with £700million lost due to
insolvencies." **Caveat: these are campaign figures from a lobbying letter, reported second-hand,
and the article is undated in the text I retrieved. Treat as advocacy, not statistics.**

Note what every one of these complaints actually says. Nobody says "I forgot the date." They say
the payer will not pay, the payer is insolvent, or recovery costs more than the money.
**The missed date is not the cause of the loss.** That is the adversarial finding that matters most
here, and an app that computes the date does not touch it.

No verbatim UK subcontractor forum complaints found — Reddit and UK trade-forum searches returned
US LevelSet retainage threads and policy pages, not UK practitioner posts.

---

## 2. Does a tool they already have do it?

| Tool | Does it track retention with a release date? | Evidence |
| --- | --- | --- |
| **Retention Track** (Xero/Fergus app, UK) | Yes — entire product. Reminders at PC and end of defects, plus automated release request | `[verified-fetch]` above |
| **Payapps** (UK, subcontractor payment applications) | Yes — DLP is configured in the tool and retention release triggers off it; UK guide tells you to record PC date and set a reminder | `[snippet]` <https://support.payapps.com/en/articles/8885088-see-how-easy-it-is-to-calculate-retention-using-payapps> (help centre returned **HTTP 401**, sign-in required) and <https://www.payapps.com/blogs-uk/in-brief-how-to-manage-construction-retention/> (**HTTP 403, Cloudflare block on wpenginepowered.com**) |
| **Payapps pricing** | Subcontractor free tier exists: first application for payment free each month on self-manage; paid tiers from £32/month | `[snippet]` <https://www.payapps.com/uk/pricing-subcontractors/> — **not fetched, treat the £32 and £270 figures as unverified** |
| **Xero** (native) | No. Feature request open; Xero replied it "isn't something we have planned for development at this time" | `[snippet]` <https://productideas.xero.com/forums/939198-for-small-businesses/suggestions/45636571-sales-invoices-ability-to-specify-a-of-invoice> |
| **QuickBooks** | Claimed by forum users to handle it; no official doc found | `[unverified]` |
| **Sage 100 Contractor** | Documented "Releasing retention for subcontracts" | `[snippet]` <https://help-sage100contractor.na.sage.com/Sage100Contractor/US/26_1/Content/Modules/6-Project%20Management/Releasing%20retention%20for%20subcontracts.htm> |
| **CMiC** | "calculate and release retainage at contract or line detail level" | `[snippet]` <https://docs.cmicglobal.com/portal/Content/F_Onboarding/Docs/Project_Controls/Subcontract_Management/SubcontractManagement.htm> |
| **Workbench** | Sub-contract retention release management, claim invoice generated on release | `[snippet]` <https://workbenchdoc.atlassian.net/wiki/x/DwCg> |
| **Odoo** | "Retention & Lien Waiver Tracker" module | `[snippet]` <https://apps.odoo.com/apps/modules/18.0/retention_lien_waiver_tracker> |
| **BuildPass** | "release schedule shows practical completion and the defects liability period with the amount eligible at each" | `[snippet]` <https://www.buildpass.ai/features/finance/retention> |
| **Archdesk** | Tracks retention per subcontract through to release (main-contractor side) | `[snippet]` <https://archdesk.com/en-gb/solutions/subcontractor-management> |
| Paid spreadsheet | Etsy "Subcontractor Payment Tracker Spreadsheet, Retainage Log" | `[snippet]` <https://www.etsy.com/listing/4599420288> |

Could NOT confirm whether the UK mid-market job-costing packages a subbie is most likely to run
(Eque2 Construction Manager, Integrity Software Evolution Mx, COINS, RedSky, Causeway) carry a
retention **due-date** field — my search returned none of those vendors. Ranked follow-up below.
Even so: the ledger-balance half of retention is a solved, commodity feature across the category,
and the date-and-reminder half is solved by Retention Track in the UK.

---

## 3. Who profits from telling the subbie

The main contractor does not notify — that part of the premise holds. But the counter-incentive
gate asks whether **anybody** has a reason to tell them, and several parties do:

- **Retention Track** profits from telling them, at £10 a contract, and reminds for free on the
  first three. `[verified-fetch]`
- **Debt-recovery firms on commission.** Top Service operates a "No Collection, No Fee" retention
  service at a stated 25% commission. `[snippet]`
  <https://www.top-service.co.uk/> — specific page not fetched.
- **Construction law firms selling a packaged service.** Hawkswell Kilvington publishes a
  "Retention Recovery Service" offered "on a fixed, capped or alternative fee basis". `[snippet]`
  <https://www.hklegal.co.uk/wp-content/uploads/2013/04/Retention-Recovery-Service.pdf> (PDF not
  opened; note the 2013 upload path — may be stale). Nelsons advertises fixed-fee retention
  recovery including reviewing the subcontract to establish the liability period. `[snippet]`
  <https://www.nelsonslaw.co.uk/retention-payments/>
- **Trade federations** publish the mechanism free (BESA page above, `[verified-fetch]`; SCSI
  guidance note in Ireland, `[snippet]`).
- **The subbie's own accountant/bookkeeper.** Retention Track sells a "For accountants" channel,
  which means the reminder arrives through a professional the subbie already pays. `[verified-fetch]`

So counter-incentive scores 3, not 5. The holder is silent; the market around the holder is not.

---

## 4. Named rivals — GB App Store

Searched `https://itunes.apple.com/search?...&country=gb&entity=software&limit=10`. Two terms
returned a 0-byte body on first call; **both were retried and returned results** (`retention+
construction` → 8 results; `defects+liability` → 8 results). Terms run: `retention+construction`,
`construction+retention+tracker`, `retention+release`, `defects+liability`, `subcontractor+
retention`, `retainage`, `retention+money`, `construction+payment+subcontractor+UK`.

| App | Seller | Price (GB) | Ratings | Relevant? |
| --- | --- | --- | --- | --- |
| Procore | Procore Technologies | Free | 1135 | Project management; retention is a web-module concern |
| Chime Construction Software | Chime Software Limited | Free | 96 | No retention claim in description |
| innDex | INNDEX LIMITED | Free | 82 | No |
| Onetrace | Onetrace Ltd | Free | 28 | Subcontractor-facing, not retention |
| Site Manager Pro | Site Manager Pro Limited | Free | 5 | UK new-build subcontractor management |
| Pay Packet | KRISHNA PINNAMANENI | Free | 0 | "helps contractors and small construction teams prepare progress payment paperwork without subscriptions" — adjacent |
| SnagID | Raghvendra Bhargava | £9.99 | 142 | Defects/snagging, not retention dates |
| Super Subbie | Tinderhouse | Free | 18 | Hiring marketplace |

`[verified-fetch]` (iTunes Search API, GB storefront, 2026-10-24).

**No iOS app in the GB store tracks retention release dates.** That is the only genuinely
encouraging finding in this file — and it is not enough, because the mechanic gate is not an
App Store gate. The customer's alternative is a free Xero-connected web app and a free browser
calculator, not a phone app.

---

## 5. Single-user and phone-first determination (`CLAUDE.md` §3) — **FAIL**

Strict reading, and it fails cleanly.

The date itself is one person's own record: PC date + defects period, entered by the subbie's own
office. A phone app could hold that. But holding the date delivers nothing. The money arrives only
when the main contractor is asked, chased, and sometimes threatened with adjudication. The evidence
all points one way:

- The incumbent's own feature list puts the reminder third and the **chase** fourth, and the chase
  is the thing it charges for: "Asks for you — A release request from Retention Track, not another
  email from your office", with tracked "Sent 1 Sep / Opened 2 Sep / Approved 9 Sep, paid 16 Sep".
  `[verified-fetch]`
- Its release request is a document assembled for the other party: "Release request · sent by
  Retention Track... Retention clause: Clause 17.3 of the subcontract / End of defects period
  1 Sep 2026 / Released at completion £11,900, paid / Now due, second half £11,900".
  `[verified-fetch]`
- BESA: subcontractors "stop trying to collect", and recovery cost is "disproportionate".
  `[verified-fetch]` The bottleneck is persistence against a counterparty, not recall.
- Half the value the incumbent advertises is **reconciliation against Xero** — pulling retention
  out of aged receivables so debtors are not falsely overdue. That is a bookkeeping job on a
  desktop ledger, not a site-cabin phone job. `[verified-fetch]`

Also note who the user is in practice: both Xero reviewers are bookkeepers/accountants acting
**for clients** ("We use this app for 2 clients"). `[verified-fetch]` That is a multi-company,
multi-user, desk-bound workflow — the opposite of our target.

A phone-only, offline, no-accounts version of this is a calendar reminder. Which the subbie's
bookkeeper already has, in the diary, as Mel Crawford's review says out loud.

---

## 6. Advice line and free-rules determination — **FAIL on gate 4**

I checked what is actually in the legislation rather than what commentary says is in it.

**Housing Grants, Construction and Regeneration Act 1996, s.110 "Dates for payment"**
<https://www.legislation.gov.uk/ukpga/1996/53/section/110> `[verified-fetch]`. Verbatim:

> "Every construction contract shall— (a) provide an adequate mechanism for determining what
> payments become due under the contract, and when, and (b) provide for a final date for payment in
> relation to any sum which becomes due. The parties are free to agree how long the period is to be
> between the date on which a sum becomes due and the final date for payment."

And the 2011 insertion, s.110(1A), verbatim:

> "The requirement in subsection (1)(a) to provide an adequate mechanism for determining what
> payments become due under the contract, or when, is not satisfied where a construction contract
> makes payment conditional on— (a) the performance of obligations under another contract, or
> (b) a decision by any person as to whether obligations under another contract have been
> performed."

Commencement, verbatim from the textual amendments: "inserted (1.10.2011 for E.W., 1.11.2011 for
S.) by Local Democracy, Economic Development and Construction Act 2009 (c. 20)". `[verified-fetch]`
This is the real source for the widely-repeated "pay-when-certified was banned in October 2011"
line that consultancy pages assert — it is accurate, and it is about *conditionality*, not about
*dates*.

**s.113 "Prohibition of conditional payment provisions"**
<https://www.legislation.gov.uk/ukpga/1996/53/section/113> `[verified-fetch]` — pay-when-paid,
void except on third-party insolvency. Again, no dates.

**The word "retention" appears in neither section.** The Act requires the contract to contain an
adequate mechanism; it does not supply one. Build UK/Payapps commentary saying "the Scheme for
Construction Contracts does not expressly set out when retentions should be paid" is consistent
with this, though I did not open the Scheme itself. `[snippet]`

So where do the dates come from?

- The **subcontract**: JCT subcontract particulars carry a stated "Retention Release Date"; NEC
  does not include retention as a core provision at all and it must be added as an option.
  BESA, verbatim `[verified-fetch]`: "Retention is not included as a core provision in NEC3 or NEC4
  contracts." Gowling, verbatim `[verified-fetch]`: "Retentions are governed by the terms of the
  applicable contract, with standard form construction contracts such as JCT and NEC including
  specific provisions to deal with them."
- Those contract documents are **paywalled** (JCT and NEC both sell their forms), which is exactly
  the `CLAUDE.md` §3 prohibition.
- And they are **routinely amended**. BESA, verbatim `[verified-fetch]`: "Main contractors often
  amend these amounts and dates to better suit their own purposes. For example, the 3% is almost
  always raised to 5% (and can in some cases be as high as 10%), and stage 1 of retention date is
  amended to lengthen the time the contractor can hold the monies."

**The §3 carve-out does not rescue this.** The carve-out allows paywalled-standard niches only
where "the dates come from the user's own property and the intervals are published free elsewhere".
Here the interval is not published anywhere free and authoritative — it is whatever this particular
main contractor wrote into this particular deal.

There is a narrow safe design: the user types their own PC date and their own defects period, and
the app adds months. That is App-Store-safe and needs no paywalled data. **But it also means there
is no rules engine, no public interval table, no citation pairs, and no conflicting-sources UI —
nothing for `engine/` to contain.** The product reduces to a date-adder. Per `CLAUDE.md` §7 the
engine is meant to compute from cited public rules; here there would be no rules to cite.

Advice-line risk, separately: any output that reads "your retention is due on X under clause 17.3"
is an interpretation of a private contract, and the free incumbent calculator already hedges it
heavily — verbatim `[verified-fetch]`: "Your executed contract and its Annexure or schedules
govern, and special conditions frequently change these periods. Confirm against the contract and
take advice before relying on any of these dates." We would need the same hedge, which guts the
dream outcome.

---

## 7. Sunset risk — Parliament is abolishing the problem

Not in the rubric, and decision-relevant enough to record.

The **Commercial Payments Bill** would amend the Construction Act to ban retention clauses outright.

Osborne Clarke `[verified-fetch, consultancy commentary — treat as secondary]`
<https://www.osborneclarke.com/insights/commercial-payments-bill-would-ban-retention-and-late-payments-uk-construction>:

> "As currently drafted, the bill would amend the Housing Grants, Construction and Regeneration Act
> 1996 to ban retention payments... The ban would be implemented in two phases. A two-year
> transition period would apply first, during which any retention clauses including those in
> pre-existing contracts will become void on the date falling three years from the first day of that
> transition period."

Gowling WLG, published 14 October 2026 `[verified-fetch, consultancy commentary]`
<https://gowlingwlg.com/en/insights-resources/articles/2026/the-commercial-payments-bill-a-closer-look-at-the-proposed-ban-on-retentions>:

> "The Bill was introduced into the House of Lords on 19 May 2026, and is due to have its third
> reading on 20 October 2026."

> "The Bill would insert new sections 113A to 113F into Part 2 of the Construction Act."

Same page, reporting the Lords Report Stage debate: "around 65% of retention payments are paid late
and almost 25% are never paid back at all". `[verified-fetch of the law firm page; the underlying
Hansard figure is unverified — I could not reach Parliament to check it, see caveats]`

**I could not verify the Bill's current stage.** `bills.parliament.uk` returned **HTTP 403 behind a
Cloudflare JavaScript challenge**, both the page and the API. The third reading date given is four
days before today and I have no source for the outcome. Both firms warn of amendment. On the
drafting as reported, the market for this product disappears roughly three years after
commencement — plausibly around 2030, possibly never if the Bill is amended or dropped. That is not
a reason to kill on its own, but it is a hard ceiling on a niche that has already failed three
gates.

---

## 8. Buyer distance from the founder's access

Per the frozen founder inputs in `research/scoring-rubric.md`: the founder can reach **site managers
and site agents only** — explicitly "not subcontractor owners... not commercial managers or QSs."

The buyer for this product is:

1. the subcontractor **owner/director**, or
2. the subcontractor's **commercial manager / QS**, or
3. in practice, per the two Xero reviews, the subcontractor's **external bookkeeper or
   accountant**. `[verified-fetch]`

A main contractor's site manager is on the opposite side of the retention transaction from the
buyer. They do not hold the subcontract particulars, they do not raise the release application, and
their employer is the party withholding the money. Introducing the founder to a subcontractor owner
and then asking that owner to discuss money their site manager's employer is holding is an
awkward conversation, not a warm one.

Distance: **two hops, and across an adversarial relationship.** Per founder input 1, contact
proximity scores **2**, and I see nothing in the evidence that argues for more.

---

## 9. Score

| Criterion | Weight | Score | Reason |
| --- | --- | --- | --- |
| Pain £ | 20% | 4 | Thousands to tens of thousands per contract, recurring. Marked down from 5 because the loss is caused by the payer's refusal, not by the subbie forgetting — the app does not sit on the causal path |
| Audience wealth | 10% | 4 | Subcontractor owner with capital at risk |
| Competitive weakness | 15% | 1 | Retention Track does the whole job, UK-listed, free at low volume; plus Payapps, a free browser calculator and ledger modules across the category |
| Counter-incentive strength | 20% | 3 | Holder is silent, but a near-free third party, recovery firms on commission and the subbie's own accountant all profit from telling them |
| v1 buildability | 10% | 2 | Computation is trivial, but there is no public rule set to ship, and the value needs a backend to send and track release requests |
| Reachability | 10% | 3 | BESA, SEC Group, FMB, NFB exist but are membership-gated; £150–£400 budget does not buy in |
| Founder's contact proximity | 10% | 2 | Buyer is a subcontractor owner/QS/bookkeeper; founder reaches site managers on the other side of the transaction |
| Willingness to pay | 5% | 4 | They already pay recovery firms a commission and law firms a fixed fee — but the incumbent has anchored the price at £10 once per contract, with no subscription |

**Weighted total (arithmetic shown):** (0.20×4) + (0.10×4) + (0.15×1) + (0.20×3) + (0.10×2) +
(0.10×3) + (0.10×2) + (0.05×4) = 0.80 + 0.40 + 0.15 + 0.60 + 0.20 + 0.30 + 0.20 + 0.20 =
**2.85 / 5**.

Irrelevant anyway: gates 3, 4, 5 and 8 all fail, and any gate failure kills the niche at any score.

**Strength of bet: 2 / 10.** The pain is the most real of anything in the longlist and that is
precisely why it is already served. We would be launching a phone app with no rules engine, against
a free tier, into a market Parliament is legislating away, sold to a buyer two adversarial hops
from the founder's only channel.

---

## 10. What would have to be true to revive B5

Recorded so a revival needs new evidence, not new enthusiasm.

1. Retention Track turns out to be withdrawn from the UK, or its UK reminders turn out not to work
   off UK subcontract dates. (Its own listing says UK legislation support is "developing".)
2. The Commercial Payments Bill is dropped, restoring a long-lived market.
3. The founder gains direct access to subcontractor owners or specialist-contractor commercial
   managers — which would change A1/A2 scoring too, and more cheaply.
4. Someone identifies a retention job that is genuinely single-user and genuinely not a chase.
   I did not find one.

---

## 11. Evidence caveats

**Blocked or failed hosts, reported not routed around:**

| Host / URL | Result |
| --- | --- |
| `bills.parliament.uk` (page and `/api/v1/Bills`) | **HTTP 403, Cloudflare JS challenge.** Could not verify the Commercial Payments Bill's current stage or the 20 Oct 2026 third-reading outcome |
| `www.payapps.com/blogs-uk/...` | **HTTP 403, Cloudflare block** reported against `wpenginepowered.com` |
| `support.payapps.com/en/articles/8885088...` | **HTTP 401**, sign-in required |
| `apps.xero.com`, `retentiontrack.com`, `fergus.com`, `bills.parliament.uk` via **WebFetch** | **`getaddrinfo ENOTFOUND`** every time. The agent proxy reported healthy (`bundleCoversEveryHost: true`, no relay failures) and the same URLs returned HTTP 200 via `curl`. All Retention Track and Xero evidence above was therefore collected by curl with local HTML-to-text extraction, not WebFetch. Worth telling Bob: **WebFetch DNS is unreliable in this environment; curl works.** |
| `itunes.apple.com` | Two of eight terms returned a 0-byte body on first call. Both retried and returned full result sets. No term was scored as "no competitor found" on an empty body |

**Could NOT verify, ranked by how much it matters:**

1. **Whether Retention Track's UK reminders actually fire off UK subcontract dates in production.**
   Its own listing hedges: "claims built to match local legislation in AU, NZ and the developing UK
   legislation." I have the marketing claim, not the behaviour. This is the single fact that could
   soften the verdict, and it would not rescue gates 4 or 5.
2. **The Commercial Payments Bill's status as of today.** Parliament blocked. Both law-firm sources
   are dated before the third reading and both warn of amendment. Do not quote the ban as settled.
3. **Whether Eque2, Integrity Evolution Mx, COINS, RedSky or Causeway carry a retention due-date
   field.** Searches surfaced none of these vendors. Likely yes, on the ledger side.
4. **Payapps pricing** (£32–£270/month, £35 per AFP, first AFP free monthly) — `[snippet]` only,
   pricing page not opened.
5. **The £10.5bn / £7.8bn / £700m retention figures** — campaign letter, reported second-hand,
   article undated in retrieved text. Advocacy, not statistics.
6. **The "65% late / 25% never paid" figures** — cited by a law firm as said at Lords Report Stage.
   Hansard not reached.
7. **Top Service's 25% commission** and Hawkswell Kilvington's retention recovery terms —
   `[snippet]`; the HK PDF sits on a 2013 upload path and may be stale.
8. **No UK practitioner verbatim complaints found** on forums. UK evidence of the pain comes from
   a trade body, a government consultation and a lobbying letter, not from subcontractors posting
   in their own words.

**Consultancy-commentary discipline:** the "October 2011 pay-when-certified ban" claim appears in
several law-firm and software-vendor pages. I traced it to the actual instrument —
s.110(1A)–(1C) HGCRA inserted by the Local Democracy, Economic Development and Construction Act
2009, commenced 1.10.2011 (E&W) / 1.11.2011 (Scotland) — and it checks out. `[verified-fetch]`
The claim that is **not** supportable from legislation, and which several vendor pages imply, is
that any statute fixes *when* retention must be released. It does not.

Searches used: 13 WebSearch calls, 8 GB App Store term queries, 14 direct page fetches.
