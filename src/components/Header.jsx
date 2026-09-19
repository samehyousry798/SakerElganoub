import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ArrowLeft, 
  MapPin
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'شركاؤنا', href: '#partners' },
  ];

  // Instant (no animation) scroll to section
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Bar (Contact Information & Location) */}
      <div className={`bg-[#0A2540] text-white text-xs transition-all duration-300 hidden md:block ${isScrolled ? 'py-1 opacity-95' : 'py-2.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={companyData.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-200 hover:text-white transition"
              title="موقع المقر على خرائط جوجل"
            >
              <MapPin size={13} className="text-amber-400" />
              <span>مقر إدارة العمليات: شاطئ النخيل (أكتوبر) شارع 33/4 - الإسكندرية</span>
            </a>
            <a 
              href={`mailto:${companyData.contact.email}`} 
              className="flex items-center gap-1.5 hover:text-blue-200 transition"
            >
              <Mail size={13} className="text-blue-300" />
              <span>{companyData.contact.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-blue-200">
              <Clock size={13} className="text-blue-300" />
              <span>{companyData.contact.workingHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100 py-2' 
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Enhanced Brand Logo Presentation */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3.5 group">
            {/* Real SGC Brand Logo with Perfect Transparency & Scaling */}
            <img 
              src="/logo.png" 
              alt="شعار شركة صقر الجنوب للمقاولات SGC" 
              className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs"
            />
            
            {/* Divider and Arabic Identity */}
            <div className="hidden sm:block w-px h-10 bg-slate-200" />

            <div className="hidden sm:flex flex-col text-right">
              <span className="text-base sm:text-lg font-black tracking-tight text-[#0A2540] group-hover:text-blue-700 transition leading-tight">
                صقر الجنوب للمقاولات
              </span>
              <span className="text-[11px] text-blue-600 font-bold tracking-wide">
                شريك مثالي للنجاح
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 transition-all"
            >
              <span>تواصل معنا</span>
              <ArrowLeft size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
            aria-label="فتح القائمة"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-blue-100 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fade-in">
            {/* Mobile Header Brand Display */}
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <img 
                src="/logo.png" 
                alt="شعار صقر الجنوب SGC" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm font-black text-[#0A2540]">
                  صقر الجنوب للمقاولات
                </span>
                <span className="text-[10px] text-blue-600 font-bold">
                  شريك مثالي للنجاح
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-center font-bold text-sm shadow-md transition"
              >
                تواصل معنا مباشرة
              </a>
              <a
                href={companyData.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-50 text-blue-800 text-center font-bold text-sm border border-blue-200 transition flex items-center justify-center gap-2"
              >
                <MapPin size={16} className="text-amber-500" />
                <span>مقر إدارة العمليات - قطاع الساحل الشمالي</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
