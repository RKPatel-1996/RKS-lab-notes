import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const configPath = path.join(rootDir, 'site.config.json');

function loadSiteConfig() {
  if (!fs.existsSync(configPath)) {
    throw new Error(`site.config.json is missing at ${configPath}`);
  }

  const configStr = fs.readFileSync(configPath, 'utf-8');
  let config;
  try {
    config = JSON.parse(configStr);
  } catch (err) {
    throw new Error(`Failed to parse site.config.json: ${err.message}`);
  }

  // Validate required fields
  if (!config.site || !config.site.id || !config.site.title || !config.site.courseLabel) {
    throw new Error('site.config.json must have site.id, site.title, and site.courseLabel');
  }
  if (!config.github || !config.github.owner || !config.github.repository) {
    throw new Error('site.config.json must have github.owner and github.repository');
  }
  if (!config.gitSafety || !config.gitSafety.sshAlias || !config.gitSafety.authorName || !config.gitSafety.authorEmail) {
    throw new Error('site.config.json must have gitSafety.sshAlias, gitSafety.authorName, and gitSafety.authorEmail');
  }

  // Derive values
  const productionBase = `/${config.github.repository}/`;
  const publicUrl = `https://${config.github.owner}.github.io/${config.github.repository}/`;
  const expectedSSHOrigin = `git@${config.gitSafety.sshAlias}:${config.github.owner}/${config.github.repository}.git`;

  return {
    ...config,
    derived: {
      productionBase,
      publicUrl,
      expectedSSHOrigin
    }
  };
}

export const siteConfig = loadSiteConfig();
