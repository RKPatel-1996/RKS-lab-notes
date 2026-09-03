import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

export default function ArticleList({ articles, selectedFile, onSelect }: any) {
  // Sort descending by date
  const sorted = [...articles].sort((a, b) => {
    return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
  });

  return (
    <div className="flex flex-col">
      {sorted.map(article => (
        <div
          key={article.filename}
          onClick={() => onSelect(article.filename)}
          className={`p-4 border-b border-ink/20 dark:border-white/20 cursor-pointer transition-colors ${selectedFile === article.filename ? 'bg-ink text-paper dark:bg-white dark:text-black' : 'hover:bg-ink/5 dark:hover:bg-white/5'}`}
        >
          <div className="flex justify-between items-start mb-1">
            <span className="font-bold">{article.id || 'NO ID'}</span>
            {article.error && <AlertCircle size={16} className="text-red-500" />}
          </div>
          <div className="text-sm truncate opacity-80">{article.title || article.filename}</div>
          <div className="text-xs opacity-60 mt-2 flex justify-between">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
