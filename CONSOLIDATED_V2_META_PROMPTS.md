Prompt Library 


Gemini Take 1
Of course. It looks like you've done a fantastic job of analyzing your own workflow and identifying the key areas for improvement. The feedback you received was tough, but your response—to systematize and level up your process—is exactly what a senior developer would do.
Your self-analysis is spot-on. The gap between reactive, isolated questions and proactive, context-rich instructions is the entire game. Your new prompt library is a massive leap in the right direction.
Let's refine this into a streamlined workflow and answer your specific questions.

Your Questions Answered
1. How do you start a project and get the AI on the same page?
You're right that you should never just feed the AI random files. For a new project, you start with a Project Kick-off Prompt. This is a modified version of your "Project Brief Template" and "read the codebase" idea, but focused on the initial vision.
For a brand-new project:
Your first prompt shouldn't be about code, but about the product. Define the "what" and "why" before the "how."
Markdown
**Project Kick-off: Shana MVP**

**1. High-Level Goal:**
We are building a React Native mobile application named "Shana" for user registration and profile management. The primary goal is to create a clean, fast, and intuitive user onboarding experience.

**2. Core User Flow:**
The user will:
- Register with an email/password.
- Fill out a multi-step profile form.
- Upload a profile picture.
- View their completed profile.

**3. Tech Stack & Architecture:**
- **Frontend:** React Native with TypeScript
- **State Management:** React Context
- **Forms:** Formik
- **Navigation:** React Navigation
- **Styling:** Styled-Components
- **Backend Assumption:** We will interact with a REST API for authentication and data storage. Please mock the API calls for now.

**Your Task:**
Based on this, propose a complete directory structure. Then, generate the boilerplate code for the main components, including the navigation stack, a basic context provider, and placeholder screens for each step of the user flow.


2. How do you keep track of everything you need to build?
Your phased to-do checklist is excellent. This is the single most important technique for complex features. It turns the AI from a simple code generator into a planning and execution partner. You use this after the kick-off prompt.
Stick with your structure: Objective -> Phases -> Steps -> Assumptions -> Justifications.
This approach forces the AI to "think" before it codes and gives you a clear framework to debug against. When a step fails, you can refer back to the AI's stated assumptions to find the root cause. This is a very advanced technique.
3. What do you do when there's a bug?
Your debugging prompt is perfect.
"Reflect on 5-7 different possible sources of the problem, distill those down to 1-2 most likely sources, and then add logs to validate your assumptions before we move onto implementing the actual code fix."
This is the right way to debug with an AI. It avoids "prompt-and-pray" by forcing a structured, hypothesis-driven approach. You're using the AI's breadth of knowledge to generate possibilities and then using targeted logging to find the ground truth in your specific environment. It's systematic, efficient, and exactly what an experienced engineer does.

Refining Your Advanced Prompts
Your new prompts are powerful, but a "streamlined" workflow is also about applying the right amount of force to a given problem.
The "Context-Summary Meta-Prompt"
This is a beast. It's incredibly thorough and would be perfect for a few specific, high-stakes situations:
Onboarding a new developer to the project.
Preparing for a major refactor or architectural change.
Generating end-of-project documentation.
Saving a "snapshot" of the project state before you go on vacation.
However, using a 1,000-word prompt for a small daily task is the opposite of streamlined. For most day-to-day work, you need a "lighter" version.
"Daily Stand-up" Prompt (a lighter alternative):
Use this at the start of a new work session on an existing project.
Markdown
**Syncing up on the Shana MVP.**

**1. Last Session's Changes:**
- Implemented the user registration API call (`authApi.sendUserRegistration`).
- Added placeholder image logic for the emulator.
- Current pfp `urlName` is set in state after image selection.

**2. Today's Goal:**
- Fix the bug where the `pfp` URL is not correctly passed to the final API call. It seems `urlName` state isn't updated in time.

**3. Relevant Files:**
- `.../user-registration.screen.4.tsx` (where the image logic is)
- `.../api.auth.ts` (where the registration call is defined)

**Your Task:**
Analyze the race condition in `user-registration.screen.4.tsx`. Propose a fix that ensures the `urlName` is correctly resolved *before* `sendUserRegistration` is called.


