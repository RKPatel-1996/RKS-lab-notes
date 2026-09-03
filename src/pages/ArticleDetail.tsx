import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StandardLab } from "../components/templates/StandardLab";
import { loadArticle } from "../content/index";
import { Article } from "../lib/types";

export const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);

    if (id) {
      loadArticle(id).then(loaded => {
        if (!active) return;
        if (loaded) {
          setArticle(loaded);
        } else {
          setError(true);
        }
        setLoading(false);
      }).catch(err => {
        console.error(err);
        if (active) {
          setError(true);
          setLoading(false);
        }
      });
    } else {
      setLoading(false);
      setError(true);
    }

    return () => {
      active = false;
    };
  }, [id]);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | RKs-LAB-NOTES`;
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt || article.title);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', article.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', article.excerpt || article.title);
      }
    } else if (error) {
      document.title = "404 Not Found | RKs-LAB-NOTES";
    }
  }, [article, error]);

  if (loading) {
    return (
      <div className="p-12 font-mono text-center text-ink dark:text-white">
        <p className="animate-pulse">LOADING_RECORD...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="p-12 font-mono text-center dark:text-white">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
          404: RECORD_NOT_FOUND
        </h2>
        <p className="mt-2 text-sm text-pencil dark:text-gray-400">
          The requested manuscript ID '{id}' does not exist or failed to load.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 underline hover:text-accent dark:hover:text-gray-300"
        >
          &lt; Return to Index
        </button>
      </div>
    );
  }

  // Canonical Renderer for all articles
  return <StandardLab article={article} onBack={() => navigate("/")} />;
};