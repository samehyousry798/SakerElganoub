import React from 'react';
import { X, MapPin, Calendar, Maximize2, Clock, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 flex items-center justify-center transition shadow-lg"
            aria-label="إغلاق النافذة"
          >
            <X size={20} />
          </button>

          {/* Badge & Title on image */}
          <div className="absolute bottom-4 right-4 left-4 text-white">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2 shadow">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-blue-50/60 rounded-xl border border-blue-100 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-1">
                <MapPin size={14} className="text-blue-600" />
                <span>الموقع</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">{project.location}</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-1">
                <Maximize2 size={14} className="text-blue-600" />
                <span>المساحة الإجمالية</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">{project.area}</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-1">
                <Clock size={14} className="text-blue-600" />
                <span>مدة التنفيذ</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">{project.duration}</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-1">
                <Calendar size={14} className="text-blue-600" />
                <span>سنة التسليم</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">{project.year}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2">نبذة تفصيلية عن المشروع</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Standards applied */}
          <div className="border-t border-slate-100 pt-4">
            <h4 className="text-sm font-bold text-slate-800 mb-3">المعايير المطبقة في هذا المشروع:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>مطابقة اشتراطات الكود الهندسي المصري</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>اختبارات ضبط جودة الخرسانة والتربة المعتمدة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>أنظمة سلامة وعزل مائي وحراري فائقة المتانة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>تسليم المشروع طبقاً للموعد الزمني التعاقدي</span>
              </div>
            </div>
          </div>

          {/* CTA inside modal */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              هل لديك مشروع مماثل ترغب في تنفيذه بدقة واحترافية؟
            </span>
            <a
              href="#contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl text-center shadow-md hover:shadow-blue-500/25 transition"
            >
              طلب تسعيرة لهذا النوع من المشاريع
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
