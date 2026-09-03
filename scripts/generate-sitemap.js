import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseArticleMetadata } from './article-utils.js';
import { siteConfig } from './site-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/content/articles');
const publicDir = path.join(__dirname, '../public');
const SITE_URL = siteConfig.derived.publicUrl.replace(/\/$/, ''); // Remove trailing slash if any

function generateSitemap() {
  console.log("=== Generating Sitemap & Robots ===");
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.ts'));

  let urls = [];

  // Add base URLs
  urls.push({ loc: `${SITE_URL}/`, lastmod: new Date().toISOString().split('T')[0] });
  urls.push({ loc: `${SITE_URL}/media`, lastmod: new Date().toISOString().split('T')[0] });
  urls.push({ loc: `${SITE_URL}/about`, lastmod: new Date().toISOString().split('T')[0] });

  // Add article URLs
  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    const meta = parseArticleMetadata(filePath);

    if (meta.id && meta.date) {
      urls.push({ loc: `${SITE_URL}/articles/${meta.id}`, lastmod: meta.date });
    }
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log("✅ Created sitemap.xml");

  const robotsContent = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
  console.log("✅ Created robots.txt");
}

generateSitemap();
