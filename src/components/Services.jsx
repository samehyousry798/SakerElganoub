import React from 'react';
import { 
  Building2, 
  Truck, 
  HardHat, 
  Layers, 
  Compass, 
  ArrowLeft, 
  Check, 
  Wrench,
  Tractor,
  Pickaxe
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Shovel':
        return <Pickaxe size={26} className="text-blue-600" />;
      case 'Layers':
        return <Layers size={26} className="text-blue-600" />;
      case 'Tractor':
        return <Tractor size={26} className="text-blue-600" />;
      case 'Building2':
        return <Building2 size={26} className="text-blue-600" />;
      case 'Truck':
        return <Truck size={26} className="text-blue-600" />;
      case 'HardHat':
        return <HardHat size={26} className="text-blue-600" />;
      default:
        return <Wrench size={26} className="text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold mb-3">
            <Wrench size={14} />
            <span>خدمات وأعمال التربة والإنشاءات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            خدمات متخصصة في الحفر والردم وتأهيل المواقع الإنشائية
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            نضع أسس المشاريع القوية عبر حلول متكاملة لتهيئة التربة، نقل المخلفات، التشوين، والدك الميكانيكي طبقاً للمواصفات الهندسية.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top: Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <span className="group-hover:text-white transition-colors">
                      {React.cloneElement(getIcon(service.icon), {
                        className: "group-hover:text-white text-blue-600 transition-colors"
                      })}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Feature bullets */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-100/60 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Request Service Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full text-sm font-bold text-blue-600 group-hover:text-blue-700 hover:underline"
                >
                  <span>طلب مقايسة لهذه الخدمة</span>
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-[#0A2540] rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-black">
              هل لديك موقع يتطلب أعمال حفر أو ردم أو تسوية فورية؟
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
              مهندسونا ومعداتنا بالإسكندرية والعجمي والساحل جاهزون للمعاينة وتحديد كميات الحفر والردم وتقديم تسعير منافس وفوري.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-7 py-3.5 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            تواصل مع مهندس الموقع الآن
          </a>
        </div>
      </div>
    </section>
  );
}
