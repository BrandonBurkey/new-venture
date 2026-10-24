#!/usr/bin/env sh
# Refresh the HQ dashboard: validate, rebuild the offline fallback, commit, push.
# Pushing is what updates the live Pages site, so this is the whole update path.
#
#   ./hq/sync.sh "what changed"
#
# Safe to run with nothing to commit; it just says so and exits 0.
set -eu
cd "$(dirname "$0")/.."
MSG=${1:-"Update HQ state"}

node hq/validate.mjs
node hq/build.mjs

if git diff --quiet -- hq/state.json hq/state.js; then
  echo "No HQ changes to push."
  exit 0
fi

git add hq/state.json hq/state.js
git commit -q -m "HQ: $MSG"

# Retry the push with backoff; cloud sessions see transient network failures.
n=0
until git push -u origin "$(git rev-parse --abbrev-ref HEAD)"; do
  n=$((n + 1))
  [ "$n" -ge 4 ] && { echo "Push failed after 4 attempts." >&2; exit 1; }
  sleep $((2 ** n))
done
echo "HQ pushed. Pages redeploys in about a minute."