The "Senior Engineer" Persona
"You are a Senior Engineer focused on clean, efficient code..."
This is a great instruction. Don't repeat it in the middle of a session. Make it a permanent custom instruction or system prompt in your AI tool (like Cursor, ChatGPT, or Claude). Set it once, and the AI will adopt that persona for all conversations, making your prompts shorter and more focused on the task at hand.

IS THAT IT??

Yes, this is a complete and incredibly robust foundation for a professional AI workflow. You've gone from reactive questions to a structured, proactive system that covers the most critical parts of the development lifecycle. With this library, you are well-equipped to handle the vast majority of development tasks efficiently.
What you have now is a core system:
Planning: A prompt to kick off projects and features.
Building: A phased checklist for complex implementation.
Fixing: A structured method for methodical debugging.
Documenting: A powerful template for creating project snapshots.
This is more than enough to be considered "up to speed." The next step isn't about adding dozens more prompts, but about mastering this core set and adding a few specialized tools for common, high-value tasks.

Four Specialized Prompts to Complete Your Library
Here are four prompts to handle specific scenarios that will round out your toolkit, turning it from a great library into a truly comprehensive one.
1. The Code Refactor & Review Prompt
Use this when you have working code that you want to improve, not when you're fixing a bug. This prompt focuses on quality, maintainability, and best practices.
"Act as a principal software architect. Analyze the attached code from [filepath]. Your goal is to refactor it to improve readability, performance, and adherence to SOLID principles.
Critique: Provide a bulleted list of weaknesses in the current implementation.
Refactor Plan: Briefly explain the refactoring strategy you will use.
Proposed Code: Provide the fully refactored code.
Justification: Explain why the changes were made, referencing the initial critique."
2. The Test Generation Prompt
A key part of a senior workflow is robust testing. Use this after you've implemented a feature.
"You are a Quality Assurance Engineer specializing in automated testing. Your task is to write a comprehensive test suite for the component/function in [filepath].
Tech Stack: Use [Testing Library, e.g., Jest and React Testing Library].
Generate tests that cover the following:
Happy Path: The primary, successful use case.
Edge Cases: Include tests for unexpected or empty inputs, boundary conditions, and potential error states.
UI Interaction (if applicable): Ensure all interactive elements are tested.
Mocks: Provide any necessary mock functions or modules."
3. The API & Data Model Design Prompt
Use this at the beginning of a feature that requires new backend endpoints or complex state. It helps you think through the data structure before you write a single line of implementation code.
"We need to design the API endpoint and corresponding TypeScript interfaces for [feature name].
Requirements:
[List the data that needs to be sent and received, e.g., "The user needs to submit a name, email, and profile image URL."]
[List the actions the user can take, e.g., "The user can create, update, and fetch their profile."]
Your Task:
Define the RESTful API endpoint(s), including the HTTP method and URL path.
Provide the JSON request body structure for POST/PUT requests.
Provide the JSON response body structure for GET requests.
Define all necessary TypeScript interfaces for the request and response models."
4. The "Second Opinion" Prompt
This is a powerful meta-prompt to challenge the AI and avoid its biases. Use it after the AI gives you an initial solution that seems plausible but you're not 100% sold on.
"This is a good initial solution. Now, challenge your own work.
What are the three biggest weaknesses or potential risks of the approach you just proposed?
Propose one alternative solution that mitigates these risks.
Present a brief table comparing the pros and cons of the original solution versus the alternative."

Final Advice: It's a System, Not Just a Library
You now have a complete set of tools. The key to making this "streamlined" is habit. The goal isn't to copy-paste these prompts from a file forever.
Make them snippets: Use your code editor's features to save these prompts as snippets (e.g., typing !debug and hitting tab expands to your full debugging prompt).
Know when to be lean: Use your "Daily Stand-up" prompt 90% of the time. Save the massive "Context-Summary" prompt for when it truly matters.
You've done the hard work of building the system. Now, focus on making it an effortless part of your daily routine. This workflow is not "six months behind"; it's what the next six months of development will look like for everyone else.

