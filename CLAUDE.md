# UI Kit Project - Agent Orchestration Guide

> **⚠️ CRITICAL**: This file defines the execution flow for ALL work in this project. Read the entire document before starting any task.

## Overview

This project is a UI Kit built with modern technologies, focusing on performance, type safety, and developer experience. The kit provides reusable components, themes, and utilities for building consistent user interfaces.

**🎯 Core Principle**: All work follows a strict sequential pipeline with designated agents for each step. NO steps can be skipped or parallelized.

## Tech Stack

- **Headless Components**: Base UI for unstyled, accessible components
- **Styling**: Vanilla-Extract for type-safe CSS-in-JS
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: pnpm (latest version)
- **Node.js**: LTS version
- **Development/Testing**: Storybook
- **Design Tokens**: style-dictionary for design system tokens
- **Props Mapping**: @vanilla-extract/recipes for mapping props to styles and classes

## Architecture

- **Tree-shakable**: Components can be imported individually to reduce bundle size
- **Exports**: Components, themes, and theme provider
- **Design Tokens**: Centralized design system tokens managed by style-dictionary

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the library
pnpm build

# Run Storybook
pnpm storybook

# Run tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm typecheck
```

## Agent System & Workflow

> **🚨 MANDATORY ORCHESTRATION**: The main assistant acts as orchestrator and delegates ALL work to specialized agents. The main assistant NEVER performs implementation, review, or task management directly.

### Available Agents

#### @agent-project-manager

**Triggers**: Task operations (create, view, search, status updates, archive)

**🔒 EXCLUSIVE AUTHORITY**:
- **ONLY** agent that can interact with backlog CLI
- **ONLY** agent that can change task status
- **ONLY** agent that can archive tasks

**Responsibilities**:
- Task lifecycle management (create, update status, archive)
- Backlog operations (ALL backlog CLI usage goes through this agent)
- Task assignment to appropriate agents
- Project status reporting

**⚠️ CRITICAL**: Main assistant MUST delegate ALL task operations to this agent - NO EXCEPTIONS

#### @agent-designer

**Triggers**: Design token operations (create, modify, delete tokens)

**🔒 EXCLUSIVE AUTHORITY**:
- **ONLY** agent that can modify design tokens
- **ONLY** agent that can create/delete token files

**Responsibilities**:
- Design token management across 4-tier architecture
- Token validation and consistency
- Design system compliance

#### @agent-developer

**Triggers**: Component implementation, coding tasks

**🔒 EXCLUSIVE AUTHORITY**:
- **ONLY** agent that can implement components
- **ONLY** agent that can write production code

**Responsibilities**:
- UI component implementation
- Code development following design system rules
- Integration with Base UI components
- Vanilla-Extract styling implementation

#### @agent-reviewer

**Triggers**: Code review, quality assurance

**🔒 EXCLUSIVE AUTHORITY**:
- **ONLY** agent that can approve/reject implementations
- **ONLY** agent that determines if work meets quality standards

**Responsibilities**:
- Code quality assessment
- Design system compliance verification
- Test validation (if tests exist)
- TypeScript type checking
- Linting validation
- Return tasks to appropriate agent if issues found

**⚠️ MANDATORY GATE**: ALL implementations MUST pass through this agent before closure

#### @agent-git-committer

**Triggers**: Save changes, commit operations

**🔒 EXCLUSIVE AUTHORITY**:
- **ONLY** agent that can commit changes
- **ONLY** agent that can interact with git

**Responsibilities**:
- Git operations using conventional commits
- Change documentation
- Repository maintenance

### Critical Agent Interaction Rules

> **🚨 VIOLATION OF THESE RULES BREAKS THE ENTIRE WORKFLOW**

1. **Inter-Agent Communication**: All agents MUST respond to requests from other agents, not just users
2. **Task Delegation**: When an agent assigns work, the receiving agent MUST execute it
3. **No Direct Actions**: Main assistant NEVER uses backlog CLI, writes code, reviews code, or commits - ONLY delegates
4. **Automatic Routing**:
   - Task management → @agent-project-manager
   - Design tokens → @agent-designer
   - Code implementation → @agent-developer
   - Quality assurance → @agent-reviewer
   - Git operations → @agent-git-committer

## Task Execution Pipeline

> **🚨 THIS IS THE MOST CRITICAL SECTION - MUST BE FOLLOWED EXACTLY**

### Task Creation Flow

**User Request**: "Create tasks" / "Set up tasks" / "Add tasks"

**✅ CORRECT ACTION**:
1. Main assistant invokes **@agent-project-manager ONLY**
2. @agent-project-manager creates tasks with clear acceptance criteria
3. @agent-project-manager sets status to "To Do"
4. @agent-project-manager adds necessary details (description, requirements, acceptance criteria)

**❌ WRONG**: Main assistant uses backlog CLI directly or creates tasks manually

---

### Task Execution Flow

**User Request**: "Execute" / "Do the task" / "Implement" / "Start working"

**🔄 STRICT SEQUENTIAL PIPELINE** (Main assistant orchestrates, NEVER skips steps):

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: TASK ASSIGNMENT                                    │
│  ✓ @agent-project-manager picks "To Do" task               │
│  ✓ @agent-project-manager sets to "In Progress"            │
│  ✓ Route to: @agent-designer OR @agent-developer           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: IMPLEMENTATION                                     │
│  ✓ @agent-designer OR @agent-developer implements solution │
│  ✓ Agent signals completion with summary                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: QUALITY REVIEW (MANDATORY GATE)                    │
│  ✓ @agent-reviewer reviews ALL completed work              │
│  ✓ Decision:                                                │
│    • Issues found → LOOP BACK to Step 2 ⤴                   │
│    • Approved → Proceed to Step 4 ↓                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 4: TASK CLOSURE                                       │
│  ✓ @agent-project-manager updates status to "Done"         │
│  ✓ @agent-project-manager archives task                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 5: SAVE CHANGES                                       │
│  ✓ @agent-git-committer creates conventional commit(s)     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 6: NEXT TASK                                          │
│  ✓ More "To Do" tasks? → LOOP to Step 1 ⤴                  │
│  ✓ No tasks? → Run validation (pnpm test && typecheck)     │
└─────────────────────────────────────────────────────────────┘
```

