import React from 'react';
import { TocItem } from '../../hooks/useArticleDom';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      id="table-of-contents"
      className="my-8 p-6 bg-paper dark:bg-gray-800/10 border-2 border-ink dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#ffffff]"
    >
      <div className="flex items-center gap-2 mb-4 border-b-2 border-ink dark:border-white pb-2">
        <List size={18} className="text-ink dark:text-white" />
        <h3 className="font-mono text-sm font-bold uppercase text-ink dark:text-white">
          Table_Of_Contents
        </h3>
      </div>

      <ul className="space-y-1 font-mono text-xs">
        {items.map((item) => {
          // Differentiate H2 and H3 visibly
          const isMajor = item.level === 2;

          return (
          <li
             key={item.id}
             style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
             className={isMajor ? "mt-3 first:mt-0 font-bold" : ""}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-start gap-2 text-pencil dark:text-gray-300 hover:text-accent dark:hover:text-gray-300 hover:underline decoration-1 transition-colors focus-within:ring-2 focus-within:ring-accent focus-within:outline-none rounded"
            >
               <span className="opacity-50 select-none">
                 {isMajor ? '##' : '>'}
               </span>
               <span className="leading-tight">{item.text}</span>
            </a>
          </li>
        )})}
      </ul>

      <div className="mt-4 pt-2 border-t border-dashed border-gray-300 dark:border-white/30 text-[10px] text-pencil dark:text-gray-500 italic">
        * Click heading titles in the article to return here.
      </div>
    </nav>
  );
};
