# GitHub Pages Configuration Checklist

Use this checklist to verify your repository is correctly configured for GitHub Pages deployment of Storybook builds.

## Pre-Deployment Checklist

### Repository Settings

- [ ] **GitHub Pages Enabled**
  - Navigate to: Settings → Pages
  - Verify: "Pages" section is accessible

- [ ] **Source Configuration**
  - Source: `Deploy from a branch`
  - Branch: `gh-pages`
  - Folder: `/ (root)`
  - Status: Settings saved successfully

- [ ] **Repository Visibility**
  - Public repository (free GitHub Pages), OR
  - Private repository with GitHub Pro/Team/Enterprise plan

### GitHub Actions Permissions

- [ ] **Workflow Permissions Set**
  - Navigate to: Settings → Actions → General
  - Workflow permissions: `Read and write permissions`
  - OR workflow file includes explicit `permissions` block:
    ```yaml
    permissions:
      contents: write
      pull-requests: write
    ```

- [ ] **GitHub Actions Enabled**
  - Navigate to: Settings → Actions → General
  - Actions permissions: Enabled (not disabled for repository)

- [ ] **Branch Protection (if applicable)**
  - Navigate to: Settings → Branches
  - `gh-pages` branch either:
    - Has no protection rules, OR
    - Allows `github-actions[bot]` to push

### Workflow Files

- [ ] **Deployment Workflow Exists**
  - File: `.github/workflows/deploy-storybook.yml`
  - Contains necessary permissions block
  - Triggers configured (e.g., `pull_request`, `push`)

- [ ] **Workflow Has Required Steps**
  - Install dependencies (`pnpm install`)
  - Build Storybook (`pnpm storybook:build`)
  - Deploy to `gh-pages` branch
  - Post PR comment (for PR deployments)

### Supporting Scripts

- [ ] **Branch Index Generator**
  - File: `scripts/generate-branch-index.js` (or similar)
  - Generates HTML page with links to all branches

- [ ] **Storybook Configuration**
  - Base URL configured for GitHub Pages
  - Static file paths are relative

## Post-Deployment Verification

### First Deployment

- [ ] **gh-pages Branch Created**
  - Run: `git fetch origin && git branch -r | grep gh-pages`
  - Expected: `origin/gh-pages` appears in list

- [ ] **GitHub Pages Deployment Active**
  - Navigate to: Settings → Pages
  - Status: "Your site is live at `https://<username>.github.io/<repository>/`"
  - Click link to verify site loads

- [ ] **Workflow Completed Successfully**
  - Navigate to: Actions tab
  - Latest workflow run shows green checkmark
  - No error messages in logs

### Branch/PR Deployments

- [ ] **Branch Index Page Works**
  - Visit: `https://<username>.github.io/<repository>/`
  - Page lists available branches
  - Links are clickable and navigate to correct Storybook builds

- [ ] **Branch-Specific Storybook Loads**
  - Visit: `https://<username>.github.io/<repository>/<branch-name>/`
  - Storybook UI renders correctly
  - All components and stories are accessible

- [ ] **PR Comment Posted**
  - Open a pull request that triggers deployment
  - Bot posts comment with Storybook URL
  - URL is accessible and loads Storybook

### Ongoing Monitoring

- [ ] **Deployment History**
  - Navigate to: Settings → Pages
  - Check "Latest deployment" timestamp
  - Verify deployments occur after PR/push events

- [ ] **Storage Usage**
  - GitHub Pages has size limits (1GB recommended limit)
  - Monitor `gh-pages` branch size
  - Implement cleanup workflow for stale branches (see task-038)

## Configuration Summary

### Expected Settings

```
Repository: <your-org>/<your-repo>
├─ Settings
│  ├─ Pages
│  │  ├─ Source: Deploy from a branch
│  │  ├─ Branch: gh-pages
│  │  └─ Folder: / (root)
│  └─ Actions
│     └─ General
│        └─ Workflow permissions: Read and write permissions
└─ Branches
   └─ gh-pages (exists after first deployment)
```

### Expected GitHub Pages URL Structure

```
https://<username>.github.io/<repository>/              → Branch index page
https://<username>.github.io/<repository>/main/         → Main branch Storybook
https://<username>.github.io/<repository>/feature-x/    → Feature branch Storybook
```

## Troubleshooting Quick Reference

| Issue | Quick Fix |
|-------|-----------|
| "Permission denied" error | Enable "Read and write permissions" in Settings → Actions → General |
| 404 on GitHub Pages URL | Check `gh-pages` branch exists and has files |
| Workflow fails | Review logs in Actions tab for specific error |
| No PR comment | Verify `pull-requests: write` permission in workflow |
| Page build failed email | Add `.nojekyll` file to `gh-pages` branch root |

## Next Steps

After completing this checklist:

1. Run the deployment workflow manually (Actions → Deploy Storybook → Run workflow)
2. Verify the first deployment completes successfully
3. Create a test PR to verify branch deployment and PR comments
4. Share the GitHub Pages URL with your team

## Related Documentation

- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - Detailed setup instructions
- [DEPLOYMENT.md](./DEPLOYMENT.md) - General deployment documentation (to be created)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
