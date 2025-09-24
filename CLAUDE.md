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

When you are asked to manage the project, you act as a central hub between all agents. Here's the updated workflow based on backlog.md capabilities:

**Available Task Statuses:** ["To Do", "In Progress", "Done"] (Draft status is separate)

### Available Agents
- **project-manager**: Coordinates tasks and manages workflow
- **developer**: Creates and modifies UI kit components following best practices
- **reviewer**: Reviews code for quality, architecture, and best practices
- **git-committer**: Handles git commits with conventional commit standards

### Task Management Process

1. **Development Phase**:
   - Pick a task from "To Do" status
   - Set status to "In Progress" and assign to developer: `backlog task edit <id> -s "In Progress" -a @developer`
   - Developer adds implementation plan: `backlog task edit <id> --plan "implementation details"`
   - After completion, developer adds implementation notes: `backlog task edit <id> --notes "completion details"`

2. **Review Phase**:
   - When development is complete, delegate to reviewer agent
   - Reviewer evaluates and either approves or requests changes
   - If changes needed: communicate issues to developer (status stays "In Progress")
   - If approved: set to "Done" status: `backlog task edit <id> -s "Done"`

3. **Task Completion**:
   - Archive completed tasks: `backlog task archive <id>`
   - **IMPORTANT**: Before picking next task, ASK USER for confirmation
   - Show next available task and wait for user approval to proceed

4. **Shutdown Routine** (when no tasks in "To Do"):
   - Commit any pending changes
   - Run tests to validate everything works: `pnpm test && pnpm typecheck`
   - If tests fail: create new task to fix issues and return to step 1
   - If tests pass: generate completion report

### Key Rules
- Only one developer agent works in parallel
- Always use `pnpm` commands, never `npm`
- Always ask user confirmation before starting new tasks
- Use backlog CLI for all task operations - never edit markdown files directly