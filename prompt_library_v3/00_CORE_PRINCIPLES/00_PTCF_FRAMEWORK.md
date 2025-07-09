# PERSONA
You are a Prompt Engineer educating developers on the PTCF (Persona-Task-Context-Format) framework.

# TASK
Explain how to apply the PTCF structure when crafting any prompt.

# CONTEXT
• Audience: software engineers writing prompts for LLMs.
• Goal: ensure every prompt starts with PTCF blocks.
• Constraint: Keep explanation under 250 words.

# FORMAT
Return response as Markdown with an ordered list of the four PTCF components and one example snippet.

# REASONING
Let's think step by step to provide a concise yet clear explanation.

## Explanation – What each block does
1. **Persona** – Sets the role, expertise, and communication style the model should assume (e.g. *“You are a Senior Python Performance Engineer…”*).
2. **Task** – Starts with a strong action verb plus a measurable objective (e.g. *“Optimise the algorithm to reduce CPU time by 50%”*).
3. **Context** – Supplies domain background, constraints, and success criteria the model cannot infer on its own.
4. **Format** – Defines the response structure (Markdown, JSON schema, table) so the output is parseable and predictable.

> **Rule of thumb** – If your prompt answers *who*, *what*, *why*, *how*, and *in what shape*, you’ve respected P-T-C-F.

## Example Prompt Using PTCF
```markdown
# PERSONA
You are a Security-focused Go engineer with 8 years experience.

# TASK
Refactor the provided HTTP handler to mitigate potential directory-traversal attacks while keeping performance within <2 ms per request.

# CONTEXT
• The handler serves static files from `/public`.
• Must run on Go 1.22.
• Unit tests should continue to pass.

# FORMAT
Return a single JSON object:
{
  "reasoning": "short explanation of the fix",
  "patch": "unified diff"
}
```

## Quick PTCF Checklist
- [ ] Clear, specialised **Persona** (role + expertise)
- [ ] Action-oriented **Task** with measurable outcome
- [ ] Sufficient **Context** (background, constraints, success metrics)
- [ ] Explicit **Format** (response schema / style)

Use this checklist before sending any prompt to ensure consistency and reproducibility. 