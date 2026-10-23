import React from 'react';
import { Cpu, Globe2, Rocket, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AboutSection: React.FC = () => {
  const { t, setIsCreateModalOpen } = useApp();

  return (
    <section id="about-section" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-[#00FF9D] mb-2 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            <span>NEXORA Missiyasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            G‘oyadan Reallikkacha: Yangi Avlod Texnologik Kelajagi
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Biz g‘oyalarni faqat qog‘ozda qolib ketishiga yo‘l qo‘ymaymiz. NEXORA — muhandislar, tadqiqotchilar va innovatorlarni yagona erkin maydonda birlashtiruvchi ekotizimdir.
          </p>
        </div>

        {/* 3 Pillar Cards (Asymmetric) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#0D1018]/80 border border-white/[0.08] hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center mb-5">
              <Cpu className="w-6 h-6 text-[#00FF9D]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              01. Ochiq Texnologik Ekologiya
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Barcha g‘oyalar ochiq formatda taqdim etiladi. Sun'iy intellekt, kvant hisoblash va yashil energetika yo‘nalishlaridagi arxitekturalar erkin muhokama qilinadi.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D1018]/80 border border-white/[0.08] hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center mb-5">
              <Rocket className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              02. Ilmiy & Muhandislik Hamkorligi
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Har bir loyihaga fikr bildirish, yaxshilash takliflarini kiritish va birgalikda prototip ishlab chiqish imkoniyati mavjud.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D1018]/80 border border-white/[0.08] hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center mb-5">
              <Globe2 className="w-6 h-6 text-[#38BDF8]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              03. Global Ko‘rinish & E'tirof
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Platforma 5 ta jahon tilida ishlaydi: O‘zbek, Ingliz, Rus, Turk va Ispan. O‘zbekistonlik mualliflarning kashfiyotlari butun dunyo jamoatchiligiga yetkaziladi.
            </p>
          </div>
        </div>

        {/* Community Banner Callout */}
        <div id="community-section" className="mt-12 rounded-2xl bg-gradient-to-r from-[#0F1424] via-[#12182B] to-[#0B0F1C] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Sizda ham dunyoni o‘zgartiruvchi g‘oya bormi?
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Bugunoq o‘z konsepsiyangizni NEXORA hamjamiyatiga taqdim eting. Ilk fikr-mulohazalarni oling va loyihangizni yangi bosqichga olib chiqing.
            </p>
          </div>

          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00FF9D] to-[#38BDF8] hover:from-[#00FF9D]/90 hover:to-[#38BDF8]/90 rounded-xl shadow-[0_0_25px_rgba(0,255,157,0.3)] transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>{t.hero.shareBtn}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
};
