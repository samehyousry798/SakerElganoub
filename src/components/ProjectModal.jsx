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
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                </div>
              ))}

              {/* Caption & Slide Counter Overlay */}
              <div className="absolute bottom-4 right-4 left-4 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 pointer-events-none">
                <div className="max-w-xl">
                  {gallery[currentSlide]?.caption && (
                    <div className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/10 text-white text-xs sm:text-sm font-medium shadow-md">
                      {gallery[currentSlide].caption}
                    </div>
                  )}
                  <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Counter indicator */}
                {totalSlides > 1 && (
                  <div className="px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/15">
                    {currentSlide + 1} / {totalSlides}
                  </div>
                )}
              </div>

              {/* Carousel Arrows (If multiple slides) */}
              {totalSlides > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/15 shadow-lg hover:scale-105"
                    aria-label="الصورة السابقة"
                  >
                    <ChevronRight size={22} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/15 shadow-lg hover:scale-105"
                    aria-label="الصورة التالية"
                  >
                    <ChevronLeft size={22} />
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
                      className={`h-2 rounded-full transition-all ${
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
        {/* Developer Info Strip */}
        {project.developer && (
          <div className="px-5 py-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600 bg-slate-50">
            <Building size={14} className="text-blue-600 flex-shrink-0" />
            <span>المطور: <strong className="text-slate-900">{project.developer}</strong></span>
          </div>
        )}

      </div>
    </div>
  );
}
