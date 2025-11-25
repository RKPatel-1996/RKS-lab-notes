
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { ArticleRow } from '../components/ui/ArticleRow';
import { Search } from 'lucide-react';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = ARTICLES.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-full p-4 md:p-12 max-w-6xl mx-auto">
      
      {/* Header */}
      <header className="mb-12 border-b-4 border-ink dark:border-crt-green pb-4">
        <h1 className="font-mono text-xl md:text-3xl font-bold tracking-tighter uppercase text-ink dark:text-crt-green">
          INDEX_REGISTRY // ARCHIVES
        </h1>
        <p className="font-mono text-xs text-pencil dark:text-crt-green/60 mt-2">
          Select a record to view details.
        </p>
      </header>

      {/* Search Filter */}
      <div className="mb-12 relative max-w-2xl">
        <div className="flex items-center gap-4 text-ink dark:text-crt-green font-mono text-lg border-b-2 border-transparent focus-within:border-ink dark:focus-within:border-crt-green transition-colors pb-2">
            <span className="animate-pulse">
                <Search size={20} />
            </span>
            <span className="text-pencil dark:text-crt-green/50 select-none">{'>'}</span>
            <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search logs..."
                className="bg-transparent border-none outline-none w-full placeholder-gray-400 dark:placeholder-crt-dim/50"
                autoFocus
            />
        </div>
      </div>

      {/* Article List */}
      <div className="space-y-0">
        {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
            <Link key={article.id} to={`/articles/${article.id}`} className="block">
                <ArticleRow article={article} />
            </Link>
            ))
        ) : (
            <div className="py-12 text-center font-mono text-pencil dark:text-crt-dim border-2 border-dashed border-gray-300 dark:border-crt-dim">
                <p>Error: No records found matching query "{searchQuery}"</p>
            </div>
        )}
      </div>

      {/* Footer Stat */}
      <div className="mt-8 font-mono text-xs text-right text-pencil dark:text-crt-green/50">
        Total_Records: {ARTICLES.length} // Visible: {filteredArticles.length}
      </div>

    </div>
  );
};
