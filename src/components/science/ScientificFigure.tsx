import React, { useState } from 'react';
import { Download, Eye, EyeOff } from 'lucide-react';

interface ScientificFigureProps {
  src: string;
  alt?: string;
  caption?: string;
  id?: string;
  cleanSrc?: string; // Optional URL for "unannotated" version
}

export const ScientificFigure: React.FC<ScientificFigureProps> = ({ 
  src, 
  alt, 
  caption, 
  id,
  cleanSrc 
}) => {
  const [showAnnotations, setShowAnnotations] = useState(true);
  
  const activeSrc = (!showAnnotations && cleanSrc) ? cleanSrc : src;

  return (
    <div className="print-scientific-figure my-8 border-2 border-ink dark:border-white bg-white dark:bg-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#ffffff]">
      
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between mb-2 p-2 bg-gray-100 dark:bg-gray-800/20 border-b border-gray-200 dark:border-gray-700">
        
        {/* Figure ID */}
        <div className="font-mono text-xs font-bold text-ink dark:text-white uppercase">
          {id || 'FIGURE'}
        </div>

        {/* Data/Layer Controls */}
        <div className="flex items-center gap-2">
            {cleanSrc && (
                <button 
                    onClick={() => setShowAnnotations(!showAnnotations)}
                    className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-gray-300 dark:border-gray-600 rounded hover:bg-white dark:hover:bg-gray-700 text-ink dark:text-white"
                    title="Toggle Annotations"
                >
                    {showAnnotations ? <Eye size={12} /> : <EyeOff size={12} />}
                    <span className="hidden sm:inline">Layers</span>
                </button>
            )}
            <a 
                href={src} 
                download 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-gray-300 dark:border-gray-600 rounded hover:bg-white dark:hover:bg-gray-700 text-ink dark:text-white"
                title="Download Original"
            >
                <Download size={12} />
                <span className="hidden sm:inline">RAW</span>
            </a>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden bg-white dark:bg-black flex justify-center items-center min-h-[200px]">
        <img 
            src={activeSrc} 
            alt={alt || (caption ? caption.replace(/<[^>]*>?/gm, '') : "Scientific Figure")}
            className="max-w-full h-auto object-contain transition-all duration-200"
        />
      </div>

      {/* Caption */}
      {caption && (
        <div className="mt-0 p-3 bg-paper dark:bg-black border-t border-gray-200 dark:border-gray-700">
            <figcaption className="font-serif text-sm text-gray-800 dark:text-gray-300">
                <span dangerouslySetInnerHTML={{ __html: caption }} />
            </figcaption>
        </div>
      )}
    </div>
  );
};
