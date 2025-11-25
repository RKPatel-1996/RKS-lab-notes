import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { Home } from "./pages/Home";
import { ArticleView } from "./components/ArticleView";
import { StandardLab } from "./templates/StandardLab";
import { AboutMe } from "./components/AboutMe";
import { StandardDemo } from "./pages/articles/StandardDemo";
import { InteractiveDemo } from "./pages/articles/InteractiveDemo";
import { MediaLogs } from "./pages/MediaLogs";
import { ARTICLES } from "./constants";

// Helper component to find article by ID and render view
const ArticleDetailWrapper = () => {
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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode (Fluorescence Mode)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter basename="/RKS-lab-notes">
      <Routes>
        <Route
          element={
            <AppShell isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          }
        >
          {/* Default Route / Library */}
          <Route path="/" element={<Home />} />

          {/* Dynamic Article Route */}
          <Route path="/articles/:id" element={<ArticleDetailWrapper />} />

          {/* Demos */}
          <Route path="/articles/standard" element={<StandardDemo />} />
          <Route path="/articles/interactive" element={<InteractiveDemo />} />

          {/* Other Views */}
          <Route path="/media" element={<MediaLogs />} />
          <Route path="/about" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
