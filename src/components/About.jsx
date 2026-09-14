import React from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Building2, 
  ShieldAlert, 
  Sparkles, 
  Clock, 
  Truck,
  Shovel,
  Compass,
  MapPin
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function About() {
  const valueIcons = [
    <Truck className="text-blue-600" size={24} />,
    <Compass className="text-blue-600" size={24} />,
    <Clock className="text-blue-600" size={24} />,
    <ShieldAlert className="text-blue-600" size={24} />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-3">
            <Shovel size={15} />
            <span>عن صقر الجنوب ({companyData.shortCode})</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            خبرة ميدانية متخصصة في الحفر والردم وتأهيل التربة للمشاريع العملاقة
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Story & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Images Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=600&q=80"
                  alt="معدات الحفر والردم في الموقع"
                  className="rounded-2xl shadow-lg object-cover w-full h-56 border-2 border-slate-100"
                />
                <div className="p-5 rounded-2xl bg-blue-600 text-white shadow-xl">
                  <span className="block text-3xl font-black mb-1">+8M م³</span>
                  <span className="text-xs font-semibold text-blue-100">
                    أعمال حفر وردم وتسوية تم تسليمها بنجاح واختبارات معتمدة
                  </span>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-slate-800">
                  <span className="block text-2xl font-black text-blue-900 mb-1">المقر: الإسكندرية</span>
                  <div className="flex items-center gap-1 text-xs font-medium text-slate-600 mt-1">
                    <MapPin size={13} className="text-amber-500" />
                    <span>العجمي - انطلاقة العمل لكافة المحافظات</span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                  alt="أسطول معدات ثقيلة"
                  className="rounded-2xl shadow-lg object-cover w-full h-56 border-2 border-slate-100"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              نمتلك الإمكانيات والآليات لإنجاز أصعب أعمال التربة في أضيق الجداول الزمنية
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {companyData.about.story}
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-white border border-blue-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <Eye size={22} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">رؤيتنا</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {companyData.about.vision}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-white border border-blue-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <Target size={22} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">رسالتنا</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {companyData.about.mission}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Core Values Grid */}
        <div className="mt-12 pt-12 border-t border-slate-100">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              ركائز العمل الميداني في صقر الجنوب
            </h3>
            <p className="text-slate-500 text-sm mt-1">معايير هندسية تضمن جودة التأسيس وحماية المنشآت</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.about.values.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-700 flex items-center justify-center mb-4 transition-colors">
                  {valueIcons[idx] || <CheckCircle2 size={24} />}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
