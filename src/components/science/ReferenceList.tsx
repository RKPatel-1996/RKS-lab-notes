import React from 'react';
import { BibTexEntry, Citation } from '../../lib/types';
import { formatBibAuthors } from '../../lib/bibtex';
import { ExternalLink } from 'lucide-react';

interface ReferenceListProps {
  references: { label: string; entry: BibTexEntry }[];
  manualCitations?: Citation[];
}

export const ReferenceList: React.FC<ReferenceListProps> = ({ references, manualCitations }) => {
  // If neither BibTeX references nor manual citations exist, render nothing
  if (references.length === 0 && (!manualCitations || manualCitations.length === 0)) return null;

  return (
    <div className="mt-16 pt-8 border-t-2 border-ink dark:border-white">
      <h3 className="font-mono text-xl font-bold uppercase mb-6 text-ink dark:text-white flex items-center gap-2">
        REFERENCES {references.length > 0 ? '(APA 7)' : '(LEGACY)'}
      </h3>

      <ul className="space-y-6">
        {/* Render New BibTeX References */}
        {references.map(({ entry, label }) => {

            return (
              <li
                key={entry.citationKey}
                id={`ref-${entry.citationKey}`}
                className="pl-[2em] -indent-[2em] break-words text-sm font-serif text-ink dark:text-gray-300 leading-relaxed group hover:bg-gray-50 dark:hover:bg-gray-800/30 p-2 rounded transition-colors focus-within:ring-2 focus-within:ring-accent focus-within:outline-none"
                tabIndex={0}
              >
                <span className="font-mono font-bold mr-2 text-pencil dark:text-gray-400">[{label || entry.citationKey}]</span>

                {/* Author */}
                <span className="font-bold">{formatBibAuthors(entry.author)}</span>.

                {/* Year */}
                {entry.year && <span> ({entry.year}). </span>}

                {/* Title */}
                <span>{entry.title}. </span>

                {/* Journal/Source */}
                <span className="italic">
                  {entry.journal || entry.booktitle || entry.publisher}
                </span>

                {/* Volume/Issue/Pages */}
                {entry.volume && <span className="italic">, {entry.volume}</span>}
                {entry.issue && <span>({entry.issue})</span>}
                {entry.pages && <span>, {entry.pages}</span>}
                .

                {/* Links */}
                {entry.doi ? (
                    <a
                      href={`https://doi.org/${entry.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 ml-2 text-accent hover:text-ink hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded transition-colors"
                      title="Open DOI"
                    >
                      DOI <ExternalLink size={12} />
                    </a>
                ) : entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 ml-2 text-accent hover:text-ink hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded transition-colors"
                      title="Open URL"
                    >
                      URL <ExternalLink size={12} />
                    </a>
                ) : null}
              </li>
            );
        })}

        {/* Render Legacy Manual Citations (Fallback) */}
        {references.length === 0 && manualCitations?.map((cit) => (
           <li
              key={cit.id}
              id={`ref-${cit.id}`}
              className="pl-[2em] -indent-[2em] break-words text-sm font-serif text-ink dark:text-gray-300 leading-relaxed group hover:bg-gray-50 dark:hover:bg-gray-800/30 p-2 rounded transition-colors focus-within:ring-2 focus-within:ring-accent focus-within:outline-none"
              tabIndex={0}
           >
              <span className="font-mono font-bold mr-2 text-pencil dark:text-gray-400">[{cit.id}]</span>
              <span>{cit.text}</span>
              {cit.source && <span className="block indent-0 mt-1 italic text-xs opacity-70">Source: {cit.source}</span>}
           </li>
        ))}
      </ul>
    </div>
  );
};
