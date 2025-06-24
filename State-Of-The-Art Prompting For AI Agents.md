# **State-Of-The-Art Prompting For AI Agents**

**Full talk: [State-Of-The-Art Prompting For AI Agents](https://www.youtube.com/watch?v=DL82mGde6wo&ab_channel=YCombinator)**

Here's a summary of key prompt engineering techniques used by some of the best AI startups:

1. **Be Hyper-Specific & Detailed (The "Manager" Approach):**  
   * Summary: Treat your LLM like a new employee. Provide very long, detailed prompts that clearly define their role, the task, the desired output, and any constraints.  
   * Example: Parahelp's customer support agent prompt is 6+ pages, meticulously outlining instructions for managing tool calls.  
       
2. **Assign a Clear Role (Persona Prompting):**  
   * Summary: Start by telling the LLM who it is (e.g., "You are a manager of a customer service agent," "You are an expert prompt engineer"). This sets the context, tone, and expected expertise.  
   * Benefit: Helps the LLM adopt the desired style and reasoning for the task.

   

3. **Outline the Task & Provide a Plan:**  
   * Summary: Clearly state the LLM's primary task (e.g., "Your task is to approve or reject a tool call..."). Break down complex tasks into a step-by-step plan for the LLM to follow.  
   * Benefit: Improves reliability and makes complex operations more manageable for the LLM.  
       
4. **Structure Your Prompt (and Expected Output):**  
   * Summary: Use formatting like Markdown (headers, bullet points) or even XML-like tags to structure your instructions and define the expected output format.  
   * Example: Parahelp uses XML-like tags like \<manager\_verify\>accept\</manager\_verify\> for structured responses.  
   * Benefit: Makes it easier for the LLM to parse instructions and generate consistent, machine-readable output.

   

5. **Meta-Prompting (LLM, Improve Thyself\!):**  
   * Summary: Use an LLM to help you write or refine your prompts. Give it your current prompt, examples of good/bad outputs, and ask it to "make this prompt better" or critique it.  
   * Benefit: LLMs know "themselves" well and can often suggest effective improvements you might not think of.

   

6. **Provide Examples (Few-Shot & In-Context Learning):**  
   * Summary: For complex tasks or when the LLM needs to follow a specific style or format, include a few high-quality examples of input-output pairs directly in the prompt.  
   * Example: Jazzberry (AI bug finder) feeds hard examples to guide the LLM.  
   * Benefit: Significantly improves the LLM's ability to understand and replicate desired behavior.

7. **Prompt Folding & Dynamic Generation:**  
   * Summary: Design prompts that can dynamically generate more specialized sub-prompts based on the context or previous outputs in a multi-stage workflow.  
   * Example: A classifier prompt that, based on a query, generates a more specialized prompt for the next stage.  
   * Benefit: Creates more adaptive and efficient agentic systems.

   

8. **Implement an "Escape Hatch":**  
   * Summary: Instruct the LLM to explicitly state when it doesn't know the answer or lacks sufficient information, rather than hallucinating or making things up.  
   * Example: "If you do not have enough information to make a determination, say 'I don't know' and ask for clarification."  
   * Benefit: Reduces incorrect outputs and improves trustworthiness.

   

9. **Use Debug Info & Thinking Traces:**  
   * Summary: Ask the LLM to include a section in its output explaining its reasoning or why it made certain choices ("debug info"). Some models (like Gemini 1.5 Pro) also provide "thinking traces."  
   * Benefit: Provides invaluable insight for debugging and improving prompts.

   

10. **Evals are Your Crown Jewels:**  
    * Summary: The prompts are important, but the evaluation suite (the set of test cases to measure prompt quality and performance) is your most valuable IP.  
    * Benefit: Evals are essential for knowing why a prompt works and for iterating effectively.

    

11. **Consider Model "Personalities" & Distillation:**  
    * Summary: Different LLMs have different "personalities" (e.g., Claude is often more "human-like," Llama 4 might need more explicit steering). You can use a larger, more capable model for complex meta-prompting/refinement and then "distill" the resulting optimized prompts for use with smaller, faster, or cheaper models in production.  
    * Benefit: Optimizes for both quality (from larger models) and cost/latency (with smaller models).

If you are looking to take the next steps in learning how to apply these prompting tips, we have several courses we recommend from our course catalogue: [https://dair-ai.thinkific.com/](https://dair-ai.thinkific.com/)

* [Introduction to Prompt Engineering](https://dair-ai.thinkific.com/courses/introduction-prompt-engineering)  
* [Introduction to AI Agents](https://dair-ai.thinkific.com/courses/introduction-ai-agents)  
* [Prompt Engineering for Devs](https://dair-ai.thinkific.com/courses/prompt-engineering-devs)  
* [Advanced AI Agents](https://dair-ai.thinkific.com/courses/advanced-ai-agents)

