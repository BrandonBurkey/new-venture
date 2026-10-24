// Validates hq/state.json before it reaches the dashboard. A malformed or dishonest
// state file should fail loudly in CI rather than silently blank the founder's HQ.
// Usage: node hq/validate.mjs
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const s = JSON.parse(readFileSync(join(here, "state.json"), "utf8"));
const errs = [];
const need = (cond, msg) => { if (!cond) errs.push(msg); };

need(s.studio && typeof s.studio.statusLine === "string", "studio.statusLine missing");
need(typeof s.studio?.updated === "string", "studio.updated missing");
need(Array.isArray(s.needsYou), "needsYou must be an array");
need(Array.isArray(s.phases) && s.phases.length === 4, "expected 4 phases");
need(Array.isArray(s.gates) && s.gates.length === 2, "expected 2 gates");
need(Array.isArray(s.teams) && s.teams.length > 0, "teams missing");
need(Array.isArray(s.risks), "risks missing");
need(Array.isArray(s.log) && s.log.length > 0, "log missing");

for (const p of s.phases ?? []) {
  need(["pending", "active", "done", "blocked"].includes(p.status),
    `phase ${p.n}: bad status "${p.status}"`);
  need(typeof p.progress === "number" && p.progress >= 0 && p.progress <= 100,
    `phase ${p.n}: progress must be 0-100`);
}

// Studio rule: funnel figures are null until real, and targets are pre-committed
// before traffic. A string here means someone typed a plausible-looking number.
for (const m of s.funnel?.metrics ?? []) {
  for (const k of ["value", "target"]) {
    need(m[k] === null || typeof m[k] === "number",
      `funnel "${m.label}": ${k} must be a number or null, not ${typeof m[k]}`);
  }
}

// The agent ledger is cost data, so a figure typed as text would quietly mislead.
for (const r of s.agentRuns ?? []) {
  need(typeof r.agent === "string" && typeof r.task === "string",
    `agentRun: agent and task must be strings`);
  need(["queued", "working", "done", "failed"].includes(r.status),
    `agentRun "${r.task}": bad status "${r.status}"`);
  for (const k of ["tokens", "toolUses", "durationSec"]) {
    need(r[k] === undefined || typeof r[k] === "number",
      `agentRun "${r.task}": ${k} must be a number, not ${typeof r[k]}`);
  }
}

for (const b of s.pareto?.bars ?? []) {
  need(typeof b.pct === "number" && b.pct >= 0 && b.pct <= 100,
    `pareto "${b.label}": pct must be a number 0-100`);
}

for (const t of s.teams ?? []) {
  for (const a of t.agents ?? []) {
    need(["standby", "ready", "working", "blocked", "done"].includes(a.status),
      `agent ${a.name}: bad status "${a.status}"`);
  }
}

if (errs.length) {
  console.error("state.json INVALID:\n  - " + errs.join("\n  - "));
  process.exit(1);
}
const agents = s.teams.reduce((n, t) => n + t.agents.length, 0);
console.log(`state.json valid: 4 phases, ${agents} agents, ${s.needsYou.length} needs-you, ${s.log.length} log entries`);
