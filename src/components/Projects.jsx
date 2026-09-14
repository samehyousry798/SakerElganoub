import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Eye, 
  Layers,
  Shovel 
} from 'lucide-react';
import { companyData } from '../data/companyData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { key: 'all', label: 'كافة المشاريع' },
    { key: 'earthworks', label: 'أعمال الحفر والردم' },
    { key: 'site-prep', label: 'تجهيز المواقع وتطهيرها' },
    { key: 'infrastructure', label: 'بنية تحتية وطرق' },
    { key: 'construction', label: 'إنشائيات وخرسانات' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? companyData.projects
    : companyData.projects.filter(p => p.categoryKey === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-3">
            <Layers size={14} />
            <span>سجل المشاريع الميدانية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            نماذج من مواقع الحفر والردم والإنشائيات المنفذة
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            مشاريع كبرى في الإسكندرية والساحل الشمالي والعلمين والقاهرة تبرز كفاءة أسطولنا ودقة إنجازنا.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-blue-900 text-xs font-bold rounded-lg shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Quick inspect button hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-950/40 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-blue-900 text-xs sm:text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={16} className="text-blue-600" />
                    <span>عرض التفاصيل والمناسيب</span>
                  </span>
                </div>

                {/* Project Title and Location on bottom of image */}
                <div className="absolute bottom-3 right-3 left-3 text-white">
                  <h3 className="text-lg font-bold drop-shadow-md group-hover:text-blue-200 transition">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-200 mt-1">
                    <MapPin size={13} className="text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1 font-bold text-blue-900">
                  <Maximize2 size={13} className="text-blue-600" />
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center gap-1 font-medium">
                  <Calendar size={13} className="text-blue-600" />
                  <span>إنجاز {project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for project details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
