# Venture studio brief — commercial construction (UK)

Paste everything below the line into a **fresh Claude Code session on a new, empty repo**.
It is self-contained. It carries forward every lesson the maritime run paid for.

---

You are the operating partner of a two-person venture studio: me (the founder) and you, running a team of sub-agents. Our goal is to ship ONE niche, paid iOS app that solves an expensive, painful problem for an audience with real disposable income. It must be so clearly worth the price that it pays for itself, and a no-brainer next to the cost of the problem.

Run this like a real studio: evidence over vibes, kill bad ideas fast, and finish with something launchable. Work autonomously. Ask me questions only at the two decision gates below, using a multiple-choice question tool, with a recommended option first.

## My insider edge — this is the reason we are in this market

**I know people in the UK commercial construction industry.** That is the single asset this venture has that the last one did not, and it must change how you work, not just what you pick:

- **Target the UK** (England and Wales primarily; note where Scotland and Northern Ireland diverge). Do not drift to the US market — my access does not travel.
- **Weight reachability and customer access higher than you otherwise would.** The thing that kills two-person studios is not a bad idea, it is no route to the buyer. Here I have one.
- **Use me as a channel, not just a decision-maker.** When you design validation experiments, assume I can get 10-15 real conversations with people who actually hold the problem — site managers, commercial managers, QSs, subcontractor owners, plant managers, H&S advisors. Build the interview scripts for warm introductions, and tell me exactly who to ask for.
- **Prefer a niche where my contacts ARE the buyer**, or can introduce me to the buyer in one hop. Score that explicitly.
- Ask me at Gate 1 to name the specific roles and companies I can actually reach, and to sanity-check the pain in my own words.

## Frameworks you must apply, explicitly and visibly

**1. Alex Hormozi's $100M Offers.**
- **Value Equation:** Value = (Dream Outcome × Perceived Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice). For every candidate, state concretely how the product maximises the first two and minimises the last two.
- **Starving crowd test:** massive pain, purchasing power, easy to target, growing.
- **Grand Slam Offer:** list every problem in the customer's own words, then a solution for each, then trim and stack. Add a M-A-G-I-C name, a price anchored to the cost of the problem (not to competitor apps), and an honest guarantee compatible with Apple's refund system. Real scarcity and urgency only. Each bonus kills one named objection.

**2. Eric Ries' The Lean Startup.**
- Leap-of-faith assumptions: a value hypothesis and a growth hypothesis, then name the single riskiest assumption.
- MVP: the smallest test of the riskiest assumption — often a concierge service or a landing page plus a refundable deposit, before any app.
- Innovation accounting: pre-committed pass/fail thresholds, a build-measure-learn cadence, explicit pivot triggers, and a dated kill criterion.

## Hard constraints

**Market exclusions.** Not aviation (we shipped an aircraft maintenance compliance app). Not maritime sea-service or credential tracking (a parallel studio run is on it). Also already evaluated and rejected: REPS/STR material-participation hour logs, statutory residency day counters, Schengen calculators, wine and watch inventory, HSA receipts, small-landlord bookkeeping, STR host ops, nurse CE. Only revisit one with new evidence that changes the verdict.

**Buildable as a v1 by AI in about a week:** native SwiftUI, iOS 17+, SwiftData, StoreKit 2 subscriptions, local notifications, on-device PDF. No backend, no accounts, no data licensing, no hardware, no two-sided marketplace, no regulated licensing domain (medical diagnosis, legal advice, financial advice, insurance advice).

**Single-user and phone-first.** This is the constraint that kills most construction ideas, so apply it early and strictly. If the value is in *chasing other people* — subcontractors, agents, suppliers — it needs a backend and accounts, and it is out. A site manager's own phone, working offline in a site cabin with no signal, is the target.

**App Store-safe.** The app organises the user's own data and computes from public rules. It never certifies, diagnoses or advises. Watch for wording that sounds like a verdict: on a previous app we had to change "Airworthy today?" to "All items current?". In this industry the equivalent trap is worse — never tell someone a person is "qualified to work", a lift is "safe to use", or a site is "compliant".

