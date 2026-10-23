import React, { useState } from 'react';
import { X, LogOut, Lightbulb, Bookmark, Heart, Plus, ExternalLink, Calendar } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProfileDrawer: React.FC = () => {
  const { 
    isProfileDrawerOpen, 
    setIsProfileDrawerOpen, 
    user, 
    ideas, 
    signOut, 
    t, 
    setSelectedIdeaForModal, 
    setIsCreateModalOpen 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'my' | 'favorites'>('my');

  if (!isProfileDrawerOpen) return null;

  const myIdeas = ideas.filter(idea => user.createdIdeaIds.includes(idea.id));
  const savedIdeas = ideas.filter(idea => user.savedIdeaIds.includes(idea.id));

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsProfileDrawerOpen(false)}
    >
      <div 
        className="relative w-full max-w-md h-full bg-[#0D1018] border-l border-white/10 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00FF9D]/60"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                  {user.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {user.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsProfileDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-5 grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">{t.auth.myIdeas}</span>
              <span className="font-mono text-base font-bold text-white mt-0.5 block">{myIdeas.length}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">{t.auth.myFavorites}</span>
              <span className="font-mono text-base font-bold text-[#00FF9D] mt-0.5 block">{savedIdeas.length}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">{t.card.likes}</span>
              <span className="font-mono text-base font-bold text-[#EC4899] mt-0.5 block">{user.likedIdeaIds.length}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex border-b border-white/[0.08]">
            <button
              onClick={() => setActiveTab('my')}
              className={`flex-1 pb-3 text-xs font-semibold text-center transition-colors cursor-pointer border-b-2 ${
                activeTab === 'my'
                  ? 'border-[#00FF9D] text-[#00FF9D]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.auth.myIdeas} ({myIdeas.length})
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex-1 pb-3 text-xs font-semibold text-center transition-colors cursor-pointer border-b-2 ${
                activeTab === 'favorites'
                  ? 'border-[#00FF9D] text-[#00FF9D]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.auth.myFavorites} ({savedIdeas.length})
            </button>
          </div>

          {/* Ideas List in Drawer */}
          <div className="mt-4 space-y-3 max-h-[48vh] overflow-y-auto pr-1">
            {activeTab === 'my' ? (
              myIdeas.length > 0 ? (
                myIdeas.map(idea => (
                  <div
                    key={idea.id}
                    onClick={() => {
                      setSelectedIdeaForModal(idea);
                      setIsProfileDrawerOpen(false);
                    }}
                    className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-colors cursor-pointer"
                  >
                    <div className="text-xs text-[#00FF9D] font-mono uppercase mb-1">
                      {idea.category} · {idea.createdAt}
                    </div>
                    <h4 className="text-sm font-semibold text-white truncate">
                      {idea.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                      {idea.summary}
                    </p>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-slate-400">
                  <p>{t.explorer.noResults}</p>
                  <button
                    onClick={() => {
                      setIsProfileDrawerOpen(false);
                      setIsCreateModalOpen(true);
                    }}
                    className="mt-3 px-3 py-1.5 text-xs font-medium text-slate-950 bg-[#00FF9D] rounded-lg"
                  >
                    {t.hero.shareBtn}
                  </button>
                </div>
              )
            ) : (
              savedIdeas.length > 0 ? (
                savedIdeas.map(idea => (
                  <div
                    key={idea.id}
                    onClick={() => {
                      setSelectedIdeaForModal(idea);
                      setIsProfileDrawerOpen(false);
                    }}
                    className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-colors cursor-pointer"
                  >
                    <div className="text-xs text-[#38BDF8] font-mono uppercase mb-1">
                      {idea.category} · {idea.createdAt}
                    </div>
                    <h4 className="text-sm font-semibold text-white truncate">
                      {idea.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                      {idea.summary}
                    </p>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-slate-400">
                  <p>{t.explorer.noResults}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer: Member Info & Sign Out */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.auth.joined} {user.joinedDate}</span>
          </span>

          <button
            onClick={signOut}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{t.nav.signOut}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
