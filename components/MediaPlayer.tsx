
import React from 'react';
import { VideoMedia } from '../types';
import { Play } from 'lucide-react';

interface MediaPlayerProps {
  video: VideoMedia;
}

export const MediaPlayer: React.FC<MediaPlayerProps> = ({ video }) => {
  return (
    <div className="bg-gray-200 dark:bg-crt-dim border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt w-full max-w-md mx-auto mb-8">
      {/* Title Bar */}
      <div className="bg-ink dark:bg-crt-green text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs">
        <span>media_player.exe - {video.title}</span>
        <div className="flex gap-1">
            <div className="w-3 h-3 bg-paper dark:bg-black border border-gray-400"></div>
            <div className="w-3 h-3 bg-paper dark:bg-black border border-gray-400"></div>
            <div className="w-3 h-3 bg-accent dark:bg-black border border-gray-400"></div>
        </div>
      </div>
      
      {/* Video Area */}
      <div className="relative aspect-video bg-black border-b-2 border-ink dark:border-crt-green">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Controls Area (Decorative) */}
      <div className="p-2 flex items-center gap-4 bg-gray-100 dark:bg-black">
        <button className="p-1 border-2 border-b-4 border-r-4 border-gray-400 dark:border-crt-green active:border-b-2 active:border-r-2 active:translate-y-[2px] bg-gray-200 dark:bg-crt-dim cursor-default">
            <Play size={12} className="dark:text-crt-green" />
        </button>
        
        {/* Scrubber */}
        <div className="flex-1 h-4 bg-white dark:bg-crt-dim border-2 border-gray-400 dark:border-crt-green relative">
            <div className="absolute top-0 left-0 bottom-0 w-0 bg-accent dark:bg-crt-green opacity-50"></div>
        </div>

        <div className="font-mono text-[10px] dark:text-crt-green">00:00 / {video.duration}</div>
      </div>
    </div>
  );
};
