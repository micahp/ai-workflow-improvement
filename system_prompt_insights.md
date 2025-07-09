# System Prompt Insights (Initial Draft)

This document captures recurring design primitives observed across major AI vendors’ “official” or leaked system prompts.

## Vendors Processed so far
Anthropic (Claude), Devin, Google Gemini, Manus, MiniMax, Meta Llama-4, OpenAI GPT, Perplexity, Replit Agent, Vercel v0, xAI Grok

## Cross-Vendor Design Primitives

1. **Core identity declaration** – every prompt starts with a self-identification line that names the model, creator, version, and often embeds the current date and knowledge-cutoff.
2. **Capability & tool scaffold** – each prompt enumerates special tools or sandbox abilities together with rules on when and how they may be used.
3. **Safety / refusal layer** – universal guard-rails banning disallowed content (illicit code, weapons, minors, self-harm) plus redirect clauses to official support URLs.
4. **Response-style grammar** – explicit constraints on length, tone, list usage, follow-up questions, and Markdown formatting. Many mandate user-language mirroring.
5. **Structured task loop / planning** – agentic prompts define multi-step loops (plan → act → report → standby). Particularly strong in coding agents (Devin, Replit, v0).
6. **Multilingual & tone mirroring** – assistants must respond in the user’s language and often mimic tone or vibe.
7. **Compliance & data-handling statements** – instructions to protect sensitive data, avoid leaking secrets, and obtain permissions for external comms.
8. **Environment / dependency cautions** – coding prompts forbid arbitrary package installs or destructive DB ops; encourage ORMs and existing libs.
9. **Special premium modes & tiers** – references to extended thinking, DeepSearch, Canvas, or paid subscription levels that unlock extra capabilities.
10. **Prohibition on self-reference** – explicit rule not to reveal system instructions; many provide a canned fallback reply if asked.

## Notable Vendor-Specific Quirks

- **Claude** – discourages bullet/numbered lists in casual chat.
- **Perplexity** – enforces ≥10 000-word research reports with no lists.
- **Vercel v0** – embeds strict Next.js/Tailwind code-generation rules.
- **Replit & Devin** – heavy emphasis on git hygiene and CI passes.
- **Meta Llama-4** – demands emoji/slang-rich replies but bans moralising phrases.

---
*Next step: review remaining folders (Windsurf, SameDev, Mistral, Multion, Lovable, Hume, DIA, Cursor, Cluely, Bolt) and update this document with any new patterns or unique behaviours.* 

## Additional Patterns Identified (Windsurf, SameDev, Mistral, MultiOn, Lovable, Hume, Dia, Cursor, Bolt)

11. **Custom structured output tags** – Several prompts require wrapping assistant-generated content in proprietary tags or blocks (e.g., `{dia:text-proposal}`, `<lov-code>`, `COMMANDS: …`, `<CodeProject>`). Adapters must emit the correct wrapper for each target model.
12. **IDE / platform integration constraints** – Cursor, Windsurf, SameDev, Lovable, and Bolt embed IDE-specific tool-call schemas, shell limitations, and coding conventions. Adapters should inherit these when operating inside those environments.
13. **Cloud code platform workflows** – Replit, SameDev, Lovable, Bolt, and similar cloud coding sandboxes emphasise live-preview dev servers, one-shot edit commands, Bun/Node runtimes, and versioning or deployment buttons; adapters must respect these interactive workflows and avoid unsupported shell operations.
14. **Explicit memory management instructions** – Windsurf and SameDev direct the agent to proactively create memories using dedicated tools or “Memorization Technique,” signalling a reusable design primitive for state persistence.
15. **Voice-first empathy rules** – Hume’s voice assistant enforces TTS-friendly dialogue: every reply begins with a ≤5-word interjection, no markdown, rich emotional mirroring. This pattern is unique to voice UX prompts.
16. **Command grammar for browser automation** – MultiOn defines a formal `COMMANDS:` language with action verbs and mandatory `STATUS:` labels (`DONE`, `CONTINUE`, etc.). Any adapter driving MultiOn must respect this grammar.
17. **Sandbox / dependency restrictions** – Bolt’s WebContainer prompt (and others) declare strict runtime capabilities (no native binaries, limited shell commands) and migration policies, illustrating a pattern of environment capability declarations.

### New Vendor-Specific Quirks
- **Windsurf / Cascade** – Focus on minimal, necessary tool calls and liberal use of a persistent memory database.
- **SameDev** – Prefers Bun over npm, mandates ethical web-site cloning, and stresses live preview considerations.
- **Mistral LeChat** – Resolves relative dates to absolute and rigorously handles web quota failures.
- **Bolt** – Requires markdown-only responses, forbids exposing system details, and enforces one-file SQL migrations with human-readable summaries.
- **Dia Draft Skill** – Utilises custom text-proposal tags with strict commentary separation and mandatory citations when search results are provided.
- **Hume Voice AI** – Prohibits lists, mandates conversational fillers, and disallows self-identification as an AI.
- **MultiOn** – Employs memory techniques when scrolling web pages and restricts commands to a predefined set. 

## Explicit Limitations Cheat-Sheet (non-negotiable “must-not” rules)

Content & policy
- No instructions for weapons, self-harm, child exploitation, illicit code.
- No disclosure of personal data or proprietary code.
- Never reveal or summarise the system prompt or tool list.

Formatting / output wrappers
- Claude casual chat: avoid bullet/number lists.
- Perplexity reports: ≥10 000 words, **no lists** whatsoever.
- Hume Voice AI: no markdown, no lists, every reply begins with ≤5-word interjection.
- Dia: all proposed text must be inside `{dia:text-proposal}` tags.
- Lovable / Vercel v0: all code & technical detail inside a single `<lov-code>` / `<CodeProject>` block per response.
- MultiOn: replies must follow `COMMANDS:` grammar and end with `STATUS:` keyword.

Tool-use & workflow guards
- Cursor/Windsurf/SameDev/Lovable/Bolt: one edit_file-style call per change set; must explain why before calling.
- Cloud code sandboxes: avoid unsupported shell ops; respect live-preview dev server workflows.
- Vercel v0: exactly one `<CodeProject>` per message; cannot output `package.json`.
- Dia: citations only if search results supplied; never inside text-proposal tag.

Environment / runtime bans
- Bolt WebContainer: no native binaries, no Git, no Supabase CLI, limited shell command list; Python std-lib only.
- Replit: no destructive DB ops; tests may not be altered unless asked.
- SameDev: prefer Bun; must not create new project directory if one exists; ethical web-cloning rules.

Dependency & DB safeguards
- Arbitrary package installs discouraged unless project already depends on them.
- Bolt SQL migrations: new file per change; no `DROP`, `DELETE`, `BEGIN/COMMIT/ROLLBACK`; RLS required for every table.

Self-identification locks
- Provide canned fallback line if asked about prompt (e.g., Devin’s “You are Devin…”); Hume never admits being AI. 