import React, { useState } from "react";
import { Article } from "../../src/lib/types";
import { ArrowLeft, Printer, Download, Minus, Plus } from "lucide-react";
import { CitationList } from "../science/CitationList";

interface StandardLabProps {
  article: Article;
  onBack: () => void;
}

export const StandardLab: React.FC<StandardLabProps> = ({
  article,
  onBack,
}) => {
  const [fontSizeIdx, setFontSizeIdx] = useState(2);
  const fontSizes = [
    "prose-sm",
    "prose-base",
    "prose-lg",
    "prose-xl",
    "prose-2xl",
  ];

  return (
    <div className="relative flex flex-col min-h-full bg-transparent">
      {/* Toolbar - Sticky to top of view */}
      <div className="sticky top-0 z-40 bg-paper dark:bg-black border-b-2 border-ink dark:border-crt-green p-4 flex justify-between items-center transition-colors duration-300">
        <button
          onClick={onBack}
          title="Return to Index"
          className="flex items-center gap-2 font-mono text-sm text-ink dark:text-crt-green hover:text-accent dark:hover:text-crt-amber transition-colors p-2"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-4 items-center">
          {/* Font Controls */}
          <div className="flex items-center border border-ink dark:border-crt-green bg-white dark:bg-black h-8">
            <button
              onClick={() => setFontSizeIdx(Math.max(0, fontSizeIdx - 1))}
              disabled={fontSizeIdx === 0}
              className="h-full px-2 hover:bg-gray-200 dark:hover:bg-crt-dim disabled:opacity-30 transition-colors border-r border-ink dark:border-crt-green"
              title="Decrease Font Size"
            >
              <Minus size={14} className="text-ink dark:text-crt-green" />
            </button>
            <span className="font-mono text-xs px-2 min-w-[30px] text-center text-ink dark:text-crt-green select-none">
              A{fontSizeIdx + 1}
            </span>
            <button
              onClick={() =>
                setFontSizeIdx(Math.min(fontSizes.length - 1, fontSizeIdx + 1))
              }
              disabled={fontSizeIdx === fontSizes.length - 1}
              className="h-full px-2 hover:bg-gray-200 dark:hover:bg-crt-dim disabled:opacity-30 transition-colors border-l border-ink dark:border-crt-green"
              title="Increase Font Size"
            >
              <Plus size={14} className="text-ink dark:text-crt-green" />
            </button>
          </div>

          <button className="hidden md:flex items-center gap-2 font-mono text-xs border border-ink dark:border-crt-green px-3 py-1.5 text-ink dark:text-crt-green hover:bg-ink hover:text-paper dark:hover:bg-crt-green dark:hover:text-black transition-colors">
            <Printer size={14} /> PRINT_JOB
          </button>
          <button
            className="flex items-center gap-2 font-mono text-xs border border-ink dark:border-crt-green px-3 py-1.5 text-ink dark:text-crt-green hover:bg-ink hover:text-paper dark:hover:bg-crt-green dark:hover:text-black transition-colors"
            title="Export"
          >
            <Download size={14} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-2 md:p-12 overflow-y-auto">
        {/* The Paper Container */}
        {/* "Container: A centered white column (max-w-3xl, bg-white, border-2 border-black, p-12, shadow-hard)" */}
        <article className="max-w-3xl mx-auto bg-white dark:bg-black border-2 border-black dark:border-crt-green p-4 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt transition-colors duration-300">
          {/* Header */}
          <header className="mb-8">
            <h1 className="font-mono font-bold text-2xl md:text-4xl text-black dark:text-crt-green mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-gray-600 dark:text-crt-green/70">
              <div className="flex flex-wrap items-center gap-4">
                <span className="uppercase tracking-wider">
                  Date: {article.date}
                </span>
                <span className="uppercase tracking-wider">
                  ID: {article.id}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-crt-dim border border-gray-200 dark:border-crt-green px-2 py-1 rounded-sm whitespace-nowrap"
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
            className={`prose ${fontSizes[fontSizeIdx]} max-w-none prose-headings:font-mono prose-p:font-serif
              text-justify break-words
              dark:prose-invert 
              dark:prose-headings:text-crt-green dark:prose-p:text-crt-green dark:prose-strong:text-crt-green dark:prose-li:text-crt-green
              dark:prose-code:text-crt-green dark:prose-code:bg-crt-dim
              dark:prose-img:border-crt-green dark:prose-img:shadow-none
              dark:prose-th:text-crt-green dark:prose-td:text-crt-green dark:prose-tr:border-crt-dim`}
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