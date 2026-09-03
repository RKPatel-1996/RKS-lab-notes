import { useState, useLayoutEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import React from 'react';

// Component Imports
import { CitationMarker } from '../components/science/CitationMarker';
import { ScientificFigure } from '../components/science/ScientificFigure';
import { ScientificTable } from '../components/science/ScientificTable';
import { ScientificMath } from '../components/science/ScientificMath';
import { BibTexEntry } from '../lib/types';

interface UseHydrationProps {
  contentRef: React.RefObject<HTMLElement>;
  isDomReady: boolean;
  citationMap: Map<string, { label: string; entry: BibTexEntry }>;
}

export const useHydration = ({ contentRef, isDomReady, citationMap }: UseHydrationProps) => {
  const [portals, setPortals] = useState<ReactNode[]>([]);

  useLayoutEffect(() => {
    if (!contentRef.current || !isDomReady) return;

    const newPortals: ReactNode[] = [];

    // 1. Hydrate Citations
    const citationPoints = contentRef.current.querySelectorAll('.citation-mount-point');
    citationPoints.forEach((el, index) => {
      const key = el.getAttribute('data-key');
      const data = key ? citationMap.get(key) : null;

      if (key && data) {
        newPortals.push(
          createPortal(
            React.createElement(CitationMarker, {
              label: data.label,
              entry: data.entry,
              citationKey: key
            }),
            el,
            `citation-${key}-${index}`
          )
        );
      }
    });

    // 2. Hydrate Scientific Figures
    const figures = contentRef.current.querySelectorAll('.science-figure-marker');
    figures.forEach((el, index) => {
        const src = el.getAttribute('data-src') || '';
        const alt = el.getAttribute('data-alt') || '';
        const caption = el.getAttribute('data-caption') || '';
        const id = el.getAttribute('data-id') || undefined;
        const cleanSrc = el.getAttribute('data-clean-src') || undefined;

        if (src) {
            newPortals.push(
              createPortal(
                React.createElement(ScientificFigure, {
                  src,
                  alt,
                  caption,
                  id,
                  cleanSrc
                }),
                el,
                `figure-${index}`
              )
            );
        }
    });

    // 3. Hydrate Scientific Tables
    const tables = contentRef.current.querySelectorAll('.science-table-marker');
    tables.forEach((el, index) => {
        try {
            const id = el.getAttribute('data-id') || 'tbl';
            const headersRaw = el.getAttribute('data-headers');
            const rowsRaw = el.getAttribute('data-rows');
            const caption = el.getAttribute('data-caption') || undefined;

            if (headersRaw && rowsRaw) {
                const initialHeaders = JSON.parse(headersRaw);
                const initialData = JSON.parse(rowsRaw);

                newPortals.push(
                  createPortal(
                    React.createElement(ScientificTable, {
                      id,
                      initialHeaders,
                      initialData,
                      caption
                    }),
                    el,
                    `table-${id}-${index}`
                  )
                );
            }
        } catch (e) {
            console.error("Failed to hydrate table", e);
        }
    });

    // 4. Hydrate Mathematical Formulas
    const mathPoints = contentRef.current.querySelectorAll('.science-math-marker');
    mathPoints.forEach((el, index) => {
        const tex = el.getAttribute('data-tex');
        const isBlock = el.getAttribute('data-display') === 'true';

        if (tex) {
            newPortals.push(
                createPortal(
                    React.createElement(ScientificMath, {
                        tex,
                        block: isBlock
                    }),
                    el,
                    `math-${index}`
                )
            );
        }
    });

    setPortals(newPortals);

  }, [isDomReady, citationMap, contentRef]);

  return portals;
};