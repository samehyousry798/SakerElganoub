import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, Mail } from 'lucide-react';
import './App.css';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.is-revealed)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial pass
    observeAll();

    // Observe dynamically rendered or updated items
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white relative">
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

        {/* 5. Partners & Clients Section */}
        <Partners />

        {/* 7. Contact Us Section with Map & Form */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
        {/* Contact direct floating button */}
        <a
          href="#contact"
          aria-label="تواصل معنا"
          className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-blue-600/40 hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/20"
        >
          <Mail size={22} />
          {/* Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-md">
            تواصل معنا مباشرة
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
