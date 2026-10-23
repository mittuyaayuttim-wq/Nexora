import React, { useState } from 'react';
import { X, Copy, Check, Send, MessageCircle, Share2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ShareModal: React.FC = () => {
  const { shareIdeaData, setShareIdeaData, t, addToast } = useApp();
  const [copied, setCopied] = useState(false);

  if (!shareIdeaData) return null;

  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}#idea-${shareIdeaData.id}` 
    : `https://nexora.io#idea-${shareIdeaData.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    addToast(t.toast.linkCopied, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = encodeURIComponent(`NEXORA: ${shareIdeaData.title}\n${shareIdeaData.summary}\n${currentUrl}`);

  const handleTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareIdeaData.title)}`, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
  };

  const handleX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareIdeaData.title)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareIdeaData.title,
          text: shareIdeaData.summary,
          url: currentUrl
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setShareIdeaData(null)}
    >
      <div 
        className="relative w-full max-w-md bg-[#0D1018] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-7 text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShareIdeaData(null)}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h3 className="text-lg font-bold text-white">
          {t.shareModal.title}
        </h3>
        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
          {shareIdeaData.title}
        </p>

        {/* Copy Link Input Bar */}
        <div className="mt-5 flex items-center gap-2 p-1.5 bg-[#0F121B] border border-white/10 rounded-xl">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent px-2.5 text-xs text-slate-300 font-mono outline-none truncate"
          />
          <button
            onClick={handleCopyLink}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 ${
              copied 
                ? 'bg-[#00FF9D] text-slate-950' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? t.shareModal.copied : t.shareModal.copyLink}</span>
          </button>
        </div>

        {/* Social Share Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <button
            onClick={handleTelegram}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#229ED9]/15 hover:bg-[#229ED9]/25 text-[#229ED9] border border-[#229ED9]/30 text-xs font-medium transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Telegram</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handleX}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium transition-colors"
          >
            <span className="font-bold text-sm">𝕏</span>
            <span>X (Twitter)</span>
          </button>

          <button
            onClick={handleNativeShare}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#8B5CF6]/15 hover:bg-[#8B5CF6]/25 text-[#A855F7] border border-[#8B5CF6]/30 text-xs font-medium transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.shareModal.nativeShare}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
