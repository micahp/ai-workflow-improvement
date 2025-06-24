# AI Development Prompt Templates
*Incorporating State-of-the-Art Techniques from Top AI Startups*

## 🔥 CORE PRINCIPLES (Apply to ALL Prompts)

### 1. The "Manager" Approach - Be Hyper-Specific & Detailed
- **Treat AI like a new employee** - provide exhaustive context
- **6+ pages of detail** when needed (like Parahelp's customer support prompts)
- **Define role, task, output format, and ALL constraints**

### 2. Assign Clear Role (Persona Prompting)
- Start with **"You are..."** statements
- Set expertise level and context expectations

### 3. Structure Everything (Markdown + XML-like Tags)
- Use headers, bullet points, code blocks
- Define expected output format explicitly
- Use tags like `<analysis>`, `<code>`, `<reasoning>`

### 4. Provide Examples (Few-Shot Learning)
- Include 2-3 high-quality input-output examples
- Show the exact style and format you want

### 5. Implement Escape Hatches
- Always include: **"If you don't have enough information, say 'I need clarification on...' and ask specific questions"**

---

## 🚀 STATE-OF-THE-ART CODING TEMPLATE

```markdown
# ROLE ASSIGNMENT
You are a **Senior Full-Stack Engineer with 10+ years experience** specializing in:
- [React Native / Next.js / Node.js / Python Django / etc.]
- Modern architectural patterns (Clean Architecture, CQRS, Event Sourcing)
- Production debugging and performance optimization
- Code review and mentoring junior developers

# PROJECT DEEP DIVE
## Technical Stack
**Frontend**: React Native 0.72.3 with TypeScript 5.1.6 (strict mode)
**State Management**: React Context + useReducer pattern
**Navigation**: React Navigation 6.x with typed navigation
**Forms**: Formik 2.4.3 + Yup validation schemas
**HTTP Client**: Axios with custom interceptors for auth/retry
**Testing**: Jest + React Native Testing Library
**Build**: Metro bundler with custom transformer for SVG
**Deployment**: CodePush for OTA updates, App Center for builds

## Architecture Context
**Pattern**: Feature-based folder structure with domain separation
**Data Flow**: Component → Context → API → Backend
**Error Handling**: Global error boundary + toast notifications
**Authentication**: JWT tokens with refresh logic in AuthContext
**File Structure**:
```
src/
├── features/
│   ├── auth/ (login, registration, password reset)
│   ├── user-profile/ (settings, preferences)
│   └── onboarding/ (multi-step registration flow)
├── shared/
│   ├── components/ (reusable UI components)
│   ├── hooks/ (custom React hooks)
│   ├── utils/ (helper functions)
│   └── types/ (TypeScript definitions)
├── api/ (HTTP layer with error handling)
└── navigation/ (navigation configuration)
```

## Current Feature Context
**Feature**: Multi-step user registration flow
**Current Status**: UserRegistration1-3 complete, working on UserRegistration4 (final submission)
**Key Constraint**: All form data stored in context until final submission
**Integration Points**: AuthContext for post-registration login, API for user creation

## Existing Code Patterns
**Component Pattern**:
```tsx
interface Props {
  navigation: NavigationProp;
  route: RouteProp;
}

export const ComponentName: React.FC<Props> = ({ navigation, route }) => {
  // Formik form logic
  // Context integration
  // Error handling
};
```

**API Pattern**:
```typescript
export const apiCall = async (data: RequestType): Promise<ResponseType> => {
  try {
    const response = await httpClient.post('/endpoint', data);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
```

# SPECIFIC TASK
## Primary Objective
[DETAILED description of what you're trying to achieve]

## Technical Requirements
- **Must integrate with**: [existing systems/components]
- **Performance requirement**: [specific metrics if applicable]
- **Compatibility**: [device/platform constraints]
- **Security**: [authentication/validation requirements]

## Acceptance Criteria
- [ ] [Specific measurable outcome 1]
- [ ] [Specific measurable outcome 2]
- [ ] [Error handling scenario]
- [ ] [Integration test passes]

# CODE CONTEXT
## Relevant Files
[Include 2-3 most relevant code snippets - show actual implementation]

## Current Problem/Bug
**Symptom**: [Exact behavior you're seeing]
**Expected**: [What should happen instead]
**Error Messages**: [Exact error text]
**Debugging Done**: [What you've already tried]

# EXPECTED OUTPUT FORMAT
Please provide your response in this exact structure:

<analysis>
Brief analysis of the problem and approach
</analysis>

<implementation>
```typescript
// Complete, runnable code solution
// Include all imports, types, error handling
```
</implementation>

<integration_notes>
- How this integrates with existing architecture
- Migration steps if needed
- Testing recommendations
</integration_notes>

<edge_cases>
- Potential error scenarios
- Performance considerations
- Security implications
</edge_cases>

# ESCAPE HATCH
If you don't have enough information about our codebase patterns, existing implementations, or technical constraints, respond with:
"I need clarification on: [specific questions about architecture/patterns/constraints]"
```

---

## 📊 TEMPLATE VARIATIONS

### Quick Debug Template
```markdown
# ROLE: Senior Debugger
You are an expert at diagnosing complex technical issues in [TECH_STACK].

# SYSTEM CONTEXT
**Environment**: [Production/Staging/Development]
**Stack**: [Detailed technology versions]
**Recent Changes**: [What changed before the issue started]

# ISSUE DETAILS
**Symptom**: [Exact problematic behavior]
**Frequency**: [Always/Sometimes/Specific conditions]
**Error Messages**: 
```
[Exact error text with stack traces]
```

**Debugging Attempted**:
- [What you've already tried]
- [Results of each attempt]

# REQUEST
<diagnosis>
Root cause analysis with evidence
</diagnosis>

<solution>
Step-by-step fix with code changes
</solution>

<prevention>
How to prevent this issue in the future
</prevention>
```

### Code Review Template
```markdown
# ROLE: Tech Lead Reviewer
You are a senior engineer conducting a thorough code review focusing on:
- Architecture alignment with our [SPECIFIC_PATTERNS]
- Performance implications for [PLATFORM]
- Security best practices for [CONTEXT]
- Maintainability and scalability

# CODEBASE CONTEXT
[Include relevant architectural decisions, coding standards, performance requirements]

# CODE TO REVIEW
```typescript
[Complete code block to review]
```

# REVIEW CRITERIA
Please evaluate:
- [ ] Follows our established patterns
- [ ] Handles errors appropriately
- [ ] Performance optimized for [SPECIFIC_REQUIREMENTS]
- [ ] Security considerations addressed
- [ ] Testable and maintainable

# OUTPUT FORMAT
<overall_assessment>
Summary rating and key concerns
</overall_assessment>

<specific_feedback>
Line-by-line comments with suggestions
</specific_feedback>

<refactored_code>
Improved version with explanations
</refactored_code>
```

---

## 🎯 ADVANCED TECHNIQUES

### Meta-Prompting for Continuous Improvement
```markdown
# PROMPT OPTIMIZATION REQUEST
You are an expert prompt engineer. Analyze my prompt below and improve it:

[Your current prompt]

Make it more effective by:
1. Adding missing technical context
2. Improving structure and clarity
3. Better defining expected outputs
4. Adding relevant examples

Return the improved prompt with explanations for each change.
```

### Dynamic Context Generation
```markdown
# CONTEXT BUILDER
Based on my request: "[USER_QUERY]"

First, generate the optimal prompt structure including:
1. Required role definition
2. Necessary technical context
3. Appropriate examples
4. Structured output format

Then execute that optimized prompt.
```

### Evaluation Template
```markdown
# SOLUTION EVALUATION
After implementing a solution, evaluate it with:

**Prompt Quality**: How well did the original prompt work?
**Output Accuracy**: Did it solve the actual problem?
**Integration Success**: How smoothly did it integrate?
**Areas for Improvement**: What would make the next prompt better?

This creates a feedback loop for continuous improvement.
```

---

## 📈 IMPLEMENTATION CHECKLIST

### Before Using Any Template:
1. **Identify the exact AI role** needed for your task
2. **Gather comprehensive context** about your codebase
3. **Define specific, measurable success criteria**
4. **Include 2-3 relevant code examples**
5. **Structure your expected output format**
6. **Add escape hatches** for missing information

### Template Selection Guide:
- **Complex Feature**: Use full State-of-the-Art template
- **Quick Bug**: Use Quick Debug template  
- **Code Quality**: Use Code Review template
- **Prompt Issues**: Use Meta-Prompting template

### Success Metrics:
- AI provides complete, runnable code
- Minimal back-and-forth clarification needed
- Solution integrates smoothly with existing codebase
- Covers edge cases and error handling

---

## 🔄 CONTINUOUS IMPROVEMENT

1. **Track what works**: Keep notes on successful prompts
2. **Iterate on failures**: When output isn't ideal, refine the prompt
3. **Build prompt libraries**: Save your best prompts for reuse
4. **Meta-prompt regularly**: Use AI to improve your prompts

Remember: **The prompt is your most valuable IP**. Invest time in crafting detailed, structured prompts that consistently produce high-quality results.

## Quick Start Template (Use this immediately)

```markdown
# [PROJECT_NAME] Development Session

## Project Context
**Type**: React Native Healthcare App (MVP Phase)
**Tech Stack**: React Native, TypeScript, Formik, React Context, Firebase
**Architecture**: Multi-step forms → Context storage → Single API submission
**Current Sprint**: User registration flow completion
**Key Files**: 
- `/src/pages/user-registration/` - Multi-step registration forms
- `/src/api/core/api.auth.ts` - Authentication API calls
- `/src/pages/login/index.tsx` - Login page with remember me

## Current Task
[Describe what you're trying to achieve]

## Specific Request
[Your specific question or implementation need]

## Relevant Code
[Include 2-3 most relevant file snippets]

## Expected Outcome
[What should the final solution accomplish]
```

## Template Library

### 1. Bug Investigation Template
```markdown
# Bug Investigation: [BUG_TITLE]

## Project Context
**App Type**: [React Native/Web/Backend]
**Environment**: [Development/Staging/Production]
**Tech Stack**: [Key technologies]

## Bug Description
**Expected Behavior**: [What should happen]
**Actual Behavior**: [What actually happens]
**Steps to Reproduce**: [Numbered steps]
**Error Messages**: [Any console errors]

## Code Context
**Files Involved**: [List relevant files]
**Recent Changes**: [What was modified recently]
[Include relevant code snippets]

## Debug Information
**Browser/Device**: [If applicable]
**Logs**: [Any relevant logs]

## Request
Please analyze this bug and provide a solution with explanation.
```

### 2. Feature Implementation Template
```markdown
# Feature Implementation: [FEATURE_NAME]

## Project Overview
**App**: [Brief description]
**Tech Stack**: [Technologies used]
**Architecture Pattern**: [Brief description]

## Feature Requirements
**User Story**: As a [user type], I want [goal] so that [benefit]
**Acceptance Criteria**:
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Technical Constraints
- [Constraint 1: e.g., Must use existing API structure]
- [Constraint 2: e.g., Follow current UI patterns]

## Existing Code Context
**Related Files**: [List files that will be affected]
[Include relevant existing code]

## Request
Please implement this feature with:
1. Complete code implementation
2. Integration with existing architecture
3. Error handling
4. Any necessary type definitions
```

### 3. Code Review Template
```markdown
# Code Review: [COMPONENT/FEATURE_NAME]

## Project Context
**Codebase**: [Brief description]
**Standards**: [Coding standards/patterns used]
**Focus Areas**: [Performance/Security/Maintainability]

## Code to Review
[Include the code that needs review]

## Review Criteria
Please review for:
- [ ] Code quality and best practices
- [ ] Performance considerations
- [ ] Security issues
- [ ] Maintainability
- [ ] Integration with existing architecture
- [ ] Test coverage needs

## Specific Concerns
[Any particular areas you're worried about]

## Request
Provide detailed feedback with specific improvement suggestions and refactored code examples.
```

### 4. Architecture Decision Template
```markdown
# Architecture Decision: [DECISION_TOPIC]

## Project Context
**Current State**: [Where the project is now]
**Growth Plan**: [Expected scaling/features]
**Team Size**: [Current and planned team size]
**Timeline**: [Development timeline constraints]

## Decision Context
**Problem**: [What needs to be solved]
**Current Approach**: [How it's handled now]
**Pain Points**: [What's not working]

## Requirements
**Functional**: [What it needs to do]
**Non-functional**: [Performance, scalability, etc.]
**Constraints**: [Technical/business limitations]

## Options Considered
1. [Option 1 with brief description]
2. [Option 2 with brief description]
3. [Option 3 with brief description]

## Request
Please analyze these options and recommend the best approach with:
- Detailed technical implementation plan
- Migration strategy (if applicable)
- Pros/cons analysis
- Code examples
```

### 5. Debugging Session Template
```markdown
# Debug Session: [ISSUE_DESCRIPTION]

## System Context
**Environment**: [Local/Staging/Production]
**Tech Stack**: [Relevant technologies]
**Recent Changes**: [What changed before the issue]

## Issue Details
**Symptom**: [What's visibly wrong]
**Impact**: [Who/what is affected]
**Frequency**: [How often it occurs]
**First Noticed**: [When it started]

## Investigation Done
**Steps Taken**: [What you've already tried]
**Findings**: [What you've discovered]
**Theories**: [Your hypotheses about the cause]

## Code Context
**Suspected Areas**: [Files/functions you think are involved]
[Include relevant code snippets]

## Logs/Errors
[Include any error messages, stack traces, or logs]

## Request
Please help diagnose and fix this issue with:
1. Root cause analysis
2. Step-by-step debugging approach
3. Proposed solution with code
4. Prevention strategies
```

## Usage Instructions

1. **Choose the Right Template**: Pick the template that best matches your current need
2. **Fill in ALL Sections**: Don't skip sections - they provide crucial context
3. **Include Relevant Code**: Always attach the most relevant code snippets
4. **Be Specific**: Replace all bracketed placeholders with specific information
5. **Front-load Context**: Put all necessary background information upfront

## Pro Tips

### Context Front-loading
- Include project architecture overview
- Mention coding patterns/conventions used
- List relevant dependencies and versions
- Describe data flow or state management approach

### Code Inclusion Strategy
- Include 2-3 most relevant files
- Show interfaces/types that are used
- Include error messages verbatim
- Show both working and broken examples when applicable

### Request Specificity
- Ask for complete, runnable code
- Request explanation of the approach
- Ask for integration instructions
- Request error handling considerations

## Example of Good vs Bad Prompts

### ❌ Bad (Your Current Style)
```
"what does this line do? does it run an http call?"
[single line of code]
```

### ✅ Good (Target Style)
```
# React Native Registration Flow Analysis

## Project Context
**App**: Healthcare React Native app with multi-step registration
**Tech Stack**: React Native, TypeScript, Formik, React Context
**Architecture**: Forms collect data → Context storage → Final API submission

## Current Investigation
I'm analyzing the data flow in our user registration process to understand when HTTP calls are made.

## Code Context
Here's the registration flow structure:
[Include UserRegistration1 component]
[Include UserContext setup]
[Include API auth service]

## Specific Question
Analyze the handleSubmit function in UserRegistration1 - does it make HTTP calls immediately or store data for later submission? Please trace the complete data flow from form submission to the final API call in UserRegistration4.

## Expected Outcome
Understanding of the complete registration flow to optimize error handling and user experience.
```

Start using these templates immediately in your next AI interaction! 