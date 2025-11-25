
import React from 'react';
import { Article } from '../../types';
import { ChevronRight } from 'lucide-react';

interface ArticleRowProps {
  article: Article;
}

export const ArticleRow: React.FC<ArticleRowProps> = ({ article }) => {
  return (
    <div className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border-b-2 border-ink dark:border-crt-green 
      text-ink dark:text-crt-green
      md:hover:bg-ink md:hover:text-paper active:bg-ink active:text-paper
      dark:md:hover:bg-crt-green dark:md:hover:text-black dark:active:bg-crt-green dark:active:text-black
      transition-all cursor-pointer">
      
      {/* Date */}
      <div className="font-mono text-sm w-32 shrink-0 opacity-70 group-hover:opacity-100 group-hover:font-bold">
        {article.date}
      </div>

      {/* Title */}
      <div className="flex-1">
        <h3 className="font-serif font-bold text-lg leading-tight md:group-hover:translate-x-2 transition-transform duration-300">
          {article.title}
        </h3>
        {/* Mobile Tags */}
        <div className="md:hidden mt-2 flex flex-wrap gap-2">
           {article.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono border border-current px-2 rounded-full opacity-60">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tags (Desktop) & Arrow */}
      <div className="hidden md:flex items-center gap-4 shrink-0">
        <div className="flex gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="text-xs font-mono border border-pencil dark:border-crt-green/50 group-hover:border-paper dark:group-hover:border-black px-2 py-1 rounded-full transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
      </div>
    </div>
  );
};
