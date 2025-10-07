# UI Kit Documentation

This directory contains comprehensive documentation for the UI Kit project, including setup guides, deployment instructions, and configuration references.

## Table of Contents

### Deployment Documentation

- **[GitHub Pages Setup](./GITHUB_PAGES_SETUP.md)** - Complete guide for configuring GitHub Pages to deploy Storybook builds
  - Repository settings configuration
  - GitHub Actions permissions
  - gh-pages branch setup
  - Troubleshooting guide

- **[GitHub Pages Checklist](./GITHUB_PAGES_CHECKLIST.md)** - Quick reference checklist for verifying GitHub Pages configuration
  - Pre-deployment checklist
  - Post-deployment verification
  - Troubleshooting quick reference

- **[GitHub Pages Configuration](./GITHUB_PAGES_CONFIG.yml)** - YAML configuration template and reference
  - Repository settings structure
  - Workflow requirements
  - Environment variables
  - Security considerations

### Configuration Files

- **[.nojekyll Template](./.nojekyll.template)** - Template for preventing Jekyll processing on GitHub Pages
  - Why it's needed
  - How to use
  - Workflow integration examples

## Quick Start

### For Repository Administrators

If you need to configure GitHub Pages for this project:

1. Read the **[GitHub Pages Setup Guide](./GITHUB_PAGES_SETUP.md)** for detailed instructions
2. Use the **[Configuration Checklist](./GITHUB_PAGES_CHECKLIST.md)** to verify all settings
3. Refer to the **[Configuration Reference](./GITHUB_PAGES_CONFIG.yml)** for specific values

### For Developers

If you're working on deployment workflows:

1. Check **[GitHub Pages Setup](./GITHUB_PAGES_SETUP.md)** → Workflow Permissions section
2. Review **[Configuration Reference](./GITHUB_PAGES_CONFIG.yml)** → workflow section
3. Implement workflow using the documented permissions and steps

## Related Documentation

### Project Root Documentation

- **[/CLAUDE.md](../CLAUDE.md)** - Main project documentation and development guidelines
- **[/src/components/CLAUDE.md](../src/components/CLAUDE.md)** - Component development rules and patterns
- **[/tokens/CLAUDE.md](../tokens/CLAUDE.md)** - Design tokens system documentation

### Backlog Tasks

Related deployment tasks:

- **task-035**: Configure GitHub Pages settings (current task)
- **task-036**: Create script to generate branch index page
- **task-037**: Create GitHub Action workflow for PR Storybook deployment
- **task-038**: Create GitHub Action workflow for branch cleanup
- **task-039**: Add deployment documentation

## GitHub Pages Deployment Architecture

```
GitHub Repository
├── main branch
│   ├── .github/workflows/
│   │   ├── deploy-storybook.yml     (task-037)
│   │   └── cleanup-storybook.yml    (task-038)
│   ├── scripts/
│   │   └── generate-branch-index.js (task-036)
│   └── docs/
│       ├── GITHUB_PAGES_SETUP.md    (task-035) ✓
│       ├── GITHUB_PAGES_CHECKLIST.md (task-035) ✓
│       └── GITHUB_PAGES_CONFIG.yml   (task-035) ✓
│
└── gh-pages branch (created automatically)
    ├── .nojekyll                    (prevents Jekyll)
    ├── index.html                   (branch index page)
    ├── main/                        (main branch Storybook)
    │   └── [Storybook build files]
    └── feature-branch/              (PR branch Storybook)
        └── [Storybook build files]
```

## GitHub Pages URL Structure

Once deployed, the URLs will follow this pattern:

```
https://<username>.github.io/<repository>/
├── /                              → Branch index page (lists all deployments)
├── /main/                         → Main branch Storybook
└── /<sanitized-branch-name>/      → Feature branch Storybook
```

## Deployment Workflow Overview

1. **Developer creates PR** → Triggers deployment workflow
2. **Workflow runs quality checks** → pnpm install, build, typecheck, lint
3. **Workflow builds Storybook** → pnpm storybook:build
4. **Workflow deploys to gh-pages** → Copies build to branch-specific folder
5. **Workflow generates index** → Updates root index.html with branch list
6. **Workflow posts PR comment** → Provides direct link to deployed Storybook
7. **GitHub Pages serves site** → Makes Storybook accessible via URL

## Troubleshooting

If you encounter issues with GitHub Pages:

1. Start with **[GitHub Pages Setup](./GITHUB_PAGES_SETUP.md)** → Troubleshooting section
2. Use **[Configuration Checklist](./GITHUB_PAGES_CHECKLIST.md)** → Troubleshooting Quick Reference
3. Check workflow logs in GitHub Actions tab
4. Verify settings against **[Configuration Reference](./GITHUB_PAGES_CONFIG.yml)**

## Contributing

When updating deployment documentation:

1. Keep all three documents synchronized:
   - Setup guide (detailed instructions)
   - Checklist (quick reference)
   - Configuration (technical reference)
2. Test all instructions on a fresh repository
3. Update troubleshooting sections with new issues and solutions
4. Maintain consistent terminology across documents

## Support

For additional help:

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review [GitHub Actions Permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
- Consult project maintainers
