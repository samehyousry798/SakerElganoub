import React from 'react';
import { Handshake, Building } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Partners() {
  return (
    <section id="partners" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs sm:text-sm font-bold mb-2">
            <Handshake size={15} />
            <span>شراكات النجاح</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
            نعتز بثقة كبرى المؤسسات والمطورين العقاريين
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            تعاونّا مع أكبر الكيانات الإنشائية والتطويرية في مصر لإنجاز مشاريع استراتيجية
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {companyData.clients.map((client) => (
            <div
              key={client.name}
              className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Building size={24} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition">
                {client.name}
              </h3>
              <span className="text-[11px] text-slate-400 font-medium mt-1">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
