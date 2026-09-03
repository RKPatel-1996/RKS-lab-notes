import React from 'react';
import { CuratedVideo } from '../../lib/types';
import { Radio, ExternalLink } from 'lucide-react';

interface CreatorSpotlightProps {
  heroVideo: CuratedVideo;
}

export const CreatorSpotlight: React.FC<CreatorSpotlightProps> = ({ heroVideo }) => {
  return (
    <div className="mb-12">
      {/* Section Header - Streamlined */}
      <div className="flex items-center gap-2 mb-4 opacity-80">
        <Radio size={16} className="text-red-600 dark:text-gray-300 animate-pulse" />
        <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-ink dark:text-white">
          Zone_A: Transmission_Source
        </h2>
        <div className="h-px bg-ink/20 dark:bg-white/20 flex-1 ml-2"></div>
      </div>

      {/* Hero Player Window */}
      <div className="border-2 border-ink dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-retro-dark bg-gray-100 dark:bg-black max-w-4xl mx-auto">

        {/* Retro Window Title Bar */}
        <div className="bg-ink dark:bg-white text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none">
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>broadcast_deck.exe - [MAIN_FEED]</span>
           </div>
           <div className="flex gap-1">
              <div className="w-3 h-3 bg-paper dark:bg-black border border-gray-400"></div>
              <div className="w-3 h-3 bg-paper dark:bg-black border border-gray-400"></div>
           </div>
        </div>

        {/* Video Screen */}
        <div className="relative aspect-video w-full bg-black border-b-2 border-ink dark:border-white">
             <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${heroVideo.id}`}
                title={heroVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
        </div>

        {/* Control Deck (Meta Info) */}
        <div className="p-4 bg-gray-200 dark:bg-gray-800/10">
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="flex-1">
                    <div className="font-mono text-[10px] text-accent dark:text-gray-300 mb-1 uppercase font-bold flex items-center gap-2">
                        <span>Latest_Upload</span>
                        <span className="opacity-50">//</span>
                        <span>{heroVideo.dateAdded}</span>
                    </div>
                    <h1 className="font-serif text-xl md:text-2xl font-bold leading-tight text-ink dark:text-white mb-2">
                        {heroVideo.title}
                    </h1>
                    <div className="font-serif italic text-sm text-pencil dark:text-gray-300 border-l-2 border-ink dark:border-white pl-3 py-1">
                        {heroVideo.commentary}
                    </div>
                </div>

                <div className="shrink-0 pt-1">
                    <button className="flex items-center gap-2 px-4 py-2 bg-ink dark:bg-white text-paper dark:text-black font-mono text-xs font-bold uppercase hover:translate-y-px hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all border border-transparent">
                        <span>Visit_Channel</span>
                        <ExternalLink size={12} />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};