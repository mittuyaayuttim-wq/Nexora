import React from 'react';
import { Heart, Bookmark, Share2, ArrowUpRight, Edit2, Trash2 } from 'lucide-react';
import { Idea } from '../../types';
import { useApp } from '../../context/AppContext';

interface IdeaCardProps {
  idea: Idea;
  isFeatured?: boolean;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea, isFeatured = false }) => {
  const { 
    t, 
    user, 
    toggleLike, 
    toggleBookmark, 
    setSelectedIdeaForModal, 
    setShareIdeaData, 
    setEditingIdea,
    setIsCreateModalOpen,
    deleteIdea 
  } = useApp();

  const isLiked = user.likedIdeaIds.includes(idea.id);
  const isBookmarked = user.savedIdeaIds.includes(idea.id);
  const isOwner = user.createdIdeaIds.includes(idea.id) || idea.author.email === user.email;

  const categoryName = t.explorer.categories[idea.category] || idea.category;
  const stageName = t.stages[idea.stage] || idea.stage;
  const impactName = t.impacts[idea.impact] || idea.impact;

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingIdea(idea);
    setIsCreateModalOpen(true);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(t.card.deleteConfirm)) {
      deleteIdea(idea.id);
    }
  };

  return (
    <article
      onClick={() => setSelectedIdeaForModal(idea)}
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0D1018]/80 hover:bg-[#121622]/90 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 cursor-pointer nexora-card-interactive ${
        isFeatured ? 'lg:col-span-2 shadow-[0_0_40px_rgba(0,255,157,0.06)]' : ''
      }`}
    >
      {/* Top Section: Unboxed Metadata + Action Icons */}
      <div>
        <div className="flex items-center justify-between gap-4 text-xs text-slate-400 mb-4">
          {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#00FF9D] font-medium tracking-wide uppercase">
              {categoryName}
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>{stageName}</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="text-slate-400">{idea.createdAt}</span>
          </div>

          {/* Card Affordances: Bookmark & Share */}
          <div className="flex items-center gap-1 shrink-0" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => toggleBookmark(idea.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'text-[#00FF9D] bg-[#00FF9D]/15' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              title={isBookmarked ? t.card.saved : t.card.save}
              aria-label={isBookmarked ? t.card.saved : t.card.save}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setShareIdeaData(idea)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              title={t.card.share}
              aria-label={t.card.share}
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00FF9D] transition-colors line-clamp-2 leading-snug">
          {idea.title}
        </h3>

        {/* Summary Description */}
        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed line-clamp-3">
          {idea.summary}
        </p>

        {/* Tags (Unboxed Text with Typographic Separators) */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
          {idea.tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span className="hover:text-slate-200 transition-colors">#{tag}</span>
              {idx < idea.tags.length - 1 && <span className="text-white/20">/</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Section: Author Lockup + Likes & Stage Impact */}
      <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
        {/* Author Lockup */}
        <div className="flex items-center gap-2.5 truncate">
          <img
            src={idea.author.avatar}
            alt={idea.author.name}
            className="w-7 h-7 rounded-full object-cover ring-1 ring-white/10 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="truncate text-xs">
            <span className="font-medium text-slate-200 truncate block">
              {idea.author.name}
            </span>
            <span className="text-slate-400 truncate block">
              {impactName}
            </span>
          </div>
        </div>

        {/* Bottom Actions: Owner tools + Heart Like Counter */}
        <div className="flex items-center gap-2 shrink-0" onClick={e => e.stopPropagation()}>
          {isOwner && (
            <div className="flex items-center gap-1 mr-1">
              <button
                onClick={handleEdit}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                title={t.card.edit}
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleDelete}
                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                title={t.card.delete}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Like Counter with Heart */}
          <button
            onClick={() => toggleLike(idea.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono tabular-nums transition-colors ${
              isLiked 
                ? 'text-[#EC4899] bg-[#EC4899]/15' 
                : 'text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08]'
            }`}
            title={t.card.likes}
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
            <span>{idea.likes}</span>
          </button>

          {/* View Arrow */}
          <div className="w-7 h-7 rounded-lg bg-white/[0.03] group-hover:bg-[#00FF9D]/20 text-slate-400 group-hover:text-[#00FF9D] flex items-center justify-center transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </article>
  );
};
