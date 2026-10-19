# Hard gate — GovCon recertification date portfolio — VERDICT: **FAIL. DROP THE NICHE TODAY.**

Date: 2026-10-19 · Analyst: research analyst (sub-agent) · Gate per `deep-dive-govcon.md` §8 and the
standing rule in `CLAUDE.md` §1, *"Search the mechanic, not the rival."*

**FAIL.** Not on one incumbent app, but on the load-bearing fact the deep dive's conditional pass was
built on. §8 passed the gate on exactly one claim: *"GSA and SBA do **not** send: the HUBZone
triennial window ... the 8(a) annual review anniversary ... the CPARS 14-day comment window."*
**SBA notifies on every programme in the portfolio, free, by email.** HUBZone: the programme office
notifies through the HUBZone system **30 days before the anniversary**. WOSB: SBA emails
**beginning at the 120-day mark** of the three-year anniversary. VOSB/SDVOSB: initial notice
**90 days** before the eligibility end date, **plus reminder notices during that window**. 8(a):
annual attestation in Certify plus the BOS's written request. CPARS: the 14-day clock starts with a
**CPARS-system-generated notification** to the contractor. Every row of our register is already
somebody's free email, computed from the real record, exactly as the SAM row was.

Add two more: a govcon-specific renewal tracker with our reminder ladder already ships
(**ExpiresOS**), and the portfolio is **shrinking** — HUBZone went annual → triennial, 8(a) is a
fixed nine-year term with no renewal, and recertification rules were consolidated into one section.
Fewer annual events means fewer reasons to hold a subscription.

Per CLAUDE.md §1: *"Kill bad ideas fast."* Dropping.

---

## 1. Mechanic-search results — searched first, in the owner's words

Queries run before any product name: *"when is my 8(a) annual review due"*, *"HUBZone
recertification deadline tracker"*, *"SAM registration expiration reminder"*, *"CPARS comment period
14 days"*, *"federal contractor compliance calendar"*, *"8a annual review checklist spreadsheet"*,
*"small business certification renewal reminder"*, *"we monitor your SAM registration"*, *"track all
your federal certifications one dashboard"*.

**Everything below is `[search-snippet]`. Zero pages opened this run** — see §4.

### 1a. The decisive finding: the official notices cover the whole portfolio

| Date in our register | Who already emails about it, free | Evidence |
|---|---|---|
| SAM 365-day expiry | GSA, to the Entity Administrator at **60/30/15 days and on the expiration date** | <https://gao.az.gov/news/samgov-entity-validation-reminder> · <https://www.fedready.us/guides/sam-gov-renewal> |
| **HUBZone triennial window** | **SBA HUBZone programme office, through the system, 30 days before the anniversary date, "and provided instructions"** — §8 said no source confirmed any notice | <https://sbaone.atlassian.net/wiki/spaces/UCPUKB/pages/3973316609> · <https://www.supplierdiversity.com/blog/sba-certification-changes-2026-complete-guide/> |
| **WOSB/EDWOSB** | **SBA email notifications "beginning at the 120-day mark" of the three-year anniversary**; material changes reportable within 30 days | <https://wosb.certify.sba.gov/knowledgebase/portal-article/KAB-01302/en-US> |
| **VOSB/SDVOSB** | **Initial email 90 days before the eligibility end date to the SAM.gov business contact, then reminder notices through the window** | <https://sbaone.atlassian.net/wiki/spaces/UCPUKB/pages/3823403009> |
| 8(a) annual review | SBA sets the date **per firm, by its own notice** (one documented case: notified 27 June, due 28 July). Not computable from an anniversary — so we cannot build the row at all | <https://smallgovcon.com/8a-program/sba-8a-program-participant-terminated-for-missing-annual-report/> |
| **CPARS 14 days** | **"The contractor will receive a CPARS-system generated notification when an evaluation is ready for comment."** The notification *is* the clock's start; we never see it | FAR 42.1503 via <https://samsearch.co/far-navigator/42-1503-procedures> |
| JV's own registration | Not a date. An existence check. Nothing to remind | — |

**This is the same failure mode as the SAM row, repeated six times.** §8's own test — *"a compliance
reminder that is silently wrong is worse than no reminder"* — applies to every one of these, because
every one would be manually entered by the owner while the authoritative system emails the real date.

### 1b. A govcon-specific renewal tracker already ships, with our reminder ladder

