import React, { useState, useRef, useMemo } from 'react';
import { 
  Building, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Eye, 
  Layers, 
  Play, 
  Video, 
  CheckCircle2, 
  Sparkles,
  Activity,
  Filter,
  RotateCcw,
  Images,
  FolderKanban
} from 'lucide-react';
import { companyData } from '../data/companyData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const featuredVideoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Filter options matching UECC structure
  const regionOptions = [
    { value: 'all', label: 'كافة المناطق (All Regions)' },
    { value: 'North Coast', label: 'الساحل الشمالي (North Coast)' },
    { value: '6th October', label: '6 أكتوبر (6th October)' },
    { value: 'New Cairo', label: 'القاهرة الجديدة (New Cairo)' },
    { value: 'Alexandria', label: 'الإسكندرية (Alexandria)' },
  ];

  const typeOptions = [
    { value: 'all', label: 'كافة أنواع المشاريع (All Types)' },
    { value: 'Resort', label: 'سياحي ومنتجعات (Resort)' },
    { value: 'Residential', label: 'سكني ومجمعات عمرانية (Residential)' },
    { value: 'Commercial', label: 'تجاري وإداري (Commercial)' },
    { value: 'Educational', label: 'تعليمي وصروح دولية (Educational)' },
  ];

  const statusOptions = [
    { value: 'all', label: 'كافة الحالات (All Statuses)' },
    { value: 'Ongoing', label: 'جاري التنفيذ حالياً (Ongoing)' },
    { value: 'Completed', label: 'مشاريع مكتملة (Completed)' },
  ];

  // Hacienda Heneish featured video project
  const featuredProject = companyData.projects.find(p => p.hasVideo) || companyData.projects[0];

  // Filtered projects logic
  const filteredProjects = useMemo(() => {
    return companyData.projects.filter((project) => {
      const regionMatch = selectedRegion === 'all' || project.region === selectedRegion;
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
      return regionMatch && typeMatch && statusMatch;
    });
  }, [selectedRegion, selectedType, selectedStatus]);

  const hasActiveFilters = selectedRegion !== 'all' || selectedType !== 'all' || selectedStatus !== 'all';

  const resetFilters = () => {
    setSelectedRegion('all');
    setSelectedType('all');
    setSelectedStatus('all');
  };

  const toggleFeaturedVideo = () => {
    if (featuredVideoRef.current) {
      if (featuredVideoRef.current.paused) {
        featuredVideoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        featuredVideoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50/50 relative">
      {/* Decorative background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span>سجل الإنجازات والمشاريع الكبرى</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            مشاريعنا الاستراتيجية والإنشائية
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            نوثّق مشاريعنا الرائدة بالشراكة مع كبرى شركات التطوير والمقاولات (بالم هيلز للتعمير وشركة UECC)، مجهزين أضخم أساطيل الحفر والردم والتسوية الميدانية.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* 🌟 FEATURED PROJECT SPOTLIGHT 🌟 */}
        {featuredProject && (
          <div className="mb-14 rounded-3xl overflow-hidden shadow-2xl scroll-reveal relative group cursor-pointer"
            onClick={() => setSelectedProject(featuredProject)}
          >
            {/* Full-width image */}
            <div className="relative h-[340px] sm:h-[460px] w-full bg-slate-950 overflow-hidden">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/10" />

              {/* Top badge */}
              <div className="absolute top-5 right-5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>{featuredProject.statusBadge}</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                  {featuredProject.typeAr}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-2xl">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold mb-3">
                      {featuredProject.regionAr}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight drop-shadow-lg">
                      {featuredProject.title}
                    </h3>
                    <p className="text-blue-300 font-semibold text-sm sm:text-lg mt-2">
                      {featuredProject.subtitle}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2">
                      المطور: <strong className="text-white">{featuredProject.developer}</strong>
                    </p>
                  </div>
                  {/* View gallery hint */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-sm font-bold border border-white/20 transition group-hover:bg-blue-600/80">
                      <Images size={16} />
                      <span>عرض الصور</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* 🔍 FILTER SECTION (3-Tier Filter Matching UECC Style) 🔍 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 mb-10 scroll-reveal">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Filter size={20} />
              </div>
              <div>
                <h3 className="font-black text-lg text-slate-900">تصفية وتصنيف المشاريع</h3>
                <p className="text-xs text-slate-500">اختر المنطقة، نوع المشروع، أو الحالة لعرض المشروعات المطابقة</p>
              </div>
            </div>

            {/* Counter Badge */}
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                عرض {filteredProjects.length} من أصل {companyData.projects.length} مشروع
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition"
                  title="إعادة ضبط الفلاتر"
                >
                  <RotateCcw size={13} />
                  <span>إعادة ضبط</span>
                </button>
              )}
            </div>
          </div>

          {/* 3 Dropdown Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Filter 1: Region */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                المنطقة الجغرافية (Region)
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-800 text-sm font-semibold transition outline-hidden cursor-pointer"
              >
                {regionOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 2: Project Type */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                نوع وتصنيف المشروع (Type)
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-800 text-sm font-semibold transition outline-hidden cursor-pointer"
              >
                {typeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 3: Status */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                حالة المشروع الميدانية (Status)
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-800 text-sm font-semibold transition outline-hidden cursor-pointer"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 🏗️ PROJECTS GRID (UECC Aesthetic Cards) 🏗️ */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <FolderKanban size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">لا توجد مشاريع مطابقة للاختيارات الحالية</h3>
            <p className="text-sm text-slate-500 mt-1">يرجى تغيير خيارات الفلتر أو الضغط على إعادة الضبط لعرض كافة المشاريع.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700 transition"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{ transitionDelay: `${((idx % 3) + 1) * 70}ms` }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col scroll-reveal"
              >
                {/* Image Container with Hover Scale & Overlays */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 right-3.5 left-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold rounded-lg shadow-sm">
                      {project.typeAr || project.type}
                    </span>

                    {/* Status Badge */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md ${
                      project.isOngoing 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-emerald-600 text-white'
                    }`}>
                      {project.isOngoing && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>}
                      <span>{project.statusBadge || (project.isOngoing ? 'جاري التنفيذ' : 'مكتمل')}</span>
                    </span>
                  </div>

                  {/* Quick inspect hover indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs sm:text-sm font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {project.hasVideo ? (
                        <>
                          <Play size={15} className="fill-blue-600 text-blue-600" />
                          <span>تشغيل الفيديو ومعاينة الصور</span>
                        </>
                      ) : (
                        <>
                          <Images size={16} className="text-blue-600" />
                          <span>معاينة ألبوم الصور ({project.gallery?.length || 1})</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Project Title and Location on bottom of image */}
                  <div className="absolute bottom-3.5 right-3.5 left-3.5 text-white pointer-events-none">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="px-2 py-0.5 rounded-md bg-blue-600/90 text-white text-[10px] font-bold">
                        {project.regionAr || project.region}
                      </span>
                      {project.englishTitle && (
                        <span className="text-[11px] text-slate-300 font-mono">
                          {project.englishTitle}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold drop-shadow-md group-hover:text-blue-300 transition line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-200 mt-1">
                      <MapPin size={13} className="text-amber-400 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body Snippet */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {project.subtitle || project.description}
                  </p>


                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for project details with interactive carousel */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
