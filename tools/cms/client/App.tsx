import React, { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import ArticleEditor from './components/ArticleEditor';
import ImportModal from './components/ImportModal';
import PublishTab from './components/PublishTab';
import { Settings, FileText, Plus, Upload, Play, CheckCircle, UploadCloud } from 'lucide-react';

function App() {
  const [view, setView] = useState<'list' | 'edit' | 'publish'>('list');
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showImport, setShowImport] = useState(false);
  const [systemOutput, setSystemOutput] = useState<{ output: string, exitCode: number } | null>(null);

  const fetchArticles = async () => {
    const res = await fetch('/api/articles');
    if (res.ok) {
      const data = await res.json();
      setArticles(data);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleEdit = (filename: string) => {
    setSelectedFile(filename);
    setView('edit');
  };

  const handleNew = async () => {
    const res = await fetch('/api/next-id');
    const { id } = await res.json();
    setSelectedFile(`new:${id}`);
    setView('edit');
  };

  const runCommand = async (cmd: string) => {
    setSystemOutput({ output: 'Running...', exitCode: 0 });
    const res = await fetch(`/api/command/${cmd}`, { method: 'POST' });
    const data = await res.json();
    setSystemOutput(data);
  };

  return (
    <div className="h-screen min-h-0 overflow-hidden bg-paper text-ink dark:bg-black dark:text-white flex flex-col font-mono">
      <header className="border-b-2 border-ink dark:border-white p-4 flex justify-between items-center bg-white dark:bg-black sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold font-serif tracking-tight">RKS LAB NOTES // CMS</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setView('publish')} className={`flex items-center gap-2 px-4 py-1 border border-ink dark:border-white transition-colors ${view === 'publish' ? 'bg-ink text-paper dark:bg-white dark:text-black font-bold' : 'hover:bg-ink hover:text-paper'}`}>
            <UploadCloud size={16} /> Publish
          </button>
          <button onClick={() => runCommand('validate')} className="flex items-center gap-2 hover:bg-ink hover:text-paper px-3 py-1 border border-ink dark:border-white transition-colors">
            <CheckCircle size={16} /> Validate
          </button>
          <button onClick={() => runCommand('build')} className="flex items-center gap-2 hover:bg-ink hover:text-paper px-3 py-1 border border-ink dark:border-white transition-colors">
            <Play size={16} /> Build Check
          </button>
          <button onClick={() => runCommand('lint')} className="flex items-center gap-2 hover:bg-ink hover:text-paper px-3 py-1 border border-ink dark:border-white transition-colors">
            <Play size={16} /> Lint Check
          </button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r-2 border-ink dark:border-white overflow-y-auto min-h-0 bg-gray-50 dark:bg-gray-900 hidden md:flex flex-col">
          <div className="p-4 border-b-2 border-ink dark:border-white flex justify-between">
            <button onClick={handleNew} className="flex-1 flex justify-center items-center gap-2 border border-ink dark:border-white py-2 hover:bg-ink hover:text-paper transition-colors mr-2">
              <Plus size={16} /> New
            </button>
            <button onClick={() => setShowImport(true)} className="flex-1 flex justify-center items-center gap-2 border border-ink dark:border-white py-2 hover:bg-ink hover:text-paper transition-colors">
              <Upload size={16} /> Import
            </button>
          </div>
          <ArticleList
            articles={articles}
            selectedFile={selectedFile}
            onSelect={handleEdit}
          />
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 min-w-0 min-h-0 overflow-hidden relative">
          {view === 'publish' ? (
            <PublishTab />
          ) : view === 'edit' && selectedFile ? (
            <ArticleEditor
              filename={selectedFile}
              onClose={() => {
                setSelectedFile(null);
                setView('list');
                fetchArticles();
              }}
            />
          ) : (
            <div className="h-full flex items-center justify-center opacity-50 flex-col gap-4">
              <Settings size={48} />
              <p>Select an article to edit or create a new one.</p>
            </div>
          )}
        </main>
      </div>

      {showImport && (
        <ImportModal
          onClose={() => setShowImport(false)}
          onSuccess={() => {
            setShowImport(false);
            fetchArticles();
          }}
        />
      )}

      {systemOutput && (
        <div className="fixed bottom-0 left-0 right-0 max-h-64 overflow-y-auto bg-black text-green-400 p-4 border-t-2 border-white z-50 font-mono text-sm whitespace-pre-wrap">
          <div className="flex justify-between items-center mb-2 text-white border-b border-gray-700 pb-2">
            <span>Terminal Output (Exit: {systemOutput.exitCode})</span>
            <button onClick={() => setSystemOutput(null)} className="hover:text-red-400">Close</button>
          </div>
          {systemOutput.output}
        </div>
      )}
    </div>
  );
}

export default App;
