import React, { useState, useEffect } from 'react';
import { UploadCloud, CheckCircle, RefreshCw, Layers, GitCommit, Settings } from 'lucide-react';

export default function PublishTab() {
  const [preflight, setPreflight] = useState<any>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [selectedUnstaged, setSelectedUnstaged] = useState<Set<string>>(new Set());
  const [selectedStaged, setSelectedStaged] = useState<Set<string>>(new Set());
  const [diff, setDiff] = useState<string | null>(null);
  const [actionLog, setActionLog] = useState<string | null>(null);
  const [statusMap, setStatusMap] = useState({ validate: 'UNKNOWN', build: 'UNKNOWN', lint: 'UNKNOWN' });

  const fetchPreflight = async () => {
    try {
      const res = await fetch('/api/git/preflight');
      setPreflight(await res.json());
    } catch (e) {
      console.error(e);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    await fetchPreflight();
    await handleRefresh();
  };

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/git/status');
      const data = await res.json();
      setFiles(data.files || []);
      setDiff(null);

      const stateRes = await fetch('/api/state');
      const stateData = await stateRes.json();

      setStatusMap({
        validate: stateData.lastValidated > stateData.lastModified ? 'PASS' : (stateData.lastValidated > 0 ? 'STALE' : 'UNKNOWN'),
        build: stateData.lastBuilt > stateData.lastModified ? 'PASS' : (stateData.lastBuilt > 0 ? 'STALE' : 'UNKNOWN'),
        lint: stateData.lastLinted > stateData.lastModified ? 'PASS' : (stateData.lastLinted > 0 ? 'STALE' : 'UNKNOWN'),
      });

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleStage = async () => {
    if (selectedUnstaged.size === 0) return;
    const res = await fetch('/api/git/stage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ files: Array.from(selectedUnstaged) })
    });
    if (res.ok) {
      setSelectedUnstaged(new Set());
      handleRefresh();
    } else {
      const err = await res.json();
      setActionLog(err.error);
    }
  };

  const handleUnstage = async () => {
    if (selectedStaged.size === 0) return;
    const res = await fetch('/api/git/unstage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ files: Array.from(selectedStaged) })
    });
    if (res.ok) {
      setSelectedStaged(new Set());
      handleRefresh();
    } else {
      const err = await res.json();
      setActionLog(err.error);
    }
  };

  const handleViewDiff = async (path: string, staged: boolean) => {
    const res = await fetch(`/api/git/diff?file=${encodeURIComponent(path)}&staged=${staged}`);
    const data = await res.json();
    setDiff(data.diff || 'BINARY FILE OR EMPTY DIFF');
  };

  const handleCommit = async () => {
    if (!message) return;
    const confirmMessage = `COMMIT SELECTED CHANGES?\n\n${stagedFiles.length} files staged.\n\nCommit message:\n"${message}"`;
    if (!window.confirm(confirmMessage)) return;

    const res = await fetch('/api/git/commit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    if (data.success) {
      setActionLog(`LOCAL COMMIT CREATED\n${data.output}\n\nNot yet pushed.`);
      setMessage('');
      handleRefresh();
    } else {
      setActionLog(`COMMIT FAILED\n\n${data.error}`);
    }
  };

  const handlePush = async () => {
    const confirmMessage = `PUSH TO REMOTE?\n\nRemote: origin\nBranch: ${preflight.branch}`;
    if (!window.confirm(confirmMessage)) return;

    setActionLog('Pushing...');
    const res = await fetch('/api/git/push', { method: 'POST' });
    const data = await res.json();
    if (data.success) {
      setActionLog(`PUSH SUCCESSFUL\n\n${data.output}`);
    } else {
      setActionLog(`PUSH FAILED\n\nGit could not authenticate with origin or push failed.\nYour local commit is safe and has not been removed.\nResolve Git issues outside the CMS and try PUSH again.\n\nError: ${data.error}`);
    }
  };


  if (loading) return <div className="p-8">Loading Git status...</div>;

  if (!preflight?.isRepo) {
    return (
      <div className="p-8 flex flex-col gap-4 max-w-2xl mx-auto items-center text-center opacity-70 mt-20">
        <Settings size={48} />
        <h2 className="text-2xl font-bold">GIT STATUS</h2>
        <p className="text-red-500 font-bold">✗ Repository not detected</p>
        <p>Git publishing controls are unavailable.</p>
        <p>The CMS content editor remains fully functional.</p>
      </div>
    );
  }

  if (preflight?.abnormalReason) {
    return (
      <div className="p-8 flex flex-col gap-4 max-w-2xl mx-auto items-center text-center mt-20">
        <Settings size={48} className="opacity-70" />
        <h2 className="text-2xl font-bold">REPOSITORY REQUIRES MANUAL GIT ATTENTION</h2>
        <p className="text-orange-500 font-bold">{preflight.abnormalReason}</p>
        <p className="opacity-70 max-w-md">Git publishing controls are temporarily disabled to prevent conflicting changes.</p>
        <p className="opacity-70 max-w-md">Please resolve this state in your terminal or external Git client, then refresh.</p>
      </div>
    );
  }

  const stagedFiles = files.filter(f => f.x !== ' ' && f.x !== '?');
  const unstagedFiles = files.filter(f => f.y !== ' ' || (f.x === '?' && f.y === '?'));

  const toggleSet = (set: Set<string>, val: string) => {
    const newSet = new Set(set);
    if (newSet.has(val)) newSet.delete(val);
    else newSet.add(val);
    return newSet;
  };

  return (
    <div className="p-8 h-full flex flex-col overflow-y-auto">
      <div className="flex justify-between items-start mb-8">
        <div className="flex gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-serif">DEVELOPMENT GIT</h2>
            <div className="text-sm space-y-2 font-mono">
              <p className="font-bold border-b border-ink/20 pb-1 mb-2 flex items-center">
                PROJECT SAFETY: <span className={`ml-2 ${preflight.safeToPublish ? 'text-green-500' : 'text-orange-500'}`}>{preflight.safeToPublish ? 'PASS' : 'FAIL'}</span>
              </p>
              <div className="opacity-80 text-xs space-y-1">
                <p><strong>EXPECTED PROJECT:</strong> {preflight.expected?.owner}/{preflight.expected?.repository}</p>
                <p><strong>EXPECTED SSH:</strong> {preflight.expected?.sshAlias}</p>
                <div className="mt-2">
                  <strong>ACTUAL ORIGIN FETCH:</strong>
                  {preflight.actual?.originFetchUrls?.length > 0 ? preflight.actual.originFetchUrls.map((url: string, i: number) => <div key={i} className="pl-2">{url}</div>) : <div className="pl-2 text-red-500">None</div>}
                </div>
                <div className="mt-2">
                  <strong>ACTUAL ORIGIN PUSH:</strong>
                  {preflight.actual?.originPushUrls?.length > 0 ? preflight.actual.originPushUrls.map((url: string, i: number) => <div key={i} className="pl-2">{url}</div>) : <div className="pl-2 text-red-500">None</div>}
                </div>
                <div className="mt-2">
                  <strong>AUTHOR:</strong> {preflight.actual?.authorName} &lt;{preflight.actual?.authorEmail}&gt;
                </div>
                <div className="mt-2 text-[10px] bg-ink/5 dark:bg-white/5 p-1 rounded overflow-x-auto whitespace-pre">
                  <strong>AUTHOR CONFIG SOURCE:</strong>
                  <div>{preflight.actual?.authorNameOrigin}</div>
                  <div>{preflight.actual?.authorEmailOrigin}</div>
                </div>
                <div className="mt-2 flex gap-4">
                  <p><strong>HEAD:</strong> {preflight.headValid ? 'VALID' : 'INVALID'}</p>
                  <p><strong>BRANCH:</strong> {preflight.branch}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">CHECKS</h3>
            <div className="text-sm space-y-1 font-mono">
              <p>VALIDATION <span className={`ml-4 font-bold ${statusMap.validate === 'PASS' ? 'text-green-500' : statusMap.validate === 'STALE' ? 'text-orange-500' : ''}`}>{statusMap.validate}</span></p>
              <p>BUILD      <span className={`ml-4 font-bold ${statusMap.build === 'PASS' ? 'text-green-500' : statusMap.build === 'STALE' ? 'text-orange-500' : ''}`}>{statusMap.build}</span></p>
              <p>LINT       <span className={`ml-4 font-bold ${statusMap.lint === 'PASS' ? 'text-green-500' : statusMap.lint === 'STALE' ? 'text-orange-500' : ''}`}>{statusMap.lint}</span></p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={handleRefresh} className="flex items-center gap-2 px-4 py-2 border border-ink dark:border-white hover:bg-ink hover:text-paper">
            <RefreshCw size={16} /> REFRESH STATUS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Unstaged Changes */}
        <div className="border border-ink dark:border-white p-4">
          <h3 className="font-bold mb-4">UNSTAGED CHANGES</h3>
          <div className="space-y-2 mb-4">
            {unstagedFiles.length === 0 ? <p className="opacity-50">No unstaged changes.</p> : unstagedFiles.map(f => (
              <div key={f.path} className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer truncate mr-4">
                  <input type="checkbox" checked={selectedUnstaged.has(f.path)} onChange={() => setSelectedUnstaged(toggleSet(selectedUnstaged, f.path))} />
                  <span className="font-mono text-red-500 w-4 inline-block">{f.y === '?' ? '?' : f.y}</span>
                  <span className="truncate">{f.path}</span>
                </label>
                <button onClick={() => handleViewDiff(f.path, false)} className="text-xs border px-2 py-1 hover:bg-ink hover:text-paper shrink-0">Diff</button>
              </div>
            ))}
          </div>
          <button
            disabled={selectedUnstaged.size === 0 || !preflight?.safeToPublish}
            onClick={handleStage}
            className="w-full py-2 bg-ink text-paper dark:bg-white dark:text-black font-bold disabled:opacity-50"
          >
            STAGE SELECTED
          </button>
        </div>

        {/* Staged Changes */}
        <div className="border border-ink dark:border-white p-4">
          <h3 className="font-bold mb-4">STAGED CHANGES</h3>
          <div className="space-y-2 mb-4">
            {stagedFiles.length === 0 ? <p className="opacity-50">No staged changes.</p> : stagedFiles.map(f => (
              <div key={f.path} className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer truncate mr-4">
                  <input type="checkbox" checked={selectedStaged.has(f.path)} onChange={() => setSelectedStaged(toggleSet(selectedStaged, f.path))} />
                  <span className="font-mono text-green-500 w-4 inline-block">{f.x}</span>
                  <span className="truncate">{f.path}</span>
                </label>
                <button onClick={() => handleViewDiff(f.path, true)} className="text-xs border px-2 py-1 hover:bg-ink hover:text-paper shrink-0">Diff</button>
              </div>
            ))}
          </div>
          <button
            disabled={selectedStaged.size === 0 || !preflight?.safeToPublish}
            onClick={handleUnstage}
            className="w-full py-2 border border-ink dark:border-white hover:bg-ink hover:text-paper font-bold disabled:opacity-50"
          >
            UNSTAGE SELECTED
          </button>
        </div>
      </div>

      {diff && (
        <div className="mb-8 border border-ink dark:border-white p-4 bg-ink/5 dark:bg-white/5 font-mono text-xs overflow-x-auto whitespace-pre">
          <div className="flex justify-between mb-4 border-b pb-2">
            <strong>Diff Viewer</strong>
            <button onClick={() => setDiff(null)}>Close</button>
          </div>
          {diff}
        </div>
      )}

      {actionLog && (
        <div className="mb-8 border border-ink dark:border-white p-4 bg-black text-green-400 font-mono text-sm whitespace-pre-wrap">
          <div className="flex justify-between mb-2">
            <strong>Action Log</strong>
            <button onClick={() => setActionLog(null)} className="text-white">Close</button>
          </div>
          {actionLog}
        </div>
      )}

      <div className="border border-ink dark:border-white p-6 bg-ink/5 dark:bg-white/5 max-w-2xl">
        <h3 className="font-bold mb-4 flex items-center gap-2"><GitCommit /> COMMIT SELECTED CHANGES</h3>
        <p className="text-sm mb-4">{stagedFiles.length} files staged.</p>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Commit message..."
          className="w-full p-2 mb-4 border border-ink dark:border-white bg-transparent focus:outline-none"
        />
        <button
          onClick={handleCommit}
          disabled={stagedFiles.length === 0 || !message || !preflight?.safeToPublish}
          className="px-6 py-2 bg-ink text-paper dark:bg-white dark:text-black font-bold disabled:opacity-50 mr-4"
        >
          COMMIT
        </button>
        <button
          onClick={handlePush}
          disabled={!preflight?.safeToPublish}
          className="px-6 py-2 border border-ink dark:border-white hover:bg-ink hover:text-paper font-bold disabled:opacity-50"
        >
          PUSH
        </button>
        <div className="mt-5 border-t border-ink/20 dark:border-white/20 pt-4 text-sm">
          <p className="font-bold">FINAL DEPLOYMENT</p>
          <p className="opacity-70 mt-1">
            GitHub Pages deployment is intentionally unavailable from the development CMS.
            Push development work here, then use the RKS Lab Notes Site Manager publication workflow.
          </p>
        </div>
      </div>
    </div>
  );
}

