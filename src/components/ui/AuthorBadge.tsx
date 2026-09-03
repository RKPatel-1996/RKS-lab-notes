import React from 'react';
import { Author } from '../../lib/types';
import { User, ShieldCheck } from 'lucide-react';

interface AuthorBadgeProps {
  author?: Author;
}

export const AuthorBadge: React.FC<AuthorBadgeProps> = ({ author }) => {
  // Default fallback if no author provided
  const displayAuthor: Author = author || {
    name: "RK Patel",
    role: "Lead Researcher",
    avatar: "https://github.com/RKPatel-1996.png"
  };

  return (
    <div className="flex items-center gap-4 py-4 mb-6 border-b-2 border-dashed border-gray-300 dark:border-gray-700">
      <div className="relative shrink-0">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-ink dark:border-white bg-gray-200 dark:bg-gray-800">
           <img
              src={displayAuthor.avatar}
              alt={displayAuthor.name}
             className="w-full h-full object-cover grayscale contrast-125"
             onError={(e) => {
                // Fallback if image fails: Hide image, show icon div
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) {
                    fallback.classList.remove('hidden');
                    fallback.classList.add('flex');
                }
             }}
           />
           {/* Initially hidden, becomes flex via JS if image errors */}
           <div className="hidden w-full h-full items-center justify-center text-ink dark:text-white">
              <User size={20} />
           </div>
        </div>
        {/* Status indicator */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white dark:bg-black rounded-full flex items-center justify-center border border-ink dark:border-white">
            <ShieldCheck size={10} className="text-ink dark:text-white" />
        </div>
      </div>

      <div>
        <div className="font-serif font-bold text-ink dark:text-white text-base">
            {displayAuthor.name}
        </div>
        <div className="font-mono text-xs uppercase tracking-wider text-pencil dark:text-gray-400">
            {displayAuthor.role || "Contributor"}
        </div>
      </div>
    </div>
  );
};
