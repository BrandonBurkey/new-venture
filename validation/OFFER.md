# Canonical offer and wording contract

**Every agent copies from this file. Nobody rewrites it.** If a price, a name, an event name, a
guarantee clause or the kill date appears anywhere in this repository, it must match this file
character for character. `qa-verifier` greps for mismatches before the phase closes.

Source: `research/deep-dive-mariner.md` §4. Status: **locked 2026-10-19**, pending Gate 2.

---

## 1. Name

- **Product name:** `360 Ledger`
- **Full store title:** `360 Ledger — Sea-Service Day Log for USCG-Credentialed Mariners`
- **Why it passes the wording test:** it is a noun about *their records*. It contains no claim
  about the user's legal standing. "360" is the magnet — the number the whole renewal hinges on.
- **Names rejected and why:** `Renewal Ready`, `Sea-Worthy`, `Cleared to Sail`, `Current` — each
  states our opinion about the user's eligibility. A name can be a verdict too.
- **Unchecked, and blocking spend:** a real USPTO Class 9/42 search, and `360ledger.com`
  availability. The aggregator search found no matching mark, which is not the same as clear.
  **"Sea Service" is already taken** as an App Store name by a competitor.

## 2. Price

| | |
| --- | --- |
| Annual (pushed) | **$89/year** |
| Monthly | **$12.99/month** |
| Free trial | **7 days, on the annual plan only** |
| Pre-launch founding deposit | **$49**, fully refundable, taken on the web via Stripe |

**The anchor, stated in the copy itself:** one lapsed credential costs **$12,100 in class fees
alone** (OMSA via WorkBoat), plus 39 classroom days of foregone earnings at $354.92/day (BLS
median $88,730 ÷ 250) = **$25,942 (estimate)**. $89 is **291×** smaller. Never anchor to another
app's price.

**Price is conditional on experiment E6.** If the daily-logging probe returns 25-49%, we ship
**monthly-first and treat annual as the upsell**. That decision is pre-committed.

## 3. The offer stack

1. One-tap sea-service day log that works with no signal, no account and no server.
2. Rolling-window engine: trailing 5-year and 3-year totals with 1.5-day two-watch credit,
   against the window *the user selects*, plus the date their window next drops a day.
3. Dated per-period PDF sea-service summary with 46 CFR 10.232 evidence fields, plus a
   letter-of-service template containing the 12-hour two-watch sentence.
4. Credential and document date ladder with reminders the user controls.
5. The Rule Source Sheet: every rule we compute from, cited, linked, with a reviewed date.
6. *(Founding 100 only)* One hand-built reconstruction of the past five years from whatever
   records they have.

## 4. Guarantee — exact wording, do not paraphrase

> **If the Sea Service Summary we produce is missing a field the National Maritime Center asks
> you for, send us the request and we will rebuild it for you by hand within 72 hours, free.**
>
> On refunds: App Store purchases are refunded by Apple, not by us — we cannot issue them.
> If you want a refund, we will send you Apple's request link and write to Apple in support of
> your request the same day. Your founding deposit is different: we hold that one, and we refund
> it in full on request, for any reason, up to launch.

**Never promise:** that the NMC will accept anything, that the user is eligible, current or
qualified, or that a web payment unlocks the app automatically. Deposits are credited **by App
Store offer code after launch**.

## 5. Scarcity and urgency — real only

- **Founding 100:** a true cap of 100 deposits. When 100 are taken, the page says so and stops.
  Never reset the counter.
- **The only honest urgency is theirs, not ours:** every month not logged is a permanent hole in
  a five-year window. Say that plainly; never invent a countdown.
- **Banned:** fake timers, "only 3 left" without a real count, discount deadlines that move.

## 6. Bonuses, each killing one named objection

| Objection, in their words | Bonus that kills it |
| --- | --- |
| "I've got five years of trips in a shoebox, I'm not typing that in." | The hand-built five-year reconstruction, founding members only. |
| "How do I know your numbers are right?" | The Rule Source Sheet: every rule cited, linked, with both readings shown wherever the rule is disputed. |
| "My licence school handles this for me." | The letter-of-service template with the 12-hour two-watch sentence — the thing that gets the credit refused when it is missing. |
| "I don't want my sea time sitting on somebody's server." | No account, no server, no network permission. It is on your phone, and that is the whole design. |

## 7. Analytics event names — the canonical list

Landing page, emails and the iOS app all use **exactly** these strings. No synonyms, no variants.

| Event | Fires when |
| --- | --- |
| `view_landing` | Landing page first render |
| `calc_start` | User enters the first field of the free calculator |
| `calc_complete` | **The aha.** A real window number renders |
| `view_offer` | Offer section scrolled into view |
| `email_submit` | Email captured |
| `deposit_click` | Founding-deposit button clicked |
| `deposit_complete` | Returned from Stripe with success |
| `concierge_click` | $49 reconstruction button clicked |
| `concierge_complete` | Returned from Stripe with success |
| `interview_book` | Call booked |
| `app_first_launch` | iOS first launch |
| `app_aha_render` | iOS Window card renders a real number |
| `app_paywall_view` | iOS paywall shown |
| `app_trial_start` | StoreKit trial started |
| `app_purchase` | StoreKit purchase completed |
| `app_restore` | Restore Purchases completed |

UTM parameters captured and persisted: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`.

## 8. The string rule, applied

We state the user's own records and the public interval. We never state a conclusion about them.

| Never ship | Ship instead |
| --- | --- |
| "Are you renewal-ready?" | "Your logged days in this window: 319" |
| "You're 41 days short of qualifying." | "Target you entered: 360. Days you've logged: 319. Difference: 41." |
| "You're legal to sail." / "Cleared." | *(never, in any form)* |
| "Your licence expires in 90 days — renew now or you can't work." | "The expiry date you entered for your MMC is 90 days away." |
| "Don't lose your licence!" | "No days logged in 14 days. Your 5-year total is unchanged at 319." |
| "You won't make 360 at this rate." | "At the rate you've logged since 1 Jun, your own entries reach 341 by 14 Mar 2027." |
| PDF header "USCG Sea Service Certificate" | "Sea Service Summary — prepared from entries made by the user. Not a Coast Guard document. The National Maritime Center determines the acceptability of sea service." |

## 9. Dates committed in advance

| | |
| --- | --- |
| **Kill date** | **14 December 2026** |
| Kill criterion | Fewer than 10 paid $49 concierge orders from 500 qualified visitors by the kill date → park the niche. |
| Subscription-thesis criterion | Fewer than 25% of daily-log probe participants logging on 20+ of 30 days → the subscription thesis is dead, park even if the concierge sold. |
| Hard gate before any Swift | E1 and E2 must clear: no existing app computes a rolling recency window. |