**ExpiresOS** (`expiresos-web.onrender.com/government-contractors`) was in §10 marked *"Not
obtained."* It is now specified: *"renewal items such as **SAM.gov registration, insurance,
clearances, and CMMC**"*, with **"reminders at 90, 60, 30, 14, 7, and 1 days out"** and a **default
12-month renewal cycle**. That is our escalating ladder, our multi-item register, and our ICP, in a
product that exists. Price and free tier `[GAP]` — host is still a free Render subdomain, so it is
early. **It is not a funded incumbent; it is proof the idea is obvious and already taken by someone
with no advantage over us.**

### 1c. Free SAM-only watchers that compute from the real record

- **FedReady** (`fedready.us`): *"when you fill in your business profile with the UEI lookup,
  FedReady saves your SAM.gov expiration date and emails you 60 days and 14 days before it expires,
  and again if it lapses."* **Free tier, no card, "no end date planned."** A second search read the
  same pricing copy as referring to *plan* renewals, so this is **contested** — but note the
  mechanism: a **UEI lookup**, i.e. the real record, not manual entry. If it works, it is strictly
  better than our SAM row at $0.
- **CageCheck** (`getcagecheck.com`): free vetting tool showing an **expiration countdown** with
  **opt-in email reminders** so you are *"warned before any one of them lapses."*
- **GovConAPI** sells a *SAM Registration Expiration Checker* endpoint, **$39/mo Pro**.

### 1d. Free checklists from the channel we planned to use

- **USFCR** — the $399-renewal vendor — publishes a free *Year-End Compliance Checklist* telling the
  owner to *"confirm active status, note the renewal date"* and *"check expiration and maintenance
  dates on each set-aside certification you hold."* The paid-labour channel gives the date list away.
  <https://blogs.usfcr.com/year-end-compliance-checklist-2026-vs.-2027-requirements>
- **No APEX Accelerator spreadsheet found** after two passes — a genuine `[GAP]`, not a clearance.
  APEX sites were not indexed; this is the single most likely place a free competitor is still hiding.

---

## 2. Suspect table

| Suspect | What it is | Tracks the portfolio? | Price | Verdict |
|---|---|---|---|---|
| **SBA / GSA official notices** | Email, from the authoritative record | **YES — every programme, see §1a** | Free | **Decisive. Kills the gate.** |
| **ExpiresOS** | Web renewal tracker, *"Built for government contractors"* | **Partly, and by our exact design**: SAM, insurance, clearances, CMMC; 90/60/30/14/7/1-day ladder; 12-month default. 8(a)/HUBZone/WOSB coverage `[GAP]` | `[GAP]` | **Direct competitor, shipping** |
| **FedReady** | Govcon search/bid platform with free tier | SAM expiry from **UEI lookup**, emails 60 + 14 days (contested). SBA certs: no evidence | **Free tier**; Pro $245/yr; Pro+AI $745/yr | Beats us on the SAM row, free |
| **CageCheck** | Free SAM vetting tool | SAM countdown + opt-in reminders | Free | Beats us on the SAM row, free |
| **CLEATUS** (`cleat.ai`) | GovCon AI platform | *"continuous compliance monitoring"*, compliance matrices — proposal-shaped, not a date register | **$375/mo** monthly, $300/mo annual, 7-day trial | Not a date portfolio. Wrong ICP |
| **Bureauify** | GovCon search engine over SAM/FPDS/USAspending, incl. *"deadline tracking"* | Opportunity deadlines, not recertification dates | Free tier; paid from **$29.99/mo** | Not a competitor |
| **Expiration Reminder / CertTracker / Certlister / RenewalTracker / ExpiGuard / Softr template** | Generic certification-expiry SaaS | **Yes, generically** — manual entry, dashboards, email+SMS at **90/60/30/7 days**. 69% of Expiration Reminder's reviewers are small businesses | **~$49/mo** | They perform the computation. Not govcon-worded, and 4x our price — the one place we had room |
| **GovCon CRMs** (Unanet, Deltek, GovWin, Creatio) | ERP / capture | CRM guides describe *"tracking expiration dates (e.g. SAM registration), setting automated alerts for renewal deadlines"* as a standard govcon-CRM function. No named product confirmed | Enterprise | §10's read stands: wrong size of customer |
| **Registration services** (USFCR, SAM USA Filing, Federal Filing, Gov Contract Finder) | Labour | **No tracker. But USFCR gives the checklist away free, and SAM USA Filing bundles "12 months of monitoring" into the filing fee** | $399–$599/yr | Competes as labour, and gives the content free |
| **APEX Accelerator counsellor** | Free human | `[GAP]` — not indexed. **Unresolved** | Free | §10's "most dangerous competitor" still unverified |

### Would an owner buy software here rather than labour? No evidence found.

