import React, { useState } from 'react';
import { X, LogIn, Sparkles, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, t, signInWithGoogle } = useApp();
  const [customEmail, setCustomEmail] = useState('mittuyaayuttim@gmail.com');

  if (!isAuthModalOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithGoogle(customEmail.trim() || undefined);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsAuthModalOpen(false)}
    >
      <div 
        className="relative w-full max-w-md bg-[#0D1018] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-7 text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
            <img 
              src="/assets/aistudio/image_58ec79f9.png" 
              alt="Nexora Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {t.auth.modalTitle}
            </h3>
            <p className="text-xs text-slate-400">
              {t.auth.modalSubtitle}
            </p>
          </div>
        </div>

        {/* Google Sign-in Main Action */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              {t.auth.emailLabel}
            </label>
            <input
              type="email"
              value={customEmail}
              onChange={e => setCustomEmail(e.target.value)}
              placeholder="ismingiz@gmail.com"
              className="w-full px-3.5 py-2.5 bg-[#0F121B] border border-white/10 focus:border-[#00FF9D] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm rounded-xl transition-all shadow-lg active:scale-[0.99] cursor-pointer"
          >
            {/* Real Google Colored G Icon */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{t.auth.googleBtn}</span>
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#00FF9D] shrink-0" />
          <span>{t.auth.guestNotice}</span>
        </div>
      </div>
    </div>
  );
};
