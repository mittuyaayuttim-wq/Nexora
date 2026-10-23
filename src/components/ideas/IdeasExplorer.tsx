import React, { useMemo } from 'react';
import { Search, X, Sparkles, Filter, Compass, Plus, Bookmark } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { IdeaCard } from './IdeaCard';
import { CategoryId } from '../../types';

export const IdeasExplorer: React.FC = () => {
  const { 
    t, 
    ideas, 
    user, 
    activeCategory, 
    setActiveCategory, 
    searchQuery, 
    setSearchQuery, 
    selectedTab, 
    setSelectedTab,
    setIsCreateModalOpen 
  } = useApp();

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: t.explorer.categories.all },
    { id: 'ai', label: t.explorer.categories.ai },
    { id: 'web', label: t.explorer.categories.web },
    { id: 'space', label: t.explorer.categories.space },
    { id: 'green', label: t.explorer.categories.green },
    { id: 'design', label: t.explorer.categories.design },
    { id: 'business', label: t.explorer.categories.business }
  ];

  const tabs = [
    { id: 'all', label: t.explorer.tabs.all },
    { id: 'trending', label: t.explorer.tabs.trending },
    { id: 'latest', label: t.explorer.tabs.latest },
    { id: 'featured', label: t.explorer.tabs.featured },
    { id: 'favorites', label: t.explorer.tabs.favorites, count: user.savedIdeaIds.length }
  ];

  // Filter & sort logic
  const filteredIdeas = useMemo(() => {
    let result = [...ideas];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(item => item.category === activeCategory);
    }

    // Tab filter
    if (selectedTab === 'trending') {
      result.sort((a, b) => b.likes - a.likes);
    } else if (selectedTab === 'latest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (selectedTab === 'featured') {
      result = result.filter(item => item.featured);
    } else if (selectedTab === 'favorites') {
      result = result.filter(item => user.savedIdeaIds.includes(item.id));
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q)) ||
        item.author.name.toLowerCase().includes(q)
      );
    }

    return result;
  }, [ideas, activeCategory, selectedTab, searchQuery, user.savedIdeaIds]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = { all: ideas.length };
    ideas.forEach(idea => {
      map[idea.category] = (map[idea.category] || 0) + 1;
    });
    return map;
  }, [ideas]);

  return (
    <section id="ideas-section" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#00FF9D] mb-1">
              {t.explorer.featuredBadge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.explorer.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.explorer.subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.explorer.searchPlaceholder}
              className="w-full pl-10 pr-9 py-2.5 bg-[#0F121B] border border-white/10 focus:border-[#00FF9D]/60 focus:ring-1 focus:ring-[#00FF9D]/50 rounded-xl text-sm text-white placeholder-slate-500 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Filter Controls (Category buttons + View tabs) */}
        <div id="categories-section" className="mt-8 flex flex-col gap-5">
          {/* View Tabs (Segmented Control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedTab === tab.id
                    ? 'bg-white text-slate-950 font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{tab.label}</span>
                {typeof tab.count === 'number' && (
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    selectedTab === tab.id ? 'bg-slate-900 text-white' : 'bg-white/10 text-slate-300'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30'
                      : 'text-slate-400 hover:text-slate-200 bg-white/[0.02] border border-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-70 font-mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ideas Grid: Asymmetric Bento Layout */}
        <div className="mt-8">
          {filteredIdeas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIdeas.map((idea, index) => (
                <IdeaCard 
                  key={idea.id} 
                  idea={idea} 
                  isFeatured={idea.featured || (index === 0 && selectedTab === 'all' && activeCategory === 'all' && !searchQuery)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-16 px-6 text-center rounded-2xl bg-[#0D1018]/50 border border-white/[0.08] max-w-lg mx-auto my-6">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.explorer.noResults}
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 max-w-sm mx-auto">
                {t.explorer.noResultsDesc}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {(searchQuery || activeCategory !== 'all' || selectedTab !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                      setSelectedTab('all');
                    }}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    {t.explorer.resetFilters}
                  </button>
                )}
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-[#00FF9D] hover:bg-[#00FF9D]/90 rounded-lg transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-slate-950" />
                  <span>{t.hero.shareBtn}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
