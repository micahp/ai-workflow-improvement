# AI Development Prompt Templates

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