#!/usr/bin/env node

/**
 * Generate Branch Index Page
 *
 * This script generates an index.html file that lists all deployed branches
 * in the gh-pages branch. It provides a landing page for discovering and
 * navigating to Storybook builds for all active branches.
 *
 * Usage:
 *   node scripts/generate-branch-index.js [output-dir]
 *
 * Arguments:
 *   output-dir - Directory where index.html will be generated (default: current directory)
 */

import { readdir, stat, writeFile, mkdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/**
 * Directories to exclude from the branch list
 */
const EXCLUDED_DIRS = new Set([
  '.git',
  '.github',
  'node_modules',
  '.DS_Store',
]);

/**
 * Get all branch directories with their metadata
 * @param {string} baseDir - Base directory to scan
 * @returns {Promise<Array<{name: string, path: string, lastModified: Date}>>}
 */
async function getBranchDirectories(baseDir) {
  try {
    const entries = await readdir(baseDir, { withFileTypes: true });
    const branches = [];

    for (const entry of entries) {
      // Skip excluded directories and files
      if (EXCLUDED_DIRS.has(entry.name) || !entry.isDirectory()) {
        continue;
      }

      const fullPath = join(baseDir, entry.name);
      const stats = await stat(fullPath);

      branches.push({
        name: entry.name,
        path: entry.name,
        lastModified: stats.mtime,
      });
    }

    // Sort by last modified date (newest first)
    branches.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

    return branches;
  } catch (error) {
    console.error('Error reading branch directories:', error.message);
    return [];
  }
}

/**
 * Format date to readable string
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Generate HTML content for the index page
 * @param {Array<{name: string, path: string, lastModified: Date}>} branches
 * @returns {string}
 */
function generateHTML(branches) {
  const branchListHTML = branches
    .map(
      (branch) => `
        <li class="branch-item">
          <a href="${branch.path}/" class="branch-link">
            <div class="branch-info">
              <h2 class="branch-name">${branch.name}</h2>
              <p class="branch-meta">
                <span class="branch-label">Last updated:</span>
                <time datetime="${branch.lastModified.toISOString()}">
                  ${formatDate(branch.lastModified)}
                </time>
              </p>
            </div>
            <span class="branch-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      `
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="UI Kit Storybook - Browse deployed branches">
  <title>UI Kit Storybook - Branch Index</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --color-background: #ffffff;
      --color-surface: #f5f5f5;
      --color-text-primary: #1a1a1a;
      --color-text-secondary: #666666;
      --color-border: #e0e0e0;
      --color-primary: #0066cc;
      --color-primary-hover: #0052a3;
      --color-shadow: rgba(0, 0, 0, 0.1);
      --spacing-xs: 0.5rem;
      --spacing-sm: 0.75rem;
      --spacing-md: 1rem;
      --spacing-lg: 1.5rem;
      --spacing-xl: 2rem;
      --spacing-2xl: 3rem;
      --border-radius: 8px;
      --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --color-background: #1a1a1a;
        --color-surface: #2a2a2a;
        --color-text-primary: #f5f5f5;
        --color-text-secondary: #b0b0b0;
        --color-border: #404040;
        --color-primary: #4da3ff;
        --color-primary-hover: #66b3ff;
        --color-shadow: rgba(0, 0, 0, 0.3);
      }
    }

    body {
      font-family: var(--font-family);
      background-color: var(--color-background);
      color: var(--color-text-primary);
      line-height: 1.6;
      min-height: 100vh;
      padding: var(--spacing-xl);
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: var(--spacing-2xl);
      padding-bottom: var(--spacing-xl);
      border-bottom: 2px solid var(--color-border);
    }

    .header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--spacing-sm);
      color: var(--color-text-primary);
    }

    .header p {
      font-size: 1.125rem;
      color: var(--color-text-secondary);
    }

    .branch-count {
      display: inline-block;
      margin-top: var(--spacing-md);
      padding: var(--spacing-xs) var(--spacing-md);
      background-color: var(--color-surface);
      border-radius: calc(var(--border-radius) / 2);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-text-secondary);
    }

    .branch-list {
      list-style: none;
    }

    .branch-item {
      margin-bottom: var(--spacing-md);
    }

    .branch-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--spacing-lg);
      background-color: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius);
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }

    .branch-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px var(--color-shadow);
      border-color: var(--color-primary);
    }

    .branch-link:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }

    .branch-link:active {
      transform: translateY(0);
    }

    .branch-info {
      flex: 1;
    }

    .branch-name {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-xs);
      color: var(--color-primary);
    }

    .branch-meta {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
    }

    .branch-label {
      font-weight: 500;
    }

    .branch-arrow {
      font-size: 1.5rem;
      color: var(--color-text-secondary);
      transition: transform 0.2s ease;
      margin-left: var(--spacing-md);
    }

    .branch-link:hover .branch-arrow {
      transform: translateX(4px);
      color: var(--color-primary);
    }

    .empty-state {
      text-align: center;
      padding: var(--spacing-2xl);
      color: var(--color-text-secondary);
    }

    .empty-state p {
      font-size: 1.125rem;
      margin-bottom: var(--spacing-md);
    }

    .footer {
      margin-top: var(--spacing-2xl);
      padding-top: var(--spacing-xl);
      border-top: 1px solid var(--color-border);
      text-align: center;
      color: var(--color-text-secondary);
      font-size: 0.875rem;
    }

    @media (max-width: 640px) {
      body {
        padding: var(--spacing-md);
      }

      .header h1 {
        font-size: 2rem;
      }

      .header p {
        font-size: 1rem;
      }

      .branch-link {
        padding: var(--spacing-md);
      }

      .branch-name {
        font-size: 1.125rem;
      }

      .branch-arrow {
        font-size: 1.25rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <h1>UI Kit Storybook</h1>
      <p>Browse Storybook builds for all deployed branches</p>
      ${branches.length > 0 ? `<span class="branch-count">${branches.length} ${branches.length === 1 ? 'branch' : 'branches'} available</span>` : ''}
    </header>

    <main>
      ${
        branches.length > 0
          ? `
        <ul class="branch-list" role="list">
          ${branchListHTML}
        </ul>
      `
          : `
        <div class="empty-state">
          <p>No branch deployments found.</p>
          <p>Deploy a branch to see it listed here.</p>
        </div>
      `
      }
    </main>

    <footer class="footer">
      <p>Last generated: ${formatDate(new Date())}</p>
    </footer>
  </div>
</body>
</html>`;
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const outputDir = args[0] || process.cwd();
  const resolvedOutputDir = resolve(outputDir);

  console.log('Generating branch index page...');
  console.log(`Output directory: ${resolvedOutputDir}`);

  // Ensure output directory exists
  if (!existsSync(resolvedOutputDir)) {
    console.log(`Creating output directory: ${resolvedOutputDir}`);
    await mkdir(resolvedOutputDir, { recursive: true });
  }

  // Get all branch directories
  const branches = await getBranchDirectories(resolvedOutputDir);

  console.log(`Found ${branches.length} branch(es):`);
  branches.forEach((branch) => {
    console.log(`  - ${branch.name} (updated: ${formatDate(branch.lastModified)})`);
  });

  // Generate HTML
  const html = generateHTML(branches);

  // Write index.html
  const outputPath = join(resolvedOutputDir, 'index.html');
  await writeFile(outputPath, html, 'utf-8');

  console.log(`✓ Branch index generated: ${outputPath}`);
}

// Run main function
main().catch((error) => {
  console.error('Error generating branch index:', error);
  process.exit(1);
});