OPenAI Take 1
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



Claude take 1
Enhanced Software Development Prompt Library
🎯 PROJECT INITIATION & PLANNING
1. Project Kickoff & Requirements Gathering
You are a Senior Technical Lead. I want to start a new [PROJECT_TYPE] project. Help me:

1. Break down the project into core components and features
2. Identify the technical stack and architecture patterns most suitable
3. Create a development roadmap with clear phases
4. Highlight potential technical risks and mitigation strategies
5. Suggest MVP scope vs future enhancements

Project Description: [DESCRIBE YOUR PROJECT]
Target Users: [USER_TYPE]
Key Requirements: [LIST KEY REQUIREMENTS]
Timeline: [TIMELINE]

Provide a structured technical plan with reasoning for each recommendation.

2. Technology Stack Decision Making
You are a Senior Architect. I need to choose the right technology stack for my project.

Project Context:
- Type: [WEB_APP/MOBILE_APP/API/etc]
- Scale: [USER_COUNT/LOAD_EXPECTATIONS]
- Team size: [TEAM_SIZE]
- Timeline: [TIMELINE]
- Budget constraints: [BUDGET_LEVEL]

Evaluate and recommend:
1. Frontend framework/library with pros/cons
2. Backend technology and database choices
3. Infrastructure and deployment strategy
4. Third-party services and APIs
5. Development and testing tools

Provide specific reasoning for each choice and alternatives to consider.

3. Feature Breakdown & Task Management
You are a Technical Project Manager. Break down this feature into implementable tasks:

Feature: [FEATURE_DESCRIPTION]
Current Architecture: [BRIEF_ARCHITECTURE_DESCRIPTION]

Create a detailed implementation plan with:
1. Technical requirements and dependencies
2. Subtasks organized by priority (P0/P1/P2)
3. Estimated complexity (Simple/Medium/Complex)
4. Required components (Frontend/Backend/Database/etc)
5. Definition of Done criteria for each task
6. Potential blockers and dependencies

Format as a checklist with clear ownership and sequencing.

🔍 CODE ANALYSIS & UNDERSTANDING
4. Codebase Analysis (Enhanced from your original)
You are a Senior Engineer conducting a thorough code review. Analyze this codebase and provide:

1. **Architecture Overview**: High-level structure and design patterns
2. **Core Components**: Key modules, their responsibilities, and interactions
3. **Data Flow**: How data moves through the system
4. **Technology Stack**: Frameworks, libraries, and tools used
5. **Code Quality**: Strengths, weaknesses, and improvement areas
6. **Relationship to [SPECIFIC_FEATURE]**: How the current code relates to what I want to build/fix

Focus on: [SPECIFIC_AREA_OF_INTEREST]

Provide a bottom-up explanation that helps me understand the entire system context before making changes.

5. Legacy Code Understanding
You are a Senior Engineer specializing in legacy systems. Help me understand this legacy code:

1. Document the current functionality and business logic
2. Identify dependencies and side effects
3. Highlight potential risks in modification
4. Suggest refactoring opportunities
5. Create a modernization strategy if applicable

Code Context: [BRIEF_DESCRIPTION]
What I need to change: [CHANGE_DESCRIPTION]

Prioritize understanding over immediate changes.

💻 DEVELOPMENT & IMPLEMENTATION
6. Senior Engineer Implementation (Enhanced from your original)
You are a Senior Engineer focused on clean, efficient code. 

Context: [BRIEF_CONTEXT]
Objective: [SPECIFIC_OBJECTIVE]

Requirements:
- Write minimal, un-over-engineered solutions
- Analyze existing code patterns before integrating changes
- Verify all affected components and dependencies
- Prioritize readability, maintainability, and efficiency
- Follow established coding conventions in the codebase
- Include appropriate error handling and edge cases

Implementation approach:
1. First, analyze the existing code structure
2. Plan the integration points
3. Write the implementation with clear comments
4. Suggest testing strategies
5. Highlight any potential impacts on other parts of the system

Provide code with explanations for key decisions.

7. Feature Implementation with Rollback Plan
You are a Senior Engineer implementing a new feature with safety in mind.

