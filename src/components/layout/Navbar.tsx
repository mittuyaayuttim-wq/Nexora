import React, { useState, useRef, useEffect } from 'react';
import { Plus, Globe, ChevronDown, User as UserIcon, Menu, X, Sparkles, LogIn } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Language } from '../../types';

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: 'uz', label: "O‘zbekcha", flag: '🇺🇿' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }
];

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    t, 
    user, 
    setIsCreateModalOpen, 
    setIsProfileDrawerOpen, 
    setIsAuthModalOpen,
    setActiveCategory,
    setSelectedTab
  } = useApp();

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languageOptions.find(l => l.code === language) || languageOptions[0];

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);
    if (section === 'ideas') {
      setSelectedTab('all');
      document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'trends') {
      setSelectedTab('trending');
      document.getElementById('ideas-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'categories') {
      document.getElementById('categories-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about') {
      document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'community') {
      document.getElementById('community-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07080D]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
            <img 
              src="/assets/aistudio/image_58ec79f9.png" 
              alt="Nexora Brand Logo" 
              className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center">
            Nexora
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('ideas')}
            className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.ideas}
          </button>
          <button 
            onClick={() => handleNavClick('trends')}
            className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.trends}
          </button>
          <button 
            onClick={() => handleNavClick('categories')}
            className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.categories}
          </button>
          <button 
            onClick={() => handleNavClick('community')}
            className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.community}
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.about}
          </button>
        </nav>

        {/* Zone 3: Language selector + Google Auth / Profile + Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-[#00FF9D]"
              aria-label="Language selector"
            >
              <span className="text-sm">{currentLang.flag}</span>
              <span className="font-mono uppercase">{currentLang.code}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#0F121B] border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                      language === opt.code
                        ? 'bg-[#00FF9D]/15 text-[#00FF9D]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </span>
                    {language === opt.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Auth / Profile Button */}
          {user.isLoggedIn ? (
            <button
              onClick={() => setIsProfileDrawerOpen(true)}
              className="flex items-center gap-2 p-1 pl-2 pr-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg text-xs font-medium text-slate-200 transition-colors whitespace-nowrap shrink-0"
              title={t.nav.profile}
            >
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-5 h-5 rounded-full object-cover ring-1 ring-[#00FF9D]/50" 
              />
              <span className="hidden sm:inline max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <LogIn className="w-3.5 h-3.5 text-[#00FF9D]" />
              <span className="hidden sm:inline">{t.nav.signIn}</span>
            </button>
          )}

          {/* Primary CTA: "G‘oyamni ulashish" */}
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00FF9D] to-[#38BDF8] hover:from-[#00FF9D]/90 hover:to-[#38BDF8]/90 rounded-lg shadow-[0_0_20px_rgba(0,255,157,0.25)] hover:shadow-[0_0_25px_rgba(0,255,157,0.4)] transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-slate-950" />
            <span className="hidden sm:inline">{t.nav.shareIdea}</span>
            <span className="sm:hidden">{t.card.share}</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/5"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#07080D]/95 px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => handleNavClick('ideas')}
            className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            {t.nav.ideas}
          </button>
          <button
            onClick={() => handleNavClick('trends')}
            className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            {t.nav.trends}
          </button>
          <button
            onClick={() => handleNavClick('categories')}
            className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            {t.nav.categories}
          </button>
          <button
            onClick={() => handleNavClick('community')}
            className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            {t.nav.community}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
          >
            {t.nav.about}
          </button>
          {!user.isLoggedIn && (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAuthModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg"
            >
              <LogIn className="w-4 h-4 text-[#00FF9D]" />
              {t.nav.signIn}
            </button>
          )}
        </div>
      )}
    </header>
  );
};
