// Manually declared type definitions for Vite Client
// Replaces broken reference to 'vite/client'

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.ico' {
  const content: string;
  export default content;
}

declare module '*.bmp' {
  const content: string;
  export default content;
}

declare module '*.avif' {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  [key: string]: any;
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;
}

interface ImportMeta {
  url: string;
  readonly env: ImportMetaEnv;

  glob(
    pattern: string,
    options?: {
      as?: string;
      eager?: boolean;
      import?: string;
      query?: string | Record<string, string | number | boolean>;
    }
  ): Record<string, any>;

  globEager(pattern: string): Record<string, any>;
}