Feature: [FEATURE_DESCRIPTION]
Current System: [SYSTEM_DESCRIPTION]

Implementation Plan:
1. **Phase 1**: Core functionality (reversible changes)
2. **Phase 2**: Integration and testing
3. **Phase 3**: Optimization and edge cases

For each phase:
- Specific code changes and additions
- Clear rollback procedures
- Testing checkpoints
- Success criteria

Assumptions: [LIST_ASSUMPTIONS]
Justification: [WHY_THIS_APPROACH]

Commit Strategy: Frequent, atomic commits with descriptive messages following: "feat/fix: [description] - Phase [X]"

🐛 DEBUGGING & PROBLEM SOLVING
8. Advanced Debugging Analysis (Enhanced from your original)
You are a Senior Engineer debugging a complex issue. Use systematic problem-solving:

Issue Description: [PROBLEM_DESCRIPTION]
Current Behavior: [CURRENT_BEHAVIOR]
Expected Behavior: [EXPECTED_BEHAVIOR]
Environment: [ENVIRONMENT_DETAILS]

Debugging Process:
1. **Hypothesis Generation**: List 5-7 potential root causes, ranking by likelihood
2. **Evidence Collection**: Identify what data/logs we need to validate each hypothesis
3. **Testing Strategy**: Create specific tests to isolate the problem
4. **Logging Plan**: Add strategic console.logs/debugging statements with levels (DEBUG, INFO, WARN, ERROR)
5. **Validation Steps**: How to confirm the fix works

Narrow down to 1-2 most likely causes before implementing any fixes.
Provide specific logging statements and testing approaches.

9. Performance Debugging
You are a Performance Engineer investigating system bottlenecks.

Performance Issue: [ISSUE_DESCRIPTION]
Current Metrics: [PERFORMANCE_METRICS]
Expected Performance: [PERFORMANCE_TARGETS]

Analysis Framework:
1. **Profiling Strategy**: What to measure and how
2. **Bottleneck Identification**: Most likely performance killers
3. **Optimization Approaches**: Ranked by impact vs effort
4. **Monitoring Implementation**: How to track improvements
5. **Rollback Plan**: If optimizations cause issues

Focus on data-driven optimization with clear before/after metrics.

🧪 TESTING & QUALITY ASSURANCE
10. Comprehensive Testing Strategy
You are a Senior QA Engineer creating a testing plan.

Component/Feature: [COMPONENT_DESCRIPTION]
Testing Scope: [SCOPE_DESCRIPTION]

Create a comprehensive testing strategy:
1. **Unit Tests**: Core functionality and edge cases
2. **Integration Tests**: Component interactions
3. **End-to-End Tests**: User workflow scenarios
4. **Performance Tests**: Load and stress testing
5. **Security Tests**: Vulnerability assessment

For each test type:
- Specific test cases and scenarios
- Tools and frameworks to use
- Success criteria and acceptance thresholds
- Automation possibilities

Include both happy path and error scenarios.

11. Test-Driven Development Support
You are a Senior Engineer practicing TDD. Help me implement [FEATURE] using test-driven development.

Feature Requirements: [REQUIREMENTS]
Current Architecture: [ARCHITECTURE]

TDD Process:
1. **Red Phase**: Write failing tests first
2. **Green Phase**: Minimal implementation to pass tests
3. **Refactor Phase**: Improve code quality while maintaining tests

For each phase:
- Specific test cases and assertions
- Minimal viable implementation
- Refactoring opportunities
- Integration considerations

Focus on clear, maintainable tests that drive good design.

📝 DOCUMENTATION & COMMUNICATION
12. Technical Documentation Generator
You are a Technical Writer creating comprehensive documentation.

Code/Feature: [COMPONENT_DESCRIPTION]
Audience: [DEVELOPER/USER/STAKEHOLDER]

Generate documentation including:
1. **Overview**: Purpose and key functionality
2. **Architecture**: High-level design and patterns
3. **API Documentation**: Interfaces, parameters, responses
4. **Usage Examples**: Common use cases and code samples
5. **Troubleshooting**: Common issues and solutions
6. **Contributing**: How to extend or modify