The brief's question, answered: **I found no one selling a *tool* in this niche who shows any sign of
having survived.** ExpiresOS is on a free hosting subdomain. The generic trackers at $49/mo sell to
HR and fleet managers, not contractors. Every vendor with revenue in this market sells **labour** —
$399/yr renewals, $300–375/mo AI proposal platforms, consultant retainers — and the one monitoring
product I found (**SAM USA Filing**) bundles monitoring *into a filing fee* rather than selling it
alone, which is the market telling us monitoring has no standalone price. Against that:
**certifications and renewal on SAM.gov are free**, consumer-protection sources call the paid
renewal vendors imposters, and this market is explicitly trained to distrust anyone who emails them
about an expiring registration. That is the worst possible trust posture for a paid date reminder,
and it was always this niche's K3 risk. It is unmitigated.

---

## 3. The two facts, settled

### Fact 1 — FAR 52.204-7: **CONFIRMED, with a correction to the deep dive. Confidence: high.**

Registration is required **at the time of offer submission and at the time of contract award**, not
continuously. *"It clarifies that a lapse in SAM registration between proposal submission and award
does not make the offeror ineligible."*

- Interim rule, **12 November 2024**, FR doc **2024-26062**, amending **52.204-7(b)(1)** — issued
  under **FAC 2025-01, FAR Case 2023-018**.
- **CORRECTION: the deep dive's "FAR Case 2024-002" is wrong. It is FAR Case 2023-018.** Searches on
  2024-002 return nothing; FAC 2025-05 (FR doc **2025-14990**, published **7 August 2025**) itself
  says to cite *"FAC 2025-05, FAR Case 2023-018."*
- **Finalised without change.** The change was a response to GAO and COFC decisions enforcing
  continuous registration strictly, *TLS Joint Venture* among them.
- Confidence high (four independent sources agree on substance); **I could not open the clause
  text** — `acquisition.gov`, `federalregister.gov`, `justia`, `ecfr.gov` all DNS-blocked. The case
  number is the one thing I would still check on a reachable connection.

**Consequence: the fear pitch is gone, as the brief predicted.** §0b already forbade telling the
one-day-lapse story. That removes the only hook with genuine urgency.

### Fact 2a — HUBZone is **triennial: CONFIRMED. Confidence: high.**

13 CFR 126.500: recertify *"every three years"*, submitted *"in the 90 calendar days before the
triennial anniversary of its HUBZone certification date."* Final rule **17 December 2024** (FR doc
2024-29393), **effective 16 January 2025**, which *"reliev[ed] the burden of annual recertification
by moving to a triennial recertification requirement"* and *"delete[d] the programme specific
recertification requirements contained separately in SBA's size, 8(a) BD, HUBZone, WOSB, and VetCert"*
in favour of a new consolidated section, reported as **13 CFR 125.12**. Reinstatement is possible if
the firm recertifies within 30 days of the end of its eligibility period. SBA's own 2024
`hz-recertification-factsheet` still describes **annual** recertification and is superseded —
note that this stale official PDF is exactly the kind of source that would have made our engine wrong.

### Fact 2b — WOSB annual attestation repealed in 2023: **NOT CONFIRMED; evidence points the other way. Confidence: moderate that the brief's premise is false.**

Two passes found **no 2023 repeal**. The December 2024 rule made only *"technical changes"* to WOSB
and VetCert. Current sources still describe a live WOSB annual attestation: *"Holders must submit an
annual attestation, and it must be submitted within 30 days of the anniversary date of
certification,"* plus a programme examination every three years; and commentary on the 2024 rule says
firms *"will still need to represent as to size and employees annually."* The **HUBZone** annual
attestation was the one eliminated, on 16 January 2025 — the likely source of the confusion.

**Net effect of 2a and 2b on the thesis:** the portfolio has **fewer annual beats than §1 assumed**
(HUBZone triennial; 8(a) a fixed nine-year term that *"cannot be renewed"*). A tracker whose events
fire once every three years is a product the customer forgets they are paying for. One further
finding cuts the other way and is the only genuinely pro-niche fact in this run: **SBA is removing
the expiration-date field from DSBS profiles and "will not send letters with updated end dates,"**
directing contracting officers to look status up themselves. That makes the owner's own date record
*harder* to confirm — but it strengthens a free lookup tool, not a paid manual-entry reminder.

---

## 4. What I could not reach

**Zero `[verified-fetch]` this run.** Every host refused at the egress proxy with
`getaddrinfo ENOTFOUND`:

- `acquisition.gov`, `federalregister.gov`, `ecfr.gov`, `regulations.justia.com`,
  `law.cornell.edu`, `sba.gov`, `certifications.sba.gov`, `sam.gov`
- **`expiresos-web.onrender.com`** — the direct competitor, never opened; price and SBA-certification
  coverage unknown
- **`fedready.us`**, **`getcagecheck.com`** — the free SAM watchers, never opened; FedReady's free
  reminder claim is contested between two snippet reads
- `smallgovcon.com`, `mofo.com`, `taftlaw.com`, `pilieromazza.com`, `bureauify.com`, `cleat.ai`,
  `samsearch.co`, `usfcr.com`, `napex.us`
- Not indexed at all: **any APEX Accelerator date-tracking handout** (two passes). The most likely
  remaining hiding place for a free competitor.

**The asymmetry that makes a FAIL safe on snippets** (same reasoning as the mariner gate): this FAIL
rests on snippets that **affirm** that official systems send the notices, from four different SBA
knowledge-base pages. It does not rest on silence. A PASS would have required proving a negative
across an unreachable web.

---

## 5. The founder's five-minute manual procedure

Do **A** first. It alone decides it.

### A. The notices — 3 minutes, from the owner's own inbox (this is the gate)
Call or email **two** owners who hold HUBZone and one who holds WOSB or SDVOSB, and ask one question:
*"Search your email for 'recertification'. Did SBA email you before your last one was due, and how
far out?"*
- **FAIL (expect this):** they were emailed — 30 days out for HUBZone, from 120 days for WOSB,
  90 days for VOSB/SDVOSB. **Stop. Do not open Xcode.**
- **PASS:** nobody was emailed and they all found out by accident. Then §8's premise survives and
  the niche reopens.

### B. ExpiresOS — 1 minute, in a phone browser
Open `expiresos-web.onrender.com/government-contractors`. Look for a **price** and for whether the
item list includes **8(a), HUBZone, WOSB** alongside SAM, insurance, clearances and CMMC. If the
list includes the SBA certifications at any price including free, that is a second independent FAIL.

### C. FedReady — 1 minute
Open `fedready.us`, create the free account, run the **UEI lookup** on any real contractor's UEI.
If it returns and stores a SAM expiration date on the free tier, the SAM row is free and computed
from the real record, and ours is manually entered and worse.

### D. Your local APEX Accelerator — the one unresolved question
Phone the nearest office (`napex.us`) and ask: *"Do you give clients a certification-deadline
spreadsheet or calendar?"* Per the brief, **a free spreadsheet an APEX counsellor hands out is a
competitor.** This is the only check I could not do from here at all.

## 6. Exact search terms, for a reachable connection

Mechanic first, every time:
1. `HUBZone recertification notification 30 days anniversary system`
2. `WOSB annual attestation 30 days anniversary 2026` ← settles Fact 2b
3. `"8(a) annual review" notification letter due date how many days`
4. `CPARS contractor notification email 14 days comment`
5. `expiresos pricing government contractors` and `expiresos 8(a) HUBZone`
6. `fedready free SAM expiration reminder UEI`
7. `APEX Accelerator certification deadline spreadsheet template` and
   `PTAC compliance calendar download`
8. `13 CFR 125.12 recertification` and `13 CFR 126.500` (eCFR, for the operative text)
9. `FAR case 2023-018 52.204-7 final rule` ← **not** 2024-002
10. `SAM registration monitoring service standalone subscription` ← the "tool not labour" question

---

## 7. Consequences, stated plainly

- **Gate: FAIL.** Do not build. Do not run E1–E7.
- **Add to CLAUDE.md §2 market exclusions** (operating partner's edit, not a sub-agent's):
  *Federal small-business recertification and registration date tracking — dropped 2026-10-19 at the
  hard gate. SBA emails notices on every programme in the portfolio (HUBZone 30 days, WOSB 120 days,
  VOSB/SDVOSB 90 days, CPARS via system notification), so the "no system sends these" premise of
  deep-dive §8 is false; ExpiresOS already ships a govcon renewal tracker with a 90/60/30/14/7/1-day
  ladder; FAR 52.204-7 no longer requires continuous registration, removing the urgency pitch; and
  the market's only revenue in this space is labour, not tools. Revisit only with evidence that SBA
  stopped sending programme notices.*
- **The method worked, in reverse.** The mariner gate found a rival by searching the mechanic. Here
  the mechanic search found something worse than a rival: **the mechanic is already performed by the
  regulator, for free, for every row.** That is the generalisable test — before asking *who else
  sells this computation*, ask *who already performs it and emails the answer*.