**The rule set must be public and free.** This is the single most important filter in UK construction, because **British Standards (BS, BS EN) are paywalled by BSI**, as are many trade-body documents. Legislation on `legislation.gov.uk` and HSE guidance (INDG, L-series, ACOPs) are free. A niche whose intervals exist only inside a paid standard is out, unless the dates come from the user's own property or records and the intervals are published free elsewhere. Verify that carve-out explicitly before scoring a niche highly.

**Payments.** Pre-launch deposits via Stripe on the web. After launch, all digital unlocks through Apple IAP. Credit deposits with App Store offer codes, and never promise an automatic unlock from a web payment. **UK specifics:** check the Consumer Contracts Regulations 14-day cancellation right against how we word a deposit, and write the refund terms accordingly.

**Data protection.** UK GDPR, not CCPA. An app holding someone's qualification or employment records on device needs an accurate privacy manifest and App Store privacy label. Address what happens to an exported PDF once shared.

**Reachability.** The audience must gather somewhere specific and cheap to reach: named trade bodies, LinkedIn groups, forums, federations, trade shows, trade press, WhatsApp groups. Plus my own contacts.

## Hard-won lessons from the last run — apply these from hour one

These four questions killed 44 of 48 niches last time. Ask them before you get attached to anything:

1. **The counter-incentive test — the most valuable filter we have, apply it first.** Whoever holds
   the date almost always notifies for free. That single pattern killed three of the last run's four
   finalists at the gate: a free incumbent computed the maritime window and was bundled by our own
   planned channel; the SBA already emails every federal recertification window it was proposed we
   track; the equity platforms already email the filing clock. **So the question is not "is the pain
   real" but "does anyone holding this date have a reason NOT to tell the user?"** Only two answers
   survive: the date lives on physical property bought from many different vendors, so no single
   party holds it; or the holder actively profits from the user forgetting. In construction, test
   every candidate against this. The card schemes, the accreditation bodies, the inspection
   companies and the insurers all notify — they sell renewals. **But a plant hire company has no
   incentive whatsoever to remind you to off-hire**, and a main contractor has none to remind a
   subbie that retention is due for release. Follow the counter-incentive; that is where the
   unserved dates are.
2. **"Who writes the cheque for the mistake, and does somebody already get paid to prevent it?"** Whoever owns the data usually gives tracking away free. In construction, watch for: CITB and the CSCS card schemes, accreditation bodies (CHAS, SafeContractor, Constructionline, Acclaim), insurers, the main contractor's own portal, and the employer's H&S consultant. If one of them already does it free, drop the niche.
3. **"Does the employer pay the fine?"** If the consequence lands on the company and not the individual, the individual will not subscribe. This killed crane operators, welders and wildland firefighters last time. In construction it threatens anything framed around HSE enforcement. Prefer the **owner-operator**: the subcontractor who IS the business, the self-employed tradesperson, the small firm's director.
4. **"Is this a one-off?"** A once-in-a-lifetime event cannot carry a subscription, and the professional who is already paid — the solicitor, the accountant, the consultant — sends the reminder free. Demand a multi-year, multi-item date portfolio that follows the person.
5. **"Search the mechanic, not the rival."** This one cost the maritime run its whole Phase 2. Five
   research passes searched for competitors *by app name* in an App Store the environment could not
   reach, and all five missed the incumbent that already did the entire job for free. A single search
   for the *computation* — in the words a customer would use — found it in one hit. So for every
   candidate, your FIRST search is the mechanic: "trailing 12 month total", "card expiry tracker",
   "next LOLER date", "off-hire reminder". Do this before the deep dive, not after.
6. **"Can I actually search for the competition?"** Last time the environment could not reach the App Store, and three of four finalists turned out to have competitors we had scored as blue ocean. **Fix this before you start** (see Environment).

## What to expect, based on what just happened

The previous run of this exact process produced: 48 niches examined, 44 killed in Phase 1, four
deep-dived, **three of those four killed at the competitor gate**, and one survivor whose own
analyst called it "a good first app, a small business". Zero lines of app code were written, which
was the correct outcome, not a failure.

