# Wave 2 — space scan: small UK construction firm compliance & document admin

**Brief:** find the *generalisable* killers for the whole space before scoring any candidate.
Wave 1 spent 554,586 tokens on five candidates; two by-product legal mechanisms resolved nine more
free. This report is written for that leverage.

**Verdict in one line.** This space is **structurally served at both ends**. The small firm already
pays an SSIP/common-database membership whose entire purpose is holding and sharing its compliance
documents, the main contractor's portal already chases it for free, the worker already has a free
digital skills passport, and the exact self-serve product shape we would build — free tier, no
demo, tokenised upload links, automatic chase loop — **already exists and is already priced on a
public page**. Nine of the twenty candidates below die to a killer that cost nothing to apply.
Three weak survivors remain, and each has one cheap search that would finish it.

**Tooling note.** WebFetch is dead environment-wide. Everything marked `[verified-fetch]` was
pulled with `curl` and read locally. Blocked hosts are listed in the caveats section.

---

# Part 1 — The generalisable killers

## K1 — The SSIP / common-database mechanism · **KILLER**

**Statement.** A small UK subcontractor that wants work from main contractors already pays, every
year, for a product whose single purpose is to hold its compliance documents and present them to
all of its clients. Any candidate that amounts to "store and maintain your firm's compliance
paperwork so you can win work" is competing with a line item the buyer already has on direct debit.

Evidence, all `[verified-fetch]`:

| Provider | Published price | Source |
| --- | --- | --- |
| Builder's Profile (subcontractor) | **£299 – £549/yr**, by turnover. "we no longer offer a free membership" | https://www.buildersprofile.co.uk/website/subcontractor-supplier-service/ |
| CHAS Standard / Advanced / Elite | **from £429 / £659 / £949 per year** | https://www.chas.co.uk/membership-packages/ |
| Constructionline Bronze/Silver/Gold/Platinum | **not published** — "a member of our team will be in touch" | https://www.constructionline.co.uk/become-a-bronze-member/ |
| Smas Worksafe | not published; PQQ package "we'll review all your documentation" | https://www.smasltd.com/ |

Verbatim, Builder's Profile `[verified-fetch]`: *"With Builder's Profile's new membership, you can
finally say goodbye to the hassle of managing multiple profiles and documents scattered across
various platforms. Our convenient and secure system allows you to keep, organise, and maintain all
your businesses PQQ and compliance information in one place for all your clients."*
That sentence is the pitch of three of my own Task-2 candidates, written by the incumbent.

**And the market has consolidated.** `[verified-fetch]` https://onceforall.co.uk/ — Once For All now
owns Constructionline, Facilitiesline, Builder's Profile and the former **Acclaim SSIP**, renamed
"Once For All Health & Safety SSIP": *"Constructionline, Facilitiesline and Builder's Profile
memberships include Once For All Health & Safety SSIP."* Same page: *"> 13,990 businesses have a
verified Once For All Health & Safety SSIP."* CHAS reports *"Join over 32,500 companies"*
`[verified-fetch]`. So two groups cover tens of thousands of exactly our target firms.

**Honest limit on this killer.** I could **not** verify that these memberships send the member a
*document-expiry reminder*. CHAS says only that VeriforceONE *"makes it easy to manage your account
and see your compliance status in real-time"* `[verified-fetch]`. That is a dashboard claim, not a
notification claim. Ranked follow-up #1.

## K2 — The main contractor's portal already chases, free to the subbie · **KILLER**

**Statement.** The chasing side is not a gap, because the main contractor's system pushes
notifications outward to the subcontractor at no cost to the subcontractor. The main contractor has
every incentive to chase (it carries the CDM and insurance risk), which is the opposite of the
counter-incentive pattern §0 requires.

Evidence `[verified-fetch]` https://www.buildersprofile.co.uk/website/contractor/ — the main
contractor BASE service feature list includes:
- *"Automatic internal and external notifications"*
- *"Common Database of over 35,000 subcontractors, suppliers and vendors"*
- *"Fixed Health and Safety & Insurance compliance approvals"*
- *"The 'Zero Barriers to Entry' policy enables 100% supply chain inclusion"*
- *"This service is perfectly suited to companies with a small to medium sized supply chain,
  looking to move from a manually maintained system."* — i.e. it already targets the small main
  contractor we were going to sell to.

