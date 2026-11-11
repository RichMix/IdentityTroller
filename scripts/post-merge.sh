#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

# Install the exact merged dependency graph, including development tools.
npm ci --include=dev --no-audit --no-fund

# Catch incompatible merged code before restarting the application.
npm run check