Plan for that shape. Specifically:
- **Most of your shortlist will die**, and the ones that die loudest will be the ones with the
  biggest pain figures, because big pain attracts institutions that already solve it.
- **Do not fall in love with an anchor.** A £250,000 mistake is not a business if the body that
  holds the date emails a reminder 90 days out, for free, computed from the real record.
- **The founder's time is the scarce resource, not mine.** Bring decisions, not updates.
- If the shortlist collapses entirely, say so plainly and recommend stopping. Killing a venture in
  week two is a success.

## Candidate seeds — a starting point, not a shortlist

Brainstorm 25+ of your own. These are to prime the pump, and several are probably bad. I have
marked each with my guess at the counter-incentive test, which you must verify rather than trust:

**Likely to FAIL the counter-incentive test — the holder profits from reminding you.** The card
schemes, the accreditation bodies, the inspection companies and the insurers all sell renewals, so
they almost certainly already email. Check before investing any research in these:

- **CSCS / CPCS / NPORS card expiries** for a subcontractor and their gang; SMSTS and SSSTS five-year refreshes; first aid at work three-year; IPAF and PASMA; abrasive wheels; asbestos awareness; face-fit testing.
- **Plant and equipment inspection intervals** — LOLER thorough examination (six or twelve months depending on use), PUWER inspections, scaffold seven-day inspections, excavation inspections, temporary works design check validity, PAT testing.
- **Trade registration renewals** — Gas Safe, NICEIC, NAPIT, F-Gas, waste carrier licence, operator licence.
- **Accreditation renewals** — CHAS, SafeContractor, Constructionline, Acclaim, ISO 9001/14001/45001 surveillance audits, PI and public liability renewal.
- **Professional CPD** — RICS, CIOB, RIBA, ICE. The institution almost certainly tracks it free; that was the exact pattern that killed the engineers and the pharmacists last run.

**More likely to PASS — nobody holds the date, or the holder profits from your forgetting.** Start
here, because this is where the unserved dates live:

- **Plant hire off-hire dates.** The hire company bills by the week and has **no incentive whatsoever** to remind you to off-hire. Unglamorous, recurring, single-user, phone-first, and a pure money leak. On the counter-incentive test this is the strongest seed on the list.
- **Retention release and defects-liability expiry** for a subcontractor. The main contractor holds your money and gains nothing by reminding you it is due.
- **Dates stamped on kit the user bought from many different vendors** — harnesses and lanyards with service lives, SWL/LOLER tags on lifting accessories bought piecemeal, resin and adhesive shelf lives, calibration dates on site instruments. No single party holds the set, which is precisely why nobody notifies.
- **Payment and contract dates under the Construction Act** — payment notice and pay-less notice deadlines under HGCRA 1996 as amended, final account and retention release dates, defects liability expiry, adjudication timetables. **High value and high risk:** the money at stake is large and real, but computing a party's statutory deadline edges toward legal advice and the rules are contract-specific (JCT vs NEC). Evaluate it, and be ruthless about the advice line.
- **Plant hire off-hire dates** — forgetting to off-hire keeps the meter running. Unglamorous, recurring, single-user, and a pure money leak.
- **Building Safety Act 2022** — gateway dates, higher-risk building registration, golden-thread obligations. Check whether this is a one-off, a multi-user workflow, or genuinely an individual duty-holder's date portfolio.
- **Professional CPD** — RICS, CIOB, RIBA, ICE, CIOB annual requirements. Check first whether the institution already tracks it free; that is the usual killer.
- **Retention, bonds and warranty expiry** for a subcontractor owner.

## Team and phases — run sub-agents in parallel wherever there is no dependency

**Appoint a real team.** Write agent definitions into `.claude/agents/*.md`, each with a charter, a definition of done and a "never" list, and a `CLAUDE.md` holding the studio's standing rules that every agent inherits. At minimum: a research analyst, a UI/UX designer, a rules engineer, an iOS engineer, an independent iOS reviewer, a QA verifier, a growth marketer, a sales closer, a brand copywriter and a compliance counsel. Two rules make it more than role-play: **nobody reviews their own work**, and the QA verifier runs a repo-wide consistency sweep before any phase closes.

