import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
}

export const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for gentle interaction
    let mouse = { x: -1000, y: -1000, active: false };

    // Device performance tuning
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 22 : 54;
    const connectionDistance = isMobile ? 95 : 140;

    const colors = [
      'rgba(0, 255, 157, ',  // Electric green
      'rgba(139, 92, 246, ', // Neon violet
      'rgba(56, 189, 248, ', // Electric cyan
      'rgba(168, 85, 247, '  // Vibrant purple
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const colorBase = colors[i % colors.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.55),
        vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.55),
        radius: Math.random() * 1.8 + 1,
        color: colorBase,
        alpha: Math.random() * 0.4 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid dots for spatial texture
      const gridSpacing = 64;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        for (let y = gridSpacing; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Gentle mouse repulsion / magnetism
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130 && dist > 0) {
              const force = (130 - dist) / 130;
              p.x += (dx / dist) * force * 1.5;
              p.y += (dy / dist) * force * 1.5;
            }
          }
        }

        // Particle pulse alpha
        const pulse = Math.sin(time * 2 + i) * 0.15;
        const currentAlpha = Math.max(0.1, Math.min(0.75, p.alpha + pulse));

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = p.color === colors[0] ? '#00FF9D' : '#8B5CF6';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for lines

        // Draw connections between neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0" 
      aria-hidden="true"
    >
      {/* Layer 0: Base deep graphite-black mesh */}
      <div className="absolute inset-0 bg-[#07080D]" />

      {/* Layer 1: Ambient Luminous Aurora Clouds */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[520px] h-[520px] md:w-[780px] md:h-[780px] rounded-full opacity-20 blur-[130px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, rgba(139, 92, 246, 0) 70%)'
        }}
      />
      <div 
        className="absolute top-[35%] -right-[10%] w-[480px] h-[480px] md:w-[680px] md:h-[680px] rounded-full opacity-15 blur-[140px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, #00FF9D 0%, rgba(0, 255, 157, 0) 70%)',
          animationDelay: '-3.5s'
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[25%] w-[440px] h-[440px] md:w-[640px] md:h-[640px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, rgba(6, 182, 212, 0) 70%)'
        }}
      />

      {/* Layer 2: Floating geometric origami facets (echoing Nexora's brand geometry) */}
      <div className="absolute top-[18%] left-[6%] w-24 h-24 md:w-36 md:h-36 opacity-30 animate-float-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#8B5CF6]/40 stroke-[1.2]">
          <polygon points="50,5 95,38 78,92 22,92 5,38" />
          <polygon points="50,20 80,45 68,80 32,80 20,45" className="stroke-[#00FF9D]/30 stroke-[0.8]" />
          <line x1="50" y1="5" x2="50" y2="92" className="stroke-white/10 stroke-[0.5]" />
          <line x1="5" y1="38" x2="95" y2="38" className="stroke-white/10 stroke-[0.5]" />
        </svg>
      </div>

      <div 
        className="absolute top-[62%] right-[8%] w-28 h-28 md:w-44 md:h-44 opacity-25 animate-float-slow" 
        style={{ animationDelay: '-4s' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#00FF9D]/30 stroke-[1.2]">
          <path d="M50 10 L85 80 L15 80 Z" />
          <path d="M50 25 L75 75 L25 75 Z" className="stroke-[#38BDF8]/40" />
          <circle cx="50" cy="50" r="1.5" className="fill-[#00FF9D]" />
        </svg>
      </div>

      <div 
        className="absolute bottom-[20%] left-[12%] w-20 h-20 md:w-32 md:h-32 opacity-20 animate-float-slow" 
        style={{ animationDelay: '-6s' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#A855F7]/30 stroke-[1]">
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="30" className="stroke-white/10 stroke-dashed" />
        </svg>
      </div>

      {/* Layer 3: Interactive Dynamic Canvas Particles & Mesh Connections */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full"
      />

      {/* Layer 4: Vignette overlay for content contrast & readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, transparent 40%, rgba(7, 8, 13, 0.75) 90%, #07080D 100%)'
        }}
      />
    </div>
  );
};
