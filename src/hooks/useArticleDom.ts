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

    // --- STEP 2: Code Blocks & Copy Button Usability ---
    const codeBlocks = Array.from(container.querySelectorAll('pre')) as HTMLElement[];
    codeBlocks.forEach((pre) => {
      // Avoid duplicate wrapping if already processed
      if (pre.parentElement?.classList.contains('code-block-wrapper')) {
        return;
      }

      const codeEl = pre.querySelector('code') || pre;
      const rawText = (codeEl.textContent || '').trim();
      const isMultiLine = rawText.includes('\n');

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper relative my-6';

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Add COPY button to multi-line code blocks
      if (isMultiLine) {
        const copyBtn = document.createElement('button');
        copyBtn.type = 'button';
        copyBtn.className = 'code-copy-btn';
        copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
        copyBtn.setAttribute('title', 'Copy code');
        copyBtn.innerHTML = '<span class="copy-label">COPY</span>';

        copyBtn.addEventListener('click', async (e) => {
          e.preventDefault();
          e.stopPropagation();

          const textToCopy = codeEl.textContent || '';
          let success = false;

          if (navigator.clipboard && window.isSecureContext) {
            try {
              await navigator.clipboard.writeText(textToCopy);
              success = true;
            } catch (err) {
              console.warn('navigator.clipboard failed, attempting fallback...', err);
            }
          }

          if (!success) {
            try {
              const textarea = document.createElement('textarea');
              textarea.value = textToCopy;
              textarea.style.position = 'fixed';
              textarea.style.left = '-9999px';
              textarea.style.top = '-9999px';
              textarea.setAttribute('readonly', '');
              document.body.appendChild(textarea);
              textarea.select();
              document.execCommand('copy');
              document.body.removeChild(textarea);
              success = true;
            } catch (err) {
              console.error('Copy fallback failed: ', err);
            }
          }

          if (success) {
            copyBtn.classList.add('copied');
            const label = copyBtn.querySelector('.copy-label');
            if (label) label.textContent = 'COPIED';

            setTimeout(() => {
              copyBtn.classList.remove('copied');
              if (label) label.textContent = 'COPY';
            }, 2000);
          }
        });

        wrapper.appendChild(copyBtn);
      }
    });

    // --- STEP 3: Responsive Table Wrapping ---
    const rawTables = Array.from(container.querySelectorAll('table')) as HTMLElement[];
    rawTables.forEach((table) => {
      if (!table.parentElement?.classList.contains('table-scroll-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll-wrapper w-full overflow-x-auto my-6';
        table.parentNode?.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    setToc(newToc);
    setIsDomReady(true);

  }, [htmlContent, contentRef]);

  return { toc, isDomReady };
};