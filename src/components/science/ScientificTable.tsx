import React from 'react';

interface ScientificTableProps {
  id: string;
  initialHeaders: string[];
  initialData: string[][];
  caption?: string;
}

export const ScientificTable: React.FC<ScientificTableProps> = ({ id, initialHeaders, initialData, caption }) => {
  return (
    <div className="print-scientific-table my-8 overflow-hidden flex flex-col">
      {/* Table Container */}
      <div className="w-full overflow-x-auto border-y-2 border-ink dark:border-white">
        <table className="w-full text-left border-collapse text-sm font-mono text-ink dark:text-white">
          {caption && (
            <caption className="caption-top text-left pb-4 font-serif text-sm text-pencil dark:text-gray-200">
              <strong className="font-mono text-ink dark:text-white mr-2 uppercase">Table {id}:</strong>
              <span dangerouslySetInnerHTML={{ __html: caption }} />
            </caption>
          )}
          <thead className="border-b-2 border-ink dark:border-white bg-paper dark:bg-black">
            <tr>
              {initialHeaders.map((header, i) => (
                <th 
                  key={i} 
                  className="p-3 font-bold align-bottom whitespace-normal"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-black">
            {initialData.map((row, rIdx) => (
              <tr key={rIdx} className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                {row.map((cell, cIdx) => (
                  <td 
                    key={cIdx} 
                    className="p-3 align-top border-r border-gray-100 dark:border-gray-800 last:border-r-0 whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
