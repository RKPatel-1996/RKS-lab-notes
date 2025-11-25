import React, { useState } from 'react';
import { Terminal, RefreshCcw } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>(['> System initialized...']);

  const handleInteract = () => {
    const newCount = count + 1;
    setCount(newCount);
    setLogs(prev => [`> User interaction detected. Iteration: ${newCount}`, ...prev.slice(0, 5)]);
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-green-400 font-mono relative overflow-hidden">
        {/* Decorative Grid for this specific page */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="z-10 w-full max-w-2xl border border-green-500/30 bg-black/50 backdrop-blur-sm p-8 shadow-[0_0_30px_rgba(0,255,0,0.1)] rounded-lg">
            
            <div className="flex items-center gap-2 border-b border-green-500/30 pb-4 mb-6">
                <Terminal size={24} />
                <h1 className="text-xl font-bold tracking-widest">INTERACTIVE_MODULE.EXE</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Control Panel */}
                <div className="space-y-6">
                    <p className="text-sm opacity-80">
                        This page overrides the default paper styling to create a completely custom immersive environment within the AppShell.
                    </p>
                    
                    <div className="text-center p-6 border border-green-500 rounded bg-green-500/5">
                        <div className="text-6xl font-bold mb-2 tabular-nums">{count.toString().padStart(2, '0')}</div>
                        <div className="text-xs uppercase opacity-50">Event Counter</div>
                    </div>

                    <button 
                        onClick={handleInteract}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-500 text-black font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                    >
                        <RefreshCcw size={16} /> Execute Trigger
                    </button>
                </div>

                {/* Log Output */}
                <div className="bg-black border border-green-500/20 p-4 h-64 font-mono text-xs overflow-hidden flex flex-col">
                    <div className="mb-2 uppercase text-green-700 font-bold border-b border-green-900 pb-1">
                        Sys_Log_Output
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-1">
                        {logs.map((log, i) => (
                            <div key={i} className="opacity-80 font-code">
                                <span className="text-green-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                                {log}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};