Verbatim from the same page, Martin Paintin, Director of Procurement, BAM Nuttall `[verified-fetch]`:
*"We required a system that would not only improve our efficiencies but would simplify and reduce
PQQ duplication for the supply chain. It was also important to us that the supply chain incurred
very little cost."*

**Honest limit.** Verified for Builder's Profile's contractor product only. I tried two named main
contractors' own supply-chain pages (`willmottdixon.co.uk/supply-chain`,
`morgansindall.com/supply-chain/`) and both returned HTTP 404; I did not find the correct URLs and
am not going to guess what those pages say. Ranked follow-up #2.

## K3 — The free digital skills passport, both sides · **KILLER for records, PARTIAL for alerts**

**Statement.** Worker qualification records are already held free, twice over: once by the worker in
a free app, once by CITB for the employer. A product that stores a worker's certificates is
competing with free infrastructure run by the scheme that issues them.

`[verified-fetch]` https://www.cscs.uk.com/applying-for-cards/my-skills-part-of-your-digital-skills-passport/ —
CSCS **My Skills**, inside the free My CSCS app: *"My Skills is a one-stop-shop for all your
construction training and qualification records... My Skills is where you can upload any additional
training or courses that sit outside of the card itself."* Named examples it invites the worker to
upload: SMSTS, SSSTS, CPD certificates, *"Employer-led training or courses, such as Toolbox Talks or
inductions"*, *"Proof of Fire Safety or Asbestos Awareness Training"*.

`[verified-fetch]` https://www.citb.co.uk/courses-tests/cards-and-training-records/log-into-the-portal —
CITB **Construction Training Register**: *"a portal where you can search for a construction worker's
training achievements and qualifications. It is free for construction employers to use, but requires
a login"*; employers *"check the skills and competence of your workforce and new recruits"*.

`[verified-fetch]` https://www.cscs.uk.com/ — **CSCS Smart Check**: *"Verify our cards quickly and
securely... Available as an API, mobile app and website."* GB App Store confirms *CSCS Smart Check*
and *My CSCS* are both listed Free, publisher "Construction Skills Certification Scheme Limited"
`[verified-fetch]` via `itunes.apple.com/search?country=gb`.

**Honest limit — and this is the one place the killer is only partial.** My Skills is *per worker*
and the worker owns it; CTR covers only CITB-recorded achievements and is a lookup, not an alert.
Neither gives a 15-man subcontractor **one dashboard of all his lads' expiry dates**. That residual
gap is real — but K6 below closes it.

Also `[verified-fetch]` https://www.cscs.uk.com/apply-for-a-card/renew-or-replace-a-cscs-card/:
*"CSCS cards can only be renewed six months prior to, and up to a year after, the expiry date."*
So a long-horizon reminder product has only a six-month useful window, and many card types
*"cannot be renewed"* at all. And employers already bulk-manage cards through CSCS Online at *"£36
application fee (per card)"* `[verified-fetch]`.

## K4 — The retained H&S consultant · **PARTIAL KILLER, and a genuine GAP on dates**

**Statement.** The retainer kills "write my documents" candidates and does **not** cover
expiry tracking. This is the one Task-1 item where the answer came back favourable.

