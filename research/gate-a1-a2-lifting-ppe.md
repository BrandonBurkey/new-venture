# Mechanic gate — A1 fall-arrest PPE service lives / A2 lifting accessory 6-month thorough examination

Run 2026-10-24. ~14 web searches, ~35 direct page fetches via `curl` (see §7 on WebFetch).
Verification levels are marked on every claim and never upgraded except where a re-fetch opened the
page, which is called out explicitly.

**Note on independence.** Bob told me mid-task that B1 and B5 had both failed, making these two the
last candidates standing, and asked me not to soften the verdict for that reason. I did not. The
extra work that news prompted — an explicit test of the manufacturer-instructions carve-out, and a
curl re-fetch of every source WebFetch had cost me — made the case against A1 stronger. Both
verdicts below were reached before that message and are unchanged by it.

## Verdicts

| Candidate | Verdict | One-sentence reason |
| --- | --- | --- |
| **A2 — lifting accessories, 6-month thorough examination** | **FAIL** | The free rule set is real and verified, but the competent person who performs the examination is **required by law to write the next due date on the report**, sells the next examination, and increasingly hands the customer a portal — and at least four free iOS apps and two free web templates already compute and remind on exactly this date, one of them explicitly advertising "tracks your 6-month LOLER thorough examinations and reminds you". |
| **A1 — harness / lanyard / fall-arrest service lives** | **FAIL** | The inspection interval is free (INDG367) but the *service life* — the actual mechanic, "when does my harness expire" — is not a public rule at all: it is a per-manufacturer figure that UK practitioners openly disagree about and that a LOLER examiner is paid to judge, so the app would either ship a licensed per-model dataset or issue precisely the verdict `CLAUDE.md` §4 forbids. |

Longlist point 4 predicted "Group A is where the reachable-and-payable overlap might actually sit,
specifically A1/A2". **That prediction is wrong and this file is the evidence against it.** The
reason is not the one the longlist worried about: A2's rule set turned out to be perfectly free, and
the founder's access turned out to be better than assumed. A1/A2 died because the statutory
inspection report *is* the notification (§3), and because the free competitors were already there
(§4).

## Scores (rubric weights from `research/scoring-rubric.md`, unchanged)

**Revised 2026-10-24 after Bob routed a corrected founder input:** a site manager *can* introduce
the founder to a subcontractor owner, so contact proximity for an owner-operator buyer is 3 (still
capped at 3 — he is not the buyer himself). I have raised contact proximity from 1 to 3 and
audience wealth from 2 to 3 for both candidates, because a small UK construction subcontractor
owner who owns harnesses and slings is now one hop away and is a real buyer. **Both scores went up
and both verdicts are unchanged**, because gates 2, 3, 4 and 8 kill a candidate at any score.

| Criterion | Weight | A1 | A2 | Change |
| --- | --- | --- | --- | --- |
| Pain £ (cost of one mistake) | 20% | 1 | 2 | — |
| Audience wealth | 10% | 3 | 3 | +1 both (subbie owner now reachable) |
| Competitive weakness | 15% | 1 | 1 | — |
| Counter-incentive strength | 20% | 2 | 1 | — |
| v1 buildability | 10% | 2 | 4 | — |
| Reachability | 10% | 3 | 3 | — |
| Founder's contact proximity | 10% | 3 | 3 | +2 both (Bob's corrected input) |
| Willingness to pay | 5% | 2 | 2 | — |
| **Weighted total** | | **1.95** | **2.15** | was 1.65 / 1.85 |

Arithmetic (estimate of weighted mean, shown in full):
A1 = 1(.20)+3(.10)+1(.15)+2(.20)+2(.10)+3(.10)+3(.10)+2(.05) = .20+.30+.15+.40+.20+.30+.30+.10 = **1.95**
A2 = 2(.20)+3(.10)+1(.15)+1(.20)+4(.10)+3(.10)+3(.10)+2(.05) = .40+.30+.15+.20+.40+.30+.30+.10 = **2.15**

One honest consequence of the corrected input, recorded against myself: my first draft scored
contact proximity 1 partly because every individual-owner artefact I found came from arboriculture
and rope access. That remains true of the *evidence*, but it was wrong to let it override the
founder's actual stated access. A construction subbie owner buying harnesses and slings for his own
firm is a legitimate buyer. It does not save either candidate, because what he would be buying is
already free (§4), and because he buys as a company, not out of personal money (§5).

Hard gates failed — either kills the candidate at any score:

