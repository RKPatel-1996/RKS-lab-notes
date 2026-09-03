import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ARTICLES } from '../content/index';
import { ArticleRow } from '../components/ui/ArticleRow';
import { Search, X } from 'lucide-react';

const KNOWN_SUBJECTS = ["Bioinformatics", "Pharmacology", "Microbiology", "Chemistry"];

export const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL state
  const queryParam = searchParams.get('q') || '';
  const topicParam = searchParams.get('topic') || 'ALL';

  const [searchQuery, setSearchQuery] = useState(queryParam);

  // Sync internal state with URL param on load
  useEffect(() => {
    setSearchQuery(queryParam);
  }, [queryParam]);

  useEffect(() => {
    document.title = "Index Registry | RKs-LAB-NOTES";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Digital Laboratory Notebook / Archives");
    }
  }, []);

  // Update URL params
  const updateParams = (newTopic: string, newQuery: string) => {
    const params = new URLSearchParams();
    if (newTopic && newTopic !== 'ALL') params.set('topic', newTopic);
    if (newQuery) params.set('q', newQuery);
    setSearchParams(params);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    updateParams(topicParam, newQuery);
  };

  const handleTopicSelect = (topic: string) => {
    updateParams(topic, searchQuery);
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSearchParams(new URLSearchParams());
  };

  // Determine which subjects have actual articles
  const activeSubjects = KNOWN_SUBJECTS.filter(subject =>
      ARTICLES.some(article =>
          article.title.toLowerCase().includes(subject.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(subject.toLowerCase())) ||
          (article.excerpt ? article.excerpt.toLowerCase().includes(subject.toLowerCase()) : false)
      )
  );

  // Filter articles
  const filteredArticles = ARTICLES.filter(article => {
    // 1. Topic Match
    let matchesTopic = true;
    if (topicParam !== 'ALL') {
      matchesTopic =
        article.title.toLowerCase().includes(topicParam.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(topicParam.toLowerCase())) ||
        (article.excerpt ? article.excerpt.toLowerCase().includes(topicParam.toLowerCase()) : false);
    }

    // 2. Query Match (Title, Tags, Excerpt, ID)
    let matchesQuery = true;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      matchesQuery =
        article.title.toLowerCase().includes(q) ||
        article.id.toLowerCase().includes(q) ||
        article.tags.some(tag => tag.toLowerCase().includes(q)) ||
        (article.excerpt ? article.excerpt.toLowerCase().includes(q) : false);
    }

    return matchesTopic && matchesQuery;
  });

  return (
    <div className="min-h-full p-4 md:p-12 max-w-6xl mx-auto">

      {/* Header */}
      <header className="mb-12 border-b-4 border-ink dark:border-white pb-4">
        <h1 className="font-mono text-xl md:text-3xl font-bold tracking-tighter uppercase text-ink dark:text-white">
          INDEX_REGISTRY // ARCHIVES
        </h1>
        <p className="font-mono text-xs text-pencil dark:text-gray-500 mt-2">
          Scientific and computational notes...
        </p>
      </header>

      {/* Discovery Layer */}
      <div className="mb-12">
        {/* Search */}
        <div className="relative max-w-2xl mb-6">
          <div className="flex items-center gap-4 text-ink dark:text-white font-mono text-lg border-b-2 border-transparent focus-within:border-ink dark:focus-within:border-white transition-colors pb-2">
              <span className="animate-pulse">
                  <Search size={20} />
              </span>
              <span className="text-pencil dark:text-gray-500 select-none">{'>'}</span>
              <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="SEARCH..."
                  className="bg-transparent border-none outline-none w-full placeholder-gray-400 dark:placeholder-gray-600 uppercase"
                  autoFocus
              />
          </div>
        </div>

        {/* Subjects */}
        <div className="flex flex-wrap gap-4 font-mono text-sm">
           <button
             onClick={() => handleTopicSelect('ALL')}
             className={`uppercase transition-colors focus:outline-none ${topicParam === 'ALL' ? 'font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white' : 'text-pencil dark:text-gray-500 hover:text-ink dark:hover:text-white'}`}
           >
             [ ALL ]
           </button>
           {activeSubjects.map(subject => (
             <button
               key={subject}
               onClick={() => handleTopicSelect(subject)}
               className={`uppercase transition-colors focus:outline-none ${topicParam === subject ? 'font-bold text-ink dark:text-white border-b-2 border-ink dark:border-white' : 'text-pencil dark:text-gray-500 hover:text-ink dark:hover:text-white'}`}
             >
               [ {subject} ]
             </button>
           ))}
        </div>
      </div>

      {/* Article List */}
      <div className="border-t-2 border-ink dark:border-white border-dashed">
        {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link key={article.id} to={`/articles/${article.id}`} className="block focus:outline-none focus:ring-2 focus:ring-accent">
                  <ArticleRow article={article} />
              </Link>
            ))
        ) : (
            <div className="py-16 text-center font-mono border-b-2 border-ink dark:border-white">
                <p className="text-pencil dark:text-gray-400 mb-4">ERROR: NO RECORDS FOUND</p>
                <button
                  onClick={resetSearch}
                  className="inline-flex items-center gap-2 text-xs uppercase border border-ink dark:border-white px-4 py-2 hover:bg-ink hover:text-paper dark:hover:bg-white dark:hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <X size={14} /> Reset Filters
                </button>
            </div>
        )}
      </div>

      {/* Footer Stat */}
      <div className="mt-8 font-mono text-xs text-right text-pencil dark:text-gray-500">
        Total_Records: {ARTICLES.length} // Visible: {filteredArticles.length}
      </div>
    </div>
  );
};
