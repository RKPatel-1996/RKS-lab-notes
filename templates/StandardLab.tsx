import React from "react";
import { Article } from "../types";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { CitationList } from "../components/science/CitationList";

interface StandardLabProps {
  article: Article;
  onBack: () => void;
}

export const StandardLab: React.FC<StandardLabProps> = ({
  article,
  onBack,
}) => {
  return (
    <div className="relative flex flex-col min-h-full bg-transparent">
      {/* Toolbar - Sticky to top of view */}
      <div className="sticky top-0 z-40 bg-paper dark:bg-black border-b-2 border-ink dark:border-crt-green p-4 flex justify-between items-center transition-colors duration-300">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-sm text-ink dark:text-crt-green hover:underline hover:text-accent dark:hover:text-crt-amber transition-colors"
        >
          <ArrowLeft size={16} /> RETURN_TO_INDEX
        </button>
        <div className="flex gap-4">
          <button className="hidden md:flex items-center gap-2 font-mono text-xs border border-ink dark:border-crt-green px-3 py-1 text-ink dark:text-crt-green hover:bg-ink hover:text-paper dark:hover:bg-crt-green dark:hover:text-black transition-colors">
            <Printer size={14} /> PRINT_JOB
          </button>
          <button className="flex items-center gap-2 font-mono text-xs border border-ink dark:border-crt-green px-3 py-1 text-ink dark:text-crt-green hover:bg-ink hover:text-paper dark:hover:bg-crt-green dark:hover:text-black transition-colors">
            <Download size={14} /> EXPORT
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-12 overflow-y-auto">
        {/* The Paper Container */}
        {/* "Container: A centered white column (max-w-3xl, bg-white, border-2 border-black, p-12, shadow-hard)" */}
        <article className="max-w-3xl mx-auto bg-white dark:bg-black border-2 border-black dark:border-crt-green p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt transition-colors duration-300">
          {/* Header */}
          <header className="mb-8">
            <h1 className="font-mono font-bold text-3xl md:text-4xl text-black dark:text-crt-green mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-gray-600 dark:text-crt-green/70">
              <div className="flex items-center gap-4">
                <span className="uppercase tracking-wider">
                  Date: {article.date}
                </span>
                <span className="uppercase tracking-wider">
                  ID: {article.id}
                </span>
              </div>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-crt-dim border border-gray-200 dark:border-crt-green px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Horizontal Rule */}
            <hr className="border-black dark:border-crt-green border-2 my-8" />
          </header>

          {/* Content Rendering */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-mono prose-p:font-serif
              dark:prose-invert 
              dark:prose-headings:text-crt-green dark:prose-p:text-crt-green dark:prose-strong:text-crt-green dark:prose-li:text-crt-green
              dark:prose-code:text-crt-green dark:prose-code:bg-crt-dim
              dark:prose-img:border-crt-green dark:prose-img:shadow-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Citation System */}
          <CitationList citations={article.citations} />

          {/* Footer End Mark */}
          <div className="mt-16 text-center font-mono text-[10px] text-gray-400 dark:text-crt-green/40 select-none">
            *** END OF DOCUMENT ***
          </div>
        </article>
      </div>
    </div>
  );
};