| Gate | A1 | A2 |
| --- | --- | --- |
| 2 Counter-incentive | FAIL (interval half) | **FAIL** |
| 3 Mechanic | **FAIL** | **FAIL** |
| 4 Rule set public, free, stable | **FAIL** (service life) | PASS |
| 6 App-Store-safe framing | at risk (see §6) | PASS |
| 8 Not nailed by a funded competitor | **FAIL** | **FAIL** |
| 9 Employer-pays | **FAIL** for the reachable audience | **FAIL** for the reachable audience |

---

## 1. The free-source determination (the most important section)

### A2 — the 6-month interval for lifting accessories is FREE and VERIFIED. This part is good news.

**LOLER 1998 reg 9(3)(a), verbatim** [verified-fetch]
<https://www.legislation.gov.uk/uksi/1998/2307/regulation/9/made>

> "(3) Subject to paragraph (6), every employer shall ensure that lifting equipment which is exposed
> to conditions causing deterioration which is liable to result in dangerous situations is—
> (a) thoroughly examined— (i) in the case of lifting equipment for lifting persons or an accessory
> for lifting, at least every 6 months; (ii) in the case of other lifting equipment, at least every
> 12 months; or (iii) in either case, in accordance with an examination scheme; and (iv) each time
> that exceptional circumstances which are liable to jeopardise the safety of the lifting equipment
> have occurred"

**HSE's own page, verbatim** [verified-fetch]
<https://www.hse.gov.uk/work-equipment-machinery/thorough-examinations-lifting-equipment.htm>

> "Unless there is an 'examination scheme' specifying other intervals, thorough examinations should
> be conducted every: 6 months, for lifting equipment and any associated accessories used to lift
> people / 6 months, for all lifting accessories / 12 months, for all other lifting equipment"

So gate 4 is satisfied for A2. The interval is in the statutory instrument and restated free on
HSE. Nothing paywalled is needed to compute `last examination + 6 months`.

Note: **WebFetch could not resolve `www.hse.gov.uk` or `www.legislation.gov.uk` (getaddrinfo
ENOTFOUND).** `curl` through the configured proxy reached both with HTTP 200. Both quotes above come
from the curl-fetched HTML, so they are `[verified-fetch]`. Any future agent hitting the same
WebFetch DNS failure should use curl rather than concluding the host is blocked.

### A1 — split verdict, and the half that matters fails.

**The inspection interval IS free.** HSE INDG367, *Inspecting fall arrest equipment made from
webbing or rope*, verbatim [verified-fetch] <https://www.hse.gov.uk/pubns/indg367.pdf>

> "These more formal, in-depth inspections should be carried out periodically at minimum intervals
> specified in the employer's inspection regime. It is recommended that there is a detailed
> inspection at least every six months. For frequently used lanyards it is suggested that this is
> increased to at least every three months, particularly when the equipment is used in arduous
> environments (eg demolition, steel erection, scaffolding, steel skeletal masts/towers with edges
> and protrusions). Detailed inspections should be recorded."

and

> "Lanyards should be withdrawn from use and passed to a competent person for a detailed inspection
> to decide whether they should continue to be used, destroyed or returned to the manufacturer for
> testing ... if: there is no evidence that a lanyard has been inspected by a competent person
> within the last six months"

INDG367 also restates the BS figure **inside the free leaflet**, which is a legitimate way to cite
it without shipping the paywalled standard [verified-fetch, same PDF]:

> "BS EN 365:2004 ... the British Standard states that components should be examined 'at least
> twelve-monthly'. This is sometimes taken to be 'annually', although manufacturers of textile
> products usually recommend inspection more frequently than this."

The legal hooks it names are free: PPE at Work Regulations 1992 and Work at Height Regulations 2005
[verified-fetch, same PDF].

**The service life is NOT free, NOT public and NOT settled.** This is the gate-4 failure.
There is no public interval to compute from. The figure is per-manufacturer, measured from
different epochs, and UK practitioners contradict each other in the open. From a real UK
arboriculture thread, verbatim [verified-fetch]
<https://arbtalk.co.uk/forums/topic/96927-age-of-kit-for-loler>

> "I'm sure this question has been asked but I'm finding it hard to get a definitive answer, even
> when looking at the legislation."

> "Depends on manufacturer's recommendation, some give 10 years for harnesses others 5 & some 7.
> Get on the web & download relevant info for your harness etc."

> "Therefore to answer your original question your 5 years can be subjective, your harness could be
> knackered in 6 months but could last 6 years."

> "I have had a harness used infrequently passed by a loler inspector up to 8 or 9 years old, others
> would fail if over 5 years since first use."

