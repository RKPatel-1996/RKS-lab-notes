import React from "react";
import { Article } from "../types";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { Tooltip } from "./Tooltip";

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
}) => {
  // Simple parser to replace [1] with Tooltips
  const renderContent = () => {
    const parts = article.content.split(/(\[\d+\])/g);

    return parts.map((part, index) => {
      const citationMatch = part.match(/\[(\d+)\]/);
      if (citationMatch) {
        const id = citationMatch[1];
        const citation = article.citations.find((c) => c.id === id);
        if (citation) {
          return (
            <Tooltip
              key={index}
              content={citation.text}
              source={citation.source}
            >
              {id}
            </Tooltip>
          );
        }
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  return (
    <div className="relative flex flex-col min-h-full bg-transparent">
      {/* Toolbar */}
      <div className="flex justify-between items-center p-4 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-crt-bg z-40 sticky top-0">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-sm hover:underline hover:text-accent dark:hover:text-crt-amber transition-colors"
        >
          <ArrowLeft size={16} /> RETURN_TO_INDEX
        </button>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 font-mono text-xs border border-ink dark:border-crt-green px-3 py-1 hover:bg-ink hover:text-paper dark:hover:bg-crt-green dark:hover:text-black transition-colors">
            <Printer size={14} /> PRINT
          </button>
          <button className="flex items-center gap-2 font-mono text-xs border border-ink dark:border-crt-green px-3 py-1 hover:bg-ink hover:text-paper dark:hover:bg-crt-green dark:hover:text-black transition-colors">
            <Download size={14} /> EXPORT_PDF
          </button>
        </div>
      </div>

      {/* Content Area - No fixed height or overflow here, flows naturally */}
      <div className="flex-1 p-8 relative">
        <div className="max-w-3xl mx-auto">
          {/* The "Paper" Sheet */}
          <article className="bg-white dark:bg-black dark:border dark:border-crt-dim shadow-paper dark:shadow-crt p-12 min-h-[1000px] mb-12 relative">
            {/* Header Metadata */}
            <header className="border-b-4 border-black dark:border-crt-green mb-8 pb-4">
              <div className="flex justify-between font-mono text-xs mb-2 text-pencil dark:text-crt-green/60 uppercase">
                <span>{article.id}</span>
                <span>{article.date}</span>
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight mb-4 text-ink dark:text-crt-green">
                {article.title}
              </h1>
              <div className="flex gap-2 font-mono text-xs mt-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 dark:bg-crt-dim dark:text-crt-green px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Body */}
            <div
              className="prose prose-lg dark:prose-invert font-serif text-ink dark:text-crt-green max-w-none 
                    prose-headings:font-mono prose-headings:uppercase prose-headings:text-sm prose-headings:tracking-widest prose-headings:border-b prose-headings:border-gray-300 dark:prose-headings:border-crt-dim prose-headings:pb-2 prose-headings:mt-8
                    prose-code:font-code prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-crt-dim prose-code:p-1
                    prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-ink dark:prose-blockquote:border-crt-green
                "
            >
              {renderContent()}
            </div>

            {/* Footer / End of File */}
            <div className="mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-crt-dim text-center font-mono text-xs text-pencil dark:text-crt-green/50">
              *** END OF MANUSCRIPT ***
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
