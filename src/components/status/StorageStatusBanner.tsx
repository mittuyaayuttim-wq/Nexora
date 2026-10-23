import React, { useState } from 'react';
import { Database, ShieldCheck, CheckCircle2, Cloud, HardDrive, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const StorageStatusBanner: React.FC = () => {
  const { t, ideas, user } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate approximate storage usage
  const ideasJson = JSON.stringify(ideas);
  const storageKb = (ideasJson.length / 1024).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="rounded-2xl bg-[#0A0D14]/90 border border-white/[0.08] p-4 sm:p-5 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center shrink-0">
              <Database className="w-4 h-4 text-[#00FF9D]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">
                  {t.storage.title}
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/20">
                  {t.storage.localActive}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.storage.desc}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-lg border border-white/10 transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <Info className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>Texnik Holat</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expanded Technical Details */}
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs animate-in fade-in duration-150">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-[#00FF9D]" />
                Mahalliy Xotira Hajmi
              </span>
              <span className="font-mono text-white font-semibold">
                ~{storageKb} KB ({ideas.length} ta g‘oya)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-[#38BDF8]" />
                {t.storage.firebaseReady}
              </span>
              <span className="font-mono text-slate-300">
                {t.storage.infoText}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
                Avtorizatsiya Holati
              </span>
              <span className="font-mono text-white font-semibold">
                {user.isLoggedIn ? `Google (${user.email})` : 'Mehmon rejimi'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
