import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseArticleMetadata } from './article-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/content/articles');

function runValidation() {
  console.log("=== Running Content Integrity Validation ===");
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.ts'));

  let hasErrors = false;
  let hasWarnings = false;
  const idMap = new Map();

  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    const meta = parseArticleMetadata(filePath);
    const content = meta._rawContent; // using the raw content for figure/table checking

    const id = meta.id;
    const date = meta.date;
    const title = meta.title;

    // 1. Missing Critical Metadata
    if (!id || !date || !title) {
      console.error(`❌ ERROR in ${file}: Missing critical metadata (id, date, or title)`);
      hasErrors = true;
    }

    // 2. Filename mismatch
    if (id && !file.toLowerCase().includes(id.toLowerCase())) {
      console.warn(`⚠️ WARNING in ${file}: Filename does not match ID '${id}'`);
      hasWarnings = true;
    }

    // 3. Duplicate IDs
    if (id) {
      if (idMap.has(id)) {
        console.error(`❌ ERROR: Duplicate ID '${id}' found in ${file} and ${idMap.get(id)}`);
        hasErrors = true;
      } else {
        idMap.set(id, file);
      }
    }

    // 4. Missing Excerpt/ReadTime
    if (!meta.excerpt) {
      console.warn(`⚠️ WARNING in ${file}: Missing 'excerpt'`);
      hasWarnings = true;
    }
    if (!meta.readTime) {
      console.warn(`⚠️ WARNING in ${file}: Missing 'readTime'`);
      hasWarnings = true;
    }

    // 5. Duplicate Figure/Table IDs within the same file
    const figureMatches = [...content.matchAll(/<ScientificFigure[^>]*id=(['"`])(.*?)\1/g)];
    const tableMatches = [...content.matchAll(/<ScientificTable[^>]*id=(['"`])(.*?)\1/g)];

    const mediaIds = new Set();
    figureMatches.forEach(m => {
      if (mediaIds.has(m[2])) {
        console.error(`❌ ERROR in ${file}: Duplicate ScientificFigure id '${m[2]}'`);
        hasErrors = true;
      }
      mediaIds.add(m[2]);
    });
    tableMatches.forEach(m => {
      if (mediaIds.has(m[2])) {
        console.error(`❌ ERROR in ${file}: Duplicate ScientificTable/Figure id '${m[2]}'`);
        hasErrors = true;
      }
      mediaIds.add(m[2]);
    });

    // 6. Invalid Date Format (simple YYYY-MM-DD check)
    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      console.warn(`⚠️ WARNING in ${file}: Date '${date}' is not in YYYY-MM-DD format`);
      hasWarnings = true;
    }
  });

  if (hasWarnings && !hasErrors) {
    console.log("⚠️ Validation completed with warnings. (Catalogue reporting mode)");
  } else if (hasErrors) {
    console.error("❌ Validation failed with critical errors. Build halted to prevent accidental publication.");
    process.exit(1);
  } else {
    console.log("✅ Validation passed seamlessly.");
  }
}

runValidation();
