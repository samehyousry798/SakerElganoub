import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* الخلفية */}
      <img 
        src="/hero-sand.jpg" 
        alt="أسطول حفارات ومعدات صقر الجنوب" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* تراكب داكن من اليمين للشمال (RTL) */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950/98 via-slate-950/75 to-slate-950/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40 pointer-events-none" />

      {/* المحتوى - محاذاة يمين */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <div className="max-w-2xl mr-0 ml-auto lg:ml-0 text-right">

          {/* الاسم الرئيسي */}
          <h1 className="font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] mb-3">
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-white/80 font-bold">صقر الجنوب</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">للمقاولات</span>
          </h1>

          {/* الشعار */}
          <div className="flex items-center justify-end gap-3 my-6">
            <span className="h-px flex-1 max-w-xs bg-gradient-to-l from-sky-400/80 to-transparent" />
            <p className="text-2xl sm:text-3xl text-sky-300 font-black tracking-wide whitespace-nowrap">
              شريك مثالي للنجاح
            </p>
          </div>

          {/* أزرار */}
          <div className="flex flex-wrap items-center justify-end gap-3 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm sm:text-base shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 transition-all hover:-translate-y-0.5"
            >
              <Mail size={18} />
              <span>تواصل معنا</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white/80 hover:text-white font-bold text-sm sm:text-base border border-white/15 hover:border-white/30 transition-all"
            >
              <span>خدماتنا</span>
              <ArrowLeft size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