**Build me an HQ.** A locally hosted, dependency-free dashboard at `hq/index.html` driven by a single `hq/state.json` that only you write, with a `build.mjs` to regenerate an offline copy and a `serve.sh`. It must show: a one-line status, a "Needs you" to-do list, the phase pipeline, decision gates, the validation funnel against pre-committed targets, the agent roster with live assignments, honest risks, deliverables and a timestamped activity log. Mobile-first, dark mode, verified with Playwright screenshots at 390px and 1280px in light and dark. Targets stay empty until they are committed, rather than showing invented numbers.

### Phase 1: Research

**Step 0 — fix the network allowlist before anything else.** See Environment. Do not dispatch a
single scout until you have verified that a page actually fetches. Last run, every page was refused
and the whole phase ran on search snippets.

**Step 1 — brainstorm 25+ candidate niches.** **Write the scoring weights and the hard gates to a file BEFORE any research returns**, so they cannot be bent to fit a favourite idea afterwards. For each niche gather: real complaints quoted and linked; incumbents with price, rating count and the weakness in their reviews; audience size and wealth signals; the pound cost of one mistake; where the audience gathers. Score 1-5 on pain £, audience wealth, competitive weakness, v1 buildability, reachability, willingness to pay, and — new for this run — **how close my contacts are to the buyer**.

**Step 2 — GATE BEFORE YOU DEEP-DIVE. This is the change that matters most.**

Last run we ran the competitor gate in Phase 2, after four full deep dives, and it killed three of
the four finalists — including the one the founder had chosen and the one we had begun to build.
That wasted an entire phase. **The gate now runs inside Phase 1, as a scoring input, before any
deep dive is written.**

For every niche that survives the hard gates, run a mechanic-first gate costing about twenty
searches:
- Search the **computation**, in the words a customer would use, before any product name.
- Search whether **the party holding the date already notifies** — the scheme, the body, the
  insurer, the inspection company, the main contractor, the institution. Search their own help
  pages for "we will remind you", "notification", "days before expiry".
- Only then search named rivals.
- A free spreadsheet circulating in a trade group is a competitor. So is a feature buried inside
  a tool they already have, and so is a renewal email.

A niche that fails this gate is dead before anyone writes a word about its Value Equation. Carry
only survivors forward, and expect to lose most of them: **of the last run's four finalists, three
died here.** So take five or six candidates into gating, not three, and tell me early if the whole
shortlist is collapsing — that is a signal about the market, not a failure of research.

**Step 3 — deep-dive the survivors, adversarially.** For each: the full Value Equation, the Grand Slam Offer, Lean hypotheses, the MVP, experiments with pass/fail thresholds, a 6-8 feature v1 spec with the aha moment and onboarding flow, a competitor table, and the channels to the first 100 paying users.

**Make each deep-dive adversarial, not confirmatory.** Last run, every deep-dive cut its own Phase 1 score once it looked harder, and that was the most valuable output of the phase. Tell each analyst to attack the idea and to state its strength of bet out of 10.

Write it all to `research/market-research.md`, executive summary first, honest downsides included.

🚦 **Gate 1:** present the top 3 with a recommendation, and ask me to pick — along with budget, which specific roles and companies I can reach, and my risk appetite on market size.

### Phase 2: Validation kit
**First, freeze two contracts** before any parallel agent starts, because this is where multi-agent work falls apart: a `validation/OFFER.md` holding the canonical name, price, guarantee wording, deposit terms, analytics event names, banned strings and kill date; and an `engine/API.md` holding the exact engine surface. Everyone copies from these; nobody rewrites them.

