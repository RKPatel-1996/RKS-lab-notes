import React, { useState, useEffect } from 'react';
import { Save, Eye, X, Image as ImageIcon, BookOpen, Settings2, FileCode2, Terminal } from 'lucide-react';

export default function ArticleEditor({ filename, onClose }: any) {
  const isNew = filename.startsWith('new:');
  const [data, setData] = useState<any>({
    id: isNew ? filename.split(':')[1] : '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    tags: '#Draft',
    readTime: '10 min',
    excerpt: '',
    type: 'report',
    template: 'standard',
    htmlContent: '',
    hasBib: false,
    bibContent: '',
    rawContent: ''
  });

  const [tab, setTab] = useState('metadata');
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Media Upload State
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaUploading, setMediaUploading] = useState(false);
  const [mediaUploaded, setMediaUploaded] = useState('');
  const [figureInfo, setFigureInfo] = useState({ id: 'FIG-1', alt: '', caption: 'Figure 1: ' });

  useEffect(() => {
    if (!isNew) {
      fetch(`/api/articles/${filename}`)
        .then(res => res.json())
        .then(resData => {
          if (resData.error) throw new Error(resData.error);
          setData({
            ...resData,
            tags: (resData.tags || []).join(', '),
            rawContent: resData._rawContent || ''
          });
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [filename, isNew]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async (isRaw = false) => {
    setSaving(true);
    setError('');

    try {
      const payload = {
        ...data,
        tags: data.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t),
        isRaw
      };

      let url = `/api/articles/${filename}`;
      let method = 'PUT';

      if (isNew) {
        url = '/api/articles';
        method = 'POST';

        const targetFilename = `${payload.id.toLowerCase()}.ts`;
        payload.filename = targetFilename;

        if (isRaw) {
            payload.content = payload.rawContent;
        } else {
            payload.content = `import { Article } from "../../lib/types";\n\nconst article: Article = {\n  id: "${payload.id}",\n  title: "${payload.title}",\n  date: "${payload.date}",\n  tags: ${JSON.stringify(payload.tags)},\n  type: "${payload.type}",\n  template: "${payload.template}",\n  readTime: "${payload.readTime}",\n  author: {\n    name: "RK Patel",\n    role: "Microbiologist",\n    avatar: "https://github.com/RKPatel-1996.png",\n    affiliation: "Gujarat University"\n  },\n  excerpt: "${payload.excerpt.replace(/"/g, '\\"')}",\n  content: \`${payload.htmlContent}\`\n};\n\nexport default article;`;
        }
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await res.json();
      if (!res.ok) throw new Error(resData.error);

      if (isNew) {
        onClose();
      } else if (isRaw) {
        // If we saved raw, reload everything to get the parser's view of it
        const reloadRes = await fetch(`/api/articles/${filename}`);
        const reloadData = await reloadRes.json();
        setData({
            ...data,
            ...reloadData,
            tags: (reloadData.tags || []).join(', '),
            rawContent: reloadData._rawContent || ''
        });
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveBib = async () => {
    try {
      const targetBibFile = (isNew ? `${data.id.toLowerCase()}.bib` : filename.replace('.ts', '.bib'));
      const res = await fetch(`/api/bib/${targetBibFile}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: data.bibContent })
      });
      if (!res.ok) throw new Error('Failed to save BibTeX');
      setData({ ...data, hasBib: true });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleMediaUpload = async () => {
    if (!mediaFile) return;
    setMediaUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', mediaFile);
      const res = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData
      });
      const resData = await res.json();
      if (!res.ok) throw new Error(resData.error);
      setMediaUploaded(resData.filename);

      // Auto-insert import if using Raw editor
      const varName = resData.filename.split('.')[0].replace(/[^a-zA-Z0-9]/g, '');
      const importStmt = `import ${varName} from "./article_images/${resData.filename}";\n`;
      if (data.rawContent && !data.rawContent.includes(resData.filename)) {
          setData({ ...data, rawContent: importStmt + data.rawContent });
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setMediaUploading(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-ink dark:border-white flex-none">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="opacity-70 hover:opacity-100"><X /></button>
          <span className="font-bold">{isNew ? 'New Article' : filename}</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open(`http://127.0.0.1:3000/articles/${data.id}`, '_blank')}
            className="flex items-center gap-2 px-3 py-1 border border-ink dark:border-white hover:bg-ink hover:text-paper"
            title="Opens real app on port 3000"
          >
            <Eye size={16} /> Preview
          </button>
          <button
            onClick={() => handleSave(tab === 'raw')}
            disabled={saving}
            className="flex items-center gap-2 px-3 py-1 bg-ink text-paper dark:bg-white dark:text-black font-bold"
          >
            <Save size={16} /> {saving ? 'Saving...' : (tab === 'raw' ? 'Save Raw' : 'Save')}
          </button>
        </div>
      </div>

      {error && <div className="p-2 bg-red-500 text-white font-bold">{error}</div>}

      <div className="flex border-b border-ink/20 dark:border-white/20 flex-none">
        {[
          { id: 'metadata', icon: Settings2, label: 'Metadata' },
          { id: 'content', icon: FileCode2, label: 'HTML Content' },
          { id: 'raw', icon: Terminal, label: 'Raw Source' },
          { id: 'references', icon: BookOpen, label: 'References' },
          { id: 'media', icon: ImageIcon, label: 'Media' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-3 border-r border-ink/20 dark:border-white/20 ${tab === t.id ? 'bg-ink/5 dark:bg-white/5 font-bold' : 'hover:bg-ink/5 dark:hover:bg-white/5'}`}
          >
            <t.icon size={16} /> {t.label}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0 overflow-hidden p-6">
        {tab === 'metadata' && (
          <div className="h-full overflow-y-auto">
            <div className="max-w-2xl flex flex-col gap-4 pr-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold opacity-70 uppercase">ID</label>
              <input type="text" name="id" value={data.id} onChange={handleChange} disabled={!isNew} className="p-2 bg-transparent border border-ink dark:border-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold opacity-70 uppercase">Title</label>
              <input type="text" name="title" value={data.title} onChange={handleChange} className="p-2 bg-transparent border border-ink dark:border-white focus:outline-none" />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs font-bold opacity-70 uppercase">Date</label>
                <input type="text" name="date" value={data.date} onChange={handleChange} className="p-2 bg-transparent border border-ink dark:border-white focus:outline-none" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs font-bold opacity-70 uppercase">Read Time</label>
                <input type="text" name="readTime" value={data.readTime} onChange={handleChange} className="p-2 bg-transparent border border-ink dark:border-white focus:outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold opacity-70 uppercase">Tags (comma separated)</label>
              <input type="text" name="tags" value={data.tags} onChange={handleChange} className="p-2 bg-transparent border border-ink dark:border-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold opacity-70 uppercase">Excerpt</label>
              <textarea name="excerpt" value={data.excerpt} onChange={handleChange} rows={4} className="p-2 bg-transparent border border-ink dark:border-white focus:outline-none" />
            </div>
            </div>
          </div>
        )}

        {tab === 'content' && (
          <div className="h-full min-h-0 flex flex-col gap-2">
            <label className="text-xs font-bold opacity-70 uppercase">HTML Content (Template Literal)</label>
            <textarea
              name="htmlContent"
              value={data.htmlContent}
              onChange={handleChange}
              className="flex-1 min-h-0 resize-none overflow-auto p-4 bg-transparent border border-ink dark:border-white focus:outline-none font-mono text-sm leading-relaxed"
            />
          </div>
        )}

        {tab === 'raw' && (
          <div className="h-full min-h-0 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <label className="text-xs font-bold opacity-70 uppercase">Raw TypeScript Source</label>
                <span className="text-xs text-yellow-600 dark:text-yellow-400 font-bold">WARNING: Direct source editing. Ensure valid TS syntax.</span>
            </div>
            <textarea
              name="rawContent"
              value={data.rawContent}
              onChange={handleChange}
              className="flex-1 min-h-0 resize-none overflow-auto p-4 bg-transparent border border-ink dark:border-white focus:outline-none font-mono text-xs leading-relaxed whitespace-pre"
            />
          </div>
        )}

        {tab === 'references' && (
          <div className="h-full min-h-0 flex flex-col gap-4">
            <div className="flex items-center justify-between">
               <div>
                 <span className="font-bold">{data.hasBib ? 'BibTeX File Present' : 'No BibTeX File'}</span>
                 <p className="text-xs opacity-70 mt-1">Saves to {isNew ? `${data.id.toLowerCase()}.bib` : filename.replace('.ts', '.bib')}</p>
               </div>
               <button onClick={handleSaveBib} className="px-4 py-1 border border-ink dark:border-white hover:bg-ink hover:text-paper">Save BibTeX</button>
            </div>
            <textarea
              name="bibContent"
              value={data.bibContent}
              onChange={handleChange}
              placeholder="@article{...}"
              className="flex-1 min-h-0 resize-none overflow-auto p-4 bg-transparent border border-ink dark:border-white focus:outline-none font-mono text-sm leading-relaxed"
            />
          </div>
        )}

        {tab === 'media' && (
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col gap-8 max-w-2xl pr-4">
            <div className="border border-ink dark:border-white p-6">
              <h3 className="font-bold mb-4">Upload Image</h3>
              <div className="flex gap-4 items-center mb-4">
                <input type="file" accept="image/*" onChange={(e) => e.target.files && setMediaFile(e.target.files[0])} />
                <button
                  onClick={handleMediaUpload}
                  disabled={!mediaFile || mediaUploading}
                  className="px-4 py-1 bg-ink text-paper dark:bg-white dark:text-black disabled:opacity-50"
                >
                  {mediaUploading ? 'Uploading...' : 'Upload to article_images/'}
                </button>
              </div>
              {mediaUploaded && (
                <div className="bg-green-500/20 text-green-700 dark:text-green-300 p-2 text-sm">
                  Successfully uploaded <b>{mediaUploaded}</b>
                </div>
              )}
            </div>

            <div className="border border-ink dark:border-white p-6">
              <h3 className="font-bold mb-4">Figure Insertion Helper</h3>
              <p className="text-xs opacity-70 mb-4">Copy this block into your Content editor. Ensure you import the image at the top of your raw TS file if you edit it manually, or just use the local path if the app supports it.</p>

              <div className="flex flex-col gap-2 mb-4">
                <input type="text" placeholder="Figure ID (e.g. FIG-1)" value={figureInfo.id} onChange={e => setFigureInfo({...figureInfo, id: e.target.value})} className="p-2 border border-ink/30 bg-transparent" />
                <input type="text" placeholder="Alt text" value={figureInfo.alt} onChange={e => setFigureInfo({...figureInfo, alt: e.target.value})} className="p-2 border border-ink/30 bg-transparent" />
                <input type="text" placeholder="Caption (e.g. Figure 1: ...)" value={figureInfo.caption} onChange={e => setFigureInfo({...figureInfo, caption: e.target.value})} className="p-2 border border-ink/30 bg-transparent" />
              </div>

              <pre className="p-4 bg-ink/5 dark:bg-white/5 font-mono text-xs overflow-x-auto select-all">
{`<figure class="science-figure" data-id="${figureInfo.id}" data-clean-src="\${${mediaUploaded ? mediaUploaded.split('.')[0].replace(/[^a-zA-Z0-9]/g, '') : 'imageVar'}}">
  <img src="\${${mediaUploaded ? mediaUploaded.split('.')[0].replace(/[^a-zA-Z0-9]/g, '') : 'imageVar'}}" alt="${figureInfo.alt}" />
  <figcaption>${figureInfo.caption}</figcaption>
</figure>`}
              </pre>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
