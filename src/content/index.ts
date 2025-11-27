import { Article } from "../lib/types";

// ============================================================================
// AUTOMATED ARTICLE LOADER
// ============================================================================
// This uses Vite's `import.meta.glob` feature to automatically import every 
// .ts file located in the ./articles directory.
//
// HOW TO ADD A NEW ARTICLE:
// 1. Create a new file in `src/content/articles/` (e.g., `my-new-post.ts`)
// 2. Export the article object as `default`.
//    Example: `export default { ... } satisfies Article;`
// 3. That's it! It will automatically appear in the app.
// ============================================================================

// @ts-ignore - Vite replaces this at build time, but TS might not know about 'glob' on import.meta without specific config
const modules = import.meta.glob('./articles/*.ts', { eager: true });

export const ARTICLES: Article[] = Object.values(modules)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((mod: any) => mod.default)
  // Ensure we only include valid article objects
  .filter((article): article is Article => !!article && !!article.id)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());