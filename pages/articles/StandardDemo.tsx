import React from 'react';

export const StandardDemo: React.FC = () => {
  return (
    <div className="min-h-full p-8 md:p-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-black dark:border dark:border-crt-dim shadow-paper dark:shadow-crt p-12 relative">
        
        <header className="border-b-4 border-ink dark:border-crt-green mb-8 pb-4">
            <div className="flex justify-between font-mono text-xs mb-2 text-pencil dark:text-crt-green/60 uppercase">
                <span>DEMO-001</span>
                <span>2025-11-30</span>
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight mb-4 text-ink dark:text-crt-green">
                Standard Operational Protocol
            </h1>
            <div className="flex gap-2 font-mono text-xs mt-4">
                <span className="bg-gray-200 dark:bg-crt-dim dark:text-crt-green px-2 py-1">#Demo</span>
                <span className="bg-gray-200 dark:bg-crt-dim dark:text-crt-green px-2 py-1">#Standard</span>
            </div>
        </header>

        <div className="prose prose-lg dark:prose-invert font-serif text-ink dark:text-crt-green max-w-none">
            <p>
                This is a standard article view. It inherits the global shell structure but defines its own internal container layout.
                Notice how the background of the shell (the grid/dots) remains visible outside this paper container, but this container
                provides a clean reading surface.
            </p>
            <h3>Objective</h3>
            <p>
                To demonstrate the <strong>AppShell</strong> architecture where the sidebar is fixed, and this content area scrolls independently.
            </p>
            <blockquote>
                "Consistency is the last refuge of the unimaginative." - Oscar Wilde (But in UI design, it's actually quite helpful).
            </blockquote>
        </div>

        <div className="mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-crt-dim text-center font-mono text-xs text-pencil dark:text-crt-green/50">
            *** END OF STANDARD DEMO ***
        </div>
      </div>
    </div>
  );
};