/* Generated from state.json by build.mjs. Do not edit. */
window.HQ_STATE = {
  "studio": {
    "name": "Studio HQ",
    "venture": "UK commercial construction — niche not yet chosen",
    "founder": "Brandon",
    "operatingPartner": "Bob, project manager",
    "branch": "claude/construction-venture",
    "updated": "2026-10-24T14:30:00Z",
    "statusLine": "One hop to the buyer confirmed, which reopens the owner-operator candidates. Three scouts still out on the mechanic gate.",
    "phaseCurrent": 1,
    "killDate": null,
    "stoppedMark": "0",
    "stoppedLabel": "niches examined so far",
    "stoppedOn": "2026-10-24",
    "killCriterion": "The kill date is set in Phase 1, before any research returns, and written into validation/OFFER.md."
  },
  "needsYou": [
    {
      "id": "pages",
      "title": "Turn on GitHub Pages so your HQ updates itself, free and forever",
      "why": "One click: repo Settings → Pages → Source: \"GitHub Actions\". Then the Actions tab → run the \"HQ\" workflow once, and it prints your permanent URL. After that every push updates the dashboard with no server, no session and no cost. Note it is a public site, as this repo already is.",
      "urgency": "whenever — blocks nothing",
      "effort": "2 minutes"
    },
    {
      "id": "intro-experiment",
      "title": "Get ONE real introduction to a subcontractor owner, by 31 Oct",
      "why": "You confirmed a site manager can introduce you. Good — that reopens the candidates where the buyer actually loses their own money. But a promised introduction and a completed one are different things, and the previous venture died of assuming a channel worked. So this is a dated experiment, not a scoring input: one completed introduction by 31 Oct keeps contact proximity at 3 and keeps those candidates live. If it does not happen, it drops to 2.",
      "urgency": "by 31 Oct",
      "effort": "one phone call"
    },
    {
      "id": "gate1-budget",
      "title": "Set the 8-week validation budget",
      "why": "Cash for organic validation before any app is built. Shapes the Phase 2 experiment plan. The previous venture’s plans came in at £170–£570.",
      "urgency": "needed by Phase 2",
      "effort": "1 minute"
    },
    {
      "id": "gate1-risk",
      "title": "State your risk appetite on market size",
      "why": "How much eventual business size weighs against the odds it works at all. Tunes one scoring weight and the kill thresholds.",
      "urgency": "shapes Phase 1 scoring",
      "effort": "1 minute"
    }
  ],
  "phases": [
    {
      "n": 1,
      "name": "Research",
      "status": "active",
      "detail": "25+ niches, weights locked before evidence, counter-incentive and mechanic gates run INSIDE this phase, then adversarial deep dives on the survivors.",
      "deliverable": "research/market-research.md",
      "progress": 40
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
      "team": "Command",
      "agents": [
        {
          "name": "bob",
          "charter": "Dispatch, sequencing, gate enforcement, arbitration, the dashboard. The founder’s only point of contact.",
          "status": "working",
          "assignment": "Running the Phase 1 mechanic gate in waves"
        }
      ]
    },
    {
      "team": "Research",
      "agents": [
        {
          "name": "research-analyst",
          "charter": "Sourced evidence, counter-incentive and mechanic gates, scoring, deep dives",
          "status": "working",
          "assignment": "Wave 1 of the mechanic gate: three scouts on off-hire, lifting/PPE service lives, and retention release."
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
      "severity": "medium",
      "risk": "The reachable audience is not the buyer, but a one-hop route to one now exists. The founder can reach site managers, who are PAYE; the candidates that survive the counter-incentive test are bought by subcontractor owners. On 24 Oct the founder confirmed a site manager can introduce him to an owner, which moves contact proximity from 2 to the rubric’s \"one hop\" score of 3.",
      "mitigation": "Treated as a claim to test, not a fact to lean on: one completed introduction by 31 Oct. Scores stay capped at 3 — no niche is scored as though the founder IS the buyer. If the introduction does not happen, proximity drops to 2 and stopping becomes the honest recommendation."
    },
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
      "severity": "low",
      "risk": "RESOLVED 24 Oct. The allowlist was widened and verified: hse.gov.uk and legislation.gov.uk return real content on deep pages, and GB App Store search returns app names, sellers, prices and rating counts. Primary sources and the mechanic gate are both available for the first time.",
      "mitigation": "Residual risk only: one App Store search returned an empty body before a retry succeeded, so a single empty result is treated as transient and retried, never scored as \"no competitor found\"."
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
    },
    {
      "at": "2026-10-24T01:15:00Z",
      "who": "operating partner",
      "what": "Step 0 network verification: all three test hosts refused. www.hse.gov.uk, www.legislation.gov.uk and itunes.apple.com each failed DNS resolution; the proxy recorded a 403 on CONNECT for all three. Control hosts github.com and registry.npmjs.org returned normally, so the egress path works and the allowed-domains list is the sole cause. Web search returns snippets only. Stopped and waiting for the founder; no research scouts dispatched."
    },
    {
      "at": "2026-10-24T02:05:00Z",
      "who": "operating partner",
      "what": "Founder widened the network allowlist. Re-verified: www.hse.gov.uk 200, www.legislation.gov.uk 200, itunes.apple.com lookup 200 with parsed JSON. Deep pages confirmed (HSE thorough-examinations guidance; LOLER 1998 reg 9 on legislation.gov.uk). GB App Store search returns names, sellers, prices and rating counts, so the mechanic gate is runnable. One transient empty search body observed and retried successfully. Step 0 closed."
    },
    {
      "at": "2026-10-24T02:40:00Z",
      "who": "operating partner",
      "what": "Froze the founder’s three Gate 1 answers into research/scoring-rubric.md without touching the weights, and added hard gate 9 (does the employer pay?). Wrote research/niche-longlist.md: 33 candidates in four groups ordered by who holds the date, every line marked unverified, with predictions recorded before gating. Built the zero-cost HQ update path: hq/validate.mjs, hq/sync.sh and .github/workflows/hq.yml deploying hq/ to GitHub Pages on every push."
    },
    {
      "at": "2026-10-24T14:05:00Z",
      "who": "bob",
      "what": "Founder asked for a project manager as single point of contact. Added .claude/agents/bob.md and studio/COMMS.md, which states plainly that sub-agents have no peer channel: they hand off through files at agreed paths and route questions through Bob via a mandatory handoff block. COMMS.md also fixes write ownership per path so two agents never hold one file in a wave, and sets the reporting contract that keeps the founder’s chat to decisions only. Dispatched wave 1 of the mechanic gate."
    },
    {
      "at": "2026-10-24T14:30:00Z",
      "who": "bob",
      "what": "Founder confirmed a site manager can introduce him to a subcontractor owner. Contact proximity lifted from the interim cap of 2 to the rubric’s defined \"one hop\" score of 3, and no higher — 5 is reserved for contacts who ARE the buyer, which remains untrue. Reopens candidates A1, A2 and B5. Recorded as a dated experiment rather than a scoring input: one completed introduction by 31 Oct, or proximity drops back to 2."
    }
  ]
};
