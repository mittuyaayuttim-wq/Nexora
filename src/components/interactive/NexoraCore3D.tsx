import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, Zap, Sparkles } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export const NexoraCore3D: React.FC = () => {
  const { t } = useTranslation();
  const [rotation, setRotation] = useState({ x: 18, y: -24 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Auto rotation loop with smooth drift
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAutoRotate(false);
      return;
    }

    const animate = (time: number) => {
      if (lastTimeRef.current !== 0 && autoRotate && !isHovered) {
        const delta = (time - lastTimeRef.current) * 0.035;
        setRotation(prev => ({
          x: prev.x + Math.sin(time * 0.001) * 0.08,
          y: (prev.y + delta) % 360
        }));
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [autoRotate, isHovered]);

  // Handle pointer tracking for subtle interactive response
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotation({
      x: -y * 0.15,
      y: x * 0.2
    });
  };

  const triggerPulse = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 900);
  };

  const resetView = () => {
    setRotation({ x: 18, y: -24 });
    setAutoRotate(true);
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center p-4 md:p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Outer ambient glow halo */}
      <div 
        className={`absolute w-72 h-72 md:w-96 md:h-96 rounded-full transition-all duration-700 pointer-events-none ${
          isPulsing 
            ? 'scale-125 opacity-70 bg-gradient-to-tr from-[#00FF9D]/30 via-[#38BDF8]/20 to-[#8B5CF6]/40 blur-2xl' 
            : 'opacity-40 bg-gradient-to-tr from-[#00FF9D]/15 via-[#8B5CF6]/15 to-transparent blur-3xl'
        }`}
      />

      {/* 3D Scene Viewport */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000 flex items-center justify-center cursor-grab active:cursor-grabbing">
        {/* Orbital rings */}
        <div 
          className="absolute inset-0 rounded-full border border-dashed border-[#8B5CF6]/25 animate-spin-slow pointer-events-none"
          style={{ transform: 'rotateX(70deg) scale(1.15)' }}
        />
        <div 
          className="absolute inset-4 rounded-full border border-slate-700/40 pointer-events-none"
          style={{ transform: 'rotateY(60deg) scale(0.95)' }}
        />

        {/* 3D Geometric Crystal Core */}
        <div 
          className="relative w-40 h-40 md:w-48 md:h-48 preserve-3d transition-transform duration-150 ease-out"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
        >
          {/* Central Nexora Hologram Node */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00FF9D] to-[#8B5CF6] opacity-80 blur-md transition-all duration-500 ${isPulsing ? 'scale-150 opacity-100' : ''}`} />
          </div>

          {/* Facet 1: Front Pentagon / Crystal face */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#00FF9D]/50 bg-gradient-to-br from-[#00FF9D]/15 via-[#0A0D14]/80 to-[#8B5CF6]/20 backdrop-blur-sm shadow-[0_0_25px_rgba(0,255,157,0.2)]"
            style={{ transform: 'translateZ(64px)' }}
          >
            <div className="w-16 h-16 opacity-80">
              <img 
                src="/assets/aistudio/image_58ec79f9.png" 
                alt="Nexora Brand Mark" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,255,157,0.6)]"
              />
            </div>
          </div>

          {/* Facet 2: Back facet */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#8B5CF6]/40 bg-gradient-to-tl from-[#8B5CF6]/20 via-[#0A0D14]/90 to-[#00FF9D]/10 backdrop-blur-sm"
            style={{ transform: 'rotateY(180deg) translateZ(64px)' }}
          >
            <Sparkles className="w-10 h-10 text-[#8B5CF6]/70" />
          </div>

          {/* Facet 3: Left facet */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#38BDF8]/40 bg-gradient-to-tr from-[#38BDF8]/20 via-[#0A0D14]/85 to-transparent backdrop-blur-sm"
            style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}
          >
            <div className="w-10 h-10 border border-[#38BDF8]/60 rotate-45" />
          </div>

          {/* Facet 4: Right facet */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#A855F7]/40 bg-gradient-to-bl from-[#A855F7]/25 via-[#0A0D14]/85 to-transparent backdrop-blur-sm"
            style={{ transform: 'rotateY(90deg) translateZ(64px)' }}
          >
            <div className="w-12 h-12 rounded-full border border-dashed border-[#A855F7]/70" />
          </div>

          {/* Facet 5: Top facet */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#00FF9D]/40 bg-gradient-to-b from-[#00FF9D]/20 via-[#0A0D14]/85 to-transparent backdrop-blur-sm"
            style={{ transform: 'rotateX(90deg) translateZ(64px)' }}
          />

          {/* Facet 6: Bottom facet */}
          <div 
            className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#8B5CF6]/40 bg-gradient-to-t from-[#8B5CF6]/25 via-[#0A0D14]/85 to-transparent backdrop-blur-sm"
            style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}
          />
        </div>
      </div>

      {/* Floating telemetry label & interaction controls */}
      <div className="mt-3 flex flex-col items-center gap-2">
        <span className="text-xs font-mono tracking-wider text-slate-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
          {t.core3d.rotateText}
        </span>

        {/* Action controls */}
        <div className="flex items-center gap-2 bg-[#0F121B]/90 border border-white/10 rounded-lg p-1 text-xs">
          <button
            onClick={triggerPulse}
            className="flex items-center gap-1.5 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-white/5 rounded transition-colors whitespace-nowrap"
            title={t.core3d.pulseBtn}
          >
            <Zap className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>{t.core3d.pulseBtn}</span>
          </button>
          <div className="w-px h-3 bg-white/10" />
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
              autoRotate ? 'text-[#00FF9D] bg-[#00FF9D]/10' : 'text-slate-400 hover:text-white'
            }`}
            title="Auto Orbit"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span>{autoRotate ? 'Orbit On' : 'Orbit Off'}</span>
          </button>
          <div className="w-px h-3 bg-white/10" />
          <button
            onClick={resetView}
            className="px-2 py-1 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors whitespace-nowrap"
            title={t.core3d.resetBtn}
          >
            {t.core3d.resetBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
