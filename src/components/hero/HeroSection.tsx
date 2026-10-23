import React from 'react';
import { ArrowRight, Plus, Sparkles, Compass, Lightbulb, Users, Activity } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NexoraCore3D } from '../interactive/NexoraCore3D';

export const HeroSection: React.FC = () => {
  const { t, setIsCreateModalOpen, setSelectedTab } = useApp();

  const handleExploreClick = () => {
    setSelectedTab('all');
    const el = document.getElementById('ideas-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-14 md:pt-16 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Subtle Editorial Kicker (no generic pills) */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#00FF9D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.badge}</span>
              <span className="text-white/20">·</span>
              <span className="text-slate-400">2026 Ecosytem</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl text-balance">
              <span>{t.hero.titleStart} </span>
              <span className="bg-gradient-to-r from-[#00FF9D] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent">
                {t.hero.titleGradient}
              </span>
              {t.hero.titleEnd && <span> {t.hero.titleEnd}</span>}
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl text-balance">
              {t.hero.description}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Action: Explore */}
              <button
                onClick={handleExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00FF9D] to-[#38BDF8] hover:from-[#00FF9D]/90 hover:to-[#38BDF8]/90 rounded-xl shadow-[0_0_30px_rgba(0,255,157,0.3)] hover:shadow-[0_0_40px_rgba(0,255,157,0.5)] transition-all duration-200 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4 text-slate-950" />
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              {/* Secondary Action: Share My Idea */}
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.15] hover:border-white/30 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <Plus className="w-4 h-4 text-[#00FF9D]" />
                <span>{t.hero.shareBtn}</span>
              </button>
            </div>

            {/* Claim-to-Proof Micro Badges */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" />
                Ochiq Innovatsiya
              </span>
              <span className="text-white/20">/</span>
              <span>100% O‘zbek Tili</span>
              <span className="text-white/20">/</span>
              <span>Futuristik Dizayn</span>
            </div>
          </div>

          {/* Right Column: Central Interactive 3D Quantum Object (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <NexoraCore3D />
          </div>
        </div>

        {/* Claim-to-Proof KPI Strip (adjacent, full-width row below hero split) */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 text-[#00FF9D]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                {t.hero.stats.ideasCount}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {t.hero.stats.ideasLabel}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                {t.hero.stats.innovatorsCount}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {t.hero.stats.innovatorsLabel}
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                {t.hero.stats.impactRate}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {t.hero.stats.impactLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
