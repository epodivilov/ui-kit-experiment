#!/usr/bin/env node

/**
 * Update Branch Metadata
 *
 * This script updates the branch metadata file with publish and update timestamps.
 * It's designed to be run during CI deployments to track when branches were
 * first published and last updated.
 *
 * Usage:
 *   node scripts/update-branch-metadata.js <branch-name> [metadata-file-path]
 *
 * Arguments:
 *   branch-name - Name of the branch being deployed (required)
 *   metadata-file-path - Path to branch-metadata.json (default: ./branch-metadata.json)
 */

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

/**
 * Read existing metadata file or return empty object
 * @param {string} metadataPath - Path to metadata file
 * @returns {Promise<Record<string, {published: string, updated: string}>>}
 */
async function readMetadata(metadataPath) {
  try {
    if (!existsSync(metadataPath)) {
      console.log('Metadata file does not exist. Creating new metadata object.');
      return {};
    }

    const content = await readFile(metadataPath, 'utf-8');
    const metadata = JSON.parse(content);
    console.log(`Loaded existing metadata from: ${metadataPath}`);
    return metadata;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Metadata file not found. Creating new metadata object.');
      return {};
    }
    console.error(`Error reading metadata file: ${error.message}`);
    console.log('Starting with empty metadata object.');
    return {};
  }
}

/**
 * Update metadata for a specific branch
 * @param {Record<string, {published: string, updated: string}>} metadata - Current metadata
 * @param {string} branchName - Branch name to update
 * @returns {Record<string, {published: string, updated: string}>}
 */
function updateBranchMetadata(metadata, branchName) {
  const now = new Date().toISOString();

  if (metadata[branchName]) {
    // Branch exists - only update the 'updated' timestamp
    console.log(`Branch '${branchName}' already exists. Updating 'updated' timestamp.`);
    metadata[branchName] = {
      published: metadata[branchName].published,
      updated: now,
    };
  } else {
    // New branch - set both published and updated to current time
    console.log(`Branch '${branchName}' is new. Setting both 'published' and 'updated' timestamps.`);
    metadata[branchName] = {
      published: now,
      updated: now,
    };
  }

  return metadata;
}

/**
 * Write metadata to file
 * @param {string} metadataPath - Path to metadata file
 * @param {Record<string, {published: string, updated: string}>} metadata - Metadata to write
 * @returns {Promise<void>}
 */
async function writeMetadata(metadataPath, metadata) {
  try {
    const content = JSON.stringify(metadata, null, 2);
    await writeFile(metadataPath, content, 'utf-8');
    console.log(`✓ Metadata written to: ${metadataPath}`);
  } catch (error) {
    console.error(`Error writing metadata file: ${error.message}`);
    throw error;
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  // Validate arguments
  if (args.length === 0) {
    console.error('Error: Branch name is required');
    console.error('Usage: node scripts/update-branch-metadata.js <branch-name> [metadata-file-path]');
    process.exit(1);
  }

  const branchName = args[0];
  const metadataPath = resolve(args[1] || 'branch-metadata.json');

  console.log('Updating branch metadata...');
  console.log(`Branch: ${branchName}`);
  console.log(`Metadata file: ${metadataPath}`);
  console.log('');

  // Read existing metadata
  const metadata = await readMetadata(metadataPath);

  // Update metadata for the branch
  const updatedMetadata = updateBranchMetadata(metadata, branchName);

  // Write updated metadata
  await writeMetadata(metadataPath, updatedMetadata);

  // Output the updated metadata for verification
  console.log('');
  console.log('Updated metadata:');
  console.log(JSON.stringify(updatedMetadata, null, 2));
  console.log('');
  console.log(`✓ Branch '${branchName}' metadata updated successfully`);
}

// Run main function
main().catch((error) => {
  console.error('Error updating branch metadata:', error);
  process.exit(1);
});
