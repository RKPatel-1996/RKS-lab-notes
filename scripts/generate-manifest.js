import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseArticleMetadata } from './article-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/content/articles');
const manifestFile = path.join(__dirname, '../src/content/manifest.ts');

function generateManifest() {
  console.log("=== Generating Article Manifest ===");
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.ts'));

  const manifest = files.map(file => {
    const filePath = path.join(articlesDir, file);
    const meta = parseArticleMetadata(filePath);
    return {
      id: meta.id,
      title: meta.title,
      date: meta.date,
      tags: meta.tags || [],
      excerpt: meta.excerpt || "",
      readTime: meta.readTime || "",
      type: meta.type || "",
      template: meta.template || "",
      author: meta.author || null,
      modulePath: `./articles/${file}`
    };
  }).filter(m => m.id);

  // Sort newest first
  manifest.sort((a, b) => {
    const da = new Date(a.date).getTime() || 0;
    const db = new Date(b.date).getTime() || 0;
    return db - da; // descending
  });

  const content = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
export const ARTICLE_MANIFEST = ${JSON.stringify(manifest, null, 2)};
`;

  fs.writeFileSync(manifestFile, content);
  console.log(`✅ Created manifest with ${manifest.length} records.`);
}

generateManifest();
