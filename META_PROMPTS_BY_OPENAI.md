Below is a “level-up kit” you can drop straight into your prompt-library repo. I answer your three questions in the form of reusable prompt frameworks, plus a lightweight system for keeping everything knitted together.

1 — Spin-Up: “Green-Field Charter” prompt
When to use – the very first message of a new project or major feature.
### You are <Role> on <Project-Name>
**Goal (1 sentence):** <What we’re building & why it matters>  
**User Persona:** <Who benefits>  
**North-Star UX:** <1–2 bullet outcomes that prove success>

### Tech Frame
• Frontend stack: <React 18 + TS, Tailwind, tRPC…>  
• Backend stack: <NestJS, Postgres, Prisma…>  
• Non-negotiables: <perf budget, P99 ≤ 200 ms; a11y AA…>

### Ground Truth Assets
1. High-level architecture diagram (link)  
2. Figma flow (link)  
3. Initial domain model (inline JSON/YAML)  

---

**TASK FOR LLM**

1. Confirm understanding of the goal in <250 words>.  
2. Draft a phased roadmap (≤4 phases) with acceptance criteria.  
3. Identify unknowns / missing inputs.  
4. Ask clarifying questions *all at once*; do **not** output code yet.

Why it works
Front-loads every durable fact you have, so follow-ups stay consistent.


Forces the model to pull missing details instead of you discovering gaps mid-sprint.


A single “charter.md” lives in-repo; you update it and paste the delta when context changes.



2 — Tracking Work: “LLM-Kanban Loop”
TASKLOG.md lives at repo-root.
 One markdown table; one row per ticket.


ID
Title
Phase
Status
Owner
Notes


Daily stand-up prompt

 You are PM-Bot. Read `TASKLOG.md` + latest commits.
• Roll forward status columns (TODO → In-Progress → Done).
• Flag blockers or PRs waiting >24 h.
• Propose tomorrow’s top 3 tasks (P0 first).
Return an updated table.


Commit discipline

 git commit -m "feat(registration): P2-F1-T17 phase-2 step-1 – add email-validator util"
 Phase–Ticket traceability > “fixed stuff lol”.


Weekly context summary

 Your Context-Summary Meta-Prompt already nails this. Run it Friday afternoon; paste result into docs/weekly/<YYYY-MM-DD>.md for breadcrumb history.



3 — Bugs: “Root-Cause Recon” prompt
Trigger – test fails, prod alert, or mysterious behaviour.
### INCIDENT SNAPSHOT
• Symptom: <what you saw>  
• When / Env: <branch@SHA, staging, iOS 18.5>  
• Error logs: ```<trimmed stack>```  
• Recent changes touching area: git diff HEAD~5 --stat

---

**TASK FOR LLM**

1. List 5–7 plausible fault classes (config, state, race, version drift…).  
2. Collapse into top-2 hypotheses; cite code lines or commits that support each.  
3. Generate *instrumentation patch*:
   - 🔵 DEBUG logs (structured)
   - 🟢 Assertions / guards
   - 🟡 Telemetry counters  
   Provide as unified diff.

4. Wait for me to run patch & paste fresh logs before suggesting a fix.

Couple of pro-tips
Keep instrumentation commit separate (debug: prefix) so you can revert cleanly.


Ask the model to rank likelihood; it forces real reasoning, not shotgun fixes.


Once validated, follow with a standard “apply minimal fix, add test” prompt.



Putting it all together
Start of project – Run Green-Field Charter → save as charter.md.


Breakdown – Use model’s road-map to seed TASKLOG.md (one ticket per deliverable).


Daily dev –


Feature work: your existing “Senior Engineer” + checklist pattern is great; just reference ticket IDs so everything threads.


Debug work: fire Root-Cause Recon prompt.


Review cadence – Daily stand-up prompt updates TASKLOG.md; weekly summary prompt snapshots progress.



Quick answers to your direct questions
Question
Cheat-code
“What do you do when you’re just starting a project?”
Create a charter doc and run the Green-Field Charter prompt; turn the model into a co-architect before a single line of code.
“How do you keep track of everything you need to build?”
One source of truth (TASKLOG.md) + LLM-driven stand-ups to keep it current; every commit references a ticket.
“What do you do when there’s a bug?”
Capture an Incident Snapshot, run Root-Cause Recon, add only logging/telemetry first, validate hypothesis, then implement the minimal fix + regression test.

Steal these, tweak names to your taste, and commit them into prompt_library/.
 Your next interviewer will see a repeatable, professional-grade AI workflow—exactly what they meant by “six months ahead.” Good luck!

IS THAT IT?


Pretty close—but you’re still missing a few “Swiss-army-knife” patterns that you’ll reach for all the time. Think of a well-rounded meta-prompt library like a full test suite: if one class of work isn’t covered, that gap shows up exactly when the stakes are high. Below are the additional prompt modules I’d drop in, plus a quick file-layout suggestion so everything stays findable.

