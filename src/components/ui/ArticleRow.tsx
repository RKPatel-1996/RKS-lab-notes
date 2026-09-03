import React from 'react';
import { ArticleMeta } from '../../lib/types';
import { ChevronRight } from 'lucide-react';

interface ArticleRowProps {
  article: ArticleMeta;
}

export const ArticleRow: React.FC<ArticleRowProps> = ({ article }) => {
  return (
    <div className="group flex flex-col md:flex-row items-start gap-4 p-4 border-b-2 border-ink dark:border-white
      text-ink dark:text-white
      md:hover:bg-ink md:hover:text-paper active:bg-ink active:text-paper
      dark:md:hover:bg-white dark:md:hover:text-black dark:active:bg-white dark:active:text-black
      transition-all cursor-pointer">

      {/* Date (Left Col on Desktop) */}
      <div className="font-mono text-sm w-32 shrink-0 opacity-70 group-hover:opacity-100 group-hover:font-bold hidden md:block pt-1">
        {article.date}
      </div>

      {/* Mobile Metadata Line */}
      <div className="flex md:hidden flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] opacity-70">
        <span className="font-bold">{article.date}</span>
        <span>//</span>
        <span>{article.id}</span>
        {article.readTime && (
            <>
                <span>//</span>
                <span className="uppercase">{article.readTime}</span>
            </>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif font-bold text-lg leading-tight md:group-hover:translate-x-2 transition-transform duration-300">
              {article.title}
            </h3>
        </div>

        {/* Excerpt */}
        {article.excerpt && (
            <p className="font-serif text-sm opacity-80 line-clamp-2 max-w-3xl mt-2 leading-relaxed">
              {article.excerpt}
            </p>
        )}

        {/* Bottom row: Tags and Metadata */}
        <div className="flex flex-wrap items-center gap-4 mt-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
                <span
                    key={tag}
                    className="text-[10px] font-mono uppercase border border-pencil dark:border-white/50 group-hover:border-paper dark:group-hover:border-black px-2 py-0.5 rounded transition-colors"
                >
                {tag}
                </span>
            ))}
            </div>

            {/* Desktop ID / Read Time */}
            <div className="hidden md:flex font-mono text-[10px] opacity-70 group-hover:opacity-100 items-center gap-2 tracking-wider mt-0.5">
                <span>{article.id}</span>
                {article.readTime && (
                    <>
                        <span>/</span>
                        <span className="uppercase">{article.readTime}</span>
                    </>
                )}
            </div>
        </div>
      </div>

      <div className="hidden md:block pt-1 shrink-0">
         <ChevronRight className="opacity-0 md:group-hover:opacity-100 transition-opacity" size={20} />
      </div>
    </div>
  );
};
