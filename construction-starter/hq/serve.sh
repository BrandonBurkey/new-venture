#!/usr/bin/env bash
# Serve the HQ dashboard locally. Reads hq/state.json live, so a refresh shows current state.
set -euo pipefail
cd "$(dirname "$0")"
PORT="${1:-4173}"
command -v node >/dev/null && node build.mjs || echo "node not found, skipping state.js rebuild"
echo
echo "  Studio HQ  ->  http://localhost:${PORT}"
echo "  Ctrl-C to stop"
echo
exec python3 -m http.server "$PORT" --bind 127.0.0.1
