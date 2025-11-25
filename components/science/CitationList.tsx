import React from "react";
import { Citation } from "../../types";

interface CitationListProps {
  citations: Citation[];
}

export const CitationList: React.FC<CitationListProps> = ({ citations }) => {
  if (!citations || citations.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t-2 border-black dark:border-crt-green">
      <h3 className="font-mono text-lg font-bold uppercase mb-6 text-black dark:text-crt-green">
        // REFERENCES
      </h3>
      <ul className="space-y-4 font-mono text-xs">
        {citations.map((cite) => (
          <li
            key={cite.id}
            className="flex gap-4 items-start text-gray-800 dark:text-crt-green/80"
          >
            <span className="shrink-0 font-bold select-none">[{cite.id}]</span>
            <div>
              <span className="font-bold">{cite.text}</span>
              {cite.source && (
                <span className="block mt-1 text-gray-500 dark:text-crt-green/60 italic">
                  Source: {cite.source}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
