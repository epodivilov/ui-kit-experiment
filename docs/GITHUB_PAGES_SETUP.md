# GitHub Pages Setup for Storybook Deployment

This document provides step-by-step instructions for configuring GitHub Pages to deploy Storybook builds automatically for different branches and pull requests.

## Table of Contents

- [Overview](#overview)
- [Repository Settings Configuration](#repository-settings-configuration)
- [GitHub Actions Permissions](#github-actions-permissions)
- [gh-pages Branch Setup](#gh-pages-branch-setup)
- [Verification Steps](#verification-steps)
- [Troubleshooting](#troubleshooting)

## Overview

This project uses GitHub Pages to host Storybook builds for:
- **Main branch**: Production Storybook at the root URL
- **Pull requests**: Preview deployments in subdirectories (e.g., `/feature-branch`)
- **Branch index**: Landing page listing all deployed branches

The deployment process uses GitHub Actions workflows that automatically build and push Storybook to the `gh-pages` branch.

## Repository Settings Configuration

### Step 1: Access GitHub Pages Settings

1. Navigate to your repository on GitHub
2. Click on **Settings** tab (requires admin/write permissions)
3. Scroll down to the **Pages** section in the left sidebar
4. Click on **Pages**

### Step 2: Configure Pages Source

Configure the following settings:

| Setting | Value | Description |
|---------|-------|-------------|
| **Source** | Deploy from a branch | Uses a specific branch for GitHub Pages |
| **Branch** | `gh-pages` | The branch containing built Storybook files |
| **Folder** | `/ (root)` | Deploy from the root of the gh-pages branch |

**Visual reference:**
```
Source: [Deploy from a branch ▼]
Branch: [gh-pages ▼] [/ (root) ▼] [Save]
```

### Step 3: Save Configuration

Click the **Save** button to apply the settings.

**Expected result:**
- GitHub will display: "Your site is ready to be published at `https://<username>.github.io/<repository>/`"
- After the first deployment, this will change to: "Your site is live at `https://<username>.github.io/<repository>/`"

## GitHub Actions Permissions

GitHub Actions needs write permissions to push to the `gh-pages` branch. Configure this in two places:

### Step 1: Workflow Permissions

1. Go to repository **Settings**
2. Navigate to **Actions** → **General** in the left sidebar
3. Scroll to **Workflow permissions** section
4. Select one of the following options:

**Option A (Recommended): Read and write permissions**
```
○ Read repository contents and packages permissions
● Read and write permissions
  Allow GitHub Actions to create and approve pull requests
  ☑ (checked)
```

**Option B (More Restrictive): Use `GITHUB_TOKEN` with explicit permissions**

If you prefer minimal permissions, keep "Read repository contents" selected and use explicit permissions in the workflow file:

```yaml
permissions:
  contents: write  # Required to push to gh-pages branch
  pull-requests: write  # Required to post PR comments
```

### Step 2: Enable Actions

Ensure GitHub Actions is enabled for the repository:

1. Go to **Settings** → **Actions** → **General**
2. Under **Actions permissions**, select:
   - ✅ **Allow all actions and reusable workflows** (or)
   - ✅ **Allow local actions and actions created by GitHub** (or)
   - Configure custom allowed actions based on your organization's policy

### Step 3: Save Permissions

Click **Save** to apply the permissions settings.

## gh-pages Branch Setup

The `gh-pages` branch will be automatically created by the GitHub Actions workflow on the first deployment. However, you can create it manually if needed.

### Automatic Creation (Recommended)

The workflow will automatically:
1. Create the `gh-pages` branch if it doesn't exist
2. Initialize it with a `.gitkeep` file or the first Storybook build
3. Configure it as an orphan branch (no commit history from main)

**No action required** - the workflow handles this automatically.

### Manual Creation (Optional)

If you need to create the `gh-pages` branch manually:

```bash
# Create orphan branch (no parent commits)
git checkout --orphan gh-pages

# Remove all files from staging
git rm -rf .

# Create initial commit
echo "# Storybook Deployments" > README.md
git add README.md
git commit -m "Initial gh-pages branch"

# Push to remote
git push origin gh-pages

# Return to main branch
git checkout main
```

### Branch Protection Rules

**Important:** Do NOT enable branch protection rules on `gh-pages` that would prevent GitHub Actions from pushing.

If you need protection:
- Go to **Settings** → **Branches** → **Branch protection rules**
- Either exclude `gh-pages` from protection, or
- Add `github-actions[bot]` to the allowed list of users who can push

## Verification Steps

### Step 1: Verify Repository Settings

Confirm the following settings are correct:

- [ ] GitHub Pages is enabled
- [ ] Source is set to "Deploy from a branch"
- [ ] Branch is set to `gh-pages`
- [ ] Folder is set to `/ (root)`
- [ ] GitHub Actions has "Read and write permissions"
- [ ] GitHub Actions is enabled for the repository

### Step 2: Check Workflow Permissions

Verify the workflow file has the necessary permissions:

```yaml
# In .github/workflows/deploy-storybook.yml
permissions:
  contents: write        # Push to gh-pages
  pull-requests: write   # Comment on PRs
```

### Step 3: Test First Deployment

After the first workflow run:

1. Check that the `gh-pages` branch was created:
   ```bash
   git fetch origin
   git branch -r | grep gh-pages
   # Should output: origin/gh-pages
   ```

2. Verify GitHub Pages deployment:
   - Go to **Settings** → **Pages**
   - Check the deployment status
   - Visit the published URL

3. Check deployment history:
   - Go to **Actions** tab
   - Verify workflow ran successfully
   - Check for the "pages build and deployment" workflow

### Step 4: Verify Branch Deployments

After a PR is created and workflow runs:

1. Visit the main GitHub Pages URL: `https://<username>.github.io/<repository>/`
2. You should see the branch index page
3. Click on a branch link to view its Storybook deployment
4. PR should have a comment with the Storybook URL

## Troubleshooting

### Issue: "GitHub Pages is currently disabled"

**Solution:**
- Check if your repository is public (Pages is free for public repos)
- For private repos, verify you have GitHub Pro, Team, or Enterprise
- Enable Pages in Settings → Pages

### Issue: "Action does not have permission to push to gh-pages"

**Symptoms:**
- Workflow fails with error: "Permission denied to github-actions[bot]"
- Error message: "refusing to allow a GitHub App to create or update workflow"

**Solutions:**
1. Grant write permissions:
   - Settings → Actions → General → Workflow permissions
   - Select "Read and write permissions"
   - Save changes

2. Or use `GITHUB_TOKEN` with explicit permissions in workflow:
   ```yaml
   permissions:
     contents: write
     pull-requests: write
   ```

3. Check branch protection rules:
   - Settings → Branches
   - Remove restrictions on `gh-pages` or allow `github-actions[bot]`

### Issue: "gh-pages branch not found"

**Symptoms:**
- GitHub Pages shows "There isn't a GitHub Pages site here"
- 404 error when visiting the URL

**Solutions:**
1. Verify `gh-pages` branch exists:
   ```bash
   git fetch origin
   git branch -r | grep gh-pages
   ```

2. If missing, run the workflow manually:
   - Go to Actions tab
   - Select "Deploy Storybook" workflow
   - Click "Run workflow"

3. Check if the workflow completed successfully:
   - Actions tab → Latest workflow run
   - Review logs for errors

### Issue: "Page build failed"

**Symptoms:**
- Deployment workflow succeeds but Pages build fails
- Email notification: "Page build failed"

**Solutions:**
1. Check for Jekyll errors:
   - Add `.nojekyll` file to gh-pages branch root
   - This prevents GitHub from trying to build as Jekyll site

2. Verify file structure:
   - Ensure `index.html` exists at the root or branch folder
   - Check that file paths are relative, not absolute

3. Review GitHub Pages build logs:
   - Settings → Pages
   - Check "Latest deployment" status

### Issue: "Unable to deploy to GitHub Pages"

**Symptoms:**
- Workflow fails at the deploy step
- Error: "Failed to deploy to GitHub Pages"

**Solutions:**
1. Check repository visibility:
   - Public repos: GitHub Pages is free
   - Private repos: Requires paid plan

2. Verify deployment token:
   - Ensure `GITHUB_TOKEN` is available in workflow
   - Check token has correct permissions

3. Review deployment action logs:
   - Look for detailed error messages
   - Check if there are rate limits or quota issues

### Issue: "404 - File not found"

**Symptoms:**
- GitHub Pages URL loads but shows 404
- Branch-specific URLs don't work

**Solutions:**
1. Verify folder structure in `gh-pages`:
   ```
   gh-pages/
   ├── index.html (branch index)
   ├── main/ (or your main branch name)
   │   └── index.html (Storybook)
   └── feature-branch/
       └── index.html (Storybook)
   ```

2. Check base URL in Storybook config:
   ```javascript
   // .storybook/main.ts
   export default {
     // For branch deployments, set base to /repository-name/branch-name/
     viteFinal: async (config) => {
       config.base = process.env.STORYBOOK_BASE_URL || '/';
       return config;
     },
   };
   ```

3. Ensure workflow deploys to correct folder:
   ```yaml
   - name: Deploy to GitHub Pages
     run: |
       # Deploy to branch-specific folder
       BRANCH_NAME=$(echo ${GITHUB_HEAD_REF} | sed 's/[^a-zA-Z0-9-]/-/g')
       git checkout gh-pages
       mkdir -p $BRANCH_NAME
       cp -r storybook-static/* $BRANCH_NAME/
   ```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)
- [Configuring Publishing Source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Related Files

- `.github/workflows/deploy-storybook.yml` - GitHub Actions workflow for deployment
- `scripts/generate-branch-index.js` - Script to generate branch index page
- `docs/DEPLOYMENT.md` - General deployment documentation (to be created)
