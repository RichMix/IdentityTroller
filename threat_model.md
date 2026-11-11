# Threat Model

## Project Overview

This project is a React + TypeScript single-page terminal simulation served by an Express server. In production, the main exposed entry point is the web UI rendered from `client/`, while `server/index.ts` primarily serves static assets and currently exposes no implemented application API routes beyond the generic Express shell. PostgreSQL schema and storage helpers exist, but the current production build does not register business endpoints that use them.

The application's primary security-sensitive promise is not traditional multi-user authentication; it is concealment of the operator identity and gated file contents until a visitor completes the intended exploration flow. Per platform assumptions, TLS is handled by the deployment platform. Mockup/dev sandboxes are out of scope unless production reachability is shown.

## Assets

- **Operator identity and gated terminal content** — the hidden identity, manifesto, tools list, beliefs, and related “locked until explored” content are central to the product behavior. If these are exposed without completing the exploration flow, the app’s core privacy/game mechanic is defeated.
- **Browser execution context for the site origin** — any script execution in the page can fully control the terminal UI, read rendered content, and act as the site in the visitor’s browser.
- **Future server-side user/session data** — `shared/schema.ts` and `server/storage.ts` define users, terminal sessions, and command logs. These are not currently reachable through implemented production routes, but they become high-risk assets immediately if API endpoints are added.
- **Application secrets and database connectivity** — the server depends on `DATABASE_URL` and would have direct database access if dynamic routes are added.

## Trust Boundaries

- **Browser to server** — visitors load the SPA from the Express server. The browser is untrusted, so any gating implemented only in client code must be assumed bypassable.
- **Rendered HTML to browser execution engine** — terminal output is rendered as HTML, not plain text. Any attacker-controlled string reaching that sink can execute in the page context.
- **Server to PostgreSQL** — the server has a configured database boundary via `server/db.ts`, but no current production route crosses it.
- **Production vs dev-only tooling** — Vite middleware and development helpers are dev-only unless they are explicitly included in production assets.

## Scan Anchors

- **Production entry points:** `server/index.ts`, `server/vite.ts`, `client/index.html`, `client/src/App.tsx`, `client/src/components/Terminal.tsx`
- **Highest-risk code areas:** `client/src/components/Terminal.tsx` (HTML sink), `client/src/utils/commandProcessor.ts` (command parsing, gated content, user-controlled output), `client/index.html` (third-party scripts)
- **Public/authenticated/admin surfaces:** current production surface is effectively all-public; there is no implemented authenticated or admin API surface
- **Usually dev-only / lower-priority areas:** Vite middleware behavior in `server/vite.ts` development branch, dormant DB/auth scaffolding in `server/storage.ts` and `shared/schema.ts` unless a production route begins using them

## Threat Categories

### Spoofing

This project does not currently expose a production login or role system, so classic account spoofing is not the primary risk today. The relevant guarantee is that any future protected behavior must not trust client-maintained state such as local sets, session storage, or UI state as proof of identity or progression.

### Tampering

The browser is fully attacker-controlled. Any progression logic, locked-command checks, or file access rules enforced only in the frontend can be modified, short-circuited, or invoked out of order with devtools. The application must keep any content that is truly meant to stay hidden out of the client bundle, or enforce access on a server boundary.

### Information Disclosure

The most important disclosure risk is accidental publication of “hidden” identity content through shipped client code, rendered HTML, source maps, or unauthenticated routes. The application must not embed restricted content in production client assets if concealment is part of the intended security property. Error responses and logs should also avoid leaking future sensitive data if server routes are added.

### Denial of Service

The current app has a small public surface and no expensive production API operations. DoS becomes more relevant if the future server-side command logging/session features are activated. Any future public endpoints should bound request sizes and avoid attacker-triggered expensive work.

### Elevation of Privilege

The relevant privilege boundary is between a guest visitor and the “authenticated/unlocked” terminal state. Because the client is untrusted, privileged terminal capabilities or hidden content cannot rely on browser-only checks. Separately, any attacker-controlled string rendered through `dangerouslySetInnerHTML` can escalate from text input to full script execution in the page, so terminal output must be treated as untrusted unless safely encoded.