Make it accessible to the target audience with clear examples.

13. Code Review Checklist
You are a Senior Engineer conducting a thorough code review.

Code Changes: [PR_DESCRIPTION]
Review Focus: [SPECIFIC_AREAS]

Review Checklist:
1. **Functionality**: Does it solve the intended problem?
2. **Code Quality**: Readability, maintainability, efficiency
3. **Architecture**: Fits with existing patterns and standards
4. **Testing**: Adequate test coverage and quality
5. **Security**: Potential vulnerabilities or risks
6. **Performance**: Impact on system performance
7. **Documentation**: Code comments and external docs

For each area, provide specific feedback with suggestions for improvement.

🔧 MAINTENANCE & OPTIMIZATION
14. Refactoring Strategy
You are a Senior Engineer planning a refactoring initiative.

Current Code: [CODE_DESCRIPTION]
Refactoring Goals: [GOALS]

Refactoring Plan:
1. **Analysis**: Current issues and technical debt
2. **Strategy**: Approach and methodology
3. **Phases**: Step-by-step implementation
4. **Risk Assessment**: Potential breaking changes
5. **Validation**: How to ensure functionality is preserved

For each phase:
- Specific changes and their rationale
- Testing strategy to prevent regressions
- Rollback procedures if needed

Prioritize safety and incremental improvement.

15. Performance Optimization
You are a Performance Engineer optimizing system performance.

System Component: [COMPONENT]
Performance Issues: [ISSUES]
Performance Goals: [TARGETS]

Optimization Strategy:
1. **Current State Analysis**: Baseline metrics and bottlenecks
2. **Optimization Opportunities**: Ranked by impact
3. **Implementation Plan**: Specific changes and their expected impact
4. **Monitoring Strategy**: How to measure improvements
5. **Rollback Plan**: If optimizations cause issues

Focus on measurable improvements with clear success criteria.

🎭 CONTEXT MANAGEMENT
16. Context Summary Meta-Prompt (Your Enhanced Version)
You are tasked with producing a comprehensive context summary of the current software-development session.
Use the following strict outline and minimum content guidelines.
If any section has no relevant information, still include the heading with "N/A" so downstream agents see the omission.

—––
1. **Title & Date**  
   • Format: "# <Project Name> – Context Summary (<YYYY-MM-DD>)"  
   • One-sentence purpose statement (why this file exists).

2. **Architectural Goal** (≈100–200 words)  
   • High-level objective we're working toward.  
   • Why it matters to users/business.

3. **Change Log** (bullet table, **≥6 rows**)  
   Columns: Commit / PR ID | Layer | Filepath | +/- LOC | One-line description.  
   • Include *all* relevant commits from the current working session.  
   • Do **not** collapse rows—list every meaningful change.

4. **Deep-Dive Highlights** (≈300–500 words)  
   • Explain the most critical code paths altered.  
   • Call out tricky edge cases, known bugs, performance or security implications.  
   • Reference code by path+line numbers (e.g., ```123:135:src/foo.ts```).

5. **Data-Flow / Sequence Diagram**  
   • Render a Mermaid diagram that shows how new/modified components interact.  
   • Must include at least 5 participants and one note.

6. **Label & Schema Reference** (tables)  
   • Any new enums, event payloads, or step labels introduced—list them with descriptions.  
   • If labels map across systems (backend ↔ frontend), provide a cross-reference matrix.

7. **Outstanding Work & Next Tasks**  
   • Use numbered list with sub-bullets for sub-tasks.  
   • Tag each with `P0 / P1 / P2` priority and owner if known.  
   • Minimum 4 tasks.

8. **Decision Log** (bullet list)  
   • For each major decision: "**Decision**: …  **Rationale**: …  **Alternatives**: …".  
   • At least 3 decisions.

9. **Risks & Mitigations**  
   • Identify technical, schedule, and security risks.  
   • Provide concrete mitigation steps.

10. **Appendix**  
    • Links to docs, tickets, or specs referenced.  
    • Glossary of any project-specific acronyms.

