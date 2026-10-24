/* Generated from state.json by build.mjs. Do not edit. */
window.HQ_STATE = {
  "studio": {
    "name": "Studio HQ",
    "venture": "UK commercial construction — niche not yet chosen",
    "founder": "Brandon",
    "operatingPartner": "AI operating partner",
    "branch": "main",
    "updated": "2026-10-24T00:00:00Z",
    "statusLine": "Scaffolding seeded. Nothing researched yet. Fix the network allowlist, then paste PROMPT.md to begin.",
    "phaseCurrent": 1,
    "killDate": null,
    "stoppedMark": "0",
    "stoppedLabel": "niches examined so far",
    "stoppedOn": "2026-10-24",
    "killCriterion": "The kill date is set in Phase 1, before any research returns, and written into validation/OFFER.md."
  },
  "needsYou": [
    {
      "id": "network",
      "title": "Fix the network allowlist, and prove it works",
      "why": "The highest-value five minutes available. Cloud environment menu in the title bar, then Edit, then Network access. Add apps.apple.com, itunes.apple.com, legislation.gov.uk, hse.gov.uk, reddit.com, capterra.com, g2.com, trustpilot.com. Leave 'Allow package managers' ticked. Then make the session fetch https://www.hse.gov.uk/ and confirm it returns content. See SETUP.md step 2.",
      "urgency": "before any research",
      "effort": "5 minutes"
    },
    {
      "id": "prompt",
      "title": "Paste PROMPT.md as your first message",
      "why": "Self-contained brief. Restart the session first if you have just committed this scaffolding, so the agent roster and CLAUDE.md are loaded.",
      "urgency": "now",
      "effort": "2 minutes"
    },
    {
      "id": "contacts",
      "title": "List the construction roles and companies you can reach",
      "why": "Your insider access is this venture's one structural advantage, and the rubric scores it at 10%. Name real roles: site managers, commercial managers, QSs, plant managers, subcontractor owners, H&S advisors. Gate 1 asks for this.",
      "urgency": "before gate 1",
      "effort": "10 minutes"
    }
  ],
  "phases": [
    {
      "n": 1,
      "name": "Research",
      "status": "pending",
      "detail": "25+ niches, weights locked before evidence, counter-incentive and mechanic gates run INSIDE this phase, then adversarial deep dives on the survivors.",
      "deliverable": "research/market-research.md",
      "progress": 0
    },
    {
      "n": 2,
      "name": "Validation kit",
      "status": "pending",
      "detail": "Freeze the offer and engine contracts first, then rules engine with golden vectors, landing page delivering the aha free in-browser, and the 8-week plan with pre-committed thresholds.",
      "deliverable": "engine/, landing/, validation/",
      "progress": 0
    },
    {
      "n": 3,
      "name": "iOS MVP",
      "status": "pending",
      "detail": "SwiftUI, SwiftData, StoreKit 2, engine ported to a local Swift package passing the same vectors, then an adversarial review pass.",
      "deliverable": "ios/",
      "progress": 0
    },
    {
      "n": 4,
      "name": "Ship-readiness",
      "status": "pending",
      "detail": "Green CI on macOS, App Store listing, final report.",
      "deliverable": ".github/workflows/ios.yml",
      "progress": 0
    }
  ],
  "gates": [
    {
      "n": 1,
      "name": "Pick the niche",
      "status": "scheduled",
      "question": "Which surviving niche do we build?",
      "options": [],
      "alsoNeedFromYou": "Which roles and companies you can reach, your validation budget, and your risk appetite on market size."
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
          "name": "research-analyst",
          "charter": "Sourced evidence, counter-incentive and mechanic gates, scoring, deep dives",
          "status": "standby",
          "assignment": "Starts when the brief is pasted"
        }
      ]
    },
    {
      "team": "Product and design",
      "agents": [
        {
          "name": "ux-designer",
          "charter": "Aha before paywall, screen specs, tokens, Dynamic Type, App Store screenshots",
          "status": "standby",
          "assignment": "Phase 2"
        },
        {
          "name": "brand-copywriter",
          "charter": "MAGIC name, Grand Slam Offer stack, paywall and ASO copy",
          "status": "standby",
          "assignment": "Phase 2"
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
          "assignment": "Phase 2"
        },
        {
          "name": "ios-engineer",
          "charter": "SwiftUI, SwiftData, StoreKit 2, XcodeGen, PDF export",
          "status": "standby",
          "assignment": "Phase 3"
        },
        {
          "name": "ios-reviewer",
          "charter": "Adversarial compiler-eye review and engine parity",
          "status": "standby",
          "assignment": "Phase 3, after the engineer"
        },
        {
          "name": "qa-verifier",
          "charter": "Runs the checks, screenshots, CI, cross-agent consistency sweep",
          "status": "standby",
          "assignment": "Phases 2 to 4"
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
          "assignment": "Phase 2"
        },
        {
          "name": "sales-closer",
          "charter": "Mom Test interviews for warm introductions, concierge SOP, deposits, objections",
          "status": "standby",
          "assignment": "Phase 2"
        }
      ]
    },
    {
      "team": "Risk",
      "agents": [
        {
          "name": "compliance-counsel",
          "charter": "App Store wording, UK GDPR, Consumer Contracts Regulations, risk memo. Not legal advice",
          "status": "standby",
          "assignment": "Phase 2, then every gate"
        }
      ]
    }
  ],
  "funnel": {
    "note": "Targets are pre-committed in Phase 2, before any traffic arrives, so they cannot be moved afterwards to fit the result.",
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
      "severity": "high",
      "risk": "The card schemes, accreditation bodies, inspection companies and insurers all sell renewals, so they probably already email every date. That pattern killed three of four finalists on the previous venture.",
      "mitigation": "The counter-incentive test is hard gate 2 and carries 20% of the score. Verify who notifies before investing research in any candidate."
    },
    {
      "severity": "high",
      "risk": "British Standards are paywalled by BSI, and many trade-body documents are too. A niche whose intervals exist only inside a paid standard cannot ship.",
      "mitigation": "Hard gate 4. Verify the free-source carve-out explicitly for every interval, rather than assuming it."
    },
    {
      "severity": "high",
      "risk": "Most obvious construction ideas are about chasing other people for their documents, which needs a backend and accounts.",
      "mitigation": "Hard gate 5, applied early and strictly. The target is one person's phone, offline in a site cabin."
    },
    {
      "severity": "medium",
      "risk": "If the network allowlist is not widened, research runs on search snippets, no App Store survey is possible, and competitive scores are unreliable.",
      "mitigation": "SETUP.md step 2, and the session must prove a fetch works before research starts."
    },
    {
      "severity": "medium",
      "risk": "No Swift compiler in this environment. The first real compile happens in GitHub Actions on macOS.",
      "mitigation": "Conservative stable-API Swift, an adversarial line-by-line review, and CI watched until green."
    }
  ],
  "files": [
    {
      "path": "SETUP.md",
      "what": "The five setup steps. Start here.",
      "state": "done"
    },
    {
      "path": "PROMPT.md",
      "what": "The brief to paste as your first message",
      "state": "done"
    },
    {
      "path": "CLAUDE.md",
      "what": "Studio standing rules, led by the counter-incentive and mechanic rules",
      "state": "done"
    },
    {
      "path": "research/scoring-rubric.md",
      "what": "Weights and hard gates. Fill in and commit before any research returns.",
      "state": "done"
    },
    {
      "path": "studio/ORG.md",
      "what": "Org chart and how work flows",
      "state": "done"
    },
    {
      "path": "templates/OFFER.template.md",
      "what": "The frozen offer contract. Copy to validation/OFFER.md in Phase 2.",
      "state": "done"
    },
    {
      "path": "templates/ENGINE-API.template.md",
      "what": "The frozen engine surface. Copy to engine/API.md in Phase 2.",
      "state": "done"
    },
    {
      "path": "research/market-research.md",
      "what": "Phase 1 report",
      "state": "planned"
    },
    {
      "path": "engine/",
      "what": "Rules engine and golden vectors",
      "state": "planned"
    },
    {
      "path": "landing/index.html",
      "what": "Landing page delivering the aha free",
      "state": "planned"
    },
    {
      "path": "validation/",
      "what": "8-week plan, channels, interviews, SOPs, risk memo",
      "state": "planned"
    },
    {
      "path": "ios/",
      "what": "The app",
      "state": "planned"
    }
  ],
  "log": [
    {
      "at": "2026-10-24T00:00:00Z",
      "who": "operating partner",
      "what": "Studio scaffolding seeded from the previous venture: ten agent charters, the standing rules, the rubric with the counter-incentive gate, the frozen-contract templates and this dashboard."
    }
  ]
};
