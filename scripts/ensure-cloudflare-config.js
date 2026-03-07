#!/usr/bin/env node
/**
 * Ensures open-next.config.ts and wrangler.jsonc exist before Cloudflare deploy.
 * Run this before opennextjs-cloudflare build in CI.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const openNextConfig = `import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
`;

const wranglerConfig = `{
  "$schema": "node_modules/wrangler/config-schema.json",
  "main": ".open-next/worker.js",
  "name": "algobasket-website",
  "compatibility_date": "2025-09-27",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  },
  "services": [
    {
      "binding": "WORKER_SELF_REFERENCE",
      "service": "algobasket-website"
    }
  ]
}
`;

const openNextPath = path.join(root, 'open-next.config.ts');
const wranglerPath = path.join(root, 'wrangler.jsonc');

if (!fs.existsSync(openNextPath)) {
  fs.writeFileSync(openNextPath, openNextConfig);
  console.log('Created open-next.config.ts');
}

if (!fs.existsSync(wranglerPath)) {
  fs.writeFileSync(wranglerPath, wranglerConfig);
  console.log('Created wrangler.jsonc');
}
