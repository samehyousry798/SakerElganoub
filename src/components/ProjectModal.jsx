import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Image as ImageIcon,
  Building,
  ShieldCheck,
  CheckCircle2,
  Tag
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallery = project?.gallery && project.gallery.length > 0 
    ? project.gallery 
    : project ? [{ src: project.image, caption: project.title }] : [];

  const totalSlides = gallery.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Reset slide when project changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

  // Keyboard navigation (Esc to close, Arrow keys for slides)
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        prevSlide();
      } else if (e.key === 'ArrowLeft') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, nextSlide, prevSlide]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition shadow-xl border border-white/20 hover:scale-105"
          aria-label="إغلاق النافذة"
        >
          <X size={20} />
        </button>

        {/* Media Viewer (Carousel) */}
        <div className="relative h-72 sm:h-[420px] w-full bg-slate-950 flex items-center justify-center overflow-hidden select-none">
          {/* Images Carousel */}
          <div className="relative w-full h-full">
            {/* Active Image */}
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                  idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img 
                  src={img.src} 
                  alt={img.caption || project.title}
                  className="w-full h-full object-contain bg-slate-950"
                  loading="lazy"
                />
                {/* Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />
              </div>
            ))}

            {/* Caption & Slide Counter Overlay */}
            <div className="absolute bottom-4 right-4 left-4 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 pointer-events-none">
              <div className="max-w-xl">
                {gallery[currentSlide]?.caption && (
                  <div className="inline-block px-3 py-1.5 bg-slate-900/85 backdrop-blur-md rounded-xl border border-white/15 text-white text-xs sm:text-sm font-medium shadow-lg">
                    {gallery[currentSlide].caption}
                  </div>
                )}
                <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow mt-1.5 flex items-center gap-2">
                  <span>{project.title}</span>
                  {project.englishTitle && (
                    <span className="text-xs text-blue-300/80 font-normal hidden sm:inline">
                      ({project.englishTitle})
                    </span>
                  )}
                </h3>
              </div>

              {/* Counter indicator */}
              {totalSlides > 1 && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/15 shadow-md">
                  <ImageIcon size={13} className="text-amber-400" />
                  <span>صورة {currentSlide + 1} من {totalSlides}</span>
                </div>
              )}
            </div>

            {/* Carousel Arrows (If multiple slides) */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/15 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRight size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/15 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="الصورة التالية"
                >
                  <ChevronLeft size={24} />
                </button>
              </>
            )}

            {/* Slide Indicators (Dots) */}
            {totalSlides > 1 && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide 
                        ? 'w-7 bg-amber-400' 
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`انتقال للصورة ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 🖼️ Thumbnails Navigation Bar (When multiple images exist) 🖼️ */}
        {totalSlides > 1 && (
          <div className="bg-slate-900 px-4 py-2.5 border-t border-slate-800/80 flex items-center gap-2.5 overflow-x-auto select-none">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  idx === currentSlide
                    ? 'border-amber-400 scale-105 shadow-lg shadow-amber-400/20 ring-2 ring-amber-400/40 opacity-100'
                    : 'border-white/15 opacity-50 hover:opacity-90 hover:border-white/40'
                }`}
                aria-label={`عرض الصورة ${idx + 1}`}
                title={img.caption || `صورة ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={`صورة مصغرة ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-0.5 right-1 px-1 py-0.2 bg-black/75 rounded text-[10px] font-mono text-white">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Project Details Strip Footer */}
        <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
          <div className="flex flex-wrap items-center gap-4">
            {project.developer && (
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <Building size={14} className="text-blue-600 flex-shrink-0" />
                <span>المطور: <strong className="text-slate-950">{project.developer}</strong></span>
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                <span>{project.location}</span>
              </div>
            )}
            {project.area && (
              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <Tag size={14} className="text-emerald-600 flex-shrink-0" />
                <span>{project.area}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.statusBadge && (
              <span className={`px-3 py-1 rounded-xl text-xs font-bold shadow-xs ${
                project.isOngoing 
                  ? 'bg-amber-100 text-amber-900 border border-amber-200/80' 
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-200/80'
              }`}>
                {project.statusBadge}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