That is a demand for pain relief, but it is a demand for a *judgement*, not a *computation*.
Secondary sources confirm the epochs disagree — "10 years from date of manufacturing" in one
manual, and "10 years from date of first use for metal components or 5 years from date of first use
or 10 years from date of first storage for textile components" in another [snippet-only, surfaced
via search, pages not opened: <https://www.bergfreunde.de/out/uploads/products/user_manuals/303-0742.pdf>,
<https://weighmyrack.com/sites/default/files//legacy_files/product_resources/Wild%20Country%20Vision%20Harnesses%20Technical%20Info.pdf>].

### The manufacturer-instructions carve-out, verified explicitly rather than assumed

Bob asked for this to be resolved with URLs and not assumed, because A1 now turns on it. `CLAUDE.md`
§3 permits a niche where "the dates come from the user's own property **and** the intervals are
published free elsewhere — and you must verify that carve-out explicitly".

**Finding 1 — manufacturers do publish service lives free, but I could not open a single one of
them.** Both of the two largest fall-arrest manufacturers host their instructions publicly, and both
blocked an automated fetch:
- `multimedia.3m.com` returned **HTTP 403 Access Denied** from 3M's own Akamai edge
  (`Reference #18.eb18d017...`, `errors.edgesuite.net`) for
  `3m-dbi-sala-delta-full-body-harness-user-instructions.pdf` and the matching datasheet. The proxy
  was *not* the cause: `recentRelayFailures` was `[]` at the moment of the 403.
- `www.petzl.com` returned **HTTP 404** with a 1.3 MB body (a JavaScript single-page-app shell) for
  every article URL tried, including the UK harness-inspection article.

So the actual figures remain `[snippet-only]`, and I am not upgrading them:
- 3M Delta datasheet: "web products shall have a 10-year product life from the date of manufacture,
  after which the product must be removed from service" [snippet-only]
  <https://multimedia.3m.com/mws/media/1719522O/3m-datasheet-fall-dbi-sala-delta-full-body-harnesses.pdf>
- Petzl: "For plastic and textile products, the maximum lifespan is 10 years from the date of
  manufacture ... the date of manufacture does not correspond to the date of purchase, you can find
  it using the serial number" [snippet-only]
  <https://www.petzl.com/GB/en/Sport/News/2018-1-24/How-to-inspect-your-climbing-harness>
- 3M Protecta X: "Inspection frequency requirements must be followed according to AS/NZS 1891.4"
  [snippet-only] <https://multimedia.3m.com/mws/media/1723353O/3m-protecta-x-full-body-harnesses-tds.pdf>

**Finding 2 — the carve-out fails on three independent grounds.**

