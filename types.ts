export interface Citation {
  id: string;
  text: string;
  source: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string; // Markdown-ish content
  citations: Citation[];
  readTime: string;
  type: "manuscript" | "log" | "report";
  template?: "standard" | "custom";
}

export interface SortOption {
  id: "chronological" | "impact" | "subject";
  label: string;
}

export interface VideoMedia {
  id: string; // YouTube Video ID
  title: string;
  duration: string;
  date: string;
}
