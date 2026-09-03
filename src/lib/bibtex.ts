
import { BibTexEntry } from "./types";

// ============================================================================
// == SECTION 1: PARSING LOGIC (ROBUST)
// ============================================================================

/**
 * A robust BibTeX parser that uses a character scanner instead of Regex.
 * This handles nested braces and unquoted values correctly.
 */
export const parseBibTex = (raw: string): Record<string, BibTexEntry> => {
  const entries: Record<string, BibTexEntry> = {};
  if (!raw) return entries;

  // Normalize line endings to simple \n
  const text = raw.replace(/\r\n/g, '\n');

  let pos = 0;

  while (pos < text.length) {
    // 1. Find the start of an entry '@'
    const atIndex = text.indexOf('@', pos);
    if (atIndex === -1) break; // No more entries

    // 2. Read the Entry Type (e.g., 'article')
    // We look for the opening brace '{'
    const braceOpenIndex = text.indexOf('{', atIndex);
    if (braceOpenIndex === -1) break; // Malformed

    const type = text.substring(atIndex + 1, braceOpenIndex).trim().toLowerCase();

    // 3. Read the Citation Key
    // Key is between the first '{' and the first ','
    const firstCommaIndex = text.indexOf(',', braceOpenIndex);
    if (firstCommaIndex === -1) {
        // Edge case: Maybe entry has no fields? Unlikely but skip.
        pos = braceOpenIndex + 1;
        continue;
    }

    const key = text.substring(braceOpenIndex + 1, firstCommaIndex).trim();

    // 4. Parse Fields
    // We start scanning after the comma following the key
    let currentPos = firstCommaIndex + 1;
    let entryEnded = false;

    const fields: any = {};

    while (!entryEnded && currentPos < text.length) {
      // Skip whitespace/newlines
      while (currentPos < text.length && /\s/.test(text[currentPos])) {
        currentPos++;
      }

      // Check if we hit the closing brace of the ENTRY
      if (text[currentPos] === '}') {
        entryEnded = true;
        pos = currentPos + 1;
        break;
      }

      // Parse Field Name (read until '=')
      const eqIndex = text.indexOf('=', currentPos);
      if (eqIndex === -1) {
          // Safety net: broken file
          entryEnded = true;
          break;
      }

      // Safety: check if we hit a '}' before the '='. This implies we missed the end of entry previously.
      const nextCloseBrace = text.indexOf('}', currentPos);
      if (nextCloseBrace !== -1 && nextCloseBrace < eqIndex) {
         entryEnded = true;
         pos = nextCloseBrace + 1;
         break;
      }

      const fieldName = text.substring(currentPos, eqIndex).trim().toLowerCase();
      currentPos = eqIndex + 1; // Move past '='

      // Skip whitespace after '='
      while (currentPos < text.length && /\s/.test(text[currentPos])) {
        currentPos++;
      }

      // Parse Value based on delimiter
      let value = "";
      const startChar = text[currentPos];

      if (startChar === '{') {
        // Braced value: This needs to handle NESTED braces
        let braceDepth = 0;
        const valStart = currentPos + 1;
        let foundEnd = false;

        for (let i = currentPos; i < text.length; i++) {
          if (text[i] === '{') braceDepth++;
          if (text[i] === '}') braceDepth--;

          if (braceDepth === 0) {
            value = text.substring(valStart, i); // Capture inside outer braces
            currentPos = i + 1;
            foundEnd = true;
            break;
          }
        }
        if (!foundEnd) { entryEnded = true; break; } // Unbalanced braces, abort entry

      } else if (startChar === '"') {
        // Quoted value
        // Simple scanner looking for closing quote.
        const closeQuote = text.indexOf('"', currentPos + 1);
        if (closeQuote !== -1) {
            value = text.substring(currentPos + 1, closeQuote);
            currentPos = closeQuote + 1;
        } else {
            entryEnded = true; break;
        }
      } else {
        // Unquoted value (Numbers or Macros like 'jul')
        // Read until ',' or '}' (end of entry)
        let endVal = currentPos;
        while (endVal < text.length && text[endVal] !== ',' && text[endVal] !== '}') {
            endVal++;
        }
        value = text.substring(currentPos, endVal).trim();
        currentPos = endVal;
      }

      // Clean up the value
      value = value.replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
      fields[fieldName] = value;

      // Consume trailing comma if present
      while (currentPos < text.length && /\s/.test(text[currentPos])) currentPos++;
      if (text[currentPos] === ',') currentPos++;
    }

    entries[key] = {
        citationKey: key,
        entryType: type,
        ...fields
    };

    // Safety: Ensure we advance pos even if logic failed slightly, to avoid infinite loop
    if (pos <= atIndex) pos = atIndex + 1;
  }

  return entries;
};

// ============================================================================
// == SECTION 2: FORMATTING HELPERS
// ============================================================================

/**
 * Parses a BibTeX author string into a list of names.
 * Handles "Last, First", "First Last" and "{Corporate Name}" formats.
 */
const parseAuthors = (authorString?: string): string[] => {
  if (!authorString) return ["Unknown"];

  // BibTeX authors are separated by " and "
  const authors = authorString.split(' and ');

  return authors.map(name => {
    let trimmed = name.trim();

    // Safety net: Remove outer braces if it's a corporate author like {The Galaxy Team}
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
        trimmed = trimmed.substring(1, trimmed.length - 1);
    }

    if (trimmed.includes(',')) {
      // "Lander, Eric S." -> "Lander"
      return trimmed.split(',')[0].trim();
    } else {
      // "Eric S. Lander" -> "Lander"
      const parts = trimmed.split(' ');
      return parts[parts.length - 1];
    }
  });
};

/**
 * Formats the full author string for the Bibliography.
 * If > 5 authors: "Auth1, Auth2, Auth3, ... AuthLast"
 */
export const formatBibAuthors = (authorString?: string): string => {
  if (!authorString) return "Unknown Author";

  // BibTeX authors are separated by " and "
  const authorsRaw = authorString.split(' and ');

  // Clean up each author name (remove brackets, trim)
  const authors = authorsRaw.map(name => {
    let trimmed = name.trim();
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
        trimmed = trimmed.substring(1, trimmed.length - 1);
    }
    return trimmed;
  });

  // If 5 or fewer, list them all joined by commas
  if (authors.length <= 5) {
    return authors.join(', ');
  }

  // If more than 5: First 3, ..., Last
  const firstThree = authors.slice(0, 3).join(', ');
  const lastAuthor = authors[authors.length - 1];

  return `${firstThree}, ... ${lastAuthor}`;
};

/**
 * Generates an APA 7 in-text citation label.
 * Rules:
 * 1 author: (Smith, 2020)
 * 2 authors: (Smith & Jones, 2020)
 * 3+ authors: (Smith et al., 2020)
 */
export const getApaInTextLabel = (entry: BibTexEntry): string => {
  const authors = parseAuthors(entry.author);
  const year = entry.year || "n.d.";

  let authorText = "";
  if (authors.length === 1) {
    authorText = authors[0];
  } else if (authors.length === 2) {
    authorText = `${authors[0]} & ${authors[1]}`;
  } else {
    authorText = `${authors[0]} et al.`;
  }

  return `${authorText}, ${year}`;
};

/**
 * Helper to get the sorting key for the bibliography (First Author + Year)
 */
export const getSortKey = (entry: BibTexEntry): string => {
  const authors = parseAuthors(entry.author);
  const year = entry.year || "0000";
  return `${authors[0].toLowerCase()}_${year}`;
};