1. Core modules you still need
Category
Why it matters
Prompt skeleton (title-case the file)
Code Review / PR Gatekeeper
Lets the LLM police its own output and teammate PRs for style, perf, security, etc.
01_CODE_REVIEW_CHECKLIST.mdmd\nYou are Lead Reviewer. For PR #<id> …\n1. Summarise diff in 80 words\n2. Flag 📉 perf, 🔒 security, 🤯 complexity, 🤷‍♂️ unclear naming\n3. Classify each issue P0/P1/P2, suggest concise patch or approve\n
Refactor Guide
Safely ripping out tech-debt is a different mental model from “new feature.”
02_REFACTOR_GAMEPLAN.mdAsk for dependency graph, safety net tests, migration plan, incremental PR ordering.
Automated Test-Generator
Guarantees new code ships with coverage and gives quick harness when debugging.
03_TEST_SCENARIO_BUILDER.mdProvide function/APIs + edge cases → generate Jest/Vitest + property tests.
Perf & Footprint Profiling
“It works” is table-stakes; “it screams” gets you hired.
04_PERF_PROBE.mdAsk LLM to insert timers, flame-graph hints, memory diff script, rollback plan.
Security & Compliance Sweep
SOC2 / GDPR red-flags catch you post-launch otherwise.
05_SEC_AUDIT.mdChecklist: input validation, secrets handling, PII path, dependency CVEs.
Doc-Writer / ADR Draft
Future-you (or the next hire) will thank you.
06_ADR_SCRIBE.mdTemplate to turn a design-decision Slack thread into an Architecture Decision Record.
Research Synthesiser
For “unknown unknown” spikes—LLM digests five whitepapers for you overnight.
07_LIT_REVIEW.mdGive 3–5 URLs + questions → returns deeper summary, gap analysis, follow-up reading list.
Prompt-Quality Feedback Loop
Meta-meta: ask the model how to improve prompts and track best tweaks.
98_PROMPT_RETRO.mdAfter every big task, feed in the final conversation, ask what could be shorter, clearer, or earlier.
Style / Tone Linting (non-code)
Blog posts, release notes, commit messages—keeps voice consistent.
99_EDITORIAL_LINTER.md


2. Recommended repo layout
prompt_library/
├── README.md          ← quick index + when-to-use table
├── 00_BOOTSTRAP/
│   ├── GREEN_FIELD_CHARTER.md
│   └── TASKLOG_TEMPLATE.md
├── 10_FEATURE_WORK/
│   ├── SENIOR_ENGINEER_IMPL.md
│   ├── PHASE_CHECKLIST.md
│   └── CONTEXT_SUMMARY_META_PROMPT.md
├── 20_DEFECTS/
│   ├── ROOT_CAUSE_RECON.md
│   └── DEBUG_INSTRUMENTATION.md
├── 30_QUALITY_GATES/
│   ├── 01_CODE_REVIEW_CHECKLIST.md
│   ├── 03_TEST_SCENARIO_BUILDER.md
│   ├── 05_SEC_AUDIT.md
│   └── 04_PERF_PROBE.md
├── 40_MAINTENANCE/
│   ├── 02_REFACTOR_GAMEPLAN.md
│   └── 06_ADR_SCRIBE.md
├── 50_RESEARCH/
│   └── 07_LIT_REVIEW.md
└── 90_META/
    ├── 98_PROMPT_RETRO.md
    └── 99_EDITORIAL_LINTER.md

The numeric prefixes keep the list ordered without relying on GitHub’s alpha sorting.

3. Tiny but mighty add-ons
Model-selector stub – one-liner at top of each prompt:
 #model: "gpt-4o" #fallback: "claude-3-opus"
 Cursor, Continue, and other IDE agents will soon respect that metadata.


Token-budget note – don’t just “repeat every 20 k tokens.” Add an explicit “If >12 k tokens so far, self-summarise and ask user if summary is OK.” Saves you from hallucinations when windows fill up.


Self-evaluation checklist – your Context-Summary template already has one. Copy that idea to any prompt where correctness matters (tests, security).



4. How to know you’re “done enough”
✅ Every recurring development ritual—plan, build, review, test, debug, document, learn—has one prompt in the library.
 ✅ Each prompt includes: goal, inputs required, outputs expected, quality bar / checklist.
 ✅ You can go a full sprint touching only templates in the repo—no ad-hoc Slack copy-pastes.
When those three statements are true, your meta-prompt system is functionally complete. Anything else is personal flavour.

TL;DR
What you pasted is a solid foundation (spin-up, task tracking, feature checklist, debug workflow) but ship these nine more modules so you aren’t caught flat-footed on PR review, refactors, tests, perf, security, docs, or research spikes. Organise them under a numbered folder scheme, add model + token-budget annotations, and you’ll present a battle-ready workflow the next time someone says you’re “six months behind.”
