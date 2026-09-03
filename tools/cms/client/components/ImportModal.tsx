import React, { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';

export default function ImportModal({ onClose, onSuccess }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [importing, setImporting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
    }
  };

  const handleImport = async () => {
    if (!file) return;
    setImporting(true);

    try {
      const text = await file.text();
      // Basic check
      if (!text.includes('id:') || !text.includes('title:')) {
        throw new Error("File doesn't appear to be a valid RKS Lab Notes article module.");
      }

      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, content: text })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-black border-2 border-ink dark:border-white p-6 max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Import Article</h2>
          <button onClick={onClose}><X /></button>
        </div>

        <div className="border-2 border-dashed border-ink/30 dark:border-white/30 p-8 text-center cursor-pointer hover:bg-ink/5 dark:hover:bg-white/5 relative">
          <input type="file" accept=".ts" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
          <Upload className="mx-auto mb-4 opacity-50" size={32} />
          {file ? <p className="font-bold">{file.name}</p> : <p>Click or drag a .ts file here</p>}
        </div>

        {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

        <div className="mt-6 flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 opacity-70 hover:opacity-100">Cancel</button>
          <button
            onClick={handleImport}
            disabled={!file || importing}
            className="px-4 py-2 border border-ink dark:border-white hover:bg-ink hover:text-paper disabled:opacity-50 flex items-center gap-2"
          >
            {importing ? 'Importing...' : <><Check size={16} /> Import</>}
          </button>
        </div>
      </div>
    </div>
  );
}
