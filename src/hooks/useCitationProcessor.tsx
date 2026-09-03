
import { useMemo } from 'react';
import { parseBibTex, getSortKey, getApaInTextLabel } from '../lib/bibtex';
import { BibTexEntry } from '../lib/types';

interface CitationProcessResult {
  processedHTML: string;
  references: { label: string; entry: BibTexEntry }[];
  citationMap: Map<string, { label: string; entry: BibTexEntry }>;
}

export const useCitationProcessor = (
  htmlContent: string,
  bibTexString?: string
): CitationProcessResult => {

  return useMemo(() => {
    // 1. Process Math (Before citations to avoid collisions)
    // Replace $$...$$ with block math markers
    let processedHTML = htmlContent.replace(/\$\$([\s\S]*?)\$\$/g, (_match, tex) => {
        const cleanTex = tex.trim().replace(/"/g, '&quot;');
        return `<span class="science-math-marker" data-tex="${cleanTex}" data-display="true"></span>`;
    });

    // Replace \(...\) with inline math markers
    processedHTML = processedHTML.replace(/\\\(([\s\S]*?)\\\)/g, (_match, tex) => {
        const cleanTex = tex.trim().replace(/"/g, '&quot;');
        return `<span class="science-math-marker" data-tex="${cleanTex}" data-display="false"></span>`;
    });

    if (!bibTexString) {
      return {
        processedHTML,
        references: [],
        citationMap: new Map()
      };
    }

    // 2. Parse the BibTeX file
    const bibData = parseBibTex(bibTexString);

    // 3. Identify all citations used in the text
    // Regex matches @citationKey. We use alphanumeric, underscore, and dash characters for keys.
    const citationRegex = /@([a-zA-Z0-9_-]+)/g;
    const matches = Array.from(processedHTML.matchAll(citationRegex));
    const usedKeys = new Set<string>();

    matches.forEach(match => {
      const key = match[1];
      // Only treat it as a citation if the key exists in the bib file
      if (bibData[key]) {
        usedKeys.add(key);
      }
    });

    // 4. Create Reference List (Sorted Alphabetically for APA)
    const references = Array.from(usedKeys)
      .map(key => {
        const entry = bibData[key];
        return {
          entry,
          sortKey: getSortKey(entry),
          label: getApaInTextLabel(entry)
        };
      })
      .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
      .map(({ entry, label }) => ({ entry, label }));

    // 5. Map for easy lookup during hydration
    const citationMap = new Map<string, { label: string; entry: BibTexEntry }>();
    references.forEach(ref => citationMap.set(ref.entry.citationKey, ref));

    // 6. Generate Final HTML with Citation Mount Points
    processedHTML = processedHTML.replace(citationRegex, (match, key) => {
      if (bibData[key]) {
        return `<span class="citation-mount-point" data-key="${key}"></span>`;
      }
      return match; // Return original text (e.g. "@username") if key not found in BibTeX
    });

    return { processedHTML, references, citationMap };

  }, [htmlContent, bibTexString]);
};