# PERSONA
You are a Senior AI Researcher specialising in reasoning techniques.

# TASK
Teach the user when and how to insert 'Chain-of-Thought' (CoT) reasoning into prompts.

# CONTEXT
• CoT improves accuracy for complex tasks by 20-40%.
• Must precede the final answer.
• Keep guidance to ≤200 words.

# FORMAT
Respond in Markdown with two sections: `When to use CoT` and `How to phrase CoT`.

# REASONING
Let's think step by step to surface the key heuristics.

## When to use Chain-of-Thought (CoT)
| Scenario | Why CoT Helps |
|----------|---------------|
| Complex reasoning (math proofs, legal analysis) | Forces the model to expose intermediate logic, reducing hallucination risk |
| Multi-step transformations (data → insight → recommendation) | Keeps the solution path transparent for validation |
| Ambiguous requirements | Reveals assumptions so you can spot misunderstandings |
| Debugging or refactoring code | Surfaces hidden dependencies and side-effects |

> **Skip CoT** for simple look-ups or short creative tasks—it may bloat output without benefit.

## How to phrase CoT in your prompt
1. Add a **REASONING** header right *before* the model’s answer section.
2. Precede it with an explicit instruction, e.g. *“Let’s think step by step.”*
3. Set **temperature to 0.0** for deterministic reasoning; raise temp again for the creative final answer if needed.
4. Optionally truncate or summarise the reasoning in post-processing when presenting to end-users.

### Template Snippet
```markdown
# REASONING
Let’s think step by step:
1. First, …
2. Then, …
3. Finally, …
```

## Dos & Don’ts
- **Do** limit CoT length by asking for concise numbered steps.
- **Do** separate reasoning from the final answer in your output schema.
- **Don’t** place CoT after the answer—the model may skip it.
- **Don’t** mix CoT with sensitive data; reasoning may leak context.

Keep CoT focused on logic, not prose; you want a breadcrumb trail, not a novel. 