import { Article, ArticleMeta } from "../lib/types";
import { ARTICLE_MANIFEST } from "./manifest";

// ============================================================================
// AUTOMATED ARTICLE METADATA REGISTRY
// ============================================================================

export const ARTICLES: ArticleMeta[] = ARTICLE_MANIFEST as ArticleMeta[];

// Create lazy loaders for all Article TS files
// @ts-ignore - Vite specific
const articleModules = import.meta.glob('./articles/*.ts');

// Create lazy loaders for all BibTeX files as raw strings
// @ts-ignore - Vite specific
const bibModules = import.meta.glob('./articles/*.bib', {
  query: '?raw',
  import: 'default'
});

export async function loadArticle(id: string): Promise<Article | null> {
  const meta = ARTICLES.find(a => a.id === id);
  if (!meta) return null;

  try {
    const modulePath = meta.modulePath;
    if (!modulePath) return null;

    const loader = articleModules[modulePath];
    if (!loader) return null;


    const mod: any = await loader();
    const article: Article = mod.default;

    if (article) {
      const bibPath = modulePath.replace(/\.ts$/, '.bib');
      const bibLoader = bibModules[bibPath];

      if (bibLoader) {
        try {
          const bibContent = await bibLoader();
          article.bibTexContent = bibContent as string;
        } catch (e) {
          console.warn(`Failed to load bibliography for ${id}:`, e);
        }
      }
      return article;
    }
  } catch (error) {
    console.error(`Failed to load article module for ${id}:`, error);
  }
  return null;
}