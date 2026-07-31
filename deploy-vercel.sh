#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "→ Prijava na Vercel (ako treba)..."
npx vercel whoami || npx vercel login

echo "→ Deploy na production..."
npx vercel --yes --prod

echo "✓ Gotovo."