---

### ⚠️ CRITICAL FLOW VIOLATIONS TO AVOID

| ❌ VIOLATION | ✅ CORRECT BEHAVIOR |
|-------------|-------------------|
| Main assistant changes task status | @agent-project-manager changes status |
| Main assistant writes code | @agent-developer writes code |
| Main assistant commits changes | @agent-git-committer commits |
| Skipping review step | ALL work MUST pass through @agent-reviewer |
| Closing task before review | Review → THEN closure |
| Closing task before commit | Closure → THEN commit |
| Working on multiple tasks in parallel | ONE task at a time, complete before next |
| Using npm instead of pnpm | ALWAYS use pnpm |

---

### Pipeline Rules

#### Execution Rules

> **🚨 THESE ARE ABSOLUTE REQUIREMENTS, NOT SUGGESTIONS**

- **Sequential only**: NEVER skip steps or run in parallel
- **Auto-proceed**: Continue to next task unless user explicitly limits scope
- **One task at a time**: Complete current task COMPLETELY before starting next
- **Review gate**: Failed review LOOPS BACK to implementation (Step 2), task stays "In Progress"
- **No shortcuts**: Even small changes follow the full pipeline
- **Always delegate**: Main assistant orchestrates, specialized agents execute

#### Agent Boundaries

> **🔒 EXCLUSIVE RESPONSIBILITIES - NO CROSSOVER ALLOWED**

| Agent | Can Do | Cannot Do |
|-------|--------|-----------|
| **@agent-project-manager** | Task lifecycle, status updates, archive | Code, review, commits |
| **@agent-designer** | Design tokens only | Components, task management, commits |
| **@agent-developer** | Component implementation only | Design tokens, task status, commits |
| **@agent-reviewer** | Quality assessment, approve/reject | Implementation, task status, commits |
| **@agent-git-committer** | Git operations only | Code, review, task management |
| **Main assistant** | Orchestration, delegation | EVERYTHING ELSE (delegate to agents) |

#### Critical Restrictions

> **🚨 BREAKING THESE RULES CORRUPTS THE WORKFLOW**

1. **Main assistant NEVER uses backlog CLI directly** - MUST delegate to @agent-project-manager
2. **All backlog operations through @agent-project-manager** - NO EXCEPTIONS
3. **Always use pnpm, never npm** - Check package manager before any install/run command
4. **Agents must respond to other agents' requests** - Inter-agent communication is mandatory
5. **No task closure without review approval** - @agent-reviewer MUST approve first
6. **No commits before task closure** - Close task → THEN commit
7. **One task in "In Progress" at a time** - Complete current before starting next

