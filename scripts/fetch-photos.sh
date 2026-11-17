#!/usr/bin/env bash
# Downloads the suggested free Unsplash photos into public/images (run from the project root).
# Check each photo's page first to confirm it's under the free Unsplash License.
set -euo pipefail
cd "$(dirname "$0")/../public/images"
curl -fL "https://unsplash.com/photos/ZuHIek5xn_I/download?force=true&w=1920" -o hero-home-interior.jpg
curl -fL "https://unsplash.com/photos/yWwob8kwOCk/download?force=true&w=1600" -o commercial-office-hallway.jpg
echo "Done. Drywall photo: pick one manually (see CREDITS.md) and save as service-drywall-repair.jpg"
echo "Tip: compress the hero to under ~250KB (e.g. squoosh.app)."
