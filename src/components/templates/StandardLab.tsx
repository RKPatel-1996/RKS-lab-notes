import React, { useRef } from "react";
import { Article, AppContextType } from "../../lib/types";
import { FONT_SIZES } from "../../lib/constants";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { useCitationProcessor } from "../../hooks/useCitationProcessor";
import { useArticleDom } from "../../hooks/useArticleDom";
import { useHydration } from "../../hooks/useHydration";
import { ReferenceList } from "../science/ReferenceList";
import { AuthorBadge } from "../ui/AuthorBadge";
import { TableOfContents } from "../ui/TableOfContents";
import { useOutletContext, useNavigate } from "react-router-dom";
import { ARTICLES } from "../../content";

interface StandardLabProps {
  article: Article;
  onBack: () => void;
}

export const StandardLab: React.FC<StandardLabProps> = ({
  article,
  onBack,
}) => {
  const { fontSizeIdx } = useOutletContext<AppContextType>();
  const navigate = useNavigate();

  // 1. Process content
  const { processedHTML, references, citationMap } = useCitationProcessor(
    article.content,
    article.bibTexContent
  );

  const contentRef = useRef<HTMLDivElement>(null);

  // 2. Enhance DOM
  const { toc, isDomReady } = useArticleDom(contentRef, processedHTML);

  // 3. Hydrate interactives
  const hydratedContent = useHydration({ contentRef, isDomReady, citationMap });

  // 4. Navigation
  const currentIndex = ARTICLES.findIndex(a => a.id === article.id);
  const nextArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null; // Newer is earlier in array
  const prevArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null; // Older is later

  return (
    <div className="relative flex flex-col min-h-full bg-transparent">
      {/* Floating Back Button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-2 border-ink/20 dark:border-white/20 shadow-lg hover:scale-110 active:scale-95 transition-all text-ink dark:text-white"
        aria-label="Return to Index"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Main Content Area */}
      <div className="flex-1 p-2 md:p-12 pt-20 md:pt-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black border-2 border-black dark:border-white p-4 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-retro-dark transition-colors duration-300">

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-pencil dark:text-gray-400 mb-6 uppercase tracking-wider">
              <span className="font-bold text-ink dark:text-white">{article.id}</span>
              <span>//</span>
              <span>{article.date}</span>
              {article.readTime && (
                <>
                  <span>//</span>
                  <span>{article.readTime} read</span>
                </>
              )}
            </div>

            <h1 className="font-serif font-bold text-3xl md:text-5xl text-ink dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-2 py-1 rounded-sm text-ink dark:text-gray-300 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            <AuthorBadge author={article.author} />
          </header>

          <TableOfContents items={toc} />

          <div
            ref={contentRef}
            className={`prose ${FONT_SIZES[fontSizeIdx]} max-w-none
              text-justify break-words hyphens-auto

              /* Override prose styles for collapsible headers */
              prose-headings:font-mono prose-headings:mt-0 prose-headings:mb-4
              prose-p:font-serif

              dark:prose-invert
              dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-strong:text-white dark:prose-li:text-gray-300
              dark:prose-code:text-white dark:prose-code:bg-gray-800
              dark:prose-img:border-white dark:prose-img:shadow-none
              dark:prose-th:text-white dark:prose-td:text-gray-300 dark:prose-tr:border-gray-700`}
            dangerouslySetInnerHTML={{ __html: processedHTML }}
          />

          {/* Render Portals */}
          {hydratedContent}

          <ReferenceList
            references={references}
            manualCitations={article.citations}
          />

          <hr className="border-black dark:border-white border-2 my-12" />

          {/* Bottom Navigation */}
          <nav aria-label="Article navigation" className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm border-t border-b py-6 border-dashed border-gray-300 dark:border-gray-700 mb-16">
            <div>
              {prevArticle ? (
                <a
                  href={`/articles/${prevArticle.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/articles/${prevArticle.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="flex flex-col gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded text-left group"
                >
                  <span className="text-[10px] text-pencil dark:text-gray-500 uppercase flex items-center gap-1">
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Older
                  </span>
                  <span className="text-ink dark:text-white line-clamp-2">{prevArticle.title}</span>
                </a>
              ) : (
                <div className="flex flex-col gap-2 p-2 text-left opacity-50">
                  <span className="text-[10px] text-pencil dark:text-gray-500 uppercase flex items-center gap-1">
                    <ArrowLeft size={12} /> End of Archive
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                  window.scrollTo(0, 0);
                }}
                className="flex flex-col items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded group"
              >
                <span className="text-[10px] text-pencil dark:text-gray-500 uppercase">Index</span>
                <Home size={20} className="text-ink dark:text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="text-right">
              {nextArticle ? (
                <a
                  href={`/articles/${nextArticle.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/articles/${nextArticle.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="flex flex-col gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded items-end text-right group"
                >
                  <span className="text-[10px] text-pencil dark:text-gray-500 uppercase flex items-center gap-1">
                    Newer <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-ink dark:text-white line-clamp-2">{nextArticle.title}</span>
                </a>
              ) : (
                <div className="flex flex-col gap-2 p-2 text-right opacity-50 items-end">
                  <span className="text-[10px] text-pencil dark:text-gray-500 uppercase flex items-center gap-1">
                    Latest Entry <ArrowRight size={12} />
                  </span>
                </div>
              )}
            </div>
          </nav>

          <div className="text-center font-mono text-[10px] text-gray-400 dark:text-gray-600 select-none pb-8">
            *** END OF DOCUMENT ***
          </div>
        </div>
      </div>
    </div>
  );
};
