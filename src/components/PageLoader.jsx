import React, { useEffect, useState } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function PageLoader({ isLoading, targetTitle, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer1, timer2, interval;
    if (isLoading) {
      setVisible(true);
      setProgress(12);

      // Smooth, deliberate progress fill over ~1.1 seconds (يغيب شوية لتظهر الحركة والشياكة)
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 96) {
            clearInterval(interval);
            return 100;
          }
          // Increment smoothly
          const increment = Math.floor(Math.random() * 8) + 6;
          return Math.min(prev + increment, 98);
        });
      }, 70);

      // At 1.15 seconds, complete progress to 100% and jump scroll
      timer1 = setTimeout(() => {
        setProgress(100);
        if (onComplete) onComplete();
      }, 1150);

      // At 1.45 seconds, smoothly fade out loader
      timer2 = setTimeout(() => {
        setVisible(false);
      }, 1450);
    } else {
      setVisible(false);
      setProgress(0);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isLoading]);

  if (!visible && !isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#071B2F]/95 backdrop-blur-lg transition-opacity duration-300 pointer-events-auto ${visible && isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Luxury Centerpiece */}
      <div className="relative flex flex-col items-center text-center p-8 max-w-sm w-full mx-4">

        {/* Animated Brand Rings with Centered SGC Logo */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-6">

          {/* Outer glowing orbital ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 border-t-sky-400 border-r-blue-500 animate-spin" />

          {/* Inner counter-rotating ring */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-amber-400 border-l-sky-300 animate-spin [animation-direction:reverse] [animation-duration:1.2s]" />

          {/* Pulsing White Brand Logo in center */}
          <div className="relative w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md p-2.5 flex items-center justify-center border border-white/20 shadow-xl shadow-blue-900/40">
            <img
              src="/logo-white.png"
              alt="صقر الجنوب SGC"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Company Identity */}
        <div className="space-y-1.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/60 border border-blue-400/30 text-white text-xs font-bold shadow-xs">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>شركة صقر الجنوب للمقاولات SGC</span>
          </div>

          <h4 className="text-lg font-black text-white tracking-wide flex items-center justify-center gap-2 pt-1">
            <Sparkles size={16} className="text-amber-400 animate-spin [animation-duration:3s]" />
            <span>{targetTitle || 'جاري التحميل...'}</span>
          </h4>
        </div>

        {/* Chic High-Tech Progress Bar with Percentage */}
        <div className="w-64 space-y-2">
          <div className="w-full h-2 bg-slate-900/90 rounded-full overflow-hidden border border-blue-500/30 p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400 rounded-full transition-all duration-150 ease-out shadow-md shadow-sky-400/50"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="text-center text-xs font-mono font-bold text-sky-400">
            {progress}%
          </div>
        </div>

      </div>
    </div>
  );
}
