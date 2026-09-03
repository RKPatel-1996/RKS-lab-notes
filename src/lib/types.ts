export interface BibTexEntry {
  citationKey: string;
  entryType: string;
  title?: string;
  author?: string;
  year?: string;
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  booktitle?: string;
  publisher?: string;
}

export interface Citation {
  id: string;
  text: string;
  source?: string;
}

export interface Author {
  name: string;
  role?: string;
  avatar?: string; // URL to image
  affiliation?: string;
}

export interface ArticleMeta {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTime: string;
  type: "manuscript" | "log" | "report";
  template?: "standard" | "custom";
  author?: Author; // Optional author metadata
  modulePath?: string; // Generated module path
}

export interface Article extends ArticleMeta {
  content: string; // Markdown-ish HTML content with [[citationKey]] markers
  bibTexContent?: string; // Raw BibTeX string
  citations?: Citation[];
}

export interface VideoMedia {
  id: string; // YouTube Video ID
  title: string;
  duration: string;
  date: string;
}

export interface CuratedVideo {
  id: string; // YouTube ID
  title: string;
  channelName: string;
  thumbnail?: string; // Optional, can derive from ID
  tags: string[];
  commentary: string;
  dateAdded: string;
}

export interface AppContextType {
  fontSizeIdx: number;
  setFontSizeIdx: (idx: number) => void;
}