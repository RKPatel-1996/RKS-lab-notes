import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { CreatorSpotlight } from '../components/media/CreatorSpotlight';
import { VideoCard } from '../components/media/VideoCard';
import { MY_LATEST_VIDEO, CURATED_LIBRARY } from '../content/videoLibrary';

export const MediaLogs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Media Logs | RKs-LAB-NOTES";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', "Curated Media & Video Logs - RK Patel");
  }, []);

  // Extract unique tags for the filter bar
  const allTags = Array.from(new Set(CURATED_LIBRARY.flatMap(video => video.tags)));

  // Filter Logic: Search (Deep) + Tag (Exclusive)
  const filteredVideos = useMemo(() => {
    return CURATED_LIBRARY.filter(video => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        video.title.toLowerCase().includes(query) ||
        video.channelName.toLowerCase().includes(query) ||
        video.commentary.toLowerCase().includes(query) || // Deep search!
        video.tags.some(t => t.toLowerCase().includes(query));

      const matchesTag = activeTag ? video.tags.includes(activeTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="min-h-full p-4 md:p-12 max-w-7xl mx-auto">

      {/* ZONE A: Spotlight */}
      <CreatorSpotlight heroVideo={MY_LATEST_VIDEO} />

      {/* ZONE B: The Vault */}
      <section>
        <div className="flex items-center gap-3 mb-8">
            <div className="w-4 h-4 bg-accent dark:bg-gray-300 rotate-45"></div>
            <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-ink dark:text-white">
            Zone_B: Curated_Vault
            </h2>
        </div>

        {/* Control Bar */}
        <div className="bg-gray-100 dark:bg-gray-800/20 border-2 border-ink dark:border-white p-4 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">

                {/* Search Input */}
                <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-pencil dark:text-gray-500">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search titles, channels, or my notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-white/30 text-ink dark:text-white font-mono text-sm focus:outline-none focus:border-accent dark:focus:border-gray-300 transition-colors"
                    />
                </div>

                {/* Tag Filters */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    <Filter size={18} className="text-pencil dark:text-gray-500 shrink-0" />
                    <div className="flex gap-2">
                        {activeTag && (
                            <button
                                onClick={() => setActiveTag(null)}
                                className="flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800 text-xs font-mono uppercase font-bold rounded-sm whitespace-nowrap hover:bg-red-200 transition-colors"
                            >
                                <X size={12} /> Clear
                            </button>
                        )}
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                                className={`px-3 py-1 border text-xs font-mono uppercase rounded-sm whitespace-nowrap transition-colors
                                    ${activeTag === tag
                                        ? 'bg-ink text-white border-ink dark:bg-white dark:text-black dark:border-white'
                                        : 'bg-white dark:bg-black text-pencil dark:text-gray-400 border-gray-300 dark:border-white/30 hover:border-ink dark:hover:border-white'
                                    }`}
                            >
                                #{tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.length > 0 ? (
                filteredVideos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))
            ) : (
                <div className="col-span-full py-12 text-center border-2 border-dashed border-gray-300 dark:border-gray-700">
                    <p className="font-mono text-pencil dark:text-gray-500">
                        No records match query "{searchQuery}" with filter [{activeTag || 'ALL'}].
                    </p>
                    <button
                        onClick={() => { setSearchQuery(''); setActiveTag(null); }}
                        className="mt-4 text-accent dark:text-gray-300 font-mono text-sm hover:underline"
                    >
                        RESET_SEARCH_PARAMETERS
                    </button>
                </div>
            )}
        </div>

      </section>
    </div>
  );
};