import React from 'react';
import { Handshake } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Partners() {
  const clients = companyData.clients;
  // Repeat clients to ensure continuous infinite loop across all screen sizes
  const trackItems = [...clients, ...clients];

  return (
    <section id="partners" className="py-18 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative backdrop glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto scroll-reveal">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold mb-3">
            <Handshake size={15} />
            <span>شركاؤنا في النجاح</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            نعتز بثقة كبرى شركات التطوير والإنشاءات
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            سجل حافل بالتعاون مع رواد التطوير العقاري والمقاولات في مصر لإنجاز كبرى المشاريع القومية والاستثمارية
          </p>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>
      </div>

      {/* Infinite Moving Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-4 select-none" dir="ltr">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Tracks Container (Pauses smoothly on hover) */}
        <div className="flex group w-max hover:[&>*]:[animation-play-state:paused]">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-6 pr-6 animate-marquee">
            {trackItems.map((client, idx) => (
              <div
                key={`track1-${client.name}-${idx}`}
                dir="rtl"
                className="w-72 sm:w-80 shrink-0 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between text-center group/card"
              >
                {/* Logo Canvas */}
                <div className="w-full h-24 rounded-xl bg-slate-50/90 border border-slate-100 flex items-center justify-center p-3 mb-4 group-hover/card:bg-blue-50/30 group-hover/card:border-blue-100 transition-colors">
                  <img
                    src={client.logo}
                    alt={client.nameAr}
                    loading="lazy"
                    className={`w-auto object-contain transition-transform duration-300 group-hover/card:scale-105 ${
                      client.name.includes('Orascom') ? 'max-h-16 max-w-[200px] scale-125' : 'max-h-14 max-w-[190px]'
                    } ${client.logoClass || ''}`}
                  />
                </div>

                {/* Company Name & Sector */}
                <div className="w-full space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover/card:text-blue-700 transition-colors">
                    {client.nameAr}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 tracking-wide">
                    {client.name}
                  </p>
                </div>

                {/* Sector Badge */}
                <div className="mt-4 pt-3 border-t border-slate-100 w-full">
                  <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-100/80">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Exact clone for seamless loop) */}
          <div className="flex shrink-0 items-center gap-6 pr-6 animate-marquee" aria-hidden="true">
            {trackItems.map((client, idx) => (
              <div
                key={`track2-${client.name}-${idx}`}
                dir="rtl"
                className="w-72 sm:w-80 shrink-0 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between text-center group/card"
              >
                {/* Logo Canvas */}
                <div className="w-full h-24 rounded-xl bg-slate-50/90 border border-slate-100 flex items-center justify-center p-3 mb-4 group-hover/card:bg-blue-50/30 group-hover/card:border-blue-100 transition-colors">
                  <img
                    src={client.logo}
                    alt={client.nameAr}
                    loading="lazy"
                    className={`w-auto object-contain transition-transform duration-300 group-hover/card:scale-105 ${
                      client.name.includes('Orascom') ? 'max-h-16 max-w-[200px] scale-125' : 'max-h-14 max-w-[190px]'
                    } ${client.logoClass || ''}`}
                  />
                </div>

                {/* Company Name & Sector */}
                <div className="w-full space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover/card:text-blue-700 transition-colors">
                    {client.nameAr}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 tracking-wide">
                    {client.name}
                  </p>
                </div>

                {/* Sector Badge */}
                <div className="mt-4 pt-3 border-t border-slate-100 w-full">
                  <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-100/80">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
