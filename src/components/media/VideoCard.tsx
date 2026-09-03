import React, { useState } from 'react';
import { CuratedVideo } from '../../lib/types';
import { Tag, MessageSquareQuote, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

interface VideoCardProps {
  video: CuratedVideo;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col border-2 border-ink dark:border-white shadow-retro dark:shadow-retro-dark bg-gray-100 dark:bg-black h-fit transition-all duration-300">

      {/* Retro Window Title Bar */}
      <div className="bg-ink dark:bg-white text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none shrink-0">
        <span className="truncate max-w-[200px]">media_player.exe</span>
        <div className="flex gap-1">
            <div className="w-3 h-3 bg-paper dark:bg-black border border-gray-400"></div>
            <div className="w-3 h-3 bg-paper dark:bg-black border border-gray-400"></div>
            <div className="w-3 h-3 bg-accent dark:bg-black border border-gray-400"></div>
        </div>
      </div>

      {/* Video Area */}
      <div className="relative aspect-video w-full border-b-2 border-ink dark:border-white bg-black group shrink-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Meta Control Panel (Always Visible) */}
      <div className="p-3 bg-gray-200 dark:bg-gray-800/10 flex flex-col gap-3">

        {/* Basic Info */}
        <div>
            <h3 className="font-serif font-bold text-lg leading-tight text-ink dark:text-white mb-1 line-clamp-2">
              {video.title}
            </h3>
            <div className="flex items-center gap-2 text-xs font-mono text-pencil dark:text-gray-400">
              <Youtube size={12} />
              <span className="uppercase tracking-wide">{video.channelName}</span>
            </div>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center border-t border-gray-300 dark:border-white/30 pt-2">
            <span className="font-mono text-[10px] text-pencil dark:text-gray-500">
               ID: {video.id}
            </span>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 px-3 py-1 bg-white dark:bg-black border border-ink dark:border-white shadow-sm hover:translate-y-px active:shadow-none active:translate-y-1 transition-all font-mono text-xs font-bold uppercase text-ink dark:text-white group"
            >
                {isExpanded ? 'Close_Log' : 'Read_Notes'}
                {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} className="group-hover:translate-y-0.5 transition-transform" />}
            </button>
        </div>
      </div>

      {/* Expanded Data Log (Collapsible) */}
      {isExpanded && (
        <div className="border-t-2 border-ink dark:border-white bg-paper dark:bg-black p-4 animate-in slide-in-from-top-2 duration-200">

            {/* Curator Note */}
            <div className="flex gap-3 mb-4">
                <div className="shrink-0 w-1 bg-accent dark:bg-gray-300 self-stretch"></div>
                <div>
                    <div className="flex items-center gap-2 mb-1 font-mono text-[10px] uppercase text-accent dark:text-gray-300 font-bold">
                        <MessageSquareQuote size={12} /> Curator_Commentary
                    </div>
                    <p className="font-serif italic text-sm text-ink/90 dark:text-white/90 leading-relaxed">
                        "{video.commentary}"
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-dashed border-gray-300 dark:border-gray-700">
                {video.tags.map(tag => (
                    <span
                        key={tag}
                        className="flex items-center gap-1 text-[10px] font-mono uppercase bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-white/30 px-2 py-1 text-pencil dark:text-white rounded-sm"
                    >
                        <Tag size={10} />
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      )}

    </div>
  );
};