- **Engine agent.** The domain rules engine as a pure, dependency-free JS ES module, with a golden `test-vectors.json` of 50+ edge cases. Every rule cites its source (legislation, ACOP, HSE guidance, scheme rules) with a URL and a verification level. Tests run with `node --test`. Where sources conflict, return **both readings with citations** and never silently pick a winner. The engine must contain no field that reads as a verdict.
- **Landing agent.** A single self-contained `landing/index.html` that uses the engine to deliver the aha moment free in the browser, then captures email, offers a concierge service, and offers a founding-member refundable deposit. Constants for a Stripe link and a form endpoint, UTM capture, a no-op `track()` with event names matching the contract. Mobile-first, dark mode, verified with Playwright screenshots at 390px and 1280px in light and dark. Chromium is preinstalled; do not run `playwright install`.
- **Growth agent.** `validation/`: a week-by-week plan to a kill date about 8 weeks out with setup costs; forum and group posts per channel, two variants each, value-first and disclosed; an experiment tracker CSV with thresholds pre-filled; decision rules that commit me in advance to an action at each outcome; a ready-to-submit guest article for the trade press.
- **Sales agent.** A Mom Test interview script written for **warm introductions** — I can get these — plus the concierge SOP, an objection table, and the deposit operations.
- **Compliance agent.** The App Store and legal risk memo, flagged as not legal advice, covering the verdict-wording review, Guideline 5.2 affiliation risk with any scheme or body, UK GDPR, the Consumer Contracts Regulations against the deposit wording, and the questions for a real solicitor.

Cross-check that the agents agree on event names, wording, prices and deposit terms before you finish.

### Phase 3: iOS MVP
XcodeGen (`project.yml`, no hand-written pbxproj). The engine in a local Swift package that is a faithful port, its tests loading the same `test-vectors.json` and passing 100%. SwiftData models. StoreKit 2 with a `.storekit` config: annual plus monthly, free trial on annual. Paywall after the aha moment, gating in one `Entitlements` type, Restore Purchases included. Local notifications, on-device PDF export via ShareLink, `PrivacyInfo.xcprivacy`, dark mode and Dynamic Type. Core features only (5-6); defer cameras, widgets and sync. `.github/workflows/ios.yml` on `macos-15`: `swift test`, then xcodegen, then `xcodebuild build test` on a simulator. Write `ios/README.md` and `ios/APP_STORE_LISTING.md`. Then an independent reviewer agent reads every Swift file adversarially as the compiler would, fixes errors, and confirms engine parity on 10 hand-picked vectors.

### Phase 4: Ship-readiness
Commit and push. Watch the Actions run and fix until green. Final report: what is done and what is not, on the first line; the 5 actions I personally must take this week; the go/no-go thresholds and kill date; honest risks; file paths.

## Environment — read this before you start, it cost us real quality last time

- **Fix the network allowlist FIRST.** The cloud environment's network policy will probably refuse most research hosts with a 403 on CONNECT. Last run that meant zero primary sources were readable and **no App Store search was possible at all**, so three of four finalists turned out to have competitors scored as blue ocean. Before Phase 1, tell me to open the cloud environment menu in the session title bar, choose Edit, and add under Allowed domains at least: `apps.apple.com`, `legislation.gov.uk`, `hse.gov.uk`, `capterra.com`, `g2.com`, `trustpilot.com`, `appfollow.io`, `reddit.com`, and the trade bodies you intend to cite — leaving "Allow package managers" ticked. Then verify a fetch actually works before dispatching scouts.
- **The web-search budget is shared across all sub-agents in a turn** and runs out. Dispatch scouts in smaller waves, and tell each one to report its gaps rather than filling them.
- **Never invent a statistic, a quote, a review count or a member count.** Mark every estimate `(estimate)` and show the arithmetic. A gap is a deliverable; a plausible-sounding filler number is not.
- **There is no Swift compiler.** Write conservative, stable-API Swift and self-review it line by line as the compiler would. The macOS GitHub Actions workflow is the real compile.

## Quality bar

Every claim has a source URL or is marked `(estimate)`. If a well-funded competitor already nails the problem, say so and drop it. Prefer boring, correct code to clever code; business logic gets tests. Write for a busy founder: outcome first, plain language, no invented jargon.

Go.
