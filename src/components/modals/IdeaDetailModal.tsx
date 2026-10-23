import React, { useEffect } from 'react';
import { X, Heart, Bookmark, Share2, ExternalLink, Sparkles, Check, Clock, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const IdeaDetailModal: React.FC = () => {
  const { 
    selectedIdeaForModal, 
    setSelectedIdeaForModal, 
    t, 
    user, 
    toggleLike, 
    toggleBookmark, 
    setShareIdeaData 
  } = useApp();

  const idea = selectedIdeaForModal;

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIdeaForModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedIdeaForModal]);

  if (!idea) return null;

  const isLiked = user.likedIdeaIds.includes(idea.id);
  const isBookmarked = user.savedIdeaIds.includes(idea.id);
  const categoryName = t.explorer.categories[idea.category] || idea.category;
  const stageName = t.stages[idea.stage] || idea.stage;
  const impactName = t.impacts[idea.impact] || idea.impact;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={() => setSelectedIdeaForModal(null)}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0D1018] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Ambient Top Glow Accent */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#00FF9D]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header: Category & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00FF9D]">
            <span>{categoryName}</span>
            <span className="text-white/20">·</span>
            <span className="text-slate-400">{idea.createdAt}</span>
          </div>

          <button
            onClick={() => setSelectedIdeaForModal(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title={t.detailModal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Idea Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          {idea.title}
        </h2>

        {/* Short Executive Summary */}
        <p className="mt-3 text-base text-slate-300 font-medium leading-relaxed">
          {idea.summary}
        </p>

        {/* Metadata Grid (Unboxed, clean) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
          <div>
            <span className="text-slate-400 block mb-1">{t.detailModal.implementationStage}</span>
            <span className="font-semibold text-white font-mono">{stageName}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">{t.detailModal.impactPotential}</span>
            <span className="font-semibold text-[#00FF9D] font-mono">{impactName}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-slate-400 block mb-1">{t.card.likes} / {t.card.views}</span>
            <span className="font-semibold text-white font-mono">{idea.likes} layk · {idea.views} ko‘rildi</span>
          </div>
        </div>

        {/* Deep Architecture Description */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {t.detailModal.aboutProject}
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            {idea.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {t.detailModal.tags}
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {idea.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={idea.author.avatar}
              alt={idea.author.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-sm font-semibold text-white">
                {idea.author.name}
              </div>
              <div className="text-xs text-slate-400">
                {idea.author.role} · {idea.author.email}
              </div>
            </div>
          </div>

          {idea.externalLink && (
            <a
              href={idea.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <span>{t.detailModal.externalLink}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Action Controls Bar */}
        <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleLike(idea.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                isLiked 
                  ? 'text-white bg-[#EC4899]' 
                  : 'text-slate-300 bg-white/5 hover:bg-white/10'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{idea.likes} {t.card.likes}</span>
            </button>

            <button
              onClick={() => toggleBookmark(idea.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                isBookmarked 
                  ? 'text-slate-950 bg-[#00FF9D]' 
                  : 'text-slate-300 bg-white/5 hover:bg-white/10'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? t.card.saved : t.card.save}</span>
            </button>

            <button
              onClick={() => setShareIdeaData(idea)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>{t.card.share}</span>
            </button>
          </div>

          <button
            onClick={() => setSelectedIdeaForModal(null)}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            {t.detailModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