## Code Quality & Best Practices

### Code Standards

- **TypeScript**: Strict mode enabled, all code must be properly typed
- **ESLint**: Follow configured linting rules
- **Prettier**: Consistent code formatting
- **Naming Conventions**:
  - Components: PascalCase (e.g., `ButtonComponent`)
  - Files: kebab-case for files, PascalCase for component files
  - Variables/functions: camelCase
  - Constants: UPPER_SNAKE_CASE

### Component Guidelines

- Use Base UI as foundation for interactive components
- Implement proper accessibility patterns (ARIA, keyboard navigation)
- Follow composition pattern over inheritance
- Export components with clear, documented props interface
- Use Vanilla-Extract recipes for prop-to-style mapping

### Styling Guidelines

- Use Vanilla-Extract for all styling
- Leverage design tokens from style-dictionary
- Create reusable theme contracts
- Implement consistent spacing, typography, and color systems
- Support theme switching through theme provider

## Resources & References

### Base UI Information

- **Documentation Source**: https://base-ui.com/llms.txt - Complete information about Base UI components, props, and usage patterns
- **Component Categories**: Form components (Checkbox, Radio, Select, Input, Number Field, Switch, Toggle), Interactive components (Accordion, Collapsible, Dialog, Menu, Popover, Tabs, Tooltip), Navigation components, Feedback components (Alert Dialog, Progress, Toast), Data Display components (Avatar, Meter, Preview Card)
- **Key Features**: Unstyled components for maximum customization, accessibility-first design, flexible composition patterns, RTL support

### Library Research

- **MCP Context7**: Use for up-to-date documentation and examples for any library or framework
- **Usage**: Call mcp**context7**resolve-library-id first to get library ID, then mcp**context7**get-library-docs for detailed documentation

### Documentation Navigation

**For specific contexts, read:**

- **Design tokens system**: `/tokens/CLAUDE.md` - 4-tier token architecture, naming conventions, layer rules
- **Component development**: `/src/components/CLAUDE.md` - Component rules, no custom styling, Base UI patterns
- **Project manager duties**: `/.claude/agents/project-manager.md` - Task lifecycle, backlog management
- **Design token management**: `/.claude/agents/designer.md` - Token creation/modification across all layers
- **Developer workflow**: `/.claude/agents/developer.md` - Component implementation, Vanilla-Extract patterns
- **Code review checklist**: `/.claude/agents/reviewer.md` - Design system compliance, quality standards
- **Git commit standards**: `/.claude/agents/git-committer.md` - Conventional commits with emoji

## Shutdown Routine

> **🏁 FINAL VALIDATION - ENSURES QUALITY BEFORE COMPLETION**

When no "To Do" tasks remain:

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: COMMIT PENDING CHANGES                             │
│  ✓ @agent-git-committer commits any uncommitted work       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: RUN VALIDATION                                     │
│  ✓ Main assistant runs: pnpm test && pnpm typecheck        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: HANDLE RESULTS                                     │
│  • Tests FAIL → @agent-project-manager creates fix task     │
│               → LOOP back to Task Execution Pipeline ⤴      │
│  • Tests PASS → Generate completion report ✅               │
└─────────────────────────────────────────────────────────────┘
```

**⚠️ IMPORTANT**: If validation fails, workflow is NOT complete. New tasks must go through the full pipeline again.

---

## Quick Reference: Common Scenarios

### Scenario 1: User says "Create tasks for X feature"
**✅ DO**: Invoke @agent-project-manager to create tasks
**❌ DON'T**: Use backlog CLI directly

### Scenario 2: User says "Implement the next task"
**✅ DO**: Follow 6-step pipeline (Assignment → Implementation → Review → Closure → Commit → Next)
**❌ DON'T**: Skip review, close task before review, or work on multiple tasks

### Scenario 3: User says "Add a button component"
**✅ DO**: @agent-project-manager creates task → @agent-developer implements → @agent-reviewer reviews → @agent-project-manager closes → @agent-git-committer commits
**❌ DON'T**: Have main assistant write component directly

### Scenario 4: Code review finds issues
**✅ DO**: @agent-reviewer reports issues → LOOP back to @agent-developer (task stays "In Progress")
**❌ DON'T**: Close task with known issues, or skip re-review after fixes

### Scenario 5: All tasks complete
**✅ DO**: @agent-git-committer commits → Run validation → Handle results
**❌ DON'T**: Skip validation or ignore test failures
