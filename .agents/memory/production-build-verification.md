---
name: Production build verification
description: Verification required after changing frontend build dependencies.
---

Verify dependency changes with the full production build as well as TypeScript checks and the preview.

**Why:** A compiler upgrade passed TypeScript and development preview checks but broke publishing because the production browser targets exercised a different transformation path.

**How to apply:** Run `npm run build` before reporting dependency or browser-target changes as ready to publish. Do not treat a working development server as evidence that the production bundle builds.
