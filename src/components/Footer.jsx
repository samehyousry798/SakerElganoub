import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowLeft,
  ExternalLink 
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer() {
  const quickLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'عن صقر الجنوب', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'شركاؤنا', href: '#partners' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4 scroll-reveal">
            <div className="flex items-center gap-3.5">
              <img 
                src="/logo-white.png" 
                alt="لوجو شركة صقر الجنوب للمقاولات SGC" 
                className="h-12 sm:h-13 w-auto object-contain drop-shadow-sm" 
              />
              <div className="border-r border-slate-800 pr-3 mr-1">
                <span className="text-lg font-black text-white block leading-tight">
                  {companyData.name}
                </span>
                <span className="text-xs text-blue-400 font-bold">
                  شريك مثالي للنجاح
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {companyData.slogan}. خبرة عريقة في الإسكندرية والساحل الشمالي بمعدات ثقيلة متطورة وطواقم هندسية معتمدة.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="لينكد إن"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.01-3.36 1.68 1.68 0 0 0 .01 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>
              <a
                href={companyData.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="فيسبوك"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>
              <a
                href={companyData.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="انستجرام"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={companyData.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="تويتر أو إكس"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4 scroll-reveal scroll-delay-100">
            <h4 className="text-base font-bold text-white relative inline-block">
              روابط الموقع السريعة
              <span className="block w-8 h-1 bg-blue-500 rounded-full mt-1.5" />
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition flex items-center gap-1.5"
                  >
                    <ArrowLeft size={13} className="text-blue-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list (2 cols) */}
          <div className="lg:col-span-2 space-y-4 scroll-reveal scroll-delay-200">
            <h4 className="text-base font-bold text-white relative inline-block">
              خدمات التربة والإنشاءات
              <span className="block w-8 h-1 bg-blue-500 rounded-full mt-1.5" />
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>أعمال الحفر ونقل الأتربة</li>
              <li>الردم والدك الميكانيكي</li>
              <li>تجهيز وتمهيد المواقع</li>
              <li>الإنشائيات والخرسانات</li>
              <li>أسطول المعدات الثقيلة</li>
            </ul>
          </div>

          {/* Contact summary (3 cols) */}
          <div className="lg:col-span-3 space-y-4 scroll-reveal scroll-delay-300">
            <h4 className="text-base font-bold text-white relative inline-block">
              مقر إدارة العمليات
              <span className="block w-8 h-1 bg-blue-500 rounded-full mt-1.5" />
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{companyData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-blue-500 flex-shrink-0" />
                <span dir="ltr">{companyData.contact.mobile}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                <span>{companyData.contact.email}</span>
              </div>
              <a
                href={companyData.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold mt-1"
              >
                <span>موقع المقر على Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {companyData.fullName} ({companyData.englishName})
          </p>
          <div className="flex items-center gap-4">
            <span>المقر: قطاع الساحل الشمالي - الإسكندرية</span>
            <span>•</span>
            <span>سجل تجاري وبطاقة ضريبية معتمدة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
