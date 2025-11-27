import React from 'react';
import { MediaPlayer } from '../components/MediaPlayer';
import { VIDEOS } from '../src/lib/constants';

export const MediaLogs: React.FC = () => {
  return (
    <div className="p-8 h-full min-h-full">
        <h2 className="font-serif text-3xl font-bold border-b-4 border-ink dark:border-crt-green inline-block pb-2 mb-8 dark:text-crt-green">
            Media_Logs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map(video => (
                <div key={video.id}>
                    <MediaPlayer video={video} />
                    <div className="flex justify-between items-center mt-2 font-mono text-xs text-pencil dark:text-crt-green/70">
                        <span>ID: {video.id}</span>
                        <span>DATE: {video.date}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};