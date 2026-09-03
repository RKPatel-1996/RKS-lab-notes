import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface ScientificMathProps {
  tex: string;
  block?: boolean;
}

export const ScientificMath: React.FC<ScientificMathProps> = ({ tex, block = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(tex, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          output: 'html', // Use HTML output for better accessibility and style control
        });
      } catch (e) {
        console.error("KaTeX Render Error:", e);
        containerRef.current.innerText = tex;
      }
    }
  }, [tex, block]);

  if (block) {
    return (
      <div className="my-6 w-full overflow-x-auto overflow-y-hidden text-center py-4 bg-gray-50 dark:bg-gray-800/10 border-y border-dashed border-gray-300 dark:border-gray-700/50">
        <span
            ref={containerRef}
            className="text-ink dark:text-white selection:bg-accent selection:text-white"
        />
      </div>
    );
  }

  return (
    <span
        ref={containerRef}
        className="mx-1 text-ink dark:text-white font-medium"
    />
  );
};