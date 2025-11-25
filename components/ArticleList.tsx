import React, { useState } from "react";
import { Article } from "../types";
import { FileText, Database } from "lucide-react";
import { SORT_OPTIONS } from "../constants";

interface ArticleListProps {
  articles: Article[];
  onSelect: (article: Article) => void;
}

export const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  onSelect,
}) => {
  const [activeSort, setActiveSort] = useState<string>("chronological");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-full p-6 max-w-5xl mx-auto w-full">
      {/* Header Area */}
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold border-b-4 border-ink dark:border-crt-green inline-block pb-2 mb-6">
          Index_Registry
        </h2>

        {/* Search Input - Database Style */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-pencil dark:text-crt-green">
            <Database size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="> Query Database..."
            className="w-full bg-paper dark:bg-black border-2 border-ink dark:border-crt-green p-4 pl-12 font-mono text-lg shadow-paper dark:shadow-crt focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-crt-amber transition-all dark:text-crt-green placeholder-gray-400 dark:placeholder-crt-dim"
          />
          {/* Blinking Cursor Simulation if empty */}
          {searchQuery === "" && (
            <span className="absolute left-[200px] top-1/2 -translate-y-1/2 font-mono animate-blink text-ink dark:text-crt-green">
              _
            </span>
          )}
        </div>

        {/* Sort Tabs */}
        <div className="flex gap-2 font-mono text-xs">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveSort(opt.id)}
              className={`px-4 py-2 border-t-2 border-x-2 border-ink dark:border-crt-green rounded-t-lg transition-all 
                    ${
                      activeSort === opt.id
                        ? "bg-ink text-paper dark:bg-crt-green dark:text-black font-bold -mb-[2px] z-10"
                        : "bg-transparent text-pencil dark:text-crt-green/70 hover:bg-gray-200 dark:hover:bg-crt-dim"
                    }`}
            >
              [Sort: {opt.label}]
            </button>
          ))}
        </div>
        <div className="h-0.5 w-full bg-ink dark:bg-crt-green"></div>
      </div>

      {/* Directory List */}
      <div className="flex-1">
        <table className="w-full text-left border-collapse">
          <thead className="font-mono text-xs uppercase text-pencil dark:text-crt-green/60 border-b border-gray-300 dark:border-crt-dim sticky top-0 bg-paper dark:bg-black z-10 shadow-sm">
            <tr>
              <th className="py-2 pl-4 w-12">Type</th>
              <th className="py-2">Ref_ID / Title</th>
              <th className="py-2 w-32">Date</th>
              <th className="py-2 w-48">Tags</th>
              <th className="py-2 w-24 text-right pr-4">Action</th>
            </tr>
          </thead>
          <tbody className="font-serif">
            {filteredArticles.map((article) => (
              <tr
                key={article.id}
                onClick={() => onSelect(article)}
                className="group border-b border-gray-200 dark:border-crt-dim hover:bg-yellow-100 dark:hover:bg-crt-dim cursor-pointer transition-colors"
              >
                <td className="py-4 pl-4 align-top">
                  <FileText
                    className="text-pencil dark:text-crt-green"
                    size={20}
                  />
                </td>
                <td className="py-4 align-top pr-4">
                  <div className="font-mono text-xs text-accent dark:text-crt-amber mb-1 group-hover:underline">
                    {article.id}
                  </div>
                  <div className="font-bold text-lg leading-tight text-ink dark:text-crt-green">
                    {article.title}
                  </div>
                  <div className="font-mono text-xs text-pencil dark:text-crt-green/60 mt-2 line-clamp-1">
                    {article.excerpt}
                  </div>
                </td>
                <td className="py-4 align-top font-mono text-sm text-ink dark:text-crt-green">
                  {article.date}
                </td>
                <td className="py-4 align-top">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] border border-gray-300 dark:border-crt-green px-1 rounded text-pencil dark:text-crt-green"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 align-top text-right pr-4">
                  <span className="font-mono text-xs font-bold border-b-2 border-transparent group-hover:border-ink dark:group-hover:border-crt-green transition-all dark:text-crt-green">
                    [OPEN]
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredArticles.length === 0 && (
          <div className="p-12 text-center font-mono text-pencil dark:text-crt-dim border-2 border-dashed border-gray-300 dark:border-crt-dim mt-4">
            No_Records_Found_In_Database
          </div>
        )}
      </div>
    </div>
  );
};
