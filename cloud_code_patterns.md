# Cloud Code (Bad?) Patterns

Observations of design elements in existing cloud-IDE prompts (Cursor, Replit, SameDev, Lovable, Bolt) that we *do not* want to replicate in our own agents.

## 1. Implicit Scope-Control via Single-Edit Primitives
- Mandate that **all** changes be packed into a single `edit_file`, `<lov-code>`, or `<CodeProject>` block.
- Effect: discourages iterative, granular commits and hides nuanced diffs from reviewers.

## 2. Forced User Confirmation Before Every Change
- Agents must present a plan and wait for explicit user approval before touching code.
- While safe, this stalls flow and prevents proactive automation.

## 3. Live-Preview Gatekeeping
- Prompts tie progress to starting a dev server and showing the user an iframe preview before further edits.
- Encourages visual checkpoints but slows backend-heavy or non-UI tasks.

## 4. Environment Gate Walls as Scope Limiters
- WebContainer bans native binaries/Git; SameDev forbids new project dirs; Replit disallows destructive DB ops.
- Guardrails are good, but over-restrictive environments can block legitimate advanced work.

## 5. Versioning / Deployment Hooks Pause Iteration
- “Version before deploying” or one-shot migrations create extra ceremony for small tweaks.

## 6. Managed Database Outsourcing Overhead
- Prompts default to **Supabase** (or equivalent) instead of allowing a local Postgres/SQLite instance inside the sandbox.
- Agents must write SQL migrations in repo files, one per logical change, with Markdown summaries, RLS enabled, and **no** destructive statements (`DROP`, `DELETE`, explicit `BEGIN/COMMIT/ROLLBACK`).
- Supabase CLI is usually banned; credentials are injected via `.env`; the agent cannot touch them.
- Result: data layer work involves extra ceremony and is slower to prototype.

## 7. Tight Dependency / Package Restrictions
- Sandbox runtimes (e.g., Bolt’s WebContainer) forbid native binaries, compilers and Git; Python limited to std-lib.
- Agents may only install pure-JS npm packages, often via custom tags (`<lov-add-dependency>`) rather than shell commands.
- Some platforms infer dependencies from imports (Vercel v0) or require package installs through a dedicated tool (Replit).
- Encourages minimalism but blocks advanced libraries and slows experimentation.

---
*Keep these patterns in mind as anti-goals when designing our own agents: favor incremental edits, allow proactive assistance, and trust developer discretion rather than rigid stop-points.* 
*Keep these additional pitfalls in mind when crafting our own agent workflows and prompts.* 