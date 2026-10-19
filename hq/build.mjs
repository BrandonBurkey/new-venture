// Regenerates hq/state.js from hq/state.json so the dashboard also works when opened
// straight off the disk, where fetch() of a local file is blocked.
// Usage: node hq/build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(here, "state.json"), "utf8");
const state = JSON.parse(raw); // throws on malformed state, which is what we want
writeFileSync(
  join(here, "state.js"),
  "/* Generated from state.json by build.mjs. Do not edit. */\n" +
    "window.HQ_STATE = " + JSON.stringify(state, null, 2) + ";\n"
);
console.log("state.js written:", state.phases.length, "phases,",
  state.teams.reduce((n, t) => n + t.agents.length, 0), "agent assignments,",
  state.log.length, "log entries");
