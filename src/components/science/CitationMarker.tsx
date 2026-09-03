import React from 'react';
import { BibTexEntry } from '../../lib/types';
import { ExternalLink } from 'lucide-react';

interface CitationMarkerProps {
  label: string; // e.g., "Lander et al., 2001"
  entry?: BibTexEntry;
  citationKey: string;
}

export const CitationMarker: React.FC<CitationMarkerProps> = ({ label, entry, citationKey }) => {
  const scrollToRef = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(`ref-${citationKey}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add a temporary highlight flash
      el.classList.add('bg-yellow-100', 'dark:bg-gray-800');
      setTimeout(() => el.classList.remove('bg-yellow-100', 'dark:bg-gray-800'), 2000);
    }
  };

  if (!entry) {
    return <span className="text-red-500 font-bold select-none cursor-not-allowed">[{citationKey}?]</span>;
  }

  return (
    <span className="group relative inline-block align-baseline ml-1">
      <button
        onClick={scrollToRef}
        className="text-base text-accent dark:text-gray-300 hover:underline select-none"
        aria-label={`Cite: ${label}`}
      >
        ({label})
      </button>

      {/* Tooltip Card */}
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 z-50 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white dark:bg-black border-2 border-ink dark:border-white shadow-retro dark:shadow-retro-dark p-3 text-left font-serif text-ink dark:text-white">

          {/* Metadata */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <p className="font-bold text-sm leading-tight mb-1">{entry.title}</p>
            <p className="font-mono text-[10px] text-pencil dark:text-gray-400 line-clamp-2">
              {entry.author}
            </p>
          </div>

          <div className="flex justify-between items-end">
            <div className="font-mono text-[10px] text-pencil dark:text-gray-400">
              {entry.journal} {entry.year}
            </div>

            {(entry.doi || entry.url) && (
              <a
                href={entry.doi ? `https://doi.org/${entry.doi}` : entry.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-mono text-[10px] bg-ink text-paper dark:bg-white dark:text-black px-2 py-1 hover:bg-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                SOURCE <ExternalLink size={8} />
              </a>
            )}
          </div>
        </div>

        {/* Triangle Pointer */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-ink dark:border-t-white"></div>
      </div>
    </span>
  );
};