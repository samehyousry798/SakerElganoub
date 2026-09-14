import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { companyData } from './data/companyData';
import './App.css';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Initial website load chic animation (يعمل تلقائياً عند فتح الموقع لأول مرة)
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    targetTitle: 'شركة صقر الجنوب للمقاولات العامة (SGC)',
    targetId: null,
  });

  const sectionTitles = {
    '#hero': 'الصفحة الرئيسية | صقر الجنوب',
    '#about': 'من نحن | ريادة وخبرات المقاولات',
    '#services': 'خدمات الحفر والردم والإنشائيات',
    '#projects': 'مشاريعنا وسابقة الأعمال الكبرى',
    '#stats': 'أرقامنا وإحصائيات التنفيذ',
    '#partners': 'شركاء النجاح والجهات المعتمدة',
    '#contact': 'طلب مقايسة والتواصل المباشر',
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intercept all hash anchor clicks to provide instant jumping with chic loading transition
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;

      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      // Stop default smooth scrolling so the page doesn't scroll through everything
      e.preventDefault();

      const title = sectionTitles[href] || anchor.innerText.trim() || 'جاري الانتقال...';

      setLoadingState({
        isLoading: true,
        targetTitle: title,
        targetId: href,
      });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleLoadingComplete = () => {
    if (loadingState.targetId) {
      const targetEl = document.querySelector(loadingState.targetId);
      if (targetEl) {
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (loadingState.targetId === '#hero' ? 0 : headerOffset);

        // Instant jump behind the loading screen
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'instant'
        });

        history.pushState(null, null, loadingState.targetId);
      }
    }
    // Fade out loading
    setLoadingState(prev => ({ ...prev, isLoading: false }));
  };

  const scrollToTop = () => {
    setLoadingState({
      isLoading: true,
      targetTitle: 'العودة لأعلى الصفحة',
      targetId: '#hero'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white relative">
      {/* Chic Loading Screen on Section Transitions */}
      <PageLoader 
        isLoading={loadingState.isLoading}
        targetTitle={loadingState.targetTitle}
        onComplete={handleLoadingComplete}
      />

      {/* Top Header / Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Projects Showcase Section */}
        <Projects />

        {/* 5. Numbers & Stats Section */}
        <Stats />

        {/* 6. Partners & Clients Section */}
        <Partners />

        {/* 7. Contact Us Section with Map & Form */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
        {/* WhatsApp direct floating button */}
        <a
          href={`https://wa.me/${companyData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all group relative"
        >
          <MessageSquare size={26} />
          {/* Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-md">
            تواصل معنا عبر واتساب
          </span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="العودة لأعلى الصفحة"
            className="w-11 h-11 rounded-full bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 border border-blue-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all animate-fade-in hover:scale-105 active:scale-95"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