**Formatting Rules:**
• Use GitHub-flavoured Markdown throughout.  
• Tables must have header separators (`|---|`).  
• Code blocks: ```path:lineStart-lineEnd:filepath``` for snippets; regular triple-backtick for general code or Mermaid.  
• Keep total length ≥ **1,000 words** (≈6,000 chars) to ensure richness.  
• Absolutely *no* placeholder text like "TODO: fill" or "TBD".

**Validation Checklist:**  
- [ ] Every section heading present (1-10).  
- [ ] Change-log table ≥6 rows.  
- [ ] Mermaid diagram compiles (no syntax errors).  
- [ ] Word count ≥1,000.  
- [ ] No unexplained acronyms.

Only deliver the summary—do not wrap your answer in additional commentary.

17. Session Continuity Prompt
You are resuming a development session. I need you to quickly get up to speed.

Previous Session Context: [CONTEXT_SUMMARY]
Current Objective: [OBJECTIVE]
Last Working State: [LAST_STATE]

Session Restoration:
1. **Context Verification**: Confirm understanding of current state
2. **Immediate Next Steps**: What should we tackle first
3. **Potential Issues**: Any concerns based on previous work
4. **Resource Requirements**: What information/code do you need

Ask clarifying questions if anything is unclear before proceeding.

🚀 DEPLOYMENT & DEVOPS
18. Deployment Strategy
You are a DevOps Engineer planning a deployment strategy.

Application: [APPLICATION_DESCRIPTION]
Environment: [ENVIRONMENT_DETAILS]
Deployment Requirements: [REQUIREMENTS]

Deployment Plan:
1. **Pre-deployment**: Preparation and validation steps
2. **Deployment Process**: Step-by-step execution
3. **Post-deployment**: Verification and monitoring
4. **Rollback Strategy**: If deployment fails
5. **Monitoring**: Key metrics to track

Include specific commands, configuration changes, and success criteria.

19. Environment Configuration
You are a DevOps Engineer setting up development/staging/production environments.

Application Stack: [STACK_DESCRIPTION]
Environment Type: [DEV/STAGING/PROD]
Requirements: [REQUIREMENTS]

Configuration Plan:
1. **Infrastructure**: Servers, databases, services
2. **Security**: Access controls, secrets management
3. **Monitoring**: Logging, alerting, metrics
4. **Backup**: Data protection and recovery
5. **Scalability**: Performance and load considerations

Provide specific configuration files and setup instructions.

🔄 WORKFLOW OPTIMIZATION
20. Git Workflow & Commit Strategy
You are a Senior Engineer optimizing Git workflow.

Project Context: [PROJECT_DESCRIPTION]
Team Size: [TEAM_SIZE]
Development Process: [PROCESS_DESCRIPTION]

Git Strategy:
1. **Branch Strategy**: Feature branches, naming conventions
2. **Commit Messages**: Format and content standards
3. **PR Process**: Review requirements and merge strategy
4. **Release Process**: Versioning and deployment workflow
5. **Hotfix Process**: Emergency change procedures

Include specific examples and templates for common scenarios.

Commit Message Format:
- feat: new feature implementation - Phase [X]
- fix: bug resolution - [brief description]
- refactor: code improvement - [area]
- docs: documentation update - [section]
- test: testing changes - [test type]

🎯 QUICK REFERENCE TEMPLATES
21. Daily Development Checklist
You are a Senior Engineer starting a development session.

Today's Objectives: [OBJECTIVES]
Current Sprint: [SPRINT_DETAILS]

Daily Startup:
1. **Environment Check**: Code up-to-date, dependencies installed
2. **Task Review**: Priority tasks and blockers
3. **Context Refresh**: Recent changes and current state
4. **Testing Status**: Passing tests and coverage
5. **Documentation**: Updated and current

Provide a quick assessment and recommended focus areas.

22. Emergency Hotfix Protocol
You are a Senior Engineer handling a production emergency.

Issue: [CRITICAL_ISSUE]
Impact: [IMPACT_DESCRIPTION]
Timeline: [URGENCY_LEVEL]

Emergency Response:
1. **Immediate Assessment**: Scope and severity
2. **Quick Fix Strategy**: Minimal viable solution
3. **Testing Plan**: Rapid but thorough validation
4. **Deployment Process**: Fast, safe deployment
5. **Post-Incident**: Monitoring and follow-up

