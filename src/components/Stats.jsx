import React, { useState, useEffect, useRef } from 'react';
import { Award, Briefcase, Users, ThumbsUp } from 'lucide-react';
import { companyData } from '../data/companyData';

function CounterItem({ targetValue, suffix, label, description, icon }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = targetValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetValue]);

  return (
    <div 
      ref={elementRef}
      className="p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center hover:bg-white/15 transition-all group"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-4xl sm:text-5xl font-black text-white mb-2 flex items-center justify-center" dir="ltr">
        <span>{suffix}</span>
        <span>{count}</span>
      </div>
      <h3 className="text-base sm:text-lg font-bold text-blue-100 mb-1">
        {label}
      </h3>
      <p className="text-xs sm:text-sm text-blue-200/80 max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function Stats() {
  const icons = [
    <Award size={28} className="text-white" />,
    <Briefcase size={28} className="text-white" />,
    <ThumbsUp size={28} className="text-white" />,
    <Users size={28} className="text-white" />,
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Decorative ambient patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-800/80 border border-blue-700 text-blue-200 text-xs sm:text-sm font-bold mb-3">
            أرقام وإنجازات موثقة
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            مسيرة حافلة بالنجاحات والأرقام التي تتحدث عن نفسها
          </h2>
          <div className="w-20 h-1 bg-blue-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.stats.map((item, idx) => (
            <CounterItem
              key={item.id}
              targetValue={item.value}
              suffix={item.suffix}
              label={item.label}
              description={item.description}
              icon={icons[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
