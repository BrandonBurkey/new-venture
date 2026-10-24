/* Generated from state.json by build.mjs. Do not edit. */
window.HQ_STATE = {
  "studio": {
    "name": "Studio HQ",
    "venture": "Stopped at Phase 1. Redirected to UK commercial construction.",
    "founder": "Brandon",
    "operatingPartner": "AI operating partner",
    "branch": "claude/venture-studio-ios-app-2ytfbe",
    "updated": "2026-10-24T09:00:00Z",
    "statusLine": "Stopped deliberately with no app built. Three of four finalists died at the competitor gate, and the studio is moving to UK commercial construction where the founder has an insider edge.",
    "phaseCurrent": 2,
    "killDate": "2026-12-14",
    "killCriterion": "This venture was stopped at Gate 1b on 24 October 2026. The construction venture sets its own kill date in its Phase 1."
  },
  "needsYou": [
    {
      "id": "construction",
      "title": "Start the construction venture in a fresh session and repo",
      "why": "Paste everything below the horizontal rule in studio/PROMPT-construction.md into a new Claude Code session on a new, empty repo. It is self-contained and carries every lesson this run paid for.",
      "urgency": "now",
      "effort": "2 minutes"
    },
    {
      "id": "network",
      "title": "Widen the network allowlist BEFORE that session starts researching",
      "why": "This is the single highest-value five minutes available to you. Every page was refused this run, so no primary source was read and no App Store search was possible, which is why three finalists had competitors we had scored as blue ocean. Cloud environment menu in the session title bar, then Edit, then add under Allowed domains: apps.apple.com, legislation.gov.uk, hse.gov.uk, capterra.com, g2.com, trustpilot.com, reddit.com. Leave 'Allow package managers' ticked. https://code.claude.com/docs/en/cloud-environments#network-access",
      "urgency": "before research",
      "effort": "5 minutes"
    },
    {
      "id": "contacts",
      "title": "Write down which construction roles and companies you can actually reach",
      "why": "Your insider edge is the one asset this venture has that the last one did not, and reachability was the weakest dimension in all four finalists here. The new session will ask for this at Gate 1. Name real roles: site managers, commercial managers, QSs, plant managers, subcontractor owners.",
      "urgency": "before gate 1",
      "effort": "10 minutes"
    }
  ],
  "phases": [
    {
      "n": 1,
      "name": "Research",
      "status": "done",
      "detail": "Five scouts across 37 niches, all returned. Four finalists now in full deep-dive: offer, hypotheses, MVP, v1 spec, channels.",
      "deliverable": "research/market-research.md",
      "progress": 1
    },
    {
      "n": 2,
      "name": "Validation kit",
      "status": "pending",
      "detail": "Not run. Halted at the hard gate before any build, exactly as designed.",
      "deliverable": "engine/, landing/, validation/",
      "progress": 0
    },
    {
      "n": 3,
      "name": "iOS MVP",
      "status": "pending",
      "detail": "Not run. The venture was stopped at Phase 1.",
      "deliverable": "ios/",
      "progress": 0
    },
    {
      "n": 4,
      "name": "Ship-readiness",
      "status": "pending",
      "detail": "Not run. The venture was stopped at Phase 1.",
      "deliverable": ".github/workflows/ios.yml",
      "progress": 0
    }
  ],
  "gates": [
    {
      "n": 1,
      "name": "Pick the niche",
      "status": "awaiting_you",
      "question": "Which of the four surviving niches do we build?",
      "options": [
        "USCG mariner sea-service days and credential recency",
        "Government-contracting registration and recertification dates",
        "Motorsport dated safety gear and annual tech inspection",
        "Startup equity date windows (83(b), QSBS, option windows)"
      ],
      "alsoNeedFromYou": "Budget for the 8-week test, any insider access you have, and your risk appetite on market size."
    },
    {
      "n": "1b",
      "name": "Confirm the pivot",
      "status": "done",
      "question": "Mariner is dead. Pivot to the fallback, or redirect?",
      "options": [
        "Decided: stop this venture and go all-in on UK commercial construction"
      ],
      "alsoNeedFromYou": "Nothing further here. The construction brief is ready to paste into a new session."
    },
    {
      "n": 2,
      "name": "Go or no-go after validation",
      "status": "scheduled",
      "question": "Did the validation kit hit its pre-committed thresholds by the kill date?",
      "options": [],
      "alsoNeedFromYou": "Nothing until the thresholds report."
    }
  ],
  "teams": [
    {
      "team": "Research",
      "agents": [
        {
          "name": "research-analyst x5",
          "charter": "Scouting: 48 niches across five clusters",
          "status": "done",
          "assignment": "research/raw/"
        },
        {
          "name": "research-analyst x4",
          "charter": "Adversarial finalist deep dives",
          "status": "done",
          "assignment": "research/deep-dive-*.md — all four cut their own score"
        },
        {
          "name": "research-analyst x3",
          "charter": "Competitor gates",
          "status": "done",
          "assignment": "Two FAIL, one PASS. Killed the venture before any code was written"
        }
      ]
    },
    {
      "team": "Product and design",
      "agents": [
        {
          "name": "ux-designer",
          "charter": "Aha moment before paywall, screen specs, tokens, Dynamic Type, App Store screenshots",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        },
        {
          "name": "brand-copywriter",
          "charter": "MAGIC name, Grand Slam Offer stack, paywall and ASO copy",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        }
      ]
    },
    {
      "team": "Engineering",
      "agents": [
        {
          "name": "rules-engineer",
          "charter": "Dependency-free JS rules engine, 50+ golden vectors, every rule cited",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        },
        {
          "name": "ios-engineer",
          "charter": "SwiftUI, SwiftData, StoreKit 2, XcodeGen, PDF export",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        },
        {
          "name": "ios-reviewer",
          "charter": "Adversarial compiler-eye review and engine parity",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        },
        {
          "name": "qa-verifier",
          "charter": "Runs the checks, screenshots, CI, cross-agent consistency sweep",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        }
      ]
    },
    {
      "team": "Go to market",
      "agents": [
        {
          "name": "growth-marketer",
          "charter": "Channels to the first 100 paying users, 8-week plan, thresholds, event taxonomy",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        },
        {
          "name": "sales-closer",
          "charter": "Mom Test interviews, concierge SOP, deposit conversion, objections",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        }
      ]
    },
    {
      "team": "Risk",
      "agents": [
        {
          "name": "compliance-counsel",
          "charter": "App Store wording review, payment compliance, risk memo. Not legal advice",
          "status": "standby",
          "assignment": "Stopped mid-flight when the gate failed. Awaiting a live niche."
        }
      ]
    }
  ],
  "funnel": {
    "note": "Targets are pre-committed in Phase 2, before any traffic arrives, so they cannot be moved to fit the result.",
    "metrics": [
      {
        "label": "Landing visits",
        "value": null,
        "target": null
      },
      {
        "label": "Aha completions",
        "value": null,
        "target": null
      },
      {
        "label": "Email captures",
        "value": null,
        "target": null
      },
      {
        "label": "Interviews booked",
        "value": null,
        "target": null
      },
      {
        "label": "Concierge sales",
        "value": null,
        "target": null
      },
      {
        "label": "Founding deposits",
        "value": null,
        "target": null
      }
    ]
  },
  "risks": [
    {
      "severity": "medium",
      "risk": "Since 2018 SFI prints the expiry date on the label, and FIA always printed a year. For newer gear there is no arithmetic left to do, so the aha shrinks to a legacy installed base.",
      "mitigation": "Reframe the product around the per-body interval table and the event calendar rather than the subtraction. Validate the reframed aha before building it."
    },
    {
      "severity": "high",
      "risk": "Three of four finalists died at the gate to the same cause: the party holding the date already notifies for free. The Phase 1 shortlist was built without that filter.",
      "mitigation": "The counter-incentive test is now the first filter in CLAUDE.md and in the construction brief. A niche only survives if nobody holds the date, or the holder profits from the user forgetting."
    },
    {
      "severity": "high",
      "risk": "Five research passes missed the incumbent that kills the niche, because they searched for rivals by name in an App Store this environment cannot reach.",
      "mitigation": "New standing rule in CLAUDE.md: the first search for any candidate is the mechanic in the customer's words, before the deep dive. Applied to the fallback niches now."
    },
    {
      "severity": "high",
      "risk": "Phase 1 scouting missed paid competitors in at least one finalist niche, because the App Store could not be searched. The first deep dive found two.",
      "mitigation": "Every finalist gets an App Store search by hand before any code is written, and a competitor that already computes the same thing is an immediate drop."
    },
    {
      "severity": "high",
      "risk": "No primary source was readable. The environment's network policy refused every research host, so all Phase 1 evidence is search-snippet only.",
      "mitigation": "Treat every penalty and interval figure as unverified. A domain expert signs off the rule set before launch, and the engine marks each rule verified, snippet-only or unverified."
    },
    {
      "severity": "high",
      "risk": "No App Store competitive survey was possible, because apps.apple.com is refused. Competitive weakness scores are provisional.",
      "mitigation": "You run four App Store searches by hand on your phone at Gate 1. Ten minutes, and it can kill a pick."
    },
    {
      "severity": "high",
      "risk": "The recurring killer across 37 niches: whoever owns the data gives tracking away free. CE Broker, NCEES, NABP, SeaLog, Zoetis all do.",
      "mitigation": "Only niches where nobody is already paid to track the dates survived. Re-test this for the chosen niche before building."
    },
    {
      "severity": "medium",
      "risk": "The shared web-search budget ran out mid-research, leaving parts of three clusters under-researched.",
      "mitigation": "Named gaps are listed per niche in the raw scout files and re-run against the chosen niche only."
    },
    {
      "severity": "medium",
      "risk": "No Swift compiler in this environment. The first real compile happens in GitHub Actions on macOS.",
      "mitigation": "Conservative stable-API Swift, a line-by-line adversarial review, and CI watched until green."
    },
    {
      "severity": "medium",
      "risk": "App Store rejection or liability from wording that reads as a verdict on legality or safety.",
      "mitigation": "Every string passes the compliance wording test. We state the user's records and the public interval, never a verdict."
    }
  ],
  "files": [
    {
      "path": "studio/PROMPT-construction.md",
      "what": "The live deliverable: self-contained brief for the construction venture",
      "state": "done"
    },
    {
      "path": "HANDOFF.md",
      "what": "What happened, what is reusable, what is dead",
      "state": "done"
    },
    {
      "path": "CLAUDE.md",
      "what": "Studio standing rules, now led by the counter-incentive test",
      "state": "done"
    },
    {
      "path": "research/market-research.md",
      "what": "Phase 1 report: 48 niches scored, four deep-dived",
      "state": "done"
    },
    {
      "path": "research/E1-E2-competitor-gate.md",
      "what": "The gate that killed the chosen niche",
      "state": "done"
    },
    {
      "path": "research/gate-govcon.md",
      "what": "The gate that killed the first fallback",
      "state": "done"
    },
    {
      "path": "research/gate-motorsport.md",
      "what": "The one gate that passed, with the SFI label caveat",
      "state": "done"
    },
    {
      "path": "validation/OFFER.md",
      "what": "The frozen-contract pattern, reusable",
      "state": "done"
    },
    {
      "path": "engine/API.md",
      "what": "The frozen engine-surface pattern, reusable",
      "state": "done"
    },
    {
      "path": "hq/index.html",
      "what": "This dashboard, reusable by swapping state.json",
      "state": "done"
    },
    {
      "path": "studio/ORG.md",
      "what": "Org chart and how work flows",
      "state": "done"
    }
  ],
  "log": [
    {
      "at": "2026-10-24T09:00:00Z",
      "who": "founder",
      "what": "Decision at Gate 1b: stop this venture, go all-in on UK commercial construction, where the founder has an insider edge."
    },
    {
      "at": "2026-10-20T00:05:00Z",
      "who": "gate analyst",
      "what": "Motorsport PASS. Nothing free or paid computes gear expiry against per-body intervals, and no manufacturer or recert shop sells reminders, so the channel-bundling failure that killed mariner does not repeat. Caveat: since 2018 SFI prints the expiry date on the label, so the subtraction only helps legacy punch tags."
    },
    {
      "at": "2026-10-19T23:40:00Z",
      "who": "gate analyst",
      "what": "Govcon FAIL. SBA notifies HUBZone at 30 days, WOSB at 120, VOSB at 90 with reminders, CPARS by system notification; the 8(a) review date is set per firm by SBA notice and is not computable at all. Also confirmed the FAR amendment, under a different case number than the deep dive cited."
    },
    {
      "at": "2026-10-19T23:10:00Z",
      "who": "operating partner",
      "what": "Mariner niche dropped under the pre-committed E1 rule. Five build agents stopped. No Swift was written, which is exactly what the gate was for."
    },
    {
      "at": "2026-10-19T23:05:00Z",
      "who": "gate analyst",
      "what": "E1/E2 FAIL. MM-SEAS computes trailing 5 and 7-year windows with the 1.5-day credit, generates CG-719S forms, has a free-forever tier, and is bundled by the licence schools we planned to court."
    },
    {
      "at": "2026-10-19T22:30:00Z",
      "who": "operating partner",
      "what": "Phase 1 report written. Recommending the mariner niche, gated on a day-one competitor check, with motorsport as the same-day fallback."
    },
    {
      "at": "2026-10-19T22:12:00Z",
      "who": "equity analyst",
      "what": "Deep dive done: 6/10. Found a free competitor with the same feature list, and no community channel: its own forecast is 40-60 paying users in six months."
    },
    {
      "at": "2026-10-19T22:00:00Z",
      "who": "motorsport analyst",
      "what": "Deep dive done: 6/10. Paywall carve-out holds and reachability is the best of the four, but the price ceiling is about $60/yr and gear dates are entered once a year, so there is little to retain."
    },
    {
      "at": "2026-10-19T21:48:00Z",
      "who": "govcon analyst",
      "what": "Deep dive done: 6/10. Found a 2024 FAR amendment that invalidates the case law both scouts anchored on, and that GSA's free emails are more accurate than ours would be. Only the wider recert portfolio survives."
    },
    {
      "at": "2026-10-19T21:34:00Z",
      "who": "mariner analyst",
      "what": "Deep dive done: pursue conditional, 6.5/10. Corrected the qualifying-day rule (8 hours, not 4 hours underway) and found two paid competitors Phase 1 missed. Blue-ocean score cut from 4 to 3."
    },
    {
      "at": "2026-10-19T21:20:00Z",
      "who": "operating partner",
      "what": "Four deep-dive analysts dispatched on the finalists. Equity windows added as a fourth because it tied the top weighted score."
    },
    {
      "at": "2026-10-19T21:12:00Z",
      "who": "scout 3",
      "what": "Cross-border cluster done. Equity date windows score highest in that cluster; immigration killed as legal advice."
    },
    {
      "at": "2026-10-19T21:05:00Z",
      "who": "operating partner",
      "what": "Studio HQ built. Ten agents appointed across five teams."
    },
    {
      "at": "2026-10-19T21:00:00Z",
      "who": "scout 4",
      "what": "SMB cluster done. GovCon recerts and DOT small fleets survive; lien deadlines killed as legal advice plus Levelset."
    },
    {
      "at": "2026-10-19T20:55:00Z",
      "who": "scout 1",
      "what": "Assets cluster done. Charter captains and show horses survive; classic cars killed because no deadline exists."
    },
    {
      "at": "2026-10-19T20:52:00Z",
      "who": "scout 5",
      "what": "Wildcards done. Motorsport safety gear scores highest in any cluster; welders killed on a paywalled standard."
    },
    {
      "at": "2026-10-19T20:48:00Z",
      "who": "scout 2",
      "what": "Credentials cluster done. Most killed: the data owner gives tracking away free."
    },
    {
      "at": "2026-10-19T20:35:00Z",
      "who": "operating partner",
      "what": "Network policy refused every research host. Evidence quality downgraded to snippet-only and recorded as a risk."
    },
    {
      "at": "2026-10-19T20:30:00Z",
      "who": "operating partner",
      "what": "Scoring rubric and hard gates locked before any scout reported."
    },
    {
      "at": "2026-10-19T20:29:00Z",
      "who": "operating partner",
      "what": "Five research scouts dispatched across 37 candidate niches."
    }
  ]
};
