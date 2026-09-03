import { useState, useLayoutEffect, RefObject } from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const useArticleDom = (contentRef: RefObject<HTMLElement>, htmlContent: string) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [isDomReady, setIsDomReady] = useState(false);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const container = contentRef.current;

    // --- PRE-PROCESSING: Convert Raw HTML Elements to Mount Points ---
    // This runs on the raw string before we even touch the DOM really,
    // but since we are using dangerouslySetInnerHTML, the elements exist now.
    // We will transform them in place.

    // 1. Transform <figure class="science-figure"> -> <div class="science-figure-marker">
    const rawFigures = Array.from(container.querySelectorAll('figure.science-figure')) as HTMLElement[];
    rawFigures.forEach(fig => {
        const img = fig.querySelector('img');
        const cap = fig.querySelector('figcaption');

        if (img) {
            const marker = document.createElement('div');
            marker.className = 'science-figure-marker';
            marker.setAttribute('data-src', img.getAttribute('src') || '');
            marker.setAttribute('data-alt', img.getAttribute('alt') || '');
            marker.setAttribute('data-id', fig.getAttribute('data-id') || '');
            marker.setAttribute('data-clean-src', fig.getAttribute('data-clean-src') || '');
            if (cap) {
                marker.setAttribute('data-caption', cap.innerHTML);
            }

            fig.replaceWith(marker);
        }
    });

    // --- STEP 1: Generate IDs, TOC Data ---
    const headers = Array.from(container.querySelectorAll('h1, h2, h3')) as HTMLElement[];
    const newToc: TocItem[] = [];

    headers.forEach((header, index) => {
       const text = header.textContent || `Section ${index + 1}`;
       const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
       const uniqueId = `sec-${index}-${slug}`;

       header.id = uniqueId;
       header.classList.add('scroll-mt-24');

       newToc.push({
         id: uniqueId,
         text: text,
         level: parseInt(header.tagName[1])
       });
    });

    setToc(newToc);
    setIsDomReady(true);

  }, [htmlContent, contentRef]);

  return { toc, isDomReady };
};