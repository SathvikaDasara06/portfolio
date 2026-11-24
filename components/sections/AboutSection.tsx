"use client";

import React from "react";
import { profileConfig } from "@/data/profile";
import { Database, Binary, Network, Sparkles, CheckCircle, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-white/10">
          <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
            Personal Narrative & Identity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            About Sathvika Dasara
          </h2>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Narrative Column (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            <p className="text-xl sm:text-2xl font-normal text-slate-100 font-sans leading-snug">
              I am an interdisciplinary technology student with a strong interest in data analytics,
              database systems, artificial intelligence, and software development.
            </p>

            <p>
              My academic journey combines Biotechnology at{" "}
              <strong className="text-white font-semibold">NIT Durgapur</strong> with Data Science at{" "}
              <strong className="text-white font-semibold">IIT Madras</strong>, allowing me to approach
              technical problems from both scientific and computational perspectives.
            </p>

            <p>
              My research experience at{" "}
              <strong className="text-white font-semibold">IIT Bombay</strong> introduced me to large-scale
              biomedical data processing, automated workflows, metadata analysis, and reproducible
              computational systems.
            </p>

            <p>
              I enjoy working with complex datasets, designing structured databases, developing
              intelligent applications, and building software that solves meaningful problems.
            </p>

            {/* Core Values / Principles */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-slate-300">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[#38bdf8] font-semibold text-xs flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  REPRODUCIBILITY
                </div>
                <div className="text-xs text-slate-400">
                  Automated pipelines that produce validated, auditable outputs.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[#8b5cf6] font-semibold text-xs flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  STRUCTURAL RIGOR
                </div>
                <div className="text-xs text-slate-400">
                  Clean relational database design over ad-hoc data storage.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Intersection Artifact (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 dark:border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  INTERSECTION MODEL
                </span>
                <span className="text-xs font-mono text-[#38bdf8]">4 CORE PILLARS</span>
              </div>

              {/* Four Intersecting Pillars */}
              <div className="grid grid-cols-2 gap-4">
                {/* Pillar 1: Data */}
                <div className="p-4 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 space-y-2 group hover:scale-[1.02] transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8]">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-white font-sans">Data Systems</h3>
                  <p className="text-xs text-slate-400 leading-tight">
                    SQL, PostgreSQL, Pandas ETL, validation & warehouse modeling.
                  </p>
                </div>

                {/* Pillar 2: Engineering */}
                <div className="p-4 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 space-y-2 group hover:scale-[1.02] transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6]">
                    <Binary className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-white font-sans">Software Eng</h3>
                  <p className="text-xs text-slate-400 leading-tight">
                    Django, Flask, Go, Redis, Docker, and REST APIs.
                  </p>
                </div>

                {/* Pillar 3: AI & ML */}
                <div className="p-4 rounded-2xl bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 space-y-2 group hover:scale-[1.02] transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-[#2dd4bf]/20 flex items-center justify-center text-[#2dd4bf]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-white font-sans">Artificial Intel</h3>
                  <p className="text-xs text-slate-400 leading-tight">
                    LLM integration, PyTorch, Scikit-learn, CNN-RNN audio models.
                  </p>
                </div>

                {/* Pillar 4: Scientific Research */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 group hover:scale-[1.02] transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-white font-sans">Scientific Res</h3>
                  <p className="text-xs text-slate-400 leading-tight">
                    Biotech, eDNA biodiversity, bioinformatics & literature mining.
                  </p>
                </div>
              </div>

              {/* Center Synthesis Point */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                <span className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                  The Synthesis
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Combining biological domain understanding with data engineering precision to develop dependable real-world systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