`[verified-fetch]` Wilkins Safety Group, published price list PDF
(https://wilkinssafety.co.uk/wp-content/uploads/Construction-site-safety-Inspections-Service-Web.pdf):
*"We charge an annual fee of £80 per person with a minimum charge of £800 a year... 1 - 10
operatives the cost is £800... There is also an initial one-off joining fee of £99."* Paid monthly
or quarterly by direct debit. Included: a baseline H&S review, a bespoke H&S policy *"updated on an
ongoing and regular basis"*, specific risk assessments, unlimited advice line, newsletters, and
*"Support for SMAS or equivalent, applications to be on SSIPs Register"*. Items asterisked —
including training and accident investigation — *"may attract an additional fee"*.

**Nothing in that list is document-expiry tracking, a training matrix or certificate chasing.**
So the £67/month consultant produces paperwork and answers questions; he does not watch dates.

**Honest limit.** One Somerset provider is not the market. Ranked follow-up #3: two more published
retainer price lists.

## K5 — The free-template mechanism · **KILLER for any document-production candidate**

**Statement.** Every document a small contractor needs is available free, including from HSE and
from a commercial vendor using templates as lead-generation. A v1 that is "a better template"
is priced against zero.

- `[verified-fetch]` HSE's own site publishes a *"Risk assessment template (Word Document Format)"*
  and *"(Open Document Format) (.odt)"* plus *"Example risk assessments"*:
  https://www.hse.gov.uk/simple-health-safety/risk/risk-assessment-template-and-examples.htm
  (HSE's own caution on the same page, which we would have to repeat: *"Do not just copy an example
  and put your company name to it as that would not satisfy the law"*.)
- `[verified-fetch]` HS Direct gives away free Risk Assessment, Method Statement, COSHH, H&S Policy
  and CDM templates and advertises *"over 500 templates"*, with the stated mission *"to simplify
  Health & Safety for small businesses"*: https://www.hsdirect.co.uk/free-resources/free-risk-assessment-templates/
- `[verified-fetch]` CertCove publishes a *"Free COI spreadsheet"* as a product-page link:
  https://certcove.com/pricing
- `[snippet]` Free Excel training-matrix templates with traffic-light expiry colouring circulate
  generally (ProjectManager; Florence). Not construction-specific, trivially adapted. I did not
  open these and did not find a UK-construction-trade-group spreadsheet. Ranked follow-up #4.

## K6 — The cheap self-serve incumbent is **already here** · **KILLER, and the most important finding**

**Statement.** The brief's hypothesis was that the opening is "one sharp tool, self-serve, to a small
firm that will never run a procurement process". That product exists. Someone has already built it,
priced it publicly, given it a free tier, and solved the cold-start problem more elegantly than we
planned to.

**CertCove** `[verified-fetch]` https://certcove.com/pricing — certificate-of-insurance tracking for
contractors. Its own headline is the argument we were going to make:

> *"Simple, flat pricing. No sales calls. Every other certificate tracking product asks you to book
> a demo before it will tell you what it costs. Ours is on this page. Pick a tier, start free, and
> upgrade when your vendor count grows past it."*

- **Free — $0, 3 vendors, "The full chase loop and renewals"**; Starter **$99/mo, 50 vendors**;
  Pro **$199/mo, 250 vendors**. *"No per-user pricing."*
- *"Tokenized upload links (no vendor login)"* · *"The full chase loop with automatic reminders"* ·
  *"Agent escalation when a sub goes quiet"* · *"Renewal requests before every expiration"* ·
  *"Complete audit trail"*.
- *"Do my subcontractors have to pay, or create an account? Neither. Vendors receive a secure link,
  upload from any device, and never create a login. You are the only one who pays."* — that is a
  cleaner answer to guardrail 5b **and** to gate 10 than anything in our brief.
- Built by *"Salish Studios LLC, a small independent team"* `[verified-fetch]` (GetApp listing). So
  this is a two-person-scale product, which proves buildability and proves there is no moat.
- **Weakness:** US-centric — ACORD 25, W-9, a Washington State licence lookup. UK localisation
  (EL/PL/PI, SSIP, CSCS, CIS) is genuinely unserved *by CertCove*. That is the thinnest kind of
  opening: a localisation gap in front of an incumbent who can close it in a sprint.

**Site Manager Pro** `[verified-fetch]` https://www.sitemanagerpro.co.uk/ — *"the award-winning
subcontractor management app built for UK new-build housebuilding"* (GB App Store, Free to download).
Its own feature copy kills two of my candidates outright:

> *"Create and automatically maintain a live subcontractor competency matrix that's always tender-
> and audit-ready. Build any certificate or qualification template in minutes. Set custom expiry
> reminders via in-app notifications, email or SMS so trades renew on time - every time.
> Automatically prevent trades from being allocated work if their certification has lapsed. Track
> anything: Public Liability Insurance, Face-Fit Tests, CSCS cards and more."*

**Fast RAMS** `[verified-fetch]` https://www.fastrams.co.uk/ — *"Generate professional RAMS templates
in 10 minutes... Only £12.99 — no subscription, no hassle."* *"Preview for free • Pay only when
satisfied • Instant download"*, *"Secure payment via Stripe"*, *"No account setup."* Its own
comparison table prices subscription rivals at *"£30-50/month"*.

**Risk Assessor Pro** `[verified-fetch]` https://www.riskassessor.net/plans/subscribe —
**£18/user/month for 1–10 users**, £16 for 11–20, £14 for 21–50, *"Start Your Free 14-Day Trial"*,
*"Access to all core modules"*: Risk Assessments, Method Statements, Audits & Checklists, Incident
Reporting, hazard libraries, *"Instant review & sign-off links"*, *"Link Risk Assessments to Method
Statements for a full, send-ready RAMS document"*.

**GB App Store, one curl per mechanic** `[verified-fetch]`
(`https://itunes.apple.com/search?term=...&country=gb&entity=software`). Every mechanic in the brief
returned live UK products, all listed Free to download:
- *subcontractor compliance* → PPAC Compliant101 (*"digital workforce compliance solution built for
  construction"*), Compliance Genie, Insite, Site Manager Pro, Bolster Systems, Navitas Compliance
- *site induction construction* → Induction Manager (*"designed for construction companies of all
  sizes who want to improve their record keeping"*), innDex, 1Breadcrumb's Breadcrumb (*"built for
  the UK & Irish construction industry"*), plus Miller Homes' and St Modwen's **own** induction apps
- *RAMS* → Fast RAMS, Risk Assessor Pro, RAMS Creator, MY Risk Assessments (Access UK), QuidvisRisk
- *training records* → Skillko, M Group Training & Compliance, smart class by QualHub
- *certificate expiry construction* → Chime Construction Software, My CSCS, PPAC Compliant101

**Consequence for the rubric.** The "Competitive weakness" row's 5 — *"nothing credible;
spreadsheets and paper"* — **is not available anywhere in this space.** For every obvious job here,
the honest score is 1 or 2.

## K6b — The counter-weight: the demo wall · the only real **GAP**

Being adversarial in both directions: there *is* a verified structural hole, and it is narrow.

| Tool | Price | Self-serve? |
| --- | --- | --- |
| Fast RAMS | £12.99 one-off | Yes, Stripe, no account `[verified-fetch]` |
| Risk Assessor Pro | £18/user/mo (1–10) | Yes, 14-day trial `[verified-fetch]` |
| **— gap —** | **£20–£300/mo, UK, one job** | **nobody found** |
| HandsHQ | **£275/mo** (≤10 users), £550 (≤25), £750 (≤60), *"Billed annually + set up fee"* | No — site CTA is *"Get a free 30 min demo"* `[verified-fetch]` https://www.handshq.com/pricing |
| innDex | not published — *"Please get in contact with our sales team"* | No `[verified-fetch]` |
| HS Direct software | not published — *"Book a Software Demo"* | No `[verified-fetch]` |
| Constructionline Bronze | not published — *"a member of our team will be in touch"* | No `[verified-fetch]` |
| Site Manager Pro | not published — *"Fill in the form - we'll do the rest"* | No `[verified-fetch]` |

HandsHQ's £275/mo entry tier is **£3,300/yr minimum plus a set-up fee** for a ten-person firm, and
you cannot buy it without a call. That is the gap. But note what sits inside it: HandsHQ already
ships both halves of the job — RAMS **and** a *"Training Register — Ensure your team always has the
right training for the job"*, with *"Integrate RAMS with Training Register to pull through training
and competency records"* and *"Schedule regular reviews and get notified when it's time to review
your RAMS"* `[verified-fetch]`. So the gap is **price and sales motion, not capability**. We would
be selling the same feature cheaper to firms who have already decided not to buy it.

## K7 — The statutory free-service mechanism · **KILLER**

**Statement.** Where the compliance job is a government process, the government ships the free tool.

`[verified-fetch]` https://www.gov.uk/what-you-must-do-as-a-cis-contractor/verify-subcontractors —
*"You can verify subcontractors using: the free HMRC CIS online service"*, and *"If you need to
verify more than 50 subcontractors you'll need to use commercial CIS software"* — i.e. the free
service covers the whole of our ≤50-staff target. Plus CSCS Smart Check free as API/app/website
(K3). This closes CIS verification, card verification and anything else where HMRC, HSE, CITB or a
card scheme has already built the lookup.

---

# Part 2 — Candidate brainstorm (20)

Buyer is the small firm paying by card. "3PD" = would store third-party personal data (gate 10).

| # | Candidate | Who pays | What they lose | Who holds the data | 3PD |
| --- | --- | --- | --- | --- | --- |
| W1 | Chase my subbies' insurance & SSIP certificates | Small main contractor | Uninsured sub on site; insurer repudiation; PC liability | The subbie | Firm-level, light |
| W2 | My own workforce's card/ticket expiry dashboard (CSCS, IPAF, face-fit) | Subbie owner | Lad turned away at the gate; a lost day's labour | Scheme + the worker | **Yes, heavy** |
| W3 | RAMS generator for my trade | Subbie owner | Rejected RAMS; a day's delay to start on site | Nobody — the firm writes it | No |
| W4 | Site induction recorder | Small main contractor | No proof of induction at an HSE visit | The firm | **Yes** |
| W5 | Training matrix / competency matrix | Subbie owner | Failed audit; untrained operative on a task | Provider + CITB | **Yes** |
| W6 | Tender/PQQ document pack assembler | Subbie owner | Tender not submitted; dropped from a list | The firm | No |
| W7 | CIS verification + monthly return deadlines | Subbie owner | 30% deduction; £100+ late-return penalties | HMRC | Yes (subbie NINOs) |
| W8 | O-licence, MOT, tacho and fleet compliance | Owner with vehicles | O-licence curtailment; a prohibition | DVSA / Traffic Commissioner | Yes (drivers) |
| W9 | Defects & snagging list | Small main contractor | Retention withheld; rework | The firm | No |
| W10 | Retention & defects-liability release tracker | Subbie owner | 2.5–5% of contract value unreturned | The main contractor | No |
| W11 | Own-plant statutory exam / PAT / calibration register | Owner of the kit | A machine stood down; an HSE notice | The inspection company | No |
| W12 | "Which client wants what, and what have I sent them" — a client-by-client document ledger | Subbie owner | Dropped off a framework for a stale certificate | Each main contractor, separately | No |
| W13 | Toolbox talk / briefing evidence log | Small main contractor or subbie | No evidence of briefing after an incident | The firm | **Yes** |
| W14 | Face-fit test register | Subbie owner | Invalid RPE; HSE enforcement | The test provider | **Yes** |
| W15 | Temporary works register + design-check validity | Small main contractor | A collapse; an HSE notice; a scheme built with no check | The TW coordinator (a site-based role) | No |
| W16 | Scaffold handover & TG20 design-brief paper trail | Small main contractor | Unsafe scaffold; a notice | The scaffold contractor | No |
| W17 | Gate log — who's on site today, are their cards in date | Small main contractor | Uncarded operative; a card-fraud finding | CSCS | **Yes** |
| W18 | Payment-application & HGCRA notice-date tracker | Subbie owner | A whole month's application time-barred — cashflow | The contract; the paying party's QS | No |
| W19 | Firm's own insurance & accreditation renewal calendar | Subbie owner | Lapsed EL/PL; off a tender list | Broker + accreditation body | No |
| W20 | CITB grant & levy claim deadlines | Subbie owner | Unclaimed grant on training already paid for | CITB | Yes (trainees) |

---

# Part 3 — Killers applied as a free filter

**No per-candidate search budget was spent on any row below that is marked killed.**

| # | Verdict | Killed by | One-line reason |
| --- | --- | --- | --- |
| W1 | **KILLED** | K6 + K2 | CertCove ships the exact product, free tier, tokenised links, no demo; and the main contractor's portal already sends *"automatic internal and external notifications"*. |
| W2 | **KILLED** | K6 + K3 | Site Manager Pro: *"live subcontractor competency matrix... custom expiry reminders via in-app notifications, email or SMS"*, tracking *"Public Liability Insurance, Face-Fit Tests, CSCS cards"*. CSCS My Skills holds the worker's side free. Plus gate 10 heavy. |
| W3 | **KILLED** | K5 + K6 + K4 | HSE gives the template away; HS Direct gives 500+ away; Fast RAMS £12.99 with no account; Risk Assessor Pro £18/user/mo; the £800/yr consultant writes them. |
| W4 | **KILLED** | K6 | Induction Manager, innDex, Breadcrumb, plus Miller Homes' and St Modwen's own free induction apps. Gate 10. |
| W5 | **KILLED** | K5 + K6 + K3 | Free Excel matrices with expiry colouring; HandsHQ Training Register; Skillko; Site Manager Pro; CITB CTR free to employers. |
| W6 | **KILLED** | K1 | This is verbatim the Builder's Profile pitch — *"keep, organise, and maintain all your businesses PQQ and compliance information in one place for all your clients"* — and the buyer already pays £299–£949/yr for it. |
| W7 | **KILLED** | K7 | *"the free HMRC CIS online service"*, free up to 50 subcontractors. Also edges on financial advice (§3.5). |
| W8 | **KILLED** | wave-1 statutory-report mechanism + crowding | MOT, tacho and O-licence dates are issued by DVSA/garage with the next due date; fleet-compliance software is a large served market. Gate 10. |
| W9 | **KILLED** | 5c + K6 | Snagging is a suite job and a crowded one; it is also not a compliance date. |
| W10 | **KILLED (wave 1)** | Retention Track at £10/contract | Form widening changes nothing; §0 was never the problem. |
| W11 | **KILLED (wave 1)** | statutory-report mechanism + Papertrail | The examiner is legally obliged to state the next due date. |
| W12 | **SURVIVES — weak** | — | K1 covers it only inside Once For All's own network; a main contractor with a bespoke portal or an emailed spreadsheet is outside it. |
| W13 | **KILLED** | K6 + K3 | Site Manager Pro, Compliance Genie, innDex; and CSCS My Skills explicitly invites workers to upload *"Toolbox Talks or inductions"*. |
| W14 | **KILLED** | wave-1 statutory-report mechanism | The tester issues the certificate with the retest date; too narrow regardless. |
| W15 | **SURVIVES — weak** | — | No external body holds the date; nothing found in the GB App Store searches. Rule set is the problem, not the competitor. |
| W16 | **KILLED** | §3 paywalled rule set + statutory report | TG20 is NASC-paywalled; the scaffold inspection report carries the date. |
| W17 | **KILLED** | K3 + K6 | CSCS Smart Check is free as API, app and website; 1Breadcrumb, innDex and PPAC ship the gate log. Gate 10 heavy. |
| W18 | **SURVIVES — with a severe caveat** | — | The paying party's QS profits from the subbie missing it: a clean §0 pass. But the dates come from the contract, not a free public rule set, and the advice line is thin. |
| W19 | **KILLED** | §0 | The broker earns commission on renewal and the accreditation body bills annually; both email. Same pattern as wave-1 Group C. |
| W20 | **KILLED** | §0 + gate 10 | CITB administers the grant and the deadline; and it is a grants process, not a date portfolio. |

**Score: 17 killed free, 3 weak survivors.** Not one survivor scores above 2 on competitive weakness
with confidence, and K6b says the only verified gap is price-and-sales-motion rather than capability.

---

# Part 4 — The three strongest survivors, and the one cheapest search that kills each

I am not recommending any of these. I am naming them so wave 3 can be dispatched narrowly, and in
each case the search below is the single cheapest thing that would end it.

### Survivor 1 — W18, the payment-application / notice-date tracker (strength of bet: **4/10**)

Strongest on §0 and on pain. The paying party's QS has a direct financial interest in the
subcontractor missing an application date, which is the rarest pattern in this whole scan, and one
missed application is a month of cashflow. Clean on gate 10: the subbie's own contracts only, no
third-party personal data. Fails badly on §3's rule-set clause — the dates come from each contract,
not from legislation we can cite — and sits one sentence away from legal advice, which §3.5 excludes.
Buyer is a subcontractor owner: contact proximity 3, pending the 2026-10-31 introduction.

**Cheapest killing search:** `Payapps subcontractor payment application free to subcontractor price`
— if Payapps (or a Xero/QuickBooks construction add-on) is free to the subcontractor because the
main contractor pays for it, this dies on the same mechanism as K2, in one search.

### Survivor 2 — W12, the client-by-client document ledger (strength of bet: **3/10**)

The only candidate that survives K1 on a real distinction: Builder's Profile and Constructionline
solve "one profile for all clients" **inside their own networks**, and the small subbie's actual pain
is the main contractor who is *not* in one — the one that emails a spreadsheet and a list of
documents. Clean on gate 10. Single-player by construction, so 5b is satisfied. But pain-£ is low,
it is close to a to-do list, and there is no rule set at all, so no cited-sources deliverable and no
60-second in-browser aha. That last point is what makes it a 3 and not a 5.

**Cheapest killing search:** fetch the Once For All / Constructionline member support pages for
`document expiry reminder` — if the £299–£549 membership already emails the member before a document
expires, W12 dies instantly and K1 is upgraded from "holds documents" to "holds and notifies", which
also retro-kills anything like W6 and W19 for good. **This is the single highest-value search in
wave 3 and it should be run first regardless of which candidate wins.**

### Survivor 3 — W15, the temporary works register and design-check validity (strength of bet: **3/10**)

The only row where I found no competitor in any App Store search and no body holding the date — the
temporary works coordinator holds it, and the TWC is a site-based role, which is the one role our
founder can actually reach. Highest pain of the three if it goes wrong. But: the buyer is the small
main contractor's owner while the user is a PAYE TWC or site manager, which is hard gate 9 all over
again; the governing document, BS 5975, is BSI-paywalled and therefore out under §3; and "register"
work is organisational, so again no rule set and no aha.

**Cheapest killing search:** `"temporary works register" template free download OR Temporary Works
forum TWf free register` — the Temporary Works forum publishes free guidance, and if a free register
template or spreadsheet is circulating, that is the §0.2 free-spreadsheet competitor and it dies.

---

# Part 5 — Evidence caveats

**Blocked or failed hosts, reported not routed around:**
- `www.ukbusinessforums.co.uk` — returns a browser-verification interstitial (*"Checking your
  browser"*). No forum quotes obtained. **This is why there are no verbatim user complaints in this
  report: no verbatim complaints found.**
- `www.chas.co.uk` — returns Cloudflare HTTP 403 to a plain curl; succeeded with full browser
  headers. Recorded here because the first attempt would have looked like a block.
- `www.compliancegenie.net`, `www.buildpass.co.uk` — proxy `CONNECT tunnel failed, response 502`,
  on first attempt and on retry.
- `skillko.com/pricing/` — HTTP 403.
- `www.constructionline.co.uk/suppliers/`, `/membership/`, `www.safecontractor.com/pricing`,
  `www.chas.co.uk/rams/`, `www.willmottdixon.co.uk/supply-chain`,
  `www.morgansindall.com/supply-chain/` — all HTTP 404. Correct URLs not found; contents not guessed.
- `WebFetch` — `getaddrinfo ENOTFOUND` on every host, as the brief stated. Not recorded as a block.
- `WebSearch` is US-weighted and was a poor instrument for UK pricing; almost every price in this
  report came from a direct curl instead.

**What I could NOT verify, ranked by how much it matters:**
1. **Whether an SSIP/common-database membership emails the member before a document expires.** This
   decides K1's strength and kills or spares W12, W6 and W19 in one shot. Fetch: Once For All /
   Constructionline member support and VeriforceONE help pages.
2. **Whether main contractors' own bespoke portals chase the subbie free.** K2 rests on Builder's
   Profile's feature list alone. Fetch: three named main contractors' supply-chain pages (correct
   URLs needed — mine 404'd).
3. **Whether the H&S consultant market generally excludes date tracking**, or whether Wilkins is
   unrepresentative. Fetch: two more published retainer price lists.
4. **Whether a UK-construction-specific free training-matrix or certificate-expiry spreadsheet
   circulates in trade groups.** My template evidence is HSE, HS Direct and generic US/social-care
   Excel files, the last two `[snippet]`.
5. Site Manager Pro's and HandsHQ's actual prices to a ten-person firm (both are quote- or
   demo-gated; HandsHQ's list price is published, its set-up fee is not).
6. Whether CertCove has a UK customer base, or any UK clone.

**Verification-level discipline.** Every price and every quote in this report is
`[verified-fetch]` from a page I opened locally, except the four items explicitly marked
`[snippet]`. No level has been upgraded. No statistic, price, review count or member count has been
estimated or invented; where a price is not published I have written "not published" rather than a
range.

**Consultancy/law-firm commentary:** none was used as a source for any rule in this report. The only
regulatory claims are from `gov.uk`, `hse.gov.uk`, `citb.co.uk` and `cscs.uk.com` directly.

**A weakness of this whole space that no candidate escapes.** §3 now says plainly that where a
product merely organises what users enter, the absence of a rule set *"is a real weakness, not a
neutral fact, because it removes the cited-sources deliverable and the 60-second in-browser aha"*.
Every one of the three survivors is in exactly that position. None of them computes anything from
legislation. That, as much as the competitor evidence, is why none scores above 4/10.

---

## Handoff
- **Wrote:** `/home/user/new-venture/research/wave2-space-scan.md`
- **Verified:** Builder's Profile subcontractor price (£299–£549) and its "no longer offer a free
  membership" line; Builder's Profile main-contractor *"Automatic internal and external
  notifications"* and the BAM Nuttall quote; Once For All's ownership of Constructionline /
  Facilitiesline / Builder's Profile / Acclaim-renamed SSIP; CHAS £429/£659/£949 and 32,500
  companies; CSCS My Skills scope; CSCS 6-month renewal window and £36 card fee; CITB CTR free to
  employers; HSE's free risk-assessment template; HS Direct's free template set; Wilkins Safety
  £80/head, £800 minimum, £99 joining, and the absence of date tracking from its inclusions;
  CertCove's $0/$99/$199 tiers, tokenised no-login uploads and "no sales calls" copy; Fast RAMS
  £12.99 one-off via Stripe with no account; Risk Assessor Pro £18/£16/£14 per user per month with a
  14-day trial; HandsHQ £275/£550/£750 per month billed annually plus set-up fee, demo-gated;
  Site Manager Pro's competency-matrix and SMS expiry-reminder copy; innDex sales-gated pricing;
  the free HMRC CIS online service and its 50-subcontractor limit; GB App Store results for six
  mechanics.
- **Could NOT verify:** ranked list of six items in Part 5, headed by whether an SSIP membership
  emails the member before a document expires — that one search changes three verdicts.
- **Needs from another agent:** none blocking. For Bob as switchboard: the three named searches in
  Part 4 are scoped for one narrow wave-3 scout each, and search 2 (Once For All member document
  expiry reminders) should be run first whatever else is dispatched, because it is the cheapest
  thing that can kill the largest number of remaining rows.
- **Changes my own score:** Yes. Competitive weakness across this entire space drops to **1–2**;
  the rubric's 5 ("nothing credible; spreadsheets and paper") is unavailable here. My strength of
  bet on the best survivor is **4/10**, and on the space as a whole **3/10**. Recommendation: do not
  open a wave-3 deep dive on any candidate until search 2 above has returned.

---

## Bob's note on the W12 search, 2026-10-24

The scout asked for one search to be run before any wave-3 deep dive: whether Once For All or
Constructionline already email members before a document expires. If they do, K1 upgrades from
"holds" to "holds and notifies" and retro-kills W12, W6 and W19.

**Result: not established. The claim stays `[snippet]` and was not upgraded.**

A search result referenced a Constructionline post saying it sends a 30-day email notice before
insurance expiry. The cited URL (`constructionline.co.uk/?p=7296`) returns **HTTP 404, "Page not
found"**, fetched with full browser headers and following redirects. So the primary source could
not be opened and the claim is not verified. It is recorded as snippet-only, per `CLAUDE.md` §1,
and nothing is built on it.

**Why this was not pursued further.** W12 was already rated 3/10 before this search, and the space
verdict does not depend on it: CertCove, Site Manager Pro, HandsHQ, Fast RAMS and Risk Assessor Pro
are all verified and already serve this buyer. Confirming one more notifier would make a dead space
slightly deader. Spending further search budget on it would be exactly the candidate-by-candidate
pattern wave 2 was designed to avoid.

**It is a question for the founder's interview instead**, where it costs nothing: *"Does
Constructionline or Builder's Profile email you before your insurance expires?"* One sentence from a
member settles what two searches could not.

## The pattern across both waves

Two product forms have now been gated: the single-user offline app, and the small-firm web app with
accounts and multi-party chasing. **Both are structurally served**, for different reasons:

| Form | Why it was served |
| --- | --- |
| Single-user app | Statutory inspection reports must state the next due date; employers must provide equipment, so individuals never own it; counterparties publish free portals |
| Small-firm web app | The SSIP and common-database memberships already hold and share the documents; the main contractor's portal chases free; CSCS My Skills and the CITB register are free; HSE gives the templates away; and a cheap self-serve incumbent already exists |

**The gap that remains is price and sales motion, not capability.** Between roughly £13 one-off and
£275 a month, demo-gated, there is room. But HandsHQ already ships both RAMS and a training
register, so entering that gap means selling the same capability cheaper, with no rules engine, no
cited sources and no 60-second aha. That is a price war against funded incumbents, which is the
weakest possible position for two people.

**What has never been tested, across roughly 680,000 tokens of desk research:** whether any of this
is actually painful to a real person. Both waves searched hard for customer voice and both recorded
**"no verbatim complaints found"**. Not one UK construction practitioner has been spoken to. The
single input that has repeatedly changed a verdict for free is the founder's own industry knowledge
— one sentence from him reversed two gate verdicts on the top candidate.

That is where the next move has to come from, and it is not another search.
