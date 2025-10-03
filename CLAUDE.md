# UI Kit Project

## Overview
This project is a UI Kit built with modern technologies, focusing on performance, type safety, and developer experience. The kit provides reusable components, themes, and utilities for building consistent user interfaces.

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
- Use Base UI as the foundation for all interactive components
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

### Performance
- Ensure tree-shaking compatibility
- Minimize bundle size impact
- Use dynamic imports where appropriate
- Optimize for runtime performance

### Testing
- Test components in Storybook
- Include accessibility tests
- Test theme switching functionality
- Verify tree-shaking works correctly

### Documentation
- Document all public APIs
- Provide usage examples in Storybook
- Include migration guides for breaking changes
- Maintain changelog for releases

## Resources & References

### Base UI Information
- **Documentation Source**: https://base-ui.com/llms.txt - Complete information about Base UI components, props, and usage patterns
- **Component Categories**: Form components (Checkbox, Radio, Select, Input, Number Field, Switch, Toggle), Interactive components (Accordion, Collapsible, Dialog, Menu, Popover, Tabs, Tooltip), Navigation components, Feedback components (Alert Dialog, Progress, Toast), Data Display components (Avatar, Meter, Preview Card)
- **Key Features**: Unstyled components for maximum customization, accessibility-first design, flexible composition patterns, RTL support

### Library Research
- **MCP Context7**: Use for up-to-date documentation and examples for any library or framework
- **Usage**: Call mcp__context7__resolve-library-id first to get library ID, then mcp__context7__get-library-docs for detailed documentation

## Project Management Workflow

This section defines the strict sequential pipeline for task execution. Each step MUST be completed before moving to the next.

**Available Task Statuses:** ["To Do", "In Progress", "Done"] (Draft status is separate)

### Available Agents
- **@agent-project-manager**: Manages tasks lifecycle (create, update status, archive)
- **@agent-developer**: Implements features and fixes following best practices
- **@agent-reviewer**: Reviews code quality, architecture, and adherence to standards
- **@agent-git-committer**: Creates conventional commits following git standards

---

## Task Execution Pipeline

### When User Says: "Поставить задачи" (Create Tasks)

**Action:** Use **@agent-project-manager** ONLY
1. Create tasks with clear acceptance criteria
2. Set status to "To Do"
3. Add necessary details (description, requirements, acceptance criteria)

**Command:** `backlog task create "Task Title" --status "To Do" --description "details"`

---

### When User Says: "Выполнить" (Execute Task)

**STRICT SEQUENTIAL PIPELINE - Follow this order exactly:**

#### Step 1: Development Phase (@agent-developer)
1. **@agent-project-manager** picks task from "To Do" and sets to "In Progress"
   - Command: `backlog task edit <id> -s "In Progress" -a @developer`
2. **@agent-developer** receives task and:
   - Analyzes requirements
   - Adds implementation plan: `backlog task edit <id> --plan "implementation details"`
   - Implements the solution
   - Adds implementation notes: `backlog task edit <id> --notes "what was done"`
3. **@agent-developer** signals completion

#### Step 2: Code Review Phase (@agent-reviewer)
1. **@agent-reviewer** receives completed work
2. Reviews code for:
   - Code quality and best practices
   - Architecture patterns
   - TypeScript types and safety
   - Performance considerations
   - Accessibility compliance
3. **@agent-reviewer** makes decision:
   - **If changes needed:** Document issues and return to Step 1 (task stays "In Progress")
   - **If approved:** Signal approval and proceed to Step 3

#### Step 3: Task Closure (@agent-project-manager)
1. **@agent-project-manager** updates task status to "Done"
   - Command: `backlog task edit <id> -s "Done"`
2. **@agent-project-manager** archives task
   - Command: `backlog task archive <id>`

#### Step 4: Save Changes (@agent-git-committer)
1. **@agent-git-committer** creates conventional commit(s)
2. Follows git commit standards and best practices

#### Step 5: Next Task Decision
1. **IMPORTANT:** Do NOT automatically pick next task
2. Check if there are more "To Do" tasks
3. **ASK USER:** "Задача выполнена. Перейти к следующей задаче [task name]?"
4. Wait for user confirmation before starting Step 1 with new task

---

## Critical Rules

### Pipeline Rules
1. **NEVER skip steps** - Each step must complete before next
2. **NEVER run steps in parallel** - Strictly sequential execution
3. **NEVER auto-proceed to next task** - Always ask user first
4. **If review fails** - Return to Step 1 (developer), do NOT proceed to Step 3
5. **One task at a time** - No parallel task execution

### Agent Responsibilities
- **@agent-project-manager**: Task lifecycle ONLY (create, status update, archive)
- **@agent-developer**: Implementation ONLY
- **@agent-reviewer**: Quality assessment ONLY
- **@agent-git-committer**: Git operations ONLY

### Technical Rules
- Always use `pnpm` commands, never `npm`
- Use backlog CLI for all task operations - never edit markdown files directly
- Run tests after all tasks completed: `pnpm test && pnpm typecheck`

### Shutdown Routine (No "To Do" Tasks Remaining)
1. **@agent-git-committer**: Commit any pending changes
2. Run validation: `pnpm test && pnpm typecheck`
3. **If tests fail**:
   - **@agent-project-manager** creates new task to fix issues
   - Return to Step 1 of pipeline
4. **If tests pass**: Generate completion report