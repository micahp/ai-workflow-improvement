# Prompt Library V3
A consolidated, research-backed prompt system covering the complete software-development life-cycle.

## Why this library exists
This library merges the best ideas from **v2 Meta-Prompts** and the latest **Updated Prompt Templates** research (PTCF, Chain-of-Thought, JSON-first, positive framing).  Each prompt is:

1. Structured with **PTCF** blocks (Persona, Task, Context, Format).
2. Equipped with a **step-by-step reasoning** stub.
3. Opinionated on **temperature settings** and response format.
4. Placed in a discoverable folder with numeric prefixes that follow the SDLC flow.

Use this README as the single entry point—scan the table, open the file you need, paste it into your LLM, and go.

---

## Index – When to use which prompt
| Phase | Situation / Ritual | Prompt File | One-liner Purpose |
|-------|--------------------|-------------|-------------------|
| Core Principles | Any prompt writing | `00_CORE_PRINCIPLES/00_PTCF_FRAMEWORK.md` | Understand mandatory prompt shape |
|  |  | `00_CORE_PRINCIPLES/01_CHAIN_OF_THOUGHT.md` | Why & how to add CoT |
|  |  | `00_CORE_PRINCIPLES/02_JSON_FIRST_GUIDE.md` | Structure output for parsing |
|  |  | `00_CORE_PRINCIPLES/03_TEMPERATURE_CHEATSHEET.md` | Pick the right model settings |
| Initiation | Brand-new project / major feature | `10_INITIATION/10_GREEN_FIELD_CHARTER.md` | Co-architect the project charter |
|  | Tech-stack decision | `10_INITIATION/11_TECH_STACK_DECISION.md` | Evaluate & pick stack |
| Planning | Break down feature | `20_PLANNING/20_FEATURE_BREAKDOWN.md` | Produce tasks & DoD |
|  | Continuous Kanban updates | `20_PLANNING/21_LLMTASK_KANBAN_LOOP.md` | Auto-update task log |
| Development | Clean implementation | `30_DEVELOPMENT/30_SENIOR_ENGINEER_IMPL.md` | Senior-level code gen |
|  | Safe incremental impl | `30_DEVELOPMENT/31_ROLLBACK_FRIENDLY_IMPL.md` | Phased, rollback-ready dev |
| Quality Gates | Code Review | `40_QUALITY_GATES/40_CODE_REVIEW.md` | Enforce quality in PRs |
|  | Test generation | `40_QUALITY_GATES/41_TEST_SCENARIO_BUILDER.md` | Produce robust tests |
|  | Security audit | `40_QUALITY_GATES/42_SEC_AUDIT.md` | Spot vulns pre-merge |
|  | Perf probe | `40_QUALITY_GATES/43_PERF_PROBE.md` | Insert perf instrumentation |
| Debugging | Functional bug | `50_DEBUGGING/50_ROOT_CAUSE_RECON.md` | Hypothesis-driven debug |
|  | Perf bottleneck | `50_DEBUGGING/51_PERF_DEBUG.md` | Systematic perf debug |
|  | Logging patch | `50_DEBUGGING/52_LOGGING_PATCH_TEMPLATE.md` | Temporary diagnostic logs |
| Documentation | New ADR / decision | `60_DOCUMENTATION/60_ADR_SCRIBE.md` | Draft ADRs fast |
|  | Tech docs | `60_DOCUMENTATION/61_TECH_DOC_GEN.md` | Generate developer docs |
| Research | Unknown-unknown deep-dive | `70_RESEARCH/70_LIT_REVIEW.md` | Summarise papers, RFCs |
| Meta | Session snapshot | `90_META/90_CONTEXT_SUMMARY.md` | 1 k-word rich context dump |
|  | Prompt retrospective | `90_META/91_PROMPT_RETRO.md` | Improve the prompts themselves |

---

## How to contribute
1. **Follow the skeleton** in each file—never skip PTCF blocks.
2. **Positive instructions** only; phrase “do this” instead of “don’t do that”.
3. Keep individual prompt files **≤ 350 LOC**; split if larger.
4. Commit messages should follow the pattern:
   * `feat(prompt): …` new prompt
   * `refactor(prompt): …` restructure or merge
   * `docs(prompt): …` improve wording only

---

Happy prompting! Keep commits small and the library evergreen. 