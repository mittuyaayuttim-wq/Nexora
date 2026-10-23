import React, { useState, useEffect } from 'react';
import { X, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { CategoryId, ProjectStage, ImpactLevel } from '../../types';

export const CreateIdeaModal: React.FC = () => {
  const { 
    isCreateModalOpen, 
    setIsCreateModalOpen, 
    editingIdea, 
    setEditingIdea, 
    t, 
    user, 
    createIdea, 
    updateIdea 
  } = useApp();

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<CategoryId>('ai');
  const [stage, setStage] = useState<ProjectStage>('Concept');
  const [impact, setImpact] = useState<ImpactLevel>('Transformative');
  const [tagsInput, setTagsInput] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const [authorName, setAuthorName] = useState(user.name);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (editingIdea) {
      setTitle(editingIdea.title);
      setSummary(editingIdea.summary);
      setDescription(editingIdea.description);
      setCategory(editingIdea.category);
      setStage(editingIdea.stage);
      setImpact(editingIdea.impact);
      setTagsInput(editingIdea.tags.join(', '));
      setExternalLink(editingIdea.externalLink || '');
      setAuthorName(editingIdea.author.name);
    } else {
      setTitle('');
      setSummary('');
      setDescription('');
      setCategory('ai');
      setStage('Concept');
      setImpact('Transformative');
      setTagsInput('');
      setExternalLink('');
      setAuthorName(user.name);
    }
    setErrors({});
  }, [editingIdea, isCreateModalOpen, user.name]);

  if (!isCreateModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = t.createModal.errors.titleRequired;
    if (!summary.trim()) newErrors.summary = t.createModal.errors.summaryRequired;
    if (!description.trim()) newErrors.description = t.createModal.errors.descriptionRequired;
    if (!authorName.trim()) newErrors.author = t.createModal.errors.authorRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const tags = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    if (editingIdea) {
      updateIdea(editingIdea.id, {
        title: title.trim(),
        summary: summary.trim(),
        description: description.trim(),
        category,
        stage,
        impact,
        tags: tags.length > 0 ? tags : ['Innovatsiya'],
        externalLink: externalLink.trim() || undefined,
        author: {
          ...editingIdea.author,
          name: authorName.trim()
        }
      });
    } else {
      createIdea({
        title: title.trim(),
        summary: summary.trim(),
        description: description.trim(),
        category,
        stage,
        impact,
        tags: tags.length > 0 ? tags : ['Nexora', 'Innovatsiya'],
        externalLink: externalLink.trim() || undefined,
        author: {
          id: user.id,
          name: authorName.trim(),
          role: 'Innovator & Tadqiqotchi',
          email: user.email,
          avatar: user.avatar
        },
        gradientTheme: 'from-[#00FF9D]/20 via-[#38BDF8]/15 to-[#8B5CF6]/20'
      });

      // Launch celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00FF9D', '#38BDF8', '#8B5CF6']
        });
      } catch {
        // Fallback gracefully
      }
    }

    setEditingIdea(null);
    setIsCreateModalOpen(false);
  };

  const handleClose = () => {
    setEditingIdea(null);
    setIsCreateModalOpen(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0D1018] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00FF9D]" />
            <div>
              <h3 className="text-xl font-bold text-white">
                {editingIdea ? t.createModal.editTitle : t.createModal.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.createModal.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              {t.createModal.fieldTitle}
            </label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={t.createModal.fieldTitlePlaceholder}
              className={`w-full px-3.5 py-2.5 bg-[#0F121B] border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.title ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-[#00FF9D]'
              }`}
            />
            {errors.title && (
              <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.title}
              </span>
            )}
          </div>

          {/* Category & Stage Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.createModal.fieldCategory}
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as CategoryId)}
                className="w-full px-3.5 py-2.5 bg-[#0F121B] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#00FF9D]"
              >
                <option value="ai">{t.explorer.categories.ai}</option>
                <option value="web">{t.explorer.categories.web}</option>
                <option value="space">{t.explorer.categories.space}</option>
                <option value="green">{t.explorer.categories.green}</option>
                <option value="design">{t.explorer.categories.design}</option>
                <option value="business">{t.explorer.categories.business}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.createModal.fieldStage}
              </label>
              <select
                value={stage}
                onChange={e => setStage(e.target.value as ProjectStage)}
                className="w-full px-3.5 py-2.5 bg-[#0F121B] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#00FF9D]"
              >
                <option value="Concept">{t.stages.Concept}</option>
                <option value="Prototype">{t.stages.Prototype}</option>
                <option value="Alpha">{t.stages.Alpha}</option>
                <option value="Production">{t.stages.Production}</option>
              </select>
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              {t.createModal.fieldSummary}
            </label>
            <input
              type="text"
              value={summary}
              onChange={e => setSummary(e.target.value)}
              placeholder={t.createModal.fieldSummaryPlaceholder}
              className={`w-full px-3.5 py-2.5 bg-[#0F121B] border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.summary ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-[#00FF9D]'
              }`}
            />
            {errors.summary && (
              <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.summary}
              </span>
            )}
          </div>

          {/* Detailed Description */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              {t.createModal.fieldDescription}
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={t.createModal.fieldDescriptionPlaceholder}
              className={`w-full px-3.5 py-2.5 bg-[#0F121B] border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                errors.description ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-[#00FF9D]'
              }`}
            />
            {errors.description && (
              <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.description}
              </span>
            )}
          </div>

          {/* Tags & Impact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.createModal.fieldTags}
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={e => setTagsInput(e.target.value)}
                placeholder={t.createModal.fieldTagsPlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#0F121B] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.createModal.fieldImpact}
              </label>
              <select
                value={impact}
                onChange={e => setImpact(e.target.value as ImpactLevel)}
                className="w-full px-3.5 py-2.5 bg-[#0F121B] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#00FF9D]"
              >
                <option value="Transformative">{t.impacts.Transformative}</option>
                <option value="High">{t.impacts.High}</option>
                <option value="Moderate">{t.impacts.Moderate}</option>
              </select>
            </div>
          </div>

          {/* External Link & Author Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.createModal.fieldAuthor}
              </label>
              <input
                type="text"
                value={authorName}
                onChange={e => setAuthorName(e.target.value)}
                placeholder={t.createModal.fieldAuthorPlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#0F121B] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.createModal.fieldLink}
              </label>
              <input
                type="url"
                value={externalLink}
                onChange={e => setExternalLink(e.target.value)}
                placeholder={t.createModal.fieldLinkPlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#0F121B] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
              />
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t.createModal.cancel}
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#00FF9D] to-[#38BDF8] hover:from-[#00FF9D]/90 hover:to-[#38BDF8]/90 rounded-xl shadow-[0_0_20px_rgba(0,255,157,0.25)] transition-all cursor-pointer"
            >
              {editingIdea ? t.createModal.submitUpdate : t.createModal.submitCreate}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
