"use client";

import React from "react";
import { researchItems } from "@/data/research";
import { FlaskConical, Dna, FileSpreadsheet, Activity, CheckCircle2, ChevronRight, Binary } from "lucide-react";

export function ResearchSection() {
  const getResearchIcon = (type: string) => {
    switch (type) {
      case "pipeline":
        return <FileSpreadsheet className="w-5 h-5 text-[#38bdf8]" />;
      case "edna":
        return <Dna className="w-5 h-5 text-[#2dd4bf]" />;
      case "speech":
        return <Activity className="w-5 h-5 text-[#8b5cf6]" />;
      case "sequence":
        return <Binary className="w-5 h-5 text-amber-400" />;
      default:
        return <FlaskConical className="w-5 h-5 text-[#38bdf8]" />;
    }
  };

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
              Computational & Scientific Inquiries
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Research & Scientific Computing
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Biomedical literature engineering, marine environmental DNA genomics, and computational neurodegenerative diagnostics.
          </p>
        </div>

        {/* Research Items Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
          {researchItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {getResearchIcon(item.visualType)}
                    </div>
                    <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                      {item.domain}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-colors font-sans">
                  {item.title}
                </h3>

                {/* Institution & Advisor */}
                <div className="text-xs font-mono text-slate-300">
                  <span className="text-white font-semibold">{item.institution}</span>
                  {item.leadOrGuide && <span> · {item.leadOrGuide}</span>}
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {item.summary}
                </p>

                {/* Methodology Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Methodological Approach
                  </div>
                  <div className="space-y-1.5">
                    {item.methodology.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-[#38bdf8] font-mono mt-0.5">•</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scientific Impact */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-xs">
                  <span className="font-mono text-[#2dd4bf] font-semibold uppercase tracking-wider text-[10px]">
                    Outcome / Scientific Impact
                  </span>
                  <p className="text-slate-300 font-sans leading-relaxed">
                    {item.scientificImpact}
                  </p>
                </div>
              </div>

              {/* Keywords Tag Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {item.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 text-slate-400 border border-white/5"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