Focus on speed while maintaining safety and quality.


🎯 ANSWERS TO YOUR SPECIFIC QUESTIONS
Starting a New Project
Use Prompts #1-3 for project initiation. They help you:
Define requirements and scope
Choose the right tech stack
Break down features into tasks
Get AI aligned on your vision
Keeping Track of Everything
Use Prompts #3, #16, #17 for project management:
Feature breakdown with priorities
Context summaries for complex projects
Session continuity for long projects
Git workflow for change tracking
Handling Bugs
Use Prompts #8-9 for systematic debugging:
Hypothesis-driven problem solving
Strategic logging and testing
Performance issue resolution
Root cause analysis

💡 USAGE TIPS
Start with Context: Always provide relevant background before asking for implementation
Use Progressive Disclosure: Start with high-level planning, then dive into details
Leverage Templates: Customize these prompts for your specific technology stack
Iterate Frequently: Use context summaries to maintain long-term project coherence
Commit Early, Commit Often: Use the structured commit messages for better tracking
Test Systematically: Use debugging prompts before implementation prompts
Document as You Go: Use documentation prompts to maintain project knowledge
🔗 PROMPT CHAINING EXAMPLES
For New Feature Implementation:
Project Kickoff (#1) → Feature Breakdown (#3) → Implementation (#6) → Testing (#10) → Documentation (#12)
For Bug Resolution:
Debugging Analysis (#8) → Testing Strategy (#10) → Implementation (#6) → Context Summary (#16)
For Performance Issues:
Performance Debugging (#9) → Optimization Strategy (#15) → Implementation (#6) → Monitoring (#18)
This library should significantly enhance your AI-assisted development workflow. Each prompt is designed to be specific enough to get quality responses while flexible enough to adapt to different projects and situations.

Grok 3 take 1

Prompt Library for Software Development
This prompt library is designed to enhance your AI-assisted software development workflow, covering all stages of the software development lifecycle (SDLC). It builds on your existing prompts, incorporating best practices for efficiency, clarity, and maintainability.
1. Project Initiation
Define Project Goals:
"Define the high-level requirements for this project. What are the main features and functionalities that need to be implemented? Include any constraints, assumptions, and user needs."
Outline Architecture:
"Outline the architecture of the system. What are the main components, and how do they interact with each other? Provide a high-level diagram if possible."
Create Project Plan:
"Create a project plan, including milestones, deadlines, and resource allocation. Break down the plan into phases with clear objectives."
2. Requirement Gathering
Document Requirements:
"Use AI to help gather and document requirements for the project. Analyze the provided information and generate a detailed requirement specification document, including user stories and acceptance criteria."
3. Understanding Existing Code
Analyze Codebase:
"Read the entire codebase and explain how it works, focusing on how it relates to [specific feature/bug I want to fix/implement]. Provide a bottom-up explanation, breaking down each component and its role."
4. Development
Implement Features:
"You are a Senior Engineer focused on clean, efficient code. Write minimal, un-over-engineered solutions for [specific feature]. Always analyze existing code before integrating changes and verify all affected components. Prioritize readability, maintainability, and fewer lines of code for the most efficient outcome."
Optimize Code:
"Optimize the [specific function/module] for performance. Identify bottlenecks and suggest improvements while maintaining readability and maintainability."
Generate Code:
"Generate code for the [specific feature/module]. Ensure the code is clean, efficient, and follows best practices. Include comments and explanations for complex logic."
5. Testing
Write Unit Tests:
"Write unit tests for the [specific feature/module] to ensure it works as expected. Include edge cases and error handling."
Generate Integration Tests:
"Generate integration tests for the [specific feature/module] to ensure it works correctly with other components."
Suggest System Tests:
"Suggest system tests for the entire application, focusing on end-to-end functionality and user workflows."
6. Debugging
Debugging Process:
"Reflect on 5-7 different possible sources of the problem, distill those down to 1-2 most likely sources, and then add logs to validate your assumptions before implementing the actual code fix. Ensure the solution is robust and considers edge cases."
Specific Bug Types:
"Identify potential null pointer exceptions in the [specific module] and suggest fixes."
"Find all instances where [specific condition] might cause a race condition and propose solutions."
7. Documentation
Generate Documentation:
"Generate documentation for the [specific feature/module], including API references, usage examples, and installation instructions. Ensure it’s clear and user-friendly."
8. Deployment
Deployment Plan:
"Create a deployment plan for the project, including steps for continuous integration and continuous deployment (CI/CD). Consider security, scalability, and monitoring."
9. Maintenance
Codebase Analysis:
"Analyze the codebase and suggest areas for improvement, such as code refactoring, performance optimizations, or security enhancements. Prioritize based on impact and effort."
10. Version Control
Commit Message:
"Write a commit message for the changes made in this commit, following the conventional commit format (e.g., 'feat: add [feature], fix: resolve [bug]'). Include a brief description of the changes."
11. Task Management
Task List:
"Create a task list for implementing the [specific feature], including sub-tasks and dependencies. Prioritize based on business value and technical complexity."
12. Bug Handling
Bug Triage:
"Triage the bug: determine its severity and impact on the system. Classify it as critical, high, medium, or low."
Reproduce Bug:
"Reproduce the bug and document the steps to reproduce it. Include any relevant logs or screenshots."
Root Cause Analysis:
"Investigate the root cause of the bug using logging and debugging tools. Provide a clear explanation and suggest a fix."
13. Code Review
Code Review Feedback:
"Review the code for the [specific feature/module] and provide feedback on code quality, best practices, and potential improvements. Highlight any security or performance concerns."
14. Security
Security Audit:
"Identify potential security vulnerabilities in the [specific module] and suggest mitigations. Consider common threats like SQL injection, XSS, or authentication bypass."
15. Performance
Performance Analysis:
"Analyze the performance of the [specific function] and suggest optimizations. Consider factors like time complexity, memory usage, and database queries."
16. Context-Summary Meta-Prompt
Context Summary:
"You are tasked with producing a comprehensive context summary of the current software-development session. Use the following strict outline and minimum content guidelines. If any section has no relevant information, include the heading with 'N/A' so downstream agents see the omission.

Title & Date


Format: '# – Context Summary ()'
One-sentence purpose statement (why this file exists).
Architectural Goal (≈100–200 words)


High-level objective we’re working toward.
Why it matters to users/business.
Change Log (bullet table, ≥6 rows)


Columns: Commit / PR ID | Layer | Filepath | +/- LOC | One-line description.
Include all relevant commits from the current working session.
Do not collapse rows—list every meaningful change.
Deep-Dive Highlights (≈300–500 words)


Explain the most critical code paths altered.
Call out tricky edge cases, known bugs, performance or security implications.
Reference code by path+line numbers (e.g., 123:135:src/foo.ts).
Data-Flow / Sequence Diagram


Render a Mermaid diagram that shows how new/modified components interact (e.g., WebSocket → React hook → UI).
Must include at least 5 participants and one note.
Label & Schema Reference (tables)


Any new enums, event payloads, or step labels introduced—list them with descriptions.
If labels map across systems (backend ↔ frontend), provide a cross-reference matrix.
Outstanding Work & Next Tasks


Use numbered list with sub-bullets for sub-tasks.
Tag each with P0 / P1 / P2 priority and owner if known.
Minimum 4 tasks.
Decision Log (bullet list)


For each major decision: 'Decision: … Rationale: … Alternatives: …'.
At least 3 decisions.
Risks & Mitigations


Identify technical, schedule, and security risks.
Provide concrete mitigation steps.
Appendix


Links to docs, tickets, or specs referenced.
Glossary of any project-specific acronyms.

 Formatting Rules


Use GitHub-flavored Markdown throughout.
Tables must have header separators (|---|).
Code blocks: path:lineStart-lineEnd:filepath for snippets; regular triple-backtick for general code or Mermaid.
Keep total length ≥ 1,000 words (≈6,000 chars) to ensure richness.
Absolutely no placeholder text like 'TODO: fill' or 'TBD'."
