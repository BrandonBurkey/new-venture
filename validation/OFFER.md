# OFFER — frozen 2026-10-24. Copy from this file. Do not rewrite it.

Every agent copies these strings character for character. If something here is wrong, it is changed
here, once, by Bob — never edited in a landing page, an email or the app.

## The product

**Name: Off-Hire Proof**

Chosen because the product is not a reminder, it is the **proof**. A reminder is a nice-to-have.
Proof you sent it back is what stops the invoice.

**The clause this rests on, corrected 2026-10-24 and now verified.** An earlier draft of this file
cited "CPA Supplementary Conditions 2011 cl 7.2.3" at `[verified-fetch]`. **That clause number was
wrong** — 7.2 is payment timing — and it was propagated from a scout report into a frozen contract
without being opened. The rules engineer refused to upgrade it past `[snippet]`, which is what
caught it. The correct clause, read in full from two independent copies:

> "The Owner shall not charge the Hirer any hire charges for any period for which an off-hire number
> has been obtained, **but the Hirer shall still be responsible for such hire charges for those
> items if the Hirer is unable to provide the off-hire number** to the Owner for that item of Tools
> and Equipment."

**CPA Supplementary Conditions Applicable to Tool and Equipment Hire, clause 9.2.3** in the 2021
edition `[verified-fetch]`
(<https://www.ardenthire.com/file/2021-tool-and-equipment-hire-supplmentary-conditions.pdf>), and
the same wording at **clause 8.3.3** in the earlier edition `[verified-fetch]`
(<https://www.synergyhire.co.uk/wp-content/uploads/2019/05/cpa-tools-equipment-supplementary-conditions-1.pdf>).
Clauses 9.2.1 and 9.2.2 are the other half of the mechanism: off-hire must be **in writing**, and
each item identified clearly enough for the Owner to issue **a unique off-hire number**.

**Scope limit, stated rather than glossed.** What is verified above is the **Tool and Equipment**
Hire supplementary conditions. Plant hire proper — excavators, dumpers, telehandlers — runs under
the CPA **Model Conditions**, whose equivalent clause is **not yet verified**. So the "proof"
positioning is on solid ground for tools and equipment and is `[unverified]` for plant. Resolve
this before any paid claim is made about plant, and do not let a marketing line outrun it.

Hormozi M-A-G-I-C check: **Avatar** is the subcontractor owner, **Goal** is to stop paying for kit
already returned, **Interval** is before the next charging week starts. Magnetic because it names
the thing the hire desk asks for and the subbie never has.

**One line:** Know what is still on hire, and keep proof of every off-hire call.

## Who it is for

A UK subcontractor owner — sole trader to roughly twenty staff — who hires plant from more than one
hire company. The person whose own money pays an overcharge. **Not** a site manager, who is PAYE
and loses nothing personally, and not a plant department, which already employs a hire controller.

## The aha, delivered free in the browser before any signup

Enter one machine: what it is, which hirer, the date it went on hire, daily or weekly charging, the
minimum hire period, and the notice the hirer requires. The page returns:

1. **The latest moment you can call off-hire** before the next charge lands.
2. **What the next charging period costs you** if you miss it.
3. **A copy-ready off-hire record** — hirer, machine, date, time, reference field, who you spoke to.

No account, no email, no paywall in front of it. Under sixty seconds.

## Price

| | |
| --- | --- |
| Monthly | **£19 a month** |
| Annual | **£190 a year** (two months free) |
| Free tier | **Three machines, forever.** Full off-hire record keeping. |

Anchored to the problem, not to competitors: the only verified figure for personal exposure is
*VP plc v Megarry* [2012] NIQB 22 `[verified-fetch]`, a partnership pursued for £26,155.50 over one
machine, judgment £13,331 plus interest and costs, on a disputed "off hire". Competitor anchors for
sanity only: Risk Assessor Pro £18 per user per month, Fast RAMS £12.99 one-off, HandsHQ £275 a
month demo-gated.

## Guarantee — honest, and ours to honour because we bill through Stripe

> **If Off-Hire Proof does not save you more than it costs in your first ninety days, email us and
> we will refund every penny you have paid. No form, no conditions.**

We control refunds directly through Stripe, so this is a promise we can actually keep. It is not an
Apple refund and must never be described as one.

## Founding-member deposit

| | |
| --- | --- |
| Amount | **£19**, one payment |
| What it buys | The first year at £190, so the deposit comes off the first year |
| Refundable | **Yes, in full, on request, at any time before launch** |
| Mechanism | Stripe Payment Link on the web |

UK Consumer Contracts Regulations: the fourteen-day cancellation right applies, and our terms are
more generous than it requires, so there is nothing to reconcile. Never promise an automatic
unlock from a web payment — a human sends the account by email.

## Kill criteria — pre-committed, dated, and not movable to fit a result

| Date | Test | Pass | Fail action |
| --- | --- | --- | --- |
| **7 Nov 2026** | Owner interviews | 6+ of 10 name two or more concurrent hirers, AND 4+ describe a specific invoice that ran past their intended off-hire date, AND fewer than 3 would route all hire through one platform | Stop. Write the handoff. |
| **19 Dec 2026** | Paying founding members | **10** founding members at £19, from organic channels and warm introductions only | Stop, refund every deposit, write the handoff. |

## Analytics event names — exact strings, no variants

```
aha_started
aha_completed
aha_record_copied
email_captured
pricing_viewed
deposit_started
deposit_completed
interview_booked
```

## Banned strings — never appear in any artefact

Legal and liability:
- "compliant", "compliance guaranteed", "legally compliant"
- "safe to use", "safe", "passed", "certified", "approved"
- "qualified to work", "qualified"
- "legal advice", "we advise", "you must", "you are required to"
- "we will off-hire for you", "automatic off-hire", "we contact the hirer"

Because we do none of those things. The product records what the user did and computes from what the
user entered. It never contacts a hire company and never tells anyone their position is lawful.

Commercial:
- "guaranteed savings", "recover your money", "claim back"
- "no risk", "free money"
- any reference to Apple, App Store, IAP or offer codes while this is a web product

## Wording that is correct

- "Know what is still on hire."
- "Keep proof of every off-hire call."
- "Your own record, and the terms you entered."
- "We never contact your hire company. You do, and you record it here."
