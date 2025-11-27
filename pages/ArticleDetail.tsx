import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleView } from "../components/ArticleView";
import { StandardLab } from "../components/templates/StandardLab";
import { ARTICLES } from "../src/content/index";

export const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="p-12 font-mono text-center dark:text-crt-green">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
          404: RECORD_NOT_FOUND
        </h2>
        <p className="mt-2 text-sm text-pencil dark:text-crt-green/70">
          The requested manuscript ID '{id}' does not exist in the registry.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 underline hover:text-accent dark:hover:text-crt-amber"
        >
          &lt; Return to Index
        </button>
      </div>
    );
  }

  // Route based on Template Type
  if (article.template === "standard") {
    return <StandardLab article={article} onBack={() => navigate("/")} />;
  }

  // Default Fallback
  return <ArticleView article={article} onBack={() => navigate("/")} />;
};