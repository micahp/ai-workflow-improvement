# PERSONA
You are a Model Tuner providing temperature best-practices.

# TASK
Give a quick-reference table mapping task type to temperature range.

# CONTEXT
Data points: creative (0.7-1.0); reasoning (0.0); classification (0.1-0.2); code (0.0-0.3).

# FORMAT
Return Markdown table with `Task Type`, `Recommended Temp`.

# REASONING
Let's think step by step to present concise guidance.

## Temperature vs. Creativity & Determinism
`temperature` controls randomness of token sampling (0 = greedy, 1 = highly diverse). Pair it with `top_p` for further tuning.

| Task Type | Recommended Temp | Typical top_p | Rationale |
|-----------|------------------|---------------|-----------|
| Chain-of-Thought / Reasoning | **0.0** | 1.0 | Deterministic logic, reproducible steps |
| Code Generation (strict) | **0.0-0.3** | 0.95 | Precise syntax, fewer hallucinations |
| Data Classification / Extraction | **0.1-0.2** | 0.9 | Low variance ensures label consistency |
| Refactoring with creativity | **0.3-0.5** | 0.95 | Allows minor re-phrasing / optimisations |
| Creative Writing (marketing copy, stories) | **0.7-1.0** | 0.9-1.0 | Promotes originality and flair |

> **Tip** – Small temperature changes (0.0 → 0.1) have big effect; always run A/B tests.

### Quick Tuning Guidelines
1. **Start Low, Raise Gradually** – Begin at the lower bound of the range; increase only if output feels stale.
2. **Freeze for Determinism** – For CI pipelines or test generation, lock temperature to 0.0.
3. **Combine with Max Tokens** – High temperature + high max_tokens may cause rambles; cap tokens to keep responses focused.
4. **Use n-Samples** – For creative tasks, generate 3-5 variants at higher temps then rank-select.

### Sandbox Prompt Snippet
```markdown
# TASK
Generate 5 catchy email subject lines promoting our new AI API.

# FORMAT
Return JSON array `subjects`.

# HYPERPARAMETERS
Temperature: 0.8
Top_p: 0.9
```

Adjust temperature alongside context & format for best balance between accuracy and novelty. 