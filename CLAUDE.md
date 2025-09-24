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