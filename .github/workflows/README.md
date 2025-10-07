# GitHub Actions Workflows

This directory contains automated workflows for the UI Kit project.

## Workflows

### Deploy PR Storybook (`deploy-storybook.yml`)

Automatically deploys Storybook builds for pull requests, enabling reviewers to preview UI changes before merging.

**Trigger:** Pull request events (opened, synchronize, reopened)

**Steps:**
1. Checkout code
2. Setup Node.js and pnpm
3. Install dependencies with `pnpm install --frozen-lockfile`
4. Run quality checks:
   - Build library: `pnpm build`
   - Type check: `pnpm typecheck`
   - Lint: `pnpm lint`
5. Build Storybook: `pnpm storybook:build`
6. Deploy to `gh-pages` branch in branch-specific directory
7. Update root index.html with branch list
8. Post comment on PR with Storybook URL

**Permissions Required:**
- `contents: write` - To push to gh-pages branch
- `pull-requests: write` - To post comments on PRs

**Branch Naming:**
Branch names are sanitized to create valid directory names:
- Forward slashes (`/`) are replaced with hyphens (`-`)
- Special characters are removed or replaced with hyphens
- Example: `feature/new-button` becomes `feature-new-button`

**Deployment Structure:**
```
gh-pages/
├── index.html                    # Branch list (landing page)
├── feature-button/               # Branch: feature/button
│   └── [Storybook files]
├── bugfix-input-validation/      # Branch: bugfix/input-validation
│   └── [Storybook files]
└── main/                         # Branch: main
    └── [Storybook files]
```

**PR Comment:**
The workflow posts a comment on the PR with:
- Direct link to the Storybook build for the branch
- Link to the index page with all branches
- Updates the same comment on subsequent commits (no spam)

**Error Handling:**
If the workflow fails, it posts a comment with:
- Link to workflow logs
- Common causes of failure
- Instructions to retry

## Setup Requirements

### Repository Settings

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
   - Save

2. **Verify Permissions:**
   - Go to repository Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Allow GitHub Actions to create and approve pull requests: Enabled

3. **Create gh-pages Branch:**
   The workflow will create the `gh-pages` branch automatically on first run, or you can create it manually:
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   echo "# Storybook Deployments" > README.md
   git add README.md
   git commit -m "Initialize gh-pages branch"
   git push origin gh-pages
   ```

## Testing the Workflow

1. Create a new branch and make changes to UI components
2. Create a pull request
3. The workflow will automatically trigger
4. Check the Actions tab for workflow progress
5. Once complete, check the PR for a comment with the Storybook URL
6. Visit the URL to preview the changes

## Troubleshooting

### Workflow Not Triggering
- Ensure the workflow file is in `.github/workflows/` directory
- Check that the trigger events match your PR actions
- Verify the workflow file has valid YAML syntax

### Permission Errors
- Check repository Settings → Actions → General → Workflow permissions
- Ensure "Read and write permissions" is enabled
- Verify the workflow has the required permissions in the YAML file

### Deployment Fails
- Check the workflow logs in the Actions tab
- Common issues:
  - Build errors (check `pnpm build` output)
  - Type errors (check `pnpm typecheck` output)
  - Lint errors (check `pnpm lint` output)
  - Missing dependencies
  - Invalid branch name characters

### PR Comment Not Posted
- Verify `pull-requests: write` permission is set
- Check the workflow logs for errors in the "Post PR comment" step
- Ensure the repository allows GitHub Actions to comment on PRs

## Maintenance

### Updating Node.js Version
Edit the workflow file and change the `node-version` in the "Setup Node.js" step:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 'lts/*'  # or specific version like '20.x'
```

### Updating pnpm Version
Edit the workflow file and change the `version` in the "Setup pnpm" step:
```yaml
- name: Setup pnpm
  uses: pnpm/action-setup@v4
  with:
    version: latest  # or specific version like '9.x'
```

### Modifying Quality Checks
Add or remove steps in the quality checks section:
```yaml
# Add new check
- name: Run tests
  run: pnpm test

# Remove existing check (comment out or delete)
# - name: Run linter
#   run: pnpm lint
```

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [pnpm Documentation](https://pnpm.io/)
