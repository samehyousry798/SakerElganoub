import React from 'react';
import { ArrowLeft, ShieldCheck, MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-36 sm:pt-40 pb-20 overflow-hidden bg-slate-950"
    >
      {/* 1. الخلفية: صورة المعدات والحفارات في الأرض الرملية ممتدة بعرض الشاشة وخلف الكلام مباشرة */}
      <img 
        src="/hero-sand.jpg" 
        alt="أسطول حفارات ومعدات صقر الجنوب تعمل في تسوية أراضي رملية" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. تراكب داكن قوي يبرز المعدات الرملية بوضوح ويضمن قراءة الكلام بنسبة 100% */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/90 pointer-events-none" />

      {/* 3. محتوى الهيدر: فائق الوضوح ومباشر بدون زحمة */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* شارة الشركة البارزة */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black shadow-xl mb-6 border border-blue-300/40">
          <ShieldCheck size={18} className="text-white" />
          <span>شركة صقر الجنوب للمقاولات العامة (SGC)</span>
        </div>

        {/* عنوان رئيسي واضح جداً وحاد التباين */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] mb-6">
          أعمال الحفر والردم <br className="hidden sm:inline" />
          <span className="text-sky-400">وتسوية الأراضي والإنشائيات</span>
        </h1>

        {/* سطر تعريفي عريض فائق الوضوح */}
        <p className="text-base sm:text-xl md:text-2xl text-white font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] mb-8">
          تنفيذ أضخم مشاريع تسوية المواقع والحفر الصخري والرملي بأحدث أساطيل الحفارات والمعدات الثقيلة في الإسكندرية والساحل الشمالي.
        </p>

        {/* أزرار الإجراء السريع بألوان زاهية وواضحة جداً */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-base sm:text-lg shadow-2xl shadow-blue-600/60 hover:shadow-blue-500/70 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>طلب معاينة ومقايسة للموقع</span>
            <ArrowLeft size={20} />
          </a>

          <a
            href={`https://wa.me/${companyData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg shadow-2xl shadow-emerald-600/60 hover:shadow-emerald-500/70 transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare size={20} />
            <span>تواصل واتساب فوري</span>
          </a>
        </div>

      </div>
    </section>
  );
}

