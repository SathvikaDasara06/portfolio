"use client";

import React, { useEffect, useRef, useState } from "react";
import { researchStats } from "@/data/stats";
import { FileCheck2, Cpu, TrendingDown, Award, ArrowUpRight } from "lucide-react";

export function StatsBento() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Trigger once when visible per requirements
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatIcon = (id: string) => {
    switch (id) {
      case "articles-processed":
        return <FileCheck2 className="w-5 h-5 text-[#38bdf8]" />;
      case "metadata-records":
        return <Cpu className="w-5 h-5 text-[#8b5cf6]" />;
      case "effort-reduction":
        return <TrendingDown className="w-5 h-5 text-[#2dd4bf]" />;
      case "sih-finalist":
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <ArrowUpRight className="w-5 h-5 text-[#38bdf8]" />;
    }
  };

  return (
    <section id="stats" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
              Research Impact & Quantifiable Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Measurable Engineering Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Direct outcomes from academic research fellowships, national hackathons, and scientific computing workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {researchStats.map((stat) => (
            <div
              key={stat.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getStatIcon(stat.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {stat.context}
                  </span>
                </div>

                {/* Animated Counter Number */}
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono flex items-baseline">
                    {stat.prefix && <span className="text-2xl text-slate-400 mr-1">{stat.prefix}</span>}
                    <AnimatedNumber value={stat.value} trigger={inView} />
                    <span className="text-3xl text-[#38bdf8] ml-0.5">{stat.suffix}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200 font-sans pt-2">
                    {stat.label}
                  </h3>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400 leading-relaxed font-sans">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Single-trigger smooth animated counter
function AnimatedNumber({ value, trigger }: { value: number; trigger: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = value;
    const duration = 1600; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      const current = Math.floor(easeProgress * (end - start) + start);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(animate);
  }, [value, trigger]);

  return <span>{displayValue.toLocaleString()}</span>;
}
