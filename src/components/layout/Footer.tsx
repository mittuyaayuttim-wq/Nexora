import React from 'react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';

export const Footer: React.FC = () => {
  const { t, language, setLanguage, setSelectedTab, setActiveCategory } = useApp();

  const handleNav = (tab: string) => {
    setSelectedTab(tab);
    document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: "O‘zbekcha" },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'es', label: 'Español' }
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#05060A] pt-14 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/assets/aistudio/image_58ec79f9.png" 
                alt="Nexora Brand Logo" 
                className="w-7 h-7 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Nexora
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            {/* Language Switcher Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    language === l.code
                      ? 'bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30'
                      : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.06]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => handleNav('all')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.ideas}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('trending')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.trends}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('featured')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.explorer.tabs.featured}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('favorites')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.explorer.tabs.favorites}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.categoriesTitle}
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-400">
              <button 
                onClick={() => {
                  setActiveCategory('ai');
                  document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {t.explorer.categories.ai}
              </button>
              <button 
                onClick={() => {
                  setActiveCategory('web');
                  document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {t.explorer.categories.web}
              </button>
              <button 
                onClick={() => {
                  setActiveCategory('space');
                  document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {t.explorer.categories.space}
              </button>
              <button 
                onClick={() => {
                  setActiveCategory('green');
                  document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {t.explorer.categories.green}
              </button>
              <button 
                onClick={() => {
                  setActiveCategory('design');
                  document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {t.explorer.categories.design}
              </button>
              <button 
                onClick={() => {
                  setActiveCategory('business');
                  document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {t.explorer.categories.business}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 NEXORA. {t.footer.rights}</p>
          <p>{t.footer.developedWith}</p>
        </div>
      </div>
    </footer>
  );
};
