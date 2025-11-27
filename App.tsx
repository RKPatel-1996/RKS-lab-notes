import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { Home } from "./pages/Home";
import { AboutMe } from "./components/AboutMe";
import { StandardDemo } from "./pages/articles/StandardDemo";
import { InteractiveDemo } from "./pages/articles/InteractiveDemo";
import { MediaLogs } from "./pages/MediaLogs";
import { ArticleDetail } from "./pages/ArticleDetail";

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
          <Route path="/articles/:id" element={<ArticleDetail />} />

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