1. **It is not a rule set, it is a per-model dataset.** §3 requires "the rule set we compute from
   must be public, free and stable". What exists is hundreds of model-specific figures in separate
   PDFs on manufacturer CDNs, measured from *different epochs* — 10 years from manufacture (3M
   Delta, Petzl textiles), 5 years from first use for textiles and 10 from first use for metal
   (another manual), "indefinite" for metal (Petzl), 6–8 years (the Arbtalk poster's own harness).
   Shipping that means compiling and maintaining a licensed-style dataset from hosts that
   actively 403 automated clients — precisely the dependency §3 bans, and precisely what the
   incumbent has already built ("integrated manufacturer data", §4).
2. **Some manufacturers defer to a paywalled standard instead of giving a number.** 3M Protecta X
   points the user at AS/NZS 1891.4; HSE's own INDG367 points at BS EN 365. A per-model lookup that
   sometimes resolves to "go read a standard you cannot afford" is not a computable rule.
3. **The figure is advisory and a competent person overrides it in both directions.** This is the
   decisive one, and it is in verbatim UK evidence above: inspectors pass 8–9-year-old harnesses and
   fail 5-year-old ones. A date we computed would contradict the only opinion that legally counts.

**Verdict on the carve-out: it applies to the 6-month inspection interval, and it does NOT apply to
service life.** The honest fallback — let the user type their own manufacturer's figure — is legal,
buildable and useless as a wedge: it reduces A1 to date arithmetic over user-entered numbers, which
is what `GearLog` ("store all your gear including photos and manuals ... get alerts when it's time
to inspect your gear", 104 GB ratings) and the free tier of `Scannable` (which applies the
*manufacturer's own checklist* for you) already ship. Gate 4 fails for the half of A1 that was its
whole reason to exist.

### The LOLER examination-scheme caveat — it cuts against us, not for us

The brief asks whether the examination-scheme escape hatch makes a computed date unreliable or
makes our record more useful. Verbatim, HSE [verified-fetch, thorough-examinations page]:

> "You have a choice: arrange for thorough examination to be carried out at the intervals specified
> by LOLER (every 6 or 12 months, depending on the equipment - see below), or conduct examinations
> in accordance with an examination scheme, drawn up by a competent person"

> "Where an examination scheme has been drawn up, this should identify and specify: the parts to be
> thoroughly examined / the methods of examination and testing / the intervals for examination"

It is not fatal on its own — the app could show the statutory default and let the user override with
their scheme interval, which is honest and genuinely useful. **But it is fatal in combination with
the next finding:** the thing that varies the interval is a document written by the same competent
person who performs the examination and writes the next due date on the report. Every path leads
back to that person.

---

## 2. Mechanic-search evidence (customer's words, never a product name)

Searches run on the computation, not on rivals: "when does my harness expire", "harness service
life", "sling inspection due", "lifting accessory 6 month examination", "PPE inspection register",
"next LOLER date", "harness inspection due date reminder", "LOLER register template excel",
plus GB App Store term searches on `harness inspection`, `harness expiry`, `LOLER`,
`lifting equipment inspection`, `PPE inspection`, `PPE register`, `sling inspection`,
`lifting gear inspection`, `thorough examination`.

What the mechanic searches returned, before any rival was named:

- **Free web templates that already compute the next due date.** Lumiform's free *Lifting equipment
  register* template FAQ, verbatim [verified-fetch]
  <https://lumiformapp.com/templates/lifting-equipment-register-template_35520>
  > "Is it possible to get notifications in advance of upcoming inspection deadlines?" — "Yes.
  > Lumiform supports scheduled form..."
  A free SafetyCulture LOLER inspection log that "records next inspections due" also surfaced
  [snippet-only] <https://safetyculture.com/library/construction/sms-601-loler-inspection-log-ep-11a-wna4ytfdjrtgi6qb>.
  A paid Excel pack with a thorough-examination due-date log is sold on Payhip [snippet-only]
  <https://payhip.com/b/rquh4>. Per `CLAUDE.md` §0.2 a circulating free spreadsheet **is** a
  competitor, and this one is not even circulating informally — it is productised.
- **Physical tag systems that solve it without software** [snippet-only]: inspection tag packs sold
  as "20 Tags for one month, and 20 Tags for the other month (6 months later)"
  <https://suppliers.bettercaremarket.com.au/products/sling-inspection-tags-40-pack>. Low-tech,
  cheap, already in the user's hand.
- **Three different intervals returned for the same question** across the first page of results,
  which is the real unmet need: not a reminder, but an authoritative answer. We are forbidden from
  supplying an authoritative answer (§4).

No verbatim complaint was found anywhere about *missing* a harness or sling date and paying for it.
The only verbatim UK pain found is the "I can't get a definitive answer" quote above, which is a
request for a ruling. **No verbatim complaints found** on the loss event itself.

---

## 3. Who already holds the date and notifies

This is the counter-incentive gate and A2 fails it outright.

**The statutory report must contain the next due date.** HSE, verbatim [verified-fetch,
thorough-examinations page]:

> "This is a systematic and detailed examination of the equipment and safety-critical parts, carried
> out at specified intervals by a competent person who must then complete a written report. This
> report must contain the information required by LOLER Schedule 1, including: the examination date
> / **the date when the next thorough examination is due** / any defects found which are (or could
> potentially become) a danger to people"

Read that against `CLAUDE.md` §0.1. The party holding the date is the examiner. The law obliges them
to hand the user the next due date in writing. Their business is repeat examinations. They have the
strongest possible commercial reason to tell the user, and a legal duty to put it on paper. This is
not the SBA-emails-you pattern — it is worse, because the notification is a statutory deliverable.

**They also host it for the customer.** SafetyLiftinGear, a UK lifting inspection provider,
verbatim [verified-fetch] <https://www.safetyliftingear.com/news/post/loler-inspection-service>

> "Online certification and inspection records can be accessed through our Core RFID Portal, giving
> you instant access to your documentation whenever you need it."

**Inspection providers schedule the visit for you.** Jungheinrich "schedules visits for the
customer, so examinations are carried out on time" [snippet-only]
<https://www.jungheinrich.co.uk/services/thorough-examination-loler--107970>. A UK inspection
leaflet offers "full certification with online access and timely reminders of re-test requirements"
[snippet-only, weak source — a SlideShare upload, not a provider's own site]
<https://www.slideshare.net/AlexMcIntosh2/loler-leaflet>.

**Manufacturers are embedding it in the product.** A 2023 trade report describes a harness
manufacturer and an NFC-chip firm launching an in-app inspection feature for safety harnesses
[snippet-only — host `coatingspromag.com` did not resolve for WebFetch and was not retried through
curl] <https://coatingspromag.com/safety/safety-industry-news/2023/guardian-and-twiceme-strengthen-partnership-with-launch-of-in-app-inspection-feature-for-safety-harnesses>.
SpanSet, a major UK height-safety manufacturer, ships a free `SpanSet-Inspector` app for
"inspectors of height safety harnesses, lanyards and connectors" [verified-fetch, GB App Store
lookup]. Honeywell, a fall-protection manufacturer, ships free `SafetySuite Inspection Manager`
which performs "inspections ... on the assets that are due for inspections" [verified-fetch, same].

**What I could NOT find:** a free manufacturer registration-and-reminder scheme from 3M DBI-SALA,
Petzl or MSA. The searches returned only product advisories and recall notices, which 3M distributes
*through distributors* ("forward this Product Advisory to any of your customers/users who have
purchased these harnesses from you") [snippet-only]
<https://www.3m.com/3M/en_US/fall-protection-us/support/notices-and-advisories/>. So the one
genuinely unserved sliver is **recall and advisory notice reach** for individually-owned kit — not
a date portfolio, and not what A1 proposed.

---

## 4. Competitor table (GB App Store, `entity=software`, retried where needed; plus web tools)

All App Store rows are `[verified-fetch]` from the iTunes search API against `country=gb`.
No search returned an empty body; no retry was required beyond one TLS failure noted in §7.

| Product | Who | Price | Ratings (GB) | Last updated | Why it kills A1 or A2 |
| --- | --- | --- | --- | --- | --- |
| **Scannable Safety Equipment App** | SCANNABLE NZ LIMITED | Free tier, then per-item | 6 | 2026-10-19 | **The decisive one.** Aimed explicitly at the individual owner. See quote below. |
| **Cowstail: Rope Access Admin** | Cowstail LTD | Free | 1 | 2026-10-23 | "Cowstail tracks your 6-month LOLER thorough examinations and reminds you before anything lapses." Single-user, phone-first, individual-owned kit, plus invoicing and a quals wallet. Our exact product as one feature of a wider app. |
| **LiftLedger: LOLER Inspections** | Nikola Knezevic | Free | 0 | 2026-04-07 | "the first native iOS app built exclusively for LOLER 1998 thorough examinations ... Full LOLER Schedule 1 examination form, mapped field-for-field to the regulation. Works offline. Completely." Identical technical approach, six months ahead. |
| **GearLog** | Kit Kline | Free | 104 | 2026-10-21 | "Get alerts when it's time to inspect your gear"; stores manuals; "Record qualifications held and when they expire"; spreadsheet import. Most-reviewed of the set. |
| **CheckedOK** / **CheckedOK Inspector** | CoreRFID Limited (UK) | Free app | 2 / 1 | 2026-03-24 | "assets including those needing LOLER, PUWER and PSSR regulatory compliance". The portal UK inspection firms resell (see §3). |
| **SpanSet-Inspector** | Optical 3D Ltd for SpanSet | Free | 1 | 2017-04-27 | Manufacturer-branded harness/lanyard/connector inspection guide. Stale, but it is the manufacturer's own answer. |
| **SafetySuite Inspection Manager** | Honeywell | Free | 1 | 2020-06-17 | Manufacturer PPE inspection, offline mode, "assets that are due for inspections". |
| **Expiry Log — Cert Tracker** | Jack Honour | Free | 1 | 2026-03-02 | Generic UK expiry tracker: "Multiple reminders per certificate so nothing slips through". The commodity substitute. |
| Papertrail | Papertrail (web) | Paid SaaS | n/a | article dated 2026-09-17 | **Upgraded to [verified-fetch]** — page opened with curl. Verbatim: "In advance of your first LOLER examination you can be reminded of the examination by editing the LOLER next examination date field on all applicable records" and "By selecting either 6 months or 12 months in the last section of the LOLER Report of Thorough Examination checklist, it will automatically change this Next LOLER examination date to 6 or 12 months on from the existing date." That is our entire A2 computation, shipped and documented. <https://help.papertrail.io/en/articles/5376484-managing-your-loler-inspections-with-papertrail> |
| Lumiform / SafetyCulture templates | — | Free | n/a | n/a | Free register template with advance deadline notifications (§2). |

**The quote that ends both candidates.** Scannable's pricing FAQ, verbatim [verified-fetch]
<https://scannable.io/pricing>

> "Is Scannable really free? Yes — the Free plan has no time limit and no credit card required. You
> get full access to Scannable Pro features, up to 200 inventory items. **The Free plan is designed
> for individuals managing their own gear**; Pro and Pro+ is for teams who need to share inventory
> and work together."

And its App Store description, verbatim [verified-fetch, GB App Store]:

> "Managing PPE doesn't have to be difficult or time-consuming—whether you're a contract climber or
> a national organisation; Scannable gives individuals and teams the tools to easily manage safety
> equipment ... Scannable makes it easy to scan, search and save equipment from any manufacturer to
> your Inventory, giving you a thorough list of the equipment you own—for free! ... Use manufacturer
> checklists to make sure you are performing the required steps to properly inspect your equipment
> ... Group inspections into a Thorough Examination with a job number and Working Load Limit, and
> download a Certificate of Thorough Examination including a legal declaration, signature of
> competent person"

Scannable's own site lists industry pages for Rope Access, Arboriculture, Construction and Lifting,
and sells retrofit NFC tags "for all types of equipment, such as slings, ropes, and carabiners"
[verified-fetch, <https://scannable.io/pricing>].

So the precise user in the premise — a self-employed person who owns fall-arrest PPE and lifting
accessories bought piecemeal from many vendors — is handed, free and permanently, an app that
scans kit from **any manufacturer**, holds up to 200 items, applies **manufacturer** inspection
checklists, and issues thorough-examination certificates. That is the premise's own words, already
shipped, with the manufacturer dataset we would have had to build. Gate 3 fails. Gate 8 fails.

---

## 5. Gate 9 — who actually buys the kit

The law settles this, and it settles it against us for the audience we can reach.

**Health and Safety at Work etc. Act 1974 s.9, verbatim** [verified-fetch]
<https://www.legislation.gov.uk/ukpga/1974/37/section/9>

> "No employer shall levy or permit to be levied on any employee of his any charge in respect of
> anything done or provided in pursuance of any specific requirement of the relevant statutory
> provisions."

**PPE at Work Regulations 1992 reg 4, verbatim** [verified-fetch]
<https://www.legislation.gov.uk/uksi/1992/2966/regulation/4/made>

> "(1) Every employer shall ensure that suitable personal protective equipment is provided to his
> employees who may be exposed to a risk to their health or safety while at work ...
> (2) Every self-employed person shall ensure that he is provided with suitable personal protective
> equipment where he may be exposed to a risk to his health or safety while at work ..."

Consequences:

1. **For an employed operative, the employer buys and owns the fall-arrest PPE, free of charge to
   the worker.** There is no personal purchase, so there is no personal date portfolio and no
   personal reason to subscribe. A1's buyer does not exist in the employed population.
2. **The only population that genuinely buys its own kit is the self-employed — and the evidence
   points at arborists and IRATA/SPRAT rope-access technicians, not commercial construction.** Every
   individual-owner artefact found in this gate is from those two trades: the Arbtalk thread,
   `Cowstail` ("Built for IRATA and SPRAT technicians"), `Greenline ARB`, Scannable's "contract
   climber". HSE's arboriculture page confirms the whole personal kit is lifting equipment:
   "rope access and work positioning systems including anchor points / ropes / karabiners /
   harnesses and strops" [verified-fetch]
   <https://www.hse.gov.uk/treework/safety-topics/arboriculture.htm>
3. **The founder cannot reach that population.** The frozen founder input is "site managers / site
   agents only. Not subcontractor owners, not plant or yard managers". A self-employed arborist or
   rope-access technician is not one hop from a commercial-construction site manager — it is a
   different industry. This is strictly worse than the "capped at 3" case in the rubric: contact
   proximity is **1**, "I know nobody".
4. **A site manager would not buy either app with personal money.** They are PAYE, the kit is the
   employer's or the subcontractor's, the HSE consequence lands on the company, and the examination
   is already booked and certificated by a third party.

Gate 9 fails for both candidates. For A1 it fails twice: the employer is legally obliged to provide
the kit free, *and* the one audience that self-provides is unreachable.

Honest counterweight, recorded so this is not a one-sided kill: LOLER duties do extend to the
self-employed and to employee-provided kit [snippet-only, from search summary of HSE arboriculture
and a council guidance PDF], so a real self-provisioning population exists. It is simply not ours,
and it is already served free.

## Pain £ — the number nobody wants to say out loud

The replacement cost of the item is small, and a practitioner says so plainly. Verbatim [verified-fetch,
Arbtalk thread above]:

> "Based on price however even an expensive harness is only £1 a week if you keep it 5 years, how
> much is your life worth?"

A sling or shackle is cheaper still. The expensive outcomes here are a fall (not a date-tracking
problem, and not something an app may opine on) or an HSE prosecution (which lands on the employer
under reg 9's "every employer shall ensure"). There is no £25k personal loss event triggered by a
forgotten calendar date. Scored 1 for A1 and 2 for A2, against the longlist's implicit optimism.

---

## 6. App Store and liability wording traps

Three traps noted, all live:

1. **"Expired" is a verdict.** For A1 the user's literal question is "is my harness expired?" Per
   `CLAUDE.md` §4 we may never say a harness is safe to use or out of service. The truthful output —
   "your record shows last detailed inspection 2026-03-01; HSE INDG367 recommends at least every six
   months" — is weaker than what the user wants, and is what a competent person is paid to supply.
   The evidence in §1 shows two qualified inspectors reach different answers on the same harness.
   Shipping a date that reads like a pass/fail would be issuing a verdict in a domain where
   professionals disagree.
2. **"Thorough examination" is a regulated act with a named legal author.** Scannable already issues
   a "Certificate of Thorough Examination including a legal declaration, signature of competent
   person". We must not produce anything that reads as a thorough-examination record, because the
   report is a statutory document authored by a competent person under LOLER Schedule 1. Safe
   wording would be "my record of the examination I was given", never "examination report".
3. **Banned-string candidates for any future `validation/OFFER.md` in this space:** "safe to use",
   "compliant", "passed", "certified", "expired", "qualified to work", "LOLER certificate",
   "thorough examination report", "fit for use". Allowed: "your record shows", "the published
   interval is", "last recorded examination date".

---

## 7. Evidence caveats and what I could NOT verify

**Network behaviour — corrected after Bob routed a sibling's fix.** `WebFetch` returns
`getaddrinfo ENOTFOUND` for **every** host in this environment, not just UK government ones. That is
the tooling, not the hosts, and nothing should be marked blocked or downgraded on that basis.
Everything load-bearing in this file was fetched with
`curl -sS -A "Mozilla/5.0" <url> -o file` through the configured proxy, which is healthy
(`enabled: true`, `bundleCoversEveryHost: true`, `recentRelayFailures: []`).
I re-fetched on Bob's instruction and the free-source determination stands on opened pages:
`hse.gov.uk` (both the thorough-examination page and the INDG367 PDF), `legislation.gov.uk` (LOLER
reg 9, HASAWA s.9, PPER reg 4), `scannable.io/pricing`, `safetyliftingear.com`, `lumiformapp.com`,
`arbtalk.co.uk` and `help.papertrail.io` — all HTTP 200. **Papertrail is upgraded from
`[snippet-only]` to `[verified-fetch]` as a result**; it was the only claim the WebFetch failure had
cost me.

**Hosts that genuinely refused us, confirmed with curl and reported rather than routed around.**
In each case the proxy's `recentRelayFailures` was empty at the time, so these are site-side blocks:
- `multimedia.3m.com` — **HTTP 403** from 3M's own Akamai edge (`errors.edgesuite.net`,
  `Reference #18.eb18d017.1792850137.7eef2f69`) on two harness instruction PDFs. Retried once with
  a full browser user-agent; same result. This is why the 3M service-life figures stay
  `[snippet-only]`, and it is itself evidence against the carve-out (§1).
- `www.petzl.com` — **HTTP 404** with a 1.3 MB SPA shell on every article URL. Petzl's figures stay
  `[snippet-only]`.
- `spanset.com` — **HTTP 403** (WAF page, 5.9 KB), retried once with browser headers. A search
  snippet attributes to SpanSet the claim that "BS 8437: 2005 and INDG367 recommend intervals not
  exceeding 6 months, or 3 months where the equipment is used in arduous conditions". **I verified
  both the six-month and three-month figures independently and directly from the HSE INDG367 PDF, so
  the substance does not depend on SpanSet; the BS 8437 attribution itself remains `[unverified]`
  and must not be cited.**
- `humanfocus.co.uk` — **HTTP 403**, retried once.
- `coatingspromag.com` — **HTTP 403**, retried once with browser headers. The Guardian/Twiceme
  in-harness-NFC claim stays `[snippet-only]`. It is corroborative only; `SpanSet-Inspector` and
  Honeywell `SafetySuite` are manufacturer apps verified directly from the GB App Store.
- `cowstail.co.uk` — TLS handshake failure (`tlsv1 alert internal error`), retried once. The
  decisive Cowstail quote comes from its GB App Store listing and is `[verified-fetch]`.
- `scannable.io/smart-ppe-directory` — **HTTP 404**; manufacturer-partnership breadth is
  `[unverified]` beyond what `/pricing` and the App Store listing state.

**Could NOT verify, ranked by how much it would have mattered:**
1. Whether 3M, Petzl or MSA run a free registration-and-reminder scheme for individually-owned fall-arrest PPE. Searches surfaced only advisories. This is the only place a counter-incentive argument could still live, and it concerns recall reach, not dates.
2. ~~Papertrail's exact due/overdue mechanics~~ — **resolved on re-fetch, now `[verified-fetch]`.** It is worse for us than the snippet suggested: Papertrail documents both the reminder and the automatic 6-or-12-month roll-forward.
3. Scannable's and Cowstail's actual UK user numbers. I will not invent a figure; GB rating counts are 6 and 1 respectively and are recorded as such. Low ratings do **not** mean a weak competitor — Scannable is 4 years old, updated five days ago, with named customer quotes on its site and a per-item paid tier, which is a live business.
4. BS 8437:2005 and BS EN 365:2004 full text. Paywalled by BSI, correctly not purchased. Only HSE's own restatement of the BS EN 365 figure is used.
5. A verbatim complaint about the *financial loss* from a missed date. None found. **No verbatim complaints found.**

**One thing I got right and one I got wrong.** Right: LOLER's 6-month interval is free and stable,
exactly as the longlist predicted. Wrong: the longlist's prediction that "nobody holds that set" for
A1/A2. The examiner holds the set, by statute, and must write the next date down.

---

## Kill list

| Candidate | Killed by | Reopen only if |
| --- | --- | --- |
| **A2 — lifting accessories 6-month thorough examination** | Gate 2 (the examiner must write the next due date on the LOLER Schedule 1 report and sells the next examination), gate 3 and gate 8 (Cowstail, LiftLedger, Scannable, GearLog, CheckedOK, Papertrail, free Lumiform/SafetyCulture templates), gate 9 (reachable audience is PAYE; the self-providing audience is arb/rope-access, not construction). | Never, on current evidence. The statutory next-due-date requirement is structural and cannot be competed away. |
| **A1 — fall-arrest PPE service lives** | Gate 4 — **the manufacturer-instructions carve-out was tested explicitly and does not apply** (§1): service life is a per-model figure on CDNs that 403 automated clients, measured from different epochs, sometimes deferring to a paywalled standard, and overridden in both directions by the competent person. Also gate 3 and gate 8 (Scannable ships *manufacturer checklists* free to individuals; SpanSet and Honeywell ship their own apps; GearLog stores the manuals), gate 9 (HASAWA s.9 forbids charging an employee for PPE the employer must provide), plus a severe §4 verdict-wording trap. | Only if a free, stable, machine-readable public register of manufacturer service lives appears — and even then Scannable's free tier and the competent-person override remain. |

**Consequence for the longlist — written after learning both siblings also failed.**

Bob told me, while I was working, that B1 (off-hire) and B5 (retention release) had both failed, so
A1/A2 were the last candidates standing in wave 1. I have not softened anything as a result. The
additional work that news prompted — the explicit carve-out test and the re-fetch of every source
WebFetch had cost me — made the case against A1 **stronger**, not weaker: Papertrail turned out to
document the exact 6-or-12-month roll-forward, and the manufacturer carve-out turned out to fail on
three independent grounds instead of one.

So wave 1 is a clean sweep of failures, and the pattern across all four is worth more than any one
of them:

| Candidate | Why it died | Underlying pattern |
| --- | --- | --- |
| B1 off-hire | hirer portals publish live on-hire lists free; off-hire is a salaried job | the holder publishes it anyway |
| B5 retention | Retention Track at £10/contract, 3 free; no free interval | a rival already shipped it |
| A2 lifting accessories | statutory report must carry the next due date; 4 free apps | **the law itself notifies** |
| A1 PPE service lives | no public rule set; free incumbents; employer must provide | the number is a professional judgement |

**The honest read for Phase 2.** `CLAUDE.md` §0.1 says only two patterns survive: nobody holds the
set, or the holder profits from forgetting. A1/A2 were the best "nobody holds the set" candidates on
the longlist and they failed because **a competent person is legally required to hand the date over
in writing**. That generalises: any UK construction date created by a *statutory inspection regime*
is a bad bet, because the inspection report is itself the notification. That rules out A3, A5, A6,
A8, A9, A10, A11 and C10 by the same mechanism, which is most of the remaining longlist.

What is left unexamined and not killed by that logic: **A4** (resin/sealant/grout shelf lives — the
date is printed on a consumable the user bought from many vendors and no inspector ever visits it)
and **A7** (temporary works design-check validity, where the site-based TWC is plausibly the buyer).
Both are thin and I am not advocating them. My recommendation to Bob is to treat wave 1 as evidence
that the *constraint set* may be unsatisfiable with site-manager-only access, and to spend the next
move on widening access rather than on a fifth candidate.
